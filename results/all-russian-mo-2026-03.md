# all-russian-mo-2026-03

## Status
solved

## Problem
Triangle ABC is scalene with angle A = 60 degrees. Points X, Y lie on segment BC
with 2BX = AB (BX = c/2) and 2CY = AC (CY = b/2). Prove there exists a circle
through X and Y tangent to the incircle and to some excircle of ABC.

Notation: a = BC, b = CA, c = AB, s = (a+b+c)/2, r = inradius, r_A = A-exradius,
I = incenter, I_A = A-excenter. The excircle exhibited is the **A-excircle**.

---

## Approaches tried
- **Inversion at A with k^2 = (s-a)s, swapping incircle and A-excircle; omega =
  circle through X,Y orthogonal to (A,k)** — WORKED. Built in full below.
  Every preliminary identity (the area/exradius relations, the Stewart reduction
  AM^2 - h^2 = bcs/(2a), the tangency identity 3(b-a)(a-c) = (b+c-a)(2a-b-c)) was
  derived symbolically and reduces exactly to a^2 = b^2+c^2-bc, the angle-A = 60
  condition. The inversion lemmas (image of a circle, orthogonal circle is fixed,
  tangency preserved) are justified from scratch. Reviewer-flagged precision
  items (inversion citations, Stewart simplification, normal-direction signs) all
  closed.

## Current best
A complete rigorous proof (below). The crux tangency identity is established as
the exact algebraic equivalent of angle A = 60.

## Full proof

Throughout, write a = BC, b = CA, c = AB, s = (a+b+c)/2. We use the standard
notation r, r_A for the inradius and A-exradius, I, I_A for the incenter and
A-excenter, and K for the area of triangle ABC.

### Step 0. The angle condition as an algebraic identity.

By the **Law of Cosines**, a^2 = b^2 + c^2 - 2bc·cos A. Since A = 60 degrees and
cos 60 = 1/2,
  (★)   a^2 = b^2 + c^2 - bc.
Every algebraic simplification below uses (★). Conversely a^2 = b^2+c^2-bc forces
cos A = 1/2, i.e. A = 60; we will exploit this equivalence at the crux.

By the standard area formula K = (1/2)·b·c·sin A and sin 60 = √3/2,
  (†)   K = (√3/4)·bc.

We record four preliminary identities, all consequences of (★) and (†).

**(P1) r = (s-a)/√3 and r_A = s/√3.**
Since r = K/s (area = inradius × semiperimeter) and r_A = K/(s-a) (the standard
exradius formula r_A = K/(s-a)), (†) gives r = √3·bc/(4s) and r_A = √3·bc/(4(s-a)).
We must check r = (s-a)/√3, i.e. √3·r = s-a, i.e. 3bc/(4s) = s-a, i.e.
3bc = 4s(s-a). Now
  4s(s-a) = (a+b+c)(b+c-a) = (b+c)^2 - a^2 = b^2+c^2+2bc - a^2,
and substituting (★) for a^2: = b^2+c^2+2bc - (b^2+c^2-bc) = 3bc. So 3bc = 4s(s-a),
proving r = (s-a)/√3. Likewise √3·r_A = s requires 3bc/(4(s-a)) = s, i.e.
3bc = 4s(s-a), the same identity; so r_A = s/√3.

**(P2) r·r_A = bc/4.** From (P1), r·r_A = (s-a)/√3 · s/√3 = s(s-a)/3 = (3bc/4)/3
= bc/4, using 3bc = 4s(s-a) again.

**(P3) s^2 = 3·r_A^2.** Immediate from r_A = s/√3.

**(P4) bc = 4·r·r_A.** This is (P2) rearranged.

### Step 1. Ordering of B, X, Y, C and the chord XY (Lemma A).

Place coordinates with B = (0,0) and C = (a,0), the vertex A in the upper
half-plane (y > 0). Since 2BX = c, X = (c/2, 0); since 2CY = b, Y = (a - b/2, 0).
We claim B, X, Y, C occur in this order, so that XY is a genuine chord of BC.

First X lies between B and C: 0 < c/2, and c/2 < a because c/2 < a ⇔ c < 2a, and
c < a + a is clear since by the triangle inequality c < a + b ≤ a + (anything
positive) — more directly, c ≤ b + c - a + a, but simplest: from (★),
a^2 = b^2+c^2-bc = c^2 + b(b-c). Either b ≥ c, giving a^2 ≥ c^2 so a ≥ c > c/2; or
b < c, giving a^2 = b^2 + c(c-b) > 0 and a^2 - (c/2)^2 = b^2+c^2-bc-c^2/4
= b^2 - bc + 3c^2/4 = (b - c/2)^2 + c^2/2 > 0, so a > c/2. In all cases c/2 < a.

Similarly Y = (a-b/2,0) lies between B and C: a - b/2 < a since b > 0, and
a - b/2 > 0 since a > b/2 by the symmetric argument (swap b and c above).

Finally X is left of Y:
  Y_x - X_x = (a - b/2) - c/2 = a - (b+c)/2 = (2a - b - c)/2.
We show this is positive (and conclude XY = (2a-b-c)/2). Indeed
  a^2 - ((b+c)/2)^2 = a^2 - (b+c)^2/4.
Substituting (★): = (b^2+c^2-bc) - (b^2+c^2+2bc)/4 = (3/4)(b^2+c^2-2bc)
= (3/4)(b-c)^2. Since ABC is scalene, b ≠ c, so a^2 - ((b+c)/2)^2 = (3/4)(b-c)^2 > 0,
hence a > (b+c)/2 and Y_x - X_x = (2a-b-c)/2 > 0. Thus
  XY = (2a - b - c)/2 > 0,  and we set h := XY/2 = (2a - b - c)/4 > 0.
B, X, Y, C are in this order on BC, and XY is a nondegenerate chord. ∎(Lemma A)

### Step 2. Inversion facts, proved from scratch.

Fix a point P (the center of inversion) and a radius k > 0. The **inversion**
Φ centered at P with radius k is the map of the punctured plane to itself sending
a point Q ≠ P to the point Φ(Q) on ray PQ with PQ·P·Φ(Q) = k^2, i.e.
  Φ(Q) = P + k^2·(Q - P)/|Q - P|^2.
We use complex/vector notation; |·| is Euclidean length.

**(I1) Image of a circle not through P.** Let γ be a circle with center O and
radius ρ, with P ∉ γ. Let d = |O - P| and let pow = d^2 - ρ^2 be the power of P
with respect to γ (knowledge_base.md, "power of a point"); pow ≠ 0 because P ∉ γ.
Then Φ(γ) is the circle γ' with
  center O' = P + (k^2/pow)·(O - P),   radius ρ' = k^2·ρ/|pow|.
*Proof (direct verification).* Place P at the origin, so Φ(Q) = k^2·Q/|Q|^2, and
let O be the center vector, ρ the radius, pow = |O|^2 - ρ^2 ≠ 0. Set
  O' = (k^2/pow)·O,   ρ' = k^2·ρ/|pow|.
We show |Φ(Q) - O'|^2 = ρ'^2 for every Q on γ. Parameterize γ by Q = O + ρ·u with
u a unit vector, and write D = |Q|^2. Then
  Q·O = |O|^2 + ρ(O·u),   D = |O|^2 + 2ρ(O·u) + ρ^2.
Using |O|^2 = pow + ρ^2, we have 2(Q·O) = 2|O|^2 + 2ρ(O·u) and
D = |O|^2 + 2ρ(O·u) + ρ^2, so
  2(Q·O) - D = |O|^2 - ρ^2 = pow,   i.e.   (∗)  2(Q·O) = D + pow.
Now compute, using Φ(Q) = k^2·Q/D:
  |Φ(Q) - O'|^2 = |k^2 Q/D - (k^2/pow)O|^2 = k^4·|Q/D - O/pow|^2
    = k^4·( |Q|^2/D^2 - 2(Q·O)/(D·pow) + |O|^2/pow^2 )
    = k^4·( 1/D - 2(Q·O)/(D·pow) + |O|^2/pow^2 ).
By (∗), 2(Q·O)/(D·pow) = (D + pow)/(D·pow) = 1/pow + 1/D, hence
  1/D - 2(Q·O)/(D·pow) = 1/D - 1/pow - 1/D = -1/pow.
Therefore
  |Φ(Q) - O'|^2 = k^4·( -1/pow + |O|^2/pow^2 ) = k^4·(|O|^2 - pow)/pow^2
    = k^4·ρ^2/pow^2 = ρ'^2,
since |O|^2 - pow = ρ^2. This holds for every Q ∈ γ, so Φ(γ) ⊆ (O', ρ'). Φ is an
involution: |Φ(Q)| = k^2/|Q| gives Φ(Φ(Q)) = k^2·Φ(Q)/|Φ(Q)|^2
= k^2·(k^2 Q/|Q|^2)/(k^4/|Q|^2) = Q. Applying the same computation to the circle
(O', ρ') (whose power with respect to P is |O'|^2 - ρ'^2 = k^4(|O|^2-ρ^2)/pow^2
= k^4/pow ≠ 0) shows Φ((O',ρ')) ⊆ γ; combined with Φ(γ) ⊆ (O',ρ') and
involutivity, Φ(γ) = (O', ρ') exactly. Restoring a general center P, O' = P +
(k^2/pow)(O - P) and ρ' = k^2·ρ/|pow|, which is the claim. ∎

In particular, **Φ maps the circle γ to a circle that is the image of γ under the
homothety centered at P with ratio k^2/pow** (the center transforms by exactly
that homothety, O ↦ P + (k^2/pow)(O-P), and the radius scales by |k^2/pow|).

**(I2) A circle orthogonal to the inversion circle is fixed by Φ.** Let
Ω = (P, k) be the inversion circle and let γ (center O, radius ρ, P ∉ γ) be
orthogonal to Ω. Two circles are orthogonal iff the square of the distance
between centers equals the sum of the squares of the radii (the tangent from each
center to the other circle is a radius of the first); thus orthogonality of γ and
Ω means
  |O - P|^2 = k^2 + ρ^2,  i.e.  pow := |O-P|^2 - ρ^2 = k^2.
Substituting pow = k^2 into (I1): O' = P + (k^2/k^2)(O-P) = O and
ρ' = k^2·ρ/k^2 = ρ. Hence Φ(γ) = γ; the orthogonal circle is fixed (as a set).
Equivalently, pow_P(γ) = k^2 ⟺ γ ⊥ Ω ⟺ Φ(γ) = γ. ∎

**(I3) Inversion preserves tangency of two circles.** Φ is the restriction of a
Möbius transformation of the Riemann sphere (z ↦ P + k^2/\overline{(z-P)} after
identifying the plane with ℂ; conjugation is an isometry preserving incidence),
and Möbius maps are conformal bijections sending circles-or-lines to
circles-or-lines and preserving tangency (two curves tangent at a common point Q
map to two curves tangent at Φ(Q)). Concretely, if circles γ_1, γ_2 are tangent
at T (and T ≠ P), they share exactly the point T; Φ is injective, so Φ(γ_1) and
Φ(γ_2) share exactly Φ(T); two distinct circles meeting in exactly one point are
tangent. (If T = P the images are tangent lines, not relevant below.) ∎

### Step 3. The inversion Φ swaps the incircle and the A-excircle (Lemma B).

Let Φ be the inversion centered at A with radius k where
  k^2 = (s - a)·s.
Note k^2 > 0 since s > a (triangle inequality b + c > a). We show Φ maps the
incircle to the A-excircle.

**Tangent lengths from A.** The incircle is tangent to line AB and to line AC;
its tangent length from A equals s - a (the standard tangent-length formula: the
incircle touches AB and AC at distance s - a from A). Hence
  pow_A(incircle) = (s - a)^2.
The A-excircle is tangent to lines AB and AC produced; its tangent length from A
equals s. Hence
  pow_A(A-excircle) = s^2.
(These are the classical tangent lengths; the incircle touches AB at the point
distance s-a from A, the A-excircle touches line AB at the point distance s from A.)

**Both centers lie on ray AI.** I and I_A both lie on the internal bisector of
angle A (I is the incenter; the A-excircle is tangent to AB, AC from inside the
angle at A, so I_A is on the same internal bisector). Let ℓ denote this ray AI
from A. The incircle has center I on ℓ with |AI|^2 = pow_A(incircle) + r^2
= (s-a)^2 + r^2 (since AI is the hypotenuse of the right triangle with legs r and
the tangent length s-a). Likewise |AI_A|^2 = s^2 + r_A^2.

**Apply (I1) to the incircle.** With P = A, O = I, ρ = r, we have
pow = pow_A(incircle) = (s-a)^2, so by (I1) the image Φ(incircle) is the circle
with
  center  O' = A + (k^2/(s-a)^2)(I - A) = A + (s/(s-a))(I - A),
  radius  ρ' = k^2·r/(s-a)^2 = (s/(s-a))·r.
The center O' lies on ray AI at distance |AO'| = (s/(s-a))·|AI| from A. By (P1),
ρ' = (s/(s-a))·r = (s/(s-a))·(s-a)/√3 = s/√3 = r_A. So Φ(incircle) is a circle of
radius r_A, centered on ray AI.

It remains to identify this center with I_A. The center O' is the homothety image
of I under the homothety centered at A with ratio s/(s-a). Now A, I, I_A are
collinear on ℓ with |AI| = √((s-a)^2 + r^2) and |AI_A| = √(s^2 + r_A^2). Compute
the ratio |AI_A|/|AI|:
  |AI_A|^2/|AI|^2 = (s^2 + r_A^2)/((s-a)^2 + r^2).
By (P1), r = (s-a)/√3 and r_A = s/√3, so
  (s-a)^2 + r^2 = (s-a)^2(1 + 1/3) = (4/3)(s-a)^2,
  s^2 + r_A^2 = s^2(1 + 1/3) = (4/3)s^2.
Hence |AI_A|^2/|AI|^2 = s^2/(s-a)^2, so |AI_A| = (s/(s-a))|AI| = |AO'|. Since O'
and I_A both lie on ray ℓ at the same distance from A, O' = I_A. Therefore
  Φ(incircle) = circle(I_A, r_A) = A-excircle.
Because Φ is an involution (Φ∘Φ = identity, as PQ·PΦ(Q) = k^2 = PΦ(Q)·PΦ(Φ(Q))
forces Φ(Φ(Q)) = Q), we also have Φ(A-excircle) = incircle. Thus Φ swaps the
incircle and the A-excircle. ∎(Lemma B)

### Step 4. Construction of ω (Lemma C).

Let M be the midpoint of XY and let n = (0,1) be the unit normal to line BC
pointing to the A-side (recall A has positive y-coordinate). Every circle through
X and Y has its center on the perpendicular bisector of XY, the vertical line
through M; write the center as
  O(t) = M + t·n   (t ∈ ℝ),  with radius²  R(t)^2 = h^2 + t^2,
since |O(t) - X|^2 = |M - X|^2 + t^2 = h^2 + t^2 (M - X ⟂ n, |M-X| = h).

From Step 1, M = ((c/2 + a - b/2)/2, 0) = ((2a + c - b)/4, 0); write
M_x = (2a + c - b)/4. The altitude from A has length h_A = 2K/a = √3·bc/(2a) by
(†); since A = (A_x, h_A) (its y-coordinate is the altitude),
  pow_A(O(t)) := |O(t) - A|^2 - R(t)^2
    = (M_x - A_x)^2 + (t - h_A)^2 - (h^2 + t^2)
    = [(M_x - A_x)^2 + h_A^2] - h^2 - 2t·h_A
    = AM^2 - h^2 - 2t·h_A,
where AM^2 = |A - M|^2 = (M_x - A_x)^2 + h_A^2. This is an **affine function of t**
with slope -2h_A ≠ 0 (h_A > 0). Hence the equation
  pow_A(O(t)) = k^2
has a unique solution t = t_0, and we define ω := circle(O(t_0), R(t_0)). By
construction ω passes through X and Y and has pow_A(ω) = k^2.

By (I2), pow_A(ω) = k^2 means ω is orthogonal to the inversion circle (A, k),
hence **Φ(ω) = ω**: ω is fixed by Φ. (For (I2) we need A ∉ ω, i.e. pow_A(ω) ≠ 0;
indeed pow_A(ω) = k^2 = (s-a)s > 0.) ∎(Lemma C)

### Step 5. Solving for t_0 and R_0 (the Stewart computation).

We now compute t_0 explicitly. We need AM^2 - h^2.

**Stewart's theorem on the cevian AM.** With B = (0,0), C = (a,0), the point M
lies on BC with BM = M_x = (2a + c - b)/4 and MC = a - BM = (2a + b - c)/4.
Stewart's theorem for the cevian from A to M (sides AB = c to B, AC = b to C):
  AM^2·a + BM·MC·a = c^2·MC + b^2·BM,  i.e.  AM^2 = (c^2·MC + b^2·BM)/a - BM·MC.
Substituting BM = (2a+c-b)/4, MC = (2a+b-c)/4 and h = (2a-b-c)/4:
  AM^2 - h^2
    = [c^2(2a+b-c) + b^2(2a+c-b)]/(4a) - (2a+c-b)(2a+b-c)/16 - (2a-b-c)^2/16.
Expanding the last two bracketed terms,
  (2a+c-b)(2a+b-c) = 4a^2 - (b-c)^2,   (2a-b-c)^2 = 4a^2 - 4a(b+c) + (b+c)^2,
so
  - (2a+c-b)(2a+b-c)/16 - (2a-b-c)^2/16
    = -[4a^2 - (b-c)^2 + 4a^2 - 4a(b+c) + (b+c)^2]/16
    = -[8a^2 - 4a(b+c) + ((b+c)^2 - (b-c)^2)]/16
    = -[8a^2 - 4a(b+c) + 4bc]/16 = -(2a^2 - a(b+c) + bc)/4.
And c^2(2a+b-c) + b^2(2a+c-b) = 2a(b^2+c^2) + bc(b+c) - (b^3+c^3). Therefore
  AM^2 - h^2 = [2a(b^2+c^2) + bc(b+c) - (b^3+c^3)]/(4a) - (2a^2 - a(b+c) + bc)/4
  = [2a(b^2+c^2) + bc(b+c) - (b^3+c^3) - a(2a^2 - a(b+c) + bc)]/(4a)
  = [ -2a^3 + a^2(b+c) + 2a(b^2+c^2) - a·bc + bc(b+c) - (b^3+c^3) ]/(4a).
We claim this equals bcs/(2a) = bc(a+b+c)/(4a). Equivalently the numerators agree:
  -2a^3 + a^2(b+c) + 2a(b^2+c^2) - abc + bc(b+c) - (b^3+c^3)  =?  bc(a+b+c).
Moving everything to one side, the difference is
  N := -2a^3 + a^2(b+c) + 2a(b^2+c^2) - 2abc - (b^3+c^3).
(The bc(b+c) on the left cancels bc(b+c) hidden in bc(a+b+c) = abc + bc(b+c), and
- abc - abc = -2abc.) We show N = 0 under (★). Treat N as a polynomial in a and
reduce modulo a^2 - (b^2 + c^2 - bc):
  a^2 ≡ b^2 + c^2 - bc,   a^3 = a·a^2 ≡ a(b^2+c^2-bc).
Then
  N ≡ -2a(b^2+c^2-bc) + (b^2+c^2-bc)(b+c) + 2a(b^2+c^2) - 2abc - (b^3+c^3).
The a-terms: -2a(b^2+c^2-bc) + 2a(b^2+c^2) - 2abc = 2abc - 2abc = 0. The constant
(in a) terms: (b^2+c^2-bc)(b+c) - (b^3+c^3). Expand
  (b^2+c^2-bc)(b+c) = b^3 + b^2 c + b c^2 + c^3 - b^2 c - b c^2 = b^3 + c^3.
So the constant terms give (b^3+c^3) - (b^3+c^3) = 0. Hence N ≡ 0 modulo (★), i.e.
under the hypothesis A = 60,
  (S)   AM^2 - h^2 = bc·s/(2a).
(This is the Stewart simplification; it was the messiest step and is now derived
in full, not asserted.)

**Solve for t_0.** From Step 4, pow_A(O(t)) = (AM^2 - h^2) - 2t·h_A = bcs/(2a) -
2t·h_A. Setting this equal to k^2 = (s-a)s and using h_A = √3·bc/(2a):
  t_0 = (bcs/(2a) - (s-a)s)/(2·h_A) = (bcs/(2a) - (s-a)s)/(√3·bc/a)
      = [bcs/(2a) - (s-a)s]·a/(√3·bc)
      = s/(√3·bc)·[bc/2 - a(s-a)].
Now a(s-a) = a(b+c-a)/2, so
  bc/2 - a(s-a) = (bc - a(b+c-a))/2 = (bc - a(b+c) + a^2)/2.
Substituting (★) a^2 = b^2+c^2-bc into the term a^2:
  bc/2 - a(s-a) = (bc - a(b+c) + b^2+c^2-bc)/2 = (b^2 + c^2 - a(b+c))/2.
Thus
  t_0 = s/(√3·bc)·(b^2+c^2 - a(b+c))/2 = s·(b^2+c^2-a(b+c))/(2√3·bc).
We claim t_0 = -(r_A/s)·h. Using r_A = s/√3 (P1) and h = (2a-b-c)/4:
  -(r_A/s)·h = -(1/√3)·(2a-b-c)/4 = (b+c-2a)/(4√3).
The asserted equality t_0 = (b+c-2a)/(4√3) is, after clearing √3 and cross-
multiplying (recall s = (a+b+c)/2),
  s(b^2+c^2-a(b+c))/(2bc) = (b+c-2a)/4
  ⟺  2s(b^2+c^2-a(b+c)) = bc(b+c-2a)
  ⟺  (a+b+c)(b^2+c^2-a(b+c)) = bc(b+c-2a).
To prove this, reduce the difference of the two sides modulo (★). Set
  Δ := (a+b+c)(b^2+c^2-a(b+c)) - bc(b+c-2a).
We verify Δ ≡ 0 modulo a^2 - (b^2+c^2-bc). Expanding,
  Δ = a(b^2+c^2) + (b+c)(b^2+c^2) - a^2(b+c) - a(b+c)^2 - bc(b+c) + 2abc.
Collect: the a^2 term is -a^2(b+c) ≡ -(b^2+c^2-bc)(b+c). The pure-a terms:
  a(b^2+c^2) - a(b+c)^2 + 2abc = a(b^2+c^2 - b^2 - 2bc - c^2 + 2bc) = a·0 = 0.
The a^0 terms: (b+c)(b^2+c^2) - bc(b+c) = (b+c)(b^2+c^2-bc). Adding the reduced
a^2-term:
  Δ ≡ (b+c)(b^2+c^2-bc) - (b^2+c^2-bc)(b+c) = 0.
So Δ ≡ 0, proving
  (T0)   t_0 = -(r_A/s)·h = (b+c-2a)/(4√3) = -h/√3,
the last equality using r_A/s = 1/√3 from (P1). Note t_0 < 0 (since h > 0): the
center O(t_0) lies on the side of BC **opposite** to A, by distance |t_0| = h/√3.

**Radius R_0.** Let R_0 := R(t_0) = √(h^2 + t_0^2). By (T0), t_0^2 = h^2/3, so
  R_0^2 = h^2 + h^2/3 = (4/3)h^2,  R_0 = 2h/√3 > 0.
Consequently
  (TR)   t_0 + R_0 = -h/√3 + 2h/√3 = h/√3 > 0.

### Step 6. ω is externally tangent to the incircle (Lemma D, the crux).

The incenter is I = (s - b, r): its x-coordinate is the tangent length BD = s - b
from B to the incircle's touch point D on BC, and its y-coordinate is r (I is on
the A-side, at height r). Then, exactly as in Step 4 with I in place of A,
  pow_I(O(t)) := |O(t) - I|^2 - R(t)^2 = IM^2 - h^2 - 2t·r,
where IM^2 = |I - M|^2 = (M_x - (s-b))^2 + r^2 and we used that the y-component of
I - M is r and (I - M)·n = r... we must track the sign. Carefully:
  O(t) - I = (M_x - (s-b), t - r),  R(t)^2 = h^2 + t^2,
  pow_I(O(t)) = (M_x - (s-b))^2 + (t - r)^2 - (h^2 + t^2)
             = (M_x - (s-b))^2 + r^2 - h^2 - 2t·r = IM^2 - h^2 - 2t·r.
Now M_x - (s - b) = (2a + c - b)/4 - (a - b + c)/2 = (2a + c - b - 2a + 2b - 2c)/4
= (b - c)/4. Hence
  IM^2 = (b - c)^2/16 + r^2,   and   pow_I(O(t)) = (b-c)^2/16 + r^2 - h^2 - 2t·r.

**External tangency criterion.** Two circles with centers O(t_0), I and radii
R_0, r are **externally tangent** iff the distance between centers equals the sum
of radii, |O(t_0) - I| = R_0 + r, equivalently
  |O(t_0) - I|^2 = (R_0 + r)^2 = R_0^2 + 2R_0 r + r^2,
i.e. pow_I(O(t_0)) = |O(t_0)-I|^2 - R_0^2 = r^2 + 2R_0 r. So external tangency to
the incircle is exactly
  pow_I(O(t_0)) = r^2 + 2R_0·r.
Plug in pow_I(O(t_0)) = (b-c)^2/16 + r^2 - h^2 - 2t_0·r:
  (b-c)^2/16 + r^2 - h^2 - 2t_0 r = r^2 + 2R_0 r
  ⟺  (b-c)^2/16 - h^2 = 2r(t_0 + R_0).
By (TR), t_0 + R_0 = h/√3, and by (P1) r = (s-a)/√3, so the right side is
  2r(t_0+R_0) = 2·(s-a)/√3·h/√3 = (2/3)(s-a)h.
The left side, using h = (2a-b-c)/4 so h^2 = (2a-b-c)^2/16:
  (b-c)^2/16 - (2a-b-c)^2/16 = [(b-c)^2 - (2a-b-c)^2]/16.
Factor the difference of squares: with U = b - c, V = 2a - b - c,
  U^2 - V^2 = (U - V)(U + V) = ((b-c)-(2a-b-c))((b-c)+(2a-b-c))
            = (2b - 2a)(2a - 2c) = 4(b - a)(a - c).
So the left side is 4(b-a)(a-c)/16 = (b-a)(a-c)/4. The tangency criterion becomes
  (b - a)(a - c)/4 = (2/3)(s - a)·h.
Substitute s - a = (b + c - a)/2 and h = (2a - b - c)/4:
  (2/3)(s-a)h = (2/3)·(b+c-a)/2·(2a-b-c)/4 = (b+c-a)(2a-b-c)/12.
So the criterion is
  (b-a)(a-c)/4 = (b+c-a)(2a-b-c)/12,  i.e.  (C)  3(b-a)(a-c) = (b+c-a)(2a-b-c).

**Verifying (C) under (★).** Expand both sides:
  LHS = 3(b-a)(a-c) = 3(ab - bc - a^2 + ac) = 3ab + 3ac - 3bc - 3a^2.
  RHS = (b+c-a)(2a-b-c). Let p = b+c. Then RHS = (p - a)(2a - p)
      = 2ap - p^2 - 2a^2 + ap = 3ap - p^2 - 2a^2
      = 3a(b+c) - (b+c)^2 - 2a^2 = 3ab + 3ac - b^2 - 2bc - c^2 - 2a^2.
Then
  LHS - RHS = (3ab+3ac-3bc-3a^2) - (3ab+3ac-b^2-2bc-c^2-2a^2)
            = -3bc - 3a^2 + b^2 + 2bc + c^2 + 2a^2
            = b^2 + c^2 - bc - a^2.
By (★), a^2 = b^2 + c^2 - bc, so LHS - RHS = 0; identity (C) holds. Conversely
(C) is equivalent to a^2 = b^2 + c^2 - bc, i.e. to A = 60: the tangency condition
is *exactly* the angle hypothesis.

Therefore, under A = 60, the external-tangency criterion is satisfied:
  |O(t_0) - I| = R_0 + r,
so **ω is (externally) tangent to the incircle.** ∎(Lemma D)

### Step 7. Transfer the tangency to the A-excircle, and conclude.

We have produced a circle ω = circle(O(t_0), R_0) with:
 (i) ω passes through X and Y (Step 4);
 (ii) ω is tangent to the incircle (Step 6);
 (iii) Φ(ω) = ω, the inversion Φ at A with k^2 = (s-a)s fixes ω (Lemma C, via (I2));
 (iv) Φ swaps the incircle and the A-excircle (Lemma B).

Apply (I3) (inversion preserves tangency) to the tangent pair (ω, incircle): their
images under Φ are tangent. By (iii) the image of ω is ω itself, and by (iv) the
image of the incircle is the A-excircle. Hence
  ω is tangent to the A-excircle.
(For (I3) we need the point of tangency T of ω and the incircle to differ from A;
indeed T lies on the incircle, and A ∉ incircle since pow_A(incircle) = (s-a)^2 ≠ 0,
so T ≠ A.)

Thus ω is a single circle passing through X and Y that is tangent to the incircle
and to the A-excircle of triangle ABC. The required circle exists, with the
excircle being the **A-excircle**. ∎

### Remark on tangency types (not required, for completeness).
Both tangencies are external: |O(t_0) - I| = R_0 + r was proved in Step 6, and the
inversion image gives |O(t_0) - I_A| = R_0 + r_A by the same transport (the image
of an externally tangent pair under an inversion fixing one circle and not
separating them remains externally tangent here). The problem asks only for
tangency, which is established.
