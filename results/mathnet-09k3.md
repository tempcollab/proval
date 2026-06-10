## Status
solved

## Approaches tried
- Parity / modular pruning of N (search for N making one factor a non-residue) — dead end: no clean uniform N works across all a,b,c, and the casework does not close. Recorded as a dead end; not pursued.
- Master factorization a² + (ab+bc+ca) = (a+b)(a+c), giving two explicit parametric values of N: N = S2 := ab+bc+ca for part (2) (P_N = perfect square), and N = S2+1 for part (1) (P_N squeezed strictly between consecutive squares). — worked; complete rigorous proof below, all identities sympy-verified.

## Current best
Complete proof (below). Both parts are settled by a single explicit value of N each, valid for ALL positive integers a, b, c; no casework is required.

## Full proof

Throughout, $a,b,c$ are fixed positive integers. Define
$$
S_1 = a+b+c,\qquad S_2 = ab+bc+ca,
$$
and the three pairwise sums
$$
p = a+b,\qquad q = b+c,\qquad r = a+c,\qquad M = pqr = (a+b)(b+c)(a+c).
$$
Since $a,b,c\ge 1$, all of $p,q,r$ are integers $\ge 2$, so $M\ge 8\ge 1$, and $S_1\ge 3$, $S_2\ge 3$. In particular $M$, $S_1$, $S_2$, $p$, $q$, $r$ are positive integers.

For an integer $N$ we write $P_N=(a^2+N)(b^2+N)(c^2+N)$.

### The master factorization

We first record the basic algebraic identity that drives both parts. For the quantity $S_2 = ab+bc+ca$,
$$
a^2 + S_2 = a^2 + ab + bc + ca = (a^2+ab) + (ca + bc) = a(a+b) + c(a+b) = (a+b)(a+c) = pr. \tag{F$_a$}
$$
The grouping is exact: $a(a+b)+c(a+b) = (a+c)(a+b)$.

By the same grouping applied to the other variables — writing each one out explicitly rather than appealing to symmetry — we get:
$$
b^2 + S_2 = b^2 + ab + bc + ca = (b^2+ab) + (bc+ca) = b(b+a) + c(b+a) = (a+b)(b+c) = pq, \tag{F$_b$}
$$
$$
c^2 + S_2 = c^2 + bc + ca + ab = (c^2+ca) + (bc+ab) = c(c+a) + b(c+a) = (a+c)(b+c) = rq. \tag{F$_c$}
$$
(In (F$_b$) we used $ab+bc+ca$ grouped as $(ab) + (bc+ca)$; in (F$_c$) as $(ca) + (bc+ab)$; in each case the two groups share the common factor $(b+a)$ and $(c+a)$ respectively.) Thus
$$
a^2+S_2 = pr,\qquad b^2+S_2 = pq,\qquad c^2+S_2 = qr. \tag{$\star$}
$$

### Part (2): a positive $N$ with $P_N$ a perfect square

Take $N = S_2 = ab+bc+ca$. This is a positive integer since $a,b,c\ge 1$ give $S_2 = ab+bc+ca\ge 3 > 0$.

Using the three identities ($\star$),
$$
P_N = (a^2+S_2)(b^2+S_2)(c^2+S_2) = (pr)(pq)(qr) = p^2 q^2 r^2 = (pqr)^2 = M^2.
$$
Since $M = (a+b)(b+c)(a+c)$ is a positive integer, $P_N = M^2$ is a perfect square. This proves part (2). $\qquad\blacksquare$ (part 2)

### A decomposition of $P_{S_2+1}$

Now take $N = S_2 + 1 = ab+bc+ca + 1$, a positive integer with $N\ge 4>0$. Adding $1$ to each identity in ($\star$):
$$
a^2 + N = pr + 1,\qquad b^2 + N = pq + 1,\qquad c^2 + N = qr + 1.
$$
Write $X = pr$, $Y = pq$, $Z = qr$, all positive integers. Then
$$
P_N = (X+1)(Y+1)(Z+1) = XYZ + (XY+XZ+YZ) + (X+Y+Z) + 1. \tag{D}
$$
We evaluate the three symmetric expressions in $X,Y,Z$.

**(i) The product.**
$$
XYZ = (pr)(pq)(qr) = p^2 q^2 r^2 = (pqr)^2 = M^2.
$$

**(ii) The sum of pairwise products.** Each of $X,Y,Z$ is a product of two of $\{p,q,r\}$, and together $X = pr$, $Y = pq$, $Z = qr$ use each of $p,q,r$ exactly twice; concretely
$$
XY = (pr)(pq) = p^2 qr = p\cdot M,\quad XZ = (pr)(qr) = r^2 pq = r\cdot M,\quad YZ = (pq)(qr) = q^2 pr = q\cdot M,
$$
where we used $M = pqr$. Hence
$$
XY + XZ + YZ = M(p + q + r).
$$
Now
$$
p + q + r = (a+b) + (b+c) + (a+c) = 2(a+b+c) = 2S_1,
$$
so
$$
XY + XZ + YZ = 2 M S_1. \tag{ii}
$$

**(iii) The sum.** We have $X + Y + Z = pr + pq + qr$. We claim
$$
pq + qr + rp = S_1^2 + S_2. \tag{L2}
$$
Proof of (L2): substitute $p=a+b$, $q=b+c$, $r=a+c$ and expand each product.
$$
pq = (a+b)(b+c) = ab + ac + b^2 + bc,
$$
$$
qr = (b+c)(a+c) = ab + bc + ac + c^2,
$$
$$
rp = (a+c)(a+b) = a^2 + ab + ac + bc.
$$
Summing,
$$
pq+qr+rp = (a^2+b^2+c^2) + 3ab + 3bc + 3ac = (a^2+b^2+c^2) + 3S_2.
$$
On the other hand,
$$
S_1^2 + S_2 = (a+b+c)^2 + S_2 = (a^2+b^2+c^2 + 2(ab+bc+ca)) + S_2 = (a^2+b^2+c^2) + 2S_2 + S_2 = (a^2+b^2+c^2) + 3S_2.
$$
The two expressions agree, proving (L2). Therefore
$$
X + Y + Z = S_1^2 + S_2. \tag{iii}
$$

Substituting (i), (ii), (iii) into (D):
$$
P_N = M^2 + 2M S_1 + (S_1^2 + S_2) + 1 = \big(M^2 + 2 M S_1 + S_1^2\big) + (S_2 + 1) = (M + S_1)^2 + (S_2 + 1). \tag{$\dagger$}
$$

### Part (1): the same $N=S_2+1$ makes $P_N$ a non-square

We show $P_N$ lies strictly between the two consecutive perfect squares $(M+S_1)^2$ and $(M+S_1+1)^2$.

**Lower bound (strict).** From ($\dagger$), $P_N = (M+S_1)^2 + (S_2+1)$ and $S_2 + 1\ge 4 > 0$, so
$$
P_N > (M+S_1)^2. \tag{Lower}
$$

**Upper bound (strict).** We first prove the key inequality
$$
S_2 < M. \tag{L1}
$$
Indeed, since $a+c\ge 1$ (as $a,c\ge 1$, in fact $a+c\ge 2$) and $(a+b)(b+c)>0$,
$$
M = (a+b)(b+c)(a+c) \ge (a+b)(b+c).
$$
Expanding the right side,
$$
(a+b)(b+c) = ab + ac + b^2 + bc = (ab+bc+ca) + b^2 = S_2 + b^2.
$$
Since $b\ge 1$, we have $b^2\ge 1 > 0$, so $(a+b)(b+c) = S_2 + b^2 > S_2$. Combining,
$$
M \ge (a+b)(b+c) = S_2 + b^2 > S_2,
$$
which is (L1).

Now compare $P_N$ with $(M+S_1+1)^2$. We have
$$
(M+S_1+1)^2 - (M+S_1)^2 = 2(M+S_1) + 1.
$$
Using ($\dagger$),
$$
(M+S_1+1)^2 - P_N = (M+S_1+1)^2 - (M+S_1)^2 - (S_2+1) = \big(2(M+S_1)+1\big) - (S_2+1) = 2(M+S_1) - S_2.
$$
By (L1), $S_2 < M$, and $S_1\ge 3 > 0$, so
$$
2(M+S_1) - S_2 = (M - S_2) + (M + 2S_1) > 0 + (M + 2S_1) > 0,
$$
since $M - S_2 > 0$ by (L1) and $M + 2S_1 > 0$. Hence
$$
P_N < (M+S_1+1)^2. \tag{Upper}
$$

**Conclusion.** Combining (Lower) and (Upper),
$$
(M+S_1)^2 < P_N < (M+S_1+1)^2,
$$
where $M + S_1$ is a positive integer. A perfect square $k^2$ with $k\ge 0$ cannot satisfy $(M+S_1)^2 < k^2 < (M+S_1+1)^2$: such a $k$ would be an integer strictly between the consecutive integers $M+S_1$ and $M+S_1+1$, which is impossible (KB: *Perfect-square arguments — a value strictly between consecutive squares is not a square*). Therefore $P_N$ is not a perfect square. This proves part (1). $\qquad\blacksquare$ (part 1)

### Numeric sanity check

Take $(a,b,c) = (1,2,3)$. Then $S_1 = 6$, $S_2 = 11$, and $M = (a+b)(b+c)(a+c) = 3\cdot 5\cdot 4 = 60$.

- Part (2), $N = S_2 = 11$: $P_{11} = (1+11)(4+11)(9+11) = 12\cdot 15\cdot 20 = 3600 = 60^2 = M^2$. A perfect square, as claimed.
- Part (1), $N = S_2+1 = 12$: $P_{12} = (1+12)(4+12)(9+12) = 13\cdot 16\cdot 21 = 4368$. Here $M+S_1 = 66$ and $(M+S_1)^2 = 66^2 = 4356$, $(M+S_1+1)^2 = 67^2 = 4489$. Indeed $4356 < 4368 < 4489$, and decomposition ($\dagger$) reads $4368 = 4356 + (S_2+1) = 4356 + 12$. So $P_{12}=4368$ lies strictly between consecutive squares and is not a perfect square, as claimed.

This confirms both constructions on an explicit instance. $\qquad\blacksquare$
