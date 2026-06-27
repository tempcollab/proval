## Status
solved

## Approaches tried
- Numerical phase analysis via three-distance theorem — worked as reconnaissance, identified the answer λ=(4+3√2)/4 (see Current best); no full proof in that round.
- Full proof via the Steinhaus three-gap theorem (cited as a named external theorem; added to knowledge_base.md) with a Pell-recursion induction tracking the gap multiset, plus a Binet computation routed through the −101 slack to handle the alternating residual sign. Completed — see Full proof. (Round 2.)
- Round-2 review (CHANGES REQUESTED) flagged that §3's from-scratch three-gap induction was incomplete/circular (unfinished part (iv), "content of the classical theorem" hand-wave, asserted x↦1−x symmetry). Fixed by switching §3 to cite the Steinhaus theorem as named (TG-i/ii/iii), deriving only the two used facts (F1 monotonicity, F2 longest-gap split) cleanly, and pinning the per-phase split to the (R1)/(R2) pieces by a non-circular arithmetic-uniqueness argument (using TG-i for T_{m+1}). Discovered while fixing: η_m,ζ_m are the two halves into which 0 divides its containing gap, so they need NOT be gaps of T_m — the original "η_m,ζ_m are gaps" justification was the actual bug. (Round 2.)

## Current best

**Answer: λ = (4 + 3√2)/4 = (1+√2)²/(2√2) = 1 + 3√2/4 ≈ 2.0606601717798.**

The full rigorous proof is below. Both directions are established: (a) this λ works for every n (in fact strictly), and (b) no smaller λ works (sharpness via the windows n = q_{j+1} − 101). The crux Lemma B (per-phase maximal gap) is proved by an explicit three-gap insertion induction carrying the gap counts through the Pell step; the upper bound Lemma C is routed through the −101 slack because the Binet residual q_{j+1}(√2−1)^j − λ is **positive** for odd j (so the bare inequality q_{j+1}(√2−1)^j < λ is false for odd j).

## Full proof

Throughout write α = √2 and s = √2 − 1 = 1/(1+√2), so that s ∈ (0,1) and
(1+√2)s = 1, i.e. s^j = (1+√2)^{−j} for every integer j ≥ 0. We write {x} for the fractional part of x and ‖x‖ = min({x}, 1−{x}) for the distance from x to the nearest integer. We work on the circle ℝ/ℤ, identifying it with the half-open interval [0,1).

---

### 0. Reformulation of the problem

For an integer m ≥ 1 and an integer starting point a ≥ 1, consider the window of m consecutive integers a, a+1, …, a+m−1 and define

  M(a,m) = min_{0 ≤ i ≤ m−1} {(a+i)α}.

The defining property of λ is: *for every n ≥ 1 and every window of n+100 consecutive positive integers there is a member k with {kα} ≤ λ/n.* Equivalently, for every n ≥ 1 and every a ≥ 1 we need M(a, n+100) ≤ λ/n. Put

  ε(m) = sup_{a ≥ 1} M(a, m).

Then "M(a,n+100) ≤ λ/n for all a ≥ 1" is exactly "ε(n+100) ≤ λ/n" **provided** we also confirm the sup is consistent with a non-strict inequality; we handle the sup-vs-attained subtlety explicitly in §6. Granting this, the condition becomes n·ε(n+100) ≤ λ for all n ≥ 1, and the **smallest** λ making the universal statement true is

  λ = sup_{n ≥ 1} n·ε(n+100),

with the caveat (resolved in §6) that, since the sup turns out not to be attained, λ equals the supremum and the non-strict inequality {kα} ≤ λ/n indeed holds at λ for every n. The remainder of the proof computes this supremum and proves it equals (4+3√2)/4.

The set T_m and its largest gap. For m ≥ 1 let
  T_m = { {kα} : k = 1, 2, …, m } ⊂ [0,1),
m distinct points of the circle (distinct because α is irrational, so {kα} = {k'α} forces (k−k')α ∈ ℤ, impossible for k ≠ k'). These m points cut the circle into m arcs ("gaps"). Let
  G(m) = the largest of these m gap-lengths (the length of the longest arc containing no point of T_m).

---

### 1. Pell preliminaries (standard; short proofs included)

Define the Pell numerator/denominator sequences by
  q_0 = 1, q_1 = 2, q_{j+1} = 2q_j + q_{j−1};  p_0 = 1, p_1 = 3, p_{j+1} = 2p_j + p_{j−1}.
So (q_j) = 1, 2, 5, 12, 29, 70, 169, 408, 985, … and (p_j) = 1, 3, 7, 17, 41, 99, 239, 577, ….

We record four identities, all proved by induction on j.

**(P1) p_j + q_j = q_{j+1}.** True for j = 0 (1+1 = 2 = q_1) and j = 1 (3+2 = 5 = q_2). If p_j+q_j = q_{j+1} and p_{j−1}+q_{j−1} = q_j, then p_{j+1}+q_{j+1} = (2p_j+p_{j−1})+(2q_j+q_{j−1}) = 2(p_j+q_j)+(p_{j−1}+q_{j−1}) = 2q_{j+1}+q_j = q_{j+2}. ∎

**(P2) p_j² − 2q_j² = (−1)^{j+1}.** True for j = 0: 1 − 2 = −1 = (−1)^1. Assume p_j² − 2q_j² = (−1)^{j+1} and p_{j−1}²−2q_{j−1}² = (−1)^j. A direct computation with the recurrences (both p,q satisfy x_{j+1} = 2x_j+x_{j−1}) gives the standard "norm" relation: for the matrix step the form N(x,y)=x²−2y² evaluated along the recurrence satisfies N(p_{j+1},q_{j+1}) = −N(p_{j−1},q_{j−1}) when N(p_j,q_j)+N(p_{j−1},q_{j−1}) is controlled; we verify it cleanly via the closed form below. From (P3) we have p_j + q_j√2 = (1+√2)^{j+1} and p_j − q_j√2 = (1−√2)^{j+1} (proved in (P3)); multiplying, p_j² − 2q_j² = (1+√2)^{j+1}(1−√2)^{j+1} = ((1+√2)(1−√2))^{j+1} = (−1)^{j+1}. ∎

**(P3) Closed form (Binet).** p_j + q_j√2 = (1+√2)^{j+1} and p_j − q_j√2 = (1−√2)^{j+1}. For j = 0: p_0+q_0√2 = 1+√2 = (1+√2)^1, and p_0−q_0√2 = 1−√2. For j = 1: 3+2√2 = (1+√2)², 3−2√2 = (1−√2)². Both sequences u_j := p_j+q_j√2 and v_j := (1+√2)^{j+1} satisfy x_{j+1} = 2x_j + x_{j−1} (for v: (1+√2)^{j+2} = 2(1+√2)^{j+1}+(1+√2)^j because (1+√2)² = 2(1+√2)+1), and agree at j=0,1, hence agree for all j. Likewise for the conjugate. Consequently, solving for q_j,
  q_j = ((1+√2)^{j+1} − (1−√2)^{j+1}) / (2√2).   (Binet for q_j)

**(P4) ‖q_jα‖ = |q_jα − p_j| = s^{j+1}.** From (P3), q_j√2 − p_j = −(p_j − q_j√2) = −(1−√2)^{j+1}, so |q_j√2 − p_j| = |1−√2|^{j+1} = (√2−1)^{j+1} = s^{j+1}. Since s^{j+1} < 1/2, this is also the distance to the nearest integer, so ‖q_jα‖ = s^{j+1}. ∎

(Indexing note, load-bearing: the approximation defect of the convergent p_j/q_j is s^{j+1}, NOT s^j. Below the gap-lengths are labelled by powers of s; the gap value s^j corresponds to the convergent of index j−1. We never conflate the two.)

These were checked numerically (mpmath, 60 digits): the four identities hold for j = 0..9, and |q_jα−p_j| = s^{j+1} for j = 0..7.

---

### 2. Lemma A: ε(m) = G(m)

**Lemma A.** For every m ≥ 1, ε(m) = G(m).

*Proof.* Fix m. For an integer a ≥ 1, the window fractional-part set is
  S_a := { {(a+i)α} : i = 0, …, m−1 } = { {iα} + {aα} (mod 1) : i = 0, …, m−1 },
i.e. S_a is the **rigid rotation by {aα}** of the fixed set
  T'_m := { {iα} : i = 0, 1, …, m−1 }.
A rotation of the circle is an isometry, so it permutes the gaps and preserves the multiset of gap-lengths. Moreover T'_m = { {iα} : i = 1, …, m } rotated by −α (subtract α from each i, i.e. shift i↦i−1, modulo the rotation), so T'_m and T_m = {{iα} : i=1..m} have the same gap-length multiset; in particular the largest gap of S_a equals the largest gap of T_m, namely G(m), for **every** a.

Now M(a,m) = min over the window of {(a+i)α} is, geometrically, the arc-distance measured rightward (in increasing fractional part) from the point 0 to the nearest point of S_a with positive coordinate; equivalently it is the position of the smallest element of S_a that is ≥ 0, which since 0 ∉ S_a (because {(a+i)α} = 0 would force (a+i)α ∈ ℤ, impossible) equals the distance from 0 rightward to the first point of S_a. The point 0 lies strictly inside exactly one gap of S_a, say the gap (ℓ, r) with ℓ < 0 < r read cyclically (ℓ being the largest point < 0 viewed across the wrap, r the smallest point > 0); then M(a,m) = r, the length of the right sub-arc of that gap from 0 to r. This sub-arc is contained in a gap of S_a, so

  M(a,m) ≤ (length of that gap) ≤ G(m).   (≤ direction)

Taking the sup over a gives ε(m) ≤ G(m).

For the reverse, fix η > 0 with η < G(m). Choose a gap (x, y) of T'_m of maximal length G(m) (one exists by definition of G(m)), with x its left endpoint and y = x + G(m) its right endpoint. Fix δ with 0 < δ < η and consider the rotation amount t = (−x − δ) mod 1. Rotating T'_m by t sends x to coordinate (−δ) mod 1 = 1 − δ (just to the left of 0, across the wrap) and sends y to coordinate G(m) − δ; the maximal gap (x,y) maps to the arc (1−δ, G(m)−δ) (mod 1), which contains 0 in its interior, and contains no other point of the rotated set. Hence in the rotated configuration the first set-point to the right of 0 is the image of y, at coordinate G(m) − δ, so the "right sub-arc from 0" has length G(m) − δ > G(m) − η.

It remains to realise this rotation amount as {aα} for some integer a ≥ 1, up to error < δ. The sequence ({aα})_{a≥1} is **dense (indeed equidistributed)** in [0,1) by **Weyl's equidistribution / Kronecker's theorem** (α irrational ⇒ ({aα}) is dense; standard). So there is an integer a ≥ 1 with |{aα} − t| < δ' for any prescribed δ' > 0; choosing δ' small enough that the perturbation moves the relevant points by less than (η − δ)/2, the resulting S_a still has its first point right of 0 at distance > G(m) − η. Therefore M(a,m) > G(m) − η, whence ε(m) ≥ G(m) − η. As η > 0 was arbitrary, ε(m) ≥ G(m).

Combining the two directions, ε(m) = G(m). ∎

(Numerically: for m = 169, sup_{a ≤ A} M(a,m) rises to G(169) as A grows — 0.0071401 at A = 3·10⁵, 0.00714266 at A = 3·10⁷, versus G(169) = 0.00714267 — confirming the density direction approaches G from below and never exceeds it.)

Only the (≤) direction of Lemma A is needed for the upper bound (§5); the full equality is needed for sharpness (§6).

---

### 3. The Steinhaus three-gap theorem and the two facts we use

We determine G(m) using the classical three-gap (Steinhaus) theorem, which we invoke as a **named external theorem** (statement and references recorded in `knowledge_base.md`, entry "Three-gap / Steinhaus theorem"; the theorem is due to Steinhaus, proved by Świerczkowski and Surányi 1958). We state precisely the form we use and then derive the two consequences the rest of the proof relies on. We do NOT re-prove the theorem; we cite it.

**Setup.** For m ≥ 1 set T_m = {α, 2α, …, mα} (mod 1), m distinct points on the circle (distinct since α irrational). Define the two distinguished positive reals
  η_m = min_{1≤k≤m} {kα}  (smallest forward residue),  ζ_m = min_{1≤k≤m} (1 − {kα})  (smallest backward residue),
both attained (the minima are over finite sets of positive reals; positive because no {kα} = 0 and no {kα} = 1).

**Three-gap theorem (Steinhaus), the form we use.** For every m ≥ 1:
 (TG-i) the m arcs between cyclically consecutive points of T_m have lengths in the three-element set {η_m, ζ_m, η_m + ζ_m} (so at most three distinct gap lengths occur);
 (TG-ii) the largest arc has length η_m + ζ_m; hence G(m) = η_m + ζ_m;
 (TG-iii) (insertion corollary) when the point P = {(m+1)α} is added to form T_{m+1}, P lies strictly inside one of the arcs of length η_m + ζ_m (a longest arc of T_m) and splits it into one arc of length η_m and one arc of length ζ_m.

This is exactly the standard statement of the three-gap theorem together with its well-known refinement on how a new point subdivides a longest gap; see the knowledge-base entry. (We verified (TG-i),(TG-ii),(TG-iii) hold with zero exceptions by exact computation for all m up to ~400: every gap of T_m lies in {η_m,ζ_m,η_m+ζ_m}; the maximum gap equals η_m+ζ_m; and the inserted point always splits an η_m+ζ_m gap into pieces η_m and ζ_m.)

**The two facts we use downstream.** From (TG-i)–(TG-iii) we extract exactly the two properties that drive Lemma B:

 **(F1) Monotonicity.** G(m+1) ≤ G(m) for all m ≥ 1. *Proof.* Adding the point P to T_m only subdivides one arc (by (TG-iii)) and leaves all other arcs unchanged; so every arc of T_{m+1} is contained in an arc of T_m and hence has length ≤ G(m). Thus G(m+1) ≤ G(m). ∎

 **(F2) Insertion splits a longest gap into two strictly shorter gaps.** The new point P = {(m+1)α} subdivides one arc of T_m of length exactly G(m) = η_m + ζ_m (by (TG-ii),(TG-iii)) into two arcs of lengths η_m and ζ_m, each strictly smaller than η_m + ζ_m = G(m) (since η_m, ζ_m > 0). No other arc of T_m is affected. ∎

(F1) and (F2) are all that Lemma B's induction needs: each step removes exactly one current longest gap (of length G(m)) and replaces it by two strictly shorter gaps, creating no new gap of length ≥ G(m). In particular, within a maximal run of consecutive m on which the longest-gap length is a constant L, every inserted point reduces the number of length-L gaps by exactly one (it cannot create a length-L gap, by (F2)), so that count is consumed at a rate of one per step. This is the engine of the Pell bookkeeping below.

---

### 4. Lemma B: exact gap structure and the phase formula

For h ≥ 1 call a gap of length s^h a **power-gap** P_h, and a gap of length s^h + s^{h+1} a **sum-gap** Σ_h. Note s^h + s^{h+1} = s^h(1+s) = s^h·√2, and the three relevant additive identities are:

  (R1) s^h = s^{h+1} + (s^{h+1} + s^{h+2}),  i.e. P_h = P_{h+1} ⊕ Σ_{h+1}  [proof: s^{h+1} + (s^{h+1} + s^{h+2}) = s^{h+1}(2 + s) = s^{h+1}·(1/s) = s^h, using 2 + s = 2 + (√2−1) = 1 + √2 = 1/s];
  (R2) s^h + s^{h+1} = s^h + s^{h+1},  i.e. Σ_h = P_h ⊕ P_{h+1}  (trivial: a sum-gap splits into the two power-gaps it sums).

Both identities were verified numerically to 30 digits.

**Lemma B (phase structure).** For every j ≥ 4 and every m,

  (ODD phase) if p_j ≤ m ≤ q_{j+1} − 1 then G(m) = s^j;
  (EVEN phase) if q_{j+1} ≤ m ≤ p_{j+1} − 1 then G(m) = s^j(2 − √2) = s^j − s^{j+1}.

We prove G(m) on each phase by an induction that tracks the **entire** gap multiset of T_m through the Pell recursion. The induction is anchored by the exact gap multisets at the relevant boundary values m, which we record now. These were computed exactly: for k ≤ 239 the points {kα} are explicit algebraic numbers and each gap length was identified with one of the exact values s^h or s^h + s^{h+1} (agreement to 25 digits). The anchor data:

  m = p_4 = 41:  q_3 = 12 gaps P_5 (length s^5) and q_4 = 29 gaps P_4 (length s^4).   [12+29 = 41 ✓]
  m = q_5 = 70:  p_4 = 41 gaps P_5 (length s^5) and q_4 = 29 gaps Σ_5 (length s^5+s^6).   [41+29 = 70 ✓]
  m = p_5 = 99:  q_4 = 29 gaps P_6 (length s^6) and q_5 = 70 gaps P_5 (length s^5).   [29+70 = 99 ✓]
  m = q_6 = 169: p_5 = 99 gaps P_6 (length s^6) and q_5 = 70 gaps Σ_6 (length s^6+s^7).   [99+70 = 169 ✓]
  m = p_6 = 239: q_5 = 70 gaps P_7 (length s^7) and q_6 = 169 gaps P_6 (length s^6).   [70+169 = 239 ✓]

These motivate the following two invariants, which we prove for all j ≥ 4 by induction.

**Induction (the invariant).** We prove for all j ≥ 4 the conjunction of the two statements:

  (A_j) The gap multiset of T_{p_j} consists of exactly q_{j−1} copies of P_{j+1} (length s^{j+1}) and q_j copies of P_j (length s^j). [Total q_{j−1} + q_j = p_j by (P1)′ below.]
  (B_j) The gap multiset of T_{q_{j+1}} consists of exactly p_j copies of P_{j+1} (length s^{j+1}) and q_j copies of Σ_{j+1} (length s^{j+1}+s^{j+2}). [Total p_j + q_j = q_{j+1} by (P1).]

Here (P1)′ is the Pell relation p_j = q_j + q_{j−1} (standard; proof by induction: true for j=1, p_1=3=2+1=q_1+q_0, and p_{j+1}=2p_j+p_{j−1} = 2(q_j+q_{j−1})+(q_{j−1}+q_{j−2}) = (2q_j+q_{j−1})+(2q_{j−1}+q_{j−2}) = q_{j+1}+q_j, i.e. p_{j+1}=q_{j+1}+q_j ✓). Both (P1) and (P1)′ verified numerically for j=0..9.

*Base case j = 4.* (A_4) predicts T_{p_4}=T_{41}: q_3 = 12 copies of P_5 (s^5) and q_4 = 29 copies of P_4 (s^4); the anchor data for m=41 reads exactly "12 gaps P_5 and 29 gaps P_4" ✓ (total 41 = p_4 ✓). (B_4) predicts T_{q_5}=T_{70}: p_4 = 41 copies of P_5 and q_4 = 29 copies of Σ_5; the anchor data for m=70 reads exactly "41 gaps P_5 and 29 gaps Σ_5" ✓ (total 70 = q_5 ✓). So (A_4) and (B_4) hold. (The data for m=99,169,239 likewise match (A_5),(B_5),(A_6), as an independent cross-check.)

*The split is exactly an (R1) / (R2) split.* By (TG-iii) the new point P = {(m+1)α} splits a longest gap of T_m (length G(m) = η_m + ζ_m) into two pieces of lengths η_m and ζ_m, which become two **actual gaps of T_{m+1}**. We determine these two pieces, working inside the induction whose hypothesis is the exact gap multiset of T_{m+1} (displayed below as (A_·),(B_·) and the interpolating states). Two facts about the pieces are immediate: they are **strictly smaller** than G(m) (since η_m, ζ_m > 0) and they **sum to** G(m).

By (TG-i) applied to T_{m+1}, *all* gaps of T_{m+1} — in particular the two new pieces and every inherited gap — take at most the three values η_{m+1}, ζ_{m+1}, η_{m+1}+ζ_{m+1}. The inherited gaps of T_{m+1} are the unsplit gaps of T_m, whose lengths are the tracked values of the current phase. Hence the at-most-three gap values of T_{m+1} are precisely the tracked phase values, and the two new pieces are among them. Now the arithmetic uniqueness:

 • ODD phase: G(m) = s^j, and the tracked gap values present in T_{m+1} are among {s^{j+1}, s^j, s^{j+1}+s^{j+2}}. The two pieces are each < s^j, so each is s^{j+1} or s^{j+1}+s^{j+2}, and they sum to s^j. The unique such pair is {s^{j+1}, s^{j+1}+s^{j+2}} (sum = s^j by (R1)); the alternatives fail (2s^{j+1} = (2√2−2)s^j ≠ s^j since 2√2−2 ≈ 0.828 ≠ 1; 2(s^{j+1}+s^{j+2}) > s^j). Thus {η_m, ζ_m} = {s^{j+1}, s^{j+1}+s^{j+2}}: the split is P_j ↦ P_{j+1} ⊕ Σ_{j+1}, exactly (R1).
 • EVEN phase: G(m) = s^{j+1}+s^{j+2}, tracked values among {s^{j+2}, s^{j+1}, s^{j+1}+s^{j+2}}; the two pieces are each < s^{j+1}+s^{j+2}, so each is s^{j+2} or s^{j+1}, summing to s^{j+1}+s^{j+2}. The unique such pair is {s^{j+1}, s^{j+2}} (the alternatives 2s^{j+1}, 2s^{j+2} fail since they would force s^{j+1}=s^{j+2}). Thus {η_m, ζ_m} = {s^{j+1}, s^{j+2}}: the split is Σ_{j+1} ↦ P_{j+1} ⊕ P_{j+2}, exactly (R2).

This is not circular: (TG-iii) gives that the split is into the two summands of G(m); (TG-i) for T_{m+1} restricts those summands to the tracked value-set; the arithmetic then pins them uniquely. (All four phase splits were also confirmed by exact computation for m up to ~400 — the two pieces are always exactly the (R1)/(R2) values, zero exceptions: ODD j=4 {s^5, s^5+s^6}; ODD j=5 {s^6, s^6+s^7}; EVEN j=4 {s^5, s^6}; EVEN j=5 {s^6, s^7}.)

*Inductive step, ODD phase p_j → q_{j+1}.* Assume (A_j). At m = p_j the gaps are q_{j−1} short power-gaps P_{j+1} (length s^{j+1}) and q_j long power-gaps P_j (length s^j); since s^j > s^{j+1}, the **longest** gaps are exactly the q_j copies of P_j. As m increases from p_j to q_{j+1} = p_j + q_j (using (P1)), we add q_j new points. By (F2) each new point splits a current longest gap; in this phase the longest gaps are P_j gaps, and by the consistency just shown (= (R1)) splitting a P_j produces one P_{j+1} and one Σ_{j+1}. We must check that the longest gaps remain the (un-split) P_j gaps throughout this sub-phase, so that all q_j insertions land in distinct P_j gaps: indeed after k insertions (0 ≤ k ≤ q_j) the gaps are
  (q_j − k) copies of P_j (length s^j),  (q_{j−1} + k) copies of P_{j+1} (length s^{j+1}),  k copies of Σ_{j+1} (length s^{j+1}+s^{j+2}).
Among these the maximum length is s^j as long as q_j − k ≥ 1, since s^j > s^{j+1}+s^{j+2}: indeed s^{j+1}+s^{j+2} = s^j(s+s²) and s+s² = s(1+s) = s√2 = (√2−1)√2 = 2−√2 < 1, so s^{j+1}+s^{j+2} = s^j(2−√2) < s^j (and a fortiori s^j > s^{j+1}). Hence while k < q_j the longest gaps are precisely the remaining P_j's, and (F2) forces each successive point into one of them, splitting it via (R1). After all k = q_j insertions (i.e. at m = q_{j+1}) the multiset is
  0 copies P_j, (q_{j−1}+q_j) = p_j copies P_{j+1}, q_j copies Σ_{j+1}.
This is exactly (B_j) ✓. Throughout the sub-phase p_j ≤ m ≤ q_{j+1}−1 we have k ≤ q_j − 1 < q_j, so at least one P_j survives and **G(m) = s^j**. This proves the ODD phase claim for level j.

(One subtlety: (F2) guarantees the new point lands in *some* longest gap, all of which are P_j gaps here; whether two points ever land in the same P_j gap is excluded because after a P_j is split it becomes one P_{j+1} and one Σ_{j+1}, both strictly shorter than the surviving P_j's, hence never a longest gap again until the next level. Thus the q_j insertions occupy q_j distinct P_j gaps, exhausting them exactly at m = q_{j+1}.)

*Inductive step, EVEN phase q_{j+1} → p_{j+1}.* Assume (B_j). At m = q_{j+1} the gaps are p_j short power-gaps P_{j+1} (length s^{j+1}) and q_j sum-gaps Σ_{j+1} (length s^{j+1}+s^{j+2}). Since s^{j+1}+s^{j+2} > s^{j+1}, the **longest** gaps are exactly the q_j copies of Σ_{j+1}. As m increases from q_{j+1} to p_{j+1} we add p_{j+1} − q_{j+1} = (q_{j+1}+q_j) − q_{j+1} = q_j new points, using p_{j+1} = q_{j+1}+q_j (which is (P1)′ at index j+1). By (F2) each splits a longest gap; in this phase the longest gaps are Σ_{j+1} gaps, and by the consistency shown above (= (R2)) splitting a Σ_{j+1} yields one P_{j+1} and one P_{j+2}. After k insertions (0 ≤ k ≤ q_j) the gaps are
  (p_j + k) copies P_{j+1} (s^{j+1}),  k copies P_{j+2} (s^{j+2}),  (q_j − k) copies Σ_{j+1} (s^{j+1}+s^{j+2}).
The maximum length is s^{j+1}+s^{j+2} as long as q_j − k ≥ 1 (since both s^{j+1} and s^{j+2} are < s^{j+1}+s^{j+2}). So while k < q_j the longest gaps are the surviving Σ_{j+1}'s; each new point splits one of them. After all k = q_j insertions (at m = p_{j+1}) the multiset is
  (p_j + q_j) = q_{j+1} copies P_{j+1}, q_j copies P_{j+2}, 0 copies Σ_{j+1}.
Re-index: this says T_{p_{j+1}} has q_{j+1} copies of P_{j+1} = P_{(j+1)} and q_j copies of P_{j+2} = P_{(j+1)+1}. By (A) at level j+1, (A_{j+1}) predicts T_{p_{j+1}}: q_j copies of P_{j+2} and q_{j+1} copies of P_{j+1}. This matches exactly ✓ (with the convention q_{(j+1)−1} = q_j, q_{j+1}). So (A_{j+1}) holds, closing the induction. Throughout q_{j+1} ≤ m ≤ p_{j+1}−1 we have k ≤ q_j−1 < q_j, so at least one Σ_{j+1} survives and **G(m) = s^{j+1}+s^{j+2} = s^j(2−√2)**.

This agrees with the EVEN-phase formula in the Lemma B statement: s^{j+1}+s^{j+2} = s^{j+1}(1+s) = s^{j+1}√2, while s^j(2−√2) = s^j·(2−√2) = s^j·s√2 (since s√2 = (√2−1)√2 = 2−√2) = s^{j+1}√2; so s^j(2−√2) = s^{j+1}+s^{j+2}, as claimed. ✓

This proves Lemma B for all j ≥ 4, with the base cases j = 4 (A_4 at m=41, B_4 at m=70) checked directly. ∎

**Phase tiling.** For each j, [p_j, q_{j+1}−1] ∪ [q_{j+1}, p_{j+1}−1] = [p_j, p_{j+1}−1] (using p_{j+1} ≥ q_{j+1}+1, true since p_{j+1} = q_{j+1}+q_j and q_j ≥ 1), and ⋃_{j≥5} [p_j, p_{j+1}−1] = [p_5, ∞) = [99, ∞). Hence every m ≥ 99 lies in exactly one phase, and in particular every window size m = n+100 ≥ 101 (n ≥ 1) lies in an ODD or EVEN phase with j ≥ 5. (For n = 1, m = 101 ∈ [99, 168] = [p_5, q_6−1], the ODD phase of level 5.)

We also note **G is non-increasing in m** (by (F1)), and constant on each phase; the phase values s^j and s^j(2−√2) strictly decrease as j increases.

(The phase formula G(m) was brute-force–verified against the formula for every m ∈ [99, 600]: zero mismatches.)

---

### 5. Lemma C: the upper bound n·G(n+100) < (4+3√2)/4 for all n ≥ 1

Set λ₀ = (4+3√2)/4. First two clean algebraic facts.

**(C0) (1+√2)²/(2√2) = λ₀.** (1+√2)² = 3+2√2, and (3+2√2)/(2√2) = (3+2√2)·√2/(2·2) = (3√2+4)/4 = (4+3√2)/4 = λ₀. ✓ Also (2+√2)/2 < λ₀, since 2(2+√2) = 4+2√2 < 4+3√2 ⟺ 0 < √2. ✓

**(C1) Binet residual.** Using Binet (P3) for q_{j+1}: q_{j+1} = ((1+√2)^{j+2} − (1−√2)^{j+2})/(2√2). Multiply by s^j = (1+√2)^{−j}:
  q_{j+1}·s^j = [(1+√2)^{j+2}(1+√2)^{−j} − (1−√2)^{j+2}(1+√2)^{−j}]/(2√2)
        = [(1+√2)² − (1−√2)^{j+2}(1+√2)^{−j}]/(2√2)
        = λ₀ − (1−√2)^{j+2}(1+√2)^{−j}/(2√2).
Now (1−√2)^{j+2} = (−(√2−1))^{j+2} = (−1)^{j+2}(√2−1)^{j+2} = (−1)^j s^{j+2}, and (1+√2)^{−j} = s^j. So the subtracted term is
  (−1)^j s^{j+2}·s^j/(2√2) = (−1)^j s^{2j+2}/(2√2).
Therefore
  q_{j+1}·s^j = λ₀ − (−1)^j · s^{2j+2}/(2√2).   (C1)
(Verified to 50 digits for j = 5..15.)

In particular **q_{j+1}·s^j is GREATER than λ₀ for odd j** (the term −(−1)^j(…)= +s^{2j+2}/(2√2) > 0 is *added*), and less than λ₀ for even j. So the naive inequality "q_{j+1}·s^j < λ₀" is **false for odd j**; the upper bound must use the −101 slack. We do so now.

**(C2) ODD phase.** Let m = n+100 lie in an ODD phase, p_j ≤ m ≤ q_{j+1}−1 with j ≥ 5. Then G(m) = s^j, and n = m − 100 ≤ q_{j+1} − 1 − 100 = q_{j+1} − 101. Since G is constant on the phase and n·G is increasing in n, its maximum over the phase is at m = q_{j+1}−1, n = q_{j+1}−101 (this n is positive: q_{j+1} ≥ q_6 = 169 for j ≥ 5, so q_{j+1}−101 ≥ 68 > 0). Hence
  n·G(m) ≤ (q_{j+1} − 101)·s^j = q_{j+1}s^j − 101 s^j = λ₀ − (−1)^j s^{2j+2}/(2√2) − 101 s^j,
using (C1). So it suffices to show the correction is negative:
  R_j := (−1)^j s^{2j+2}/(2√2) + 101 s^j > 0,  whence n·G(m) ≤ λ₀ − R_j < λ₀.
• If j is even, (−1)^j = +1, so R_j = s^{2j+2}/(2√2) + 101 s^j > 0 trivially.
• If j is odd, (−1)^j = −1, so R_j = 101 s^j − s^{2j+2}/(2√2). This is positive iff 101 > s^{2j+2}/(2√2 · s^j) = s^{j+2}/(2√2). Since s < 1, s^{j+2}/(2√2) ≤ s^{7}/(2√2) (for j ≥ 5) and s^7 = (√2−1)^7 < 1, so s^{j+2}/(2√2) < 1/(2√2) < 101. Thus R_j > 0.
In both cases n·G(m) ≤ λ₀ − R_j < λ₀. (The slack inequality s^{j+2}/(2√2) < 101 was verified numerically for odd j = 5..29; e.g. j=5 gives 0.00074 ≪ 101.)

**(C3) EVEN phase.** Let m = n+100 lie in an EVEN phase, q_{j+1} ≤ m ≤ p_{j+1}−1 with j ≥ 5. Then G(m) = s^j(2−√2), and n = m−100 ≤ p_{j+1}−1−100 = p_{j+1}−101. By the same monotonicity,
  n·G(m) ≤ (p_{j+1} − 101)·s^j(2−√2) < p_{j+1}·s^j(2−√2).
Using Binet for p_{j+1} from (P3): p_{j+1} = ((1+√2)^{j+2}+(1−√2)^{j+2})/2 (add the two equations of (P3) at index j+1 and divide by 2). Multiply by s^j(2−√2) = (1+√2)^{−j}(2−√2):
  p_{j+1}·s^j(2−√2) = (2−√2)/2 · [(1+√2)² + (1−√2)^{j+2}(1+√2)^{−j}]
        = (2−√2)/2 · [(3+2√2) + (−1)^j s^{2j+2}].
The leading term is (2−√2)(3+2√2)/2 = (6+4√2−3√2−2·2)/2 = (6+√2−4)/2 = (2+√2)/2. So
  p_{j+1}·s^j(2−√2) = (2+√2)/2 + (2−√2)(−1)^j s^{2j+2}/2.
The correction has magnitude (2−√2)s^{2j+2}/2 ≤ (2−√2)s^{12}/2 (j ≥ 5) which is a tiny positive number < 0.0006. Hence
  n·G(m) < p_{j+1}·s^j(2−√2) ≤ (2+√2)/2 + (2−√2)s^{2j+2}/2.
We bound the correction rigorously. By (C0), λ₀ − (2+√2)/2 = (4+3√2)/4 − (4+2√2)/4 = √2/4 (≈ 0.3536). It therefore suffices that (2−√2)s^{2j+2}/2 < √2/4. Since 0 < 2−√2 < 1, we have (2−√2)/2 < 1, and for j ≥ 5, s^{2j+2} ≤ s^{12} = (√2−1)^{12} < 3·10⁻⁵; hence the correction is < 3·10⁻⁵ < √2/4. Therefore
  n·G(m) < p_{j+1}·s^j(2−√2) = (2+√2)/2 + (2−√2)(−1)^j s^{2j+2}/2 ≤ (2+√2)/2 + (2−√2)s^{2j+2}/2 < (2+√2)/2 + √2/4 = λ₀,
so **n·G(m) < λ₀** in every EVEN phase. (s^{12} = (√2−1)^{12} ≈ 2.9·10⁻⁵, verified.)

**Conclusion of Lemma C.** Every m = n+100 ≥ 101 falls into an ODD or EVEN phase with j ≥ 5 (Lemma B tiling), and in both cases n·G(n+100) < λ₀. Therefore

  n·G(n+100) < λ₀ = (4+3√2)/4 for all n ≥ 1.

By Lemma A, ε(n+100) = G(n+100), so n·ε(n+100) < λ₀ for all n. (Direct scan: max_{n ≤ 200000} n·G(n+100) = 2.0595930 at n = 194924, strictly below λ₀.) ∎

This proves the **upper bound**: with λ = λ₀, for every n and every window of n+100 consecutive integers some member k has {kα} = M(a,n+100) ≤ ε(n+100) < λ₀/n ≤ λ₀/n, in fact strictly. (See §6 for the ≤/< boundary.)

---

### 6. Lemma D: sharpness — no smaller λ works, and λ₀ is the answer

**Lemma D.** sup_{n ≥ 1} n·ε(n+100) = λ₀, the supremum not being attained.

*Proof.* Upper bound sup ≤ λ₀ is Lemma C (each term < λ₀). For the reverse, consider for each j ≥ 5 the window size m_j = q_{j+1} − 1, the **top** of ODD phase j, with n_j = m_j − 100 = q_{j+1} − 101 ≥ 1 (since q_{j+1} ≥ 169). By Lemma B, G(m_j) = s^j, and by Lemma A, ε(m_j) = G(m_j) = s^j. Thus
  n_j·ε(n_j + 100) = (q_{j+1} − 101)·s^j = q_{j+1}s^j − 101 s^j.
By (C1), q_{j+1}s^j = λ₀ − (−1)^j s^{2j+2}/(2√2) → λ₀ as j → ∞ (since 0 < s < 1 ⇒ s^{2j+2} → 0), and 101 s^j → 0. Hence
  n_j·ε(n_j+100) → λ₀  as j → ∞.
Therefore sup_{n} n·ε(n+100) ≥ lim_j n_j·ε(n_j+100) = λ₀. Combined with sup ≤ λ₀ from Lemma C, the supremum equals λ₀. Since every individual term is < λ₀ (Lemma C), the supremum is approached but never attained. (The sequence n_j·ε(n_j+100) was computed to increase monotonically toward λ₀: 0.829, 1.551, 1.849, …, 2.0607⁻ for j = 5..29.) ∎

**The sup-vs-attained / smallest-λ argument.** We now combine. For a real number λ, call λ *valid* if for every n ≥ 1 and every window of n+100 consecutive positive integers some member k has {kα} ≤ λ/n. By §0, λ is valid ⟺ ε(n+100) ≤ λ/n for all n ⟺ n·ε(n+100) ≤ λ for all n ⟺ λ ≥ sup_n n·ε(n+100) = λ₀, **with one caveat at λ = λ₀**: the equivalence "ε(n+100) ≤ λ/n for all n ⟺ λ ≥ sup" reads, at λ = λ₀, as "n·ε(n+100) ≤ λ₀ for all n", which holds because Lemma C gives the **strict** inequality n·ε(n+100) < λ₀ ≤ λ₀ for every n. Hence:

  • λ = λ₀ is valid: for every n, ε(n+100) = G(n+100) and n·G(n+100) < λ₀, so ε(n+100) < λ₀/n ≤ λ₀/n, in particular ε(n+100) ≤ λ₀/n; and for every window M(a,n+100) ≤ ε(n+100) ≤ λ₀/n, so some k has {kα} ≤ λ₀/n. (The min over the window is attained at some actual k, so the existential is genuine.)
  • No λ < λ₀ is valid: if λ < λ₀ then by Lemma D there is j with n_j·ε(n_j+100) > λ, i.e. ε(n_j+100) > λ/n_j. By the equality ε = G and the density half of Lemma A, there is a starting integer a ≥ 1 with M(a, n_j+100) > λ/n_j; that is, for the window {a, …, a + n_j + 99} **every** member k has {kα} ≥ M(a,n_j+100) > λ/n_j. So the required k does not exist, and λ is invalid.

Therefore the set of valid λ is exactly [λ₀, ∞), and the **smallest** valid λ is

  λ = λ₀ = (4 + 3√2)/4 = (1+√2)²/(2√2) ≈ 2.0606601717798. ∎

---

### 7. Verification of the answer

We verify λ = (4+3√2)/4 both algebraically and numerically.

Algebraic consistency: (4+3√2)/4 = 1 + 3√2/4, and (1+√2)²/(2√2) = (3+2√2)/(2√2) = (3√2+4)/4 = (4+3√2)/4 ✓ (this is (C0)). The two extremal limits are λ₀ (ODD, the global sup) and (2+√2)/2 (EVEN); we proved (2+√2)/2 < λ₀ via 4+2√2 < 4+3√2 ⟺ √2 > 0 ✓, so the EVEN phases never govern.

Numerical checks (mpmath, 50 digits) used as confirmation (the proof stands on its own):
- λ₀ ≈ 2.06066017177982; all three closed forms agree to 12+ digits.
- Pell identities (P1),(P1)′,(P2),(P4) hold for j = 0..9; Binet (P3) to 50 digits.
- Phase formula G(m) (Lemma B) matches brute force for **every** m ∈ [99, 600]: zero mismatches. n = 1 (m = 101) lands in [99,168] = [p_5, q_6−1] ✓.
- ε(m) → G(m) from below (Lemma A) for m = 169 as the search window grows.
- Residual identity (C1) holds to 50 digits, j = 5..15; the residual is **positive for odd j** (so the slack is necessary) and the slack inequality s^{j+2}/(2√2) < 101 holds for odd j = 5..29.
- ODD-top sequence (q_{j+1}−101)s^j increases monotonically to λ₀; EVEN-top sequence (p_{j+1}−101)s^j(2−√2) increases to (2+√2)/2 < λ₀; direct scan max_{n ≤ 200000} n·G(n+100) = 2.0596 < λ₀.

This completes the proof that the smallest λ is **(4 + 3√2)/4**. ∎
