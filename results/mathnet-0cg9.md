## Status
solved

## Approaches tried
- CRT multiplicativity of the root count + per-prime-power analysis (quadratic-residue parity for primes ≠ 11, Hensel lifting of simple roots, and a direct non-lift computation at 11²) — worked; yields the unique answer n = 11.

## Current best
Complete proof below. The root-counting function N(n) = #{x ∈ Z_n : x² − 3x + 5 = 0} is multiplicative over coprime factors (CRT). For every prime p ≠ 11 and every k ≥ 1, N(p^k) ∈ {0, 2} (even); N(2)=0; N(11)=1; and N(11^k)=0 for k ≥ 2. Assembling via CRT, N(n)=1 forces n = 11.

## Full proof

Throughout, set
$$f(x) = x^2 - 3x + 5,$$
and for an integer $n \ge 1$ define
$$N(n) = \#\{\, x \in \mathbb{Z}_n : f(x) = 0 \text{ in } \mathbb{Z}_n \,\} = \#\{\, x \in \{0,1,\dots,n-1\} : n \mid x^2 - 3x + 5 \,\}.$$
We must determine all $n \ge 2$ with $N(n) = 1$, and we will prove this set is exactly $\{11\}$.

We adopt the standard convention $N(1) = 1$: the ring $\mathbb{Z}_1$ is the zero ring with a single element $0$, and $f(0) = 0$ there, so there is exactly one solution. (This is the empty-product base case used in the CRT assembly.)

---

### Step 1. The discriminant identity.

For every $x$ we have the polynomial identity
$$4f(x) = (2x-3)^2 + 11.$$
Indeed, expanding the right-hand side,
$$(2x-3)^2 + 11 = 4x^2 - 12x + 9 + 11 = 4x^2 - 12x + 20 = 4(x^2 - 3x + 5) = 4f(x),$$
which holds coefficient-by-coefficient and therefore in every commutative ring. The discriminant of $f$ is $D = (-3)^2 - 4\cdot 1\cdot 5 = 9 - 20 = -11$, consistent with $4f(x) = (2x-3)^2 - D = (2x-3)^2 + 11$.

We will also use $f'(x) = 2x - 3$ (the formal derivative).

---

### Step 2. CRT multiplicativity: $N$ is multiplicative over coprime factors.

**Claim.** If $\gcd(a,b) = 1$ then $N(ab) = N(a)\,N(b)$. Consequently, if $n = \prod_i p_i^{k_i}$ is the prime factorization of $n$, then
$$N(n) = \prod_i N\!\left(p_i^{k_i}\right).$$

**Proof.** By the Chinese Remainder Theorem (Knowledge base: *Modular arithmetic, CRT*), the map
$$\varphi:\ \mathbb{Z}_{ab} \;\xrightarrow{\ \cong\ }\; \mathbb{Z}_a \times \mathbb{Z}_b, \qquad \varphi(x) = (x \bmod a,\ x \bmod b)$$
is an isomorphism of commutative rings when $\gcd(a,b)=1$. A ring isomorphism preserves the ring operations, so for any $x$,
$$\varphi\bigl(f(x)\bigr) = \bigl(f(x \bmod a),\ f(x \bmod b)\bigr).$$
Hence $f(x) = 0$ in $\mathbb{Z}_{ab}$ if and only if both $f(x \bmod a) = 0$ in $\mathbb{Z}_a$ and $f(x \bmod b) = 0$ in $\mathbb{Z}_b$ (because $\varphi(0)=(0,0)$ and $\varphi$ is injective). Thus $\varphi$ restricts to a bijection
$$\{x \in \mathbb{Z}_{ab} : f(x)=0\} \;\longleftrightarrow\; \{u \in \mathbb{Z}_a : f(u)=0\}\times\{v \in \mathbb{Z}_b : f(v)=0\}.$$
Counting both sides gives $N(ab) = N(a)\,N(b)$. The factorization formula follows by induction on the number of prime-power factors, using $N(1)=1$ as the base case. $\square$

So to understand $N(n)$ it suffices to understand $N(p^k)$ for each prime power, and we treat the primes $\ne 11$, the prime $2$, and the prime $11$ separately.

---

### Step 3. The count modulo an odd prime $p \ne 11$ is even (in $\{0,2\}$).

Let $p$ be an odd prime, $p \ne 11$. Since $p$ is odd, $2$ is invertible in $\mathbb{Z}_p$, and the affine map
$$\psi: \mathbb{Z}_p \to \mathbb{Z}_p,\qquad \psi(x) = 2x - 3$$
is a bijection (its inverse is $y \mapsto 2^{-1}(y+3)$). By the identity of Step 1, in $\mathbb{Z}_p$,
$$f(x) = 0 \iff 4f(x) = 0 \iff (2x-3)^2 = -11 \iff \psi(x)^2 = -11,$$
where the first equivalence uses that $4$ is invertible mod $p$ (as $p$ is odd). Therefore $\psi$ restricts to a bijection
$$\{x \in \mathbb{Z}_p : f(x) = 0\} \;\longleftrightarrow\; \{y \in \mathbb{Z}_p : y^2 = -11\},$$
so
$$N(p) = \#\{y \in \mathbb{Z}_p : y^2 = -11\}.$$

Now $-11 \not\equiv 0 \pmod p$ because $p \ne 11$ (and $p \ne 11$ is the only odd prime dividing $11$). Hence:

- The map $y \mapsto -y$ is an involution on the solution set $S = \{y : y^2 = -11\}$. It has no fixed point: $y = -y$ would force $2y = 0$, hence $y = 0$ (as $p$ is odd), but $0^2 = 0 \ne -11$. So $S$ is partitioned into disjoint $2$-element orbits $\{y, -y\}$, giving $|S|$ even.

- Moreover $|S| \le 2$: a nonzero polynomial of degree $2$ over the field $\mathbb{Z}_p$ has at most $2$ roots, and $y^2 + 11$ is degree $2$.

Therefore $N(p) = |S| \in \{0, 2\}$. (Equivalently, by the *Quadratic residues, Legendre symbol* entry of the knowledge base, $N(p) = 1 + \left(\frac{-11}{p}\right) \in \{0,2\}$; we only need the parity, which the pairing argument establishes directly.)

---

### Step 4. The count modulo $2$ is $0$.

In $\mathbb{Z}_2$, $f(0) = 5 \equiv 1$ and $f(1) = 1 - 3 + 5 = 3 \equiv 1$. Both nonzero, so
$$N(2) = 0.$$
(Here we cannot use the completing-the-square argument of Step 3, since $2$ is not invertible mod $2$; the direct check above is what we use.)

---

### Step 5. Hensel lift: $N(p^k) = N(p)$ for every prime $p \ne 11$ and every $k \ge 1$.

We show every root of $f$ modulo such a $p$ is **simple** ($f'(r) \not\equiv 0 \pmod p$), and then invoke Hensel's lemma.

**Simplicity.** Let $p \ne 11$ be a prime and let $r$ be a root of $f$ mod $p$, i.e. $f(r) \equiv 0 \pmod p$. We claim $f'(r) = 2r - 3 \not\equiv 0 \pmod p$.

- If $p$ is odd: by the identity of Step 1, $(2r-3)^2 = 4f(r) - 11$, and since $f(r) \equiv 0 \pmod p$ this gives $(2r-3)^2 \equiv -11 \pmod p$. If we also had $f'(r) = 2r - 3 \equiv 0 \pmod p$, then $0 \equiv (2r-3)^2 \equiv -11 \pmod p$, i.e. $p \mid 11$, contradicting $p \ne 11$. Hence $f'(r) \not\equiv 0 \pmod p$.

- If $p = 2$: by Step 4 there is no root $r$ at all, so the claim is vacuously true. (Equivalently $f'(r) = 2r - 3$ is odd, hence $\not\equiv 0 \pmod 2$.)

Thus every root mod $p$ is simple.

**Lifting.** By Hensel's lemma (Knowledge base: *Hensel's lemma*), each simple root $r$ of $f$ modulo $p$ (one with $f'(r) \not\equiv 0 \pmod p$) lifts to a **unique** root of $f$ modulo $p^k$ for every $k \ge 1$, and conversely every root mod $p^k$ reduces mod $p$ to a root mod $p$. More precisely, reduction modulo $p$ gives a map from roots mod $p^k$ to roots mod $p$; Hensel's lemma states that, when every root mod $p$ is simple, this reduction map is a bijection (each simple root has exactly one preimage). Therefore
$$N(p^k) = N(p) \qquad (k \ge 1).$$
Combining with Steps 3 and 4: for every prime $p \ne 11$ and every $k \ge 1$,
$$N(p^k) = N(p) \in \{0, 2\}. \tag{$\star$}$$

(Here $p=2$ is included: $N(2^k) = N(2) = 0$ for all $k$.)

---

### Step 6. Modulo $11$: a single (double) root, $N(11) = 1$.

Work in $\mathbb{Z}_{11}$. We claim $f(x) \equiv (x-7)^2 \pmod{11}$. Expanding,
$$(x-7)^2 = x^2 - 14x + 49.$$
Modulo $11$: $-14 \equiv -14 + 22 = 8 \equiv -3 \pmod{11}$ and $49 \equiv 49 - 44 = 5 \pmod{11}$. Hence
$$(x-7)^2 \equiv x^2 - 3x + 5 = f(x) \pmod{11}.$$
Since $\mathbb{Z}_{11}$ is a field (integral domain), $f(x) = (x-7)^2 = 0$ if and only if $x - 7 = 0$, i.e. $x = 7$. There is exactly one solution, so
$$N(11) = 1.$$
As a direct check, $f(7) = 49 - 21 + 5 = 33 = 3 \cdot 11 \equiv 0 \pmod{11}$.

---

### Step 7. Modulo $11^2$: no root, hence $N(11^k) = 0$ for all $k \ge 2$.

By Step 6, any root of $f$ modulo $121$ must reduce modulo $11$ to the unique root $7$, hence be of the form $x = 7 + 11t$ for some integer $t \in \{0,1,\dots,10\}$. Compute exactly:
$$f(7 + 11t) = (7+11t)^2 - 3(7+11t) + 5.$$
Expanding,
$$(7+11t)^2 = 49 + 154t + 121t^2, \qquad -3(7+11t) = -21 - 33t,$$
so
$$f(7+11t) = (49 - 21 + 5) + (154 - 33)t + 121 t^2 = 33 + 121 t + 121 t^2 = 33 + 121(t + t^2).$$
Therefore
$$f(7+11t) \equiv 33 \pmod{121}\qquad\text{for every integer } t.$$
Since $33$ is not divisible by $121$ (indeed $11^2 = 121 > 33 > 0$, and $33 = 3\cdot 11$ has $11$-adic valuation $1$, not $\ge 2$), we get $f(7+11t) \not\equiv 0 \pmod{121}$ for all $t$. As these are the only candidate residues, $f$ has **no** root modulo $121$:
$$N(121) = N(11^2) = 0.$$

For any $k \ge 2$, reduction modulo $121$ sends a root of $f$ mod $11^k$ to a root of $f$ mod $121$ (since $121 \mid 11^k$, the congruence $f(x)\equiv 0 \pmod{11^k}$ implies $f(x)\equiv 0\pmod{121}$). As there are no roots mod $121$, there are none mod $11^k$:
$$N(11^k) = 0 \qquad (k \ge 2). \tag{$\dagger$}$$

To summarize the count at the prime $11$:
$$N(11^0) = N(1) = 1, \qquad N(11^1) = 1, \qquad N(11^k) = 0 \ (k \ge 2). \tag{$\ddagger$}$$

---

### Step 8. Assembly: $N(n) = 1 \iff n = 11$.

Let $n \ge 2$. Write
$$n = 11^a \cdot m, \qquad a \ge 0,\ \gcd(11, m) = 1,$$
where $11^a$ is the exact power of $11$ dividing $n$ and $m$ is the $11$-free part. By Step 2 (CRT multiplicativity),
$$N(n) = N(11^a) \cdot N(m), \qquad N(m) = \prod_{p^k \,\|\, m} N(p^k),$$
the product running over the prime powers $p^k$ exactly dividing $m$ (so every $p \ne 11$).

**The factor $N(m)$.** By $(\star)$, each factor $N(p^k)$ with $p \ne 11$ lies in $\{0, 2\}$. Hence the product $N(m)$ is:
- $0$ if some factor is $0$; otherwise
- a product of factors all equal to $2$, namely $N(m) = 2^{\,t}$ where $t$ is the number of distinct primes dividing $m$ (each contributing a factor $2$).

In particular, $N(m) \in \{0\} \cup \{2^t : t \ge 1\}$ when $m > 1$, i.e. $N(m)$ is $0$ or an even number $\ge 2$. When $m = 1$ the product is empty, so $N(m) = N(1) = 1$. Crucially:
$$N(m) = 1 \iff m = 1, \tag{A}$$
because for $m > 1$ the value $N(m)$ is either $0$ or even ($\ge 2$), never $1$.

**The factor $N(11^a)$.** By $(\ddagger)$: $N(11^0)=1$, $N(11^1)=1$, and $N(11^a)=0$ for $a \ge 2$.

Now we case on $a$. The cases $a=0$, $a=1$, $a\ge 2$ are exhaustive and disjoint.

- **Case $a \ge 2$.** Then $N(11^a) = 0$, so $N(n) = 0 \cdot N(m) = 0 \ne 1$. No solution.

- **Case $a = 0$.** Then $n = m \ge 2$, so $m > 1$, and $N(n) = N(11^0)\cdot N(m) = 1 \cdot N(m) = N(m)$. By (A), since $m > 1$, $N(m) \ne 1$. So $N(n) \ne 1$. No solution.

- **Case $a = 1$.** Then $N(n) = N(11)\cdot N(m) = 1 \cdot N(m) = N(m)$. By (A), $N(n) = 1$ if and only if $m = 1$, i.e. $n = 11^1 \cdot 1 = 11$.

Therefore, over all $n \ge 2$,
$$\boxed{\,N(n) = 1 \iff n = 11\,.}$$

---

### Step 9. Verification of the answer $n = 11$.

We verify directly that $n = 11$ indeed gives a unique solution. In $\mathbb{Z}_{11}$, by Step 6, $f(x) \equiv (x-7)^2$, whose only root is $x = 7$, and
$$f(7) = 7^2 - 3\cdot 7 + 5 = 49 - 21 + 5 = 33 = 3 \cdot 11 \equiv 0 \pmod{11}.$$
For completeness, no other residue works: for $x \ne 7$ in $\mathbb{Z}_{11}$, $(x-7)^2 \ne 0$ since $\mathbb{Z}_{11}$ is a field. Hence the equation $x^2 - 3x + 5 = 0$ has exactly one solution, $x = 7$, in $\mathbb{Z}_{11}$. This confirms $N(11) = 1$.

(As a sanity check on the bound: the smallest competing cases all fail — $N(2)=0$, $N(11^2)=N(121)=0$, $N(p)\in\{0,2\}$ for $p\in\{3,5,7,13,\dots\}$ — exactly as required by the argument above.)

---

### Conclusion.

The unique positive integer $n \ge 2$ for which $x^2 - 3x + 5 = 0$ has a unique solution in $(\mathbb{Z}_n, +, \cdot)$ is
$$\boxed{n = 11},$$
with the unique solution $x = 7$. $\blacksquare$
