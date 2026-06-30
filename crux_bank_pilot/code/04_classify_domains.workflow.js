/*
 * 04_classify_domains.workflow.js  —  domain backfill for the `unknown` corpus rows
 * ----------------------------------------------------------------------------
 * The shortlist sources in data/problems_full.json carry a domain (A/C/G/N); the
 * non-shortlist sources (USAMO, TSTST, Dutch/Germany TST, RMM, USA TST) were never
 * labelled and sit as domain="unknown" (~500 problems). This workflow classifies each
 * of those into one of the four domains so a single-domain run (e.g. all number_theory)
 * can pull from the WHOLE corpus, not just the pre-labelled shortlist.
 *
 * TWO AGENT GROUPS (annotate -> review), so no single pass is trusted:
 *   ANNOTATE — group A reads each statement and assigns a domain.
 *   REVIEW   — group B independently re-judges each, seeing A's proposed domain, and
 *              CONFIRMS or CORRECTS it. B's verdict is final; corrections are counted so
 *              a human can confirm before the labels are used downstream.
 * Domain is an easy, reliable judgement, so there is no reconstruct loop (unlike 01).
 *
 * SAFETY: problems_full.json is updated IN PLACE (the labelled corpus IS problems_full.json,
 * so 01 reads it with no repointing). The pre-run file is committed in git (the backup), and
 * classify_domains.py writes ATOMICALLY (temp file -> os.replace), so the corpus is never left
 * half-written. All statement reads happen before the single end-of-run write.
 *
 * PLUMBING (same as 01): agents WRITE their own scratch under output/tmp/domain/{annotate,
 * review}/<batch>.json; the committed python script merges; JS only orchestrates + carries
 * short control data (ids + proposed domains), never bulk statement text.
 *
 * INPUT/OUTPUT : data/problems_full.json  (read for the work-list + statements; rewritten in
 *               place with the `unknown` rows filled in — real labels kept verbatim)
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'classify-domains',
  description: 'Backfill domain on the ~500 unknown corpus rows (annotate -> independent review), updating data/problems_full.json in place',
  phases: [
    { title: 'Annotate', detail: 'group A: batch the unknown-domain ids; each agent assigns a domain' },
    { title: 'Review', detail: 'group B: independently re-judge each, seeing A\'s proposal; confirm or correct' },
    { title: 'Merge', detail: 'classify_domains.py -> rewrite data/problems_full.json in place (atomic; git is the backup)' },
  ],
};

const BATCH_SIZE = 30;                              // unknown ids per agent
const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot';
const SCRIPTS_DIR = `${ROOT}/code/scripts`;
const INPUT = `${ROOT}/data/problems_full.json`;
const OUTPUT_DIR = `${ROOT}/output`;
const TMP_DIR = `${OUTPUT_DIR}/tmp`;
const ANNOTATE_DIR = `${TMP_DIR}/domain/annotate`; // group A writes here
const REVIEW_DIR = `${TMP_DIR}/domain/review`;     // group B writes here (authoritative)

const DOMAIN_GUIDE = `Assign the PRIMARY domain — exactly one of: algebra | number_theory | combinatorics | geometry.
- number_theory — integers, divisibility, primes, modular arithmetic, Diophantine equations, valuations, digits.
- algebra — functional equations, polynomials, inequalities, real/complex sequences and recurrences, sums/products.
- combinatorics — counting, graphs, games, processes/algorithms, colorings, configurations, extremal set problems.
- geometry — triangles, circles, points/lines, angles, lengths, loci (incl. combinatorial geometry fundamentally about a geometric configuration).
A problem mixing areas: pick the domain of its CENTRAL difficulty (e.g. an integer-coefficient polynomial whose crux is divisibility = number_theory).`;

// ---- Setup — scratch dirs + the work-list (ids whose domain is unknown) -------
phase('Annotate');
const SETUP_SCHEMA = { type: 'object', properties: { ids: { type: 'array', items: { type: 'string' } } }, required: ['ids'] };
const setup = await agent(
  `Prepare this run's scratch dirs and emit the work-list. Run EXACTLY:\n` +
  `rm -rf ${TMP_DIR}/domain && mkdir -p ${ANNOTATE_DIR} ${REVIEW_DIR}\n` +
  `python3 -c "import json; d=json.load(open('${INPUT}')); ids=[p['problem_id'] for p in d if (p.get('domain') or 'unknown') not in ('algebra','number_theory','combinatorics','geometry')]; print(json.dumps({'ids':ids}))"\n` +
  `Return the JSON the python printed (key ids), unaltered.`,
  { label: 'setup', phase: 'Annotate', schema: SETUP_SCHEMA }
);
const ids = setup?.ids || [];
if (!ids.length) throw new Error(`No unknown-domain ids in ${INPUT} — nothing to classify (every row already has a domain).`);
const chunk = (a, n) => a.reduce((acc, x, i) => { (acc[Math.floor(i / n)] ??= []).push(x); return acc; }, []);
const batches = chunk(ids, BATCH_SIZE);
log(`▶ ANNOTATE: ${ids.length} unknown-domain problems in ${batches.length} batch(es) of ${BATCH_SIZE}...`);

const LABEL_SCHEMA = {
  type: 'object',
  properties: {
    labels: {
      type: 'array', items: {
        type: 'object', properties: {
          problem_id: { type: 'string' },
          domain: { type: 'string', enum: ['algebra', 'number_theory', 'combinatorics', 'geometry'] },
        }, required: ['problem_id', 'domain']
      }
    }
  }, required: ['labels'],
};
const readStmts = (batch) =>
  `python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; [print('===',i,'===\\n'+d[i]['problem'][:1500]) for i in ${JSON.stringify(batch)}]"`;

// ---- ANNOTATE — group A assigns a domain to each unknown --------------------
const annotate = await parallel(batches.map((batch, bi) => () =>
  agent(
    `You are a DOMAIN classifier (group A) for olympiad problems. For EACH id below, read its statement and assign its primary domain.

${DOMAIN_GUIDE}

Read the statements (translate as you read if not English):
${readStmts(batch)}

WRITE your verdicts to ${ANNOTATE_DIR}/${bi}.json as {"labels":[{"problem_id":...,"domain":...}, ...]} (one per id) using the Write tool, then return the same {labels}.`,
    { label: `annotate:${bi}`, phase: 'Annotate', schema: LABEL_SCHEMA }
  )
));
const okA = annotate.filter(Boolean);
if (okA.length < batches.length) log(`⚠️  ${batches.length - okA.length}/${batches.length} annotate batches FAILED.`);
const proposed = {};
for (const r of okA) for (const x of (r.labels || [])) proposed[x.problem_id] = x.domain;
log(`Annotate: ${Object.keys(proposed).length}/${ids.length} ids annotated across ${okA.length}/${batches.length} batches`);

// ---- REVIEW — group B independently confirms or corrects each ---------------
phase('Review');
log(`▶ REVIEW: independent second-pass over the same ${batches.length} batch(es)...`);
const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    labels: {
      type: 'array', items: {
        type: 'object', properties: {
          problem_id: { type: 'string' },
          domain: { type: 'string', enum: ['algebra', 'number_theory', 'combinatorics', 'geometry'], description: 'YOUR final verdict' },
          changed: { type: 'boolean', description: 'true if your verdict differs from the proposed domain' },
        }, required: ['problem_id', 'domain', 'changed']
      }
    }
  }, required: ['labels'],
};
const review = await parallel(batches.map((batch, bi) => () => {
  const proposals = batch.map((id) => ({ problem_id: id, proposed_domain: proposed[id] || 'unknown' }));
  return agent(
    `You are a DOMAIN REVIEWER (group B) — an INDEPENDENT second opinion. Each problem below was given a PROPOSED domain by a first pass. Re-judge each one YOURSELF from its statement; do not defer to the proposal. Confirm it if right, CORRECT it if wrong.

${DOMAIN_GUIDE}

Read the statements (translate as you read if not English):
${readStmts(batch)}

THE FIRST PASS'S PROPOSED domains (judge independently; agree or override):
${JSON.stringify(proposals, null, 2)}

For EACH id return {problem_id, domain (your final verdict), changed (true if your verdict differs from the proposed)}. WRITE the array to ${REVIEW_DIR}/${bi}.json as {"labels":[...]} using the Write tool, then return the same {labels}.`,
    { label: `review:${bi}`, phase: 'Review', schema: REVIEW_SCHEMA }
  );
}));
const okB = review.filter(Boolean);
if (okB.length < batches.length) log(`⚠️  ${batches.length - okB.length}/${batches.length} review batches FAILED — their ids stay unknown.`);
const reviewed = okB.reduce((n, r) => n + (r.labels?.length || 0), 0);
const corrected = okB.reduce((n, r) => n + (r.labels?.filter((x) => x.changed).length || 0), 0);
log(`Review: ${reviewed}/${ids.length} ids reviewed, ${corrected} corrected by group B`);

// ---- Merge — committed python writes the labeled corpus copy -----------------
phase('Merge');
log(`▶ MERGE: classify_domains.py -> rewrite data/problems_full.json in place (atomic)...`);
const merged = await agent(
  `Run EXACTLY this Bash command, then return the JSON it prints (keys filled, corrected_by_review, domains):\n` +
  `python3 ${SCRIPTS_DIR}/classify_domains.py`,
  { label: 'merge-domains', phase: 'Merge', schema: { type: 'object', properties: { filled: { type: 'number' }, corrected_by_review: { type: 'number' }, domains: { type: 'object' } }, required: ['filled', 'domains'] } }
);
if (!merged || merged.filled === undefined) throw new Error(`Merge FAILED: classify_domains.py did not rewrite data/problems_full.json.`);
log(`Labeled corpus written: filled ${merged.filled} (${merged.corrected_by_review} review-corrected); final domains ${JSON.stringify(merged.domains)}`);

return {
  unknown_in: ids.length,
  annotated: Object.keys(proposed).length,
  reviewed,
  corrected_by_review: corrected,
  filled: merged.filled,
  domains: merged.domains,
  labeled_corpus: `${ROOT}/data/problems_full.json`,
};
