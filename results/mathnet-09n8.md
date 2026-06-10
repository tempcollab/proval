## Status
solved

## Approaches tried
- Vieta jumping (other-root construction) + linear-recurrence growth argument — worked. The two "jump" maps are exact polynomial symmetries of the equation, generating an explicit infinite family of integer solutions; a second-order linear recurrence for the sum s = m+n has a dominant characteristic root of modulus > 1 with provably nonzero coefficient, so |s_k| → ∞ and the family contains infinitely many distinct pairs.

## Current best
Complete proof (below). Key facts established:
- The equation, viewed as a monic quadratic in m, has the substitution m ↦ N−3n−m as an exact symmetry (likewise n ↦ N−3m−n), each sending integer solutions to integer solutions.
- Starting from (1, N−2) and alternating the two jumps yields integer solutions whose sums s_k satisfy s_{k+2} = −3 s_{k+1} − s_k + 2N, s_0 = N−1, s_1 = 3−N.
- The closed form s_k = A r_1^k + B r_2^k + 2N/5 with r_{1,2} = (−3 ± √5)/2 has B = ((3N−5)+(N−3)√5)/10 ≠ 0 for every integer N (irrationality of √5), and |r_2| = (3+√5)/2 > 1, so |s_k| → ∞.

## Full proof

Fix an integer $N$ throughout. We must produce infinitely many integer pairs $(m,n)$ satisfying
$$
(m+n)^2 + mn + 1 = N(m+n). \tag{$\star$}
$$
Here "infinitely many" ranges over the pairs $(m,n)$; $N$ is a fixed parameter.

Define the polynomial
$$
F(m,n) \;=\; (m+n)^2 + mn + 1 - N(m+n).
$$
Then $(m,n)$ is a solution of $(\star)$ iff $F(m,n) = 0$.

### Step 1: The polynomial as a monic quadratic in $m$, and the base solution

Expanding,
$$
(m+n)^2 + mn + 1 - N(m+n) = m^2 + 2mn + n^2 + mn + 1 - Nm - Nn,
$$
so collecting powers of $m$,
$$
F(m,n) \;=\; m^2 + (3n - N)\,m + (n^2 - Nn + 1). \tag{1}
$$
This is **monic** in $m$ with integer coefficients (for integer $n,N$). By symmetry of the original expression under swapping $m\leftrightarrow n$ (every term $(m+n)^2$, $mn$, $1$, $N(m+n)$ is symmetric), we also have
$$
F(m,n) \;=\; n^2 + (3m - N)\,n + (m^2 - Nm + 1), \tag{1$'$}
$$
a monic integer quadratic in $n$.

**Base solution.** Take $(m_0, n_0) = (1, N-2)$. Then $m_0 + n_0 = N-1$ and $m_0 n_0 = N-2$, so
$$
(m_0+n_0)^2 + m_0 n_0 + 1 = (N-1)^2 + (N-2) + 1 = N^2 - 2N + 1 + N - 1 = N^2 - N,
$$
while
$$
N(m_0 + n_0) = N(N-1) = N^2 - N.
$$
The two sides are equal, so $F(1, N-2) = 0$ and $(1, N-2)$ is an integer solution of $(\star)$.

### Step 2: The two jump maps (Vieta lemma)

**Lemma (jump-$m$).** If $(m,n)$ is an integer solution of $(\star)$, then $(N - 3n - m,\; n)$ is also an integer solution.

*Proof.* Fix the value of $n$. By (1), $m$ is a root of the monic quadratic
$$
X^2 + (3n - N)X + (n^2 - Nn + 1) = 0
$$
in the variable $X$. This polynomial has two roots (counted with multiplicity); call the other root $m'$. By **Vieta's formulas** for a monic quadratic $X^2 + bX + c$, the sum of the roots equals $-b$, hence
$$
m + m' = -(3n - N) = N - 3n, \qquad\text{so}\qquad m' = N - 3n - m.
$$
Since $N$, $n$, $m$ are integers, $m' = N - 3n - m$ is an integer. Because $m'$ is a root of the same quadratic (whose constant and linear terms are exactly the coefficients in (1) for this $n$), we have $F(m', n) = 0$, i.e. $(N - 3n - m,\, n)$ is an integer solution of $(\star)$.

(Independent confirmation: substituting $m \mapsto N - 3n - m$ into $F$ and expanding gives
$$
F(N-3n-m,\,n) - F(m,n) = 0
$$
identically as a polynomial in $m,n,N$, so $m \mapsto N - 3n - m$ is an exact symmetry of $F$; it therefore maps any zero of $F$ to a zero of $F$. This was verified by direct expansion.) $\square$

**Lemma (jump-$n$).** If $(m,n)$ is an integer solution of $(\star)$, then $(m,\; N - 3m - n)$ is also an integer solution.

*Proof.* Identical to the previous lemma using the symmetric form (1$'$): for fixed $m$, the integer $n$ is a root of the monic integer quadratic $X^2 + (3m-N)X + (m^2 - Nm + 1) = 0$, whose roots sum to $N - 3m$ by Vieta's formulas, so the other root is $n' = N - 3m - n \in \mathbb{Z}$ and $F(m, n') = 0$. (Equivalently, $n \mapsto N - 3m - n$ is an exact symmetry of $F$, again verified by expansion.) $\square$

### Step 3: The alternating-jump sequence

Define a sequence of integer pairs $(m_k, n_k)$ by $(m_0, n_0) = (1, N-2)$ and, for $k \ge 0$,
$$
(m_{k+1}, n_{k+1}) = \begin{cases} (N - 3n_k - m_k,\; n_k) & \text{if } k \text{ is even (jump-$m$)},\\[2pt] (m_k,\; N - 3m_k - n_k) & \text{if } k \text{ is odd (jump-$n$)}. \end{cases}
$$
By Step 1, $(m_0,n_0)$ is an integer solution. By the two lemmas of Step 2 and induction on $k$, every $(m_k, n_k)$ is an integer solution of $(\star)$.

### Step 4: A linear recurrence for the sums

Let $s_k = m_k + n_k \in \mathbb{Z}$. We derive a recurrence for $s_k$ directly from the jump formulas.

If step $k$ is a jump-$m$ (i.e. $k$ even), then $n_{k+1} = n_k$ and $m_{k+1} = N - 3n_k - m_k$, so
$$
s_{k+1} = m_{k+1} + n_{k+1} = (N - 3n_k - m_k) + n_k = N - m_k - 2n_k. \tag{2a}
$$
If step $k$ is a jump-$n$ ($k$ odd), then $m_{k+1} = m_k$ and $n_{k+1} = N - 3m_k - n_k$, so
$$
s_{k+1} = m_{k+1} + n_{k+1} = m_k + (N - 3m_k - n_k) = N - 2m_k - n_k. \tag{2b}
$$

Now compute $s_{k+2}$ in terms of $s_{k+1}$ and $s_k$. Consider $k$ even (so step $k$ is jump-$m$ and step $k+1$ is jump-$n$). Then:

- From (2a): $s_{k+1} = N - m_k - 2n_k$, and we still have $m_{k+1} = N - 3n_k - m_k$, $n_{k+1} = n_k$.
- Apply (2b) at index $k+1$: $s_{k+2} = N - 2m_{k+1} - n_{k+1} = N - 2(N - 3n_k - m_k) - n_k = N - 2N + 6n_k + 2m_k - n_k = -N + 2m_k + 5n_k$.

We want to express $-N + 2m_k + 5n_k$ as $\alpha s_{k+1} + \beta s_k + \gamma$. Using $s_k = m_k + n_k$ and $s_{k+1} = N - m_k - 2n_k$:
$$
-3 s_{k+1} - s_k + 2N = -3(N - m_k - 2n_k) - (m_k + n_k) + 2N = -3N + 3m_k + 6n_k - m_k - n_k + 2N = -N + 2m_k + 5n_k.
$$
This is exactly $s_{k+2}$. Hence for $k$ even,
$$
s_{k+2} = -3 s_{k+1} - s_k + 2N. \tag{3}
$$

For $k$ odd (step $k$ jump-$n$, step $k+1$ jump-$m$), the computation is symmetric: from (2b) $s_{k+1} = N - 2m_k - n_k$ with $m_{k+1} = m_k$, $n_{k+1} = N - 3m_k - n_k$; applying (2a) at index $k+1$,
$$
s_{k+2} = N - m_{k+1} - 2n_{k+1} = N - m_k - 2(N - 3m_k - n_k) = -N + 5m_k + 2n_k,
$$
and
$$
-3 s_{k+1} - s_k + 2N = -3(N - 2m_k - n_k) - (m_k + n_k) + 2N = -3N + 6m_k + 3n_k - m_k - n_k + 2N = -N + 5m_k + 2n_k = s_{k+2}.
$$
So (3) holds for $k$ odd as well. Therefore the single recurrence
$$
\boxed{\,s_{k+2} = -3\, s_{k+1} - s_k + 2N\,} \qquad (k \ge 0) \tag{3}
$$
holds for all $k \ge 0$.

**Initial values.** $s_0 = m_0 + n_0 = 1 + (N-2) = N - 1$. For $s_1$: step $0$ is jump-$m$, so by (2a), $s_1 = N - m_0 - 2n_0 = N - 1 - 2(N-2) = N - 1 - 2N + 4 = 3 - N$. Thus
$$
s_0 = N - 1, \qquad s_1 = 3 - N. \tag{4}
$$

### Step 5: Closed form and unboundedness

The recurrence (3) is a second-order linear recurrence with constant coefficients and inhomogeneous term $2N$. Its homogeneous part $s_{k+2} + 3 s_{k+1} + s_k = 0$ has characteristic equation
$$
r^2 + 3r + 1 = 0, \qquad r_{1,2} = \frac{-3 \pm \sqrt{5}}{2}.
$$
Their magnitudes are
$$
|r_1| = \frac{3 - \sqrt 5}{2} \approx 0.382 < 1, \qquad |r_2| = \frac{3 + \sqrt 5}{2} \approx 2.618 > 1, \tag{5}
$$
(both roots are negative reals; $\tfrac{3-\sqrt5}{2}>0$ since $\sqrt5<3$). The roots are distinct ($r_1 \ne r_2$ because $\sqrt 5 \ne 0$).

**Particular solution.** Since $r = 1$ is *not* a root (indeed $1^2 + 3\cdot 1 + 1 = 5 \ne 0$), the constant inhomogeneous term admits a constant particular solution $s_k \equiv p$, where $p = -3p - p + 2N$, i.e. $5p = 2N$, so $p = \tfrac{2N}{5}$. Therefore the general solution of (3) is
$$
s_k = A\, r_1^k + B\, r_2^k + \frac{2N}{5}, \tag{6}
$$
for constants $A, B$ determined by the initial values (4); this is valid since $r_1 \ne r_2$, so $\{r_1^k, r_2^k\}$ together with the particular solution span all solutions of (3).

**Determining $A, B$.** Imposing $s_0 = N - 1$ and $s_1 = 3 - N$ in (6):
$$
A + B + \frac{2N}{5} = N - 1, \qquad A r_1 + B r_2 + \frac{2N}{5} = 3 - N.
$$
Subtract $\tfrac{2N}{5}$ throughout: $A + B = N - 1 - \tfrac{2N}{5} = \tfrac{3N - 5}{5}$ and $A r_1 + B r_2 = 3 - N - \tfrac{2N}{5} = \tfrac{15 - 7N}{5}$. Solving the $2\times 2$ system (with $r_1 - r_2 = \sqrt 5$),
$$
B = \frac{(A r_1 + B r_2) - r_1(A+B)}{r_2 - r_1} = \frac{\tfrac{15-7N}{5} - \tfrac{-3+\sqrt5}{2}\cdot \tfrac{3N-5}{5}}{-\sqrt 5}.
$$
Carrying out the algebra (the numerator over $5$ is $\tfrac{15-7N}{5} - \tfrac{(-3+\sqrt5)(3N-5)}{10} = \tfrac{2(15-7N) - (-3+\sqrt5)(3N-5)}{10} = \tfrac{30 - 14N + (9N - 15) - \sqrt5(3N-5)}{10} = \tfrac{15 - 5N - \sqrt5(3N-5)}{10}$, and dividing by $-\sqrt5$) gives
$$
B = \frac{(3N - 5) + (N - 3)\sqrt 5}{10}. \tag{7}
$$
(This value of $B$, together with the corresponding $A$, was confirmed to satisfy both initial conditions and reproduce (4) by direct symbolic computation.)

**$B \neq 0$ for every integer $N$.** We use the elementary fact:

> **Irrationality lemma.** If $a, b \in \mathbb{Q}$ and $a + b\sqrt 5 = 0$, then $a = b = 0$.
>
> *Proof.* If $b \neq 0$, then $\sqrt 5 = -a/b \in \mathbb{Q}$, contradicting the irrationality of $\sqrt 5$. (That $\sqrt 5$ is irrational: if $\sqrt5 = p/q$ in lowest terms then $5q^2 = p^2$, so $5 \mid p^2$, hence $5 \mid p$; writing $p = 5p'$ gives $5q^2 = 25p'^2$, i.e. $q^2 = 5p'^2$, so $5 \mid q$ as well, contradicting $\gcd(p,q)=1$.) Hence $b = 0$, and then $a = 0$. $\square$

By (7), $10B = (3N - 5) + (N - 3)\sqrt 5$, where $3N - 5$ and $N - 3$ are rational (indeed integer). If $B = 0$, the irrationality lemma forces $3N - 5 = 0$ **and** $N - 3 = 0$ simultaneously, i.e. $N = 5/3$ and $N = 3$ at once — impossible. Therefore $B \neq 0$ for **every** integer $N$ (in fact for every rational $N$).

**Unboundedness.** By (5), $|r_1| < 1$, so $|A\, r_1^k| = |A|\,|r_1|^k \le |A|$ for all $k \ge 0$, and the term $A r_1^k + \tfrac{2N}{5}$ is bounded:
$$
\left| A\, r_1^k + \tfrac{2N}{5} \right| \le |A| + \tfrac{2|N|}{5} =: C \quad\text{for all } k \ge 0.
$$
Meanwhile $|B\, r_2^k| = |B|\,|r_2|^k \to \infty$ as $k \to \infty$, since $|B| > 0$ and $|r_2| > 1$. By the reverse triangle inequality applied to (6),
$$
|s_k| \ge |B\, r_2^k| - \left| A\, r_1^k + \tfrac{2N}{5} \right| \ge |B|\,|r_2|^k - C \;\longrightarrow\; \infty.
$$
Hence $|s_k| \to \infty$ as $k \to \infty$.

### Step 6: Infinitely many distinct solutions

Each $s_k = m_k + n_k$ is an integer (Step 3). Since $|s_k| \to \infty$, the sequence $(s_k)_{k\ge 0}$ is unbounded; in particular its set of values $\{s_k : k \ge 0\}$ is an unbounded subset of $\mathbb{Z}$, hence infinite (every finite set of integers is bounded). Therefore the integers $s_k$ take infinitely many distinct values.

Finally, the map $(m,n) \mapsto m + n$ is well-defined on pairs, so two pairs with different sums are different pairs: if $s_k \ne s_\ell$ then $(m_k, n_k) \ne (m_\ell, n_\ell)$. Since $\{s_k\}$ contains infinitely many distinct values, the family $\{(m_k, n_k) : k \ge 0\}$ contains infinitely many distinct integer pairs, each of which (Step 3) solves $(\star)$.

Therefore, for every integer $N$, the equation $(m+n)^2 + mn + 1 = N(m+n)$ has infinitely many integer solutions $(m,n)$. $\blacksquare$

### Remark (explicit family)

Solving the recurrence (3) with (4) gives the closed forms (verified by the recurrence and initial values), e.g. the first sums are
$$
s_0 = N-1,\ s_1 = 3-N,\ s_2 = 4N-8,\ s_3 = 21-9N,\ s_4 = 25N-55,\ s_5 = 144-64N,\ \dots
$$
The coefficients $1, 1, 4, 9, 25, 64, 169, 441, 1156, \dots$ are the squares of Fibonacci numbers $F_k$ (since $r_{1,2}^k$ relate to Fibonacci numbers via $-3 = -(F_3/F_2)$-type identities), confirming the unbounded growth concretely; this explicit growth is not needed for the proof, which rests only on $|r_2| > 1$ and $B \neq 0$.
