# Crux Bank

**Goal: help an LLM solve IMO-level olympiad problems it would otherwise miss.** At that
altitude a strong model rarely lacks the *ideas* — it has seen spiral similarity, Vieta
jumping, the extremal principle, generating functions. What it lacks under exam conditions is
the **recall trigger**: facing a novel problem, it doesn't remind itself of the analogous
solved problem that would crack it. This bank is a **searchable corpus of worked olympiad
cruxes** the model can grep for analogous solves.

## Hypothesis

The model already knows the techniques; it fails from failed *recall*, not missing knowledge.
Given a searchable corpus of past problems' critical steps, a model facing a new problem can
retrieve an analogous solve and adapt it. Tested by a **bank vs no-bank** ablation under an
identical solver / harness / prompt on the contamination-free 2026 validation set: does corpus
access raise the solve rate on problems the model otherwise misses?

## What it is — a greppable crux corpus

For each solved problem we extract its **1–3 load-bearing cruxes** — the genuinely hard,
non-obvious moves the solution turns on — each as a `(technique, how_used)` pair:

- `technique` — the reusable move, named concretely, carrying **no constant from this problem**
  (a pointer a solver of a *different* problem could borrow; the solver still supplies the
  execution).
- `how_used` — how that move played out *here* (the problem-specific objects, constants,
  construction).

Each crux also carries a `domain`, a fixed-taxonomy `subtopic`, and free-form `technique_tags`
(e.g. `power-of-a-point`, `lifting-the-exponent`).

**Retrieval is just grep, at solve time.** A model reads a new problem, greps
`output/cruxes.json` (by subtopic, by technique text, by tags), gets `problem_id`s, and reads
those problems' full solutions from `data/problems_full.json` to adapt. Two surfaces, joined by
the plain `problem_id`:

| surface | file | content |
|---|---|---|
| index | `output/cruxes.json` | `technique` + `how_used` + `subtopic` + `technique_tags` per crux |
| solutions | `data/problems_full.json` | statement + full solution for every problem |

We deliberately keep this simple — a corpus the model queries **live** — rather than a
precomputed retrieval index. (An earlier direction pre-clustered cruxes by *recognition cue*;
it is set aside in favour of grep until the simple version is shown to need more.)

## Contamination guarantee

The corpus is strictly **pre-2026** (source AI-MO/olympiads spans ≤2025; the builder drops any
year ≥2026), so it is disjoint from the `math-contests-2026` validation set (root
`problems.jsonl`). Stage `01` keeps only **medium + hard** problems (IMO P2/P3/P5/P6 altitude);
easy ones are dropped.

## Method — two workflows

### 01 — extract cruxes  (`code/01_extract_cruxes.workflow.js`)

Takes a list of `problem_id`s (via `args`), difficulty-filters (drops easy), and per surviving
problem pulls the load-bearing cruxes. Each crux is validated by a **reconstruct A/B loop**
(≤5 rounds, two separate agents): a fresh, solution-blind prober **B** gets the statement +
cruxes and must rebuild the solution path; a self-correcting author **A**, who holds the
official solution, judges whether B recovered it and rewrites any crux that didn't carry the
path. A crux that can't regenerate its own solution is fixed or dropped. Output:
`output/cruxes.json`.

> **Cost / scale.** The reconstruct loop is expensive — ~12 agent calls per problem — and the
> workflow runtime hard-caps at **1000 agent calls per run** (~80 problems). Run `01`
> **per domain, in batches** under that cap (or drop the reconstruct loop for a cheaper
> extract-only pass) rather than launching a whole domain at once.

### 04 — classify domains  (`code/04_classify_domains.workflow.js`)

The non-shortlist sources ship without a `domain` label. This workflow backfills them
(group A **annotates** a domain → group B independently **reviews/corrects** it) and rewrites
`data/problems_full.json` in place (atomic write; git is the backup). This lets a single-domain
run (e.g. all number_theory) pull from the whole corpus, not just the pre-labelled shortlist.

## Subtopic taxonomy

Organizational filing labels (chosen by the `01` extractor). Fixed 37-subtopic list from the
olympiad canon (Engel; Chen's EGMO+OTIS; Zhao):

- **algebra (6):** functional-equations · polynomial-roots-and-factoring ·
  inequalities-SOS-and-convexity · sequences-and-recurrences ·
  telescoping-and-summation · symmetric-functions-and-substitution
- **number_theory (10):** p-adic-valuation · lifting-the-exponent ·
  zsygmondy-and-primitive-divisors · orders-and-primitive-roots ·
  modular-arithmetic-and-CRT · size-bounding-and-descent · vieta-jumping ·
  divisibility-and-gcd · diophantine-and-factoring · cyclotomic-and-roots-of-unity
- **combinatorics (13):** extremal-principle · pigeonhole · invariants-and-monovariants ·
  double-counting · bijections-and-encoding · coloring-and-parity ·
  graph-theory-and-connectivity · induction-and-construction · processes-and-algorithms ·
  linear-algebra-method · games-and-strategy · generating-functions · probabilistic-method
- **geometry (8):** angle-chasing-and-cyclic-quads · power-of-a-point-and-radical-axes ·
  spiral-similarity-and-rotation · inversion · projective-and-cross-ratio ·
  trig-and-length-bashing · coordinate-and-complex-bashing · barycentric-and-areas

## Plumbing — fail fast, log loud

Every agent **writes its own output** to a scratch file under `output/tmp/`; committed python
scripts in `code/scripts/` do all merging; the workflow JS only orchestrates and passes short
control data (ids, domains), never bulk crux text. Required inputs (the `01` id list) throw if
missing rather than running a default. Fatal/structural problems (no scratch dir, zero cruxes
merged, an unconfirmed write) throw immediately; untrusted agent output (a bad row, a corrupt
batch file) is dropped with a `⚠️`-named stderr line and surfaced at the end of the run.

## Files

```
crux_bank_pilot/
  README.md
  code/
    01_extract_cruxes.workflow.js     extract cruxes -> reconstruct A/B -> output/cruxes.json
    04_classify_domains.workflow.js   backfill domain on unlabelled rows (annotate -> review)
    scripts/
      build_corpus.py                 download AI-MO, group, filter -> data/*.json
      merge_cruxes.py                 01 scratch -> output/cruxes.json
      classify_domains.py             04 scratch -> rewrite data/problems_full.json in place
  data/
    problems.json                     small recent-years sample
    problems_full.json                full corpus (1026 problems, 2006-2025) — statements+solutions
  output/
    cruxes.json                       the crux index (grep target)
```

Corpus membership is not tracked in a file — it is the diff: the `problem_id`s in
`cruxes.json` are what's extracted; everything in `problems_full.json` that isn't there is
not (yet) extracted.

## Reproduce

```
python3 code/scripts/build_corpus.py                                    # -> data/problems*.json
# 04: backfill domain on the unlabelled rows (one-time), rewrites data/problems_full.json:
Workflow({ scriptPath: "code/04_classify_domains.workflow.js" })
# 01: extract cruxes for a batch of ids (REQUIRED; throws if absent). Keep each run <~80 ids:
Workflow({ scriptPath: "code/01_extract_cruxes.workflow.js", args: ["aimo-0576", "..."] })  # -> output/cruxes.json
```

## Source

AI-MO/olympiads (huggingface.co/datasets/AI-MO/olympiads) — official olympiad problems +
solutions pre-extracted to clean LaTeX and segmented per solution. We use the
top-IMO-altitude, proposer-heavy competitions AI-MO has segmented.

**Full corpus (`data/problems_full.json`) — 1026 problems, 2006–2025:**

| source | problems | years | notes |
|--------|---------:|-------|-------|
| IMO Shortlist | 525 | 2006–2023 | international; canonical hard set; domain-labelled (A/C/G/N) |
| USAMO | 119 | 2006–2025 | USA; pre-2006 trimmed |
| USA TSTST | 114 | 2011–2024 | hardest US tier |
| Dutch TST | 100 | 2006–2025 | strong proposer programme |
| RMM | 57 | 2011–2023 | Romanian Masters; IMO-P3/P6 altitude |
| USA TST | 55 | 2014–2024 | USA team-selection test |
| Germany TST | 50 | 2006–2022 | strong proposer programme |
| IMO | 6 | 2025 | the contest itself (labels capped at 6) |

`YEAR_MIN = 2006` trims the stylistically-different old era; `YEAR_MAX = 2025` is the
contamination guard (strictly pre-2026). Domain is backfilled by `04` for non-shortlist sources.
