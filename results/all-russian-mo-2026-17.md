# all-russian-mo-2026-17

## Status
partial

## Problem
Let $P(x)$ be a monic real polynomial of degree $n$. Suppose there exist $100$
pairwise distinct real roots $x_1,\dots,x_{100}$ of $P$ and $100$ pairwise
distinct real roots $y_1,\dots,y_{100}$ of $P-1$ with $|x_i-y_i|=1$ for all $i$.
Find the smallest possible value of $n$.

**Answer (target): $n=101$.**

The lower bound $n\ge 101$ is now proved **completely and rigorously** (all sign
patterns, no gaps), via a clean functional-equation lemma. The matching
construction at $n=101$ is reduced to a concrete existence statement that is
confirmed numerically and whose mechanism (anti-difference) is rigorous, but a
fully airtight existence proof of the construction for $100$ pairs was **not**
completed. Hence Status `partial`. See `## Approaches tried` for exactly what
remains open.

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

### Construction at $n=101$ (mechanism rigorous; existence reduced, not fully proved)

It suffices to realize the **pure** case (all $e_i=+1$): find a monic
$P$ of degree $101$ with $100$ distinct real roots $x_i$ such that
$P(x_i+1)=1$ for all $i$; then $y_i=x_i+1$ are $100$ distinct roots of $P-1$
with $|x_i-y_i|=1$, and all $200$ points are distinct as before.

**Anti-difference reduction (rigorous; L6).** Given any $100$ distinct reals
$x_1,\dots,x_{100}$, set
$$Q(x)=1+101\prod_{i=1}^{100}(x-x_i),$$
a polynomial of degree $100$ with leading coefficient $101$ and $Q(x_i)=1$.
The forward-difference operator $\Delta\colon p\mapsto p(x+1)-p(x)$ maps the
monic-leading-coefficient basis triangularly: $\Delta(x^{m})=m\,x^{m-1}+\cdots$,
so $\Delta$ sends polynomials of degree $101$ onto polynomials of degree
$\le100$, and is surjective onto degree-$100$ polynomials, with kernel the
constants. The degree-$101$ coefficient of an anti-difference of $Q$ equals
$101/101=1$, so there is a monic degree-$101$ polynomial $P$, unique up to an
additive constant, with $\Delta P=Q$. Then for each $i$,
$P(x_i+1)=P(x_i)+Q(x_i)=P(x_i)+1$. Thus **if** the $x_i$ and the additive
constant can be chosen so that $P(x_i)=0$ for all $i$, the construction is
complete.

**Reduction to a root system.** Fix translation by $x_1=0$ and fix the additive
constant by $P(0)=0$. It remains to solve $P(x_i)=0$ for $i=2,\dots,100$: $99$
equations in the $99$ unknowns $x_2,\dots,x_{100}$, where $P$ depends
polynomially on the $x_i$ through the anti-difference.

**What is established about existence.** This root system has solutions with all
$200$ points distinct for every small case checked numerically to high
precision: e.g. $k=3$ gives $x\approx\{0,0.347,1.879\}$; $k=4$ gives
$x\approx\{0,1.17557,1.90211,3.07768\}$; $k=5,6$ give configurations with all
$2k$ points distinct and $|P(x_i)|,|P(y_i)-1|<10^{-9}$. A fixed-point /
Newton iteration starting from a spread-out initial guess converges to a valid
distinct-point solution. **However**, a fully rigorous, airtight existence proof
for $k=100$ (e.g. via topological degree / properness of the map
$(x_2,\dots,x_{100})\mapsto(P(x_2),\dots,P(x_{100}))$, or via an explicit
closed-form family) was **not** completed — see `## Approaches tried`.

Because the find-smallest-$n$ rigor rule requires both a lower bound **and** a
realized construction, and the construction's existence step is not closed in
airtight prose, the overall Status is `partial`. The numerical evidence is
strong but, per the rigor rules, is not a proof.

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
- **Construction via anti-difference (L6)** — mechanism rigorous; reduces to a
  $99\times99$ root system. **OPEN:** a rigorous existence proof of a
  distinct-root solution for $k=100$. Numerically confirmed for small $k$; the
  topological-degree / properness route is the recommended next step, and an
  explicit closed-form family (roots appear near, but not exactly at, a
  symmetric near-integer pattern with sine-like values such as
  $2\sin(\pi/5)$ at $k=4$) was not found. The equally-spaced ansatz provably
  fails (one parameter cannot zero $99$ values).

## What remains open (single gap)
Only the **existence of the $n=101$ construction** is unproved: namely that the
$99$-equation anti-difference root system admits a real solution with all $200$
points distinct. Everything else — the answer $n=101$, the complete lower bound
$n\ge101$ for all sign patterns, the anti-difference mechanism, and the
distinctness reductions — is rigorous. Closing this single existence step
(topological degree of the proper map, or an explicit family) upgrades the
problem to `solved`.
