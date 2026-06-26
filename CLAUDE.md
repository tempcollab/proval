# proval

This repo solves Olympiad math problems with AI. Problems are in
`problems.jsonl` (the **Math Contests 2026** benchmark, 132 problems); reusable
theorems and strategies are in `knowledge_base.md`. Proofs are written in
**prose Markdown** (no Lean).

We target the **hard** problems only: the 39 entries whose `difficulty_level`
field is `"hard"` (IMO P3 / P6 difficulty, `difficulty_rating` 8–10). Ignore the
`easy` and `medium` problems.

The goal is to produce one file per hard problem, `results/<problem_id>.md`, that
records every approach tried and — when found — the full proof. Solve as many of
the hard problems as possible.

## For the orchestrator

This is a math repo, not a code repo. Adapt the standard round accordingly:

- **Setup: none.** There is no build, no package to install, no test suite. Skip
  the round-1 build-environment setup entirely — do NOT run `pip install`,
  `npm ci`, `uv sync`, or look for `package.json` / `pyproject.toml`. The only
  artifacts are Markdown files under `results/`.
- **Goal & eval.** The Goal is **maximize the number of hard problems solved**
  out of the 39 `difficulty_level: "hard"` entries in `problems.jsonl`. The eval
  is a count, not a test run: the number of `results/<id>.md` files whose
  `## Status` is `solved`.
  - List the hard problem ids:
    `grep '"difficulty_level": "hard"' problems.jsonl | grep -o '"problem_id": "[^"]*"'`
  - Eval command: `grep -rl '^solved$' results/ 2>/dev/null | wc -l` (count of
    solved problems). Baseline: 0.
  - "Verification" each round = the **proof-reviewer's** judgement, not a
    typechecker or linter. There is no `pyright`/`ruff`/`pytest` to run.
- **Build review = proof review.** Every proof-builder attempt is reviewed by the
  proof-reviewer. Its verdict (`APPROVE` / `CHANGES REQUESTED` / `RETHINK`) routes
  the round exactly as a code reviewer's would: APPROVE → done; CHANGES REQUESTED
  → back to the builder to close the gap; RETHINK → back to the proof-outliner.
- **Git artifacts.** The only things that should be committed are `results/*.md`
  (and edits to `CLAUDE.md` / `knowledge_base.md`). There are no build caches.

## Workflow

Each round, pick **1–3 hard problems** (`difficulty_level: "hard"` in
`problems.jsonl`) and work them **in parallel** — the per-problem loops are
independent, so launch them concurrently (one message, multiple agents) rather
than one problem at a time. For each problem, run this loop:

1. **math-explorer** — Read the problem, `knowledge_base.md`, and the problem's
   existing `results/<id>.md`. Report what's been tried, what worked, what
   failed and why, and which knowledge-base techniques look promising. Do NOT
   attempt the proof.
2. **proof-outliner** — Outline a proof *strategy*: the technique/theorem to use,
   the skeleton, and the key lemmas. Not a finished proof — a plan with the hard
   steps identified.
3. **outline-reviewer** *(optional)* — On a non-trivial outline, check it before
   details are filled: wrong technique, unjustified leaps, missing cases.
4. **proof-builder** — Fill in every gap: rigorous steps, all cases, full
   computations. Produces the candidate proof. (Runs on the strongest model — the
   deep reasoning step must not be downgraded.)
5. **proof-reviewer** — Adversarially judge the candidate: correctness, rigor, and
   progress. Score it and decide `solved | partial | unsolved`.

Then repeat. If a problem is **solved**, record the proof and mark it in run state
so it is not attempted again.

**Don't get stuck.** The objective is to maximize the *total* number solved. If a
problem makes no real progress over 2+ rounds, take a break from it (keep its `results/`
file) and spend the next rounds on fresh unsolved problems; come back to it later
if rounds remain.

## The `results/<problem_id>.md` contract

Every problem file MUST have these sections (agents read and update them):

```
## Status
solved | partial | unsolved

## Approaches tried
- <approach> — <verdict: worked / dead-end and why>

## Current best
The furthest correct progress: the key lemma, reduction, or partial result.
Empty only if nothing correct has been established yet.

## Full proof
Present ONLY when Status is `solved`. The complete, rigorous proof.
```

- **`solved`** = a complete, rigorous proof: every case covered, no gaps, every
  theorem invoked named, and (for problems with a final answer) the answer stated
  explicitly and verified.
- **`partial`** = a correct reduction or a proven key lemma, but the proof is not
  complete.
- **`unsolved`** = no correct progress yet.

## Rigor rules

These are mandatory. The proof-reviewer enforces them.

- **No skipped cases.** Every case in a casework proof must be settled.
- **No hand-waving.** No "clearly / obviously / it is easy to see / it follows"
  without justification. If a step is non-trivial, justify it.
- **Name your tools.** State every theorem or technique you invoke by name and
  cite the relevant entry in `knowledge_base.md`.
- **Verify final answers.** For `compute_and_prove` problems (and any with a
  non-`none` `answer_type`), state the answer explicitly and verify it by
  substitution or a small computation.
- **Prove, don't conjecture.** Distinguish "we have proved X" from "we conjecture
  X." Never present an unproven claim as established. Overclaiming is worse than
  admitting a gap — surface the gap so the next round can attack it.
- **For "find all / largest n":** prove an upper bound AND construct an example
  that attains it. One without the other is `partial`, not `solved`.
- **For "infinitely many":** exhibit an explicit family, don't assert existence.

## Working rules

- **Always read first.** Before attempting a problem, read its existing
  `results/<id>.md` and `knowledge_base.md`. Build on prior progress; don't repeat
  dead ends already recorded.
- **Never re-attempt a solved problem.** If run state marks it `solved`, skip it.
- **Record everything.** A failed approach with the reason it failed is valuable —
  write it under `Approaches tried` so no agent retries it.
- **One problem, one file.** `results/<problem_id>.md`, named by the `problem_id`
  field from the JSONL.
- **The scratch pad is the source of truth.** Discussion, attempts, and the proof
  all live in the problem file — not only in conversation.
