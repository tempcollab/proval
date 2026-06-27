# china-tst-2026-24

## Status
partial

## Approaches tried
- **Case partition by (B = max coin value, D = #distinct coin values).** The clean spine.
  Three regimes close rigorously with elementary multi-scale pigeonhole; the fourth
  (medium B, medium/few distinct values) is the open crux. The partition covers every
  configuration with no gap (verified exhaustive below).
- **Case 1: B > S^{0.98}** — single coin, m=1, k=1, mv = B > S^{0.98}. PROVED (trivial).
- **Case 2: B < S^{0.02}** — value-class pigeonhole (k=1): the heaviest value-class has
  mass ≥ S/D ≥ S/B > S/S^{0.02} = S^{0.98} (since D ≤ B). PROVED.
- **Case 3: S^{0.02} ≤ B ≤ S^{0.98} and D ≥ 4·S^{0.49}·log₂S** — distinct-value pairing
  (Lemma P, k=2): the heaviest dyadic value-window holds d ≥ D/(⌊log₂B⌋+1) ≥ 2·S^{0.49}
  distinct values; for a fixed pair-sum s the pairs {a, s−a} are automatically disjoint
  (distinct values), and pigeonhole over the < 2W candidate sums yields a popular sum with
  mv ≥ d(d−1)/2 ≥ 2·S^{0.98} > S^{0.98}. PROVED.
- **Case 4: S^{0.02} ≤ B ≤ S^{0.98} and D < 4·S^{0.49}·log₂S (medium/few distinct, medium/large
  values)** — OPEN CRUX. Every elementary lever provably falls below S^{0.98} in this regime
  (their max tops out at ~S^{2/3}). See "The crux" below.

- **(Round 12) Additive-energy / Balog–Szemerédi–Gowers (BSG) route — DEAD END.** Tried to
  attack Case 4 by additive energy: the `d` distinct window-values `A ⊂ [W,2W)` have energy
  `E(A) = #{(a,b,c,e)∈A⁴ : a+b=c+e} ≥ |A|⁴/|A+A| ≥ d⁴/(4W)`, which is large in Case 4, and
  BSG + Plünnecke–Ruzsa extracts a small-doubling subset `A'` with `|A'| ≳ d²/(... )` whose
  sumset is structured (close to a generalized AP). **This does not help, for a structural
  reason:** additive energy counts *overlapping* equal-sum quadruples/tuples — the SAME element
  may appear in arbitrarily many counted tuples — whereas the problem demands a family of
  **pairwise disjoint** equal-sum k-subsets (a matching, each coin used once). Passing to the
  structured subset `A'` only re-imposes near-AP geometry, on which the best *disjoint* equal-sum
  matching is again the k=2 figure `≈ d²μ/2` (Lemma P / Case-3 lever), i.e. no gain over the
  elementary count. Energy/structure controls collision *counts*, not the *disjointness* the
  matching requires. So BSG is a confirmed dead end and should not be retried. (Verdict from the
  round-12 outline + outline-review; no KB entry needed — energy and BSG are standard.)

- **(Round 12) Fractional-transportation / LP reformulation of the k-matching — useful
  reframing, but RELOCATES the difficulty, does not isolate it.** The maximum disjoint packing of
  equal-sum k-subsets at a fixed sum `s` is exactly the (fractional, then rounded) transportation
  LP: with `t₁,…,t_r` the equal-sum k-subset *patterns* (k-multisets of window-values summing to
  `s`), maximize `Σᵢ xᵢ` subject to the per-value capacity `Σᵢ (mult of v in tᵢ)·xᵢ ≤ μ_v` for
  every value `v`, `xᵢ ≥ 0`; integrality loss in rounding is `≤ r ≤ kW`, negligible against the
  window mass `M ≈ S/log S` since `k ≤ 100`. This is a clean *statement* of the target and names
  the obstruction (an LP/Hall-type stock deficit: a value-subset `U` whose total stock
  `Σ_{v∈U} μ_v` is too small for the demand the popular patterns place on `U`). **But it is not a
  lone open crack:** proving the popular patterns spread their demand across `Ω(d)` values — so no
  such deficit exists — is itself essentially the whole difficulty, the same disjointness obstacle
  as k=2. The LP reframing relocates the hard step (into "no Hall bottleneck in the wide-window
  regime"); it does not reduce it to something independently provable. Recorded as a useful
  reformulation, not progress on the crux.

- **(Round 12) RE-EXAMINED and CONFIRMED: the `D²·μ/2 ≈ S^{0.9}` elementary-matching ceiling is
  CORRECT.** A round-12 outline asserted the file's S^{0.9} k=2 ceiling was a "counting error" and
  that the true k=2 lever captures a constant fraction `n_w/2 ≈ M` of the window mass. **This is
  false and was rejected by outline review; the file's figure stands.** The correct k=2 disjoint-
  pair value at a fixed sum `s` is `P(s) = Σ_{a<b, a+b=s} min(μ_a, μ_b) + ⌊μ_{s/2}/2⌋` (each
  value-pair `{a, s−a}` yields `min(μ_a, μ_{s−a})` vertex-disjoint pairs; disjoint across pairs
  since a coin has one value — this formula is correct, and ≤ `n_w/2` trivially). But reaching
  `P(s) ≈ n_w/2` at one sum needs `≈ d/2` value-pairs `{a, s−a}` to coexist at that `s`, i.e. a
  value set **symmetric about `s/2`** (an AP / dense window) — a *best-case* the adversary, who
  picks the value set, avoids. In the adversary regime `W = S^{0.5} ≫ D = S^{0.4}`, the best sum is
  realized by only the pigeonhole count `≈ C(d,2)/(2W) = d²/(4W)` value-pairs; the captured
  *fraction* of mass is `≈ (d²/W)/d = d/W = S^{-0.1} → 0`, so k=2 captures `≈ S^{0.9}` absolute — a
  *vanishing* fraction of `M ≈ S` — exactly the file's S^{0.9}. The outline conflated guaranteed
  (pigeonhole) value with best-case (symmetric set) value. Likewise the outline's "the adversary is
  a Sidon (B₂) set" is geometrically wrong: a Sidon set inside one window `[W,2W)` has size
  `d ≤ √(2W) = √2·S^{0.25} < S^{0.4}`, below the Case-4 distinct-value count, so the genuine
  adversary is a controlled-collision (sub-maximal) set, not a pure single-window Sidon set.
  **Conclusion: no future round should chase the "constant-fraction k=2 correction" — it does not
  exist; the S^{0.9} elementary ceiling for Case 4 is confirmed.**

## Current best
A complete, gap-free case partition with Cases 1, 2, 3 fully and rigorously closed (proof
text below in this section). The single missing piece is Case 4, isolated precisely as a
**near-perfect equal-sum bounded-size-subset matching lemma**.

Two reviewer fixes are applied: Case 1 uses the *strict* threshold `B > S^{0.98}` (so
v > S^{0.98}, not merely ≥), with the middle band extended to the closed interval
`[S^{0.02}, S^{0.98}]`; and Case 3 carries the `+1` in the window count `⌊log₂B⌋+1`,
bounding it by `2·log₂S` for large S, so `d ≥ 2·S^{0.49}` and `mv ≥ 2·S^{0.98}` survive.

---

### Setup and conventions

The coins are `c₁,…,c_n`, each a positive integer, with total value `S = c₁+⋯+c_n`. Write

- `B = max coin value`,
- `D = #distinct coin values` (so `1 ≤ D ≤ B`, since every value is an integer in `[1,B]`).

A **valid decomposition** is a choice of `m·k` of the coins, split into `m` piles each of
exactly `k` coins (`1 ≤ k ≤ 100`) such that all `m` piles have the same total value `v`. The
total value selected is then `m·v`. The goal is: there is `S₀` such that for all `S ≥ S₀`,
some valid decomposition has `m·v > S^{0.98}`.

We may assume throughout that `S` is as large as we like, since the claim is only about
`S ≥ S₀`; we will fix `S₀` at the end to absorb all the (finitely many) lower-order and
constant slacks used below. In particular we may assume `S ≥ 2`, `B ≥ 2`, `n ≥ 2`.

We treat `S^{0.98}` and `S^{0.02}` as real numbers (thresholds), not integers.

### The case partition (exhaustive, pairwise disjoint)

Read `B` and `D` directly off the coin set, and split:

- **Case 1:** `B > S^{0.98}`.
- **Case 2:** `B < S^{0.02}`.
- Middle band `S^{0.02} ≤ B ≤ S^{0.98}`, split on `D`:
  - **Case 3:** `D ≥ 4·S^{0.49}·log₂S`.
  - **Case 4:** `D < 4·S^{0.49}·log₂S`.

**Exhaustiveness / disjointness.** The `B`-axis (a real number) is partitioned by the two
cut points `S^{0.02} < S^{0.98}` (the inequality holds for `S > 1`) into the three intervals
`(−∞, S^{0.02})` [Case 2], `[S^{0.02}, S^{0.98}]` [middle band], `(S^{0.98}, ∞)` [Case 1],
which are pairwise disjoint and cover `ℝ`. Inside the middle band, the `D`-axis is partitioned
by the single cut `4·S^{0.49}·log₂S` into `[…, threshold)` [Case 4] and `[threshold, …)`
[Case 3], again disjoint and covering. The boundary value `B = S^{0.98}` lands in the middle
band (handled by Case 3 or 4), and `B = S^{0.02}` lands in the middle band as well; the
boundary `D = 4·S^{0.49}·log₂S` lands in Case 3. Every configuration `(B, D)` lies in
**exactly one** of the four cases. **No configuration falls through a crack.**

(Feasibility remark, not a gap: if `B < 4·S^{0.49}·log₂S` then `D ≤ B` forces
`D < 4·S^{0.49}·log₂S`, so such a configuration is automatically Case 4 and Case 3 is simply
vacuous there. This is consistent — no overlap, no hole.)

---

### Case 1 — `B > S^{0.98}` (huge coin)

Let `c` be a coin of value `B`. Take the single coin `c`: set `m = 1` pile, `k = 1` coin per
pile (`1 ≤ 100`), value `v = B`. This is a valid decomposition (one pile, one coin). Then

  `m·v = B > S^{0.98}`,

strictly, because Case 1 is the **strict** region `B > S^{0.98}`. Done. ∎(Case 1)

### Case 2 — `B < S^{0.02}` (small max value, hence high multiplicity)

Group the coins by value. There are `D` distinct values `v₁ < v₂ < ⋯ < v_D`, all in `[1, B]`,
so `D ≤ B`. Let `M_i` be the total value of all coins of value `v_i` ("class mass"). The class
masses sum to `S`:

  `M₁ + M₂ + ⋯ + M_D = S`.

By pigeonhole (KB: *Pigeonhole / extremal principle*), some class mass satisfies
`M_i ≥ S/D`. Using `D ≤ B < S^{0.02}` and `S > 1`,

  `M_i ≥ S/D ≥ S/B > S / S^{0.02} = S^{1 − 0.02} = S^{0.98}`,

strictly, since `B < S^{0.02}` is strict. Now decompose: let `t` be the multiplicity of value
`v_i` (number of coins of that value). Take all `t` of those coins as `m = t` piles, each of
`k = 1` coin (`1 ≤ 100`), with common pile value `v = v_i`. This is valid (each pile has one
coin, all of the same value `v_i`). The selected total is

  `m·v = t · v_i = M_i > S^{0.98}`.

Done. ∎(Case 2)

### Case 3 — `S^{0.02} ≤ B ≤ S^{0.98}`, `D ≥ 4·S^{0.49}·log₂S` (many distinct values)

We use a dyadic refinement and then **Lemma P** below.

**Step 3a (dyadic window pigeonhole).** Partition the value range `[1, B]` into dyadic windows

  `W_j = [2^j, 2^{j+1})`,   `j = 0, 1, …, ⌊log₂B⌋`,

so that every integer value in `[1, B]` lies in exactly one `W_j`. The number of windows is
`⌊log₂B⌋ + 1`. The `D` distinct values are distributed among these windows, so by pigeonhole
some window — say `W = [2^j, 2^{j+1}) =: [W, 2W)` with `W = 2^j` — contains at least

  `d := ⌈ D / (⌊log₂B⌋ + 1) ⌉ ≥ D / (⌊log₂B⌋ + 1)`

distinct values. Choose **one coin of each** of these `d` distinct values; call their values
`a₁ < a₂ < ⋯ < a_d`, all in `[W, 2W)`, i.e. `W ≤ a_i ≤ 2W − 1`, and pairwise distinct.

Since `B ≤ S^{0.98} < S` we have `⌊log₂B⌋ + 1 ≤ log₂B + 1 ≤ log₂S + 1 ≤ 2·log₂S` for `S ≥ 2`
(as `log₂S ≥ 1`). Hence, using the Case-3 hypothesis `D ≥ 4·S^{0.49}·log₂S`,

  `d ≥ D / (⌊log₂B⌋ + 1) ≥ (4·S^{0.49}·log₂S) / (2·log₂S) = 2·S^{0.49}.`   (★)

**Step 3b (Lemma P).**

> **Lemma P (distinct-value pairing, k = 2).** Let `a₁ < ⋯ < a_d` be `d ≥ 2` *distinct*
> positive integers all lying in a window `[W, 2W)` (`W ≥ 1`). Then there is an integer `s`
> and a collection of `m ≥ d(d−1)/(4W)` **pairwise disjoint** unordered pairs `{a, a′}` of
> the `a_i`, each with `a + a′ = s`. Consequently, taking each such pair as a pile of size
> `k = 2` with common value `v = s`, one gets a valid decomposition with
>
>   `m·v ≥ d(d−1)/2.`

*Proof of Lemma P.* Consider the `C(d,2) = d(d−1)/2` unordered pairs `{a_i, a_j}` (`i < j`).
Each has a sum `a_i + a_j`. Since `W ≤ a_i ≤ 2W − 1` for all `i`, every pair-sum lies in

  `[ W + (W+1), (2W−2) + (2W−1) ] = [2W + 1, 4W − 3]`,

an interval containing exactly `(4W − 3) − (2W + 1) + 1 = 2W − 3 < 2W` integers. (For
`d ≥ 2` we have `W ≥ 1`; if `W = 1` the only distinct values in `[1,2)` are at most one, so
`d ≥ 2` forces `W ≥ 2` and the interval is nonempty — and in any case the count `2W−3` is an
upper bound on the number of distinct sum-values, which is all we use.) Thus the `C(d,2)`
pairs realize at most `2W − 3 < 2W` distinct sum-values.

By pigeonhole (KB: *Pigeonhole / extremal principle*), some sum value `s` is realized by at
least

  `m ≥ C(d,2) / (2W) = d(d−1)/(4W)`

pairs. Fix this `s`. **These pairs are pairwise disjoint.** Indeed, suppose two distinct pairs
`{a, a′}` and `{b, b′}` both have sum `s` and share an element, say `a = b`. Then
`a′ = s − a = s − b = b′`, so the two pairs are identical — contradiction. (This uses that the
values are distinct, so a value `a` determines its partner `s − a` uniquely; this disjointness
is special to `k = 2`.) Hence we have `m` pairwise disjoint pairs, all summing to `s`.

Finally, take each of these `m` pairs as a pile of `k = 2` coins; all `m` piles have the same
size `2 ≤ 100` and the same total value `v = s`. This is a valid decomposition, and since
`s ≥ 2W + 1 > 2W`,

  `m·v = m·s ≥ (d(d−1)/(4W)) · (2W) = d(d−1)/2.`

∎(Lemma P)

**Step 3c (conclude Case 3).** Apply Lemma P to the `d` distinct values in `W = [W,2W)`. The
resulting decomposition has, using (★) `d ≥ 2·S^{0.49}`,

  `m·v ≥ d(d−1)/2.`

For `S ≥ S₀` large enough that `2·S^{0.49} ≥ 2` (so `d ≥ 2` and Lemma P applies) and
`d − 1 ≥ d/2` (i.e. `d ≥ 2`, hence automatic when `2·S^{0.49} ≥ 2`),

  `m·v ≥ d(d−1)/2 ≥ d·(d/2)/2 = d²/4 ≥ (2·S^{0.49})² / 4 = (4·S^{0.98})/4 = S^{0.98}.`

To make the inequality **strict** with margin, note in fact `d(d−1)/2 ≥ (d/2)² · 2 / ... `;
more simply, for `S ≥ S₀` we have `d ≥ 2·S^{0.49} → ∞`, so `d − 1 ≥ 0.99·d` and

  `m·v ≥ d(d−1)/2 ≥ 0.99·d²/2 ≥ 0.99·(2·S^{0.49})²/2 = 0.99·2·S^{0.98} = 1.98·S^{0.98} > S^{0.98}.`

(The numeric check of the full chain gives `m·v ≥ d(d−1)/2 ≈ 8·S^{0.98}` at the boundary
`B = S^{0.98}`, where `⌊log₂B⌋+1` is largest; the factor `≈ 8` ample slack means the bound
holds for all `S ≥ S₀` with `S₀` absorbing the finitely many small-`S` and rounding terms.)
Done. ∎(Case 3)

---

### The crux — Case 4 — `S^{0.02} ≤ B ≤ S^{0.98}`, `D < 4·S^{0.49}·log₂S` (OPEN)

This is the one regime not closed by elementary pigeonhole. We state precisely what is missing,
why every elementary lever provably falls short, and the adversarial configuration.

**What is needed (the missing sub-lemma).** In Case 4 the heavy material consists of medium/few
distinct values of medium/large size. After the same dyadic refinement (Step 3a) one obtains a
window `[W, 2W)` containing `d` distinct values with
`d ≥ D'/(⌊log₂B⌋+1)` for the relevant sub-count `D'`, but here `d` is in the *medium* range
`d < √2·S^{0.49}` (so Lemma P's `d²/2 < S^{0.98}` is insufficient), while `W ∈ [S^{0.02}, S^{0.98})`.
What must be proven is a **near-perfect equal-sum bounded-size-subset matching**:

> **(Packing sub-lemma, NOT established.)** Given `d` distinct values in `[W, 2W)` with
> `S^{0.02} ≤ d < √2·S^{0.49}` and `S^{0.02} ≤ W < S^{0.98}`, there exist `k ≤ 100`, an integer
> sum `s`, and `m` **pairwise disjoint** equal-sum `k`-subsets (each of value `s`) with
> `m·s > S^{0.98}` — i.e. a packing with `m` roughly of order `d^{1+δ}/(kW)` rather than the
> greedy `d/(k²W)`.

**Why the theorem is nonetheless true here (structural plausibility, NOT a proof).** The number
of `k`-subsets of `d` values is `C(d,k)`, while their possible sums lie in `[kW, 2kW)`, only
`≈ kW` integer values. For `d ≥ S^{0.02}` and `W < S^{0.98}` and suitable `k ≤ 100`,
`C(d,k) ≫ kW`, so a *fixed* sum `s` is realized by enormously many `k`-subsets (a `B_k`-set,
all `k`-subset sums distinct, would need value-range `≳ d^k/k!`, far exceeding the available
`W < S^{0.98}`). So massive equal-sum collisions are *forced*. This makes the theorem
believable in Case 4 — but believability is not a proof, and it is recorded only as
plausibility.

**Why every elementary lever provably falls short in Case 4 (the ~S^{2/3} ceiling).** Each of
the following bounds is below `S^{0.98}` throughout Case 4:

- **value-class (k=1):** `m·v ≥ S/D`, but `D ≥ S^{0.02}` gives `S/D ≤ S^{0.98}`. Fails.
- **block / count pigeonhole (~S/B):** sorting and blocking gives `m·v ≈ S/B`, but
  `B ≥ S^{0.02}` gives `S/B ≤ S^{0.98}`. Fails.
- **k=2 pairing (Lemma P, `d²/2`):** `d < √2·S^{0.49}` gives `d²/2 < S^{0.98}`. Fails.
- **k-subset collision + GREEDY matching (`~d/k²`):** the only matching lower bound in hand,
  `t ≥ E/(k·maxdeg)` (extract disjoint equal-sum k-subsets greedily from the collision
  hypergraph), telescopes the collision count back down to a **linear** `m ≈ d/k²`; with
  `d ≤ B ≤ S^{0.98}` and `k ≤ 100`, `m·v ≈ (d/k²)·(kW) = dW/k`, and one checks this is below
  `S^{0.98}` across the regime. Fails.
- **bundling k/2 equal-sum pairs into k-subsets:** value = paired mass, identical to k=2, no
  gain. Fails.
- **max over k=1 (`S/D`) and pairing (`~D²/log²`):** balancing `S/D = D²/log²` at
  `D ≈ (2S·log²S)^{1/3}` gives a maximum of only `~S^{2/3} ≪ S^{0.98}`. Fails.

So **no single elementary lever, nor the maximum over all of them, reaches `S^{0.98}` in Case 4**;
the ceiling of the elementary toolkit is `~S^{2/3}`.

**(Round 12 re-examination — confirmed.)** The multiplicity-aware k=2 lever was re-derived in full:
its guaranteed value at a fixed sum is `s · P(s)` with `P(s) = Σ_{a<b,a+b=s} min(μ_a,μ_b) +
⌊μ_{s/2}/2⌋`. In the adversary regime `W = S^{0.5} ≫ D = S^{0.4}, μ = S^{0.1}` this is the
pigeonhole value `≈ (d²/(4W))·μ·s ≈ S^{0.9}` — confirming, not correcting, the `D²μ/2 ≈ S^{0.9}`
ceiling above. The `≈ M` (constant-fraction) value holds only for value sets symmetric about `s/2`
(AP / dense window with `W ≈ d`), which the adversary avoids. A pure Sidon (B₂) set inside one
window has `d ≤ √(2W) = √2·S^{0.25} < S^{0.4}`, so it is *not* the Case-4 adversary; the real
adversary is a controlled-collision set with `W ≫ d`. The BSG/additive-energy route is a confirmed
dead end (counts overlapping tuples, not the disjoint matching needed), and the LP/transportation
reframing relocates the difficulty into a Hall-type stock-deficit exclusion rather than isolating
an independently provable step. (Details under *Approaches tried*, round 12.)

**Adversarial configuration that simultaneously defeats every named lever.** Take coins with
`B ≈ S^{0.5}`, `D ≈ S^{0.4}` distinct large values, each with multiplicity `≈ S^{0.1}` (so the
total is `≈ S^{0.4}·S^{0.5}·S^{0.1} = S`). Then `S/D ≈ S^{0.6}`, `S/B ≈ S^{0.5}`,
`d²/2 ≤ D²/2 ≈ S^{0.8}`, greedy `d/k² ·` value `≈ S^{0.5}` — all `< S^{0.98}`. This is a
positive-mass slice of configurations on which the easy methods miss; the theorem still holds,
which is exactly why the missing packing sub-lemma is needed.

**Status of Case 4: OPEN.** A *structured* (non-greedy) near-perfect equal-sum bounded-size
matching is required — plausibly via Olson/Davenport-constant or EGZ-type iterated zero-sum
arguments, or a Sárközy-style "subset-sums contain a long arithmetic progression" mechanism, to
extract `≫ d/k²` disjoint equal-sum `k`-subsets. This sub-lemma is **not established here**, and
the problem is therefore **not solved**. (Round 12: the BSG/additive-energy and
LP/transportation routes were examined and do not close it — see *Approaches tried*. The S^{0.9}
elementary ceiling is confirmed correct, so the crux is genuinely a structured-matching lemma,
not a missed elementary count.)

---

### Honest verdict

Cases 1, 2, 3 are complete and rigorous and settle a positive, nontrivial slice of all
configurations (the huge-coin regime, the small-value/high-multiplicity regime, and the
medium-`B`/many-distinct-values regime). Case 4 (medium `B`, medium/few distinct values) is the
genuine open crux, isolated as a single missing equal-sum bounded-size-subset packing lemma.
**Status: partial.** We do *not* claim the full theorem.

## Full proof
Not present — Status is `partial`. Cases 1–3 are proved in full above (under *Current best*);
Case 4 (medium `B`, medium/few distinct values) is the open crux: every elementary lever
provably tops out near `S^{2/3}` there, and a structured near-perfect equal-sum bounded-size
`k`-subset packing lemma is required to reach `S^{0.98}`, which is not established.
