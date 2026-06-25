# Math Contests 2026

132 problems from national olympiads and team-selection tests held **January 2026 and onward** — a held-out benchmark for math reasoning, sourced after the contests ran but before solutions were widely propagated, so they should **not appear in any current LLM training data**.

**Excluded:** BMO Round 1 (held Nov 2025) and USA TSTST (2025 cycle) — kept strictly to 2026 events. Actual IMO 2025/2026 problems and known IMO Shortlist problems are also excluded.

## Sources & countries

15 contests across 11 countries: **China** (TST), **Russia** (All-Russian MO), **Romania** (NMO, TST, RMM), **USA** (USAMO, USAJMO, TST), **Iran** (TST), **South Korea** (FKMO), **Vietnam** (TST), **India** (INMO), **Canada** (CMO), **UK** (BMO Round 2), **Germany** (Bundeswettbewerb).

## Domains

- combinatorics: 47
- number theory: 32
- geometry: 29
- algebra: 24

## Difficulty (absolute IMO-position scale)

`difficulty_rating` (1–10) and `difficulty_level` rate intrinsic hardness vs. a real IMO slot — **not** relative to a problem's own contest.

| level | rating | IMO equivalent | count |
|-------|--------|----------------|-------|
| easy   | 1–4  | P1 / P4 | 20 |
| medium | 5–7  | P2 / P5 | 73 |
| hard   | 8–10 | P3 / P6 | 39 |

## Files

**`problems.jsonl`** (answer-free test inputs):

- `problem_id` — unique id, `<source>-2026-<n>`
- `statement` — problem text in Markdown + LaTeX
- `country`, `source` — origin country and contest
- `url` — source link (AoPS or official PDF)
- `year` — always 2026
- `domain` — algebra / combinatorics / geometry / number_theory
- `difficulty_rating` (1–10) and `difficulty_level` (easy / medium / hard)
- `task` — proof_only / compute_and_prove
- `answer_type` — none / number / expression / set / list / characterization

## Auditing

Every record was adversarially audited by independent LLM agents: statement integrity, 2026 provenance, and domain/difficulty/task labels.

## Citation

```bibtex
@misc{hasan2026mathcontests,
  title  = {Math Contests 2026: A Held-Out Olympiad Benchmark},
  author = {Adib Hasan},
  year   = {2026}
}
```
