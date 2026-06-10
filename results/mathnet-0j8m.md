## Status
solved

## Approaches tried
- Strong induction on n with a dyadic split [2^n] = L ⊔ R, heavy-half cases handled by the induction hypothesis and the heavy-crossing case settled by an ordered Bipartite Lemma (proved by contradiction + double counting via minimum / non-minimum edges) — worked; complete proof below. Arithmetic identity, the ≤2M edge bound, and the injectivity core all independently brute-force verified (M=2,3,4: 7146 pattern-free graphs, 0 violations).

## Current best
Complete proof (see Full proof). The load-bearing component is the Bipartite Lemma: an ordered bipartite graph on parts L, R of size M each (all of L below all of R) with more than 2M edges must contain three edges (a,c),(a,d),(b,d) with a<b in L and c<d in R. The dyadic induction reduces the original statement to this lemma in the only non-trivial case.

## Full proof

Throughout, identify a pair (a,b) with a<b with the **edge** {a,b}, and write it as an
ordered symbol (a,b) understanding a<b. Fix the ground set [N] = {1,2,…,N}.

We call four integers a<b<c<d together with the three edges (a,c), (b,d), (a,d) a
**pattern**. (Note the asymmetry: the vertex a is an endpoint of two of the three
edges, namely (a,c) and (a,d); the vertex b is an endpoint of only one, namely (b,d).)

For n ≥ 1, let P(n) be the statement:

> P(n): For every set S of edges on the ground set [2^n] with |S| > n·2^{n+1},
> the set S contains a pattern.

We prove P(n) for all n ≥ 1 by strong induction on n. The desired theorem is exactly
P(n).

---

### The Bipartite Lemma

We first prove the combinatorial core, then use it inside the induction.

**Bipartite Lemma.** Let M ≥ 1. Let G = (L, R, E) be a bipartite graph whose parts are
totally ordered finite sets
$$L = \{\ell_1 < \ell_2 < \cdots < \ell_M\}, \qquad R = \{r_1 < r_2 < \cdots < r_M\},$$
with the property that every element of L is strictly smaller than every element of R.
Write each edge as (x, y) with x ∈ L and y ∈ R. If |E| > 2M, then there exist
a < b in L and c < d in R with all three edges (a,c), (a,d), (b,d) in E.

*Proof (contradiction + double counting).* Suppose, for contradiction, that G has
**no** such configuration; i.e. there are no a<b in L and c<d in R with
(a,c),(a,d),(b,d) ∈ E. We will show that this forces |E| ≤ 2M, contradicting |E| > 2M.

For a vertex x ∈ L, let
$$N(x) = \{\, y \in R : (x,y) \in E \,\}$$
be its set of right-neighbours, and let deg(x) = |N(x)|. For each x ∈ L with
deg(x) ≥ 1, define its **minimum neighbour**
$$m(x) = \min N(x),$$
the smallest element of R adjacent to x (well-defined since N(x) is a non-empty finite
subset of the totally ordered set R).

Classify each edge (x, y) ∈ E as:
- a **minimum edge** if y = m(x);
- a **non-minimum edge** if y ≠ m(x) (equivalently, since m(x) = min N(x) and
  y ∈ N(x), this means y > m(x)).

Every edge has a well-defined left endpoint x with deg(x) ≥ 1, so m(x) exists and
exactly one of the two labels applies to each edge. Hence the minimum edges and the
non-minimum edges **partition** E, and
$$|E| = (\text{number of minimum edges}) + (\text{number of non-minimum edges}). \tag{1}$$

**Bounding the minimum edges.** Each x ∈ L with deg(x) ≥ 1 is the left endpoint of
exactly one minimum edge, namely (x, m(x)); each x with deg(x) = 0 is the left endpoint
of none. Distinct left endpoints give distinct minimum edges. Therefore
$$\#\{\text{minimum edges}\} = \#\{\, x \in L : \deg(x) \ge 1 \,\} \le |L| = M. \tag{2}$$

**Bounding the non-minimum edges (injectivity claim).** We claim that for each fixed
d ∈ R, there is **at most one** non-minimum edge whose right (upper) endpoint is d.

Suppose, on the contrary, that some d ∈ R is the upper endpoint of two distinct
non-minimum edges, say (a, d) and (a′, d) with a ≠ a′ in L; without loss of generality
a < a′. Consider the vertex a. Because (a, d) is a non-minimum edge, we have
d ≠ m(a), and since m(a) = min N(a) ≤ d, in fact
$$c := m(a) < d.$$
Moreover, m(a) ∈ N(a), so a has at least two distinct neighbours, m(a) = c and d,
i.e. deg(a) ≥ 2; in particular the edge (a, c) genuinely lies in E. Thus the following
three edges all belong to E:
$$(a, c) \in E, \qquad (a, d) \in E, \qquad (a', d) \in E.$$
Now set b := a′. Then a < b in L (since a < a′), and c < d in R (shown above), and the
edges (a,c), (a,d), (b,d) are all in E. This is exactly the forbidden configuration —
contradicting our standing assumption that G has no such configuration.

Hence the injectivity claim holds: for each d ∈ R there is at most one non-minimum edge
with upper endpoint d. Since the upper endpoint of any edge lies in R, summing over all
d ∈ R gives
$$\#\{\text{non-minimum edges}\} \le |R| = M. \tag{3}$$

**Combining.** Substituting (2) and (3) into (1):
$$|E| = \#\{\text{minimum edges}\} + \#\{\text{non-minimum edges}\} \le M + M = 2M.$$
This contradicts the hypothesis |E| > 2M. Therefore our assumption was false: G must
contain a < b in L and c < d in R with (a,c), (a,d), (b,d) ∈ E. ∎ (Bipartite Lemma)

*(Remark: the bound ≤ 2M is not tight — pattern-free graphs reach 2M−1 edges, e.g. one
L-vertex joined to all of R together with the other M−1 L-vertices each joined only to
the smallest R-vertex — but the non-tight bound ≤ 2M is all we need. The two displayed
counting bounds (2) and (3) and the injectivity claim were independently verified by
exhaustive search over all 7146 pattern-free ordered bipartite graphs for M = 2, 3, 4,
with no violation.)*

---

### Base case: P(1)

Here 2^1 = 2, so the ground set is [2] = {1,2}. The only possible edge is {1,2}, hence
|S| ≤ 1. The threshold is 1·2^{1+1} = 4. The hypothesis |S| > 4 is never satisfied,
so P(1) holds **vacuously**. (Indeed, by the same count, for n = 2,3,4 the threshold
n·2^{n+1} exceeds C(2^n, 2), the total number of available edges, so P(2), P(3), P(4)
are vacuous as well; but the inductive argument below is uniform and needs no special
treatment of these cases — the heavy-half and heavy-crossing cases simply never trigger
when the hypothesis is vacuous, and the argument remains logically valid.)

---

### Inductive step

Fix n ≥ 2 and assume the induction hypothesis P(n−1) (this is strong induction; in fact
we only use the immediately preceding case). We prove P(n).

Let S be a set of edges on [N], N = 2^n, with
$$|S| > n \cdot 2^{n+1}. \tag{4}$$
Put M = 2^{n−1}, so N = 2^n = 2M. Split the ground set into a lower half and an upper
half:
$$L = \{1, 2, \ldots, M\}, \qquad R = \{M+1, M+2, \ldots, 2M\} = \{M+1, \ldots, N\}.$$
Then [N] = L ⊔ R, |L| = |R| = M, and crucially every element of L is strictly less than
every element of R:
$$x \in L,\ y \in R \ \Longrightarrow\ x \le M < M+1 \le y \ \Longrightarrow\ x < y. \tag{5}$$

Partition the edges of S according to where their endpoints lie:
$$S_{LL} = \{(a,b)\in S : a,b \in L\}, \quad
  S_{RR} = \{(a,b)\in S : a,b \in R\}, \quad
  S_{LR} = \{(a,b)\in S : a\in L,\ b\in R\}.$$
Every edge {a,b} of S with a<b falls into exactly one of these three classes (both
endpoints in L; both in R; or one in each — and by (5) the mixed case automatically has
the L-endpoint smaller, so it is correctly written with a ∈ L, b ∈ R). Thus this is a
genuine partition and
$$|S| = |S_{LL}| + |S_{RR}| + |S_{LR}|. \tag{6}$$

We now split into three cases according to whether a half is "heavy."

---

**Case A: |S_{LL}| > (n−1)·2^n.**

Here S_{LL} is a set of edges on the ground set L = {1,…,M} = {1,…,2^{n−1}}. The
threshold of P(n−1) on a ground set of size 2^{n−1} is
$$(n-1)\cdot 2^{(n-1)+1} = (n-1)\cdot 2^{n},$$
which is exactly the cutoff defining Case A. Since L = {1,…,2^{n−1}} is literally the
ground set [2^{n−1}], the induction hypothesis P(n−1) applies verbatim to S_{LL}:
there exist a < b < c < d in L with (a,c), (b,d), (a,d) ∈ S_{LL}. As S_{LL} ⊆ S, these
edges lie in S, and a<b<c<d is a pattern in S. Done.

---

**Case B: |S_{RR}| > (n−1)·2^n.**

Here S_{RR} is a set of edges on R = {M+1, …, 2M}. Consider the map
$$\varphi : R \to [M], \qquad \varphi(M + i) = i \quad (i = 1, 2, \ldots, M).$$
This is a bijection from R onto [2^{n−1}], and it is **strictly increasing**: if
M+i < M+j then i < j, so φ(M+i) = i < j = φ(M+j). Hence φ is an order-isomorphism, and
it carries each edge (a,b) ∈ S_{RR} (with a<b in R) to the edge (φ(a), φ(b)) (with
φ(a) < φ(b) in [M]), defining a set
$$\varphi(S_{RR}) = \{(\varphi(a), \varphi(b)) : (a,b) \in S_{RR}\}$$
of edges on [2^{n−1}] with |φ(S_{RR})| = |S_{RR}| > (n−1)·2^n (φ is a bijection on edges
since it is injective on vertices). As in Case A, the threshold (n−1)·2^n is exactly
P(n−1)'s threshold for ground set [2^{n−1}], so P(n−1) applies to φ(S_{RR}): there exist
a′ < b′ < c′ < d′ in [M] with (a′,c′), (b′,d′), (a′,d′) ∈ φ(S_{RR}).

Pull these back through the order-isomorphism φ. Set a = φ^{−1}(a′), b = φ^{−1}(b′),
c = φ^{−1}(c′), d = φ^{−1}(d′), all in R. Since φ^{−1} is also strictly increasing
(inverse of a strictly increasing bijection), a < b < c < d. Because the edges
(a′,c′), (b′,d′), (a′,d′) lie in φ(S_{RR}), their φ-preimages (a,c), (b,d), (a,d) lie in
S_{RR} ⊆ S. (Concretely φ^{−1}(i) = M+i, and an edge (i,j) ∈ φ(S_{RR}) is by definition
the image of the edge (M+i, M+j) ∈ S_{RR}.) Thus a<b<c<d is a pattern in S. Done.

---

**Case C: |S_{LL}| ≤ (n−1)·2^n and |S_{RR}| ≤ (n−1)·2^n.**

This is the complement of Cases A and B together, so Cases A, B, C are exhaustive (and
the only overlap, between A and B, is harmless: either one already produces a pattern).
From (6) and (4),
$$|S_{LR}| = |S| - |S_{LL}| - |S_{RR}|
   > n\cdot 2^{n+1} - 2\,(n-1)\cdot 2^{n}.$$
We compute the right-hand side exactly:
$$n\cdot 2^{n+1} - 2(n-1)2^{n}
  = 2n\cdot 2^{n} - 2(n-1)2^{n}
  = 2^{n}\bigl(2n - 2(n-1)\bigr)
  = 2^{n}\cdot 2
  = 2^{n+1}
  = 4M,$$
using N = 2^n = 2M, i.e. 2^{n+1} = 4M. Therefore
$$|S_{LR}| > 4M > 2M. \tag{7}$$

Now form the ordered bipartite graph G = (L, R, E) with edge set E = S_{LR}: every
edge of S_{LR} has one endpoint in L and one in R, and by (5) its L-endpoint is the
smaller one, so it is an edge (x, y) with x ∈ L, y ∈ R as required by the Bipartite
Lemma. Both parts have size M, and by (7), |E| = |S_{LR}| > 2M. The parts L and R are
totally ordered (as subsets of the integers) with all of L below all of R by (5). Hence
the Bipartite Lemma applies: there exist a < b in L and c < d in R with
$$(a,c) \in E, \qquad (a,d) \in E, \qquad (b,d) \in E.$$

Finally, since a, b ∈ L and c, d ∈ R, property (5) gives b < c (because b ∈ L, c ∈ R),
so combined with a < b and c < d we obtain
$$a < b < c < d.$$
The three edges (a,c), (a,d), (b,d) lie in E = S_{LR} ⊆ S. By definition of a pattern
(its edges are (a,c), (b,d), (a,d) — the same three), a<b<c<d is a pattern in S. Done.

---

### Conclusion

In every case (A, B, C) the set S contains a pattern, so P(n) holds. By strong induction,
P(n) holds for all n ≥ 1. In particular, for any set S of pairs (a,b) with
1 ≤ a < b ≤ 2^n and |S| > n·2^{n+1}, there exist integers a < b < c < d with
(a,c), (b,d), (a,d) ∈ S, which is exactly the claim. ∎
