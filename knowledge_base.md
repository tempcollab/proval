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
- **Zsigmondy's theorem**: for coprime `a > b > 0`, `aⁿ − bⁿ` has a *primitive*
  prime (dividing no `aᵏ − bᵏ`, `k < n`) except `n=1` with `a−b=1`, `n=2` with
  `a+b` a power of 2, and `(a,b,n)=(2,1,6)`; for `aⁿ + bⁿ` except `2³+1³`. Forces
  distinct primes across a family, or bounds exponents.
- **Dirichlet's theorem (primes in AP)**: for `gcd(a,d)=1`, `a, a+d, a+2d, …` has
  infinitely many primes — pick a prime in a chosen residue class (e.g. `p≡1 mod m`
  for an element of order `m`).
- **Linear recurrences**: characteristic equation → closed form; inhomogeneous
  term handled by a particular solution; sequences are eventually periodic mod `m`.
- **Diophantine / parametric families**: fix one symmetric quantity (e.g. `s = m+n`),
  solve for the rest, exhibit a one-parameter infinite family. Pell `x²−Dy²=1` flavor.
- **Vieta jumping & infinite descent**: for symmetric Diophantine constraints.
- **Perfect-square arguments**: a value strictly between consecutive squares is not a
  square; force/forbid squareness by growth rate or by a parametric construction.
- **Divisor analysis**: `d(n)`, gcd structure, consecutive-integer coprimality
  (`gcd(k, k+1)=1`), bounding a finite search by size.
- **Three-gap / Steinhaus theorem** (1957, also Słomczyński/van Ravenstein; proved
  by Świerczkowski, Surányi). Fix irrational `α` and `m ≥ 1`; place the `m` points
  `{α}, {2α}, …, {mα}` on the circle `ℝ/ℤ`. Let `η_m = min_{1≤k≤m}{kα}` (smallest
  forward residue) and `ζ_m = min_{1≤k≤m}(1 − {kα})` (smallest backward residue).
  Then: (i) the `m` arcs between cyclically consecutive points take **at most three
  distinct lengths**, namely `η_m`, `ζ_m`, and `η_m + ζ_m`; (ii) the **largest** arc
  has length `η_m + ζ_m`; (iii) **insertion corollary**: passing from `T_m` to
  `T_{m+1}` by adding `{(m+1)α}`, the new point lands strictly inside one of the
  longest arcs (an `η_m + ζ_m` arc) and splits it into one arc of length `η_m` and
  one of length `ζ_m`; hence the largest gap `G(m)` is non-increasing in `m`. Use to
  analyze extremal/gap problems for the Kronecker sequence `{kα}`. The `η_m, ζ_m`
  are governed by the continued-fraction convergents of `α` (for `α=√2`, the Pell
  denominators `q_j` with `‖q_jα‖ = (√2−1)^{j+1}`), giving an explicit piecewise
  description of `G(m)`.
- **Kronecker / Weyl equidistribution**: for irrational `α`, the sequence `({kα})_{k≥1}`
  is dense (indeed equidistributed) in `[0,1)`. Lets one realize any target phase as
  `{aα}` up to arbitrary precision for some integer `a`.

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
- **Hall's marriage theorem / SDR**: a bipartite graph with parts `X, Y` has a
  matching saturating `X` (equivalently, a system of distinct representatives for
  the family `{N(x)}_{x∈X}`) if and only if Hall's condition holds: for every
  subset `S ⊆ X`, `|N(S)| ≥ |S|`. Consequence: `|Y| ≥ |X|` when `X` is saturated.

## Geometry (synthetic & analytic)

- **Synthetic toolkit**: angle chasing, power of a point (and its concyclicity
  converse `PA·PB=PC·PD`), radical axes & radical center, similar triangles, trig
  cevians (Ceva/Menelaus), inversion, spiral similarity, projective ideas.
- **Circle/triangle configuration facts**: Ptolemy (`AC·BD=AB·CD+AD·BC`, with the
  `≤` inequality for any four points); Brahmagupta area; Simson line (feet from
  `P` collinear iff `P` on circumcircle); Miquel point of a complete quadrilateral;
  incircle/excircle tangency (equal tangents, touch-point reflection, homothety
  at a tangency point mapping incircle ↔ excircle).
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

## Monotone Subsequences: Erdős–Szekeres, Dilworth, Patience Sort

For a sequence `a = (a_1, …, a_n)` of distinct reals, attach to each index `p` the pair
`(I_p, D_p)`, where `I_p` = length of the longest strictly increasing subsequence ending
at `p`, and `D_p` = length of the longest strictly decreasing subsequence ending at `p`.

- **(C1) Injectivity (Dilworth/ES coordinates).** The map `p ↦ (I_p, D_p)` is injective.
  *Proof:* if `p < q`, then `a_p < a_q ⟹ I_q ≥ I_p + 1`, and `a_p > a_q ⟹ D_q ≥ D_p + 1`;
  either way `(I_p,D_p) ≠ (I_q,D_q)`. (Distinctness of values makes the dichotomy
  exhaustive.)
- **(C2) Extremes are the global lengths.** `max_p I_p = LIS(a)` (length of longest
  increasing subsequence) and `max_p D_p = LDS(a)`.
- **(ES) Erdős–Szekeres.** Any sequence of more than `rs` distinct reals contains an
  increasing subsequence of length `r+1` or a decreasing subsequence of length `s+1`.
  *Proof:* by (C1) the `> rs` pairs `(I_p,D_p)` are distinct; if `LIS ≤ r` and `LDS ≤ s`
  they would all lie in `{1..r}×{1..s}`, only `rs` cells — pigeonhole contradiction.
  In particular `n = k²+1 > k²` forces `LIS ≥ k+1` or `LDS ≥ k+1`.
- **Reading `LDS` as a layer count (patience sort).** Greedily partition `1..n` into
  "increasing runs": index `p` joins layer `D_p`. Each layer is a decreasing subsequence;
  the number of layers equals `LDS`. Dually for `LIS`.
- **Use.** To force `LIS = m` and `LDS ≤ s` simultaneously, design the sequence so all
  `(I_p,D_p)` lie in `{1..m}×{1..s}` with a unique index of `I = m` cell — controlling
  both monotone directions at once. This is the standard tool for "unique long monotone
  subsequence" constructions.

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
