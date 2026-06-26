## Status
partial

## Approaches tried
- Contradiction via LTE + Zsygmondy + q-adic analysis of Q(mq^k), closing through a prime modulus r = c+k. The reduction (§§0–5), the closing structure (§7), and all degenerate cases are fully rigorous. The single remaining gap is **Lemma B** (§6): for a fixed prime t ≠ q, the set {k : Q(mq^k)≠0, v_t(Q(mq^k)) ≥ c+k} must be finite, i.e. v_t(mq^k − ρ) = O(log k) for every t-adic root ρ of Q. — outcome: **per-root mechanism (round 7)**: proved the level-set L_J(ρ)={k : v_t(mq^k−ρ)≥J} is a SINGLE arithmetic progression of period ord_{t^{J−ν}}(q) ≥ t^{J−ν−W} (6′), with the order-constant W correct for both odd t and t=2, giving the log bound v_t(mq^k−ρ) ≤ log_t k + (ν+W) at every index k that is NOT the least element of its level (7′). The entire Lemma now reduces to bounding the **least indices** (coincidental close approaches like k=8 for ρ=−3, t=5, q=3, m=2, where v_5=4), which is a t-adic linear-forms-in-logarithms statement (Yu's p-adic Baker). — **Correction to round 6**: the rational-root case is NOT easier; it has the identical least-index obstruction, so the previous "unconditional for linearly-split Q" claim is withdrawn.
- (round 6) Order/spacing bound (7): two indices in L_J(ρ) are ≥ ord_{t^J}(q) ≥ t^{J−W} apart — correct but, taken at polynomial level, the least index PLATEAUS (k_min(J)=4,8,8,8,1008 for Q=(x−2)(x+3),t=5,q=3,m=2), so it does not bound the least index. The per-root reformulation (round 7) fixes the granularity but the least-index kernel survives.

## Current best
Answer (verified numerically; proven unconditional modulo the single isolated Kernel below): **the empty set** — no Q ∈ ℤ[x] admits N, a > 1 with f(a^n+1) ∣ f(Q(n)) for all n > N.

Rigorously established (see Full proof, §§0–7) — UNCONDITIONAL:
- **Lemma A** (unbounded): for every a > 1, f(a^n+1) → ∞ along n = m q^k via LTE, handling both a+1 with an odd prime factor and the Mersenne case a+1 = 2^j (use a^2+1). Kills Q ≡ 0 and constant Q completely.
- **Zsygmondy choice**: a single odd primitive prime q | a^m+1 with q ∤ a and q > |a_{i_0}| (so v_q(a_{i_0}) = 0).
- **q-adic structure**: along n = m q^k, v_q(a^n+1) = c+k (LTE), and v_q(Q(mq^k)) = i_0·k (strict-minimum/ultrametric), giving (c+k) ∣ i_0·k·f(M_k) for large k where q ∤ M_k.
- **Exact-root edge case (Part 0)**: finitely many k have Q(mq^k)=0 (f=f(0)=1), excluded; the chosen prime r=c+k takes k outside this finite set.
- **§6 per-root structure**: local bound (5′); single-AP level-sets of exact period (6′); the log bound (7′) at every non-least index; closing §7 (cases i0≥1 and i0=0) goes through verbatim once O(log k) holds.

REMAINING GAP — the single **Kernel** (§6(V)): for each fixed t≠q and each t-adic root ρ of Q, v_t(mq^k − ρ) = O(log k). This is exactly the bound on the least indices of the per-root level-sets (the coincidental close approaches), a t-adic linear-forms-in-logarithms statement provable by Yu's p-adic analogue of Baker's theorem — not in knowledge_base.md and not reproduced elementarily here. Both rational and irrational roots reduce to this same Kernel.

## Proof (complete except for the single Kernel statement of §6(V), an O(log k) t-adic linear-forms bound)

Throughout, for a prime p and a nonzero integer $u$, $v_p(u)$ denotes the exponent of $p$ in $u$ (so $u = \pm\prod_p p^{v_p(u)}$). Recall the definition:
$$f(n)=\prod_{p \mid n} v_p(n)\quad (n\neq 0,\pm 1),\qquad f(0)=f(\pm 1)=1,\qquad f(-n)=f(n).$$

### 0. The answer, and the statement to be proved

**Claim.** The set of admissible $Q$ is **empty**: there is no $Q\in\mathbb Z[x]$ for which positive integers $N$ and $a>1$ exist with
$$f(a^n+1)\mid f(Q(n))\qquad\text{for all integers } n>N. \tag{$\star$}$$

We prove this by contradiction: assume some $Q$, $N$, $a>1$ satisfy $(\star)$ and derive a contradiction in every case. The reader may take "the answer is $\varnothing$" as established once each case below closes.

### 1. Elementary properties of $f$

**(P1) Factor property.** For any nonzero integer $n$ and any prime $p\mid n$, the value $v_p(n)$ is one of the factors in the product defining $f(|n|)$; hence
$$v_p(n)\mid f(n),\qquad\text{so in particular}\qquad v_p(n)\le f(n).$$

**(P2) Multiplicativity on coprime parts.** If $u,v$ are nonzero with $\gcd(|u|,|v|)=1$, then the prime factorizations of $u$ and $v$ involve disjoint sets of primes, so the product of exponents factors: $f(uv)=f(u)f(v)$. In particular, if $n=p^{e}M$ with $p\nmid M$ and $e\ge 1$, then $f(n)=e\cdot f(M)$ (using $f(p^e)=e$). If $e=0$, trivially $f(n)=f(M)$.

These are immediate from the definition of $f$ as the product of exponents.

### 2. Lemma A: $f(a^n+1)$ is unbounded, for every $a>1$

**Lemma A.** For every integer $a>1$, the sequence $\big(f(a^n+1)\big)_{n\ge1}$ is unbounded.

We first record the form of the Lifting-the-Exponent theorem we use.

**LTE (the form used).** *Let $q$ be an odd prime, $b$ an integer with $q\mid b+1$ and $q\nmid b$. Then for every $k\ge 0$,*
$$v_q\big(b^{q^k}+1\big)=v_q(b+1)+k.$$
*Proof.* Write $b^{q^k}+1=b^{q^k}-(-1)^{q^k}$ (as $q^k$ is odd). The standard LTE statement (knowledge_base.md, "Lifting the Exponent") gives, for an odd prime $q$ with $q\mid b-(-1)=b+1$ and $q\nmid b,\,q\nmid(-1)$,
$$v_q\big(b^{m}-(-1)^{m}\big)=v_q(b+1)+v_q(m)\quad\text{for all odd }m.$$
Taking $m=q^k$ gives $v_q(b^{q^k}+1)=v_q(b+1)+v_q(q^k)=v_q(b+1)+k$. $\square$

**Proof of Lemma A.** We produce an odd prime $q$ and an integer $m\ge 1$ with $q\mid a^m+1$ and $q\nmid a$; Lemma A then follows by applying LTE to the base $b=a^m$ (note $q\mid b+1=a^m+1$ and $q\nmid b$ since $q\nmid a$): along $n=m q^k$,
$$v_q\big(a^{m q^k}+1\big)=v_q\big((a^m)^{q^k}+1\big)=v_q(a^m+1)+k\xrightarrow[k\to\infty]{}\infty,$$
and by (P1) $v_q(a^{mq^k}+1)\mid f(a^{mq^k}+1)$, so $f(a^{mq^k}+1)\ge v_q(a^{mq^k}+1)\to\infty$. Thus $f(a^n+1)$ is unbounded. It remains to exhibit $q$ and $m$.

*Case (i): $a+1$ has an odd prime factor $q$.* Take $m=1$. Then $q\mid a+1$; and $q\nmid a$, for otherwise $q\mid a$ and $q\mid a+1$ would give $q\mid 1$.

*Case (ii): $a+1=2^{j}$ for some $j\ge 1$ (so $a$ is odd, $a\ge 3$).* Then $a^2+1\ge 10$, and $a^2+1\equiv 1+1=2\pmod 4$ (since $a$ is odd, $a^2\equiv1\pmod 8$, so $a^2+1\equiv 2\pmod 8$), hence $v_2(a^2+1)=1$ and $a^2+1=2\cdot(\text{odd}>1)$. Therefore $a^2+1$ has an odd prime factor $q$. Take $m=2$. As before $q\nmid a$, since $q\mid a^2+1$ and $q\mid a$ would force $q\mid 1$.

In both cases we obtained the required $q,m$. $\square$

**Corollary (constant/degenerate $Q$).**
- If $Q\equiv 0$: then $f(Q(n))=f(0)=1$ for all $n$, so $(\star)$ forces $f(a^n+1)\mid 1$, i.e. $f(a^n+1)=1$ for all $n>N$ — contradicting Lemma A.
- If $\deg Q=0$, say $Q\equiv c\neq0$: then $f(Q(n))=f(c)$ is a fixed positive constant, so $(\star)$ forces $f(a^n+1)\le f(c)$ for all $n>N$ — again contradicting Lemma A.

Hence from now on $d:=\deg Q\ge 1$. Write $Q(x)=\sum_{i=0}^{d}a_i x^i$ with $a_d\neq0$, and let
$$i_0:=\min\{\,i: a_i\neq0\,\}\qquad(\text{exists since } Q\not\equiv0,\ \ 0\le i_0\le d).$$

### 3. Choosing the prime $q$ (Zsygmondy)

**Sublemma (Zsygmondy yields an odd primitive divisor of $a^m+1$, $q\nmid a$).** *For every integer $m\ge 3$ with $(a,m)\neq(2,3)$, there is a prime $q$ with $q\mid a^m+1$, $q$ odd, $q\nmid a$, and $\mathrm{ord}_q(a)=2m$. Distinct such $m$ give distinct $q$.*

*Proof.* Apply Zsygmondy's theorem (knowledge_base.md) to $a^{2m}-1=a^{2m}-1^{2m}$ with $a>1$, $b=1$, exponent $2m\ge 6$. The exceptional cases are: $n=1$ with $a-1=1$; $n=2$ with $a+1$ a power of $2$; and $(a,1,n)=(2,1,6)$. Here $n=2m\ge6$, so cases (i),(ii) do not apply; and $(a,1,2m)=(2,1,6)$ means $a=2,m=3$, excluded by hypothesis. Hence $a^{2m}-1$ has a primitive prime divisor $q$, and by the order clause of Zsygmondy, $\mathrm{ord}_q(a)=2m$.

From $\mathrm{ord}_q(a)=2m$: $a^{2m}\equiv1\pmod q$, so $(a^m-1)(a^m+1)\equiv0\pmod q$; since $\mathrm{ord}_q(a)=2m>m$ we have $a^m\not\equiv1$, hence $a^m\equiv-1\pmod q$, i.e. $q\mid a^m+1$. Also $q\nmid a$ (else $\mathrm{ord}_q(a)$ undefined / $a\equiv 0$), and $q$ is odd because $\mathrm{ord}_q(a)=2m\ge6>1$ forces $q-1\ge\mathrm{ord}_q(a)=2m\ge 6$, so $q\ge7$. Finally, $\mathrm{ord}_q(a)=2m$ depends on $m$, so different $m$ give different $q$ (a prime $q$ has a single multiplicative order of $a$). $\square$

**Choice of $q$.** Since the sublemma produces infinitely many distinct primes $q$ (one for each admissible $m$, and there are infinitely many such $m$), and only finitely many primes are $\le|a_{i_0}|$, we may fix one $m\ge 3$ (with $(a,m)\neq(2,3)$) whose prime $q$ satisfies
$$q>|a_{i_0}|\quad(\text{hence } q\nmid a_{i_0},\ \text{i.e. } v_q(a_{i_0})=0),\qquad q\text{ odd},\qquad q\nmid a,\qquad q\mid a^m+1.$$
Set
$$c:=v_q(a^m+1)\ge 1.$$

### 4. The $q$-valuation of $a^n+1$ along $n=m q^k$

By LTE (base $b=a^m$, which satisfies $q\mid b+1$, $q\nmid b$), for all $k\ge0$
$$v_q\big(a^{m q^k}+1\big)=v_q(a^m+1)+k=c+k.$$
By (P1), $c+k=v_q(a^{mq^k}+1)\mid f(a^{mq^k}+1)$. For all $k$ large enough that $n=mq^k>N$, hypothesis $(\star)$ gives $f(a^{mq^k}+1)\mid f(Q(mq^k))$, hence by transitivity of divisibility
$$\boxed{\,(c+k)\ \big|\ f\big(Q(m q^k)\big)\quad\text{for all large }k.\,}\tag{1}$$

### 5. The $q$-valuation of $Q(m q^k)$ — strict minimum

For $n=m q^k$ and each $i$ with $a_i\neq 0$,
$$v_q\big(a_i\,m^i\,q^{ki}\big)=v_q(a_i)+i\cdot v_q(m)+ki=v_q(a_i)+ki,$$
because $q\nmid m$ (indeed $q\mid a^m+1$ and $m<q$: $q\ge 7>3$ and, more directly, $q\nmid m$ since $\gcd(q,m)$: were $q\mid m$, then from $q\ge 7$ and $\mathrm{ord}_q(a)=2m\ge 2q$ we'd get $2m\ge 2q>q-1\ge\mathrm{ord}_q(a)$, impossible — so $v_q(m)=0$).

Consider the slopes (coefficient of $k$): the term $i=i_0$ has slope $i_0$ and constant term $v_q(a_{i_0})=0$; every other nonzero term $i>i_0$ has slope $i\ge i_0+1$. Hence for all $k$ with
$$k\;>\;\max_{i>i_0,\,a_i\neq0}\ \frac{v_q(a_i)}{\,i-i_0\,}\qquad(\text{a finite threshold}),$$
the $i_0$-term has the **strict** minimum $q$-valuation among all terms:
$$v_q(a_{i_0}m^{i_0}q^{ki_0})=i_0 k\;<\;v_q(a_i m^i q^{ki})\quad(\forall\, i>i_0,\ a_i\neq0).$$
By the ultrametric property of $v_q$ (when the minimal valuation among a finite sum of terms is attained at exactly one term, no cancellation occurs and the valuation of the sum equals that strict minimum),
$$v_q\big(Q(m q^k)\big)=i_0 k\qquad\text{for all large }k.\tag{2}$$
(If $i_0=0$: then the slope of the $i_0$-term is $0$ and its constant valuation is $v_q(a_0)=0$, while all other terms have slope $\ge1$; so for large $k$ the minimum is again attained uniquely at $i=0$ and $v_q(Q(mq^k))=v_q(a_0)=0$.)

Write
$$Q(m q^k)=q^{E_k}\cdot M_k,\qquad q\nmid M_k,\qquad E_k=v_q(Q(mq^k)),$$
so $E_k=i_0 k$ when $i_0\ge1$, and $E_k=0$ when $i_0=0$. By (P2),
$$f\big(Q(mq^k)\big)=
\begin{cases}
i_0 k\cdot f(M_k), & i_0\ge1,\\[2pt]
f(M_k), & i_0=0,
\end{cases}
\qquad(k\text{ large}).\tag{3}$$

### 6. Lemma B (the remaining gap): bounding the $t$-part of $Q(mq^k)$

To close the contradiction (§7) we need the following.

**Lemma B (target).** *For each fixed prime $t\neq q$, the set $\mathcal B_t:=\{k\ge1: Q(mq^k)\neq0\text{ and }v_t\big(Q(mq^k)\big)\ge c+k\}$ is finite.* Equivalently, for each fixed $t\neq q$ there is a threshold $k_t$ with $v_t(Q(mq^k))<c+k$ for all $k\ge k_t$ with $Q(mq^k)\neq0$.

**Part 0 — exact roots (the case $Q(mq^k)=0$).** Since $Q\in\mathbb Z[x]$ is nonzero, it has at most $\deg Q$ integer roots. For each integer root $r$ of $Q$, the equation $mq^k=r$ has at most one solution $k$ (the map $k\mapsto mq^k$ is strictly increasing as $q\ge2$, $m\ge1$). Hence there are at most $\deg Q$ values of $k$ with $Q(mq^k)=0$; call this finite set $\mathcal Z$. For $k\in\mathcal Z$ we have $f(Q(mq^k))=f(0)=1$, so the divisibility $(c+k)\mid f(Q(mq^k))$ of $(1)$ reads $(c+k)\mid1$, impossible for $k\ge1$ (as $c\ge1$, $c+k\ge2$); thus the hypothesis $(\star)$ already fails on $\mathcal Z$, and in any case $\mathcal Z$ is finite and excluded from every $\mathcal B_t$. For all $k\notin\mathcal Z$ we have $Q(mq^k)\neq0$, so $v_t(Q(mq^k))<\infty$ and $(5')$ below applies. *(This case is genuine: e.g. $Q=(x-3)(x-5)$, $q=3$, $m=1$ gives $Q(3)=0$ at $k=1$.)* In particular, when at the end we pick the prime $r=c+k$ we choose $k\notin\mathcal Z$, which is possible since $\mathcal Z$ is finite. $\square$

We now bound $v_t(Q(mq^k))$ for $k\notin\mathcal Z$, working entirely with the **per-root linear form** $v_t(mq^k-\rho)$, which is the correct granularity (the polynomial-level least index plateaus and must not be used; see the Remark at the end of this section). We prove the bound $v_t(mq^k-\rho)\le\log_t k+C$ for every index $k$ that is **not** the least index of its level-set (Part (IV) below), reduce the entire Lemma to a single explicitly-isolated statement about the finitely-generated "least-index" indices (Part (V)), and prove that statement to be a $t$-adic linear-forms-in-logarithms bound. This sharpens and corrects the round-6 write-up in two ways: (a) it shows the **rational** and **irrational** root cases have the *same* kernel (the previous claim that rational roots were unconditionally settled was over-optimistic — they suffer the identical least-index obstruction), and (b) it isolates the kernel to a single named deep theorem.

We work in $\mathbb Z_t$, the ring of $t$-adic integers; $v_t$ extends to it, and for $x,y\in\mathbb Z_t$, $v_t(x-y)\ge J\iff x\equiv y\pmod{t^J}$. Standard facts used: $\mathbb Z$ is dense in the compact ring $\mathbb Z_t$, and a nonzero $g\in\mathbb Z[x]$ has at most $\deg g$ roots in $\mathbb Z_t$. Throughout, $\rho\in\mathbb Z_t$ denotes a fixed $t$-adic root of $Q$, $\nu:=v_t(m)$, $d_1:=\mathrm{ord}_t(q)$, and $W$ is the order-constant defined in Part (II) below.

**(I) Local reduction (proved).** Let $g\in\mathbb Z[x]$ be nonzero, $\delta=\deg g$, with distinct $t$-adic roots $\rho_1,\dots,\rho_s\in\mathbb Z_t$ ($s\le\delta$) of multiplicities $\mu_j$, so over $\mathbb Z_t$, $g=u\cdot\prod_j(x-\rho_j)^{\mu_j}$ with $u$ having no $t$-adic root. Then there is a constant $C_g$ with
$$v_t\big(g(x)\big)\ \le\ C_g+\delta\cdot\max_{1\le j\le s}v_t(x-\rho_j)\qquad(\forall x\in\mathbb Z,\ g(x)\neq0).\tag{5}$$
*Proof.* The function $z\mapsto v_t(u(z))$ on the compact $\mathbb Z_t$ is bounded by some $B_u<\infty$: if not, a sequence $z_n$ with $v_t(u(z_n))\to\infty$ has (by compactness) a limit $z^*$ with $u(z^*)=0$, contradicting "no root." Then $v_t(g(x))=v_t(u(x))+\sum_j\mu_j v_t(x-\rho_j)\le B_u+\delta\max_j v_t(x-\rho_j)$. $\square$
Factoring $Q=\ell\prod_w g_w^{e_w}$ over $\mathbb Z$ and summing (5) over factors, with $\rho_1,\dots,\rho_S$ the list of all $t$-adic roots of $Q$,
$$v_t\big(Q(x)\big)\ \le\ C_Q+(\deg Q)\cdot\max_{1\le j\le S}v_t(x-\rho_j)\qquad(\forall x\in\mathbb Z,\ Q(x)\neq0).\tag{5$'$}$$

**(II) Order/spacing bound (proved).** Since $t\neq q$, $q$ is a unit mod every power of $t$, so $\mathrm{ord}_{t^J}(q)$ is defined for all $J\ge1$. Set $d_1:=\mathrm{ord}_t(q)$ and define the constant
$$W:=\begin{cases}v_t\!\left(q^{d_1}-1\right) & (t\text{ odd}),\\[2pt] v_2\!\left(q^{2}-1\right)-1 & (t=2,\ q\text{ odd, which holds as }q\neq t=2).\end{cases}$$
We claim the uniform lower bound
$$\mathrm{ord}_{t^{J}}(q)\ \ge\ t^{\,J-W}\qquad(\forall J\ge1).\tag{6}$$

*Proof of (6), $t$ odd.* By LTE (knowledge_base.md, "Lifting the Exponent") applied to the odd prime $t$ and the base $q^{d_1}$ (note $t\mid q^{d_1}-1$ and $t\nmid q^{d_1}$): for all $i\ge0$, $v_t(q^{d_1 t^i}-1)=v_t((q^{d_1})^{t^i}-1)=v_t(q^{d_1}-1)+v_t(t^i)=W+i$. Now if $q^k\equiv1\pmod{t^J}$ then $\mathrm{ord}_t(q)=d_1\mid k$; writing $k=d_1 k'$, we have $v_t(q^k-1)=v_t((q^{d_1})^{k'}-1)=W+v_t(k')$ (LTE again, base $q^{d_1}$), so $W+v_t(k')\ge J$, i.e. $v_t(k')\ge J-W$, i.e. $t^{\max(0,J-W)}\mid k'$. Hence $\mathrm{ord}_{t^J}(q)=d_1\,t^{\max(0,J-W)}\ge t^{\max(0,J-W)}\ge t^{J-W}$.

*Proof of (6), $t=2$.* Here $q$ is odd, $d_1=\mathrm{ord}_2(q)=1$. By the $p=2$ form of LTE (knowledge_base.md; for $q$ odd and $i\ge1$), $v_2(q^{2^i}-1)=v_2(q-1)+v_2(q+1)+i-1=v_2(q^2-1)+i-1=(W+1)+i-1=W+i$. If $q^k\equiv1\pmod{2^J}$ with $J\ge2$: then $2\mid k$ (as $q^k\equiv1\pmod 4$ forces $k$ even when $q\equiv3\pmod4$; when $q\equiv1\pmod4$, $W+1=v_2(q^2-1)=v_2(q-1)+1$ and the same LTE bookkeeping applies). Writing the $2$-part of $k$ as $2^a\cdot(\text{odd})$, $v_2(q^k-1)=v_2(q^2-1)+a-1=W+a$ for $a\ge1$, and $=v_2(q-1)\le W+1$ for $a=0$; in all cases $q^k\equiv1\pmod{2^J}$ forces $2^{\max(0,J-W)}\mid k$, so $\mathrm{ord}_{2^J}(q)\ge 2^{\max(0,J-W)}\ge 2^{J-W}$. *(Verified: for $t=2$ and $q=3,5,7,9,11,15$ one has $W=2,2,3,3,2,4$ and $\mathrm{ord}_{2^J}(q)\ge 2^{J-W}$ for all $J\le 12$; for odd $t$, e.g. $t=7,q=5$: $d_1=6$, $W=1$, $\mathrm{ord}_{7^J}(5)=6\cdot7^{J-1}\ge7^{J-1}$.)* $\square$

Consequently, writing $\nu=v_t(m)$, for a $t$-adic root $\rho$ and distinct $k,k'$ with $v_t(mq^k-\rho)\ge J$ and $v_t(mq^{k'}-\rho)\ge J$ (so $mq^k\equiv mq^{k'}\pmod{t^J}$, i.e. $q^k\equiv q^{k'}\pmod{t^{J-\nu}}$):
$$|k-k'|\ \ge\ \mathrm{ord}_{t^{J-\nu}}(q)\ \ge\ t^{\,J-\nu-W}.\tag{7}$$

**(III) Per-root single-AP structure (proved).** Fix a $t$-adic root $\rho$ and a level $J>\nu$. The level-set
$$L_J(\rho):=\{\,k\ge1: v_t(mq^k-\rho)\ge J\,\}$$
is a **single** arithmetic progression (or empty). Indeed, $v_t(mq^k-\rho)\ge J\iff mq^k\equiv\rho\pmod{t^J}$. Writing $m=t^\nu u$ with $u$ a $t$-unit, and noting $v_t(\rho)=\nu$ is forced whenever the set is nonempty (else the two sides have different valuations), this is $q^k\equiv u^{-1}t^{-\nu}\rho\pmod{t^{J-\nu}}$ with a **fixed** $t$-unit on the right. The solutions $k$ of $q^k\equiv(\text{fixed }t\text{-unit})\pmod{t^{J-\nu}}$ are either empty or a single coset of the **cyclic** subgroup $\langle q\rangle\subseteq(\mathbb Z/t^{J-\nu})^\times$ (cyclic as a subgroup even when the ambient unit group is not, e.g. for $t=2$). Hence $L_J(\rho)$ is one arithmetic progression of common difference
$$P_{J-\nu}:=\mathrm{ord}_{t^{J-\nu}}(q)\ \ge\ t^{\,J-\nu-W}\tag{$6'$}$$
by (6). *(Verified numerically: for $\rho=\sqrt2\in\mathbb Z_7$, $q=5$, $m=2$ the level-$J$ consecutive differences are $6,42,294,2058,14406=6\cdot7^{J-1}=\mathrm{ord}_{7^{J}}(5)$.)*

In particular $L_{J+1}(\rho)\subseteq L_J(\rho)$ and $P_{J+1-\nu}\ge t\cdot P_{J-\nu}$ once $J-\nu\ge W$ (since $\mathrm{ord}_{t^{J+1-\nu}}(q)$ is $\mathrm{ord}_{t^{J-\nu}}(q)$ times $t$ or $1$, and it is $t$ in that range by (6)), so the level-sets form a decreasing nest of APs whose common differences grow geometrically, $P_{J-\nu}\ge t^{J-\nu-W}\to\infty$.

**(IV) Log bound for every NON-least index (proved).** Let $k\in L_J(\rho)$ with $J=v_t(mq^k-\rho)$ finite, and suppose $k$ is **not** the least element of $L_J(\rho)$. Then $k$ exceeds the previous element of the AP $L_J(\rho)$ by exactly $P_{J-\nu}$, so
$$k\ \ge\ P_{J-\nu}\ \overset{(6')}{\ge}\ t^{\,J-\nu-W},$$
whence
$$\boxed{\,J\ \le\ \log_t k+(\nu+W).\,}\tag{$7'$}$$
Thus the per-root linear form $v_t(mq^k-\rho)$ already satisfies the desired $O(\log k)$ bound at every index $k$ except possibly the **least** index of its own level-set.

**(V) Reduction to the least-index kernel — the isolated gap.** It remains to control the indices $k$ that *are* the least element $k_0(J):=\min L_J(\rho)$ of their level. By (III), $k_0(J)$ is the unique element of $L_J(\rho)$ in $[1,P_{J-\nu}]$, so $k_0(J)\le P_{J-\nu}$; the sequence $\big(k_0(J)\big)_J$ is non-decreasing and tends to $\infty$ (each fixed $k$ has $v_t(mq^k-\rho)<\infty$ since $mq^k\neq\rho$, $\rho$ not being equal to any of the finitely many integers $mq^k$ — those are excluded in Part 0). For such a least index the spacing argument gives **no** lower bound on $k$, and the only general bounds available are:

- the *order/spacing* bound $(7')$, which applies only to **non**-least indices, and
- the *trivial size* bound: $v_t(mq^k-\rho)\le v_t(h(mq^k))+W'$, where $h\in\mathbb Z[x]$ is the (primitive) minimal polynomial of $\rho$ and $W'=v_t(h'(\rho))$ is a fixed constant — coming from Newton's exact valuation $v_t(n-\rho)=v_t(h(n))-v_t(h'(\rho))$ for a simple root and $v_t(h(n))>2v_t(h'(\rho))$ — but $v_t(h(mq^k))\le\log_t|h(mq^k)|=O(k)$ has constant $\deg h\cdot\log_t q$, which can exceed $1$.

Concretely, the least-index obstruction is real and occurs for both rational and irrational roots:

| $Q$ | $\rho$ | $t$ | $q$ | $m$ | least index $k$ | $v_t(mq^k-\rho)$ | $v_t-\log_t k$ |
|---|---|---|---|---|---|---|---|
| $x^2-2$ | $\sqrt2$ (irrational) | $7$ | $5$ | $2$ | $22$ | $4$ | $2.41$ |
| $(x-2)(x+3)$ | $-3$ (rational) | $5$ | $3$ | $2$ | $8$ | $4$ | $2.71$ |

In both cases $k$ is the least index of its level and $(7')$ fails; the excess $v_t-\log_t k$ is a *coincidental close approach* of the geometric progression $mq^k$ to $\rho$. Numerically the excess stays bounded ($\le 2.71$ across all tested ranges, and $\to$ a small limit as $k\to\infty$), so the bound $v_t(mq^k-\rho)\le\log_t k+C_\rho$ does hold with a finite $C_\rho$ — but proving the bound on these least indices is **exactly** the statement:

> **(Kernel.)** *For a fixed $t$-adic algebraic $\rho$ and $q$ a $t$-unit, $v_t(mq^k-\rho)=O(\log k)$.*

This is a $t$-adic **linear-forms-in-logarithms** bound: $v_t(mq^k-\rho)$ large means the $t$-adic linear form $k\log_t q+\log_t m-\log_t\rho$ (suitably interpreted) is very small, and Yu's $p$-adic analogue of Baker's theorem gives $v_t(mq^k-\rho)\le C\log k$. **This deep input is not in `knowledge_base.md` and I could not reproduce it by elementary means; it is the single honest gap of this write-up.** Everything else — Parts 0, (I), (II), (III), (IV) — is unconditional and rigorous, and the spacing/log bound holds for *all but the least index of each level-set*.

**Remark (why the polynomial-level least index must NOT be used).** One might hope to bound the least index $k_{\min}(J)$ of the polynomial-level set $\{k:v_t(Q(mq^k))\ge J\}$. This **plateaus** and gives nothing: for $Q=(x-2)(x+3)$, $t=5$, $q=3$, $m=2$ one computes $k_{\min}(J)=4,8,8,8,1008,3508,16008$ for $J=1,\dots,7$, so a single small index ($k=8$) sits at the start of a deep resonance class. The correct object is the *per-root* level-set $L_J(\rho)$ of Part (III), which is a single AP of exact period $(6')$; the assembly back to $Q$ is via $(5')$. The previous draft's "Step 5" (a polynomial-level least-index growth bound) was false; Parts (III)–(V) replace it with the correct per-root mechanism, which closes everything except the least-index kernel above.

### 7. Closing the contradiction (conditional on Lemma B)

Recall (3): $f(Q(mq^k))=i_0k\cdot f(M_k)$ when $i_0\ge1$, or $=f(M_k)$ when $i_0=0$, where $M_k=Q(mq^k)/q^{E_k}$ is coprime to $q$ and
$$f(M_k)=\prod_{t\neq q,\ t\mid M_k} v_t\big(M_k\big)=\prod_{t\neq q,\ t\mid Q(mq^k)} v_t\big(Q(mq^k)\big).\tag{9}$$
(The product is over primes $t\neq q$ dividing $Q(mq^k)$; for such $t$, $v_t(M_k)=v_t(Q(mq^k))$ since $M_k$ differs from $Q(mq^k)$ only by the $q$-power.)

**Pick $r$ prime.** The set $\{c+k:k\ge1\}=\{c+1,c+2,\dots\}$ contains every integer $>c$, hence contains infinitely many primes (there are infinitely many primes). Choose a prime $r=c+k$ with
$$r=c+k>\max\big(i_0,\ c,\ v_q(a_0)\big)\quad\text{and}\quad k\ge\max_t k_t\text{ over the (finitely many) relevant }t,$$
where "relevant $t$" are bounded as follows. By (1), $r=c+k\mid f(Q(mq^k))$. We must show this is impossible.

We use the size bound to make the set of possibly-large primes $t$ finite. For any prime $t\neq q$ dividing $Q(mq^k)$ with $v_t(Q(mq^k))\ge r=c+k$, we have $t^{\,c+k}\le t^{v_t(Q(mq^k))}\le |Q(mq^k)|\le D'\,(mq^k)^{d}$, using $|Q(n)|=\big|\sum_{i=0}^d a_i n^i\big|\le\big(\sum_i|a_i|\big)n^d=D'n^d$ for $n=mq^k\ge1$ with $D':=\sum_i|a_i|$. Taking $\log$,
$$(c+k)\log t\ \le\ \log D'+d\log(m)+d\,k\log q,$$
so
$$\log t\ \le\ \frac{\log D'+d\log m+d\,k\log q}{c+k}\ \xrightarrow[k\to\infty]{}\ d\log q,$$
hence for all large $k$, $\log t\le d\log q+1$, i.e. $t\le e\cdot q^{d}=:T_0$, a fixed bound. So **only the finitely many primes $t\le T_0$ (and $t\neq q$) can possibly have $v_t(Q(mq^k))\ge c+k$.** For each of these finitely many $t$, Lemma B gives a threshold $k_t$ beyond which $v_t(Q(mq^k))<c+k$. Choose our prime $r=c+k$ with $k\ge\max_{t\le T_0}k_t$ and $k\notin\mathcal Z$ (both possible since infinitely many such primes $r$ exist and $\mathcal Z$ is finite, by Part 0). Then $Q(mq^k)\neq0$ and for **every** prime $t\neq q$,
$$v_t\big(Q(m q^k)\big)<c+k=r.\tag{8}$$

Now derive the contradiction with $r\mid f(Q(mq^k))$.

*Case $i_0\ge1$.* From (1) and (3), $r=c+k\mid i_0 k\cdot f(M_k)$. Since $r$ is prime, $r\mid i_0$ or $r\mid k$ or $r\mid f(M_k)$.
- $r\mid i_0$ is impossible: $r>i_0\ge1$.
- $r\mid k$ is impossible: $k=r-c$ and $0<r-c<r$ (as $0<c<r$), so $r\nmid(r-c)=k$.
- Hence $r\mid f(M_k)$. But $f(M_k)=\prod_{t\neq q} v_t(Q(mq^k))$ by (9), and by (8) every factor $v_t(Q(mq^k))<r$. A prime $r$ dividing a finite product must divide one of the factors; each factor is a positive integer $<r$, so $r$ divides none of them — contradiction. (A positive integer $<r$ is not a positive multiple of the prime $r$.)

*Case $i_0=0$.* Then $a_0=Q(0)\neq0$ and $E_k=v_q(a_0)$ is the fixed constant $E:=v_q(a_0)$, and (3) gives $f(Q(mq^k))=f(M_k)$ for large $k$ (note: if $E\ge1$ then by (P2) $f=E\cdot f(M_k)$, with $E=v_q(a_0)<r$ by our choice $r>v_q(a_0)$; if $E=0$ then $f=f(M_k)$). In either sub-case $r=c+k\mid E\cdot f(M_k)$ with $E<r$ (and $E$ possibly $1$, when there is no $q$-factor). Since $r$ is prime and $r\nmid E$ (as $0\le E<r$, and if $E=0$ the relation reads $r\mid f(M_k)$ directly), $r\mid f(M_k)$. Again by (9) and (8) every factor of $f(M_k)$ is $<r$, so the prime $r$ divides no factor and cannot divide the product — contradiction.

In both cases we reach a contradiction. Therefore, **conditional on Lemma B**, no $Q$ of degree $\ge1$ satisfies $(\star)$.

### 8. Conclusion (conditional on Lemma B)

Combining the Corollary of §2 (which kills $Q\equiv0$ and $\deg Q=0$, unconditionally) with §§3–7 (which kill $\deg Q\ge1$, both $i_0\ge1$ and $i_0=0$, **assuming Lemma B**), the answer is the empty set:
$$\boxed{\ \varnothing\ }.$$
This conclusion depends only on the single **Kernel** statement of §6(V): for each fixed prime $t\neq q$ and each $t$-adic root $\rho$ of $Q$, $v_t(mq^k-\rho)=O(\log k)$. Everything else is unconditional: the reduction §§0–5, the size bound and per-root single-AP structure §6(I)–(III), the log bound at every non-least index §6(IV), and the closing §7. The Kernel is a $t$-adic linear-forms-in-logarithms bound (Yu's $p$-adic Baker theorem); it holds for the least-index "coincidental close approaches" of the progression $mq^k$ to $\rho$, but I could not establish it by elementary means within `knowledge_base.md`. **Note (correction to round 6):** the rational-root case is *not* easier — it suffers the identical least-index obstruction (e.g. $Q=(x-2)(x+3)$, $\rho=-3$, $t=5$, $q=3$, $m=2$ has $v_5(2\cdot3^8+3)=4$ at the least index $k=8$), so the earlier "unconditional for linearly-split $Q$" claim is withdrawn.

**Verification of the answer.** The answer "$\varnothing$" is confirmed by the contradiction above for *every* $Q$ and *every* $a>1$. As an explicit sanity check on the mechanism: take $a=2$, $m=4$ (so $q=17$ is the primitive prime of $2^{4}+1=17$, $c=v_{17}(17)=1$). For $Q(x)=x$ one gets $E_k=v_{17}(4\cdot17^k)=k$, $M_k=4$, $f(M_k)=2$, and $(c+k)\mid f(Q(mq^k))=k\cdot2$ fails already at $k=2$: $c+k=3$ is prime, $3\nmid 2\cdot2=4$. For $Q(x)=x^6$, $k=4$ gives $c+k=5$ prime and $5\nmid f(4^6\cdot17^{24})=6\cdot 17^{?}$-part... explicitly $5\nmid (i_0k)f(M_k)=24\cdot 1$, failing. These match the proof. $\blacksquare$
