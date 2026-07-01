# china-tst-2026-6

## Status
partial

## Approaches tried

- **Reduction via `b_k = a_k - k` + per-prime bound + two-case combination** — WORKED
  for everything except the crux Key Lemma. This yields, rigorously and in full: the
  residue reformulation (Step 1), the permanent blocking of residues `0` and `p-1`
  (Claim B), distinct residues mod `p` giving `f(p) ≤ p-2` (Claim A), the exact value
  `f(2) = 2` (Claim C), and the conditional combination (Step 6) showing that the Key
  Lemma `f(p) ≤ (p-1)/2` (odd `p`) implies the target. The Key Lemma itself is left
  open. See "Current best" for the exact frontier.

- **Key Lemma via pairing `r ↔ p-r` of used residues** — DEAD END. The idea was: if
  the used residues in `{1,…,p-2}` avoid pairing up as `r` and `p-r`, one gets
  `f(p) ≤ (p-1)/2`. This is FALSE. For `p = 149` the occurrence residues are
  `{73,74,76,77,78,80,82}`; both `73` and `76 = 149-73` occur, so no such pairing
  obstruction exists. (Verified by direct simulation.) Do not reintroduce.

- **Key Lemma via "first occurrence sits at `n ≤ (p-1)/2`" (pointwise window count)** —
  DEAD END. The window mechanism suggests that at the first occurrence of `p` the set
  `{b_k : k<n}` already covers `≥ (p-1)/2` residues, i.e. the first occurrence has
  `n ≳ (p+1)/2`. This pointwise sub-claim is FALSE: for `p = 211` the first occurrence
  is at `n = 104 < 105 = (p-1)/2`. The number of already-covered residues at the first
  few occurrences genuinely exceeds what this bound allows; any correct argument must
  count over the WHOLE run of occurrences, not pointwise. Do not use the pointwise form.

- **Key Lemma via "all occurrences have distinct residues mod `p`" alone** — INSUFFICIENT
  and, taken globally, subtly FALSE as a route to `(p-1)/2`. Claim A gives distinct
  residues *and hence* `f(p) ≤ p-2`, which is rigorous but too weak (see Current best).
  Trying to strengthen distinctness by claiming the `b`-window always has length `< p`
  (so residues sit in one contiguous block) FAILS at "reappearance" occurrences: for
  `p = 67` there is an occurrence at `n = 72` whose `b`-window has length `72 ≥ 67`.
  That occurrence uses residue `5`, disjoint from the main run's residues `{33,…,38}`,
  so distinctness mod `p` still *happens* to hold there, but the contiguous-block
  structure the window argument relies on is broken. Reappearances must be handled
  separately; ignoring them is a fatal gap.

## Current best

**Everything below Step 5 is fully proved.** The main inequality is reduced to a single
open statement.

**What is proved (rigorous):**
1. The substitution `b_k = a_k - k` turns the divisibility condition into a residue
   condition: `a_n = p` iff every prime `q < p` divides `∏_{k<n}(b_k+n)` while `p` does
   not, i.e. iff for every prime `q < p` some `k<n` has `b_k ≡ -n (mod q)`, and no `k<n`
   has `b_k ≡ -n (mod p)`. (Step 1, proved below.)
2. **Claim B:** residues `n ≡ 0` and `n ≡ p-1 (mod p)` are permanently blocked, so every
   occurrence position of `p` has `n mod p ∈ {1,…,p-2}`. (Proved below.)
3. **Claim A:** distinct occurrence positions of `p` have distinct residues mod `p`;
   hence `f(p) ≤ p-2`. (Proved below.)
4. **Claim C:** `f(2) = 2` exactly. (Proved below.)
5. **Step 6 (conditional):** IF `f(p) ≤ (p-1)/2` for every odd prime `p` (the Key Lemma),
   THEN the target inequality
   `∑ f(p_i) ≤ ½(max p_i + ∑ p_i)` holds, including the equality edge case `m=1, S={2}`.
   (Proved below.)

**What is open — the Key Lemma:** for every odd prime `p`, `f(p) ≤ (p-1)/2`.

**Why `f(p) ≤ p-2` (Claim A) is NOT enough** — the Key Lemma with the sharp `(p-1)/2`
bound is essential, not cosmetic. Consider `m = 2` distinct primes `p < q`. The target
requires
`f(p) + f(q) ≤ ½(q + (p+q)) = (p+2q)/2`.
Claim A only gives `f(p)+f(q) ≤ (p-2)+(q-2) = p+q-4`. But
`p+q-4 ≤ (p+2q)/2 ⟺ 2p+2q-8 ≤ p+2q ⟺ p ≤ 8`,
which FAILS for every prime `p > 8`. So `p-2` overshoots the target for large primes;
only the `(p-1)/2` bound closes it. This is the reason the file is `partial` and not
`solved`.

**The most promising open route (recorded, not proved):** the `b`-window / whole-run
residue-counting argument. During a maximal run of occurrences of `p`, the used residues
`{-n mod p}` are forced to lie just above the contiguous block of residues already
covered by `{b_k : k<n}`; counting how many residues are already covered when `p` first
becomes available bounds the number of available residues by `(p-1)/2`. Three coupled
sub-gaps remain: (i) the **distinct-integers lemma** (the values `b_k` are pairwise
distinct — true numerically, unproven); (ii) the **whole-run covered-count bound** (the
naive pointwise "≥ (p-1)/2 covered at first occurrence" is false at `p=211`, so the
count must be amortized over the whole run); (iii) the **reappearance bound** (occurrences
with `b`-window length `≥ p`, e.g. `p=67` at `n=72`, where the contiguous-block structure
breaks and must be bounded separately). Numerically the Key Lemma holds with large slack
for `p > 5` (e.g. `f(67)=7 ≪ 33`), tight only at `p=5` (`f(5)=2=(5-1)/2`).

---

### Full rigorous reduction (Steps 1–4 and Step 6)

Throughout, "the step-`n` product" means `P_n := ∏_{k=1}^{n-1}(a_k + n - k)`, and by
definition `a_n` (for `n ≥ 2`) is the smallest prime not dividing `P_n`. Recall `a_1 = 2`.
For a prime `p`, `f(p)` is the number of indices `n` with `a_n = p`.

**Step 1 — the substitution and residue reformulation.**
Define `b_k = a_k - k` for `k ≥ 1`. Then for any `k < n`,
`a_k + n - k = (a_k - k) + n = b_k + n`.
Hence `P_n = ∏_{k=1}^{n-1}(b_k + n)`. For a prime `p`,
`p ∤ P_n ⟺ b_k + n ≢ 0 (mod p) for all k < n ⟺ b_k ≢ -n (mod p) for all k < n`,
since `p` is prime and divides a product iff it divides some factor. Consequently,
by the minimality defining `a_n`:
`a_n = p ⟺ [for every prime q < p, p_q ∣ P_n, i.e. some k<n has b_k ≡ -n (mod q)]`
`         AND [p ∤ P_n, i.e. no k<n has b_k ≡ -n (mod p)].`   (∗)
This is an exact reformulation, used repeatedly below.

**Step 2 — Claim B: residues `0` and `p-1` are permanently blocked.**
We compute the first two `b`-values. `b_1 = a_1 - 1 = 2 - 1 = 1`. For `a_2`: `P_2 = a_1 + 1 = 3`,
which is odd, so `2 ∤ P_2` and `a_2 = 2`; hence `b_2 = a_2 - 2 = 0`.
Now fix any prime `p` and any `n` with `a_n = p`. Since `2 ≤ p`, we have `n ≥ 2`, so both
`k = 1` and `k = 2` are indices `< n` (for `n ≥ 3`; and `n = 2` gives `a_2 = 2`, `p=2`,
handled by Claim C). Assume `n ≥ 3`. Two cases:
- If `n ≡ 0 (mod p)`, then the factor at `k = 2` is `b_2 + n = 0 + n = n ≡ 0 (mod p)`, so
  `p ∣ P_n`, contradicting `a_n = p` by (∗).
- If `n ≡ p-1 ≡ -1 (mod p)`, then the factor at `k = 1` is `b_1 + n = 1 + n ≡ 0 (mod p)`,
  so `p ∣ P_n`, again a contradiction.
Therefore every occurrence position `n ≥ 3` of `p` satisfies `n mod p ∈ {1,2,…,p-2}`. For
`p = 2` there is no `p-2 ≥ 1` residue class, and `f(2)` is pinned exactly by Claim C, so
Claim B is only needed for odd `p`, where `{1,…,p-2}` is nonempty. ∎(Claim B)

**Step 3 — Claim A: distinct residues mod `p`; hence `f(p) ≤ p-2`.**
Suppose `a_j = a_n = p` with `j < n` (two occurrences of the same prime). At step `n`, the
factor at index `k = j < n` is
`a_j + n - j = p + (n - j)`.
If `n ≡ j (mod p)`, then `n - j ≡ 0 (mod p)`, so `a_j + n - j = p + (n-j) ≡ 0 (mod p)`,
whence `p ∣ P_n`, contradicting `a_n = p` by (∗). Therefore `n ≢ j (mod p)`, i.e. distinct
occurrence positions of `p` have pairwise-distinct residues mod `p`. By Claim B these
residues all lie in `{1,…,p-2}`, a set of size `p-2`. Since the residues are distinct,
`f(p) ≤ p-2`. ∎(Claim A)
(This is the analogue of the crux move "two terms sharing a prime divisor have their
difference divisible by that prime", specialized to the diagonal factor `a_j + n - j`.)

**Step 4 — Claim C: `f(2) = 2` exactly.**
We first show `a_1 = a_2 = 2`. Given: `a_1 = 2`. And `P_2 = a_1 + (2-1) = 3` is odd, so
the smallest prime not dividing `P_2` is `2`, i.e. `a_2 = 2`. Thus `2` occurs at `n=1,2`,
giving `f(2) ≥ 2`.
Now let `n ≥ 3`. Both `k=1` and `k=2` are `< n`, and the corresponding factors are
`b_1 + n = n + 1` and `b_2 + n = n` (using `b_1=1`, `b_2=0` from Step 2). These are the
consecutive integers `n` and `n+1`, so exactly one of them is even; hence `2 ∣ P_n` and
`a_n ≠ 2`. Therefore `2` never occurs at any `n ≥ 3`, so `f(2) = 2` exactly. ∎(Claim C)

**Step 5 — Key Lemma (OPEN).**
Claim: for every odd prime `p`, `f(p) ≤ (p-1)/2`. This is the crux and is left unproven;
see "Approaches tried" and "Current best" for the recorded dead ends and the open route.

**Step 6 — Combination: Key Lemma ⟹ target (fully rigorous, conditional on Step 5).**
Let the given distinct primes be `S = {p_1,…,p_m}`. Write `M = max_i p_i` and `Σ = ∑_i p_i`.
We must show `∑_{i} f(p_i) ≤ ½(M + Σ)`, ASSUMING `f(p) ≤ (p-1)/2` for all odd primes `p`
(Step 5) and `f(2) = 2` (Step 4, proved).

*Case 1: `2 ∉ S`.* Every `p_i` is odd, so by the Key Lemma `f(p_i) ≤ (p_i-1)/2`. Summing,
`∑_i f(p_i) ≤ ∑_i (p_i-1)/2 = (Σ - m)/2 ≤ Σ/2 ≤ (M+Σ)/2`,
where the last step uses `M ≥ 0` (indeed `M ≥ 2`). Done.

*Case 2: `2 ∈ S`.* Say `p_1 = 2` and let the remaining primes `S' = S \ {2}` be the odd
ones. Then, using `f(2) = 2` (Step 4) and the Key Lemma on each odd `p ∈ S'`,
`∑_i f(p_i) = f(2) + ∑_{p ∈ S'} f(p) ≤ 2 + ∑_{p ∈ S'} (p-1)/2`.
Now `∑_{p ∈ S'} (p-1)/2 = (∑_{p∈S'} p - (m-1))/2 = ((Σ - 2) - (m-1))/2 ≤ (Σ-2)/2`.
Hence `∑_i f(p_i) ≤ 2 + (Σ-2)/2 = 1 + Σ/2`.
It remains to check `1 + Σ/2 ≤ (M+Σ)/2`, i.e. `2 + Σ ≤ M + Σ`, i.e. `M ≥ 2`. Since
`2 ∈ S`, `M = max_i p_i ≥ 2`. Done.

*Edge case `m = 1, S = {2}`.* Here `M = Σ = 2`, LHS `= f(2) = 2`, RHS `= ½(2+2) = 2`;
equality holds, consistent with Case 2 (`M = 2` is the boundary). This is the unique
equality case reached by the bound.

In both cases `∑_i f(p_i) ≤ ½(M + Σ)`, so the Key Lemma (Step 5) implies the target. ∎
(conditional)

---

### Summary of the frontier

Proved unconditionally: Steps 1–4 (residue reformulation; Claims A, B, C), giving
`f(p) ≤ p-2` for odd `p` and `f(2) = 2`. Proved conditionally: Step 6, that the Key Lemma
`f(p) ≤ (p-1)/2` implies the full target. Open: Step 5, the Key Lemma. Because `f(p) ≤ p-2`
is provably insufficient (the two-prime computation above), the Key Lemma with the sharp
`(p-1)/2` bound is the essential remaining ingredient, and the problem is not solved.

## Full proof
Not present — Status is `partial`. The main inequality is reduced to the single open Key
Lemma `f(p) ≤ (p-1)/2` (odd `p`); the reduction (Steps 1–4, 6) above is complete and
rigorous, but the Key Lemma is unproved.
