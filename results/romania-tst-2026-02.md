## Status
solved

## Approaches tried
- Synthetic (Miquel point, spiral similarity, radical axis, Apollonius, inversion at H) — all dead ends (recorded in exploration); none of X, Y, H is a natural Miquel/spiral point, and X,Y do not lie on the radical axis.
- Analytic coordinate geometry with AD as x-axis, reducing the problem to the signed vector identity r₂(X−O₁)=r₁(O₂−Y) — WORKED. The crux closes as a single exact identity g₁ = −AD/BC (sign and magnitude together), proved by ideal reduction modulo AB=CD, with the mirror identity g₂ = −AD/EF and BC=EF giving g₁=g₂. This is the proof below.

## Current best
Complete proof (below). The decisive simplification: in the frame A=(0,0), D=(L,0), writing g₁=(X.y−O₁.y)/r₁ and g₂=(O₂.y−Y.y)/r₂, one has the exact closed form

        g₁ = −AD/BC,    g₂ = −AD/EF

(each an algebraic identity modulo the single relevant side-equality, AB=CD resp. AF=DE). The hypothesis BC=EF then gives g₁=g₂, which together with Lemmas A,B (verticality of X−O₁ and O₂−Y) is exactly r₂(X−O₁)=r₁(O₂−Y), placing the internal similitude center H of ω₁,ω₂ on line XY.

## Full proof

Throughout, "side-equalities" are AB=CD, AF=DE, BC=EF.

### 0. Reduction to a vector identity

Let O₁, O₂ be the centers and r₁, r₂ the radii of ω₁, ω₂.

**Internal-center-of-similitude fact.** *Let ω₁, ω₂ be two circles whose closed disks are disjoint. Then their two common internal tangents exist and meet at the point*
        H = (r₂·O₁ + r₁·O₂)/(r₁ + r₂),
*the unique point dividing segment O₁O₂ internally in the ratio O₁H : HO₂ = r₁ : r₂.*

*Proof.* Consider the homothety h with center H and ratio k = −r₂/r₁. Solving h(O₁)=O₂, i.e. H + k(O₁−H) = O₂, gives H(1−k) = O₂ − kO₁, so
        H = (O₂ − kO₁)/(1−k) = (O₂ + (r₂/r₁)O₁)/(1 + r₂/r₁) = (r₁O₂ + r₂O₁)/(r₁+r₂),
which lies strictly between O₁ and O₂ (both coefficients positive, summing to 1) and divides O₁O₂ in ratio r₁:r₂. Since |k|=r₂/r₁, h maps the circle of radius r₁ about O₁ onto the circle of radius r₂ about O₂, i.e. h(ω₁)=ω₂; because k<0 the homothety is orientation-reversing on the radial direction, so it carries each tangent line of ω₁ to the *anti-parallel* tangent line of ω₂ on the opposite side, i.e. to a *common internal* tangent. As the disks are disjoint (the hypothesis "not tangent, no common interior points" makes the closed disks disjoint: they neither meet nor is one inside the other), H lies outside both disks and the two lines through H tangent to ω₁ are genuine common internal tangents of the pair; they meet exactly at H. Conversely any common internal tangent is fixed as a set by h, hence passes through the unique fixed point H of h. ∎

Thus the assertion "the intersection of the common internal tangents lies on line XY" is exactly "H ∈ line XY". We now prove the stronger signed identity

        (★)        r₂·(X − O₁) = r₁·(O₂ − Y).

Granting (★): from (★), r₂X − r₂O₁ = r₁O₂ − r₁Y, i.e. r₂O₁ + r₁O₂ = r₂X + r₁Y, so
        H = (r₂O₁ + r₁O₂)/(r₁+r₂) = (r₂X + r₁Y)/(r₁+r₂),
hence
        H − X = (r₂X + r₁Y − (r₁+r₂)X)/(r₁+r₂) = r₁(Y − X)/(r₁+r₂).
Since X ≠ Y (given), line XY is well-defined, and H − X is a scalar multiple of Y − X; therefore H lies on line XY. So (★) implies the conclusion, and it remains to prove (★).

### 1. Coordinates

Place A = (0,0) and D = (L,0) with L = AD > 0, so line AD is the x-axis. By convexity of the hexagon ABCDEF, the vertices B, C lie strictly on one side of AD and E, F strictly on the other; choose the orientation so that

        B = (b₁,b₂), C = (c₁,c₂) with b₂, c₂ > 0   (B, C above AD),
        E = (e₁,e₂), F = (f₁,f₂) with e₂, f₂ < 0   (E, F below AD).

The cyclic order around the convex hexagon is A, B, C, D, E, F.

U is the intersection of ray AB and ray DC; since these are genuine rays cutting beyond B and C respectively (the hypothesis that U is the ray–ray intersection), U lies above AD and the parameter s with U = A + s(B−A) satisfies s > 1. Likewise V = ray AF ∩ ray DE lies below AD.

For a triangle with vertices P,Q,R the circumcenter is the solution Z of the linear system 2(Q−P)·Z = |Q|²−|P|², 2(R−P)·Z = |R|²−|P|² (each equation is the perpendicular bisector of an edge). We use this to compute O₁, O₂, and similarly X (perp. bisectors of AC and BD) and Y (perp. bisectors of DF and AE).

**Line intersection.** Solving A + s(B−A) = D + t(C−D) gives
        U = ( L·b₁c₂, L·b₂c₂ ) / P,    where P := L·b₂ + b₁c₂ − b₂c₁.
In particular U.y = L·b₂c₂/P; since U.y > 0 and L, b₂, c₂ > 0, we get **P > 0**. (This is the only convexity/ray input we will need for the sign.)

We also record, for triangle BCU,
        O₁.x = (L·b₁c₂ + L·b₂c₁ + b₁²c₂ + b₂²c₂ − b₂c₁² − b₂c₂²)/(2P).

### 2. Lemma A: X − O₁ ⊥ AD

**Lemma A.** *Under AB = CD one has X.x = O₁.x, i.e. X − O₁ is vertical (perpendicular to AD).*

*Proof.* Solving the perpendicular-bisector systems for X (edges AC, BD) and the circumcenter system for O₁ (triangle BCU) and subtracting yields, after clearing denominators,
        X.x − O₁.x = L·b₂c₂·( L² − 2Lc₁ − b₁² − b₂² + c₁² + c₂² ) / (2·P·Q),
where P = L·b₂ + b₁c₂ − b₂c₁ (as above) and Q := L·c₂ − b₁c₂ + b₂c₁. The bracketed factor is
        L² − 2Lc₁ + c₁² + c₂² − (b₁² + b₂²) = ((L−c₁)² + c₂²) − (b₁² + b₂²) = CD² − AB².
Hence X.x − O₁.x = L·b₂c₂·(CD² − AB²)/(2PQ). (The denominators are nonzero: P > 0 from §1; Q = −(2[ABC] + 2[ACD]) where [·] denotes signed area — see §5 — is nonzero for a nondegenerate convex quadrilateral ABCD.) When AB = CD the numerator vanishes, so X.x = O₁.x. ∎

This is a polynomial identity in (L,b₁,b₂,c₁,c₂): the difference X.x − O₁.x equals the displayed rational function exactly (verified symbolically), and CD²−AB² is literally a factor of its numerator.

### 3. Lemma B: O₂ − Y ⊥ AD (via the AD-reflection)

Define the isometry σ(x,y) = (L − x, −y): the reflection in the perpendicular bisector of AD followed by reflection in line AD; equivalently the point-reflection in the midpoint of AD composed with the AD-reflection. It is **orientation-reversing** (it flips the y-axis). Note σ fixes the x-axis setwise, swaps A ↔ D, and sends the lower half-plane to the upper one.

Apply σ to the *lower* data. Set
        A' := σ(D) = (0,0),  D' := σ(A) = (L,0),  B' := σ(E),  C' := σ(F).
Because σ is an isometry, |B'−A'| = |E−D| = DE, |D'−C'| = |F−A| = AF, and |C'−B'| = |F−E| = EF; and B', C' lie in the upper half-plane. Moreover σ maps ray AF to ray D'C' and ray DE to ray A'B', so it carries V = ray AF ∩ ray DE to V' := σ(V) = ray A'B' ∩ ray D'C', the analogue of U for the primed configuration; it carries the circumcircle ω₂ of EFV to the circumcircle ω₂' of B'C'V' (radius r₂, since σ is an isometry); and it carries Y (intersection of perp. bisectors of DF, AE) to Y' := σ(Y), the intersection of the perp. bisectors of D'C' and A'B' — i.e. Y' is to (A',B',C',D') exactly what X is to (A,B,C,D). Finally σ carries O₂ to O₂' := σ(O₂), the circumcenter of B'C'V'.

The primed configuration (A',B',C',D') is therefore an instance of the upper configuration of §1–§2, with side relation
        |A'B'| = DE = AF = |D'C'|,
i.e. "A'B' = C'D'", the analogue of AB = CD. By Lemma A applied to the primed data, Y'.x = O₂'.x, i.e. Y' − O₂' is vertical. Applying σ⁻¹ = σ (it is an involution) and noting σ preserves "vertical" (σ maps the vertical line x=p to the vertical line x=L−p), we conclude **Y − O₂ is vertical**, i.e. O₂.x = Y.x. ∎

Because σ flips the y-axis, the *signed* vertical components do not copy Lemma A's blindly; we track signs explicitly in §4–§5.

### 4. The crux identity: g₁ = −AD/BC and g₂ = −AD/EF

By Lemma A the vector X − O₁ is vertical; the line x = O₁.x is then a diameter of ω₁ (it passes through the center O₁). Define the signed ratio
        g₁ := (X.y − O₁.y)/r₁.
Symmetrically, by Lemma B the line x = O₂.x is a diameter of ω₂, and we set
        g₂ := (O₂.y − Y.y)/r₂.

**Lemma C (the crux).** *Under AB = CD,*
        g₁ = −AD/BC.
*Symmetrically, under AF = DE,*  g₂ = −AD/EF.

*Proof of the first identity.* Two exact algebraic facts about the upper configuration, both polynomial/rational identities in (L,b₁,b₂,c₁,c₂):

(i) The circumradius of triangle BCU satisfies the exact identity (no side-equality assumed)
        r₁² = |O₁ − B|² = (b₁²+b₂²)·((L−c₁)²+c₂²)·((c₁−b₁)²+(c₂−b₂)²)/(4P²),    P = L·b₂ + b₁c₂ − b₂c₁ > 0.
This is obtained by substituting the circumcenter coordinates O₁ = O₁(b,c) (the solution of the circumcenter linear system for triangle BCU) and simplifying; the three numerator factors are exactly
        b₁²+b₂² = AB²,   (L−c₁)²+c₂² = CD²,   (c₁−b₁)²+(c₂−b₂)² = BC²,
so r₁² = AB²·CD²·BC²/(4P²). (Equivalently this is the law of sines / r = (product of sides)/(4·Area) for triangle BCU, but we only need the verified rational identity.) Under AB = CD this reads r₁² = AB⁴·BC²/(4P²), hence, taking the positive root and using P > 0,
        r₁ = AB²·BC/(2P).

(ii) Solving the perpendicular-bisector systems and reducing modulo AB = CD,
        X.y − O₁.y = −L·AB²/(2P).
(Verified as an ideal identity: the polynomial 2P·(X.y − O₁.y) + L·(b₁²+b₂²) lies in the ideal generated by AB²−CD², with an explicit polynomial cofactor; over the variety AB=CD it vanishes.)

Dividing (ii) by (i):
        g₁ = (X.y − O₁.y)/r₁ = [−L·AB²/(2P)] / [AB²·BC/(2P)] = −L/BC = −AD/BC.

In particular g₁ < 0: the numerator −L·AB²/(2P) is strictly negative because L = AD > 0, AB² > 0, and P > 0 (§1), while r₁ > 0; equivalently X.y < O₁.y, so X lies strictly below the center O₁. This is precisely where convexity enters — it is the inequality P > 0, i.e. U lies above AD, forced by U being the genuine ray intersection with B, C above AD.

*Proof of the second identity.* Apply the first identity to the primed configuration of §3 (which is an upper configuration with A'B' = C'D'): writing g₁' := (Y'.y − O₂'.y)/r₂ for that configuration, Lemma C(i)(ii) give
        g₁' = −A'D'/B'C' = −L/EF = −AD/EF.
Now σ(x,y) = (L−x,−y) flips the y-coordinate, so for any two points P,Q one has (σP).y − (σQ).y = −(P.y − Q.y). Applying this with Y'=σ(Y), O₂'=σ(O₂):
        Y'.y − O₂'.y = −(Y.y − O₂.y) = O₂.y − Y.y.
Dividing by r₂ (unchanged by the isometry σ),
        g₁' = (Y'.y − O₂'.y)/r₂ = (O₂.y − Y.y)/r₂ = g₂.
Hence g₂ = g₁' = −AD/EF, with g₂ < 0 as well. ∎

The y-flip is exactly what makes the *signs* of g₁ and g₂ agree (both negative) rather than cancel: g₂ is read off as (O₂.y − Y.y)/r₂, not (Y.y − O₂.y)/r₂, precisely because the orientation-reversing σ converts the upper "X below O₁" into the lower "Y above O₂".

### 5. Identification of P, Q (nondegeneracy and sign justification)

For completeness we exhibit P and Q as area combinations, confirming the sign and nonvanishing claims used above. Writing [PQR] = ½·det(Q−P, R−P) for the signed area:

- P = L·b₂ + (b₁c₂ − b₂c₁) = −2[ABD] + 2[ABC]; but more directly P = L·b₂c₂/U.y with U.y > 0, so **P > 0**.
- Q = L·c₂ − b₁c₂ + b₂c₁ = −(2[ABC] + 2[ACD]). In the convex quadrilateral ABCD (cyclic order A,B,C,D) the diagonal AC splits it into triangles ABC and ACD, whose signed areas [ABC], [ACD] have the **same sign** (both equal the orientation of the quadrilateral). Hence 2[ABC] + 2[ACD] ≠ 0 and Q ≠ 0; in fact Q > 0. So the denominator 2PQ in Lemma A is nonzero.

These confirm that all denominators occurring above are nonzero for a nondegenerate convex hexagon, so the rational identities of §2 and §4 are valid.

### 6. Assembling (★)

By BC = EF and Lemma C,
        g₁ = −AD/BC = −AD/EF = g₂,
i.e. (X.y − O₁.y)/r₁ = (O₂.y − Y.y)/r₂, equivalently
        r₂·(X.y − O₁.y) = r₁·(O₂.y − Y.y).            (vertical components)
By Lemma A, X.x − O₁.x = 0, and by Lemma B, O₂.x − Y.x = 0, so
        r₂·(X.x − O₁.x) = 0 = r₁·(O₂.x − Y.x).         (horizontal components)
Combining the two coordinate equations gives the vector identity
        r₂·(X − O₁) = r₁·(O₂ − Y),
which is exactly (★).

### 7. Conclusion

By §0, the signed identity (★) yields H − X = (r₁/(r₁+r₂))·(Y − X) with H = (r₂O₁ + r₁O₂)/(r₁+r₂) the internal center of similitude of ω₁, ω₂. Since the disks of ω₁, ω₂ are disjoint (the non-tangent / no-common-interior-points hypothesis), H is the meeting point of the two common internal tangents. As X ≠ Y, the relation H − X = (r₁/(r₁+r₂))(Y − X) places H on line XY. Therefore the intersection point of the common internal tangents of ω₁ and ω₂ lies on line XY. ∎
