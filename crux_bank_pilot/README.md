# Crux Bank

A searchable corpus of worked olympiad **cruxes** — the hard moves a solution turns on — that
an LLM can grep to find analogous solved problems when it's stuck on a new one.

**Hypothesis:** the model already knows the techniques; it fails from failed *recall*. Give it a
searchable corpus of past problems' critical steps and it can retrieve an analogous solve and
adapt. Tested by a **bank vs no-bank** ablation on the 2026 test set (root `problems.jsonl`).

## What's in it

Per solved problem, its 1–3 load-bearing cruxes, each a pair:

- `technique` — the reusable move, carrying **no constants from this problem** (a pointer, not
  a solution).
- `how_used` — how that move played out *here*.

Plus `domain`, a fixed `subtopic`, and free-form `technique_tags`.

**Retrieval = grep, at solve time.** Read the new problem → grep `output/cruxes.json` (by
subtopic / technique text / tags) → get `problem_id`s → read those solutions from
`data/problems_full.json` → adapt. Two files, joined by `problem_id`. No precomputed index.

## Build — two workflows

- **`01` extract** — per problem, pull the cruxes and validate each with a reconstruct A/B loop
  (a solution-blind prober rebuilds the path; a solution-holding author rewrites any crux that
  doesn't carry it). → `output/cruxes.json`.
  *Expensive (~12 agents/problem) and the run caps at 1000 agents (~80 problems) — run
  per-domain in batches.*
- **`04` classify domains** — backfill `domain` on the unlabelled corpus rows (annotate →
  independent review), rewriting `problems_full.json` in place (atomic; git is the backup).

## Layout

```
code/    01_extract_cruxes.workflow.js · 04_classify_domains.workflow.js
         scripts/  build_corpus.py · merge_cruxes.py · classify_domains.py
data/    problems.json (sample) · problems_full.json (1026 problems, statements + solutions)
output/  cruxes.json (the index)
```

- **Contamination-safe:** corpus is strictly pre-2026, disjoint from the 2026 test set. `01`
  keeps **medium + hard** only.
- **Corpus membership** = the `problem_id`s in `cruxes.json`; everything else in
  `problems_full.json` isn't extracted yet.
- **Source:** AI-MO/olympiads — IMO Shortlist, USAMO, TSTST, Dutch/Germany TST, RMM, USA TST
  (2006–2025, 1026 problems).
