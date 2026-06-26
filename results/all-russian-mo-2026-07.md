## Status
solved

## Approaches tried
- Coordinate transformation (Manhattan to Chebyshev) + Monochromatic grouping + AM-GM — worked

## Current best
Complete proof via coordinate transformation and counting argument.

## Full proof

**Problem.** Let $n$ be an odd positive integer. Consider an $n \times n$ grid with cells indexed by $(r, c)$ where $r, c \in \{1, 2, \ldots, n\}$. Define the distance between two cells as the Manhattan distance $|r_1 - r_2| + |c_1 - c_2|$. Suppose $R$ cells are colored red and $B$ cells are colored blue, subject to:

1. Any line joining the centers of a red cell and a blue cell is not parallel to either diagonal of the grid.
2. The distance between any red cell and any blue cell is never equal to $n$.

Prove that $\sqrt{R} + \sqrt{B} \le n$.

---

**Step 1: Coordinate transformation.**

Define new coordinates $(u, v) = (r + c, r - c)$ for each cell $(r, c)$. The inverse transformation is $r = \frac{u + v}{2}$, $c = \frac{u - v}{2}$. For a cell to exist in the grid (i.e., $r, c \in \{1, \ldots, n\}$), we need:
- $u + v$ even (so that $r, c$ are integers),
- $u \in \{2, 3, \ldots, 2n\}$ (since $r + c$ ranges from $1 + 1 = 2$ to $n + n = 2n$),
- $v \in \{-(n-1), \ldots, n-1\}$ (since $r - c$ ranges from $1 - n = -(n-1)$ to $n - 1$).

**Claim 1.** The Manhattan distance between cells $(r_1, c_1)$ and $(r_2, c_2)$ equals $\max(|u_1 - u_2|, |v_1 - v_2|)$ in $(u, v)$ coordinates.

*Proof.* Let $\Delta u = u_1 - u_2$ and $\Delta v = v_1 - v_2$. Then:
$$|r_1 - r_2| + |c_1 - c_2| = \left|\frac{\Delta u + \Delta v}{2}\right| + \left|\frac{\Delta u - \Delta v}{2}\right| = \frac{|\Delta u + \Delta v| + |\Delta u - \Delta v|}{2}.$$

For any real $a, b$, we have $|a + b| + |a - b| = 2\max(|a|, |b|)$. (This can be verified by considering all sign combinations.) Thus:
$$|r_1 - r_2| + |c_1 - c_2| = \max(|\Delta u|, |\Delta v|). \quad \square$$

---

**Step 2: Translating the constraints.**

**Constraint 1 (no diagonal alignment):** A line through $(r_1, c_1)$ and $(r_2, c_2)$ is parallel to the main diagonal (direction $(1, 1)$) if and only if $r_1 - r_2 = c_1 - c_2$, i.e., $v_1 = v_2$. It is parallel to the anti-diagonal (direction $(1, -1)$) if and only if $r_1 - r_2 = -(c_1 - c_2)$, i.e., $u_1 = u_2$.

Therefore, Constraint 1 states: no red cell and blue cell share the same $u$-value, and no red cell and blue cell share the same $v$-value.

Equivalently, let $U_R$ and $U_B$ denote the sets of $u$-values of red and blue cells respectively, and similarly $V_R$ and $V_B$ for $v$-values. Then:
$$U_R \cap U_B = \emptyset \quad \text{and} \quad V_R \cap V_B = \emptyset.$$

**Constraint 2 (no distance $n$):** For any red cell and blue cell, $\max(|u_R - u_B|, |v_R - v_B|) \neq n$.

---

**Step 3: Defining anti-diagonal and diagonal groups.**

We partition the $u$-values $\{2, 3, \ldots, 2n\}$ into $n$ groups called *anti-diagonal groups*:
- $G_0 = \{n + 1\}$ (a singleton),
- $G_s = \{s, s + n\}$ for $s \in \{2, 3, \ldots, n\}$ (each a pair).

This is a partition because:
- For $s \in \{2, \ldots, n\}$, we have $s + n \in \{n + 2, \ldots, 2n\}$.
- The elements $\{2, \ldots, n\} \cup \{n + 2, \ldots, 2n\} \cup \{n + 1\} = \{2, \ldots, 2n\}$.
- No overlap: the first set has elements $\le n$, the second has elements $\ge n + 2$, and the third is $\{n + 1\}$.

Similarly, we partition the $v$-values $\{-(n-1), \ldots, n-1\}$ into $n$ groups called *diagonal groups*:
- $H_0 = \{0\}$ (a singleton),
- $H_d = \{d, d - n\}$ for $d \in \{1, 2, \ldots, n-1\}$ (each a pair).

This is a partition because:
- For $d \in \{1, \ldots, n-1\}$, we have $d - n \in \{-(n-1), \ldots, -1\}$.
- The elements $\{1, \ldots, n-1\} \cup \{-(n-1), \ldots, -1\} \cup \{0\} = \{-(n-1), \ldots, n-1\}$.
- No overlap: the first set has positive elements, the second has negative elements, and the third is $\{0\}$.

---

**Step 4: Lemma A (Distance-$n$ pairing for anti-diagonal groups).**

**Lemma A.** For each $s \in \{2, \ldots, n\}$, any cell on anti-diagonal $u = s$ and any cell on anti-diagonal $u = s + n$ are at Manhattan distance exactly $n$.

*Proof.* Let cell 1 have $u_1 = s$ and cell 2 have $u_2 = s + n$. By Claim 1, the distance is $\max(|s - (s + n)|, |v_1 - v_2|) = \max(n, |v_1 - v_2|)$.

We must show $|v_1 - v_2| \le n$. We compute the range of $v$-values on each anti-diagonal.

**Anti-diagonal $u = s$ (where $2 \le s \le n$):** We need $r + c = s$ with $r, c \in \{1, \ldots, n\}$. This gives $r \in \{\max(1, s - n), \ldots, \min(n, s - 1)\} = \{1, \ldots, s - 1\}$ (since $s \le n$ implies $s - n \le 0 < 1$ and $s - 1 < n$). Then $v = r - c = 2r - s$ ranges over:
$$v_1 \in \{2(1) - s, \ldots, 2(s-1) - s\} = \{2 - s, \ldots, s - 2\}.$$

**Anti-diagonal $u = s + n$ (where $n + 2 \le s + n \le 2n$):** We need $r + c = s + n$ with $r, c \in \{1, \ldots, n\}$. This gives $r \in \{\max(1, s), \ldots, \min(n, s + n - 1)\} = \{s, \ldots, n\}$ (since $s \ge 2 > 1$ and $s + n - 1 > n$). Then $v = 2r - (s + n)$ ranges over:
$$v_2 \in \{2s - s - n, \ldots, 2n - s - n\} = \{s - n, \ldots, n - s\}.$$

The maximum value of $|v_1 - v_2|$ is achieved at the extreme points:
- $v_1 = s - 2$ (max) and $v_2 = s - n$ (min): $|v_1 - v_2| = |(s - 2) - (s - n)| = n - 2$.
- $v_1 = 2 - s$ (min) and $v_2 = n - s$ (max): $|v_1 - v_2| = |(2 - s) - (n - s)| = n - 2$.

In both cases, $|v_1 - v_2| = n - 2 < n$. Therefore $\max(n, |v_1 - v_2|) = n$. $\square$

**Corollary.** Similarly, for each $d \in \{1, \ldots, n-1\}$, any cell on diagonal $v = d$ and any cell on diagonal $v = d - n$ are at Manhattan distance exactly $n$.

*Proof.* Analogous computation. For $v = d$, we have $u \in \{d + 2, \ldots, 2n - d\}$ (ensuring $r, c \ge 1$ and $r, c \le n$). For $v = d - n$, we have $u \in \{n + 1 - d + 1, \ldots, n + 1 + d - 1\}$. The $|u|$-difference is at most $n - 2 < n$, so the distance is $\max(|u_1 - u_2|, n) = n$. $\square$

---

**Step 5: Lemma B (One cell per group pair).**

**Lemma B.** For each pair of groups $(G_s, H_d)$ with $s \in \{0, 2, \ldots, n\}$ and $d \in \{0, 1, \ldots, n-1\}$, there is at most one cell $(r, c)$ in the grid whose $u$-value belongs to $G_s$ and whose $v$-value belongs to $H_d$.

*Proof.* Consider the possible $(u, v)$ pairs where $u \in G_s$ and $v \in H_d$.

**Case 1: $G_0 = \{n+1\}$ or $H_0 = \{0\}$ (singleton groups).**

If $G_s = \{n+1\}$, then $u = n + 1$ is fixed. For each $v \in H_d$, we get $r = \frac{(n+1) + v}{2}$ and $c = \frac{(n+1) - v}{2}$. Since $n + 1$ is even (as $n$ is odd), and elements of $H_d$ have parity opposite to each other (since $d$ and $d - n$ differ by odd $n$), exactly one element of $H_d$ has parity matching $n + 1$ (even). Thus exactly one $(u, v)$ gives integer $(r, c)$.

If $H_d = \{0\}$, then $v = 0$ is fixed. For each $u \in G_s$, we get $r = \frac{u}{2}$ and $c = \frac{u}{2}$. Since $s$ and $s + n$ have opposite parities (as $n$ is odd), exactly one of them is even, giving integer $(r, c)$.

In both cases, at most one cell exists.

**Case 2: Both $G_s = \{s, s+n\}$ and $H_d = \{d, d-n\}$ are two-element sets.**

The four candidate $(u, v)$ pairs are:
$$(s, d), \quad (s, d - n), \quad (s + n, d), \quad (s + n, d - n).$$

For $(u, v)$ to give integer coordinates, $u + v$ must be even.

Since $n$ is odd:
- $s$ and $s + n$ have opposite parities.
- $d$ and $d - n$ have opposite parities.

Among the four pairs above, exactly one from $\{s, s+n\}$ and exactly one from $\{d, d-n\}$ have parities that sum to even. But actually, we get two pairs with even sum:
- If $s$ is even: $(s, d)$ and $(s, d-n)$ have sums $s + d$ and $s + d - n$. Since $n$ is odd, exactly one of these is even.
- Similarly for $s + n$.

In fact, among the four pairs, exactly two have $u + v$ even (one with $u = s$ and one with $u = s + n$).

Now we show at most one of these two is in the grid. Suppose $(u_1, v_1)$ with $u_1 \in \{s, s+n\}$ gives a valid cell $(r_1, c_1)$. The other matching-parity pair has the form $(u_2, v_2)$ where $u_2 = u_1 + n \cdot \epsilon_1$ and $v_2 = v_1 - n \cdot \epsilon_2$ for some $\epsilon_1, \epsilon_2 \in \{-1, +1\}$ with $\epsilon_1 \cdot (-1) = 1$ (to maintain parity). Specifically, if $(u_1, v_1)$ works, the other candidate is $(u_1 \pm n, v_1 \mp n)$.

Compute the new row and column:
$$r_2 = \frac{u_2 + v_2}{2} = \frac{(u_1 \pm n) + (v_1 \mp n)}{2} = \frac{u_1 + v_1}{2} = r_1.$$
$$c_2 = \frac{u_2 - v_2}{2} = \frac{(u_1 \pm n) - (v_1 \mp n)}{2} = \frac{u_1 - v_1 \pm 2n}{2} = c_1 \pm n.$$

Since $c_1 \in \{1, \ldots, n\}$, we have $c_2 = c_1 + n > n$ or $c_2 = c_1 - n < 1$. Either way, $(r_2, c_2)$ is outside the grid.

Therefore, at most one of the two matching-parity pairs corresponds to a cell in the grid. $\square$

---

**Step 6: Lemma C (Monochromaticity of groups).**

**Lemma C.** Each anti-diagonal group $G_s$ is *monochromatic*: all colored cells with $u$-values in $G_s$ have the same color (all red, or all blue, or none are colored). Similarly for diagonal groups $H_d$.

*Proof.* Suppose, for contradiction, that some $G_s$ contains both a red cell $r_1$ (with $u_1 \in G_s$) and a blue cell $b_1$ (with $u_2 \in G_s$).

**Case 1:** $u_1 = u_2$. Then the red and blue cells share the same $u$-value, contradicting Constraint 1 (which forbids $U_R \cap U_B \neq \emptyset$).

**Case 2:** $u_1 \neq u_2$. Since both are in $G_s = \{s, s+n\}$, we have $\{u_1, u_2\} = \{s, s+n\}$. By Lemma A, the distance between any cell on $u = s$ and any cell on $u = s+n$ is exactly $n$. This contradicts Constraint 2.

Thus $G_s$ cannot contain both colors. The same argument applies to $H_d$ using the Corollary to Lemma A. $\square$

---

**Step 7: Counting argument.**

Let $p$ be the number of anti-diagonal groups that contain at least one red cell. By Lemma C, these groups contain only red cells (no blue). Let $q$ be the number of diagonal groups that contain at least one red cell. Again by Lemma C, these groups contain only red cells.

Similarly, the remaining $n - p$ anti-diagonal groups contain no red cells (only blue or uncolored), and the remaining $n - q$ diagonal groups contain no red cells.

**Claim.** $R \le pq$ and $B \le (n - p)(n - q)$.

*Proof.* Each red cell $(r, c)$ has a unique $(u, v)$ pair. Its $u$-value belongs to some red anti-diagonal group (one of the $p$ groups), and its $v$-value belongs to some red diagonal group (one of the $q$ groups). By Lemma B, each (anti-diagonal group, diagonal group) pair contains at most one cell. Since red cells can only belong to red groups (by Constraint 1's disjointness), the number of red cells is at most the number of (red anti-diagonal, red diagonal) group pairs, which is $pq$.

For blue cells: they must have $u$-values in non-red anti-diagonal groups (of which there are $n - p$) and $v$-values in non-red diagonal groups (of which there are $n - q$). By Lemma B, $B \le (n - p)(n - q)$. $\square$

---

**Step 8: Applying AM-GM.**

We have $R \le pq$ and $B \le (n - p)(n - q)$ with $0 \le p, q \le n$.

By AM-GM (arithmetic mean - geometric mean inequality): for non-negative $a, b$,
$$\sqrt{ab} \le \frac{a + b}{2}.$$

Applying this:
$$\sqrt{R} \le \sqrt{pq} \le \frac{p + q}{2},$$
$$\sqrt{B} \le \sqrt{(n-p)(n-q)} \le \frac{(n - p) + (n - q)}{2} = \frac{2n - p - q}{2}.$$

Adding:
$$\sqrt{R} + \sqrt{B} \le \frac{p + q}{2} + \frac{2n - p - q}{2} = \frac{2n}{2} = n.$$

This completes the proof. $\blacksquare$
