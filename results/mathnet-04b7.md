## Status
solved

## Approaches tried
- Sum of squares (SOS) / completing the square — worked. The difference RHS − LHS expands to a quadratic form in $a,b,c$ which factors exactly as a sum of two squares with positive coefficients, giving non-negativity directly. Identity verified by full coefficient-by-coefficient expansion (and cross-checked symbolically: `expand((RHS−LHS) − ((1/6)(2a−b−c+3)² + (1/2)(b−c−1)²)) = 0`).

## Current best
The exact SOS identity
$$a^2+b^2+c^2+2(a-b+1)-\tfrac13(a+b+c)^2 = \tfrac16(2a-b-c+3)^2+\tfrac12(b-c-1)^2,$$
which proves the inequality and characterizes equality as the line $a=b-2,\ c=b-1$ ($b\in\mathbb R$ arbitrary).

## Full proof

We prove that for all real numbers $a,b,c$,
$$\frac{1}{3}(a+b+c)^2 \;\le\; a^2+b^2+c^2+2(a-b+1). \tag{$\ast$}$$

**Setup (Direct proof).** Define
$$f(a,b,c) \;:=\; \big[a^2+b^2+c^2+2(a-b+1)\big] - \frac{1}{3}(a+b+c)^2,$$
the right-hand side minus the left-hand side of $(\ast)$. Then $(\ast)$ is equivalent to the statement $f(a,b,c)\ge 0$ for all real $a,b,c$, which is what we shall establish.

**Step 1: Expand $f$.** First expand the square:
$$(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca,$$
hence
$$\frac{1}{3}(a+b+c)^2 = \frac{1}{3}a^2+\frac{1}{3}b^2+\frac{1}{3}c^2+\frac{2}{3}ab+\frac{2}{3}bc+\frac{2}{3}ca.$$
Therefore
$$
\begin{aligned}
f(a,b,c) &= a^2+b^2+c^2+2a-2b+2 \\
&\qquad -\frac{1}{3}a^2-\frac{1}{3}b^2-\frac{1}{3}c^2-\frac{2}{3}ab-\frac{2}{3}bc-\frac{2}{3}ca \\[2pt]
&= \frac{2}{3}a^2+\frac{2}{3}b^2+\frac{2}{3}c^2-\frac{2}{3}ab-\frac{2}{3}bc-\frac{2}{3}ca+2a-2b+2. \tag{1}
\end{aligned}
$$
(Here $a^2-\tfrac13a^2=\tfrac23a^2$, and likewise for $b^2,c^2$; the cross terms come only from the $-\tfrac13(a+b+c)^2$ part, since the right-hand side of $(\ast)$ has none.)

**Step 2: The SOS identity.** We claim the exact identity
$$f(a,b,c) \;=\; \frac{1}{6}(2a-b-c+3)^2 + \frac{1}{2}(b-c-1)^2. \tag{2}$$

We prove $(2)$ by expanding the right-hand side and comparing it, monomial by monomial, with $(1)$. Expand each square in full:
$$
\begin{aligned}
(2a-b-c+3)^2 &= (2a)^2+(-b)^2+(-c)^2+3^2 \\
&\quad +2(2a)(-b)+2(2a)(-c)+2(2a)(3)+2(-b)(-c)+2(-b)(3)+2(-c)(3)\\
&= 4a^2+b^2+c^2+9-4ab-4ac+12a+2bc-6b-6c,
\end{aligned}
$$
and
$$
\begin{aligned}
(b-c-1)^2 &= b^2+c^2+1+2(b)(-c)+2(b)(-1)+2(-c)(-1)\\
&= b^2+c^2+1-2bc-2b+2c.
\end{aligned}
$$
Multiply by the respective coefficients:
$$
\frac{1}{6}(2a-b-c+3)^2 = \frac{2}{3}a^2+\frac{1}{6}b^2+\frac{1}{6}c^2+\frac{3}{2}-\frac{2}{3}ab-\frac{2}{3}ac+2a+\frac{1}{3}bc-b-c,
$$
$$
\frac{1}{2}(b-c-1)^2 = \frac{1}{2}b^2+\frac{1}{2}c^2+\frac{1}{2}-bc-b+c.
$$
Now add these two expressions, collecting like terms:

- **$a^2$:** $\dfrac{2}{3}+0=\dfrac{2}{3}.$
- **$b^2$:** $\dfrac{1}{6}+\dfrac{1}{2}=\dfrac{1}{6}+\dfrac{3}{6}=\dfrac{4}{6}=\dfrac{2}{3}.$
- **$c^2$:** $\dfrac{1}{6}+\dfrac{1}{2}=\dfrac{2}{3}$ (same computation as $b^2$).
- **$ab$:** $-\dfrac{2}{3}+0=-\dfrac{2}{3}.$
- **$ac$:** $-\dfrac{2}{3}+0=-\dfrac{2}{3}.$
- **$bc$:** $\dfrac{1}{3}+(-1)=\dfrac{1}{3}-\dfrac{3}{3}=-\dfrac{2}{3}.$
- **$a$:** $2+0=2.$
- **$b$:** $-1+(-1)=-2.$
- **$c$:** $-1+1=0.$
- **constant:** $\dfrac{3}{2}+\dfrac{1}{2}=2.$

The sum is therefore
$$\frac{2}{3}a^2+\frac{2}{3}b^2+\frac{2}{3}c^2-\frac{2}{3}ab-\frac{2}{3}ac-\frac{2}{3}bc+2a-2b+2.$$
Every coefficient matches $(1)$ exactly — the six quadratic coefficients $\big(\tfrac23,\tfrac23,\tfrac23,-\tfrac23,-\tfrac23,-\tfrac23\big)$ for $a^2,b^2,c^2,ab,ac,bc$, the linear coefficients $(2,-2,0)$ for $a,b,c$, and the constant $2$. (Note the $c$-coefficient vanishes in both, and the constant cross-check is $\tfrac16\cdot 9 + \tfrac12\cdot 1 = \tfrac32+\tfrac12 = 2$, as required.) This proves the identity $(2)$.

**Step 3: Non-negativity.** For all real $a,b,c$, the quantities $2a-b-c+3$ and $b-c-1$ are real numbers, so their squares are non-negative:
$$(2a-b-c+3)^2\ge 0, \qquad (b-c-1)^2\ge 0.$$
The coefficients $\tfrac16>0$ and $\tfrac12>0$ are positive, so each term on the right of $(2)$ is non-negative. Hence by $(2)$,
$$f(a,b,c) = \frac{1}{6}(2a-b-c+3)^2 + \frac{1}{2}(b-c-1)^2 \;\ge\; 0.$$

**Step 4: Conclusion.** Since $f(a,b,c)\ge 0$ for all real $a,b,c$, we have
$$a^2+b^2+c^2+2(a-b+1) - \frac{1}{3}(a+b+c)^2 \ge 0,$$
which is exactly the desired inequality $(\ast)$:
$$\frac{1}{3}(a+b+c)^2 \le a^2+b^2+c^2+2(a-b+1). \qquad\blacksquare$$

**Equality case.** Because each summand in $(2)$ is a non-negative multiple of a square, $f(a,b,c)=0$ holds if and only if both squares vanish:
$$b-c-1=0 \quad\text{and}\quad 2a-b-c+3=0.$$
The first equation gives $c=b-1$. Substituting into the second:
$$2a-b-(b-1)+3=0 \;\Longrightarrow\; 2a-2b+4=0 \;\Longrightarrow\; a=b-2.$$
Thus equality in $(\ast)$ holds exactly along the one-parameter family
$$a=b-2,\qquad c=b-1,\qquad b\in\mathbb{R}\ \text{arbitrary}.$$

*Verification of the equality family.* Take $b=t$, so $a=t-2$, $c=t-1$. Then
$$a+b+c=(t-2)+t+(t-1)=3t-3=3(t-1),$$
so the left side of $(\ast)$ is $\tfrac13\big(3(t-1)\big)^2=\tfrac13\cdot 9(t-1)^2=3(t-1)^2.$
For the right side,
$$a^2+b^2+c^2 = (t-2)^2+t^2+(t-1)^2 = (t^2-4t+4)+t^2+(t^2-2t+1)=3t^2-6t+5,$$
and
$$2(a-b+1)=2\big((t-2)-t+1\big)=2(-1)=-2,$$
so the right side equals $3t^2-6t+5-2=3t^2-6t+3=3(t^2-2t+1)=3(t-1)^2.$
Both sides equal $3(t-1)^2$, confirming equality holds for every real $t$ along this family. (Concretely, for $b=0$: $a=-2,c=-1$ gives LHS $=\tfrac13(-3)^2=3$ and RHS $=4+0+1+2(-2-0+1)=5-2=3$.) $\blacksquare$
