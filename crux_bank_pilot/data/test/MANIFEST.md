# Test set — math-contests-2026 hard problems (cue experiment)

**Purpose.** Oracle / upper-bound experiment for the cue hypothesis: build a leak-free
recognition cue for each hard test problem from its official solution, then measure whether
giving the solver that situation-hint raises the solve rate over the no-cue baseline.

This is the **ceiling** experiment (perfect retrieval — each problem's cue comes from its own
solution), not the retrieval experiment. Validity depends on the cues being **leak-free**
(a cue may name the situation, never the move/answer); a leak-audit gates the handoff.

## Provenance (reproducible)

- **Statements + metadata:** `proval/problems.jsonl` (the math-contests-2026 benchmark, 132
  problems), filtered to `difficulty_level == "hard"` → **39 problems**.
- **Official solutions:** HuggingFace `notadib/math-contests-2026`, config `solutions`
  (132 rows), field `reference_solutions` (list of `{type, source_url, solution}`), joined by
  `problem_id`. Fetched via the datasets-server `/rows` API.
- **Build:** `test_problems.json` = per hard problem `{problem_id, domain, competition, year,
  problem (statement), reference_answer, solutions:[solution text…], _solution_meta}`.

## Coverage

- 39 hard problems; **34 have ≥1 reference solution**, 15 of those have >1.
- **5 have NO reference solution** (`reference_solutions: []`): `inmo-2026-04` (answer only),
  `inmo-2026-06`, `romania-tst-2026-04`, `romania-tst-2026-06`, `usamo-2026-03`. These cannot
  get an oracle cue and are reported separately (baseline-only).
- Domains (all 39): geometry 13, combinatorics 12, number_theory 9, algebra 5.

## Baseline

No-cue baseline (solver + `knowledge_base.md` only) = **24/39 solved** (`proval/results/`).

## Gap-fixing

Reference solutions vary in rigor. The gap-audit (`verify_solutions.workflow.js`) classifies
each as `ok / minor_gap / major_gap / wrong`, fixes fixable gaps, and flags unfixable ones;
all fixes are recorded in `gap_report.md`. For a cue, *approach-level* correctness is what
matters (a wrong approach → a wrong cue), so wrong/bogus solutions are the priority to catch.
