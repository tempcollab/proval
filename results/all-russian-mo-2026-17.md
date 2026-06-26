# all-russian-mo-2026-17

## Status
solved

## Problem
Let $P(x)$ be a monic real polynomial of degree $n$. Suppose there exist $100$
pairwise distinct real roots $x_1,\dots,x_{100}$ of $P$ and $100$ pairwise
distinct real roots $y_1,\dots,y_{100}$ of $P-1$ with $|x_i-y_i|=1$ for all $i$.
Find the smallest possible value of $n$.

**Answer: $n=101$.**

Both halves are now complete and rigorous. The lower bound $n\ge 101$ is proved
for all sign patterns via a functional-equation lemma. The matching construction
at $n=101$ is an **explicit** monic degree-$101$ polynomial (no free parameters,
no root system), and every required property is proved directly. Hence Status
`solved`; the full proof is in `## Full proof`.

---

## Current best

### Setup and notation (rigorous, used throughout)

All $200$ points $\{x_i\}\cup\{y_i\}$ are distinct: if $x_i=y_j$ then
$P(x_i)=0$ and $P(x_i)=P(y_j)=1$, impossible. Write $y_i=x_i+e_i$ with
$e_i=y_i-x_i$; since $|x_i-y_i|=1$, each $e_i\in\{+1,-1\}$. Let
$A=\{i:e_i=+1\}$, $B=\{i:e_i=-1\}$, with $|A|=k$, $|B|=100-k$.

### Pure-case lower bound (clean, complete)

Let $Q(x)=P(x+1)-P(x)$. For monic $P$ of degree $n$ the $x^n$ terms cancel and
$(x+1)^n$ contributes $n\,x^{n-1}$, so $\deg Q=n-1$ with leading coefficient $n$
(**L1**). For $i\in A$, $Q(x_i)=P(y_i)-P(x_i)=1-0=1$; for $j\in B$, with
$y_j=x_j-1$, $Q(y_j)=P(x_j)-P(y_j)=0-1=-1$.

If $k=100$ (all $e_i=+1$), then $Q-1$ has the $100$ distinct roots $x_i$, so
$\deg Q=n-1\ge 100$, i.e. $n\ge 101$. If $k=0$, then $Q+1$ has $100$ distinct
roots $y_j$, giving the same bound. (**L2**.)

### THE LOWER BOUND $n\ge 101$ — COMPLETE for all sign patterns

The genuinely hard half (mixed $k$) is now fully closed by the following
mechanism. It also re-derives the pure case, so the entire lower bound is
uniform.

Suppose for contradiction $n=100$.

**Step 1 (both polynomials split completely).** $P$ is monic of degree $100$
and has the $100$ distinct real roots $x_i$; these are therefore **all** of its
roots, so $P(x)=\prod_{i=1}^{100}(x-x_i)$. Likewise $P-1$ is monic of degree
$100$ with the $100$ distinct real roots $y_i$, so
$P(x)-1=\prod_{i=1}^{100}(x-y_i)=\prod_{i=1}^{100}(x-x_i-e_i)$. (FTA /
root-counting; **L3**.)

**Step 2 (factor by sign class).** Set
$$P_A(x)=\prod_{i\in A}(x-x_i),\qquad P_B(x)=\prod_{i\in B}(x-x_i),$$
both monic, with $\deg P_A=k$, $\deg P_B=100-k$. Then $P=P_A P_B$. For $i\in A$
($e_i=+1$), $x-x_i-e_i=(x-1)-x_i$, so $\prod_{i\in A}(x-x_i-e_i)=P_A(x-1)$;
for $j\in B$ ($e_j=-1$), $x-x_j-e_j=(x+1)-x_j$, so
$\prod_{j\in B}(x-x_j-e_j)=P_B(x+1)$. Hence
$$P(x)-1=P_A(x-1)\,P_B(x+1).$$
Subtracting from $P=P_AP_B$ gives the **core functional equation**
$$\boxed{\,D(x):=P_A(x)P_B(x)-P_A(x-1)P_B(x+1)=1\,}\qquad\text{(identically).}\tag{$\star$}$$

**Step 3 ($x^{99}$ coefficient forces $k=50$).** In $P=P_AP_B$ the coefficient
of $x^{99}$ is $-\sum_i x_i$. In $P_A(x-1)P_B(x+1)$: the $x^{k-1}$ coefficient of
$P_A(x-1)$ is $-\big(\sum_{i\in A}x_i+k\big)$, and the $x^{99-k}$ coefficient of
$P_B(x+1)$ is $-\big(\sum_{j\in B}x_j-(100-k)\big)$, so the $x^{99}$ coefficient
of the product is $-\sum_i x_i-2k+100$. Equation $(\star)$ has constant
right-hand side, so the $x^{99}$ coefficients agree:
$-\sum_i x_i=-\sum_i x_i-2k+100$, i.e. $2k-100=0$, so $k=50$. (This same
computation kills the pure cases: for $k=0$ or $k=100$ the $x^{99}$ coefficient
is $\pm100\ne0$, so $(\star)$ cannot hold; consistent with **L2**.) Thus
$\deg P_A=\deg P_B=50=:m\ge2$.

**Step 4 (Key Lemma forces $D\equiv0$, contradiction).**

> **Lemma.** Let $P_A,P_B$ be monic real polynomials of equal degree $m\ge2$ and
> set $D(x)=P_A(x)P_B(x)-P_A(x-1)P_B(x+1)$. If $D$ is constant, then $D\equiv0$
> (indeed $P_A(x)=P_B(x+1)$).

> *Proof.* Write $P_A(x)=P_B(x+1)+R(x)$, where $\deg R\le m-1$ because both
> $P_A$ and $P_B(x+1)$ are monic of degree $m$. Then $P_A(x-1)=P_B(x)+R(x-1)$,
> and substituting into $D$:
> $$D(x)=\big(P_B(x+1)+R(x)\big)P_B(x)-\big(P_B(x)+R(x-1)\big)P_B(x+1)
> = R(x)P_B(x)-R(x-1)P_B(x+1).$$
> Suppose $R\ne0$; let $r=\deg R\le m-1$ and let $c_r\ne0$ be its leading
> coefficient. Write $P_B(x)=x^m+s\,x^{m-1}+\cdots$ and
> $R(x)=c_r x^r+c_{r-1}x^{r-1}+\cdots$. Both $R(x)P_B(x)$ and
> $R(x-1)P_B(x+1)$ have degree $r+m$ with the same leading coefficient $c_r$, so
> these top terms cancel in $D$. Compute the coefficient of $x^{r+m-1}$ in $D$.
> In $R(x)P_B(x)$ it is $c_r s+c_{r-1}$. For the second product,
> $R(x-1)=c_r x^r+(c_{r-1}-r c_r)x^{r-1}+\cdots$ and
> $P_B(x+1)=x^m+(m+s)x^{m-1}+\cdots$, so the coefficient of $x^{r+m-1}$ in
> $R(x-1)P_B(x+1)$ is $c_r(m+s)+(c_{r-1}-rc_r)$. Hence
> $$[x^{r+m-1}]D=\big(c_r s+c_{r-1}\big)-\big(c_r(m+s)-rc_r+c_{r-1}\big)
> =c_r(r-m).$$
> Since $D$ is constant and $r+m-1\ge m-1\ge1>0$, this coefficient must vanish:
> $c_r(r-m)=0$. As $c_r\ne0$ this forces $r=m$, contradicting $r\le m-1$.
> Therefore $R\equiv0$, i.e. $P_A(x)=P_B(x+1)$, and then
> $D(x)=P_B(x+1)P_B(x)-P_B(x)P_B(x+1)\equiv0$. $\qquad\blacksquare$

By Step 3, $m=50\ge2$, so the Lemma applies to $(\star)$: $D\equiv0$. This
contradicts $D\equiv1$. Hence $n=100$ is impossible.

Since $P$ has $100$ distinct real roots we trivially have $n\ge100$; combined
with the impossibility of $n=100$ we conclude
$$\boxed{\,n\ge 101\,}$$
for **every** sign pattern. This half of the problem is complete and gap-free.

*(Numerical/symbolic verification of every step: the identity
$D=R\,P_B-R(x-1)P_B(x+1)$ and the coefficient formula $[x^{r+m-1}]D=c_r(r-m)$
were checked symbolically for $m=2,3,4,5,7,8,12$ and many random monic
$P_A,P_B$; the equation $(\star)$ with constant $1$ was confirmed to have no
solution in the $N=4$ analog; the constancy of $D$ was confirmed to force the
constant to be $0$ for $m=2,3,4$ by Gröbner basis. These are checks, not the
proof — the proof above stands on its own.)*

### Construction at $n=101$ (explicit; complete)

The construction is the explicit polynomial $P$ built in `## Full proof` below.
It realizes the **pure** case (all $e_i=+1$): a monic $P$ of degree $101$ with
$100$ distinct real roots $x_i$ such that $y_i=x_i+1$ are $100$ distinct roots of
$P-1$, all $200$ points distinct, $|x_i-y_i|=1$. With the lower bound this proves
the answer $n=101$.

## Approaches tried
- **Pure-case forward-difference bound (L1/L2)** — works; $n\ge101$ when all
  signs agree. Clean and complete.
- **Naive mixed degree bound** $\deg Q\ge\max(k,100-k)$ — too weak ($n\ge51$).
  Dead.
- **Merged-order block / rigidity counting as the finish** — dead end for the
  contradiction: the rigid alternating-block structure (50 minima below $0$,
  $49$ maxima above $1$, leftmost/rightmost points in $Y$) is internally
  realizable (Chebyshev $a\,T_d+\tfrac12$ reproduces it), so block combinatorics
  alone cannot contradict a unit matching. Kept only as context.
- **Residue identities $P'(x_j)=\sum_i 1/(y_i-x_j)$, partial-fraction
  $1=\sum_j 1/(P'(x_j)(y_m-x_j))$, and the AREA identity
  $\int P'W=100$** — all are correct identities, but the natural (unweighted)
  sums over the matching collapse to trivialities ($N=N$), and no clean
  positivity/metric bound closed the contradiction. Superseded.
- **Core product identity + power-sum (PTE) equalities** — correct
  ($p_m(X)=p_m(Y)$, $m=1,\dots,99$; in particular $\sum e_i=0$), but PTE up to
  order $N-1$ alone does not pin the constant; the constant lives only in the
  product/constant term. This led to the decisive reformulation below.
- **Functional-equation reformulation $P_A P_B-P_A(x-1)P_B(x+1)=1$ +
  Key Lemma** — **THIS CLOSES THE MIXED-CASE (AND PURE-CASE) LOWER BOUND
  RIGOROUSLY.** Writing $P_A(x)=P_B(x+1)+R$ gives
  $D=R\,P_B-R(x-1)P_B(x+1)$, whose $x^{r+m-1}$ coefficient is $c_r(r-m)$;
  constancy forces $r=m$, contradicting $\deg R\le m-1$, so $R=0$ and $D\equiv0\ne1$.
  Combined with the $x^{99}$-coefficient computation ($k=50$, so $m=50\ge2$),
  this proves $n\ge101$ for all sign patterns. Complete.
- **Construction via anti-difference root system (L6)** — DEAD END / superseded.
  Reduced the construction to a $99\times99$ root system; numerically confirmed
  for small $k$ but no airtight existence proof (topological degree, explicit
  family) was found. Abandoned in favour of the explicit construction below.
- **Explicit telescoping construction** — **THIS CLOSES THE CONSTRUCTION.** Take
  $g(u)=\prod_{j=-50}^{49}\bigl(u-\tfrac{2j+1}{2}\bigr)$ (monic, deg $100$, roots
  the half-integers $\pm\tfrac12,\dots,\pm\tfrac{99}2$), $f=g-\tfrac1{100}$, and
  $P(x)=(x-\tfrac{101}2)f(x)$ (monic, deg $101$). The telescoping identity
  $(u-\tfrac{101}2)g(u)=(u+\tfrac{99}2)g(u-1)$ yields the functional equation
  $(x-\tfrac{101}2)f(x)-(x+\tfrac{99}2)f(x-1)=1$, equivalently
  $P(x+1)-P(x)=1+101f(x)$. An IVT sign count (sign $f(m)=(-1)^m$ at every integer
  $m\in[-50,50]$, with $|g(m)|\ge(\tfrac12)^2(\tfrac32)^{98}>\tfrac1{100}$) gives
  exactly $100$ distinct real roots $x_i$ of $f$, one per interval $(m,m+1)$. Then
  $P(x_i)=0$, $P(x_i+1)=1$, and the ratio identity $g(u+1)/g(u)=(u+\tfrac{101}2)/(u-\tfrac{99}2)$
  forbids two roots of $f$ from differing by $1$, so all $200$ points are
  distinct. Complete and fully verified symbolically.

## Full proof

We prove the answer is $n=101$. The lower bound $n\ge101$ for **every** sign
pattern is proved in full under `## Current best` (Steps 1–4 of "THE LOWER BOUND
$n\ge101$"): if $n=100$ then $P$ and $P-1$ split completely over their stated
roots, the sign decomposition gives the identity
$P_A(x)P_B(x)-P_A(x-1)P_B(x+1)=1$, the $x^{99}$ coefficient forces $|A|=|B|=50$,
and the Key Lemma forces the left side to be identically $0\ne1$ — a
contradiction. Hence $n\ge101$. We restate nothing further of that half here; it
is complete and gap-free. It remains to exhibit a monic polynomial of degree
$101$ that meets all the hypotheses, which proves $n=101$ is attainable and hence
smallest.

### The construction

Define, with the index $j$ ranging over the $100$ integers $-50,\dots,49$,
$$g(u)=\prod_{j=-50}^{49}\Bigl(u-\tfrac{2j+1}{2}\Bigr),\qquad
f(u)=g(u)-\tfrac{1}{100},\qquad P(x)=\Bigl(x-\tfrac{101}{2}\Bigr)f(x).$$
The numbers $\tfrac{2j+1}{2}$ for $j=-50,\dots,49$ are exactly the $100$
half-integers
$$-\tfrac{99}{2},-\tfrac{97}{2},\dots,-\tfrac12,\tfrac12,\dots,\tfrac{97}{2},\tfrac{99}{2},$$
i.e. the odd multiples of $\tfrac12$ in $[-\tfrac{99}2,\tfrac{99}2]$. Thus $g$ is
a monic polynomial of degree $100$ whose roots are precisely these half-integers,
$f=g-\tfrac1{100}$ is monic of degree $100$, and $P$ is a product of a monic
linear factor and the monic degree-$100$ polynomial $f$, hence **monic of degree
$101$**. We will show $f$ has $100$ distinct real roots $x_1,\dots,x_{100}$, that
the $y_i:=x_i+1$ are $100$ distinct roots of $P-1$, and that all $200$ numbers
$x_i,y_i$ are pairwise distinct with $|x_i-y_i|=1$.

### Lemma B (telescoping product identity)
$$\Bigl(u-\tfrac{101}{2}\Bigr)g(u)=\Bigl(u+\tfrac{99}{2}\Bigr)g(u-1)
\qquad\text{identically.}$$

*Proof.* The left side is
$$\Bigl(u-\tfrac{101}{2}\Bigr)\prod_{j=-50}^{49}\Bigl(u-\tfrac{2j+1}{2}\Bigr)
=\Bigl(u-\tfrac{101}{2}\Bigr)\prod_{j=-50}^{49}\Bigl(u-\tfrac{2j+1}{2}\Bigr).$$
Note $\tfrac{101}{2}=\tfrac{2\cdot50+1}{2}$, so adjoining the factor
$\bigl(u-\tfrac{101}2\bigr)$ extends the product to range over $j=-50,\dots,50$:
$$\Bigl(u-\tfrac{101}{2}\Bigr)g(u)=\prod_{j=-50}^{50}\Bigl(u-\tfrac{2j+1}{2}\Bigr).$$
For the right side, shift the argument of $g$:
$$g(u-1)=\prod_{j=-50}^{49}\Bigl(u-1-\tfrac{2j+1}{2}\Bigr)
=\prod_{j=-50}^{49}\Bigl(u-\tfrac{2j+3}{2}\Bigr)
=\prod_{j=-49}^{50}\Bigl(u-\tfrac{2j+1}{2}\Bigr),$$
re-indexing $j\mapsto j-1$. Now $-\tfrac{99}{2}=\tfrac{2(-50)+1}{2}$, so adjoining
$\bigl(u+\tfrac{99}2\bigr)=\bigl(u-\tfrac{2(-50)+1}{2}\bigr)$ extends this product
to $j=-50,\dots,50$:
$$\Bigl(u+\tfrac{99}{2}\Bigr)g(u-1)=\prod_{j=-50}^{50}\Bigl(u-\tfrac{2j+1}{2}\Bigr).$$
Both sides equal the same monic product of the $101$ linear factors
$\bigl(u-\tfrac{2j+1}{2}\bigr)$, $j=-50,\dots,50$. $\qquad\blacksquare$

### The core functional equation
$$\Bigl(x-\tfrac{101}{2}\Bigr)f(x)-\Bigl(x+\tfrac{99}{2}\Bigr)f(x-1)=1
\qquad\text{identically.}\tag{C}$$

*Proof.* Substitute $f(u)=g(u)-\tfrac1{100}$:
$$\Bigl(x-\tfrac{101}{2}\Bigr)f(x)-\Bigl(x+\tfrac{99}{2}\Bigr)f(x-1)
=\underbrace{\Bigl(x-\tfrac{101}{2}\Bigr)g(x)-\Bigl(x+\tfrac{99}{2}\Bigr)g(x-1)}_{=0\text{ by Lemma B}}
-\tfrac1{100}\Bigl[\Bigl(x-\tfrac{101}{2}\Bigr)-\Bigl(x+\tfrac{99}{2}\Bigr)\Bigr].$$
The first bracket vanishes by Lemma B. The second bracket is
$\bigl(x-\tfrac{101}{2}\bigr)-\bigl(x+\tfrac{99}{2}\bigr)=-\tfrac{101}{2}-\tfrac{99}{2}=-100$,
so the whole expression equals $-\tfrac1{100}\cdot(-100)=1$. $\qquad\blacksquare$

### The anti-difference relation
$$P(x+1)-P(x)=1+101\,f(x)\qquad\text{identically.}\tag{D}$$

*Proof.* By definition $P(x)=\bigl(x-\tfrac{101}2\bigr)f(x)$ and hence
$P(x+1)=\bigl(x+1-\tfrac{101}2\bigr)f(x+1)=\bigl(x-\tfrac{99}2\bigr)f(x+1)$.
Apply identity (C) with $x$ replaced by $x+1$:
$$\Bigl(x+1-\tfrac{101}{2}\Bigr)f(x+1)-\Bigl(x+1+\tfrac{99}{2}\Bigr)f(x)=1,
\quad\text{i.e.}\quad
\Bigl(x-\tfrac{99}{2}\Bigr)f(x+1)=1+\Bigl(x+\tfrac{101}{2}\Bigr)f(x).$$
Therefore
$$P(x+1)-P(x)=\Bigl(x-\tfrac{99}{2}\Bigr)f(x+1)-\Bigl(x-\tfrac{101}{2}\Bigr)f(x)
=1+\Bigl(x+\tfrac{101}{2}\Bigr)f(x)-\Bigl(x-\tfrac{101}{2}\Bigr)f(x).$$
The $f(x)$-terms combine as
$\bigl[(x+\tfrac{101}2)-(x-\tfrac{101}2)\bigr]f(x)=101\,f(x)$, giving
$P(x+1)-P(x)=1+101\,f(x)$. $\qquad\blacksquare$

### Lemma A (f has exactly 100 distinct real roots)

We first record the sign of $g$ at integers.

**Magnitude/sign at integers.** Let $m$ be any integer with $-50\le m\le50$.
Then $g(m)=\prod_{j=-50}^{49}\bigl(m-\tfrac{2j+1}{2}\bigr)$, and each factor is
$m-\tfrac{2j+1}{2}=\tfrac{2m-2j-1}{2}$, a (nonzero) odd integer divided by $2$.

*Sign.* The factor $m-\tfrac{2j+1}{2}$ is positive exactly when
$\tfrac{2j+1}{2}<m$, i.e. when the half-integer root lies to the left of $m$.
Among the $100$ half-integer roots, those less than $m$ are
$-\tfrac{99}2,\dots,m-\tfrac12$, i.e. the roots $\tfrac{2j+1}{2}$ with
$-50\le j\le m-1$; there are $m-1-(-50)+1=m+50$ of them. Hence $g(m)$ is a product
of $m+50$ positive factors and $100-(m+50)=50-m$ negative factors, so
$$\operatorname{sign} g(m)=(-1)^{\,50-m}=(-1)^{m}.$$
Thus $g(m)>0$ for $m$ even and $g(m)<0$ for $m$ odd.

*Magnitude.* The $100$ factor magnitudes are the distances
$\bigl|m-\tfrac{2j+1}{2}\bigr|$, each an odd multiple of $\tfrac12$, hence each
lying in $\{\tfrac12,\tfrac32,\tfrac52,\dots\}$. A distance equals $\tfrac12$
exactly when the root is $m\pm\tfrac12$; at most two of the $100$ roots can be of
this form, and every other distance is $\ge\tfrac32$. Therefore
$$|g(m)|=\prod_{j=-50}^{49}\Bigl|m-\tfrac{2j+1}{2}\Bigr|
\ \ge\ \Bigl(\tfrac12\Bigr)^{2}\Bigl(\tfrac32\Bigr)^{98},$$
where we used $\tfrac12<\tfrac32$ to replace any of the (at most two) $\tfrac12$
factors that may be absent by the smaller value $\tfrac12$, so the displayed
product is a valid lower bound in every case. Numerically
$\bigl(\tfrac12\bigr)^2\bigl(\tfrac32\bigr)^{98}>4.5\times10^{16}>\tfrac1{100}$,
so in particular
$$|g(m)|>\tfrac{1}{100}\qquad\text{for every integer }m\in[-50,50].\tag{M}$$

**Sign of $f$ at integers.** Since $f(m)=g(m)-\tfrac1{100}$ and by (M)
$|g(m)|>\tfrac1{100}$, the sign of $f(m)$ equals the sign of $g(m)$:
$$f(m)>0\ \text{for }m\ \text{even},\qquad f(m)<0\ \text{for }m\ \text{odd},
\qquad -50\le m\le 50.\tag{S}$$
(For $m$ even, $g(m)>0$ and $g(m)>\tfrac1{100}$ give $f(m)>0$; for $m$ odd,
$g(m)<0$ gives $f(m)=g(m)-\tfrac1{100}<0$.)

**Root count via IVT.** $f$ is a polynomial, hence continuous on $\mathbb R$. By
(S), for each of the $100$ consecutive integer pairs
$(m,m+1)$ with $m=-50,-49,\dots,49$, the values $f(m)$ and $f(m+1)$ have opposite
signs (one of $m,m+1$ is even and the other odd). By the **Intermediate Value
Theorem**, $f$ has at least one real root in each open interval $(m,m+1)$. These
$100$ intervals are pairwise disjoint, so $f$ has **at least $100$** distinct real
roots. But $\deg f=100$, and by the **Fundamental Theorem of Algebra** a nonzero
degree-$100$ polynomial has at most $100$ roots in $\mathbb C$, hence at most
$100$ real roots. Therefore $f$ has **exactly $100$** real roots, all distinct,
one in each interval $(m,m+1)$, $m=-50,\dots,49$. Since $\deg f=100$ and $f$ is
monic, these are all of its roots and
$$f(x)=\prod_{i=1}^{100}(x-x_i),$$
where $x_1,\dots,x_{100}$ are the $100$ distinct reals just found. $\qquad\blacksquare$

In particular every root $x_i$ lies in $(-50,50)$, so $x_i\ne\tfrac{101}{2}$.

### Lemma D (101/2 is not a root of f)

$$g\Bigl(\tfrac{101}{2}\Bigr)=\prod_{j=-50}^{49}\Bigl(\tfrac{101}{2}-\tfrac{2j+1}{2}\Bigr)
=\prod_{j=-50}^{49}\frac{101-(2j+1)}{2}=\prod_{j=-50}^{49}\,(50-j).$$
As $j$ runs over $-50,\dots,49$, the value $50-j$ runs over $100,99,\dots,1$, so
$g\bigl(\tfrac{101}{2}\bigr)=100!$. Hence $f\bigl(\tfrac{101}{2}\bigr)=100!-\tfrac1{100}\ne0$,
so $\tfrac{101}{2}$ is not a root of $f$. Combined with Lemma A, the linear factor
$\bigl(x-\tfrac{101}{2}\bigr)$ is coprime to $f$, so $P$ has the $101$ distinct
real roots $x_1,\dots,x_{100},\tfrac{101}{2}$. (We do not even need this last
remark; what we use is only $x_i\ne\tfrac{101}{2}$, already noted.) $\qquad\blacksquare$

### The matching

Define $y_i:=x_i+1$ for $i=1,\dots,100$. Since the $x_i$ are distinct, the $y_i$
are distinct, and $|x_i-y_i|=1$ for all $i$.

**$x_i$ is a root of $P$.** Since $x_i\ne\tfrac{101}2$ (Lemma A) and $f(x_i)=0$,
$$P(x_i)=\Bigl(x_i-\tfrac{101}{2}\Bigr)f(x_i)=\Bigl(x_i-\tfrac{101}{2}\Bigr)\cdot0=0.$$
So $x_1,\dots,x_{100}$ are $100$ distinct real roots of $P$.

**$y_i$ is a root of $P-1$.** By the anti-difference relation (D) evaluated at
$x_i$,
$$P(y_i)=P(x_i+1)=P(x_i)+1+101\,f(x_i)=0+1+101\cdot0=1,$$
so $P(y_i)-1=0$. Thus $y_1,\dots,y_{100}$ are $100$ distinct real roots of $P-1$.

### Lemma C (no two roots of f differ by 1) — distinctness of the 200 points

We first establish the ratio identity
$$\frac{g(u+1)}{g(u)}=\frac{u+\frac{101}{2}}{u-\frac{99}{2}}.\tag{R}$$
By Lemma B (with $u$ replaced by $u+1$),
$\bigl(u+1-\tfrac{101}2\bigr)g(u+1)=\bigl(u+1+\tfrac{99}2\bigr)g(u)$, i.e.
$\bigl(u-\tfrac{99}2\bigr)g(u+1)=\bigl(u+\tfrac{101}2\bigr)g(u)$. Dividing by
$\bigl(u-\tfrac{99}2\bigr)g(u)$ (where both are nonzero) gives (R).

Now suppose, for contradiction, that two roots of $f$ differ by exactly $1$: say
$r$ and $r+1$ are both roots of $f$. Each root $r$ of $f$ satisfies $g(r)=f(r)+\tfrac1{100}=\tfrac1{100}\ne0$;
in particular $r$ is **not** a half-integer (the half-integers are the roots of
$g$), so $r\ne\tfrac{99}{2}$ and the denominator $r-\tfrac{99}2\ne0$ in (R).
Likewise $g(r+1)=\tfrac1{100}$. Substituting into (R) at $u=r$:
$$1=\frac{g(r+1)}{g(r)}=\frac{r+\frac{101}{2}}{r-\frac{99}{2}}
\ \Longrightarrow\ r+\tfrac{101}{2}=r-\tfrac{99}{2}
\ \Longrightarrow\ \tfrac{101}{2}=-\tfrac{99}{2},$$
which is false. Hence no two roots of $f$ differ by $1$. $\qquad\blacksquare$

**The $200$ points are pairwise distinct.** The $x_i$ are pairwise distinct
(Lemma A), and the $y_i=x_i+1$ are pairwise distinct. It remains to show no $x_i$
equals any $y_j$. If $x_i=y_j=x_j+1$, then $x_i$ and $x_j$ are two roots of $f$
differing by $1$, contradicting Lemma C. Hence $\{x_i\}\cap\{y_j\}=\varnothing$,
and all $200$ numbers $x_1,\dots,x_{100},y_1,\dots,y_{100}$ are pairwise distinct.
(This also re-proves the elementary fact that no $x_i$ can equal a $y_j$ on the
nose: $P(x_i)=0\ne1=P(y_j)$.)

### Conclusion

$P$ is monic of degree $101$. It has $100$ pairwise distinct real roots
$x_1,\dots,x_{100}$, and $P-1$ has $100$ pairwise distinct real roots
$y_1,\dots,y_{100}$, with $y_i=x_i+1$ so that $|x_i-y_i|=1$ for every
$i=1,\dots,100$. (The hypotheses of the problem ask only for such matched roots;
the additional fact that all $200$ points are distinct, proved above, is not even
required but holds.) Thus $n=101$ is achievable.

Combining with the lower bound $n\ge101$ (proved for all sign patterns under
`## Current best`), the smallest possible value of $n$ is
$$\boxed{\,n=101\,}.$$

**Verification of the answer.** The witness $P(x)=\bigl(x-\tfrac{101}2\bigr)f(x)$
with $f(u)=\prod_{j=-50}^{49}\bigl(u-\tfrac{2j+1}{2}\bigr)-\tfrac1{100}$ has been
checked symbolically (exact rational arithmetic): $\deg P=101$, $P$ monic;
Lemma B, identities (C) and (D) hold identically; $f$ has exactly $100$ real
roots (one sign change of $f$ across each consecutive integer pair in $[-50,50]$,
$f$ squarefree); $g(\tfrac{101}2)=100!$; and the resultant of $f(u)$ and $f(u+1)$
is a nonzero integer, confirming no two roots differ by $1$. Each of these is a
*check* of a step proved rigorously above. $\qquad\blacksquare$
