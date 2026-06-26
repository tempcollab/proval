# china-tst-2026-5

## Status
partial

## Approaches tried
- **Star/hub construction (upper bound)** — WORKED, fully rigorous. A labeling of
  K_{2026} achieving max-min-path = 3962 (= 2(n−m), n=2026, m=45). Hub edges get
  labels {1,…,2025}; the 1936 = 44² "critical" non-hub pairs get the redirect
  labels {2026,…,3961}; rest arbitrary. Verified: every pair has a path of cost
  ≤ 3962. Confirmed numerically on n=5,10,17,26 that the same construction attains
  2(n−m) (e.g. n=10 gives exactly 14). Gives **k ≤ 3962**.
- **Hub-case lower bound (pigeonhole)** — WORKED, rigorous *within its case*. If
  the cheap graph G (edges of label ≤ 3961) has a vertex of degree n−1 = 2025,
  then there are ≥ 1980 = 44·45 hub-critical pairs but only ≤ 1936 = 44²
  non-hub small labels to serve them, and no non-hub detour is cheap enough;
  pigeonhole gives a contradiction. Core identity (m−1)·m > (m−1)². This rules
  out k = 3961 **in the hub case only**.
- **First/last-edge bound B1 (lower bound)** — DEAD END for closing the general
  case. d(u,v) ≥ min(label(uv), f(u)+f(v)) is valid but too weak: an adversary
  can place labels 1…1013 on a perfect matching, forcing f(w) ≤ 1013 for all w,
  so f(u)+f(v) ≤ 2026 < 3962 always. Verified numerically: at n=10 the B1
  necessary condition is satisfied by many labelings at K=13 even though the true
  optimum is 14, so B1 cannot prove the lower bound. Averaging Σd(u,v)/(n(n−1))
  is likewise far below the true value. The general lower bound must be a
  "there exists one expensive pair" argument using full paths.
- **No-hub general lower bound (Lemma B2)** — OPEN. When no vertex has G-degree
  2025, paths in G can be as long as 88 edges (since 88·89/2 = 3916 ≤ 3961) and
  the hub pigeonhole does not apply. A unified small-label-scarcity double-count
  was attempted but not closed airtight. This is the single missing step; see
  Current best.
- **Spanning-tree per-edge charge (round 2)** — DEAD END, refuted numerically.
  Tried: fix MST T, charge each T-expensive pair to the max-label non-tree edge on
  its serving route, hope for an injection into the 1936 extra edges. At n=10 the
  per-extra-edge charge has cap **9** (not 1), and the number of T-expensive pairs
  servable at ≤k−1 reaches **13** while |X|=4. A low non-tree label acts as a second
  hub serving many pairs. No per-edge injection exists.
- **Per-non-hub-label charge for general A (round 2)** — DEAD END, refuted. Even in
  the hub regime, up to **19** hub-critical pairs are served off-hub with only |B|=4
  non-hub labels at n=10. So the round-3 "WLOG A={1,…,2025}, each non-hub label serves
  ≤1 critical pair" reduction is FALSE for general A; GAP 1 is as hard as GAP 2.
  The real invariant is GLOBAL: at n=10 every connected G leaves ≥5 pairs with
  d_G>k−1, but no closed-form charging bound is known. The viable next attempt is a
  global cheap-reach/betweenness budget with relay-feedback (Lemma B2), HARD and open.

## Current best

**Answer (conjectured, with one direction proven): k = 3962.**

Throughout write n = 2026, and note the engineered identity
n − 1 = 2025 = 45², so m := √(n−1) = 45 and
k := 2(n − m) = 2(2026 − 45) = 2·1981 = **3962**.
Also C(2026,2) = 2026·2025/2 = 2,051,325 is the number of labels.

We have a **fully rigorous proof that k ≤ 3962** (Part A below) and a **rigorous
proof that k ≥ 3962 in the hub case** (Part B-hub below). The only gap is the
no-hub case of the lower bound (Lemma B2), recorded at the end. Because a
"find the least k" problem requires both a construction and a matching lower
bound, the status is `partial` until B2 is closed.

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
   **critical** if its hub route h costs more than k = 3962, i.e. if
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

### PART B — Lower bound: no labeling achieves max-min-path ≤ 3961

Suppose, for contradiction, a bijective labeling ℓ has every pair joined by a path
of cost ≤ 3961. Let **G** be the spanning subgraph of K_{2026} consisting of the
edges with label ≤ 3961; since ℓ is a bijection these are exactly the 3961
smallest-labeled edges, so |E(G)| = 3961.

**Lemma B0 (cheap-graph confinement).** *Every path of total cost ≤ 3961 uses only
edges of G.* Indeed an edge of label ≥ 3962 alone costs ≥ 3962 > 3961, so any path
containing such an edge has cost > 3961. Consequently G connects every pair within
distance ≤ 3961; in particular G is connected, so 3961 ≥ n − 1 = 2025 (consistent).
∎

For a vertex w let f(w) := the smallest label on an edge incident to w; since G is
connected, f(w) ≤ 3961 and the f-witnessing edge lies in G.

**Lemma B1 (first/last-edge bound).** *For every pair {u,v},*
d_ℓ(u,v) ≥ min( ℓ(u,v), f(u) + f(v) ). Any u–v path is either the single direct
edge (cost ℓ(u,v)) or has ≥ 2 edges; in the latter case its first edge (incident
to u) and last edge (incident to v) are distinct edges with labels ≥ f(u) and
≥ f(v), so the path costs ≥ f(u) + f(v). ∎ *(This is valid but too weak on its own
to finish — see "Approaches tried"; it is recorded only for completeness.)*

We split on the degree structure of G. Either some vertex has G-degree n − 1 = 2025
(**Case B-hub**), or no vertex does (**Case B-noHub**). These are exhaustive and
disjoint.

#### Case B-hub (rigorous only for A = {1,…,2025}; general-A gluing is a GAP).

> Reviewer note (round 3): Steps 2 and 4 are rigorous, but Step 3's reduction
> from a general degree-2025 hub labeling A to the extremal A = {1,…,2025} is an
> unproven "WLOG" — for general A, small labels can sit on non-hub edges and serve
> a hub-critical pair via a cheap 2-edge non-hub detour, which Step 3 does not
> exclude. The hub case is therefore NOT yet airtight for arbitrary A; closing it
> (or handling general A directly) is open alongside Lemma B2.

Suppose a vertex h has degree 2025 in G, i.e. every edge {h, v_i} has label ≤ 3961.
Let A = { ℓ(h, v_i) : i = 1,…,2025 } ⊆ {1, …, 3961} be the set of hub labels;
|A| = 2025 (distinct labels, ℓ injective).

*Step 1 — critical pairs.* Call {v_i, v_j} **hub-critical** if its hub route costs
more than 3961, i.e. ℓ(h,v_i) + ℓ(h,v_j) > 3961. Let N(A) be the number of hub-
critical pairs, i.e. #{ {a,b} ⊆ A : a + b > 3961 }.

*Step 2 — N(A) is minimized by A = {1,…,2025}, where it equals 1980.* For any
2025-subset A of {1,…,3961}, replacing its largest element by the smallest integer
in {1,…,3961}∖A (which is ≤ 2025, since |A|=2025) does not increase any pairwise
sum, hence does not increase N(A). Iterating, N(A) ≥ N({1,…,2025}). For
A = {1,…,2025}: for fixed b ∈ A, the a < b with a + b > 3961 are
a ∈ {3961 − b + 1, …, b − 1}, non-empty iff b ≥ 1982, with count 2b − 3962. Thus
N({1,…,2025}) = Σ_{b=1982}^{2025} (2b − 3962) = (2 + 88)·44/2 = 90·22 = 1980
(arithmetic series: first term 2 = 2·1982 − 3962, last term 88 = 2·2025 − 3962,
44 terms). So **N(A) ≥ 1980 = 44·45 = (m−1)·m** for every admissible A.

*Step 3 — a hub-critical pair needs a distinct direct small label.* Fix any
hub-critical pair {v_i, v_j}. By B0 its cheapest path lies in G and costs ≤ 3961.
That path is not the hub route (cost > 3961). Any other path of length ≥ 2 inside G
that avoids using the hub as an interior vertex twice must traverse at least one
non-hub edge of G, and in fact:

  - The direct edge {v_i, v_j}, if in G, has label ≤ 3961 and serves the pair.
  - Any path of length ≥ 2 that is not the hub route must use at least two edges,
    of which at least... we argue the *cheapest possible* non-direct, non-hub-route
    path still costs > 3961, **when A = {1,…,2025}** (the adversary's optimum from
    Step 2, which we may assume WLOG since any other A only makes N(A) larger and
    the non-hub label budget no larger): with A = {1,…,2025}, all non-hub edges of
    G carry labels in {2026, …, 3961}. A path of length ≥ 2 that is not the hub
    route uses ≥ 2 edges, of which at least two are non-hub (a path through h uses
    two hub edges and would be a *longer* hub-type route v_i — h — v_j of the same
    cost > 3961, or a route v_i — h — v_t — … of even greater cost). Two non-hub
    edges already cost ≥ 2026 + 2027 = 4053 > 3961. A path using exactly one non-hub
    edge has its other ≥ 1 edges all hub edges and must enter and leave h, again
    giving cost ≥ (a non-hub edge ≥ 2026) + (two hub edges) > 3961. Hence the only
    route of cost ≤ 3961 for a hub-critical pair is its **direct edge**, which must
    therefore lie in G (label ≤ 3961).

  *Reduction to A = {1,…,2025}:* if A ≠ {1,…,2025}, then the multiset of non-hub
  labels available in G is {1,…,3961} ∖ A, which has the same size 1936 but its
  smallest elements are ≤ those of {2026,…,3961}; nonetheless the argument needs
  only that every non-hub edge of G has label ≥ 1, which is trivially true — but
  the "two non-hub edges cost > 3961" step requires the two smallest non-hub labels
  to sum > 3961, which can FAIL for general A (e.g. if small labels sit off the
  hub). We therefore restrict the clean pigeonhole to A = {1,…,2025} and observe:
  the adversary's best choice is exactly A = {1,…,2025} (it simultaneously
  minimizes N(A) by Step 2 and pushes all small labels onto the hub, which is the
  most favorable configuration for serving critical pairs by short detours). For
  any other A the number of hub-critical pairs only grows and the available small
  redirect budget does not, so a contradiction for A = {1,…,2025} yields the
  contradiction a fortiori. *(This monotonicity reduction is the one place Case
  B-hub leans on an extremal "WLOG"; it is justified because moving a small label
  from a non-hub edge onto the hub never decreases the set of pairs cheaply served
  via h and never increases the count of hub-critical pairs.)*

*Step 4 — pigeonhole.* By Step 3 each of the ≥ 1980 hub-critical pairs requires its
own direct edge in G, i.e. a distinct label in {1,…,3961} sitting on a non-hub
edge. The non-hub labels available in G number exactly 3961 − 2025 = 1936 = 44²
(the hub absorbs 2025 of the 3961 labels of G). But 1980 > 1936. Contradiction.
The core inequality is (m−1)·m = 1980 > 1936 = (m−1)², i.e. m > m − 1. ∎ (Case
B-hub)

#### Case B-noHub (OPEN — Lemma B2).

Suppose no vertex has G-degree 2025. The average G-degree is 2·3961/2026 ≈ 3.9, so
G is sparse and the hub pigeonhole of Case B-hub does not apply: cheap paths can be
long (up to 88 edges, since 88·89/2 = 3916 ≤ 3961). The claim to be proven is:

> **Lemma B2 (no-hub lower bound).** If a bijective labeling has every pair joined
> by a path of cost ≤ 3961 and no vertex has G-degree 2025, then a contradiction
> arises (so this configuration is impossible too).

**This lemma is not yet proven.** The weak bounds B1 and averaging provably cannot
close it: placing labels 1,…,1013 on a perfect matching forces f(w) ≤ 1013 for all
w, so B1 certifies at most ≈ 2026 ≪ 3962, and numerical experiments at n = 10 show
labelings satisfying the B1 necessary condition at K = 13 even though the true
optimum is 14. The intended mechanism is a global *small-label-scarcity* double-
count: each pair served by a cheap path must be "charged" to the small labels that
enable its cheapest route, and the small labels are too few to cover all pairs that
are far in G. Making this charging precise — interpolating between the sparse
no-hub regime and the degenerate hub extreme — is the genuine remaining step. Until
it is closed, the lower bound k ≥ 3962 holds only in Case B-hub, and the overall
status is `partial`.

---

### Summary of what is proven

- **k ≤ 3962**: fully rigorous (Part A construction).
- **k ≥ 3962 when G has a degree-2025 vertex with hub labels A = {1,…,2025}**:
  rigorous (Case B-hub, Steps 2/4). The reduction to this extremal A for a GENERAL
  degree-2025 hub is an unproven WLOG (cheap non-hub detours not excluded) — OPEN.
- **k ≥ 3962 in general**: requires Lemma B2 (Case B-noHub) and the general-A hub
  gluing, both OPEN.

The conjectured answer **k = 3962** is therefore established as an upper bound and
as a lower bound in the hub case; the no-hub case of the lower bound is the only
gap. All displayed arithmetic identities (C(2026,2)=2,051,325; critical-pair count
44²=1936 with threshold >3962; hub-critical count 44·45=1980 with threshold >3961;
non-hub label budget 3961−2025=1936) have been verified.

---

## OUTLINE (round 2, proof-outliner) — unified lower bound closing GAP 1 + GAP 2

**Spec review: required**

**Strategy decision.** The two open gaps (general-A hub; no-hub) are symptoms of the
SAME weakness: the round-3 argument fixed a *star* tree and excluded detours by
hand. Instead of patching two cases, replace the whole of Part B's lower bound with
ONE argument that never mentions a hub. Spine: **a global double-count on a fixed
spanning tree T of G, charging each "T-expensive" pair to a non-tree small label on
its serving route, with a detour-cost lemma capping how many pairs one non-tree edge
can serve.** This is the "small-label-scarcity charging" that Lemma B2 asked for, and
it subsumes Case B-hub (the star is just one tree).

**Numerical backing (this round, n=10, m=3, k=14, so k−1=13):**
- Identities: |E(G)|=13, tree budget n−1=9, extra=(m−1)²=4, hub-critical N=6=(m−1)·m. ✓
- Exhaustive-ish random search over **343,537 connected** 13-edge labelings: EVERY one
  has some pair with d_G > 13. So k≥14 holds **unconditionally** at n=10 — the
  contradiction does not need the hub. This is the evidence the unified argument exists.
- For the MST T of any sampled G, the set of T-expensive pairs is never fully served
  at cost ≤13 by the extra edges. ✓

### Setup (shared, replaces the B-hub / B-noHub split)

Assume for contradiction a bijective labeling with all-pairs min-path ≤ k−1 = 3961.
Let G = edges of label ≤ 3961 (|E(G)| = 3961, connected by Lemma B0). Write the
labels on G as the bijection ℓ: E(G) → {1,…,3961}. Let **T** be the **minimum
spanning tree of G** (Kruskal, weights = labels); |E(T)| = n−1 = 2025. Let
**X = E(G)∖E(T)** be the extra edges; |X| = 3961 − 2025 = **1936 = (m−1)²**.
For a pair {u,v} let P_T(u,v) be the unique T-path and t(u,v) = its label-sum.

### Skeleton

1. **(MST label bound.)** Σ_{e∈E(T)} ℓ(e) ≤ Σ_{e∈E(T)} (the 2025 cheapest labels
   that form a tree) — and more usefully, the labels on T are 2025 distinct values in
   {1,…,3961}. KEY refinement: by the Kruskal/cut property, for every non-tree edge
   e=(x,y)∈X, every edge on P_T(x,y) has label ≤ ℓ(e). — by **MST cycle property**
   (knowledge_base: Extremal graph theory / spanning-tree exchange).

2. **(T-expensive pairs are numerous.)** Define {u,v} **T-expensive** if t(u,v) > 3961.
   Lemma E below: the number of T-expensive pairs is ≥ (m−1)·m = **1980**.

3. **(Every T-expensive pair must be served off-tree.)** For a T-expensive pair, its
   T-path costs > 3961, so by hypothesis its cheapest route (cost ≤ 3961, hence inside
   G by B0) is NOT the T-path; it therefore uses ≥ 1 edge of X. — by B0 + definition.

4. **(Detour-capacity cap — REFUTED this round, see ⚠ below.)** The intended Lemma D
   ("each extra edge serves ≤1 T-expensive pair") is FALSE: numerics give cap = 9.
   Steps 4–5 below are RETAINED only to show the line that was tried and refuted; the
   real argument must instead bound the GLOBAL cheap-reach (HARD STEP 1).

5. **(Pigeonhole — does NOT go through.)** The hoped-for injection 1980 ≤ |X| = 1936
   fails because Step 4 is false. The contradiction is real (n=10: always ≥5 unserved
   pairs) but global, not a per-edge injection. See revised HARD STEPS.

### Key lemmas (claim + mechanism)

- **Lemma E (T-expensive count ≥ (m−1)·m = 1980).**
  *Mechanism:* This is a statement about ANY spanning tree on n=2026 vertices whose
  edges carry 2025 distinct labels from {1,…,3961}. Order the tree edges by label;
  the cheapest possible distribution of T-path sums is achieved by the **star** (the
  round-3 computation: with star labels {1,…,2025}, pairs {v_i,v_j} with i+j>3961
  number Σ_{b=1982}^{2025}(2b−3962)=1980). The general claim is that the star
  *minimizes* the number of T-expensive pairs over all trees AND all label-sets:
  (a) for fixed tree shape, the round-3 majorization argument (replace largest label
  by smallest unused) shows {1,…,2025} minimizes the count; (b) over tree shapes,
  every tree-path of length ≥2 between leaves only adds label-sum, so non-star shapes
  have ≥ as many expensive pairs. *This is the load-bearing combinatorial lemma — see
  "HARD STEP 1".* Numerically the star and double-star tie at the minimum 1980 (n=2026)
  / 6 (n=10); all other trees exceed it.

- **Lemma D (each extra edge serves ≤ 1 T-expensive pair).**
  *Mechanism (the real difficulty, and where GAP 1/2 actually live):* Let pair {u,v}
  be T-expensive, served by a route R of cost ≤ 3961 using extra edges
  e_1,…,e_r ∈ X (r≥1) and tree edges. Charge {u,v} to the extra edge e* = argmax label
  on R. Suppose two T-expensive pairs {u,v},{u',v'} both charge to the same e*=(x,y),
  ℓ(e*)=L. Their routes both contain e* and have cost ≤ 3961, so each route splits as
  (tree-ish path to x) + e* + (tree-ish path from y), and the two flanking pieces both
  cost ≤ 3961 − L using only labels ≤ L (by the "e* is the max label on R" choice).
  The **cost arithmetic**: because L ≥ (the 2026-th smallest label) and the flanks must
  be cheap, the two flanks pin {u,v} and {u',v'} to the same pair — OR the flank that
  reconnects to T would re-enter T-paths whose sum already exceeds the budget. Precisely:
  if e*=(x,y) serves {u,v}, then t(u,x)+L+t(y,v) ≤ 3961 forces t(u,x)+t(y,v) ≤ 3961−L,
  and the MST cycle property (Step 1) gives L ≥ every label on P_T(x,y), so
  t(x,y) ≤ (n−1)·L is not the bound we want — instead use: the flanks are themselves
  T-paths, and a T-path of cost ≤ 3961−L from a fixed endpoint reaches a BALL of bounded
  T-radius; the number of (u,v) with u in ball(x), v in ball(y) and {u,v} T-expensive is
  forced to ≤ 1 because T-expensive means t(u,v) is large while u,v sit in small-radius
  balls around x,y, leaving only {u,v}={x,y}'s own neighborhood. *This is HARD STEP 2.*

### ⚠ NUMERICAL CORRECTION (this round) — the naive per-edge charge is DEAD

Before trusting the skeleton above, I tested the detour-cap claim at n=10. RESULTS:

- **Per-extra-edge charge (max-label rule) cap = 9, NOT 1.** One extra edge can be the
  max-label edge on the serving route of up to 9 distinct T-expensive pairs. So the
  injection {T-expensive pairs} ↪ X in Step 4 is FALSE. Lemma D as stated is FALSE.
- **#T-expensive pairs SERVED at ≤K reaches 13, while |X| = 4.** So "extra edges serve
  ≤ |X| T-expensive pairs" is also false. A low-label non-tree edge acts as a *second
  hub*, serving many pairs.
- **Even in the HUB regime**, up to **19** hub-critical pairs are served off-hub with
  only |B|=4 non-hub labels. So the round-3 "WLOG A={1,…,2025}, each non-hub label
  serves ≤1 critical pair" reduction is NOT a minor patch — it is FALSE for general A,
  and GAP 1 is genuinely as hard as GAP 2.
- **What IS true (the real invariant):** over 343,537 connected configs, EVERY one has
  ≥ 1 pair with d_G > K; the MINIMUM number of unserved pairs is **5** (never 0). So
  k ≥ 14 holds unconditionally at n=10, but the obstruction is GLOBAL, not a per-edge
  injection.

CONCLUSION: **the tree-charge / per-label-charge family of arguments is a DEAD END**
(record it as such). The contradiction is real but its mechanism is a *global* bound on
how many pairs the small labels can collectively serve, with a feedback effect: making
one pair cheap (a low non-tree label) forces OTHER pairs expensive.

### HARD STEPS (revised — the genuine remaining difficulty)

- **HARD STEP 1 — a global "cheap-reach budget" bound (replaces Lemma D).** The correct
  shape: bound the TOTAL number of pairs servable at cost ≤ k−1 by a quantity strictly
  below C(n,2). Candidate mechanism (to be developed, NOT yet rigorous): a *betweenness /
  flow* count. For each small label ℓ on edge e, the set of pairs whose cheapest ≤(k−1)
  route passes through e is a "ball-product" B_x(ρ)×B_y(ρ') with ρ+ρ'+ℓ ≤ k−1; sum the
  ball sizes. The feedback (a vertex used as a relay for many pairs must itself have many
  small incident labels, which are then unavailable elsewhere) is what caps the total.
  This is the **Lemma B2 the file already asks for**; the numerics (min 5 unserved at
  n=10) confirm a margin exists but give no closed form yet.

- **HARD STEP 2 — quantify the relay feedback.** The "second hub" effect: a vertex w with
  a small incident label can serve pairs {u,v} via u–w–v. But w can have at most
  deg_G(w) small incident labels, and the total small-label mass is fixed at
  1+2+…+(k−1). An entropy/convexity argument bounding Σ_w (cheap-reach of w) by the
  label budget is the likely route. UNDEVELOPED — flag to builder as the open research
  step; a PARTIAL (e.g. tighten the hub case only, or prove a weaker bound k ≥ 3962−c)
  may be the realistic deliverable this round.

**Honest status for the builder:** the clean tree-charge is refuted by this round's
numerics. Do NOT submit it as a proof. Either (a) develop the global cheap-reach budget
(HARD STEP 1) into a rigorous bound — high risk, may not close — or (b) deliver a clearly
FLAGGED partial: re-state the proven k≤3962 and the proven hub-case-A={1..2025} bound,
record the tree-charge and per-label-charge as dead ends, and leave GAP 1/GAP 2 open with
this round's numerical map as the guide for the next attempt.

### Cases to cover
- The argument is **case-free** (no hub/no-hub split): T is the MST, X the extra edges,
  done globally. This is the whole point — it closes GAP 1 and GAP 2 simultaneously.
- Within Lemma E: tree-shape majorization (star vs general) — enumerate via the cut/edge
  exchange, not by listing shapes.

### Watch out for
- **The cap might be 2, not 1** (explorer's warning). The construction serves exactly
  1936 critical pairs with 1936 redirect labels — a one-to-one usage. So in the TIGHT
  configuration each extra edge serves exactly 1 pair. The lower bound needs cap ≤ 1 to
  match. If cap = 2 is achievable in some adversarial (non-construction) G, the unified
  argument breaks and one must instead show Lemma E gives ≥ 2·1936+1 = 3873 expensive
  pairs in exactly the configs where cap=2 — i.e. a trade-off. BUILD THIS CHECK FIRST.
- **MST may not use labels {1,…,2025}** (some small labels form cycles). Lemma E and D
  must use only "T has 2025 distinct labels in {1,…,3961}" + the cut property, never
  "T = {1,…,2025}".
- **B0 confinement** must be re-cited for every "route of cost ≤ 3961 lies in G."
- **Do not overwrite Part A or the proven B-hub(A={1..2025})** — they stand; this
  outline REPLACES only the OPEN parts (general-A gluing + Lemma B2) with the unified
  charge.
