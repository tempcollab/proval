## Status
partial

## Approaches tried

- **Congruence-aware propagation `C_k ⇒ C_{k+1}` (round 4, the B2/B3 reroute) — DEAD END for
  the reroute; everything else stands.** The descent framework (predicate `C_k`, indexing
  `n+1−k`, termination at `k=n`, size recursion `g(n) ≤ n·(n(n−1))^n < 2^{n^3}`) is correct
  and the propagation's Case A (`S = T'∪{b'}` not bad) and Case B1 (inherited shift with both
  endpoints in `T'`) close cleanly. The single open subcase is **B2/B3**: in the bad-`S` branch,
  `C_k` may return a shift `x | b_i + z` (`i ≤ k`, an *old* accumulated base `b_i`) with one
  endpoint equal to the new base `b'` — B2: `b' | b_i + z`, `z ∈ T'`; B3: `x | b_i + b'`,
  `x ∈ T'`. The outline's proposed fix was the **congruence lever** "`b' ≡ z (mod b)` (both in
  the depth-`k` fiber `Q`), hence `b | b' − z`, reroute into `T'`." I worked this out in full
  and it **does not close the reroute**, for a structural reason that is now pinned down:
  - The only valid bridge is the **merge identity**: from B2's `b' | b_i + z` and the fiber
    relation `b' | z + c'` (`z ∈ Q' = Q_{b',c'}`) one gets `b' | b_i − c'`, hence
    `b' | b_i + w` for **every** `w ∈ Q'` (so for all of `T'`). This is valid pure modular
    arithmetic (the review's "Claim A", confirmed valid).
  - But every such relation has the **old base `b_i` as a summand**, and `b_i ∉ Q` (it is an
    ancestor base, external to the current fiber). To satisfy `C_{k+1}` we need an *inner triple
    of `T'`* or a shift `x | b_j + z` with **both** endpoints in `T'`. The merge identity never
    removes the external `b_i`: for `w_1, w_2 ∈ T'` it only yields `b' | w_1 − w_2` (already
    known, both `≡ −c' (mod b')`), and one checks `b' ∤ w_1 + w_2` (else `b' | 2c' ⇒ b' | c'`,
    antichain-false). So **no `S`-internal triple and no in-`T'` shift is produced** — B2/B3 are
    not rerouted, and `S` is not forced good. The congruence `b | b' − z` the outline relied on
    is true but irrelevant: it relates `b'` to `z` modulo the *parent* base `b`, while the
    obstruction is the summand `b_i`, which it leaves untouched.
  - The greedy structure of `B'` does not help either: `B'` is built inside `Q` and never
    "sees" the relation `b' | b_i + z` (it involves `b_i ∉ Q`), so greedy cannot have caught a
    triple. Lemma 0 on the genuine divisor-triple `(b', b_i, z)` gives only `b' < max(b_i, z)`,
    with no control over which of `b_i, z` is larger.
  - **Empirics are vacuous (confirmed exhaustively, matching the v1 review).** Over *all*
    P(3)-antichains with elements ≤ 65 (499 of them), the descent produced **zero** secondary
    fibers reaching the test size `n−1`; the "`S` bad" branch was entered **0** times, and
    B2/B3 **0** times. Random P(4)/P(5) searches likewise reached the branch 0 times. So "0
    B2/B3 violations" tests nothing — it is consistent with the reroute being false. The branch
    is reachable in principle (the size-2 secondary fiber `Q_{17,11}={23,125}` exists in the
    P(5)-antichain `{3,7,11,17,23,65,73,109,125}`, with `C_2` holding there *vacuously* because
    the test size `n+1−2 = 4 > 2`), but a *bad* `T'` triggering B2/B3 was never realized.
  Net: the propagation `C_k ⇒ C_{k+1}` is **unproven**; the obstruction (old-base summand `b_i`
  is external to the fiber and survives every available identity) is genuine, not a presentation
  gap. Do NOT retry the congruence-lever reroute as written.

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

- **Route B: propagation C_k ⇒ C_{k+1} via greedy double-fiber + extremal base-value
  descent (Round 1). DEAD END — structural obstruction confirmed.** The A/B1/B2/B3 case
  split of the propagation step is exhaustive and disjoint, and L2 (`b'>x` via Lemma-0
  parity), L3 (forced double-fiber membership) are sound. But the two endpoint cases cannot
  be closed within the descent: **(B3)** re-firing `C_k` on `T'∪{b''}` fails because
  `T'⊆Q_{b',c'}` not `Q_{b'',c''}`, so the new base `b''` has no residue control over `T'`
  and re-enters as an *external* base one level down — the descent has nothing to descend on.
  **(B2)** its whole content is the single congruence `b_i≡c' (mod b')` relating an
  *external* ancestor base to the fiber; it contains no internal triple/shift (199/200
  structured `|T'|=2` instances have no internal lever), and the only escape needs
  `b_i∈Q`, generically false (the merge-identity-only fallback was already proven dead in
  round 4). **Root cause:** the predicate `C_k` carries a clause `x|b_i+z` whose summand
  `b_i` is an *external* accumulated base; whenever a firing puts the new base at an
  endpoint, the surviving clause references something outside the fiber and no in-fiber
  identity removes an external summand. The size monovariant forcing termination is exactly
  what injects the leak, so B2 and B3 fail at the identical step. LESSON: do NOT reroute the
  C_k descent again. Switch spine — most promising candidate is a **residue-tagged
  predicate** (carry ancestor bases as intrinsic residue tags, since sub-fibers inherit all
  ancestor congruences), which removes the leak by design but needs its termination
  re-proved; second candidate is a direct `|Q_{b,c}| ≤ poly(n)` packing bound in the shared
  residue class.

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

### The open gap (updated round 4)
The descent framework is the right line and is **almost** complete. Define, for `Q ⊆ A` and an
ordered tuple of accumulated bases `(b_1,...,b_k)` (each `b_i ∈ A`):

> **C_k(Q; b_1,...,b_k):** every `T ⊆ Q` with `|T| = n+1−k` either contains an inner
> divisor-triple, or has distinct `x, z ∈ T` with `x | b_i + z` for some `i ≤ k`.

`C_0 = P(n)` (proved), `C_1` = Lemma 3 (proved). Termination `C_n ⇒ Q = ∅` is proved (a
`1`-subset shift `x | b_i + x` forces `x | b_i`, antichain-banned). The size recursion
`h(k) ≤ n + n(n−1)·h(k+1)`, `h(n)=0`, gives `|A| ≤ h(0) ≤ n·(n(n−1))^n < 2^{n^3}` (arithmetic
verified, `n ≥ 2`; `n=1` by the base case). **The one missing step is the propagation
`C_k ⇒ C_{k+1}` along realizable fibers** — specifically its B2/B3 subcase, which the round-4
analysis (recorded above) shows is *not* closed by the congruence lever: the obstruction is an
old accumulated base `b_i` appearing as an external summand `x | b_i + z` that no in-fiber
identity can internalize. The previously-flagged need to bound `|Q_{b,c}|`/`#(Case I)` is
subsumed by this (Case I is empty under greedy-from-below `B`; the fiber bound is exactly the
propagation). Until the B2/B3 reroute is closed — or the predicate `C_k` is redesigned so that
old-base summands cannot leak in while *preserving* the termination lemma (any new clause must
remain unsatisfiable at the `1`-subset level) — the result is a rigorous reduction plus a
verified descent skeleton, not a full proof.

The earlier-stated open gap (bound `|Q_{b,c}|`, conjecturally `≤ n`; bound `#(Case I)`) is
retained for reference but is now folded into the propagation step above. The false Key Claim
"`Q_{b,c}` satisfies `P(n-1)`" and the false claim "`|Q'| ≤ 1`" must NOT be used (both refuted;
explicit counterexamples recorded).

## Proof outline (round 3 — full solution plan)

Spec review: required

**Technique:** Structural induction via an *iterated fiber decomposition*. The spine is
not induction on `n` but a finite descent through a hierarchy of conditions `C_0, C_1, ...`,
each obtained from the previous by a generalization of Lemma 3 (the *propagation lemma*),
terminating at depth `n` where the antichain property forces the set empty. Builds on the
already-proved Lemmas 0–3 and the greedy-`B` Case-I elimination.

### Corrected indexing (IMPORTANT — explorer had an off-by-one)

Define, for a set `Q ⊆ A` and an ordered tuple of *accumulated base elements*
`(b_1, ..., b_k)` (each `b_i ∈ A`):

> **C_k(Q; b_1,...,b_k):** every subset `T ⊆ Q` with `|T| = n+1−k` either contains an
> inner divisor-triple, or has distinct `x, z ∈ T` with `x | b_i + z` for some `i ≤ k`.

Calibration (verify against the proved lemmas):
- **C_0 = P(n):** every `(n+1)`-subset has an inner triple (0 bases). ✓
- **Lemma 3 is exactly `C_1`:** every `n`-subset of a fiber `Q_{b,c}` has an inner triple or a
  `b`-shift `x|b+z`. So subset size `n = n+1−1`, one base `b`. ✓

The explorer wrote "Level k: every `(n−k)`-subset", which mis-calibrates Lemma 3 and pushes
termination to `n−1`. The **correct** subset size at level `k` is `n+1−k`, and termination is
at **`k = n`** (subset size `1`). The final bound is `|A| ≤ g(n)`, not `g(n−1)`; verified
numerically (below) that `< 2^{n^3}` still holds with huge margin either way.

### Skeleton

1. **Setup / Lemma 0** — divisor-triple parity: divisor odd, summands odd ⇒ quotient even ⇒
   divisor `< max(summand)`; summands occupy complementary residues mod the divisor. *(Already
   proved.)*
2. **Greedy maximal bad set + Case-I elimination** — build `B` greedily from below in any set
   `Q` (process in increasing order, add `a` if `Q`-so-far `∪{a}` is still bad). Then `|B| ≤ n`
   *(Lemma 1; bad sets have size ≤ n by P(n), and the same bound holds inside any fiber since a
   fiber is a subset of `A`)*, and **every** `a ∈ Q∖B` is Case II (a summand `b|a+c`,
   `b,c ∈ B` distinct), i.e. **Case I is empty**. Mechanism: if `a > max(B)`, the triple in
   `B∪{a}` has `a` as its largest element, so by Lemma 0 `a` is not the divisor; if `a` was
   skipped by the greedy at step `t`, the triple formed with the partial `B_t` uses only
   elements `< a`, so again by Lemma 0 `a` is not the divisor. Either way `a` is a summand.
   *(New this round; verified on `A` and on fibers, 0 violations / 1655 elements.)*
3. **Fiber decomposition** — `Q∖B = ⋃ Q_{b,c}` over the `≤ n(n−1)` ordered pairs of distinct
   `b,c ∈ B`, where `Q_{b,c} = {a ∈ Q : a ≢ {b,c}, a ≡ −c (mod b)}`; `Q_{b,c}∩B = ∅`. Hence
   `|Q| ≤ |B| + Σ_{(b,c)}|Q_{b,c}| ≤ n + n(n−1)·max_{(b,c)}|Q_{b,c}|`. *(Lemma 2.)*
4. **Propagation lemma (generalized Lemma 3) — KEY LEMMA, see below** — if `Q` satisfies
   `C_k(Q; b_1,...,b_k)`, then each secondary fiber `Q_{b',c'}` (built from a greedy `B'` of `Q`,
   with `b',c' ∈ B'`) satisfies `C_{k+1}(Q_{b',c'}; b_1,...,b_k,b')`.
5. **Termination lemma** — any `Q` satisfying `C_n(Q; b_1,...,b_n)` is empty. Mechanism: the
   condition is on `1`-subsets `{x}`; a size-1 set has no inner triple, and a shift `x|b_i+z`
   with `z ∈ {x}` forces `z=x`, i.e. `x | b_i + x`, i.e. `x | b_i`. But `x, b_i ∈ A` are distinct
   antichain elements (`x` in the deepest fiber, `b_i` an accumulated base), so `x ∤ b_i`.
   Contradiction unless no such `x` exists. Hence `Q = ∅`.
6. **Size recursion + arithmetic** — let `h(k)` = max size of a set satisfying `C_k`. Steps 3–5
   give `h(n) = 0` and `h(k) ≤ n + n(n−1)·h(k+1)`. Setting `g(j) = h(n−j)`:
   `g(0) = 0`, `g(j) = n + n(n−1)g(j−1)`, so `g(j) ≤ n·(n(n−1))^j`. Then
   `|A| ≤ h(0) = g(n) ≤ n·(n(n−1))^n < 2^{n^3}` for all `n ≥ 1`.
   *(Verified: `n=2`: 6 vs 256; `n=3`: 129 vs 1.3e8; growth `n·(n(n−1))^n` stays far below
   `2^{n^3}` — take log₂: `log₂n + n·log₂(n(n−1)) ≤ log₂n + 2n·log₂n < n^3` for `n ≥ 2`; `n=1`
   handled by the base case `|A| ≤ 1`.)*

### Key lemmas (claim + mechanism)

- **Lemma 0** (proved): in an antichain divisor-triple `x|y+z`, `x < max(y,z)` and `y,z` are in
  complementary nonzero residues mod `x`. *Because* `y,z` odd ⇒ `y+z` even, `x` odd ⇒ quotient
  `≥ 2`.
- **Case-I elimination** (Step 2): greedy-from-below `B` ⇒ no outside element is a divisor.
  *Because* by Lemma 0 the divisor of any forced triple is below the largest element of the
  triple, and greedy-from-below guarantees every newly-forced triple's other two members are
  `≤` (resp. `<`) the new element.
- **Propagation `C_k ⇒ C_{k+1}`** (Step 4, the crux): Let `T'` be a *bad* `(n−k)`-subset of the
  secondary fiber `Q_{b',c'}`. Then `T'∪{b'}` is an `(n+1−k)`-subset of `Q`, so `C_k` applies.
  Since `T'` is bad, any inner triple of `T'∪{b'}` uses `b'`. `b'` cannot be the **divisor**:
  `b'|y+z` with `y,z ∈ Q_{b',c'}` ⇒ `y≡z≡−c' (mod b')` ⇒ `b'|2c'` ⇒ `b'|c'` (b' odd),
  contradicting the antichain. So `b'` is a **summand**: `x|b'+z`, `x,z ∈ T'` — a `b'`-shift,
  i.e. the `i=k+1` clause of `C_{k+1}`. If instead `C_k` produced a `b_i`-shift (`i≤k`) it is
  inherited; **the load-bearing subcase** is when that inherited shift has `b'` as an endpoint —
  see "Watch out for".
- **Termination** (Step 5): `C_n` ⇒ empty, *because* a `1`-subset shift forces `x|b_i`, banned by
  the antichain.

### Cases to cover
- Step 2 Case-I elimination: (a) `a > max(B)`; (b) `a < max(B)` skipped by greedy. Both must use
  Lemma 0 and conclude `a` is a summand.
- Step 4 propagation, the inherited `b_i`-shift: (a) both endpoints `x,z ∈ T'` (direct, inherited);
  (b) one endpoint equals the new base `b'` — must be resolved (the hard subcase).
- Base case `n=1`: `P(1)` ⇒ `|A| ≤ 1 < 2`.

### Watch out for (hard steps / gaps to close)
- **HARD STEP — the inherited-shift endpoint subcase in propagation.** When `C_k` yields a
  `b_i`-shift `x|b_i+z` with one endpoint equal to `b'` (the new base), it is *not literally* a
  shift within `T'`. The builder MUST show this case either (i) cannot occur, or (ii) still
  produces an inner triple or an accumulated-base shift *within `T'`*. Empirically this never
  breaks `C_{k+1}` (439 P(n) antichains, n=2..4, fully descended through the fiber tree: **0**
  failures of `C_k` at any node), but the empirics do NOT substitute for the argument. Likely
  resolution: a shift `x|b_i+z` with `x=b'` means `b'|b_i+z`; combined with `z ≡ −c' (mod b')`
  and the structure of `b_i` this should be ruled out or rerouted — the builder must pin it down.
  This is the single genuinely non-routine step.
- **Indexing.** Use subset size `n+1−k` at level `k` and terminate at `k=n`. Do NOT copy the
  explorer's `(n−k)` / depth-`n−1`. The final bound is `g(n) ≤ n·(n(n−1))^n`, still `< 2^{n^3}`.
- **`|B| ≤ n` inside fibers.** Re-justify each time: a fiber is a subset of `A`, bad subsets of a
  subset of `A` are bad subsets of `A`, so P(n) still caps them at `n`.
- **Greedy applied recursively.** The Case-I-elimination argument is reused at every level on the
  fiber `Q` in place of `A`; it only needs `Q` to be an antichain (true: `Q ⊆ A`) and Lemma 0.
- **The new base `b'` and `c'` are antichain elements of `A`** (they lie in `Q ⊆ A`), so the
  antichain steps `b'∤c'` and `x∤b_i` are valid at every depth.

### Recorded dead ends (do NOT retry)
- Do NOT claim `Q_{b,c}` satisfies `P(n−1)` (FALSE: `A={5,9,11,61}`, `Q_{5,9}={11,61}`).
- Do NOT use the bound `2^{(n−1)^3}` or the strengthened predicate `S(n)` (indexing mismatch,
  wrong base for `n=2`).
- Do NOT induct on `max(A)` for fixed `n` (non-strict reduction).
- Do NOT use residue-class decomposition mod `2b` (unbounded number of classes).

## Full proof
(omitted — Status is partial)
