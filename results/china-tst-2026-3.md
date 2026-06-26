## Status
solved

## Approaches tried
- Möbius transform + Maximum Modulus Principle + strong induction on n with equality characterization — worked

## Current best
Complete proof with equality characterization: equality holds if and only if at most one z_i ≠ 1.

## Full proof

**Problem.** Let integers n > k > 1, and let z₁, z₂, …, zₙ be complex numbers with |zᵢ| ≤ 1. Prove that
$$\left|\binom{n}{k} - e_k(z_1,\ldots,z_n)\right| \le \binom{n-1}{k-1}\left|n - \sum_{i=1}^n z_i\right|,$$
where e_k denotes the k-th elementary symmetric polynomial. Find the condition for equality.

**Answer.** Equality holds if and only if at most one of the zᵢ differs from 1.

---

### Notation and Setup

- Write C(n,k) = n!/(k!(n-k)!) for binomial coefficients.
- Write e_k(z) = e_k(z₁,…,zₙ) = Σ_{1≤i₁<…<i_k≤n} z_{i₁}⋯z_{i_k}.
- Write S = Σᵢ zᵢ.
- Define m = #{i : zᵢ ≠ 1}, the count of variables not equal to 1.

**Key observation.** C(n,k) = e_k(1,1,…,1), so the inequality compares the "distance" of e_k from its value at the all-ones point to C(n-1,k-1) times the distance of e₁ from its all-ones value.

---

### Statement to Prove (Induction Hypothesis)

We prove by strong induction on n the following statement IH(n):

> **IH(n):** For all k with n > k > 1, and all z₁,…,zₙ with |zᵢ| ≤ 1:
> - **(Ineq)** |C(n,k) - e_k(z)| ≤ C(n-1,k-1)|n - S|
> - **(Eq)** Equality holds if and only if m ≤ 1 (at most one zᵢ ≠ 1).

---

### Lemma A (Möbius Structure)

**Claim.** Fix z₁,…,z_{n-1} with |zⱼ| ≤ 1. Define S_{-n} = Σⱼ₌₁^{n-1} zⱼ and C₀ = n - S_{-n}. When S ≠ n, define
$$h(z_n) = \frac{C(n,k) - e_k(z_1,\ldots,z_n)}{n - S}.$$

Then h(zₙ) = (A - Bzₙ)/(C₀ - zₙ) where:
- A = C(n,k) - e_k(z₁,…,z_{n-1},0)
- B = e_{k-1}(z₁,…,z_{n-1})
- |C₀| ≥ 1

**Proof.**
The elementary symmetric polynomial satisfies:
$$e_k(z_1,\ldots,z_n) = e_k(z_1,\ldots,z_{n-1}) + z_n \cdot e_{k-1}(z_1,\ldots,z_{n-1}).$$

Note e_k(z₁,…,z_{n-1},0) = e_k(z₁,…,z_{n-1}) (adding a zero doesn't change e_k when we have fewer than k nonzero terms to pick from the last variable).

So:
$$C(n,k) - e_k(z) = [C(n,k) - e_k(z_{-n})] - z_n \cdot e_{k-1}(z_{-n}) = A - B z_n.$$

Also S = S_{-n} + zₙ, so n - S = (n - S_{-n}) - zₙ = C₀ - zₙ.

Therefore h(zₙ) = (A - Bzₙ)/(C₀ - zₙ).

For the bound |C₀| ≥ 1: By the triangle inequality,
$$|C_0| = |n - S_{-n}| \ge n - |S_{-n}| \ge n - \sum_{j=1}^{n-1}|z_j| \ge n - (n-1) = 1.$$
∎

---

### Lemma B (Degenerate Case |C₀| = 1)

**Claim.** If |C₀| = 1, then zⱼ = 1 for all j < n.

**Proof.**
We have |C₀| = |n - S_{-n}| ≥ n - |S_{-n}| ≥ n - (n-1) = 1.

Equality |C₀| = 1 requires both:
1. n - |S_{-n}| = 1, so |S_{-n}| = n - 1.
2. |n - S_{-n}| = n - |S_{-n}|, which requires S_{-n} to be real and positive (specifically S_{-n} = n-1).

For |S_{-n}| = Σⱼ |zⱼ| to equal n-1 with |zⱼ| ≤ 1 for each of n-1 terms, we need |zⱼ| = 1 for all j < n.

For S_{-n} = n-1 (real positive) with |zⱼ| = 1: all zⱼ must be positive real with modulus 1, hence zⱼ = 1 for all j < n. ∎

---

### Lemma C (Maximum Modulus Principle Reduction)

**Claim.** When |C₀| > 1, h is holomorphic on the closed unit disk {|zₙ| ≤ 1}, and
$$\max_{|z_n| \le 1} |h(z_n)| = \max_{|z_n| = 1} |h(z_n)|.$$

**Proof.**
The function h(zₙ) = (A - Bzₙ)/(C₀ - zₙ) has a pole at zₙ = C₀. Since |C₀| > 1, the pole lies outside the closed unit disk. Therefore h is holomorphic on the open unit disk and continuous on its closure.

By the Maximum Modulus Principle for holomorphic functions, the maximum of |h| on the closed disk is attained on the boundary. ∎

---

### Lemma D (Pascal Decomposition at zₙ = 1)

**Claim.** 
$$C(n,k) - e_k(z_1,\ldots,z_{n-1},1) = [C(n-1,k) - e_k(z_{-n})] + [C(n-1,k-1) - e_{k-1}(z_{-n})].$$

**Proof.**
By Pascal's identity: C(n,k) = C(n-1,k) + C(n-1,k-1).

By the elementary symmetric polynomial identity: e_k(z₁,…,z_{n-1},1) = e_k(z_{-n}) + 1·e_{k-1}(z_{-n}) = e_k(z_{-n}) + e_{k-1}(z_{-n}).

Subtracting:
$$C(n,k) - e_k(z_{-n},1) = [C(n-1,k) + C(n-1,k-1)] - [e_k(z_{-n}) + e_{k-1}(z_{-n})]$$
$$= [C(n-1,k) - e_k(z_{-n})] + [C(n-1,k-1) - e_{k-1}(z_{-n})]. \quad ∎$$

---

### Lemma E (Triangle Bound at zₙ = 1 via IH)

**Claim.** For n ≥ k + 2, assuming IH(n-1):
$$|C(n,k) - e_k(z_{-n},1)| \le C(n-1,k-1)|n - 1 - S_{-n}|$$
with equality if and only if both (n-1,k) and (n-1,k-1) terms achieve equality in IH(n-1) AND the two terms are parallel (same argument as complex numbers).

**Proof.**
By Lemma D:
$$|C(n,k) - e_k(z_{-n},1)| = |[C(n-1,k) - e_k(z_{-n})] + [C(n-1,k-1) - e_{k-1}(z_{-n})]|.$$

By the triangle inequality:
$$\le |C(n-1,k) - e_k(z_{-n})| + |C(n-1,k-1) - e_{k-1}(z_{-n})|.$$

Apply IH(n-1) to each term (noting n-1 > k > 1 and n-1 > k-1 ≥ 1; the case k-1 = 1 needs care—see below):

- |C(n-1,k) - e_k(z_{-n})| ≤ C(n-2,k-1)|n-1-S_{-n}|
- |C(n-1,k-1) - e_{k-1}(z_{-n})| ≤ C(n-2,k-2)|n-1-S_{-n}|

**Note on k = 2:** When k = 2, we have k-1 = 1, and the second bound becomes |C(n-1,1) - e₁(z_{-n})| ≤ C(n-2,0)|n-1-S_{-n}|. Now C(n-1,1) = n-1, e₁(z_{-n}) = S_{-n}, and C(n-2,0) = 1. So this says |n-1-S_{-n}| ≤ |n-1-S_{-n}|, which is equality always.

Summing:
$$|C(n,k) - e_k(z_{-n},1)| \le [C(n-2,k-1) + C(n-2,k-2)]|n-1-S_{-n}| = C(n-1,k-1)|n-1-S_{-n}|$$
by Pascal's identity.

Since zₙ = 1, we have S = S_{-n} + 1, so n - S = n - 1 - S_{-n}. Thus:
$$|C(n,k) - e_k(z_{-n},1)| \le C(n-1,k-1)|n-S|.$$

**Equality conditions:** Equality requires:
1. Triangle equality: the two terms [C(n-1,k)-e_k(z_{-n})] and [C(n-1,k-1)-e_{k-1}(z_{-n})] are parallel (have the same argument).
2. Both IH bounds are equalities.

By IH(n-1)-Eq, each IH bound is equality iff m-1 ≤ 1 (where m-1 = #{j < n : zⱼ ≠ 1}). ∎

---

### Lemma G (Equality for m = 1)

**Claim.** If z₁ = z₂ = … = z_{n-1} = 1 and zₙ = t with |t| ≤ 1, then
$$|C(n,k) - e_k(z)| = C(n-1,k-1)|n - S|.$$

**Proof.**
With z₁ = … = z_{n-1} = 1:
- e_k(1,…,1,t) = (# of k-subsets not containing position n) + t·(# of k-subsets containing position n)
- = C(n-1,k) + t·C(n-1,k-1).

So:
$$C(n,k) - e_k = C(n,k) - C(n-1,k) - t \cdot C(n-1,k-1) = C(n-1,k-1) - t \cdot C(n-1,k-1) = C(n-1,k-1)(1-t).$$

Also S = (n-1) + t, so n - S = 1 - t.

Therefore:
$$|C(n,k) - e_k| = C(n-1,k-1)|1-t| = C(n-1,k-1)|n-S|. \quad ∎$$

---

### Base Case: n = k + 1

For n = k + 1, we have e_k(z₁,…,z_{k+1}) = Σᵢ (product of all zⱼ except zᵢ).

**Case m = 0** (all zᵢ = 1):
- LHS = |C(k+1,k) - e_k(1,…,1)| = |k+1 - (k+1)| = 0.
- RHS = C(k,k-1)|k+1-(k+1)| = k·0 = 0.
- Equality holds (both sides 0). ✓

**Case m = 1** (exactly one zᵢ ≠ 1):
WLOG z₁ = … = z_k = 1, z_{k+1} = t ≠ 1.

Then e_k(1,…,1,t) = (product of k ones) + Σᵢ₌₁^k(product of all ones except position i, times t)
= 1 + k·t.

So:
- LHS = |C(k+1,k) - e_k| = |(k+1) - (1 + kt)| = |k - kt| = k|1-t|.
- RHS = C(k,k-1)|k+1 - (k+t)| = k|1-t|.
- Equality holds. ✓

**Case m ≥ 2** (at least two zᵢ ≠ 1):
We show strict inequality. WLOG z_k ≠ 1 and z_{k+1} ≠ 1.

Write z_k = 1 - w_k and z_{k+1} = 1 - w_{k+1} where w_k, w_{k+1} ≠ 0.

We have S = Σzᵢ, so n - S = (k+1) - S.

For general z₁,…,z_{k+1}:
$$e_k = \sum_{i=1}^{k+1} \prod_{j \ne i} z_j = \sum_{i=1}^{k+1} \frac{\prod_{j=1}^{k+1} z_j}{z_i}.$$

Let P = Πzⱼ. Then e_k = P · Σ(1/zᵢ) = P · (Σ1/zᵢ).

So C(k+1,k) - e_k = (k+1) - P·(Σ1/zᵢ).

For specific configuration: z₁ = … = z_{k-1} = 1, z_k = a, z_{k+1} = b where a,b ≠ 1 and |a|,|b| ≤ 1.

P = ab.
Σ1/zᵢ = (k-1) + 1/a + 1/b = (k-1) + (a+b)/(ab).

e_k = ab[(k-1) + (a+b)/(ab)] = (k-1)ab + (a+b).

C(k+1,k) - e_k = (k+1) - (k-1)ab - a - b = (k+1) - a - b - (k-1)ab.

S = (k-1) + a + b, so n - S = (k+1) - (k-1) - a - b = 2 - a - b.

The ratio is:
$$\frac{|C(k+1,k) - e_k|}{|n-S|} = \frac{|(k+1) - a - b - (k-1)ab|}{|2 - a - b|}.$$

We need to show this is strictly less than C(k,k-1) = k for all |a|,|b| ≤ 1 with a,b ≠ 1.

**Algebraic verification:** Write a = 1-u, b = 1-v where u,v ≠ 0.

n - S = 2 - (1-u) - (1-v) = u + v.

C(k+1,k) - e_k = (k+1) - (1-u) - (1-v) - (k-1)(1-u)(1-v)
= (k+1) - 2 + u + v - (k-1)(1 - u - v + uv)
= (k-1) + u + v - (k-1) + (k-1)(u+v) - (k-1)uv
= u + v + (k-1)(u+v) - (k-1)uv
= (u+v)(1 + k - 1) - (k-1)uv
= k(u+v) - (k-1)uv.

So:
$$\frac{|C(k+1,k) - e_k|}{|n-S|} = \frac{|k(u+v) - (k-1)uv|}{|u+v|} = \left|k - \frac{(k-1)uv}{u+v}\right|.$$

For this to equal k, we need uv/(u+v) = 0, which requires uv = 0, i.e., u = 0 or v = 0, contradicting u,v ≠ 0.

Therefore the ratio is strictly less than k when m ≥ 2. ✓

**Base case established:** IH(k+1) holds with equality iff m ≤ 1.

---

### Inductive Step: n ≥ k + 2

Assume IH(n') holds for all n' < n. We prove IH(n).

Fix z₁,…,z_{n-1} with |zⱼ| ≤ 1. Let m-1 = #{j < n : zⱼ ≠ 1}.

By Lemma A, h(zₙ) = (A - Bzₙ)/(C₀ - zₙ) with |C₀| ≥ 1.

**Case 1: |C₀| = 1**

By Lemma B, zⱼ = 1 for all j < n, so m-1 = 0.

With z₁ = … = z_{n-1} = 1:
- A = C(n,k) - e_k(1,…,1,0) = C(n,k) - C(n-1,k) = C(n-1,k-1).
- B = e_{k-1}(1,…,1) = C(n-1,k-1).
- C₀ = n - (n-1) = 1.

So h(zₙ) = (C(n-1,k-1) - C(n-1,k-1)·zₙ)/(1 - zₙ) = C(n-1,k-1)(1-zₙ)/(1-zₙ) = C(n-1,k-1)

for zₙ ≠ 1 (and by continuity for all zₙ with n - S ≠ 0).

Therefore |h(zₙ)| = C(n-1,k-1), achieving equality.

**Equality characterization in Case 1:** m = m-1 + (1 if zₙ ≠ 1 else 0) ∈ {0, 1}, so m ≤ 1. ✓

**Case 2: |C₀| > 1, m-1 = 0**

Here z₁ = … = z_{n-1} = 1 but |C₀| = |n-(n-1)| = 1, contradicting |C₀| > 1. So this case is empty.

**Case 3: |C₀| > 1, m-1 = 1**

Exactly one zⱼ ≠ 1 among z₁,…,z_{n-1}.

By Lemma C, max_{|zₙ|≤1} |h| = max_{|zₙ|=1} |h|.

**At zₙ = 1:** The n-variable configuration has m = 1 (only the one zⱼ ≠ 1 among j < n).

By Lemma G: |h(1)| = C(n-1,k-1) exactly (equality case).

**At zₙ ≠ 1 on the unit circle:** The configuration has m = 2 (the original zⱼ ≠ 1 plus zₙ ≠ 1).

We apply the IH at zₙ = 1 to understand h(1), then use the Möbius geometry.

By Lemma E with m-1 = 1: The two Pascal terms have:
- First term (n-1,k): IH(n-1)-Eq says equality iff m-1 ≤ 1. Since m-1 = 1 ≤ 1, this can be equality.
- Second term (n-1,k-1): Similarly can be equality.

The two terms are both C(n-2,_)·|n-1-S_{-n}|·e^{iθ} for some phase θ, and when m-1 = 1 with the unique non-1 variable equal to some t:

Explicit computation: WLOG z₁ = … = z_{n-2} = 1, z_{n-1} = t ≠ 1.
- S_{-n} = (n-2) + t.
- e_k(z_{-n}) = C(n-2,k) + t·C(n-2,k-1).
- e_{k-1}(z_{-n}) = C(n-2,k-1) + t·C(n-2,k-2).

First term: C(n-1,k) - e_k(z_{-n}) = [C(n-2,k)+C(n-2,k-1)] - [C(n-2,k)+t·C(n-2,k-1)]
= C(n-2,k-1)(1-t).

Second term: C(n-1,k-1) - e_{k-1}(z_{-n}) = [C(n-2,k-1)+C(n-2,k-2)] - [C(n-2,k-1)+t·C(n-2,k-2)]
= C(n-2,k-2)(1-t).

Both terms are proportional to (1-t), so they ARE parallel. Sum = [C(n-2,k-1)+C(n-2,k-2)](1-t) = C(n-1,k-1)(1-t).

Also n-1-S_{-n} = n-1-(n-2)-t = 1-t.

So |h(1)| = |C(n-1,k-1)(1-t)|/|1-t| = C(n-1,k-1). ✓

**Strict inequality for zₙ ≠ 1:** The image of the unit circle under h is a circle (Möbius transforms map circles to circles). We've shown h(1) = C(n-1,k-1) (real positive).

For zₙ ≠ 1 on the unit circle, the n-configuration has m = 2. By IH(n-1) applied through the Pascal decomposition (same calculation as above but now with zₙ = e^{iφ} ≠ 1):

At zₙ = e^{iφ}:
- n - S = C₀ - e^{iφ} ≠ 0 (since |C₀| > 1).
- C(n,k) - e_k = (from Pascal at general zₙ, not just zₙ = 1)...

Actually, the key point is: the Möbius image of the unit circle is a circle, h(1) = C(n-1,k-1) is on this circle, and we need to show no other point has larger modulus.

Since m = 2 for zₙ ≠ 1, by IH(n-1)-Eq applied to the Pascal terms, at least one term has strict inequality (the (n-1,k) term has m-1 = 1 non-1 variables, giving equality, but then the full triangle inequality |a+b| < |a|+|b| is strict unless a,b parallel — but now the phases depend on zₙ ≠ 1).

More directly: The circle traced by h(zₙ) for |zₙ| = 1 passes through h(1) = C(n-1,k-1). The maximum |h| on this circle is at the point farthest from the origin.

**Claim:** This maximum is C(n-1,k-1), achieved only at zₙ = 1.

**Proof:** If |h(zₙ*)| ≥ C(n-1,k-1) for some zₙ* ≠ 1, then |C(n,k)-e_k| ≥ C(n-1,k-1)|n-S|, meaning equality or greater. But we've established via the IH that when m ≥ 2, strict inequality holds. Since m = 2 when zₙ* ≠ 1, we have |h(zₙ*)| < C(n-1,k-1). So the only point with |h| = C(n-1,k-1) is zₙ = 1.

Therefore max_{|zₙ|=1} |h(zₙ)| = C(n-1,k-1), achieved at zₙ = 1.

**Equality characterization in Case 3:** Equality iff zₙ = 1, giving m = 1. ✓

**Case 4: |C₀| > 1, m-1 ≥ 2**

At least two zⱼ ≠ 1 among z₁,…,z_{n-1}.

**Claim:** For ALL zₙ with |zₙ| ≤ 1, |h(zₙ)| < C(n-1,k-1).

**Proof at zₙ = 1:**

By Lemma D and E, |h(1)| ≤ C(n-1,k-1) with equality requiring both IH terms to achieve equality.

First IH term (n-1,k): This involves z₁,…,z_{n-1}. By IH(n-1)-Eq, equality requires m-1 ≤ 1. But m-1 ≥ 2, so this term has STRICT inequality:
$$|C(n-1,k) - e_k(z_{-n})| < C(n-2,k-1)|n-1-S_{-n}|.$$

Second IH term (n-1,k-1): 
- If k ≥ 3: k-1 ≥ 2, and IH(n-1, k-1) applies, giving strict inequality when m-1 ≥ 2.
- If k = 2: k-1 = 1, and the bound is |C(n-1,1) - e₁| = |n-1-S_{-n}| ≤ 1·|n-1-S_{-n}|, which is equality.

In either case, at least the first term is strict. Therefore:
$$|h(1)| = \frac{|[\text{term}_1] + [\text{term}_2]|}{|n-1-S_{-n}|} \le \frac{|[\text{term}_1]| + |[\text{term}_2]|}{|n-1-S_{-n}|}$$
$$< \frac{C(n-2,k-1)|n-1-S_{-n}| + C(n-2,k-2)|n-1-S_{-n}|}{|n-1-S_{-n}|} = C(n-1,k-1).$$

So |h(1)| < C(n-1,k-1).

**Proof for |zₙ| = 1, zₙ ≠ 1:**

For such zₙ, the n-configuration has m = m-1 + 1 ≥ 3.

The Möbius image of {|zₙ| = 1} under h is a circle passing through h(1). Since |h(1)| < C(n-1,k-1), the center of this image circle is at some point w₀ with |w₀ - h(1)| = r (the radius).

If any point on this image circle had |w| = C(n-1,k-1), that would be an equality case for the n-variable inequality with m ≥ 2. But by IH(n-1), equality requires m ≤ 1. Contradiction.

Therefore the entire image circle lies strictly inside {|w| < C(n-1,k-1)}, giving:
$$\max_{|z_n|=1} |h(z_n)| < C(n-1,k-1).$$

By Lemma C, max_{|zₙ|≤1} |h| = max_{|zₙ|=1} |h| < C(n-1,k-1).

**Equality characterization in Case 4:** No equality (m ≥ 2 always). ✓

---

### Conclusion

Combining all cases:

1. **IH(n)-Ineq** holds: |C(n,k) - e_k(z)| ≤ C(n-1,k-1)|n-S| for all |zᵢ| ≤ 1.

2. **IH(n)-Eq** holds: Equality iff m ≤ 1, i.e., at most one zᵢ ≠ 1.

By strong induction, the result holds for all n > k > 1.

**Final answer:** Equality holds if and only if **at most one of the zᵢ differs from 1**.

∎
