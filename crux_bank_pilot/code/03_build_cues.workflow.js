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
const CUE_RUBRIC = `A CUE is the RECOGNITION TRIGGER for a technique: the feature of the problem that says "reach for this move." Write it as a SHORT structural CONDITION — never the move, tool, construction, or answer.

BREVITY IS A HARD RULE: aim for <=12 words, ONE clause. The cue is a SKIM handle, not a description — keep it as terse as the original "FORALLN" style. Discriminate by naming the precise structural NOUN (the configuration / quantity / relation), NOT by appending qualifier clauses. Forbidden: trailing "...which would not fire on..." meta-clauses, hedging slashes piling synonyms, parentheticals listing alternatives, and re-explaining the same condition twice. Pick the sharpest phrasing and stop. (All problem-specific detail lives in each exemplar's how_used, NEVER in the cue.)

THREE TESTS — every cue must pass all three:
(R) RECOGNIZABLE — can a solver who has NOT solved the problem tell, from the givens (or a concretely-stated reduction), that the cue applies? Not "after you have the idea".
(D) DISCRIMINATING — THE #1 FAILURE. The cue must pick a REAL structural situation, not a topic or question-type ("a functional equation", "find all n", "prove a quadrilateral has an incircle"). Fix genericness by naming the RIGHT structural noun, NOT by adding length — short and specific beats long and specific; long is never the way to be specific.
(L) LEAK-FREE — name the situation/object/goal, never the TOOL ("use Monge", "radical center", "weight by roots of unity", "LTE", "extremal principle", "AM-GM").

GOOD (short + specific): "a for-all-n relation built from a running sum or sliding-window product"
GOOD: "a finite family of positive integers where one equals the average of several others"
GOOD: "three circles with pairwise similitude centers; a fourth center forced onto a line"
BAD — VERBOSE (the first GOOD, bloated — do NOT do this): "a relation holds for every index n, equating a fixed function of the n-th term to a product of a sliding block of the next consecutive terms, so instances at n and n+1 overlap in all but their end factors."  <- cut to the GOOD form.
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
- If none fits: cue_id = "NEW", new_cue = a SHORT STRUCTURAL cue (<=12 words, terse like the seeds; apply the rubric). Reuse the SAME new_cue wording for two cruxes in this batch that share a trigger.
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

// ---- REDUCE — DOMAIN-BLOCKED consolidation (merge same-trigger cues) ---------
// A SINGLE agent over the whole registry under-merges: ~150 short cues is too many to
// pairwise-compare in one pass, so it anchors on a few and misses the rest (recall fails).
// Instead we BLOCK BY DOMAIN: one merge agent per domain sees only its ~40 cues — small and
// dense enough that an LLM actually finds the duplicates — all four in parallel. Then a
// single CROSS-DOMAIN pass catches the rarer same-trigger pairs that span two domains (a cue
// recurring in e.g. algebra + number_theory), a NARROW task over the full list. Every
// reducer sees SHORT cue strings only (no crux text) — it collapses + flags, never reassigns.
// All merges/flags concatenate into one plan; the applier's overlap guard keeps the first
// claim if two passes touch the same id.
phase('Reduce');
const DOMAINS = ['algebra', 'number_theory', 'combinatorics', 'geometry'];
const readDomainRegistry = (d) => `python3 -c "import json; r=json.load(open('${TMP_DIR}/cue_registry_raw.json')); print(json.dumps([{'id':c['id'],'cue':c['cue']} for c in r if c.get('domain')=='${d}'],indent=2))"`;
const readRegistryWithDomain = `python3 -c "import json; r=json.load(open('${TMP_DIR}/cue_registry_raw.json')); print(json.dumps([{'id':c['id'],'cue':c['cue'],'domain':c.get('domain')} for c in r],indent=2))"`;
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
log(`▶ REDUCE: domain-blocked merge (${DOMAINS.length} domains in parallel) + a cross-domain pass...`);
const perDomain = await parallel(DOMAINS.map((d) => () =>
  agent(
    `You are the cue CONSOLIDATOR for the "${d}" domain. The MAP step ran in parallel batches, so the SAME trigger was often written 2-3 times in slightly different words. Read THIS DOMAIN's cues (short recognition triggers):
${readDomainRegistry(d)}

TWO jobs:
1. MERGE cues that are the SAME TRIGGER — a solver on a new problem would reach for them off the SAME recognition (same situation, not same vocabulary). EXPECT MANY MERGES: near-duplicate pairs are the bulk of the job here; hunt them actively. Only genuinely-unsure cases stay separate. KEEP each unified cue SHORT (<=12 words) — copy the sharpest member, never write a longer umbrella. An id appears in at most one merge.
2. FLAG any cue still TOPICAL / TOO-GENERIC (names a topic/question-type, would fire on a dozen unrelated problems) — flag it, do not merge it broader.

${CUE_RUBRIC}

Return {merges:[{ids,cue}], flags:[{id,reason}]}.`,
    { label: `reduce:${d}`, phase: 'Reduce', schema: REDUCE_SCHEMA }
  )
));
const okDomains = DOMAINS.map((d, i) => [d, perDomain[i]]).filter(([, r]) => r);
if (okDomains.length < DOMAINS.length) {
  log(`⚠️  ${DOMAINS.length - okDomains.length}/${DOMAINS.length} domain reducers FAILED: ${DOMAINS.filter((d, i) => !perDomain[i]).join(', ')}`);
}
const crossDomain = await agent(
  `You are the CROSS-DOMAIN cue consolidator. The per-domain passes already merged duplicates WITHIN each domain. Your ONE job: find cues that are the SAME TRIGGER but sit in DIFFERENT domains — a structural recognition that recurs across domains (e.g. a trigger appearing in BOTH algebra and number_theory), which is the strongest evidence a cue is a real situation and not a topic. Read the whole registry with domains:
${readRegistryWithDomain}

Return ONLY merges whose ids span 2+ DIFFERENT domains AND are genuinely the same trigger (same situation, not merely shared vocabulary — be strict, a cross-domain merge must be a real shared recognition). Ignore same-domain pairs (already handled). Keep each unified cue SHORT (<=12 words). Return {merges:[{ids,cue}], flags:[]}.`,
  { label: 'reduce:cross-domain', phase: 'Reduce', schema: REDUCE_SCHEMA }
);
const mergePlan = {
  merges: [...okDomains.flatMap(([, r]) => r.merges || []), ...(crossDomain?.merges || [])],
  flags: okDomains.flatMap(([, r]) => r.flags || []),
};
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
