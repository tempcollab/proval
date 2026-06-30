/*
 * 02_distill_cruxes.workflow.js  —  STAGE 2 of 2 (the cheap, iterable stage)
 * ----------------------------------------------------------------------------
 * Reads the validated cruxes from stage 1 (output/cruxes.json), distills them into
 * one-TECHNIQUE ENTRIES, merges near-duplicate entries across subtopics, then
 * writes the model-facing bank as a 3-TIER DRILL-DOWN:
 *
 *   tier 1  bank/CHEATSHEET.md            — SKIM. one distilled technique + exemplar ids per entry.
 *                                           The model skims this first.
 *   tier 2  output/cruxes.json            — CRUX. technique + how_used (stage 1).
 *                                           Read when a technique looks relevant.
 *   tier 3  output/problems_with_solutions.json — FULL. statement + solution.
 *                                           Read when it's really relevant.
 * The link between tiers is the plain problem_id.
 *
 *   output/cheatsheet.json  — the distilled entry set (render source for CHEATSHEET.md).
 * CHEATSHEET.md is RENDERED IN CODE (render_cheatsheet.py) — no writer agent.
 *
 * This stage is SPLIT from extraction so it can be re-run cheaply: it never re-runs
 * the expensive extract/reconstruct work — it just reads output/cruxes.json.
 *
 * TWO autoencoder loops, each with TWO SEPARATE agents (a fresh blind prober B + a
 * self-correcting author A who holds the ground truth):
 *
 *   DISTILL (per subtopic, A/B loop ≤5 rounds):
 *     A proposes one-TECHNIQUE entries from the subtopic's cruxes.
 *     B (fresh, blind): given STATEMENT + technique (NOT how_used), attempts to
 *       reproduce how_used — i.e. how the technique applies to that problem.
 *     A holds the filed how_used, compares B's attempt to it, and revises the entry
 *       (fix technique / drop a misfit exemplar) until B reproduces it.
 *
 *   MERGE (per domain, ~1 pass): a domain-merger reads ALL entries in its domain
 *     (across subtopics — this breaks the subtopic wall WITHIN a domain) and proposes
 *     a conservative MERGE PLAN (which entry-ids collapse into one, with the unified
 *     technique). A python script applies the plan. Near-duplicates only — no
 *     over-generalization.
 *
 * STAGES
 *   1. Distill — per subtopic, A/B loop: propose entries, validate by how_used recovery.
 *   2. Merge   — per domain: propose merge plan for near-duplicate entries.
 *   3. Write   — apply merge plan + render_cheatsheet.py → cheatsheet.json + CHEATSHEET.md
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'distill-cruxes',
  description: 'Stage 2: cruxes.json → distill (A/B loop) to one-technique entries → merge near-duplicates per domain → render bank/CHEATSHEET.md',
  phases: [
    { title: 'Distill', detail: 'per subtopic, A/B loop: propose one distilled technique, validate by recovering how_used' },
    { title: 'Merge', detail: 'per domain: propose a conservative merge plan for near-duplicate entries' },
    { title: 'WriteBank', detail: 'apply merge plan + render_cheatsheet.py → cheatsheet.json + CHEATSHEET.md' },
  ],
}

// Distill A/B loop ceiling; early-stops on convergence. 5 keeps the run bounded.
const MAX_ROUNDS = 5
const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot'
const SCRIPTS_DIR = `${ROOT}/code/scripts`
const INPUT = `${ROOT}/data/problems_full.json`    // problems (read for statements + metadata)
const OUTPUT_DIR = `${ROOT}/output`                // durable artifacts live here
const TMP_DIR = `${OUTPUT_DIR}/tmp`                // per-agent scratch (deleted after render)
const MOVES_DIR = `${TMP_DIR}/moves`              // each distiller writes its subtopic's entries
const MOVES_FINAL_DIR = `${TMP_DIR}/moves_final`  // apply_merge_plan.py writes merged entries here
const MERGE_PLAN = `${TMP_DIR}/merge_plan.json`   // the per-domain merge plan (agent-proposed)
const CRUXES_IN = `${OUTPUT_DIR}/cruxes.json`      // stage-1 output (validated cruxes; tier 2)
const BANK = `${ROOT}/bank`                        // FINAL model-facing bank → AutoFyn

// A bank entry is ONE distilled TECHNIQUE (no cue):
//   technique = the GENERIC reusable move it names (carries no problem constant).
// There is NO separate recognition cue — the technique string IS the entry. The model
// already knows the method; the entry's only job is to NAME the move so it's recalled.
// Good/bad pairs (shown to distiller + recovery) beat stated rules; let the model be
// imaginative within them.
const TECH_RUBRIC = `MISSION: this entry goes into a permanent toolkit a solver skims when stuck on a FUTURE, unseen problem. The technique is the repeatable move they recall and apply. Write it for the next problem, not to summarize this one. A move earns its place only if it recurs — if a stranger could meet it again on a different problem. You are sharpening the wording of the crux you were given — NOT merging it with others and NOT summarizing the solution.

ONE TECHNIQUE = ONE SPECIFIC MOVE. The hard rule. A technique names a SINGLE reusable move and STOPS. The cruxes you read already split the solution into separate steps — keep them separate; do NOT fuse two cruxes' moves into one umbrella technique, and do NOT pad a single crux into a multi-move recipe. A technique that walks 2+ distinct moves ("do A, then B, then descend") is a MINI-SOLUTION — the proof in abstract nouns — and is the #1 failure. If you write "..., then ..., then ..." stitching distinct moves, you have fused; keep only the single move this crux is about.

A good TECHNIQUE is a POINTER, not a recipe. THE TEST: (a) is it ONE move? (b) would a solver who read ONLY it still have REAL WORK left? If yes/yes → pointer (good). If it chains moves or leaves no work → you wrote the solution in abstract nouns (LEAK). It also LEAKS if it (1) ORDERS sub-steps into the proof ("do A then B then conclude C"), or (2) STATES THE CRUX CONCLUSION the solver is meant to discover ("the answer is logarithmic", "the shift-sum equals the subleading coefficient"). Name the one tool; never the step-order or the conclusion.

Keep it SHORT: ideally one sentence naming the single move. Do not hedge with slashed synonyms ("circle / closed loop") or parenthetical alternatives — pick one clean phrasing.

GOOD technique (ONE move): "When a fixed monic degree-k polynomial equals a sliding product of k sequence terms, compare a chosen subleading coefficient of the two sides."  ← one move. The telescoping, the identity-upgrade and the extremal step are SEPARATE cruxes — leave them in their own entries, do not fold them in here.
BAD — MINI-SOLUTION (moves fused + conclusion stated): "Compare subleading coefficients so the shift-sum equals the subleading coefficient, difference indices to telescope to a polynomial identity, then an extremal principle pins the factors and backward induction extends to earlier terms."  ← four moves chained = the argument, and it states the crux fact. This is the failure: one move per entry, never this.
BAD (this problem): "Use v_2(a) on x XOR ax."   ← carries this problem's constants; not transferable.

THE MOST COMMON LEAK: a genuine general strategy with THIS PROBLEM'S punchline glued onto the tail. KEEP the strategy, CUT the cash-out. The cut is the whole job — do not drop the entry, trim it.
GOOD technique (pointer): "To show a point lies on the common tangent of two internally tangent circles, prove it has equal power to both (radical axis = the common tangent)."  ← names the move; HOW the equal power is shown is the solver's work.
BAD — LEAK (strategy + this problem's cash-out): "...prove equal power by exhibiting a cyclic quadrilateral among the four secant feet so the two power products coincide."  ← the "cyclic quad among the secant feet" tail is THIS problem's discovery, not the general move. Strip the tail; keep the radical-axis pointer.
Another: GOOD "Charge a grid path-partition by reflecting beams off the cell diagonals and pairing boundary entry/exit edges."  vs  BAD "...so non-crossing forbids incompatible pairings AND A COUNTING INEQUALITY EMERGES."  ← the "and X emerges" clause states the payoff the solver was meant to find. Name the charging tool; do not announce its conclusion.`

// PLUMBING RULE (no base64, no monolith writer): every agent WRITES ITS OWN WORK to
// a scratch file under output/tmp/; render_cheatsheet.py merges those files (reconcile
// + sort) into output/cheatsheet.json + bank/CHEATSHEET.md. JS only orchestrates and
// uses tiny schema returns for CONTROL (the subtopic list, per-move exemplar ids),
// never to carry the bulk crux/move text.

// ---- Setup + index — list the active subtopics from output/cruxes.json -------
// JS must NOT hold the bulk crux text — only CONTROL data: the count + the active
// subtopic list (which distillers to fan out). The distillers/recovery agents read the
// actual crux text from cruxes.json themselves (python filter), so the heavy LaTeX
// never travels through a schema. The reconcile (majority-domain, hallucinated-id
// filter, dedup) lives in render_cheatsheet.py, not here.
phase('Distill')
const INDEX_SCHEMA = {
  type: 'object',
  properties: {
    total: { type: 'number' },
    topics: { type: 'array', items: { type: 'string' } },
  }, required: ['total', 'topics'],
}
const index = await agent(
  `First prepare this run's scratch dirs, then emit the crux index. Run EXACTLY:\nrm -rf ${TMP_DIR} && mkdir -p ${MOVES_DIR} ${MOVES_FINAL_DIR}\npython3 -c "import json; a=json.load(open('${CRUXES_IN}')); print(json.dumps({'total':len(a),'topics':sorted(set(c['subtopic'] for c in a if c.get('subtopic')))}))"\nReturn the JSON the python printed (keys total, topics), unaltered.`,
  { label: 'index-cruxes', phase: 'Distill', schema: INDEX_SCHEMA }
)
const total = index?.total || 0
if (!total) throw new Error(`No cruxes in ${CRUXES_IN} — run 01_extract_cruxes.workflow.js first (it writes this file).`)
const activeTopics = index.topics || []
log(`▶ DISTILL: ${total} cruxes across ${activeTopics.length} subtopics → one A/B loop per subtopic (≤${MAX_ROUNDS} rounds each)...`)

// ---- Distill: ONE A/B loop PER SUBTOPIC, in parallel -----------------------
// Per subtopic, an autoencoder with two separate agents:
//   A (author): reads the subtopic's cruxes (incl how_used) → proposes one-technique
//     entries: finds the common-core move, collapsing same-move cruxes into one
//     single-move pointer (specific not general); revises across rounds.
//   B (fresh, blind, new each round): given STATEMENT + technique (NOT how_used),
//     attempts to reproduce how_used for each exemplar. An honest probe — can't see the
//     answer, can't rationalize.
//   A compares B's attempt to the filed how_used; if B couldn't reproduce it, the entry
//     lost something → A sharpens the technique or drops the misfit exemplar. ≤5 rounds.
// Pre-partition by subtopic is what makes clustering tractable (a monolith collapses).
const slug = (s) => s.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '')
const readTopicCruxes = `python3 -c "import json; a=json.load(open('${CRUXES_IN}')); b=[c for c in a if c.get('subtopic')=='%T']; print('COUNT',len(b)); print(json.dumps([{'problem_id':c.get('problem_id'),'technique':c.get('technique',''),'how_used':c.get('how_used',''),'technique_tags':c.get('technique_tags',[]),'subtopics':c.get('subtopics',[])} for c in b],indent=2))"`

// A: propose/revise the entry set for a subtopic. Round 1 = fresh proposal; later
// rounds get B's failed recoveries + A's own prior entries to repair.
const DISTILL_SCHEMA = {
  type: 'object',
  properties: { entries: { type: 'array', items: { type: 'object', properties: {
    technique: { type: 'string' },
    domain: { type: 'string' }, technique_tags: { type: 'array', items: { type: 'string' } },
    subtopics: { type: 'array', items: { type: 'string' }, description: 'union of every contributing crux\'s subtopics (the entry surfaces under each)' },
    exemplar_ids: { type: 'array', items: { type: 'string' } },
  }, required: ['technique', 'domain', 'technique_tags', 'subtopics', 'exemplar_ids'] } } },
  required: ['entries'],
}
// A (author = encoder AND judge): proposes entries; on repair rounds it ALSO holds B's
// blind recovery + the filed truth, judges whether each entry was faithfully recovered,
// and revises in the SAME call. all_ok signals convergence. (Two agents total: A + B.)
const DISTILL_A_SCHEMA = {
  type: 'object',
  properties: {
    all_ok: { type: 'boolean', description: 'true if every entry was faithfully recovered by the blind solver last round (only meaningful on repair rounds; ignored on round 1)' },
    entries: DISTILL_SCHEMA.properties.entries,
  }, required: ['all_ok', 'entries'],
}
const distillAuthor = (topic, round, priorEntries, recoveries) => agent(
  `You are the DISTILLER for ONE subtopic: "${topic}" (round ${round} of up to ${MAX_ROUNDS}). Read this subtopic's cruxes (all tagged "${topic}"; some may be the SAME move in disguise) — these are the TRUTH, including how_used:
${readTopicCruxes.replace(/%T/g, topic)}

YOUR JOB is to find the COMMON CORE reusable technique — the specific olympiad move the cruxes point to — and name it as a crisp single-move pointer. When two or more cruxes are the IDENTICAL move, collapse them into ONE entry naming that shared core. When a crux is its own distinct move, it stays its own entry. (A later per-domain dedup pass catches duplicates the subtopic split hid — but find the obvious ones here.)

TWO HARD GUARDS on the core you name:
1. SPECIFIC, NOT GENERAL. The core is a concrete move ("compare subleading coefficients", "pigeonhole on path-separation", "spiral similarity carrying one point to another"), never a vague category ("use induction", "apply pigeonhole", "do casework"). If your sentence would describe a dozen unrelated problems, you generalized too far — name the actual move. A wrong collapse that blurs two different moves into a vague umbrella is the failure to avoid; better two sharp entries than one blurry one.
2. ONE MOVE, NOT A CHAIN. One technique = one specific move, full stop. Do NOT fold several moves into a mini-solution ("do A, then B, then descend"). If a crux you were given already chains several moves, that is an extraction defect: name the SINGLE most characteristic move and stop. Collapsing same-move cruxes is fine; chaining different moves into one entry is not.

Each entry is ONE distilled technique:
- technique: the SPECIFIC reusable move — named concretely, transferable to a new problem, carrying no constant from any one problem. Specific, not summarized. This string IS the entry; there is no separate cue.
- domain: algebra | number_theory | combinatorics | geometry (dominant domain of its exemplars).
- technique_tags: union of contributing cruxes' technique_tags.
- subtopics: union of contributing cruxes' subtopics (the entry surfaces under EACH; do not collapse to one).
- exemplar_ids: every contributing crux's problem_id (each id in only ONE entry; use ONLY ids from the python output; do not invent).

${TECH_RUBRIC}
${round > 1 ? `\nREPAIR round. A FRESH BLIND solver was given each entry's (statement + technique) — NOT how_used — and (a) tried to reproduce how the technique applies, and (b) flagged whether the technique LEAKED the solution. Each recovery has recovered_how_used, leaked, leak_reason. Judge on BOTH axes:
- RECOVERY too WEAK (vague/wrong/"couldn't see how", leaked=false) → the technique lost something. Sharpen so the application is recoverable, or drop the misfit exemplar.
- LEAK (leaked=true) → the technique handed over the solution. The DOMINANT case: it is a MINI-SOLUTION — it chains 3+ moves ("do X, then Y, then Z, then W") so it reads like a compressed proof, not one named tool. Other forms: it ordered the proof steps, stated the crux conclusion, or glued this problem's cash-out onto a general move ("...by exhibiting the cyclic quad among the secant feet", "...so a counting inequality emerges"). This is a DEFECT even though recovery "succeeded". COMPRESS to ONE move: from the chain, KEEP only the single most characteristic reusable move (the one a solver would recall first) and DELETE all the other steps, the stated conclusion, and the problem-specific cash-out. The result must name one tool and STOP — if it still has a "then ... then ..." chain, it is still a mini-solution. Do NOT drop the entry — crush it to its one move. A pointer leaves the solver real work; recovery off a pointer should be a genuine reconstruction, not transcription.
- GOOD = recovery faithful AND leaked=false.
Set all_ok=true ONLY when EVERY exemplar is GOOD on both axes (faithful recovery AND no leak). If any entry leaked, all_ok=false and you MUST compress it this round. Otherwise revise and set all_ok=false.

YOUR PRIOR ENTRIES:
${JSON.stringify(priorEntries, null, 2)}
THE BLIND SOLVER'S RECOVERIES:
${JSON.stringify(recoveries, null, 2)}
` : '\nThis is round 1: set all_ok=false and propose your first entry set.'}
Every entry's "subtopics" MUST include "${topic}" (the subtopic being distilled), plus any other subtopics its contributing cruxes carry.

BEFORE returning, WRITE your full entry array (every entry including its "subtopics" list) to ${MOVES_DIR}/${slug(topic)}.json using the Write tool — overwrite it. This file is the durable output for this subtopic; the last round to run wins. Then return {all_ok, entries}.`,
  { label: `distill:${topic}:r${round}`, phase: 'Distill', schema: DISTILL_A_SCHEMA }
)

// B: fresh, blind. Given statement + technique, reproduce how_used per exemplar
// AND judge whether the technique LEAKED the solution (the anti-leak signal). B easily
// "recovering" is NOT the goal — recovering because the technique handed over the steps
// is the failure we are hunting. So B flags leaks explicitly; A must fix them even when
// recovery succeeded.
const RECOVER_SCHEMA = {
  type: 'object',
  properties: { recoveries: { type: 'array', items: { type: 'object', properties: {
    entry_index: { type: 'number' }, problem_id: { type: 'string' },
    recovered_how_used: { type: 'string', description: 'how you think this technique applies to THIS problem, from the statement + technique alone' },
    leaked: { type: 'boolean', description: 'true if the TECHNIQUE itself spelled out the solution — it is a mini-solution chaining 3+ moves, or ordered the proof steps, or stated the crux conclusion, or glued this problem\'s construction onto a general move — so recovery was transcription, not solving' },
    leak_reason: { type: 'string', description: 'if leaked: name the failure (e.g. "mini-solution: 5 chained moves") and quote the offending chain/phrase; else "none"' },
  }, required: ['entry_index', 'problem_id', 'recovered_how_used', 'leaked', 'leak_reason'] } } },
  required: ['recoveries'],
}
const distillRecover = (topic, entries, round) => {
  const tasks = entries.flatMap((e, ei) => (e.exemplar_ids || []).map((pid) => ({ entry_index: ei, problem_id: pid, technique: e.technique })))
  return agent(
    `You are a FRESH solver (round ${round}). For each task you get a PROBLEM STATEMENT and a generic TECHNIQUE. You do NOT get the official how_used. TWO jobs per task:

(1) RECOVER: using ONLY the statement + technique, write how that technique would APPLY to this problem (the concrete how_used you'd produce). If the technique doesn't let you see how it applies, say so plainly.

(2) LEAK CHECK (the important one): judge whether the TECHNIQUE handed you the solution. The bank's whole premise is that the technique is a POINTER — it names ONE specific move, YOU do the proof. A clean technique names a single reusable tool and STOPS. So:
  - Set leaked=TRUE if the technique does ANY of:
    (d) IS A MINI-SOLUTION — it walks more than one move, i.e. it reads like a compressed proof outline rather than a single named tool. THIS IS THE MOST COMMON FAILURE — check it FIRST. The test: COUNT THE DISTINCT MOVES. A pointer names ONE move (optionally naming 2-3 tools you'd reach for). If the technique chains THREE OR MORE sequential moves — "do X, then Y, then Z, then W" stitched with then / so / and then / use ... to ... — it is a mini-solution: the whole argument written in abstract nouns. Tell-tale run-ons (all real leaks): "re-expand each factor and compare a lower-order coefficient, use finiteness-via-domination, difference consecutive instances to telescope, then an extremal principle to upgrade to rigidity, a separate infinite-descent supplies the monotonicity" (FIVE moves = the entire solution); "dominate via majorization by an explicitly built reference vector that matches the per-step increment, carry the majorization as an inductive invariant, with the greedy rule supplying the prefix-sum bound that closes each step" (the whole induction). Recovery off these is transcription — you read the proof. leaked=TRUE. In leak_reason, name the move-count ("5 chained moves") and quote the chain. A clean counter-example that is NOT a leak: "exhibit two triangles whose three pairs of corresponding sides are parallel; they are homothetic, so lines joining corresponding vertices concur at the homothety center" — that is ONE move (apply the parallel-sides⇒homothety lemma), stated once.
    (a) ORDERED THE PROOF STEPS for you ("do A, then B, then C, then conclude D") — a milder form of (d);
    (b) STATED THE CRUX CONCLUSION you were supposed to discover ("the answer is logarithmic", "the shift-sum equals the subleading coefficient", "the extremal config is ...");
    (c) GLUED THIS PROBLEM'S CASH-OUT onto a general move — a legit reusable strategy followed by the specific construction/object that makes it work HERE. Tell-tale: the technique names a general tool, THEN a clause like "...by exhibiting the cyclic quadrilateral among the four secant feet", "...so a counting inequality emerges", "...by substituting the complement to collapse to a clean power". The general move is the pointer; the trailing "by/so/then <specific thing>" is the discovery you were meant to make. If you could only "recover" because that tail told you the construction, leaked=TRUE.
  In any of these your "recovery" was transcription, not problem-solving. Quote the exact offending phrase (for (d), the move-chain; for (c), the trailing cash-out clause) in leak_reason.
  - Set leaked=FALSE only if the technique names ONE specific move — and stopped — and you had to invent the actual construction yourself. Recovering was genuine work.
  A technique that makes recovery EASY because it walked you through the proof, told you the steps, OR handed you the key construction is a FAIL, not a success. Be strict — when the technique reads like an abstract solution outline (several moves chained), or names the general move AND its problem-specific punchline, leaked=true.

Read a statement with: python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; p=d['<ID>']; print(p['problem'])"  (replace <ID>; translate if not English.)

TASKS:
${JSON.stringify(tasks, null, 2)}

For each task return {entry_index, problem_id, recovered_how_used, leaked, leak_reason}.`,
    { label: `distill-recover:${topic}:r${round}`, phase: 'Distill', schema: RECOVER_SCHEMA }
  )
}

// Loop = A (propose/judge/revise) -> B (blind recover) -> A again, ≤8 rounds.
const perTopic = await parallel(activeTopics.map((topic) => () => (async () => {
  let entries = []
  let recoveries = []
  for (let round = 1; round <= MAX_ROUNDS; round++) {
    const a = await distillAuthor(topic, round, entries, recoveries)
    entries = a?.entries || []
    if (!entries.length) break
    if (round > 1 && a?.all_ok) { log(`  · [${topic}] converged at round ${round} (${entries.length} entries)`); break }   // A judged last round's recovery as faithful
    const rec = await distillRecover(topic, entries, round)
    recoveries = rec?.recoveries || []
  }
  // No separate writer agent: author A wrote ${slug}.json itself on its last round
  // (the converging A-call holds the final entries). Saves one serial agent turn per
  // subtopic. The render step reads the file; if A's write silently failed, that
  // subtopic is simply absent downstream — surfaced by the merge/render counts.
  if (!entries.length) {
    log(`⚠️  [${topic}] produced 0 entries`)
    return null
  }
  log(`✓ [${topic}] ${entries.length} entries (self-written)`)
  return { topic, entry_count: entries.length }
})()))
const distilledTopics = perTopic.filter(Boolean)
if (distilledTopics.length < activeTopics.length) {
  const got = new Set(distilledTopics.map((r) => r.topic))
  const failed = activeTopics.filter((t) => !got.has(t))
  log(`⚠️  ${activeTopics.length - distilledTopics.length}/${activeTopics.length} subtopics FAILED to distill: ${failed.join(', ')}`)
}
const entryCount = distilledTopics.reduce((n, r) => n + (r.entry_count || 0), 0)
log(`Distill: ${distilledTopics.length}/${activeTopics.length} subtopics OK, ${entryCount} validated entries → output/tmp/moves/`)

// ---- DEDUP: per domain, collapse same-move entries split across subtopics ----
// The distiller works ONE subtopic at a time — a hard wall: the SAME move filed in
// two/three different subtopics never met during distill. The DEDUPER reads ALL
// entries in ONE domain (across subtopics) so those duplicates sit side by side, and
// collapses each identical-move group into one entry. It only DECIDES + proposes text;
// a python script applies the plan. Dedup the IDENTICAL move only — never force a
// broader abstraction (that would destroy a distinct technique). One deduper per
// domain → up to ~4 in parallel.
phase('Merge')
const DOMAINS = ['algebra', 'number_theory', 'combinatorics', 'geometry']
log(`▶ DEDUP: one deduper per domain (${DOMAINS.length}) collapses same-move entries split across subtopics...`)
// list entries (technique only) for one domain, each given a stable global id "file#idx"
const readDomainEntries = (domain) =>
  `python3 -c "import json,glob,os; out=[]; [out.append({'id':os.path.basename(f)+'#'+str(i),'technique':m['technique'],'subtopics':m['subtopics'],'exemplar_ids':m['exemplar_ids']}) for f in sorted(glob.glob('${MOVES_DIR}/*.json')) for i,m in enumerate(json.load(open(f))) if m['domain']=='${domain}']; print(json.dumps(out,indent=2))"`
const MERGE_SCHEMA = {
  type: 'object',
  properties: {
    domain: { type: 'string' },
    merges: { type: 'array', description: 'each group of 2+ entry ids that are the SAME move, with the unified technique', items: { type: 'object', properties: {
      ids: { type: 'array', items: { type: 'string' }, description: 'the entry ids ("file#idx") to collapse into one' },
      technique: { type: 'string', description: 'unified technique for the merged entry (generic, a pointer not a recipe)' },
    }, required: ['ids', 'technique'] } },
  }, required: ['domain', 'merges'],
}
const domainMerges = await parallel(DOMAINS.map((domain) => () =>
  agent(
    `You are the DEDUPER for the "${domain}" domain. The distiller already did the distilling — it worked ONE subtopic at a time, so it physically could NOT see that the SAME move sometimes got filed in two or three different subtopics. THAT is the gap you close. Your ONLY job: find entries that are the IDENTICAL move and collapse each such group into one. You are not re-distilling and not generalizing — you are deduping.

Read EVERY entry in this domain, gathered across all subtopics so same-move duplicates now sit side by side:
${readDomainEntries(domain)}

THE DEDUP TEST: two entries merge iff a solver, on a new problem, would reach for the SAME tool and execute the SAME core move. Same MOVE, not same topic, not same vocabulary. When unsure, picture the two source problems: if the technique you'd recall is word-for-word the same lever, merge; if the shared words are just a category ("charge", "geometric", "descent") but the actual move differs, DO NOT merge.

DO NOT SUMMARIZE WHEN YOU COLLAPSE. The unified technique is NOT a new umbrella sentence written to "cover" the group — that blurs three sharp entries into one vague one. Instead PICK THE SHARPEST entry of the group and KEEP IT NEARLY VERBATIM, with only the minimal edit needed so nothing specific from the others is lost. Minimal modification, not a rewrite. If you find yourself composing a general paraphrase, stop — copy the best one and lightly touch it.

GOOD merge (DO collapse) — three entries, all one problem, split across three subtopics, all the SAME move:
  • [extremal-principle] "majorization domination by a fixed reference profile survives each step; minimal-counterexample on the smallest failing prefix."
  • [games-and-strategy] "dominate an adversarial sorted vector by majorization against a reference vector; carry prefix-sum majorization as the inductive invariant."
  • [invariants-and-monovariants] "dominate the sorted-vector state via majorization by a synthetic equal-sum reference engineered to carry a constant spread."
  → KEEP the sharpest (the games-and-strategy one) almost as-is, only adding the one concrete detail the others carry: "dominate an adversarial sorted vector by majorization against a synthetic equal-sum reference, carrying prefix-sum majorization as the inductive invariant." That is the best entry kept verbatim + one grafted phrase ("synthetic equal-sum") — NOT a summary of all three. COLLAPSE to one.

BAD merge (do NOT collapse — share a word, not the move):
  • "charge billiard-beams to the boundary edges they pair" vs "charge each class to its earliest majority-prefix" — both say "charge", different move. KEEP separate.
  • "pigeonhole into geometrically-spaced buckets" vs "extremal-anchoring with a multiplicative growth recursion" — both involve a geometric ratio, different move. KEEP separate.
  • "shift the recurrence and re-index to a smaller instance" vs "shift the recurrence and propagate a strict drop into infinite descent" — same shift setup, different terminal move. KEEP separate.

For each TRUE duplicate group, propose ONE unified technique that covers it (keep it a pointer: name the move, do not order steps or state the conclusion). If a domain genuinely has no duplicates, return an empty merges list — but DO look hard for the cross-subtopic case above, it is the most common real duplicate.

Each merge = {ids: [the entry ids to collapse], technique}. Use ONLY ids that appeared above. An id may appear in at most one merge. Return {domain: "${domain}", merges: [...]}.`,
    { label: `dedup:${domain}`, phase: 'Merge', schema: MERGE_SCHEMA }
  )
))
// collect the merge plan and hand it to python (one plan file the apply script reads)
const okMerges = domainMerges.filter(Boolean)
if (okMerges.length < DOMAINS.length) {
  const got = new Set(okMerges.map((d) => d.domain))
  const failed = DOMAINS.filter((d) => !got.has(d))
  log(`⚠️  ${DOMAINS.length - okMerges.length}/${DOMAINS.length} domain mergers FAILED (entries NOT merge-checked): ${failed.join(', ')}`)
}
const mergePlan = okMerges.flatMap((d) => d.merges || [])
const mergeWriter = await agent(
  `Write this exact JSON to ${MERGE_PLAN} using the Write tool (the merge plan: groups of entry ids to collapse, with unified technique). Write verbatim, then return {"ok": true, "count": ${mergePlan.length}}.\n\n${JSON.stringify(mergePlan, null, 2)}`,
  { label: 'write-merge-plan', phase: 'Merge', schema: { type: 'object', properties: { ok: { type: 'boolean' }, count: { type: 'number' } }, required: ['ok', 'count'] } }
)
if (!mergeWriter?.ok) {
  throw new Error(`Merge-plan write FAILED (${MERGE_PLAN} not confirmed) — apply_merge_plan.py would read a stale/missing plan. Aborting.`)
}
log(`Merge: ${mergeWriter.count} merge groups proposed across ${DOMAINS.length} domains`)

// ---- Render — apply the merge plan, then render the bank --------------------
// apply_merge_plan.py reads output/tmp/moves/*.json + the plan → output/tmp/moves_final/;
// render_cheatsheet.py reads moves_final + cruxes.json → output/cheatsheet.json +
// bank/CHEATSHEET.md (reconcile + sort). Agent only runs them.
// NOTE: output/tmp/ is intentionally NOT deleted — it holds the distill rounds + merge
// plan (debug signal). The NEXT run's index step rm -rf's it fresh.
phase('WriteBank')
log(`▶ WRITEBANK: apply merge plan → render output/cheatsheet.json + bank/CHEATSHEET.md...`)
const renderCmds = [
  `python3 ${SCRIPTS_DIR}/apply_merge_plan.py`,
  `python3 ${SCRIPTS_DIR}/render_cheatsheet.py`,
  `python3 -c "import json; print('ENTRIES', len(json.load(open('${OUTPUT_DIR}/cheatsheet.json'))))"`,
].join('\n')
const writer = await agent(
  `Run EXACTLY these Bash commands IN ORDER, one block. apply_merge_plan.py applies the merge plan (output/tmp/moves → output/tmp/moves_final), render_cheatsheet.py builds output/cheatsheet.json + bank/CHEATSHEET.md, the last prints ENTRIES <n>. Do NOT delete output/tmp — it is kept for inspection. Run every command; report the printed count. Return {"entries": <ENTRIES n>}.\n\n${renderCmds}`,
  { label: 'render-bank', phase: 'WriteBank', schema: { type: 'object', properties: { entries: { type: 'number' } }, required: ['entries'] } }
)
if (!writer || writer.entries === undefined) {
  throw new Error(`Render FAILED: did not produce output/cheatsheet.json.`)
}
log(`Bank rendered: ${writer.entries} entries → output/cheatsheet.json + bank/CHEATSHEET.md`)

return {
  cruxes_in: total,
  distilled_entries: entryCount,
  merge_groups: mergePlan.length,
  final_entries: writer.entries,
  cheatsheet_json: `${OUTPUT_DIR}/cheatsheet.json`,
  cheatsheet_md: `${BANK}/CHEATSHEET.md`,
  bank: BANK,
}
