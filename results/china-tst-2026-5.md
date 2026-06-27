# china-tst-2026-5

## Status
partial

## Approaches tried
- **Star/hub construction (upper bound)** — WORKED, fully rigorous. A labeling of
  K_{2026} achieving max-min-path = 3962 (= 2(n−m), n=2026, m=45). Hub edges get
  labels {1,…,2025}; the 1936 = 44² "critical" non-hub pairs get the redirect
  labels {2026,…,3961}; rest arbitrary. Verified: every pair has a path of cost
  ≤ 3962. Confirmed numerically on n=5,10,17,26 that the same construction attains
  2(n−m) (e.g. n=10 gives exactly 14). Gives **k ≤ 3962**. (Part A below.)
- **Hub-case lower bound, restricted to hub-labels A = {1,…,2025} (pigeonhole)** —
  WORKED, rigorous *within that sub-case only*. ≥ 1980 hub-critical pairs but only
  1936 non-hub small labels. Now **SUBSUMED and strengthened** by the case-free
  Lemma E below (which proves ≥ 1980 expensive pairs for *every* spanning tree, no
  hub assumption, no restriction on the label set). Retained only as historical
  context.
- **First/last-edge bound B1 (lower bound)** — DEAD END for closing the general
  case. d(u,v) ≥ min(label(uv), f(u)+f(v)) is valid but too weak: an adversary can
  place labels 1…1013 on a perfect matching, forcing f(w) ≤ 1013 for all w, so
  f(u)+f(v) ≤ 2026 < 3962 always. Verified numerically at n=10. The general lower
  bound must be a "there exists one expensive pair" argument using full paths.
- **Case-free MST reduction + Lemma E (round 4)** — WORKED, rigorous, NEW. Reduces
  the entire lower bound to a pure labelled-graph statement on the 3961 cheapest
  edges, fixes the MST T, and proves **≥ 1980 T-expensive pairs for ANY spanning
  tree** carrying 2025 distinct labels from {1,…,3961} (no hub, no label-set
  assumption). This unifies the old "hub" and "no-hub" cases into a single
  case-free count. See Current best, Part B (Reduction + Lemma E). The remaining
  gap is now a *single* open inequality (served < 1980), not two separate cases.
- **General-A hub "WLOG A = {1,…,2025}" reduction (round 3)** — DEAD END, refuted.
  For a degree-2025 hub with a general label set A, small labels may sit on
  non-hub edges and serve a hub-critical pair via a cheap 2-edge detour. Numerics
  (n=10): up to **19** hub-critical pairs are served off-hub with only |B| = 4
  non-hub labels. So the round-3 "each non-hub label serves ≤ 1 critical pair" claim
  is FALSE for general A; the general-A hub case is as hard as the no-hub case. Do
  not retry the WLOG.
- **Spanning-tree per-edge / per-extra-edge charge (rounds 2–4)** — DEAD END,
  refuted numerically. Fix the MST T, charge each served T-expensive pair to the
  max-label non-tree edge on its serving route, hope for an injection into the
  |X| = 1936 extra edges. At n=10 (m=3, k−1=13, |X|=4) the per-extra-edge charge
  has cap **9** (not 1), and the number of T-expensive pairs servable at ≤ k−1
  reaches **12–13** while |X| = 4. A low-label non-tree edge acts as a "second
  hub" serving many pairs. **No per-edge or per-extra-edge injection exists.**
- **"Lemma C": served T-expensive pairs ≤ |X| = 1936 (round 4 outline)** — DEAD END,
  REFUTED. This aggregate-capacity bound is false: at n=10 the served count reaches
  **12** while |X| = 4 (factor 3 violation). The "weighted / charge-to-max-label
  extra edge" reformulation is the **same quantity** — every served T-expensive
  pair has exactly one max-label extra edge on its route, so
  Σ_{e∈X}(served through e) equals the served count — and is equally refuted (12 > 4).
  Any bound that injects served-T-expensive pairs into X (target ≤ |X|) is dead.
- **No-hub optima are real (round 4 structural fact)** — ESTABLISHED. Brute force at
  n=5 (m=2, optimum 6) shows optimal cheap graphs G with degree sequences (2,2,2,2,2)
  (a Hamiltonian cycle), (3,2,2,2,1), (3,3,2,1,1), (4,2,2,1,1). Max G-degree can be as
  low as 2 at the true optimum. Hence **any "WLOG a hub exists" or "no-hub is
  suboptimal" step is FALSE** — the lower-bound argument MUST be case-free. (Lemma E is.)

## Current best

**Answer (conjectured, one direction fully proven): k = 3962.**

Throughout write n = 2026, and note the engineered identity
n − 1 = 2025 = 45², so m := √(n−1) = 45 and
k := 2(n − m) = 2(2026 − 45) = 2·1981 = **3962**.
Also C(2026,2) = 2026·2025/2 = 2,051,325 is the number of labels.

State of the proof:
- **k ≤ 3962** — FULLY RIGOROUS (Part A, the star construction).
- **Lower bound k ≥ 3962** — reduced (case-free) to a single open inequality. The
  reduction and **Lemma E (≥ 1980 expensive pairs for every spanning tree)** are
  FULLY RIGOROUS (Part B, Reduction + Lemma E). What remains open is exactly:

  > **OPEN inequality.** In any cheap-graph configuration, the number of
  > T-expensive pairs that are *served* by a route of cost ≤ 3961 is **< 1980**
  > (equivalently, strictly fewer than the number of T-expensive pairs). Combined
  > with Lemma E (≥ 1980 expensive pairs), this would force an unserved expensive
  > pair, contradicting the hypothesis and giving k ≥ 3962.

  The per-edge target "served ≤ |X| = 1936" is the WRONG target — it is refuted
  (served reaches 12 ≫ |X| = 4 at n=10). The needed bound is global. The numerics
  (n=10: every connected cheap graph leaves ≥ 5 pairs, and ≥ 8 *T-expensive* pairs,
  unserved — never 0) confirm a genuine global margin, but no closed-form mechanism
  is known. This single inequality replaces BOTH previously-open cases (general-A
  hub and no-hub), which is strictly more progress than the round-3 file.

Status is `partial` because the lower bound is not closed.

---

### PART A — Upper bound: a labeling achieving max-min-path = 3962 (RIGOROUS)

We exhibit a bijective labeling ℓ of the C(2026,2) = 2,051,325 edges of K_{2026}
with {1,…,2,051,325} such that every pair of vertices is joined by a path of edge-
label sum ≤ 3962. This proves k ≤ 3962.

**Construction.** Fix a vertex h ("the hub"). The other 2025 vertices are
v_1,…,v_{2025}.

1. *Hub edges.* For i = 1,…,2025 set ℓ(h, v_i) = i. This uses each of the labels
   {1,…,2025} exactly once.

2. *Critical pairs.* Call an unordered pair {v_i, v_j} (i ≠ j, neither is h)
   **critical** if its hub route through h costs more than k = 3962, i.e. if
   ℓ(h,v_i) + ℓ(h,v_j) = i + j > 3962. The number of critical pairs is
   #{ (i,j) : 1 ≤ i < j ≤ 2025, i + j > 3962 }.
   For a fixed j, the admissible i satisfy 3962 − j < i < j, i.e.
   i ∈ {3962 − j + 1, …, j − 1}, which is non-empty exactly when
   3962 − j + 1 ≤ j − 1, i.e. j ≥ 1982. For 1982 ≤ j ≤ 2025 the count is
   (j − 1) − (3962 − j + 1) + 1 = 2j − 3963.
   These values run from 2·1982 − 3963 = 1 up to 2·2025 − 3963 = 87 in steps of 2,
   over 44 values of j, so (arithmetic series with first term 1, last term 87, and
   44 terms)
   Σ_{j=1982}^{2025} (2j − 3963) = (1 + 87)/2 · 44 = 44 · 44 = 1936 = 44² = (m−1)².
   So there are exactly **1936 = 44² = (m−1)²** critical pairs.

3. *Redirect labels.* The labels {2026, 2027, …, 3961} number
   3961 − 2026 + 1 = 1936 = (m−1)², exactly the number of critical pairs.
   Assign these 1936 labels bijectively (in any order) to the direct edges of the
   1936 critical pairs. Each such edge now has label ≤ 3961 < 3962.

4. *Remaining labels.* All remaining labels {3962, …, 2,051,325} are assigned
   bijectively (in any order) to all remaining edges (those non-hub pairs that are
   not critical).

The three label blocks {1,…,2025}, {2026,…,3961}, {3962,…,2,051,325} are disjoint
and exhaust {1,…,2,051,325}; the edge sets they label (hub edges; critical direct
edges; all others) are disjoint and exhaust E(K_{2026}). So ℓ is a bijection.

**Verification that every pair has a path of cost ≤ 3962.** Take any pair {x,y}.

- *Case x = h (or y = h).* The direct hub edge has label ≤ 2025 ≤ 3962. ✓
- *Case x = v_i, y = v_j, not critical.* The two-edge hub route v_i — h — v_j has
  cost i + j ≤ 3962 (by definition of "not critical"). ✓
- *Case x = v_i, y = v_j, critical.* The direct edge {v_i, v_j} received a redirect
  label in {2026,…,3961}, so its cost is ≤ 3961 ≤ 3962. ✓

These three cases are exhaustive (a pair either contains h or not; if not, it is
critical or not). Hence the maximum over all pairs of the min-path cost is ≤ 3962,
proving **k ≤ 3962**. (This construction in fact attains 3962: the non-critical
pair {v_i, v_j} with i = 1937, j = 2025 has i + j = 3962, so its hub route costs
3962; its direct edge received a label ≥ 3962 in step 4, and any other route costs
even more. So this labeling's max-min-path equals 3962 exactly. What matters for
the upper bound is only the inequality ≤ 3962.)

∎ (Part A)

---

### PART B — Lower bound: reduction to a graph problem, and Lemma E

We aim to prove k ≥ 3962, i.e. that no bijective labeling has every pair joined by
a path of cost ≤ 3961. **The reduction below and Lemma E are fully rigorous and
case-free**; they reduce the lower bound to the single OPEN inequality recorded in
"Current best." This subsumes and replaces the earlier two-case (hub / no-hub)
attack.

Suppose, for contradiction, a bijective labeling ℓ has every pair joined by a path
of cost ≤ 3961.

#### B.0 — The cheap-graph confinement (RIGOROUS)

Let **G** be the spanning subgraph of K_{2026} consisting of the edges with label
≤ 3961; since ℓ is a bijection these are exactly the 3961 smallest-labelled edges,
so |E(G)| = 3961, and ℓ restricts to a bijection ℓ : E(G) → {1,…,3961}.

**Lemma B0 (cheap-graph confinement).** *Every path of total cost ≤ 3961 uses only
edges of G.* Indeed, an edge of label ≥ 3962 already costs ≥ 3962 > 3961, so any
path containing such an edge has total cost > 3961. Hence by hypothesis G connects
every pair of vertices within distance ≤ 3961; in particular **G is connected**, so
3961 = |E(G)| ≥ n − 1 = 2025 (consistent). ∎

**Reduction to a pure labelled-graph statement.** By Lemma B0 the heavy edges
(label ≥ 3962) are never used by any cheap route, so whether every pair has a route
of cost ≤ 3961 depends ONLY on the pair (G, ℓ|_{E(G)}). Therefore the lower bound is
equivalent to the following purely graph-theoretic claim:

> **(★)** For every connected labelled graph (G, ℓ) on n = 2026 vertices with
> |E(G)| = 3961 edges carrying the distinct labels {1,…,3961} (one per edge), some
> pair of vertices {u,v} has G-distance d_G(u,v) > 3961.

The rest of Part B works inside (★).

#### B.1 — Fix the minimum spanning tree and record the cut property (RIGOROUS)

Let **T** be a **minimum spanning tree of (G, ℓ)** with respect to the edge weights
ℓ (run Kruskal's algorithm, adding edges in increasing label order and skipping any
edge that would create a cycle). Then |E(T)| = n − 1 = 2025, and the edges of T
carry 2025 distinct labels, all in {1,…,3961}. Set

   **X := E(G) ∖ E(T)**,  so  |X| = 3961 − 2025 = **1936 = (m−1)²**.

For an unordered pair {u,v} let P_T(u,v) be the unique path joining u and v in the
tree T, and put

   t(u,v) := Σ_{e ∈ P_T(u,v)} ℓ(e)   (the T-path cost).

**Cut property of the MST (PROVED, not cited).** *For every extra edge
e = (x,y) ∈ X, every edge on the tree path P_T(x,y) has label < ℓ(e).* Proof: run
Kruskal. The edge e was examined at the moment all edges of label < ℓ(e) had already
been processed; e was *rejected* (it is not in T), which by Kruskal happens exactly
when x and y were already in the same component of the forest built from the edges
of label < ℓ(e). That component is a subtree of T, so the unique T-path P_T(x,y)
lies entirely inside it, hence uses only edges of label < ℓ(e). (All labels are
distinct, so "< ℓ(e)" is strict.) ∎

This cut property is the only structural fact we use about T. We never assume T
carries the label set {1,…,2025}: small labels may form cycles and sit on extra
edges. (Indeed the no-hub optima recorded under "Approaches tried" show T can be a
path or any shape, with arbitrary distinct labels.)

#### B.2 — Every T-expensive pair must be served off the tree (RIGOROUS)

Call a pair {u,v} **T-expensive** if t(u,v) > 3961. For such a pair its T-path
costs > 3961, so by the hypothesis of (★) its cheapest route (cost ≤ 3961, hence
inside G by Lemma B0) is NOT the T-path; therefore that route uses at least one edge
of X. We say a T-expensive pair is **served** if it has a route of cost ≤ 3961 (under
the hypothesis, every pair is served; the point is to count how many T-expensive
pairs *can* be served and reach a contradiction with their number).

#### B.3 — Lemma E: at least 1980 T-expensive pairs, for EVERY tree (RIGOROUS)

> **Lemma E.** Let T be any tree on n = 2026 vertices whose 2025 edges carry
> distinct labels, the label set being some L ⊆ {1,…,3961} with |L| = 2025. Then
> the number of T-expensive pairs (pairs {u,v} with t(u,v) > 3961) is at least
> **(m−1)·m = 1980.**

We prove Lemma E in two rigorous steps: a combinatorial injection (Lemma E1) that
is independent of the labels' magnitudes, and a label-set minimization (Lemma E2).

---

**Lemma E1 (edge-pair injection).** *Let T be any tree with vertex set V, edges
carrying distinct positive labels, and let τ be any real threshold. Then*

   #{ unordered vertex-pairs {u,v} : t(u,v) > τ }
       ≥ #{ unordered edge-pairs {e,f} ⊆ E(T) : ℓ(e) + ℓ(f) > τ }.

*Proof.* We construct an **injection** Φ from the set of unordered edge-pairs of T
to the set of unordered vertex-pairs of T such that, for every edge-pair {e,f},
both e and f lie on the tree path joining the two vertices Φ({e,f}). Granting such
a Φ, the inequality follows: if {e,f} has ℓ(e) + ℓ(f) > τ then, writing
Φ({e,f}) = {u,v}, the path P_T(u,v) contains e and f and all labels are positive, so
t(u,v) ≥ ℓ(e) + ℓ(f) > τ; thus {u,v} is among the counted vertex-pairs. Since Φ is
injective, distinct qualifying edge-pairs map to distinct qualifying vertex-pairs,
giving the stated inequality.

We build Φ by induction on the number of vertices N = |V|.

*Base case N = 2.* T has one edge and no edge-pairs; Φ is the empty map. ✓

*Inductive step.* Let N ≥ 3 and assume the statement for all trees with N − 1
vertices. Pick any leaf x of T, let p be its unique neighbour, and let g = {x,p} be
the pendant edge. Let T′ = T − x, a tree on N − 1 vertices. By induction there is an
injection Φ′ from edge-pairs of T′ to vertex-pairs of T′, with both edges on the
connecting path. Note E(T′) = E(T) ∖ {g} and V(T′) = V ∖ {x}.

The edge-pairs of T split into two disjoint classes:

  (i) edge-pairs not containing g — these are exactly the edge-pairs of T′. Define
      Φ on them by Φ := Φ′. The target vertex-pairs all lie in V ∖ {x} (they avoid
      x), and any T′-path remains a T-path (T′ is a subtree of T), so both edges
      still lie on the connecting path in T. ✓

  (ii) edge-pairs containing g — these are exactly the pairs {g, f} for f ∈ E(T),
      f ≠ g. Root T at p and, for each edge e of T, let δ(e) be its **deeper
      endpoint** (the endpoint farther from p). Rooting at p makes "edge ↦ deeper
      endpoint" a *bijection* from E(T) onto V ∖ {p}: every non-root vertex w is the
      deeper endpoint of exactly one edge, namely the edge joining w to its parent.
      In particular δ(g) = x. For each f ≠ g put
            Φ({g, f}) := { x, δ(f) }.
      Validity: δ(f) ≠ x (since the bijection sends only g to x, and f ≠ g), so
      {x, δ(f)} is a genuine vertex-pair. The path P_T(x, δ(f)): because x is a leaf,
      this path begins with the edge g; and because δ(f) is the deeper endpoint of
      f, the tree path from the root side down to δ(f) passes through f, so f lies on
      P_T(p, δ(f)) ⊆ P_T(x, δ(f)). Hence both g and f lie on P_T(x, δ(f)). ✓
      Injectivity within class (ii): if {g,f} ≠ {g,f′} then f ≠ f′, so by the
      bijection δ(f) ≠ δ(f′), so {x,δ(f)} ≠ {x,δ(f′)}. ✓

Finally Φ is injective overall: the images of class (i) avoid the vertex x, while
every image of class (ii) contains x; so the two image families are disjoint, and Φ
is injective on each class. This completes the induction and the proof of Lemma E1.
∎

*(Remark. Lemma E1 was verified exhaustively over all labelled trees for
3 ≤ N ≤ 7 and all thresholds, and the injection Φ above was confirmed deterministic,
valid and injective for all trees on ≤ 7 vertices; this is a check, not part of the
proof, which stands on its own.)*

---

**Lemma E2 (label-set minimization).** *Among all 2025-element subsets L ⊆
{1,…,3961}, the quantity*
   M(L) := #{ unordered pairs {a,b} ⊆ L : a + b > 3961 }
*is minimized by L = {1,…,2025}, where M = 1980.*

*Proof.* First the minimization. Let L be any 2025-subset of {1,…,3961} with
L ≠ {1,…,2025}. Since |L| = 2025 < 3961, the complement {1,…,3961} ∖ L is non-empty;
let s be its smallest element, and let M be the largest element of L. Because
L ≠ {1,…,2025}, L contains some element exceeding 2025, so M ≥ 2026 > 2025 ≥ s
(here s ≤ 2025 because among the 2026 integers {1,…,2026} at least one is missing
from the 2025-element L, so s ≤ 2026; more simply, s is the least missing integer
and L misses some value ≤ 2026). Hence s < M. Form L′ = (L ∖ {M}) ∪ {s}; then |L′| =
2025 and L′ ⊆ {1,…,3961}. We claim M(L′) ≤ M(L). Indeed, pairs not involving M or s
are unchanged. For each other element c ∈ L ∖ {M} = L′ ∖ {s}, compare the pair {c,M}
in L with {c,s} in L′: since s < M we have c + s < c + M, so the indicator
[c + s > 3961] ≤ [c + M > 3961]. Summing over all such c shows the pairs involving
the swapped element contribute no more in L′ than in L. (There is no {M,s} pair to
worry about since M ∈ L, s ∉ L, M ∉ L′, s ∈ L′.) Hence M(L′) ≤ M(L). Iterating this
swap strictly decreases the multiset of elements (replacing the current maximum by a
smaller missing value) and after finitely many steps reaches L = {1,…,2025} without
ever increasing M. Therefore M(L) ≥ M({1,…,2025}) for every L.

Now compute M({1,…,2025}). For a fixed b ∈ {1,…,2025}, the elements a < b with
a + b > 3961 are a ∈ {3961 − b + 1, …, b − 1}, which is non-empty iff
3961 − b + 1 ≤ b − 1, i.e. b ≥ 1982; the count is (b − 1) − (3961 − b + 1) + 1 =
2b − 3962. Hence
   M({1,…,2025}) = Σ_{b=1982}^{2025} (2b − 3962)
                 = (first term 2·1982 − 3962 = 2) + … + (last term 2·2025 − 3962 = 88),
an arithmetic series with first term 2, last term 88, and 2025 − 1982 + 1 = 44 terms,
so M({1,…,2025}) = (2 + 88)/2 · 44 = 45 · 44 = **1980 = (m−1)·m**. ∎

---

**Proof of Lemma E.** Let T be any spanning tree as in Lemma E, with label set L,
|L| = 2025, L ⊆ {1,…,3961}. Apply Lemma E1 with threshold τ = 3961:
   #{T-expensive pairs} = #{ {u,v} : t(u,v) > 3961 }
                        ≥ #{ {e,f} ⊆ E(T) : ℓ(e) + ℓ(f) > 3961 }.
The right-hand side counts exactly the pairs {a,b} of distinct labels from L with
a + b > 3961, i.e. it equals M(L). By Lemma E2, M(L) ≥ M({1,…,2025}) = 1980. Hence
the number of T-expensive pairs is ≥ 1980 = (m−1)·m. ∎ (Lemma E)

*(Numerical confirmation, not part of the proof: at n = 5 the minimum number of
T-expensive pairs over all labelled trees equals 2 = (m−1)m, achieved by the star
with labels {1,2,3,4}; at n = 6 it equals (m−1)m matching the analogous star count;
the chain "#T-expensive ≥ M(L) ≥ M(smallest set)" was verified with zero violations
over 284 200 random labelled trees on 5 and 6 vertices.)*

#### B.4 — What remains (the single OPEN inequality)

Under the hypothesis of (★) every pair, in particular every T-expensive pair, is
served by a route of cost ≤ 3961. By Lemma E there are ≥ 1980 T-expensive pairs. To
reach a contradiction it suffices to prove:

> **OPEN.** The number of *served* T-expensive pairs is **< 1980**.

If proved, Lemma E (≥ 1980 expensive pairs) and this bound (< 1980 servable) force
some T-expensive pair to be unserved, contradicting the hypothesis; so (★) holds,
giving k ≥ 3962, and with Part A, **k = 3962**.

This inequality is genuinely open and must be **global**: the per-edge target
"served ≤ |X| = 1936" is REFUTED (served reaches 12 ≫ |X| = 4 at n = 10; a low-label
extra edge serves up to 9 pairs as a "second hub"), and the weighted reformulation
Σ_{e∈X}(served through e) equals the served count, hence is the same refuted quantity.
The numerics at n = 10 (every connected cheap graph leaves ≥ 8 T-expensive pairs, and
≥ 5 pairs overall, unserved — never 0) confirm a real global margin but supply no
closed form. Closing this single inequality is the remaining research step; it
replaces both formerly-open cases (general-A hub and no-hub) at once.

---

### Summary of what is proven

- **k ≤ 3962** — fully rigorous (Part A construction).
- **Case-free reduction of the lower bound** to the pure graph statement (★) — fully
  rigorous (Lemma B0).
- **Lemma E: ≥ 1980 = (m−1)m T-expensive pairs for EVERY spanning tree** carrying
  2025 distinct labels from {1,…,3961} — fully rigorous (Lemmas E1 + E2). This
  subsumes and strengthens the old hub-only bound; no hub or label-set assumption is
  used.
- **k ≥ 3962** — reduced to the single OPEN global inequality "served T-expensive
  pairs < 1980." The conjectured answer **k = 3962** is thus established as an upper
  bound and reduced, on the lower-bound side, to one clean inequality.

All displayed arithmetic identities (C(2026,2) = 2,051,325; critical-pair count
44² = 1936 with threshold > 3962; expensive-pair count 44·45 = 1980 with threshold
> 3961; |X| = 3961 − 2025 = 1936) have been verified.
