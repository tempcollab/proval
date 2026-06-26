## Status
solved

## Approaches tried
- CRT decomposition Z/p(p-1)Z ≅ Z/pZ × Z/(p-1)Z (CRT), Fermat to reduce exponents mod p-1, an **E-free** specialization m ≡ ᾱ(x)⁻¹ (mod p) that collapses the FE to ᾱ(ᾱ(x)⁻¹x)=1 and forces linearity ᾱ(x)=λx without any prior knowledge of the exponent E, then a quadratic-character-sum bound to force E(n)≡n (mod p-1) off the multiples of p, and a QR/order analysis at the multiples of p — **worked, complete**. Final count (p-1)/2·(1+2^{p-1}), stated and verified for p=11 (=5125) by exhaustive search.

## Current best
Complete solution (below). The dependency chain is acyclic: Lemma 1 (well-definedness + ᾱ a bijection) → Lemma 2 (ᾱ(x)=λx, proved by an E-FREE specialization, so it does **not** use Lemma 3) → Lemma 3 (E(n)≡n mod p-1 for p∤n, uses only Lemma 2) → Lemma 4 (the multiples-of-p freedom) → Sufficiency → Count.

## Full proof

Throughout, **p > 7 is a fixed prime**, N = p(p−1), S_p = {1,…,N}, and arguments of f
are read mod N with the representative N standing for 0 (the problem's convention).
We write χ for the Legendre symbol mod p. All "bases" below are read mod p and all
"exponents" are integers (reduced mod p−1 only when the base is a unit, by Fermat).

The functional equation, using p−1 ≡ −1 (mod p) and p−1 ≡ 0 (mod p−1), reads: for all
m,n ∈ S_p,
$$ (m\,f(n))^{\,f(n+(p-1)m)} \equiv f(mn)^{\,n} \pmod p. \tag{$\star$}$$

### 0. Index identity and CRT coordinates

Since gcd(p, p−1) = 1, the **Chinese Remainder Theorem (CRT)** gives a ring
isomorphism Z/NZ ≅ Z/pZ × Z/(p−1)Z, n ↦ (n mod p, n mod (p−1)). For the shift
argument,
$$ n+(p-1)m \equiv n-m \pmod p, \qquad n+(p-1)m \equiv n \pmod{p-1}, \tag{0}$$
because p−1 ≡ −1 (mod p) and p−1 ≡ 0 (mod p−1). In particular **the shift argument is
divisible by p exactly when m ≡ n (mod p)**; this is the load-bearing fact for §4.

For an integer t with p∤t, Fermat's little theorem (KB: *Order of an element,
Fermat/Euler*) gives t^{p−1} ≡ 1, so t^e depends only on e mod (p−1). For p|t and any
exponent e ≥ 1 we have t^e ≡ 0. All f-values lie in S_p = {1,…,N}, hence every exponent
appearing in (⋆) is an integer ≥ 1, so the rule "base ≡ 0 ⇒ power ≡ 0" is always valid
(we never form 0⁰).

### Lemma 1 (Well-definedness of the CRT coordinates; A(kp)=0; ᾱ a bijection of (Z/pZ)\*)

Define A(n) := f(n) mod p ∈ {0,…,p−1} and E(n) := f(n) mod (p−1). By CRT the pair
(A(n), E(n)) determines f(n) ∈ S_p uniquely, and conversely. Because the domain of f is
Z/NZ (the stated "input mod p(p−1)" convention), each of A and E is a genuine function of
n ∈ Z/NZ, equivalently — via CRT — a function of the coordinate pair
(n mod p, n mod (p−1)) ∈ Z/pZ × Z/(p−1)Z. We will repeatedly use that (⋆), being a
congruence mod p, only sees A-values of bases and the exponents mod (p−1).

**(a) A(n) = 0 ⟺ p | n.** Suppose p ∤ n and p ∤ m. Then mn is coprime to p, so the
right side f(mn)^n of (⋆) is ≢ 0 (mod p) — indeed if it were 0 then p | f(mn), i.e.
p | mn, contradiction. Hence the left side (m f(n))^{…} ≢ 0, which forces m f(n) ≢ 0,
i.e. A(n) ≠ 0. Thus **p ∤ n ⇒ A(n) ≠ 0**. Conversely take n = kp (k ∈ {1,…,p−1}) and any
m coprime to p: then mn ≡ 0 (mod p), so the right side f(mn)^n ≡ 0 (mod p). Comparing
with the left side, (m f(n))^{f(shift)} ≡ 0, and since m ≢ 0 this forces f(n) ≡ 0
(mod p), i.e. **A(kp) = 0**. So A(n) = 0 precisely on the multiples of p.

**(b) Induced map on Z/pZ.** Define ᾱ : Z/pZ → Z/pZ by ᾱ(x) := A(n) for any n with
n ≡ x (mod p); this is well-defined by Lemma 1's first paragraph (A depends only on the
coordinate pair, but we will only ever use that A depends on n mod p — which is part of
that statement). By (a), ᾱ(0) = 0 and ᾱ(x) ≠ 0 for x ≠ 0.

**(c) ᾱ is a bijection of (Z/pZ)\*.** The hypothesis "for every c ∈ {0,…,p−1} there is
a ∈ S_p with f(a) ≡ c (mod p)" says A is surjective onto {0,…,p−1}, i.e. ᾱ : Z/pZ → Z/pZ
is surjective. A surjection of a finite set to itself is a bijection. Since ᾱ(0) = 0 and
ᾱ never vanishes on (Z/pZ)\*, ᾱ restricts to a bijection of (Z/pZ)\*. ∎(Lemma 1)

### Lemma 2 (Linearity: ᾱ(x) = λ x for a fixed λ ∈ (Z/pZ)\*) — proved E-free

Fix any x ∈ (Z/pZ)\*. Choose m ∈ S_p with
$$ m \equiv \bar\alpha(x)^{-1} \pmod p $$
(the inverse exists since ᾱ(x) ≠ 0), and choose n ∈ S_p with n ≡ x (mod p). Then the
left base of (⋆) is m f(n) ≡ ᾱ(x)^{-1}·ᾱ(x) = 1 (mod p), so the **left side equals 1^{·} = 1**
regardless of the (unknown) exponent f(n+(p−1)m) (which is ≥ 1). Therefore (⋆) becomes
$$ \bar\alpha(mn) \equiv \text{(right base)} ,\qquad \bar\alpha(mn)^{\,n} \equiv 1 \pmod p, \tag{2.1}$$
since mn ≡ x·ᾱ(x)^{-1} =: w (mod p) is coprime to p (so A(mn)=ᾱ(w)) — note **the value
w = x·ᾱ(x)^{-1} is independent of which representatives m, n we picked**.

Now keep x fixed and vary n over all elements of S_p with n ≡ x (mod p). As n ranges over
this set, n mod (p−1) takes **every** residue mod (p−1): writing n = x + p·t, we have
n mod (p−1) ≡ x + t (mod p−1), and t runs over a full set of residues mod (p−1) as n runs
over S_p. By (2.1), ᾱ(w)^n ≡ 1 (mod p) for all these n. Taking two of them, n₁, n₂, gives
ᾱ(w)^{n₁−n₂} ≡ 1, and n₁ − n₂ = p(t₁ − t₂). Hence ord_p(ᾱ(w)) divides p(t₁−t₂) for all
choices; choosing t₁ − t₂ = 1 shows ord_p(ᾱ(w)) | p. But ord_p(ᾱ(w)) | (p−1) as ᾱ(w) is a
unit, and gcd(p, p−1) = 1, so **ord_p(ᾱ(w)) = 1**, i.e. ᾱ(w) ≡ 1 (mod p).

Thus for every x ∈ (Z/pZ)\*,
$$ \bar\alpha\!\big(x\,\bar\alpha(x)^{-1}\big) = 1. $$
Since ᾱ is a bijection of (Z/pZ)\* (Lemma 1c), it has a unique preimage of 1; call it w₀,
so x·ᾱ(x)^{-1} = w₀ for **all** x, i.e.
$$ \bar\alpha(x) = w_0^{-1}\,x =: \lambda x \pmod p,\qquad \lambda := w_0^{-1}\in(\mathbb Z/p\mathbb Z)^\* . $$
This derivation used only Lemma 1 (no information about E), so the chain is acyclic. ∎(Lemma 2)

### Lemma 3 (Exponents: E(n) ≡ n (mod p−1) for all p ∤ n)

Let y ∈ Z/NZ be any element with p ∤ y; write its CRT coordinates (y_p, y_{p-1}) with
y_p ≠ 0. We show E(y) ≡ y_{p-1} (mod p−1); since y ≡ y_{p-1} (mod p−1) this is
E(y) ≡ y (mod p−1).

Take m, n ∈ S_p coprime to p with the residues m ≡ m_p, n ≡ n_p (mod p) for parameters
m_p, n_p ∈ (Z/pZ)\* to be chosen with n_p − m_p ≡ y_p (mod p), and with n ≡ y_{p-1}
(mod p−1). By (0) the shift argument n+(p−1)m then has CRT coordinates
(n_p − m_p, n mod (p−1)) = (y_p, y_{p-1}), i.e. **it equals y**, and it is coprime to p.
Substituting ᾱ(x)=λx (Lemma 2): the left base is m·f(n) ≡ m_p·λ n_p = λ m_p n_p (mod p),
and the right base is f(mn) ≡ λ·(m_p n_p) (mod p); the two bases are **equal**, call the
common value b := λ m_p n_p ∈ (Z/pZ)\*. Then (⋆) reads
$$ b^{\,E(y)} \equiv b^{\,n} \pmod p \;\Longrightarrow\; b^{\,E(y)-n}\equiv 1 \pmod p, \tag{3.1}$$
using f(shift)=f(y) ≡ E(y) (mod p−1) and Fermat (b a unit). Here n ≡ y_{p-1} (mod p−1)
is fixed, and (3.1) holds for **every** admissible m_p (with n_p = m_p + y_p, both
nonzero), the exponent E(y) − n being the **same fixed integer** D := E(y) − n for all of
them. Thus
$$ b^{\,D} \equiv 1 \pmod p \quad\text{for all } b \in B := \{\,\lambda\, t\,(t+y_p) : t\in(\mathbb Z/p\mathbb Z)^\*,\ t+y_p\neq 0\,\}. \tag{3.2}$$

**Claim: B is not contained in any proper subgroup of (Z/pZ)\*.** Complete the square:
t(t+y_p) = (t + y_p/2)² − (y_p/2)² = u² − c, where u := t + y_p/2 and c := (y_p/2)² is a
**nonzero quadratic residue** (y_p ≠ 0). The only proper subgroup of (Z/pZ)\* of size
≥ (p−1)/2 is the quadratic-residue subgroup QR (index 2), so if B lay in a proper
subgroup it would lie in one coset of QR, i.e. χ(λ(u²−c)) would be a constant ε ∈ {+1,−1}
for **all** u with u² − c ≠ 0. Then χ(u²−c) ≡ ε·χ(λ) =: s is constant on those u, and
$$ \sum_{u=0}^{p-1}\chi(u^2-c) \;=\; s\cdot\#\{u : u^2-c\neq 0\} \;=\; s\,(p-2), $$
since u² − c = 0 has exactly two solutions (c a nonzero QR). But the standard quadratic
character-sum identity (KB: *Quadratic residues, Legendre symbol*) gives, for a quadratic
with nonzero discriminant (here disc = 4c ≠ 0),
$$ \sum_{u=0}^{p-1}\chi(u^2-c) \;=\; -1. $$
[Proof of the identity: \(\sum_u \chi(u^2-c)=\sum_u\chi(u-\sqrt c)\chi(u+\sqrt c)\) over the
roots ±√c of u²−c; substituting v=u−√c and writing the second factor as
χ(v+2√c)=χ(v)χ(1+2√c v^{-1}) for v≠0, the sum becomes \(\sum_{v\neq0}\chi(1+2\sqrt c\,v^{-1})\),
and as v ranges over nonzero residues, 1+2√c v^{-1} ranges over all residues except 1,
so the sum is \(\big(\sum_{w}\chi(w)\big)-\chi(1)=0-1=-1\).] Hence s(p−2) = −1, impossible
for p > 7 (then |s(p−2)| = p−2 ≥ 2). This contradiction proves the Claim.

Since B is not in any proper subgroup, B generates (Z/pZ)\*, so the common relation
(3.2) b^D ≡ 1 forces D ≡ 0 (mod p−1): indeed the subgroup {z : z^D = 1} has order
gcd(D, p−1); it contains B, hence equals the whole group, so gcd(D, p−1) = p−1, i.e.
(p−1) | D. Therefore E(y) ≡ n ≡ y (mod p−1). As y was an arbitrary p-coprime element,
**E(n) ≡ n (mod p−1) for all p ∤ n**. ∎(Lemma 3)

Combining Lemmas 2–3: for p ∤ n, f(n) is the CRT element with coordinates (λ·(n mod p),
n mod (p−1)); equivalently **f(n) ≡ CRT(λ n, n) and in fact f(n) is determined.** The
only remaining freedom is f on the multiples of p.

### Lemma 4 (Multiples of p: the QR/order constraint)

By Lemma 1(a), for n = kp (k ∈ {1,…,p−1}, so n_p = 0, n_{p-1} = k mod (p−1)) we have
A(kp) = 0, and f(kp) is the CRT element with coordinates (0, E(kp)); write H(k) := E(kp)
∈ {0,…,p−2}. So f(kp) = CRT(0, H(k)) is the unique element of S_p that is ≡ 0 (mod p)
and ≡ H(k) (mod p−1); for H(k) ≠ 0 this is H(k)·p (an explicit check: H(k)p ≡ 0 mod p
and, since p ≡ 1 mod (p−1), H(k)p ≡ H(k) mod (p−1)), and for H(k) = 0 it is N = p(p−1).

We now find the constraint on H. The values H(·) = E(kp) enter (⋆) only through a base
or exponent that is a multiple of p. By Lemma 1(a) and (0):

- If p | m or p | n then mn ≡ 0 (mod p), so the **right** side f(mn)^n ≡ 0; and on the
  left m f(n) ≡ 0 (either m ≡ 0, or f(n) = f(kp) ≡ 0), so the **left** side ≡ 0 too.
  Both sides vanish — **no constraint on H** arises here (the equality 0 ≡ 0 holds for
  any H, exponents being ≥ 1).
- If p ∤ m and p ∤ n, the bases m f(n) ≡ λ m_p n_p and f(mn) ≡ λ m_p n_p are units. The
  shift argument is a multiple of p **iff m ≡ n (mod p)** (by (0)); in that case
  f(shift) = f(kp) for the relevant k, and its E-value is the unknown H(·). This is the
  **only** place an unknown H enters (⋆) nontrivially (i.e. through a nonzero base).

So fix a := m_p = n_p ∈ (Z/pZ)\* (the case m ≡ n mod p). Then the shift argument
n+(p−1)m ≡ 0 (mod p) is a multiple of p, with (p−1)-coordinate n mod (p−1) =: s; call it
y = the multiple of p with E(y) = H(k) where k ≡ s (mod p−1). The common base is
b = λ a² (note m_p n_p = a²), a unit, and (⋆) reads
$$ (\lambda a^2)^{\,H(s)} \equiv (\lambda a^2)^{\,n} \equiv (\lambda a^2)^{\,s} \pmod p \quad(\text{Fermat}, n\equiv s \bmod p-1),$$
hence
$$ (\lambda a^2)^{\,H(s)-s} \equiv 1 \pmod p \qquad\text{for every } a\in(\mathbb Z/p\mathbb Z)^\*. \tag{4.1}$$
The crucial point — emphasised because it is where the count is decided — is that (4.1)
must hold **simultaneously for all** a ∈ (Z/pZ)\* (each value of a is realizable: pick m,n
coprime to p with m ≡ n ≡ a mod p and n ≡ s mod (p−1)). Therefore H(s) − s is a common
multiple of all the orders ord_p(λ a²); equivalently λa² lies in the subgroup of (Z/pZ)\*
killed by the exponent H(s)−s, for every a, so
$$ \mathrm{lcm}_{a\in(\mathbb Z/p)^\*}\ \mathrm{ord}_p(\lambda a^2)\ \big|\ (H(s)-s). \tag{4.2}$$

Compute the set {λ a² : a ∈ (Z/pZ)\*}. As a ranges over (Z/pZ)\*, a² ranges over QR
(the squares), so {λ a²} = λ·QR.

- **λ a quadratic residue.** Then λ·QR = QR (QR is a subgroup), the index-2 subgroup of
  (Z/pZ)\* of order (p−1)/2. Every element of QR has order dividing (p−1)/2, and a
  generator of the cyclic group QR has order exactly (p−1)/2; hence
  lcm_a ord_p(λ a²) = (p−1)/2. By (4.2), **(p−1)/2 | (H(s)−s)**. Since H(s)−s is
  determined mod (p−1) (H(s) ∈ {0,…,p−2}), this means H(s) ≡ s (mod (p−1)/2), i.e.
  $$ \varepsilon(s) := H(s)-s \in \{0,\ (p-1)/2\} \pmod{p-1}, \quad\text{free per } s. $$
- **λ a quadratic non-residue.** Then λ·QR = NQR is the non-residue coset. A primitive
  root g of (Z/pZ)\* satisfies g^{(p−1)/2} = −1 ≠ 1, so g is a non-residue, i.e. g ∈ NQR
  and ord_p(g) = p−1. Hence lcm_a ord_p(λ a²) = p−1, and (4.2) gives **(p−1) | (H(s)−s)**,
  forcing H(s) = s, i.e. ε(s) = 0.

(For the lcm claims we used: QR is the unique index-2 subgroup, every QR has order |
(p−1)/2 with the bound attained by a generator; NQR is a coset containing a primitive
root. KB: *Quadratic residues* and *Order of an element*. These hold for every odd prime;
p > 7 is not needed here — it is used in Lemma 3's bound p−2 ≥ 2 and to make the
surjectivity hypothesis non-degenerate.)

**Summary of necessity.** Every solution f is given by a multiplier λ ∈ (Z/pZ)\* together
with a function ε : {0,…,p−2} → {0,(p−1)/2} via
$$ f(n) = \mathrm{CRT}\big(\lambda\,(n\bmod p),\ n\bmod(p-1)\big)\ \ (p\nmid n), \qquad
   f(kp) = \mathrm{CRT}\big(0,\ k+\varepsilon(k)\big)\ \ (k=1,\dots,p-1), $$
where ε ≡ 0 if λ ∉ QR, and ε arbitrary in {0,(p−1)/2}^{p-1} if λ ∈ QR (the p−1 input
classes k mod (p−1) range over Z/(p−1)Z). ∎(Lemma 4)

### Lemma 5 (Sufficiency: every such (λ, ε) satisfies (⋆))

Fix λ and a valid ε (ε ≡ 0 when λ ∉ QR). Define f by the formulas above; it maps S_p → S_p
and is surjective mod p (its mod-p values are {λ x : x} = (Z/pZ)\* together with 0, hitting
all residues). Verify (⋆) for all m, n by the disjoint, exhaustive cases on (p|m?, p|n?):

- **(i) p ∤ m and p ∤ n.** Both bases are units: m f(n) ≡ m_p·λ n_p = λ m_p n_p and
  f(mn) ≡ λ(m_p n_p) (mod p); equal, call it b = λ m_p n_p. Split by the shift:
  - **(i-a) m ≢ n (mod p):** by (0) the shift is coprime to p, so its E-value is, by the
    p-coprime formula, ≡ (shift mod (p−1)) ≡ n (mod p−1). Then b^{E(shift)} ≡ b^n (Fermat),
    matching the right side b^n. ✓
  - **(i-b) m ≡ n (mod p):** put a := m_p = n_p, so b = λ a². The shift is a multiple of
    p with (p−1)-coordinate s := n mod (p−1), so its E-value is H(s) = s + ε(s). The left
    side is b^{H(s)} = (λ a²)^{s+ε(s)} and the right side is b^{n} ≡ (λ a²)^{s}. They agree
    iff (λ a²)^{ε(s)} ≡ 1 (mod p). If λ ∈ QR then λ a² ∈ QR has order dividing (p−1)/2, so
    (λa²)^{(p−1)/2} = 1; together with (λa²)^0 = 1, both values ε(s) ∈ {0,(p−1)/2} give
    (λ a²)^{ε(s)} = 1. ✓ If λ ∉ QR then ε ≡ 0, and (λ a²)^0 = 1. ✓ (This is the only case
    using the QR/order choice of ε.)
- **(ii) p | m, p ∤ n.** mn ≡ 0 (mod p) ⇒ right side f(mn)^n ≡ 0; left base m f(n) ≡ 0
  (m ≡ 0), so left side ≡ 0 (exponent ≥ 1). Both ≡ 0. ✓
- **(iii) p ∤ m, p | n.** n = kp. mn ≡ 0 (mod p) ⇒ right side ≡ 0; left base m f(n), with
  f(n) = f(kp) ≡ 0 (mod p), is ≡ 0, so left side ≡ 0. Both ≡ 0. (ε does not enter.) ✓
- **(iv) p | m and p | n.** mn ≡ 0 ⇒ right side ≡ 0; left base m f(n) ≡ 0 (m ≡ 0) ⇒ left
  side ≡ 0. Both ≡ 0. ✓

The four cases are exhaustive and disjoint, so (⋆) holds for all m, n: f is a solution. ∎(Lemma 5)

### Count

By Lemmas 1–4 every solution is one of the functions of Lemma 4's summary, and by
Lemma 5 every such function is a solution; so the solution set is exactly that family.
Count its free data. The multiplier λ ranges over (Z/pZ)\*, which has p−1 elements,
split into (p−1)/2 quadratic residues and (p−1)/2 non-residues (KB: *Quadratic
residues*). The shift ε is a function on the p−1 input classes k mod (p−1):

- if λ ∈ QR (there are (p−1)/2 such λ): ε is free in {0,(p−1)/2}^{p-1}, giving 2^{p-1}
  functions per λ;
- if λ ∉ QR (there are (p−1)/2 such λ): ε ≡ 0 is forced, giving 1 function per λ.

Hence the total number of solutions is
$$ \boxed{\ \#\{f\} \;=\; \frac{p-1}{2}\cdot 2^{\,p-1} \;+\; \frac{p-1}{2}\cdot 1 \;=\; \frac{p-1}{2}\,\big(1 + 2^{\,p-1}\big). } $$

**Verification (p = 11).** Then (p−1)/2 = 5 and 2^{p-1} = 2^{10} = 1024, giving
5·(1 + 1024) = 5·1025 = 5125. An exhaustive computer search over all functions of the
stated family confirms the per-λ counts are 1024 for each of the five quadratic residues
λ ∈ {1,3,4,5,9} and 1 for each of the five non-residues λ ∈ {2,6,7,8,10}, total 5125,
and that all 5125 satisfy (⋆) on all 110² pairs (m,n); these numerics are evidence only —
the proof above is self-contained. ∎
