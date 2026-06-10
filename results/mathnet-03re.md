## Status
solved

## Approaches tried
- Interval-intersection reformulation + difference-of-squares/Pythagorean identity (round 7) — worked. Each of ① ② is a quadratic-in-x inequality `(s_is_j − x)² ≤ (c_ic_j)²`; since `c_ic_j > 0` it is equivalent to `x` lying in a closed interval. Existence of a common `x` is the overlap of the two intervals, which the two-interval overlap criterion turns into two scalar inequalities `F₁ ≥ 0`, `F₂ ≥ 0`. Because `F₁ + F₂ = 2(c₁c₂ + c₃c₄) > 0` strictly (all cosines positive), `F₁ ≥ 0 ∧ F₂ ≥ 0 ⟺ F₁F₂ ≥ 0`. A single Pythagorean identity collapses `F₁F₂ = (c₁c₂+c₃c₄)² − (s₁s₂−s₃s₄)²` into exactly `2(1 + ∏cosθ_i + ∏sinθ_i) − Σsin²θ_i`, giving condition ③ as a reversible chain. Numerically verified: key identity max error 1.8e−15, sub-identity 4.4e−16, full equivalence 0 mismatches over 3·10⁵ random trials.

## Current best
Complete proof (below). The whole argument is a single chain of two-sided equivalences, so both directions of the iff are discharged at once. The strict positivity `cos θ_i > 0` (from the open interval `(−π/2, π/2)`) is used in two load-bearing places: to convert the squared inequality into an interval condition (Step 1), and to make `F₁ + F₂ > 0` strict, which is exactly what excludes the both-factors-negative branch in Step 5.

## Full proof

Throughout write, for `i = 1, 2, 3, 4`,
$$c_i := \cos\theta_i, \qquad s_i := \sin\theta_i.$$
Since each `θ_i ∈ (−π/2, π/2)` is in the **open** interval, we have the strict positivity
$$
c_i = \cos\theta_i > 0 \qquad (i = 1,2,3,4). \tag{$\star$}
$$
This fact `(\star)` is used twice below and is essential each time; we flag those uses explicitly.

We must prove the logical equivalence
$$
\bigl(\exists\, x\in\mathbb{R} \text{ satisfying ① and ②}\bigr) \iff ③ .
$$
We do so by exhibiting a chain of genuinely two-sided equivalences from the left side to ③. Since every link is an "iff," the chain proves both directions simultaneously.

### Step 1. Each inequality is a closed interval condition on `x`.

Inequality ① is
$$
c_1^2 c_2^2 - (s_1 s_2 - x)^2 \ge 0
\iff
(s_1 s_2 - x)^2 \le (c_1 c_2)^2 .
$$
By `(\star)`, `c_1 > 0` and `c_2 > 0`, hence `c_1 c_2 > 0`. We use the elementary equivalence

> **Squaring lemma.** For real `a` and real `b ≥ 0`: `a^2 \le b^2 \iff |a| \le b`.
>
> *Proof.* If `|a| \le b` then, since both sides are `\ge 0`, squaring (a monotone operation on `[0,\infty)`) gives `a^2 = |a|^2 \le b^2`. Conversely, if `a^2 \le b^2` then `|a| = \sqrt{a^2} \le \sqrt{b^2} = |b| = b` (using `b \ge 0` for the last equality and monotonicity of `\sqrt{\cdot}`). ∎

Applying the Squaring lemma with `a = s_1 s_2 - x` and `b = c_1 c_2 \ge 0` (here `b = c_1c_2 > 0` by `(\star)`, so `b \ge 0` holds — **first load-bearing use of `(\star)`**):
$$
① \iff |s_1 s_2 - x| \le c_1 c_2 \iff x \in I_1 := \bigl[\, s_1 s_2 - c_1 c_2,\ \; s_1 s_2 + c_1 c_2 \,\bigr].
$$
Because `c_1 c_2 > 0`, the interval `I_1` has length `2 c_1 c_2 > 0`; in particular its left endpoint does not exceed its right endpoint, so `I_1` is a genuine (non-degenerate) closed interval.

Identically, applying the Squaring lemma to ② with `a = s_3 s_4 - x`, `b = c_3 c_4 > 0`:
$$
② \iff |s_3 s_4 - x| \le c_3 c_4 \iff x \in I_2 := \bigl[\, s_3 s_4 - c_3 c_4,\ \; s_3 s_4 + c_3 c_4 \,\bigr],
$$
a closed interval of length `2 c_3 c_4 > 0`.

Each of these is an "iff": ① holds for a given `x` exactly when `x \in I_1`, and ② holds exactly when `x \in I_2`.

### Step 2. Existence of a common `x` ⟺ the two intervals overlap.

For a fixed `x`, "① and ② both hold" is equivalent (Step 1) to "`x \in I_1` and `x \in I_2`," i.e. `x \in I_1 \cap I_2`. Therefore
$$
\bigl(\exists\, x\in\mathbb{R}:\ ① \text{ and } ②\bigr) \iff I_1 \cap I_2 \ne \varnothing .
$$

> **Overlap criterion.** Let `[a,b]` and `[c,d]` be closed intervals with `a \le b` and `c \le d`. Then
> $$ [a,b] \cap [c,d] \ne \varnothing \iff a \le d \ \text{ and } \ c \le b. $$
>
> *Proof.* The intersection of two closed intervals is `[\max(a,c),\, \min(b,d)]`, which is non-empty iff `\max(a,c) \le \min(b,d)`. Now `\max(a,c) \le \min(b,d)` holds iff each of `a, c` is `\le` each of `b, d`, i.e. iff `a \le b`, `a \le d`, `c \le b`, `c \le d`. Given the standing hypotheses `a \le b` and `c \le d`, the remaining two conditions are precisely `a \le d` and `c \le b`. Hence the equivalence. ∎

We apply the Overlap criterion with
$$
a = s_1 s_2 - c_1 c_2,\quad b = s_1 s_2 + c_1 c_2,\quad c = s_3 s_4 - c_3 c_4,\quad d = s_3 s_4 + c_3 c_4 .
$$
Its hypotheses `a \le b` and `c \le d` hold because the interval lengths are `b - a = 2 c_1 c_2 \ge 0` and `d - c = 2 c_3 c_4 \ge 0` (indeed `> 0` by `(\star)`). The criterion gives
$$
I_1 \cap I_2 \ne \varnothing \iff \bigl(a \le d\bigr) \ \text{ and } \ \bigl(c \le b\bigr).
$$

Compute the two conditions. The condition `a \le d` is
$$
s_1 s_2 - c_1 c_2 \le s_3 s_4 + c_3 c_4
\iff
(c_1 c_2 + c_3 c_4) - (s_1 s_2 - s_3 s_4) \ge 0,
$$
which we name
$$
F_1 := (c_1 c_2 + c_3 c_4) - (s_1 s_2 - s_3 s_4) \ge 0 .
$$
The condition `c \le b` is
$$
s_3 s_4 - c_3 c_4 \le s_1 s_2 + c_1 c_2
\iff
(c_1 c_2 + c_3 c_4) + (s_1 s_2 - s_3 s_4) \ge 0,
$$
which we name
$$
F_2 := (c_1 c_2 + c_3 c_4) + (s_1 s_2 - s_3 s_4) \ge 0 .
$$
Each rearrangement above is an algebraic equivalence (adding the same quantity to both sides of an inequality). Hence
$$
\bigl(\exists\, x:\ ① \text{ and } ②\bigr) \iff \bigl(F_1 \ge 0 \ \text{ and } \ F_2 \ge 0\bigr). \tag{Step 2}
$$

### Step 3. The product `F₁ F₂` is a difference of squares.

Set
$$
A := c_1 c_2 + c_3 c_4, \qquad B := s_1 s_2 - s_3 s_4,
$$
so that `F_1 = A - B` and `F_2 = A + B`. Then
$$
F_1 F_2 = (A - B)(A + B) = A^2 - B^2 = (c_1 c_2 + c_3 c_4)^2 - (s_1 s_2 - s_3 s_4)^2 . \tag{Step 3}
$$
This is an identity (direct multiplication), hence an equivalence between the value of `F_1 F_2` and the right-hand expression.

### Step 4. Key identity.

We claim
$$
(c_1 c_2 + c_3 c_4)^2 - (s_1 s_2 - s_3 s_4)^2
\;=\;
2\Bigl(1 + \prod_{i=1}^{4} c_i + \prod_{i=1}^{4} s_i\Bigr) - \sum_{i=1}^{4} s_i^2 . \tag{Key identity}
$$

*Proof of the Key identity.* Expand both squares:
$$
(c_1 c_2 + c_3 c_4)^2 = c_1^2 c_2^2 + 2\,c_1 c_2 c_3 c_4 + c_3^2 c_4^2 ,
$$
$$
(s_1 s_2 - s_3 s_4)^2 = s_1^2 s_2^2 - 2\,s_1 s_2 s_3 s_4 + s_3^2 s_4^2 .
$$
Subtracting,
$$
(c_1 c_2 + c_3 c_4)^2 - (s_1 s_2 - s_3 s_4)^2
= \bigl(c_1^2 c_2^2 - s_1^2 s_2^2\bigr) + \bigl(c_3^2 c_4^2 - s_3^2 s_4^2\bigr) + 2\,c_1 c_2 c_3 c_4 + 2\,s_1 s_2 s_3 s_4 . \tag{4.1}
$$

We now establish the Pythagorean sub-identity: for any indices `i, j`,
$$
c_i^2 c_j^2 - s_i^2 s_j^2 = 1 - s_i^2 - s_j^2 . \tag{4.2}
$$
Indeed, by the Pythagorean identity `\cos^2\theta_k + \sin^2\theta_k = 1` we have `c_k^2 = 1 - s_k^2` for each `k`. Substituting `c_i^2 = 1 - s_i^2` and `c_j^2 = 1 - s_j^2`,
$$
c_i^2 c_j^2 - s_i^2 s_j^2 = (1 - s_i^2)(1 - s_j^2) - s_i^2 s_j^2
= 1 - s_i^2 - s_j^2 + s_i^2 s_j^2 - s_i^2 s_j^2
= 1 - s_i^2 - s_j^2 ,
$$
proving `(4.2)`.

Apply `(4.2)` to the pair `(i,j) = (1,2)` and to the pair `(i,j) = (3,4)`:
$$
c_1^2 c_2^2 - s_1^2 s_2^2 = 1 - s_1^2 - s_2^2 , \qquad
c_3^2 c_4^2 - s_3^2 s_4^2 = 1 - s_3^2 - s_4^2 .
$$
Their sum is
$$
\bigl(c_1^2 c_2^2 - s_1^2 s_2^2\bigr) + \bigl(c_3^2 c_4^2 - s_3^2 s_4^2\bigr)
= 2 - \bigl(s_1^2 + s_2^2 + s_3^2 + s_4^2\bigr) = 2 - \sum_{i=1}^{4} s_i^2 . \tag{4.3}
$$
Also, by definition of the products,
$$
c_1 c_2 c_3 c_4 = \prod_{i=1}^{4} c_i = \prod_{i=1}^{4}\cos\theta_i , \qquad
s_1 s_2 s_3 s_4 = \prod_{i=1}^{4} s_i = \prod_{i=1}^{4}\sin\theta_i . \tag{4.4}
$$
Substituting `(4.3)` and `(4.4)` into `(4.1)`:
$$
(c_1 c_2 + c_3 c_4)^2 - (s_1 s_2 - s_3 s_4)^2
= \Bigl(2 - \sum_{i=1}^{4} s_i^2\Bigr) + 2\prod_{i=1}^{4} c_i + 2\prod_{i=1}^{4} s_i
= 2\Bigl(1 + \prod_{i=1}^{4} c_i + \prod_{i=1}^{4} s_i\Bigr) - \sum_{i=1}^{4} s_i^2 ,
$$
which is exactly the Key identity. ∎

Combining the Key identity with Step 3,
$$
F_1 F_2 = 2\Bigl(1 + \prod_{i=1}^{4} \cos\theta_i + \prod_{i=1}^{4}\sin\theta_i\Bigr) - \sum_{i=1}^{4}\sin^2\theta_i . \tag{Step 4}
$$

### Step 5. Both factors negative is impossible; so `F₁ ≥ 0 ∧ F₂ ≥ 0 ⟺ F₁ F₂ ≥ 0`.

First observe
$$
F_1 + F_2 = (A - B) + (A + B) = 2A = 2(c_1 c_2 + c_3 c_4) .
$$
By `(\star)`, all four cosines are strictly positive, so `c_1 c_2 > 0` and `c_3 c_4 > 0`, hence
$$
F_1 + F_2 = 2(c_1 c_2 + c_3 c_4) > 0 . \tag{$\star\star$}
$$
This **strict** inequality is the **second load-bearing use of `(\star)`**.

We now prove the equivalence
$$
\bigl(F_1 \ge 0 \ \text{ and } \ F_2 \ge 0\bigr) \iff F_1 F_2 \ge 0 . \tag{Step 5}
$$

*( ⟹ )* If `F_1 \ge 0` and `F_2 \ge 0`, then their product `F_1 F_2 \ge 0` (product of two non-negative reals is non-negative). This direction holds with no hypothesis.

*( ⟸ )* Suppose `F_1 F_2 \ge 0`. We argue by contradiction that we cannot have either factor negative. Since the product is `\ge 0`, the two factors have the same sign in the weak sense; precisely, a product of two reals is `\ge 0` iff they are both `\ge 0` or both `\le 0`. (If one were `> 0` and the other `< 0`, the product would be `< 0`.) So one of the following holds:
- **(a)** `F_1 \ge 0` and `F_2 \ge 0`; or
- **(b)** `F_1 \le 0` and `F_2 \le 0`.

In case **(b)**, adding the two inequalities gives `F_1 + F_2 \le 0`. But `(\star\star)` says `F_1 + F_2 > 0`, a contradiction. Hence case **(b)** is impossible, and we are necessarily in case **(a)**: `F_1 \ge 0` and `F_2 \ge 0`. This proves `( ⟸ )`.

(It is exactly the strict sign in `(\star\star)` — guaranteed by the openness of `(−π/2,π/2)` forcing `c_i > 0` — that rules out case **(b)**. Were some `\cos\theta_i = 0` allowed, one could have `F_1 = F_2 = 0` admissible but also `F_1, F_2` both negative with product `> 0`; the reverse arrow of Step 5 would then fail. The strictness is therefore essential.)

Thus `(\text{Step 5})` is a genuine two-sided equivalence.

### Step 6. Assembling the chain.

Putting the equivalences together:
$$
\begin{aligned}
\bigl(\exists\, x:\ ① \text{ and } ②\bigr)
&\overset{\text{Step 2}}{\iff} \bigl(F_1 \ge 0 \ \text{ and } \ F_2 \ge 0\bigr) \\[2pt]
&\overset{\text{Step 5}}{\iff} F_1 F_2 \ge 0 \\[2pt]
&\overset{\text{Steps 3, 4}}{\iff} 2\Bigl(1 + \prod_{i=1}^{4}\cos\theta_i + \prod_{i=1}^{4}\sin\theta_i\Bigr) - \sum_{i=1}^{4}\sin^2\theta_i \ \ge\ 0 \\[2pt]
&\iff \sum_{i=1}^{4}\sin^2\theta_i \ \le\ 2\Bigl(1 + \prod_{i=1}^{4}\sin\theta_i + \prod_{i=1}^{4}\cos\theta_i\Bigr) .
\end{aligned}
$$
The last line is precisely condition ③. Every arrow in this chain is a two-sided equivalence:
- Step 2 is iff (the Squaring lemma and the Overlap criterion are both iff, and their hypotheses — `c_ic_j \ge 0` and the interval-length inequalities `a\le b`, `c\le d` — are satisfied);
- Step 5 is iff (its reverse direction holds precisely because `F_1 + F_2 > 0` strictly);
- Steps 3 and 4 substitute exact algebraic identities, hence are iff;
- the final rearrangement is iff (moving `\sum s_i^2` across the inequality).

By transitivity of logical equivalence,
$$
\bigl(\exists\, x\in\mathbb{R} \text{ satisfying ① and ②}\bigr) \iff ③ .
$$
This establishes both directions of the desired equivalence. $\blacksquare$
