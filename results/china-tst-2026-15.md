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
- **Residual KL4 (Case A — a low cell — with c2 ≥ 3)** — **OPEN; both proposed
  routes are DEAD ENDS.**
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
two smallest component-counts = 2): α = 7/8.**

We have a complete rigorous proof of the lower bound **α ≥ 7/8** (Part A), a complete
rigorous proof of the reduction lemmas **L1, L2, L3**, and (Part C) a complete
rigorous proof of the **upper bound α ≤ 7/8 for every bad coloring whose two smallest
color-component counts are both 2** — including the sharp/extremal configurations
(profile (2,2,4)). Concretely Part C proves: (i) every color has ≥ 2 components;
(ii) the per-cell σ-bound KL1; (iii) **Case B (every grid cell has ≥ 2 blue
components) is impossible for EVERY profile (c1,c2)**; (iv) the **main case
c1 = c2 = 2 is fully closed**. The ONLY remaining gap to a full solve is the residual
case **c2 ≥ 3 with a low cell (KL4)**, which is precisely located and recorded as
open below. Status: **partial**.

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

**C.7 (Conclusion of Part C — what is and is not proven).** Combining C.1–C.6: in a bad
coloring at δ ≥ ⌈7n/8⌉, every color has ≥ 2 components (C.1), Case B is impossible for
every profile (C.4), and **if the two smallest color-component counts are both 2
(c1 = c2 = 2) the coloring cannot be bad** (C.6). In particular the upper bound
**α ≤ 7/8 holds for every graph/coloring whose bad-coloring profile would have
c1 = c2 = 2**, which **includes the extremal/sharp configurations** (profile (2,2,4),
two smallest counts 2 and 2). This is the full sharp content of the threshold 7/8.

The remaining configurations are **Case A with c2 ≥ 3** (the two smallest counts are
not both 2): Case B is still impossible (C.4), so a low cell exists (C.5), but the
single opposite-quadrant triple of C.6 no longer covers, because the anti-block of the
low cell is a (c1 − 1)(c2 − 1) block of cells rather than one cell — provably a single
opposite-row/column/blue pick cannot cover it (round reports `check15O.py`). This
residual (KL4) is **open**; see the dead-end analysis under "Approaches tried." It is a
"needs a new idea" gap (a way to control or eliminate low cells with k ≤ 1, which the
σ-engine cannot do because its factor 1/(k−1) diverges at k = 1), not a tightening.

---

### THE REMAINING GAP (upper bound residual, KL4) — OPEN, stated honestly

To finish α ≤ 7/8 it remains to settle, in a bad coloring at δ ≥ ⌈7n/8⌉:

> **(KL4)** the case **c2 ≥ 3** (two smallest color-component counts not both 2). By
> C.4–C.5 a low cell P_{i0,j0} exists; produce a covering triple (contradiction) or a
> structural contradiction.

Both mechanisms proposed by the outline are dead ends (recorded fully under "Approaches
tried"): route (a) [re-grid on (color-1, blue) to make all cells high / "force
c1=c2=2"] **contradicts C.4**, which forces a low cell on the (color-1, blue) grid too,
so that grid is provably not all-high; route (b) [empty-cell merge / L3(b) iteration]
produces no contradiction in either the empty or blue-pure branch, the structural
reason being that a k ≤ 1 cell is uncontrolled by the σ-count (factor 1/(k−1) diverges
at k = 1). Closing KL4 needs a genuinely new lever for low cells when c2 ≥ 3.

**Status of the answer.** The lower bound α ≥ 7/8 is proven (Part A). The upper bound
α ≤ 7/8 is proven for all bad-coloring profiles with c1 = c2 = 2 — including the sharp
configurations — via the per-cell σ-bound double count (Part C); Case B is impossible
for every profile. The single residual is Case A with c2 ≥ 3 (KL4), open and precisely
located. We record α = 7/8 as the answer with a proven lower bound and an upper bound
proven on the sharp sub-class. Status: **partial**.

## Full proof
(Not present — Status is `partial`. Part A is a complete rigorous proof of the lower
bound α ≥ 7/8; L1–L3 are complete; Part C (C.1–C.6) is a complete rigorous proof of the
upper bound α ≤ 7/8 for every bad coloring with two smallest component counts = 2,
including the sharp profile (2,2,4). The residual KL4 (Case A, c2 ≥ 3) remains open as
stated.)
