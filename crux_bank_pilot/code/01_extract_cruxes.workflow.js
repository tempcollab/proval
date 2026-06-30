/*
 * 01_extract_cruxes.workflow.js  —  STAGE 1 of 2 (the expensive stage)
 * ----------------------------------------------------------------------------
 * Reads the corpus, filters by difficulty, extracts the load-bearing cruxes from
 * each problem's solution, and validates each crux with the RECONSTRUCT loop
 * (statement + crux ⇒ can a solver rebuild the solution path?). The validated
 * cruxes are SAVED to output/cruxes.json.
 *
 * This stage is split out from distillation precisely so its output is durable:
 * it costs hundreds of agent calls, so we run it ONCE and persist the result.
 * Stage 2 (02_distill_cruxes.workflow.js) reads output/cruxes.json and never
 * re-runs this expensive work.
 *
 * CONTAMINATION RULE: corpus is strictly pre-2026 (enforced in build_corpus.py,
 * YEAR_MAX = 2025), disjoint from the math-contests-2026 validation set.
 *
 * SOURCE : AI-MO/olympiads `segmented` JSONL — clean-LaTeX problem+solution pairs
 *          from the 7 top-IMO-altitude competitions (see build_corpus.py).
 *
 * INPUT  : data/problems_full.json — [{problem_id, domain, competition, year,
 *          problem_label, problem, solutions[]}]
 * OUTPUTS (durable, in output/):
 *   cruxes.json                  — [{problem_id, domain, subtopic, technique,
 *                                  how_used, technique_tags, subtopics}]
 *   problems_with_solutions.json — tier-3: statement + full solution + its cruxes
 *
 * PLUMBING RULE (no base64, no monolith writer): every agent WRITES ITS OWN WORK to
 * a scratch file under output/tmp/, and committed python scripts MERGE those files
 * into the durable artifacts. JS only orchestrates (spawn agents → run python) and
 * uses small schema returns for CONTROL FLOW (difficulty levels, reconstruct state),
 * never to carry the bulk crux text.
 *   output/tmp/difficulty/<batch>.json   (each difficulty agent writes its batch)
 *   output/tmp/cruxes_raw/<id>.json      (each problem's final cruxes)
 * output/tmp/ is deleted once the merge succeeds.
 *
 * STAGES
 *   0. Difficulty pre-filter — drop EASY; keep medium+hard (all 4 domains)
 *   1. Extract               — 1-3 cruxes/problem from the solution
 *   2. Reconstruct loop       — statement+crux ⇒ rebuild solution? rewrite until
 *                              it does (≤8 rounds, sketch not full solve)
 *   3. Merge                  — run merge_cruxes.py + render_problems_with_solutions.py
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'extract-cruxes',
  description: 'Stage 1: difficulty-filter → extract cruxes → reconstruct-validate → merge to output/cruxes.json + problems_with_solutions.json',
  phases: [
    { title: 'Difficulty', detail: 'drop easy, keep medium+hard (all 4 domains)' },
    { title: 'Extract', detail: '1-3 cruxes per problem from its solution' },
    { title: 'Reconstruct', detail: 'up to 8 rounds: statement+crux ⇒ rebuild solution? rewrite until it reconstructs' },
    { title: 'Merge', detail: 'run merge_cruxes.py + render_problems_with_solutions.py (tmp kept for inspection)' },
  ],
};

// Max rounds for the reconstruct loop; early-stops on convergence, 5 is the ceiling
// (5 converges almost always in practice and keeps the run time bounded).
const MAX_ROUNDS = 5;
const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot';
const SCRIPTS_DIR = `${ROOT}/code/scripts`;
const INPUT = `${ROOT}/data/problems_full.json`;   // input  (data/ = inputs only)
const OUTPUT_DIR = `${ROOT}/output`;               // durable artifacts live here
const TMP_DIR = `${OUTPUT_DIR}/tmp`;               // per-agent scratch (deleted after merge)
const DIFFICULTY_DIR = `${TMP_DIR}/difficulty`;    // each difficulty agent writes its batch
const CRUXES_RAW_DIR = `${TMP_DIR}/cruxes_raw`;    // each problem's final cruxes

// Standard IMO-syllabus subtopic taxonomy (algebra / number_theory / combinatorics /
// geometry). Fixed and citable (Engel; Chen's EGMO+OTIS; Zhao). The extractor picks up
// to 3 of these per crux. 37 subtopics total.
const TAXONOMY = {
  algebra: ['functional-equations', 'polynomial-roots-and-factoring', 'inequalities-SOS-and-convexity', 'sequences-and-recurrences', 'telescoping-and-summation', 'symmetric-functions-and-substitution'],
  number_theory: ['p-adic-valuation', 'lifting-the-exponent', 'zsygmondy-and-primitive-divisors', 'orders-and-primitive-roots', 'modular-arithmetic-and-CRT', 'size-bounding-and-descent', 'vieta-jumping', 'divisibility-and-gcd', 'diophantine-and-factoring', 'cyclotomic-and-roots-of-unity'],
  combinatorics: ['extremal-principle', 'pigeonhole', 'invariants-and-monovariants', 'double-counting', 'bijections-and-encoding', 'coloring-and-parity', 'graph-theory-and-connectivity', 'induction-and-construction', 'processes-and-algorithms', 'linear-algebra-method', 'games-and-strategy', 'generating-functions', 'probabilistic-method'],
  geometry: ['angle-chasing-and-cyclic-quads', 'power-of-a-point-and-radical-axes', 'spiral-similarity-and-rotation', 'inversion', 'projective-and-cross-ratio', 'trig-and-length-bashing', 'coordinate-and-complex-bashing', 'barycentric-and-areas'],
};
const ALL_TOPICS = [...TAXONOMY.algebra, ...TAXONOMY.number_theory, ...TAXONOMY.combinatorics];

// Calibration shown to the extractor/reconstructor: a TECHNIQUE states the GOAL/METHOD
// at an altitude that TRANSFERS — generic enough to apply to a different problem, never
// carrying this problem's constants/objects. (The problem-specific detail lives in
// how_used, the exemplar field, not in the technique.) Tell the goal, not the steps;
// let the model phrase it imaginatively. Good/bad pairs beat stated rules.
const TECHNIQUE_RUBRIC = `MISSION: a solution has 1-3 CRITICAL STEPS — the genuinely hard, non-obvious moves the solve turns on. Emit ONE crux PER critical step (so 1-3 cruxes). Each crux has TWO halves. how_used = the SPECIFIC part (this problem's objects/constants, how the move played out here — be as detailed as needed). technique = the REUSABLE part for THAT ONE step: a POINTER naming the single move a different problem could borrow, so a solver who already knows the method is reminded to reach for it. The solver supplies the execution. Do NOT judge whether the move recurs (the distiller does that); only name what you found.

ONE TECHNIQUE = ONE SPECIFIC MOVE. This is the hard rule. A technique names a SINGLE reusable move and STOPS. If the solution chains several moves (substitute, then telescope, then apply the extremal principle, then descend), those are SEPARATE critical steps → SEPARATE cruxes, each a one-move technique. NEVER fuse them into one technique. A technique that walks more than one move is a MINI-SOLUTION — the proof written in abstract nouns — and is the #1 failure to avoid. If you catch yourself writing "..., then ..., then ..." or "...; ...; ..." stitching distinct moves, STOP and split into separate cruxes.

THE TEST per technique: (a) Is it ONE move? Count the distinct moves — more than one means split. (b) Would a strong solver who read ONLY this technique (not the solution) still have REAL WORK left? YES → pointer (good). NO → leak (you wrote the step's outcome, not its tool).

A technique LEAKS / is malformed when it does ANY of these — each forbidden:
  (1) CHAINS 2+ DISTINCT MOVES (a mini-solution). Split into separate cruxes instead.
  (2) ORDERS sub-steps into a derivation ("do A, then B, then conclude C").
  (3) STATES THE CRUX CONCLUSION — the hard-won fact that IS the insight ("the answer is logarithmic", "the shift-sum equals the subleading coefficient"). Name the tool that finds it, not the thing it finds.
  (4) Carries a constant/object from THIS problem (those live in how_used).
  (5) Hedges with slashed synonyms / parenthetical alternatives — pick one phrasing.

GOOD (one move): "When a fixed monic degree-k polynomial equals a sliding product of k sequence terms, compare a chosen subleading coefficient of the two sides."  ← ONE move (coefficient comparison). The telescoping, the extremal step, the induction are DIFFERENT critical steps — each its OWN crux if it was genuinely hard here.
BAD — MINI-SOLUTION (several moves fused): "compare subleading coefficients so the shift-sum equals the subleading coefficient, difference consecutive indices to telescope to a polynomial identity, then an extremal principle pins the factors and backward induction extends to earlier terms."  ← four moves chained = the whole argument. Split into up to four cruxes (or keep only the ones that were actually hard); never one technique.

GOOD (one move): "Lower-bound the colors forced on every Hamiltonian path with a doubling/nested-class construction."  ← ONE move. The upper-bound counting argument is a SEPARATE crux.
BAD — MINI-SOLUTION + leak: "Partition vertices into nested classes on a doubling schedule, color each edge by its endpoint in the smaller class, size each class to exceed the total below it so pigeonhole forces two adjacent — the thresholds grow geometrically giving a logarithmic bound."  ← multiple moves + states the answer. Split; drop the conclusion.

GOOD (one move): "When bounding a sum of pairwise distances on a cycle, recount each distance by how many fixed separators it crosses."  ← one move, no conclusion, no constant.
BAD — LEAK: "Draw n diameters through the arc-midpoints; each distance equals the diameters separating its endpoints; the tour crosses each an even number of times, at most one crossed by all 2n hops, giving optimum 2n^2-2n+2."  ← the solved problem with its final number, not a reusable move.

REAL MINI-SOLUTIONS caught in a prior run (each MUST be split into separate cruxes):
BAD: "For a branching recurrence, substitute consecutive differences so each branch becomes a multiplicative choice among small prime ratios; THEN read off a modular invariant from the forced first ratio, AND to descend divide out a common factor across a shifted block and re-index so the rescaled differences obey the same rule."  ← THREE moves (difference-substitution / modular-invariant / common-factor-descent). Emit three cruxes, each naming one.
BAD: "convert a local drop into self-propagating infinite descent: compare consecutive shifted copies of the relation to get a sign-equivalence, so any strict drop forces another within a fixed window, THEN invoke well-ordering."  ← the descent move and the well-ordering close are one chained argument; name the single move ("shift-and-compare consecutive copies to make a strict drop self-propagate") and stop — the well-ordering is its routine finish, not a separate crux to spell out.`;
const TOPICS_BY_DOMAIN = (d) => (TAXONOMY[d] || ALL_TOPICS).join(' | ');
// AI-MO 2021-2025 corpus. Problem ids MUST come from `args` — an id array, or a
// JSON string of one. No fallback: if args is missing/unparseable/empty we THROW,
// so a marshalling glitch can never silently run the wrong problem set.
// Phase 0 drops easy only (all 4 domains kept).
function parseIds(a) {
  if (Array.isArray(a)) return a.filter((x) => typeof x === 'string' && x);
  if (typeof a === 'string' && a.trim().startsWith('[')) {
    const p = JSON.parse(a); // throws on malformed JSON — fail fast
    if (Array.isArray(p)) return p.filter((x) => typeof x === 'string' && x);
  }
  return [];
}
const allIds = parseIds(args);
if (!allIds.length) {
  throw new Error(`No problem ids in args (got type=${typeof args}, isArray=${Array.isArray(args)}). Pass args: ["aimo-0387", ...].`);
}
log(`${allIds.length} ids from args: ${allIds.slice(0, 3).join(',')}...`);

const readRow = (id, withSolution) =>
  `Read problem ${id} by running:\n` +
  `python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; p=d['${id}']; print('DOMAIN',p['domain']); print('PROBLEM\\n'+p['problem'])` +
  (withSolution ? `; print('\\nSOLUTIONS\\n'); [print('--- sol',i+1,'---\\n'+(s if isinstance(s,str) else json.dumps(s))) for i,s in enumerate(p.get('solutions') or [])]"\n(If the text is not English, translate it as you read — you know the language.)\n` : `"\n(If not English, translate as you read.)\n`);

// ---- Setup — create the scratch dirs the agents write into -----------------
phase('Difficulty');
await agent(
  `Run EXACTLY this Bash command (prepares this run's scratch dirs):\nrm -rf ${TMP_DIR} && mkdir -p ${DIFFICULTY_DIR} ${CRUXES_RAW_DIR} && echo READY`,
  { label: 'setup-tmp', phase: 'Difficulty', schema: { type: 'object', properties: { ok: { type: 'boolean' } }, required: ['ok'] } }
);

// ---- Phase 0 — difficulty pre-filter -------------------------------------
// Each agent WRITES its batch verdicts to output/tmp/difficulty/<bi>.json (read by
// merge_cruxes.py for the authoritative per-problem domain) AND returns them via
// schema (small — used here for CONTROL: which ids pass the medium+hard filter).
const DIFF_SCHEMA = {
  type: 'object',
  properties: {
    ratings: {
      type: 'array', items: {
        type: 'object', properties: {
          problem_id: { type: 'string' },
          level: { type: 'string', enum: ['easy', 'medium', 'hard'] },
          domain: { type: 'string', enum: ['algebra', 'number_theory', 'combinatorics', 'geometry'] },
        }, required: ['problem_id', 'level', 'domain']
      }
    }
  },
  required: ['ratings'],
};
const chunk = (a, n) => a.reduce((acc, x, i) => { (acc[Math.floor(i / n)] ??= []).push(x); return acc; }, []);
const diffBatches = chunk(allIds, 25);
log(`▶ DIFFICULTY: rating ${allIds.length} problems in ${diffBatches.length} batch(es)...`);
const diffResults = await parallel(diffBatches.map((batch, bi) => () =>
  agent(
    `You are a difficulty + domain JUDGE for olympiad problems. For EACH id below, read its statement and return TWO things:
(1) level — easy | medium | hard on the ABSOLUTE IMO-position scale:
- easy   = IMO P1/P4 level (routine for a strong solver; a standard technique applied directly)
- medium = IMO P2/P5 level (a real idea needed, but a known one)
- hard   = IMO P3/P6 level (a non-obvious crux; genuinely difficult)
We are building a bank of HARD-PROBLEM techniques, so this filter drops the easy ones. When unsure between easy and medium, rate medium (keep it).
(2) domain — algebra | number_theory | combinatorics | geometry (the problem's primary subject). Some rows print DOMAIN unknown; classify those yourself. If a row already prints a real domain, echo it.

Read each statement with:
python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; [print('===',i,'DOMAIN',d[i].get('domain'),'===\\n'+d[i]['problem'][:1200]) for i in ${JSON.stringify(batch)}]"

After deciding, WRITE your verdicts to ${DIFFICULTY_DIR}/${bi}.json as JSON of the form {"ratings":[{"problem_id":...,"level":...,"domain":...}, ...]} (one entry per id) using the Write tool. Then ALSO return the same ratings via the schema.`,
    { label: `difficulty:${bi}`, phase: 'Difficulty', schema: DIFF_SCHEMA }
  )
));
const okDiff = diffResults.filter(Boolean);
if (okDiff.length < diffBatches.length) {
  log(`⚠️  ${diffBatches.length - okDiff.length}/${diffBatches.length} difficulty batches FAILED — their ids will be missing a rating.`);
}
const levelById = {};
const domainById = {};
for (const r of okDiff) for (const x of (r.ratings || [])) { levelById[x.problem_id] = x.level; domainById[x.problem_id] = x.domain; }
// LOUD: any id with no rating at all (its batch errored) is unclassified — name them.
const unrated = allIds.filter((id) => !levelById[id]);
if (unrated.length) log(`⚠️  ${unrated.length} ids got NO difficulty rating (dropped from the run): ${unrated.join(', ')}`);
const ids = allIds.filter((id) => levelById[id] === 'medium' || levelById[id] === 'hard');
const easyDropped = allIds.filter((id) => levelById[id] === 'easy').length;
log(`Difficulty filter: kept ${ids.length}/${allIds.length} (medium+hard, all 4 domains); dropped ${easyDropped} easy, ${unrated.length} unrated`);

// ---- schemas for extract / reconstruct -----------------------------------
const CRUX_SCHEMA = {
  type: 'object',
  properties: {
    problem_id: { type: 'string' }, domain: { type: 'string' },
    cruxes: {
      type: 'array', items: {
        type: 'object', properties: {
          technique: { type: 'string', description: 'the GENERIC reusable method for ONE critical step — names a SINGLE move, no chain of moves, no constant/object from this problem (split multi-move steps into separate cruxes)' },
          how_used: { type: 'string', description: 'how the technique showed up in THIS problem (problem-specific detail lives here, not in technique)' },
          technique_tags: { type: 'array', items: { type: 'string' } },
          subtopics: { type: 'array', items: { type: 'string' }, description: 'up to 3 subtopics for this crux, chosen ONLY from the provided fixed list' },
        }, required: ['technique', 'how_used', 'technique_tags', 'subtopics']
      }
    },
  }, required: ['problem_id', 'domain', 'cruxes'],
};
// --- The reconstruct loop is an AUTOENCODER with TWO SEPARATE agents -----------
// B (fresh, blind, new agent each round): gets statement + cruxes, NO solution, and
//   ATTEMPTS to reconstruct the solution path. It only attempts — it does not grade.
//   Being fresh + solution-blind makes it an honest probe (it can't rationalize).
// A (proposer/reviser, holds the solution): reads B's attempt, COMPARES it to the
//   real solution, decides per crux whether B recovered the path, and if not REVISES
//   the crux to close the gap (feeding A's own note forward). A is the only agent
//   that ever sees the solution.
// Round: A revises (round 1 = the extractor's output) -> B attempts -> A judges.

// B: blind reconstruction attempt from statement + cruxes only.
const RECON_ATTEMPT_SCHEMA = {
  type: 'object',
  properties: {
    attempts: {
      type: 'array', items: {
        type: 'object', properties: {
          crux_index: { type: 'number' },
          sketch: { type: 'string', description: 'the solution path this crux implies, in <=8 reasoning steps' },
          stuck_at: { type: 'string', description: 'where the sketch stalls / what the crux fails to supply, or "none"' },
        }, required: ['crux_index', 'sketch', 'stuck_at']
      }
    },
  }, required: ['attempts'],
};
const reconAttempt = (id, cruxes, round) => agent(
  `You are the RECONSTRUCTOR (round ${round}). You are given a problem STATEMENT and a list of proposed CRUXES (each a technique + how it was used). You do NOT have the official solution. For EACH crux, ATTEMPT to rebuild the solution path it implies.

BUDGET: <=8 reasoning steps per crux. Produce a convincing SKETCH that the crux unlocks the path — do NOT write a full proof, do NOT solve from scratch ignoring the crux. If the crux genuinely lets you see the path, sketch it; if it leaves you stuck, say exactly WHERE you stall and WHAT the crux failed to give you (this is the signal the author needs).

Read the statement: ${readRow(id, false)}

PROPOSED CRUXES (index them from 0):
${JSON.stringify(cruxes.map((c, i) => ({ crux_index: i, technique: c.technique, how_used: c.how_used })), null, 2)}

For each crux return {crux_index, sketch, stuck_at}. Be honest about stalling — a crux that doesn't carry the path must be exposed, not rescued.`,
  { label: `recon-attempt:${id}:r${round}`, phase: 'Reconstruct', schema: RECON_ATTEMPT_SCHEMA }
);

// A: judge B's attempt against the real solution + revise the cruxes that fell short.
const RECON_JUDGE_SCHEMA = {
  type: 'object',
  properties: {
    problem_id: { type: 'string' },
    cruxes: {
      type: 'array', items: {
        type: 'object', properties: {
          technique: { type: 'string' }, how_used: { type: 'string' },
          technique_tags: { type: 'array', items: { type: 'string' } },
          subtopics: { type: 'array', items: { type: 'string' } },
          reconstructed: { type: 'boolean', description: 'true if B\'s sketch (judged against the real solution) genuinely recovered the path' },
          rewrite_note: { type: 'string', description: 'if not reconstructed: what you changed and why, fed to the next round; else "none"' },
        }, required: ['technique', 'how_used', 'technique_tags', 'subtopics', 'reconstructed', 'rewrite_note']
      }
    },
    dropped: { type: 'array', items: { type: 'string' } },
  }, required: ['problem_id', 'cruxes', 'dropped'],
};
const reconJudge = (id, cruxes, attempts, round) => agent(
  `You are the crux AUTHOR/JUDGE (round ${round} of up to ${MAX_ROUNDS}). You hold the OFFICIAL SOLUTION. A fresh solver (who did NOT see the solution) just tried to reconstruct the path from each crux. Your job: for EACH crux, judge whether that reconstruction genuinely recovered the solution's path, and if not, REVISE the crux so a fresh solver next round will succeed.

Read statement + official solution: ${readRow(id, true)}

PROPOSED CRUXES (index 0..):
${JSON.stringify(cruxes.map((c, i) => ({ crux_index: i, technique: c.technique, how_used: c.how_used, technique_tags: c.technique_tags, subtopics: c.subtopics })), null, 2)}

THE FRESH SOLVER'S ATTEMPTS:
${JSON.stringify(attempts, null, 2)}

For each crux:
- If the solver's sketch matches the real solution's path → reconstructed=true.
- If the sketch stalled or went wrong → the crux is too vague / too specific / mis-stated. REWRITE technique and/or how_used to the altitude that would let a fresh solver reconstruct (technique GENERIC; this-problem detail in how_used), set reconstructed=false, and put in rewrite_note exactly what you changed and what the solver was missing (fed to next round). CRITICAL: do NOT fix a stall by fattening the technique into a multi-move recipe — one technique = ONE move. If the path stalls because it genuinely needs ANOTHER hard move the cruxes don't cover, ADD a SEPARATE crux for that move (its own one-move technique + how_used), rather than chaining two moves into one. Padding a technique into a mini-solution is the failure to avoid even when it makes reconstruction easier.
- Only DROP a crux if it is genuinely peripheral and no rewrite saves it.
Keep subtopics from the fixed list; refine if the rewrite changed the technique.

${TECHNIQUE_RUBRIC}

Return the cruxes (revised as needed, with reconstructed + rewrite_note) and dropped.`,
  { label: `recon-judge:${id}:r${round}`, phase: 'Reconstruct', schema: RECON_JUDGE_SCHEMA }
);

// ---- Phases 1+2 pipelined: extract (A's first proposal), then the A/B loop ----
log(`▶ EXTRACT + RECONSTRUCT: ${ids.length} problems through extract → A/B loop (≤${MAX_ROUNDS} rounds each)...`);
const results = await pipeline(
  ids,
  (id) => agent(
    `You are a crux EXTRACTOR. ${readRow(id, true)}
Extract the 1-3 LOAD-BEARING cruxes the solution pivots on — the specific moves WITHOUT WHICH the solution collapses. Each crux is a (technique, how_used) pair:
- technique: the SPECIFIC reusable move a solver of a DIFFERENT problem could borrow — named concretely (e.g. "compare subleading coefficients to pin growth", "spiral similarity carrying one marked point to another"). Do NOT SUMMARIZE the solution and do NOT generalize up to a category ("use induction", "do casework") — name the actual move. Specific, not a summary.
- how_used: how that move showed up in THIS problem — the problem-specific detail (constants, objects, the exact construction) goes HERE, never in technique. Be as detailed as the instance needs.
Most problems have ONE real crux; use multiple only for genuinely distinct pivots. Do not pad the list with routine steps that are not load-bearing.

${TECHNIQUE_RUBRIC}

For EACH crux, assign up to 3 subtopics, chosen ONLY from this fixed list (the standard olympiad taxonomy for the relevant domain) — do not invent new labels:
  algebra: ${TOPICS_BY_DOMAIN('algebra')}
  number_theory: ${TOPICS_BY_DOMAIN('number_theory')}
  combinatorics: ${TOPICS_BY_DOMAIN('combinatorics')}
  geometry: ${TOPICS_BY_DOMAIN('geometry')}
Pick the subtopic(s) from the crux's own domain that best name the technique. The first subtopic is the primary one.`,
    { label: `extract:${id}`, phase: 'Extract', schema: CRUX_SCHEMA }
  ),
  async (proposed, id) => {
    let pending = (proposed?.cruxes ?? []).map((c) => ({ ...c, reconstructed: false, rewrite_note: 'none' }));
    log(`  · [${id}] extracted ${pending.length} crux candidate(s) → reconstruct loop`);
    const settled = [], dropped = [];
    let round = 0;
    for (round = 1; round <= MAX_ROUNDS && pending.length; round++) {
      // B (fresh, blind) attempts; A (holds solution) judges B against truth + revises.
      const attempt = await reconAttempt(id, pending, round);
      const out = await reconJudge(id, pending, attempt?.attempts ?? [], round);
      if (!out) break;
      for (const d of out.dropped || []) dropped.push(d);
      const next = [];
      // record `retries` = the round at which this crux reconstructed (1 = first try);
      // drop the loop-control fields (reconstructed / rewrite_note) — they are not part
      // of the crux, only how many rounds it took is worth keeping.
      for (const c of out.cruxes || []) {
        if (c.reconstructed) {
          const { reconstructed, rewrite_note, ...rest } = c;
          settled.push({ ...rest, retries: round });
        } else {
          next.push(c);
        }
      }
      pending = next;
    }
    // any crux still unsettled at the ceiling is kept at its best form, retries=MAX_ROUNDS
    for (const c of pending) {
      const { reconstructed, rewrite_note, ...rest } = c;
      settled.push({ ...rest, retries: MAX_ROUNDS });
    }
    // Each problem WRITES ITS OWN settled cruxes to output/tmp/cruxes_raw/<id>.json.
    const record = { problem_id: id, domain: domainById[id], cruxes: settled };
    const writer = await agent(
      `Write this exact JSON to ${CRUXES_RAW_DIR}/${id}.json using the Write tool (it is problem ${id}'s ${settled.length} validated cruxes). Write it verbatim, then return {"ok": true, "count": ${settled.length}}.\n\n${JSON.stringify(record, null, 2)}`,
      { label: `write-cruxes:${id}`, phase: 'Reconstruct', schema: { type: 'object', properties: { ok: { type: 'boolean' }, count: { type: 'number' } }, required: ['ok', 'count'] } }
    );
    // FAIL LOUD: if the write didn't confirm, the scratch file may be missing — merge
    // would silently lose this problem. Name it and return null so it is counted FAILED,
    // not silently backfilled from settled.length.
    if (!writer?.ok) {
      log(`⚠️  [${id}] write-cruxes did NOT confirm (ok=${writer?.ok}); cruxes_raw/${id}.json may be missing.`);
      return null;
    }
    log(`✓ [${id}] ${settled.length} cruxes (${dropped.length} dropped, ${round - 1} rounds)`);
    // `round` exits one past the last executed round, so rounds run = round-1.
    return { problem_id: id, cruxes_count: writer.count ?? settled.length, dropped: dropped.length, rounds_used: round - 1 };
  }
);
const clean = results.filter(Boolean);
if (clean.length < ids.length) {
  // LOUD: name exactly which problems produced no cruxes (agent errored mid-pipeline)
  // instead of letting a count mismatch hide it.
  const got = new Set(clean.map((r) => r.problem_id));
  const failed = ids.filter((id) => !got.has(id));
  log(`⚠️  ${ids.length - clean.length}/${ids.length} problems FAILED to produce cruxes: ${failed.join(', ')}`);
}
const survivingCruxes = clean.reduce((n, r) => n + (r.cruxes_count || 0), 0);
const droppedCount = clean.reduce((n, r) => n + (r.dropped || 0), 0);
const reconAvgRounds = clean.length ? (clean.reduce((n, r) => n + (r.rounds_used || 0), 0) / clean.length).toFixed(2) : 0;
log(`Reconstruct-test: ${clean.length}/${ids.length} problems OK, ${survivingCruxes} cruxes survived, ${droppedCount} dropped (avg ${reconAvgRounds} rounds/problem)`);

// ---- Merge — committed python turns the scratch files into the durable -------
// artifacts. merge_cruxes.py reads tmp/cruxes_raw/*.json + tmp/difficulty/*.json →
// output/cruxes.json; render_problems_with_solutions.py joins data/problems_full.json +
// output/cruxes.json → output/problems_with_solutions.json. All logic lives in those
// files (readable, runnable standalone). The agent only runs them.
// NOTE: output/tmp/ is intentionally NOT deleted here — it holds per-problem retries +
// reconstruct history (debug signal). The NEXT run's first step rm -rf's it fresh.
phase('Merge');
log(`▶ MERGE: merge_cruxes.py + render_problems_with_solutions.py → output/cruxes.json + problems_with_solutions.json...`);
const mergeCmds = [
  `python3 ${SCRIPTS_DIR}/merge_cruxes.py`,
  `python3 ${SCRIPTS_DIR}/render_problems_with_solutions.py`,
  `python3 -c "import json; print('CRUXES', len(json.load(open('${OUTPUT_DIR}/cruxes.json')))); print('PWS', len(json.load(open('${OUTPUT_DIR}/problems_with_solutions.json'))))"`,
].join('\n');
const merger = await agent(
  `Run EXACTLY these Bash commands IN ORDER, one block. They merge this run's scratch files into the durable artifacts and print counts (CRUXES <n>, PWS <n>). Do NOT delete output/tmp — it is kept for inspection. Run every command; report the two printed counts. Return {"cruxes": <CRUXES n>, "pws": <PWS n>}.\n\n${mergeCmds}`,
  { label: 'merge', phase: 'Merge', schema: { type: 'object', properties: { cruxes: { type: 'number' }, pws: { type: 'number' } }, required: ['cruxes', 'pws'] } }
);
if (!merger || !merger.cruxes) {
  throw new Error(`Merge FAILED: merge_cruxes.py produced ${merger?.cruxes} cruxes. Scratch files under ${TMP_DIR} were not merged.`);
}
log(`Merged → output/cruxes.json (${merger.cruxes} cruxes) + output/problems_with_solutions.json (${merger.pws} problems)`);

return {
  corpus_in: allIds.length,
  easy_dropped: easyDropped,
  problems_used: ids.length,
  surviving_cruxes: merger.cruxes,
  problems_with_solutions: merger.pws,
  dropped_in_reconstruct: droppedCount,
  recon_avg_rounds: reconAvgRounds,
  cruxes_out: `${OUTPUT_DIR}/cruxes.json`,
  problems_with_solutions_out: `${OUTPUT_DIR}/problems_with_solutions.json`,
};
