/*
 * verify_solutions.workflow.js  —  TEST-SET PREP: audit + fix reference solutions
 * ----------------------------------------------------------------------------
 * Reads a problems file (statements + reference solutions), and for each problem WITH a
 * solution, adversarially verifies it: is the APPROACH correct and the proof essentially
 * complete? Classify ok | minor_gap | major_gap | wrong; fix fixable gaps; flag the rest.
 *
 * Why: the test cues are derived from these solutions. A cue is a high-level *situation*
 * trigger, so minor execution gaps don't change it — but a WRONG approach yields a WRONG
 * cue. So this pass prioritizes catching wrong/bogus solutions and completing fixable ones,
 * producing a corrected solutions file + an auditable gap report.
 *
 * PLUMBING: each verifier WRITES its own verdict (incl. a fixed solution when it fixes one)
 * to output/tmp/sol_audit/<id>.json; merge_solution_audit.py builds the corrected file +
 * the gap report. JS orchestrates and carries only small control data.
 *   INPUT : data/test/test_problems.json  (problem_id, problem, reference_answer, solutions[])
 *   OUTPUT: data/test/test_problems_fixed.json   (solutions replaced by fixes where made)
 *           data/test/gap_report.md               (per-problem verdict + what was fixed)
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'verify-solutions',
  description: 'Test-set prep: adversarially verify + fix the reference solutions of the hard test problems -> test_problems_fixed.json + gap_report.md',
  phases: [
    { title: 'Verify', detail: 'per problem: classify ok/minor/major/wrong, fix fixable gaps, flag the rest' },
    { title: 'Merge', detail: 'merge_solution_audit.py -> test_problems_fixed.json + gap_report.md' },
  ],
};

const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot';
const SCRIPTS_DIR = `${ROOT}/code/scripts`;
const INPUT = `${ROOT}/data/test/test_problems.json`;
const TMP_DIR = `${ROOT}/output/tmp`;
const AUDIT_DIR = `${TMP_DIR}/sol_audit`;

// ---- Setup — scratch dir + the ids that have a solution to audit ------------
phase('Verify');
const SETUP_SCHEMA = { type: 'object', properties: { ids: { type: 'array', items: { type: 'string' } } }, required: ['ids'] };
const setup = await agent(
  `Run EXACTLY:\nrm -rf ${AUDIT_DIR} && mkdir -p ${AUDIT_DIR}\n` +
  `python3 -c "import json; d=json.load(open('${INPUT}')); print(json.dumps({'ids':[p['problem_id'] for p in d if p.get('solutions')]}))"\n` +
  `Return the JSON printed (key ids), unaltered.`,
  { label: 'setup', phase: 'Verify', schema: SETUP_SCHEMA }
);
const ids = setup?.ids || [];
if (!ids.length) throw new Error(`No problems with solutions in ${INPUT}.`);
log(`▶ VERIFY: auditing ${ids.length} reference solutions...`);

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    problem_id: { type: 'string' },
    verdict: { type: 'string', enum: ['ok', 'minor_gap', 'major_gap', 'wrong'] },
    approach_sound: { type: 'boolean', description: 'is the overall approach/strategy correct (even if details are gappy)?' },
    gap_note: { type: 'string', description: 'what is missing/wrong, specifically; "none" if ok' },
    fixed: { type: 'boolean', description: 'true if you wrote a corrected/completed solution into fixed_solution' },
    fixed_solution: { type: 'string', description: 'the corrected full solution if fixed; else ""' },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
  }, required: ['problem_id', 'verdict', 'approach_sound', 'gap_note', 'fixed', 'fixed_solution', 'confidence'],
};
const verify = (id) => agent(
  `You are an adversarial olympiad PROOF VERIFIER. Read this problem's statement, reference answer, and reference solution(s):
python3 -c "import json; d={p['problem_id']:p for p in json.load(open('${INPUT}'))}; p=d['${id}']; print('PROBLEM\\n'+p['problem']); print('\\nREFERENCE ANSWER:', p.get('reference_answer')); [print('\\n--- reference solution',i+1,'---\\n'+s) for i,s in enumerate(p['solutions'])]"

Judge the reference solution(s) — if there are several, judge the BEST one:
- verdict: ok (correct + essentially complete) | minor_gap (correct approach, a step under-justified or a small case skipped) | major_gap (correct approach but a load-bearing step is missing/hand-waved) | wrong (the approach is incorrect or the answer is wrong).
- approach_sound: is the overall STRATEGY correct, even if details are gappy? (This is what a cue depends on.)
- If verdict is minor_gap or major_gap AND you can fix it rigorously, WRITE a corrected, complete solution into fixed_solution (keep the original approach; fill the gap; do not pad). Set fixed=true. If ok, fixed=false, fixed_solution="". If wrong: if you are confident of the correct solution, write it in fixed_solution (fixed=true) and explain in gap_note; otherwise fixed=false and flag in gap_note.
- gap_note: be specific (which step, why). confidence: your confidence in the verdict/fix.
Do NOT rubber-stamp. A real olympiad proof must settle every case and justify every non-obvious step.

BEFORE returning, WRITE your verdict object (all fields) to ${AUDIT_DIR}/${id}.json using the Write tool, then return the same object.`,
  { label: `verify:${id}`, phase: 'Verify', schema: VERIFY_SCHEMA }
);

const results = await parallel(ids.map((id) => () => verify(id)));
const ok = results.filter(Boolean);
if (ok.length < ids.length) {
  const got = new Set(ok.map((r) => r.problem_id));
  log(`⚠️  ${ids.length - ok.length}/${ids.length} verifiers FAILED: ${ids.filter((i) => !got.has(i)).join(', ')}`);
}
const tally = ok.reduce((m, r) => { m[r.verdict] = (m[r.verdict] || 0) + 1; return m; }, {});
const fixedN = ok.filter((r) => r.fixed).length;
const unsound = ok.filter((r) => !r.approach_sound).map((r) => r.problem_id);
log(`Verify: ${JSON.stringify(tally)}; fixed ${fixedN}; approach-unsound (cue-risk): ${unsound.length ? unsound.join(', ') : 'none'}`);

// ---- Merge — committed python builds the corrected file + the gap report ----
phase('Merge');
const MERGE_SCHEMA = { type: 'object', properties: { problems: { type: 'number' }, fixed: { type: 'number' } }, required: ['problems', 'fixed'] };
const merged = await agent(
  `Run EXACTLY, then return the JSON it prints (keys problems, fixed):\n` +
  `python3 ${SCRIPTS_DIR}/merge_solution_audit.py`,
  { label: 'merge', phase: 'Merge', schema: MERGE_SCHEMA }
);
if (!merged?.problems) throw new Error(`merge_solution_audit.py produced ${merged?.problems} problems — audit scratch under ${AUDIT_DIR} was not merged.`);
log(`Merged: ${merged.problems} problems -> test_problems_fixed.json (${merged.fixed} solutions fixed) + gap_report.md`);

return { audited: ids.length, verdicts: tally, fixed: fixedN, approach_unsound: unsound, ...merged };
