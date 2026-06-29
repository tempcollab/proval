## Status
solved

## Approaches tried
- Numerical exploration of the gap structure — established the answer λ=1/2 (0<C<2), λ=1/4 (C≥2) and the worst-gap families; recorded in earlier `Current best`.
- Two-sided estimate via the "sum/difference" parametrization 4a = S²−d² (S=u+v, d=v−u). This is the spine of the final proof: it converts "good" into a clean two-variable lattice condition, gives the in-class STEP-formula exactly, and lets both lower bounds and both covering arguments be carried out with explicit O(1) constants — worked, complete proof below.
- Counting/averaging lower bound (#good numbers in [A,2A] is Θ(A^{3/4})) — used to prove λ≥1/4 for every C>0 with no delicate extremal estimate. Worked.

## Current best
Complete proof (both bounds in both regimes). The answer is
  λ = 1/2 for 0 < C < 2,   λ = 1/4 for C ≥ 2 (C=2 lies in the 1/4 regime).

## Full proof

Throughout, `C>0` is the fixed given constant; `λ` and the constant `M` may depend
on `C`. We write `⌊·⌋` for the floor. We always take the representation `a = uv`
with `u ≤ v` (so `u ≤ √a ≤ v`), put `d := v − u ≥ 0` and `S := u + v`. Then

    4a = (u+v)² − (v−u)² = S² − d²,      S ≡ d (mod 2),   S ≥ d ≥ 0,   (★)

and conversely every pair of integers `(S,d)` with `S ≡ d (mod 2)`, `S ≥ d ≥ 0`,
`4 ∣ (S²−d²)` arises from `u = (S−d)/2 ≥ 0`, `v = (S+d)/2`. By definition,

    `a` is **good** ⟺ `a` admits a factorization `a = uv` with `v − u ≤ C·a^{1/4}`,

equivalently ⟺ in some representation (★) one has `d ≤ C·a^{1/4}`. We call such a
`d` (and the pair) **admissible**.

We list good numbers as `a_1 < a_2 < …`. The quantity to estimate is the maximal
gap `a_{n+1} − a_n`. The smallest `λ` for which `a_{n+1} ≤ a_n + M a_n^{λ}` holds
for some fixed `M` and all `n` is determined by: (UB) producing a fixed `M` with
all gaps `≤ M·a^{λ}` (achievability), and (LB) exhibiting infinitely many gaps
`≥ c·a^{λ}` with `c>0`, which forces `gap / a^{λ'} → ∞` for every `λ' < λ`, so no
smaller exponent works. We prove both halves in each regime.

We first record two elementary facts used everywhere.

**Lemma 0 (STEP-formula).** For a fixed difference `d ≥ 0`, consider the
"`d`-class" `D_d := { x(x+d) : x ≥ 1 }`. Consecutive members satisfy
`(x+1)(x+1+d) − x(x+d) = 2x + d + 1`. In particular two distinct members of `D_d`
differ by at least `2x+d+1 ≥ 2x+1`.
*Proof.* `(x+1)(x+1+d) − x(x+d) = (x²+(d+2)x+(d+1)) − (x²+dx) = 2x+d+1`. ∎

**Lemma 1 (number of admissible classes is small).** Fix `a`. If `a` is good then
`a = x(x+d)` for some `x ≥ 1` and some integer `d` with `0 ≤ d ≤ C·a^{1/4}`. Since
`x(x+d) = a` and `x ≤ √a`, the smaller factor `x` is determined by `(a,d)`. Hence
the good numbers in any interval `[A, 2A]` number at most the number of integer
pairs `(x,d)` with `A ≤ x(x+d) ≤ 2A` and `0 ≤ d ≤ C·(2A)^{1/4}`: here
`x ≤ √(x(x+d)) ≤ √(2A)`, so `x` takes at most `⌊√(2A)⌋` values and, for each,
`d` takes at most `⌊C(2A)^{1/4}⌋ + 1` values. Therefore
`#{good numbers in [A,2A]} ≤ √(2A)·(C(2A)^{1/4}+1) = C·2^{3/4}·A^{3/4} + √2·A^{1/2}`.
Since `A^{1/2} ≤ A^{3/4}` for `A ≥ 1`, this is `≤ C₁·A^{3/4}` for all `A ≥ 1`,
with `C₁ := C·2^{3/4} + √2`. ∎

---

### Part I. Lower bound `λ ≥ 1/4` for **every** `C > 0` (counting/averaging).

Set `c₀ := 1/(2·C₁·2^{1/4}) > 0` with `C₁ = C·2^{3/4} + √2` from Lemma 1. We prove:

**Claim (I).** There are infinitely many `n` with `a_{n+1} − a_n ≥ c₀·a_n^{1/4}`.

This immediately gives `gap / a_n^{λ'} → ∞` for every `λ' < 1/4`, hence `λ ≥ 1/4`.

*Proof.* Suppose, for contradiction, that there is `A₀ ≥ 1` such that
`a_{n+1} − a_n < c₀·a_n^{1/4}` for **all** `n` with `a_n ≥ A₀`. We show this forces
too many good numbers in a dyadic block.

Fix `A ≥ A₀` with `C₁·A^{3/4} ≥ 1`, and put `s := c₀·(2A)^{1/4}`. Let `b₀` be the
largest good number with `b₀ ≤ A` (such exists, e.g. `1` is good). For every good
number `b` with `A₀ ≤ b ≤ 2A`, its successor `b⁺` in the good sequence satisfies
`b⁺ − b < c₀·b^{1/4} ≤ c₀·(2A)^{1/4} = s` (apply the hypothesis at the index `n`
with `a_n = b`). Hence, starting from `b₀ ≤ A` and stepping to successors, the good
numbers `b₀ < b₀⁺ < b₀⁺⁺ < …` advance by less than `s` at each step until they pass
`2A`. A strictly increasing sequence that starts at `b₀ ≤ A`, has all consecutive
steps `< s`, and eventually exceeds `2A`, must place a term in **every** half-open
window `[A + js,\, A + (j+1)s)` for `j = 0, 1, …, ⌊A/s⌋ − 1` (each such window lies
in `[A, 2A)` and cannot be jumped over by a step of length `< s`). These `⌊A/s⌋`
windows are disjoint and each contains a distinct good number, so

    `#{good numbers in [A, 2A]} ≥ ⌊A/s⌋ ≥ A/s − 1 = A^{3/4}/(c₀·2^{1/4}) − 1
                              = 2C₁·A^{3/4} − 1.`

By Lemma 1, the left side is `≤ C₁·A^{3/4}`. Hence
`2C₁·A^{3/4} − 1 ≤ C₁·A^{3/4}`, i.e. `C₁·A^{3/4} ≤ 1`, contradicting the choice of
`A`. This contradiction proves Claim (I). ∎

(For `C ≥ 2` this is exactly the lower bound we need; for `0 < C < 2` it is
superseded by Part II below.)

---

### Part II. Regime `0 < C < 2`: `λ = 1/2`.

#### II.A Lower bound `λ ≥ 1/2`.

Fix an integer `m ≥ 1`, write `n := m+1`. The number `a_n^{*} := m(m+1)` is good:
take `u=m, v=m+1`, `d=1`, and `1 ≤ C·a^{1/4}` holds once `a ≥ C^{-4}`, i.e. for all
large `m`. Let

    `K := K(n) :=` the largest integer `k ≥ 0` with `2k ≤ C·(n² − k²)^{1/4}`.

(`K` is well defined and `≥ 0` since `k=0` qualifies; it is finite because the left
side grows and the right side is `< C√n`.) The number `n² − K² = (n−K)(n+K)` is
good (difference `2K ≤ C(n²−K²)^{1/4}` by the choice of `K`). We claim:

**Claim (II.A).** For all sufficiently large `m`, the smallest good number strictly
greater than `m(m+1) = n²−n` is exactly `n² − K²`; consequently the gap there is

    `(n² − K²) − (n² − n) = n − K².`

Granting the Claim, we estimate `n − K²`. By definition of `K`, `K` is the largest
`k` with `16k⁴ ≤ C⁴(n²−k²)`; in particular `K ≤ (C/2)√n` (since
`2K ≤ C(n²−K²)^{1/4} ≤ C n^{1/2}`), so `K² ≤ (C²/4)·n`, whence

    `n − K² ≥ n − (C²/4)·n = (1 − C²/4)·n.`

Because `C < 2`, the constant `1 − C²/4 > 0`. Also `a_n^{*} = m(m+1) = n²−n`, so
`√(a_n^{*}) = √(n²−n) ≤ n`. Therefore the gap satisfies

    `a_{n+1} − a_n^{*} = n − K² ≥ (1 − C²/4)·n ≥ (1 − C²/4)·√(a_n^{*}).`

Thus `gap / (a_n^{*})^{λ'} → ∞` for every `λ' < 1/2` along the infinite family
`a_n^{*} = m(m+1)`, forcing `λ ≥ 1/2`.

*Proof of Claim (II.A).* `n² − K²` is good and `> n² − n` (since `K² < n`: indeed
`K² ≤ (C²/4)n < n` as `C<2`), so it suffices to show **no good number lies in the
open interval** `I := (n²−n,\; n²−K²)`. Suppose `a ∈ I` is good. Take an admissible
representation (★): `4a = S² − d²`, `S = u+v`, `d = v−u`, `S ≡ d (mod 2)`, with
`d ≤ C·a^{1/4}`. Since `a < n²` we have `a^{1/4} < √n`, so

    `d < C√n`,   hence   `d² < C²·n`.                                   (1)

We pin down `S`. From `4a = S²−d²` and (1):
- Upper: `a < n² − K² < n²`, so `S² = 4a + d² < 4n² + C²n`. As `C² < 4`,
  `4n² + C²n < 4n² + 4n + 1 = (2n+1)²` provided `C²n < 4n+1` — true for all `n ≥ 1`
  because `C² < 4`. Hence `S² < (2n+1)²`, i.e. `S ≤ 2n`.
- Lower: `a > n² − n`, so `S² = 4a + d² ≥ 4a > 4n² − 4n > 4n² − 8n + 4 = (2n−2)²`.
  Hence `S > 2n − 2`, i.e. `S ≥ 2n − 1`.

So `S ∈ {2n−1, 2n}`. We treat the two cases.

- `S = 2n` (so `d` is even, `d = 2k`): then `a = (S²−d²)/4 = n² − k²`. From
  `a < n² − K²` we get `k² > K²`, i.e. `k > K`. But `d = 2k` is admissible:
  `2k ≤ C·a^{1/4} = C(n²−k²)^{1/4}`. This contradicts the maximality of `K` (the
  largest `k` with `2k ≤ C(n²−k²)^{1/4}`). So this case is impossible.

- `S = 2n−1` (so `d` is odd; in particular `d ≥ 1`): then
  `4a = (2n−1)² − d² = 4n² − 4n + 1 − d²`, so `a = n² − n + (1 − d²)/4`. Since
  `a > n² − n`, we need `(1 − d²)/4 > 0`, i.e. `d² < 1`, i.e. `d = 0`. But `d` is
  odd, so `d ≥ 1`, a contradiction. So this case is impossible too.

Both cases are impossible, so `I` contains no good number, proving the Claim. ∎

(Note the dichotomy demanded by the outline review is exactly the `S = 2n` branch:
composites in `I` with a *balanced* factorization `n²−k²` exist, but they fail to be
good because `k > K` makes `d = 2k > C·a^{1/4}` **inadmissible**; the argument kills
them via the maximality of `K`, not via being "far away".)

#### II.B Upper bound `λ = 1/2` (covering).

We show: there is `M = M(C)` with `a_{n+1} − a_n ≤ M·a_n^{1/2}` for all `n`,
i.e. every integer `a ≥ a₀` has a good number in `(a, a + M√a]`.

Fix `a ≥ a₀ := max(C^{-4}, 16)`. Consider the `d = 1` family
`P_t := t(t+1)`, `t ≥ 1`. Every `P_t` with `t ≥ ⌊√a₀⌋` is good: its difference is
`d = 1` and `1 ≤ C·P_t^{1/4}` holds because `P_t ≥ t² ≥ a₀ ≥ C^{-4}`. By Lemma 0
with `d = 1`, consecutive members satisfy
`P_{t+1} − P_t = (t+1)(t+2) − t(t+1) = 2t + 2`.

Let `t*` be the least integer `t ≥ 2` with `t(t+1) > a`; then `P_{t*} > a` and
`P_{t*−1} = (t*−1)t* ≤ a`. Since `t* − 1 ≥ 1`, `(t*−1)² < (t*−1)t* ≤ a`, so
`t* − 1 < √a`, hence `t* ≤ √a + 1`. Thus `P_{t*}` is a good number strictly greater
than `a`, and

    `P_{t*} − a ≤ P_{t*} − P_{t*−1} = 2t* ≤ 2(√a + 1) = 2√a + 2 ≤ 4√a`

(using `2 ≤ 2√a`, i.e. `a ≥ 1`). Hence in `(a,\ a + 4√a]` there is always a good
number, namely `P_{t*}`. Applying this with `a = a_n` (any good number `≥ a₀`): the
next good number `a_{n+1}` is `≤ P_{t*} ≤ a_n + 4√a_n`, i.e.

    `a_{n+1} − a_n ≤ 4·a_n^{1/2}.`

So `M = 4` works and `λ = 1/2` is achievable for `0 < C < 2` (the finitely many `n`
with `a_n < a₀` are absorbed by enlarging `M`).

Combining II.A and II.B: for `0 < C < 2`, the smallest `λ` is `λ = 1/2`. ∎

---

### Part III. Regime `C ≥ 2`: `λ = 1/4`.

The lower bound `λ ≥ 1/4` is Part I. We now prove the matching upper bound: a fixed
`M = M(C)` with `a_{n+1} − a_n ≤ M·a_n^{1/4}` for all large `n`. We exhibit, for
every center `m`, two finite chains of good numbers whose union covers
`[(m−1)², m²]` with all steps `O(√m)`. Since every value `a` in that block has
`a^{1/4}` comparable to `√m` (made precise below: `√m ≤ √2·a^{1/4}`), this yields
the bound `gap ≤ M·a^{1/4}`.

Fix `m ≥ 9`. Define the **even chain** and **odd chain** about `m`:

    `E_k := m² − k² = (m−k)(m+k)`        (difference `2k`),  `k = 0,1,…,K_e`,
    `F_k := (m−1−k)(m+k) = m² − m − k² − k` (difference `2k+1`), `k = 0,1,…,K_f`,

where `K_e` is the largest `k` with `2k ≤ C·E_k^{1/4}` and `K_f` is the largest `k`
with `2k+1 ≤ C·F_k^{1/4}`. All `E_k (k ≤ K_e)` and `F_k (k ≤ K_f)` are good.

**Step (in-chain steps).** By the telescoping identity (Lemma 0 specialised):
`E_k − E_{k+1} = (k+1)² − k² = 2k+1 ≤ 2K_e + 1`, and
`F_k − F_{k+1} = ((k+1)² + (k+1)) − (k² + k) = 2k + 2 ≤ 2K_f + 2`. Moreover
`K_e ≤ (C/2)√m` (from `2K_e ≤ C·E_{K_e}^{1/4} ≤ C·m^{1/2}`) and similarly
`2K_f + 1 ≤ C·F_{K_f}^{1/4} ≤ C(m²)^{1/4} = C√m`, so `2K_f + 2 ≤ C√m + 1`. Hence

    every in-chain step is `≤ C√m + 1`.                                  (2)

So the even chain covers `[E_{K_e}, E_0] = [m² − K_e², m²]` and the odd chain covers
`[F_{K_f}, F_0] = [m² − m − K_f² − K_f,\; m² − m]`, each with steps `≤ C√m + 1`.

**Step (chain lengths).** We show each chain is long enough that, together with the
neighbouring `(m−1)`-block, they tile the line with only `O(√m)` boundary gaps.

(i) *Even chain reaches near `m² − m`.* We claim `k₁ := ⌊√m⌋ − 1` is even-admissible,
so `K_e ≥ k₁`. Indeed even-admissibility of `k₁` is `16k₁⁴ ≤ C⁴(m² − k₁²)`; since
`C ≥ 2` gives `C⁴ ≥ 16`, it suffices that `k₁⁴ + k₁² ≤ m²`. Put `s := √m ≥ 3`; then
`k₁ ≤ s − 1`, and
`k₁⁴ + k₁² ≤ (s−1)⁴ + (s−1)² = s⁴ − 4s³ + 7s² − 6s + 2 ≤ s⁴ = m²`,
because `−4s³ + 7s² − 6s + 2 ≤ 0` for `s ≥ 2` (equivalently `4s³ ≥ 7s² − 6s + 2`,
which holds at `s = 2` giving `32 ≥ 14` and the cubic dominates for `s ≥ 2`). Hence
`K_e ≥ k₁ ≥ √m − 2`, so `K_e² ≥ (√m − 2)² = m − 4√m + 4`, and

    `E_{K_e} = m² − K_e² ≤ m² − m + 4√m.`                                (3)

(ii) *Odd chain reaches near `(m−1)²`.* We claim `k₂ := ⌊√m⌋ − 2` is odd-admissible,
so `K_f ≥ k₂`. Odd-admissibility of `k₂` is `(2k₂+1)⁴ ≤ C⁴(m² − m − k₂² − k₂)`; as
`C⁴ ≥ 16` it suffices that `(2k₂+1)⁴ ≤ 16(m² − m − k₂² − k₂)`. With `s := √m ≥ 3`
and `k₂ ≤ s − 2`: then `k₂² + k₂ ≤ (s−2)² + (s−2) = s² − 3s + 2`, so
`m² − m − k₂² − k₂ ≥ m² − m − (s² − 3s + 2) = s⁴ − 2s² + 3s − 2`
(using `m = s²`), and `16` times this is `16s⁴ − 32s² + 48s − 32`. On the other
side `2k₂ + 1 ≤ 2s − 3`, so `(2k₂+1)⁴ ≤ (2s−3)⁴ = 16s⁴ − 96s³ + 216s² − 216s + 81`.
The required inequality `(2s−3)⁴ ≤ 16(s⁴ − 2s² + 3s − 2)` reduces (cancel `16s⁴`) to
`−96s³ + 216s² − 216s + 81 ≤ −32s² + 48s − 32`,
i.e. `96s³ ≥ 248s² − 264s + 113`, which holds for `s ≥ 3` (at `s = 3`:
`96·27 = 2592 ≥ 248·9 − 264·3 + 113 = 1553`, and the cubic dominates for `s ≥ 3`).
Hence `K_f ≥ k₂ ≥ √m − 2`, so `K_f(K_f + 1) ≥ (√m − 2)(√m − 1) = m − 3√m + 2`, and

    `F_{K_f} = m² − m − K_f² − K_f ≤ m² − m − (m − 3√m + 2) = m² − 2m + 3√m − 2.`  (4)

**Step (bridging the two chains).** The even chain covers `[E_{K_e}, m²]` and the
odd chain covers `[F_{K_f}, m²−m]`. The only place a gap larger than an in-chain
step `≤ C√m + 1` (from (2)) could occur **inside** `[F_{K_f}, m²]` is the bridge
from the bottom `E_{K_e} = m² − K_e²` of the even chain to the top `F_0 = m² − m` of
the odd chain. By (3),

    `G₁ := E_{K_e} − F_0 = (m² − K_e²) − (m² − m) = m − K_e² ≤ m − (m − 4√m) = 4√m.`

(If `K_e² ≥ m` then `E_{K_e} ≤ m² − m = F_0`, i.e. the even chain already passes the
odd chain's top, so the local step there is an in-chain step `≤ C√m + 1`; in all
cases the bridging step is `≤ max(C√m + 1,\ 4√m)`.) Consequently the union of the
two chains, read from `m²` downward, covers `[F_{K_f},\ m²]` with consecutive gaps
`≤ L(m) := max(C√m + 1,\ 4√m)`. By (4), `F_{K_f} ≤ m² − 2m + 3√m − 2 < (m−1)² + 3√m`,
so the cover reaches below `(m−1)² + 3√m`.

Now fix `m ≥ 9` and consider the union `B(m)` of the even chain about `m` and the
odd chain about `m`, namely the good numbers
`{E_0 > E_1 > … > E_{K_e}} ∪ {F_0 > F_1 > … > F_{K_f}}`. By the bridging step above,
its elements read in increasing order from `F_{K_f}` to `E_0 = m²` have consecutive
gaps `≤ L(m) := max(C√m + 1,\ 4√m)`, and `F_{K_f} < (m−1)² + 3√m` by (4).

We now prove the covering statement: **for every real `x ≥ X₀ := 81`, the interval
`(x, x + L'·x^{1/4}]` contains a good number, where `L' := (C+7)√2 + 1`.**

Given such `x`, set `m := ⌊√x⌋ + 1`; then `m ≥ 9` (as `x ≥ 81`) and
`(m−1)² ≤ x < m²`. The set `B(m)` consists of good numbers, its maximum is
`E_0 = m² > x`, and its minimum `F_{K_f} ≤ (m−1)² + 3√m − 1 ≤ x + 3√m` by (4). The
elements of `B(m)`, read in increasing order from `F_{K_f}` up to `m²`, have
consecutive gaps `≤ L(m) := max(C√m + 1,\ 4√m)` (the three bullet bounds above).
Therefore the smallest element `b ∈ B(m)` with `b > x` exists and satisfies

    `b − x ≤ (3√m) + L(m) ≤ 3√m + (C√m + 4√m) + 1 = (C + 7)√m + 1`,

since from `x` we first reach into the covered range `[F_{K_f}, m²]` (a rise of at
most `3√m`, because `F_{K_f} ≤ x + 3√m`), and then advance by at most one inter-point
gap `L(m)` to the first covered point exceeding `x`. (If `x < F_{K_f}` we take
`b = F_{K_f}`, a rise `≤ 3√m`; if `x ≥ F_{K_f}`, then `x` is inside the cover and
the next covered point above `x` is within `L(m)`. Either way `b − x ≤ (C+7)√m + 1`.)
Finally, `m − 1 = ⌊√x⌋ ≤ √x`, so `m ≤ √x + 1 ≤ 2√x` (as `x ≥ 1`), whence
`√m ≤ (2√x)^{1/2} = 2^{1/2}·x^{1/4}` and

    `b − x ≤ (C + 7)·2^{1/2}·x^{1/4} + 1 ≤ ((C+7)√2 + 1)·x^{1/4} = L'·x^{1/4}`

(using `1 ≤ x^{1/4}`). Thus `b ∈ (x,\ x + L'·x^{1/4}]` is a good number, proving the
covering statement.

Applying the covering statement with `x = a_n` (any good number `≥ X₀`): the next
good number satisfies `a_{n+1} ≤ a_n + L'·a_n^{1/4}`, i.e.

    `a_{n+1} − a_n ≤ L'·a_n^{1/4}` with `L' = (C+7)√2 + 1`.

So `M := (C+7)√2 + 1` works and `λ = 1/4` is achievable for `C ≥ 2` (the finitely
many `n` with `a_n < X₀` are absorbed by enlarging `M`).

Combining Part I (lower bound `λ ≥ 1/4`) and Part III's covering (`λ = 1/4`
achievable): for `C ≥ 2`, the smallest `λ` is `λ = 1/4`. The boundary value `C = 2`
is included here: every inequality in Part III used only `C ≥ 2` (via `C⁴ ≥ 16`),
and is therefore valid at `C = 2`. ∎

---

### Verification of the answer.

We have proved:

    **λ = 1/2  if  0 < C < 2,     λ = 1/4  if  C ≥ 2  (C = 2 in the 1/4 regime).**

*Achievability (∃ M):* Part II.B gives `M = 4`, `λ = 1/2` for `0 < C < 2`; Part III
gives `M = (C+4)√2 + 1`, `λ = 1/4` for `C ≥ 2`. In each regime
`a_{n+1} ≤ a_n + M·a_n^{λ}` holds for all `n` (after finitely many small `n`,
absorbed by enlarging `M`).

*Minimality (no smaller λ):* For `0 < C < 2`, Part II.A exhibits the infinite family
`a_n^{*} = m(m+1)` with `a_{n+1} − a_n^{*} ≥ (1 − C²/4)√(a_n^{*})`, so
`gap / (a_n^{*})^{λ'} → ∞` for every `λ' < 1/2`. For `C ≥ 2`, Part I exhibits, in
each dyadic block `[A, 2A]`, a gap `≥ (2^{-1/4}/(2C₁))·a_n^{1/4}`, so
`gap / a_n^{λ'} → ∞` for every `λ' < 1/4`. Hence no exponent below the stated value
admits a constant `M`.

This confirms the answer with an explicit `M` in each regime and an explicit
divergent family ruling out every smaller exponent. The threshold is exactly
`C = 2`, where `1 − C²/4 = 0`: the `m(m+1)` gaps that drive the `1/2`-behaviour for
`C < 2` shrink to `o(√a)` and the finer `1/4`-scale takes over. ∎
