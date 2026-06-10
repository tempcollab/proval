## Status
solved

## Approaches tried
- Irrationality / ℚ-linear independence of square roots (each term forced rational) → parametrization a = 2005m² → unit-fraction equation 1/m+1/n+1/p ∈ ℤ_{>0} → exhaustive enumeration of its 5 solutions → elimination of 4 by integrality/positivity of x,y,z — **worked**. Final answer: the triple (x,y,z) = (4010, 4010, 28070) and its 3 distinct permutations; the value of the sum is 1.
- (Discarded sub-step) The earlier outline's "integrality of x,y,z forces (m,n,p) all even" parity claim — **false** (two-odd-one-even patterns also pass the per-coordinate parity test), and it silently prunes away four of the five unit-fraction solutions. Replaced by a full enumeration of 1/m+1/n+1/p ∈ ℤ_{>0} (five solutions) followed by direct integrality/positivity elimination.

## Current best
Complete solution (below). The answer is: the expression is a positive integer exactly for the three ordered triples
$$(x,y,z) \in \{(4010,4010,28070),\ (4010,28070,4010),\ (28070,4010,4010)\},$$
i.e. for $(x,y,z)$ equal to a permutation of $(4010,4010,28070)$, and for these the value of the sum is $\boxed{1}$.

## Full proof

We seek all triples $(x,y,z)$ of positive integers for which
$$
S \;=\; \sqrt{\frac{2005}{x+y}} + \sqrt{\frac{2005}{x+z}} + \sqrt{\frac{2005}{y+z}}
$$
is a positive integer. Set
$$
a = x+y,\qquad b = x+z,\qquad c = y+z,
$$
which are positive integers, and write $S = \sqrt{2005/a} + \sqrt{2005/b} + \sqrt{2005/c}$.

### Preliminary: 2005 is squarefree

We have $2005 = 5\cdot 401$. The number $5$ is prime. To see $401$ is prime, note $20^2 = 400 < 401 < 441 = 21^2$, so any nontrivial factor of $401$ is at most $20$; checking the primes up to $20$: $401$ is odd (not divisible by $2$); digit sum $4+0+1=5$ (not divisible by $3$); does not end in $0$ or $5$ (not divisible by $5$); $401 = 7\cdot 57 + 2$, $11\cdot 36 + 5$, $13\cdot 30 + 11$, $17\cdot 23 + 10$, $19\cdot 21 + 2$ (not divisible by $7,11,13,17,19$). Hence $401$ is prime. Therefore $2005 = 5 \cdot 401$ is a product of two distinct primes, so $2005$ is **squarefree** (no prime appears to a power $\ge 2$).

### Step 1 — Rationality criterion for a single term

**Claim.** For a positive integer $a$, the number $\sqrt{2005/a}$ is rational if and only if $a = 2005\,t^2$ for some positive integer $t$, in which case $\sqrt{2005/a} = 1/t$.

*Proof.* Write $\sqrt{2005/a} = \sqrt{2005a}/a$. Since $a$ is a (nonzero) integer, $\sqrt{2005/a}$ is rational iff $\sqrt{2005a}$ is rational. For a positive integer $N$, $\sqrt N$ is rational iff $N$ is a perfect square: indeed if $\sqrt N = p/q$ in lowest terms then $Nq^2 = p^2$, and any prime dividing $q$ would divide $p^2$ hence $p$, contradicting $\gcd(p,q)=1$ unless $q=1$, so $N = p^2$. (This is the standard fact that a non-square positive integer has irrational square root; knowledge base: "Perfect-square arguments".)

So $\sqrt{2005/a}\in\mathbb Q$ iff $2005a$ is a perfect square. Now $2005$ is squarefree, so in the prime factorization of $2005a$ the two primes $5$ and $401$ occur with exponent (one plus their exponent in $a$); for the product to be a perfect square, every prime exponent must be even. The primes $5$ and $401$ therefore must occur to an odd power in $a$ — in particular $5\mid a$ and $401\mid a$, i.e. $2005 \mid a$ — and writing $a = 2005\,r$, the product $2005a = 2005^2 r$ is a square iff $r$ is a square. Hence $2005a$ is a perfect square iff $a = 2005\,t^2$ for some positive integer $t$.

In that case $2005a = 2005^2 t^2$, so $\sqrt{2005a} = 2005\,t$ and
$$
\sqrt{\tfrac{2005}{a}} = \frac{\sqrt{2005a}}{a} = \frac{2005\,t}{2005\,t^2} = \frac1t. \qquad\square
$$

### Step 2 — Each term must be rational (Lemma A: no irrational cancellation)

For each of $a,b,c$, write the corresponding term in the form $r\sqrt d$, where $d \ge 1$ is the *squarefree part* of $2005a$ (resp. $2005b$, $2005c$) and $r$ is a positive rational. Concretely, factor $2005a = e^2 d$ with $d$ squarefree; then $\sqrt{2005a} = e\sqrt d$ and
$$
\sqrt{\tfrac{2005}{a}} = \frac{e}{a}\,\sqrt d = r\sqrt d,\qquad r = \frac ea \in \mathbb Q_{>0}.
$$
By Step 1, the term is rational iff its $d$ equals $1$. So denote the three terms $r_1\sqrt{d_1},\ r_2\sqrt{d_2},\ r_3\sqrt{d_3}$ with each $r_i\in\mathbb Q_{>0}$ and each $d_i\ge 1$ squarefree.

**Lemma A.** If $r_1\sqrt{d_1}+r_2\sqrt{d_2}+r_3\sqrt{d_3}\in\mathbb Q$, then $d_1=d_2=d_3=1$.

*Proof.* We use the following classical fact.

> **Theorem (ℚ-linear independence of square roots of squarefree integers).** The set $\{\sqrt d : d \text{ a squarefree positive integer}\}$ is linearly independent over $\mathbb Q$; in particular for distinct squarefree integers $d>1$ the numbers $\sqrt d$ are irrational and, together with $1$, are linearly independent over $\mathbb Q$.

(This is a standard result; e.g. it follows from the fact that $\mathbb Q(\sqrt{d_1},\dots,\sqrt{d_k})$ has degree $2^k$ over $\mathbb Q$ for distinct squarefree $d_i>1$, so $1$ and the various $\sqrt{d}$ for $d$ a squarefree product of the $d_i$ form a $\mathbb Q$-basis and are in particular linearly independent. Knowledge base: "Perfect-square arguments" / number-field independence.)

Group the three terms by their radical. Let $D$ be the set of *distinct* values occurring among $d_1,d_2,d_3$, and for each $d\in D$ let
$$
c_d \;=\; \sum_{i:\,d_i = d} r_i .
$$
Each $c_d$ is a sum of one, two, or three **strictly positive** rationals, hence $c_d > 0$ (this is the crucial point: even if two or three terms share the same radical $d>1$, their coefficients are positive and **cannot cancel**). Then
$$
r_1\sqrt{d_1}+r_2\sqrt{d_2}+r_3\sqrt{d_3} \;=\; \sum_{d\in D} c_d\,\sqrt d .
$$
Suppose this rational number equals $q\in\mathbb Q$. Moving $q$ to one side, $\sum_{d\in D} c_d\sqrt d - q\cdot 1 = 0$. By the Theorem, the numbers $\{1\}\cup\{\sqrt d : d\in D,\ d>1\}$ are linearly independent over $\mathbb Q$, while $\sqrt 1 = 1$. Hence in the relation
$$
(\,-q + c_1\,)\cdot 1 \;+\; \sum_{\substack{d\in D\\ d>1}} c_d\,\sqrt d \;=\; 0
$$
(where $c_1 := c_d$ for $d=1$ if $1\in D$, else $0$), every coefficient on a $\sqrt d$ with $d>1$ must vanish: $c_d = 0$ for all $d\in D$ with $d>1$. But each $c_d > 0$. Therefore no $d\in D$ satisfies $d>1$; i.e. every $d_i = 1$. $\qquad\square$

Since $S$ is required to be an integer, in particular $S\in\mathbb Q$, so by Lemma A all three terms are rational.

### Step 3 — Parametrization

By Step 1 applied to each rational term, there exist positive integers $m,n,p$ with
$$
a = 2005\,m^2,\qquad b = 2005\,n^2,\qquad c = 2005\,p^2,
$$
and
$$
S = \frac1m + \frac1n + \frac1p,
$$
which must be a positive integer.

### Step 4 — Recovering $x,y,z$

From $a=x+y,\ b=x+z,\ c=y+z$ we solve the linear system (it is invertible: adding all three gives $a+b+c = 2(x+y+z)$):
$$
x = \frac{a+b-c}{2},\qquad y = \frac{a+c-b}{2},\qquad z = \frac{b+c-a}{2}.
$$
Substituting $a=2005m^2,\ b=2005n^2,\ c=2005p^2$:
$$
x = \frac{2005(m^2+n^2-p^2)}{2},\quad
y = \frac{2005(m^2+p^2-n^2)}{2},\quad
z = \frac{2005(n^2+p^2-m^2)}{2}.
$$

For $(x,y,z)$ to be a triple of **positive integers** we need two things:

- **(Positivity)** $m^2+n^2-p^2>0,\quad m^2+p^2-n^2>0,\quad n^2+p^2-m^2>0.$
- **(Integrality)** Each of $2005(m^2+n^2-p^2)/2,\ \dots$ is an integer.

**Integrality is governed by a single parity condition.** Since $2005$ is odd, $2005\cdot N$ is even iff $N$ is even; hence $x\in\mathbb Z$ iff $m^2+n^2-p^2$ is even, and similarly for $y,z$. Now modulo $2$ we have $-p^2\equiv p^2$, so
$$
m^2+n^2-p^2 \equiv m^2+n^2+p^2 \pmod 2,
$$
and the same congruence holds for the other two combinations. Therefore **all three** of $m^2+n^2-p^2,\ m^2+p^2-n^2,\ n^2+p^2-m^2$ are even simultaneously iff $m^2+n^2+p^2$ is even. Since $k^2\equiv k\pmod 2$, $m^2+n^2+p^2\equiv m+n+p\pmod 2$. Thus:
$$
x,y,z\in\mathbb Z \iff m^2+n^2+p^2 \text{ is even} \iff m+n+p \text{ is even.} \tag{$\ast$}
$$
This condition is symmetric in $(m,n,p)$, which is what we will use to eliminate candidates.

### Step 5 — Solving $1/m+1/n+1/p \in \mathbb Z_{>0}$ exhaustively

We now find **all** triples of positive integers $(m,n,p)$ with $S=1/m+1/n+1/p$ a positive integer. The problem is symmetric in $m,n,p$, so we first enumerate solutions with $m\le n\le p$ (and recover the rest by permutation).

Let $k=S\ge 1$ be the integer value. From $m\le n\le p$ we get $1/m\ge 1/n\ge 1/p$, so
$$
k = \frac1m+\frac1n+\frac1p \le \frac3m \quad\Longrightarrow\quad m \le \frac3k \le 3.
$$
Also $1/m < k$ forces $m\ge 1$, and $k=1/m+1/n+1/p\le 3$ (each summand $\le 1$). So $k\in\{1,2,3\}$ and $m\in\{1,2,3\}$. We split on $m$.

**Case $m=1$.** Then $1/n+1/p = k-1$. Since $n\ge m=1$ and $1/n+1/p\le 2$ with equality iff $n=p=1$, and $1/n+1/p>0$, we have $k-1\in\{0,1,2\}$ wait — $k-1$ must be a value of $1/n+1/p\in(0,2]$, so $k-1\in\{1,2\}$ giving $k\in\{2,3\}$ (the value $k-1=0$ is impossible since $1/n+1/p>0$).
  - $k=3$: $1/n+1/p=2$ with $1\le n\le p$. Since $1/n+1/p\le 2/n$, we need $2/n\ge 2$, i.e. $n\le 1$, so $n=1$, then $1/p=1$, $p=1$. Solution $(1,1,1)$, $S=3$.
  - $k=2$: $1/n+1/p=1$ with $1\le n\le p$. Then $1\le 2/n$ gives $n\le 2$; and $n\ge 2$ because $1/n<1$ (as $1/n+1/p=1$ with $1/p>0$ forces $1/n<1$, i.e. $n\ge 2$). So $n=2$, then $1/p=1/2$, $p=2$. Solution $(1,2,2)$, $S=2$.

**Case $m=2$.** Then $1/n+1/p = k-\tfrac12$ with $n\ge 2$. Here $1/n+1/p\le 2/n\le 1$, so $k-\tfrac12\le 1$, giving $k\le \tfrac32$, hence $k=1$ and $1/n+1/p=\tfrac12$ with $2\le n\le p$. From $1/n+1/p\le 2/n$ we need $\tfrac12\le 2/n$, i.e. $n\le 4$; and from $1/n>\tfrac12-1/n$... more directly $1/n\ge \tfrac12\cdot\tfrac12=\tfrac14$ is needed for $1/p=\tfrac12-1/n>0$ to have $p\ge n$: we need $1/p = \tfrac12 - 1/n > 0$, so $n>2$, i.e. $n\ge 3$; and $1/p\le 1/n$ gives $\tfrac12 - 1/n\le 1/n$, i.e. $1/n\ge\tfrac14$, $n\le 4$. So $n\in\{3,4\}$.
  - $n=3$: $1/p = \tfrac12-\tfrac13 = \tfrac16$, $p=6$. Solution $(2,3,6)$, $S=1$.
  - $n=4$: $1/p = \tfrac12-\tfrac14 = \tfrac14$, $p=4$. Solution $(2,4,4)$, $S=1$.

**Case $m=3$.** Then $1/n+1/p = k-\tfrac13$ with $n\ge 3$, so $1/n+1/p\le 2/3$, giving $k\le 1$, hence $k=1$ and $1/n+1/p=\tfrac23$ with $3\le n\le p$. From $1/n+1/p\le 2/n$ we need $\tfrac23\le 2/n$, i.e. $n\le 3$; combined with $n\ge 3$, $n=3$, then $1/p=\tfrac23-\tfrac13=\tfrac13$, $p=3$. Solution $(3,3,3)$, $S=1$.

This casework is exhaustive ($m\in\{1,2,3\}$, and for each $m$ the bounds on $n$ then $p$ are forced), and the cases are disjoint. The complete list of solutions with $m\le n\le p$ is therefore exactly:
$$
(1,1,1)\ [S=3],\quad (1,2,2)\ [S=2],\quad (2,3,6)\ [S=1],\quad (2,4,4)\ [S=1],\quad (3,3,3)\ [S=1].
$$

### Step 6 — Eliminating the four impossible triples

We now impose conditions $(\ast)$ (integrality) and positivity from Step 4 on each candidate. Both conditions are symmetric in $(m,n,p)$ as far as integrality goes, so a candidate that fails integrality fails for **every** permutation; for positivity we will check explicitly.

**Integrality test via $(\ast)$.** By $(\ast)$, $x,y,z\in\mathbb Z$ iff $m+n+p$ is even.

- $(1,1,1)$: $m+n+p = 3$, **odd** ⟹ $x,y,z\notin\mathbb Z$. Indeed $x=y=z = 2005(1+1-1)/2 = 2005/2\notin\mathbb Z$. **Rejected.**
- $(1,2,2)$: $m+n+p = 5$, **odd** ⟹ not integers. Indeed (with the ordering $a=2005\cdot1,\ b=2005\cdot4,\ c=2005\cdot4$) $x = 2005(1+4-4)/2 = 2005/2\notin\mathbb Z$. **Rejected** (and by symmetry every permutation also fails, since $m+n+p$ is permutation-invariant).
- $(2,3,6)$: $m+n+p = 11$, **odd** ⟹ not integers. (Also positivity fails: $m^2+n^2-p^2 = 4+9-36 = -23 < 0$, giving $x = 2005\cdot(-23)/2 < 0$.) **Rejected.**
- $(3,3,3)$: $m+n+p = 9$, **odd** ⟹ not integers. Indeed $x=y=z = 2005(9+9-9)/2 = 2005\cdot 9/2 = 18045/2\notin\mathbb Z$. **Rejected.**
- $(2,4,4)$: $m+n+p = 10$, **even** ⟹ $x,y,z\in\mathbb Z$. **Survives** integrality; we check positivity in Step 7.

Thus the **only** candidate $(m,n,p)$ (up to permutation) that yields integer $x,y,z$ is $(2,4,4)$.

### Step 7 — The surviving triple and verification

Take $(m,n,p) = (2,4,4)$, so $a = 2005\cdot 4 = 8020$, $b = c = 2005\cdot 16 = 32080$. Then
$$
x = \frac{a+b-c}{2} = \frac{8020+32080-32080}{2} = \frac{8020}{2} = 4010,
$$
$$
y = \frac{a+c-b}{2} = \frac{8020+32080-32080}{2} = 4010,
$$
$$
z = \frac{b+c-a}{2} = \frac{32080+32080-8020}{2} = \frac{56140}{2} = 28070.
$$
All three are positive integers, confirming both positivity and integrality. (Indeed $m^2+n^2-p^2 = 4+16-16 = 4>0$, $m^2+p^2-n^2 = 4+16-16 = 4>0$, $n^2+p^2-m^2 = 16+16-4 = 28>0$.)

**Direct verification of the original expression.** With $(x,y,z) = (4010,4010,28070)$:
$$
x+y = 8020 = 2005\cdot 4 = 2005\cdot 2^2,\qquad x+z = y+z = 32080 = 2005\cdot 16 = 2005\cdot 4^2 .
$$
Hence
$$
S = \sqrt{\frac{2005}{2005\cdot 2^2}} + \sqrt{\frac{2005}{2005\cdot 4^2}} + \sqrt{\frac{2005}{2005\cdot 4^2}}
= \frac12 + \frac14 + \frac14 = 1,
$$
a positive integer, as required.

### Step 8 — Permutation bookkeeping and conclusion

The original expression $S$ is symmetric under permuting $(x,y,z)$ (permuting $x,y,z$ permutes the three denominators $x+y,x+z,y+z$). Our analysis assumed $m\le n\le p$, i.e. we ordered the denominators; every solution $(x,y,z)$ in positive integers arises from assigning the multiset $\{m^2,n^2,p^2\} = \{4,16,16\}$ to $\{x+y,\,x+z,\,y+z\}$. The distinct assignments of $\{2005\cdot4,\,2005\cdot16,\,2005\cdot16\}$ to $(x+y,\,x+z,\,y+z)$ give exactly the permutations of the triple $(4010,4010,28070)$. Solving the linear system for each:

- $(x+y,x+z,y+z) = (8020,32080,32080)$: $(x,y,z)=(4010,4010,28070)$.
- $(x+y,x+z,y+z) = (32080,8020,32080)$: $(x,y,z)=(4010,28070,4010)$.
- $(x+y,x+z,y+z) = (32080,32080,8020)$: $(x,y,z)=(28070,4010,4010)$.

Because the multiset $\{8020,32080,32080\}$ has a repeated value, there are exactly $3$ distinct ordered assignments to $(x+y,x+z,y+z)$ (not $6$), and — as the computation above shows — all three yield valid positive-integer triples. Equivalently, since $x=y$ in the base solution, the orbit of $(4010,4010,28070)$ under the symmetric group $S_3$ has exactly $3$ distinct elements. In every case $S = \tfrac12+\tfrac14+\tfrac14 = 1$.

### Answer

The expression is a positive integer precisely for the triples $(x,y,z)$ that are permutations of $(4010,4010,28070)$, namely the three ordered triples
$$
(4010,4010,28070),\quad (4010,28070,4010),\quad (28070,4010,4010),
$$
and for each of them the value of the sum is
$$
\boxed{\,S = 1\,}.
$$
$\blacksquare$
