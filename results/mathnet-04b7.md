## Status
solved

## Approaches tried
- Sum-of-squares (SOS) / completing the square — worked. The quantity RHS − LHS equals a positive-coefficient combination of two real squares, hence is nonnegative for all real $a,b,c$.

## Current best
The inequality is equivalent to $D := \big(a^2+b^2+c^2+2(a-b+1)\big) - \tfrac13(a+b+c)^2 \ge 0$, and $D$ admits the exact SOS representation
$$6D = (2a-b-c+3)^2 + 3(b-c-1)^2,$$
which is manifestly nonnegative. Equality holds iff $b=c+1$ and $a=c-1$.

## Full proof

We must prove that for all real numbers $a,b,c$,
$$\frac{1}{3}(a+b+c)^2 \le a^2+b^2+c^2+2(a-b+1). \tag{$\ast$}$$

**Step 1 (Reduction to a nonnegativity statement).**
Define
$$D := \big(a^2+b^2+c^2+2(a-b+1)\big) - \frac{1}{3}(a+b+c)^2.$$
Inequality $(\ast)$ is precisely the statement $D \ge 0$, since it is obtained by moving $\tfrac13(a+b+c)^2$ to the right-hand side. Thus it suffices to prove $D \ge 0$ for all real $a,b,c$.

**Step 2 (Expansion of $D$).**
First expand the square. Since $(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca$,
$$\frac{1}{3}(a+b+c)^2 = \frac{1}{3}a^2+\frac{1}{3}b^2+\frac{1}{3}c^2+\frac{2}{3}ab+\frac{2}{3}bc+\frac{2}{3}ca.$$
Also $a^2+b^2+c^2+2(a-b+1) = a^2+b^2+c^2+2a-2b+2$. Subtracting,
$$
D = \Big(a^2+b^2+c^2+2a-2b+2\Big) - \Big(\tfrac13 a^2+\tfrac13 b^2+\tfrac13 c^2+\tfrac23 ab+\tfrac23 bc+\tfrac23 ca\Big).
$$
Collecting like terms ($a^2 - \tfrac13 a^2 = \tfrac23 a^2$, and similarly for $b^2,c^2$):
$$
D = \frac{2}{3}a^2 + \frac{2}{3}b^2 + \frac{2}{3}c^2 - \frac{2}{3}ab - \frac{2}{3}bc - \frac{2}{3}ca + 2a - 2b + 2. \tag{1}
$$
Note in particular that there is no linear term in $c$, and the constant term is $+2$.

To clear all denominators, multiply (1) by $6$:
$$
6D = 4a^2 + 4b^2 + 4c^2 - 4ab - 4bc - 4ca + 12a - 12b + 12. \tag{2}
$$

**Step 3 (The sum-of-squares identity).**
We claim the exact identity
$$
6D = (2a-b-c+3)^2 + 3\,(b-c-1)^2. \tag{3}
$$
We prove (3) by expanding the right-hand side and matching it term by term against (2).

First expand $(2a-b-c+3)^2$. Writing it as the square of the sum of the four terms $2a,\,-b,\,-c,\,3$, the square is the sum of each squared term plus twice each pairwise product:
$$
\begin{aligned}
(2a-b-c+3)^2 ={}& (2a)^2 + (-b)^2 + (-c)^2 + 3^2 \\
&+ 2(2a)(-b) + 2(2a)(-c) + 2(2a)(3) \\
&+ 2(-b)(-c) + 2(-b)(3) + 2(-c)(3) \\
={}& 4a^2 + b^2 + c^2 + 9 \\
&- 4ab - 4ca + 12a \\
&+ 2bc - 6b - 6c.
\end{aligned}
$$
Next expand $3(b-c-1)^2$. Since
$$
(b-c-1)^2 = b^2 + c^2 + 1 - 2bc - 2b + 2c,
$$
(using $(-1)^2=1$, $2(b)(-c)=-2bc$, $2(b)(-1)=-2b$, $2(-c)(-1)=+2c$), we get
$$
3(b-c-1)^2 = 3b^2 + 3c^2 + 3 - 6bc - 6b + 6c.
$$
Now add the two expansions. We group by monomial:

- $a^2$: $\;4a^2$ (only from the first square) $\Rightarrow 4a^2$.
- $b^2$: $\;1\cdot b^2 + 3\cdot b^2 = 4b^2$.
- $c^2$: $\;1\cdot c^2 + 3\cdot c^2 = 4c^2$.
- $ab$: $\;-4ab + 0 = -4ab$.
- $ca$: $\;-4ca + 0 = -4ca$.
- $bc$: $\;+2bc - 6bc = -4bc$.
- $a$: $\;+12a + 0 = +12a$.
- $b$: $\;-6b - 6b = -12b$.
- $c$: $\;-6c + 6c = 0$ (the $c$ linear terms cancel exactly).
- constant: $\;9 + 3 = 12$.

Therefore
$$
(2a-b-c+3)^2 + 3(b-c-1)^2 = 4a^2 + 4b^2 + 4c^2 - 4ab - 4bc - 4ca + 12a - 12b + 12.
$$
This is exactly the right-hand side of (2). Hence identity (3) holds:
$$
6D = (2a-b-c+3)^2 + 3\,(b-c-1)^2.
$$

**Step 4 (Nonnegativity).**
For every real $a,b,c$, the numbers $2a-b-c+3$ and $b-c-1$ are real, so their squares satisfy
$$
(2a-b-c+3)^2 \ge 0, \qquad (b-c-1)^2 \ge 0.
$$
Since the coefficient $3$ is positive, the right-hand side of (3) is a sum of two nonnegative quantities, hence nonnegative:
$$
6D = (2a-b-c+3)^2 + 3(b-c-1)^2 \ge 0.
$$
Dividing by $6>0$ gives $D \ge 0$.

**Step 5 (Conclusion).**
By Step 1, $D \ge 0$ is equivalent to the desired inequality $(\ast)$. Therefore, for all real numbers $a,b,c$,
$$
\frac{1}{3}(a+b+c)^2 \le a^2+b^2+c^2+2(a-b+1),
$$
as required. $\qquad\blacksquare$

**Remark (equality case).**
Equality holds iff both squares in (3) vanish, i.e. iff $2a-b-c+3=0$ and $b-c-1=0$. The second gives $b=c+1$; substituting into the first gives $2a-(c+1)-c+3=0$, i.e. $2a-2c+2=0$, so $a=c-1$. Thus equality holds exactly when $a=c-1$ and $b=c+1$ for any $c\in\mathbb{R}$; for instance $(a,b,c)=(-1,1,0)$, where both sides equal $\tfrac13(0)^2=0$ and $1+1+0+2(-1-1+1)=2-2=0$. This confirms the inequality is sharp (non-strict).
