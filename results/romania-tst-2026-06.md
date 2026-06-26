## Status
partial

## Approaches tried

- **Induction on n via an extremal "maximal bad set" + fiber decomposition (this round).**
  The framing is solid and yields a rigorous reduction (recorded in *Current best*):
  every outside element is a "Case I" divisor (small) or a "Case II" summand lying in a
  fiber `Q_{b,c}`, and each fiber satisfies a proven *shifted condition*. The intended
  inductive linchpin — the **Key Claim** that each fiber `Q_{b,c}` satisfies the predicate
  `P(n-1)` (every n-subset of `Q_{b,c}` has an in-set triple), so that the inductive
  hypothesis bounds `|Q_{b,c}| < 2^{(n-1)^3}` — **is FALSE**. Explicit counterexample
  (brute-verified):
  `A = {5, 9, 11, 61}` is an odd antichain satisfying `P(2)`; with maximal bad set
  `B = {5, 9}` the fiber `Q_{5,9} = {a in A : a ≡ -9 ≡ 1 (mod 5)} = {11, 61}` has size 2.
  But `P(1)` for `Q` means `|Q| ≤ 1` (a triple needs 3 elements, impossible in 2), so `Q`
  does **not** satisfy `P(1) = P(n-1)`. The recursion has no valid base for the fiber, so
  this route does NOT close. (The downstream constant arithmetic
  `|A| ≤ n + n(n-1)·2^{(n-1)^3} < 2^{n^3}` is itself correct — verified for n = 2..8 with
  huge margin — but it is *conditional* on the false Key Claim, hence vacuous here.)

- **Variant "Q satisfies P(n-1) only once |Q| ≥ 3" / "|Q_{b,c}| ≤ n directly."** Both are
  brute-force consistent on small cases but neither has a proof. The genuine obstruction is
  converting the *shifted condition* (an in-fiber `x | b+z` pair) into an in-fiber triple
  `u | v+w`; no identity or packing argument was found, and brute force did not reveal a
  clean combination rule. OPEN.

- **Residue-class decomposition mod 2b about a single base element b.** Each class `R_r`
  avoids b as a divisor, but the number of classes is `< b`, which is unbounded, so it gives
  no recursive size bound. Dead end (recorded by the explorer).

## Current best

Throughout, `A` is a finite non-empty **antichain of positive odd integers** (no distinct
`a, a' ∈ A` have `a | a'`), and we are given the hypothesis

> **P(n):** every subset `S ⊆ A` with `|S| = n+1` contains distinct `x, y, z` with `x | y+z`.

Call a triple of distinct elements `(x, y, z)` of `A` with `x | y+z` a **divisor-triple**
(x the divisor, y, z the summands). Call a subset `T ⊆ A` **bad** if it contains no
divisor-triple. The goal is `|A| < 2^{n^3}`.

The following lemmas are **proved in full and brute-force verified** (random odd antichains
satisfying P(n) for n = 2, 3, 4; thousands of sets, zero counterexamples). They constitute a
rigorous reduction of the problem.

### Lemma 0 (Parity / residue mechanics)
Let `x, y, z` be distinct odd integers with `x | y+z`, and suppose `x ∤ y` and `x ∤ z` (this
holds automatically when `x, y, z` lie in an antichain). Then:
1. `(y+z)/x` is even, so `(y+z)/x ≥ 2`, hence `x ≤ (y+z)/2 < max(y, z)`.
2. `y ≢ z (mod x)`; equivalently `y` and `z` occupy complementary nonzero residues
   `r, x-r` modulo `x`.

*Proof.* (1) `y, z` odd ⇒ `y+z` even; `x` odd. Write `y+z = qx`. Since `y+z` is even and `x`
is odd, `q` is even, so `q ≥ 2` (q ≥ 1 since `y+z > 0`, and `q ≠ 0`). Thus
`x = (y+z)/q ≤ (y+z)/2 < max(y, z)` (the last since `min(y,z) < max(y,z)`, as `y ≠ z`).
(2) If `y ≡ z (mod x)` then `y+z ≡ 2y (mod x)`, so `x | y+z` gives `x | 2y`; `x` odd ⇒
`x | y`, contradicting `x ∤ y`. Hence `y ≢ z (mod x)`, and `y ≡ -z (mod x)` (from `x | y+z`)
forces residues `r` and `x-r` with `r ≢ 0`. ∎

In particular, in any divisor-triple the **divisor is strictly smaller than the larger
summand**.

### Lemma 1 (Maximal bad set and the Case I / Case II dichotomy)
Under P(n), every bad subset of `A` has size `≤ n` (a bad set of size `n+1` would violate
P(n)). Fix a **maximal** bad subset `B ⊆ A` (maximal under inclusion among bad subsets);
then `|B| ≤ n`, `B` is bad, and for **every** `a ∈ A ∖ B` exactly one of the following holds
(at least one holds; they may overlap, in which case assign `a` to Case I):

- **Case I (a is a divisor):** there exist `b₁, b₂ ∈ B` with `a | b₁+b₂`, and then
  `a < max(B)`.
- **Case II (a is a summand):** there exist distinct `b, c ∈ B` with `b | a+c`, i.e.
  `a ≡ -c (mod b)`.

*Proof.* `B` maximal bad ⇒ for `a ∈ A ∖ B`, the set `B ∪ {a}` is **not** bad, so it contains
a divisor-triple. Since `B` itself is bad, every divisor-triple of `B ∪ {a}` must use `a`.
So `a` is either the divisor of such a triple (`a | b₁+b₂`, `b₁, b₂ ∈ B` distinct — Case I)
or a summand (`b | a+c` with `b` the divisor and `b, c ∈ B`, or `c | a+b` symmetrically — both
are Case II up to renaming: there exist distinct `b, c ∈ B` with `b | a+c`). In Case I,
Lemma 0(1) gives `a < max(b₁, b₂) ≤ max(B)`. ∎

(Brute-verified: across all tested P(n) sets every `a ∈ A∖B` is Case I or Case II, and every
Case-I element satisfies `a < max(B)`.)

### Lemma 2 (Fibers and the disjointness `Q_{b,c} ∩ B = ∅`)
For distinct `b, c ∈ B` define the **fiber**
`Q_{b,c} = {a ∈ A : a ∉ {b, c}, b | a+c} = {a ∈ A : a ≡ -c (mod b), a ∉ {b,c}}`.
Every Case-II element lies in some `Q_{b,c}` with `(b, c)` an ordered pair of distinct
elements of `B`; there are `≤ n(n-1)` such ordered pairs. Moreover `Q_{b,c} ∩ B = ∅`.

*Proof.* The fiber assignment is immediate from Case II. For disjointness: if `a ∈ B` with
`a ∉ {b, c}` satisfied `b | a+c`, then `(b, a, c)` would be a divisor-triple inside `B`,
contradicting `B` bad. ∎

(Brute-verified: `Q_{b,c} ∩ B = ∅` in all tested sets.)

### Lemma 3 (Shifted condition — corrected form, proved)
Let `b, c ∈ B` be distinct and `Q = Q_{b,c}`. Then **every** subset `T ⊆ Q` with `|T| = n`
satisfies: *either `T` contains a divisor-triple, or there exist distinct `x, z ∈ T` with
`x | b+z`.* Equivalently, every **bad** n-subset `T ⊆ Q` has distinct `x, z ∈ T` with
`x | b+z`.

*Proof.* Suppose `T ⊆ Q`, `|T| = n`, and `T` is bad (otherwise the first alternative holds and
we are done). Then `T ∪ {b}` has `n+1` elements of `A`, so by P(n) it contains a
divisor-triple. Since `T` is bad, that triple must involve `b`. The element `b` cannot be the
**divisor**: if `b | y+z` with `y, z ∈ T ⊆ Q`, then `y ≡ z ≡ -c (mod b)`, so
`y+z ≡ -2c (mod b)`, whence `b | 2c`; `b` odd ⇒ `b | c`, contradicting that `B` is an
antichain (`b ≠ c`). Therefore `b` is a **summand** of the triple, i.e. the triple is
`(x, b, z)` with `x | b+z` and `x, z ∈ T` distinct. ∎

(Brute-verified with **zero** failures over thousands of P(2)- and P(3)-sets, after the
correction. NOTE: the uncorrected statement "every n-subset T has a shifted pair" is **false**
— e.g. `A={27,159,97,31,35}`, `n=3`, `B={27,31}`, `b=31`, `c=27`, `T={159,97,35}`: here
`T ∪ {31}` has the triple `97 | 159+35` which does **not** use `b`, because `T` itself already
contains the divisor-triple `97 | 159+35`. The correct statement therefore needs the "or T has
its own triple" alternative / the restriction to bad T, which is exactly what is proved above.)

### The reduction (and where it stops)
Fix a maximal bad `B`, `|B| ≤ n`, and partition
`A = B ⊔ (Case I elements) ⊔ (Case II elements)` (assigning overlaps to Case I). Then
`|A| = |B| + #(Case I) + #(Case II) ≤ n + #(Case I) + Σ_{(b,c)} |Q_{b,c}|`,
the sum over the `≤ n(n-1)` ordered pairs. By Lemma 1, Case-I elements all lie below
`max(B)`; by Lemmas 2–3 each Case-II element lies in a fiber obeying the shifted condition.
**A complete solution needs:** (i) a bound on each `|Q_{b,c}|`, and (ii) a bound on
`#(Case I)`.

The natural recursive bound for (i) — that `Q_{b,c}` satisfies `P(n-1)` and hence
`|Q_{b,c}| < 2^{(n-1)^3}` by induction — is **FALSE** (counterexample `{5,9,11,61}` above:
`Q_{5,9} = {11,61}` has size 2 but does not satisfy `P(1)`). The shifted condition (Lemma 3)
gives, for every *bad* n-subset of `Q`, an in-fiber *pair* `x | b+z`, but converting this into
an in-fiber *triple* `u | v+w` (which is what `P(n-1)` on `Q` requires) is **unresolved** — no
identity or packing argument closes it. This is the single open gap. Empirically (brute force)
every fiber has `|Q_{b,c}| ≤ n` and the true `|A|` grows like `O(n^3)`, so the target
`2^{n^3}` is enormously loose; but no proof of `|Q_{b,c}| ≤ n` (or any explicit bound) was
found. Part (ii), the Case-I count, is likewise not bounded: distinct odd divisors of the same
sum `b₁+b₂` can both lie in `A` without breaking the antichain, so "one Case-I element per
pair" is false, and the Case-I block needs its own (also unresolved) argument.

### Base case (proved)
For `n = 1`, P(1) says every 2-subset contains a divisor-triple, impossible for `|A| ≥ 2`
(a triple needs 3 distinct elements). Hence `|A| ≤ 1 < 2 = 2^{1^3}`. ✓

### Summary of what is rigorous
- Lemma 0 (parity/residue), Lemma 1 (maximal bad set, |B| ≤ n, Case I/II, Case-I < max(B)),
  Lemma 2 (fibers, `Q_{b,c} ∩ B = ∅`, ≤ n(n-1) fibers), Lemma 3 (corrected shifted condition):
  **all proved and brute-verified**.
- Base case `n = 1`: proved.
- The conditional arithmetic `n + n(n-1)·2^{(n-1)^3} < 2^{n^3}` (n = 2..8): correct, but only
  usable if the fiber bound holds.

### The open gap
Bound `|Q_{b,c}|` (conjecturally `≤ n`) and bound `#(Case I)`. Equivalently, upgrade Lemma 3's
in-fiber *pair* to an in-fiber *triple* (or otherwise bound the fiber size). The false Key
Claim "`Q_{b,c}` satisfies `P(n-1)`" must NOT be used. Until this is closed, the result is a
rigorous reduction, not a full proof.

## Full proof
(omitted — Status is partial)
