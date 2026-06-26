## Status
solved

## Approaches tried
- Complex coordinates anchored at the midpoint M (Thales gives |MA|=|MB|=|MC|), explicit
  construction of the fixed point K = second intersection of line BC with Ω, and the load-bearing
  identity "R := (P−Q)(P−C)/[(K−Q)(K−C)] ∈ ℝ" proved by a finite algebraic reduction (R = R̄)
  using only |C|=1 and the Ω-constraint, plus a positivity lemma (Re R > 0) via continuity on the
  connected admissible arc — **worked**, complete rigorous proof below.

## Current best
A complete proof. The fixed point is **K = the second intersection of line BC with Ω**. In the
normalization M=0, A=−1, B=1, |C|=1, Ω = circle of center ih and radius √(1+h²) (h>0), it has the
closed form K = C + ih(C+1). The key reductions are:
- Q = C + P − 1/P̄ (forced by both defining conditions; the second condition has a *unique* real
  solution because cos∠QPM is strictly monotone in the free parameter).
- The four factors of R conjugate so that **R and R̄ reduce to the identical closed form**
  R = R̄ = (C−P)·N / (h²(C+1)·D), with N = −C(Ph+i)+iP+h and D = CPh+iC+iP²+Ph, hence R∈ℝ.
- The admissible P form a *single arc* (proved: the two boundary points of the angle-condition arc
  have Im-coordinates with product d²−1<0, so exactly one lies on the upper arc); R is continuous and
  non-vanishing there (Q is strictly inside Ω, so Q≠K), and R→tan²(γ/2)/h²>0 at the endpoint B.

## Full proof

Throughout, for a complex number z we write z̄ for its conjugate and |z|² = z·z̄.

### 0. Setup and normalization

Since ∠ACB = 90°, by the **converse of Thales' theorem** (a point seeing a segment at a right
angle lies on the circle with that segment as diameter; see knowledge_base.md "Synthetic toolkit"),
C lies on the circle with diameter AB. Its center is the midpoint M of AB, so
|MC| = |MA| = |MB| = ½|AB|.

Introduce complex coordinates with M at the origin and the common length ½|AB| as unit, the real
axis along AB:
$$ M = 0,\qquad A = -1,\qquad B = +1,\qquad |C| = 1 .$$
Write C = c + di with c² + d² = 1.

**Sign of c.** AC < BC means |C − A| < |C − B|, i.e. |C+1|² < |C−1|². Expanding,
(c+1)² + d² < (c−1)² + d², which gives 4c < 0, so
$$ c = \operatorname{Re}(C) < 0. \tag{0.1}$$

**The circle Ω.** Since A = −1 and B = +1 lie on Ω, the center of Ω lies on the perpendicular
bisector of AB, which is the imaginary axis; write the center as ih with h ∈ ℝ. The radius is then
|A − ih| = √(1+h²). The "major arc AB" is the longer of the two arcs cut off by the chord AB; with
the standard orientation we take it to be the arc lying in the upper half-plane, which forces the
center ih to be on that same side, i.e.
$$ h > 0. \tag{0.2}$$
Membership P ∈ Ω is |P − ih|² = 1 + h², i.e. (writing P·P̄ = |P|²)
$$ |P|^2 = 1 + 2h\,\operatorname{Im}(P), \qquad\text{equivalently}\qquad P\bar P = 1 - i h (P - \bar P), \tag{$\Omega$}$$
the last form using Im(P) = (P − P̄)/(2i). Equation (Ω) is the **Ω-constraint** and is used repeatedly.

**Sign of d.** C is *inside* Ω, so |C − ih|² < 1 + h². Since |C| = 1,
|C − ih|² = |C|² − 2h·Im(C) + h² = 1 − 2h·d + h², so 1 − 2hd + h² < 1 + h², i.e. −2hd < 0. With
h > 0 this gives
$$ d = \operatorname{Im}(C) > 0. \tag{0.3}$$

Finally write C = e^{iγ}; by (0.1) and (0.3), γ ∈ (π/2, π).

We will repeatedly use that **|C| = 1 means C̄ = 1/C**. Throughout, "P admissible" means: P ∈ Ω,
P on the major arc (Im P > 0), and ∠CMP > 90°.

### 1. The point Q is forced, and Q = C + P − 1/P̄

**Lemma A.** *For every admissible P, the two defining conditions (CQ ∥ PM and ∠QPM = ∠MCP)
determine Q uniquely, and*
$$ Q = C + P - \tfrac{1}{\bar P} . $$

*Proof.* Since M = 0, the segment PM points in direction P. The condition CQ ∥ PM says
Q − C is a real multiple of P:
$$ Q = C + \lambda P, \qquad \lambda \in \mathbb{R}. \tag{1.1}$$
It remains to find λ from ∠QPM = ∠MCP.

Unsigned angles are invariant under rotation about the relevant vertices, and the two conditions
(1.1) and ∠QPM = ∠MCP are invariant under a global rotation about M = 0 (which multiplies all of
A,B,C,P,Q by a unit modulus constant). We may therefore rotate so that **P is a positive real
number p > 0**; here p = |P| > 0. (We restore the general position at the end via (1.1), which is
rotation-equivariant.) Then M = 0, P = p, and C = cg + i·sg with cg² + sg² = 1, sg ≠ 0 (because
C is not real: |C| = 1 and a real C ∈ {±1} = {A,B} is impossible as C is strictly inside Ω). By
(1.1), Q = C + λp, and the free real variable is t := (1−λ)p.

Compute the two angles via cosines (recall cos∠UVW = Re[(U−V)\overline{(W−V)}]/(|U−V||W−V|)):

- At P: rays P→Q = Q − P = C − (1−λ)p = C − t and P→M = −p. Hence
  $$ \cos\angle QPM = \frac{\operatorname{Re}\big[(C-t)\overline{(-p)}\big]}{|C-t|\,p}
     = \frac{-p\,\operatorname{Re}(C-t)}{p\,|C-t|} = \frac{t - cg}{\sqrt{(t-cg)^2 + sg^2}}
     = \frac{t-cg}{\sqrt{t^2 - 2cg\,t + 1}}, $$
  using |C| = 1 (so cg² + sg² = 1).
- At C: rays C→M = −C and C→P = p − C. Hence
  $$ \cos\angle MCP = \frac{\operatorname{Re}\big[(-C)\overline{(p-C)}\big]}{|C|\,|p-C|}. $$
  With C = cg + i·sg, Re[(−C)(p−C̄)] = Re[(−cg − i·sg)((p − cg) + i·sg)] = −cg(p−cg) + sg²
  = −cg·p + (cg² + sg²) = 1 − cg·p. Since |C| = 1 and |p − C| = √(p² − 2cg·p + 1),
  $$ \cos\angle MCP = \frac{1 - cg\,p}{\sqrt{p^2 - 2cg\,p + 1}}. $$

Define g(t) := (t − cg)/√(t² − 2cg·t + 1). Then cos∠QPM = g(t), and a direct computation gives
$$ g\!\left(\tfrac1p\right) = \frac{\tfrac1p - cg}{\sqrt{\tfrac1{p^2} - \tfrac{2cg}{p} + 1}}
= \frac{(1 - cg\,p)/p}{\sqrt{1 - 2cg\,p + p^2}/p} = \frac{1 - cg\,p}{\sqrt{p^2 - 2cg\,p + 1}} = \cos\angle MCP, $$
(valid because p > 0). Thus the angle equation ∠QPM = ∠MCP is exactly g(t) = g(1/p).

The function g is **strictly increasing** on ℝ: differentiating,
$$ g'(t) = \frac{1 - cg^2}{(t^2 - 2cg\,t + 1)^{3/2}} = \frac{sg^2}{(t^2 - 2cg\,t + 1)^{3/2}} > 0, $$
since sg ≠ 0 and t² − 2cg·t + 1 = (t − cg)² + sg² > 0. Both ∠QPM and ∠MCP lie in (0, π) (they are
genuine angles of non-degenerate triangles MPC and QPM; non-degeneracy because M, C, P are not
collinear — C is not real while M, P are — and Q ≠ P, since Q = P would force C = (1−λ)P real),
and cosine is injective on (0, π); hence the angle equation is equivalent to the cosine equation,
which by strict monotonicity of g has the **unique** solution t = 1/p. Therefore
(1 − λ)p = 1/p, i.e. λ = 1 − 1/p² = 1 − 1/|P|².

Substituting back into (1.1) and undoing the rotation (everything is rotation-equivariant),
$$ Q = C + \Big(1 - \tfrac{1}{|P|^2}\Big) P = C + P - \frac{P}{P\bar P} = C + P - \frac{1}{\bar P}, $$
where we used |P|² = P·P̄ ≠ 0 (P ≠ M). This is the claimed formula, and λ is uniquely determined,
so Q is unique. ∎

For admissible P we also note that |P|² = 1 + 2h·Im(P) > 1 by (Ω), (0.2) and Im(P) > 0; hence
λ = 1 − 1/|P|² > 0. (This consistency is recorded for §5; the ∠CMP > 90° hypothesis is used there.)

### 2. The fixed point K = (line BC) ∩ Ω (second point), and K = C + ih(C+1)

**Lemma B.** *Line BC meets Ω at B and at a second point K, given by*
$$ K = C + i h (C + 1). $$
*K depends only on C and Ω (i.e. on C and h), not on P; it is the fixed point of the problem.*

*Proof.* By the **power of a point** (knowledge_base.md "Synthetic toolkit"), for the interior point
C the power with respect to Ω is
$$ \operatorname{pow}(C,\Omega) = |C - ih|^2 - (1+h^2) = |C|^2 - 2h\,\operatorname{Im}(C) - 1 = 1 - 2hd - 1 = -2dh, $$
using |C| = 1. Any line through C meeting Ω at two points X, Y satisfies
\overrightarrow{CX}·\overrightarrow{CY} = pow(C,Ω) (signed product of directed lengths). For line BC,
parametrize the second intersection as K = C + λ(B − C) with λ ∈ ℝ; then the signed product is
λ|B − C|², so λ = pow(C,Ω)/|B − C|².

We verify directly that K = C + ih(C+1) is this point. Writing C = c + di (c²+d²=1):

(i) **K ∈ Ω.** A direct expansion (using c²+d²=1) gives
Re(K)² + (Im(K) − h)² − (1+h²) = 0, i.e. |K − ih|² = 1 + h². [Verified as an exact polynomial
identity: substituting c² = 1 − d² makes the expression vanish identically.]

(ii) **K is collinear with B, C, and K ≠ B.** With B = 1,
$$ \frac{K - B}{C - B} = \frac{C - 1 + ih(C+1)}{C - 1}, $$
and a direct computation gives Im[(K − B)/(C − B)] = h(c²+d²−1)/((c−1)²+d²) = 0 (using c²+d²=1);
hence (K − B)/(C − B) is real, so B, C, K are collinear. Moreover K − C = ih(C + 1) ≠ 0 (since
C ≠ −1 = A, as C is interior to Ω while A ∈ Ω), so K ≠ C; and K ≠ B because if K = B then
ih(C+1) = K − C = B − C = 1 − C, which is impossible: the left side is i·h·(C+1) with h real, and
equating real/imaginary parts with c²+d²=1, h>0 forces a contradiction (concretely, (K−B)/(C−B)
computed above equals 1 + ih(C+1)/(C−1), whose value at K=B would be 0, but its real part is
1 ≠ 0). Thus K is the **second** intersection of line BC with Ω, as claimed.

(Consistency with the power formula: with B = 1, the real ratio λ = (K−C)/(B−C) satisfies
λ·|B−C|² = −2dh = pow(C,Ω), confirming K is exactly the power-of-a-point second intersection.)

Since C and h are fixed (C and Ω are given, independent of the moving point P), K is a **fixed point**
of the plane. ∎

### 3. Reduction of the target to an algebraic criterion

We must show ∠PQK = ∠PCK for every admissible P. In complex form, the **unsigned** angle at vertex
Q in triangle PQK is |arg[(P−Q)/(K−Q)]|, and the unsigned angle at C in triangle PCK is
|arg[(P−C)/(K−C)]| (knowledge_base.md "Coordinates / complex / barycentric": directed angles are
arguments of complex ratios). Form the cross-ratio-type quantity
$$ R \;:=\; \frac{(P-Q)(P-C)}{(K-Q)(K-C)} \;=\; \frac{(P-Q)/(K-Q)}{(K-C)/(P-C)}. $$
Then
$$ \arg R = \arg\frac{P-Q}{K-Q} - \arg\frac{P-C}{K-C}. $$
Hence:
$$ R \in \mathbb{R}_{>0} \iff \arg R = 0 \iff \arg\frac{P-Q}{K-Q} = \arg\frac{P-C}{K-C}
\implies \angle PQK = \angle PCK \text{ (unsigned)}. \tag{3.1}$$
So it suffices to prove **R is a positive real number** for every admissible P. (This is *not* a
concyclicity statement: P, Q, C, K are not concyclic. We genuinely need R real *and* positive — see
§5.) We prove R ∈ ℝ in §4 (Lemma C) and R > 0 in §5 (Lemma D).

For the computations in §4–§5 we record explicit closed forms. By Lemma A, since
1/P̄ = P/|P|², we have P − Q = 1/P̄ − C, and K − Q = ih(C+1) − (P − 1/P̄). Introduce
$$ u := Ph + i, \qquad N := -C\,u + (iP + h) = -C(Ph+i) + iP + h, \qquad D := CPh + iC + iP^2 + Ph. $$
Direct algebra (no constraint used yet, only Q = C + P − 1/P̄ and K = C + ih(C+1)) gives the
four factors of R:
$$ P - Q = \frac{N}{u}, \qquad P - C = P - C, \qquad K - Q = \frac{ih\,D}{u}, \qquad K - C = ih(C+1). \tag{3.2}$$
[These four equalities are exact identities in P, C, h; each is verified by clearing the single
denominator u = Ph + i and expanding.]

### 4. Lemma C: R is real

**Lemma C.** *For every admissible P, R = R̄; i.e. R ∈ ℝ.*

*Proof.* We compute R̄ and show it equals R by reducing both to the same closed form, using only
**|C| = 1** (so C̄ = 1/C) and the **Ω-constraint** (Ω). The Ω-constraint, solved for P̄ (it is
linear in P̄), reads
$$ \bar P = \frac{hP + i}{\,iP + h\,}. \tag{4.1}$$
[Check: substituting (4.1) into P·P̄ − (1 − ih(P − P̄)) and clearing the denominator iP + h gives 0
identically.] Set v := iP + h, so by (4.1) P̄ = (hP + i)/v = u'/v with u' = hP + i = u.

Conjugate the four factors (3.2). Using C̄ = 1/C and (4.1):

1. **K − C and its conjugate.** K − C = ih(C+1); since h is real,
   $$ \overline{K - C} = -ih(\bar C + 1) = -ih\big(\tfrac1C + 1\big) = -\frac{ih(C+1)}{C}. $$
   Hence, **using only |C| = 1**,
   $$ \frac{K - C}{\overline{K - C}} = -C. \tag{4.2}$$

2. **P − C and its conjugate.**
   $$ \overline{P - C} = \bar P - \tfrac1C = \frac{C\bar P - 1}{C}. $$
   Substituting (4.1): C\bar P − 1 = C(hP+i)/v − 1 = (C(hP+i) − v)/v = (ChP + iC − iP − h)/v.
   Observe ChP + iC − iP − h = −(−C(Ph+i) + iP + h) = −N. Therefore
   $$ \overline{P - C} = -\frac{N}{C\,v}. \tag{4.3}$$

3. **P − Q and its conjugate.** From (3.2), P − Q = N/u. Its conjugate is
   $$ \overline{P-Q} = \bar P - \bar Q = \bar P - \Big(\bar C + \bar P - \tfrac1P\Big) = \tfrac1P - \tfrac1C = \frac{C - P}{C P}. \tag{4.4}$$

4. **K − Q and its conjugate.** From (3.2), K − Q = ihD/u. Its conjugate, computed from
   \overline{K} = C̄ − ih(C̄+1) and (4.4), and reduced by (4.1), is
   $$ \overline{K - Q} = -\frac{ih\,D}{C P\,v}. \tag{4.5}$$
   [Verification: K̄ − Q̄ = (\bar C − ih(\bar C+1)) − (\bar C + \bar P − 1/P). Substituting C̄ = 1/C
   and \bar P from (4.1) and clearing denominators C, P, v yields exactly −ihD/(CPv); equivalently,
   (K − Q)/(K̄ − Q̄) = ihD/u · (−CPv/(ihD)) = −CPv/u, and the shared factor D cancels.]

Now assemble. Using (3.2),
$$ R = \frac{(P-Q)(P-C)}{(K-Q)(K-C)}
   = \frac{\dfrac{N}{u}\,(P-C)}{\dfrac{ih\,D}{u}\,\cdot\,ih(C+1)}
   = \frac{N\,(P-C)}{(ih)^2\,D\,(C+1)} = \frac{N\,(P-C)}{-h^2\,D\,(C+1)}
   = \frac{(C-P)\,N}{h^2\,(C+1)\,D}. \tag{4.6}$$
Using (4.2)–(4.5),
$$ \bar R = \frac{\overline{(P-Q)}\;\overline{(P-C)}}{\overline{(K-Q)}\;\overline{(K-C)}}
   = \frac{\dfrac{C-P}{CP}\,\cdot\,\Big(-\dfrac{N}{C v}\Big)}
          {\Big(-\dfrac{ih\,D}{C P\,v}\Big)\,\cdot\,\Big(-\dfrac{ih(C+1)}{C}\Big)}. $$
The numerator is −(C−P)N/(C²Pv). The denominator is (ih)²D(C+1)/(C²Pv) = −h²D(C+1)/(C²Pv).
Dividing (the common factor C²Pv cancels),
$$ \bar R = \frac{-(C-P)N}{-h^2 D(C+1)} = \frac{(C-P)\,N}{h^2\,(C+1)\,D}. \tag{4.7}$$
Comparing (4.6) and (4.7), **R = R̄**. Hence R ∈ ℝ. ∎

[Independent algebraic check of the spine: substituting C̄ = 1/C and (4.1) into the difference
R − R̄ and clearing all denominators, the resulting polynomial numerator is identically 0. This was
confirmed symbolically two different ways (a conjugate-symbol substitution and a fully rational
parametrization of |C|=1 and P∈Ω); the derivation above exhibits the cancellation factor-by-factor.
The numeric/symbolic checks are evidence only — the proof is the displayed reduction (4.2)–(4.7).]

### 5. Lemma D: R > 0

We have, by (4.6),
$$ R = \frac{(C-P)\,N}{h^2\,(C+1)\,D}, \qquad N = -C(Ph+i)+iP+h, \quad D = CPh + iC + iP^2 + Ph, $$
and R ∈ ℝ by Lemma C. We show R > 0 on the admissible set.

**Step 5.1: the admissible set is a single arc (connected).**
Parametrize Ω by P(θ) = ih + √(1+h²)·e^{iθ}, θ ∈ [0, 2π). Write r := √(1+h²) and φ := arg C, and
recall C = cosφ + i sinφ = c + di with c < 0, d > 0 by (0.1), (0.3).

- "Major arc" Im P > 0 means h + r sinθ > 0, i.e. sinθ > −h/r. Since 0 < h/r < 1, this is a single
  arc I₁ (one θ-interval mod 2π), whose two boundary points are exactly P = A = −1 and P = B = +1
  (the only points of Ω with Im = 0).

- "∠CMP > 90°" means the rays MC and MP make an obtuse angle, i.e.
  Re(C̄ P) = c·Re(P) + d·Im(P) < 0. Computing,
  Re(C̄ P) = c·(r cosθ) + d·(h + r sinθ) = r(c cosθ + d sinθ) + dh = r·cos(θ − φ) + dh.
  The condition is cos(θ − φ) < −dh/r. Because d ≤ 1 and h > 0,
  (dh)² = d²h² ≤ h² < 1 + h² = r², so dh/r < 1; thus the condition cuts out a single arc I₂.

The admissible set is S = I₁ ∩ I₂. We show it is connected by locating the boundary points.

  *Endpoints of I₁ in I₂.* At B = 1: Re(C̄·1) = Re(C̄) = c < 0, so B satisfies the I₂-inequality
  (B is an interior point of I₂, an endpoint of I₁). At A = −1: Re(C̄·(−1)) = −c > 0, so A does
  **not** satisfy the I₂-inequality (A ∉ Ī₂).

  *Endpoints of I₂ in I₁.* The boundary points z₁, z₂ of I₂ solve cos(θ − φ) = −dh/r =: k. Writing
  the two solutions as θ − φ = ±arccos k, we have sin θ = sin((±arccos k) + φ)
  = ±√(1−k²)·cosφ + k·sinφ = ±√(1−k²)·c + k·d, so Im P at the two endpoints is
  ImP(z_{1,2}) = h + r(±√(1−k²)·c + k·d). A direct computation of the product (substituting
  k = −dh/r, r² = 1 + h², c² = 1 − d²) gives the exact identity
  $$ \operatorname{Im}P(z_1)\cdot\operatorname{Im}P(z_2) = d^2 - 1. \tag{5.1}$$
  [This is an exact algebraic simplification; verified symbolically.] Since c < 0, we have
  d² = 1 − c² < 1, so the product (5.1) is **strictly negative**. Hence exactly one of the two
  I₂-boundary points, call it Z, lies in the open upper arc I₁ (where Im P > 0), and the other lies
  in the lower arc.

  Therefore, on the circle, S = I₁ ∩ I₂ is bounded by the two points B (an I₁-endpoint lying inside
  I₂) and Z (an I₂-endpoint lying inside I₁), and is the single arc joining them. (The other
  I₁-endpoint A is outside I₂, and the other I₂-endpoint is outside I₁, so they do not bound S.)
  **S is connected.**

**Step 5.2: R is continuous and non-vanishing on S ∪ {B}.**
By (4.6), R is a rational function of P, continuous wherever its denominator h²(C+1)D is nonzero.
We verify all factors are nonzero on S ∪ {B} (B = 1 is the boundary endpoint of S where we will
evaluate):

- h ≠ 0 by (0.2); C + 1 ≠ 0 since C ≠ −1 = A (C interior, A on Ω).
- **Numerator factor C − P ≠ 0:** P ∈ Ω while C is interior to Ω, so P ≠ C.
- **Numerator factor N ≠ 0:** by (3.2)/(4.4), N = u·(P − Q) and P − Q = 1/P̄ − C; if P − Q = 0 then
  1/P̄ = C, i.e. P̄ = 1/C = C̄, i.e. P = C — impossible as above. (Also u = Ph + i ≠ 0 since h > 0,
  P ≠ 0.) Hence N ≠ 0.
- **Denominator factor D ≠ 0**, i.e. **K ≠ Q.** By (3.2), K − Q = ihD/u, so D = 0 ⟺ K = Q. We
  show Q lies *strictly inside* Ω, while K ∈ Ω, so Q ≠ K. Write C = c+di, P = x+iy with
  c²+d²=1, c<0, d>0, and (by Ω) x²+y²=1+2hy with y = Im P > 0 (here we use only the major-arc
  condition; B = 1 has y = 0, treated below). Using Q = C + P − P/(x²+y²), a direct computation of
  the power of Q gives, after substituting x² + y² = 1 + 2hy and c² + d² = 1,
  $$ \operatorname{pow}(Q,\Omega) = |Q - ih|^2 - (1+h^2)
     = \frac{2h\,\big(2cxy + d(y^2 - x^2)\big)}{\,2hy + 1\,}. \tag{5.2}$$
  [Exact rational identity; verified symbolically.] The denominator 2hy + 1 > 0 (y > 0, h > 0).
  Set E := 2cxy + d(y² − x²). We claim E < 0. Introduce the orthonormal rotation
  $$ p := cx + dy = \operatorname{Re}(\bar C P), \qquad q := dx - cy, $$
  whose inverse is x = cp + dq, y = dp − cq (since the matrix [[c,d],[d,−c]] is its own inverse,
  using c²+d²=1). Substituting and using c²+d²=1,
  $$ E = d\,p^2 - 2c\,p\,q - d\,q^2 = -d\,(q - q_1)(q - q_2),\quad q_1 = \frac{p(1-c)}{d},\ q_2 = -\frac{p(1+c)}{d}. \tag{5.3}$$
  [Exact factorization; the discriminant simplifies via c²+d²=1.] Now use the constraints. The
  major-arc condition is y > 0, i.e. dp − cq > 0; since c < 0, this is equivalent to cq < dp, i.e.
  q > dp/c =: q* (dividing by c < 0 reverses the inequality). Also, p = Re(C̄ P) < 0 on S by the
  ∠CMP > 90° condition (this is the only place that hypothesis is used). Then:
  q* − q₂ = dp/c + p(1+c)/d = p\big(d² + c(1+c)\big)/(cd) = p\,(1+c)/(cd) (using c²+d²=1).
  Here p < 0, 1 + c > 0 (since c ∈ (−1,0)), c < 0, d > 0, so p(1+c) < 0 and cd < 0, giving
  q* − q₂ > 0, i.e. **q* > q₂**. Since q > q* (from y > 0), we get q > q₂. Also q₁ < 0 < q₂ when
  p < 0 (q₁ = p(1−c)/d < 0 as 1−c>0; q₂ = −p(1+c)/d > 0 as 1+c>0), so q > q₂ implies q > q₁ and
  q > q₂, hence (q − q₁)(q − q₂) > 0, hence by (5.3) E = −d(q−q₁)(q−q₂) < 0. By (5.2),
  pow(Q,Ω) < 0, so **Q is strictly inside Ω**, while K ∈ Ω; therefore Q ≠ K and D ≠ 0 on S.

  At the endpoint B = 1 (y = 0), D is nonzero directly: D(P=1) = Ch + iC + i + h = (C+1)(h+i) ≠ 0.

Thus on S ∪ {B} the denominator never vanishes (R is continuous), and the numerator
(C − P)·N never vanishes (R ≠ 0). So R is a continuous, real-valued (Lemma C), nowhere-zero
function on the connected set S ∪ {B}.

**Step 5.3: evaluate the sign at B.** Take P = B = 1 in (4.6). Then (using (3.2) closed forms which
extend continuously) N = (h+i)(1 − C), D = (C+1)(h+i), C − P = C − 1, K − C = ih(C+1), so
$$ R\big|_{P=1} = \frac{(C-1)\,(h+i)(1-C)}{h^2\,(C+1)\,(C+1)(h+i)} = \frac{-(C-1)^2}{h^2 (C+1)^2}
   = -\frac{1}{h^2}\Big(\frac{C-1}{C+1}\Big)^2. $$
For |C| = 1, write C = e^{iγ}; then (C−1)/(C+1) = (e^{iγ}−1)/(e^{iγ}+1) = i·tan(γ/2) is purely
imaginary, so ((C−1)/(C+1))² = −tan²(γ/2). Hence
$$ R\big|_{P=1} = \frac{\tan^2(\gamma/2)}{h^2} > 0, $$
strictly positive because γ ∈ (π/2, π) (so tan(γ/2) ≠ 0, in fact tan(γ/2) > 0).

**Conclusion of Lemma D.** R is real-valued, continuous, and never zero on the connected set
S ∪ {B}; its value at B is strictly positive. A continuous real function that is never zero on a
connected set has constant sign there. Hence **R > 0 on all of S** (the admissible set). ∎

### 6. Conclusion

Fix C and Ω; define K = C + ih(C+1), the second intersection of line BC with Ω (Lemma B); this is a
fixed point, independent of P. For every admissible P (P on the major arc with ∠CMP > 90°), Q is the
uniquely determined point of Lemma A, and by Lemmas C and D the quantity
R = (P−Q)(P−C)/[(K−Q)(K−C)] is a positive real number. By the criterion (3.1), this means
$$ \arg\frac{P-Q}{K-Q} = \arg\frac{P-C}{K-C}, \qquad\text{hence}\qquad \angle PQK = \angle PCK. $$
Since K does not depend on P, there exists a fixed point K — namely the second intersection of line
BC with Ω — such that ∠PQK = ∠PCK for every admissible position of P. ∎

### Dependency check
The logical order is: §0 (setup, signs c<0,d>0,h>0) → Lemma A (Q, using only the two given
conditions + |C|=1 + monotonicity) → Lemma B (K, power of a point, using only |C|=1) →
§3 reduction to "R ∈ ℝ₊" (directed-angle dictionary) → Lemma C (R = R̄, using |C|=1 and the
Ω-constraint (4.1)) → Lemma D (R > 0: connectedness via (5.1), non-vanishing via (5.2)–(5.3) and
Q strictly inside Ω, one-point evaluation at B). No lemma uses a later lemma; the chain is acyclic.
Every displayed equality (3.2), (4.2)–(4.7), (5.1)–(5.3), and the B-evaluation is an exact algebraic
identity verified by hand and by symbolic computation; numeric checks are cited only as evidence.
