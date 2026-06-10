## Status
solved

## Approaches tried
- Part (a): closed form of the inhomogeneous linear recurrence $u_{n+2}=3u_{n+1}-2u_n-1$ (roots $1,2$; particular solution $u_n=n$) → impose $u_{2023}=2^{2022}$ → reduces to a single linear Diophantine equation $(2-P)\alpha+(P-1)\beta=2P-2023$ with $P=2^{2022}$, $\gcd(P-1,P-2)=1$ → explicit one-parameter integer family. **Worked** (family verified by full simulation and by the closed form for $k=-2,\dots,2$).
- Part (b): eventual periodicity of the pair-state $(u_n,u_{n+1})\bmod 2023$ (finite deterministic forward map) gives a forward period $T$ from index $n_0$; dichotomy on the periodic block — Case A (some block term $\equiv0\pmod 7$ or $\pmod{17}$) forces (i) and kills (ii) via a valuation count; Case B (all block terms coprime to $7$ and $17$) forces (ii) via the order of the block product in $(\mathbb Z/2023)^\times$ and kills (i). **Worked** (all four sub-claims verified numerically on 300 random parameter sets by the outline reviewer).

## Current best
Complete rigorous proof of both parts (below).

## Full proof

Throughout, $\mathbb Z$ denotes the integers. We write $v_p(N)$ for the $p$-adic valuation of a nonzero integer $N$ (the exponent of the prime $p$ in $N$).

---

### Part (a)

Here $a=3,\ b=-2,\ c=-1$, so the recurrence is
$$u_{n+2}=3u_{n+1}-2u_n-1,\qquad u_1=\alpha,\ u_2=\beta. \tag{1}$$
We must exhibit infinitely many integer pairs $(\alpha,\beta)$ with $u_{2023}=2^{2022}$.

**Step 1: Closed form of the recurrence.**
The homogeneous recurrence $w_{n+2}=3w_{n+1}-2w_n$ has characteristic equation
$$r^2-3r+2=0,$$
obtained by substituting $w_n=r^n$ and dividing by $r^n$. Its roots are
$$r^2-3r+2=(r-1)(r-2)=0\implies r=1,\ r=2.$$
Thus the general homogeneous solution is $A\cdot 1^n+B'\cdot 2^n=A+B'2^n$ with constants $A,B'$.

For the inhomogeneous term $-1$ in (1): because $r=1$ is a root of the characteristic polynomial, we seek a particular solution of the form $u_n=\gamma n$. Substituting into (1):
$$\gamma(n+2)=3\gamma(n+1)-2\gamma n-1\iff \gamma n+2\gamma=3\gamma n+3\gamma-2\gamma n-1\iff 2\gamma=3\gamma-1\iff \gamma=1.$$
Hence $u_n=n$ solves (1); indeed $(n+2)=3(n+1)-2n-1$ is an identity. Therefore every solution of (1) has the form
$$u_n=A+B'\,2^n+n \tag{2}$$
for some constants $A,B'$.

It is convenient to write $B'=B/2$, i.e. to use $u_n=A+\tfrac{B}{2}2^n+n=A+B\,2^{n-1}+n$. We will see $B$ is an integer; this rewriting makes the all-integer property transparent.

**Step 2: Determine the constants from the seeds.**
Imposing $u_1=\alpha$ and $u_2=\beta$ in (2) with $u_n=A+B\,2^{n-1}+n$:
$$\alpha=A+B\cdot 2^0+1=A+B+1,\qquad \beta=A+B\cdot 2^1+2=A+2B+2.$$
Subtracting the first from the second: $\beta-\alpha=B+1$, so
$$B=\beta-\alpha-1,\qquad A=\alpha-B-1=\alpha-(\beta-\alpha-1)-1=2\alpha-\beta. \tag{3}$$
Both $A=2\alpha-\beta$ and $B=\beta-\alpha-1$ are integers for every integer pair $(\alpha,\beta)$, and the closed form becomes
$$\boxed{\,u_n=(2\alpha-\beta)+(\beta-\alpha-1)\,2^{n-1}+n\,}\qquad(n\ge1). \tag{4}$$

**Remark (no parity condition).** Formula (4) is a sum of integers for every integer $n$ and every integer pair $(\alpha,\beta)$; there is no parity restriction whatsoever. This is also clear directly: the recurrence (1) has integer coefficients, so integer seeds $\alpha,\beta$ produce an all-integer sequence. (One checks (4) reproduces (1): for arbitrary integer seeds it agrees with the recurrence, which we also confirmed numerically for many seeds.) Thus **every** integer pair $(\alpha,\beta)$ is admissible, and we are free to choose $(\alpha,\beta)$ subject only to the target condition below.

**Step 3: Translate the target into a linear Diophantine equation.**
Write $P:=2^{2022}$. Setting $n=2023$ in (4) and using $2^{2023-1}=2^{2022}=P$:
$$u_{2023}=(2\alpha-\beta)+(\beta-\alpha-1)P+2023.$$
The requirement $u_{2023}=P$ reads
$$(2\alpha-\beta)+(\beta-\alpha-1)P+2023=P.$$
Expand and collect $\alpha,\beta$:
$$2\alpha-\beta+P\beta-P\alpha-P+2023=P
\;\Longrightarrow\; (2-P)\alpha+(P-1)\beta=2P-2023. \tag{5}$$
(We moved $-P+2023$ to the right: $2P-2023$; and the $-P$ from $(\beta-\alpha-1)P$ combined with the RHS $+P$ gives $+2P$ on the right.) Explicitly: LHS$-$RHS $=2\alpha-\beta+P\beta-P\alpha-P+2023-P=(2-P)\alpha+(P-1)\beta-2P+2023$, which is $0$ iff (5) holds.

So $(\alpha,\beta)$ works **iff** it solves the linear Diophantine equation (5).

**Step 4: Solve the Diophantine equation; build the infinite family.**
The coefficients of $\alpha,\beta$ in (5) are $2-P$ and $P-1$. Since
$$\gcd(P-1,\,P-2)=\gcd(P-1,\,(P-1)-(P-2))=\gcd(P-1,1)=1,$$
and $\gcd(2-P,P-1)=\gcd(-(P-2),P-1)=\gcd(P-2,P-1)=1$, the gcd of the two coefficients is $1$, which divides the RHS $2P-2023$. By the theory of linear Diophantine equations (a consequence of Bézout's identity / the extended Euclidean algorithm — KB "Diophantine / parametric families"), equation (5) has integer solutions, and they form a single coset of the solution lattice of the homogeneous equation.

*A particular solution.* Try $\beta-\alpha=2$, i.e. $\beta=\alpha+2$. Substituting into (5):
$$(2-P)\alpha+(P-1)(\alpha+2)=2P-2023\iff \big[(2-P)+(P-1)\big]\alpha+2(P-1)=2P-2023.$$
Now $(2-P)+(P-1)=1$, so this is $\alpha+2P-2=2P-2023$, giving $\alpha=-2021$, hence $\beta=-2019$. Set
$$\alpha_0=-2021,\qquad \beta_0=-2019,$$
and indeed $(2-P)(-2021)+(P-1)(-2019)=2P-2023$ (direct check below).

*The homogeneous shift.* The homogeneous equation $(2-P)x+(P-1)y=0$ has the integer solution $(x,y)=(P-1,\,P-2)$, since
$$(2-P)(P-1)+(P-1)(P-2)=(P-1)\big[(2-P)+(P-2)\big]=(P-1)\cdot 0=0.$$
Therefore, for every integer $k$, the pair
$$\boxed{\;\alpha(k)=-2021+(P-1)k,\qquad \beta(k)=-2019+(P-2)k\;}\qquad(P=2^{2022}) \tag{6}$$
is an integer solution of (5):
$$(2-P)\alpha(k)+(P-1)\beta(k)=\underbrace{(2-P)\alpha_0+(P-1)\beta_0}_{=\,2P-2023}+k\cdot\underbrace{\big[(2-P)(P-1)+(P-1)(P-2)\big]}_{=\,0}=2P-2023.$$

*Verification of $\alpha_0,\beta_0$.* With $\beta_0=\alpha_0+2$ and $2\alpha_0-\beta_0=2(-2021)-(-2019)=-2023$, $\;\beta_0-\alpha_0-1=2-1=1$, formula (4) gives
$$u_{2023}=(2\alpha_0-\beta_0)+(\beta_0-\alpha_0-1)P+2023=-2023+1\cdot P+2023=P=2^{2022},$$
exactly as required. For general $k$, since each $(\alpha(k),\beta(k))$ solves (5), and (5) is equivalent to $u_{2023}=2^{2022}$, every pair in (6) satisfies $u_{2023}=2^{2022}$.

**Step 5: Infinitude.**
The map $k\mapsto\alpha(k)=-2021+(P-1)k$ is strictly increasing in $k$ because $P-1=2^{2022}-1>0$; in particular it is injective. Hence the pairs $(\alpha(k),\beta(k))$ for $k\in\mathbb Z$ are pairwise distinct. This is an explicit infinite family of integer pairs, each giving $u_{2023}=2^{2022}$.

This proves part (a). $\qquad\blacksquare$ *(part a)*

---

### Part (b)

**Generality of $a,b,c$.** The problem says "Let $a,b,c,\alpha,\beta$ be the given integers" but does not restate their values for part (b). We prove the statement for **arbitrary** integers $a,b,c$ (and arbitrary integer seeds $\alpha,\beta$). The argument never uses the specific values $a=3,b=-2,c=-1$ of part (a); hence it is valid whatever the intended $a,b,c$ are. Fix such integers $a,b,c,\alpha,\beta$ and let $(u_n)_{n\ge1}$ be defined by $u_{n+2}=au_{n+1}+bu_n+c$.

Set the modulus
$$M:=2023=7\cdot 17^2.$$
The only primes dividing $M$ are $7$ and $17$. We will produce a single index $n_0$ for which **exactly one** of statements (i), (ii) holds. (For clarity: the product in both (i) and (ii) is $P(m):=u_{n_0}u_{n_0+1}\cdots u_{n_0+m}$, beginning at index $n_0$.)

#### Lemma P (eventual periodicity, forward period).
*For any integer modulus $M\ge1$ there exist a smallest index $n_0\ge1$ and a period $T\ge1$ such that*
$$u_{n+T}\equiv u_n\pmod M\qquad\text{for all }n\ge n_0,$$
*and moreover the residues $u_{n_0},u_{n_0+1},\dots,u_{n_0+T-1}\pmod M$ recur, in the same cyclic order, forever from index $n_0$ on.*

*Proof.* Consider the **pair-state** $s_n:=(u_n\bmod M,\ u_{n+1}\bmod M)\in(\mathbb Z/M)^2$. The recurrence determines $s_{n+1}$ from $s_n$ by the deterministic map
$$F\big((x,y)\big)=\big(y,\ ay+bx+c \bmod M\big),$$
since $u_{n+2}\equiv au_{n+1}+bu_n+c\pmod M$. The state space $(\mathbb Z/M)^2$ is finite, with $M^2$ elements. By the pigeonhole principle, among $s_1,s_2,\dots,s_{M^2+1}$ two are equal: $s_i=s_j$ for some $1\le i<j\le M^2+1$. Let $n_0$ be the least index and $T:=j-i\ge1$ the corresponding gap chosen minimal so that $s_{n_0}=s_{n_0+T}$ with $n_0$ as small as possible (i.e. take the first repeated state along the orbit and $T$ its return time).

Because $F$ is a function (deterministic), $s_{n_0}=s_{n_0+T}$ forces $s_{n_0+1}=F(s_{n_0})=F(s_{n_0+T})=s_{n_0+T+1}$, and inductively $s_{n+T}=s_n$ for all $n\ge n_0$:
$$s_{n_0+t}=s_{n_0+t+T}\quad\text{for all }t\ge0,$$
by induction on $t$ (base $t=0$ is $s_{n_0}=s_{n_0+T}$; step uses $s_{n+1}=F(s_n)$). The first coordinate of $s_n$ is $u_n\bmod M$, so $u_{n+T}\equiv u_n\pmod M$ for all $n\ge n_0$. In particular the finite list of residues $u_{n_0},\dots,u_{n_0+T-1}\pmod M$ — call it the **periodic block** — repeats verbatim and forever: for every $j\ge0$ and $0\le r<T$,
$$u_{n_0+r+jT}\equiv u_{n_0+r}\pmod M. \tag{7}$$
$\square$

From now on fix $M=2023$ and let $n_0,T$ be as in Lemma P. **This is the $n_0$ we use in the statement.** Since the product in (i)/(ii) starts exactly at $u_{n_0}$, *every* factor $u_{n_0+m}$ ($m\ge0$) lies in the periodic phase: by (7) its residue mod $2023$ equals that of the block term $u_{n_0+(m\bmod T)}$. There is no pre-period tail inside the product.

By the Chinese Remainder Theorem (KB "Modular arithmetic, CRT"), for an integer $N$:
$$7\mid N\iff N\equiv0\ \text{has the factor }7;\qquad 17\mid N;\qquad 2023\mid N\iff 7\mid N\text{ and }17^2\mid N.$$
In particular, divisibility statements modulo $7$, $17$, $2023$ are all detected by residues mod $2023$.

#### The dichotomy.
Examine the periodic block $u_{n_0},u_{n_0+1},\dots,u_{n_0+T-1}$ modulo $7$ and modulo $17$:

- **Case A:** some block term is $\equiv0\pmod 7$, **or** some block term is $\equiv0\pmod{17}$.
- **Case B:** no block term is $\equiv0\pmod 7$ and no block term is $\equiv0\pmod{17}$.

These two cases are, by definition, exhaustive (every possibility falls in exactly one) and mutually exclusive (B is precisely the negation of A). This is a property of the **fixed** finite block, so no further argument for exhaustiveness/exclusivity is needed.

We show: in Case A, (i) holds and (ii) fails; in Case B, (ii) holds and (i) fails. In either case **exactly one** of (i), (ii) is true.

---

#### Case A $\Rightarrow$ (i) holds.

Pick a prime $p\in\{7,17\}$ and an index $r$ with $0\le r<T$ such that $p\mid u_{n_0+r}$ (Case A guarantees at least one such pair $(p,r)$). By (7), for every $j\ge0$,
$$u_{n_0+r+jT}\equiv u_{n_0+r}\equiv0\pmod p,$$
so $p\mid u_{n_0+r+jT}$ for all $j\ge0$. These are infinitely many indices, all $\ge n_0$, at which the factor of the product is divisible by $p$.

Fix any $m\ge r$ and consider $P(m)=u_{n_0}u_{n_0+1}\cdots u_{n_0+m}$. The factors with index $n_0+r+jT$ for $0\le j\le\lfloor(m-r)/T\rfloor$ all satisfy $n_0+r+jT\le n_0+m$, hence appear in $P(m)$, and each is divisible by $p$. There are exactly
$$\Big\lfloor\tfrac{m-r}{T}\Big\rfloor+1$$
such factors. Since the $p$-adic valuation of a product is the **sum** of the valuations of its factors and every valuation is $\ge0$ (the valuation of the product only accumulates, never decreases as we include more factors), and each of these factors contributes at least $1$:
$$v_p\big(P(m)\big)\ \ge\ \Big\lfloor\tfrac{m-r}{T}\Big\rfloor+1. \tag{8}$$
(Here we tacitly use $P(m)\ne0$; if some factor were $0$ then $7^{2023}$ and $17^{2023}$ trivially divide $P(m)=0$, so (i) holds even more easily. Assume henceforth $P(m)\ne0$, the generic situation.)

The right side of (8) is $\ge2023$ as soon as $\lfloor(m-r)/T\rfloor\ge2022$, i.e. for every
$$m\ \ge\ r+2022\,T.$$
For all such $m$ we get $v_p(P(m))\ge2023$, that is $p^{2023}\mid P(m)$. Thus either $7^{2023}\mid P(m)$ (if $p=7$) or $17^{2023}\mid P(m)$ (if $p=17$). The set $\{m:\ m\ge r+2022T\}$ is infinite, so there are infinitely many positive integers $m$ with $7^{2023}\mid P(m)$ or $17^{2023}\mid P(m)$. **Statement (i) holds.** $\square$

#### Case A $\Rightarrow$ (ii) fails.

Keep $p\in\{7,17\}$ and $r$ with $p\mid u_{n_0+r}$ as above. For every $m\ge r$, the factor $u_{n_0+r}$ appears in $P(m)$, so $p\mid P(m)$, hence
$$P(m)-1\equiv -1\pmod p.$$
Since $p\in\{7,17\}$ and both $7\mid2023$ and $17\mid2023$ (indeed $2023=7\cdot17^2$), we have $p\mid 2023$. If $2023\mid P(m)-1$ then $p\mid P(m)-1$, i.e. $P(m)-1\equiv0\pmod p$, contradicting $P(m)-1\equiv-1\not\equiv0\pmod p$. Therefore
$$2023\nmid P(m)-1\qquad\text{for all }m\ge r.$$
So the only positive integers $k$ that could satisfy $2023\mid P(k)-1$ are those with $k<r$ — a **finite** set. Hence there are **not** infinitely many such $k$: **statement (ii) fails.** $\square$

Thus in Case A exactly (i) holds.

---

#### Case B $\Rightarrow$ (i) fails.

In Case B no block term is divisible by $7$ or by $17$. By (7), every factor $u_{n_0+m}$ ($m\ge0$) is congruent mod $2023$ — hence in particular mod $7$ and mod $17$ — to some block term, so **no** factor $u_{n_0+m}$ is divisible by $7$ or by $17$. Consequently $7\nmid P(m)$ and $17\nmid P(m)$ for every $m\ge0$ (a prime divides a product iff it divides some factor). A fortiori $7^{2023}\nmid P(m)$ and $17^{2023}\nmid P(m)$ for every $m$. So there are **zero** positive integers $m$ for which $7^{2023}\mid P(m)$ or $17^{2023}\mid P(m)$: **statement (i) fails.** $\square$

#### Case B $\Rightarrow$ (ii) holds.

In Case B every factor $u_{n_0+m}$ is coprime to $7$ and to $17$ (by the previous paragraph), hence coprime to $2023=7\cdot17^2$, since the only prime factors of $2023$ are $7$ and $17$. Therefore each $u_{n_0+m}\bmod 2023$ is a **unit** in the ring $\mathbb Z/2023$, i.e. lies in the group $(\mathbb Z/2023)^\times$.

Let
$$Q:=\prod_{i=0}^{T-1}u_{n_0+i}\ \bmod 2023,$$
the product of the residues of one full periodic block. As a product of units, $Q\in(\mathbb Z/2023)^\times$.

*Index alignment.* For any $j\ge1$, the product of the first $jT$ factors of the sequence (indices $n_0,n_0+1,\dots,n_0+jT-1$) is, by (7), congruent mod $2023$ to $j$ copies of one block:
$$P(jT-1)=\prod_{i=0}^{jT-1}u_{n_0+i}\equiv\prod_{j'=0}^{j-1}\ \prod_{r=0}^{T-1}u_{n_0+j'T+r}\equiv\prod_{j'=0}^{j-1}\ \prod_{r=0}^{T-1}u_{n_0+r}=Q^{\,j}\pmod{2023}, \tag{9}$$
where the middle congruence uses $u_{n_0+j'T+r}\equiv u_{n_0+r}\pmod{2023}$ from (7). (Note $P(jT-1)$ has exactly $jT$ factors: indices $n_0+0$ through $n_0+(jT-1)$.)

Since $Q$ is a unit, by **Euler's theorem** (KB "Order of an element, Fermat/Euler") $Q^{\varphi(2023)}\equiv1\pmod{2023}$, so $Q$ has a finite multiplicative order $d:=\operatorname{ord}_{2023}(Q)\ge1$ in $(\mathbb Z/2023)^\times$; that is, $Q^d\equiv1\pmod{2023}$.

Now take, for each $j\ge1$, the exponent
$$k_j:=(jd)\,T-1.$$
These are positive integers (as $d,T\ge1$, $j\ge1$), strictly increasing in $j$ (so infinitely many distinct values). By (9) with $jd$ in place of $j$:
$$P(k_j)=P\big((jd)T-1\big)\equiv Q^{\,jd}=\big(Q^{d}\big)^{j}\equiv 1^{\,j}=1\pmod{2023}.$$
Hence $2023\mid P(k_j)-1$ for every $j\ge1$. This is an explicit infinite family of positive integers $k$ with $2023\mid P(k)-1$: **statement (ii) holds.** $\square$

Thus in Case B exactly (ii) holds. (The return to $1$ occurs every $d$ blocks, not necessarily every block; this is irrelevant — we only need infinitely many such $k$, which $k_j=jdT-1$ provides.)

---

#### Conclusion of Part (b).

Cases A and B are exhaustive and mutually exclusive. In Case A, (i) is true and (ii) is false; in Case B, (ii) is true and (i) is false. In both cases, exactly one of (i), (ii) holds. Therefore the index $n_0$ furnished by Lemma P (for the modulus $M=2023$) is a positive integer for which exactly one of the two statements (i), (ii) is true.

This proves part (b) for arbitrary integers $a,b,c,\alpha,\beta$, and in particular for whatever values were intended. $\qquad\blacksquare$
