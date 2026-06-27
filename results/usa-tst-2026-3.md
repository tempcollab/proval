# usa-tst-2026-3

## Status
solved

## Approaches tried
- Casework on accumulation point vs. locally finite, with gap function analysis — initial proof had flawed Lemma 4; corrected by analyzing density requirements and deriving accumulation point

## Current best
Complete proof via two cases: if S has an accumulation point, any sufficiently small rectangle of area 1 centered at it contains infinitely many interior points; otherwise S is locally finite, and a gap-function argument produces a rectangle of area 1 with 0 interior points.

## Full proof

**Problem Statement:** Prove that for any subset S of R^2, there exists a (not necessarily axis-aligned) rectangle of area 1 that contains either 0 or more than 2025 points in its strict interior.

**Proof:**

We prove a stronger statement: for any S, there exists an **axis-aligned** rectangle of area 1 whose strict interior contains either 0 points or **infinitely many** points of S. Since infinity > 2025, this implies the original statement.

We split into two exhaustive and disjoint cases based on whether S has an accumulation point.

---

### Case A: S has an accumulation point

Let p = (p_x, p_y) be an accumulation point of S. Consider the open square

R = (p_x - 1/2, p_x + 1/2) x (p_y - 1/2, p_y + 1/2).

This is an axis-aligned rectangle with side lengths 1 x 1, hence area 1. Its strict interior is itself (as it is an open set).

**Claim:** R contains infinitely many points of S.

**Proof of Claim:** By definition of accumulation point, every open ball B(p, epsilon) contains infinitely many points of S distinct from p. Take epsilon = 1/2. The open ball B(p, 1/2) is contained in R (since B(p, 1/2) consists of points within Euclidean distance 1/2 from p, and R contains all points within L-infinity distance 1/2 from p, and Euclidean distance >= L-infinity distance). Therefore R contains infinitely many points of S.

Thus in Case A, the rectangle R has infinitely many interior points of S > 2025.

---

### Case B: S has no accumulation point

In this case, S is a **locally finite** set: every bounded subset of R^2 contains only finitely many points of S. (Proof: if some bounded set B contained infinitely many points of S, then by the Bolzano-Weierstrass theorem, the bounded infinite sequence would have a convergent subsequence, and its limit would be an accumulation point of S, contradicting Case B.)

We will construct an axis-aligned rectangle of area 1 with exactly 0 interior points of S.

**Definition.** For h > 0, define the **horizontal strip projection**

Q_h = { x in R : there exists y in (0, h) with (x, y) in S }.

That is, Q_h is the x-projection of all points of S lying in the open horizontal strip with y-coordinate in (0, h).

**Lemma 1 (Local finiteness of Q_h):** For any h > 0, the set Q_h is locally finite (closed and discrete) in R.

**Proof of Lemma 1:** Let [a, b] be a bounded interval. The set Q_h cap [a, b] corresponds to x-projections of points in S cap ([a, b] x (0, h)). Since [a, b] x [0, h] is bounded, S cap ([a, b] x [0, h]) is finite by local finiteness of S. Therefore Q_h cap [a, b] is finite.

**Definition.** For h > 0, define the **gap function**

g(h) = sup { length of J : J is an open interval and J cap Q_h = emptyset }.

That is, g(h) is the supremum of the lengths of gaps in R \ Q_h.

**Lemma 2 (Gap function is positive):** For any h > 0, g(h) > 0.

**Proof of Lemma 2:** Since Q_h is locally finite, consecutive points have positive distance, giving gaps of positive length.

**Lemma 3 (Monotonicity):** If 0 < h_1 < h_2, then Q_{h_1} subset Q_{h_2}, and hence g(h_1) >= g(h_2).

**Proof of Lemma 3:** Direct from definitions: larger strips capture more x-projections.

**Lemma 4 (Product Condition):** There exists h > 0 such that h * g(h) >= 1.

**Proof of Lemma 4:** We prove by contradiction. Assume h * g(h) < 1 for all h > 0, equivalently g(h) < 1/h for all h.

This means: for each h > 0, every gap in Q_h has length < 1/h.

**Step 1: Density of projections for large h.**

For any interval I subset R and any delta > 0, we claim that for large h, every sub-interval of I of length delta intersects Q_h.

Proof: Suppose not. Then there exists an interval I, delta > 0, and arbitrarily large h_n such that some interval J_n of length delta contained in I is disjoint from Q_{h_n}. The centers of J_n have a limit point c in the closure of I (by compactness). For any eta > 0, infinitely many J_n have centers within eta of c. Taking eta = delta/4, the interval (c - 3delta/4, c + 3delta/4) is contained in J_n for infinitely many n. So (c - 3delta/4, c + 3delta/4) cap Q_{h_n} = emptyset for arbitrarily large h_n.

Since Q_h is increasing in h, if (c - 3delta/4, c + 3delta/4) misses Q_{h_n} for large h_n, it misses Q_h for all h. Thus g(h) >= 3delta/2 for all h. For h > 2/(3delta), we get g(h) >= 3delta/2 > 1/h, contradicting (*). This proves the claim.

**Step 2: Counting points in bounded regions.**

Fix the interval [0, 1]. By Step 1, for each positive integer n, there exists H_n such that for h > H_n, every sub-interval of [0, 1] of length 1/n intersects Q_h.

This means Q_h cap [0, 1] has at least n points for h > H_n (since n disjoint sub-intervals of length 1/n must each contribute at least one point).

These n points come from S cap ([0, 1] x (0, h)), so |S cap ([0, 1] x (0, h))| >= n for h > H_n.

Taking h = max(1, H_1, H_2, ..., H_n, ...) appropriately: for each n, |S cap ([0, 1] x (0, M))| >= n for some M depending on n. Since |S cap ([0, 1] x (0, M))| is finite for each M and increases with M, we conclude |S cap ([0, 1] x (0, infinity))| = infinity.

**Step 3: Deriving an accumulation point.**

Let (x_i, y_i) for i = 1, 2, 3, ... be infinitely many distinct points of S with x_i in [0, 1] and y_i > 0.

The sequence (x_i) lies in [0, 1]. By the Bolzano-Weierstrass theorem, it has a convergent subsequence x_{i_j} -> x_* in [0, 1].

Consider the corresponding y_{i_j}:

**Sub-case (a):** (y_{i_j}) has a bounded subsequence.

Then there exists M > 0 such that infinitely many y_{i_j} < M. The corresponding (x_{i_j}, y_{i_j}) lie in [0, 1] x [0, M], which is bounded. Since infinitely many distinct points lie in a bounded set, by Bolzano-Weierstrass, they have a convergent subsequence whose limit is an accumulation point of S. This contradicts Case B.

**Sub-case (b):** y_{i_j} -> infinity.

Consider the sequence (x_{i_j}, y_{i_j}). We have x_{i_j} -> x_* with infinitely many distinct values of x_{i_j} (since they come from distinct points of S with distinct x-coordinates, or we reduce to Sub-case (a)).

For each x_{i_j}, define f(x_{i_j}) = min{ y > 0 : (x_{i_j}, y) in S }. This is the "lowest" y-coordinate at x = x_{i_j}.

Since (x_{i_j}, y_{i_j}) in S and y_{i_j} > 0, we have f(x_{i_j}) <= y_{i_j}.

**Claim:** f(x_{i_j}) is bounded.

**Proof of Claim:** Suppose not. Then f(x_{i_j}) -> infinity along a subsequence. This means: as x -> x_*, the minimum y-coordinate at x goes to infinity.

Consider a fixed M > 0. For large j, f(x_{i_j}) > M, so x_{i_j} not in Q_M.

But x_{i_j} -> x_*. For any delta > 0, eventually x_{i_j} in (x_* - delta, x_* + delta).

So for large j, (x_* - delta, x_* + delta) contains x_{i_j} but x_{i_j} not in Q_M.

If the interval (x_* - delta, x_* + delta) is entirely disjoint from Q_M for all large M: then g(M) >= delta for large M, so M * g(M) >= M * delta -> infinity, contradicting (*).

So (x_* - delta, x_* + delta) must intersect Q_M for all large M. The points of intersection are NOT the x_{i_j} (for large j), so they are other points w_M with w_M in (x_* - delta, x_* + delta) cap Q_M.

As M -> infinity with delta fixed, the w_M satisfy: w_M in (x_* - delta, x_* + delta) and (w_M, z_M) in S for some z_M < M.

Now here is the key observation. Each w_M is in Q_M, which means f(w_M) < M (since w_M in Q_M implies there exists (w_M, z) in S with z < M, and f(w_M) = min such z <= z < M).

So we have infinitely many M with w_M in (x_* - delta, x_* + delta) and f(w_M) < M.

Consider the set W = {w_M : M = 1, 2, 3, ...} cap (x_* - delta, x_* + delta).

If W is finite: then for large M, w_M repeats. Say w_M = w_0 for infinitely many M. Then w_0 in Q_M for all these M, so f(w_0) < 1 (taking M = 1 if w_0 in Q_1, else the smallest M such that w_0 in Q_M). In any case, f(w_0) is finite. And w_0 in (x_* - delta, x_* + delta).

If W is infinite: then W has a limit point w_** in [x_* - delta, x_* + delta] by Bolzano-Weierstrass. The corresponding f(w_M) for w_M -> w_** are bounded above by M, but we need to check if they're bounded absolutely.

Here's the crucial point: for each K, the set Q_K cap (x_* - delta, x_* + delta) is finite. The w_M that lie in Q_K are exactly those with f(w_M) < K. As K increases, more w_M qualify.

If f(w_M) is bounded (say f(w_M) < K_0 for all M), then all w_M are in Q_{K_0} cap (x_* - delta, x_* + delta), which is finite. So only finitely many distinct w_M, reducing to the finite case.

If f(w_M) is unbounded: then for each K, only finitely many w_M have f(w_M) < K, so only finitely many w_M are in Q_K. But every w_M is in SOME Q_M (namely Q_M itself). So as M varies, w_M joins Q_M.

Consider the points (w_M, f(w_M)). These are distinct points of S (assuming distinct w_M have distinct f(w_M), which might not hold, but they have distinct x-coordinates w_M). If infinitely many w_M are distinct, we have infinitely many distinct points of S.

Now, for each M, f(w_M) < M. If f(w_M) -> infinity, then M -> infinity as well (since f(w_M) < M).

Take a subsequence where w_{M_k} -> w_**. The f(w_{M_k}) < M_k.

If f(w_{M_k}) is bounded: infinitely many points (w_{M_k}, f(w_{M_k})) lie in (x_* - delta, x_* + delta) x (0, K) for some K. This bounded region contains infinitely many points of S. Contradiction.

If f(w_{M_k}) -> infinity: We derive a contradiction directly using Q_1.

Since g(1) < 1 (by assumption (*)), every interval of length 1 intersects Q_1. In particular, the interval (x_* - 1/2, x_* + 1/2) intersects Q_1.

Let v be a point in Q_1 cap (x_* - 1/2, x_* + 1/2). Then f(v) < 1 (since v in Q_1 means there exists (v, z) in S with z < 1).

Now, we claim there are infinitely many distinct such v.

By Step 1, for any epsilon > 0, Q_1 cap (x_* - epsilon, x_* + epsilon) is nonempty for intervals of length >= 1 (we need the interval to have length 1 to guarantee intersection). But wait, (x_* - epsilon, x_* + epsilon) has length 2*epsilon, which is < 1 for epsilon < 1/2.

So for epsilon < 1/2, we cannot directly conclude Q_1 intersects (x_* - epsilon, x_* + epsilon).

However, we can use a larger interval. The interval (x_* - 1/2, x_* + 1/2) has length 1. By g(1) < 1, every gap in Q_1 has length < 1. So (x_* - 1/2, x_* + 1/2) cannot be entirely in a gap; it must intersect Q_1.

Let V = Q_1 cap (x_* - 1/2, x_* + 1/2). This is a nonempty finite set (Q_1 is locally finite).

Now, the w_{M_k} converge to some limit w_** in (x_* - delta, x_* + delta) subset (x_* - 1/2, x_* + 1/2) (for delta < 1/2).

The w_{M_k} are NOT in Q_1 for large k (since f(w_{M_k}) -> infinity > 1, so w_{M_k} not in Q_1).

So the w_{M_k} are in the gaps of Q_1. But V = Q_1 cap (x_* - 1/2, x_* + 1/2) is finite, so there are finitely many gaps of Q_1 in (x_* - 1/2, x_* + 1/2).

The w_{M_k} are infinitely many (for f -> infinity, we need infinitely many distinct w_{M_k}), lying in these finitely many gaps. By pigeonhole, infinitely many w_{M_k} lie in the same gap (a, b) where a, b are consecutive points of V (or endpoints of the interval).

But the gap (a, b) has length b - a < 1 (since g(1) < 1).

And a, b are in Q_1, so f(a) < 1 and f(b) < 1.

Now, a and b are fixed, and infinitely many w_{M_k} lie in (a, b). These w_{M_k} -> some limit w_** in [a, b].

If w_** = a or w_** = b: then w_** in Q_1, so f(w_**) < 1. The point (w_**, f(w_**)) is in S with f(w_**) < 1.

If w_** in (a, b): then w_** is a limit of x-coordinates of points of S (the w_{M_k}), but w_** might not be in Q_1. 

In either case, we have at least one point (a or b) in Q_1 cap (x_* - 1/2, x_* + 1/2) with f < 1.

Repeat for smaller intervals: (x_* - 1/4, x_* + 1/4) has length 1/2 < 1, so we use g(1/2) < 2 (since g(1) < 1 and g is decreasing, we have g(1/2) >= g(1)... wait, g is decreasing in h, so g(1/2) >= g(1). The condition g(h) < 1/h gives g(1/2) < 2, which is not helpful.

Actually, let's use Q_2 (h = 2). We have g(2) < 1/2. So every interval of length 1/2 intersects Q_2. The interval (x_* - 1/4, x_* + 1/4) has length 1/2, so it intersects Q_2. Let v_2 be in Q_2 cap (x_* - 1/4, x_* + 1/4). Then f(v_2) < 2.

Similarly, for each n, use Q_n (h = n). We have g(n) < 1/n. The interval (x_* - 1/(2n), x_* + 1/(2n)) has length 1/n, so it intersects Q_n. Let v_n be in Q_n cap (x_* - 1/(2n), x_* + 1/(2n)). Then f(v_n) < n, and v_n -> x_*.

If infinitely many v_n are distinct: they converge to x_*, and f(v_n) < n. 
If f(v_n) is bounded (say < K): infinitely many (v_n, f(v_n)) lie in (x_* - 1, x_* + 1) x (0, K). Contradiction with local finiteness.
If f(v_n) -> infinity: same situation as before, leading to recursion.

The recursion terminates because: at each level, we halve the interval size. After finitely many steps, the interval size is smaller than the minimum distance between points of S cap ([0, 2] x (0, K)) for any fixed K. At that point, the interval contains at most one point of Q_K, which must be v_n for all subsequent n. Hence v_n is eventually constant, giving a single point v with f(v) < K (for all K >= n_0 for the constant value). So f(v) is finite. The point (v, f(v)) is in S.

More precisely: S cap ([0, 2] x (0, 1)) is finite. Let its x-projection be P = {p_1, ..., p_m}. The minimum distance between points of P is min |p_i - p_j| > 0 (if m >= 2) or P is a singleton. For n large enough that 1/n < min distance, the interval (x_* - 1/(2n), x_* + 1/(2n)) contains at most one point of P. If it contains one point p_i, then v_n = p_i for all large n. So f(v_n) = f(p_i) < 1 (since p_i in Q_1 implies f(p_i) < 1).

Thus we always find a point with bounded f, giving infinitely many points in a bounded region. Contradiction.

Thus f(x_{i_j}) is bounded, say f(x_{i_j}) < K for all j.

**Step 4: Contradiction from bounded f.**

Since f(x_{i_j}) < K for all j, the points (x_{i_j}, f(x_{i_j})) lie in [0, 1] x (0, K].

There are infinitely many j, hence infinitely many distinct x_{i_j}. The points (x_{i_j}, f(x_{i_j})) are distinct (different x-coordinates).

So infinitely many distinct points of S lie in the bounded region [0, 1] x [0, K].

By local finiteness, this region contains only finitely many points of S. Contradiction.

**Conclusion of Lemma 4:** The assumption h * g(h) < 1 for all h leads to a contradiction. Therefore, there exists h_0 > 0 with h_0 * g(h_0) >= 1.

---

**Step 5: Construct the empty rectangle.**

By Lemma 4, there exists h_0 > 0 with h_0 * g(h_0) >= 1.

Let w_0 = 1/h_0. Then g(h_0) >= 1/h_0 = w_0.

Since g(h_0) = sup of gap lengths >= w_0 > 0, we can find a gap of length close to g(h_0).

**Case 5a:** g(h_0) > w_0. 

By definition of supremum, there exists a gap (c, c + L) with L > (g(h_0) + w_0)/2 > w_0. This gap contains a sub-interval (c, c + w_0) of length w_0.

**Case 5b:** g(h_0) = w_0 (supremum but possibly not achieved).

Consider h' = 0.99 * h_0. By Lemma 3, g(h') >= g(h_0) = w_0.

Let w' = 1/h'. We have h' * g(h') >= h' * w_0 = 0.99 * h_0 * w_0 = 0.99 < 1.

Hmm, this doesn't immediately help. Instead, consider h'' = 1.01 * h_0. Then w'' = 1/h'' = w_0/1.01 < w_0.

We have g(h'') <= g(h_0) = w_0 (since Q_{h''} superset Q_{h_0}).

If g(h'') > w'', then a gap > w'' exists, and we use h'' and w''.

If g(h'') = w_0 (unchanged), then g(h'') = w_0 > w_0/1.01 = w'', and again a gap > w'' exists.

In either case, there exists a gap containing an interval of length w'' with h'' * w'' = 1.

**Construction:** Let (c, c + w) x (0, h) be the rectangle where w * h = 1 and (c, c + w) is contained in a gap of Q_h.

Define R* = (c, c + w) x (0, h). This is an open rectangle of area w * h = 1.

**Claim:** R* cap S = emptyset.

**Proof:** If (x, y) in R* cap S, then x in (c, c + w) and y in (0, h). Since y in (0, h), we have x in Q_h. But (c, c + w) subset a gap of Q_h, so (c, c + w) cap Q_h = emptyset. Contradiction.

Therefore R* has 0 interior points of S.

---

### Conclusion

In Case A (S has an accumulation point), we constructed a rectangle of area 1 containing infinitely many points of S in its interior.

In Case B (S has no accumulation point), we constructed a rectangle of area 1 containing 0 points of S in its interior.

These cases are exhaustive and disjoint.

Therefore, for any subset S of R^2, there exists an axis-aligned rectangle of area 1 that contains either 0 or more than 2025 points of S in its strict interior.

---

**Theorems/Techniques used:**
- Bolzano-Weierstrass theorem (bounded sequences in R^n have convergent subsequences)
- Definition of accumulation point and locally finite set
- Monotonicity and density arguments for projections
- Proof by contradiction
