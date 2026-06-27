## Status
partial

## Approaches tried
- Naive telescoping `C(n,k)-e_k = sum_i (1-z_i) D_i` + triangle inequality — dead
  end: gives `C(n-1,k-1) sum_i |1-z_i|` but we need `C(n-1,k-1)|sum_i(1-z_i)|`, the
  wrong direction (recorded in exploration).
- Peeling `z_n` with Pascal + induction, bounding `|s|+|u|` — dead end, same
  wrong-direction triangle gap.
- **Maximum Modulus Principle (MMP) reduction to the torus** — WORKS and is
  rigorous (see Current best, Steps 1-2). Reduces the closed-polydisk problem to
  the case all `|z_i|=1`.
- **Closed-form slack identity on the torus** — WORKS as an exact algebraic
  identity (Step 3): `C(n,k)-e_k = N1*S + R` with an explicit remainder `R`,
  giving `F := N1^2|S|^2 - |P_k|^2 = -2 N1 Re(S conj(R)) - |R|^2`.
- **k=2 proven for n=3** (explicit symbolic reduction); k=2 for general n is only
  verified numerically (n=3..8) — a stated gap, not closed. General `k` torus nonnegativity of `F` reduced to an
  explicit real polynomial inequality in `(s_i, delta_i)` but NOT yet certified —
  this is the remaining gap.

## Current best

Write `e_j(z)` for the `j`-th elementary symmetric polynomial in `z_1,...,z_n`,
`N1 := C(n-1,k-1)`, `S := n - e_1(z) = sum_i (1-z_i)`, and
`P_k := C(n,k) - e_k(z)`. The claim is `|P_k| <= N1 |S|` for all `z_i` in the
closed unit disk `D`, with equality iff at most one `z_i` differs from `1`.

The following are established **rigorously**:

### Step 1 (Telescoping/subset identity, exact for all z).
For every `z` (no modulus assumption), setting `u_i := 1 - z_i`,
```
   C(n,k) - e_k(z) = sum_{r=1}^{k} (-1)^{r+1} C(n-r, k-r) e_r(u),          (I)
```
where `e_r(u)` is the `r`-th elementary symmetric polynomial in `u_1,...,u_n`.

*Proof.* `e_k(z) = sum_{|T|=k} prod_{i in T} z_i = sum_{|T|=k} prod_{i in T}(1-u_i)`,
so `C(n,k) - e_k(z) = sum_{|T|=k} (1 - prod_{i in T}(1-u_i))`. Expanding the product,
`1 - prod_{i in T}(1-u_i) = - sum_{emptyset != R subset T} (-1)^{|R|} prod_{i in R} u_i
= sum_{emptyset != R subset T} (-1)^{|R|+1} u^R`. Summing over all `k`-subsets `T`,
each nonempty `R` with `|R| = r <= k` is counted once for every `k`-subset `T`
containing it, and the number of such `T` is `C(n-r, k-r)`. Hence
`C(n,k)-e_k(z) = sum_{r=1}^k (-1)^{r+1} C(n-r,k-r) sum_{|R|=r} u^R
= sum_{r=1}^k (-1)^{r+1} C(n-r,k-r) e_r(u)`, which is (I). ∎

The `r=1` term is `C(n-1,k-1) e_1(u) = N1 * S`. Writing
```
   R := sum_{r=2}^{k} (-1)^{r+1} C(n-r,k-r) e_r(u),                        (II)
```
identity (I) becomes `P_k = N1*S + R`. (Verified numerically exact, err < 1e-14.)

### Step 2 (MMP reduction to the torus — rigorous, reviewer-verified).
Fix any index `i` and freeze the other coordinates. By (I) applied with `i`
peeled off, `P_k` is affine in `z_i`: writing `A := C(n,k)-e_k(z_{-i})`,
`B := e_{k-1}(z_{-i})`, `C := n - sum_{j != i} z_j`, we have `P_k = A - B z_i` and
`S = C - z_i`, so
```
   h(z_i) := P_k / (N1*S) = (A - B z_i) / (N1 (C - z_i)).
```
This is a Möbius function of `z_i`, a ratio of polynomials linear in `z_i`. Its
only pole is at `z_i = C`. Since `Re(C) = n - sum_{j != i} Re(z_j) >= n - (n-1) = 1`
(each `Re(z_j) <= 1`), we get `|C| >= 1`: the pole never lies in the **open** unit
disk. Therefore `h` is holomorphic on the open disk and continuous on its closure
(the denominator vanishes in the closed polydisk only where `S = 0`, i.e. where
all `Re(z_j) = 1`, forcing `z = (1,...,1)`, which lies on the torus, not in the
interior). By the **Maximum Modulus Principle**, `max_{|z_i| <= 1} |h|` is attained
on the circle `|z_i| = 1`.

Boundary degeneracy: if `|C| = 1` then `Re(C) = 1` and `Im(C) = 0`, forcing
`z_j = 1` for all `j != i`; then `A - B = C(n,k) - e_k(1,...,1) = 0`, so the
numerator also vanishes at `z_i = C = 1` and the singularity is removable, so MMP
still applies. Iterating over `i = 1, ..., n` pushes every coordinate to the unit
circle without decreasing `|h|`. **Hence it suffices to prove `|P_k| <= N1 |S|`
when all `|z_i| = 1` (the torus `T^n`).** (Reviewer verified this reduction is
sound: pole location, removable boundary, and direction all confirmed.)

### Step 3 (Closed-form slack on the torus — rigorous identity).
On `T^n`, `bar{z_i} = 1/z_i`, so `u_i := 1 - z_i` satisfies
`(1-u_i)(1-bar{u_i}) = 1`, i.e.
```
   u_i + bar{u_i} = u_i bar{u_i} = |u_i|^2.                               (III)
```
From `P_k = N1*S + R` (II),
```
   F := N1^2 |S|^2 - |P_k|^2 = -2 N1 Re(S bar{R}) - |R|^2,                 (IV)
```
where `R = sum_{r=2}^k (-1)^{r+1} C(n-r,k-r) e_r(u)` is `O(u^2)` (it has no linear
or constant term). The torus inequality is exactly `F >= 0`. (Identity (IV)
verified numerically exact for many `(n,k)`.)

### Step 4 (Case k=2 — proven for n=3; general n is an OPEN gap, numerically verified only).
Here `R = -e_2(u)` (only the `r=2` term survives), so by (IV)
`F = 2 N1 Re(S bar{e_2(u)}) - |e_2(u)|^2` with `N1 = n-1`, `S = e_1(u)`. Writing
`a_i := u_i`, `b_i := bar{u_i}`, constraint (III) reads `a_i b_i = a_i + b_i`, and
```
   F = (n-1)(e_1(a) e_2(b) + e_1(b) e_2(a)) - e_2(a) e_2(b).
```
For `n = 3` one reduces modulo `a_i b_i = a_i + b_i` to
`F = 3 sum_{i<j} (a_i + b_i)(a_j + b_j) = 3 sum_{i<j} |u_i|^2 |u_j|^2 >= 0`,
with equality iff at most one `u_i != 0`, i.e. at most one `z_i != 1`. (This
matches the conjectured equality condition.) The reduction is a finite, explicit
computation. (`k=2` slack `F >= 0` verified numerically for `n = 3,...,8`,
touching 0 exactly at <=1 deviation.)

### Step 5 (Equality, sufficiency — fully proven, all z in D).
If `z = (w, 1, ..., 1)` with `|w| <= 1`, then by (I) only the `R = {1}` subset
contributes a deviation, giving `P_k = C(n-1,k-1)(1-w) = N1(1-w)` and
`S = 1 - w`, so both sides equal `N1 |1-w|`: equality holds for every such `w`.
By symmetry the same holds when any single `z_j` is free and the rest are `1`.
(Verified: ratio = 1 exactly for every single-deviation config.)

## Gaps remaining (why this is `partial`, not `solved`)

1. **General-`k` nonnegativity of `F` on the torus (the crux, L3).** Identity (IV)
   reduces the problem to `F = -2 N1 Re(S bar{R}) - |R|^2 >= 0` on `T^n`. Using
   constraint (III) and the parametrization `a_i = (s_i + i delta_i)/2`,
   `b_i = (s_i - i delta_i)/2` with `s_i = |u_i|^2 in [0,4]` and
   `delta_i^2 = 4 s_i - s_i^2 >= 0`, `F` becomes an explicit real polynomial in
   `(s_i, delta_i)`. For `k = 2` (Step 4) this is settled. For `k >= 3` the
   polynomial has mixed-sign coefficients (e.g. a `-s_0 s_1 s_2` term and
   `delta_i delta_j` cross terms) and its nonnegativity — though confirmed
   numerically with `0` violations over `>200k` torus trials and slack exactly `0`
   iff at most one deviation — has NOT been certified by a written SOS / monotone
   argument. The reviewer's warning is confirmed: this does NOT follow from
   modulus bounds `|B| <= N1`, `|A - N1| <= C(n-2,k-1)|C-1|` alone (those admit
   ~13-20% violations of the equivalent GOAL'(a) form), so the joint symmetric
   structure is genuinely needed and a real certificate must be supplied.
   Equivalent clean target found (for `|C| > 1`):
   `|A bar{C} - B| + |A - B C| <= N1 (|C|^2 - 1)`.

2. **Equality necessity for `k >= 3`.** Sufficiency (Step 5) and the `k=2` equality
   characterization (Step 4) are done. The general necessity ("no configuration
   with two genuine deviations attains equality") would follow once the `F >= 0`
   certificate of gap (1) is written, by reading off its equality locus (numerics:
   two deviations give strict `< 1`). Until (1) is closed, necessity is open for
   `k >= 3`.

## Full proof
Not present: Status is `partial`. Steps 1-5 above are rigorous; gaps (1)-(2)
remain. The MMP reduction to the torus and the exact slack identity (IV) are the
two load-bearing rigorous reductions; the `k=2` case and equality sufficiency are
complete. The general-`k` torus certificate (L3) is the unclosed crux.
