# Crux Bank

**Goal: solve IMO-level olympiad problems.** At that altitude a strong LLM rarely lacks the
*ideas* — it has seen spiral similarity, Vieta jumping, the extremal principle, generating
functions. What it lacks under exam conditions is the **recall trigger**: facing a novel
problem, it doesn't *remind itself* of the one idea that cracks it. This bank supplies that
trigger.

It is indexed not by *techniques* (the moves) but by **cues** — short, structural
**recognition fingerprints** ("when you see *this kind of situation*..."). A cue never states
the move; it names the situation, at the **entry level** — the configuration a solver
recognizes *cold*, before choosing an approach. The model matches its new problem to a cue,
is reminded which family of idea applies, and **derives the rest itself**. Each cue points to
the problems where it fired and, for each, the technique(s) used and how — so the model can
study analogous solves without being handed an answer.

Three properties make a cue retrievable rather than decorative:

- **Atomic** — one cue = one situation, never a compound ("X *or* Y"); a compound is
  unmatchable, since a new problem instantiates one branch, not the bundle.
- **A fingerprint, not an abstraction** — specific is good. A cue that fires on *one* problem
  but hands a near-identical solved case to the next problem that matches it is high-value;
  a cue that would fire on everything selects nothing. We optimize for **precision at match
  on an unseen problem**, not for how often the cue happens to recur in this corpus.
- **One cue → many techniques** — the entry cue carries the *whole menu* of moves its
  problems used as payload. Mid-proof steps (a phantom point, a radical-axis manufacture) are
  **not** their own cues — they ride under the entry cue. Recognize the situation, see
  everything that worked there, adapt.

## Hypothesis (the paper's claim)

**The model already knows the ideas; it fails from failed *recall*, not missing knowledge. A
hint about the *situation* — not the solution — is enough to make it remind itself of the
relevant idea, which it can then derive on its own.** Two consequences shape the whole design:

1. **Hint the situation, not the move.** A cue that named the technique would be doing the
   model's work (and would leak the solution, making the ablation uninterpretable). A cue that
   names only the *situation* triggers recall while leaving the derivation entirely to the
   model — which is exactly the skill we want to elicit on a genuinely new problem.
2. **The recurring, retrievable unit is the cue (the precondition), not the technique (the
   move).** Preconditions are structural and recur across problems; the moves that resolve them
   are largely bespoke. So the bank is indexed by cue — recognize "I am in this situation,"
   pull up analogous solved problems, derive the move.

Tested by a `bank` vs `no-bank` ablation under an identical solver / harness / prompt on the
contamination-free 2026 validation set: does reminding the model of the *situation* raise the
solve rate on IMO-level problems it otherwise misses?

### Why a cue index, not a technique bank (the empirical pivot)

We first built a **technique** bank (distill each crux into a one-move pointer, index by the
move). On a pilot of **57 IMO-Shortlist 2022–2023 problems → 240 cruxes → 195 distilled
techniques**, the techniques were **almost entirely one-off**: 189 of 195 appeared in a
single problem; only ~3% recurred across problems. A skim layer whose entries don't recur
cannot help on a *new* problem — the needed entry usually isn't in the bank, and when it is,
it *is* the answer, not a retrieval handle.

Re-deriving a **cue** (the recognition trigger) for each crux and clustering those instead,
the recurrence rose sharply (an early pass measured ~52% of cruxes under a cue shared by ≥2
problems, vs ~3% for techniques). The cue is the **input** (the recognizable setup, which
repeats); the technique is the **output** (the clever move, which doesn't).

A caveat we hold honestly: that 52% was measured under a *loose* cue definition that allowed
compound ("X or Y") cues, which inflate sharing. Under the stricter **atomic / entry-level**
definition above, compounds split and the headline recurrence figure *drops* — but this is
the more defensible claim, not a weaker one. The load-bearing property is not "cues recur a
lot in this corpus"; it is **a cue is a high-precision structural fingerprint that fires on a
new, unseen problem and retrieves an analogous solve**. Corpus recurrence is supporting
evidence that cues are structural (not bespoke); the design target is precision-at-match. The
exact recurrence number is re-measured each time the bank is rebuilt under the current rubric.

### Cue vs technique (note to self)

- **Technique = the move** (the value). Bespoke, ~unique per problem (one-off 97%).
- **Cue = the situation that calls for it** (the query/key). Structural, recurs (52%).
- **Leak test (L):** given the cue + problem, the full derivation must still remain. Cue
  narrows *which idea to try*, not the *work of executing it*. Strip every word that only
  appears in the solution (named tool, construction, count, answer) — what survives is the
  cue; if nothing survives it was a technique in disguise.

Examples (from `cues.json`):

- One cue → 3 different moves: *"a line tangent to a circle at a named point"* →
  0569 angle-equality→similarity / 0570 converse alt-segment / 0573 directed-angle pole chase.
  Cue points; you still invent the chase. ✅ leak-free.
- Cross-domain (proves it's structural, not a topic): *"more items than a finite state set
  admits"* fires in NT (0580, parity-vector classes) **and** combinatorics (0715, online
  balancing rule then pigeonhole) — shared situation, unrelated machinery.
- Leak ❌: *"pigeonhole over the 126 response-maps on the 3×3 subboard"* names tool + state
  set + construction → problem is over. That's a technique wearing a cue's clothes.
- Boundary is enforced, not asserted: Reduce auto-flagged 3/151 as topical/leaky — a
  question-type (*"is an integer representable by a quadratic form"*), a presupposed-solution
  cue (*"corresponding points under an already-established similarity"*), a ubiquitous goal
  (*"prove two triangles similar"*). We surface them as evidence (R/D/L) has teeth.

## Contamination guarantee

The corpus is strictly **pre-2026** (source AI-MO/olympiads spans ≤2025; the builder drops
any year ≥2026), so it is disjoint from the `math-contests-2026` validation set. Only
**medium + hard** problems are kept (all four domains). Crucially, **no solution content
leaks into a cue**: a cue names the *situation*, never the move, the construction, or the
answer. This keeps the `bank` vs `no-bank` ablation interpretable — a cue that handed over
the technique would be smuggling the solution. Leak-freedom is enforced by the cue rubric's
(L) test and re-checked at consolidation (see Method).

## Method — two stages

The pipeline runs as two workflows so the expensive extraction runs once and the cheap,
iterable cue-clustering can be re-run.

### Stage 1 — extract cruxes  (`code/01_extract_cruxes.workflow.js`)

Per problem, pull the **1–3 load-bearing cruxes** the official solution pivots on, each as a
`(technique, how_used)` pair: `technique` = the specific reusable move (one move, named
concretely, carrying no constant from this problem); `how_used` = how that move played out
*here* (the problem-specific detail). Each crux is validated by a **reconstruct A/B loop**
(≤5 rounds, two separate agents): a fresh, solution-blind prober **B** is given the statement
+ cruxes and must rebuild the solution path; a self-correcting author **A**, who holds the
official solution, judges whether B recovered it and rewrites any crux that didn't carry the
path. A crux that can't regenerate its own solution is fixed or dropped. Output:
`output/cruxes.json` (the validated cruxes — tier 2).

### Stage 2 — build the cue index  (`code/03_build_cues.workflow.js`)

Derive a **recognition cue** for each crux and cluster the cues. The cue is *derived here*,
from `(technique, how_used)` + statement — stage 1 is left untouched. A cue must be **atomic**
(one situation, no "or"-compounds) and **entry-level** (a recognition you have *before*
choosing an approach; a mid-proof step is not a cue — it attaches as payload under the
problem's entry cue), and pass three tests: **(R) recognizable** from the problem (or a
concretely-stated reduction the solver has reached), **(D) discriminating** — it must pick a
real structural situation, not a topic or a question-type (this is the #1 failure: "a
functional equation", "prove a quadrilateral has an incircle" are too generic), and **(L)
leak-free** — it names the situation, never the tool. If the sharpest noun for a crux *is* the
tool (homothety center, radical axis), that is the signal it is payload, not a cue.

Because one agent cannot hold every crux at corpus scale (~3k cruxes at 1000 problems),
clustering is **seed → map → reduce**:

- **Seed** (`output/cue_seeds.json`) — a small, hand-cleaned registry of structural cues that
  fixes known misfires up front and gives the run a consistent starting vocabulary. It is a
  *starting* set, **not a closed one** — Map may add cues freely.
- **Map** — batch the cruxes; each batch (parallel, bounded) assigns every crux to a seed cue
  or proposes a new short structural cue. No batch sees more than its slice, so this scales to
  any corpus.
- **Reduce** — a **light cleanup**, not an aggressive merge. Domain-blocked agents read the
  registry as *short cue strings only* and collapse the rare genuine same-situation duplicate
  (a trigger Map wrote twice in different words), under one hard rule: **same theorem ≠ same
  cue** — two different situations that both happen to use Monge / Legendre / AM-GM stay
  separate (that is the whole design). Most cues are specific fingerprints and stay as-is.
  Reduce's real value is catching the *opposite* error: it **flags** compound ("or") cues and
  topical/question-type cues for review. (This stance was set by an adversarial check: every
  cross-problem merge initially proposed was rejected once the actual solutions were read —
  the candidates shared a theorem, not a situation.)
- **Render** — python joins canonical cues back to `cruxes.json` for each exemplar's technique
  + how_used → `output/cues.json` + `output/cues.md`.

### Defended design choices (for the writeup)

- **Index by cue, not technique** — justified by the recurrence evidence above (52% vs ~3%).
- **Cue derived in stage 2, not at extraction** — keeps stage 1 (and its validated
  `cruxes.json`) stable and reusable; cues can be re-derived/re-clustered cheaply without
  re-running the expensive reconstruct loop.
- **Seed → map → reduce, not one global pass** — the expensive grounding (raw cruxes) is
  sharded across bounded agents; only the *cheap* merge over short canonical cues is global,
  so cross-cutting cues are still reunited without any agent drowning.
- **Leak-free cue (R/D/L), enforced twice** — at Map (rubric) and Reduce (topical flag) — so
  the ablation stays interpretable.
- **Atomic + entry-level cues** — compounds are unmatchable and mid-proof steps aren't
  recognition triggers; folding them into the entry cue both fixes the two failure modes that
  produced question-type/tool-leak cues *and* realizes the "one cue → full technique menu"
  shape the hypothesis wants.
- **Reduce as cleanup, not merge (same theorem ≠ same cue)** — set by adversarial verification
  against the actual solutions, not by intuition: merging by shared theorem would quietly turn
  the cue index back into a technique cheatsheet, the exact thing the design rejects.

## Output — 3 model-facing tiers (drill-down)

The model skims tier 1, then drills down by `problem_id` when a cue fits:

| tier | file | content |
|---|---|---|
| 1 skim | `output/cues.md` | per cue: the recognition trigger + the problems where it fired, each with its technique and how_used. Recurring cues first; topical-flagged cues marked for review. |
| 2 crux | `output/cruxes.json` | `technique` + `how_used` per crux (stage 1). |
| 3 full | `output/problems_with_solutions.json` | statement + full solution + its cruxes. |

`output/cues.json` is the machine-readable cue set `cues.md` is rendered from. The link across
tiers is the plain `problem_id`.

### Subtopic taxonomy

Organizational only (used in stage 1 to bucket cruxes; the retrieval key is the cue, not the
folder). Fixed 37-subtopic list from the olympiad canon (Engel; Chen's EGMO+OTIS; Zhao):

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

## Plumbing

Every agent **writes its own output** to a scratch file under `output/tmp/`; committed python
scripts in `code/scripts/` do all collecting/merging/rendering; the workflow JS only
orchestrates and passes control data (short cue strings, ids) — never bulk crux text (the
heavy technique/how_used/LaTeX stays in `cruxes.json` and is read by python at render).

**Fail fast, log loud.** Stage-1 problem ids and the stage-2 seed registry are required inputs
— a missing/empty one throws rather than running a default. Fatal/structural problems (no
scratch dir, zero cruxes collected, an unconfirmed plan write) throw immediately; untrusted
agent output (a bad assignment row, a corrupt batch file, an id in two merge groups) is
dropped with a `⚠️`-named stderr line and surfaced at the end of the run — never hidden behind
a count mismatch.

## Files

```
crux_bank_pilot/
  README.md
  code/
    01_extract_cruxes.workflow.js     stage 1 (extract cruxes -> reconstruct A/B -> cruxes.json)
    03_build_cues.workflow.js         stage 2 (seed -> map -> reduce -> cues.json + cues.md)
    scripts/
      build_corpus.py                 download AI-MO, group, filter -> data/*.json
      merge_cruxes.py                 stage-1 tmp -> output/cruxes.json
      render_problems_with_solutions.py  problems + cruxes -> output/problems_with_solutions.json
      collect_cues.py                 stage-2 MAP scratch -> raw cue registry
      apply_cue_plan.py               apply the REDUCE consolidation plan -> canonical cues
      render_cues.py                  canonical cues + cruxes -> output/cues.json + cues.md
  data/
    problems.json                     recent-years run slice (2021–2025)
    problems_full.json                full corpus (1026 problems, 2006–2025) — pipeline input
  output/
    cruxes.json                       tier 2
    problems_with_solutions.json      tier 3
    cue_seeds.json                    hand-cleaned seed registry for stage 2
    cues.json, cues.md                tier 1 — the cue index
```

## Reproduce

```
python3 code/scripts/build_corpus.py                                   # -> data/problems*.json
# stage 1 REQUIRES the problem ids (an id array, or a JSON string of one); it throws if absent:
Workflow({ scriptPath: "code/01_extract_cruxes.workflow.js", args: ["aimo-0550", ...] })  # -> output/cruxes.json
Workflow({ scriptPath: "code/03_build_cues.workflow.js" })             # -> output/cues.json + cues.md (reads cruxes.json + cue_seeds.json)
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
contamination guard (strictly pre-2026). Domain is backfilled by the stage-1 judge for
non-shortlist sources.
</content>
