## Status
solved

## Approaches tried
- Algebraic identity → arctan change of variables → angle-packing on the open interval $(0,\pi/2)$ with pairwise gap $\ge \pi/6$ → two-sided "largest $n$" argument (strict packing upper bound $n\le 3$ + explicit construction at $n=3$). — worked; complete proof below, answer $n=3$.

## Current best
Full rigorous proof established; answer $n = 3$.

The argument: the inequality $(3x_i-x_j)(x_i-3x_j)\ge(1-x_ix_j)^2$ is equivalent to $3(x_i-x_j)^2\ge(1+x_ix_j)^2$ via the polynomial identity $(3a-b)(a-3b)-(1-ab)^2=3(a-b)^2-(1+ab)^2$. Writing $x_k=\tan\alpha_k$ with $\alpha_k\in(0,\pi/2)$ turns this into $|\alpha_i-\alpha_j|\ge\pi/6$. Packing $n$ points into the open interval $(0,\pi/2)$ with pairwise gaps $\ge\pi/6$ forces $(n-1)\pi/6<\pi/2$, i.e. $n\le 3$; and $\alpha=\pi/12,\pi/4,5\pi/12$ (i.e. $x=2-\sqrt3,\,1,\,2+\sqrt3$) attains $n=3$.

## Full proof

**Problem.** Find the largest positive integer $n$ for which there exist $n$ distinct positive real numbers $x_1,\dots,x_n$ such that
$$(3x_i-x_j)(x_i-3x_j)\ge(1-x_ix_j)^2\qquad(\star)$$
holds for all admissible index pairs.

### 0. Interpretation of the index range

We first record why the inequality $(\star)$ must be read over **distinct** indices $i\ne j$.

For $i=j$ (so $x_i=x_j=:x>0$) the left-hand side of $(\star)$ is
$$(3x-x)(x-3x)=(2x)(-2x)=-4x^2,$$
which is strictly negative since $x>0$, while the right-hand side $(1-x^2)^2\ge0$ is nonnegative. Hence $(\star)$ is **identically false** when $i=j$, for every positive $x$. (Equivalently, $-4x^2-(1-x^2)^2=-(x^2+1)^2<0$.) Therefore a literal reading "for all $1\le i,j\le n$" including $i=j$ would make the condition unsatisfiable for every $n\ge1$, and the problem would be vacuous.

The intended — and only nontrivial — reading is that $(\star)$ holds for all **distinct** $i\ne j$. Because both sides of $(\star)$ are symmetric under swapping $x_i$ and $x_j$ (the left side $(3x_i-x_j)(x_i-3x_j)$ and the right side $(1-x_ix_j)^2$ are each unchanged by the swap), the condition over ordered pairs $i\ne j$ is equivalent to the condition over unordered pairs $\{i,j\}$ with $i<j$. We proceed under this reading: **$(\star)$ holds for all $i<j$.**

### 1. The algebraic identity (Lemma A)

**Lemma A.** For all real numbers $a,b$,
$$(3a-b)(a-3b)-(1-ab)^2=3(a-b)^2-(1+ab)^2.$$

*Proof.* Expand each side as a polynomial in $a,b$.

Left side:
$$(3a-b)(a-3b)=3a^2-9ab-ab+3b^2=3a^2-10ab+3b^2,$$
$$(1-ab)^2=1-2ab+a^2b^2,$$
so
$$(3a-b)(a-3b)-(1-ab)^2=3a^2-10ab+3b^2-1+2ab-a^2b^2=3a^2-8ab+3b^2-1-a^2b^2.$$

Right side:
$$3(a-b)^2=3a^2-6ab+3b^2,$$
$$(1+ab)^2=1+2ab+a^2b^2,$$
so
$$3(a-b)^2-(1+ab)^2=3a^2-6ab+3b^2-1-2ab-a^2b^2=3a^2-8ab+3b^2-1-a^2b^2.$$

Both sides equal $3a^2-8ab+3b^2-1-a^2b^2$, term by term. $\square$

Applying Lemma A with $a=x_i$, $b=x_j$, the inequality $(\star)$ for a pair $i<j$ is equivalent to
$$3(x_i-x_j)^2-(1+x_ix_j)^2\ge0,\quad\text{i.e.}\quad 3(x_i-x_j)^2\ge(1+x_ix_j)^2.\qquad(\star')$$

### 2. Sign analysis and square root (Lemma B)

**Lemma B.** For positive reals $x_i,x_j>0$, condition $(\star')$ is equivalent to
$$\sqrt3\,|x_i-x_j|\ge 1+x_ix_j.$$

*Proof.* Since $x_i,x_j>0$ we have $x_ix_j>0$, so $1+x_ix_j>1>0$; in particular $1+x_ix_j$ is positive, hence $|1+x_ix_j|=1+x_ix_j$. Both sides of $(\star')$ are squares, hence nonnegative, and $(\star')$ reads
$$\bigl(\sqrt3\,|x_i-x_j|\bigr)^2=3(x_i-x_j)^2\ \ge\ (1+x_ix_j)^2=\bigl(1+x_ix_j\bigr)^2.$$
For nonnegative reals $u,v$ the inequality $u^2\ge v^2$ is equivalent to $u\ge v$ (the map $t\mapsto t^2$ is strictly increasing on $[0,\infty)$). Taking $u=\sqrt3\,|x_i-x_j|\ge0$ and $v=1+x_ix_j>0$ gives the claim. $\square$

Dividing both sides of the equivalent inequality by $1+x_ix_j>0$:
$$\left|\frac{x_i-x_j}{1+x_ix_j}\right|\ge\frac{1}{\sqrt3}.\qquad(\star'')$$
This division is reversible since $1+x_ix_j>0$ is a strictly positive quantity, so $(\star')\iff(\star'')$.

### 3. Tangent change of variables (Lemma C)

The function $\tan:(0,\pi/2)\to(0,\infty)$ is a strictly increasing bijection: $\tan$ is differentiable on $(0,\pi/2)$ with $\tan'\alpha=\sec^2\alpha>0$ there, so it is strictly increasing; $\tan\alpha\to0^+$ as $\alpha\to0^+$ and $\tan\alpha\to+\infty$ as $\alpha\to(\pi/2)^-$, and by continuity (intermediate value theorem) its image is all of $(0,\infty)$. Thus its inverse $\arctan:(0,\infty)\to(0,\pi/2)$ is also a strictly increasing bijection.

For each $k$ set $\alpha_k=\arctan(x_k)\in(0,\pi/2)$, equivalently $x_k=\tan\alpha_k$. Because $\arctan$ is a bijection (in particular injective), the numbers $x_1,\dots,x_n$ are distinct **iff** the angles $\alpha_1,\dots,\alpha_n$ are distinct.

**Lemma C (tangent subtraction).** For $\alpha,\beta\in(0,\pi/2)$ with $a=\tan\alpha$, $b=\tan\beta$,
$$\frac{a-b}{1+ab}=\tan(\alpha-\beta).$$

*Proof.* Since $\alpha,\beta\in(0,\pi/2)$ we have $a=\tan\alpha>0$ and $b=\tan\beta>0$, so $1+ab=1+\tan\alpha\tan\beta>0$; in particular the denominator is nonzero, so the left side is well-defined. The standard tangent-subtraction formula
$$\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$$
is valid precisely when $1+\tan\alpha\tan\beta\ne0$ and the tangents involved are defined; here $\tan\alpha,\tan\beta$ are defined ($\alpha,\beta\in(0,\pi/2)$) and $1+\tan\alpha\tan\beta>0\ne0$, and moreover $\alpha-\beta\in(-\pi/2,\pi/2)$ so $\tan(\alpha-\beta)$ itself is defined (no pole of $\tan$ lies in $(-\pi/2,\pi/2)$). Substituting $a=\tan\alpha$, $b=\tan\beta$ gives the identity. $\square$

By Lemma C, the left-hand side of $(\star'')$ is $\bigl|\tan(\alpha_i-\alpha_j)\bigr|$, so $(\star'')$ is equivalent to
$$\bigl|\tan(\alpha_i-\alpha_j)\bigr|\ge\frac{1}{\sqrt3}.\qquad(\star''')$$

### 4. Reduction to an angle gap (Lemma D)

**Lemma D.** Let $\theta\in(-\pi/2,\pi/2)$. Then $|\tan\theta|\ge1/\sqrt3$ if and only if $|\theta|\ge\pi/6$.

*Proof.* On $(-\pi/2,\pi/2)$ the tangent is an odd function ($\tan(-\theta)=-\tan\theta$), so $|\tan\theta|=\tan|\theta|$, where $|\theta|\in[0,\pi/2)$. On $[0,\pi/2)$ the function $\tan$ is continuous and strictly increasing (as in §3), hence so is $|\theta|\mapsto\tan|\theta|$. Since $\tan(\pi/6)=\frac{\sin(\pi/6)}{\cos(\pi/6)}=\frac{1/2}{\sqrt3/2}=\frac{1}{\sqrt3}$ and $\pi/6\in[0,\pi/2)$, strict monotonicity gives, for $|\theta|\in[0,\pi/2)$,
$$\tan|\theta|\ge\tan(\pi/6)=\tfrac{1}{\sqrt3}\iff|\theta|\ge\pi/6.$$
Combining, $|\tan\theta|\ge1/\sqrt3\iff|\theta|\ge\pi/6$. $\square$

Here $\theta=\alpha_i-\alpha_j$. Since $\alpha_i,\alpha_j\in(0,\pi/2)$, their difference lies in $(-\pi/2,\pi/2)$, so Lemma D applies and $(\star''')$ is equivalent to
$$|\alpha_i-\alpha_j|\ge\frac{\pi}{6}.\qquad(\dagger)$$

**Summary of the reduction.** Chaining the equivalences $(\star)\iff(\star')\iff(\star'')\iff(\star''')\iff(\dagger)$ (for each pair $i<j$, each step an "iff" justified above), the original problem becomes:

> Find the largest $n$ for which there exist $n$ distinct angles $\alpha_1,\dots,\alpha_n\in(0,\pi/2)$ with $|\alpha_i-\alpha_j|\ge\pi/6$ for all $i\ne j$.

The correspondence $x_k=\tan\alpha_k$ (with $\alpha_k=\arctan x_k$) is a bijection between admissible tuples of positive reals and admissible tuples of angles, so the two "largest $n$" are equal.

### 5. Upper bound $n\le3$ (Lemma E)

**Lemma E.** If $\alpha_1,\dots,\alpha_n\in(0,\pi/2)$ are distinct with $|\alpha_i-\alpha_j|\ge\pi/6$ for all $i\ne j$, then $n\le3$.

*Proof.* Relabel the angles in strictly increasing order, $\alpha_{(1)}<\alpha_{(2)}<\cdots<\alpha_{(n)}$ (possible since they are distinct). Each consecutive gap satisfies $\alpha_{(k+1)}-\alpha_{(k)}=|\alpha_{(k+1)}-\alpha_{(k)}|\ge\pi/6$ for $k=1,\dots,n-1$, by hypothesis $(\dagger)$ applied to the consecutive pair. Telescoping,
$$\alpha_{(n)}-\alpha_{(1)}=\sum_{k=1}^{n-1}\bigl(\alpha_{(k+1)}-\alpha_{(k)}\bigr)\ \ge\ \sum_{k=1}^{n-1}\frac{\pi}{6}=(n-1)\frac{\pi}{6}.$$

Now we bound $\alpha_{(n)}-\alpha_{(1)}$ from above using that the interval $(0,\pi/2)$ is **open**. Because each $x_k>0$ is *strictly* positive, $\alpha_{(1)}=\arctan(\text{smallest }x)$ satisfies $\alpha_{(1)}>0$ strictly (indeed $\arctan x>0$ for $x>0$). Because each $x_k$ is a (finite) real number, $\alpha_{(n)}=\arctan(\text{largest }x)<\pi/2$ strictly (indeed $\arctan x<\pi/2$ for every real $x$). Hence
$$\alpha_{(n)}-\alpha_{(1)}<\frac{\pi}{2}-0=\frac{\pi}{2}.$$

Combining the two bounds,
$$(n-1)\frac{\pi}{6}\le\alpha_{(n)}-\alpha_{(1)}<\frac{\pi}{2}.$$
Dividing by $\pi/6>0$ gives $n-1<3$, i.e. $n<4$, so $n\le3$. $\square$

The strictness of the upper bound is essential: had the endpoints been allowed to equal $0$ and $\pi/2$, the difference $\alpha_{(n)}-\alpha_{(1)}$ could reach $\pi/2=3\cdot\pi/6$ and $n=4$ would appear possible. It is precisely $x_k>0$ (forcing $\alpha_{(1)}>0$) and $x_k$ finite (forcing $\alpha_{(n)}<\pi/2$) that yield the strict inequality $(n-1)\pi/6<\pi/2$ and hence $n\le3$.

(Remark: using only consecutive gaps suffices for the bound, since for an ordered set every non-consecutive gap is a sum of consecutive gaps, hence at least as large; so requiring all pairwise gaps $\ge\pi/6$ is equivalent to requiring consecutive gaps $\ge\pi/6$. We used the consecutive gaps, which is all that is needed.)

### 6. Construction achieving $n=3$

Take the three angles
$$\alpha_1=\frac{\pi}{12},\qquad\alpha_2=\frac{\pi}{4}=\frac{3\pi}{12},\qquad\alpha_3=\frac{5\pi}{12},$$
all of which lie in $(0,\pi/2)=(0,6\pi/12)$ and are distinct. Their pairwise differences are
$$\alpha_2-\alpha_1=\frac{2\pi}{12}=\frac{\pi}{6},\quad\alpha_3-\alpha_2=\frac{2\pi}{12}=\frac{\pi}{6},\quad\alpha_3-\alpha_1=\frac{4\pi}{12}=\frac{\pi}{3},$$
each $\ge\pi/6$, so $(\dagger)$ holds for all three pairs.

Translating back via $x_k=\tan\alpha_k$:
- $x_2=\tan\frac{\pi}{4}=1$.
- $x_1=\tan\frac{\pi}{12}=\tan(45^\circ-30^\circ)=\dfrac{\tan45^\circ-\tan30^\circ}{1+\tan45^\circ\tan30^\circ}=\dfrac{1-\frac{1}{\sqrt3}}{1+\frac{1}{\sqrt3}}=\dfrac{\sqrt3-1}{\sqrt3+1}=\dfrac{(\sqrt3-1)^2}{(\sqrt3+1)(\sqrt3-1)}=\dfrac{4-2\sqrt3}{2}=2-\sqrt3.$
- $x_3=\tan\frac{5\pi}{12}=\tan(45^\circ+30^\circ)=\dfrac{\tan45^\circ+\tan30^\circ}{1-\tan45^\circ\tan30^\circ}=\dfrac{1+\frac{1}{\sqrt3}}{1-\frac{1}{\sqrt3}}=\dfrac{\sqrt3+1}{\sqrt3-1}=\dfrac{(\sqrt3+1)^2}{2}=\dfrac{4+2\sqrt3}{2}=2+\sqrt3.$

So
$$x_1=2-\sqrt3,\qquad x_2=1,\qquad x_3=2+\sqrt3.$$
Since $\sqrt3\approx1.732$, we have $x_1\approx0.268>0$, $x_2=1>0$, $x_3\approx3.732>0$, and the three are distinct and positive.

### 7. Independent verification of the construction in the original variables

We verify $(\star')$ — equivalently the original $(\star)$, by Lemma A — directly for all three unordered pairs, **without** relying on the trigonometric chain. Recall $(\star')$ reads $3(x_i-x_j)^2\ge(1+x_ix_j)^2$.

**Pair $(x_1,x_2)=(2-\sqrt3,\,1)$.**
$$x_1-x_2=(2-\sqrt3)-1=1-\sqrt3,\qquad 3(x_1-x_2)^2=3(1-\sqrt3)^2=3(1-2\sqrt3+3)=3(4-2\sqrt3)=12-6\sqrt3.$$
$$1+x_1x_2=1+(2-\sqrt3)\cdot1=3-\sqrt3,\qquad(1+x_1x_2)^2=(3-\sqrt3)^2=9-6\sqrt3+3=12-6\sqrt3.$$
Thus $3(x_1-x_2)^2=12-6\sqrt3=(1+x_1x_2)^2$: equality holds, so $(\star')$ ($\ge$) is satisfied.

**Pair $(x_2,x_3)=(1,\,2+\sqrt3)$.**
$$x_2-x_3=1-(2+\sqrt3)=-1-\sqrt3,\qquad 3(x_2-x_3)^2=3(1+\sqrt3)^2=3(1+2\sqrt3+3)=3(4+2\sqrt3)=12+6\sqrt3.$$
$$1+x_2x_3=1+(2+\sqrt3)=3+\sqrt3,\qquad(1+x_2x_3)^2=(3+\sqrt3)^2=9+6\sqrt3+3=12+6\sqrt3.$$
Thus $3(x_2-x_3)^2=12+6\sqrt3=(1+x_2x_3)^2$: equality holds, so $(\star')$ is satisfied.

**Pair $(x_1,x_3)=(2-\sqrt3,\,2+\sqrt3)$.**
$$x_1x_3=(2-\sqrt3)(2+\sqrt3)=4-3=1,\qquad 1+x_1x_3=2,\qquad(1+x_1x_3)^2=4.$$
$$x_1-x_3=(2-\sqrt3)-(2+\sqrt3)=-2\sqrt3,\qquad 3(x_1-x_3)^2=3\cdot(2\sqrt3)^2=3\cdot12=36.$$
Thus $3(x_1-x_3)^2=36\ge4=(1+x_1x_3)^2$ (strict), so $(\star')$ is satisfied.

All three unordered pairs satisfy $(\star')$, hence (by Lemma A) the original inequality $(\star)$, and by the symmetry noted in §0 the inequality holds for all ordered pairs $i\ne j$. Therefore the three distinct positive reals $x_1=2-\sqrt3,\ x_2=1,\ x_3=2+\sqrt3$ form a valid configuration for $n=3$.

(For completeness, this matches the angle picture: pairs $(1,2)$ and $(2,3)$ have angle gap exactly $\pi/6$, forcing equality $|\tan(\alpha_i-\alpha_j)|=1/\sqrt3$ and hence equality in $(\star')$; pair $(1,3)$ has gap $\pi/3>\pi/6$, giving strict inequality.)

### 8. Conclusion

By Lemma E no configuration exists for $n\ge4$, and by §6–§7 a valid configuration exists for $n=3$. Therefore the largest possible value is
$$\boxed{n=3},$$
attained by $x_1=2-\sqrt3,\ x_2=1,\ x_3=2+\sqrt3$. $\blacksquare$
