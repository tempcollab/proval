# Crux corpus — files, schema & subtopics

The crux corpus is a retrieval bank of the load-bearing moves of ~200 solved
pre-2026 Olympiad problems (disjoint from the 2026 test set), stored as two JSON
arrays joined by `problem_id`:

- `past_crux_moves_database.json` — the load-bearing move of each solved pre-2026
  problem.
- `past_problems_database.json` — the full statement + solution(s) of those problems.

**Use the exact field names below. Do not guess** — `crux_move` and `statement` do
**not** exist and querying them returns blank content.

## `past_crux_moves_database.json` fields

| field | meaning |
|---|---|
| `problem_id` | join key |
| `technique` | the crux move — the name of the load-bearing idea |
| `how_used` | how that move cracked the problem |
| `subtopic` | one subtopic (see list below); use this to filter |
| `domain`, `technique_tags`, `subtopics`, `retries` | secondary metadata |

## `past_problems_database.json` fields

| field | meaning |
|---|---|
| `problem_id` | join key |
| `problem` | the full statement (**not** `statement` / `problem_statement`) |
| `solutions` | the full solution(s) |
| `domain`, `competition`, `exam`, `year`, `problem_label`, `problem_type` | metadata |

## Subtopics by domain

Each crux carries one `subtopic`. Filter by these values.

**number_theory** —
`size-bounding-and-descent` · `divisibility-and-gcd` ·
`modular-arithmetic-and-CRT` · `p-adic-valuation` · `diophantine-and-factoring` ·
`orders-and-primitive-roots` · `lifting-the-exponent` · `vieta-jumping` ·
`cyclotomic-and-roots-of-unity` · `polynomial-roots-and-factoring` ·
`sequences-and-recurrences` · `telescoping-and-summation` · `double-counting` ·
`functional-equations` · `graph-theory-and-connectivity` ·
`induction-and-construction` · `pigeonhole` · `zsigmondy-and-primitive-divisors` ·
`invariants-and-monovariants` · `coloring-and-parity` · `games-and-strategy`

**algebra** · **combinatorics** · **geometry** — *Future work — no cruxes yet.*
