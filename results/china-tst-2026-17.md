## Status
partial

## Problem
(1) A regular octahedron lies inside (including the boundary) a unit cube. Find the maximum possible edge length of the octahedron.

(2) A cube lies inside (including the boundary) a regular octahedron of edge length 1. Find the maximum possible edge length of the cube.

## Answers (conjectured, verified numerically; constructions rigorous, upper bounds reduced to two O(3) extremal lemmas)
- Part (1): **3√2/4**
- Part (2): **2−√2**

## Approaches tried

### Numerical optimization (exploration phase) — supported both answers
scipy differential_evolution over all positions/orientations; both answers exact to 8+ sig figs.

### Round-4 build: rigorous reductions + Lemma A reduced to a clean residual inequality
- Both **constructions** are fully rigorous (all 6 / all 8 vertices verified on the boundary). They give the lower bounds a ≥ 3√2/4 and t ≥ 2−√2.
- Both **"WLOG centered" containment reductions** are now written out explicitly (short, correct arguments — see Current best). The reviewer-flagged "by symmetry" appeals are eliminated.
- Both **upper bounds** are reduced rigorously to two sharp O(3) extremal lemmas:
  - **Lemma A:** every M ∈ O(3) has max_{ij}|M_{ij}| ≥ 2/3.
  - **Lemma B:** every F ∈ O(3) has max_{s∈{±1}³} ‖Fs‖₁ ≥ 1+√2.
- **Lemma A new progress (this round):** reduced Lemma A to the single inequality S₄ := Σ_{ij} M_{ij}⁴ ≥ 11/9, via a clean per-row upper bound S₄ ≤ 3(6m⁴−4m²+1). The residual S₄ ≥ 11/9 was further reduced to Σᵢ|qᵢ|² ≤ 8/9 where qᵢ = (M_{i2}M_{i3}, M_{i1}M_{i3}, M_{i1}M_{i2}) and q₁+q₂+q₃ = 0 (an identity from column orthogonality). This last inequality is the orthostochasticity constraint and is **not yet closed**.
- **Reviewer-flagged dead ends confirmed and avoided:** the box-cap + det-B subset (feasible at m=0.6), the cofactor 2×2 bound (only m≥1/2), ΣM_{ij}⁴≤3m² (only m≥0.638), and the averaging bound for Lemma B (3√2/2 < 1+√2). None are used.
- **Remaining gaps (both genuine, not papered over):** (i) Lemma A residual Σᵢ|qᵢ|² ≤ 8/9 (equiv. S₄ ≥ 11/9), and (ii) Lemma B in full. Both are sharp O(3) extremal facts whose equality cases are isolated; a complete rigorous proof of either was not reached this round.

## Current best

Everything below is rigorous **except** the two clearly-marked residual inequalities (Lemma A residual; Lemma B).

### Notation and the two reductions

A **regular octahedron** with center c, circumradius (center-to-vertex) r and orthonormal frame {e₁,e₂,e₃} is the set with the 6 vertices c ± r·eᵢ (i=1,2,3); its edge length is a = r√2 (two vertices on different axes are at distance √(r²+r²)). A **cube** with center c, half-diagonal-of-side... more precisely side t and orthonormal axis frame F = [f₁ f₂ f₃] ∈ O(3) has the 8 vertices c + (t/2)(±f₁ ± f₂ ± f₃) = c + (t/2)F s, s ∈ {±1}³.

We allow F ∈ O(3) (both det = ±1): a cube/octahedron orientation may be a reflected frame, and all quantities used below (|M_{ij}|, ‖Fs‖₁) are invariant under reflection, so O(3) coverage costs nothing.

#### Part (1) reduction.

The unit cube is [0,1]³. Containment means every vertex coordinate lies in [0,1]:
for all i and all coordinates k, 0 ≤ c_k ± r·e_{ik} ≤ 1.

**WLOG centered (explicit).** Fix the frame {eᵢ}. For each coordinate k the two constraints
0 ≤ c_k − r·max_i|e_{ik}| and c_k + r·max_i|e_{ik}| ≤ 1 (taking the worst sign over i) read
r·max_i|e_{ik}| ≤ min(c_k, 1−c_k). The right side is at most 1/2 and is maximized (=1/2) exactly at c_k = 1/2; the constraints in different coordinates are independent. Hence for the frame to admit **any** valid r, and to admit the largest one, we take c = (½,½,½), and then the constraint becomes
r·max_i|e_{ik}| ≤ ½ for every k, i.e. r ≤ 1/(2·max_{i,k}|e_{ik}|).

By **Lemma A** applied to the orthogonal matrix M = (e_{ik}) (rows = the eᵢ), max_{i,k}|e_{ik}| ≥ 2/3, so
r ≤ 1/(2·(2/3)) = 3/4, hence a = r√2 ≤ 3√2/4.

#### Part (2) reduction.

A regular octahedron of edge 1, centered at the origin with axes aligned to the coordinate axes, is {x : ‖x‖₁ ≤ 1/√2}: its 6 vertices are ±(1/√2)·(standard basis), and two adjacent vertices (e.g. (1/√2,0,0) and (0,1/√2,0)) are at distance √(2·(1/√2)²) = 1, so edge = 1. Every regular octahedron of edge 1 is an isometric image of this one; isometries preserve cube edge lengths, so we may use this model.

Containment of the cube (center c, side t, frame F) means ‖c + (t/2)F s‖₁ ≤ 1/√2 for all s ∈ {±1}³.

**WLOG centered (explicit, one-line inequality).** The octahedron is centrally symmetric and the s ↦ −s pair gives opposite vertices c ± v with v = (t/2)F s. By the triangle inequality, ‖c+v‖₁ + ‖c−v‖₁ ≥ ‖(c+v)−(c−v)‖₁ = ‖2v‖₁, so max(‖c+v‖₁, ‖c−v‖₁) ≥ ‖v‖₁, with equality at c = 0. Hence centering at the octahedron center minimizes the worst vertex over each opposite pair simultaneously, and admits the largest feasible t. With c = 0 the constraint is (t/2)·max_{s}‖F s‖₁ ≤ 1/√2, i.e.
t ≤ √2 / max_{s∈{±1}³}‖F s‖₁.

By **Lemma B**, max_s‖F s‖₁ ≥ 1+√2, so
t ≤ √2/(1+√2) = √2(√2−1)/((1+√2)(√2−1)) = (2−√2)/1 = 2−√2.

### Constructions (lower bounds) — fully rigorous

**Part (1), a = 3√2/4.** Center c = (½,½,½), r = 3/4, frame
e₁ = (1/3,−2/3,2/3), e₂ = (2/3,2/3,1/3), e₃ = (−2/3,1/3,2/3).
These are orthonormal (verified: each ‖eᵢ‖² = (1+4+4)/9 = 1, eᵢ·eⱼ = 0). The 6 vertices c ± (3/4)eᵢ are
(3/4,0,1),(1/4,1,0),(1,1,3/4),(0,0,1/4),(0,3/4,1),(1,1/4,0); every coordinate is in [0,1] (each vertex has two coordinates in {0,1}, lying on a cube edge). So this octahedron is contained in [0,1]³ and has edge (3/4)√2 = 3√2/4. Hence max a ≥ 3√2/4, and with the upper bound (modulo Lemma A) max a = 3√2/4.

**Part (2), t = 2−√2.** Center 0, side t = 2−√2, axes f₁ = (1/√2,1/√2,0), f₂ = (−1/√2,1/√2,0), f₃ = (0,0,1) (orthonormal). The 8 vertices (t/2)(±f₁±f₂±f₃) are
(±(√2−1), 0, ±(2−√2)/2) and (0, ±(√2−1), ±(2−√2)/2);
each satisfies ‖·‖₁ = (√2−1) + (2−√2)/2 = √2−1 + 1 − √2/2 = √2/2 = 1/√2 exactly, so every vertex lies on a face of the octahedron. The cube edge is the distance between (√2−1,0,(2−√2)/2) and (0,√2−1,(2−√2)/2), which is √(2(√2−1)²) = (√2−1)√2 = 2−√2. Hence max t ≥ 2−√2, and with the upper bound (modulo Lemma B) max t = 2−√2.

### Lemma A — reduction to a single residual inequality (NEW, this round)

**Claim of Lemma A.** For every M ∈ O(3), m := max_{i,j}|M_{ij}| ≥ 2/3.

**Step 1 (entrywise band).** Suppose for contradiction m < 2/3, so m² < 4/9. Each row is a unit vector, so for every entry, M_{ij}² = 1 − (sum of the other two squares in row i) > 1 − 2m² > 1 − 8/9 = 1/9. Thus **every** entry satisfies 1/3 < |M_{ij}| < 2/3, and in particular m² ∈ (1/3, 4/9) (the lower bound m² ≥ 1/3 also follows from a single row: three squares summing to 1 force the largest ≥ 1/3). [This is rigorous.]

**Step 2 (per-row upper bound on S₄).** Let S₄ = Σ_{i,j} M_{ij}⁴ = Σ_i Σ_j M_{ij}⁴. Fix a row; let x,y,z = M_{i1}²,M_{i2}²,M_{i3}² ≥ 0 with x+y+z = 1 and each ≤ m². The function x²+y²+z² is convex, so on the polytope {x+y+z=1, 0≤x,y,z≤m²} it is maximized at a vertex. For m² ∈ [1/3, 1/2] the vertices are the permutations of (m², m², 1−2m²) (since 1−2m² ∈ [0, m²] there), giving value 2m⁴ + (1−2m²)². Hence
S₄ ≤ 3(2m⁴ + (1−2m²)²) = 3(6m⁴ − 4m² + 1) =: g(m). [Rigorous; valid because m² ≤ 4/9 < 1/2.]

**Step 3 (residual).** If we knew **S₄ ≥ 11/9**, then g(m) ≥ 11/9, i.e. 18m⁴ − 12m² + 3 ≥ 11/9, i.e. 81m⁴ − 54m² + 8 ≥ 0, i.e. (9m²−2)(9m²−4) ≥ 0, i.e. m² ≤ 2/9 or m² ≥ 4/9. Since m² ≥ 1/3 > 2/9 (Step 1), the first branch is impossible, forcing m² ≥ 4/9, i.e. m ≥ 2/3 — contradicting m < 2/3 and proving Lemma A. [Rigorous given S₄ ≥ 11/9.] The factorization is exact: 81y²−54y+8 = (9y−2)(9y−4).

**Step 4 (further reduction of the residual S₄ ≥ 11/9).** Set pᵢ = (M_{i1}²,M_{i2}²,M_{i3}²) (row-square vectors) and qᵢ = (M_{i2}M_{i3}, M_{i1}M_{i3}, M_{i1}M_{i2}). Then:
- |pᵢ|² = Σ_j M_{ij}⁴ and |qᵢ|² = Σ_{j<l} M_{ij}²M_{il}², and (Σ_j M_{ij}²)² = 1 gives |pᵢ|² + 2|qᵢ|² = 1, so S₄ = Σ_i|pᵢ|² = 3 − 2 Σ_i|qᵢ|².
- **q₁ + q₂ + q₃ = 0** (identity): its three coordinates are Σ_i M_{i2}M_{i3} = c₂·c₃ = 0, Σ_i M_{i1}M_{i3} = c₁·c₃ = 0, Σ_i M_{i1}M_{i2} = c₁·c₂ = 0, by column orthonormality (cⱼ = columns).

Hence **S₄ ≥ 11/9 ⟺ Σ_i|qᵢ|² ≤ 8/9**, with the side condition q₁+q₂+q₃ = 0 and the per-row constraint that qᵢ = (signed) (√(p_{i2}p_{i3}), √(p_{i1}p_{i3}), √(p_{i1}p_{i2})) for a probability vector pᵢ, ∑ᵢ pᵢ = (1,1,1). [All identities verified symbolically/numerically.]

**GAP (Lemma A).** The residual **Σ_i|qᵢ|² ≤ 8/9** is NOT yet proven. Equality holds exactly when every row-square vector pᵢ is a permutation of (1/9, 4/9, 4/9) (the extremal ±1/3,±2/3 frame). Note the bound is genuinely an **orthostochasticity** fact, not a double-stochasticity fact: the doubly-stochastic-but-not-orthostochastic matrix P=½I+¼(J−I) gives Σe₂(pᵢ) = 9/8·... in fact S₄ = 9/8 < 11/9 for it, so double stochasticity (i.e. just ∑pᵢ=(1,1,1)) yields only Σ|qᵢ|² ≤ 1. The signed condition q₁+q₂+q₃ = 0 must be used to drop the bound from 1 to 8/9, and that step is open.

### Lemma B — reduction in place, extremal step open

**Claim of Lemma B.** For every F ∈ O(3), max_{s∈{±1}³}‖F s‖₁ ≥ 1+√2.

**Reformulation (rigorous).** ‖F s‖₁ = Σ_i|(F s)_i| = max_{t∈{±1}³} t^T F s, so
h(F) := max_s ‖F s‖₁ = max_{s,t ∈ {±1}³} t^T F s, a symmetric "cut-norm-like" functional.

**The clean 1-parameter family (rigorous).** If a column of F equals a standard basis vector — WLOG f₃ = e_z, with f₁,f₂ a rotation by θ in the xy-plane — then for s = (s₁,s₂,s₃):
‖F s‖₁ = |cos θ·s₁ − sin θ·s₂| + |sin θ·s₁ + cos θ·s₂| + |s₃|.
The third term is 1. Taking s₃ free and optimizing the planar part over s₁,s₂ ∈ {±1}: the planar maximum equals √2·(|cos θ| + |sin θ|)/... — concretely, choosing (s₁,s₂)=(1,1) gives |cosθ−sinθ|+|sinθ+cosθ|, and (s₁,s₂)=(1,−1) gives |cosθ+sinθ|+|sinθ−cosθ|; the larger of these is |cosθ|+|sinθ| + ||cosθ|−|sinθ|| = 2·max(|cosθ|,|sinθ|). So h on this family is 1 + 2·max(|cosθ|,|sinθ|), minimized over θ at |cosθ|=|sinθ|=1/√2 (θ=45°), value 1 + 2·(1/√2) = 1 + √2. [This sub-step is rigorous and gives equality at the 45° frame; all 8 sign vectors then attain 1+√2.]

**GAP (Lemma B).** The reduction "a minimizer of h over O(3) has a column equal to a coordinate axis" is NOT proven. Numerically every minimizer is axial (column 3 = e_z) and h = 1+√2, but the perturbation/exchange argument that forces axiality at the minimum is exactly the crux flagged in review and was not completed. Without it, h(F) ≥ 1+√2 for **all** F (not just axial F) is unestablished. Note: pure averaging is insufficient — averaging Σ_t‖F^T t‖₁ over the four sign classes gives a max-lower-bound of only 3√2/2 ≈ 2.121 < 1+√2 ≈ 2.414 (the per-column functional Σ_{4 reps}|c·t| has min 2√2 over unit c, and 3·2√2/4 = 3√2/2), so the structural reduction is required.

## Full proof
Not complete. The two constructions, both centering reductions, and both reductions to the O(3) lemmas are rigorous; Lemma A is reduced to the single residual inequality Σᵢ|qᵢ|² ≤ 8/9 (equivalently S₄ ≥ 11/9) with the per-row upper bound and the m²∈{2/9,4/9} factorization fully carried out; Lemma B is reduced to the axiality of the minimizer, with the 1-parameter family solved. The two remaining gaps — (A) Σᵢ|qᵢ|² ≤ 8/9 under q₁+q₂+q₃=0 (an orthostochasticity fact), and (B) the "minimizer is axial" reduction — are the orthogonality-specific extremal steps and are honestly open. Both conjectured answers, 3√2/4 and 2−√2, are stated and the constructions attaining them are verified to touch the boundary at all vertices.
