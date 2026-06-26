## Status
solved

## Approaches tried
- Diagonal coordinate change (d1 = r−c, d2 = r+c) turning the taxicab (L1) metric into the L∞ metric, reformulating both conditions as diagonal-index conditions, partitioning the diagonal indices into n groups each, proving "no forbidden pair is split" (a split forces distance exactly n), and finishing with Cauchy–Schwarz — **worked**; complete rigorous proof below.

## Current best
Complete proof. The key reduction: in coordinates d1 = r−c, d2 = r+c the taxicab distance equals max(|Δd1|, |Δd2|); the d1-values split into n groups Gₖ (each a "forbidden pair" of indices differing by n), likewise the d2-values into n groups Fₚ; each (Gᵢ,Fⱼ) slot holds exactly one cell; no group is split between red and blue (a split forces distance = n, the forbidden value); hence with α,β,γ,δ the numbers of groups met, α+β ≤ n, γ+δ ≤ n, R ≤ αγ, B ≤ βδ, and Cauchy–Schwarz gives √R+√B ≤ √((α+β)(γ+δ)) ≤ n.

## Full proof

Throughout, n is a fixed **odd** positive integer. Label the cells of the n×n grid by
coordinates (r, c) with r, c ∈ {0, 1, …, n−1}, where r is the row and c the column.

### Setup: the metric and the two conditions

For a cell (r, c) the **distance** to a cell (r′, c′) is, by definition,
$$\operatorname{dist}\big((r,c),(r',c')\big) = |r-r'| + |c-c'|$$
(the minimum number of unit side-steps; this is the taxicab / L¹ distance).

We restate the two hypotheses precisely. Place the grid so that cell (r, c) has centre at
the point (c, −r) of the plane (column = x-coordinate, row reflected to a y-coordinate;
the reflection is harmless and only fixes orientation). The two diagonals of the grid have
slopes +1 and −1.

- The line through the centres of (r, c) and (r′, c′) is **parallel to the slope −1
  diagonal** iff the displacement vector (c−c′, −(r−r′)) has slope −1, i.e.
  −(r−r′) = −(c−c′), i.e. r−c = r′−c′.
- It is **parallel to the slope +1 diagonal** iff −(r−r′) = (c−c′), i.e. r+c = r′+c′.

(The two cells must be distinct red/blue cells; if r−c = r′−c′ and r+c = r′+c′
simultaneously then the cells coincide, so for a red/blue pair at most one of the two
equalities can hold, but we never need this.)

Define the **diagonal coordinates**
$$d_1 = r - c, \qquad d_2 = r + c.$$
Then d₁ ∈ {−(n−1), …, n−1} and d₂ ∈ {0, 1, …, 2n−2}. The two conditions are:

- **(C1)** No red cell and blue cell share a value of d₁, and none share a value of d₂.
  (From the two bullet points above: a red/blue line parallel to a diagonal exists iff
  some red and blue cell agree in d₁ or agree in d₂.)
- **(C2)** For no red cell and blue cell is the taxicab distance equal to n.

Let
$$A = \{\,d_1\text{-values of red cells}\,\},\quad B = \{\,d_1\text{-values of blue cells}\,\},$$
$$P = \{\,d_2\text{-values of red cells}\,\},\quad Q = \{\,d_2\text{-values of blue cells}\,\}.$$
Then (C1) says exactly
$$A \cap B = \varnothing \quad\text{and}\quad P \cap Q = \varnothing. \tag{C1$'$}$$

### Lemma 0 (taxicab distance = L∞ distance in diagonal coordinates)

For any two cells P = (r, c), Q = (r′, c′), writing Δd₁ = d₁(P)−d₁(Q) and
Δd₂ = d₂(P)−d₂(Q),
$$\operatorname{dist}(P,Q) = \max\big(|\Delta d_1|,\ |\Delta d_2|\big).$$

**Proof.** Put u = r−r′, v = c−c′. Then Δd₁ = u−v and Δd₂ = u+v, while
dist(P,Q) = |u|+|v|. We must show |u|+|v| = max(|u−v|, |u+v|). Both sides are
nonnegative, so it suffices to compare their squares. We have
$$\max(|u-v|,|u+v|)^2 = \max\big((u-v)^2,(u+v)^2\big) = u^2 + v^2 + \max(-2uv, 2uv) = u^2+v^2+2|uv|,$$
and
$$(|u|+|v|)^2 = u^2 + v^2 + 2|u|\,|v| = u^2+v^2+2|uv|.$$
The two squares are equal, and both bases are ≥ 0, so the bases are equal. ∎

Consequently, by Lemma 0, condition **(C2)** is equivalent to: for every red cell P and
blue cell Q,
$$\max\big(|d_1(P)-d_1(Q)|,\ |d_2(P)-d_2(Q)|\big) \neq n. \tag{C2$'$}$$

### The parity fact

For every cell, d₁ + d₂ = (r−c)+(r+c) = 2r is even, so **d₁ and d₂ always have the same
parity**. Conversely, given integers (d₁, d₂) of the same parity, the equations
r = (d₁+d₂)/2, c = (d₂−d₁)/2 produce integers, and they describe a grid cell iff
r, c ∈ {0, …, n−1}. Thus the map (r,c) ↦ (d₁, d₂) is a bijection from the n² grid cells
onto
$$\Big\{(d_1,d_2): d_1 \equiv d_2 \ (\mathrm{mod}\ 2),\ \tfrac{d_1+d_2}{2}\in[0,n-1],\ \tfrac{d_2-d_1}{2}\in[0,n-1]\Big\}. \tag{$\ast$}$$

### The two group partitions

**d₁-groups.** Partition the 2n−1 possible d₁-values into n groups:
$$G_0 = \{0\}, \qquad G_k = \{k,\ k-n\}\quad (k = 1, \dots, n-1).$$
These are pairwise disjoint and their union is {−(n−1), …, n−1}: indeed the values k for
k=1,…,n−1 are the positive ones, the values k−n for k=1,…,n−1 are −(n−1),…,−1, and 0 is
G₀; each of the 2n−1 values appears exactly once. So this is a genuine partition into n
parts. For k ≥ 1 the two elements of Gₖ differ by k−(k−n) = n.

**d₂-groups.** Partition the 2n−1 possible d₂-values into n groups:
$$F_0 = \{n-1\}, \qquad F_p = \{p,\ p+n\}\quad (p = 0, \dots, n-2).$$
The values p for p=0,…,n−2 are 0,…,n−2; the values p+n for p=0,…,n−2 are n,…,2n−2; and
n−1 is F₀. Each of the 2n−1 values 0,…,2n−2 appears exactly once, so this too is a
partition into n parts. For p ≤ n−2 the two elements of Fₚ differ by (p+n)−p = n.

**Where n odd enters (i).** Since n is odd, the two elements of each non-singleton group
Gₖ = {k, k−n} differ by the odd number n, hence have **opposite parity**; likewise the two
elements of Fₚ = {p, p+n} have opposite parity. This is used in Lemma 1 below.

### Lemma 1 (each slot holds exactly one cell)

For each i, j ∈ {0, 1, …, n−1}, the number of grid cells whose d₁ ∈ Gᵢ and whose
d₂ ∈ Fⱼ is **exactly one**.

**Proof.** *Step 1: at most one cell per slot.* Fix a group Gᵢ and a group Fⱼ. A grid
cell has (d₁, d₂) ∈ Gᵢ × Fⱼ iff (d₁, d₂) lies in the set (∗), i.e. iff d₁ ≡ d₂ (mod 2)
and the resulting r, c lie in [0, n−1]. We count the candidate pairs (d₁, d₂) ∈ Gᵢ × Fⱼ
of equal parity.

Consider first the generic case i, j ≥ 1, so Gᵢ = {k, k−n} and Fⱼ = {p, p+n} with
k = i, p = j−1 (the four combinations). By the parity fact, the two elements of Gᵢ have
opposite parity, and the two elements of Fⱼ have opposite parity. Among the four pairs in
Gᵢ × Fⱼ, exactly those with d₁ ≡ d₂ (mod 2) are admissible; since each set has one
element of each parity, **exactly two** of the four pairs have matching parity (the
even-d₁/even-d₂ pair and the odd-d₁/odd-d₂ pair). So at most two pairs can give a cell,
and we must show the in-range constraint kills at least one of them.

Write the two parity-matching pairs as (a, a′) and (b, b′) where {a, b} = Gᵢ
(so b = a ± n) and {a′, b′} = Fⱼ (so b′ = a′ ± n), with a ≡ a′ and b ≡ b′ (mod 2). For
the pair (a, a′) the cell would be r = (a+a′)/2, c = (a′−a)/2; for (b, b′) it would be
r = (b+b′)/2, c = (b′−b)/2. Because the two elements of Gᵢ differ by n in absolute value
and likewise for Fⱼ, the two candidate cells differ in their (r, c) by
$$\big(r,c\big)_{(b,b')} - \big(r,c\big)_{(a,a')} = \Big(\tfrac{(b-a)+(b'-a')}{2},\ \tfrac{(b'-a')-(b-a)}{2}\Big),$$
where b−a = ±n and b′−a′ = ±n. If b−a and b′−a′ have the **same sign** (both +n or both
−n), this difference is (±n, 0); if they have **opposite signs**, it is (0, ±n). In either
case the two candidate cells differ by n in exactly one of the coordinates r, c, while the
other coordinate is equal.

Now r and c each range over {0, …, n−1}, an interval of length n−1. Two values of r (or
of c) that differ by exactly n cannot both lie in {0, …, n−1}. Hence at least one of the
two candidate cells has a coordinate outside {0, …, n−1} and is not a grid cell. Therefore
**at most one** of the two parity-matching pairs yields a grid cell, so the slot (Gᵢ, Fⱼ)
contains at most one cell.

The boundary cases are handled the same way, with fewer candidates. If i = 0 (so
G₀ = {0}, one element) and j ≥ 1 (Fⱼ = {p, p+n}): the two candidate pairs are (0, p) and
(0, p+n); they have opposite parity in d₂ (since p, p+n differ by odd n) but the same d₁
= 0 (even), so **exactly one** of them is parity-matching — at most one candidate, hence at
most one cell. Symmetrically for i ≥ 1, j = 0 (F₀ = {n−1}). For i = j = 0 there is a single
pair (0, n−1); n−1 is even (n odd), 0 is even, parity matches, so at most one cell. In all
cases the slot contains at most one cell.

*Step 2: counting forces exactly one.* The map
$$\Phi : \text{(grid cell)} \longmapsto (\text{index } i \text{ with } d_1 \in G_i,\ \text{index } j \text{ with } d_2 \in F_j)$$
is well-defined (the G's and F's are partitions, so every cell lands in a unique
(i, j) ∈ {0,…,n−1}²) and its target has exactly n² slots. There are exactly n² grid cells.
By Step 1 every slot receives at most one cell, i.e. Φ is injective. An injective map from
a set of size n² into a set of size n² is a bijection, so every slot receives **exactly
one** cell. ∎

**Where n odd enters (ii).** Step 1 used that consecutive group elements differ by the odd
number n in two ways: to reduce four candidate pairs to two by parity, and to conclude the
two surviving candidates differ by exactly n in a single coordinate so that the in-range
constraint eliminates one. Both fail for even n.

### Key Lemma D1 (a split d₁-pair forces distance n)

Let k ∈ {1, …, n−1}. Suppose some red cell has d₁ = k and some blue cell has d₁ = k−n (or
the reverse). Then those two cells are at distance exactly n, violating (C2′).

**Proof.** Take the red cell P with d₁(P) = k and the blue cell Q with d₁(Q) = k−n. Then
$$|\,d_1(P) - d_1(Q)\,| = |\,k - (k-n)\,| = n.$$
We bound |d₂(P) − d₂(Q)|. A cell with d₁ = k has r − c = k, so (since c ≥ 0) r ≥ k, and
(since c = r − k ≤ n−1) r ≤ n−1; thus r ∈ {k, …, n−1}, and its d₂ = r + c = 2r − k ranges
over
$$d_2 \in \{\,2r - k : r = k,\dots,n-1\,\} \subseteq [\,k,\ 2n-2-k\,].$$
A cell with d₁ = k−n has r − c = k − n, so (since r ≥ 0) c ≥ n−k, and (since
r = c + (k−n) ≤ n−1, i.e. c ≤ 2n−1−k, automatically) we get r = c + k − n ∈ {0,…,k−1};
thus its d₂ = 2r − (k−n) = 2r + n − k ranges over
$$d_2 \in \{\,2r + n - k : r = 0,\dots,k-1\,\} \subseteq [\,n-k,\ n-2+k\,].$$
Therefore d₂(P) ∈ [k, 2n−2−k] and d₂(Q) ∈ [n−k, n−2+k]. The maximum possible value of
|d₂(P) − d₂(Q)| over these two intervals is the larger of the two end-to-end gaps:
$$\max\big(|d_2(P)-d_2(Q)|\big) = \max\Big((2n-2-k) - (n-k),\ (n-2+k) - k\Big) = \max(n-2,\ n-2) = n-2.$$
Hence |d₂(P) − d₂(Q)| ≤ n − 2 < n. By Lemma 0,
$$\operatorname{dist}(P,Q) = \max\big(|d_1(P)-d_1(Q)|,\ |d_2(P)-d_2(Q)|\big) = \max(n,\ \le n-2) = n,$$
the **forbidden** value. This contradicts (C2′). ∎

### Key Lemma D2 (a split d₂-pair forces distance n)

Let p ∈ {0, …, n−2}. Suppose some red cell has d₂ = p and some blue cell has d₂ = p+n (or
the reverse). Then those two cells are at distance exactly n, violating (C2′).

**Proof.** Take the red cell P with d₂(P) = p and the blue cell Q with d₂(Q) = p+n. Then
$$|\,d_2(P) - d_2(Q)\,| = n.$$
A cell with d₂ = p has r + c = p with r, c ≥ 0, so r ∈ {0, …, p}, and its d₁ = r − c
= 2r − p ranges over
$$d_1 \in \{\,2r - p : r = 0,\dots,p\,\} \subseteq [\,-p,\ p\,].$$
A cell with d₂ = p+n has r + c = p+n with r, c ≤ n−1, so r ∈ {p+1, …, n−1}, and its
d₁ = 2r − (p+n) ranges over
$$d_1 \in \{\,2r - (p+n) : r = p+1,\dots,n-1\,\} \subseteq [\,p+2-n,\ n-2-p\,].$$
The maximum of |d₁(P) − d₁(Q)| over d₁(P) ∈ [−p, p] and d₁(Q) ∈ [p+2−n, n−2−p] is
$$\max\Big(\,p - (p+2-n),\ (n-2-p) - (-p)\,\Big) = \max(n-2,\ n-2) = n - 2 < n.$$
By Lemma 0,
$$\operatorname{dist}(P,Q) = \max\big(|d_1(P)-d_1(Q)|,\ |d_2(P)-d_2(Q)|\big) = \max(\le n-2,\ n) = n,$$
again the forbidden value, contradicting (C2′). ∎

### No group is split

Recall A, B, P, Q from the setup, with A ∩ B = ∅ and P ∩ Q = ∅ (C1′).

**Claim D1.** No d₁-group Gᵢ meets both A and B.

*Proof.* The singleton group G₀ = {0} contains a single value, which lies in at most one
of the disjoint sets A, B; so G₀ does not meet both. For i ≥ 1, Gᵢ = {k, k−n} with k = i.
If Gᵢ met both A and B, then since A ∩ B = ∅, the two distinct values k and k−n must be
split: one of them is in A (used by a red cell) and the other in B (used by a blue cell).
That is exactly the hypothesis of Key Lemma D1 (in one of its two orientations), which
contradicts (C2′). Hence Gᵢ meets at most one of A, B. ∎

**Claim D2.** No d₂-group Fⱼ meets both P and Q.

*Proof.* Identical, using Key Lemma D2: the singleton F₀ = {n−1} meets at most one color;
for j ≥ 1, Fⱼ = {p, p+n} meeting both P and Q (which are disjoint) would split p and p+n
between red and blue, contradicting (C2′). ∎

### The group counts

Define
$$\alpha = \#\{\,i : G_i \cap A \neq \varnothing\,\},\qquad \beta = \#\{\,i : G_i \cap B \neq \varnothing\,\},$$
$$\gamma = \#\{\,j : F_j \cap P \neq \varnothing\,\},\qquad \delta = \#\{\,j : F_j \cap Q \neq \varnothing\,\}.$$

**α + β ≤ n.** For each i ∈ {0, …, n−1} let aᵢ = 1 if Gᵢ ∩ A ≠ ∅ (else 0) and bᵢ = 1 if
Gᵢ ∩ B ≠ ∅ (else 0). By Claim D1, Gᵢ never meets both A and B, so aᵢ + bᵢ ≤ 1 for every
i. Summing over the n indices,
$$\alpha + \beta = \sum_{i=0}^{n-1}(a_i + b_i) \le \sum_{i=0}^{n-1} 1 = n.$$

**γ + δ ≤ n.** Identically, using Claim D2, γ + δ = Σⱼ(cⱼ + dⱼ) ≤ n where cⱼ, dⱼ ∈ {0,1}
indicate Fⱼ meeting P, Q.

### Product bounds

**R ≤ αγ.** Consider the map sending each red cell to the slot (i, j) it occupies, where
Gᵢ ∋ d₁(red cell) and Fⱼ ∋ d₂(red cell). For a red cell, d₁ ∈ A so Gᵢ ∩ A ≠ ∅ (Gᵢ is one
of the α groups counted by α), and d₂ ∈ P so Fⱼ ∩ P ≠ ∅ (Fⱼ is one of the γ groups
counted by γ). Thus every red cell occupies a slot (i, j) with i in the set of α
"A-meeting" indices and j in the set of γ "P-meeting" indices. By Lemma 1 each slot
contains exactly one cell, so distinct red cells occupy distinct slots; this is an
injection from the red cells into a set of α · γ slots. Hence
$$R \le \alpha\,\gamma.$$

**B ≤ βδ.** By the identical argument with blue cells, B-meeting d₁-groups (β of them),
and Q-meeting d₂-groups (δ of them),
$$B \le \beta\,\delta.$$

### Cauchy–Schwarz finish

We use the **Cauchy–Schwarz inequality** (Knowledge base: *Standard inequalities*) in the
form: for nonnegative reals x₁, x₂, y₁, y₂,
$$\big(\sqrt{x_1 y_1} + \sqrt{x_2 y_2}\big)^2 \le (x_1 + x_2)(y_1 + y_2).$$
(Indeed, with vectors u = (√x₁, √x₂), w = (√y₁, √y₂), the left side is ⟨u, w⟩² and the
right side is |u|²|w|²; Cauchy–Schwarz gives ⟨u, w⟩² ≤ |u|²|w|². Equivalently, expanding,
the difference equals (√(x₁y₂) − √(x₂y₁))² ≥ 0.)

Apply this with x₁ = α, x₂ = β, y₁ = γ, y₂ = δ (all nonnegative). Then
$$\big(\sqrt{\alpha\gamma} + \sqrt{\beta\delta}\big)^2 \le (\alpha + \beta)(\gamma + \delta) \le n \cdot n = n^2,$$
using α + β ≤ n and γ + δ ≤ n from above. Taking square roots (both sides nonnegative),
$$\sqrt{\alpha\gamma} + \sqrt{\beta\delta} \le n.$$
Finally, since R ≤ αγ and B ≤ βδ and the square root is increasing on [0, ∞),
$$\sqrt{R} + \sqrt{B} \le \sqrt{\alpha\gamma} + \sqrt{\beta\delta} \le n.$$

This is the desired inequality. ∎

### Remarks (consistency, edge cases, and tightness)

- **Acyclicity of the argument.** The dependency order is: Lemma 0 (pure algebra) →
  reformulations (C1′), (C2′) → the two partitions and the parity fact → Lemma 1 (uses
  only the partitions, parity, and the in-range constraint; independent of the coloring) →
  Key Lemmas D1, D2 (use Lemma 0 and the range computations only) → Claims D1, D2 (use the
  Key Lemmas and C1′) → α+β ≤ n, γ+δ ≤ n → R ≤ αγ, B ≤ βδ (use Lemma 1) → Cauchy–Schwarz.
  No step depends on a later one, so the chain is acyclic.

- **Degenerate colorings.** If B = 0 (no blue cells), then β = δ = 0 and the chain reads
  √R + 0 ≤ √(αγ) ≤ √(n·n) = n; equivalently R ≤ αγ ≤ n² gives √R ≤ n directly. The case
  R = 0 is symmetric. Empty groups (groups meeting neither A nor B, or neither P nor Q)
  simply do not contribute to α, β, γ, δ, so α + β ≤ n and γ + δ ≤ n remain valid
  inequalities (not necessarily equalities).

- **Tightness.** The bound is attained for every odd n: color **all** n² cells red and
  none blue. Both conditions hold vacuously (there is no red/blue pair), and
  √R + √B = √(n²) + 0 = n. For n = 3 there is also a "mixed" extremal configuration with
  (R, B) = (4, 1) giving √4 + √1 = 3 = n; an exhaustive search over all valid 3×3
  colorings confirms 3 is the maximum value of √R + √B. Thus the inequality √R + √B ≤ n is
  sharp.
