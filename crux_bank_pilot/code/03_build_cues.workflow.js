/*
 * 03_build_cues.workflow.js  —  STAGE 3: build the CUE INDEX (recognition layer)
 * ----------------------------------------------------------------------------
 * Reads the validated cruxes from stage 1 (output/cruxes.json) and clusters them by
 * their RECOGNITION TRIGGER (cue) — the situation that tells a solver to reach for a
 * move. The output is indexed by cue, not by technique: cues recur ~17x more than
 * techniques across problems, so they are the unit a solver can match a NEW problem to.
 *
 * A cue is NOT extracted in stage 1 — it is DERIVED here from each crux's
 * (technique, how_used) + statement, exactly as the cues.md analysis was made. So this
 * stage leaves the technique pipeline (01/02) untouched; it only consumes its output.
 *
 * SCALE: one agent cannot hold all cruxes (1000 problems => ~3k cruxes). So we cluster
 * map-reduce style, seeded by a hand-cleaned registry:
 *   SEED  — output/cue_seeds.json: a small registry of clean, structural cues. It is a
 *           STARTING vocabulary, NOT a closed set — MAP may add new cues freely.
 *   MAP   — batch the cruxes; each batch (parallel, bounded) assigns every crux to a
 *           seed cue OR proposes a new short structural cue. No batch sees more than its
 *           slice, so this scales to any corpus.
 *   REDUCE— one agent reads the whole registry (seed cues + every proposed new cue) as
 *           SHORT strings (hundreds even at 3k cruxes => fits one context) and merges
 *           same-trigger cues across domains. This is where cross-cutting cues (e.g. a
 *           trigger spanning algebra + number_theory) get reunited.
 *   RENDER— python joins the canonical cues back to cruxes.json (for technique+how_used
 *           per exemplar) => output/cues.json + output/cues.md.
 *
 * PLUMBING RULE (same as 01/02): every agent WRITES ITS OWN WORK to a scratch file under
 * output/tmp/; committed python scripts do all collecting/merging/rendering; JS only
 * orchestrates and passes CONTROL data (short cue strings, ids), never bulk crux text —
 * the heavy technique/how_used/LaTeX stays in cruxes.json and is read by python at render.
 *   output/tmp/cue_assign/<batch>.json   (each MAP batch writes its assignments)
 *   output/tmp/cue_registry_raw.json     (collect_cues.py: every distinct cue + id)
 *   output/tmp/crux_to_cue.json          (collect_cues.py: crux-id -> cue-id)
 *   output/tmp/cue_merge_plan.json       (REDUCE agent: which cue-ids collapse)
 *   output/tmp/cues_final.json           (apply_cue_plan.py: canonical cue -> exemplars)
 *
 * STAGES
 *   1. Map    — assign each crux to a seed cue or a new one (batched, parallel)
 *   2. Reduce — consolidate the registry: merge same-trigger cues across domains
 *   3. Render — collect_cues.py + apply_cue_plan.py + render_cues.py
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'build-cues',
  description: 'Stage 3: cluster cruxes.json by recognition cue (seed -> map -> reduce) -> output/cues.json + output/cues.md',
  phases: [
    { title: 'Map', detail: 'batch cruxes; each assigns to a seed cue or proposes a new short structural cue' },
    { title: 'Reduce', detail: 'consolidate the registry: merge same-trigger cues across domains' },
    { title: 'Render', detail: 'collect_cues.py + apply_cue_plan.py + render_cues.py -> cues.json + cues.md' },
  ],
};

const BATCH_SIZE = 60;                              // cruxes per MAP agent (50-100; bounded per agent)
const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot';
const SCRIPTS_DIR = `${ROOT}/code/scripts`;
const INPUT = `${ROOT}/data/problems_full.json`;   // problems (read for statements during MAP)
const OUTPUT_DIR = `${ROOT}/output`;
const TMP_DIR = `${OUTPUT_DIR}/tmp`;
const CRUXES_IN = `${OUTPUT_DIR}/cruxes.json`;      // stage-1 output (cid = array index)
const SEEDS_IN = `${OUTPUT_DIR}/cue_seeds.json`;    // hand-cleaned seed registry
const ASSIGN_DIR = `${TMP_DIR}/cue_assign`;         // each MAP batch writes here
const MERGE_PLAN = `${TMP_DIR}/cue_merge_plan.json`; // REDUCE agent's consolidation plan

// A CUE is the RECOGNITION TRIGGER for a technique — the situation that says "reach for
// this kind of move." The index is keyed by cues, so genericness is the worst failure.
// Good/bad pairs beat stated rules. (Kept in this file: 01/02 are technique-only.)
const CUE_RUBRIC = `A CUE is the RECOGNITION TRIGGER for a technique: the feature of the problem that says "reach for this move." Write it SHORT and as a CONDITION, never as the move — state the structural pattern; never name the tool, construction, or answer. The bank is indexed by cues, so a generic cue is the worst failure.

THREE TESTS — every cue must pass all three:
(R) RECOGNIZABLE — can a solver who has NOT solved the problem tell, from the givens (or a concretely-stated reduction the solver has reached), that the cue applies? Not "after you have the idea".
(D) DISCRIMINATING — THE #1 FAILURE. The cue must pick out a REAL SITUATION, not a topic or a question-type. If it would fire on a dozen unrelated problems ("a functional equation", "find all n", "prove a quadrilateral has an incircle", "a polynomial equals a product"), it is TOO GENERIC. A valid cue groups only cruxes whose members a solver would OPEN with the same recognition. Short-and-structural is good; short-and-topical is the misfire.
(L) LEAK-FREE — the cue must not contain the TOOL/MOVE. Naming the OBJECT or GOAL that defines the situation is fine ("show a point lies on a given line"); naming the TOOL ("use Monge", "radical center", "weight by roots of unity", "LTE", "extremal principle", "AM-GM") is a leak.

The detail/accuracy lives in each exemplar's how_used, NOT in the cue text. Keep the cue the short shared trigger.

GOOD: "a relation holds for every index n, equating a fixed function of the n-th term to a product of a sliding block of the next consecutive terms (instances at n and n+1 overlap in all but their end factors)."
GOOD: "a finite family of positive integers bounded below, in which one designated member equals the average of several others from the same family."
BAD — TOO GENERIC: "find all n for which a configuration exists" / "prove a quadrilateral has an incircle".
BAD — LEAKS THE MOVE: "three circles with an incidence goal, so use Monge."`;

// ---- Setup — scratch dirs + load corpus size and the seed registry ----------
// JS holds only CONTROL data: the crux count (=> how many MAP batches) and the seed cues
// (short strings = the starting registry MAP assigns against). The heavy technique/
// how_used text stays in cruxes.json; MAP agents read their slice from it via python.
phase('Map');
const SETUP_SCHEMA = {
  type: 'object',
  properties: {
    total: { type: 'number' },
    seeds: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, cue: { type: 'string' } }, required: ['id', 'cue'] } },
  }, required: ['total', 'seeds'],
};
const setup = await agent(
  `Prepare this run's scratch dir and emit control data. Run EXACTLY:\n` +
  `rm -rf ${ASSIGN_DIR} && mkdir -p ${ASSIGN_DIR}\n` +
  `python3 -c "import json; a=json.load(open('${CRUXES_IN}')); s=json.load(open('${SEEDS_IN}')); print(json.dumps({'total':len(a),'seeds':[{'id':'S%d'%i,'cue':c['cue']} for i,c in enumerate(s)]}))"\n` +
  `Return the JSON the python printed (keys total, seeds), unaltered.`,
  { label: 'setup', phase: 'Map', schema: SETUP_SCHEMA }
);
const total = setup?.total || 0;
if (!total) throw new Error(`No cruxes in ${CRUXES_IN} — run 01_extract_cruxes.workflow.js first.`);
const seeds = setup.seeds || [];
if (!seeds.length) throw new Error(`No seeds in ${SEEDS_IN} — the seed registry is required (see cue_seeds.json).`);
log(`▶ MAP: ${total} cruxes, ${seeds.length} seed cues, ${Math.ceil(total / BATCH_SIZE)} batch(es) of ${BATCH_SIZE}...`);

// ---- MAP — assign each crux to a seed cue or propose a new one --------------
// Batches run in PARALLEL against the FROZEN seed registry (no batch sees another's new
// cues — that is fine; duplicate proposals are merged in REDUCE). cid = the crux's index
// in cruxes.json (stable for a given file). Each batch reads its slice via python (no bulk
// text through JS), then writes {cid, cue_id|new_cue} rows to its scratch file.
const ASSIGN_SCHEMA = {
  type: 'object',
  properties: {
    assignments: {
      type: 'array', items: {
        type: 'object', properties: {
          cid: { type: 'number' },
          cue_id: { type: 'string', description: 'a seed id (e.g. "S3") if this crux matches an existing cue, else "NEW"' },
          new_cue: { type: 'string', description: 'if cue_id="NEW": the short structural cue (see rubric); else ""' },
        }, required: ['cid', 'cue_id', 'new_cue']
      }
    }
  }, required: ['assignments'],
};
const readSlice = (lo, hi) =>
  `python3 -c "import json; a=json.load(open('${CRUXES_IN}'))[${lo}:${hi}]; [print('CID',${lo}+i,'| DOMAIN',c.get('domain'),'| SUBTOPIC',c.get('subtopic'),'\\nTECHNIQUE:',c['technique'],'\\nHOW_USED:',c['how_used'],'\\nPROBLEM_ID:',c['problem_id'],'\\n---') for i,c in enumerate(a)]"`;
const nBatches = Math.ceil(total / BATCH_SIZE);
const mapResults = await parallel(Array.from({ length: nBatches }, (_, bi) => () => {
  const lo = bi * BATCH_SIZE, hi = Math.min(lo + BATCH_SIZE, total);
  return agent(
    `You are a cue ASSIGNER. You are given a REGISTRY of recognition cues and a batch of cruxes (each = a technique + how it was used in a problem). For EACH crux, decide which cue's situation it belongs to: assign it to an existing registry cue if a solver would recognize the SAME situation, otherwise propose a new short structural cue.

THE REGISTRY (assign against these; they are a starting set, NOT a closed list — propose new cues whenever none fits):
${JSON.stringify(seeds, null, 2)}

Read your batch of cruxes (cid is the stable id to return):
${readSlice(lo, hi)}
You MAY read a problem's full statement if you need it to judge the trigger:
python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; print(d['<PROBLEM_ID>']['problem'])"

For EACH crux return {cid, cue_id, new_cue}:
- If it matches a registry cue: cue_id = that id (e.g. "S7"), new_cue = "".
- If none fits: cue_id = "NEW", new_cue = a SHORT STRUCTURAL cue (apply the rubric). Reuse the SAME new_cue wording for two cruxes in this batch that share a trigger.
Do NOT force a crux into a registry cue whose situation it does not truly share — a wrong match is worse than a new cue (duplicates get merged later). Be strict on the (D) test: never assign by topic ("both geometry", "both functional equations"); assign by shared opening recognition.

${CUE_RUBRIC}

BEFORE returning, WRITE your assignments array verbatim to ${ASSIGN_DIR}/${bi}.json using the Write tool (form {"assignments":[...]}), then return the same {assignments}.`,
    { label: `map:${bi}`, phase: 'Map', schema: ASSIGN_SCHEMA }
  );
}));
const okMap = mapResults.filter(Boolean);
if (okMap.length < nBatches) {
  log(`⚠️  ${nBatches - okMap.length}/${nBatches} MAP batches FAILED — their cruxes will be missing a cue assignment.`);
}
const assigned = okMap.reduce((n, r) => n + (r.assignments?.length || 0), 0);
const proposedNew = okMap.reduce((n, r) => n + (r.assignments?.filter((a) => a.cue_id === 'NEW').length || 0), 0);
log(`Map: ${assigned}/${total} cruxes assigned (${proposedNew} proposed a new cue) across ${okMap.length}/${nBatches} batches`);

// ---- collect — python turns the per-batch scratch into one raw registry -----
// collect_cues.py reads cue_seeds.json + tmp/cue_assign/*.json => tmp/cue_registry_raw.json
// (every distinct cue, seed + new, with a stable id) and tmp/crux_to_cue.json (cid -> cue-id).
// Deterministic; no reasoning. It also prints the registry size (control for REDUCE).
const COLLECT_SCHEMA = { type: 'object', properties: { cues: { type: 'number' }, cruxes: { type: 'number' }, batches: { type: 'number' } }, required: ['cues', 'cruxes', 'batches'] };
const collected = await agent(
  `Run EXACTLY this Bash command, then return the JSON it prints (keys cues, cruxes, batches):\n` +
  `python3 ${SCRIPTS_DIR}/collect_cues.py`,
  { label: 'collect-cues', phase: 'Map', schema: COLLECT_SCHEMA }
);
// Guard on ASSIGNED CRUXES, not registry size: the seed cues are always present, so
// `cues` >= seed count even when ZERO cruxes were collected — only `cruxes` detects a
// total MAP failure (every batch errored or wrote nothing).
if (!collected?.cruxes) throw new Error(`collect_cues.py assigned ${collected?.cruxes} cruxes (registry ${collected?.cues}) — MAP scratch under ${ASSIGN_DIR} was not collected; check the MAP batches' Write step.`);
// Reconcile returns-vs-files: a batch that returned a valid schema but whose Write silently
// failed leaves no scratch file, so its cruxes vanish while the run still looks healthy.
if (collected.batches < okMap.length) log(`⚠️  collect read ${collected.batches} batch file(s) but ${okMap.length}/${nBatches} MAP batch(es) returned — ${okMap.length - collected.batches} batch's assignments were NOT written (silent loss).`);
log(`Collected registry: ${collected.cues} distinct cues over ${collected.cruxes} assigned cruxes (${collected.batches} batch file(s))`);

// ---- REDUCE — one agent consolidates the registry (merge same-trigger cues) --
// The registry is SHORT cue strings only (no LaTeX), so even at scale it fits one context.
// The reducer MERGES cues that are the same trigger (incl. ACROSS domains — this is where a
// cross-cutting cue split across batches gets reunited) and FLAGS any cue that is still
// topical/too-generic (a residual misfire for review). It does NOT see crux text — only the
// cue strings — so it cannot reassign cruxes; it only collapses + flags. A python script
// applies the plan.
phase('Reduce');
const readRegistry = `python3 -c "import json; r=json.load(open('${TMP_DIR}/cue_registry_raw.json')); print(json.dumps([{'id':c['id'],'cue':c['cue'],'kind':c['kind']} for c in r],indent=2))"`;
const REDUCE_SCHEMA = {
  type: 'object',
  properties: {
    merges: {
      type: 'array', description: 'each group of 2+ cue ids that are the SAME trigger, with the unified cue text', items: {
        type: 'object', properties: {
          ids: { type: 'array', items: { type: 'string' }, description: 'the cue ids to collapse into one' },
          cue: { type: 'string', description: 'unified cue (keep the sharpest member nearly verbatim; do not summarize into something vaguer)' },
        }, required: ['ids', 'cue']
      }
    },
    flags: {
      type: 'array', description: 'cue ids that are still topical / too-generic (a misfire to review); empty if none', items: {
        type: 'object', properties: { id: { type: 'string' }, reason: { type: 'string' } }, required: ['id', 'reason']
      }
    },
  }, required: ['merges', 'flags'],
};
log(`▶ REDUCE: consolidating ${collected.cues} cues (merge same-trigger across domains, flag residual topical cues)...`);
const reduced = await agent(
  `You are the cue REGISTRY CONSOLIDATOR. The MAP step ran batches in parallel, so the same trigger may have been written as two or three near-duplicate cues (and a cross-cutting trigger may sit in different domains). Read the whole registry — these are SHORT cue strings, the recognition triggers:
${readRegistry}

TWO jobs:
1. MERGE cues that are the SAME TRIGGER — a solver on a new problem would reach for them off the SAME recognition. Merge ACROSS DOMAINS (a trigger that recurs in algebra and number_theory is ONE cue). The test: same situation, not same vocabulary. When unsure, keep separate. When you merge, KEEP THE SHARPEST member's wording nearly verbatim — do NOT replace a group with a vaguer umbrella sentence (that re-introduces genericness). An id appears in at most one merge.
2. FLAG any cue that is still TOPICAL or TOO-GENERIC — it names a topic/question-type, not a structural trigger (would fire on a dozen unrelated problems). Do not merge these into something broader; flag them with the reason, for later splitting.

${CUE_RUBRIC}

Return {merges:[{ids,cue}], flags:[{id,reason}]}. If nothing merges, return empty merges — but look hard for the cross-batch / cross-domain duplicate, it is the most common real merge.`,
  { label: 'reduce', phase: 'Reduce', schema: REDUCE_SCHEMA }
);
if (!reduced) throw new Error(`REDUCE failed — no consolidation plan produced.`);
const mergePlan = { merges: reduced.merges || [], flags: reduced.flags || [] };
const planWriter = await agent(
  `Write this exact JSON to ${MERGE_PLAN} using the Write tool (the cue consolidation plan). Write verbatim, then return {"ok": true}.\n\n${JSON.stringify(mergePlan, null, 2)}`,
  { label: 'write-cue-plan', phase: 'Reduce', schema: { type: 'object', properties: { ok: { type: 'boolean' } }, required: ['ok'] } }
);
if (!planWriter?.ok) throw new Error(`Cue-plan write FAILED (${MERGE_PLAN} not confirmed) — apply_cue_plan.py would read a stale/missing plan.`);
log(`Reduce: ${mergePlan.merges.length} merge group(s), ${mergePlan.flags.length} flagged (topical) cue(s)`);

// ---- RENDER — apply the plan, then build the cue index ----------------------
// apply_cue_plan.py reads registry_raw + crux_to_cue + the merge plan => tmp/cues_final.json
// (canonical cue -> exemplar crux ids). render_cues.py joins that to cruxes.json (for each
// exemplar's technique + how_used) => output/cues.json + output/cues.md. Agent only runs them.
phase('Render');
log(`▶ RENDER: apply_cue_plan.py + render_cues.py -> output/cues.json + output/cues.md...`);
const renderCmds = [
  `python3 ${SCRIPTS_DIR}/apply_cue_plan.py`,
  `python3 ${SCRIPTS_DIR}/render_cues.py`,
  `python3 -c "import json; print('CUES', len(json.load(open('${OUTPUT_DIR}/cues.json'))))"`,
].join('\n');
const rendered = await agent(
  `Run EXACTLY these Bash commands IN ORDER, one block. apply_cue_plan.py applies the consolidation plan (=> output/tmp/cues_final.json), render_cues.py builds output/cues.json + output/cues.md, the last prints CUES <n>. Do NOT delete output/tmp. Run every command; report the printed count. Return {"cues": <CUES n>}.\n\n${renderCmds}`,
  { label: 'render-cues', phase: 'Render', schema: { type: 'object', properties: { cues: { type: 'number' } }, required: ['cues'] } }
);
if (!rendered || rendered.cues === undefined) throw new Error(`Render FAILED: did not produce output/cues.json.`);
log(`Cue index built: ${rendered.cues} cues -> output/cues.json + output/cues.md`);

return {
  cruxes_in: total,
  seed_cues: seeds.length,
  registry_cues: collected.cues,
  merges: mergePlan.merges.length,
  flagged_topical: mergePlan.flags.length,
  final_cues: rendered.cues,
  cues_json: `${OUTPUT_DIR}/cues.json`,
  cues_md: `${OUTPUT_DIR}/cues.md`,
};
