# Olympiad Knowledge Base

Theorems and techniques for hard (difficulty-8) olympiad problems across algebra,
number theory, combinatorics, geometry, and linear algebra. Organized by technique,
not by problem domain — many problems mix areas.

## Algebra & Polynomials

- **Vieta's formulas**: roots ↔ coefficients. For systems of symmetric equations,
  treat unknowns as roots of a polynomial and read off symmetric functions.
- **Symmetric functions & Newton's identities**: convert between power sums
  `p_k = Σ xᵢᵏ` and elementary symmetric polynomials. Use to match power-sum equalities.
- **Resultants / "transform the roots"**: to show `P(r)=0 ⟹ Q(f(r))=0`, exhibit a
  polynomial identity `g(x)·P(x) = Q(f(x))`; then `P(r)=0` forces `Q(f(r))=0`.
- **Minimal-polynomial reduction**: given `P(x)=0`, reduce any high power `xᵏ` by
  repeatedly substituting the relation (e.g. `x³ = 8 − 4x`) until degree `< deg P`.
- **Sum of squares (SOS) / completing the square**: prove a real inequality by
  rewriting `LHS − RHS` as a sum of squares; equivalently a positive-semidefinite
  quadratic form.
- **Standard inequalities**: AM-GM, Cauchy-Schwarz, QM-AM, Schur. Equality cases
  pin down the extremal configuration.
- **Functional equations**: test special values, check injectivity/surjectivity.
- **Complex roots & moduli**: `|root product| = |constant term|`; conjugate
  symmetry (`b = ā`) and `aⁿ = bⁿ` cases for modulus conditions.

## Linear Algebra

- **Quadratic forms**: a symmetric form is PSD iff it's a sum of squares iff all
  eigenvalues ≥ 0. `det = 0` ⟺ nontrivial kernel.
- **Symmetric matrices**: real symmetric ⟹ orthogonally diagonalizable, real
  eigenvalues. `A²` is PSD; `Σ Aᵢ²` singular ⟺ the `Aᵢ` share a common null vector.
- **Rank / image / kernel**: `det(Σ Aᵢ Bᵢ) = 0 ∀Bᵢ` ⟺ the `Aᵢ` have a common
  nonzero vector in `∩ ker` (or images miss a direction) — argue via shared kernel.

## Number Theory

- **Modular arithmetic, CRT**: solve / count solutions mod `n` by factoring
  `n = Π pᵢ^{eᵢ}` and combining residues. Root counts multiply across prime powers.
- **Quadratic residues, Legendre symbol, quadratic reciprocity**: decide solvability
  of `x² ≡ d`. A quadratic mod `p` has 0/1/2 roots by the discriminant's QR status.
- **Hensel's lemma**: lift a simple root mod `p` to mod `pᵏ`; a *unique* root mod `n`
  needs care at `p=2` and where the discriminant vanishes.
- **Order of an element, Fermat/Euler**: periodicity of `aⁿ mod m`; eventual
  periodicity of products of a sequence mod `m`.
- **Lifting the Exponent (LTE)**: exact power of `p` dividing `aⁿ ± bⁿ`.
- **Zsygmondy's theorem (primitive prime divisors)**: for coprime integers
  `a > b ≥ 1` and `n ≥ 1`, `aⁿ − bⁿ` has a *primitive* prime divisor `r` (a prime
  `r ∣ aⁿ − bⁿ` with `r ∤ aᵏ − bᵏ` for all `1 ≤ k < n`), EXCEPT in the cases:
  (i) `n = 1` and `a − b = 1`; (ii) `n = 2` and `a + b` is a power of `2`; and
  (iii) `(a,b,n) = (2,1,6)`. A primitive prime divisor `r` of `aⁿ − bⁿ` satisfies
  `ord_r(a/b) = n` in `(ℤ/rℤ)*`; in particular, with `b = 1`, `ord_r(a) = n`.
- **Dirichlet's theorem on primes in arithmetic progressions**: if `gcd(a, q) = 1`
  then the arithmetic progression `{a + kq : k ≥ 0}` contains infinitely many primes.
- **Linear recurrences**: characteristic equation → closed form; inhomogeneous
  term handled by a particular solution; sequences are eventually periodic mod `m`.
- **Diophantine / parametric families**: fix one symmetric quantity (e.g. `s = m+n`),
  solve for the rest, exhibit a one-parameter infinite family. Pell `x²−Dy²=1` flavor.
- **Vieta jumping & infinite descent**: for symmetric Diophantine constraints.
- **Perfect-square arguments**: a value strictly between consecutive squares is not a
  square; force/forbid squareness by growth rate or by a parametric construction.
- **Divisor analysis**: `d(n)`, gcd structure, consecutive-integer coprimality
  (`gcd(k, k+1)=1`), bounding a finite search by size.

## Combinatorics

- **Pigeonhole / extremal principle**: for existence, take the maximal or minimal
  element; for forced structure, count and exceed a threshold.
- **Double counting**: count one quantity two ways to get an identity or bound.
- **Extremal graph theory**: edge-count thresholds force substructures; decompose
  the vertex set dyadically / by levels and pigeonhole within a level.
- **Constructive / incremental**: realize *every* value in a range (e.g. any edge
  count) by starting from an extreme and adding one unit at a time.
- **Comparability / divisibility graphs**: assign integers so edges encode
  divisibility (a chain gives a clique; antichains give independent sets).
- **Invariants & monovariants**: a quantity preserved (or monotone) across moves.
- **Cyclic / triangular-number structure**: positions `Σ i = k(k+1)/2 mod n`;
  distinctness of partial sums in `ℤ/nℤ`.
- **Multiset partitions & power-sum matching** (Prouhet–Tarry–Escott flavor): split
  a set into parts with equal power sums up to some order.

## Geometry (synthetic & analytic)

- **Synthetic toolkit**: angle chasing, power of a point, radical axes, similar
  triangles, trig cevians (Ceva/Menelaus), inversion, projective ideas.
- **Coordinates / complex / barycentric**: place coordinates to exploit symmetry;
  rotate axes to align with a key line (e.g. a tangent line `x+y=0`).
- **Conics**: a parabola tangent to a line at its vertex is `(perp. distance)² ∝
  (distance along axis)`; work in rotated coordinates.
- **Lattice-point counting**: count integer points under linear constraints
  (`x+y < c`, `x,y > 0`); combine with the algebraic/NT condition on the curve.
- **Trig identities & interval intersection**: `|x − u| ≤ v` defines an interval;
  two such hold simultaneously iff the intervals overlap (reduce to one inequality).

## General Proof Methods

- **Direct proof**: chain definitions and known results from hypothesis to conclusion.
- **Contradiction**: assume the negation, derive an impossibility. Best when the
  conclusion is a non-existence ("no such...") or a "must be" uniqueness claim.
- **Contrapositive**: prove `¬B ⟹ ¬A` instead of `A ⟹ B` when the negation is easier.
- **Induction**: ordinary, strong, or structural. Pick the right variable to induct on;
  for "for all n" constructions, build step `n` from step `n−1`. **Infinite descent**
  is induction's dual — no minimal counterexample can exist.
- **Casework / exhaustion**: split into finitely many cases (parity, residue class,
  sign, ordering) and settle each. Keep cases disjoint and exhaustive.
- **Pigeonhole / extremal**: if a count exceeds the containers, two collide; or take
  the largest/smallest object and argue it forces the result.
- **Bijection / counting two ways**: prove equalities by mapping or double counting.
- **Invariant / monovariant**: find a quantity that never changes (or only moves one
  way) to prove reachability/unreachability or termination.
- **Constructive vs. existence**: "find all / largest n" needs an upper bound **and** a
  matching construction; "infinitely many" needs an explicit one-parameter family.

## Problem-Solving Heuristics (Pólya)

- **Solve a simpler / special case first**: try small `n`, a symmetric case, or drop a
  constraint. Spot the pattern, then generalize.
- **Specialize**: plug in extreme or symmetric values (0, 1, equal variables) to expose
  structure or guess the answer.
- **Generalize**: a stronger, cleaner statement is sometimes easier to prove by induction
  (induction loading / strengthening the hypothesis).
- **Work backward**: assume the goal and ask what would imply it; reduce to a known fact.
- **Introduce a substitution / change of variables**: trig (`x=tanθ`), shift, scale, or
  homogenize to simplify the algebra.
- **Exploit symmetry / WLOG**: order the variables, normalize, or fix a symmetric quantity.
- **Reformulate**: translate to another domain — geometry↔algebra↔graph — so a different
  toolkit applies.
- **Find a related/analogous problem** you already know how to solve.
- **Check the answer**: verify edge cases, dimensional/parity consistency, and that
  equality cases are actually attained.

## Meta-Strategy

- Always check small cases first to build intuition and spot the answer.
- Identify the *true* technique, not the surface domain — many "number theory"
  problems are constructions; some "geometry" problems are analytic/lattice counting.
