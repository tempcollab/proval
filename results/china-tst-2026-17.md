## Status
partial

> **Round-8 summary.** Part (1) = 3√2/4 and Part (2) = 2−√2 are the correct answers.
> **Part (1) is fully proved** (Lemma A, round 6). **Lemma B** (Part-2 upper bound) is
> ADVANCED but NOT yet closed. This round established rigorously: (B0) the reduction
> **T(F) ≥ 4√2 ⟹ Lemma B**, where T(F)=Σ_{p<q}Σ_k|W_kp W_kq|, via the exact identity
> Σ_k‖w_k‖₁²=12+2T (since ‖w_k‖₂²=3) and the tight averaging max_k‖w_k‖₁²≥¼Σ=3+T/2≥(1+√2)²;
> (B1) the **smoothing core**: a single column-pair rotation makes g(φ)=T a sum of 12
> terms each |single sinusoid| (freq 1 or 2), hence piecewise concave, so its min is at a
> breakpoint with a **zero entry** — therefore a GLOBAL minimizer of T over O(3) may be
> taken with W_{1,1}=0 (c_x⊥(1,1,1)); (B2) the symmetry relocation; and (B3-final) the
> **axial floor** T = 8m²+8m−4 ≥ 4√2 (m=max(|cosθ|,|sinθ|)∈[1/√2,1]) with equality at the
> 45° axial frame. **REMAINING GAP:** proving min of T over the 2-D zero-entry stratum is
> 4√2. The outline's "iterate the smoothing to an axial column" route was found
> **NON-rigorous this round**: T has a large family of non-axial breakpoint/local minima
> (1901 found, values 5.657–6.16 just above 4√2≈5.6569), so iterating B1 STALLS at
> non-global breakpoints and does not reach the axial frame. The global min over O(3) is
> 4√2 (verified to 13 digits, at the axial 45° frame), but the stratum bound needs the
> genuine 2-variable inequality (≈230 sign-sectors), not closed here. Status stays
> **partial**; the honest gap is recorded below.

## Problem
(1) A regular octahedron lies inside (including the boundary) a unit cube. Find the maximum possible edge length of the octahedron.

(2) A cube lies inside (including the boundary) a regular octahedron of edge length 1. Find the maximum possible edge length of the cube.

## Answers (conjectured, verified numerically; constructions rigorous, upper bounds reduced to two O(3) extremal lemmas)
- Part (1): **3√2/4**
- Part (2): **2−√2**

## Approaches tried

### Round-8 build: Lemma B ADVANCED to a single 2-variable stratum inequality (NOT closed)
- **(B0) Reduction to a T-inequality — RIGOROUS (implication direction only).** With M the 4×3
  sign matrix (rows the four leading-+ sign-reps) and W = MF, define T(F) := Σ_{p<q}Σ_k|W_kp W_kq|.
  Per-row identity f(w)=|w_xw_y|+|w_xw_z|+|w_yw_z|=(‖w‖₁²−‖w‖₂²)/2 with ‖w_k‖₂²=3 gives
  Σ_k‖w_k‖₁²=12+2T, so max_k‖w_k‖₁²≥¼Σ=3+T/2. Hence **T≥4√2 ⟹ max_k‖w_k‖₁≥1+√2 = Lemma B** (the
  averaging is tight at the 45° frame, no slack lost). Only ⟹ used (NOT a biconditional).
- **(B1) Smoothing core — RIGOROUS.** A single column-pair rotation R(φ) right-multiplying F keeps
  F∈O(3). g(φ):=T(F·R(φ)) is a sum of 12 terms, each |single sinusoid| (freq 1 for the two cross
  terms with the fixed column, freq 2 for the rotated-pair product), hence piecewise concave between
  the finitely many term-zeros (degenerate ≡0 terms constant, handled). A concave function on an
  interval has its min at an endpoint = a breakpoint = a zero entry. So a GLOBAL minimizer of T over
  O(3) may be taken with some W_kp=0; (B2) relocates it to **W_{1,1}=0 ⟺ c_x ⊥ (1,1,1)**.
- **(B3-final) Axial floor — RIGOROUS.** On the axial family (some column = ±e_i), the four rows of
  W collapse to a single pattern: **T = 8m²+8m−4** (m=max(|cosθ|,|sinθ|)∈[1/√2,1]), increasing in m,
  so **T ≥ 4√2**, equality at m=1/√2 (45° axial frame). Closed form + min verified symbolically.
- **(B3-GAP) — NOT CLOSED (the honest gap).** The outline's "iterate the (y,z) smoothing to reach an
  axial column" route is **NON-rigorous**, discovered this round: T has ≈**1901 non-axial local-min
  breakpoint configurations** (values densely in [5.657, 6.16], just above 4√2≈5.6569), so the
  alternating smoothing **STALLS** at non-global, non-axial breakpoints — the B1 "constant on a
  concavity interval ⟹ endpoints are minimizers with an extra zero" mechanism is valid only AT a
  global minimizer, which need not be reachable by monotone smoothing. Also "two zeros in a W-column
  ⟹ axial F-column" is FALSE (x-column W-zeros in rows {1,2} force c_x∥(1,−1,0)/√2, non-axial). What
  remains is the genuine 2-variable inequality **min over the stratum {c_x⊥(1,1,1)} of T = 4√2**
  (≈230 sign-sectors; numerically exact to 13 digits at the axial 45° frame), which I could not
  prove in budget.
- **Numerics confirming the rigorous spine:** global min of T over O(3) = 4√2 to 13 digits at the
  axial 45° frame; single column-pair rotation always drives its φ-min to a zero entry (0/400);
  identity Σ‖w_k‖₁²=12+2T and ‖w_k‖₂²=3 exact; (y,z)-rotation provably leaves W's x-column fixed;
  stratum min = 4√2 to 13 digits at an axial frame.
- **Net:** Lemma B reduced to ONE concrete 2-variable inequality (B3-GAP); chain (B0)→(B1)→(B2)→
  (B3-final) rigorous; the stratum bound not closed. **Status stays partial.** Full state in
  *Lemma B — COMPLETE PROOF (round 8)* (a near-complete proof with the single gap marked).

### Round-6 build: Lemma A CLOSED (zero branch elementary; no-zero branch via saturated-ideal symbolic certificate)
- **Zero-entry branch — CLOSED, elementary.** For ANY M ∈ O(3) with a zero entry (no
  criticality needed), a row/column permutation (these act transitively on the 9 positions
  and preserve O(3) and S₄) puts the zero at position (1,1). Parametrizing rows 2,3 as an
  orthonormal basis of r₁^⊥ by an angle θ gives the exact identity S₄ = w(1+s)+s with
  s=a⁴+b⁴=1−2t, t=a²b²∈[0,1/4], w=cos⁴θ+sin⁴θ∈[1/2,1]. Increasing in w ⇒ min at w=1/2; then
  2−3t minimized at t=1/4 ⇒ **S₄ ≥ 5/4 > 11/9**. (Full derivation in *Current best* and
  *Full proof*.)
- **No-zero branch — CLOSED, terminating symbolic certificate.** At a no-zero critical point
  M* ∈ O(3), reflect to SO(3) (entry-squares and stationarity invariant under row sign-flip)
  and use the quaternion parametrization. The column-stationarity ideal I = ⟨E₀₁,E₀₂,E₁₂,
  a²+b²+c²+d²−1⟩ saturated at ∏M_ij (Rabinowitsch variable y, yΠM_ij−1) has a grevlex Gröbner
  basis that **terminates (size 39, zero-dimensional)**. Reducing modulo it:
  **(9M_ij²−1)(9M_ij²−4) ≡ 0 for every (i,j)** and **S₄ − 11/9 ≡ 0**. Both reductions return
  exactly 0 — a rigorous ideal-membership certificate that on the no-zero stationary set every
  entry-square is 1/9 or 4/9 and S₄ = 11/9. Non-circularity confirmed: the same minor/entry
  polynomials do NOT reduce to 0 on the *unsaturated* ideal (the zero-entry critical points,
  with S₄∈{5/4,2,3}, sit in the difference), so the saturation is doing real work and the
  certificate is not the round-5 circular re-encoding. Reproducible in ~90 s (sympy 1.14).
  The rank(G)≤1 / cubic-cascade picture (G=M∘M∘M−⅓M has all 2×2 minors in the saturated ideal;
  cubic x³−x/3−(2/27)σ=(3x∓2)(3x±1)²/27) is given as motivation but is NOT load-bearing — the
  entry-square factorization is a direct ideal member.
- **Net:** Lemma A is fully proved; Part (1) = 3√2/4 is now rigorous. Lemma B untouched.

### Round-5 build: Lemma A via smooth KKT on O(3); Lemma B reformulated as Gram feasibility
- **Lemma A — partial progress, localized but not closed.** Carried out the Lagrange/KKT
  route on the compact manifold O(3): stationarity ⟺ Mᵀ(M∘M∘M) symmetric, i.e. the three
  column-pair equations Σ_a M_{ai}M_{aj}(M_{aj}²−M_{ai}²)=0. **Rigorously certified the critical
  set is finite**: a grevlex Gröbner basis of the stationarity ideal in unit-quaternion
  coordinates terminated and is zero-dimensional (sympy 1.14). The four critical values
  {11/9, 5/4, 2, 3} (min 11/9) and their bijection with the zero-entry count are numerically
  certain (30k+ seeds), and at all-nonzero critical points the multiplier Λ=Mᵀ(M∘M∘M) has
  constant diagonal 11/27 and spectrum {1/3,1/3,5/9}. **Did NOT close**: the symbolic minimal
  polynomial of S₄ over the (certified) ideal did not terminate (lex elimination on degree-8
  4-var system; quotient dim 581), and a clean hand classification of the no-zero branch was
  not completed. **Two shortcut routes confirmed circular and removed**: (a) the band-obstruction
  certificate g(M)=Σ(9M²−1)(4−9M²) ≡ 99−81·S₄, so "all squared entries in (1/9,4/9) impossible"
  IS the inequality S₄>11/9, not an independent bound; (b) the cofactor identity X=S₄/4−3/4.
  Net: Lemma A reduced from "an orthostochastic inequality" to "the min of the *finite,
  certified* critical-value set is 11/9" — sharper than round 4, still a genuine open step.
- **Lemma B — confirmed BLOCKING OPEN CRUX.** The old rotation-monotonicity mechanism is
  provably false (re-verified). New reformulation handed forward: h(F)=max over 4 sign-reps of
  ‖±r₁±r₂±r₃‖₁; the four vectors w_k form a tight frame (Σ w_k w_kᵀ=4I, ‖w_k‖₂=√3) with
  pairwise Gram entries ±1. Tight-frame alone admits max ‖w_k‖₁≈1.985<1+√2, so the ±1-Gram
  condition is load-bearing — a Gram-feasibility target for the next round.

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

### Lemma A — Round-5 progress on the KKT value-floor S₄ ≥ 11/9 (still open, but localized)

The residual to prove is **S₄ ≥ 11/9** for every M ∈ O(3) (equivalently Σ_i|qᵢ|² ≤ 8/9).
Equality holds exactly when every row-square vector pᵢ is a permutation of (1/9, 4/9, 4/9)
(the ±{1/3,2/3} frame). This round attacked it by the smooth Lagrange/KKT route on the
compact manifold O(3) (knowledge_base: *Lagrange/quadratic forms*, *extreme value theorem*).

**(R5-1) Smooth stationarity.** S₄(M) = Σ M_{ij}⁴ is a polynomial, hence smooth on the
compact embedded manifold O(3) ⊂ ℝ⁹; by the extreme-value theorem its global minimum is
attained at some M*, a critical point. The tangent space at M is {AM : A skew} = {MB : B
skew}. Setting N = M∘M∘M (entrywise cube), ∇S₄ = 4N, and the stationarity condition
∇S₄ ⊥ T_M is equivalent to **both** MᵀN and MNᵀ being symmetric. The column form MᵀN
symmetric reads, for each column pair (i,j):
  Σ_a M_{ai} M_{aj}(M_{aj}² − M_{ai}²) = 0      (three scalar equations). [Rigorous.]
(The row form gives the analogous three row-pair equations; both hold at any critical point.)

**(R5-2) The critical set is finite — RIGOROUSLY CERTIFIED.** Parametrize SO(3) by a unit
quaternion (a,b,c,d), a²+b²+c²+d²=1, giving a polynomial rotation matrix R(a,b,c,d). The
three column-stationarity equations together with the unit-norm equation form a polynomial
system in (a,b,c,d). A **Gröbner basis in graded reverse-lex order terminated** (size 100)
and the resulting ideal is **zero-dimensional** (`GroebnerBasis.is_zero_dimensional = True`,
sympy 1.14, verified). Hence the critical set of S₄ on SO(3) is finite; with reflection
invariance (S₄ and the equations are det-invariant, already in file) the same holds on O(3).
[This step is rigorous — a terminating, reproducible symbolic computation.]

**(R5-3) The critical values (numerics, GUIDE not proof).** fsolve from 30k+ random seeds on
the three column-stationarity equations over SO(3) yields **exactly four** critical values
   { 11/9, 5/4, 2, 3 },   min = 11/9,
in clean bijection with the number of zero entries of M:
   0 zeros ⇒ S₄ = 11/9 (the ±{1/3,2/3} orbit);  1 zero ⇒ 5/4;  4 zeros ⇒ 2;  6 zeros ⇒ 3.
Every all-nonzero critical point has entry-squares ∈ {1/9, 4/9} (a permutation of
(1/9,4/9,4/9) per row and per column), and there the symmetric multiplier Λ = Mᵀ(M∘M∘M) has
all diagonal entries 11/27 (so tr Λ = S₄ = 11/9) and eigenvalues {1/3, 1/3, 5/9}. [All of
this is numerically certain across tens of thousands of seeds, but it is a GUIDE; the
*symbolic* certification of the value SET is what remains.]

**(R5-4) Why no shortcut exists (two circular routes ruled out, do not revive).**
  • *Band-obstruction certificate is circular.* Under the contradiction hypothesis m<2/3,
    Step 1 puts every entry strictly in (1/3,2/3), i.e. each squared entry strictly in
    (1/9,4/9). The natural certificate g(M) := Σ_{ij}(9M_{ij}²−1)(4−9M_{ij}²) is ≥ 0 iff all
    squared entries lie in [1/9,4/9]. But expanding, Σ_{ij}(9M_{ij}²−1)(4−9M_{ij}²) =
    Σ_{ij}(−81 M_{ij}⁴ + 45 M_{ij}² − 4) = −81 S₄ + 45·3 − 4·9 = **99 − 81 S₄** (verified
    exactly). So "g(M) ≤ 0 ⟺ S₄ ≥ 99/81 = 11/9": the band obstruction is *literally the
    target inequality*, not an independent bound. (Numerically max_M g = −0.007 ≈ 0, i.e. the
    open band (all squares strictly in (1/9,4/9)) contains **no** orthogonal matrix and the
    only feasible points sit on the boundary at the ±{1/3,2/3} frame — but this fact is
    equivalent to S₄ > 11/9 off the frame, so it is not a fresh lever.)
  • *Cofactor identity X = S₄/4 − 3/4 is circular* (round-4/round-5 review): deleted.

**Lemma A — now CLOSED (round 6).** The remaining round-5 gap (certify the minimum critical
value is 11/9) is closed this round. Round 5 attempted lex elimination of the S₄ minimal
polynomial on the *full* stationarity ideal (quotient dim 581) and it timed out. Round 6's fix:
**saturate at ∏M_ij first** to isolate the no-zero component, which collapses the quotient
dramatically. On the saturated ideal the grevlex Gröbner basis terminates (size 39,
zero-dimensional), and S₄−11/9 reduces to exactly 0, as does each (9M_ij²−1)(9M_ij²−4). The
zero-entry component is handled separately and *elementarily* (S₄ ≥ 5/4, no criticality). See
**Full proof** below. Double stochasticity alone is insufficient (P = ½I + ¼(J−I) gives
S₄ = 9/8 < 11/9), so orthostochasticity (the full O(3)/no-zero-saturation structure) is
load-bearing — the certificate genuinely uses it.

### Lemma A — COMPLETE PROOF (round 6)

**Statement.** For every M ∈ O(3), m := max_{i,j}|M_{ij}| ≥ 2/3. Equivalently (via Steps 1–3
above), it suffices to prove **S₄ := Σ_{i,j} M_{ij}⁴ ≥ 11/9 for every M ∈ O(3)**, with equality
iff every row-square vector is a permutation of (1/9, 4/9, 4/9). We prove the latter.

Throughout, "stationary point" means a critical point of the smooth function S₄ on the compact
manifold O(3), and N := M∘M∘M denotes the entrywise cube.

**(A0) Existence and reduction to critical points.** S₄ is a polynomial, hence continuous;
O(3) ⊂ ℝ⁹ is compact (closed: it is M with MᵀM=I; bounded: every entry has |M_{ij}|≤1). By the
**extreme-value theorem** (KB: *extreme value theorem / Lagrange multipliers*) S₄ attains its
global minimum at some M* ∈ O(3). O(3) is a closed manifold (no boundary), so M* is a critical
point of the constrained problem. Hence it suffices to show S₄(M*) ≥ 11/9 at every critical
point M*; the global minimum is then ≥ 11/9, and the construction at the ±{1/3,2/3} frame (where
S₄ = 6·(4/9)² + 3·(1/9)² = (96+3)/81 = 11/9) shows it is attained.

**(A1) Stationarity (column form).** The tangent space is T_M O(3) = {MB : B skew}, and
∇S₄ = 4N. Stationarity ⇔ ⟨N, MB⟩ = 0 for all skew B ⇔ MᵀN symmetric, i.e. for each column pair
i<j,
   E_{ij} := Σ_a M_{ai}M_{aj}(M_{aj}² − M_{ai}²) = 0.
This is the standard Lagrange condition (KB: *Lagrange multipliers*), already derived in (R5-1).
We use ONLY these three column equations together with orthonormality.

**(A2) Case split on the number of zero entries of M*** (exhaustive and disjoint: every M
either has a zero entry or not).

---

**Branch Z — M* has at least one zero entry. Claim: S₄(M*) ≥ 5/4 > 11/9.**

This holds for ALL M ∈ O(3) with a zero entry; no criticality is needed.

*WLOG the zero is at (1,1).* Permuting rows and permuting columns of M only permutes its 9
entries, preserves O(3) (a product of permutation matrices, themselves orthogonal, with M is
orthogonal) and leaves S₄ = Σ M_{ij}⁴ unchanged. Row and column permutations together act
transitively on the 9 entry positions (a transposition of rows or columns moves any chosen
position to (1,1) in at most two swaps), so we may assume M*_{11} = 0.

*Parametrization.* Write row 1 = r₁ = (0, a, b) with a²+b² = 1 (unit row). The vectors
e = (1,0,0) and f = (0, b, −a) are orthonormal and both orthogonal to r₁ (e·r₁ = 0,
f·r₁ = ab − ab = 0, e·f = 0, |e|² = 1, |f|² = b²+a² = 1), so {e,f} is an orthonormal basis of
the plane r₁^⊥. Rows 2,3 form an orthonormal basis of r₁^⊥, hence for some θ,
   r₂ = cosθ·e + sinθ·f,   r₃ = −sinθ·e + cosθ·f
(every orthonormal basis of a 2-plane is a planar rotation of a fixed one; the orientation/
ordering choice only swaps r₂,r₃ or flips the sign of θ, neither of which changes S₄). One
checks directly (verified symbolically) that under a²+b²=1, r₂·r₃ = 0 and |r₂|²=|r₃|²=1, so M is
orthogonal.

*The exact S₄ identity.* Expanding Σ_{i,j} M_{ij}⁴ for these rows gives, with
   s := a⁴ + b⁴,   u := cos²θ,   w := u² + (1−u)² = cos⁴θ + sin⁴θ,
the identity
   S₄ = w·(1+s) + s.
(This is an exact polynomial identity in a,b,cosθ,sinθ modulo a²+b²=1; verified symbolically and
to machine precision over random (a,θ).)

*Minimization.* Since a²+b²=1, set t := a²b² ∈ [0, 1/4] (max 1/4 at a²=b²=1/2 by AM-GM). Then
s = a⁴+b⁴ = (a²+b²)² − 2a²b² = 1 − 2t, so 1+s = 2−2t > 0. Also w = u²+(1−u)² is an upward
parabola in u ∈ [0,1] with minimum 1/2 at u = 1/2 and maximum 1 at u ∈ {0,1}; thus w ∈ [1/2, 1].
Because 1+s > 0, S₄ = w(1+s)+s is increasing in w, so
   S₄ ≥ (1/2)(1+s) + s = (1 + 3s)/2 = (1 + 3(1−2t))/2 = 2 − 3t.
Over t ∈ [0, 1/4] this is minimized at t = 1/4, giving **S₄ ≥ 2 − 3/4 = 5/4**. Since
5/4 = 1.25 > 11/9 = 1.2̄, every M in Branch Z has S₄ > 11/9. ∎ (Branch Z)

---

**Branch N0 — M* has no zero entry. Claim: S₄(M*) = 11/9.**

Here M* is a critical point with all 9 entries nonzero, satisfying the three column equations
E_{ij} = 0 of (A1).

*Reduction to SO(3).* If det M* = −1, replace M* by M' = D M* with D = diag(−1,1,1); then
M' ∈ SO(3), each M'_{ij} = ±M*_{ij} (so the same entries are nonzero and the entry-squares and S₄
are unchanged), and M' still satisfies E_{ij}=0, because each E_{ij} is invariant under negating
a whole row of M (each summand M_{ai}M_{aj}(M_{aj}²−M_{ai}²) has the product M_{ai}M_{aj}
unchanged under a row sign-flip — two sign flips — and the squared bracket unchanged; verified
symbolically). So WLOG det M* = +1, i.e. M* ∈ SO(3).

*Quaternion coordinates.* The map q = (a,b,c,d) with a²+b²+c²+d²=1 to
   R(q) = [[a²+b²−c²−d², 2(bc−ad), 2(bd+ac)],
            [2(bc+ad), a²−b²+c²−d², 2(cd−ab)],
            [2(bd−ac), 2(cd+ab), a²−b²−c²+d²]]
is the standard double cover, **surjective onto SO(3)**. Pick q with R(q) = M*. The three column
equations and the unit-norm equation become polynomials in (a,b,c,d); let
   I = ⟨ E₀₁, E₀₂, E₁₂, a²+b²+c²+d²−1 ⟩ ⊂ ℚ[a,b,c,d]
be the stationarity ideal. The point q is a real zero of I with all entries R(q)_{ij} ≠ 0.

*Saturation at the no-zero condition (the certificate).* Let Π := ∏_{i,j} R(q)_{ij}, a
polynomial in (a,b,c,d). Introduce a Rabinowitsch variable y and form
   J = ⟨ E₀₁, E₀₂, E₁₂, a²+b²+c²+d²−1, y·Π − 1 ⟩ ⊂ ℚ[a,b,c,d,y].
A point (q, y) lies in V(J) iff q ∈ V(I) and Π(q) ≠ 0 (with y = 1/Π(q)). A **grevlex Gröbner
basis of J terminates** (sympy 1.14): it has 39 elements and the ideal is **zero-dimensional**.
Reducing modulo this Gröbner basis, we find the exact normal forms
   (9·R(q)_{ij}² − 1)(9·R(q)_{ij}² − 4) ≡ 0  (mod J), for every i,j,    and   S₄ − 11/9 ≡ 0 (mod J).
Both reductions return the zero polynomial — i.e. these polynomials lie in J. (Reproducible
computation; ~90 s. The two factors used in (R5-4)'s "circular" warning do **not** appear:
the certificate is membership of S₄−11/9 in the *saturated stationarity ideal*, an algebraic
consequence of the stationarity equations on the no-zero locus, not an identity rewriting of
the band obstruction.)

*Why this is non-circular and genuinely uses no-zero.* On the *un*saturated ideal I these same
polynomials do NOT reduce to 0 (checked: a 2×2 minor of G := M∘M∘M − ⅓M reduces to 0 modulo J
but to a nonzero normal form modulo I; likewise the entry-square factors cannot vanish at the
zero-entry critical points, where some R(q)_{ij}=0 gives factor value (0−1)(0−4)=4≠0). Thus the
saturation by Π — i.e. the no-zero hypothesis — is essential, confirming the certificate is a
real property of the no-zero stationarity component and not a trivial/circular identity.

*Conclusion of N0.* Since (q,1/Π(q)) ∈ V(J) and S₄−11/9 ∈ J, evaluating gives S₄(M*) − 11/9 = 0.
Hence **S₄(M*) = 11/9.** (Equivalently each entry-square is a root of (9x−1)(9x−4)=0, so
R(q)_{ij}² ∈ {1/9, 4/9}; with row-squares summing to 1 each row is a permutation of
(1/9,4/9,4/9), giving S₄ = 11/9 directly.) ∎ (Branch N0)

*Motivating structure (not load-bearing).* The mechanism behind the certificate: at a no-zero
stationary point Λ := M*ᵀN is symmetric and G := N − ⅓M* satisfies M*ᵀG = Λ − ⅓I symmetric with
**all 2×2 minors of G lying in J** (separately verified: each of the nine 2×2 minors reduces to 0
mod J), so rank(G) ≤ 1 on the no-zero locus. Writing G = α(M*v)vᵀ and reading off entrywise gives
the per-entry cubic x³ − x/3 − (2/27)σ = 0 with σ = ±1, which factors as
(3x−2)(3x+1)²/27 (σ=+1, roots {2/3,−1/3,−1/3}) and (3x−1)²(3x+2)/27 (σ=−1, roots {−2/3,1/3,1/3})
— so x² ∈ {1/9,4/9} in every case (factorizations verified exactly, KB: *minimal-polynomial
reduction*, *Vieta's formulas*). This explains the value 11/9 but is not needed for the proof,
since the entry-square membership is itself a direct ideal member.

---

**Conclusion of Lemma A.** Every M ∈ O(3) lies in exactly one of Branch Z (S₄ ≥ 5/4) or Branch
N0 (S₄ = 11/9) at the global minimizer M*; both give S₄(M*) ≥ 11/9, and 11/9 is attained at the
±{1/3,2/3} frame. Hence S₄ ≥ 11/9 for all M ∈ O(3), and by Steps 1–3 above,
max_{i,j}|M_{ij}| ≥ 2/3. **Lemma A is proved.** Consequently the Part-(1) upper bound a ≤ 3√2/4
is rigorous, and with the construction, **Part (1) = 3√2/4 is fully solved.** ∎

### Lemma B — NEAR-COMPLETE PROOF (round 8); single 2-variable gap (B3-GAP) remains

**Statement.** For every F ∈ O(3), h(F) := max_{s∈{±1}³}‖F s‖₁ ≥ 1+√2, with equality at the
45° axial frame. (Chain (B0)→(B1)→(B2)→(B3-final) below is rigorous; the one open link is
(B3-GAP): the 2-variable stratum minimum equals 4√2.)

Throughout, F ∈ O(3) has rows r₁,r₂,r₃ (orthonormal) and columns c₁,c₂,c₃ (orthonormal). Let

   M := ⎡ 1  1  1 ⎤    (the four leading-+ sign-reps), and   W := M F  ∈ ℝ^{4×3}.
        ⎢ 1  1 −1 ⎥
        ⎢ 1 −1  1 ⎥
        ⎣−1  1  1 ⎦

The rows of W are w₁,w₂,w₃,w₄, where w_k = ε₁r₁+ε₂r₂+ε₃r₃ for the k-th sign pattern
ε∈{(1,1,1),(1,1,−1),(1,−1,1),(−1,1,1)}. The columns of W are V_x,V_y,V_z ∈ ℝ⁴ (the entries of
W in coordinate p∈{x,y,z}). Define the functional

   **T(F) := Σ_{p<q∈{x,y,z}} Σ_{k=1}^4 |W_{kp} W_{kq}|.**

**(B0) Reduction: T(F) ≥ 4√2 ⟹ Lemma B.** (Implication only — the converse is not needed.)

*Per-row identity.* For a vector w=(w_x,w_y,w_z),
   ‖w‖₁² = (|w_x|+|w_y|+|w_z|)² = (w_x²+w_y²+w_z²) + 2(|w_xw_y|+|w_xw_z|+|w_yw_z|)
         = ‖w‖₂² + 2·f(w),   where f(w) := |w_xw_y|+|w_xw_z|+|w_yw_z|.
Summing over the four rows w_k of W,
   Σ_{k=1}^4 ‖w_k‖₁² = Σ_k ‖w_k‖₂² + 2 Σ_k f(w_k) = Σ_k ‖w_k‖₂² + 2T(F),
because Σ_k f(w_k) = Σ_k Σ_{p<q}|W_{kp}W_{kq}| = Σ_{p<q}Σ_k|W_{kp}W_{kq}| = T(F) (just
reordering the finite double sum).

*The ℓ² norms are all √3.* Since w_k = ε₁r₁+ε₂r₂+ε₃r₃ with ε_i=±1 and the r_i orthonormal,
   ‖w_k‖₂² = Σ_{i,j} ε_iε_j ⟨r_i,r_j⟩ = Σ_i ε_i² ‖r_i‖₂² = 1+1+1 = 3
(off-diagonal terms vanish by orthogonality). Hence Σ_k‖w_k‖₂² = 12 and

   **Σ_{k=1}^4 ‖w_k‖₁² = 12 + 2T(F).**     (★)

*Averaging.* The maximum of four nonnegative numbers is at least their average:
   max_k ‖w_k‖₁² ≥ ¼ Σ_k ‖w_k‖₁² = ¼(12+2T) = 3 + T/2.
If T ≥ 4√2 then max_k ‖w_k‖₁² ≥ 3 + 2√2 = 1 + 2√2 + 2 = (1+√2)², so
   max_k ‖w_k‖₁ ≥ 1+√2.

*Identification with h.* For any vector u∈ℝ³, ‖u‖₁ = max_{σ∈{±1}³} σᵀu (choosing σ_i=sign(u_i)).
Hence
   h(F) = max_{s∈{±1}³}‖Fs‖₁ = max_{s∈{±1}³} max_{t∈{±1}³} tᵀ(Fs)
        = max_{t∈{±1}³} max_{s∈{±1}³} (Fᵀt)ᵀ s = max_{t∈{±1}³} ‖Fᵀt‖₁.
Now Fᵀt = t₁r₁+t₂r₂+t₃r₃ ranges, as t runs over {±1}³, over the eight vectors ±r₁±r₂±r₃; since
‖−u‖₁=‖u‖₁ these eight values collapse to the four ‖w_k‖₁ of the leading-+ representatives w_k.
Therefore **h(F) = max_{t∈{±1}³} ‖Fᵀt‖₁ = max_k ‖w_k‖₁**, and combined with max_k‖w_k‖₁ ≥ 1+√2 above,
**T ≥ 4√2 ⟹ h(F) ≥ 1+√2 = Lemma B.** ∎ (B0)

So it suffices to prove **T(F) ≥ 4√2 for every F ∈ O(3)**, with equality at the 45° axial frame.
We do this by a smoothing argument.

**(B1) The smoothing core.** Fix two columns of F, say the pair (x,y), and an angle φ. Let
R(φ) ∈ SO(3) be the planar rotation acting on coordinates (x,y) and fixing z:
its columns are (c_x cosφ + c_y sinφ, −c_x sinφ + c_y cosφ, c_z) — i.e. F·R(φ) has the same
z-column and rotates the (x,y) columns. Since R(φ) is orthogonal, F·R(φ) ∈ O(3), so this is an
admissible deformation. Put

   g(φ) := T(F·R(φ)).

Write a_k := V_{x,k}, b_k := V_{y,k}, c_k := V_{z,k} (the k-th entries of the three columns of W).
Under the rotation the columns of W = M·(F R(φ)) = (MF)R(φ) = W·R(φ) transform the same way (right
multiplication commutes with left multiplication by M):
   V_x'(φ)_k = a_k cosφ − b_k sinφ,   V_y'(φ)_k = a_k sinφ + b_k cosφ,   V_z' = c_k (unchanged).
Then g(φ) = Σ_k [ |V_x'_k V_y'_k| + |V_x'_k V_z'_k| + |V_y'_k V_z'_k| ] is a sum of 4·3 = 12
terms. We classify them:

 • **xz-terms** |V_x'_k V_z'_k| = |c_k|·|a_k cosφ − b_k sinφ|. The factor |c_k| is a constant;
   a_k cosφ − b_k sinφ = ρ_k cos(φ+δ_k) is a single sinusoid of frequency 1 (ρ_k=√(a_k²+b_k²)).
 • **yz-terms** |V_y'_k V_z'_k| = |c_k|·|a_k sinφ + b_k cosφ| = |c_k|·|ρ_k sin(φ+δ_k)|, again a
   single sinusoid of frequency 1.
 • **xy-terms** |V_x'_k V_y'_k| = |(a_k cosφ − b_k sinφ)(a_k sinφ + b_k cosφ)|. Expanding the
   product: (a_k cosφ − b_k sinφ)(a_k sinφ + b_k cosφ) = ½(a_k²−b_k²)sin2φ + a_k b_k cos2φ,
   a single sinusoid of frequency 2.

Thus **each of the 12 terms is |single sinusoid|** (frequency 1 or 2 in φ). We use:

*Piecewise concavity (KB: piecewise-concavity smoothing).* A function φ ↦ |A cos(νφ)+B sin(νφ)|
with (A,B)≠(0,0) has argument A cos νφ + B sin νφ = ρ cos(νφ+δ), whose zeros are isolated
(finitely many on [0,2π): ≤ 2ν of them). Between two consecutive zeros the argument has a fixed
sign, so the term equals ±(A cos νφ+B sin νφ), which has second derivative −ν²·(±(A cos νφ+B
sin νφ)) = −ν²·(that term) ≤ 0 there — i.e. it is **concave on each maximal sign-interval**. If
(A,B)=(0,0) the term is identically 0, hence constant, hence (trivially) concave on every
interval. Collect all the zeros of all 12 (non-degenerate) arguments: a finite set
0=φ₀<φ₁<…<φ_N=2π partitioning the circle. On each subinterval [φ_{m},φ_{m+1}] every term is
concave, so their finite sum g is concave there. Therefore **g is piecewise concave**, with
breakpoints among the φ_m.

*Min at a breakpoint = a zero entry.* A concave function on a closed interval attains its minimum
at an endpoint of the interval. Hence on each subinterval min g is at a breakpoint, so the global
minimum of the continuous, 2π-periodic g over the circle is attained at some breakpoint φ*. At a
breakpoint, some argument vanishes: either an xz/yz argument a_k cosφ*−b_k sinφ* = 0 (then
V_x'(φ*)_k = 0) or a_k sinφ*+b_k cosφ* = 0 (then V_y'(φ*)_k = 0), or an xy argument
½(a_k²−b_k²)sin2φ*+a_kb_k cos2φ* = 0; but this last quantity equals V_x'(φ*)_k·V_y'(φ*)_k, and a
product of reals vanishes iff a factor does, so again **V_x'(φ*)_k = 0 or V_y'(φ*)_k = 0.** In
every case, at the φ-minimizer of g the rotated matrix W·R(φ*) has a **zero entry**. (Degenerate
case: if some argument is ≡0, that entry is already 0 for all φ, a zero entry trivially; the
piecewise-concavity is unaffected.)

**Consequence of (B1) for the global minimizer.** T is continuous (a finite sum of absolute
values of polynomials in the entries of F) on the compact manifold O(3) (closed and bounded in
ℝ⁹), so by the **extreme value theorem** (KB: extreme value theorem) it attains a global minimum
T_min at some F⁰. Apply (B1) to the (x,y) column pair of F⁰: g(φ) = T(F⁰R(φ)) has g(0) = T_min,
and (B1) gives a breakpoint φ* with g(φ*) ≤ g(0) = T_min; but T_min is the global minimum, so
g(φ*) = T_min and F⁰R(φ*) is again a global minimizer — now with a **zero entry** in W. Replacing
F⁰ by F⁰R(φ*) and possibly permuting/sign-flipping rows and columns of F (which permute the
entries of W and preserve T, see (B2) below), we obtain a global minimizer F* with **W_{1,1}=0**,
i.e. the x-column entry of the first sign-rep is zero.

**(B2) Symmetries of T (used only to relocate a zero entry).** T = Σ_k f(w_k) is invariant under:
 (i) **permuting the three columns of F** — this permutes the coordinates p∈{x,y,z}, hence permutes
   the three inner sums T_pq among themselves, leaving T unchanged; correspondingly it permutes the
   three columns of W.
 (ii) **sign-flipping a column of F** — flips the sign of one V_p, which leaves every |W_{kp}W_{kq}|
   unchanged (absolute values), so T is unchanged; this negates one column of W.
 (iii) **permuting or sign-flipping the rows r_i of F** — such a signed permutation σ permutes the
   eight vectors ±r₁±r₂±r₃ among themselves and hence permutes the four leading-+ representatives
   w_k (possibly composing with an overall sign, which leaves f(w_k)=f(−w_k) and ‖·‖₁ unchanged);
   so {f(w_k)} is permuted and T = Σ_k f(w_k) is unchanged; this permutes the rows of W.
Operations (i)+(iii) generate row and column permutations of the 4×3 array W, which act
transitively on... — we use only the following: column permutations (i) move any chosen column to
the x-column, and row permutations (iii) move any chosen row to row 1. So a single zero entry of W
can be moved to position (1,1). (This is the exact analogue of the Branch-Z transitivity argument
in Lemma A above, applied to the 4×3 array W instead of the 3×3 array M.)

**(B3) From one zero entry to a full axial column (second smoothing), and the axial floor.**

By (B1)+(B2), WLOG the global minimizer F* has W_{1,1}=0, i.e. **V_x has a zero first entry**.

*Geometric meaning of W_{1,1}=0.* W_{1,1} is the x-entry of w₁ = r₁+r₂+r₃, which equals
(r₁+r₂+r₃)·e_x = (column c_x)·(1,1,1) — indeed W = MF, so W_{1,1} = (row 1 of M)·(column 1 of F)
= (1,1,1)·c_x. Thus **W_{1,1}=0 ⟺ c_x ⊥ (1,1,1).** (Verified numerically.)

*The (y,z)-rotation keeps the zero and re-enables (B1).* Consider the family F*·R(ψ) where R(ψ)
rotates the (y,z) columns and fixes the x-column c_x. This is exactly the column-pair rotation of
(B1) applied to the pair (y,z). Crucially it does **not** change the x-column of F*, hence does not
change V_x = W·(·) in its x-coordinate: W' = (MF*)R(ψ) has the same x-column V_x as W (right
multiplication by R(ψ) only mixes the y,z columns). In particular **W'_{1,1}=0 for all ψ**
(verified numerically). So the deformation stays in the stratum {W_{1,1}=0}.

Now run (B1) on this (y,z) pair at the global minimizer F*: g̃(ψ):=T(F*R(ψ)) is piecewise concave
(same proof — its 12 terms are |single sinusoid| in ψ), g̃(0)=T_min, so its minimum is attained at
a breakpoint ψ* with g̃(ψ*)=T_min, where W'(ψ*) acquires a zero entry **in the y- or z-column**,
while retaining W_{1,1}=0 in the x-column. Replacing F* by F*R(ψ*), we now have a global minimizer
with **at least two zero entries of W, including one in the x-column and one in the (y,z)-columns.**

*Status of the iteration to an axial column — HONEST GAP.* The outline proposed iterating the
controlled smoothing (alternating column-pair rotations) to drive the global minimizer to a frame
with a **full axial column** (a column of F equal to ±e_i), where the elementary floor (B3-final)
below closes the bound. **This round we found this iteration route NOT rigorous as stated, for a
concrete reason:** T has a large degenerate family of breakpoint configurations that are local
minima of T but are NEITHER global NOR axial. A numerical sweep (3000 random starts) found **1901
distinct non-axial local minima** of T over O(3), with values densely filling [5.657, 6.16] just
above the global value 4√2 ≈ 5.6569. Consequently, alternating the column-pair smoothing can
**STALL** at such a non-axial breakpoint: a frame where, in each column pair, φ=0 is already a
local min of g(φ) (no fresh zero is created at equal or lower T), yet no column is axial. The
"maximize the number of zero entries among global minimizers, then a further B1 step strictly
increases the count" argument fails because the further B1 step, while it lands at a breakpoint
with T no larger than the *current* value, does not in general reach the *global* value — the
breakpoint it reaches is a higher-T frame. The mechanism is valid only AT a global minimizer, and a
global minimizer need not be reachable from an arbitrary frame by monotone smoothing. So we do NOT
have a rigorous reduction "global minimizer ⟹ axial column." (Two further pitfalls confirmed: a
column of W with two zeros does NOT force the F-column axial — e.g. W-zeros in rows {1,2} of the
x-column force c_x ∥ (1,−1,0)/√2, NON-axial; and at the true global minimizer the axial column is a
DIFFERENT column from the one carrying the two W-zeros.)

What IS rigorous from (B1)+(B2): a global minimizer F* of T may be taken with **W_{1,1}=0**, i.e.
c_x ⊥ (1,1,1) (the zero-entry stratum). What remains to prove Lemma B is therefore exactly:

  **(B3-GAP, OPEN).** min over the 2-dimensional zero-entry stratum {F∈O(3) : c_x ⊥ (1,1,1)} of
  T(F) equals 4√2.

Numerically this is true to 13 digits (stratum min = 5.656854249492384, attained at the axial 45°
frame where c_z = ±e_z while c_x = (1,−1,0)/√2 carries the two x-column W-zeros), but a rigorous
2-variable proof was not completed: the explicit T(t,ψ) on this stratum has ≈230 sign-sectors (per
the outline review's count), and no clean lower-bound inequality (via (★), the explicit x-column
V_x = (0,−2γ,−2β,−2α), and the clean basis where row 1 gives ‖w₁‖₁ = √3(|cosψ|+|sinψ|)) was found
in budget. **This is the one remaining gap; Lemma B and hence Part (2)'s upper bound are not yet
closed.** The pieces below (the axial floor (B3-final)) are the rigorous endpoint that the stratum
minimum must match.

**(B3-final) The axial floor (RIGOROUS).** If some column of F equals a coordinate vector (say
c_z = ±e_z, so
the other two columns are an orthonormal basis of the (x,y)-plane, a rotation by θ), then
   **T(F) = 8m² + 8m − 4,   where m := max(|cosθ|, |sinθ|) ∈ [1/√2, 1],**
hence T(F) ≥ 8·½ + 8·(1/√2) − 4 = 4√2, with equality iff m = 1/√2 (θ ≡ 45° mod 90°).

*Proof of (B3-final).* With c_z = e_z the rows are r₁=(cosθ,−sinθ,0), r₂=(sinθ,cosθ,0), r₃=(0,0,1)
(any sign choice of e_z and ordering only permutes/sign-flips, leaving T fixed by (B2)). Writing
c=cosθ, s=sinθ, the four rows of W = MF are
   w₁ = (c+s, c−s, 1),  w₂ = (c+s, c−s, −1),  w₃ = (c−s, −(c+s), 1),  w₄ = (s−c, c+s, 1)
(direct computation; verified symbolically). For each row, the third coordinate is ±1, so
   f(w_k) = |W_{k,x}W_{k,y}| + |W_{k,x}|·1 + |W_{k,y}|·1.
In every row the unordered pair {|W_{k,x}|,|W_{k,y}|} equals {|c+s|, |c−s|} (check: w₁,w₂ give
{|c+s|,|c−s|}; w₃ gives {|c−s|,|c+s|}; w₄ gives {|s−c|,|c+s|}={|c−s|,|c+s|}). Hence for all k,
   |W_{k,x}W_{k,y}| = |c+s|·|c−s| = |c²−s²|,   |W_{k,x}|+|W_{k,y}| = |c+s|+|c−s|,
so f(w_k) = |c²−s²| + |c+s| + |c−s| is the SAME for all four rows, and
   T = Σ_k f(w_k) = 4(|c²−s²| + |c+s| + |c−s|).
Now use the identities |c+s|+|c−s| = 2max(|c|,|s|) (standard: |x+y|+|x−y|=2max(|x|,|y|)) and
|c²−s²| = ||c|²−|s|²| = (max(|c|,|s|))² − (min(|c|,|s|))² = 2m²−1 (since m²+min² = c²+s² = 1, so
min² = 1−m²). Therefore
   T = 4( (2m²−1) + 2m ) = 8m² + 8m − 4.
As a function of m∈[1/√2,1] this has derivative 16m+8 > 0, so it is increasing; its minimum over
the range is at m = 1/√2:
   T_min,axial = 8·(1/2) + 8·(1/√2) − 4 = 4 + 8/√2 − 4 = 8/√2 = 4√2.
Equality holds iff m = 1/√2, i.e. |cosθ|=|sinθ|=1/√2, i.e. θ ∈ {45°,135°,225°,315°} — the 45°
axial frame. (Both the closed form and the minimum 4√2 verified symbolically and numerically.) ∎
(B3-final)

**Conclusion of Lemma B — PARTIAL (one gap open).** The rigorous chain is: (B0) T(F) ≥ 4√2 ⟹
h(F) ≥ 1+√2 = Lemma B; (B1)+(B2) a global minimizer of T over O(3) may be taken in the zero-entry
stratum {c_x ⊥ (1,1,1)}; (B3-final) on the axial family T = 8m²+8m−4 ≥ 4√2 with equality at the 45°
frame, matching the numerical global minimum. The **single missing step** is (B3-GAP): that the
minimum of T over the 2-D zero-entry stratum equals the axial value 4√2 (true numerically to 13
digits but not yet proven, due to ≈230 sign-sectors and the failure of the iterate-to-axial
route). Until (B3-GAP) is closed, Lemma B — and hence the Part-(2) upper bound — remains open.
**Lemma B is NOT yet proved.**

## Full proof
**Not complete (Status: partial)** — only because **Part (2) (Lemma B) is a blocking open
crux** (the "minimizer is axial" reduction; old rotation mechanism proved false). **Part (1) is
now FULLY PROVED:** the construction (a ≥ 3√2/4), the centering reduction, the reduction to
Lemma A, and **Lemma A itself** (see the complete proof in *Lemma A — COMPLETE PROOF (round 6)*
above) are all rigorous. Lemma A's proof = extreme-value existence + column-stationarity + a
two-branch case split: Branch Z (≥1 zero entry) gives S₄ ≥ 5/4 by an elementary 2-variable
minimization of S₄ = w(1+s)+s; Branch N0 (no zero entry) gives S₄ = 11/9 by a terminating,
reproducible symbolic certificate — saturating the stationarity ideal at ∏M_ij and reducing
S₄−11/9 (and each (9M_ij²−1)(9M_ij²−4)) to exactly 0 modulo the resulting zero-dimensional
grevlex Gröbner basis. Non-circularity is confirmed (these polynomials do not vanish on the
unsaturated ideal; the round-5 circular certificate g ≡ 99−81·S₄ is not used). **Hence
max_{i,j}|M_{ij}| ≥ 2/3 for all M ∈ O(3), and Part (1) = 3√2/4.**

The ONLY remaining gap for the overall problem is **Part (2) / Lemma B** (every F ∈ O(3) has
max_{s∈{±1}³}‖Fs‖₁ ≥ 1+√2). Round 8 reduced it to a single concrete sub-step (see *Lemma B —
COMPLETE PROOF (round 8)* — which is in fact a near-complete proof): the rigorous chain is
(B0) **T(F) ≥ 4√2 ⟹ Lemma B**, (B1)+(B2) **a global minimizer of T may be taken with c_x ⊥ (1,1,1)**
(zero-entry stratum), and (B3-final) the **axial floor T = 8m²+8m−4 ≥ 4√2** (equality at 45°). The
one missing link is **(B3-GAP): min of T over the 2-D zero-entry stratum = 4√2** — numerically exact
to 13 digits (attained at the axial 45° frame) but not yet proven, because (i) the explicit T(t,ψ)
on the stratum splits into ≈230 sign-sectors and (ii) the outline's "iterate smoothing to an axial
column" route was shown NON-rigorous this round (T has ≈1901 non-axial local-min breakpoints with
values densely above 4√2, so the smoothing iteration stalls). Both answers, 3√2/4 and 2−√2, are
stated and the constructions attaining them touch the boundary at all vertices. Because Part (2) is
unproven, the overall Status remains **partial**; a complete `## Full proof` of the whole problem is
therefore not yet presentable, but Part (1) is complete and rigorous, and Lemma B is reduced to the
single 2-variable stratum inequality (B3-GAP).
