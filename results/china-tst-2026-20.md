## Status
partial

## Problem Statement
Do there exist primes $q, p_1, p_2$ and positive integers $m, n, \alpha_1, \alpha_2$ satisfying simultaneously:

(1) $q^{\alpha_1} \mid p_1^m - 1$, $\quad q^{\alpha_2} \mid p_2^m - 1$, $\quad m > 3n^2$;

(2) $p_1 < p_2 < p_1^{9/8}$, $\quad q^{n\alpha_1} > p_1^{m-1}$, $\quad q^{n\alpha_2} > p_2^{m-1}$?

**Domain:** Number theory. **Task:** `compute_and_prove`, `answer_type = characterization`.
**Conjectured answer: NO** (no such configuration exists). This is supported by an
exhaustive search and proved rigorously in a clean subcase; the general proof has three
explicitly-identified open reductions (see *Open reductions* below).

## Approaches tried

- **Single-variable feasibility check** — For one prime the conditions are satisfiable
  (e.g. $p=2,m=7,q=127,n=1,\alpha=1$). **Dead end:** the obstruction is genuinely
  two-prime; do not look for a one-prime contradiction.

- **Brute-force gcd search (small range)** — over the few valid pairs with $p_1<80$ and
  $m\le49$: no solution. (Superseded by the broad search below.)

- **LTE master inequality (D)** — RIGOROUS, retained as the spine. See *Current best*,
  Lemma 1.

- **Top-cyclotomic-factor forcing for $n=1$** — RIGOROUS, retained. See Lemma 2.

- **"9/8 window" closing step (outline Step 6)** — **REJECTED / directionally wrong.**
  The outline closed the clean case by substituting $p_2<p_1^{9/8}$ into the window
  $p_2^{m-1}<q\le\Phi_m(p_1)$. But $p_2<p_1^{9/8}$ is an *upper* bound on $p_2$, which makes
  $p_2^{m-1}$ *smaller*, i.e. makes the window *easier* to be nonempty — it helps the
  adversary, not the proof. The value $9/8$ cannot be the closing inequality of the clean
  subcase. The correct driver is the **consecutive-prime gap $p_2\ge p_1+2$**, a *lower*
  bound on $p_2$ (Lemma 3). The $9/8$ hypothesis must enter elsewhere — in the still-open
  resultant lemma (see *Open reductions* (c)).

- **Broad exhaustive search (verified NO)** — over **all** prime pairs $p_1<p_2<p_1^{9/8}$
  with $p_1<500$ (1732 pairs), all $m<60$, every prime $q\mid\gcd(p_1^m-1,p_2^m-1)$, every
  $n$ with $m>3n^2$, and $\alpha_i=v_q(p_i^m-1)$ (the most favorable choice): **zero
  solutions**, including the $d_i<m$ and $\alpha_i\ge2$ branches. The NO answer is robust
  computationally. (This is computational evidence, **not** a proof of the general case.)

## Current best

We have a **complete rigorous proof of the NO answer in the clean subcase**
$$\boxed{\;n=1,\quad \alpha_1=\alpha_2=1,\quad \operatorname{ord}_q(p_1)=\operatorname{ord}_q(p_2)=m,\;}$$
together with a complete rigorous dispatch of the prime $q=2$ for **all** parameters.
Three reductions remain open (listed at the end). Throughout, WLOG $p_1<p_2$, and by the
simultaneity of (1) the **same** prime $q$ divides both $p_1^m-1$ and $p_2^m-1$, hence
$q\mid\gcd(p_1^m-1,p_2^m-1)$.

### Lemma 0 (q = 2 dispatch — RIGOROUS, all parameters)
*If $q=2$ then conditions (1)–(2) cannot hold.*

Both $p_i$ are odd (they are primes $>q=2$). By the $q=2$ Lifting-the-Exponent identity
(KB "Lifting the Exponent (LTE)"), for odd $a$ and $m\ge1$,
$$v_2(a^m-1)=v_2(a-1)+v_2(a+1)+v_2(m)-1.$$
Since $2^{v_2(t)}\mid t$ gives $2^{v_2(t)}\le t$ for $t\ge1$,
$$2^{\,v_2(p^m-1)}=\tfrac12\,2^{v_2(p-1)}2^{v_2(p+1)}2^{v_2(m)}\le\tfrac12(p-1)(p+1)\,m=\tfrac{(p^2-1)m}{2}<p^2m.$$
Hence $2^{\alpha_i}\le 2^{v_2(p_i^m-1)}\le\frac{(p_i^2-1)m}{2}$, so condition
$2^{n\alpha_i}>p_i^{m-1}$ forces
$$\Big(\tfrac{(p_i^2-1)m}{2}\Big)^{n}>p_i^{\,m-1}.\tag{$\ast$}$$
We show $(\ast)$ is impossible for $p:=p_i\ge3$, $n\ge1$, $m>3n^2$.

*Case $m\ge7$.* From $m>3n^2$ we get $n<\sqrt{m/3}$. Using $\frac{p^2-1}{2}<\frac{p^2}{2}<p^2$
and $p\ge3$,
$$n\log_p\!\Big(\tfrac{(p^2-1)m}{2}\Big)<n\big(2+\log_p m\big)\le \sqrt{\tfrac m3}\Big(2+\tfrac{\ln m}{\ln 3}\Big).$$
For $m\ge7$ one checks $\sqrt{m/3}\,(2+\ln m/\ln3)<m-1$ (the function
$g(m)=\sqrt{m/3}\,(2+\ln m/\ln 3)-(m-1)$ is negative for all $m\ge7$: $g$ is eventually
decreasing and $g(7)<0$; verified numerically for $7\le m<10^5$, and for large $m$ the
linear term $m-1$ dominates $\sqrt m\ln m$). Hence the exponent on the LHS of $(\ast)$ is
$<m-1$, contradicting $(\ast)$.

*Case $m\in\{4,5,6\}$.* Then $m>3n^2$ forces $n=1$ (as $3\cdot2^2=12>6$). With $n=1$, $(\ast)$
reads $\frac{(p^2-1)m}{2}>p^{m-1}$. For $p\ge3$: $m=4$ gives $2(p^2-1)<p^3$ (since
$p^3\ge3p^2>2p^2>2p^2-2$); $m=5$ gives $\frac52(p^2-1)<p^4$; $m=6$ gives $3(p^2-1)<p^5$. All
hold for $p\ge3$. (Numerically confirmed for $p$ up to $23$ and clearly increasing in $p$.)

*Cases $m\le3$* are excluded because $m>3n^2\ge3$ forces $m\ge4$. $\square$

So from now on $q$ is an **odd** prime.

### Lemma 1 (master valuation bound (D) — RIGOROUS, $q$ odd)
*Let $q$ be odd, $q\mid p^m-1$, and $d:=\operatorname{ord}_q(p)$. Then $d\mid m$, and*
$$q^{\alpha}\le q^{\,v_q(p^m-1)}<p^{\,d}\cdot m.\tag{D}$$

By Fermat/order theory (KB "Order of an element"), $q\mid p^m-1\iff d\mid m$; moreover
$d\mid q-1$. Write $m=d\cdot e$. By LTE for the odd prime $q$ (KB "Lifting the Exponent"),
since $q\mid p^d-1$,
$$v_q(p^m-1)=v_q\big((p^d)^e-1\big)=v_q(p^d-1)+v_q(e)=:k+s.$$
Here $q^k\mid p^d-1$ gives $q^k\le p^d-1<p^d$, and $q^s\mid e=m/d$ gives $q^s\le m/d\le m$.
Multiplying, $q^{v_q(p^m-1)}=q^{k+s}<p^d\cdot m$. Finally $\alpha\le v_q(p^m-1)$ since
$q^{\alpha}\mid p^m-1$. $\square$

(Verified: over $20000$ random instances with odd $q$, the LTE split is exact and
$q^{\alpha}<p^d m$ holds.)

### Lemma 2 (top-cyclotomic-factor forcing for $n=1$ — RIGOROUS)
*Let $m\ge4$, $p\ge2$, $q$ a prime with $q\mid p^m-1$ and $q>p^{\,m-1}$. Then
$\operatorname{ord}_q(p)=m$ (equivalently $q\mid\Phi_m(p)$).*

We have $p^m-1=\prod_{d\mid m}\Phi_d(p)$, and $q\mid p^m-1$ means $q\mid\Phi_d(p)$ for the
single value $d=\operatorname{ord}_q(p)\mid m$. Suppose $d<m$. For a proper divisor $d\mid m$,
$d<m$, Euler's totient satisfies $\varphi(d)\le m/2$ (indeed $\varphi(d)\le d\le m/2$, since the
largest proper divisor of $m$ is at most $m/2$). Using the crude bound
$\Phi_d(p)=\prod_{\zeta}(p-\zeta)\le(p+1)^{\varphi(d)}\le(p+1)^{m/2}$ over primitive $d$-th roots
$\zeta$ on the unit circle, we get for $m\ge4$, $p\ge3$:
$$(p+1)^{m/2}<p^{\,m-1}\iff \tfrac m2\ln(p+1)<(m-1)\ln p,$$
which holds for all $p\ge3,m\ge4$ and for $p=2,m\ge5$ (verified; the only exception of the
clean inequality is $(p,m)=(2,4)$). For the exceptional pair $(p,m)=(2,4)$ the proper
divisors are $d\in\{1,2\}$ with $\Phi_1(2)=1$, $\Phi_2(2)=3$, both $<2^3=8=p^{m-1}$, so the
conclusion still holds. In every case $\Phi_d(p)<p^{m-1}<q$, so $q\nmid\Phi_d(p)$, a
contradiction. Hence $d=m$. $\square$

(Verified: for all primes $p<200$ and $m\in[4,40)$, $\Phi_d(p)<p^{m-1}$ for every proper
divisor $d\mid m$.)

### Lemma 3 (clean subcase closes via the consecutive-prime gap — RIGOROUS)
*Suppose, in addition to (1)–(2), that $q$ is odd, $n=1$, $\alpha_1=\alpha_2=1$, and
$\operatorname{ord}_q(p_1)=\operatorname{ord}_q(p_2)=m$ with $m$ prime. Then no configuration
exists.*

With $\alpha_i=1$ and $n=1$, condition (2) gives $q>p_i^{\,m-1}$ for both $i$, in particular
$q>p_2^{\,m-1}$ (the larger threshold). With $\operatorname{ord}_q(p_1)=m$, Lemma 2's setup gives
$q\mid\Phi_m(p_1)$, so $q\le\Phi_m(p_1)$. For $m$ prime,
$$\Phi_m(p_1)=\frac{p_1^{\,m}-1}{p_1-1}<\frac{p_1^{\,m}}{p_1-1}=p_1^{\,m-1}\cdot\frac{p_1}{p_1-1}
=p_1^{\,m-1}\Big(1+\tfrac1{p_1-1}\Big).$$
Combining $p_2^{\,m-1}<q\le\Phi_m(p_1)$:
$$\Big(\frac{p_2}{p_1}\Big)^{m-1}<\frac{\Phi_m(p_1)}{p_1^{\,m-1}}<1+\frac1{p_1-1}.\tag{W}$$
Now $p_1,p_2$ are **distinct primes** with $p_2>p_1$. If $p_1\ge3$ then $p_2\ge p_1+2$, so
$\frac{p_2}{p_1}\ge1+\frac2{p_1}$, whence
$$\Big(\frac{p_2}{p_1}\Big)^{m-1}\ge\Big(1+\tfrac2{p_1}\Big)^{m-1}\ge1+\tfrac2{p_1}\cdot(m-1)
\ge1+\tfrac2{p_1}\quad(m\ge2).$$
But $\frac{2}{p_1}\ge\frac1{p_1-1}$ for $p_1\ge2$ (cross-multiplying: $2(p_1-1)\ge p_1\iff p_1\ge2$),
so the LHS of (W) is $\ge1+\frac1{p_1-1}$, contradicting (W). If $p_1=2$ then $p_2=3$ and (W)
demands $(3/2)^{m-1}<2$, i.e. $3^{m-1}<2^m$. This is **true at $m=2$** ($3<4$) but **false for
$m\ge3$**: $3^{m-1}\ge2^m\iff(3/2)^{m-1}\ge2\iff m\ge1+\log_{3/2}2=2.71\ldots$, i.e. for every
integer $m\ge3$. Since this clean subcase carries the hypothesis $m>3$ with $m$ prime, we have
$m\ge5$, so $(3/2)^{m-1}\ge(3/2)^4=5.06\ldots>2$ and (W) fails. In all cases (W) fails. $\square$

(Verified exhaustively: for **every** prime $p_1<3000$ with $p_2=\operatorname{nextprime}(p_1)$
and **every** prime $m<80$ — $9460$ instances — the window $\Phi_m(p_1)>p_2^{m-1}$ is empty,
i.e. zero nonempty windows. The driver is $p_2-p_1\ge2$, not the value $9/8$.)

### Summary of what is rigorously proved
- The $q=2$ case is impossible for **all** parameters (Lemma 0).
- The master bound (D) and the $n=1$ top-factor forcing (Lemmas 1–2) hold rigorously.
- For $q$ odd, the subcase $n=1$, $\alpha_1=\alpha_2=1$, $\operatorname{ord}_q(p_1)=\operatorname{ord}_q(p_2)=m$,
  $m$ prime is impossible (Lemma 3).
- Exhaustive search finds **no** solution over all $p_1<p_2<p_1^{9/8}$ with $p_1<500$,
  $m<60$, all $n$, all $q\mid\gcd(p_1^m-1,p_2^m-1)$, $\alpha_i=v_q(p_i^m-1)$ — covering the
  $d_i<m$ and $\alpha_i\ge2$ branches numerically.

### Open reductions (NOT yet proved — these are the gaps to a full solve)
The general NO answer requires removing the extra hypotheses of Lemma 3. Each below is a
genuine gap, not a formality; concrete witnesses show the *per-prime* conditions can hold
in these branches, so they are not vacuous.

**(a) The branch $\operatorname{ord}_q(p_i)=d_i<m$ and/or $n\ge2$ is OPEN.** Inequality
(D)+(2) only yields $d_i>(m-1)/n-\log_{p_i}m$ (combine $q^{\alpha_i}>p_i^{(m-1)/n}$ with
$q^{\alpha_i}<p_i^{d_i}m$). This does **not** force $d_i=m$ when $n\ge2$. Witness of the
per-prime feasibility of this branch: $(q,p,m,n,\alpha,d)=(127,2,14,2,1,7)$ satisfies
$127\mid2^{14}-1$, $\operatorname{ord}_{127}(2)=7<14$, $m=14>3\cdot2^2=12$, and
$127^{2}=16129>2^{13}=8192$. So "reduce to $d_i=m$" is **false as a universal step**.

**(b) The branch $\alpha_i\ge2$ is OPEN.** Lemma 3 used $\alpha_i=1$ to pass from
$q^{n\alpha_i}>p_i^{m-1}$ to $q>p_i^{m-1}$. With $d_i=m$ one has $s_i=0$ so
$\alpha_i=v_q(\Phi_m(p_i))$ can exceed $1$: witness $(q,p,m,\alpha)=(11,3,5,2)$ with
$11^2\mid\Phi_5(3)=121$ yet $q=11<p^{m-1}=81$. When $\alpha_i\ge2$ the size window
collapses: the only surviving inequality is $\Phi_m(p_i)^n>q^{n\alpha_i}>p_i^{m-1}$, i.e.
$\Phi_m(p_i)>p_i^{(m-1)/n}$, which is essentially automatic. No size contradiction remains
in this branch.

**(c) The shared-order / resultant smallness lemma is OPEN — this is the true crux, and
where the $9/8$ exponent must finally enter.** A large common prime $q$ with
$\operatorname{ord}_q(p_1)=d_1$, $\operatorname{ord}_q(p_2)=d_2$ (both $\mid m$) divides both
$p_1^{d_1}-1$ and $p_2^{d_2}-1$. To kill branches (a),(b) one needs: *a multiplicatively
close pair $p_2<p_1^{9/8}$ (equivalently $p_2^{\,8}<p_1^{\,9}$) forces any common large prime
$q$ to lie below the threshold $p_i^{(m-1)/n}$.* The mechanism (heuristic, **not** rigorous):
$p_1,p_2$ generate small-order subgroups of $\mathbb F_q^\*$, and the closeness produces a
small integer relation $p_1^{a}-p_2^{b}\equiv0\pmod q$ with the explicit exponents
$(a,b)=(9,8)$ coming from $p_2^8<p_1^9$, giving a resultant/Runge-type upper bound on $q$.
**This resultant bound is the missing rigorous core.** It is exactly the step in which the
hypothesis $p_2<p_1^{9/8}$ does productive work (note: in the clean subcase it does *not*, by
the rejected-approach analysis above). Until this lemma is established, the problem is
`partial`.

## Approaches tried (verdicts, appended)
- Single-variable check — dead end (obstruction is two-prime).
- Small-range gcd search — no solution (superseded).
- Master bound (D) via odd-$q$ LTE — RIGOROUS (Lemma 1).
- Top-factor forcing for $n=1$ — RIGOROUS (Lemma 2).
- 9/8-window closing step (outline Step 6) — REJECTED, directionally wrong; replaced by the
  consecutive-prime-gap argument (Lemma 3).
- $q=2$ dispatch via 2-adic valuation bound — RIGOROUS (Lemma 0).
- Broad exhaustive two-prime search ($p_1<500$, $m<60$, all branches) — verified NO; numerical
  evidence only, not a proof.

## Full proof
(Not present: Status is `partial`. A complete proof additionally requires closing open
reductions (a),(b),(c) above — in particular the resultant smallness lemma (c) where the
$p_2^8<p_1^9$ exponent enters.)
