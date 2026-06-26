# all-russian-mo-2026-12

Let m, k be naturals with m > 100 and 1 < k < 2m. 2m unit balls in a row; Petya
and Vasya alternate merges of adjacent balls (Petya first), 2m−1 moves total.
Petya wins if a ball of mass k ever appears; otherwise Vasya. Who wins?

## Status
partial

## Approaches tried
- Brute-force minimax over the full game tree (in cut language; parity of
  cut-count = whose turn), m=3..7, all 1<k<2m — WORKED: fixes the threshold
  **Petya wins iff k ≤ m+1**. (script /tmp/b2_explore.py reproduces it.)
- **Cut reformulation** (the key reframing) — WORKED, makes the certificate clean.
  Put the row on positions 0..2m with 2m+1 boundary "cuts"; a merge removes exactly
  one interior present cut; a ball of mass k = two consecutive present cuts at
  distance k. Defined k-windows and "live" windows (interior count 1). Both
  directions are stated in this language below.
- **Lemma B1 (trapped ⇒ Petya wins next exchange)** — WORKED, fully rigorous,
  written out below. It is a clean 2-ply certificate. Strictly verified over all
  901 trapped positions for m=3..6 (every k): for every Vasya reply Petya completes
  a mass-k ball on the next single move, 0 failures (script /tmp/b1_verify.py). The
  written argument is a genuine mechanism, not a numeric check.
- **Lemma B2 (Petya FORCES a trapped position from the start)** — REAL GAP, NOT
  closed this round. The trapped-certificate fixpoint exactly equals the true
  Petya-win set for all k ≤ m+1, m=4..7 (script /tmp/b2_fixpoint.py), so the
  strategy is *correct*, but a fixpoint verified to m=7 is not a proof for m > 100,
  and the forcing depth grows linearly in m. Five natural *describable* Petya
  strategies were tested and all FAIL to match the win set for k near m+1:
  - left-anchored greedy (grow the leftmost block) — fails for all k ≥ 3
    (/tmp/b2_greedy.py);
  - two-ended greedy "grow the smaller end" / "grow the bigger end" — fails k ≥ 4
    (/tmp/b2_two.py);
  - "grow the longest block toward k without overshoot" — fails k ≥ 4
    (/tmp/b2_central.py);
  - adaptive two-end "grow the end whose neighbor is still a unit" — fails k ≥ 4
    (/tmp/b2_adapt.py).
  Diagnosis: the *unique* winning Petya first move at k = m+1 is the **centre
  merge**, NOT any end move; and for k near m+1 the starting position has **no
  winning end-move at all** (/tmp/b2_think.py). So no end-anchored single- or
  double-block greedy can be correct; the true strategy maintains two interior
  blocks straddling the centre with shared central material, chosen dynamically.
  Producing and proving an explicit m-uniform such strategy is the open step.
- (Prior rounds) Round 5 "no adjacent pair sums to k" Vasya invariant — DEAD END as
  a maintainable static set. Round 5 "n=3 stuck config [2m−k,2k−2m,2m−k]" — DEAD END
  except k=m+1 (middle mass ≤ 0 for k ≤ m). Mirror/symmetry Vasya strategy — DEAD
  END (Vasya stuck on centre removal). Single static cut-potential — DEAD END.

## Current best

**Answer (brute-force verified, m=3..7, all 1<k<2m):**
**Petya wins iff k ≤ m+1; Vasya wins iff k ≥ m+2.**

The Petya direction (k ≤ m+1) is established below down to a single, clearly marked
forcing gap (Lemma B2). The Vasya direction (k ≥ m+2) remains open.

### Cut reformulation

Place the row on positions 0,1,…,2m. The 2m+1 integer points are the **cuts**;
initially all are *present*. A **ball** is a maximal run between two consecutive
present cuts, and its **mass** is the distance between those cuts. Merging two
adjacent balls = **removing one interior present cut** (cuts 0 and 2m are never
removed, being the row's ends).

- Start: all 2m+1 cuts present (2m balls of mass 1). After all 2m−1 merges only
  0 and 2m remain (one ball of mass 2m).
- *Petya's goal:* at some moment two consecutive present cuts are at distance k —
  equivalently, present cuts a and a+k with **no present cut strictly between**
  them (a ball of mass k).
- *Parity / turn order:* #present cuts = (#balls) + 1. The start has 2m+1 cuts
  (odd); a merge removes exactly one cut, so the count strictly decreases by 1 each
  move. Petya moves when the cut-count is **odd**, Vasya when it is **even**.

Definitions used throughout.
- A **k-window** is an interval [a, a+k] whose endpoints a, a+k are both present
  cuts. Its **interior count** t is the number of present cuts strictly inside; a
  mass-k ball exists ⇔ some k-window has t = 0.
- A k-window is **live** if t = 1: it has exactly one interior present cut u, and
  removing u (one merge) creates a mass-k ball.

**Lemma A0 (centre-straddle), proved.** For k ≥ m+2, every k-window [a, a+k] (with
0 ≤ a and a+k ≤ 2m) satisfies a < m < m+1 < a+k; i.e. every k-window contains both
central cuts m and m+1 strictly inside.
*Proof.* Since a+k ≤ 2m and k ≥ m+2, we get a ≤ 2m − k ≤ 2m − (m+2) = m − 2 < m,
so a < m. Also a+k ≥ 0 + k = k ≥ m+2 > m+1, so a+k > m+1. Hence
a < m < m+1 < a+k. ∎  (Algebra rechecked for all m=3..7, k=m+2..2m−1,
/tmp/a0.py.)

This is used only in the (open) Vasya direction; it is recorded here for the next
round.

---

### Part B (k ≤ m+1, Petya wins): the certificate is rigorous; the forcing is open

**Lemma B1 (trapped ⇒ Petya wins on the next exchange) — PROVED.**

*Definition.* Call a position **trapped** if it is Vasya's turn (cut-count even),
there is no mass-k ball yet, and there exist two live k-windows
W₁ = [a₁, a₁+k] and W₂ = [a₂, a₂+k], with respective lone interior cuts u₁, u₂,
such that
  (i) u₁ ≠ u₂ (distinct interior cuts), and
  (ii) no **removable** cut is an endpoint of both windows — i.e. the set
       {a₁, a₁+k} ∩ {a₂, a₂+k} contains no present interior cut (it may contain
       the non-removable ends 0 or 2m, which is harmless).

*Claim.* From a trapped position Vasya cannot avoid losing: after any Vasya move,
Petya creates a mass-k ball on his immediately following move.

*Proof.* It is Vasya's turn, and a merge **removes exactly one present cut** — a
merge can never add a cut. Let c be the single interior cut Vasya removes. We show
that, in every case, at least one of W₁, W₂ remains a live window (both endpoints
still present, still exactly one interior cut present), and then Petya removes that
window's lone interior cut to complete a mass-k ball.

Removing the single cut c affects the windows only as follows. For each i, the
window Wᵢ survives as a live window unless the removed cut c is one of the three
present cuts attached to Wᵢ, namely an endpoint aᵢ, an endpoint aᵢ+k, or the lone
interior cut uᵢ. Consider the disposition of c.

- **Case 1: c = u₁.** Then removing u₁ leaves the k-window [a₁, a₁+k] with interior
  count 0 — Vasya has himself created a mass-k ball, and Petya has already won (in
  fact the game ends in Petya's favor at this very moment). Symmetrically if c = u₂.
- **Case 2: c is an endpoint of W₁ (c = a₁ or c = a₁+k) but c is not attached to
  W₂.** "Not attached to W₂" means c ∉ {a₂, a₂+k, u₂}. Then W₁ is destroyed (one of
  its endpoints is gone, so the pair at distance k no longer both present), but W₂
  is untouched: a₂, a₂+k, u₂ are all still present, and no new cut appeared, so W₂
  still has exactly its one interior cut u₂. Thus W₂ remains live. Petya removes u₂,
  creating a mass-k ball at [a₂, a₂+k].
- **Case 3: symmetric to Case 2 with the roles of W₁, W₂ exchanged** (c attached to
  W₂ as an endpoint but not attached to W₁): W₁ remains live; Petya removes u₁.
- **Case 4: c attached to both W₁ and W₂.** We rule this out. By condition (i)
  u₁ ≠ u₂, and c is a single cut, so c cannot be both u₁ and u₂; and Cases 1 handle
  c = u₁ or c = u₂. The only remaining way for c to be attached to both is for c to
  be an endpoint of W₁ *and* an endpoint of W₂, i.e.
  c ∈ {a₁, a₁+k} ∩ {a₂, a₂+k}. But c is an interior cut Vasya removed, hence
  removable, and condition (ii) says no removable cut lies in
  {a₁, a₁+k} ∩ {a₂, a₂+k}. Contradiction. So Case 4 is empty.
- **Case 5: c attached to neither window** (c ∉ {a₁,a₁+k,u₁} and
  c ∉ {a₂,a₂+k,u₂}). Then both W₁ and W₂ remain live; Petya removes u₁.

In every case some live window survives Vasya's move (or Vasya has already lost),
and Petya then removes its lone interior cut, producing a mass-k ball. Hence a
trapped position is a Petya win. ∎

*Verification (mechanism, not substitute for proof).* The above case analysis was
checked exhaustively: over all 901 trapped positions for m = 3..6 (every k),
for **every** Vasya reply Petya has a completing move — 0 exceptions
(/tmp/b1_verify.py). The written proof stands on its own.

**Lemma B2 (Petya forces a trapped position from the start) — OPEN GAP.**

What is established: define the certificate set G of Petya-turn positions from which
Petya can, in one move, reach (a) a mass-k ball, (b) a trapped position, or (c) a
Vasya-turn position all of whose replies lie in G. Backward induction computes G;
the start position lies in G for **every** k ≤ m+1 and m = 4..7, and lies outside G
for k = m+2 (/tmp/b2_fixpoint.py). Combined with Lemma B1 this *correctly* decides
the game for those m. But:

1. **The forcing depth grows linearly in m** (≈ m−1 Petya moves for k near m+1), so
   the m ≤ 7 fixpoint computation proves nothing for m > 100. An m-uniform argument
   is required.
2. **No simple greedy realizes G.** As recorded under "Approaches tried", five
   natural describable strategies all fail for k near m+1, because the unique
   winning first move at k = m+1 is the centre merge and the start has no winning
   end-move; the real strategy must maintain two interior blocks straddling the
   centre, chosen dynamically. We could not write down and prove such an
   m-uniform strategy this round.

Therefore **the Petya direction is reduced to Lemma B2 but not completed.** We do
NOT claim Part B as solved. The reduction (cut language + Lemma B1) and the verified
correctness of the certificate set are the rigorous progress; the explicit
m-uniform forcing strategy is the remaining work.

---

### Part A (k ≥ m+2, Vasya wins) — OPEN

Vasya's direction is unsolved. The natural invariant I = "no mass-k ball and no live
k-window" is the correct *necessary* feature of safe positions but is **not** a
self-maintaining static set: there are Petya-turn I-positions (e.g. precursors of
(1,1,4,1,1) at m=4, k=6) from which every Vasya reply breaches I, yet which are
genuine Petya-win positions — so the safe set is strictly smaller than I. The
round-6 outline's proposed maintenance lemma (Lemma A1) targets a two-window
obstruction, but the actual obstruction is a "half-built central" configuration, so
the mechanism is aimed at the wrong target. A genuinely stronger, explicitly
characterized invariant J ⊊ I, provably Vasya-restorable uniformly in m, is needed
and is not yet available. (See the round-6 outline review for the brute-force
disproof of I's maintainability.) Part A therefore remains open.

### Final answer

The characterization is **Petya wins iff k ≤ m+1, Vasya wins iff k ≥ m+2** (boundary
k = m+1 is a Petya win, k = m+2 a Vasya win), matching the full minimax for
m = 3..7 and all 1 < k < 2m. The Petya direction is reduced to Lemma B2 (an open
forcing step) with the certificate Lemma B1 fully proven; the Vasya direction is
open. Status: partial.

Scripts in /tmp/ reproduce every numeric claim: b2_explore.py (threshold in cut
language), a0.py (Lemma A0), b1_verify.py (Lemma B1 over all trapped positions),
b2_fixpoint.py (certificate set = win set, m=4..7), and b2_greedy/two/central/adapt/
think.py (the failures of describable greedy strategies).

## Full proof
(absent — Status is partial; Lemma B2's m-uniform forcing strategy and the entire
Vasya direction remain unproven.)
