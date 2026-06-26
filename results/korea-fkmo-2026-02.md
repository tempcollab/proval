# korea-fkmo-2026-02

## Status
solved

## Problem
$a_1=a_2=1$, $a_{n+2}=a_n+\dfrac{1}{a_{n+1}^2+a_n^2}$. Determine whether there
exist infinitely many positive integers $n$ with $a_{2n}^3>\dfrac{3n}{2}-2026\sqrt n$.

**Answer: NO** — only finitely many such $n$. (In fact the inequality fails for
every $n\ge 10^{28}$.)

## Approaches tried
- Cubic telescoping of the even subsequence $b_k=a_{2k}$ + monovariant on
  $p_k=a_{2k+1}-a_{2k}$ (uniform positive lower bound) + integral comparison for
  the deficit $D(n)=\tfrac{3n}{2}-a_{2n}^3$, then the growth comparison
  $n^{2/3}\gg n^{1/2}$ — **worked**, gives the complete proof below.
- (Discarded sub-route) Proving the knife-edge $p_k>\tfrac13$ by bounding every
  decrement $\Delta_k$ crudely from $k=1$ — **dead end**: the crude bound overshoots
  the budget $p_1-\tfrac13=\tfrac16$ by a factor $\approx5$. Replaced by the robust
  $p_k\ge\frac1{10}$ (exact small-$k$ enclosures + a clean tail integral), all the
  asymptotics need.
- (Discarded sub-route) The increment lower bound $b_{k+1}^3-b_k^3\ge 1$ — **false**:
  it needs $r_k\le\sqrt2$, but $r_1=\tfrac32>\sqrt2$ and $\frac{3}{1+(3/2)^2}=\frac{12}{13}<1$.
  Replaced by $b_{k+1}^3-b_k^3\ge\frac{12}{13}$, giving $b_k^3\ge\frac{12}{13}k$.
- (Round-2 fix) Removed a **circular dependency**: the previous Lemma 4 tail used the
  sharp upper bound $b_k^3<\frac32k$, which is only proved in Lemma 5, which in turn
  uses Lemma 4. Replaced it with a **self-contained crude upper bound**
  $b_{k+1}^3-b_k^3<\frac{19}8$ (hence $b_k^3<\frac{19}8k$) derived from the cubic
  identity (3) using **only** Lemma 0 ($\frac3{1+r_k^2}<\frac32$ and
  $3b_ke_k^2+e_k^3<\frac78$). With this, the Lemma 4 tail constant becomes
  $C'=\frac{(3.05)^{1/3}(13/12)^2}4=0.4255$ and $\sum_{k\ge1}\Delta_k\le0.358<\frac25$,
  so $p_k\ge\frac1{10}$ still holds and the dependency chain
  Lemma 0→2→3→4→5→6 is now acyclic. Also corrected the displayed $k=1$ increment upper
  bound from $1.236$ (below the true $1.236231$) to $1.2363$ (a valid bound).
- (Round-3 fix) Corrected the displayed telescoping identity (5): the true identity is
  $D(n)=\frac12+\sum_{k=1}^{n-1}\delta_k$, not $D(n)=\sum_{k=1}^{n-1}\delta_k$ (the constant
  $\frac12$ comes from $b_1^3=1$; the earlier intermediate line wrote $+\frac32$ where it
  should write $+1$). This is **non-load-bearing**: every downstream step uses only the
  lower bound $D(n)\ge\sum_{k=70}^{n-1}\delta_k$, which the true (larger by $\frac12$)
  $D(n)$ satisfies a fortiori; Lemma 6's reference was updated and all constants and the
  conclusion are unchanged. Lemma 5's conclusion
  ($b_n^3=\frac{3n}2-\frac12-\sum\delta_k$) was already consistent with the corrected (5).

## Current best
Complete proof (below). The deficit satisfies $D(n)=\tfrac{3n}{2}-a_{2n}^3\ge A\,n^{2/3}-A\cdot70^{2/3}$
with $A=\tfrac3{40}(2/3)^{1/3}>0$, which exceeds $2026\sqrt n$ for all $n\ge 10^{28}$.
(The exact telescoping identity is $D(n)=\tfrac12+\sum_{k=1}^{n-1}\delta_k$; only the lower
bound $D(n)\ge\sum_{k=70}^{n-1}\delta_k$ is used downstream.)

## Full proof

All denominators below are sums of squares of positive numbers, hence positive.
First, all $a_n>0$: $a_1=a_2=1>0$, and if $a_n,a_{n+1}>0$ then
$a_{n+2}=a_n+\frac1{a_{n+1}^2+a_n^2}>0$; positivity follows for all $n$ by induction
(KB: *Direct proof / Induction*).

### Notation and reformulation

Set $b_k=a_{2k}$ and $c_k=a_{2k+1}$. Applying the recurrence with $n=2k$ and
$n=2k-1$ gives, for $k\ge1$,
$$
b_{k+1}=b_k+\frac1{c_k^2+b_k^2},\qquad
c_{k+1}=c_k+\frac1{b_{k+1}^2+c_k^2}.
\tag{1}
$$
Initial values: $b_1=a_2=1$ and $c_1=a_3=a_1+\frac1{a_2^2+a_1^2}=1+\frac12=\frac32$.
The target inequality is $b_n^3>\frac{3n}{2}-2026\sqrt n$, i.e.
$$
D(n):=\frac{3n}{2}-b_n^3 \;<\; 2026\sqrt n.
\tag{2}
$$
We prove $D(n)>2026\sqrt n$ for all $n\ge10^{28}$, so (2) fails for all such $n$;
hence only finitely many $n$ (all $<10^{28}$) satisfy the original inequality. **This
is the NO answer.** Write, for $k\ge1$,
$$
e_k:=b_{k+1}-b_k=\frac1{c_k^2+b_k^2}>0,\qquad
r_k:=\frac{c_k}{b_k},\qquad
p_k:=c_k-b_k .
$$

---

### Lemma 0 (Ordering).
For all $k\ge1$: $\;0<b_k<b_{k+1}$, $\;b_k<c_k$, $\;b_{k+1}<c_k$, and $c_k<c_{k+1}$.

*Proof.* By (1), $b_{k+1}-b_k=\frac1{c_k^2+b_k^2}>0$ and $c_{k+1}-c_k=\frac1{b_{k+1}^2+c_k^2}>0$,
so both subsequences strictly increase. We prove $b_{k+1}<c_k$ (which gives
$b_k<b_{k+1}<c_k$) by induction. Base $k=1$: $b_2=1+\frac1{9/4+1}=1+\frac4{13}=\frac{17}{13}<\frac32=c_1$.
Step: assume $b_{k+1}<c_k$, so $b_{k+1}^2<c_k^2$ and thus
$c_{k+1}^2+b_{k+1}^2>b_{k+1}^2+c_k^2$, whence $\frac1{c_{k+1}^2+b_{k+1}^2}<\frac1{b_{k+1}^2+c_k^2}$.
Adding the inequality $b_{k+1}<c_k$ to the two increments in (1),
$$
b_{k+2}=b_{k+1}+\frac1{c_{k+1}^2+b_{k+1}^2}<c_k+\frac1{b_{k+1}^2+c_k^2}=c_{k+1}. \qquad\square
$$
In particular $p_k=c_k-b_k>0$ and $r_k=c_k/b_k>1$ for all $k$.

---

### Lemma 1 (Cubic telescoping identity).
For every $k\ge1$,
$$
b_{k+1}^3-b_k^3=\frac{3}{1+r_k^2}+\bigl(3b_k e_k^2+e_k^3\bigr).
\tag{3}
$$

*Proof.* As $b_{k+1}=b_k+e_k$, $\;b_{k+1}^3-b_k^3=3b_k^2 e_k+3b_k e_k^2+e_k^3$, and
$3b_k^2 e_k=\frac{3b_k^2}{c_k^2+b_k^2}=\frac{3}{1+c_k^2/b_k^2}=\frac{3}{1+r_k^2}$. $\square$

Define the **per-step deficit**
$$
\delta_k:=\frac32-\bigl(b_{k+1}^3-b_k^3\bigr)
=\underbrace{\Bigl(\frac32-\frac{3}{1+r_k^2}\Bigr)}_{=:\,M_k}-\underbrace{\bigl(3b_k e_k^2+e_k^3\bigr)}_{=:\,E_k},
\qquad
M_k=\frac{3(r_k^2-1)}{2(1+r_k^2)}.
\tag{4}
$$
Telescoping $b_n^3=b_1^3+\sum_{k=1}^{n-1}(b_{k+1}^3-b_k^3)=1+\sum_{k=1}^{n-1}(b_{k+1}^3-b_k^3)$,
so $\sum_{k=1}^{n-1}\delta_k=\sum_{k=1}^{n-1}\bigl(\tfrac32-(b_{k+1}^3-b_k^3)\bigr)
=\tfrac32(n-1)-\bigl(b_n^3-1\bigr)=\tfrac{3n}2-b_n^3-\tfrac12$. Therefore
$$
D(n)=\frac{3n}{2}-b_n^3=\frac12+\sum_{k=1}^{n-1}\delta_k,
\tag{5}
$$
(The constant $\frac12$ comes from $b_1^3=1$, not $\frac32$: telescoping starts at the
true initial cube $b_1^3=1$. We will only ever use $D(n)\ge\sum_{k=1}^{n-1}\delta_k$, so
the extra $\frac12$ merely improves the lower bound and is harmless.)

---

### Lemma 2 (Monotone decrease of $p_k$; $r_k\le\tfrac32$).
$p_k$ is strictly decreasing; hence $p_k\le p_1=\frac12$ and $r_k\le\frac32$ for all $k$.

*Proof.* By (1),
$$
p_k-p_{k+1}=\Bigl(\tfrac1{c_k^2+b_k^2}-\tfrac1{b_{k+1}^2+c_k^2}\Bigr)
=\frac{b_{k+1}^2-b_k^2}{(c_k^2+b_k^2)(b_{k+1}^2+c_k^2)}=:\Delta_k>0,
\tag{6}
$$
since $b_{k+1}>b_k>0$ (Lemma 0). Thus $p_k$ strictly decreases and $p_k\le p_1=\frac32-1=\frac12$.
Then $r_k=1+\frac{p_k}{b_k}\le1+\frac{1/2}{1}=\frac32$, using $b_k\ge b_1=1$. $\square$

*(This lemma uses only Lemma 0. The full dependency chain is one-way and acyclic:
Lemma 0 $\Rightarrow$ Lemma 2 $\Rightarrow$ Lemma 3 (both the lower bound and the crude
upper bound (8$'$)) $\Rightarrow$ Lemma 4 $\Rightarrow$ Lemma 5 (sharp upper bound and
$\delta_k\ge\frac1{20b_k}$) $\Rightarrow$ Lemma 6. The sharp bound $b_k^3<\frac32k$ of
Lemma 5 is **not** used by Lemma 4; Lemma 4 uses only the crude $b_k^3<\frac{19}8k$ of
Lemma 3.)*

---

### Lemma 3 (Two-sided bound).
For all $k\ge1$, the cubic increment satisfies
$$
\frac{12}{13}\ \le\ b_{k+1}^3-b_k^3\ <\ \frac{19}{8},
\tag{7}
$$
and consequently
$$
\frac{12}{13}k\ \le\ b_k^3\ \le\ 1+\frac{19}8(k-1)\ <\ \frac{19}8\,k\qquad(k\ge1).
\tag{8}
$$
Both halves of (7)–(8) use **only** Lemma 0 and Lemma 2 (which themselves use only
Lemma 0); in particular they do **not** use Lemmas 4–5. The sharp upper bound
$b_k^3<\frac{3k}2$ is proved later in Lemma 5; it is *not* used in Lemma 4.

*Proof of the lower bound in (7).* By (3) and $r_k>1$ (Lemma 0), the bracket
$3b_ke_k^2+e_k^3>0$, so $b_{k+1}^3-b_k^3\ge\frac{3}{1+r_k^2}$. Since $1<r_k\le\frac32$
(Lemma 2), $1+r_k^2\le1+\frac94=\frac{13}4$, hence
$\frac{3}{1+r_k^2}\ge\frac3{13/4}=\frac{12}{13}$. Telescoping,
$b_n^3=1+\sum_{k=1}^{n-1}(b_{k+1}^3-b_k^3)\ge1+\frac{12}{13}(n-1)\ge\frac{12}{13}n$
(as $1\ge\frac{12}{13}$).

*Proof of the crude upper bound in (7).* In (3), bound the two summands separately
using only Lemma 0. First, $r_k>1$ gives $1+r_k^2>2$, so $\frac{3}{1+r_k^2}<\frac32$.
Second, from $c_k>b_k$ (Lemma 0) we have $c_k^2+b_k^2>2b_k^2$, hence
$e_k=\frac1{c_k^2+b_k^2}<\frac1{2b_k^2}$, and therefore
$$
3b_ke_k^2+e_k^3\ <\ 3b_k\cdot\frac1{4b_k^4}+\frac1{8b_k^6}
=\frac3{4b_k^3}+\frac1{8b_k^6}\ \le\ \frac34+\frac18=\frac78,
$$
the last step using $b_k\ge b_1=1$ (Lemma 0, so $b_k\ge1$ and $b_k^3,b_k^6\ge1$).
Adding, $b_{k+1}^3-b_k^3<\frac32+\frac78=\frac{19}8$, the upper half of (7).
Telescoping, $b_n^3=1+\sum_{k=1}^{n-1}(b_{k+1}^3-b_k^3)<1+\frac{19}8(n-1)$, which is
the middle inequality of (8); and $1+\frac{19}8(n-1)=\frac{19}8 n-\frac{11}8<\frac{19}8 n$,
the last inequality of (8). $\square$

We record the consequence used below: by (8),
$$
b_k\le\Bigl(1+\tfrac{19}8(k-1)\Bigr)^{1/3}<\Bigl(\tfrac{19}8\,k\Bigr)^{1/3}
\quad\text{and}\quad b_k\ge\Bigl(\tfrac{12}{13}k\Bigr)^{1/3}\qquad(k\ge1).
\tag{8$'$}
$$

---

### Lemma 4 (Uniform positive lower bound $p_k\ge\tfrac1{10}$).
For all $k\ge1$, $\;p_k\ge\frac1{10}$.

*Proof.* From (6), $p_m=p_1-\sum_{k=1}^{m-1}\Delta_k=\frac12-\sum_{k=1}^{m-1}\Delta_k\ge\frac12-\sum_{k=1}^{\infty}\Delta_k$.
It suffices to prove $\sum_{k\ge1}\Delta_k\le\frac25$, giving $p_m\ge\frac12-\frac25=\frac1{10}$.
We split at $k=5$.

**Tail $k\ge5$.** The numerator of $\Delta_k$ is
$b_{k+1}^2-b_k^2=(b_{k+1}-b_k)(b_{k+1}+b_k)=e_k(b_{k+1}+b_k)\le\frac{2b_{k+1}}{c_k^2+b_k^2}$.
Using $c_k>b_k$ and $b_{k+1}>b_k$ (Lemma 0), each denominator factor is
$\ge2b_k^2$, so
$$
\Delta_k=\frac{b_{k+1}^2-b_k^2}{(c_k^2+b_k^2)(b_{k+1}^2+c_k^2)}
\le\frac{2b_{k+1}/(c_k^2+b_k^2)}{(c_k^2+b_k^2)(b_{k+1}^2+c_k^2)}
\le\frac{2b_{k+1}}{(2b_k^2)^3}=\frac{b_{k+1}}{4\,b_k^6}.
\tag{9}
$$
We now use **only** the self-contained bounds (8$'$) of Lemma 3 (no Lemma 5). By (8$'$),
$b_{k+1}=(b_{k+1}^3)^{1/3}\le\bigl(1+\tfrac{19}8(k+1)\bigr)^{1/3}$ and
$b_k^6=(b_k^3)^2\ge(\tfrac{12}{13}k)^2$. For $k\ge5$ the inner factor is
$1+\tfrac{19}8(k+1)=\tfrac{19}8 k+\tfrac{27}8\le\tfrac{19}8 k+\tfrac{27}{40}k=\tfrac{305}{100}k=3.05\,k$,
because $\tfrac{27}8\le\tfrac{27}{40}k\iff k\ge5$ (indeed $\tfrac{27}8=\tfrac{27}{40}\cdot5$).
Hence $b_{k+1}\le(3.05\,k)^{1/3}$ for $k\ge5$, and
$$
\Delta_k\le\frac{(3.05\,k)^{1/3}}{4(\tfrac{12}{13}k)^2}
=\frac{(3.05)^{1/3}(\tfrac{13}{12})^2}{4}\,k^{1/3-2}=C'\,k^{-5/3},
\qquad
C'=\frac{(3.05)^{1/3}(13/12)^2}{4}=0.425498\ldots,
\tag{10}
$$
valid for all $k\ge5$. Since $k\mapsto k^{-5/3}$ is decreasing, the integral test gives
$\sum_{k\ge5}k^{-5/3}\le\int_{4}^{\infty}t^{-5/3}dt=\frac32\cdot4^{-2/3}=0.595275\ldots$, so
$$
\sum_{k=5}^{\infty}\Delta_k\le C'\cdot\frac32\cdot4^{-2/3}
=0.425498\times0.595275\ldots=0.253289\ldots\ \le\ 0.254.
\tag{11}
$$

**Early terms $k=1,2,3,4$.** Bound these by rational interval arithmetic. Starting
from the exact $a_3=\frac32$, $a_4=\frac{17}{13}$ and iterating (1) with **outward
rounding to hundredths** — the map $x\mapsto a+\frac1{u^2+v^2}$ is increasing in $a$
and decreasing in $u,v>0$, so a lower endpoint of $a$ with upper endpoints of $u,v$
gives a valid lower endpoint, and vice versa; rounding each endpoint outward to the
nearest hundredth keeps the enclosure valid — one obtains the rigorous, hand-checkable
enclosures
$$
\begin{array}{llll}
b_2=\tfrac{17}{13}\in[1.30,1.31], & c_2\in[1.75,1.76], & b_3\in[1.51,1.52], & c_3\in[1.93,1.94],\\
b_4\in[1.68,1.69], & c_4\in[2.09,2.10], & b_5\in[1.82,1.83], & c_5\in[2.22,2.23],
\end{array}
$$
with the exact $b_1=1$, $c_1=\frac32$. Taking the numerator with upper endpoints and
the denominator with lower endpoints in (6),
$\Delta_k\le\frac{\overline{b_{k+1}}^2-\underline{b_k}^2}{(\underline{c_k}^2+\underline{b_k}^2)(\underline{b_{k+1}}^2+\underline{c_k}^2)}$,
where for the denominator the second factor is $\underline{b_{k+1}}^2+\underline{c_k}^2$
(using $b_{k+1}>b_k$ and the lower endpoint of $b_{k+1}$):
$$
\Delta_1\le\frac{(\tfrac{17}{13})^2-1}{(\tfrac94+1)\bigl((\tfrac{17}{13})^2+\tfrac94\bigr)}=\frac{1920}{34801}=0.05518,\quad
\Delta_2\le\frac{1.52^2-1.30^2}{(1.75^2+1.30^2)(1.51^2+1.75^2)}=0.02444,
$$
$$
\Delta_3\le\frac{1.69^2-1.51^2}{(1.93^2+1.51^2)(1.68^2+1.93^2)}=0.01466,\quad
\Delta_4\le\frac{1.83^2-1.68^2}{(2.09^2+1.68^2)(1.82^2+2.09^2)}=0.00954.
$$
Summing, $\displaystyle\sum_{k=1}^{4}\Delta_k\le0.05518+0.02444+0.01466+0.00954=0.10382\le0.104.$

**Total.** $\sum_{k\ge1}\Delta_k\le0.104+0.254=0.358\le\frac25=0.4$. Hence
$p_m\ge\frac12-0.358=0.142\ge\frac1{10}$ for all $m\ge1$. $\square$

*(Dependency note. This proof of Lemma 4 invokes only Lemma 0, Lemma 2, and the
crude self-contained bounds (8$'$) of Lemma 3 — all of which rest solely on Lemma 0.
It does **not** use the sharp upper bound $b_k^3<\frac32 k$ of Lemma 5. The chain is
therefore one-way: Lemma 0 → Lemma 2 → Lemma 3 → Lemma 4 → Lemma 5 → Lemma 6, with no
back-edge.)*

---

### Lemma 5 (Per-step deficit positive everywhere; lower bound for large $k$).
$\delta_k>0$ for **all** $k\ge1$ (equivalently $b_k^3<\frac{3k}2$ for all $k$).
Moreover, for all $k\ge70$,
$$
\delta_k\ \ge\ \frac{1}{20\,b_k}.
\tag{12}
$$

*Proof.* By (4), $\delta_k=M_k-E_k$. We first bound $M_k$ and $E_k$.

**Lower bound on $M_k$.** For $1<r\le\frac32$ we have $M_k\ge r_k-1=\frac{p_k}{b_k}$.
Indeed,
$$
M_k-(r_k-1)=\frac{3(r_k^2-1)-2(r_k-1)(1+r_k^2)}{2(1+r_k^2)}
=\frac{(r_k-1)\bigl(-2r_k^2+3r_k+1\bigr)}{2(1+r_k^2)},
$$
and the quadratic $-2r^2+3r+1$ has roots $\frac{3\pm\sqrt{17}}4=\{-0.2808,1.7808\}$,
so it is $\ge0$ on $[1,\frac32]\subset[-0.28,1.78]$; with $r_k-1>0$ this gives
$M_k\ge r_k-1=\frac{p_k}{b_k}\ge\frac1{10\,b_k}$ (Lemma 4).

**Upper bound on $E_k$.** Since $c_k^2+b_k^2\ge2b_k^2$, $\;e_k\le\frac1{2b_k^2}$, so
$$
E_k=3b_ke_k^2+e_k^3\le\frac{3b_k}{4b_k^4}+\frac1{8b_k^6}=\frac3{4b_k^3}+\frac1{8b_k^6}.
\tag{13}
$$

**The quantitative bound (12) for $k\ge70$.** By (8), $b_k\ge4\iff b_k^3\ge64$,
which holds once $\frac{12}{13}k\ge64$, i.e. $k\ge\frac{13\cdot64}{12}=69.33$, so for
all $k\ge70$ we have $b_k\ge4$, hence $b_k^2\ge16$ and $b_k^5\ge1024$. Then from (13),
multiplying by $b_k>0$,
$$
b_k\,E_k\le\frac3{4b_k^2}+\frac1{8b_k^5}\le\frac3{64}+\frac1{8\cdot1024}=0.046875+0.000123=0.047<\frac1{20},
$$
so $E_k\le\frac1{20b_k}$, and therefore
$$
\delta_k=M_k-E_k\ge\frac1{10b_k}-\frac1{20b_k}=\frac1{20b_k}\qquad(k\ge70),
$$
which is (12). In particular $\delta_k>0$ for $k\ge70$.

**Positivity for $18\le k\le69$.** Here $b_k\ge b_{18}$ (monotonicity, Lemma 0), and
the interval enclosure below gives $b_{18}\ge2.85>2.8$, so $b_k\ge2.8$ and
$b_k^2\ge7.84$. From (13), $b_kE_k\le\frac3{4\cdot7.84}+\frac1{8\cdot2.8^5}=0.09566+0.00073=0.0964<\frac1{10}$,
so $E_k<\frac1{10b_k}\le M_k$, giving $\delta_k=M_k-E_k>0$ for $18\le k\le69$.
(Lemma 6 needs only $\delta_k>0$ on this finite range and the clean bound (12) for
$k\ge70$.)

**Positivity for $1\le k\le17$.** We verify $b_{k+1}^3-b_k^3<\frac32$ (equivalently
$\delta_k>0$) by rational interval arithmetic with outward rounding to $1/10^4$ at
each step. Starting from $a_1=a_2=1$ and iterating (1), the computed enclosures give,
for each $k=1,\dots,17$, the upper bound $\overline{b_{k+1}}^{\,3}-\underline{b_k}^{\,3}<\frac32$;
explicitly the increment upper bounds are
$1.2363,1.2537,1.2676,1.2789,1.2882,1.2961,1.3029,1.3089,1.3141,1.3188,1.3231,1.3269,1.3304,1.3337,1.3367,1.3395,1.3421$
for $k=1,\dots,17$ respectively, each $<\frac32=1.5$ (in fact each $<1.35$). (These
are valid upper bounds — the worst-case enclosure values, rounded **outward** up to
$1/10^4$; the true increments are smaller, e.g. the true $k=1$ increment is
$b_2^3-b_1^3=(\tfrac{17}{13})^3-1=1.236231\ldots<1.2363$.) Also the enclosure for $b_{18}$
is $b_{18}\in[2.850,2.853]$, confirming $b_{18}\ge2.85>2.8$ used above. Hence
$\delta_k>0$ for $1\le k\le17$.

**Conclusion of Lemma 5.** Combining the three ranges, $\delta_k>0$ for all $k\ge1$.
By (5) telescoped, $b_n^3=1+\sum_{k=1}^{n-1}(\frac32-\delta_k)=1+\frac32(n-1)-\sum_{k=1}^{n-1}\delta_k
=\frac{3n}2-\frac12-\sum_{k=1}^{n-1}\delta_k<\frac{3n}2$, since every $\delta_k>0$.
This establishes the **sharp** upper bound $b_k^3<\frac{3k}2$ for all $k\ge1$
(equivalently $b_k<(\frac32 k)^{1/3}$), and (12) holds for $k\ge70$. (This sharp bound
is used only downstream, in Lemma 6; it is not used in Lemma 4.) $\square$

---

### Lemma 6 (Deficit grows like $n^{2/3}$).
With $A:=\frac3{40}\bigl(\frac23\bigr)^{1/3}=\frac1{20}\bigl(\frac23\bigr)^{1/3}\cdot\frac32=0.0655185\ldots>0$,
$$
D(n)\ \ge\ A\,n^{2/3}-A\cdot70^{2/3}\qquad\text{for all }n>70.
\tag{14}
$$

*Proof.* By (5) and $\delta_k>0$ for all $k$ (Lemma 5),
$D(n)=\frac12+\sum_{k=1}^{n-1}\delta_k\ge\sum_{k=1}^{n-1}\delta_k\ge\sum_{k=70}^{n-1}\delta_k$
(the first inequality drops the nonnegative $\frac12$, the second drops the nonnegative
terms $\delta_1,\dots,\delta_{69}$, all positive by Lemma 5). For $k\ge70$, (12) and the
sharp upper bound $b_k<(\frac32 k)^{1/3}$ established in Lemma 5 give
$$
\delta_k\ge\frac1{20\,b_k}>\frac1{20\,(\frac32 k)^{1/3}}=\frac1{20}\Bigl(\frac23\Bigr)^{1/3}k^{-1/3}.
$$
Since $t\mapsto t^{-1/3}$ is decreasing,
$\sum_{k=70}^{n-1}k^{-1/3}\ge\int_{70}^{n}t^{-1/3}dt=\frac32(n^{2/3}-70^{2/3})$. Hence
$$
D(n)\ge\frac1{20}\Bigl(\frac23\Bigr)^{1/3}\cdot\frac32\bigl(n^{2/3}-70^{2/3}\bigr)
=A\bigl(n^{2/3}-70^{2/3}\bigr),
$$
which is (14). $\square$

---

### Conclusion.
With $A=0.0655185\ldots>0$ and the constant $A\cdot70^{2/3}=0.0655185\times16.985=1.113<1.12$,
Lemma 6 gives $D(n)\ge A\,n^{2/3}-1.12$ for $n>70$. Compare with $2026\sqrt n=2026\,n^{1/2}$.
Because $\frac{n^{2/3}}{n^{1/2}}=n^{1/6}\to\infty$, the deficit eventually dominates.
Quantitatively, $f(n):=A\,n^{2/3}-2026\,n^{1/2}$ has
$f'(n)=\frac23An^{-1/3}-1013\,n^{-1/2}=n^{-1/2}\bigl(\frac23An^{1/6}-1013\bigr)>0$ once
$n^{1/6}>\frac{3\cdot1013}{2A}=23192$, i.e. $n>(23192)^6=1.56\times10^{26}$; so $f$ is
strictly increasing for $n>1.56\times10^{26}$. At $n=10^{28}$:
$$
A\,n^{2/3}=0.0655185\times10^{56/3}=0.0655185\times(4.6416\times10^{18})=3.041\times10^{17},
$$
$$
2026\,n^{1/2}=2026\times10^{14}=2.026\times10^{17},
$$
so $f(10^{28})=3.041\times10^{17}-2.026\times10^{17}=1.015\times10^{17}>1.12$. As $f$
is increasing for $n>1.56\times10^{26}$, we have $f(n)>1.12$ for all $n\ge10^{28}$,
i.e. $A\,n^{2/3}-1.12>2026\,n^{1/2}$. Therefore
$$
D(n)\ \ge\ A\,n^{2/3}-1.12\ >\ 2026\sqrt n\qquad\text{for all }n\ge 10^{28}.
$$
This is the negation of (2), so
$$
a_{2n}^3=b_n^3=\frac{3n}2-D(n)<\frac{3n}2-2026\sqrt n\qquad\text{for all }n\ge 10^{28}.
$$
Hence the inequality $a_{2n}^3>\frac{3n}2-2026\sqrt n$ holds for **no** $n\ge10^{28}$,
so for at most finitely many $n$. There do **not** exist infinitely many such $n$.

**Answer: NO.** Only finitely many positive integers $n$ satisfy
$a_{2n}^3>\frac{3n}2-2026\sqrt n$ (all of them $<10^{28}$). $\blacksquare$

---

### Tools invoked (knowledge_base.md)
- **Induction / Direct proof** (*General Proof Methods*): positivity, Lemma 0,
  Lemma 3, Lemma 5 (interval arithmetic for the finitely many small $k$).
- **Invariant / monovariant** (*Combinatorics*; *General Proof Methods*): the
  strictly decreasing $p_k=c_k-b_k$ with summable decrements $\Delta_k$, yielding the
  uniform lower bound $p_k\ge\frac1{10}$ (Lemma 4).
- **Telescoping / change of variables** (*Introduce a substitution*): the cubic
  identity (3), converting "$a_{2n}^3$ vs $\frac{3n}2$" into the deficit sum (5).
- **Integral (Riemann-sum) comparison** (estimation via the monotone-summand integral
  test): the tail $\sum k^{-5/3}$ in (11) and $\sum k^{-1/3}\ge\frac32(n^{2/3}-70^{2/3})$
  in Lemma 6.
- **Standard inequalities** (*Standard inequalities*): the elementary one-variable
  bounds $\frac3{1+r^2}\in[\frac{12}{13},\frac32)$ and $-2r^2+3r+1\ge0$ on $[1,\frac32]$.

### Verified numerically (supporting; the proof is self-contained)
Computed at 50-digit precision for $k\le2\times10^5$ (structure checks to $4\times10^5$
by the explorer):
- Lemma 0 ordering and $\frac{12}{13}k\le b_k^3<\frac32 k$: $0$ violations.
- $\max_k r_k=\frac32$ (only at $k=1$), $r_k\downarrow1$.
- $p_1=\frac12$, $p_k\downarrow$, $\min_k p_k\approx0.3408>\frac1{10}$ (margin),
  $\sum_k\Delta_k\approx0.1592$.
- $\Delta_k\le\frac{b_{k+1}}{4b_k^6}\le C'k^{-5/3}$ for $k\ge5$ with
  $C'=\frac{(3.05)^{1/3}(13/12)^2}4=0.42550\ldots$ (the self-contained crude-upper-bound
  constant used in Lemma 4): $0$ violations.
- $M_k\ge\frac{p_k}{b_k}$ and $\delta_k>0$ for all $k$; $\delta_k\ge\frac1{20b_k}$ for
  $k\ge44$ (we proved it for $k\ge70$): $0$ violations.
- $D(n)/n^{2/3}\to0.668$, confirming $D(n)=\Theta(n^{2/3})$.
