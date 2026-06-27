## Status
partial

## Approaches tried
- Computational exploration of the sequence and f(p) values — partial progress (Key Lemma / Lemma 1 proved, injection identified).
- Round-4 integer-injection outline (Lemma 1 over Z + interval/distinct-mod-P span argument) — Lemma 1 PROVEN and gap-free, reduction PROVEN; but the load-bearing **linear lower frontier (Lemma 2)** was NOT closed.
- Round-4 build attempt on Lemma 2 (this round): established the elementary upper bound `a_n ≤ nextprime(M(n))` rigorously, but every induction to a *linear* frontier `a_n ≤ 2n+o(n)` fails to self-sustain (the inductive over-estimate is Θ(n)-loose; the true error is O(√n) and provably needs the covering structure / a prime-gap input, not just the avoidance bound). Recorded the exact remaining gap. **Status remains partial — the result is NOT yet fully proven.**

## Current best

Throughout, set `g(n) := n − a_n` and, for `1 ≤ k < n`, call the integers
`a_k + (n−k)` the **terms at position n**; let
`M(n) := max_{1≤k<n}(a_k + n − k) = n + max_{1≤k<n}(a_k − k)` be the largest term.

By definition, for `n ≥ 2`, `a_n` is the smallest prime `p` that divides **no**
term at position `n`. Equivalently (a prime divides the product iff it divides
some factor):
- **(i)** `a_n` divides no term `a_k+(n−k)`, `1≤k<n`;
- **(ii)** every prime `q < a_n` divides at least one term at position `n`.

### Lemma 1 (PROVEN, gap-free) — `g` is injective over ℤ, hence f(p) ≤ p.

*Statement.* The map `g(n)=n−a_n` is injective: if `n_1 < n_2` then
`n_1 − a_{n_1} ≠ n_2 − a_{n_2}`.

*Proof.* Suppose `g(n_1)=g(n_2)` with `n_1<n_2`. Then
`a_{n_2} − a_{n_1} = n_2 − n_1 > 0`, so the term at position `n_2` coming from
index `k=n_1` equals `a_{n_1} + (n_2 − n_1) = a_{n_2}`. Thus `a_{n_2}` divides a
term at position `n_2`, contradicting (i). ∎

*Consequence (f(p) ≤ p).* Fix a prime `p` and let `n_1<n_2` be two positions with
`a_{n_1}=a_{n_2}=p`. The term at `n_2` from index `k=n_1` is `p+(n_2−n_1)`; by (i)
`p ∤ p+(n_2−n_1)`, so `p ∤ n_2−n_1`, i.e. `n_1 ≢ n_2 (mod p)`. Hence the positions
of `p` are pairwise distinct mod `p`, so there are at most `p` of them:
**`f(p) ≤ p`.** (Verified: `g(n)` takes 40000 distinct integer values for n ≤ 40000.)

### The reduction (PROVEN). It suffices to prove `∑ f(p_i) ≤ max_i p_i`.

Since each `p_i > 0`, `max_i p_i ≤ ∑_i p_i`, so
`max_i p_i ≤ ½(max_i p_i + ∑_i p_i)`. Therefore the strictly stronger inequality
`∑_{i=1}^m f(p_i) ≤ max_i p_i` implies the required bound. (Verified numerically:
`∑f/max` peaks at exactly 1, attained by the subset {2} with f(2)=2; the actual
problem ratio LHS/RHS stays ≤ 0.27.)

### The span framework (PROVEN modulo Lemmas 2,3 below).

Fix distinct primes `p_1<⋯<p_m` and put `P := p_m = max_i p_i`. Every position `n`
counted by `∑ f(p_i)` has `a_n ∈ {p_1,…,p_m}`, hence `a_n ≤ P`. Let `S` be the set
of all such positions; then `∑_{i=1}^m f(p_i) = |S|`. By Lemma 1 the integers
`{g(n) : n ∈ S}` are pairwise distinct. If we knew they all lie in an interval of
length `≤ P−1` (an interval `[L, L+P−1]` of `P` consecutive integers), then there
are at most `P` of them, giving `|S| ≤ P` as required. So the whole problem reduces
to bounding the spread of `g` on positions with `a_n ≤ P`, which is exactly the two
frontier lemmas:

- **Lemma 3 (upper frontier).** `a_n = q ⟹ n ≤ q + δ(q)` with `δ(q)=o(q)`; then for
  `n ∈ S`, `g(n)=n−a_n ≤ δ(a_n) ≤ δ(P)` (since the most-positive `g` comes from the
  largest available prime and `δ` grows). Empirically `n − a_n ≤ 57` over n ≤ 40000,
  tracking the maximal prime gap below ~2n.
- **Lemma 2 (lower frontier).** `a_n = q ⟹ n ≥ q/2 − ε(q)` with `ε(q)=O(√q)`; then
  for `n ∈ S`, `g(n) = n − a_n ≥ (a_n)/2 − ε(a_n) − a_n = −a_n/2 − ε(a_n) ≥
  −P/2 − ε(P)`. Empirically the worst deficit `(q−1)/2 − n` (over first
  appearances) is `+11` at `q=1361`, growing like `O(√q)`.

Granting Lemmas 2,3, the `g`-values on `S` lie in
`[−P/2 − ε(P), δ(P)]`, an interval of length `P/2 + ε(P) + δ(P) = P/2 + o(P) < P−1`
for all `P` exceeding an explicit threshold; the finitely many small `P` are checked
directly (numerically `length/(P−1) ≤ 0.8`, attained at `P=11`, and `< 1` for every
`P ≥ 5`; the trivial subsets with `P ∈ {2,3}` are handled by `f(2)=2, f(3)=0` below).
This closes the problem **conditional on Lemmas 2 and 3.**

### Small-prime base facts (PROVEN).
- **`f(2) = 2`.** `2` appears exactly at `n=1,2` (`a_1=a_2=2`). For `n ≥ 3`, the
  term from `k=2` is `a_2+(n−2)=n`, and the term from `k=1` is `a_1+(n−1)=n+1`; one
  of `n, n+1` is even, so `2` divides a term and `a_n ≠ 2`. Hence `f(2)=2`,
  attaining `f(2)=2 ≤ 2` with equality.
- **`f(3) = 0`** (the prime 3 never appears). With `a_1=a_2=2, a_3=5`: for `n ≥ 4`
  the terms from `k=1,2,3` are `2+(n−1)=n+1`, `2+(n−2)=n`, `5+(n−3)=n+2`, i.e.
  `n, n+1, n+2` — three consecutive integers, so `3` divides one of them and
  `a_n ≠ 3`. For `n=3` the terms are `a_1+2=4` and `a_2+1=3`, so `3` divides a term
  and `a_3 ≠ 3` (indeed `a_3=5`). Thus `3` never appears, `f(3)=0`.
  (First terms verified: 2,2,5,7,11,5,11,13,17,17,23,23,11,23,29,…)

### PROVEN elementary core of the frontiers.

**`a_n ≤ nextprime(M(n))`** for all `n ≥ 2`, where `nextprime(x)` is the smallest
prime `> x`. *Proof.* Let `r = nextprime(M(n))`. Every term at position `n` is a
positive integer `≤ M(n) < r`, hence `r` divides none of them. By definition `a_n`
is the **smallest** prime dividing no term, so `a_n ≤ r`. ∎ (Verified: no violations
for n ≤ 40000.) This is the elementary skeleton of Lemma 2: it bounds `a_n` in terms
of `M(n)`. The gap (below) is to bound `M(n) ≤ 2n + o(n)`.

## Remaining gap (precise)

Lemma 1, the reduction, the span framework, and the small-prime facts above are
**complete and rigorous**, and already yield the proven sub-result `f(p) ≤ p` for
every prime `p`. What is **NOT** yet proven is the pair of *linear, uniform*
frontier bounds Lemmas 2 and 3 — equivalently, the single statement

> **(★)** `a_n ≤ 2n + o(n)` **and** `a_n ≥ n − o(n)` (uniformly in n),

which is exactly what the span framework needs (it requires the `g`-interval on
`{n : a_n ≤ P}` to have length `< P`, and the budget computation shows this holds
once `a_n ≤ A·n` and `a_n ≥ c·n` with `(1−c)/c + (A−1)/A < 1`; e.g. `A=2, c>2/3`,
both delivered by (★)). Empirically (★) holds with large margin:
`a_n ≤ 2n + 23` and `a_n ≥ 0.8125·n` for all `n ≤ 40000`, with `a_n/n → 2` and
`n − a_n` tracking only the maximal prime gap below `~2n`.

**Why this is the genuine crux, and why the natural attacks fail (recorded so the
next round does not repeat them):**

1. *The avoidance/prime-counting argument is sublinear.* "Every prime in `(q/2,q)`
   divides some term, and a term below `q²/4` hosts at most one such prime, so
   `n−1 ≥ #primes in (q/2,q) ≈ q/(2 ln q)`" gives only `n ≳ q/(2 ln q)`, a
   **sublinear** frontier (verified: this ratio falls below the required 0.1 for
   all `q ≳ 150`). It cannot prove a linear frontier.

2. *Every induction via `a_n ≤ nextprime(M(n))` is Θ(n)-loose.* Writing
   `M(n) = n + max_{k<n}(a_k − k) ≤ 2n − 1 + E_{n−1}` with `E_n := max_{k≤n}(a_k−2k)`,
   the inequality `a_n ≤ nextprime(2n−1+E_{n−1})` yields the recursion
   `E_n ≤ E_{n−1} − 1 + g(2n + E_{n−1})`, where `g(x)` is the maximal prime gap up to
   `x`. This forces `E_n = Θ(n)` in the bound (verified: the recursion drives the
   upper bound to `E_n ≈ 11n`), whereas the *true* `E_n` is only `≤ 23` (i.e.
   `O(√n)`). The looseness is real: `a_n` is usually a prime **strictly smaller**
   than `nextprime(M(n))` (a smaller prime `≤ M(n)` already divides no term), and
   capturing that requires the **covering** structure (ii), not merely the avoidance
   bound `a_n ≤ nextprime(M(n))`. No additive or `O(√n)` invariant self-sustains
   through the `nextprime`, because `nextprime` can jump by a full prime gap that the
   invariant's increment cannot absorb.

3. *A genuinely new idea is needed* — one that exploits, for `a_n = q`, that **every
   prime `p < q` divides a term**, together with the fact (verified) that **every
   prime in `(n, a_n)` is itself a term value** (such a prime divides only the term
   equal to it, since the next multiple `2p > 2n ≥ M(n)`). This couples the small
   primes to a short window of small terms (`a_{n−1}+1, a_{n−2}+2, …`) and is the
   most promising route to a linear frontier, but it has not been turned into a
   rigorous uniform bound here. Alternatively, an *unconditional prime-gap theorem*
   `g(x) = o(x)` (Prime Number Theorem; or `g(x)=O(x^{0.525})` by
   Baker–Harman–Pintz) would let one prove `a_n ≤ 2n + o(n)` non-inductively if the
   `M(n) ≤ 2n + o(n)` circularity can be broken — but that circularity (Lemma 2 at
   `n` depends on Lemma 2 at `n−1` via `M(n)`) is precisely the obstruction not yet
   resolved.

**Honest assessment.** This is `partial`: Lemma 1 gives `f(p) ≤ p` rigorously, and
the entire reduction to (★) is rigorous. The single remaining obstacle is the
uniform linear frontier (★); it is a real number-theoretic difficulty (factor
`ln q` / prime-gap term) and is not closed. Do not mark this solved until (★) — or
an equivalent linear bound `a_n ≤ A·n`, `a_n ≥ c·n` with `(1−c)/c + (A−1)/A < 1` —
is proven.

## Full proof
(not yet complete — the linear-frontier statement (★) is the sole remaining gap; the
rigorous partial results, the reduction, and the precise obstruction are recorded
above.)
