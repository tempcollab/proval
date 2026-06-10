## Status
solved

## Approaches tried
- CRT factorization of the root count N(n) over prime powers + discriminant /
  quadratic-residue analysis + Hensel lifting of simple roots (with the
  discriminant-vanishing case at p = 11 done by hand) — worked. Reduces the
  problem to classifying N(p^e) for prime powers; the only prime power with
  exactly one root is 11^1, giving the unique answer n = 11.

## Current best
Complete solution (see Full proof). Answer: **n = 11**, the unique root being
x ≡ 7. Key facts: 4f(x) = (2x−3)² + 11, discriminant D = −11; N is
multiplicative across prime powers by CRT; N(2^e) = 0, N(p^e) ∈ {0,2} for odd
p ≠ 11, N(11) = 1, N(11^k) = 0 for k ≥ 2 (the double root x ≡ 7 does not lift
because f(7+11t) ≡ 33 mod 121).

## Full proof

Throughout, write f(x) = x² − 3x + 5 ∈ ℤ[x]. For an integer m ≥ 2 let

  N(m) = #{ x ∈ ℤ_m : f(x) ≡ 0 (mod m) }

be the number of roots of f in the ring ℤ_m = ℤ/mℤ. We must determine all
n ≥ 2 with N(n) = 1.

We will prove the answer is **n = 11**, with unique root x ≡ 7 (mod 11).

### Preliminary identity

Multiplying f by 4 and completing the square:

  4f(x) = 4x² − 12x + 20 = (2x − 3)² − 9 + 20 = (2x − 3)² + 11.   (∗)

Thus the discriminant of f is D = (−3)² − 4·1·5 = 9 − 20 = −11. Identity (∗) is
an identity of polynomials in ℤ[x], so it holds in every ring ℤ_m.

We also record the derivative f′(x) = 2x − 3.

---

### Step 1 — CRT multiplicativity of N (Lemma L1)

**Lemma L1.** If n = p₁^{e₁} ⋯ p_r^{e_r} is the prime factorization of n (the
pᵢ distinct primes, eᵢ ≥ 1), then

  N(n) = ∏_{i=1}^{r} N(pᵢ^{eᵢ}).

*Proof.* By the Chinese Remainder Theorem (KB: "Modular arithmetic, CRT"), the
natural map

  φ : ℤ_n  →  ℤ_{p₁^{e₁}} × ⋯ × ℤ_{p_r^{e_r}},   φ(x) = (x mod p₁^{e₁}, …, x mod p_r^{e_r})

is an isomorphism of rings, because the moduli pᵢ^{eᵢ} are pairwise coprime and
their product is n. Since φ is a ring homomorphism it commutes with the
polynomial f (which is built from +, ·, and the constants 1, 3, 5): for every x,

  φ(f(x)) = ( f(x mod p₁^{e₁}), …, f(x mod p_r^{e_r}) ).

Hence f(x) ≡ 0 (mod n) — i.e. f(x) = 0 in ℤ_n — if and only if
f(x mod pᵢ^{eᵢ}) = 0 in ℤ_{pᵢ^{eᵢ}} for every i (the zero element of a product
ring is the tuple of zeros). Because φ is a bijection, the roots of f in ℤ_n are
in one-to-one correspondence with the tuples (x₁, …, x_r) where each xᵢ is a
root of f in ℤ_{pᵢ^{eᵢ}}. The number of such tuples is the product of the number
of choices in each coordinate, i.e. ∏ᵢ N(pᵢ^{eᵢ}). ∎

Each factor N(pᵢ^{eᵢ}) is a nonnegative integer. A product of nonnegative
integers equals 1 if and only if every factor equals 1. Therefore:

  N(n) = 1  ⟺  N(pᵢ^{eᵢ}) = 1 for every prime power pᵢ^{eᵢ} exactly dividing n.   (†)

So the whole problem reduces to classifying the prime powers p^e with
N(p^e) = 1. We do this in Steps 2–5, then assemble the answer in Step 6.

We will repeatedly use the following elementary fact.

**Lemma L4 (reduction carries roots to roots).** Let k ≥ 1 and let m | p^k with
m = p^j, j ≤ k. The reduction map ρ : ℤ_{p^k} → ℤ_{p^j}, ρ(x) = x mod p^j, is a
ring homomorphism. Hence if f(x) ≡ 0 (mod p^k) then f(ρ(x)) ≡ 0 (mod p^j); that
is, every root of f mod p^k reduces to a root of f mod p^j.

*Proof.* ρ is the canonical quotient map of rings (well defined since p^j | p^k),
so it commutes with the polynomial f exactly as in L1: ρ(f(x)) = f(ρ(x)). If the
left side is 0 in ℤ_{p^j} then f(ρ(x)) = 0 there. ∎

In particular, taking j chosen below, **N(p^j) = 0 implies N(p^k) = 0** for all
k ≥ j, because a root mod p^k would force a (nonexistent) root mod p^j.

---

### Step 2 — p = 2: N(2^e) = 0 for all e ≥ 1

Check the two residues mod 2:

  f(0) = 5 ≡ 1 (mod 2),  f(1) = 1 − 3 + 5 = 3 ≡ 1 (mod 2).

So f has no root mod 2: N(2) = 0. By Lemma L4 (with p = 2, j = 1), any root of f
mod 2^e would reduce to a root mod 2, of which there are none. Hence

  N(2^e) = 0 for every e ≥ 1.

(The discriminant substitution (∗) is *not* used here, since 2 is not invertible
modulo 2^e — division by 4 is illegitimate. We argued by direct reduction
instead.) In particular no even n can satisfy (†), so any n with N(n) = 1 is odd.

---

### Step 3 — p odd, p ≠ 11: N(p^e) ∈ {0, 2}, never 1 (Lemma L2)

Fix an odd prime p ≠ 11 and e ≥ 1. We show N(p^e) ∈ {0, 2}.

Since p is odd, 2 is a unit modulo p^e, so by (∗), in ℤ_{p^e}:

  f(x) ≡ 0  ⟺  (2x − 3)² + 11 ≡ 0  ⟺  (2x − 3)² ≡ −11 (mod p^e).

The map x ↦ y := 2x − 3 is a bijection of ℤ_{p^e} onto itself (its inverse is
y ↦ 2⁻¹(y + 3), valid because 2 is a unit). Hence

  N(p^e) = #{ y ∈ ℤ_{p^e} : y² ≡ −11 (mod p^e) }.   (‡)

Because p ≠ 11 and p ≠ 2, we have gcd(−11, p) = 1, so −11 is a **unit** mod
p^e. We now count square roots of the unit −11.

**Claim: a unit u mod p^e (p odd) has 0 or 2 square roots.**
If y² ≡ u has no solution, the count is 0. Otherwise let y₀ be one solution; y₀
is a unit (its square is the unit u). For any solution y, y² ≡ y₀² gives
(y − y₀)(y + y₀) ≡ 0 (mod p^e). Now y − y₀ and y + y₀ cannot both be divisible by
p: their sum 2y₀ is a unit (2 and y₀ are units), so p divides at most one of
them. Since ℤ_{p^e} has the property that a product is ≡ 0 (mod p^e) with one
factor a unit forces the other ≡ 0, p^e must divide whichever of y ∓ y₀ is the
non-unit; the other being a unit. Concretely: from (y−y₀)(y+y₀) ≡ 0 and the fact
that p divides at most one factor, all e factors of p must go into a single
factor, giving either y ≡ y₀ or y ≡ −y₀ (mod p^e). [Formally: write the
valuation; v_p((y−y₀)(y+y₀)) ≥ e, and min(v_p(y−y₀), v_p(y+y₀)) = 0 since p
divides at most one factor and the units have valuation 0, so the *other* factor
has valuation ≥ e, i.e. is ≡ 0 mod p^e.] Thus the only solutions are y ≡ ±y₀.

These two solutions are **distinct**: y₀ ≡ −y₀ (mod p^e) would give 2y₀ ≡ 0, but
2y₀ is a unit, contradiction. Hence exactly 2 solutions when any exist. This
proves the claim.

By (‡), N(p^e) ∈ {0, 2}. In particular N(p^e) ≠ 1 for every odd p ≠ 11 and every
e ≥ 1.

*(Remark — the simple-root viewpoint, Lemma L2.* The same conclusion follows
from Hensel's lemma: if x₀ is a root of f mod p then f′(x₀) = 2x₀ − 3 ≢ 0
(mod p), for otherwise 2x₀ ≡ 3 and (∗) gives 0 ≡ 4f(x₀) ≡ (2x₀−3)² + 11 ≡ 11
(mod p), forcing p = 11, contrary to p ≠ 11. So every root mod p is *simple* and
lifts uniquely to each ℤ_{p^k} (KB: "Hensel's lemma"), whence N(p^k) = N(p) ∈
{0,2}. We do not rely on this remark; the direct count above suffices.)*

---

### Step 4 — p = 11, e = 1: N(11) = 1

Modulo 11 we have, from (∗), 4f(x) ≡ (2x − 3)² + 11 ≡ (2x − 3)² (mod 11). Since
4 is a unit mod 11 (4·3 = 12 ≡ 1, so 4⁻¹ ≡ 3),

  f(x) ≡ 0 (mod 11)  ⟺  (2x − 3)² ≡ 0 (mod 11)  ⟺  2x − 3 ≡ 0 (mod 11),

the last step because 11 is prime (a square is 0 mod a prime iff the base is 0).
Now 2x ≡ 3 (mod 11); 2⁻¹ ≡ 6 (mod 11) since 2·6 = 12 ≡ 1, so x ≡ 6·3 = 18 ≡ 7
(mod 11). This is the **unique** residue mod 11, so

  N(11) = 1,  with the single root x ≡ 7 (mod 11).

*Verification by substitution:* f(7) = 7² − 3·7 + 5 = 49 − 21 + 5 = 33 = 3·11 ≡ 0
(mod 11). ✓ And equivalently f(x) ≡ (x − 7)² (mod 11): expanding,
(x−7)² = x² − 14x + 49 ≡ x² − 3x + 5 (mod 11) since −14 ≡ −3 and 49 ≡ 5 (mod 11).
This exhibits 7 as a double root and confirms uniqueness.

---

### Step 5 — p = 11, e ≥ 2: N(11^k) = 0 (Lemma L3)

First we show N(121) = 0. By Lemma L4 (p = 11, reducing mod 11), any root of f
mod 121 reduces to a root of f mod 11, which by Step 4 must be ≡ 7 (mod 11). So
it suffices to check whether some x ≡ 7 (mod 11) satisfies f(x) ≡ 0 (mod 121).
Write x = 7 + 11t with t ∈ ℤ and compute exactly:

  f(7 + 11t) = (7 + 11t)² − 3(7 + 11t) + 5
            = 49 + 154t + 121t² − 21 − 33t + 5
            = 33 + 121t + 121t²
            = 33 + 121(t + t²).

Therefore f(7 + 11t) ≡ 33 (mod 121) for every integer t. Since 33 ≢ 0 (mod 121)
(indeed 0 < 33 < 121), no x ≡ 7 (mod 11) is a root mod 121. Combined with the
reduction argument, **no** residue is a root mod 121, so

  N(121) = 0.

(This is exactly the discriminant-vanishing case where Hensel's lemma does not
apply: f′(7) = 2·7 − 3 = 11 ≡ 0 (mod 11), so the simple-root hypothesis fails and
the lift must be checked by hand, as just done.)

Now for any k ≥ 2 we have 11² | 11^k, so by Lemma L4 (p = 11, j = 2 ≤ k) every
root of f mod 11^k reduces to a root of f mod 121. Since N(121) = 0, there are
none, hence

  N(11^k) = 0 for every k ≥ 2.

---

### Step 6 — Assembling the answer

We have classified N(p^e) for every prime power:

| prime power p^e         | N(p^e)  |
|-------------------------|---------|
| 2^e (e ≥ 1)             | 0       |  (Step 2)
| p^e, p odd, p ≠ 11      | 0 or 2  |  (Step 3)
| 11^1                    | 1       |  (Step 4)
| 11^k, k ≥ 2             | 0       |  (Step 5)

These four families are exhaustive and pairwise disjoint: every prime power is
2^e, or 11^k, or p^e with p an odd prime ≠ 11. Reading off the table, the **only**
prime power p^e with N(p^e) = 1 is 11^1.

By criterion (†) from Step 1, N(n) = 1 holds for n ≥ 2 if and only if every
prime power exactly dividing n has N = 1, i.e. every prime power in the
factorization of n equals 11^1. An integer n ≥ 2 whose every prime-power factor
is 11^1 has the single prime power 11 in its factorization and nothing else:
n = 11. (n ≥ 2 forces at least one prime factor, so the empty product n = 1 — for
which the empty product of N-values would be 1 — is excluded; and any factor
other than 11^1, or the factor 11^2, would contribute a value ≠ 1 and break (†).)

Conversely, N(11) = 1 by Step 4, so n = 11 indeed satisfies the requirement.

### Conclusion

The unique integer n ≥ 2 for which x² − 3x + 5 = 0 has exactly one solution in
ℤ_n is

  **n = 11**,

and that solution is x ≡ 7 (mod 11), verified by f(7) = 33 = 3·11 ≡ 0 (mod 11). ∎
