/*
 * 04_classify_domains.workflow.js  —  domain backfill for the `unknown` corpus rows
 * ----------------------------------------------------------------------------
 * The shortlist sources in data/problems_full.json carry a domain (A/C/G/N); the
 * non-shortlist sources (USAMO, TSTST, Dutch/Germany TST, RMM, USA TST) were never
 * labelled and sit as domain="unknown" (~500 problems). This workflow classifies each
 * of those into one of the four domains so a single-domain run (e.g. all number_theory)
 * can pull from the WHOLE corpus, not just the pre-labelled shortlist.
 *
 * It is a CHEAP, single-pass classifier — domain is an easy, reliable judgement, so no
 * reconstruct/verify loop (unlike 01). Batches of unknown ids are classified in PARALLEL;
 * each agent writes its verdicts to scratch; classify_domains.py merges them into a COPY
 * of the corpus (data/problems_full_labeled.json) with the unknowns filled in — the
 * original problems_full.json is never mutated.
 *
 * PLUMBING (same as 01): agents WRITE their own scratch to output/tmp/domain/<batch>.json;
 * the committed python script does the merge; JS only orchestrates + carries control data.
 *
 * INPUT  : data/problems_full.json  (rows with domain=="unknown" are the work-list)
 * OUTPUT : data/problems_full_labeled.json  (copy; unknowns filled; real labels kept)
 * ----------------------------------------------------------------------------
 */
export const meta = {
  name: 'classify-domains',
  description: 'Backfill domain on the ~500 unknown corpus rows (parallel classify) -> data/problems_full_labeled.json',
  phases: [
    { title: 'Classify', detail: 'batch the unknown-domain ids; each agent assigns algebra/number_theory/combinatorics/geometry' },
    { title: 'Merge', detail: 'classify_domains.py -> data/problems_full_labeled.json' },
  ],
};

const BATCH_SIZE = 30;                              // unknown ids per classify agent
const ROOT = '/Users/adibhasan/Downloads/proval/crux_bank_pilot';
const SCRIPTS_DIR = `${ROOT}/code/scripts`;
const INPUT = `${ROOT}/data/problems_full.json`;
const OUTPUT_DIR = `${ROOT}/output`;
const TMP_DIR = `${OUTPUT_DIR}/tmp`;
const DOMAIN_DIR = `${TMP_DIR}/domain`;             // each classify batch writes here

// ---- Setup — scratch dir + the work-list (ids whose domain is unknown) -------
phase('Classify');
const SETUP_SCHEMA = { type: 'object', properties: { ids: { type: 'array', items: { type: 'string' } } }, required: ['ids'] };
const setup = await agent(
  `Prepare this run's scratch dir and emit the work-list. Run EXACTLY:\n` +
  `rm -rf ${DOMAIN_DIR} && mkdir -p ${DOMAIN_DIR}\n` +
  `python3 -c "import json; d=json.load(open('${INPUT}')); ids=[p['problem_id'] for p in d if (p.get('domain') or 'unknown') not in ('algebra','number_theory','combinatorics','geometry')]; print(json.dumps({'ids':ids}))"\n` +
  `Return the JSON the python printed (key ids), unaltered.`,
  { label: 'setup', phase: 'Classify', schema: SETUP_SCHEMA }
);
const ids = setup?.ids || [];
if (!ids.length) throw new Error(`No unknown-domain ids in ${INPUT} — nothing to classify (every row already has a domain).`);
const chunk = (a, n) => a.reduce((acc, x, i) => { (acc[Math.floor(i / n)] ??= []).push(x); return acc; }, []);
const batches = chunk(ids, BATCH_SIZE);
log(`▶ CLASSIFY: ${ids.length} unknown-domain problems in ${batches.length} batch(es) of ${BATCH_SIZE}...`);

// ---- Classify — parallel domain assignment ---------------------------------
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
const results = await parallel(batches.map((batch, bi) => () =>
  agent(
    `You are a DOMAIN classifier for olympiad problems. For EACH id below, read its statement and assign its PRIMARY domain — exactly one of: algebra | number_theory | combinatorics | geometry.

Guidance (primary subject, by what the problem is fundamentally about):
- number_theory — integers, divisibility, primes, modular arithmetic, Diophantine equations, valuations, digits.
- algebra — functional equations, polynomials, inequalities, real/complex sequences and recurrences, sums/products.
- combinatorics — counting, graphs, games, processes/algorithms, colorings, configurations, extremal set problems.
- geometry — triangles, circles, points/lines, angles, lengths, loci (incl. combinatorial geometry that is fundamentally about a geometric configuration).
A problem that mixes areas: pick the domain of its CENTRAL difficulty (e.g. an integer-coefficient polynomial whose crux is divisibility = number_theory).

Read the statements:
python3 -c "import json; d={r['problem_id']:r for r in json.load(open('${INPUT}'))}; [print('===',i,'===\\n'+d[i]['problem'][:1500]) for i in ${JSON.stringify(batch)}]"
(If a statement is not English, translate it as you read.)

WRITE your verdicts to ${DOMAIN_DIR}/${bi}.json as {"labels":[{"problem_id":...,"domain":...}, ...]} (one entry per id) using the Write tool, then return the same {labels}.`,
    { label: `classify:${bi}`, phase: 'Classify', schema: LABEL_SCHEMA }
  )
));
const ok = results.filter(Boolean);
if (ok.length < batches.length) {
  log(`⚠️  ${batches.length - ok.length}/${batches.length} classify batches FAILED — their ids stay unknown.`);
}
const labeled = ok.reduce((n, r) => n + (r.labels?.length || 0), 0);
log(`Classify: ${labeled}/${ids.length} ids classified across ${ok.length}/${batches.length} batches`);

// ---- Merge — committed python writes the labeled corpus copy -----------------
phase('Merge');
log(`▶ MERGE: classify_domains.py -> data/problems_full_labeled.json...`);
const merged = await agent(
  `Run EXACTLY this Bash command, then return the JSON it prints (keys filled, domains):\n` +
  `python3 ${SCRIPTS_DIR}/classify_domains.py`,
  { label: 'merge-domains', phase: 'Merge', schema: { type: 'object', properties: { filled: { type: 'number' }, domains: { type: 'object' } }, required: ['filled', 'domains'] } }
);
if (!merged || merged.filled === undefined) throw new Error(`Merge FAILED: classify_domains.py did not produce data/problems_full_labeled.json.`);
log(`Labeled corpus written: filled ${merged.filled} domain(s); final domains ${JSON.stringify(merged.domains)}`);

return {
  unknown_in: ids.length,
  classified: labeled,
  filled: merged.filled,
  domains: merged.domains,
  labeled_corpus: `${ROOT}/data/problems_full_labeled.json`,
};
