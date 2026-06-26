# all-russian-mo-2026-12

Let m, k be naturals with m > 100 and 1 < k < 2m. 2m unit balls in a row; Petya
and Vasya alternate merges of adjacent balls (Petya first), 2m−1 moves total.
Petya wins if a ball of mass k ever appears; otherwise Vasya. Who wins?

## Status
partial

## Approaches tried
- Brute-force minimax over the full game tree (cut language; parity of cut-count
  = whose turn), m=3..7, all 1<k<2m — WORKED: fixes the threshold
  **Petya wins iff k ≤ m+1, Vasya wins iff k ≥ m+2** (re-confirmed for m=3..6 by
  /tmp/partb_check.py; matches all prior rounds).
- **Cut reformulation** (the key reframing) — WORKED, makes both certificates
  clean. Row on positions 0..2m, 2m+1 boundary cuts; a merge removes exactly one
  interior present cut; a ball of mass k = two present cuts at distance k with no
  present cut between. Petya moves on odd cut-count, Vasya on even. Used throughout.
- **Lemma A0 (centre-straddle)** — PROVED, m-uniform. For k ≥ m+2 every k-window
  contains both central cuts m, m+1 strictly inside. Pure arithmetic.
- **Lemma B1 (trapped ⇒ Petya wins on next exchange)** — PROVED, m-uniform, full
  case proof below. A clean 2-ply certificate; verified over all 901 trapped
  positions m=3..6 (0 exceptions). This is the finishing tool for the Petya
  direction.
- **Vasya direction via invariant J′** (no mass-k, no live window, ≤1 t=2 window),
  maintained on Petya-turn positions and "restored" by Vasya removing a live
  window's endpoint (lw=1) or a "safe" cut (lw=0) — **DOES NOT CLOSE.** The
  prescribed Vasya strategy IS empirically a winning strategy (verified over all
  states reachable *under that strategy*, m=3..7, k≥m+2, 0 failures —
  /tmp/a_verify.py). BUT J′ is **not a self-maintaining invariant**: there exist
  J′-positions from which Vasya's restoring rule provably fails to return to J′
  (explicit counterexample below). Equivalently the "safe cut" step (the planned
  Lemma A2) is FALSE in general: a cut outside the lone t=2 window's interior can
  still create a *new* t=2 window by lowering a t=3 window. So the J′ machinery
  only certifies Vasya's win on the reachable sub-DAG, which we have not
  characterized in m-uniform prose. Recorded as the open gap for the Vasya
  direction.
- **Lemma B2 (Petya forces a trapped position from the start)** — OPEN. The
  forcing depth grows linearly in m, the certificate fixpoint is verified only to
  m ≤ 7, and no fixed describable greedy realizes the win set (at k=m+1 the unique
  winning first move is the centre merge; the strategy is genuinely adaptive). Not
  closed.
- (Prior rounds) Static "no adjacent pair sums to k" Vasya invariant — DEAD END.
  Mirror/symmetry Vasya strategy — DEAD END. Static invariant I = "no mass-k, no
  live window" alone — DEAD END (not self-maintaining). J′ = I + "≤1 t=2 window" —
  also NOT self-maintaining (this round's finding); it is *necessary* for safety
  (every Vasya-safe no-live position has ≤1 t=2 window, m=4,5 — /tmp/distinguish.py)
  but not *sufficient* and not maintainable from arbitrary J′-positions.

## Current best

**Answer (brute-force verified m=3..7, all 1<k<2m), with proof of neither
direction completed in full:**

**Petya wins iff k ≤ m+1; Vasya wins iff k ≥ m+2.**

What is rigorously established this round (all m-uniform unless noted):

1. **Cut reformulation** with correct turn parity.
2. **Lemma A0** (centre-straddle), proved.
3. **Core safety fact for k ≥ m+2 (proved):** from a Petya-turn position with no
   mass-k ball and *no live window* (every k-window has interior count ≥ 2), Petya
   cannot create a mass-k ball on his move. (Each window's count drops by ≤ 1 per
   removal, so a count-≥2 window cannot reach 0.) This is the genuine, provable
   half of the Vasya-side analysis. The unproven half is that Vasya can *maintain*
   "no live window" forever — for which J′ is the natural candidate invariant but
   is not self-maintaining (see the counterexample below).
4. **Lemma B1** (trapped ⇒ Petya wins next exchange), proved — the finishing tool
   for the Petya direction.

The two open gaps, recorded precisely so the next round can attack them:
- **Vasya direction (k ≥ m+2):** find an invariant J ⊆ {no mass-k, no live window}
  that is BOTH (a) preserved by Vasya's restoring move from any J-position and
  (b) such that from any Petya move out of J the result still admits a J-restoring
  Vasya reply. J′ fails (a). The true safe set is strictly between I and the
  reachable set and has no simple closed form we have found.
- **Petya direction (k ≤ m+1):** Lemma B2 — an explicit m-uniform forcing strategy
  reaching a trapped position, checked against *all* Vasya replies.

================================================================================

### Cut reformulation (shared setup)

Place the row on the integer points 0,1,…,2m. These 2m+1 points are the **cuts**;
initially all are *present*. A **ball** is a maximal segment between two
consecutive present cuts, and its **mass** is the distance between those cuts.
Merging two adjacent balls **removes exactly one interior present cut** (the cut
between them); the two end cuts 0 and 2m are never removed.

- *Start.* All 2m+1 cuts present (2m balls of mass 1). After all 2m−1 merges only
  0 and 2m remain (a single ball of mass 2m).
- *Petya's goal.* At some moment two present cuts lie at distance k with **no
  present cut strictly between** them (a ball of mass k).
- *Turn parity.* #present cuts = #balls + 1. The start has 2m+1 cuts (odd); each
  merge removes exactly one cut. Hence **Petya moves when the cut-count is odd,
  Vasya when it is even.** A merge can only remove a present cut, never add one.

Definitions used throughout.
- A **k-window** is an interval [a, a+k] with 0 ≤ a, a+k ≤ 2m and both endpoints
  a, a+k present. Its **interior count** t is the number of present cuts strictly
  inside (a, a+k). A mass-k ball exists ⇔ some k-window has t = 0.
- A k-window is **live** if t = 1 (one merge — removing its lone interior cut —
  creates a mass-k ball). Write **lw** for the number of live windows. A k-window
  is a **t=2 window** if t = 2.

**Lemma A0 (centre-straddle).** *For k ≥ m+2, every k-window [a, a+k]
(0 ≤ a, a+k ≤ 2m) satisfies a < m < m+1 < a+k; both central cuts m, m+1 lie
strictly inside every k-window.*

*Proof.* From a+k ≤ 2m and k ≥ m+2: a ≤ 2m − k ≤ 2m − (m+2) = m − 2 < m. From
a ≥ 0, k ≥ m+2: a+k ≥ k ≥ m+2 > m+1. Hence a < m < m+1 < a+k. ∎

================================================================================
## PART A — Vasya wins for k ≥ m+2 (CORE FACT PROVED; full strategy OPEN)
================================================================================

Fix k ≥ m+2 (so k ≥ 103 and k < 2m).

### What is proved (m-uniform)

**Core safety fact.** *Let P be a Petya-turn position with no mass-k ball and no
live window (every k-window has interior count ≥ 2). Then after any Petya move,
the resulting position has no mass-k ball.*

*Proof.* Petya removes one interior present cut c. For each k-window the present
cuts strictly inside it lose c if c was strictly inside it, and are otherwise
unchanged; and no new k-window appears (no cut is added, and a surviving window
keeps both endpoints). So every window's interior count drops by at most 1. Each
window had count ≥ 2 by hypothesis, hence count ≥ 1 after Petya's move: no window
reaches count 0, so no mass-k ball is created. ∎

This shows **Petya can never win on his move out of a "no-live, no-mass-k"
position.** Consequently, IF Vasya can guarantee that every Petya-turn position is
"no-live, no-mass-k," then a mass-k ball never appears and Vasya wins when the
interior empties. The entire remaining content of the Vasya direction is the
maintenance of "no live window," which we have NOT closed.

**Empirical correctness of a concrete Vasya strategy.** Define Vasya's reply to a
Vasya-turn position (no mass-k, lw ≤ 1): if lw = 1, remove a removable endpoint of
the unique live window (one exists since k < 2m, else {a, a+k} = {0, 2m} forces
k = 2m); if lw = 0, remove an interior cut outside the interior of every t=2
window. Under this strategy, over **all positions reachable from the start under
Vasya's own play**, for m = 3..7 and every k ≥ m+2: no mass-k ball ever appears,
after every Petya move lw ≤ 1, and Vasya always has a legal restoring reply (0
failures — /tmp/a_verify.py). So this is a genuine winning strategy for m ≤ 7.

### Why this does NOT yet prove the Vasya direction (the open gap)

The natural way to make the above m-uniform is an invariant maintained on
Petya-turn positions. The candidate is

  **J′:** no mass-k ball; every k-window has interior count ≥ 2 (no live window);
          at most one t=2 window.

J′ is *necessary* for Vasya-safety (every Vasya-safe no-live Petya-turn position
has ≤ 1 t=2 window — verified m=4,5, /tmp/distinguish.py). But **J′ is not
self-maintaining**, so it cannot be used as the invariant:

> **Counterexample (m=4, k=6).** The Vasya-turn position with present cuts
> {0,1,2,3,6,8} has windows [0,6] (interior {1,2,3}, count 3) and [2,8]
> (interior {3,6}, count 2): no mass-k ball, no live window, exactly one t=2
> window — it satisfies J′. Vasya's lw=0 rule removes a cut outside the interior
> {3,6} of the t=2 window; the legal choices are 1 or 2. Removing 1 yields
> {0,2,3,6,8}, whose windows are [0,6] (interior {2,3}, count 2) and [2,8]
> (interior {3,6}, count 2): **two** t=2 windows — J′ is violated.
> (/tmp/note_check.py exhibits this explicitly.)

The failure mechanism is exactly the "≤ 1 new t=2 window" reasoning the outline
review flagged as false: removing a cut outside the lone t=2 window's interior can
still *lower a t=3 window to t=2*, creating a second t=2 window. So the planned
Lemma A2 ("a safe cut exists") is **false** as a statement about arbitrary
J′-positions. More broadly, an exhaustive test over *all* (not merely reachable)
Vasya-turn positions with no mass-k and lw ≤ 1 finds many from which Vasya's rule
fails to restore J′ (e.g. m=5, k=7: 14 such positions among 246 — /tmp/Jprime_general.py).

The concrete strategy still wins because these bad J′-positions are **not reachable
under Vasya's own play** — but we have no m-uniform description of the reachable
safe set, and the safe set has no simple closed form we could find (the
central-span and t=2-count features do not separate it — /tmp/findinv.py). Hence
the Vasya direction is reduced to: *exhibit an invariant J that is genuinely
self-maintaining and implies "no live window" on Petya-turn positions.* This is
open.

================================================================================
## PART B — Petya wins for k ≤ m+1 (Lemma B1 PROVED; Lemma B2 OPEN)
================================================================================

Technique: Petya reaches a **trapped** position; then Lemma B1 finishes.

**Lemma B1 (trapped ⇒ Petya wins on the next exchange) — PROVED.**

*Definition.* A position is **trapped** if it is Vasya's turn (cut-count even),
there is no mass-k ball, and there exist two live k-windows W₁ = [a₁, a₁+k],
W₂ = [a₂, a₂+k] with lone interior cuts u₁, u₂ such that
  (i) u₁ ≠ u₂, and
  (ii) no removable cut is an endpoint of both windows: the set
       {a₁, a₁+k} ∩ {a₂, a₂+k} contains no present interior cut (it may contain
       the non-removable ends 0 or 2m, which is harmless).

*Claim.* From a trapped position, after any Vasya move Petya creates a mass-k ball
on his immediately following move.

*Proof.* It is Vasya's turn, and a merge removes exactly one present cut and adds
none. Let c be the single cut Vasya removes. For each i, Wᵢ remains a live window
(both endpoints present, exactly one interior cut present) **unless** the removed
cut c is one of the three present cuts attached to Wᵢ — an endpoint aᵢ, an endpoint
aᵢ+k, or the lone interior cut uᵢ — because removing any other cut leaves aᵢ, aᵢ+k,
uᵢ all present and adds nothing inside. We case on c.

- **Case 1: c = u₁ (or c = u₂).** Then removing u₁ leaves window [a₁, a₁+k] with
  interior count 0 — Vasya has himself created a mass-k ball, and Petya has won at
  that moment. Symmetric for c = u₂.
- **Case 2: c is an endpoint of W₁ but c is not attached to W₂** (c ∉ {a₂, a₂+k,
  u₂}). Then W₁ is destroyed, but W₂ keeps a₂, a₂+k, u₂ all present and gains no
  interior cut, so W₂ is still live. Petya removes u₂, creating a mass-k ball at
  [a₂, a₂+k].
- **Case 3: symmetric to Case 2** with W₁, W₂ exchanged: W₁ stays live; Petya
  removes u₁.
- **Case 4: c attached to both W₁ and W₂.** Ruled out. By (i) u₁ ≠ u₂, and c is a
  single cut, so c is not both u₁ and u₂; Case 1 handles c ∈ {u₁, u₂}. The only
  remaining way to be attached to both is c ∈ {a₁, a₁+k} ∩ {a₂, a₂+k}. But c is an
  interior cut Vasya removed (hence removable), and condition (ii) says no
  removable cut lies in {a₁, a₁+k} ∩ {a₂, a₂+k}. Contradiction.
- **Case 5: c attached to neither window.** Both W₁, W₂ remain live; Petya removes
  u₁.

In every case some live window survives Vasya's move (or Vasya has already lost),
and Petya removes its lone interior cut, producing a mass-k ball. ∎

**Scaffolding facts (proved/verified).**
- Petya makes his moves on odd cut-counts: exactly **m** merges total. At k=m+1
  the optimal game lasts 2m−1 merges and Petya makes m of them — zero slack, so at
  k=m+1 every Petya move must make progress (verified m=4..7).
- For k ≤ m every Petya first move wins (slack); at k=m+1 the **unique** winning
  first move is the centre cut m (verified m=3..6, /tmp/partb_check.py). So the
  binding case is k = m+1, and no end-anchored greedy can be correct there.

**Lemma B2 (Petya forces a trapped position from the start) — OPEN GAP.**

Target geometry: an interval [L, L+k+1] whose present cuts are exactly
{L, L+1, L+k, L+k+1}. Then W₁ = [L, L+k] (lone interior L+1) and W₂ = [L+1, L+k+1]
(lone interior L+k) are live with distinct interiors and no shared removable
endpoint — a trapped position. To build it Petya must clear the k−2 "shared
interior" cuts {L+2,…,L+k−1} while the 4 frame cuts survive; that is k−2 Petya
merges, with k−2 Vasya merges interleaved trying to break a frame.

What is established: a backward-induction certificate set (positions from which
Petya forces a trapped position or a mass-k ball) equals the true Petya-win set for
all k ≤ m+1 and m = 4..7, and the start lies in it (it lies outside for k = m+2).
Combined with Lemma B1 this *correctly* decides the game for those m. But (1) the
forcing depth grows linearly in m, so the m ≤ 7 fixpoint proves nothing for
m > 100; and (2) no fixed describable greedy realizes the certificate set (five
natural greedy strategies all fail for k near m+1 — prior rounds). The intended
engine — "maintain a family of overlapping targets straddling the centre; when
Vasya breaks one frame, shift the target one step the other way, reusing the
already-cleared shared interior (adjacent targets share k−2 interior cuts)" — is
plausible but we could NOT turn it into an explicit m-uniform potential or pairing
argument checked against all Vasya replies. **This is the genuine open step; we do
not paper over it.**

================================================================================
### Final answer

The characterization is **Petya wins iff k ≤ m+1, Vasya wins iff k ≥ m+2**
(boundary k = m+1 a Petya win, k = m+2 a Vasya win), matching the full minimax for
m = 3..7 and all 1 < k < 2m. Proved this round in full and m-uniformly: the cut
reformulation with correct parity, Lemma A0, the core safety fact (Petya cannot win
out of a no-live position), and Lemma B1 (trapped ⇒ Petya wins). Open: a
self-maintaining Vasya invariant for k ≥ m+2 (J′ shown necessary but NOT
self-maintaining, with an explicit counterexample), and Petya's m-uniform forcing
Lemma B2 for k ≤ m+1. Status: **partial.**

Scripts in /tmp/ reproduce every numeric claim: partb_check.py (threshold, slack,
unique centre move), a_verify.py (Vasya strategy wins on its reachable set,
m=3..7), Jprime_general.py + note_check.py (J′ not self-maintaining;
{0,1,2,3,6,8} counterexample), distinguish.py + findinv.py (J′ necessary but no
clean safe-set characterization).

## Full proof
(absent — Status is partial. Proved in full: Lemma A0, the core safety fact, and
Lemma B1. The two remaining gaps are a self-maintaining Vasya invariant for
k ≥ m+2 and Petya's forcing Lemma B2 for k ≤ m+1.)
