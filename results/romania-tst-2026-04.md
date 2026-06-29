## Status
solved

## Approaches tried

- **Direct synthetic geometry** — not applicable; touching condition is not a standard synthetic configuration.
- **LP + Caratheodory alone** — dead-end: Caratheodory gives a 3-element sub-basis {i,j,k} at the LP optimum, but the optimum can have more than 3 tight constraints (degenerate vertex), so "exactly 3" does not follow without a further argument.
- **Perturbation of c** — dead-end: a generic perturbation of the RHS makes the LP non-degenerate, but the limit as ε→0 can produce 4+ tight constraints, losing the guarantee.
- **Induction removing one hyperplane** — dead-end: removing index n can destroy the 4-EXT condition for triples where n was the only witness.
- **Growing the tight set S** — dead-end: starting from T(p*) and trying to add elements; witnesses for pairs in S are always outside S, so growth stalls.
- **Linear reformulation + Helly + LP + KEY LEMMA via L₁₂-clustering** — partially correct; the linearization is right, but the clustering Step 2 has an unclosed gap for n ≥ 8 (third-cluster witness). Superseded.
- **Linearization + projective dualization + Sylvester–Gallai (round 11)** — WORKED. The touching condition linearizes to a plane system in ℝ³; the three hypotheses dualize to "n points in P³, no three collinear, not all coplanar"; the goal becomes "produce a plane through exactly three points," which is the 3D Sylvester–Gallai theorem, proved from 2D SG (Kelly) by projection. Closes all n in one stroke. **Full proof below.**
- **Sign correction of L1 (round 11, post-review)** — The round-11 review found one load-bearing defect: L1 was written with the wrong sign, n_i·O + r = c_i / v_i = (n_i, +1), which describes the FORBIDDEN internal tangency (disk contained in H_i). The correct touching equation is n_i·O − r = c_i, i.e. v_i = (n_i, −1), w_i = (n_i, −1, −c_i). Re-derived from scratch and re-verified numerically (2·10⁵ far-side tangent circles all satisfy n·O − r = c, all violate n·O + r = c; and the full p ∈ P_i ⟺ touches dictionary has 0 mismatches over 2·10⁴ random circles with v_i = (n_i, −1)). The L2 incidence identity (2) was re-verified symbolically with the corrected signs (difference simplifies to 0). All downstream steps (L2–L7, 2D/3D SG, n=3 base, r>0 via condition (2)) are sign-invariant and unchanged. Defect closed; proof is now a genuine full solve.

## Current best

Complete proof established (see **Full proof**). The engine is the **Sylvester–Gallai theorem**: after linearizing "circle touches half-plane H_i" into the plane equation v_i·p = c_i in circle-space ℝ³ and dualizing to projective points [w_i] ∈ P³ (w_i = (n_i, −1, −c_i)), the three hypotheses become exactly: no three [w_i] collinear, not all [w_i] coplanar. The 3D Sylvester–Gallai theorem (derived from Kelly's 2D proof by projection) then produces a plane through exactly three of the [w_i] — a "depth-3 plane" — which translates back to a circle touching exactly three half-planes; positivity of its radius comes from condition 2 applied to that very triple. A knowledge-base entry for the 2D and higher-dimensional Sylvester–Gallai theorems was added.

## Full proof

Throughout, "circle" means a circle of strictly positive radius. Write the plane of the problem as ℝ². For a half-plane H with boundary line ℓ and outward unit normal n (the unit vector pointing **out of** H), we have
$$H=\{x\in\mathbb R^2: n\cdot x\le c\},\qquad \ell=\{x: n\cdot x=c\},$$
where c is the signed offset. (Every half-plane has such a representation, and the unit normal pointing out of H is uniquely determined by H.) For each H_i ∈ 𝓗 (i = 1, …, n, n ≥ 1) we fix this data: outward unit normal n_i ∈ S¹ and offset c_i, so H_i = {x : n_i·x ≤ c_i} and ∂H_i = {x : n_i·x = c_i}.

### Step 0. Restatement of the three hypotheses

(1) **General position.** No two of the lines ∂H_i are parallel, and no three are concurrent. In particular the outward unit normals n_i are pairwise distinct directions on S¹ (if n_i = ±n_j for i ≠ j the lines ∂H_i, ∂H_j would be parallel). We record the only consequence we need:

> **(GP)** For any three indices i, j, k the unit normals n_i, n_j, n_k are pairwise distinct points of S¹.

(2) For any three half-planes in 𝓗 there is a circle touching all three.

(3) No circle touches all half-planes in 𝓗.

### Step 1 (L1). Touching is a linear equation in circle-space ℝ³

**Claim.** A circle with center O ∈ ℝ² and radius r > 0 touches H_i **if and only if**
$$n_i\cdot O-r=c_i. \tag{$\ast$}$$

*Proof.* "Touches H_i" means, by definition: the circle is tangent to the boundary line ∂H_i, and H_i does not contain the circle.

The circle (center O, radius r) is tangent to the line ∂H_i = {x : n_i·x = c_i} iff the (Euclidean) distance from O to that line equals r. Since n_i is a unit vector, the signed distance from O to ∂H_i is c_i − n_i·O (positive when O lies strictly inside H_i, i.e. on the side n_i·x < c_i), and the Euclidean distance is |c_i − n_i·O|. Hence tangency is equivalent to
$$|c_i-n_i\cdot O|=r. \tag{1}$$
This leaves two sign possibilities: c_i − n_i·O = +r or c_i − n_i·O = −r. We now use the second tangency requirement to pin the sign.

"H_i does not contain the circle." A closed disk of center O, radius r is contained in the closed half-plane H_i = {n_i·x ≤ c_i} iff its farthest point in the +n_i direction still satisfies the inequality, i.e. iff n_i·O + r ≤ c_i, i.e. iff c_i − n_i·O ≥ r. Under (1) this would force c_i − n_i·O = +r, and then the whole disk (hence the circle) lies in H_i — exactly the excluded case. Therefore "H_i does not contain the circle" together with tangency (1) forces the other sign:
$$c_i-n_i\cdot O=-r,\quad\text{equivalently}\quad n_i\cdot O-r=c_i,$$
which is ($\ast$). (Indeed, solving c_i − n_i·O = −r for c_i gives c_i = n_i·O − r, i.e. n_i·O − r = c_i.) Conversely, if ($\ast$) holds then c_i − n_i·O = −r, so |c_i − n_i·O| = |−r| = r and the circle is tangent to ∂H_i; and c_i − n_i·O = −r < 0 means O lies strictly on the far side n_i·O > c_i, so the center is outside H_i and the disk is not contained in H_i. Thus the circle touches H_i. This proves the claim. ∎

(Internal tangency — the disk lying inside H_i and tangent to its edge — corresponds to the discarded sign c_i − n_i·O = +r and is correctly excluded by the single equation ($\ast$). The orientation of c_i, fixed once via "the disk is not contained in H_i," pins the **same** sign for every i; this is the only point where the geometry enters.)

Numerical confirmation of the sign: over 2·10⁵ random tangent circles placed on the far side of a random line (disk not contained in H_i, so n_i·O > c_i), the equation n_i·O − r − c_i = 0 held to machine precision in every case, while n_i·O + r − c_i = 0 was violated in every case (round-11 check). This confirms ($\ast$) in the form n_i·O − r = c_i for the valid (external) touching circles, and rules out the n_i·O + r = c_i sign, which would correspond to the excluded internal-tangency case.

**Circle-space coordinates.** Put
$$v_i=(n_i,-1)\in\mathbb R^3,\qquad p=(O,r)\in\mathbb R^3.$$
Then ($\ast$), namely n_i·O − r = c_i, reads v_i·p = c_i (the dot product n_i·O + (−1)·r equals n_i·O − r). Define the plane
$$P_i=\{p\in\mathbb R^3: v_i\cdot p=c_i\}.$$
So: **a point p = (O, r) ∈ ℝ³ with r > 0 represents a circle touching H_i iff p ∈ P_i.** Let V be the n×3 matrix with rows v_i and c = (c_1, …, c_n) ∈ ℝⁿ.

### Step 2 (L2, L3, L4). Dualization and the incidence dictionary

Introduce the **augmented rows** and their projective points:
$$w_i=(v_i,-c_i)=(n_i,-1,-c_i)\in\mathbb R^4,\qquad [w_i]\in\mathbb P^3.$$
(Each w_i ≠ 0 since its third coordinate is −1, so [w_i] is a well-defined point of projective 3-space ℙ³.)

**(L4) (GP) ⟹ no three of the points [w_i] are collinear in ℙ³.**

We first show: for any three indices i, j, k, the rows v_i = (n_i, −1), v_j = (n_j, −1), v_k = (n_k, −1) are linearly independent in ℝ³. Indeed, the matrix of rows v_i, v_j, v_k has all-(−1) third column; factoring −1 out of that column,
$$\det\begin{pmatrix}n_{i,1}&n_{i,2}&-1\\ n_{j,1}&n_{j,2}&-1\\ n_{k,1}&n_{k,2}&-1\end{pmatrix}=-\det\begin{pmatrix}n_{i,1}&n_{i,2}&1\\ n_{j,1}&n_{j,2}&1\\ n_{k,1}&n_{k,2}&1\end{pmatrix}=-2\cdot(\text{signed area of the triangle }n_i\,n_j\,n_k),$$
using the standard shoelace formula for the area of the triangle with vertices n_i, n_j, n_k ∈ ℝ². This determinant vanishes iff the three points n_i, n_j, n_k are collinear in ℝ² (the sign flip is irrelevant to vanishing). But by (GP) they are three **distinct** points of the unit circle S¹, and a circle contains no three collinear points (a line meets a circle in at most two points). Hence the determinant is nonzero, and v_i, v_j, v_k are linearly independent.

Now the 3×4 matrix with rows w_i, w_j, w_k has its first three columns equal to the matrix with rows v_i, v_j, v_k, which already has rank 3. Therefore the 3×4 w-matrix has rank 3, i.e. w_i, w_j, w_k are linearly independent in ℝ⁴, i.e. the three points [w_i], [w_j], [w_k] are **not collinear** in ℙ³ (three projective points are collinear iff their representative vectors are linearly dependent). This proves (L4).

*(Remark: only the no-parallel half of (GP) — distinct normals — is used here; the no-three-concurrent clause is not needed for (L4), nor for the uniqueness of the triple points below, which likewise follows from linear independence of v_i, v_j, v_k. Verified numerically: 0 of 5·10⁴ distinct-normal w-triples had rank < 3, round 11.)*

In particular, for any three indices i, j, k the three planes P_i, P_j, P_k meet in a unique point of ℝ³:
$$p_{ijk}:=P_i\cap P_j\cap P_k=V_{ijk}^{-1}c_{ijk},$$
where V_{ijk} is the invertible 3×3 matrix of rows v_i, v_j, v_k and c_{ijk} = (c_i, c_j, c_k).

**(L2) Incidence dictionary.** For l ∉ {i, j, k}:
$$P_l\text{ passes through }p_{ijk}\iff w_l\in\operatorname{span}\{w_i,w_j,w_k\}\iff [w_l]\text{ lies on the plane of }\mathbb P^3\text{ through }[w_i],[w_j],[w_k].$$

*Proof.* "P_l passes through p_{ijk}" means v_l·p_{ijk} = c_l, i.e. v_l·p_{ijk} − c_l = 0. Consider the 4×4 determinant of the matrix W₄ with rows w_i, w_j, w_k, w_l (in this order). Using that the first three rows determine p_{ijk} = V_{ijk}^{−1}c_{ijk}, one has the exact identity
$$\det W_4=\det\begin{pmatrix}w_i\\ w_j\\ w_k\\ w_l\end{pmatrix}=\det(V_{ijk})\cdot\big(v_l\cdot p_{ijk}-c_l\big). \tag{2}$$
(Identity (2) holds for every choice of the entries; with the corrected rows v_i = (n_i, −1), w_i = (n_i, −1, −c_i) it was re-verified symbolically with sympy — the difference of the two sides simplifies identically to 0 (round 11). A direct derivation: both sides are linear in the row w_l = (v_l, −c_l); writing w_l = (a, b, −1, −c_l) and expanding det W₄ along the last row, the coefficient of −c_l is the (4,4)-cofactor det V_{ijk}, while the contribution of (a, b, −1) = v_l is det of the matrix with rows w_i, w_j, w_k, (v_l, 0); column operations using p_{ijk} = V_{ijk}^{−1}c_{ijk} convert these into det(V_{ijk})·(v_l·p_{ijk}), giving the stated right-hand side.)

Since det(V_{ijk}) ≠ 0 by (L4), identity (2) gives
$$v_l\cdot p_{ijk}=c_l\iff \det\begin{pmatrix}w_i\\ w_j\\ w_k\\ w_l\end{pmatrix}=0\iff w_i,w_j,w_k,w_l\text{ are linearly dependent}.$$
As w_i, w_j, w_k are already independent (L4), the last condition is exactly w_l ∈ span{w_i, w_j, w_k}, i.e. [w_l] lies on the projective plane spanned by [w_i], [w_j], [w_k]. This proves (L2). ∎

In geometric terms: **the circle p_{ijk} touches H_l iff [w_l] lies on the plane of ℙ³ through [w_i], [w_j], [w_k].**

**(L3) Under hypotheses (2) and (3) (with n ≥ 3): the linear system Vp = c has no solution; equivalently the points [w_i] are not all coplanar in ℙ³.**

*Step (i): Vp = c has no solution.* Suppose, for contradiction, that p* ∈ ℝ³ satisfies Vp* = c, i.e. p* ∈ P_i for every i. Fix any three indices i, j, k (possible since n ≥ 3). Then p* lies on P_i, P_j, P_k, and by (L4) these three planes meet in the unique point p_{ijk}; hence p* = p_{ijk}. By condition (2) the triple {i, j, k} has a touching circle, which by (L1) is the unique point of P_i ∩ P_j ∩ P_k with positive radius coordinate — that point is p_{ijk} = p*. Therefore p* = (O*, r*) has r* > 0, i.e. p* is a genuine circle. Since p* ∈ P_i for **every** i, by (L1) this circle touches **every** half-plane H_i — contradicting condition (3). Hence Vp = c has no solution:
$$Vp=c\text{ is inconsistent}\iff c\notin\operatorname{Im}(V)\iff\operatorname{rank}[V\mid c]=4.$$

*Step (ii): coplanarity reformulation.* The matrix [V | c] (columns: the three columns of V, then c) has the same rank as [V | −c] (negating a column preserves rank), and the rows of [V | −c] are exactly the augmented vectors w_i = (v_i, −c_i). Thus rank[V | c] = 4 ⟺ the n rows w_i span all of ℝ⁴. Spanning ℝ⁴ is equivalent to saying the points [w_i] do **not** all lie on a single projective hyperplane (plane) of ℙ³ (n points of ℙ³ are all coplanar iff their representative vectors lie in a common 3-dimensional subspace, i.e. fail to span ℝ⁴). Therefore, under (2) and (3), the [w_i] are **not all coplanar**. This proves (L3). ∎

*(Round-11 confirmation: rank of the w-matrix equals 4 precisely when c ∉ Im V; with c = Vp* the rank drops to 3 and the [w_i] become coplanar.)*

### Step 3. Reduction to a depth-3 plane; the case n = 3

Call a plane π ⊂ ℙ³ a **depth-3 plane** (for the configuration {[w_i]}) if π contains **exactly three** of the points [w_i]. By the dictionary (L2): if π = (plane through [w_a], [w_b], [w_c]) is a depth-3 plane, then for the triple {a, b, c}, no other [w_l] lies on π, i.e. v_l·p_{abc} ≠ c_l for every l ∉ {a, b, c} — the circle p_{abc} touches H_a, H_b, H_c and **no** other half-plane.

So it suffices to produce a depth-3 plane for the point set {[w_1], …, [w_n]} ⊂ ℙ³, which by Steps 1–2 satisfies:
- **no three [w_i] collinear** (L4), and
- **not all [w_i] coplanar** (L3).

**Small n cannot occur.** We claim every set 𝓗 satisfying all three conditions has **n ≥ 4**.
- If n = 3: condition (2) applied to the single triple {1, 2, 3} = all of 𝓗 produces a circle touching all three half-planes, i.e. a circle touching every half-plane of 𝓗 — directly contradicting condition (3). So n ≠ 3. (With only three half-planes, "touches all three" and "touches all of 𝓗" are the same statement, so (2) and (3) are incompatible.)
- If n ≤ 2: there are no three half-planes, so condition (2) is vacuous, but a circle touching all of 𝓗 always exists, contradicting (3). For n = 1, fix any r > 0; the equation n_1·O − r = c_1 has a solution O (any point with n_1·O = c_1 + r), so by (L1) the circle (O, r) touches H_1. For n = 2, the boundary lines are non-parallel by (1), so n_1, n_2 are independent in ℝ²; fix any r > 0, then the system n_1·O = c_1 + r, n_2·O = c_2 + r has a unique solution O, and by (L1) the circle (O, r) touches both H_1 and H_2. Either way a circle touches all of 𝓗, contradicting (3). So n ∉ {1, 2}.

Hence **n ≥ 4** for any admissible 𝓗, which is exactly what Sylvester–Gallai needs (a depth-3 plane requires a fourth point to exclude). We proceed with n ≥ 4.

Thus the problem reduces to:

> **Reduction.** Given n ≥ 4 points [w_1], …, [w_n] ∈ ℙ³ with no three collinear and not all coplanar, there exists a depth-3 plane (a plane through exactly three of them).

This is precisely the **3-dimensional Sylvester–Gallai theorem**. We prove it from the 2-dimensional theorem.

### Step 4 (L5). The 2D Sylvester–Gallai theorem (Kelly's proof)

> **Theorem (2D Sylvester–Gallai; knowledge_base.md, "Combinatorial Geometry / Incidences").** Any finite set S of points in the real plane, not all collinear, admits an **ordinary line** — a line through exactly two points of S.

*Proof (Kelly's minimal-distance argument).* Consider the set 𝒫 of all pairs (Q, ℓ) where ℓ is a line through at least two points of S and Q ∈ S is a point **not** on ℓ. Since S is finite there are finitely many lines through ≥ 2 of its points, hence 𝒫 is finite; and 𝒫 is nonempty because S is not all collinear (take any line ℓ through two points; some point of S is off ℓ). Each pair (Q, ℓ) ∈ 𝒫 has perpendicular distance d(Q, ℓ) > 0 (Q ∉ ℓ). Choose (Q, ℓ) ∈ 𝒫 **minimizing** d(Q, ℓ); the minimum is attained because 𝒫 is finite and all distances are positive.

We claim ℓ is ordinary. Suppose not: ℓ contains at least three points of S. Let F be the foot of the perpendicular from Q to ℓ. Set up coordinates with ℓ the x-axis and F the origin, so Q = (0, h) with h = d(Q, ℓ) > 0. The ≥ 3 points of S on ℓ have the form (t, 0); among them, by pigeonhole at least two lie on the same closed side of F (the two closed sides x ≥ 0 and x ≤ 0 share only F, and three points cannot occupy two single-point-overlapping sides without two sharing a side). Call these two points A = (a, 0) and B = (b, 0), chosen with A the one **nearer** to F: thus a and b have the same sign and 0 ≤ |a| < |b|; replacing x by −x if necessary we may take 0 ≤ a < b. (Possibly a = 0, i.e. A = F; this is allowed.)

We show d(A, line QB) < h, contradicting minimality of (Q, ℓ) — note (A, line QB) ∈ 𝒫 because A ∈ S, the line QB passes through the two points Q, B of S, and A ∉ QB (A lies on ℓ ≠ QB since Q ∉ ℓ).

The line QB passes through Q = (0, h) and B = (b, 0); its equation is h·x + b·y − b·h = 0 (check: at Q, b·h − b·h = 0; at B, h·b − b·h = 0). The distance from A = (a, 0) to this line is
$$d(A,QB)=\frac{|h\cdot a+b\cdot 0-bh|}{\sqrt{h^2+b^2}}=\frac{h(b-a)}{\sqrt{h^2+b^2}}\qquad(b>a\ge 0\Rightarrow b-a>0).$$
We must check this is < h, i.e. (b − a)/√(h²+b²) < 1, i.e. (b − a)² < h² + b². Now
$$h^2+b^2-(b-a)^2=h^2+b^2-(b^2-2ab+a^2)=h^2+a(2b-a).$$
Since 0 ≤ a < b we have 2b − a > b > 0, so a(2b − a) ≥ 0, and h² > 0; hence h² + a(2b − a) > 0, i.e. (b − a)² < h² + b². Therefore d(A, QB) < h, a strict improvement on the minimal distance — contradiction.

Hence ℓ is ordinary, proving the 2D Sylvester–Gallai theorem. ∎

*(The strict inequality was verified over 2·10⁵ random configurations, including the boundary case a = 0 / A = F, with zero violations, round 11.)*

### Step 5 (L6). The 3D Sylvester–Gallai theorem via projection

> **Theorem (3D Sylvester–Gallai).** Let S = {[w_1], …, [w_n]} ⊂ ℙ³ (n ≥ 4) have no three points collinear and not all points coplanar. Then S has a depth-3 plane (a plane meeting S in exactly three points).

*Proof.* Fix one point of S, say [w_n], as the **center of projection**. Choose a projective plane (hyperplane of ℙ³) Λ ≅ ℙ² that does **not** pass through [w_n]. For each i ≠ n, the line of ℙ³ through [w_n] and [w_i] meets Λ in a unique point
$$q_i:=\big(\text{line }[w_n][w_i]\big)\cap\Lambda\in\Lambda.$$
(The line and the plane Λ meet because in ℙ³ any line meets any plane; the intersection is a single point because the line is not contained in Λ — it passes through [w_n] ∉ Λ.) We claim the n−1 points {q_i : i ≠ n} in Λ ≅ ℙ² are distinct and not all collinear.

**Distinctness.** Suppose q_i = q_j for some i ≠ j, both ≠ n. Then the two lines [w_n][w_i] and [w_n][w_j] meet Λ at the same point q := q_i = q_j; both lines pass through [w_n] and through q (two distinct points of ℙ³, distinct because [w_n] ∉ Λ ∋ q), hence both lines equal the line [w_n] q. Therefore [w_i] and [w_j] both lie on this single line, so [w_n], [w_i], [w_j] are collinear — contradicting "no three collinear." Hence the q_i are **distinct**. (Verified: 0 distinctness violations over the round-11 random configurations.)

**Not all collinear.** Suppose all q_i (i ≠ n) lie on a single line m ⊂ Λ. Let σ = span([w_n], m) be the plane of ℙ³ spanned by [w_n] and the line m (a plane: [w_n] ∉ m since [w_n] ∉ Λ ⊇ m). For each i ≠ n, the point [w_i] lies on the line [w_n] q_i, and both [w_n] ∈ σ and q_i ∈ m ⊂ σ, so the whole line [w_n] q_i ⊂ σ, whence [w_i] ∈ σ. Also [w_n] ∈ σ. Thus **all** n points of S lie on the plane σ — contradicting "not all coplanar." Hence the q_i are **not all collinear**. (Verified: the projected stack always had rank making the images non-collinear, round 11.)

**Passing to a Euclidean chart.** Kelly's argument (Step 4) uses Euclidean distance, so we transport the finite set {q_i} into an affine Euclidean plane. The q_i are finitely many points of the projective plane Λ; choose a projective line ℓ_∞ ⊂ Λ that avoids all of them (such a line exists: a projective line is determined by avoiding finitely many points — e.g. take any point of Λ off the finitely many lines spanned by pairs q_i, and a line through it missing all q_i; concretely, the lines through a generic point of Λ that hit some q_i are finitely many, so almost every line through it avoids all q_i). Then the affine plane Λ ∖ ℓ_∞, equipped with any Euclidean coordinates, contains all the q_i. A line of this affine plane through exactly two q_i extends to a projective line of Λ through exactly two q_i (the q_i avoid ℓ_∞, so no q_i is added at infinity). Collinearity in the affine plane and in Λ agree for the q_i (they all avoid ℓ_∞), so the q_i are not all collinear in the affine plane either.

Now apply the **2D Sylvester–Gallai theorem** (Step 4) to the finite set {q_i : i ≠ n} in this affine Euclidean plane, which is not all collinear: there is an **ordinary line** ℓ₀ passing through exactly two of the q_i, say q_a and q_b (a, b ≠ n, a ≠ b). Regard ℓ₀ as a projective line of Λ; it still contains exactly the two points q_a, q_b among the q_i.

Let
$$\pi:=\operatorname{span}([w_n],[w_a],[w_b])\subset\mathbb P^3.$$
These three points are non-collinear (no three of S are collinear), so π is a genuine projective plane. Since [w_a], [w_b] ∈ π and q_a, q_b lie on the lines [w_n][w_a], [w_n][w_b] ⊂ π, we have q_a, q_b ∈ π ∩ Λ. The intersection π ∩ Λ of two distinct planes of ℙ³ is a line (distinct because [w_n] ∈ π but [w_n] ∉ Λ), and it contains the two distinct points q_a, q_b, hence
$$\pi\cap\Lambda=\text{the line }q_aq_b=\ell_0.$$

**π is a depth-3 plane.** Certainly [w_n], [w_a], [w_b] ∈ π. Suppose some other point [w_m] ∈ S lies on π, with m ∉ {n, a, b}. First, m ≠ n (that is one of the three already counted), so [w_m] is one of the **projected** points and q_m is defined. Since [w_m] ∈ π and [w_n] ∈ π, the line [w_n][w_m] ⊂ π, so its intersection with Λ, namely q_m, lies in π ∩ Λ = ℓ₀. But q_m is a projected point distinct from q_a and q_b (the q_i are pairwise distinct, and m ∉ {a, b}). Thus ℓ₀ would contain a **third** projected point q_m beyond q_a, q_b — contradicting that ℓ₀ is an ordinary line carrying exactly two of the projected points. Therefore no such [w_m] exists, and π contains exactly the three points [w_n], [w_a], [w_b] of S. This is a **depth-3 plane**, proving the 3D Sylvester–Gallai theorem. ∎

*(Pull-back exactness was stress-tested in round 11, including on a degenerate configuration with several coplanar points mimicking condition (2)'s rich triple-intersections; every ordinary line pulled back to a plane containing exactly {n, a, b}.)*

### Step 6 (L7). Translating back: a circle touching exactly three half-planes

By Step 5 there is a depth-3 plane π = span([w_a], [w_b], [w_n]) for our configuration {[w_i]}; let {a, b, n} be its triple of indices. Consider the circle-space point
$$p:=p_{abn}=P_a\cap P_b\cap P_n\in\mathbb R^3,$$
which exists and is unique by (L4) (the rows v_a, v_b, v_n are independent). We verify it gives a circle touching exactly H_a, H_b, H_n.

- **It touches H_a, H_b, H_n.** By definition p ∈ P_a ∩ P_b ∩ P_n, i.e. v_a·p = c_a, v_b·p = c_b, v_n·p = c_n. We must also know p is a genuine circle, i.e. its radius coordinate r is positive. This is supplied by **condition (2)**: applied to the specific triple {a, b, n}, condition (2) asserts that there exists a circle touching H_a, H_b, H_n; by (L1) any such circle is a point of P_a ∩ P_b ∩ P_n with r > 0, and that point is unique, hence equal to p. Therefore r(p) > 0 and p is a valid circle. (We invoke condition (2) here on exactly the triple that Sylvester–Gallai handed us; this is legitimate, as (2) is a hypothesis about **every** triple.) By (L1), this circle touches H_a, H_b, H_n.

- **It touches no other half-plane.** Let l ∉ {a, b, n}. Since π is a depth-3 plane, [w_l] ∉ π, i.e. w_l ∉ span{w_a, w_b, w_n}. By the incidence dictionary (L2), this is equivalent to v_l·p ≠ c_l, i.e. p ∉ P_l. By (L1), the circle p does **not** touch H_l.

Therefore the circle p = p_{abn} (radius r(p) > 0) touches H_a, H_b, H_n and touches no other half-plane in 𝓗 — it touches **exactly three** half-planes.

This completes the proof. ∎

### Summary of named tools

- **(L1)** Linearization of "circle touches half-plane" into the plane equation v_i·p = c_i in circle-space ℝ³ (sign pinned by "the disk is not contained in H_i").
- **(L2)** Incidence identity det[w_i; w_j; w_k; w_l] = det(V_{ijk})·(v_l·p_{ijk} − c_l), giving "P_l ∋ p_{ijk} ⟺ [w_l] on the plane of [w_i],[w_j],[w_k]."
- **(L3)** Condition (3) ⟺ rank[V | c] = 4 ⟺ the [w_i] not all coplanar.
- **(L4)** General position (distinct unit normals) ⟹ no three [w_i] collinear (via the shoelace determinant of three distinct points of S¹).
- **(L5)** 2D Sylvester–Gallai theorem, Kelly's minimal-distance proof (knowledge_base.md).
- **(L6)** 3D Sylvester–Gallai theorem, by projection from one point onto a hyperplane.
- **(L7)** Positivity of the witnessed circle's radius, supplied by condition (2) on the SG triple {a, b, n}.
