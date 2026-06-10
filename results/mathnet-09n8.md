## Status
solved

## Approaches tried
- Vieta jumping (ascent direction) to generate an infinite orbit, combined with an
  elementary extremal-index unboundedness argument for the resulting homogeneous
  integer recurrence — WORKED. Produces an explicit infinite family of integer
  solutions valid uniformly for every integer N.
- (Recorded dead end, from explorer) Trying to bound the orbit via an "eventually
  constant value N/3" of the sum-recurrence — WRONG: the fixed point of
  s = 7s − s − 2N is 2N/5, not N/3. Replaced by the homogenization
  w_k = 5 s_k − 2N (homogeneous recurrence w_{k+2} = 7 w_{k+1} − w_k) and an
  extremal-index argument that needs no closed form / no √5.

## Current best
Complete proof (below). The construction: from the base solution (1,−1) iterate the
affine "double Vieta jump"
F(m,n) = (N − 3n − m, 3m + 8n − 2N),
which maps integer solutions to integer solutions. The sums s_k = m_k + n_k of the
orbit satisfy s_{k+2} = 7 s_{k+1} − s_k − 2N, and w_k = 5 s_k − 2N satisfies the
homogeneous integer recurrence w_{k+2} = 7 w_{k+1} − w_k; an extremal-index argument
shows (w_k), hence (s_k), is unbounded, so the orbit contains infinitely many
distinct solutions.

## Full proof

Throughout, $N$ is a fixed but arbitrary integer. We work with the equation
$$
(m+n)^2 + mn + 1 = N(m+n). \tag{$\star$}
$$
Call an ordered pair $(m,n)\in\mathbb{Z}^2$ a **solution** if it satisfies $(\star)$.

### Step 0: An expanded normal form

Expanding the left side,
$$
(m+n)^2 + mn + 1 = m^2 + 2mn + n^2 + mn + 1 = m^2 + 3mn + n^2 + 1,
$$
so $(\star)$ is equivalent to
$$
m^2 + 3mn + n^2 + 1 - N(m+n) = 0. \tag{$\star\star$}
$$
This form is symmetric in $m$ and $n$, a fact we use repeatedly.

### Step 1: A base solution

The pair $(m,n) = (1,-1)$ is a solution for every $N$. Indeed $m+n = 0$, so the
left side of $(\star)$ equals $0^2 + (1)(-1) + 1 = 0$, and the right side equals
$N\cdot 0 = 0$. Thus $(\star)$ holds. (This base point lies on the line $m+n=0$;
the construction below will move off it.)

### Step 2: The $m$-jump

Fix $n$ and regard $(\star\star)$ as a quadratic in $m$:
$$
m^2 + (3n - N)\,m + (n^2 - Nn + 1) = 0. \tag{2.1}
$$
This is monic in $m$ with **integer** coefficients (each coefficient is an integer
polynomial in $n$ and $N$). 

**Claim.** If $(m,n)$ is a solution, then $(m',n)$ with
$$
m' = N - 3n - m
$$
is also a solution, and $m'\in\mathbb{Z}$.

*Proof of claim.* Since $(m,n)$ satisfies $(\star\star)$, the number $m$ is a root of
the quadratic (2.1). Let $r$ denote its second root. By **Vieta's formulas**
(knowledge base: "Vieta jumping & infinite descent" — sum of the roots of a monic
quadratic $x^2 + bx + c$ equals $-b$), the sum of the two roots of (2.1) is
$-(3n - N) = N - 3n$. Hence
$$
m + r = N - 3n \quad\Longrightarrow\quad r = (N - 3n) - m = m'.
$$
Thus $m' = r$ is the second root, so $m'$ satisfies (2.1), i.e. $(m',n)$ satisfies
$(\star\star)$ and is therefore a solution. Finally, $m' = N - 3n - m$ is a
difference and sum of integers, hence $m'\in\mathbb{Z}$. Note: integrality of $m'$
is **automatic** from the Vieta expression $m' = N - 3n - m$; we do **not** need to
invoke "a root of an integer polynomial is an integer" (which is false in general).
$\square$

### Step 3: The $n$-jump

Because $(\star\star)$ is symmetric in $m$ and $n$, the identical argument with the
roles of $m$ and $n$ swapped gives: if $(m,n)$ is a solution, then $(m,n')$ with
$$
n' = N - 3m - n
$$
is also a solution, and $n'\in\mathbb{Z}$. Explicitly, fixing $m$, equation
$(\star\star)$ is the monic integer quadratic $n^2 + (3m - N)n + (m^2 - Nm + 1) = 0$
in $n$; by Vieta the two roots sum to $N - 3m$, so the second root is
$n' = N - 3m - n\in\mathbb{Z}$, and it is again a solution.

### Step 4: The double jump $F$

Define $F:\mathbb{Z}^2\to\mathbb{Z}^2$ by first applying the $m$-jump and then the
$n$-jump:
- $m$-jump on $(m,n)$ gives $(m_1, n)$ with $m_1 = N - 3n - m$.
- $n$-jump on $(m_1, n)$ gives $(m_1, n_1)$ with
$$
n_1 = N - 3m_1 - n = N - 3(N - 3n - m) - n = N - 3N + 9n + 3m - n = 3m + 8n - 2N.
$$

Hence
$$
\boxed{\,F(m,n) = \bigl(N - 3n - m,\ \ 3m + 8n - 2N\bigr).\,}
$$
By Steps 2 and 3, both jumps send integer solutions to integer solutions, so $F$
sends integer solutions to integer solutions. Therefore, starting from the base
solution $(m_0,n_0) := (1,-1)$ of Step 1, every iterate
$$
(m_k, n_k) := F^{k}(1,-1)\qquad (k = 0,1,2,\dots)
$$
is an integer solution of $(\star)$.

As a sanity check that will be used below, compute $F(1,-1)$ directly:
$$
F(1,-1) = \bigl(N - 3(-1) - 1,\ \ 3(1) + 8(-1) - 2N\bigr) = (N + 2,\ -2N - 5). \tag{4.1}
$$

### Step 5: Linear part of $F$

Write $F$ as the affine map $F(\mathbf{x}) = M\mathbf{x} + \mathbf{b}$ on column
vectors $\mathbf{x} = \binom{m}{n}$, where
$$
M = \begin{pmatrix} -1 & -3 \\ \ \ 3 & \ \ 8 \end{pmatrix},
\qquad
\mathbf{b} = \begin{pmatrix} N \\ -2N \end{pmatrix}.
$$
(Indeed the first coordinate is $-m - 3n + N$ and the second is $3m + 8n - 2N$.)
Its determinant is
$$
\det M = (-1)(8) - (-3)(3) = -8 + 9 = 1,
$$
so $M\in \mathrm{GL}_2(\mathbb{Z})$ and $F$ is an affine bijection of $\mathbb{Z}^2$.
We will not lean on bijectivity in the main argument (which uses sums); it is noted
only for context.

### Step 6: The recurrence for the sums

Let $s_k := m_k + n_k$. We prove
$$
s_{k+2} = 7\,s_{k+1} - s_k - 2N \qquad\text{for all } k\ge 0, \tag{6.1}
$$
with initial values $s_0 = 0$ and $s_1 = -(N+3)$.

**Initial values.** From $(m_0,n_0) = (1,-1)$ we get $s_0 = 1 + (-1) = 0$. From
(4.1), $(m_1, n_1) = (N+2, -2N-5)$, so
$$
s_1 = (N+2) + (-2N-5) = -N - 3 = -(N+3).
$$

**Derivation of (6.1) for all $k$.** The pair vector $\mathbf{x}_k := \binom{m_k}{n_k}$
satisfies $\mathbf{x}_{k+1} = M\mathbf{x}_k + \mathbf{b}$. Let
$\mathbf{1} = (1,1)$ be the row vector, so that $s_k = \mathbf{1}\,\mathbf{x}_k$.
Multiplying the recursion on the left by $\mathbf{1}$,
$$
s_{k+1} = \mathbf{1} M \mathbf{x}_k + \mathbf{1}\mathbf{b}.
$$
Now $\mathbf{1}M = (-1+3,\ -3+8) = (2,\ 5)$ and $\mathbf{1}\mathbf{b} = N + (-2N) = -N$,
hence
$$
s_{k+1} = 2 m_k + 5 n_k - N. \tag{6.2}
$$
Combining (6.2) with $s_k = m_k + n_k$ gives a linear system for $(m_k, n_k)$:
$$
\begin{cases} m_k + n_k = s_k, \\ 2 m_k + 5 n_k = s_{k+1} + N. \end{cases}
$$
Its determinant is $1\cdot 5 - 1\cdot 2 = 3 \neq 0$, so we may solve:
$$
n_k = \frac{(s_{k+1} + N) - 2 s_k}{3}, \qquad
m_k = s_k - n_k = \frac{5 s_k - (s_{k+1} + N)}{3}. \tag{6.3}
$$
(These are exact rational expressions in $s_k, s_{k+1}, N$; $m_k, n_k$ are of course
integers, but we only need the relations algebraically.) Apply (6.2) at index $k+1$:
$$
s_{k+2} = 2 m_{k+1} + 5 n_{k+1} - N. \tag{6.4}
$$
We now express $m_{k+1}, n_{k+1}$ via the linear part $M$:
$$
\begin{aligned}
m_{k+1} &= -m_k - 3 n_k + N, \\
n_{k+1} &= 3 m_k + 8 n_k - 2N.
\end{aligned}
$$
Substitute into (6.4):
$$
\begin{aligned}
s_{k+2}
&= 2(-m_k - 3n_k + N) + 5(3 m_k + 8 n_k - 2N) - N \\
&= (-2 m_k - 6 n_k + 2N) + (15 m_k + 40 n_k - 10N) - N \\
&= 13 m_k + 34 n_k - 9N.
\end{aligned} \tag{6.5}
$$
We must show the right side of (6.5) equals $7 s_{k+1} - s_k - 2N$. Using (6.2) and
$s_k = m_k + n_k$:
$$
7 s_{k+1} - s_k - 2N
= 7(2 m_k + 5 n_k - N) - (m_k + n_k) - 2N
= (14 m_k + 35 n_k - 7N) - m_k - n_k - 2N.
$$
This simplifies to
$$
7 s_{k+1} - s_k - 2N = 13 m_k + 34 n_k - 9N,
$$
which is exactly the right side of (6.5). Therefore
$$
s_{k+2} = 7 s_{k+1} - s_k - 2N \qquad\text{for all } k\ge 0,
$$
establishing (6.1). (This is a genuine derivation valid for every $k$, not merely a
check on initial terms; it uses only the constant transition matrix $M$ and the
constant vector $\mathbf{b}$, which act identically at every step.)

### Step 7: Homogenization to an integer recurrence

Define
$$
w_k := 5 s_k - 2N \qquad (k\ge 0).
$$
Each $w_k\in\mathbb{Z}$ since $s_k\in\mathbb{Z}$ and $N\in\mathbb{Z}$. We claim
$$
w_{k+2} = 7 w_{k+1} - w_k \qquad\text{for all } k\ge 0. \tag{7.1}
$$
Indeed, using $s_j = (w_j + 2N)/5$ and (6.1),
$$
\begin{aligned}
w_{k+2} &= 5 s_{k+2} - 2N = 5\bigl(7 s_{k+1} - s_k - 2N\bigr) - 2N \\
&= 7\,(5 s_{k+1}) - (5 s_k) - 10N - 2N \\
&= 7\,(w_{k+1} + 2N) - (w_k + 2N) - 12N \\
&= 7 w_{k+1} - w_k + 14N - 2N - 12N \\
&= 7 w_{k+1} - w_k.
\end{aligned}
$$
This proves (7.1). The initial values are
$$
w_0 = 5 s_0 - 2N = 5\cdot 0 - 2N = -2N, \qquad
w_1 = 5 s_1 - 2N = 5\bigl(-(N+3)\bigr) - 2N = -5N - 15 - 2N = -7N - 15.
$$

### Step 8 (Key Lemma): The sequence $(w_k)$ is unbounded

We prove $(w_k)_{k\ge 0}$ is an unbounded sequence of integers. The argument is
elementary and uses no closed form.

**(a) Reversibility.** Rewriting (7.1) as
$$
w_k = 7 w_{k+1} - w_{k+2}, \tag{8.1}
$$
the second-order recurrence can be run backwards as well as forwards. Equivalently,
let $T:\mathbb{Z}^2\to\mathbb{Z}^2$ be the companion (pair) map
$$
T(a,b) = (b,\ 7b - a).
$$
Then for the pairs $\mathbf{p}_k := (w_k, w_{k+1})$ we have
$T(\mathbf{p}_k) = (w_{k+1}, 7 w_{k+1} - w_k) = (w_{k+1}, w_{k+2}) = \mathbf{p}_{k+1}$.
The map $T$ is linear with matrix $\bigl(\begin{smallmatrix}0&1\\-1&7\end{smallmatrix}\bigr)$,
of determinant $0\cdot 7 - 1\cdot(-1) = 1$, so $T\in\mathrm{GL}_2(\mathbb{Z})$; in
particular $T$ is a bijection of $\mathbb{Z}^2$ with integer inverse
$T^{-1}(a,b) = (7a - b,\ a)$ (corresponding to (8.1)).

**(b) Suppose, for contradiction, that $(w_k)$ is bounded.** Say $|w_k|\le B$ for
all $k$. Then every pair $\mathbf{p}_k = (w_k,w_{k+1})$ lies in the finite set
$S := \{-B,\dots,B\}^2 \cap \mathbb{Z}^2$, which has $(2B+1)^2$ elements. Let
$$
\Omega := \{\mathbf{p}_0, \mathbf{p}_1, \mathbf{p}_2,\dots\}\subseteq S
$$
be the forward orbit; $\Omega$ is finite (a subset of $S$). Since
$T(\mathbf{p}_k) = \mathbf{p}_{k+1}$, the orbit is $T$-invariant: $T(\Omega)\subseteq\Omega$.
As $T$ is injective (part (a)), its restriction $T|_\Omega:\Omega\to\Omega$ is an
**injective self-map of a finite set, hence a bijection** of $\Omega$. In
particular $\mathbf{p}_0$ has a $T$-preimage inside $\Omega$, i.e.
$\mathbf{p}_0 = T(\mathbf{p}_j) = \mathbf{p}_{j+1}$ for some $j\ge 0$ — but we can
say more directly: because $\Omega$ is finite there exist indices $0\le i<\ell$ with
$\mathbf{p}_i = \mathbf{p}_\ell$ (pigeonhole). Set $p := \ell - i \ge 1$. Applying the
inverse bijection $T^{-1}$ exactly $i$ times to $\mathbf{p}_i = \mathbf{p}_\ell$ and
using $T^{-1}(\mathbf{p}_{r}) = \mathbf{p}_{r-1}$ for $r\ge 1$ (valid because each
such $\mathbf{p}_{r-1}\in\Omega$ and $T(\mathbf{p}_{r-1}) = \mathbf{p}_r$ with $T$
injective), we obtain
$$
\mathbf{p}_0 = T^{-i}(\mathbf{p}_i) = T^{-i}(\mathbf{p}_\ell) = \mathbf{p}_{\ell - i} = \mathbf{p}_p.
$$
Thus $\mathbf{p}_0 = \mathbf{p}_p$ with $p\ge 1$. Since $T(\mathbf{p}_k)=\mathbf{p}_{k+1}$
deterministically, $\mathbf{p}_0=\mathbf{p}_p$ forces $\mathbf{p}_k = \mathbf{p}_{k+p}$
for all $k\ge 0$. Reading off first coordinates, the sequence is **purely periodic
with period $p$**:
$$
w_{k+p} = w_k \quad\text{for all } k\ge 0. \tag{8.2}
$$
(The point of the injectivity upgrade is precisely this: eventual periodicity plus
injectivity of $T$ rules out any pre-period, giving pure periodicity. This is what
lets us treat *every* index — including neighbors of the extremum below — as lying
in one full period.)

**(c) Extremal-index argument.** By (8.2) the set of values
$\{w_0, w_1, \dots, w_{p-1}\}$ contains every value of the whole sequence. Let
$$
M^\ast := \max_{0\le k\le p-1} w_k = \max_{k\ge 0} w_k,
$$
attained at some index $j$ (choose $0\le j\le p-1$, say). Consider the three
consecutive terms $w_{j-1}, w_j, w_{j+1}$, where indices are read **cyclically
modulo $p$** (legitimate by (8.2): the sequence is defined for all $k\ge 0$ and is
$p$-periodic, so $w_{j-1}$ means $w_{j-1+p}$ if $j=0$, and in all cases
$w_{j-1}, w_{j+1}$ are genuine terms of the sequence). Because $M^\ast$ is the
**global** maximum and every index is in the period,
$$
w_{j-1}\le M^\ast \qquad\text{and}\qquad w_{j+1}\le M^\ast. \tag{8.3}
$$
The recurrence (7.1) at index $j-1$ (i.e. $w_{j+1} = 7 w_j - w_{j-1}$) rearranges,
using (8.1), to
$$
w_{j-1} = 7 w_j - w_{j+1} = 7 M^\ast - w_{j+1} \ \ge\ 7 M^\ast - M^\ast = 6 M^\ast,
$$
where the inequality used $w_{j+1}\le M^\ast$ from (8.3). Combined with
$w_{j-1}\le M^\ast$ from (8.3),
$$
6 M^\ast \le w_{j-1} \le M^\ast \ \Longrightarrow\ 6 M^\ast \le M^\ast
\ \Longrightarrow\ 5 M^\ast \le 0 \ \Longrightarrow\ M^\ast \le 0.
$$
Hence $w_k \le M^\ast \le 0$ for all $k$.

Symmetrically, let $m^\ast := \min_{k} w_k$, attained at some index $j'$ in the
period, with neighbors satisfying $w_{j'-1}\ge m^\ast$, $w_{j'+1}\ge m^\ast$ (again
both are genuine terms by periodicity). Then
$$
w_{j'-1} = 7 m^\ast - w_{j'+1} \le 7 m^\ast - m^\ast = 6 m^\ast,
$$
and combined with $w_{j'-1}\ge m^\ast$ we get
$$
m^\ast \le w_{j'-1} \le 6 m^\ast \ \Longrightarrow\ m^\ast \le 6 m^\ast
\ \Longrightarrow\ 0 \le 5 m^\ast \ \Longrightarrow\ m^\ast \ge 0.
$$
Hence $w_k \ge m^\ast \ge 0$ for all $k$.

Combining, $0 \le w_k \le 0$, i.e. $w_k = 0$ for all $k$. In particular
$w_0 = -2N = 0$ and $w_1 = -7N - 15 = 0$. The first equation forces $N = 0$, but
then $w_1 = -7\cdot 0 - 15 = -15 \neq 0$ — a contradiction. (Indeed, the two
equations $-2N = 0$ and $-7N - 15 = 0$ have no common integer — nor even real —
solution, since the first gives $N = 0$ and the second $N = -15/7$.) 

This contradiction shows the assumption in (b) is false. **Therefore $(w_k)$ is
unbounded.**

### Step 9: Conclusion — infinitely many distinct solutions

Since $w_k = 5 s_k - 2N$ is an affine function of $s_k$ with nonzero slope $5$, the
sums $s_k = (w_k + 2N)/5$ form an **unbounded** integer sequence as well (a bounded
$s$ would make $w$ bounded). An unbounded sequence of integers takes infinitely many
distinct values: if its range $\{s_k : k\ge 0\}$ were finite, it would be bounded.
Hence $\{s_k : k\ge 0\}$ is an infinite subset of $\mathbb{Z}$.

Now consider the pairs $(m_k, n_k) = F^k(1,-1)$, $k\ge 0$. By Step 4 each is an
integer solution of $(\star)$. Two pairs with different sums are different pairs:
if $s_i\neq s_j$ then $(m_i,n_i)\neq(m_j,n_j)$, because $m_i+n_i = s_i \neq s_j =
m_j + n_j$. Since the sums $s_k$ assume infinitely many distinct values, the pairs
$(m_k,n_k)$ assume infinitely many distinct values. (Concretely, choosing for each
distinct sum-value one index achieving it produces an injection from the infinite
set of sum-values into the set of orbit pairs; thus the orbit contains infinitely
many distinct pairs.)

In particular the generated family is not the trivial repetition of the base point:
$(1,-1)$ has sum $0$, while $s_k$ is unbounded, so infinitely many orbit pairs lie
off the line $m+n = 0$ and the family genuinely escapes the base solution.

Therefore equation $(\star)$ has infinitely many integer solutions $(m,n)$, for every
integer $N$. An explicit such infinite family is
$$
\bigl\{\,F^k(1,-1) : k = 0,1,2,\dots\,\bigr\},
\qquad F(m,n) = (N - 3n - m,\ 3m + 8n - 2N),
$$
each member of which is verified to satisfy $(\star)$ by Steps 2–4. $\blacksquare$

### Verification appendix (not part of the proof, sanity check only)

For several values of $N\in\{-3,-1,0,2,5,7,13\}$, iterating
$F(m,n) = (N-3n-m,\ 3m+8n-2N)$ from $(1,-1)$ for $12$ steps yields $12$ distinct
integer pairs, each satisfying $(\star)$, and the sums $s_k$ obey
$s_{k+2} = 7 s_{k+1} - s_k - 2N$ with $s_0 = 0$, $s_1 = -(N+3)$; correspondingly
$w_k = 5 s_k - 2N$ obeys $w_{k+2} = 7 w_{k+1} - w_k$ with $w_0 = -2N$, $w_1 = -7N-15$.
For example, with $N = 0$: $F(1,-1) = (2,-5)$, $F^2 = (13,-34)$, with sums
$0, -3, -21, \dots$, all unbounded, confirming the mechanism above.
