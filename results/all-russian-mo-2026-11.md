## Status
solved

## Approaches tried
- **[Round 2 proof-reviewer]** Independent adversarial verification: re-derived H=A+B+C,
  the three radius-1 circles, the six tangent normals/distances, Lemma L1, the Step-7
  reduction, and the Step-8 determinant identity. Numerically stress-tested over 2000
  random acute scalene triangles (max error ~1e-14): in every case r1+r2=1, I1+I2=H,
  both incenters interior with positive inradius, H strictly inside all three half-planes
  (confirming the Step-4 outward-orientation claim), and the diagonals HO, I1I2 share a
  midpoint. Lemma L1 residual ~1e-16; det[M1,M2,u]=0 to ~1e-16. No gap found. APPROVE/solved.
- Closed-form computation of the six tangent lines, the two triangles' vertices and
  incenters, then subtracting — dead end (messy trig quotients; recorded by explorer).
- Complex coordinates with `O=0`, unit circumcircle. Reduce the parallelogram claim to
  the single vector identity `I1+I2=H`. Split into (a) a linear identity in the
  perpendicular-distance data giving `I1+I2=H ⟺ r1+r2=R`, and (b) the metric identity
  `r1+r2=R` via an inradius/circumradius trig computation — **worked**; full proof below.

## Current best
Complete proof (below). The crux is the convention-free equivalence
`I1+I2 = H ⟺ r1+r2 = R` (★), proved by an outward-normal signed-distance argument together with
the d-sum Lemma L1 (`d_X^(1)+d_X^(2) = ⟨H,−X⟩+1`). The metric identity `r1+r2 = R` is then proved
by a single, sign-clean determinant computation: writing the two incenters as the unique
solutions of a shared 3×3 linear system `M(x,y,r)ᵀ = e^(k)` (column for `r` is `(1,1,1)ᵀ`),
Cramer's rule plus L1 plus column-linearity give `r1+r2 = det M / det M = 1` exactly, with no
length, angle, or orientation sign tracking.

## Full proof

Throughout, identify the plane with the complex numbers ℂ. Let `O` be the origin, take the
circumcircle of `ABC` to be the **unit circle** (circumradius `R = 1`), and write
`A, B, C` for the unit complex numbers representing the vertices, so `|A| = |B| = |C| = 1`.
Let `α, β, γ` be the interior angles of `ABC` at `A, B, C`; since the triangle is acute and
scalene, `α, β, γ ∈ (0, π/2)`, they are pairwise distinct, and `α + β + γ = π`.

For complex numbers `z, w` write `⟨z, w⟩ := Re(z·w̄)` for the real inner product; it is the
ordinary dot product of the corresponding plane vectors. For a unit complex number `N`, the
set `{ z : ⟨z, N⟩ = d }` is the line with unit normal `N` at signed distance `d` from `O`.

### Step 1. Orthocenter and the three auxiliary circles.

**Orthocenter.** With the circumcenter at the origin and `R = 1`, the orthocenter of `ABC`
is `H = A + B + C`. This is the classical unit-circumcircle identity for the orthocenter
(complex-coordinate toolkit, `knowledge_base.md` "Coordinates / complex"): one checks, e.g.,
that `H − A = B + C` is perpendicular to `B − C`, because
`⟨B+C, B−C⟩ = Re((B+C)(B̄−C̄)) = Re(|B|² − BC̄ + CB̄ − |C|²) = Re(CB̄ − BC̄) = 0`
(the quantity `CB̄ − BC̄` is purely imaginary). Thus `AH ⟂ BC`, and symmetrically
`BH ⟂ CA`, `CH ⟂ AB`, so `A+B+C` is the common point of the three altitudes, i.e. `H`.

**The circle `ω_A` of `BHC`.** Let `O_A := B + C`. Then
`|B − O_A| = |B − B − C| = |−C| = 1`, `|C − O_A| = |B| = 1`, and, using `H = A+B+C`,
`|H − O_A| = |A + B + C − B − C| = |A| = 1`. Hence `B, C, H` all lie on the circle of center
`O_A = B + C` and radius `1`. Three non-collinear points lie on a unique circle (`B, C, H`
are not collinear because `ABC` is a genuine triangle and `H` is not on line `BC`); therefore
that circle **is** the circumcircle `ω_A` of `BHC`, with center `B + C` and radius `1 = R`.
Symmetrically, the circumcircle `ω_B` of `CHA` has center `O_B := C + A` and radius `1`, and
the circumcircle `ω_C` of `AHB` has center `O_C := A + B` and radius `1`. (Same three checks:
`|C − O_B| = |A| = 1`, `|A − O_B| = |C| = 1`, `|H − O_B| = |B| = 1`, and likewise for `ω_C`.)

### Step 2. The six tangent lines and their normals.

For a point `P` lying on a circle of center `G` and any radius, the tangent at `P` is
perpendicular to the radius `GP`; hence its outward unit normal (pointing from `G` through
`P`) is `N = (P − G)/|P − G|`, and the tangent line is
`{ z : ⟨z, N⟩ = ⟨P, N⟩ }`. We record the line as `{ ⟨z, N⟩ = d }` with `d := ⟨P, N⟩`.

Apply this to the six required tangents. Each `|P − G|` below equals `1` (Step 1), so the
normals are exactly the indicated unit vectors.

- Tangent to `ω_A` at `B`: `N = B − O_A = B − (B+C) = −C`. `d = ⟨B, −C⟩ = −⟨B, C⟩`.
- Tangent to `ω_A` at `C`: `N = C − O_A = −B`. `d = ⟨C, −B⟩ = −⟨B, C⟩`.
- Tangent to `ω_B` at `C`: `N = C − O_B = C − (C+A) = −A`. `d = ⟨C, −A⟩ = −⟨C, A⟩`.
- Tangent to `ω_B` at `A`: `N = A − O_B = −C`. `d = ⟨A, −C⟩ = −⟨C, A⟩`.
- Tangent to `ω_C` at `A`: `N = A − O_C = A − (A+B) = −B`. `d = ⟨A, −B⟩ = −⟨A, B⟩`.
- Tangent to `ω_C` at `B`: `N = B − O_C = −A`. `d = ⟨B, −A⟩ = −⟨A, B⟩`.

(Here `⟨X, Y⟩ = Re(XȲ) = ⟨Y, X⟩`, so `⟨B,−C⟩ = −⟨B,C⟩`, etc.)

By the problem statement, `T_1` is bounded by the tangents at `B` (to `ω_A`), at `A` (to
`ω_C`), and at `C` (to `ω_B`); `T_2` by the tangents at `C` (to `ω_A`), at `B` (to `ω_C`),
and at `A` (to `ω_B`). Collecting:

- **`T_1` sides:** `s_A^{(1)}: ⟨z, −A⟩ = d_A^{(1)}`, `s_B^{(1)}: ⟨z, −B⟩ = d_B^{(1)}`,
  `s_C^{(1)}: ⟨z, −C⟩ = d_C^{(1)}`, where
  `d_A^{(1)} = −⟨C, A⟩` (tangent `ω_B@C`),
  `d_B^{(1)} = −⟨A, B⟩` (tangent `ω_C@A`),
  `d_C^{(1)} = −⟨B, C⟩` (tangent `ω_A@B`).
- **`T_2` sides:** `s_A^{(2)}: ⟨z, −A⟩ = d_A^{(2)}`, `s_B^{(2)}: ⟨z, −B⟩ = d_B^{(2)}`,
  `s_C^{(2)}: ⟨z, −C⟩ = d_C^{(2)}`, where
  `d_A^{(2)} = −⟨A, B⟩` (tangent `ω_C@B`),
  `d_B^{(2)} = −⟨B, C⟩` (tangent `ω_A@C`),
  `d_C^{(2)} = −⟨C, A⟩` (tangent `ω_B@A`).

Both triangles use the **same three normal directions** `−A, −B, −C`; only the three signed
distances differ. For the subscript `X ∈ {A, B, C}`, `s_X^{(k)}` denotes the side of `T_k`
with outward normal `−X`, and `d_X^{(k)}` its signed distance. We use the labels `−A, −B, −C`
as the outward normals; the orientation claim is discharged in Step 4.

### Step 3. Incenter as the equal-signed-distance point (with a fixed sign convention).

Let a triangle have its three sides on the lines `{ ⟨z, N_j⟩ = d_j }`, `j ∈ {1,2,3}`, where
each `N_j` is a unit vector and, for every side `j`, the whole triangle lies in the closed
half-plane `{ ⟨z, N_j⟩ ≤ d_j }` (i.e. `N_j` is the **outward** normal). For a point `z`, the
signed quantity `⟨z, N_j⟩ − d_j` is the negative of the distance from `z` to side `j` when `z`
is on the interior side; concretely the Euclidean distance from `z` to line `j` is
`|⟨z, N_j⟩ − d_j|`, and for interior `z` this equals `d_j − ⟨z, N_j⟩ ≥ 0`.

The incenter `I` is the unique interior point equidistant (distance `r`, the inradius) from
all three sides. Hence
`d_j − ⟨I, N_j⟩ = r` for `j = 1, 2, 3`, i.e.
**`⟨I, N_j⟩ = d_j − r`** for all `j`, with the **same** `r` and the **same** outward normals.
This linear system (three equations, two unknowns plus `r`) is exactly the characterization of
the incenter; we use only that the incenter satisfies it.

### Step 4. Outward orientation of the normals `−A, −B, −C`.

We must check that the three tangent lines of `T_k` bound a genuine bounded triangle and that,
with the **outward** normals `−A, −B, −C` of Step 2, the triangle lies in `{ ⟨z, N⟩ ≤ d }` for
each side; this is the hypothesis of Step 3.

**The three lines bound a bounded triangle.** The three normals `−A, −B, −C` are pairwise
non-parallel: the angle between `−X` and `−Y` equals the central angle of chord `XY`, which is
`2α, 2β, 2γ` (proved in Step 5), each in `(0, π)` since `α, β, γ < π/2`; in particular no two
normals are equal or opposite, so the three lines have three distinct pairwise intersection
points `V_A, V_B, V_C` (with `V_X := s_Y^{(k)} ∩ s_Z^{(k)}` the vertex opposite side `s_X^{(k)}`,
`{X,Y,Z}={A,B,C}`). Moreover the three normals `−A, −B, −C` **positively span** the plane: their
arguments, ordered around the circle, have consecutive gaps `2α, 2β, 2γ` summing to `2π`, each
`< π` (acuteness), so they are not contained in any closed half-plane. Three lines whose normals
positively span the plane bound a unique bounded triangle, and its interior is an intersection of
three open half-planes, one bounded by each line.

**The interior side is the `−N` side.** We pin down which half-plane is interior by exhibiting one
point — the orthocenter `H` — strictly on the `−N_j` side of all three lines, using the following
disk-containment fact. Each side of `T_k` is tangent to one of the radius-`1` circles
`ω_A, ω_B, ω_C`, and its outward normal `−A`, `−B`, or `−C` points **away** from that circle's
center. Concretely, side `s_A^{(1)}` is the tangent to `ω_B` (center `O_B = C+A`, radius `1`) at
`C`, with normal `(C − O_B)/|C − O_B| = (C − C − A)/1 = −A`. For any `z` in the closed disk of
`ω_B` (`|z − O_B| ≤ 1`),
`⟨z, −A⟩ = ⟨O_B, −A⟩ + ⟨z − O_B, −A⟩ ≤ ⟨O_B, −A⟩ + |z − O_B|·|−A| ≤ ⟨O_B, −A⟩ + 1`
by Cauchy–Schwarz (`|−A| = 1`), and
`⟨O_B, −A⟩ + 1 = ⟨C + A, −A⟩ + 1 = −⟨C, A⟩ − ⟨A, A⟩ + 1 = −⟨C, A⟩ − 1 + 1 = −⟨C, A⟩ = d_A^{(1)}`.
Hence the **entire closed disk of `ω_B` lies in `{ ⟨z, −A⟩ ≤ d_A^{(1)} }`**, i.e. on the `−A`
side of `s_A^{(1)}`, touching it only at `C`. In particular the center `O_B` lies strictly on the
`−A` side: `⟨O_B, −A⟩ = d_A^{(1)} − 1 < d_A^{(1)}`.

Symmetrically (same computation with the roles permuted), `s_B^{(1)}` is tangent to `ω_C` at `A`
with the closed disk of `ω_C` on the `−B` side, and `s_C^{(1)}` is tangent to `ω_A` at `B` with
the closed disk of `ω_A` on the `−C` side. Now consider the orthocenter point `H`. We claim `H`
lies strictly on the `−A`, `−B`, `−C` side of all three lines. For `s_A^{(1)}`: `H = A+B+C =
O_B + B`, and `|H − O_B| = |B| = 1`, so `H` is on the boundary circle `ω_B`; since the whole
closed disk of `ω_B` is in `{ ⟨z, −A⟩ ≤ d_A^{(1)} }`, `H` satisfies `⟨H, −A⟩ ≤ d_A^{(1)}`, with
equality only if `H` is the tangency point `C`; but `H ≠ C` (else `A + B = 0`, i.e. `A = −B`,
forbidden by acuteness as `2γ = π`), so `⟨H, −A⟩ < d_A^{(1)}`. Likewise `⟨H, −B⟩ < d_B^{(1)}` and
`⟨H, −C⟩ < d_C^{(1)}`. Thus `H` lies strictly inside all three half-planes `{ ⟨z, −X⟩ < d_X^{(1)} }`,
so their common intersection is nonempty and is exactly the open triangle `T_1`; its interior is
the `−A, −B, −C` side of the three lines, and the closed triangle `T_1` lies in
`{ ⟨z, −X⟩ ≤ d_X^{(1)} }` for each `X ∈ {A, B, C}`. The normals `−A, −B, −C` are therefore the
**outward** normals of `T_1`, as required by Step 3.

For `T_2` the six tangent lines are the same three circles' tangents at the other tangency
points; the identical argument (e.g. `s_A^{(2)}` = tangent to `ω_C` at `B`, normal `−A`, disk of
`ω_C` on the `−A` side; `H = O_C + C` lies on `ω_C` and `H ≠ B` since `H = B ⟺ A = −C ⟺ 2β = π`,
excluded by acuteness) shows `H` is strictly inside all three half-planes of `T_2`, so `−A, −B, −C`
are the outward normals of `T_2` as well.

Consequently, by Step 3, with **outward** normals `−A, −B, −C` and inradii `r_1, r_2`,
the incenters `I_1` of `T_1` and `I_2` of `T_2` satisfy, for each `X ∈ {A, B, C}`,
`⟨I_1, −X⟩ = d_X^{(1)} − r_1` and `⟨I_2, −X⟩ = d_X^{(2)} − r_2`. (†)

### Step 5. The angles of `T_1` and `T_2` are `π−2α, π−2β, π−2γ`.

The two sides `s_X^{(k)}` and `s_Y^{(k)}` (`X ≠ Y`) meet at a vertex; their outward normals
are `−X` and `−Y`. At a vertex of a convex triangle the interior angle equals
`π −` (the angle between the two **outward** normals). The angle between the unit vectors `−X`
and `−Y` equals the angle between `X` and `Y`, which is the central angle subtending the chord
`XY` of the unit circle.

The central angle subtending chord `BC` equals twice the inscribed angle `α` at `A`, i.e.
`2α`; similarly chords `CA`, `AB` subtend `2β`, `2γ`. Since `α, β, γ ∈ (0, π/2)`, each of
`2α, 2β, 2γ ∈ (0, π)`, so these are the genuine angles between the respective normal pairs.
Therefore:

- The vertex `s_B^{(k)} ∩ s_C^{(k)}` (normals `−B, −C`, central angle `2α`) has interior angle
  `π − 2α`.
- The vertex `s_C^{(k)} ∩ s_A^{(k)}` (normals `−C, −A`, central angle `2β`) has interior angle
  `π − 2β`.
- The vertex `s_A^{(k)} ∩ s_B^{(k)}` (normals `−A, −B`, central angle `2γ`) has interior angle
  `π − 2γ`.

These sum to `3π − 2(α+β+γ) = 3π − 2π = π`, confirming a valid triangle. Both `T_1` and `T_2`
have the **same** three angles `π − 2α, π − 2β, π − 2γ` (they share the normal directions; only
the signed distances differ, which translates the lines but not the directions). Acuteness is
used here: each `π − 2θ ∈ (0, π)` exactly because `θ < π/2`. This is **Lemma L2a**.

### Step 6. The key linear reduction: `I_1 + I_2 = H ⟺ r_1 + r_2 = 1`.

Fix the direction `A` and work in the outward frame `N_out := −A`. From (†) with `X = A`,
`⟨I_1, −A⟩ = d_A^{(1)} − r_1`, `⟨I_2, −A⟩ = d_A^{(2)} − r_2`.
Adding, `⟨I_1 + I_2, −A⟩ = (d_A^{(1)} + d_A^{(2)}) − (r_1 + r_2)`. (1)

**Lemma L1 (d-sum, outward frame).** `d_A^{(1)} + d_A^{(2)} = ⟨H, −A⟩ + 1`.

*Proof.* From Step 2, `d_A^{(1)} = −⟨C, A⟩` and `d_A^{(2)} = −⟨A, B⟩`. Hence
`d_A^{(1)} + d_A^{(2)} = −⟨C, A⟩ − ⟨A, B⟩ = −⟨A, B + C⟩`.
Now `⟨A, B + C⟩ = ⟨A, H − A⟩ = ⟨A, H⟩ − ⟨A, A⟩ = ⟨A, H⟩ − 1` (using `H = A+B+C` and
`⟨A, A⟩ = 1`). Therefore
`d_A^{(1)} + d_A^{(2)} = −(⟨A, H⟩ − 1) = −⟨A, H⟩ + 1 = ⟨−A, H⟩ + 1 = ⟨H, −A⟩ + 1`,
since `⟨·,·⟩` is symmetric. ∎

Substituting L1 into (1):
`⟨I_1 + I_2, −A⟩ = ⟨H, −A⟩ + 1 − (r_1 + r_2)`,
i.e.
`⟨I_1 + I_2 − H, −A⟩ = 1 − (r_1 + r_2).` (2_A)

The identical computation with `A` replaced by `B` (using `d_B^{(1)} = −⟨A,B⟩`,
`d_B^{(2)} = −⟨B,C⟩`, so `d_B^{(1)} + d_B^{(2)} = −⟨B, A+C⟩ = −⟨B, H−B⟩ = ⟨H, −B⟩ + 1`) gives
`⟨I_1 + I_2 − H, −B⟩ = 1 − (r_1 + r_2),` (2_B)
and with `C` (using `d_C^{(1)} = −⟨B,C⟩`, `d_C^{(2)} = −⟨C,A⟩`, so
`d_C^{(1)} + d_C^{(2)} = −⟨C, A+B⟩ = ⟨H, −C⟩ + 1`),
`⟨I_1 + I_2 − H, −C⟩ = 1 − (r_1 + r_2).` (2_C)

Write `w := I_1 + I_2 − H` and `δ := 1 − (r_1 + r_2)`. Equations (2_A)–(2_C) read
`⟨w, −A⟩ = ⟨w, −B⟩ = ⟨w, −C⟩ = δ`, equivalently
`⟨w, A⟩ = ⟨w, B⟩ = ⟨w, C⟩ = −δ`. (3)

**Step 7 (forcing `w = 0`).** Since `ABC` is scalene, no two of `A, B, C` are equal, and (being
distinct points of the unit circle) no two are antipodal in a way making them ℝ-parallel:
two unit vectors `A, B` are ℝ-linearly dependent only if `A = ±B`; `A = B` is excluded by
distinctness, and `A = −B` would make `α` (whose central angle `2γ` is the angle between
`A, B`) satisfy `2γ = π`, i.e. `γ = π/2`, contradicting acuteness. Hence `A` and `B` are
**ℝ-linearly independent** as vectors in ℝ². Therefore the two real linear conditions in (3),
`⟨w, A⟩ = −δ` and `⟨w, B⟩ = −δ`, determine `w` uniquely: the `2×2` real matrix with rows
`A, B` is invertible. In particular,
`w = 0 ⟺ ⟨w, A⟩ = ⟨w, B⟩ = 0 ⟺ −δ = 0 ⟺ δ = 0.`
Spelling out the equivalence we need: if `δ = 0` then `⟨w, A⟩ = ⟨w, B⟩ = 0`, and since `A, B`
are ℝ-independent the only solution of this `2×2` homogeneous system is `w = 0`. Conversely if
`w = 0` then `δ = −⟨0, A⟩ = 0`. Thus
`I_1 + I_2 = H ⟺ δ = 0 ⟺ r_1 + r_2 = 1 = R.` (★)

This is the convention-free reduction. (We only use the direction `δ = 0 ⟹ w = 0` below.)

### Step 8. The metric identity `r_1 + r_2 = R = 1`.

By (★) it remains only to prove `r_1 + r_2 = 1`. We do this directly from the incenter
equations (†), with no length or angle computation, by a single determinant identity. This
route is fully sign-clean.

**The shared linear system.** Identify the plane with ℝ² and write `−A = (a_1, a_2)`,
`−B = (b_1, b_2)`, `−C = (c_1, c_2)` (the three outward normals as real vectors), and
`I_k = (x_k, y_k)`. The incenter equations (†), `⟨I_k, N_j⟩ = d_j^{(k)} − r_k`, rearrange to
`⟨I_k, N_j⟩ + r_k = d_j^{(k)}`, i.e. the coefficient of `r_k` is `+1` in each equation. In
matrix form, with the **same** coefficient matrix for both triangles,
```
        [ a_1  a_2  1 ] [ x_k ]   [ d_A^{(k)} ]
   M·v_k = [ b_1  b_2  1 ] [ y_k ] = [ d_B^{(k)} ] = e^{(k)},     M := [ a_1 a_2 1 ; b_1 b_2 1 ; c_1 c_2 1 ],
        [ c_1  c_2  1 ] [ r_k ]   [ d_C^{(k)} ]
```
where `e^{(k)} = (d_A^{(k)}, d_B^{(k)}, d_C^{(k)})^T` and `v_k = (x_k, y_k, r_k)^T`. The matrix
`M` is invertible: its determinant is
`det M = det[ a_1, a_2, 1 ; b_1, b_2, 1 ; c_1, c_2, 1 ]`, which is `2` times the signed area of
the triangle with vertices `−A, −B, −C`. Since `−A, −B, −C` are three distinct, non-collinear
points (they are `−1` times three distinct points of the unit circle, hence themselves three
distinct points of the unit circle, and three points of a circle are non-collinear), this
signed area is nonzero, so `det M ≠ 0`. Thus `v_k = M^{-1} e^{(k)}` is the unique solution, and
by Cramer's rule its third coordinate is
`r_k = (det M_k)/(det M)`, where `M_k` is `M` with its **third column** `(1,1,1)^T` replaced by
`e^{(k)}`.

**Summing.** The determinant is linear in the replaced column, so
`r_1 + r_2 = (det M_1 + det M_2)/det M = (det M_*)/det M`,
where `M_*` is `M` with its third column replaced by the **sum**
`e^{(1)} + e^{(2)} = (d_A^{(1)}+d_A^{(2)},\ d_B^{(1)}+d_B^{(2)},\ d_C^{(1)}+d_C^{(2)})^T`.

By Lemma L1 (Step 6), proved in all three frames, this sum-column equals
`(⟨H,−A⟩+1,\ ⟨H,−B⟩+1,\ ⟨H,−C⟩+1)^T = u + 𝟙`,
where `u := (⟨H,−A⟩, ⟨H,−B⟩, ⟨H,−C⟩)^T` and `𝟙 := (1,1,1)^T`.

**Splitting the determinant.** Denote the three columns of `M` by `M^{(1)} = (a_1,b_1,c_1)^T`,
`M^{(2)} = (a_2,b_2,c_2)^T`, `M^{(3)} = 𝟙`. By column-linearity of the determinant,
`det M_* = det[ M^{(1)}, M^{(2)}, u + 𝟙 ] = det[ M^{(1)}, M^{(2)}, u ] + det[ M^{(1)}, M^{(2)}, 𝟙 ].`

- **Second term.** `det[ M^{(1)}, M^{(2)}, 𝟙 ]` is precisely `det M` (its third column `𝟙` is
  the third column of `M`). So `det[ M^{(1)}, M^{(2)}, 𝟙 ] = det M`.

- **First term is `0`.** The `j`-th entry of `u` is `u_j = ⟨H, N_j⟩` where `N_1 = −A`,
  `N_2 = −B`, `N_3 = −C` are the rows' normals. Writing `H = (H_x, H_y)`,
  `u_j = ⟨H, N_j⟩ = (N_j)_1 H_x + (N_j)_2 H_y`. But the column of first components
  `((N_1)_1, (N_2)_1, (N_3)_1)^T = (a_1, b_1, c_1)^T = M^{(1)}` and the column of second
  components `((N_1)_2, (N_2)_2, (N_3)_2)^T = (a_2, b_2, c_2)^T = M^{(2)}`. Hence
  `u = H_x · M^{(1)} + H_y · M^{(2)}`,
  a linear combination of the first two columns of `M`. A determinant with a column equal to a
  linear combination of two other columns vanishes:
  `det[ M^{(1)}, M^{(2)}, u ] = det[ M^{(1)}, M^{(2)}, H_x M^{(1)} + H_y M^{(2)} ] = 0.`

Therefore
`det M_* = 0 + det M = det M`,
and
`r_1 + r_2 = (det M_*)/(det M) = (det M)/(det M) = 1 = R.` (12)

This derivation is exact and free of sign ambiguity: the inradii `r_1, r_2` are the third
coordinates of the unique solutions of the two linear systems, the coefficient column for `r`
is `(1,1,1)^T` (forced by the form `⟨I_k,N_j⟩ + r_k = d_j^{(k)}` of (†), which has `r_k` with
coefficient `+1`), and the sum-of-determinants telescopes to `det M` exactly. No magnitude or
orientation of `det M` is needed — it cancels in the ratio. (Acuteness entered earlier, in
Step 4's orientation argument and Step 5's angle ranges; here we use only `det M ≠ 0`, i.e.
that `A, B, C` are distinct non-collinear points, guaranteed since they are three points of the
unit circle forming a triangle.)

### Step 9. Conclusion.

By (12), `r_1 + r_2 = R`. By the reduction (★) of Steps 6–7, this is equivalent to
`I_1 + I_2 = H`. Since `O = 0`, the identity `I_1 + I_2 = H` reads `I_1 + I_2 = H + O`, i.e.
`½(I_1 + I_2) = ½(H + O)`: the midpoint of segment `I_1 I_2` coincides with the midpoint of
segment `H O`. A quadrilateral whose diagonals bisect each other is a parallelogram; the
quadrilateral `H I_1 O I_2` has diagonals `HO` and `I_1 I_2`, which share a midpoint. Hence
`H I_1 O I_2` is a parallelogram (degenerating to a collinear configuration only if the four
points are collinear, which the problem explicitly permits as the alternative). This is exactly
the required conclusion. ∎

## Where the hypotheses are used

- **Acute** (`α, β, γ < π/2`): in Step 4–5 it guarantees the pairwise angles between the
  normals `−A, −B, −C` are `2α, 2β, 2γ ∈ (0, π)`, so the three normals positively span the
  plane (their angles sum to `2π` and no closed half-plane contains all three), making `T_1`,
  `T_2` genuine bounded triangles with the outward-normal orientation of (†). Acuteness also
  makes `A ≠ −B` etc. (no central angle equals `π`), which is what gives the ℝ-independence used
  in Step 7.
- **Scalene** (`A, B, C` distinct, no two antipodal): in Step 7, two of `A, B, C` are
  ℝ-linearly independent, forcing `w = I_1+I_2−H = 0` from the two real conditions `⟨w,A⟩ =
  ⟨w,B⟩ = 0`. Distinctness/non-collinearity of `A, B, C` also gives `det M ≠ 0` in Step 8.

Both the reduction (★) (Steps 6–7) and the metric identity `r_1 + r_2 = 1` (Step 8) are derived
exactly, with every displayed equality an identity and no residual sign or magnitude ambiguity.
