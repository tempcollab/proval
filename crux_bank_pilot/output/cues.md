# Cue Layer (technique-first: technique -> its trigger -> common cues)

Method: each of the 240 cruxes is a concrete *technique* (the move that did the
work). For each one I read the statement + `how_used` and wrote its **cue** — the
structural precondition that should make a solver reach for that move, phrased as
a *condition you can see in the problem before the move*, never as the move. Then
I clustered cues that are the *same trigger* bottom-up, ignoring domain/question-
type labels. A cue is **COMMON** when it spans **>=2 distinct problems** (the
honest bar: many problems contributed 6-11 cruxes that are retries/sub-steps of
one move, so "≥2 techniques" alone over-counts).

## Summary

- **Techniques processed:** 240. **Distinct cues:** 87.
- **COMMON cues (span ≥2 distinct problems):** 23. They cover **125 / 240
  techniques = 52%**. (Under the looser "≥2 techniques, same problem allowed"
  bar there are 56 cues covering 209/240 = 87%, but 33 of those sit inside a
  single problem and are retries/chain-steps, so 52% is the trustworthy figure.)
- **Unique cues (1 technique):** 31. Another 33 cues recur *within one problem
  only*.
- **Largest cue cluster:** `MONGE_RADICAL` — 23 techniques across 7 problems.
- **Headline metric:** **52% of techniques fall under a cue shared by ≥2
  problems**, vs the technique-recurrence baseline of **6/195 ≈ 3%**. Deriving the
  trigger instead of the move raises cross-problem recurrence by **~17x**. So the
  cue, not the technique, is the unit that recurs.

| cue | #tech | #probs | domains | downstream moves differ? |
|---|---|---|---|---|
| MONGE_RADICAL (≥3 circles w/ pairwise tangency/shared pts; target is an incidence) | 23 | 7 | geo | partly — Monge / radical-center / coaxial / power-of-point, one family |
| STENCIL_INVARIANT (a move adds a *fixed* increment-pattern at fixed relative cells) | 10 | 3 | comb | no — weight/color to annihilate the stencil |
| FE_SUBST (2-var FE/ineq where plugging a var = f(·) or an iterate recombines) | 9 | 5 | alg, nt | no — substitute to fold into an iterate relation |
| REALIZE_TARGET (must exhibit an object hitting a prescribed value/multiset exactly) | 8 | 7 | all | **yes** — sign-pairs / poly-root / recursive split / param family |
| SPIRAL (2 circles' 2nd intersection, or 2 triangles sharing a vertex w/ ∝ sides) | 7 | 4 | geo | no — that point is the spiral-similarity center |
| DOUBLING_CONSTRUCT (extremal example needed ∀n, bound ~2^k / logarithmic) | 7 | 4 | comb | partly — ruler seq / dyadic blocks / geometric budgets |
| ARCMID (a point on a circle equidistant from two others / on a bisector chord) | 7 | 4 | geo | no — arc-midpoint ⇒ antiparallel/perp/circumcenter |
| FORALLN (a for-all-n relation built from a running sum / sliding product) | 5 | 5 | alg, nt | no — combine consecutive copies, cancel the shared block |
| AMGM ((Σx)(Σ1/x), fixed-sum product, or symmetric 2-term sum) | 5 | 5 | alg, nt | no — AM-GM / Cauchy-Schwarz |
| VALUATION (one side is a pure prime power; want the exponent) | 5 | 3 | nt | no — take v_p (LTE / Legendre) |
| PIGEONHOLE_FINITE (a quantity provably ranges over a finite state set) | 4 | 4 | comb, nt | no — pigeonhole forces a repeat |
| DIVIDE_OUT_COMMON (parts share a common factor / minimal value is divisible) | 4 | 4 | nt | no — divide it out for a smaller/equivalent instance |
| TANGENTCHORD (a line is tangent to a circle at a known point — given or wanted) | 4 | 3 | geo | no — tangent-chord angle / its converse |
| PARALLEL_HOMOTHETY (two figures with respectively parallel corresponding sides) | 4 | 2 | geo | no — homothety; find its center |
| GREEDY_CHARGE (build/forbid a selection greedily under a spacing/adjacency rule) | 4 | 2 | comb | no — charge each pick to a forced exclusion |
| DISTANCE_LOCUS (moving point: constant *difference/ratio* of distances to 2 fixed) | 3 | 3 | geo | partly — hyperbola / Apollonius / fixed line |
| MONOVARIANT_DROP (a bounded monotone count/potential on a process) | 3 | 2 | comb | no — it must change until target/halt |
| AA_SUPPLEMENT (a derived point on a side's extension turns an apex angle ↦ supplement) | 3 | 2 | geo | no — AA similarity via supplement |
| SQUEEZE_EQUALITY (a sum trapped between two coinciding bounds; or k·min=Σk≥min) | 2 | 2 | alg | no — force equality throughout |
| PHANTOM (a constructed intersection must be shown to have a positional property) | 2 | 2 | geo | no — define phantom point, prove it meets the defining condition |
| EXTREMAL_PERTURB (an optimizer of a weighted quantity; a 1-step variant is admissible) | 2 | 2 | alg, comb | no — read optimality inequality |
| CONVEXITY_BOUND (an inequality carries a convex/exponential term r^t) | 2 | 2 | alg | no — tangent-line bound / convexity lift |
| COFACTOR_DIFF (two divisibilities share a left factor) | 2 | 2 | nt | no — subtract to collapse to one tighter divisibility |

## Common cues (>=2 problems) — ordered by cluster size

### 1. MONGE_RADICAL — 23 techniques, 7 problems (geometry)
**Cue:** the configuration contains (or lets you construct) **three circles whose
pairs are linked by a tangency or two common points**, and the goal is an
*incidence* — three lines concurrent, three centers/points collinear, a fourth
side tangent, or four points concyclic.
- aimo-0567 [82]: read a segment-product equality at a line-crossing as the converse power-of-a-point ⇒ concyclic.
- aimo-0568 [85],[87]: recast concyclicity as a radical-axis incidence; turn parallels into an equal-power product pinning the radical axis.
- aimo-0571 [98]: a homothety carries one circle to another and its center lies on both ⇒ tangent.
- aimo-0572 [101],[102],[105],[107]: Monge/d'Alembert on circle-triples; merge two Monge lines by equal division ratios via r·r_a=(s-b)(s-c).
- aimo-0573 [109],[110],[112],[114],[115]: prove circles coaxial via two equal-power points; Brocard self-polar; Newton-Gauss midpoints; power-of-a-point at a midpoint.
- aimo-0574 [117],[118],[119],[120],[122],[123],[125]: tangential-quadrilateral via Monge, pinning a homothety center onto a vertex / a radical axis.
- aimo-0723 [211],[213],[215]: equal-power point ⇒ radical center; upgrade two equal-power points to a coaxial pencil; build a 2nd equal-power point.

*Same family of downstream moves* (Monge homothety-centers + radical axis/center +
coaxial + power-of-a-point). This is the prize for breadth but the **altitude is
slightly coarse** — see Takeaway.

### 2. STENCIL_INVARIANT — 10 techniques, 3 problems (combinatorics)
**Cue:** a move/operation **adds a fixed pattern of increments at a fixed set of
relative cell-positions** (a stencil — e.g. +1,−2,+1 on three consecutive sites,
or toggling a fixed triomino shape), the same everywhere on the board/cycle, and
you must decide reachability or extract a conserved quantity.
- aimo-0560 [35],[40]: periodic coloring (coord ≡0 mod 3) so every 3×3 window meets exactly 5 colored cells ⇒ defender caps the count.
- aimo-0561 [41],[43],[45],[47],[49]: weight site i by i so the +1,−2,+1 stencil sums to 0 ⇒ Σ i·c_i invariant mod n; re-used to rule out the bad terminal.
- aimo-0714 [170],[171],[174]: 3-color (i+j) mod 3 so each move hits one cell per class; weight by a cube root of unity ⇒ exact identity ⇒ 3|mn.

*Same move* (choose weights/colors annihilating the stencil). Cleanest recurring
cue in the bank.

### 3. FE_SUBST — 9 techniques, 5 problems (algebra / number theory)
**Cue:** a functional equation/inequality in **two free variables** where setting
one variable equal to **f of the other (or an iterate f^k)** makes terms
recombine, collapsing it to a relation among consecutive iterates of f.
- aimo-0552 [6],[8]: feed the diagonal/uniqueness candidate; substitute x=1/f(t) to manufacture a fresh good pair.
- aimo-0555 [17]: iterate the FE along the additive orbit of f(0).
- aimo-0557 [23]: plug an already-equal pair into the self-composed relation to propagate equality ⇒ periodicity.
- aimo-0710 [159],[160]: set x=f(y), then y↦f^{n-1}(y), turning the inequality into a chain on iterate-gaps.
- aimo-0730 [234],[235],[236]: substitute P(f(a)−1,b); equate two substitutions whose value is symmetric; close a 3-cycle to pin an arithmetic auxiliary.

*Same move.*

### 4. REALIZE_TARGET — 8 techniques, 7 problems (all domains)
**Cue:** the task forces you to **exhibit an explicit object that realizes a
prescribed target value or multiset exactly** (the construction half of a
find-all / largest-n / attainment problem), with a free additive/multiplicative
parameter available to tune.
- aimo-0551 [5]: pad a sum to a fixed summand-count with sign-symmetric zero-sum pairs.
- aimo-0554 [12]: place points as partial sums of powers of a tailored polynomial root so block-sums hit single powers.
- aimo-0564 [60]: assemble a one-coordinate "spike" tuple from generators spanning {1,index,index²}.
- aimo-0580 [140]: build a 5-set where every pairwise difference divides both endpoints.
- aimo-0713 [167],[168]: recursive split building a constant-column-sum arrangement of a self-similar multiset.
- aimo-0717 [183]: cut the strip into complementary-length blocks and transpose pairs.
- aimo-0729 [231]: a parametric family (ℓ,kℓ,kℓ,k²ℓ) realizing every non-squarefree total.

**Downstream moves diverge sharply** — the only thing shared is "you must build,
not bound." Borderline-coarse (see Takeaway).

### 5. SPIRAL — 7 techniques, 4 problems (geometry)
**Cue:** two circles meet at a **second point** (a Miquel point), **or** two
triangles **share a vertex with proportional/reflected sides** — signalling that
that point is the center of a spiral similarity mapping one chord/triangle to the
other.
- aimo-0567 [80],[84]: SSS congruence = a rotation about the shared vertex ⇒ apex-angle transfer.
- aimo-0569 [89]: midpoints are corresponding points under the similarity ⇒ a cevian angle transfers.
- aimo-0570 [91],[92]: the Miquel point is the spiral center sending BC↦YX; a 90° spiral ⇒ orthogonal circles.
- aimo-0722 [207],[208]: reflections = the foot-triangle dilated ×2 ⇒ same similarity type; spiral at the shared apex.

*Same move.*

### 6. DOUBLING_CONSTRUCT — 7 techniques, 4 problems (combinatorics)
**Cue:** you must construct an extremal example **for every n** whose size/count
is **~2^k or logarithmic (1+⌊log₂n⌋)**, or whose secured value must **survive
cumulative erosion** — pointing at a dyadic / doubling / geometric-budget design.
- aimo-0563 [55],[56],[58]: doubling ladder collapsing equal piles; reservoir trick leaving two piles.
- aimo-0715 [176]: ruler sequence a_i = 2^{k−v₂(i)}.
- aimo-0716 [179]: doubling-size blocks so a path meets ≤1 mark per block.
- aimo-0720 [193],[197]: geometrically sized vertex classes, color edge by the smaller class.

Downstream: same dyadic skeleton, different dressing.

### 7. ARCMID — 7 techniques, 4 problems (geometry)
**Cue:** a point **on a circle is equidistant from two others** (equal chords),
**or** an angle-bisector's second meeting with the circumcircle is taken — so the
point is an **arc-midpoint / circumcenter**, giving a perpendicular, an antiparallel
chord, or the central-equals-twice-inscribed test.
- aimo-0568 [86]: DA=DX ⇒ D is arc-midpoint ⇒ BX is the reflection of BA in BC.
- aimo-0570 [93]: a point equidistant from the right-angle vertex and one endpoint is the hypotenuse midpoint (circumcenter).
- aimo-0574 [116],[121],[124]: bisector ∩ Ω = arc-midpoint; equidistant arc-midpoints ⇒ antiparallel chord ⇒ concyclic.
- aimo-0723 [210],[214]: equidistant point certified as circumcenter via central = 2·inscribed.

*Same move.*

### 8. FORALLN — 5 techniques, 5 problems (algebra / number theory)
**Cue:** the problem gives, **for every index n**, a relation built from a
**running sum (Σ_{1..n}) or a sliding product/window** of the terms — so
consecutive instances share most of their content.
- aimo-0550 [2]: a shift-invariant strict inequality, re-applied at the next index, reverses ⇒ contradiction.
- aimo-0551 [4]: add the min and max bound-inequalities; the overlapping middle block cancels.
- aimo-0712 [164]: divide P(a_n)=∏ and P(a_{n+1})=∏; shared factors cancel to a 2-term comparison.
- aimo-0727 [225]: introduce b_k=2Σ/a_k, subtract consecutive copies to kill the sum ⇒ multiplicative recurrence.
- aimo-0731 [237]: the n+1 products differ in one factor; cancel the shared block ⇒ per-index relation.

*Same move* (cancel the shared part of two index-shifted copies). This is the
prompt's canonical example cue, and it does recur across 5 unrelated problems.

### 9. AMGM — 5 techniques, 5 problems (algebra / number theory)
**Cue:** a symmetric expression of the shape **(Σx)(Σ1/x)**, a **product with
fixed sum**, or a **symmetric two-term sum** whose product you control.
- aimo-0552 [7]: AM-GM on x f(y)+y f(x), regrouping the radicand into diagonal terms.
- aimo-0557 [24]: max product with fixed sum = split into parts of 3.
- aimo-0578 [134]: pair factors k,(n−k) and AM-GM each to p².
- aimo-0707 [153]: smallest-k average ≤ overall average ⇒ bound.
- aimo-0709 [157],[158]: expand (Σx)(Σ1/x) over old+new block; strict Cauchy-Schwarz gap.

*Same move.*

### 10. VALUATION — 5 techniques, 3 problems (number theory)
**Cue:** an equation sets one side equal to a **pure prime power** (or a
divisibility involving one), and you want the exponent.
- aimo-0578 [132],[133]: LTE pins v₂(p^{p−1}−1) in closed form; refute it by a Legendre lower bound.
- aimo-0725 [220]: v_p of 2a²=p^x(p^k−1), cofactor coprime to p.
- aimo-0726 [222],[223]: rewrite E₉,E₁₀ as v₃,v₅; take n=p^j so Legendre telescopes exactly.

*Same move.*

### 11. PIGEONHOLE_FINITE — 4 techniques, 4 problems (combinatorics / NT)
**Cue:** a quantity provably ranges over a **finite state set** (parity-vectors,
response "maps", residues, bounded prefix sums) and you collect/repeat more items
than there are states.
- aimo-0560 [36]: 126 possible maps; repeat a subboard ⇒ one map recurs.
- aimo-0564 [62]: ≥3 coordinates, 2 sign-patterns ⇒ two coordinates share a pattern.
- aimo-0580 [141]: 4 parity-vector classes ⇒ among any 5 integers two agree.
- aimo-0715 [178]: prefix sums confined to 2n integers ⇒ two coincide ⇒ zero window.

*Same move.*

### 12. DIVIDE_OUT_COMMON — 4 techniques, 4 problems (number theory)
**Cue:** the objects (a pair, a represented value, the differences in a sequence)
**share a common factor**, or the minimized/extremal value is divisible — so you
can divide it out for a smaller or equivalent instance (descent / coprime-WLOG).
- aimo-0580 [139]: a completely additive parity condition is invariant under dividing both args by d.
- aimo-0582 [149]: Fermat descent across a genus — a small prime dividing the minimal value yields a smaller one.
- aimo-0728 [230]: divide 3 out of every difference and shift the index ⇒ smaller kawaii instance.
- aimo-0731 [238]: divide out gcd(a_i,b_i) to shrink the minimized common difference.

*Same move.*

### 13. TANGENTCHORD — 4 techniques, 3 problems (geometry)
**Cue:** a **tangency of a line to a circle at a named point** is either given as
hypothesis or is the goal.
- aimo-0569 [88]: tangency ⇒ tangent-chord angle ⇒ similarity.
- aimo-0569 [90], aimo-0570 [95], aimo-0573 [111]: prove tangency by the **converse** (angle with a chord = inscribed angle).

*Same move.*

### 14. PARALLEL_HOMOTHETY — 4 techniques, 2 problems (geometry)
**Cue:** two figures have **respectively parallel corresponding sides** (or two
triangles share O and H) — forcing a homothety (or translation), whose center you
then locate.
- aimo-0571 [96],[97]: parallel-sided auxiliary triangles are homothetic; rule out translation by an angle chase.
- aimo-0573 [108],[113]: the centroid homothety of ratio −1/2 carries vertices to side-midpoints, H↦O.

### 15. GREEDY_CHARGE — 4 techniques, 2 problems (combinatorics)
**Cue:** you must build (or forbid) a selection under a **spacing/adjacency
constraint**, and each included element can be **charged to a forced exclusion**.
- aimo-0558 [26]: include every majority element; each minority pick forces a skip.
- aimo-0720 [194],[198],[201]: interleave a color's vertices with lower-indexed others to build a color-avoiding Hamiltonian path.

### 16. DISTANCE_LOCUS — 3 techniques, 3 problems (geometry)
**Cue:** a moving point keeps a **constant difference or ratio of distances to two
fixed points/lines**.
- aimo-0572 [99]: constant *difference* ⇒ hyperbola with those foci.
- aimo-0721 [204]: constant distance-*ratio* to two lines ⇒ a fixed line through their meet.
- aimo-0722 [209]: constant distance-*ratio* to two points ⇒ Apollonius circle.

Downstream loci differ (hyperbola / line / Apollonius) but the trigger is one.

### 17. MONOVARIANT_DROP — 3 techniques, 2 problems (combinatorics)
**Cue:** a process carries a **bounded, monotone counting quantity / convex
potential**; the target is exactly a small value of it.
- aimo-0559 [29],[32]: #monochromatic blocks is non-increasing; classify which move keeps it from dropping.
- aimo-0561 [46]: a strictly-increasing convex site-potential bounded by total mass ⇒ the restricted process halts.

### 18. AA_SUPPLEMENT — 3 techniques, 2 problems (geometry)
**Cue:** a derived point lies on the **extension of a side through a vertex**, so an
apex angle is replaced by its supplement to manufacture the second equal-angle pair.
- aimo-0567 [81],[83]: Q,S on extensions ⇒ ∠QTB=180−∠BTC; exterior-angle split closes the concyclicity.
- aimo-0721 [206]: equal apex + equal base-angle sum and difference ⇒ similar triangles.

### 19. SQUEEZE_EQUALITY — 2 techniques, 2 problems (algebra)
**Cue:** a quantity is **trapped between two bounds that coincide** (or k·min equals
a sum of k things each ≥min), forcing equality everywhere.
- aimo-0554 [16]: strictly-decreasing integer gaps squeezed between equal lower/upper totals pin every gap.
- aimo-0712 [166]: k·d = sum of k gaps each ≥d ⇒ all gaps equal d.

### 20. PHANTOM — 2 techniques, 2 problems (geometry)
**Cue:** a point is defined only as **an intersection**, and you must prove it has a
further positional property.
- aimo-0570 [94]: introduce Z′ with the desired parallelism, show it satisfies Z's concyclicity ⇒ coincide.
- aimo-0723 [212]: a coincidence would force a reflective symmetry the scalene hypothesis forbids.

### 21. EXTREMAL_PERTURB — 2 techniques, 2 problems (algebra / combinatorics)
**Cue:** an **optimizer of a weighted quantity** exists and a **one-step perturbed
candidate is still admissible**.
- aimo-0553 [9]: maximize 2^{b−a}x_a x_b; shifting an index gives geometric growth ceilings.
- aimo-0562 [53]: an f-maximizing set can't be a proper subset of a competitor ⇒ strict unique maximizer.

### 22. CONVEXITY_BOUND — 2 techniques, 2 problems (algebra)
**Cue:** an inequality carries a **convex / exponential term r^t** you want to
compare against a line.
- aimo-0553 [11]: 2^t ≤ 1+t (Bernoulli) linearizes the exponential contributions.
- aimo-0554 [13]: strict convexity of t↦r^t lifts an ordering of differences to the integer exponent gaps.

### 23. COFACTOR_DIFF — 2 techniques, 2 problems (number theory)
**Cue:** **two divisibility relations share a common left factor**.
- aimo-0578 [135]: the cofactor divides both sides ⇒ divides their small constant difference p.
- aimo-0724 [218]: subtract one divisibility from a multiple of the other ⇒ d_i | d_{i+1}².

## Unique cues (1 technique)

These triggers fired once. 31 of them; each is a genuine recognizable condition,
just not (yet) shared.

- aimo-0550 — FACTOR_SHIFT — a quadratic constraint becomes a product of linear factors after subtracting a constant.
- aimo-0550 — OVERBOUND — a factored inequality with one factor's sign pinned; replace it to collapse onto a neighbor.
- aimo-0551 — EXTREME_SUMK — an extreme element must equal a sum of k others; bound it by the k cheapest/dearest.
- aimo-0553 — DYADIC_TAIL — an anchoring extreme value bucketed dyadically; one-sided geometric tails sum below the bucket scale.
- aimo-0554 — RATIO_COUNTING — fewer "atomic" differences than prescribed target values ⇒ some target is a non-atomic difference ⇒ ratio bound.
- aimo-0554 — SPLIT_PIGEON — distinct large halves across the many two-term splittings of the max element are forced to be the top values.
- aimo-0556 — DIGIT_CONTROL (group with [21],[22]) — control a digit-sum by spacing monomials / engineering one carry.
- aimo-0557 — SCALING_AMPLIFY — a quantity has a multiplicative scaling identity g(kx,kd)=g(x,d)^k; amplify to a single rescaled instance.
- aimo-0562 — INJECT_LOWERBOUND — lower-bound a count by injecting an explicitly-sized base family via a small perturbation.
- aimo-0564 — GEN_INVARIANT — a generation process closed under add and coordinatewise-max; find a relation preserved by both.
- aimo-0566 — LATTICE_LINEARFORM / MIXED_SECOND_DIFF / PARITY_2x2 / LATTICE_EXTREME_CONSTRUCT — a translation-invariant order on the lattice ⇒ rank by x+αy; constant mixed second difference ⇒ parity per unit square.
- aimo-0572 — TRITANGENT_RECON — reconstruct a given fixed circle as an in/excircle of an auxiliary triangle so a fixed point surfaces as a homothety center.
- aimo-0576 — AP_RESIDUES — three integers in AP with common difference 2 cover all residues mod 3.
- aimo-0577 — ORBIT_BOUND (group with [130],[131]) — an add-step-or-divide map with gcd(step,divisor)=1; one of every (divisor)-many iterates is divisible.
- aimo-0581 — VIETA_SYM / ROOTCOUNT / PEEL_EXTREMAL — adjacency = a quadratic congruence (≤2 roots); Vieta makes a derived adjacency satisfy the same symmetric relation; peel the largest element to induct.
- aimo-0582 — QUADFORM_THUE — a modulus divides a difference of like odd powers ⇒ it represents a binary quadratic form (Thue's lemma).
- aimo-0707 — ROUNDING_HALFINT — force entries to half-integers so any integer assignment is ≥1/2 off.
- aimo-0709 — WINDOW_INCREMENT / INTEGER_ROUNDUP — reduce a global bound to a fixed per-window increment; a strict real gap rounds up by integrality.
- aimo-0710 — ARCHIMEDEAN — a sum of m nonneg constants stays below a count-independent total ⇒ the constant is 0.
- aimo-0711 — POTENTIAL_DEVIATION — score each value by its distance from the median; bound path edges by endpoint potentials.
- aimo-0712 — MATCH_COEFF — match the subleading coefficient of a sliding product against the polynomial.
- aimo-0715 — UNIQUE_EXTREME_BLOCK — any block of consecutive integers has a unique element of maximal 2-adic valuation.
- aimo-0719 — PACKING_BIJECTION / LASER_INVARIANT / PATH_SPLICE — encode paths as parallelogram packings; trace reflecting lasers; grow a monotone path by splicing.
- aimo-0724 — COMPLEMENT_INVOLUTION / SMALLDIV_PRIMEPOWER — reflect a divisor relation through d↔n/d; the smallest divisors are powers of the least prime.
- aimo-0725 — PRIMEPOWER_FACTOR / GROWTH_SQUEEZE — a prime power as a product of two factors ⇒ each is a prime power; bound an exponential-vs-polynomial equation to finite cases.
- aimo-0726 — RESIDUE_TIEBREAK — leading orders agree, so tilt a floor correction via n's residue mod the other prime.
- aimo-0727 — FINITENESS_CONTRA / FIRST_INDEX_REACH — boundedness of an auxiliary ⇒ finite prime set, contradiction; first index reaching n forces the predecessor n−1.
- aimo-0728 — DIFFERENCE_REPARAM / RESIDUE_TRAPPED — reparametrize by consecutive differences; rewrite each branch so residues mod 3 can't leave the start set.
- aimo-0729 — SUMSPLIT_DIVIS — N = sum of two terms, prime|N ⇒ divides both; squarefree N | X with X<N is a contradiction.
- aimo-0713 — EXTEND_CONSTRUCTION — extend a construction from a convenient size to all N via a √-difference perturbation bound.
- aimo-0731 — LOWEST_TERMS_MATCH — equate two lowest-terms fractions and match numerators/denominators.

(Plus ~33 cues that recur *within a single problem only* — e.g. LONGPASS [aimo-0561, 5×],
DAG_PATHCOUNT and EQUALITY_STRUCTURE [aimo-0565], EXCHANGE_LEMMA and
NORMALIZE_MONOVARIANT [aimo-0720], MAJORISATION [aimo-0718], LATTICE_* [aimo-0566].
These are chain-steps / retries of one move, not cross-problem recurrence.)

## Takeaway

Working **technique-first** and deriving each move's *trigger* makes the unit
recur far more than the move did: **52% of the 240 techniques fall under a cue
shared by ≥2 problems, vs ~3% technique-recurrence (6/195)** — about a 17x lift,
so the cue is clearly the better recurring unit. The honest cross-domain
**bottom-up** wins are the ones where a structural precondition, not a topic,
fires the move: `FORALLN` (a running-sum/sliding-product relation ⇒ cancel two
consecutive copies) recurs across 5 unrelated algebra+NT problems with the *same*
downstream move; `STENCIL_INVARIANT`, `FE_SUBST`, `PIGEONHOLE_FINITE`,
`DIVIDE_OUT_COMMON`, `AMGM`, `VALUATION`, `DISTANCE_LOCUS`, `SPIRAL`,
`TANGENTCHORD` are equally crisp — a single recognizable feature, a single move.

Where commonality is **weak or coarse**, I want to be explicit. `MONGE_RADICAL`
(23 techniques, the biggest cluster) is partly a *topic* in disguise — "three
circles + an incidence target ⇒ Monge/radical machinery" is real, but at an
altitude broad enough that it behaves like a domain bucket; a sharper sub-cue
would be e.g. "two circles are *internally tangent at H*, and you need a third
homothety center on a known line." `REALIZE_TARGET` (8 techniques, 7 problems) is
the clearest **too-generic** case: its members' downstream moves (sign-canceling
pairs vs partial sums of a polynomial root vs recursive column-sum splits) have
nothing in common, so it is closer to the forbidden question-type bucket
("exhibit the extremal example") than to a genuine trigger, and should be split
by *what structure is free to tune*. In the other direction, the 31 unique cues +
33 within-problem cues show the **long tail is still real**: nearly half the
techniques have a trigger that fired once, and several (e.g. `DIGIT_CONTROL`,
`ORBIT_BOUND`, the lattice-rank cluster) are sharp but idiosyncratic. Net: cues
recur strongly and beat techniques decisively, but the recurrence is concentrated
in ~10 crisp cross-problem triggers, with a couple of big clusters riding at an
altitude that needs lowering before they earn their size.
