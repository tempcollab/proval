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
- Upper-bound crux L4 (turn "δ ≥ 7n/8" into a covering triple via a double count
  sharp at 7/8) — **OPEN**. The reduction L1–L3 is in hand but the closing inequality
  that is violated at δ ≥ 7n/8 yet satisfiable at δ = 7n/8 − 1 has not been produced.
  Gap stated explicitly below.

## Current best

**Answer (conjectured, lower bound proven): α = 7/8.**

We have a complete rigorous proof of the lower bound **α ≥ 7/8** (Part A), and a
complete rigorous proof of the reduction lemmas **L1, L2, L3** that frame the upper
bound. The upper bound **α ≤ 7/8** is reduced to a single open inequality (L4),
stated precisely at the end.

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

### THE REMAINING GAP (upper bound crux, L4) — OPEN, stated honestly

To prove α ≤ 7/8 it remains to show:

> **(L4)** If δ(G) ≥ ⌈7n/8⌉, then every 3-coloring of E(G) admits a covering triple.

What L1–L3 reduce this to: a bad 3-coloring (no covering triple) requires CS(v) ≠ ∅ for
**every** vertex v (else T(v) covers), with CS(v) ⊆ M(v), |M(v)| < n/8, and every
separated pair sharing ≥ 3n/4 common neighbors split into two colors (L3). We must
derive a contradiction from this at δ ≥ 7n/8, and the contradiction must be **sharp**:
it must fail at δ = 7n/8 − 1 (where the Part A construction is a genuine bad coloring).

**Why this is genuinely open, and what is needed.** Two precise obstacles remain:

1. *Single-anchor framing is insufficient.* L1–L3 are all phrased relative to one
   vertex v and its own triple T(v). But "bad coloring" means **no** triple covers —
   including triples not anchored at any single vertex (one may pick C_R(v₁), C_Y(v₂),
   C_B(v₃) with v₁,v₂,v₃ distinct). In the Part A construction at δ = 7n/8 − 1, for
   *every* anchor v the triple T(v) misses exactly the antipodal atom, and that miss
   is **not** absorbable by re-choosing any single component — there really is no
   covering triple. So any valid L4 argument must distinguish δ ≥ 7n/8 from
   7n/8 − 1 on the strength of a single unit of degree; it cannot rely only on
   T(v)-style single-anchor reasoning. (Confirmed in the round reports'
   `/tmp/l4_gap.py`, `/tmp/l4_test.py`: the L4(a) "absorption" premise is fully
   realized in the extremal graph with no contradiction.)

2. *No sharp closing inequality has been produced.* The needed step is an explicit
   double count. The natural candidate, not yet carried through, is: sum over all
   completely-separated pairs {u, w} the L3 incidence "each of the ≥ 3n/4 common
   neighbors x splits color(xu) ≠ color(xw)," and weigh it against the global slack
   that each vertex has < n/8 non-neighbors (L2). One must extract from this an
   inequality I(δ) that is **violated** when δ ≥ 7n/8 (forcing CS(v) = ∅ for some v,
   hence a covering triple) but **satisfiable** at δ = 7n/8 − 1 (matching the
   construction, whose per-atom incidence pattern — a miss adjacent via "wrong" colors
   to 3 vertices of C_R, 3 of C_Y, 1 of C_B in the n = 8 case — is the equality case
   the inequality must permit). Producing this inequality, with the constant 7/8 (not
   3/4, not 13/16) emerging from the count, is the open work. The brute-force evidence
   that the threshold is correct — zero bad colorings at δ ≥ ⌈7n/8⌉ for n = 8, 16, 24
   (round reports `/tmp/probe_upper.py`) — is evidence, not a proof.

**Status of the answer.** The lower bound α ≥ 7/8 is proven. The upper bound α ≤ 7/8
is reduced (via L1–L3) to the single sharp counting inequality L4, which is not yet
established. We therefore record α = 7/8 as the conjectured answer with a proven lower
bound and an open, precisely-located upper-bound gap. Status: **partial**.

## Full proof
(Not present — Status is `partial`. Part A above is a complete rigorous proof of the
lower bound α ≥ 7/8, and L1–L3 are complete; the upper bound L4 remains open as stated.)
