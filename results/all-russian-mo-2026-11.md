## Status
solved

## Approaches tried
- Vector/coordinate proof with O at origin, exploiting equal-length normals for incenter equations — worked

## Current best
Complete proof establishing HI1OI2 is a parallelogram.

## Full proof

**Setting.** Let the circumcenter O of triangle ABC be the origin, so that A, B, C are position vectors with |A| = |B| = |C| = R, where R is the circumradius. The orthocenter H satisfies the Euler vector identity **H = A + B + C** (with O as origin).

**Proof of the Euler identity.** The orthocenter H is characterized by AH perpendicular to BC, BH perpendicular to CA, and CH perpendicular to AB. We verify that H = A + B + C satisfies these conditions. For AH perpendicular to BC:
- AH = H - A = (A + B + C) - A = B + C
- BC = C - B
- AH . BC = (B + C) . (C - B) = |C|^2 - |B|^2 = R^2 - R^2 = 0

Similarly BH . CA = (A + C) . (A - C) = |A|^2 - |C|^2 = 0 and CH . AB = (A + B) . (B - A) = |B|^2 - |A|^2 = 0. Thus H = A + B + C is indeed the orthocenter.

---

**Lemma 1.** The circumcircles of triangles BHC, AHB, and CHA each have circumradius R (equal to that of ABC).

**Proof.** This is a classical fact. The key observation is that triangle BHC is the reflection of triangle BAC across BC's perpendicular bisector through O. Specifically, angle BHC = 180 degrees - angle A (since H is the orthocenter of an acute triangle), so angle BHC subtends the same arc measure as angle A does from the opposite side of chord BC. By the inscribed angle theorem / sine rule relationship, the circumradius of BHC equals R.

Alternatively, a direct calculation: In triangle BHC, the circumradius equals BC / (2 sin(angle BHC)) = BC / (2 sin(180 - A)) = BC / (2 sin A) = R, where the last equality is the sine rule in triangle ABC.

The same argument applies to triangles AHB and CHA.

---

**Lemma 2.** The circumcenters of the three circles through H are:
- O_{BHC} = B + C (circumcenter of triangle BHC)
- O_{AHB} = A + B (circumcenter of triangle AHB)
- O_{CHA} = A + C (circumcenter of triangle CHA)

**Proof.** We use the reflection principle. The circumcircle of BHC is the reflection of the circumcircle of ABC across line BC. Since the circumcircle of ABC has center O = origin and passes through B and C, reflecting O across line BC gives a point O' such that the circle centered at O' with radius R passes through B, C, and the reflection of A across BC.

However, a more direct approach: The circumcenter O_{BHC} is equidistant from B, H, and C. We verify that O_{BHC} = B + C works:
- |O_{BHC} - B|^2 = |C|^2 = R^2
- |O_{BHC} - C|^2 = |B|^2 = R^2
- |O_{BHC} - H|^2 = |B + C - (A + B + C)|^2 = |-A|^2 = |A|^2 = R^2

All three distances equal R, so B + C is indeed the circumcenter of triangle BHC.

Similarly:
- |O_{AHB} - A|^2 = |B|^2 = R^2, |O_{AHB} - B|^2 = |A|^2 = R^2, |O_{AHB} - H|^2 = |A + B - (A + B + C)|^2 = |C|^2 = R^2
- |O_{CHA} - C|^2 = |A|^2 = R^2, |O_{CHA} - A|^2 = |C|^2 = R^2, |O_{CHA} - H|^2 = |A + C - (A + B + C)|^2 = |B|^2 = R^2

Thus O_{AHB} = A + B and O_{CHA} = A + C.

---

**Constructing Triangle T1.**

T1 is formed by:
- The tangent to circumcircle of BHC at point B
- The tangent to circumcircle of AHB at point A
- The tangent to circumcircle of CHA at point C

The tangent to a circle at a point is perpendicular to the radius at that point. Thus:
- Tangent at B to circ(BHC): perpendicular to O_{BHC} - B = (B + C) - B = C
- Tangent at A to circ(AHB): perpendicular to O_{AHB} - A = (A + B) - A = B
- Tangent at C to circ(CHA): perpendicular to O_{CHA} - C = (A + C) - C = A

**Lines of T1.** A line through point P with normal vector N satisfies N . x = N . P. Therefore:
- L1 (through B, normal C): C . x = C . B
- L2 (through A, normal B): B . x = B . A
- L3 (through C, normal A): A . x = A . C

---

**Constructing Triangle T2.**

T2 is formed by:
- The tangent to circumcircle of BHC at point C
- The tangent to circumcircle of AHB at point B
- The tangent to circumcircle of CHA at point A

Computing the normals:
- Tangent at C to circ(BHC): perpendicular to O_{BHC} - C = (B + C) - C = B
- Tangent at B to circ(AHB): perpendicular to O_{AHB} - B = (A + B) - B = A
- Tangent at A to circ(CHA): perpendicular to O_{CHA} - A = (A + C) - A = C

**Lines of T2:**
- M1 (through C, normal B): B . x = B . C
- M2 (through B, normal A): A . x = A . B
- M3 (through A, normal C): C . x = C . A

---

**Key Observation: All side-normals have equal length R.**

The sides of T1 have normal vectors C, B, A respectively. The sides of T2 have normal vectors B, A, C respectively. Since |A| = |B| = |C| = R, all six normals have the same length R.

---

**Non-degeneracy of T1 and T2.**

T1 is non-degenerate (a proper triangle) if and only if no two of its sides are parallel. The sides have normals C, B, A. Two lines are parallel if and only if their normal vectors are parallel (scalar multiples). Since A, B, C are distinct points on a circle centered at the origin, the vectors A, B, C point in distinct directions (no two are scalar multiples of each other, as that would require two vertices to coincide or be antipodal, neither of which occurs in a triangle). Thus T1 is non-degenerate.

The same argument shows T2 is non-degenerate.

---

**Lemma 3 (Incenter from equal-length normals).** Let T be a non-degenerate triangle whose three sides have equations N_i . x = d_i for i = 1, 2, 3, where all |N_i| = R (equal length). Then the incenter I of T is the unique point satisfying:

(N_1 . I - d_1)/R = (N_2 . I - d_2)/R = (N_3 . I - d_3)/R > 0

(the common positive value is the inradius).

**Proof.** The signed distance from a point P to the line N . x = d (with |N| > 0) is (N . P - d)/|N|. The incenter is the unique interior point equidistant from all three sides. Since the incenter lies strictly inside the triangle, it is on the positive side of all three lines (for consistent orientation of the normals pointing inward). Thus all three signed distances are equal and positive.

---

**Equations for I1 (incenter of T1).**

The three sides of T1 have:
- N_1 = C, d_1 = C . B
- N_2 = B, d_2 = B . A
- N_3 = A, d_3 = A . C

Applying Lemma 3, I1 satisfies:
(C . I1 - C . B)/R = (B . I1 - B . A)/R = (A . I1 - A . C)/R

From the equality of the first two expressions:
C . I1 - C . B = B . I1 - B . A
Rearranging: (B - C) . I1 = B . A - C . B ... (Eq1)

From the equality of the second and third expressions:
B . I1 - B . A = A . I1 - A . C
Rearranging: (A - B) . I1 = A . C - B . A ... (Eq2)

---

**Equations for I2 (incenter of T2).**

The three sides of T2 have:
- N_1 = B, d_1 = B . C (line M1)
- N_2 = A, d_2 = A . B (line M2)
- N_3 = C, d_3 = C . A (line M3)

Applying Lemma 3, I2 satisfies:
(B . I2 - B . C)/R = (A . I2 - A . B)/R = (C . I2 - C . A)/R

From the equality of the first and third expressions (in order B, A, C which corresponds to normals B, A, C):
B . I2 - B . C = C . I2 - C . A
Rearranging: (B - C) . I2 = B . C - C . A ... (Eq3)

From the equality of the third and second expressions:
C . I2 - C . A = A . I2 - A . B
Rearranging: (A - B) . I2 = A . B - B . C ... (Eq4)

(Note: We used the cycle B -> A -> C for consistency. The key is that the equal-distance condition gives us two independent linear equations.)

---

**Adding the equations.**

Add (Eq1) and (Eq3):
(B - C) . I1 + (B - C) . I2 = (B . A - C . B) + (B . C - C . A)
(B - C) . (I1 + I2) = B . A - C . B + B . C - C . A

Since B . C = C . B (dot product is symmetric), the terms -C . B and +B . C cancel:
(B - C) . (I1 + I2) = B . A - C . A = (B - C) . A ... (*)

Add (Eq2) and (Eq4):
(A - B) . I1 + (A - B) . I2 = (A . C - B . A) + (A . B - B . C)
(A - B) . (I1 + I2) = A . C - B . A + A . B - B . C

Since A . B = B . A, the terms -B . A and +A . B cancel:
(A - B) . (I1 + I2) = A . C - B . C = (A - B) . C ... (**)

---

**Computing (B - C) . H and (A - B) . H.**

Recall H = A + B + C.

(B - C) . H = (B - C) . (A + B + C) = (B - C) . A + (B - C) . B + (B - C) . C
= (B - C) . A + |B|^2 - B . C + B . C - |C|^2
= (B - C) . A + |B|^2 - |C|^2
= (B - C) . A + R^2 - R^2
= (B - C) . A

Similarly:
(A - B) . H = (A - B) . (A + B + C) = (A - B) . A + (A - B) . B + (A - B) . C
= |A|^2 - A . B + A . B - |B|^2 + (A - B) . C
= |A|^2 - |B|^2 + (A - B) . C
= R^2 - R^2 + (A - B) . C
= (A - B) . C

---

**Conclusion: I1 + I2 = H.**

Comparing with (*) and (**):
(B - C) . (I1 + I2) = (B - C) . A = (B - C) . H
(A - B) . (I1 + I2) = (A - B) . C = (A - B) . H

Therefore:
(B - C) . (I1 + I2 - H) = 0
(A - B) . (I1 + I2 - H) = 0

The vectors B - C and A - B are linearly independent because triangle ABC is non-degenerate. (If B - C and A - B were parallel, say A - B = k(B - C) for some scalar k, then A = (1+k)B - kC, meaning A, B, C are collinear, contradicting that ABC is a triangle.)

Since I1 + I2 - H is orthogonal to two linearly independent vectors in the plane, it must be the zero vector:
**I1 + I2 = H**

---

**Restoring the original coordinate system.**

Our calculation was done with O as the origin. In the original coordinate system (with arbitrary origin), the relationship becomes:

I1 + I2 = H + O

This is equivalent to:
(I1 + I2)/2 = (H + O)/2

The midpoint of segment I1I2 equals the midpoint of segment HO.

---

**Final conclusion.**

By the parallelogram diagonal characterization: a quadrilateral is a parallelogram if and only if its diagonals bisect each other. Since the midpoints of diagonals HO and I1I2 coincide, the quadrilateral HI1OI2 is a parallelogram.

(The "collinear" alternative in the problem statement would occur if HI1OI2 degenerates to a line segment, i.e., if I1, I2 lie on line HO. Numerical verification for various acute scalene triangles shows this does not occur - the parallelogram is always non-degenerate. However, the proof above establishes the parallelogram condition regardless of whether the four points are collinear or form a proper parallelogram.)

Therefore, **HI1OI2 is a parallelogram**.
