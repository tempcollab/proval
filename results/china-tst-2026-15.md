# china-tst-2026-15

## Status
partial

## Approaches tried
- 8-atom "cube minus antipodal" construction + 3-bit "first matching coordinate
  wins" coloring (Part A, lower bound α ≥ 7/8) — **WORKED**: fully rigorous,
  verified by enumeration over the 8 atoms (`/tmp/verify_15.py`): coloring
  well-defined, min degree 7n/8 − 1, RED has 2 components, YELLOW 2, BLUE 4
  (perfect matching), and all 16 (R,Y,B) triples fail to cover. Banked below.
- Single-vertex closed-neighborhood cover + non-neighbor analysis (L1–L3) — **WORKED**
  as a reduction: L1 (one vertex's three components cover its closed neighborhood),
  L2 (the only misses are completely-separated non-neighbors, and there are < n/8 of
  them), L3 (common neighbors of a separated pair receive distinct colors, and a
  separated pair has ≥ 3n/4 common neighbors). All three proven below.
- **Type-grid + per-cell σ-bound double count (Part C)** — **WORKED for a large
  sub-class**: building the (color-1, color-2) component grid on the two smallest
  color-component counts, the per-cell σ-bound (KL1: a cell with ≥ 2 blue components
  present has anti-block weight ≤ n/4 − 2) **rules out Case B (every cell ≥ 2 blue
  comps) for EVERY profile (c1,c2)** (KL2), and **closes the main case c1 = c2 = 2
  completely** (KL3, including the sharp (2,2,4) extremal configuration). This proves
  the upper bound α ≤ 7/8 for every bad coloring whose two smallest color-component
  counts are both 2 — which includes the sharp/extremal colorings. Built rigorously
  below (Part C). Arithmetic of KL2 verified (`/tmp/check15e.py`, `check15f.py`,
  `check15g.py`); KL3 verified (`check15b.py`); sharpness/load-bearing −2 slack
  verified (`check15k.py`).
- **Sub-case 2B of the c1=2, c2=3 grid (low-cell single-type CS lever)** — **WORKED**;
  built as KL5 / C.8. Two same-row blue-pure low cells P_{i0,j0}=B_s, P_{i0,j1}=B_p
  (B_s≠B_p), other four cells high. Apply L2's CS identity to one realized vertex of
  each low cell (legal at k=1 — it is the C.3 per-type identity, NOT the k≥2
  m/(m−1)-averaging) to get (A′) a12−s12≤n/8−1 and (B′) a12−t12≤n/8−1; with the
  disjointness inequalities s11≤a11, t10≤a10 (used to drop nonneg terms) and
  s12+t12≤a12 (needs B_s≠B_p) ⟹ a12≤n/4−2; then KL1 on the four high cells gives
  R_{i0}≥n/2+4 AND R_{i0}≤n/2−5, the n-independent contradiction 4≤−5. Subsumes the
  earlier "Case I / Case II (exceptional B_r)" split uniformly. Verified symbolically
  and by a minimal-infeasible-LP check; outline-review independently confirmed soundness
  and minimality. **Coverage caveat (review):** this closes ONLY the 2B geometry, not
  c2≥3; see open frontier (G1 ≥3-LOW, G2 mass, G3 c2≥4, G4 empty-LOW).
- **Round 12: general covering-triple criterion + general single-type CS lever +
  anti-block SUM identity + Branch-C/Branch-S complementarity + closed-form all-low
  squeeze** — **WORKED as new rigorous lemmas (C.9–C.13 below).** These (i) prove the
  general (any c1) covering-triple criterion and the exact Branch-C ⟺ obstruction ≤ 1
  complementarity; (ii) prove the general single-type CS lever (legal at k = 1, any c1);
  (iii) prove the anti-block SUM identity Σ A_ij = (c1−1)(c2−1)n; and (iv) fully close,
  in rigorous prose for **every c2 ≥ 3**, the **distinct-label all-blue-pure Branch-S**
  sub-case (every cell of the two-row grid blue-pure, labels distinct in each row) via the
  clean closed-form squeeze. This subsumes KL5 (the 2B geometry) and extends it to the
  whole distinct-label all-blue-pure family. (Repeated-label all-blue-pure grids — e.g.
  [B0,B0,B1,B1] rows — are NOT covered by the closed form; they are LP-infeasible but fall
  in the residual.)
  **What did NOT close in prose:** the general MIXED Branch-S patterns (HIGH + blue-pure
  + empty together, requiring the intricate joint blue-mass bookkeeping that the naive
  per-row and crude global bounds provably miss — see "WHY MIXED BRANCH-S IS HARD"), and
  Case A with c1 ≥ 3 in full generality. Both are **LP-certified** infeasible — an
  exhaustive/heavy LP sweep (`/tmp/probe5.py`, `/tmp/probe16.py`, `/tmp/probe19.py`)
  found **0 of 16482+ no-covering Case-A configs unbounded in n** across c1 ∈ {2,3,4},
  c2 ≤ 6 (c1=2,c2=3 exhaustive with labels ≤ 3: 5776 configs, 0 unbounded; the 34
  relaxed-feasible c1=3,c2=3 "dangerous" configs all become infeasible once the −2/−1
  integrality slack is restored) — but LP-infeasibility is **evidence, not a prose
  proof**, so these remain honestly open. Status stays **partial**.
- **Residual KL4 (Case A — a low cell — with c2 ≥ 3), the GENERAL routes** — **OPEN; both
  earlier proposed routes are DEAD ENDS.**
  - *Route (a): re-grid on (color-1, blue) axes to make all cells "high" and force a
    Case-B contradiction (equivalently "force c1 = c2 = 2").* **Dead end — it
    contradicts the very theorem it invokes.** KL2 proves Case B impossible for
    *every* axis pair, so a bad coloring must ALSO have a low cell in the
    (color-1, blue) grid; that grid is therefore provably NOT all-high, the opposite
    of what route (a) requires. And "force c1 = c2 = 2" is unsupported: the extremal
    construction itself has a 4-component color, so ≥ 3-component colors are not
    excludable — they merely cannot be the two smallest axes, and nothing forces the
    two smallest to both be 2. No merge map is produced. (Confirmed in round reports'
    `check15O.py`: the opposite-quadrant triple provably fails for c2 ≥ 3.)
  - *Route (b): empty-cell-vs-blue-pure split with induction on c2 (L3-iteration).*
    **Dead end — no working mechanism for either branch.** For an empty low cell, the
    asserted "merge two color-2 components, reducing c2 by 1" has no merge map and the
    complement is not forced single-blue (`check15S.py`). For a blue-pure low cell
    P_{i0,j0} = B_s, the triple (R_{i0}, Y_{j0}, B_s) misses exactly the rainbow
    partners CS*, with |CS*| ≤ n/8 − 1 — small but **nonempty** (`check15M.py`), so
    not a covering triple; the L3(b) iteration ("each miss shares ≥ 3n/4 common
    neighbors, force a second low cell, iterate") never yields a contradiction
    (`check15R.py`). Structurally, the σ-count's factor 1/(k−1) blows up at k = 1, so
    low cells are genuinely uncontrolled by the engine. Needs a NEW idea.

## Current best

**Answer (conjectured, lower bound proven; upper bound proven for all profiles with
two smallest component-counts = 2, plus the 2B geometry of (2,3)): α = 7/8.**

We have a complete rigorous proof of the lower bound **α ≥ 7/8** (Part A), a complete
rigorous proof of the reduction lemmas **L1, L2, L3**, and (Part C) a complete
rigorous proof of the **upper bound α ≤ 7/8 for every bad coloring whose two smallest
color-component counts are both 2** — including the sharp/extremal configurations
(profile (2,2,4)). Concretely Part C proves: (i) every color has ≥ 2 components;
(ii) the per-cell σ-bound KL1; (iii) **Case B (every grid cell has ≥ 2 blue
components) is impossible for EVERY profile (c1,c2)**; (iv) the **main case
c1 = c2 = 2 is fully closed**; and (v, new — KL5/C.8) inside the next profile
**c1 = 2, c2 = 3, the 2B low-cell geometry** (two same-row blue-pure low cells with
distinct blue components, the other four cells high) is closed by the low-cell
single-type CS lever, uniformly subsuming the prior Case I / Case II split.

This is a genuine advance into the c2 ≥ 3 regime but does **not** finish it. The honest
remaining gap is the rest of **Case A with c2 ≥ 3**: low-cell geometries with **≥ 3 low
cells (G1/G2)**, the **empty-low sub-cases (G4)**, and the **c2 ≥ 4** profiles (G3).
None of these is closed; in particular 3-LOW was never systematically analyzed (an
earlier claim that it was, is retracted). Precisely located under "THE REMAINING GAP."
Status: **partial**.

**Round-12 update (general machinery + distinct-label all-blue-pure closure).** The new
lemmas C.9–C.13 (below) add, with full rigorous proofs: the anti-block SUM identity
Σ A_{ij} = (c1−1)(c2−1)n (C.9); the **general single-type CS lever** valid for any c1
(C.10); the **general covering-triple criterion** (C.11); the exact **Branch-C / Branch-S
complementarity** (C.12); and — the substantive new closure — **C.13: every
distinct-label all-blue-pure Branch-S coloring on the 2 × c2 grid is impossible for every
c2 ≥ 3**, via the clean closed-form squeeze (3c2 − 8)/4 · n ≤ −2c2 < 0. C.13 subsumes the
2B geometry (KL5) and the distinct-label all-low family. The residual is now sharply
three-fold and LP-certified (16482+ no-cover Case-A configs across c1 ∈ {2,3,4}, c2 ≤ 6,
all bounded in n; exhaustive for c1 = 2, c2 = 3): (0) **repeated-label all-blue-pure**
grids (the closed form goes vacuous); (i) **mixed Branch-S** patterns at c1 = 2
(HIGH + blue-pure + empty
together), where the closed form and all per-row bounds provably fail and only the full
joint blue-mass bookkeeping (the LP) closes them; (ii) **Case A with c1 ≥ 3**. Both are
infeasible in the sharp LP but not yet turned into prose. Status remains **partial** —
the answer α = 7/8 is overwhelmingly corroborated but the upper bound is not yet a
complete prose proof beyond the closed sub-classes.

Throughout, fix a graph G on n vertices and a 3-coloring of its edges with colors
{R, Y, B} (red, yellow, blue). For a color c and a vertex v, let `C_c(v)` denote the
connected component of v in the subgraph of G consisting of all vertices and only the
c-colored edges. If no c-edge is incident to v, then C_c(v) = {v} is a singleton
component. A **covering triple** is a choice of one component in each color whose
union is V(G). Call vertices u, w **completely separated** if C_R(u) ≠ C_R(w),
C_Y(u) ≠ C_Y(w), and C_B(u) ≠ C_B(w).

---

### Part A — Lower bound: α ≥ 7/8 (COMPLETE)

We exhibit, for every m ≥ 1, a graph on n = 8m vertices with minimum degree
7n/8 − 1 and a 3-coloring admitting no covering triple. Since 7n/8 − 1 = (7/8 − 1/n)n,
this shows the property "δ(G) ≥ cn ⟹ a covering triple exists for every 3-coloring"
fails for every constant c < 7/8 (take n = 8m large enough that 7/8 − 1/n > c), hence
α ≥ 7/8.

**A.1 The graph G.** Index 8 disjoint **atoms** by the triples
(i, j, k) ∈ {0,1}³: V = ⊔_{(i,j,k)} A_{ijk}, with |A_{ijk}| = m for each atom.
For an atom a = (i,j,k), its **antipode** is ā = (1−i, 1−j, 1−k). There are 4
antipodal pairs of atoms. Put an edge between two distinct vertices iff their atoms
are **not** antipodal; in particular all within-atom pairs are edges (the atom is
itself, which is not its antipode), and a vertex of atom a is non-adjacent exactly to
the vertices of the antipodal atom ā.

**A.2 Minimum degree.** A vertex v in atom a is adjacent to every vertex except those
of ā (size m) and itself. Hence
deg(v) = (n − m) − 1 = 8m − m − 1 = 7m − 1 = 7n/8 − 1.
Equivalently: (m − 1) within its own atom plus 6m across the 6 non-antipodal other
atoms equals 7m − 1. This holds for every vertex, so δ(G) = 7n/8 − 1.

**A.3 The coloring (first matching coordinate wins).** For an edge {u, w} with u in
atom a = (a₀,a₁,a₂) and w in atom b = (b₀,b₁,b₂):
- if a = b (within-atom edge): color R;
- if a ≠ b (then a, b are non-antipodal, so at least one coordinate agrees): let t be
  the **smallest** index with aₜ = bₜ, and color the edge R if t = 0, Y if t = 1, B
  if t = 2.

This is well-defined: a non-antipodal pair of distinct atoms cannot disagree in all
three coordinates (that would make them antipodal), so a smallest agreeing index t
exists. (Verified by enumeration over all distinct non-antipodal atom pairs,
`/tmp/verify_15.py`.) Note the coloring of an edge depends only on the two atoms, so
it is constant across all inter-atom edges between a fixed pair of atoms.

**A.4 Components are unions of whole atoms.** Within a single atom a, every pair is an
edge and (when a contains both endpoints distinct, i.e. m ≥ 2) those edges are R; for
m = 1 each atom is a single vertex. Either way every atom lies entirely inside one
component of each color: the within-atom edges are all R, so a is internally
connected in red, hence inside one red component; and for yellow/blue, an atom of size
m ≥ 2 has no within-atom edge of that color but the constant inter-atom coloring puts
all of its vertices into the same color-c component as soon as a has any c-edge to
another atom (every vertex of a connects to that atom by a c-edge), and into singleton
components otherwise — but in our coloring every atom has Y- and B-edges leaving it, as
the component computation below shows. Concretely, because every inter-atom edge color
depends only on the atom pair, two vertices in atoms a and b are joined by a c-edge iff
the atom pair (a,b) has color c; thus the c-component of any vertex is the union of all
atoms reachable from its atom by a path of c-colored atom-pairs. **So it suffices to
compute the component structure at the level of the 8 atoms (m collapses out), and
"a covering triple covers V" ⟺ "the corresponding triple of atom-sets covers all 8
atoms."** This contraction is what makes the finite check below decisive for all m.

**A.5 Component structure (computed on the 8 atoms).** Contract each atom to a single
node and run connectivity per color (`/tmp/verify_15.py`):

- **RED.** Two atoms a, b are joined by a red atom-pair iff a₀ = b₀ (smallest agreeing
  index 0). Hence the red graph on atoms is the disjoint union of two cliques
  R₀ = {a : a₀ = 0} and R₁ = {a : a₀ = 1}, each on 4 atoms. **RED: exactly 2
  components**, R₀ and R₁, split by the first bit.
- **YELLOW.** An atom-pair is yellow iff a₀ ≠ b₀ but a₁ = b₁ (smallest agreeing index
  1). Within Y_j := {a : a₁ = j} (4 atoms), every two atoms differing in bit 0 are
  yellow-adjacent, and the four atoms of Y_j are connected through these edges; no
  yellow edge crosses between Y₀ and Y₁ (those would need a₁ = b₁). **YELLOW: exactly 2
  components**, Y₀ and Y₁, split by the second bit. (Enumeration confirms each Y_j is a
  single yellow component.)
- **BLUE.** An atom-pair is blue iff a₀ ≠ b₀ and a₁ ≠ b₁ (so the smallest agreeing
  index is 2, forcing a₂ = b₂). For a fixed third bit k there are exactly two such
  pairs of atoms — {(0,0,k),(1,1,k)} and {(0,1,k),(1,0,k)} — and each consists of a
  single atom-pair (an atom is blue-adjacent only to the unique atom differing in both
  of the first two bits and equal in the third). **BLUE: exactly 4 components**, the
  perfect matching on atoms:
  {(000),(110)}, {(001),(111)}, {(010),(100)}, {(011),(101)}.

(All three counts and the exact component sets reproduced by `/tmp/verify_15.py`.)

**A.6 No covering triple.** A triple consists of a red component R_i (first bit i ∈
{0,1}), a yellow component Y_j (second bit j ∈ {0,1}), and a blue component B (a
matched pair with common third bit c ∈ {0,1}). Consider the atom
α* := (1−i, 1−j, 1−c). Then:
- α* ∉ R_i because its first bit is 1−i ≠ i;
- α* ∉ Y_j because its second bit is 1−j ≠ j;
- α* ∉ B because B's two atoms have third bit c, while α* has third bit 1−c ≠ c.

So α* is covered by none of R_i, Y_j, B, and α* is a nonempty atom (size m ≥ 1).
Hence R_i ∪ Y_j ∪ B ≠ V. Since i, j, c, and the choice of which component in each
color were arbitrary, **no covering triple exists**. (Verified: all 2·2·4 = 16
triples fail, and the uncovered atom is always (1−i,1−j,1−c), `/tmp/verify_15.py`.)

**A.7 Conclusion.** For each m ≥ 1 we have a graph on n = 8m vertices with δ(G) =
7n/8 − 1 and a 3-coloring with no covering triple. Given any constant c < 7/8, choose
m with 7/8 − 1/(8m) > c, i.e. m > 1/(8(7/8 − c)); then δ(G) = (7/8 − 1/n)n > cn, yet
the property fails. Therefore the smallest α for which the property always holds
satisfies **α ≥ 7/8**. ∎ (Part A)

---

### Part B (partial) — toward the upper bound α ≤ 7/8

We prove three reduction lemmas and then state precisely the remaining gap. Assume
δ(G) ≥ ⌈7n/8⌉ throughout this part. For a vertex v write N[v] = {v} ∪ N(v) for the
closed neighborhood and M(v) = V ∖ N[v] for the set of **non-neighbors** of v.

**L1 (single-vertex closed-neighborhood cover).** For any vertex v, the triple
T(v) := (C_R(v), C_Y(v), C_B(v)) covers N[v].

*Proof.* v itself lies in all three of its own components, so v is covered. Let
u ∈ N(v) and let c = color(uv) ∈ {R,Y,B}. The edge uv is a c-colored edge joining u
to v, so u and v lie in the same c-component: u ∈ C_c(v). Hence every neighbor of v is
covered by one of the three components of T(v), and T(v) ⊇ N[v]. ∎

This already settles complete graphs (where N[v] = V for every v): K_n admits no bad
3-coloring, matching the classical Gyárfás-type fact and the computational check
that K₈ has zero bad colorings (`/tmp/upper.py` in the round reports).

**L2 (misses are completely-separated non-neighbors; few of them).** The set of
vertices left uncovered by T(v) is exactly
CS(v) := {w ∈ V : w completely separated from v},
and CS(v) ⊆ M(v) with |M(v)| ≤ n − 1 − ⌈7n/8⌉ < n/8.

*Proof.* A vertex w is uncovered by T(v) iff w ∉ C_R(v) ∪ C_Y(v) ∪ C_B(v), i.e.
C_R(w) ≠ C_R(v), C_Y(w) ≠ C_Y(v), C_B(w) ≠ C_B(v) (membership in a component is the
same as that component being one's own component). That is precisely "w completely
separated from v"; so the uncovered set is CS(v).

If w ∈ N(v), then by L1 w ∈ C_{color(vw)}(v), so w is covered and w ∉ CS(v). Hence
CS(v) ⊆ V ∖ N[v] = M(v): every separated vertex is a non-neighbor. (Equivalently: an
edge vw of color c forces C_c(v) = C_c(w), so separated vertices are non-adjacent.)

Finally |N[v]| = 1 + deg(v) ≥ 1 + ⌈7n/8⌉, so
|M(v)| = n − |N[v]| ≤ n − 1 − ⌈7n/8⌉ ≤ n − 1 − 7n/8 = n/8 − 1 < n/8,
using ⌈7n/8⌉ ≥ 7n/8. (Bound checked for n = 8,9,15,16,17,23,24,40,80,100,1000; always
< n/8.) ∎

**L3 (common neighbors of a separated pair receive distinct colors; many of them).**
Let u, w be completely separated. Then:
(a) for every common neighbor x ∈ N(u) ∩ N(w), color(xu) ≠ color(xw);
(b) |N(u) ∩ N(w)| ≥ 2⌈7n/8⌉ − n ≥ 3n/4.

*Proof of (a).* Suppose color(xu) = color(xw) = c for some common neighbor x. Then
the c-edges xu and xw place u, x, w in the same c-component, so C_c(u) = C_c(w),
contradicting that u, w are completely separated (in particular separated in color c).
Hence the two edges have distinct colors.

*Proof of (b).* By L2, completely separated vertices are non-adjacent, so u ∉ N(w) and
w ∉ N(u); thus N(u), N(w) ⊆ V ∖ {u, w}, a set of size n − 2. By inclusion–exclusion,
|N(u) ∩ N(w)| = |N(u)| + |N(w)| − |N(u) ∪ N(w)| ≥ |N(u)| + |N(w)| − (n − 2)
            ≥ ⌈7n/8⌉ + ⌈7n/8⌉ − (n − 2) = 2⌈7n/8⌉ − n + 2 ≥ 3n/4 + 2 > 3n/4,
using ⌈7n/8⌉ ≥ 7n/8 so 2⌈7n/8⌉ ≥ 7n/4. (The −2 correction from excluding u, w only
helps. Values of 2⌈7n/8⌉ − n verified equal to 3n/4 at n = 8,16,24,80,1000.) ∎

In the extremal construction of Part A, CS(v) = {antipode-atom of v} = M(v) exactly,
so L2 is tight there (verified in `/tmp/verify_15.py`): each vertex's triple T(v)
misses precisely the one antipodal atom, and that miss is its complete-separation
class. This is the obstruction the upper bound must overcome.

---

---

### Part C — Upper bound α ≤ 7/8 for two-smallest-counts-= 2 (COMPLETE for that sub-class)

Throughout Part C assume **δ(G) ≥ ⌈7n/8⌉** and that the 3-coloring is **bad** (no
covering triple); we derive a contradiction in the relevant configurations. The engine
is **Double counting** (knowledge_base.md, "Double counting") combined with the
**Pigeonhole / extremal principle** (knowledge_base.md, "Pigeonhole / extremal") for
choosing a minimum-weight row/column. The load-bearing analytic input is L2's bound
**|M(v)| ≤ n − 1 − ⌈7n/8⌉ ≤ n/8 − 1** (the −1 is integrality and is sharp; dropping it
collapses the proof exactly where the Part A construction lives).

**C.1 (Every color has ≥ 2 components.)** Suppose some color c has exactly one
component, i.e. the c-edge subgraph is connected, so C_c(v) = V for any vertex v. Pick
any v. By L1 the triple T(v) = (C_R(v), C_Y(v), C_B(v)) covers N[v]; and since
C_c(v) = V, the union C_R(v) ∪ C_Y(v) ∪ C_B(v) ⊇ C_c(v) = V already. So T(v) is a
covering triple, contradicting badness. Hence each color has ≥ 2 components. Write the
three component counts as a profile (c_R, c_Y, c_B) with all coordinates ≥ 2.

**C.2 (Choose axes by color symmetry.)** The property "a covering triple exists" is
symmetric under permuting the three colors (it asks for one component per color whose
union is V; permuting the names of the colors permutes the choices but not the union).
Relabel the colors so the counts satisfy c1 ≤ c2 ≤ c3, where c1, c2, c3 are the counts
of colors 1, 2, 3 respectively, all ≥ 2. Call color 1 "rows," color 2 "columns," color
3 "blue." Enumerate the color-1 components R_1, …, R_{c1} (rows) and the color-2
components Y_1, …, Y_{c2} (columns). Every vertex lies in exactly one row and exactly
one column, so the **cells**
  P_{ij} := {v : C_1(v) = R_i and C_2(v) = Y_j}, 1 ≤ i ≤ c1, 1 ≤ j ≤ c2,
partition V. Let a_{ij} = |P_{ij}|, the **row weight** Ri := Σ_j a_{ij} = |R_i|, the
**column weight** Cj := Σ_i a_{ij} = |Y_j|; then Σ_i Ri = Σ_j Cj = n. For a cell P_{ij}
let k_{ij} := the number of distinct blue (color-3) components that contain at least
one vertex of P_{ij}.

For a cell P_{ij} define its **anti-block**
  AB_{ij} := ⋃_{i' ≠ i, j' ≠ j} P_{i'j'}, A_{ij} := |AB_{ij}| = Σ_{i'≠i, j'≠j} a_{i'j'}
           = n − Ri − Cj + a_{ij}
(by inclusion–exclusion: the full grid minus row i minus column j double-subtracts
P_{ij}).

**C.3 (KL1 — the per-cell σ-bound).** *For any cell P_{ij} with k_{ij} ≥ 2 we have*
  A_{ij} ≤ n/4 − 2,  equivalently  Ri + Cj − a_{ij} ≥ 3n/4 + 2.

*Proof.* Fix the cell P_{ij}. For a vertex v ∈ P_{ij} with blue component
C_3(v) = B_k, consider which vertices are **completely separated** from v (notation of
Part B: type(u) and type(v) differ in all three colors). Such a u must have
C_1(u) ≠ R_i (different row), C_2(u) ≠ Y_j (different column), and C_3(u) ≠ B_k
(different blue). The vertices with different row AND different column are exactly the
anti-block AB_{ij}; among them, completely separated from v are those whose blue
component is not B_k. Thus
  CS(v) = { u ∈ AB_{ij} : C_3(u) ≠ B_k }.
(Every such u is completely separated from v; and conversely every completely separated
u lies in AB_{ij} with C_3(u) ≠ B_k. This depends only on the **type** of v, i.e. on
the triple (R_i, Y_j, B_k), not on the individual vertex v — two vertices of the same
type have the same CS-set.) By L2, CS(v) ⊆ M(v) and so
  |CS(v)| ≤ |M(v)| ≤ n/8 − 1.   (∗)

Now let the distinct blue components appearing in P_{ij} be B_{k_1}, …, B_{k_m} with
m = k_{ij} ≥ 2, and for each present blue value k_t let
  c_t := |{ u ∈ AB_{ij} : C_3(u) = B_{k_t} }|
be the number of anti-block vertices whose blue component equals B_{k_t}. The sets
indexed by distinct blue values are disjoint subsets of AB_{ij}, so
  Σ_{t=1}^{m} c_t ≤ A_{ij}.   (†)
Because k_{ij} = m ≥ 2, each present blue value k_t is the blue component of an
**actual vertex** v_t ∈ P_{ij}; applying (∗) to v_t and noting
CS(v_t) = { u ∈ AB_{ij} : C_3(u) ≠ B_{k_t} }, which has size A_{ij} − c_t, gives
  A_{ij} − c_t ≤ n/8 − 1  for each t = 1, …, m.   (‡)
Sum (‡) over the m present blue values:
  m·A_{ij} − Σ_t c_t ≤ m(n/8 − 1).
By (†), Σ_t c_t ≤ A_{ij}, so m·A_{ij} − A_{ij} ≤ m·A_{ij} − Σ_t c_t ≤ m(n/8 − 1), i.e.
  (m − 1)·A_{ij} ≤ m(n/8 − 1),  A_{ij} ≤ (m/(m−1))(n/8 − 1).
Since m ≥ 2, m/(m−1) ≤ 2, hence A_{ij} ≤ 2(n/8 − 1) = n/4 − 2. The equivalent form
follows from A_{ij} = n − Ri − Cj + a_{ij}:
  n − Ri − Cj + a_{ij} ≤ n/4 − 2 ⟺ Ri + Cj − a_{ij} ≥ 3n/4 + 2. ∎

*(Load-bearing remarks.* The factor m/(m−1) ≤ 2 **requires m = k_{ij} ≥ 2** — this is
exactly why low cells, k ≤ 1, are excluded from the count: at k = 1 the factor is ∞.
The "−2" comes from the "−1" in (∗), i.e. from |M(v)| ≤ n/8 − 1, which is integrality.
At δ = 7n/8 − 1 one would only have |M(v)| ≤ n/8, weakening KL1 to A_{ij} ≤ n/4, and
the Part-A construction attains equality A_{ij} = n/4 — so the −2 is sharp and must be
kept.)*

**C.4 (KL2 — Case B is impossible for EVERY profile (c1,c2)).** *Call the coloring in
**Case B** if every cell P_{ij} (1 ≤ i ≤ c1, 1 ≤ j ≤ c2) has k_{ij} ≥ 2. We show Case
B cannot occur, for any c1 ≤ c2 (both ≥ 2).*

Two routes partition all profiles.

**Route B-min (kills every profile with 1/c1 + 1/c2 ≤ 3/4).** By the extremal
principle, the average row weight is n/c1, so some row i* has Ri* ≤ n/c1; likewise some
column j* has Cj* ≤ n/c2. The cell P_{i*j*} is in Case B, so k_{i*j*} ≥ 2 and KL1
applies:
  3n/4 + 2 ≤ Ri* + Cj* − a_{i*j*} ≤ Ri* + Cj* ≤ n/c1 + n/c2 = n(1/c1 + 1/c2).
(The middle step drops a_{i*j*} ≥ 0.) If 1/c1 + 1/c2 ≤ 3/4 this gives
3n/4 + 2 ≤ 3n/4, i.e. 2 ≤ 0 — contradiction. So Route B-min eliminates every profile
with 1/c1 + 1/c2 ≤ 3/4. The profiles with c1 ≤ c2, both ≥ 2, that **survive**
(1/c1 + 1/c2 > 3/4) are exactly
  (c1, c2) ∈ { (2, 2), (2, 3) }
— a finite check: 1/2 + 1/3 = 5/6 > 3/4, 1/2 + 1/4 = 3/4 (NOT surviving — killed by
B-min, since the inequality is ≤ 3/4), and any c1 ≥ 3 gives 1/c1 + 1/c2 ≤ 2/3 < 3/4,
while (2, c2) with c2 ≥ 4 gives ≤ 1/2 + 1/4 = 3/4. Both survivors have c1 = 2.
(Arithmetic verified: `/tmp/check15e.py`, `/tmp/check15g.py`.)

**Route B-two (kills c1 = 2, hence both survivors).** Suppose c1 = 2, so there are
exactly two rows R_0, R_1 with R0 + R1 = n. (We index rows 0,1 for clarity.) Since
c2 ≥ c1 = 2 there are at least two columns; pick any two distinct columns j, j′. Apply
KL1 to the four Case-B cells (0,j), (0,j′), (1,j), (1,j′) and add the four inequalities
"Ri + Cj − a_{ij} ≥ 3n/4 + 2":
  [R0 + Cj − a_{0j}] + [R0 + Cj′ − a_{0j′}] + [R1 + Cj − a_{1j}] + [R1 + Cj′ − a_{1j′}]
      ≥ 4·(3n/4 + 2) = 3n + 8.
Group the left side:
  LHS = 2(R0 + R1) + 2(Cj + Cj′) − (a_{0j} + a_{1j} + a_{0j′} + a_{1j′}).
Because there are **exactly two rows**, the column weight of column j is the sum over
those two rows: Cj = a_{0j} + a_{1j}, and similarly Cj′ = a_{0j′} + a_{1j′}. Hence
  a_{0j} + a_{1j} + a_{0j′} + a_{1j′} = Cj + Cj′,
and using R0 + R1 = n,
  LHS = 2n + 2(Cj + Cj′) − (Cj + Cj′) = 2n + (Cj + Cj′).
Therefore 2n + (Cj + Cj′) ≥ 3n + 8, i.e. Cj + Cj′ ≥ n + 8. But Cj + Cj′ is a sum of two
of the (nonnegative) column weights, so Cj + Cj′ ≤ Σ_l Cl = n. Thus n ≥ n + 8 — a
contradiction. (This collapse of the 4-cell a-sum to Cj + Cj′ uses **exactly two rows**;
with ≥ 3 rows it fails, which is why Route B-two is invoked only when the smaller axis
has 2 components. Arithmetic verified: `/tmp/check15f.py`.) By color symmetry the same
argument with rows/columns interchanged kills c2 = 2.

The two survivors of Route B-min, (2,2) and (2,3), both have c1 = 2 and are killed by
Route B-two; every other profile is killed by Route B-min. **Hence Case B is impossible
for every profile (c1, c2).** ∎ (KL2)

*(Sharpness check.* The Part-A extremal coloring has profile (R,Y,B) = (2,2,4), so its
two smallest counts are 2 and 2, axes c1 = c2 = 2, and **every** (R,Y) cell contains
2 blue components (k_{ij} = 2 throughout) — it is a Case-B configuration. There
A_{ij} = n/4 exactly and |M(v)| = n/8 at δ = 7n/8 − 1, so KL1 weakens to A_{ij} ≤ n/4
and B-two reads 2n + (Cj + Cj′) ≥ 3n with Cj + Cj′ = n, an **equality** — no
contradiction. At δ ≥ 7n/8 the −2 reappears and the same B-two inequality becomes
2n + n ≥ 3n + 8, a contradiction. So the proof's sharp content lives precisely in
Case B with c1 = c2 = 2, and the −2 slack is exactly what separates δ ≥ 7n/8 from the
construction. Verified: `/tmp/check15k.py`.)*

**C.5 (A low cell exists in a bad coloring.)** By KL2, in a bad coloring Case B does
not hold, so there is at least one cell P_{i0,j0} with k_{i0,j0} ≤ 1: it is either
**empty** (a_{i0,j0} = 0, k = 0) or **blue-pure** (all its vertices lie in a single
blue component B_s, k = 1). Call such a cell **low**.

**C.6 (KL3 — main case c1 = c2 = 2 is closed via a low cell).** *Suppose c1 = c2 = 2.
We exhibit a covering triple, contradicting badness; combined with C.4 this closes the
case c1 = c2 = 2 entirely.*

There are two rows R_0, R_1 and two columns Y_0, Y_1, and by C.5 a low cell P_{i0,j0}.
Let i1 := 1 − i0 (the opposite row) and j1 := 1 − j0 (the opposite column). Consider
the triple
  (R_{i1}, Y_{j1}, B_s),
where B_s is the single blue component of P_{i0,j0} if it is blue-pure, or any blue
component at all if P_{i0,j0} is empty (its choice is irrelevant in the empty case). We
claim this covers V. The four cells partition V; check each:
- P_{i1,j1}: every vertex here has C_1 = R_{i1}, so it lies in R_{i1}. Covered.
- P_{i1,j0}: every vertex has C_1 = R_{i1}, so in R_{i1}. Covered.
- P_{i0,j1}: every vertex has C_2 = Y_{j1}, so in Y_{j1}. Covered.
- P_{i0,j0} (the low cell): if empty there is nothing to cover; if blue-pure, every
  vertex has C_3 = B_s, so in B_s. Covered.
Thus R_{i1} ∪ Y_{j1} ∪ B_s = V: a covering triple. This contradicts badness. (Verified:
`/tmp/check15b.py`.) Together with C.4 (Case B impossible), there is **no bad coloring
with c1 = c2 = 2**. ∎ (KL3)

**C.8 (KL5 — sub-case 2B of the c1 = 2, c2 = 3 grid is closed).** *Suppose c1 = 2,
c2 = 3, and the low-cell geometry is the following* ***2B configuration****: the two
low cells lie in the same row i0 and are both **blue-pure**, namely
P_{i0,j0} = B_s and P_{i0,j1} = B_p with B_s ≠ B_p two distinct blue components, and
the four other cells P_{i0,j2}, P_{i1,j0}, P_{i1,j1}, P_{i1,j2} are all **high**
(k ≥ 2). Then the coloring cannot be bad.*

Write the two rows as i0, i1 = 1 − i0 (so c1 = 2 means there are exactly these two
rows) and the three columns as j0, j1, j2. Abbreviate the six cell sizes
a_{00} = |P_{i0,j0}|, …, a_{12} = |P_{i1,j2}| (first index = row, second = column,
listing columns as 0,1,2 for j0,j1,j2). Then R_{i0} = a_{00} + a_{01} + a_{02},
R_{i1} = a_{10} + a_{11} + a_{12}, and R_{i0} + R_{i1} = n. Set
  s_{12} = |B_s ∩ P_{i1,j2}|, s_{11} = |B_s ∩ P_{i1,j1}|,
  t_{12} = |B_p ∩ P_{i1,j2}|, t_{10} = |B_p ∩ P_{i1,j0}|.

*Step 1 — the low-cell single-type CS identity (legal at k = 1).* The cell
P_{i0,j0} is blue-pure, hence **nonempty**: fix any vertex v ∈ P_{i0,j0}. Its type is
(R_{i0}, Y_{j0}, B_s) — every vertex of the cell has C_3 = B_s. We compute CS(v)
exactly as in C.3, but for this **single realized type** (no summation over blue
values, no m/(m−1) averaging — that averaging is the *only* place k ≥ 2 was used). By
definition u is completely separated from v iff C_1(u) ≠ R_{i0}, C_2(u) ≠ Y_{j0}, and
C_3(u) ≠ B_s. Because **c1 = 2**, "C_1(u) ≠ R_{i0}" means C_1(u) = R_{i1}: the other
row is the single row i1. And "C_2(u) ≠ Y_{j0}" means the column of u is j1 or j2.
Hence the vertices with different row and different column from v are exactly
P_{i1,j1} ∪ P_{i1,j2}, and among them the completely separated ones are those whose
blue component is not B_s. Therefore
  CS(v) = (P_{i1,j1} ∖ B_s) ∪ (P_{i1,j2} ∖ B_s),
  |CS(v)| = (a_{11} − s_{11}) + (a_{12} − s_{12}).
By L2, |CS(v)| ≤ |M(v)| ≤ n/8 − 1, so
  (a_{11} − s_{11}) + (a_{12} − s_{12}) ≤ n/8 − 1.
This is exactly the C.3 identity (∗) for one vertex of one realized type; it requires
only that the cell be nonempty (k ≥ 1), which holds because P_{i0,j0} is blue-pure.

*Step 2 — (A′).* Since s_{11} = |B_s ∩ P_{i1,j1}| ≤ |P_{i1,j1}| = a_{11}, the term
(a_{11} − s_{11}) ≥ 0. Dropping it from the Step-1 inequality gives
  **(A′)** a_{12} − s_{12} ≤ n/8 − 1.
(The disjointness inequality s_{11} ≤ a_{11} is used here and must be stated: without
it the inequality cannot be relaxed to (A′).)

*Step 3 — (B′), the symmetric cell.* The cell P_{i0,j1} = B_p is also blue-pure, hence
nonempty; fix w ∈ P_{i0,j1}, type (R_{i0}, Y_{j1}, B_p). The identical computation
(c1 = 2 makes the other row i1 unique; the other columns are j0, j2) gives
  CS(w) = (P_{i1,j0} ∖ B_p) ∪ (P_{i1,j2} ∖ B_p),
  |CS(w)| = (a_{10} − t_{10}) + (a_{12} − t_{12}) ≤ n/8 − 1,
by L2. Using t_{10} = |B_p ∩ P_{i1,j0}| ≤ |P_{i1,j0}| = a_{10}, so (a_{10} − t_{10}) ≥ 0,
drop that term:
  **(B′)** a_{12} − t_{12} ≤ n/8 − 1.
(Again the disjointness inequality t_{10} ≤ a_{10} is what licenses the drop.)

*Step 4 — a_{12} ≤ n/4 − 2.* The sets B_s ∩ P_{i1,j2} and B_p ∩ P_{i1,j2} are disjoint
subsets of P_{i1,j2}, because B_s ≠ B_p are distinct blue components (a vertex lies in
exactly one blue component) — **this is the only place the hypothesis B_s ≠ B_p is
used.** Hence
  s_{12} + t_{12} ≤ a_{12}.
Add (A′) + (B′):
  2a_{12} − (s_{12} + t_{12}) ≤ n/4 − 2,
so 2a_{12} ≤ n/4 − 2 + (s_{12} + t_{12}) ≤ n/4 − 2 + a_{12}, giving
  **a_{12} ≤ n/4 − 2.**

*Step 5 — squeeze R_{i0} from below.* The cell P_{i0,j2} is high (k ≥ 2), so KL1 (C.3)
applies to it. Its anti-block is AB_{i0,j2} = ⋃_{i'≠i0, j'≠j2} P_{i'j'} = P_{i1,j0} ∪
P_{i1,j1}, so A_{i0,j2} = a_{10} + a_{11} ≤ n/4 − 2. With Step 4,
  R_{i1} = a_{10} + a_{11} + a_{12} ≤ (n/4 − 2) + (n/4 − 2) = n/2 − 4,
hence
  R_{i0} = n − R_{i1} ≥ n/2 + 4.

*Step 6 — squeeze R_{i0} from above.* The cells P_{i1,j0} and P_{i1,j1} are high, so
KL1 applies to both. Their anti-blocks are AB_{i1,j0} = P_{i0,j1} ∪ P_{i0,j2} (rows
≠ i1 ⟹ row i0; columns ≠ j0 ⟹ j1, j2), giving a_{01} + a_{02} ≤ n/4 − 2; and
AB_{i1,j1} = P_{i0,j0} ∪ P_{i0,j2}, giving a_{00} + a_{02} ≤ n/4 − 2. Adding,
  a_{00} + a_{01} + 2a_{02} ≤ n/2 − 4,
i.e. (a_{00} + a_{01} + a_{02}) + a_{02} = R_{i0} + a_{02} ≤ n/2 − 4, so
  R_{i0} ≤ n/2 − 4 − a_{02}.
Because P_{i0,j2} is high (k ≥ 2 means it contains at least two vertices), a_{02} ≥ 2,
so in particular a_{02} ≥ 1 and
  R_{i0} ≤ n/2 − 5.

*Step 7 — contradiction.* Steps 5 and 6 give
  n/2 + 4 ≤ R_{i0} ≤ n/2 − 5, i.e. 4 ≤ −5,
which is false (an n-independent contradiction). Hence no bad coloring has the 2B
geometry. ∎ (KL5)

*(Robustness and scope. The contradiction has slack 9; even a_{02} ≥ 0 would already
give n/2 + 4 ≤ n/2 − 4, i.e. 8 ≤ 0, so the high-cell floor a_{02} ≥ 1 is not
load-bearing. The argument uses **only** the defining 2B data — B_s, B_p blue-pure with
B_s ≠ B_p, and the four named high cells — and never references any vertex/blue
component inside P_{i1,j2}. In particular it subsumes uniformly both the "Case I" and
the "Case II" subdivisions an earlier analysis made according to whether P_{i1,j2}
contains an exceptional blue component B_r distinct from B_s, B_p: that distinction is
never used. Arithmetic of the chain verified symbolically (anti-block identities;
2a_{12} ≤ n/4 − 2 + a_{12}; R_{i0} ≥ n/2 + 4 and ≤ n/2 − 5); the constraint set is
minimally infeasible — dropping any one of the eight inequalities used (the three KL1
bounds, (A′), (B′), s_{12} + t_{12} ≤ a_{12}, and the two disjointness inequalities
s_{11} ≤ a_{11}, t_{10} ≤ a_{10}) restores feasibility, so each is genuinely needed.)*

**C.9 (Anti-block SUM identity — the global engine).** *On the c1 × c2 grid,*
  Σ_{i=1}^{c1} Σ_{j=1}^{c2} A_{ij} = (c1 − 1)(c2 − 1)·n.

*Proof.* Using A_{ij} = n − R_i − C_j + a_{ij} (C.2) and summing over all c1·c2 cells,
  Σ_{i,j} A_{ij} = c1·c2·n − c2·Σ_i R_i − c1·Σ_j C_j + Σ_{i,j} a_{ij}
                 = c1·c2·n − c2·n − c1·n + n = (c1 − 1)(c2 − 1)·n,
since Σ_i R_i = Σ_j C_j = Σ_{i,j} a_{ij} = n, each row weight summed once per column
(c2 times) and each column weight once per row (c1 times). ∎ (Verified for random grids
at (c1,c2) ∈ {(2,3),(2,4),(3,3),(3,5),(4,4),(5,2)}, `/tmp/probe2.py`.) In particular for
c1 = 2 this reads **Σ_{i,j} A_{ij} = (c2 − 1)n**.

*(Reach check: if every cell were HIGH, summing KL1 gives (c1−1)(c2−1)n = Σ A_{ij} ≤
c1·c2·(n/4 − 2), which fails — i.e. (c1−1)(c2−1) > c1·c2/4 — for every (c1,c2) with
c1,c2 ≥ 2 except (2,2) and (2,3). This **re-derives the reach of C.4** (Case B
impossible) from one identity, consistent with KL2. Verified `/tmp/probe2.py`.)*

**C.10 (General single-type CS lever — legal at k = 1 for any c1).** *Let P_{ij} be a
blue-pure cell (k_{ij} = 1) with blue component B_s, and v ∈ P_{ij} any vertex (B_s ≠ ∅
so v exists). Then*
  |CS(v)| = A_{ij} − |B_s ∩ AB_{ij}|,  hence  A_{ij} − |B_s ∩ AB_{ij}| ≤ n/8 − 1.

*Proof.* By definition (Part B), u is completely separated from v iff C_1(u) ≠ R_i,
C_2(u) ≠ Y_j, and C_3(u) ≠ B_s (every vertex of P_{ij} has C_3 = B_s as the cell is
blue-pure). The vertices with C_1(u) ≠ R_i and C_2(u) ≠ Y_j are exactly the anti-block
AB_{ij} = ⋃_{i'≠i, j'≠j} P_{i'j'}; among them the completely-separated ones are those with
C_3(u) ≠ B_s, i.e. AB_{ij} minus the B_s-part. So CS(v) = AB_{ij} ∖ B_s and
|CS(v)| = A_{ij} − |B_s ∩ AB_{ij}|. By L2, |CS(v)| ≤ |M(v)| ≤ n/8 − 1. This uses **one
realized vertex of one realized type** — no summation over blue values, no m/(m−1)
averaging — so it is legal at k = 1, for **every** c1 (the anti-block is the full
(c1−1)(c2−1) block; no two-row assumption is made). ∎

**C.11 (General covering-triple criterion).** *Pick a row a, a column b, and a blue
component B. The triple (R_a, Y_b, B) covers V iff every cell P_{ij} with i ≠ a and
j ≠ b is **absorbable into B** — i.e. either empty or blue-pure with blue component B.*

*Proof.* Partition V by the cells. R_a covers every cell of row a; Y_b covers every cell
of column b; together these cover all cells except those off both row a and column b,
which is precisely the anti-block AB_{ab} = ⋃_{i≠a, j≠b} P_{ij}. A cell P_{ij} in AB_{ab}
is covered by the triple iff it is covered by B (it is not in R_a or Y_b), i.e. iff every
vertex of P_{ij} lies in B — which holds exactly when P_{ij} is empty (vacuous) or
blue-pure with that single blue component equal to B. So the triple covers V iff each
off-cell is absorbable into B. (A blue component B exists since c_3 ≥ 2 by C.1.) ∎

**C.12 (Branch-C / Branch-S complementarity — the exact dichotomy).** *Define a cell to
be an **obstruction** if it is HIGH (k ≥ 2) or blue-pure (k = 1); empty cells are never
obstructions. For a row a define its **obstruction profile** by, for each candidate blue
component B and column b, counting the off-(a,b) cells not absorbable into B. Say row a
**triggers Branch C** if there exist a column b and a blue component B such that every
cell P_{ij} with i ≠ a, j ≠ b is absorbable into B. Then a covering triple exists iff
some row triggers Branch C; and (for c1 = 2) row a triggers Branch C iff the unique other
row 1−a has, after one column is deleted and after merging same-blue-label blue-pure cells,
at most one residual obstruction. Equivalently:*

  **Branch C** (covering triple exists) — *the coloring is not bad; contradiction.*
  **Branch S** (no row triggers Branch C) — *every row's off-(a,b) anti-block contains, for
  every (b, B), an obstruction not absorbable into B: a HIGH cell, or two blue-pure cells
  with distinct blue labels.*

*Proof.* "Covering triple exists ⟺ some row triggers Branch C" is C.11 (the row a is the
red component R_a). For c1 = 2: deleting row a leaves the single row 1−a; the triple
(R_a, Y_b, B) covers iff every cell of row 1−a except column b is absorbable into B. The
cells of row 1−a outside column b are absorbable into one common B iff, after grouping the
blue-pure cells by label (same-label cells are jointly absorbable into that label) and
ignoring empties, at most one obstruction (HIGH cell, or a blue label) remains outside
some column b — i.e. the row has ≤ 1 "obstruction" once one column is allowed to be the
chosen Y_b. Negating: Branch S holds iff for every b and B some unabsorbable cell remains,
i.e. each row carries ≥ 2 obstructions that cannot be jointly absorbed. The two branches
are exhaustive and mutually exclusive by construction (a row either does or does not
trigger Branch C). ∎ (The c1 = 2 row-level biconditional "triggers Branch C ⟺ obstruction
count ≤ 1" was independently confirmed with 0 violations over all 5^{c2} rows for
c2 = 3,4,5, outline review; and the dichotomy is exhaustive — over all 1369 no-covering
c1=2,c2=3 configs with blue-labels ≤ 2 every one routes to Branch C or to an
LP-infeasible Branch S, `/tmp/probe12.py`.)

**C.13 (Distinct-label all-blue-pure Branch-S is impossible — the closed-form squeeze,
every c2 ≥ 3).** *Suppose c1 = 2 and the coloring is bad with **every** cell of the
2 × c2 grid blue-pure (k = 1), all 2c2 cells nonempty, **and with the blue labels in each
row pairwise distinct** (equivalently: no two cells of one row share a blue component). We
derive a contradiction; hence no such bad coloring exists.*

*(Scope note — load-bearing, do not overclaim. The distinct-label hypothesis is genuinely
needed: it is exactly what makes the telescoping Σ_j |B_{s_j} ∩ otherrow| ≤ R_otherrow
valid. There **do** exist all-blue-pure Branch-S grids with repeated labels in a row —
e.g. row 0 = [B0,B0,B1,B1], row 1 = [B2,B2,B3,B3] at c2 = 4, which has no covering triple
(`/tmp/verify_c13_repeat.py`). Those are NOT closed by the closed-form squeeze below
(it goes vacuous when only 2 distinct labels appear in a row); they are LP-infeasible
but fall under the mixed/residual frontier. C.13 covers precisely the distinct-label
all-blue-pure family, which includes the 2B geometry (KL5/C.8: row 0 = [B_s, B_p],
distinct).)*

Index the rows 0, 1. For a blue-pure cell P_{0,j} = B_{s_j} (row 0), C.10 with the
two-row anti-block AB_{0,j} = ⋃_{j'≠j} P_{1,j'} (row 1 minus column j) gives
  A_{0,j} − |B_{s_j} ∩ AB_{0,j}| ≤ n/8 − 1, where A_{0,j} = R_1 − a_{1,j}.
Since |B_{s_j} ∩ AB_{0,j}| = |B_{s_j} ∩ row 1| − |B_{s_j} ∩ P_{1,j}| ≤ |B_{s_j} ∩ row 1|,
  R_1 − a_{1,j} − |B_{s_j} ∩ row 1| ≤ n/8 − 1.   (CS_{0,j})
Sum (CS_{0,j}) over the c2 columns j of row 0. Because the labels s_j of row 0 are
**distinct**, the sets B_{s_j} are distinct blue components, hence pairwise disjoint, so
Σ_j |B_{s_j} ∩ row 1| ≤ |row 1| = R_1. Also Σ_j a_{1,j} = R_1. Therefore
  c2·R_1 − R_1 − R_1 ≤ Σ_j (n/8 − 1) = c2(n/8 − 1),  i.e.  (c2 − 2)R_1 ≤ c2(n/8 − 1).
By the symmetric computation on row 1 (its labels distinct, anti-blocks in row 0),
  (c2 − 2)R_0 ≤ c2(n/8 − 1).
Adding the two and using R_0 + R_1 = n,
  (c2 − 2)·n ≤ 2c2(n/8 − 1) = (c2/4)n − 2c2,  i.e.  (c2 − 2 − c2/4)·n ≤ −2c2,
  ((3c2 − 8)/4)·n ≤ −2c2.
For c2 ≥ 3 the coefficient (3c2 − 8)/4 ≥ 1/4 > 0, so the left side is ≥ n/4 > 0 while the
right side −2c2 < 0 — a contradiction for every n ≥ 1 and every c2 ≥ 3. Hence **no bad
distinct-label all-blue-pure coloring exists** on the 2 × c2 grid, for every c2 ≥ 3. ∎

*(This subsumes the 2B geometry (KL5/C.8: row 0 = [B_s, B_p] with B_s ≠ B_p, distinct)
and the distinct-label all-low/all-blue-pure family. It does **not** cover repeated-label
all-blue-pure grids (scope note above). The slack is large and grows in c2: with c2 = 3,
((1)/4)n ≤ −6 is already absurd; the per-c2 closed-form margin was tabulated for
c2 = 3..20, `/tmp/probe13.py`. The two load-bearing facts are: (i) C.10's single-type CS
bound (legal at k = 1), and (ii) the **hypothesis** of distinct labels per row, which makes
Σ_j |B_{s_j} ∩ otherrow| ≤ R_{otherrow} by disjointness. Fact (ii) is a hypothesis, NOT a
consequence of Branch S — repeated-label Branch-S grids exist (scope note) and are not
covered here.)*

**WHY MIXED BRANCH-S IS HARD (the honest residual at c1 = 2).** When a row mixes HIGH,
blue-pure, and empty cells, the clean closed-form squeeze of C.13 does **not** suffice,
and neither does any per-row bound. Concretely: a per-row inequality cleanly bounds
R_{1−i} only when the row has two HIGH cells (then 2R_{1−i} − (a + a') ≤ n/2 − 4 with
a + a' ≤ R_{1−i} gives R_{1−i} ≤ n/2 − 4); for a mixed pair (one HIGH, one blue-pure) or
two distinct blue-pure cells, the per-row bound becomes vacuous because the term
|B_s ∩ row(1−i)| can be as large as R_{1−i} (`/tmp/probe14.py`). And the crude global
two-inequality system fails on the pattern "each row = two blue-pure + the rest empty"
(`/tmp/probe15.py`). The genuine closure of these mixed patterns needs the full joint
blue-mass bookkeeping across **both** rows (the KL5 cross-coupling generalized), tracking
the |B_s ∩ P_{1−i,j}| terms exactly rather than dropping them. The full sharp LP (which
encodes exactly KL1 on highs, C.10 on blue-pures, disjointness, the empties = 0 / blue-pure
mass-pinning, and Σ a = n) is **infeasible** on every such pattern tested — exhaustively
for c1 = 2, c2 = 3 (5776 no-cover configs, blue-labels ≤ 3, **0 unbounded**), and broadly
for c2 = 4, 5 — so no bad mixed Branch-S coloring exists on large n; but turning that LP
certificate into airtight prose for **all** mixed patterns is not done here. This, together
with c1 ≥ 3 below, is the precise open frontier.

**WHY c1 ≥ 3 IS STILL OPEN (and what is known).** All of C.10 (general CS lever), C.11
(general covering criterion), C.9 (general anti-block sum) hold for **any** c1, so the
machinery is set up. The obstruction is the same as the mixed case, amplified: for c1 ≥ 3
the anti-block of a low cell is a (c1−1)(c2−1) block, so the distinct-blue disjointness no
longer telescopes into a single "other row," and the covering criterion's off-(a,b) block
is two-dimensional. The two outline routes to **force** c1 = 2 both fail (recorded under
"Approaches tried", confirmed by the outline review): Route B-min only fires at a HIGH
min-cell (a low cell there blocks it), and the anti-block SUM on an all-HIGH grid only
re-derives C.4 (Case B impossible), saying nothing about Case A. The sharp LP certifies
closure here too: over 4000 sampled c1 = 3, c2 = 3 Case-A configs, the 34 that are feasible
under the **relaxed** bounds (n/4, n/8) all become **infeasible** once the sharp −2/−1
integrality slack is restored, and a heavy sweep of 16482 no-covering configs across
c1 ∈ {2,3,4}, c2 ≤ 6 found **0** unbounded in n (`/tmp/probe5.py`, `/tmp/probe6.py`,
`/tmp/probe19.py`). So α = 7/8 is overwhelmingly corroborated and the mechanism evidently
extends, but a complete prose closure of c1 ≥ 3 is **not** written. The integrality slack
(−2 in KL1, −1 in C.10) is **load-bearing**: at the relaxed bounds 482/4000 (resp. 34/3462)
c1 = 3 configs survive, and the Part-A construction attains the relaxed equalities — so the
contradiction genuinely lives in the −2/−1 (Watch-out #5).

**C.7 (Conclusion of Part C — what is and is not proven).** Combining C.1–C.6: in a bad
coloring at δ ≥ ⌈7n/8⌉, every color has ≥ 2 components (C.1), Case B is impossible for
every profile (C.4), and **if the two smallest color-component counts are both 2
(c1 = c2 = 2) the coloring cannot be bad** (C.6). In particular the upper bound
**α ≤ 7/8 holds for every graph/coloring whose bad-coloring profile would have
c1 = c2 = 2**, which **includes the extremal/sharp configurations** (profile (2,2,4),
two smallest counts 2 and 2). This is the full sharp content of the threshold 7/8.

In addition, the round-12 lemmas C.9–C.13 establish the general machinery and close a
substantial new sub-class of Case A with c2 ≥ 3:
- **C.9** anti-block SUM identity Σ A_{ij} = (c1−1)(c2−1)n (re-derives C.4's reach);
- **C.10** the general single-type CS lever (legal at k = 1, any c1);
- **C.11** the general covering-triple criterion;
- **C.12** the exact Branch-C / Branch-S complementarity (dichotomy);
- **C.13** **every distinct-label all-blue-pure Branch-S coloring on the 2 × c2 grid is
  impossible, for every c2 ≥ 3** — the clean closed-form squeeze, which subsumes the 2B
  geometry (KL5) and the distinct-label all-low / all-blue-pure family.

**The residual now stands precisely at three places, all LP-certified but not yet prose:**
(0) **repeated-label all-blue-pure** grids (e.g. [B0,B0,B1,B1] rows), where the closed-form
squeeze of C.13 goes vacuous; (i) **mixed Branch-S patterns** on the 2 × c2 grid (HIGH +
blue-pure + empty together) — the closed-form squeeze and every per-row bound provably fail
there ("WHY MIXED BRANCH-S IS HARD"); and (ii) **Case A with c1 ≥ 3** — the covering
criterion's off-block is two-dimensional and the distinct-blue disjointness no longer
telescopes ("WHY c1 ≥ 3 IS STILL OPEN"). All are infeasible under the sharp LP across every
tested
configuration (exhaustive for c1 = 2, c2 = 3; heavy sweeps up to c1 = 4, c2 = 6; 0
unbounded over 16482+ configs), strongly corroborating α = 7/8, but LP-infeasibility is
evidence, not a prose proof. This residual is **open**.

---

### NOTE (round 11) — sub-case 2B BUILT and closed; coverage claims corrected

The round-11 outline proposed closing sub-case 2B by the low-cell single-type CS
lever. **That lever is correct and the 2B contradiction has now been built in full as
C.8 / KL5 above** (verified symbolically and by a minimal-infeasible-LP check). The
outline-review (`/tmp/round-11/outline-review-china-15.md`) independently confirmed the
2B contradiction is sound and minimal, but flagged that the outline's *coverage* claims
were overclaims. Those corrections are now reflected here:

- **3-LOW is NOT closed.** The outline attributed "3-LOW variants" to the explorer's
  closures; this is false. The explorer report explicitly says 3-LOW was "**not
  systematically analyzed**." All 36 low-sets of the 2×3 grid with ≥ 3 low cells remain
  **uncovered**: every 2-LOW / 1-LOW closure (including 2B) needs specific cells to be
  HIGH so KL1 applies to them, and once ≥ 3 cells are low, the cells those arguments
  need high are themselves low. (See "THE REMAINING GAP.")
- **c2 ≥ 4 is NOT established.** Route B-min only fires at the min-row/min-col cell when
  that cell is HIGH; a low cell sitting there blocks it. So c2 ≥ 4 reduces to the same
  open low-cell problem on a larger grid, not to a solved case.
- **The empty-low sub-cases of 2B's framing are NOT covered by KL5.** KL5 needs both
  same-row low cells to be blue-pure (k = 1, nonempty) so that B_s, B_p and the parts
  s_{12}, t_{12} are defined. If a same-row low cell is empty (k = 0) there is no vertex
  v to feed L2, and Steps 1–3 do not apply. This is a real open sub-case.
- **Case II is genuinely subsumed by KL5** (no exceptional-B_r split needed); this part
  of the outline was correct, and the earlier tight-σ-chaining plan was unnecessary.

The detailed (now-superseded) outline text is retained below for the record; read C.8
above for the actual proof and "THE REMAINING GAP" below for the honest open frontier.

---

### OUTLINE (round 11) — closing sub-case 2B (same-row two-LOW), incl. Case II

**Spec review: required.**

**Context.** By the round-11 explorer's case analysis of the residual c1=2, c2=3
grid (KL4), every scenario is closed EXCEPT sub-case **2B**: two LOW cells in the
same row i0, namely `[i0,j0]=B_s` and `[i0,j1]=B_p` (blue-pure, `B_s ≠ B_p`), with
the four remaining cells `[i0,j2],[i1,j0],[i1,j1],[i1,j2]` all HIGH (k≥2). The
explorer closed Case I-a and left "Case II" (an exceptional `B_r ≠ B_s,B_p` in
`[i1,j2]`) open, recommending a chain of tight σ-bounds.

**Finding (this outline): the explorer's chaining mechanism is the WRONG lever, and
a simpler lever closes ALL of 2B (Case I and Case II together) — no exceptional-vertex
split, no tight-bound (C) needed.** The reason chaining tight anti-block σ-bounds
fails: the variable `a12=|[i1,j2]|` lies in NO anti-block of a HIGH cell — the only
anti-blocks containing `[i1,j2]` belong to the two LOW cells, to which KL1 (k≥2) does
not apply. So no amount of KL1/tight-anti-block bounding constrains `a12` from above,
and the LP stays feasible with `a12` huge (verified: `/tmp/check_caseII6.py`). The
correct lever is the **single-type CS bound (L2) applied to the LOW cells themselves**
— legal at k=1 because it uses one realized vertex-type, not the KL1 averaging that
needs the m/(m−1) factor.

**Technique.** Double counting (per-type CS = anti-block-minus-own-blue, the C.3
identity) + L2 (`|CS(v)| ≤ n/8−1`), specialized to the two LOW vertex-types; combined
with KL1 on the four HIGH cells. Pure arithmetic contradiction.

**Notation (cell sizes).** `a00=|[i0,j0]|,…,a12=|[i1,j2]|`; `R_{i0}=a00+a01+a02`,
`R_{i1}=a10+a11+a12`, `R_{i0}+R_{i1}=n`. Let `s12=|B_s∩[i1,j2]|`,
`s11=|B_s∩[i1,j1]|`, `t12=|B_p∩[i1,j2]|`, `t10=|B_p∩[i1,j0]|`.

**Skeleton (each step verified in `/tmp/check_caseII8.py`–`/tmp/check_unify.py`):**

1. *(LOW-cell CS identity, the crux.)* For a vertex `v∈[i0,j0]` (type `(R_{i0},Y_{j0},B_s)`),
   the completely-separated set is `CS(v)={u : C1(u)≠R_{i0}, C2(u)≠Y_{j0}, C3(u)≠B_s}`.
   Since **c1=2**, "other row" = row i1 uniquely; "other column" = `{j1,j2}`. Hence
   `CS(v)=([i1,j1]∪[i1,j2])` minus its B_s-part `= (a11−s11)+(a12−s12)`. By L2,
   `(a11−s11)+(a12−s12) ≤ n/8−1`. — **This is exactly the C.3 computation applied to
   ONE realized type; it needs only k≥1 (the LOW cell is nonempty), NOT k≥2.**
2. Drop the nonnegative term `(a11−s11)≥0`: **(A′)** `a12 − s12 ≤ n/8−1`.
3. *(Same for the other LOW cell.)* For `v∈[i0,j1]=B_p`: `CS(v)=(a10−t10)+(a12−t12)≤n/8−1`,
   drop `(a10−t10)≥0`: **(B′)** `a12 − t12 ≤ n/8−1`.
4. `s12` and `t12` are sizes of the disjoint `B_s`- and `B_p`-parts of `[i1,j2]`, so
   `s12+t12 ≤ a12`. Add (A′)+(B′): `2a12−(s12+t12) ≤ n/4−2`, hence
   `2a12 ≤ n/4−2+(s12+t12) ≤ n/4−2+a12`, giving **`a12 ≤ n/4−2`**.
5. KL1 on HIGH cell `[i0,j2]`: `A_{i0,j2}=a10+a11 ≤ n/4−2`. With step 4,
   `R_{i1}=a10+a11+a12 ≤ n/2−4`, so **`R_{i0}=n−R_{i1} ≥ n/2+4`**.
6. KL1 on HIGH cells `[i1,j0]` and `[i1,j1]`: `a01+a02 ≤ n/4−2` and `a00+a02 ≤ n/4−2`.
   Add: `a00+a01+2a02 ≤ n/2−4`, i.e. `R_{i0}+a02 ≤ n/2−4`, so `R_{i0} ≤ n/2−4−a02`.
   Since `[i0,j2]` is HIGH, `a02 ≥ 1` (in fact ≥2), giving **`R_{i0} ≤ n/2−5`**.
7. **Contradiction:** `n/2+4 ≤ R_{i0} ≤ n/2−5`, i.e. `4 ≤ −5`, impossible for every n. ∎

**Key lemmas (claim + mechanism):**
- *LOW-cell single-type CS bound* — for the realized blue-pure type `B_s` of a nonempty
  LOW cell, `CS(v)` equals the cell's anti-block minus the `B_s`-part, and is `≤ n/8−1`
  by L2. The k≥2 restriction of KL1 is irrelevant here: it came only from the σ-averaging,
  not from the per-type CS identity, which holds for any one realized type (k≥1).
- *`a12 ≤ n/4−2`* — because (A′)+(B′) bound `2a12` by `n/4−2` plus the (disjoint)
  `B_s,B_p` overlap `s12+t12 ≤ a12`; the overlap is exactly enough to leave `a12 ≤ n/4−2`.
- *Row-weight squeeze* — KL1 on `[i0,j2]` caps `R_{i1}` from above (forcing `R_{i0}` large),
  while KL1 on `[i1,j0],[i1,j1]` caps `R_{i0}` from above; the two caps are incompatible.

**Why this also kills Case II:** Case II's hypothesis (an exceptional `B_r` in `[i1,j2]`)
is never used — the argument depends only on the defining 2B data (`B_s,B_p` LOW, the four
HIGH cells). So Case I-a and Case II are subsumed by one uniform contradiction. The
explorer's Case I-a derivation remains correct but is now redundant.

**Cases to cover (within KL4, c2=3):** the explorer already closed 1-LOW, 2A (same
column), 2C (diagonal), and 3-LOW variants; this outline closes 2B. The builder must
also confirm **c2 ≥ 4** is subsumed: the same LOW-cell CS lever applies whenever a LOW
cell exists with c1=2 (the "other row" is still unique), and the L-SHAPE/2A/2B/2C
dissection generalizes since c1=2 forces exactly two rows. The builder should state the
c2≥4 reduction explicitly rather than only handling c2=3, OR show c2≥4 is already killed
by Route B-min/the existing C.4 machinery (1/2+1/c2 ≤ 3/4 for c2≥4, so B-min applies and
the LOW cell + this lever still closes it). **This c2≥4 generality is the one step that
needs an explicit check, not the 2B contradiction itself.**

**Watch out for:**
- The legality of steps 1–3 at k=1 is the single point a reviewer will probe. Spell out
  that L2 applies to the actual vertex `v` of the LOW cell, that the CS-set identity is
  the C.3 computation for the single type `B_s` (no summation, no `m/(m−1)`), and that
  `c1=2` is what makes "the other row" unique (this is where the 2-row structure is used).
- `s12+t12 ≤ a12` needs `B_s ≠ B_p` (disjoint parts) — true by the 2B hypothesis.
- `a02 ≥ 1`: justify from `[i0,j2]` HIGH (k≥2 ⇒ ≥2 vertices). The contradiction has slack
  (`4 ≤ −5`) so even `a02 ≥ 0` would suffice — note this for robustness.
- Do NOT reintroduce the exceptional-vertex / tight-(C) / chaining apparatus; it is
  unnecessary and risks the false impression that the closure is Case-II-specific.

**Honest outcome assessment.** This genuinely CLOSES sub-case 2B (verified: minimal
infeasible LP `/tmp/check_caseII9.py`, hand-derivation `/tmp/check_unify.py`,
`/tmp/check_CS_identity.py`). Together with the explorer's closures of 1-LOW, 2A, 2C,
3-LOW, this closes KL4 for c2=3. The remaining bookkeeping is the c2≥4 reduction (above),
which is routine given c1=2 forces two rows. If the c2≥4 reduction holds as expected,
KL4 is fully closed and the problem becomes **solved** (α=7/8, both bounds). If a gap
surfaces in the c2≥4 generalization, the realistic status is still a large advance:
2B closed, only the c2≥4 packaging open.

---

### THE REMAINING GAP (upper bound residual, KL4) — OPEN, stated honestly

To finish α ≤ 7/8 it remains to settle, in a bad coloring at δ ≥ ⌈7n/8⌉, the residual
**Case A with c2 ≥ 3** (two smallest color-component counts not both 2). By C.4–C.5
Case B is impossible and a low cell exists, but the single opposite-quadrant triple of
C.6 no longer covers. What is now closed inside this residual, and what is genuinely
open:

**Closed:** in the profile c1 = 2, c2 = 3, the **2B geometry** — two same-row blue-pure
low cells with distinct blue components, the other four cells high — is closed by KL5
(C.8). The lever is the low-cell single-type CS identity (legal at k = 1) plus KL1 on
the high cells.

**Open (the honest frontier):**

- **(G1) ≥ 3 low cells.** The 2×3 grid has 36 low-sets with three or more low cells
  (e.g. an entire low row {(i,j0),(i,j1),(i,j2)}, or three cells in an L), and **none of
  them is closed.** Every 1-LOW / 2-LOW closure proven so far (including KL5) requires
  specific cells to be HIGH so that KL1 can be applied to them; once ≥ 3 cells are low,
  the cells those arguments need high are themselves low, and no existing closure fires.
  3-LOW was **not** systematically analyzed in any prior round (correcting an earlier
  false attribution that the explorer had closed "3-LOW variants" — it had not).

- **(G2) all-low / many-low total mass.** A naive dismissal "all-low total
  ≤ 6(n/8 − 1) < n" is **invalid**: a low cell's *size* is not bounded by n/8 − 1; only
  its anti-block CS is. A blue-pure low cell can be arbitrarily large. Any ≥ 3-low
  closure must avoid assuming low cells are small.

- **(G3) c2 ≥ 4.** Not established. Route B-min eliminates the cell at the
  min-row/min-col position only if that cell is HIGH; if a low cell sits there, B-min
  does not fire, and KL2 already gives only "Case B impossible." So c2 ≥ 4 reduces to
  the same open low-cell problem on a 2×c2 grid with even more low-set geometries — it
  is **not** subsumed by the existing machinery, contrary to an earlier outline claim.

- **(G4) empty-low sub-cases of the 2B framing.** KL5 needs both same-row low cells to
  be **blue-pure (k = 1, nonempty)** so that B_s, B_p, s_{12}, t_{12} are defined. If a
  same-row low cell is **empty (k = 0)**, there is no vertex to feed L2 and Steps 1–3 of
  KL5 fail. The empty-cell variant must be handled separately and is **open**.

Both mechanisms proposed in earlier rounds for the general residual are dead ends
(recorded under "Approaches tried"): route (a) [re-grid on (color-1, blue) to make all
cells high / "force c1=c2=2"] **contradicts C.4**, which forces a low cell on every
axis-pair grid; route (b) [empty-cell merge / L3(b) iteration] produces no contradiction
in either branch, the structural reason being that a k ≤ 1 cell is uncontrolled by the
σ-count (factor 1/(k − 1) diverges at k = 1). KL5 shows that for *some* k = 1 geometries
a per-type CS identity rescues this; extending it to G1, G3, G4 needs further work.

**Status of the answer (the answer is α = 7/8).** The lower bound **α ≥ 7/8 is proven**
(Part A: an explicit construction on n = 8m vertices with δ = 7n/8 − 1 and no covering
triple, verified by enumeration over the 8 atoms). For the upper bound **α ≤ 7/8**: it is
**proven** for all bad-coloring profiles with c1 = c2 = 2 — including the sharp profile
(2,2,4) (Part C); Case B is impossible for every profile (C.4); and inside Case A with
c2 ≥ 3 the **distinct-label all-blue-pure Branch-S family on the 2 × c2 grid is now closed
for every c2 ≥ 3** (C.13, subsuming the 2B geometry C.8/KL5), using the general machinery
C.9–C.12 (anti-block SUM identity, general single-type CS lever, general covering-triple
criterion, exact Branch-C/Branch-S dichotomy), all proven for any c1. The **three remaining
open pieces** of the upper bound are, precisely: (0) **repeated-label all-blue-pure** grids
at c1 = 2 (closed form vacuous); (i) **mixed Branch-S patterns** at c1 = 2 (HIGH +
blue-pure + empty cells together); and (ii) **Case A with c1 ≥ 3**. All are **LP-certified
infeasible** (no bad coloring on large n) across every configuration tested — exhaustively
for c1 = 2, c2 = 3 (5776 no-cover configs, 0 unbounded) and over 16482+ no-cover Case-A
configs for c1 ∈ {2,3,4}, c2 ≤ 6 (0 unbounded), so α = 7/8 is overwhelmingly corroborated
— but LP-infeasibility is evidence, not a complete prose proof. Status: **partial** (the
answer α = 7/8 with a proven lower bound and an upper bound proven on c1 = c2 = 2 plus the
distinct-label all-blue-pure Branch-S family of c1 = 2).

## Full proof
(Not present — Status is `partial`. Part A is a complete rigorous proof of the lower
bound α ≥ 7/8; L1–L3 are complete; Part C (C.1–C.6) is a complete rigorous proof of the
upper bound α ≤ 7/8 for every bad coloring with two smallest component counts = 2,
including the sharp profile (2,2,4). C.9–C.12 prove the general machinery (anti-block SUM
identity; general single-type CS lever; general covering-triple criterion; exact
Branch-C/Branch-S dichotomy), and C.8 (KL5) + **C.13** close, in full rigorous prose, the
2B geometry and the distinct-label all-blue-pure Branch-S family of the 2 × c2 grid for
every c2 ≥ 3. The residual Case A is open in exactly three precisely-stated places:
**repeated-label all-blue-pure** grids (closed form vacuous), the **mixed Branch-S**
patterns at c1 = 2 ("WHY MIXED BRANCH-S IS HARD"), and **Case A with c1 ≥ 3**
("WHY c1 ≥ 3 IS STILL OPEN") — both LP-certified infeasible but not yet prose-proven.)
