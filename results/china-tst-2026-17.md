## Status
partial

> **Round-5 summary.** Part (1) = 3√2/4 and Part (2) = 2−√2 are the correct answers
> (constructions rigorous, both centering reductions rigorous). The two upper bounds
> rest on two O(3) extremal lemmas. **Lemma A (S₄ ≥ 11/9) is NOT yet fully closed**:
> the reduction to S₄ ≥ 11/9 is rigorous and complete; the critical set of S₄ on O(3)
> is now *rigorously certified finite* (a grevlex Gröbner basis of the stationarity
> ideal in unit-quaternion coordinates terminated and is zero-dimensional), and the
> four critical values {11/9, 5/4, 2, 3} are pinned numerically — but a complete
> symbolic/hand certification that the minimum critical value is exactly 11/9 was not
> achieved this round (the lex elimination for the minimal polynomial of S₄ did not
> terminate in budget, and no slick band/SOS shortcut exists — every such attempt is
> circular: the natural certificate g(M)=Σ(9M²−1)(4−9M²) equals 99−81·S₄ identically).
> **Lemma B (Part 2 upper bound) is a BLOCKING OPEN CRUX** (see below). Overall:
> **partial**, Part 1 reduced to a single certified-finite KKT value-floor, Part 2 open.

## Problem
(1) A regular octahedron lies inside (including the boundary) a unit cube. Find the maximum possible edge length of the octahedron.

(2) A cube lies inside (including the boundary) a regular octahedron of edge length 1. Find the maximum possible edge length of the cube.

## Answers (conjectured, verified numerically; constructions rigorous, upper bounds reduced to two O(3) extremal lemmas)
- Part (1): **3√2/4**
- Part (2): **2−√2**

## Approaches tried

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

**GAP (Lemma A) — honest, localized.** What is **rigorous**: (i) the reduction Lemma A ⟸
[S₄ ≥ 11/9 with the band, Steps 1–3]; (ii) smooth stationarity (R5-1); (iii) **finiteness of
the critical set** (R5-2, a terminating zero-dimensional Gröbner basis). What is **not yet
rigorous**: the certification that the *minimum critical value equals 11/9*. The remaining
honest task is to compute the minimal polynomial of S₄ over the (certified zero-dimensional)
stationarity ideal and read off its roots {11/9, 5/4, 2, 3} — OR to carry out by hand the
finite case split (no-zero / one-zero / ≥four-zero branches of the column-stationarity
equations) that the numerics in (R5-3) display. The lex/elimination Gröbner for the S₄
minimal polynomial **did not terminate within this round's compute budget** (degree-8
equations in 4 variables; quotient dimension 581), and a clean hand classification of the
no-zero branch was not completed. Per the rigor rules this is recorded as a genuine open step,
not papered over. It is, however, now reduced to a *finite, certified-zero-dimensional*
question — strictly sharper than the round-4 state. Double stochasticity alone is insufficient
(P = ½I + ¼(J−I) gives S₄ = 9/8 < 11/9), so orthostochasticity (worked in via O(3)) is
load-bearing.

### Lemma B — reduction in place, extremal step open

**Claim of Lemma B.** For every F ∈ O(3), max_{s∈{±1}³}‖F s‖₁ ≥ 1+√2.

**Reformulation (rigorous).** ‖F s‖₁ = Σ_i|(F s)_i| = max_{t∈{±1}³} t^T F s, so
h(F) := max_s ‖F s‖₁ = max_{s,t ∈ {±1}³} t^T F s, a symmetric "cut-norm-like" functional.

**The clean 1-parameter family (rigorous).** If a column of F equals a standard basis vector — WLOG f₃ = e_z, with f₁,f₂ a rotation by θ in the xy-plane — then for s = (s₁,s₂,s₃):
‖F s‖₁ = |cos θ·s₁ − sin θ·s₂| + |sin θ·s₁ + cos θ·s₂| + |s₃|.
The third term is 1. Taking s₃ free and optimizing the planar part over s₁,s₂ ∈ {±1}: the planar maximum equals √2·(|cos θ| + |sin θ|)/... — concretely, choosing (s₁,s₂)=(1,1) gives |cosθ−sinθ|+|sinθ+cosθ|, and (s₁,s₂)=(1,−1) gives |cosθ+sinθ|+|sinθ−cosθ|; the larger of these is |cosθ|+|sinθ| + ||cosθ|−|sinθ|| = 2·max(|cosθ|,|sinθ|). So h on this family is 1 + 2·max(|cosθ|,|sinθ|), minimized over θ at |cosθ|=|sinθ|=1/√2 (θ=45°), value 1 + 2·(1/√2) = 1 + √2. [This sub-step is rigorous and gives equality at the 45° frame; all 8 sign vectors then attain 1+√2.]

**GAP (Lemma B) — BLOCKING OPEN CRUX.** The reduction "a minimizer of h over O(3) has a
column equal to a coordinate axis" is NOT proven. Numerically every minimizer is axial
(column 3 = e_z) and h = 1+√2, but the perturbation/exchange argument that forces axiality at
the minimum is the crux, and it was **provably shown false in its old form** (outline review
round 5): the rotation-monotonicity mechanism h(RF) ≤ h(F) with R a coordinate-plane rotation
and a termwise ℓ¹ non-increase is false — a planar π/4 rotation sends (1,0) to ℓ¹ = √2 > 1,
and the same-s comparison fails ~58% of the time. Do **not** revive that mechanism. The global
inequality h(F) ≥ 1+√2 is numerically true (0 violations / 500k) but has no termwise or per-s
witness; pure averaging gives only 3√2/2 ≈ 2.121 < 1+√2 ≈ 2.414.

**New reformulation handed to the next round (all verified this round).**
  • h(F) = max_{s,t∈{±1}³} tᵀF s = max_{t∈{±1}³} ‖Fᵀt‖₁ (column form).
  • With r₁,r₂,r₃ the rows of F (orthonormal), h(F) = max over the four sign-reps
    t ∈ {(1,1,1),(1,1,−1),(1,−1,1),(−1,1,1)} of ‖±r₁ ± r₂ ± r₃‖₁. Set
    w_k = ±r₁ ± r₂ ± r₃ (k = 1..4, the four reps). Then:
      – ‖w_k‖₂ = √3 for each k (since the rᵢ are orthonormal);
      – Σ_k w_k w_kᵀ = 4I (the four w_k form a **tight frame** with frame constant 4: the
        cross terms ±r_i r_jᵀ cancel over the four sign patterns);
      – ⟨w_i, w_j⟩ = ±1 for i ≠ j (each off-diagonal Gram entry is ±r₁·r₁ ± r₂·r₂ ± r₃·r₃
        with exactly one sign flipped, = ±1).
  • **The tight-frame constraint ALONE is too weak**: four unit-√3 vectors with Σ w_k w_kᵀ =
    4I can have max_k ‖w_k‖₁ ≈ 1.985 < 1+√2 (found by epigraph SLSQP). Therefore the extra
    **±1-Gram condition ⟨w_i,w_j⟩ = ±1** (= orthonormality of the rows, not mere frame
    tightness) is **load-bearing** and any correct proof MUST use it. Target for next round:
    a finite extremal argument on four vectors with ‖w_k‖₂ = √3, Σ w_k w_kᵀ = 4I, and
    prescribed ±1 Gram off-diagonals, showing max_k ‖w_k‖₁ ≥ 1+√2 — a Gram-matrix
    feasibility problem stripped of the O(3) manifold. (Alternatively a non-smooth
    subgradient/KKT analysis of h on O(3): at the 45° axial minimizer all 8 sign vectors are
    active; bound the number of active sign vectors at a minimizer, deduce an axial column,
    then invoke the axial floor above. Step (b) — "deduce axial column" — is the crux.)

## Full proof
**Not complete (Status: partial).** The overall problem is NOT solved because **Part (2)
(Lemma B) is a blocking open crux** (the "minimizer is axial" reduction; old rotation
mechanism proved false). **Part (1) is reduced to a single finite, certified question**: the
two constructions, both centering reductions, and both reductions to the O(3) lemmas are
rigorous; for Lemma A the chain Lemma A ⟸ [S₄ ≥ 11/9 in the band] (Steps 1–3) is rigorous,
smooth KKT stationarity is rigorous, and **the critical set of S₄ on O(3) is rigorously
certified finite** (a terminating zero-dimensional grevlex Gröbner basis of the stationarity
ideal). The one remaining Part-(1) gap is the certification that the minimum of the finite
critical-value set equals 11/9 — numerically the set is {11/9, 5/4, 2, 3} (and the
band-obstruction shortcut g(M) ≡ 99−81 S₄ is circular, so no shortcut exists), but the
symbolic minimal-polynomial computation did not terminate in budget and a clean hand
case-split of the no-zero branch was not completed. The Part-(2) gap is Lemma B in full, now
reformulated as a four-vector tight-frame-plus-±1-Gram feasibility problem for the next round.
Both conjectured answers, 3√2/4 and 2−√2, are stated and the constructions attaining them are
verified to touch the boundary at all vertices.
