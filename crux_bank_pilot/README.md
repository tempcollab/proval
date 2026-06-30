# Crux Bank

A bank of reusable olympiad **techniques**, distilled from pre-2026 contest problems +
official solutions. Purpose: **retrieval of latent skill** — an LLM already knows the
techniques but fails hard problems because it doesn't recall the right one at the right
moment. The bank is a compact index of **techniques**: each entry is one short, distilled
**technique** — a reusable move named as a pointer — the solver skims and recalls when it
fits the problem at hand. (There is no separate recognition "cue": the technique string
*is* the entry. The model already has the method; the entry's job is only to name it.)

## Hypothesis (the paper's claim)

A **hint beats a solution**: the model fails from *failed retrieval*, not missing
knowledge. A short distilled technique — naming a reusable move — reactivates a method the
model already has so it reaches for it on a new problem. Tested by a `bank` vs `no-bank`
ablation under an identical solver/harness/prompt.

## Contamination guarantee

Corpus is strictly **pre-2026** (source AI-MO/olympiads spans ≤2025; the builder drops
any year ≥2026), so it is disjoint from the `math-contests-2026` validation set. Only
**medium + hard** problems are kept (all four domains). No solution text appears in a
technique — it names the move, never the step-order or the conclusion, enforced by the
distill A/B loop (a fresh, blind prober must recover the technique's application from the
technique alone, and flags any entry that leaked).

## Method — two stages, two autoencoder loops (A/B)

Run as two workflows so the expensive stage runs once and is reused. The validation
loops use **two separate agents**: a fresh, solution-blind prober **B** that only
*attempts* a recovery (it can't see the answer, so it can't rationalize), and a
self-correcting author **A** that holds the ground truth, compares B's attempt to it,
and revises. ≤5 rounds, early-stop on success.

**A technique is a POINTER, not a recipe — and ONE move, not a chain.** The hypothesis is
that the model already knows the method, so an entry must answer **what** (which single
move to reach for) — named specifically — and must NOT order the proof steps or state the
crux conclusion the solver is meant to discover. **One technique = one specific move.** A
solution's 1–3 *critical steps* become 1–3 *separate* entries, each naming one move; a
string that chains several moves ("do A, then B, then descend") is a **mini-solution** —
the proof in abstract nouns — and is the #1 failure. Mini-solutions, sequencing into the
argument, writing "the answer is logarithmic", or gluing this problem's cash-out onto a
general move ("...by exhibiting the cyclic quad among the secant feet") are all **leaks**
that make the bank-vs-no-bank ablation uninterpretable (you'd be handing over the
solution). The distill prober **B** enforces this: it flags any entry that leaked
(a mini-solution, or recovery-by-transcription, counts as a FAIL, not a pass), and author
**A** crushes it to a one-move pointer before the loop can converge. Equally, an entry must
not **summarize** upward into a vague category ("use induction") — it names the concrete
reusable core. The sweet spot: one specific move, not a mini-solution, not a category.

**Stage 1 — `code/01_extract_cruxes.workflow.js`** (expensive)
1. **Difficulty** — rate easy/medium/hard + tag domain; drop easy (keep all 4 domains).
2. **Extract** — per problem, pull 1–3 cruxes (one per *critical step*) from the solution.
   Each crux = a `technique` (generic, reusable, **one move**) + `how_used` (this problem's
   concrete detail). A solution with several hard steps yields several cruxes — never one
   crux whose technique chains them.
3. **Reconstruct loop** (A/B, ≤5 rounds) — **B** (fresh, no solution) gets statement +
   cruxes and *attempts* to rebuild the solution path. **A** (holds the solution)
   compares B's sketch to the real solution; if the crux didn't carry the path, A
   rewrites it and a new B retries. Encode check: a crux that can't regenerate its own
   solution is fixed or dropped.
4. **Merge** — `merge_cruxes.py` + `render_problems_with_solutions.py`.

**Stage 2 — `code/02_distill_cruxes.workflow.js`** (cheap, iterable)
1. **Distill loop** (A/B, per subtopic, ≤5 rounds) — **A** finds the **common-core**
   reusable move, collapsing same-move cruxes into one-**technique** entries under two
   hard guards: **specific, not general** (a concrete move, never a vague "use induction"
   category) and **one move, not a chain** (one technique = one move; a multi-move
   "do A then B then descend" string is a mini-solution and is split/trimmed). **B**
   (fresh, blind) gets *statement + technique* (not `how_used`), *attempts* to reproduce
   how the technique applies, AND flags whether the technique **leaked** the solution
   (mini-solution, ordered steps, stated conclusion, or glued cash-out). A compares to the
   filed `how_used`; if B couldn't reproduce it, A sharpens it; if B flagged a leak, A
   crushes it to a one-move pointer. Both must clear before convergence.
2. **Merge** (per domain, ~1 pass) — one merger per domain reads **all** entries in its
   domain across subtopics and proposes a **conservative merge plan** (which
   near-duplicate entries collapse, with the unified technique). This is what breaks
   the subtopic wall *within* a domain. `apply_merge_plan.py` executes the plan.
3. **Render** — `render_cheatsheet.py`.

The two loops are duals: stage 1 checks `crux → solution` (does the technique unlock the
solve?); stage 2 checks `technique → how_used` (does the entry faithfully encode how the
technique is applied?). In both, B is independent and blind — the recovery is an honest
probe, not self-grading.

## Plumbing

Every agent **writes its own output** to a scratch file under `output/tmp/`; committed
python scripts in `code/scripts/` do all merging; the workflow JS only orchestrates and
passes control data (topic strings, file handles, verdicts) — never bulk crux text.
`output/tmp/` is deleted at the end of each stage. To avoid a wasted agent turn, the
stage-2 distiller **writes its own subtopic file as the final action of its last reasoning
call** (no separate writer agent); stage 1 keeps a small writer because its record is
assembled across rounds in JS.

**Fail fast, log loud.** Stage 1's problem ids come from `args` (an id array, or a JSON
string of one) with **no fallback** — a missing/empty/unparseable `args` throws rather
than silently running a default slice. Both stages emit a `▶`-prefixed banner at each
phase and a per-item line (`✓ [id] …` / `· [id] …`) so progress is always visible; any
agent that fails inside a `parallel`/`pipeline` batch is **named in a `⚠️` line** (which
problem / subtopic / domain dropped), never hidden behind an end-of-run count mismatch.
A write step that doesn't confirm `ok:true` is treated as a failure (its item is dropped
and logged), not backfilled from the in-memory count.

## Output — 3 model-facing tiers (drill-down)

The model skims tier 1, drills down by `problem_id` when a technique fits:

| tier | file | content |
|---|---|---|
| 1 skim | `bank/CHEATSHEET.md` | per entry: one distilled **technique** + exemplar ids, grouped domain→subtopic |
| 2 crux | `output/cruxes.json` | `technique` + `how_used` per crux (+ `retries` it took to validate) |
| 3 full | `output/problems_with_solutions.json` | statement + full solution + its cruxes |

`output/cheatsheet.json` is the machine-readable entry set `CHEATSHEET.md` is rendered
from. The link across tiers is the plain `problem_id`.

### Subtopic taxonomy

Organizational only (the retrieval key is the solver skimming the techniques, not the folder).
**domain = group**, **subtopic = file**, **entries = the techniques inside**. Fixed
37-subtopic list from the olympiad canon (Engel; Chen's EGMO+OTIS; Zhao); the extractor
picks ≤3 per crux:

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

**37 subtopics total** (algebra 6 · number_theory 10 · combinatorics 13 · geometry 8).

## Files

```
crux_bank_pilot/
  README.md
  code/
    01_extract_cruxes.workflow.js     stage 1 (difficulty → extract → reconstruct A/B → merge)
    02_distill_cruxes.workflow.js     stage 2 (distill A/B → merge-per-domain → render)
    scripts/
      build_corpus.py                 download AI-MO, group, filter → data/*.json
      merge_cruxes.py                 tmp/cruxes_raw + tmp/difficulty → output/cruxes.json
      render_problems_with_solutions.py  problems + cruxes → output/problems_with_solutions.json
      apply_merge_plan.py             tmp/moves + merge_plan → tmp/moves_final (executes the plan)
      render_cheatsheet.py            tmp/moves_final + cruxes → output/cheatsheet.json + bank/CHEATSHEET.md
  data/
    problems.json                     run slice (2021–2025, 151 problems)
    problems_full.json                full corpus (1026 problems) for scaling
  output/                             cruxes.json, problems_with_solutions.json, cheatsheet.json
  bank/CHEATSHEET.md                  tier-1 skim layer
```

## Reproduce

```
python3 code/scripts/build_corpus.py          # → data/problems.json + problems_full.json
# stage 1 REQUIRES args (the problem ids); it throws if omitted:
Workflow({ scriptPath: "code/01_extract_cruxes.workflow.js", args: ["aimo-0387", "aimo-0388", ...] })   # → output/cruxes.json + problems_with_solutions.json
Workflow({ scriptPath: "code/02_distill_cruxes.workflow.js" })   # → output/cheatsheet.json + bank/CHEATSHEET.md (reads output/cruxes.json)
```

Stage 1 takes the problem ids via `args` (required — an id array, or a JSON string of
one; no fallback, it throws if absent). Corpus choices (competitions, year range,
filters) are constants at the top of `build_corpus.py`.

## Source

AI-MO/olympiads (huggingface.co/datasets/AI-MO/olympiads) — official olympiad problems +
solutions pre-extracted to clean LaTeX and segmented per solution. We use the
top-IMO-altitude, proposer-heavy competitions AI-MO has segmented (Iran/Hungary/Romania
are excluded: AI-MO ships only their raw PDFs, no segmented split).

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

`YEAR_MIN = 2006` trims the stylistically-different old era (esp. USAMO 1972–2005);
`YEAR_MAX = 2025` is the contamination guard (strictly pre-2026). Domain is backfilled
by the stage-1 judge for non-shortlist sources (no label-encoded domain).

**Run slice (`data/problems.json`) — 151 problems, 2021–2025:** IMO-SL 88, USAMO 30,
USA TST 15, RMM 12, IMO 6. The recent-years subset used for the pilot build.
