## Status
partial

## Approaches tried

- **Structural reduction (correct, kept):** A 2×2 napkin placed along grid lines has
  an integer lattice point as its center. Two napkins overlap iff their centers are at
  L∞-distance ≤ 1, so a valid placement = a king-graph independent set (king-IS) in Z².
  The a×b corner-condition is exactly invariance of the center set S under translation
  by the single vector v = (a,b). Thus the problem ranges over all (a,b)-invariant
  king-IS of Z², and α is the relevant extremal window density. **This reduction is
  rigorous and is the correct anchor for the problem** (see Current best, Lemma 1–2).

- **Conjectured answer α = (a−1)/(4a) — REFUTED (dead end, do not re-attempt).**
  A prior round conjectured α = (a−1)/(4a) (= 1/6 for a=3) from an "exhaustive orbit
  enumeration" of small cases, an explicit construction giving that density, and an
  upper-bound *sketch* built from two false steps:
  (i) "the active x-residue classes form an independent set in the circular king graph
  on Z/aZ, hence at most (a−1)/2 of them are nonempty"; and
  (ii) "adjacent columns are 2-separated, so each contributes ≤ 1/2 and the active ones
  multiply to (a−1)/2 · 1/2 / a."
  **Both steps are false.** I verified a genuine (3,3)-invariant king-IS of density
  **2/9 ≈ 0.2222 > 1/6 ≈ 0.1667** (computation below), so the upper bound (a−1)/(4a) is
  simply wrong. In that optimum the three column densities are **1/3, 1/6, 1/6** — all
  three residue classes are active (refuting (i): more than (a−1)/2 = 1 are nonempty),
  and the densest column has density 1/3, not 1/2 (refuting the per-fiber product (ii)).
  The naive "adjacent columns 2-separated, telescope around the a-cycle" bound only
  yields the trivial **1/4**, never (a−1)/(4a). The construction
  S = {(x,y): x mod a ∈ {0,2,…,a−3}, y ≡ x (mod 2)} is still a *valid* invariant king-IS
  of density (a−1)/(4a), but it is **not optimal** — it is only a lower bound, beaten by
  the 2/9 set for (a,b)=(3,3).

- **"α depends only on a, not b" — REFUTED.** Verified-valid maximal densities differ:
  (3,3) → 2/9 ≈ 0.222 while (3,7) → 0.200. So the answer genuinely depends on b. (The
  (3,5), (3,7), (5,5) numbers from a truncated transverse-period search are lower bounds
  and may not be converged; the *qualitative* b-dependence is firm because (3,3) ≠ (3,7).)

- **Parity-obstruction lemma (correct but insufficient).** For b odd, in any
  (a,b)-invariant king-IS the a cyclic adjacent-column pairs cannot all be simultaneously
  "full" (density 1/2 each) — see Current best, Lemma 3. This is a true constraint but by
  itself only shaves the trivial 1/4 by O(1/H), so it does not determine d*(a,b).

## Current best

**The answer α is OPEN.** It equals d*(a,b), the maximum global density of an
(a,b)-invariant king-IS of Z², and that quantity is not known in closed form. The
previously conjectured α = (a−1)/(4a) is **false** (refuted by the verified 2/9 witness
for (a,b)=(3,3)). What is rigorously locked is the reduction and three lemmas below.

### Lemma 1 (Reduction: corner-condition ⇔ (a,b)-invariance)
Let S ⊆ Z² be the set of napkin centers. A 2×2 napkin on grid lines has integer center,
and two napkins are disjoint iff their centers (p,q) satisfy max(|Δx|,|Δy|) ≥ 2, i.e. S
is a king-graph independent set. For the axis-parallel a×b rectangle with lower-left
corner p, its upper-right corner is p + (a,b). The hypothesis "lower-left corner is a
center ⇔ upper-right corner is a center, for every such rectangle" reads
p ∈ S ⇔ p+(a,b) ∈ S for all p ∈ Z², i.e. **S = S + (a,b)**. Conversely S = S + (a,b)
gives the biconditional for every rectangle. Hence S ranges exactly over the
(a,b)-invariant king-IS of Z². ∎

### Quantifier unwinding (correct order)
"Smallest α such that for every N one can always find an N×N window with ≤ αN² napkins"
unwinds, for a fixed valid configuration S, to: for every N there exists an N×N window W
with |S∩W| ≤ αN². "One can always find" = there exists a *sparsest* window, i.e. the min
over windows. Over all valid S this is
  **α = sup_{valid S}  sup_{N≥1}  min_{N×N windows W} |S∩W| / N².**

### Lemma 2 (Periodic density = window density; O(N) boundary error)
Suppose S is invariant under a full-rank lattice L ⊇ ⟨(a,b)⟩, with global density
d(S) = (#orbit representatives in a fundamental domain) / det(L). Then for every N×N
window W,
  |S∩W| = d(S)·N² + O(N),
because W is a disjoint union of full det(L)-cells (each contributing exactly its share
of representatives) plus a boundary strip of width O(1) and length O(N). Consequently
**min_W |S∩W|/N² → d(S)** and **max_W |S∩W|/N² → d(S)** as N → ∞.

This makes both directions of α = d*(a,b) precise:
- **Lower bound on α (construction direction).** Any verified-valid periodic invariant
  king-IS of density d forces α ≥ d: for that S even the sparsest window has density
  → d, so no α < d can satisfy the requirement for all large N. In particular, from the
  verified 2/9 set below, **α ≥ 2/9 already for (a,b) = (3,3)**, killing the 1/6
  conjecture outright.
- **Upper bound on α (the genuinely hard half).** One must show: for every valid S and
  every N there is a window of density ≤ d*(a,b). This is an averaging argument —
  min over a tiling family of translated windows ≤ the average ≤ d*, with the per-window
  boundary error O(N) (i.e. O(1/N) in density). Finding the matching d*(a,b) and the
  matching upper bound is the open core.

### Verified counterexample to α = (a−1)/(4a) for (a,b) = (3,3): density 2/9
Take the period lattice L = ⟨(3,3), (0,6)⟩ (so det L = 18) and the 4 orbit
representatives {(0,0), (0,2), (1,4), (2,1)} in the fundamental domain {0,1,2}×{0,…,5}.
Define S = {(x,y) : the L-reduction of (x,y) lies in those 4 reps}. I checked on an
explicit infinite patch (region [−20,20]²; reduction x ↦ x−3⌊x/3⌋ for the column, then
y ↦ y mod 6 after subtracting the v1-shift):
- **King-IS valid:** no two points of S are at L∞-distance ≤ 1 (verified over the whole
  patch — 0 conflicts).
- **(3,3)-invariant:** inS(x,y) = inS(x+3, y+3) everywhere on the patch; S is also
  (0,6)-invariant, so it is L-periodic.
- **Density exactly 2/9:** 4 reps / det 18 = 2/9; a direct count over a 180×180 box gives
  0.22222… = 2/9.
- **Column densities 1/3, 1/6, 1/6:** column x≡0 has density 1/3, columns x≡1,2 have
  density 1/6 (averaging to 2/9). This single fact destroys the explorer's "each active
  fiber ≤ 1/2, at most (a−1)/2 active" mechanism: all 3 columns are active and no column
  reaches 1/2.

Since 2/9 > 1/6 = (a−1)/(4a)|_{a=3}, the formula (a−1)/(4a) is refuted.

### Lemma 3 (Parity obstruction — correct, but only shaves the trivial 1/4 by O(1/H))
In any (a,b)-invariant king-IS with b odd, consider a height-H window and the a cyclic
adjacent-column pairs (columns x, x+1 mod a, the wrap pair x=a−1 → 0 using the b-odd
y-shift from invariance). Call a pair "full" if both its columns achieve the max packing
⌈H/2⌉ in the window. The pairs cannot **all** be full simultaneously: a full adjacent
pair forces both columns into a single common y-parity class (king constraint pins the
allowed rows), and that parity class must propagate consistently around the a-cycle of
columns; but the wrap pair carries the b-odd shift, which injects a parity flip p₀ = p₀+1,
a contradiction. (Verified: "all pairs full" is impossible for (3,3), (3,5), (5,5).) This
is a genuine constraint but only improves the trivial king bound 1/4 by O(1/H), so it
does **not** by itself pin d*(a,b).

### The open determination
The problem reduces to: **determine d*(a,b) = the maximum global density of an
(a,b)-invariant king-IS of Z², for odd a ≤ b > 1**, and supply a matching construction
and matching upper bound. Known data points (validity re-checked on explicit infinite
sets where flagged): d*(3,3) = 2/9. Lower-bound estimates from a transverse-period search
truncated at m ≤ 8 — likely not converged — gave (3,5) ≳ 0.208, (3,7) ≳ 0.200,
(5,5) ≳ 0.200. The closed form of d*(a,b) is **unknown**; in particular it depends on b,
not on a alone. The right upper-bound tool is the per-period 2D packing constraint on the
quotient torus Z²/L (an LP/fractional relaxation with king-clique constraints: every 2×2
king-cell holds ≤ 1 center ⟹ ≤ 1/4 trivially, with the b-odd parity obstruction cutting
this down), **not** the 1D per-column fiber bound — that mechanism is refuted above.

**Pitfalls recorded for future rounds:**
- Do NOT re-derive (a−1)/(4a); it is refuted (witness above).
- Every brute-force/orbit-count density MUST be re-verified on the explicit infinite set:
  inS(x,y) against its 8 neighbours over a region larger than the period. A general-lattice
  reduction once produced a spurious density-1/3 "config" for (3,3) that fails the king test
  at the fundamental-domain boundary; only the explicitly re-verified 2/9 set survives.
- Convergence: truncating the transverse period m too low UNDER-states d* — (3,3) needs
  m = 6 to even see 2/9 (m = 2,4 show only 1/6). Push m well past 8 and use general
  lattices before announcing any closed form.

## Full proof
(Not present — Status is partial. The reduction and Lemmas 1–3 are rigorous; the
determination of α = d*(a,b) is open, and the previously conjectured (a−1)/(4a) is false.)
