## Status
solved

## Approaches tried
- Direct proof. Spine: integer-divisibility ⇒ fiber-constancy (Lemma A) ⇒ one-variable-at-a-time
  polynomial divisibility forced by INTEGRAL degree-dominance (Lemma B) ⇒ GLOBAL factorization of
  P₂ through P₁ via the base-P₁ (Euclidean) expansion, the transverse remainder blocks forced to be
  constants by reducing mod (P₁−t) for the infinitely many t∈T (Lemma C) ⇒ symmetric factorization
  Q₂=S(Q₁) ⇒ matching R=S by an elementary divisibility: (u−t)|(R(u)−S(t)) in ℤ for u∈U,t∈T plus the
  integer finite-difference fact (x−y)|(F(x)−F(y)) force e(t)=R(t)−S(t) to be a fixed integer divisible
  by infinitely many distinct u−t, hence 0; e vanishes on the infinite set T so e≡0. — worked. The
  base-P₁ expansion / constancy-of-blocks, the contrast case P₂=x₁ that does NOT factor through, the
  integer finite-difference quotient, and the end-to-end (star)-consistency were all verified in sympy.
- (Outline's Lemma B′ + bivariate Lagrange interpolation route): superseded. The direct base-P₁
  factorization (Lemma C) already yields the polynomial identities, and a 4-line divisibility replaces
  the interpolation for matching R=S. Recorded here so the heavier machinery is not re-attempted.

## Current best
Complete proof below.

## Full proof

Notation. Write $a=(a_1,\dots,a_m)\in\mathbb Z^m$, $b=(b_1,\dots,b_n)\in\mathbb Z^n$; let
$x=(x_1,\dots,x_m)$, $y=(y_1,\dots,y_n)$ be formal variables. $P_1,P_2\in\mathbb Z[x]$ and
$Q_1,Q_2\in\mathbb Z[y]$ are all non-constant. The hypothesis is

$$(\star)\qquad\text{for all }a\in\mathbb Z^m,\ b\in\mathbb Z^n\text{ with }P_1(a)\ne Q_1(b):\quad
\bigl(P_1(a)-Q_1(b)\bigr)\ \big|\ \bigl(P_2(a)-Q_2(b)\bigr)\ \text{ in }\mathbb Z .$$

Put $U:=\{P_1(a):a\in\mathbb Z^m\}\subseteq\mathbb Z$ and $T:=\{Q_1(b):b\in\mathbb Z^n\}\subseteq\mathbb Z$.

We first record two elementary tools.

**Lemma D (Vanishing on $\mathbb Z^k$ forces the zero polynomial).**
*If $F\in\mathbb K[z_1,\dots,z_k]$ over a field $\mathbb K\supseteq\mathbb Q$ vanishes at every point of
$\mathbb Z^k$, then $F=0$. In particular a nonzero polynomial has an integer point where it does not
vanish.*

*Proof.* Induction on $k$. For $k=1$, a nonzero polynomial of degree $D$ has $\le D$ roots, so it
cannot vanish on the infinite set $\mathbb Z$. For $k>1$, write $F=\sum_{j}c_j(z_1,\dots,z_{k-1})z_k^j$;
fixing $(z_1,\dots,z_{k-1})\in\mathbb Z^{k-1}$ gives a one-variable polynomial in $z_k$ vanishing on
$\mathbb Z$, so all $c_j(z_1,\dots,z_{k-1})=0$; by induction each $c_j=0$, hence $F=0$. $\square$

**Fact 0 (Infinitely-many-roots / agreement).** A one-variable polynomial over a field that vanishes at
infinitely many points is $0$; two such polynomials agreeing at infinitely many points are equal.

**$U$ and $T$ are infinite.** $P_1$ is non-constant, hence depends on some variable $x_i$; the
one-variable polynomial $s\mapsto P_1(0,\dots,0,s,0,\dots,0)$ (s in slot $i$) is non-constant, so it is
unbounded and takes infinitely many distinct integer values, all in $U$. Thus $U$ is infinite;
likewise $T$.

---

### Step 1 (Fiber constancy). Lemma A.

**Lemma A.** *If $a,a'\in\mathbb Z^m$ have $P_1(a)=P_1(a')$ then $P_2(a)=P_2(a')$ (and symmetrically for
$Q$). Hence there are functions $f:U\to\mathbb Z$ and $g:T\to\mathbb Z$ with $P_2(a)=f(P_1(a))$ and
$Q_2(b)=g(Q_1(b))$ for all $a,b$.*

*Proof.* Let $u=P_1(a)=P_1(a')$. For each $t\in T$ with $t\ne u$ (the set $T\setminus\{u\}$ is infinite),
choose $b$ with $Q_1(b)=t$. Both pairs $(a,b)$, $(a',b)$ have $P_1\ne Q_1$, so $(\star)$ gives
$(u-t)\mid(P_2(a)-Q_2(b))$ and $(u-t)\mid(P_2(a')-Q_2(b))$; subtracting,
$(u-t)\mid(P_2(a)-P_2(a'))$. The fixed integer $P_2(a)-P_2(a')$ is divisible by the infinitely many
distinct integers $u-t$ ($t\in T\setminus\{u\}$); since a nonzero integer has only finitely many
divisors, $P_2(a)-P_2(a')=0$. Define $f(u)$ as the common value of $P_2$ on the fiber $\{P_1=u\}$. The
$Q$-statement is identical with the roles swapped. $\square$

Two consequences used below. First, for all $a$ and all $t\in T$ with $P_1(a)\ne t$, choosing $b$ with
$Q_1(b)=t$ (so $Q_2(b)=g(t)$ by Lemma A) and applying $(\star)$:

$$(\star')\qquad \bigl(P_1(a)-t\bigr)\ \big|\ \bigl(P_2(a)-g(t)\bigr)\quad\text{in }\mathbb Z,\qquad t\in T.$$

Symmetrically $\bigl(Q_1(b)-u\bigr)\mid\bigl(Q_2(b)-f(u)\bigr)$ for all $b$ and $u\in U$ with $Q_1(b)\ne u$.

---

### Step 2 (Integer divisibility $\Rightarrow$ polynomial divisibility). Lemma B.

**Lemma B.** *For every fixed $t\in T$, $\,(P_1(x)-t)\mid(P_2(x)-g(t))$ in $\mathbb Q[x]$. Symmetrically,
for every $u\in U$, $(Q_1(y)-u)\mid(Q_2(y)-f(u))$ in $\mathbb Q[y]$.*

*Proof.* Fix $t\in T$. Since $P_1$ is non-constant, relabel so $d:=\deg_{x_1}P_1\ge1$. Write the leading
coefficient of $P_1$ in $x_1$ as $c=c(x_2,\dots,x_m)\in\mathbb Z[x_2,\dots,x_m]$, a nonzero polynomial.
In $K[x_1]$ with $K:=\mathbb Q(x_2,\dots,x_m)$, the polynomial $P_1-t$ has invertible leading coefficient
$c$, so Euclidean division gives

$$P_2-g(t)=H_t\cdot(P_1-t)+\rho_t,\qquad H_t,\rho_t\in K[x_1],\ \ \deg_{x_1}\rho_t<d. \tag{2.1}$$

The division only ever divides by $c$, so the coefficients of $H_t,\rho_t$ are rational functions in
$x_2,\dots,x_m$ whose denominators are powers of $c$. Pick $M\ge0$ with $c^{M}H_t,\,c^{M}\rho_t\in
\mathbb Z[x]$, and abbreviate $\widetilde H:=c^{M}H_t,\ \widetilde\rho:=c^{M}\rho_t\in\mathbb Z[x]$, so
$\deg_{x_1}\widetilde\rho<d$. Multiplying $(2.1)$ by $c^{M}$:

$$c^{M}\bigl(P_2-g(t)\bigr)=\widetilde H\cdot(P_1-t)+\widetilde\rho. \tag{2.2}$$

We show $\widetilde\rho=0$. Fix $(a_2,\dots,a_m)\in\mathbb Z^{m-1}$ with $c(a_2,\dots,a_m)\ne0$ (exists,
Lemma D). Specialize $(2.2)$ at these values and write $s:=x_1$; set $\pi(s):=P_1(s,a_2,\dots,a_m)-t$
(degree exactly $d$, leading coefficient $c(a_2,\dots,a_m)\ne0$), $\sigma(s):=P_2(s,a_2,\dots,a_m)-g(t)$,
and $\gamma:=c(a_2,\dots,a_m)\in\mathbb Z\setminus\{0\}$. Then $(2.2)$ reads, as an identity of integer
polynomials in $s$,

$$\gamma^{M}\sigma(s)=\widetilde H(s)\,\pi(s)+\widetilde\rho(s),\qquad \widetilde H(s),\widetilde\rho(s)\in\mathbb Z[s],\ \deg\widetilde\rho<d. \tag{2.3}$$

For every integer $s$ with $\pi(s)\ne0$ (i.e. $P_1(s,a_2,\dots,a_m)\ne t$), $(\star')$ gives
$\pi(s)\mid\sigma(s)$, hence $\pi(s)\mid\gamma^{M}\sigma(s)$; and trivially $\pi(s)\mid\widetilde H(s)\pi(s)$.
By $(2.3)$, therefore $\pi(s)\mid\widetilde\rho(s)$ in $\mathbb Z$, for all integers $s$ with $\pi(s)\ne0$.
Now $\deg\widetilde\rho<d=\deg\pi$ and $\pi$ has nonzero leading coefficient, so $|\widetilde\rho(s)|<|\pi(s)|$
for all $|s|$ large. For such $s$ with $\pi(s)\ne0$ (all but finitely many large $s$, as $\pi$ has finitely
many roots), $\pi(s)\mid\widetilde\rho(s)$ and $|\widetilde\rho(s)|<|\pi(s)|$ force $\widetilde\rho(s)=0$.
The one-variable integer polynomial $s\mapsto\widetilde\rho(s,a_2,\dots,a_m)$ thus has infinitely many
roots, so it is identically $0$ (Fact 0).

This holds for every $(a_2,\dots,a_m)$ with $c\ne0$. For each coefficient $\gamma_k(x_2,\dots,x_m)$ of
$\widetilde\rho$ as a polynomial in $x_1$, the product $c\cdot\gamma_k$ vanishes on all of $\mathbb Z^{m-1}$
(it vanishes where $c=0$ trivially, and where $c\ne0$ because $\gamma_k=0$ there), so $c\cdot\gamma_k=0$
(Lemma D); since $\mathbb Q[x_2,\dots,x_m]$ is a domain and $c\ne0$, $\gamma_k=0$. Hence $\widetilde\rho=0$,
so $\rho_t=0$.

With $\rho_t=0$, the Euclidean-division identity $(2.1)$ in $K[x_1]$ becomes
$$P_2(x)-g(t)=H_t(x)\,(P_1(x)-t),\qquad H_t\in K[x_1]=\mathbb Q(x_2,\dots,x_m)[x_1], \tag{2.4}$$
an identity in $K[x_1]$. This exhibits $P_1-t$ as a divisor of $P_2-g(t)$ in $K[x_1]$ with explicit
quotient $H_t$. This is the only form of the divisibility we use in the sequel (Lemma C reduces modulo
$P_1-t$ inside $K[x_1]$, so working over the field $K$ is exactly what is needed; we never require the
divisibility in $\mathbb Q[x]$ itself). The symmetric statement
$$Q_2(y)-f(u)=K_u(y)\,(Q_1(y)-u),\qquad K_u\in\mathbb Q(y_2,\dots,y_n)[y_1], \tag{2.5}$$
holds for each $u\in U$ by the same argument. $\square$

---

### Step 3 (Global factorization through $P_1$). Lemma C — the heart of the proof.

**Lemma C.** *There is a one-variable polynomial $\mathcal R\in\mathbb Q[u]$ with*
$$P_2(x)=\mathcal R\bigl(P_1(x)\bigr)\qquad\text{as an identity in }\mathbb Q[x_1,\dots,x_m].$$
*Symmetrically there is $\mathcal S\in\mathbb Q[v]$ with $Q_2(y)=\mathcal S\bigl(Q_1(y)\bigr)$ in
$\mathbb Q[y]$.*

This is the step that genuinely upgrades the fiber/per-$t$ information to a polynomial identity; for
$m\ge2$ a polynomial constant on the fibers of $P_1$ need not factor through $P_1$, so this requires
proof.

*Proof.* Work in $K[x_1]$, $K=\mathbb Q(x_2,\dots,x_m)$, with $d=\deg_{x_1}P_1\ge1$ and leading
coefficient $c$ as in Lemma B. The element $P_1$ has unit leading coefficient $c\in K^\times$, so we may
form the **base-$P_1$ expansion** of $P_2$ by iterated Euclidean division by $P_1$ in $K[x_1]$:
$$P_2=R_0+R_1 P_1+R_2 P_1^2+\cdots+R_N P_1^{N},\qquad R_j\in K[x_1],\ \deg_{x_1}R_j<d,\ R_N\ne0. \tag{3.1}$$
(Divide $P_2$ by $P_1$ to get $P_2=Q^{(1)}P_1+R_0$ with $\deg_{x_1}R_0<d$; divide $Q^{(1)}$ by $P_1$ to
get $R_1$; iterate. Degrees in $x_1$ strictly drop at each quotient step, so the process terminates, and
each block $R_j$ has $x_1$-degree $<d$. The expansion is unique because each Euclidean division is
unique.)

**Claim: every $R_j$ is a constant in $\mathbb Q$.** Fix any $t\in T$ and reduce $(3.1)$ modulo
$(P_1-t)$ in $K[x_1]$ (legitimate: $P_1-t$ has unit leading coefficient $c$). Since $P_1\equiv t$,
$$P_2\equiv\sum_{j=0}^N R_j(x)\,t^{\,j}\pmod{P_1-t}. \tag{3.2}$$
On the other hand, by Lemma B, $(P_1-t)\mid(P_2-g(t))$ in $K[x_1]$, i.e. $P_2\equiv g(t)\pmod{P_1-t}$.
The remainder modulo $P_1-t$ is unique among polynomials of $x_1$-degree $<d$; both $\sum_j R_j t^j$ (each
$R_j$ has $x_1$-degree $<d$, so the sum does too) and the constant $g(t)$ have $x_1$-degree $<d$ and are
congruent to $P_2$, hence are equal as elements of $K[x_1]$:
$$\sum_{j=0}^{N} R_j(x)\,t^{\,j}=g(t)\qquad\text{in }K[x_1],\quad\text{for every }t\in T. \tag{3.3}$$

Read $(3.3)$ as an identity of polynomials in $x_1$ over $K$. For each power $x_1^{k}$ with $1\le k\le d-1$,
the $x_1^{k}$-coefficient of the left side is $\sum_{j}\bigl([x_1^{k}]R_j\bigr)\,t^{\,j}$, a polynomial in
$t$ with coefficients in $\mathbb Q(x_2,\dots,x_m)$, while the right side $g(t)$ is free of $x_1$ (no
$x_1^{k}$, $k\ge1$). Hence $\sum_{j}\bigl([x_1^{k}]R_j\bigr)\,t^{\,j}=0$ for all $t\in T$. Since $T$ is
infinite, this polynomial in $t$ (over the field $K$) is zero (Fact 0), so $[x_1^{k}]R_j=0$ for all $j$ and
all $1\le k\le d-1$. Therefore each $R_j$ is free of $x_1$:
$$R_j\in K=\mathbb Q(x_2,\dots,x_m). \tag{3.4}$$

Now use $(3.3)$ again, with $(3.4)$. The level-$x_1^0$ part of $(3.3)$ reads
$$\sum_{j=0}^N R_j(x_2,\dots,x_m)\,t^{\,j}=g(t)\qquad\text{for every }t\in T. \tag{3.5}$$
The right side is independent of $(x_2,\dots,x_m)$. So for any two points $\beta,\beta'$ in the common
domain (a Zariski-open subset of $\mathbb Q^{m-1}$ where the $R_j$ are defined), subtracting two copies of
$(3.5)$ gives $\sum_j\bigl(R_j(\beta)-R_j(\beta')\bigr)t^{j}=0$ for all $t\in T$; $T$ infinite forces (Fact 0)
$R_j(\beta)=R_j(\beta')$ for every $j$. Thus each $R_j$ is constant on its domain, i.e. $R_j\equiv r_j\in
\mathbb Q$. (Each $R_j\in\mathbb Q(x_2,\dots,x_m)$ is constant as a rational function, hence equals a
rational number.) This proves the Claim.

Substituting $R_j\equiv r_j$ into $(3.1)$:
$$P_2(x)=\sum_{j=0}^N r_j\,P_1(x)^{\,j}=\mathcal R\bigl(P_1(x)\bigr),\qquad \mathcal R(u):=\sum_{j=0}^N r_j u^{\,j}\in\mathbb Q[u].$$
This is an identity in $K[x_1]\supseteq\mathbb Q[x]$, both sides lying in $\mathbb Q[x]$, so it is an
identity in $\mathbb Q[x]$.

The symmetric statement $Q_2=\mathcal S(Q_1)$ with $\mathcal S\in\mathbb Q[v]$ follows by the identical
argument applied to $(Q_1,Q_2,f,U)$ in place of $(P_1,P_2,g,T)$: form the base-$Q_1$ expansion of $Q_2$,
reduce modulo $(Q_1-u)$ for the infinitely many $u\in U$ using the symmetric half of Lemma B
$\bigl((Q_1-u)\mid(Q_2-f(u))\bigr)$, and conclude all blocks are constants. $\square$

Note that Lemma C already gives, as functions,
$$f(u)=\mathcal R(u)\ \text{for all }u\in U,\qquad g(t)=\mathcal S(t)\ \text{for all }t\in T, \tag{3.6}$$
because $f(P_1(a))=P_2(a)=\mathcal R(P_1(a))$ for all $a$ (and $u=P_1(a)$ exhausts $U$), and likewise for
$g,\mathcal S$.

---

### Step 4 (Matching: $\mathcal R=\mathcal S$).

It remains to prove $\mathcal R=\mathcal S$ as polynomials in one variable. Once shown, $R:=\mathcal R=
\mathcal S$ satisfies $P_2=R(P_1)$ and $Q_2=R(Q_1)$ by Lemma C, completing the proof.

Because $\mathcal R,\mathcal S\in\mathbb Q[\,\cdot\,]$ are now honest polynomials (Lemma C), the matching
follows from one elementary divisibility, with no interpolation needed. Define
$$e(t):=\mathcal R(t)-\mathcal S(t)\in\mathbb Q[t]. \tag{4.1}$$
We show $e=0$.

**The key divisibility.** For all $a\in\mathbb Z^m$, $b\in\mathbb Z^n$ with $P_1(a)\ne Q_1(b)$, write
$u:=P_1(a)\in U$, $t:=Q_1(b)\in T$. By $(\star)$ and Lemma A (so $P_2(a)=f(u)$, $Q_2(b)=g(t)$, and by
$(3.6)$ $f(u)=\mathcal R(u)$, $g(t)=\mathcal S(t)$),
$$(u-t)\ \big|\ \bigl(P_2(a)-Q_2(b)\bigr)=\bigl(\mathcal R(u)-\mathcal S(t)\bigr)\qquad\text{in }\mathbb Z. \tag{4.2}$$
Thus $(u-t)\mid(\mathcal R(u)-\mathcal S(t))$ in $\mathbb Z$ for every $u\in U$ and $t\in T$ with $u\ne t$.

**Forcing $e=0$.** We use the integer finite-difference fact: *for $F\in\mathbb Z[x]$, the quotient
$\dfrac{F(x)-F(y)}{x-y}$ lies in $\mathbb Z[x,y]$.* Indeed $F(x)-F(y)=\sum_{k\ge1}f_k(x^k-y^k)$ with
$f_k\in\mathbb Z$, and each $x^k-y^k=(x-y)(x^{k-1}+x^{k-2}y+\cdots+y^{k-1})$ has the integer-coefficient
cofactor $\sum_{i=0}^{k-1}x^{k-1-i}y^{i}$; summing gives an integer-coefficient cofactor for $F$.
Consequently $(u-t)\mid(F(u)-F(t))$ in $\mathbb Z$ for all integers $u,t$.

To apply this to $\mathcal R$ (which has rational coefficients), clear denominators: choose a positive
integer $L$ with $L\mathcal R,\,L\mathcal S\in\mathbb Z[x]$ (a common denominator of the coefficients).
Applying the fact to $F:=L\mathcal R\in\mathbb Z[x]$ gives, for all integers $u,t$,
$$(u-t)\ \big|\ \bigl(L\mathcal R(u)-L\mathcal R(t)\bigr)\quad\text{in }\mathbb Z. \tag{4.3}$$
Now fix $t\in T$ and let $u$ range over $U$. Multiply $(4.2)$ by $L$:
$(u-t)\mid L\bigl(\mathcal R(u)-\mathcal S(t)\bigr)$. Subtract $(4.3)$:
$$(u-t)\ \big|\ \Bigl[L\bigl(\mathcal R(u)-\mathcal S(t)\bigr)-\bigl(L\mathcal R(u)-L\mathcal R(t)\bigr)\Bigr]
=L\bigl(\mathcal R(t)-\mathcal S(t)\bigr)=L\,e(t)\quad\text{in }\mathbb Z, \tag{4.4}$$
for every $u\in U$ with $u\ne t$. The right side $L\,e(t)$ is a FIXED integer (it does not depend on $u$).
As $u$ ranges over the infinite set $U\setminus\{t\}$, the divisors $u-t$ take infinitely many distinct
nonzero integer values. A fixed integer divisible by infinitely many distinct integers is $0$ (a nonzero
integer has finitely many divisors). Hence $L\,e(t)=0$, so $e(t)=0$, for every $t\in T$.

Therefore the polynomial $e\in\mathbb Q[t]$ vanishes on the infinite set $T$; by Fact 0, $e=0$, i.e.
$$\boxed{\ \mathcal R=\mathcal S\ }.$$

---

### Conclusion.

Set $R:=\mathcal R=\mathcal S\in\mathbb Q[x]$ (a single one-variable polynomial with rational
coefficients). By Lemma C,
$$P_2=\mathcal R(P_1)=R(P_1)\qquad\text{and}\qquad Q_2=\mathcal S(Q_1)=R(Q_1),$$
as polynomial identities in $\mathbb Q[x]$ and $\mathbb Q[y]$ respectively. This is exactly the required
conclusion. $\blacksquare$

---

### Remarks on rigor (where each hard step is discharged).

1. **Integral divisibility in Lemma B.** The chain "$\pi(s)\mid\sigma(s)\Rightarrow\pi(s)\mid\widetilde
   \rho(s)$" in $(2.3)$ is made *integral* by pre-multiplying $(2.1)$ by $c^{M}$ so that
   $\widetilde H,\widetilde\rho\in\mathbb Z[x]$; all terms in $(2.3)$ are integers, so no rational-
   divisibility sleight occurs. The size bound $|\widetilde\rho(s)|<|\pi(s)|$ (degree $<d$ vs.\ degree
   $d$ with nonzero leading coefficient) then forces $\widetilde\rho=0$ at all large $s$, hence
   identically (Fact 0), and Lemma D lifts from the slice $\{c\ne0\}$ to all variables.

2. **The "factors-through" upgrade is Lemma C, proven directly (not assumed).** For $m\ge2$,
   fiber-constancy of a polynomial does not by itself make it factor through $P_1$ as a polynomial. Lemma
   C closes exactly this gap by working with the **base-$P_1$ expansion** $(3.1)$ of $P_2$ in $K[x_1]$,
   $K=\mathbb Q(x_2,\dots,x_m)$, and forcing every transverse remainder block $R_j$ to be a *constant*.
   The forcing uses the reduction $(3.2)$–$(3.3)$ modulo $(P_1-t)$ for the infinitely many $t\in T$
   (first killing the $x_1$-dependence of the blocks via $(3.4)$, then their $(x_2,\dots,x_m)$-dependence
   via $(3.5)$), all closed by the infinitude of $T$ and Fact 0. This yields the genuine polynomial
   identities $P_2=\mathcal R(P_1)$ and $Q_2=\mathcal S(Q_1)$ outright, with $\mathcal R,\mathcal S\in
   \mathbb Q[\,\cdot\,]$. (This replaces the curve-restriction / bivariate-interpolation route of the
   outline's Lemma B′/C; the direct base-$P_1$ argument is shorter and avoids the "$\operatorname{Im}(p)$
   vs.\ $U$" extension subtlety entirely.)

3. **No "continuity"; only infinite-set agreement.** Every agreement/cancellation step (the constancy of
   blocks in Lemma C, and the matching $\mathcal R=\mathcal S$ in Step 4) is carried out on an infinite
   set with the undefined diagonal $u=t$ explicitly excluded, and closed by Fact 0 (a polynomial agreeing
   with another on an infinite set is equal) or by the integer principle (a fixed integer divisible by
   infinitely many distinct integers is $0$).

4. **Both directions used.** Lemma B and Lemma C are each applied in both the $P$-over-$P_1$ and
   $Q$-over-$Q_1$ directions: Lemma C produces $\mathcal R$ and $\mathcal S$ separately. The matching step
   $(4.2)$–$(4.4)$ uses $(\star)$ once more (now with $\mathcal R,\mathcal S$ honest polynomials) plus the
   integer finite-difference fact $(x-y)\mid(F(x)-F(y))$ in $\mathbb Z[x,y]$, to force $\mathcal R=
   \mathcal S$ via the infinitude of $U$ and then of $T$. $\blacksquare$
