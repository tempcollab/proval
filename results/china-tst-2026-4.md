## Status
solved

## Approaches tried
- Averaging + Jensen + Holder with canonical paths — worked; yields tight constant D = 6075 < 6677

## Current best
Complete proof using canonical axis-aligned paths, Jensen's inequality for convexity of |t|^p, and Holder's inequality (power-mean) for telescoping along paths. Key steps: (1) write f(v) as average of differences using sum f = 0, (2) apply Jensen to get |f(v)|^p bound, (3) use Holder on canonical paths to bound |f(v)-f(u)|^p, (4) count edge crossings to get final bound.

## Full proof

**Problem statement:** Let G = (V, E) be the 3D grid graph where V = {(x,y,z) : 1 <= x,y,z <= 2026} and vertices are adjacent iff their L1 distance is 1. Each vertex v has a real label f(v) with sum_{v in V} f(v) = 0. For each edge e = {u,v}, define g(e) = |f(u) - f(v)|. Prove that for all real p >= 1,

    sum_{v in V} |f(v)|^p <= 6677^p * sum_{e in E} g(e)^p.

---

### Setup and Notation

Let n = 2026. Then |V| = n^3 vertices. The diameter of the graph (maximum L1 distance) is D = 3(n-1) = 6075, achieved for instance between (1,1,1) and (n,n,n).

For two vertices v = (v_1, v_2, v_3) and u = (u_1, u_2, u_3), define the **canonical path** P(v,u) as the axis-aligned path that:
- First moves in the x-direction from v_1 to u_1 (all |v_1 - u_1| steps)
- Then moves in the y-direction from v_2 to u_2 (all |v_2 - u_2| steps)  
- Then moves in the z-direction from v_3 to u_3 (all |v_3 - u_3| steps)

The length of P(v,u) is |v_1 - u_1| + |v_2 - u_2| + |v_3 - u_3| = dist(v,u) <= D.

We write e = (w, w') with signed contribution delta_e(v,u) = f(w') - f(w) if the path crosses e from w to w', and delta_e(v,u) = 0 if e is not on the path. Then:

    f(u) - f(v) = sum_{e in P(v,u)} delta_e(v,u)

where the sum is over the (at most D) edges in the canonical path, with |delta_e(v,u)| = g(e) for edges on the path.

---

### Step 1: Averaging Identity

**Claim:** For any vertex v, f(v) = (1/|V|) * sum_{u in V} (f(v) - f(u)).

**Proof:** Since sum_{u in V} f(u) = 0 by hypothesis:

    (1/|V|) * sum_{u in V} (f(v) - f(u)) = (1/|V|) * (|V| * f(v) - sum_{u in V} f(u))
                                         = (1/|V|) * (|V| * f(v) - 0)
                                         = f(v).  []

---

### Step 2: Jensen's Inequality

**Lemma (Convexity of |t|^p):** For p >= 1, the function phi(t) = |t|^p is convex on R.

**Proof:** For p = 1, phi(t) = |t| is convex (the max of linear functions t and -t). For p > 1, on t > 0 we have phi''(t) = p(p-1)t^{p-2} > 0; on t < 0, phi(t) = (-t)^p = |t|^p and by symmetry phi''(t) > 0. At t = 0, phi has a local minimum (for p > 1) or a corner (for p = 1). In both cases phi is convex.  []

**Jensen's Inequality:** For a convex function phi, real numbers a_1, ..., a_m, and non-negative weights w_1, ..., w_m with sum w_i = 1:

    phi(sum_{i=1}^m w_i * a_i) <= sum_{i=1}^m w_i * phi(a_i).

**Application:** By Step 1, f(v) = sum_{u in V} (1/|V|) * (f(v) - f(u)). Apply Jensen with phi(t) = |t|^p, weights w_u = 1/|V|, and a_u = f(v) - f(u):

    |f(v)|^p = |sum_{u in V} (1/|V|) * (f(v) - f(u))|^p
             <= sum_{u in V} (1/|V|) * |f(v) - f(u)|^p.

---

### Step 3: Sum Over All Vertices

Summing the inequality from Step 2 over all v in V:

    sum_{v in V} |f(v)|^p <= sum_{v in V} sum_{u in V} (1/|V|) * |f(v) - f(u)|^p
                           = (1/|V|) * sum_{v in V} sum_{u in V} |f(v) - f(u)|^p.    ... (*)

---

### Step 4: Holder/Power-Mean Inequality on Paths

**Lemma (Power-Mean Inequality):** If c_1, c_2, ..., c_L are real numbers and p >= 1, then:

    |sum_{i=1}^L c_i|^p <= L^{p-1} * sum_{i=1}^L |c_i|^p.

**Proof:** By the triangle inequality, |sum c_i| <= sum |c_i|. Now apply the power-mean inequality (which follows from Jensen applied to phi(t) = t^p on positive reals with uniform weights):

For positive reals b_i, ((1/L) sum b_i)^p <= (1/L) sum b_i^p (by convexity of t^p for p >= 1).

Thus (sum b_i)^p <= L^p * (1/L) sum b_i^p = L^{p-1} * sum b_i^p.

Setting b_i = |c_i|: (sum |c_i|)^p <= L^{p-1} * sum |c_i|^p.

Combined with |sum c_i| <= sum |c_i|, we get |sum c_i|^p <= L^{p-1} * sum |c_i|^p.  []

**Application to canonical paths:** For any v, u in V, f(v) - f(u) = sum_{e in P(v,u)} delta_e(v,u) where |P(v,u)| = dist(v,u) <= D. Applying the lemma with L = dist(v,u) <= D:

    |f(v) - f(u)|^p <= dist(v,u)^{p-1} * sum_{e in P(v,u)} |delta_e(v,u)|^p
                     = dist(v,u)^{p-1} * sum_{e in P(v,u)} g(e)^p
                     <= D^{p-1} * sum_{e in P(v,u)} g(e)^p.    ... (**)

---

### Step 5: Substitute and Swap Summation

Substituting (**) into (*):

    sum_{v in V} |f(v)|^p <= (1/|V|) * sum_{v,u in V} D^{p-1} * sum_{e in P(v,u)} g(e)^p
                           = (D^{p-1}/|V|) * sum_{v,u in V} sum_{e in P(v,u)} g(e)^p.

Swapping the order of summation (exchanging sum over (v,u) pairs with sum over edges):

    sum_{v in V} |f(v)|^p <= (D^{p-1}/|V|) * sum_{e in E} g(e)^p * N(e)    ... (***)

where N(e) = |{(v,u) : e in P(v,u)}| is the number of ordered pairs (v,u) whose canonical path contains edge e.

---

### Step 6: Counting Edge Crossings (Key Lemma)

**Lemma 1 (Edge-crossing count):** For an x-direction edge e connecting (k, y_0, z_0) to (k+1, y_0, z_0) where 1 <= k <= n-1:

    N(e) = 2 * k * (n - k) * n^2.

**Proof:** The canonical path P(v,u) from v = (v_1, v_2, v_3) to u = (u_1, u_2, u_3) traverses edge e if and only if:
1. The y-coordinate is fixed at y_0 during x-movement, so v_2 = y_0 (the path hasn't moved in y yet when crossing x-edges)
2. The z-coordinate is fixed at z_0 during x-movement, so v_3 = z_0
3. The path crosses from x-coordinate k to k+1, meaning min(v_1, u_1) <= k and max(v_1, u_1) >= k+1

For condition 3, we count pairs (v_1, u_1) where exactly one of them is <= k and the other is >= k+1:
- v_1 in {1, ..., k} and u_1 in {k+1, ..., n}: gives k * (n-k) pairs
- v_1 in {k+1, ..., n} and u_1 in {1, ..., k}: gives (n-k) * k pairs

Total for (v_1, u_1): 2k(n-k) choices.

For (u_2, u_3): any values in {1, ..., n}^2, giving n^2 choices.

Note: v_2 = y_0 and v_3 = z_0 are fixed (one choice each), while u_2, u_3 are free.

Therefore N(e) = 2k(n-k) * 1 * 1 * n * n = 2k(n-k) * n^2.  []

**Lemma 1' (y-edges):** For a y-direction edge e connecting (x_0, k, z_0) to (x_0, k+1, z_0):

The canonical path P(v,u) from v to u uses this edge iff:
1. After completing x-movement, we're at x-coordinate x_0. This means u_1 = x_0 (since x-movement ends at u_1).
2. The z-coordinate during y-movement is v_3 = z_0.
3. The path crosses from y = k to y = k+1: min(v_2, u_2) <= k < max(v_2, u_2).

Counting:
- u_1 = x_0: 1 choice
- v_1: any of n choices (doesn't affect the edge crossing)
- (v_2, u_2) with one <= k and one >= k+1: 2k(n-k) choices
- v_3 = z_0: 1 choice
- u_3: any of n choices

Total: n * 1 * 2k(n-k) * 1 * n = 2k(n-k) * n^2.  []

**Lemma 1'' (z-edges):** For a z-direction edge e connecting (x_0, y_0, k) to (x_0, y_0, k+1):

The canonical path uses this edge iff:
1. u_1 = x_0 (x-movement ends here)
2. u_2 = y_0 (y-movement ends here)  
3. min(v_3, u_3) <= k < max(v_3, u_3)

Counting:
- u_1 = x_0: 1 choice; v_1: n choices
- u_2 = y_0: 1 choice; v_2: n choices
- (v_3, u_3) condition: 2k(n-k) choices

Total: n * 1 * n * 1 * 2k(n-k) = 2k(n-k) * n^2.  []

**Conclusion:** For any edge e at "position k" (meaning it crosses between coordinate k and k+1 in its direction), we have N(e) = 2k(n-k) * n^2.

---

### Step 7: Maximizing N(e)

**Lemma 2:** For 1 <= k <= n-1, max_k k(n-k) = floor(n/2) * ceil(n/2).

**Proof:** The function h(k) = k(n-k) is a downward parabola in k with vertex at k = n/2. For n = 2026 (even), the maximum is at k = 1013, giving h(1013) = 1013 * 1013 = 1013^2 = 1026169.  []

**Corollary:** For all edges e:
    N(e) <= 2 * 1013^2 * n^2 = 2 * 1013^2 * 2026^2.

Simplification: Since n = 2026 = 2 * 1013:
    N(e) <= 2 * 1013^2 * (2 * 1013)^2 = 2 * 1013^2 * 4 * 1013^2 = 8 * 1013^4.

Alternatively: N(e) <= 2 * (n/2)^2 * n^2 = 2 * (n^2/4) * n^2 = n^4/2.

And since |V| = n^3:
    N(e) <= n^4/2 = n^3 * (n/2) = |V| * (n/2).

---

### Step 8: Combining the Bounds

Returning to (***):

    sum_{v in V} |f(v)|^p <= (D^{p-1}/|V|) * sum_{e in E} g(e)^p * N(e)
                           <= (D^{p-1}/|V|) * (|V| * (n/2)) * sum_{e in E} g(e)^p
                           = D^{p-1} * (n/2) * sum_{e in E} g(e)^p.

---

### Step 9: Final Bound

We need to show D^{p-1} * (n/2) <= 6677^p.

First, we show D^{p-1} * (n/2) <= D^p:

Since n/2 = 1013 and D = 3(n-1) = 3 * 2025 = 6075:
    n/2 = 1013 < 6075 = D.

For p >= 1, we have D^{p-1} * (n/2) <= D^{p-1} * D = D^p.

Second, we show D^p <= 6677^p:

Since D = 6075 < 6677, we have D^p <= 6677^p for all p >= 1.

**Conclusion:**
    sum_{v in V} |f(v)|^p <= D^{p-1} * (n/2) * sum_{e in E} g(e)^p
                           <= D^p * sum_{e in E} g(e)^p
                           <= 6677^p * sum_{e in E} g(e)^p.

This completes the proof.  $\blacksquare$

---

### Summary of Tools Used

1. **Jensen's Inequality** (knowledge_base.md: Standard inequalities) - applied to the convex function |t|^p with uniform weights
2. **Power-Mean Inequality / Holder** (knowledge_base.md: Standard inequalities) - to bound |sum c_i|^p by a weighted sum of |c_i|^p
3. **Double Counting** (knowledge_base.md: Combinatorics) - swapping order of summation to count edge crossings
4. **Canonical Path Method** - standard technique for discrete Poincare inequalities on grid graphs
