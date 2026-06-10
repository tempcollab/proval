## Status
solved

## Approaches tried
- Triangular-number / 2-adic valuation argument (contrapositive chain
  H ⟹ "n is a power of 2" ⟹ C) — worked. The position after `j` jumps is the
  triangular number `T_j = j(j+1)/2 (mod n)`; collisions are characterized by
  `2n | (j-k)(j+k+1)`. Explicit early collisions exist whenever `n` is not a
  power of 2 (odd `n`: palindrome pair; even non-power-of-2: split the odd part
  and the 2-power between the two factors), while no collision at all occurs when
  `n = 2^s` (a size bound forces the full 2-power onto a factor too small to
  carry it). All numeric claims independently verified by computation for
  `n = 3, …, 3000`.

## Current best
Complete rigorous proof, given below.

## Full proof

### Setup and reformulation

Label the vertices of the regular `n`-gon `0, 1, …, n-1` clockwise, and place
Zagi at vertex `0`. The `i`-th jump moves Zagi `i` edges clockwise, i.e. adds `i`
to the current position modulo `n`. Hence after `j` jumps (`0 ≤ j ≤ n-1`) Zagi
sits at the vertex
$$
S_j \;=\; \big(1 + 2 + \cdots + j\big) \bmod n \;=\; \frac{j(j+1)}{2} \bmod n,
$$
the empty sum giving `S_0 = 0`. Write `T_j := j(j+1)/2` for the `j`-th triangular
number, so that `S_j = T_j \bmod n`. (KB: *Cyclic / triangular-number structure* —
positions are partial sums `Σ i = k(k+1)/2 mod n`, and distinctness of visited
vertices is distinctness of these partial sums in `ℤ/nℤ`.)

For an integer index range, Zagi visits `r+1` **distinct** vertices in the first
`r` jumps `0, 1, …, r` if and only if the residues `T_0, T_1, …, T_r` are
pairwise distinct modulo `n` (the `r+1` positions `S_0, …, S_r` are then all
different vertices, and conversely).

Set `m := ⌈n/2⌉`. The problem asks us to prove the implication

- **Hypothesis `H`**: `T_0, T_1, …, T_m` are pairwise distinct mod `n`
  (Zagi has visited `m+1 = ⌈n/2⌉ + 1` distinct vertices after `⌈n/2⌉` jumps);

- **Conclusion `C`**: `T_0, T_1, …, T_{n-1}` are pairwise distinct mod `n`
  (Zagi has visited all `n` vertices after `n-1` jumps).

We prove `H ⟹ C` by establishing a two-link chain through the property
"`n` is a power of `2`":

1. If `n` is **not** a power of `2`, then `H` is **false** (Cases A and B below).
   Contrapositively, `H ⟹ ` "`n` is a power of `2`".
2. If `n` **is** a power of `2`, then `C` is **true** (Case C below).

Composing, `H ⟹ ` "`n` is a power of `2`" `⟹ C`, which is exactly `H ⟹ C`.
(We never assume the converse of either link; only the forward chain is used.)

Throughout, indices `j, k` range over `{0, 1, …, n-1}`.

---

### Collision Lemma

**Lemma.** Let `n ≥ 1` and let `0 ≤ k < j ≤ n-1` be integers. Then
$$
T_j \equiv T_k \pmod{n}
\qquad\Longleftrightarrow\qquad
2n \mid (j-k)(j+k+1).
$$
Moreover, of the two integers `j-k` and `j+k+1`, **exactly one is even**.

*Proof.* First the parity statement. Their sum is
$$
(j-k) + (j+k+1) = 2j + 1,
$$
which is odd. Two integers whose sum is odd have opposite parities, so exactly
one of `j-k`, `j+k+1` is even and the other is odd. In particular their product
`(j-k)(j+k+1)` is even, so
$$
T_j - T_k \;=\; \frac{j(j+1)}{2} - \frac{k(k+1)}{2}
\;=\; \frac{j^2 + j - k^2 - k}{2}
\;=\; \frac{(j-k)(j+k) + (j-k)}{2}
\;=\; \frac{(j-k)(j+k+1)}{2}
$$
is an integer (we used `j^2 - k^2 = (j-k)(j+k)` and factored out `j-k`).

Now, by definition of congruence,
$$
T_j \equiv T_k \pmod{n}
\iff n \mid (T_j - T_k)
\iff n \;\Big|\; \frac{(j-k)(j+k+1)}{2}.
$$
Let `P := (j-k)(j+k+1)`, an even integer, and write `P = 2Q` with `Q = P/2 ∈ ℤ`
(this is `T_j - T_k`). Then
$$
n \mid Q \iff 2n \mid 2Q = P,
$$
because for any integers `n, Q`, `n | Q` is equivalent to `2n | 2Q` (multiply /
divide the divisibility relation by the common factor `2`). Hence
`T_j ≡ T_k (mod n) ⟺ 2n | (j-k)(j+k+1)`, as claimed. ∎

(KB: *Modular arithmetic, CRT* for the congruence-to-divisibility reduction;
*Divisor analysis* for the parity/2-adic bookkeeping of the two factors. The
clean "`n | Q ⟺ 2n | 2Q`" step is exactly where a stray factor of `2` would
otherwise creep in; we have made it explicit.)

A useful consequence used below: a **collision** is a pair `0 ≤ k < j ≤ n-1`
with `T_j ≡ T_k (mod n)`. If there is a collision with both indices `k, j` in
`{0, 1, …, m}`, then among the `m+1` residues `T_0, …, T_m` at least two are
equal, so they take at most `m` distinct values; hence `H` is **false**. Thus,
to disprove `H` it suffices to exhibit a single collision pair `(k, j)` with
`0 ≤ k < j ≤ m`.

---

### Case partition

Every integer `n ≥ 3` falls into exactly one of:

- **Case A:** `n` is odd, `n ≥ 3`. Write `n = 2l+1` with `l ≥ 1`.
- **Case B:** `n` is even but not a power of `2`. Write `n = 2^a · q` with
  `a ≥ 1` and `q` odd, `q ≥ 3`. (Here `q` is the odd part of `n`; it must not be
  confused with `m = ⌈n/2⌉`.)
- **Case C:** `n` is a power of `2`. Since `n ≥ 3`, write `n = 2^s` with `s ≥ 2`.

These three are clearly pairwise disjoint (a number is odd or even, and an even
number either is or is not a power of `2`) and exhaustive. Cases A and B prove
"`n` not a power of `2` ⟹ `¬H`"; Case C proves "`n` a power of `2` ⟹ `C`".

Note for later: for these `n`,
$$
m = \lceil n/2 \rceil =
\begin{cases}
\dfrac{n+1}{2} = l+1, & n = 2l+1 \text{ odd},\\[4pt]
\dfrac{n}{2}, & n \text{ even}.
\end{cases}
$$

---

### Case A — `n` odd, `n = 2l+1` with `l ≥ 1`

Take the pair
$$
k = l - 1, \qquad j = l + 1.
$$
Since `l ≥ 1` we have `k = l-1 ≥ 0`, and `j = l+1 > l-1 = k`, so `0 ≤ k < j`.
Also `j = l+1 = m = ⌈n/2⌉`, hence both indices lie in `{0, 1, …, m}` and in
particular `j ≤ n-1` (as `m ≤ n-1` for `n ≥ 2`). Now
$$
j - k = (l+1) - (l-1) = 2,
\qquad
j + k + 1 = (l+1) + (l-1) + 1 = 2l + 1 = n,
$$
so
$$
(j-k)(j+k+1) = 2 \cdot n = 2n.
$$
By the Collision Lemma, `2n | (j-k)(j+k+1)` (indeed they are equal), so
`T_j ≡ T_k (mod n)`. This is a collision with both indices in `{0, …, m}`, so
`H` is false.

(For example, `n = 3` gives `l = 1`, `k = 0`, `j = 2`, and indeed `T_0 = 0`,
`T_2 = 3 ≡ 0 (mod 3)`.) ∎(Case A)

---

### Case B — `n` even but not a power of `2`, `n = 2^a · q`, `a ≥ 1`, `q` odd `≥ 3`

(Recall `q` is the odd part of `n`, distinct from `m = ⌈n/2⌉ = n/2`.)

Set `p := 2^{a+1}`, so `2n = 2^{a+1} · q = p · q`. Note `p` is even and `q` is
odd, hence `p ≠ q`; so exactly one of the two strict inequalities `q < p` or
`q > p` holds. We split accordingly and in each sub-case factor `2n = p·q` into
the two quantities `j-k` and `j+k+1`, assigning the **even** quantity the value
`p` and the **odd** quantity the value `q`.

**Sub-case B1: `q < p`.** Put
$$
j = \frac{p - 1 + q}{2}, \qquad k = \frac{p - 1 - q}{2}.
$$

*Integrality.* `p = 2^{a+1}` is even, so `p - 1` is odd; `q` is odd. The sum and
difference of two odd numbers are even, so both `p-1+q` and `p-1-q` are even,
making `j` and `k` integers.

*Range and order.* Since `q < p`, we have `p - 1 - q ≥ p - 1 - (p-1) = 0`
(more precisely `q ≤ p-1` because `q,p` are integers with `q<p`), so
`k = (p-1-q)/2 ≥ 0`. Also `j - k = q ≥ 3 > 0`, so `j > k`.

*Product and collision.*
$$
j - k = \frac{(p-1+q) - (p-1-q)}{2} = \frac{2q}{2} = q \quad(\text{odd}),
$$
$$
j + k + 1 = \frac{(p-1+q) + (p-1-q)}{2} + 1 = \frac{2(p-1)}{2} + 1 = (p-1)+1 = p
\quad(\text{even}),
$$
so `(j-k)(j+k+1) = q·p = 2n`. By the Collision Lemma, `T_j ≡ T_k (mod n)`.

*Index bound `j ≤ ⌈n/2⌉ = n/2`.* We must check `j ≤ n/2`, i.e.
`p - 1 + q ≤ n = 2^a · q`. Equivalently
$$
p - 1 \le (2^a - 1)\, q, \qquad\text{i.e.}\qquad 2^{a+1} - 1 \le (2^a - 1)\, q.
$$
Since `q ≥ 3` and `a ≥ 1` (so `2^a - 1 ≥ 1 > 0`),
$$
(2^a - 1)\, q \;\ge\; (2^a - 1)\cdot 3 \;=\; 3\cdot 2^a - 3.
$$
It therefore suffices to show `3·2^a - 3 ≥ 2^{a+1} - 1`, i.e.
`3·2^a - 3 ≥ 2·2^a - 1`, i.e. `2^a ≥ 2`, which holds because `a ≥ 1`. Hence
`j ≤ n/2 = ⌈n/2⌉`, so both indices `k, j` lie in `{0, …, ⌈n/2⌉}`.

**Sub-case B2: `q > p`.** Put
$$
j = \frac{q - 1 + p}{2}, \qquad k = \frac{q - 1 - p}{2}.
$$

*Integrality.* `q` is odd, so `q - 1` is even; `p` is even. The sum and
difference of two even numbers are even, so `q-1+p` and `q-1-p` are even, making
`j, k` integers.

*Range and order.* Since `q > p`, `q - 1 - p ≥ 0` (as `q, p` integers with
`q > p` give `q - 1 ≥ p`), so `k = (q-1-p)/2 ≥ 0`. Also `j - k = p = 2^{a+1} ≥ 4
> 0`, so `j > k`.

*Product and collision.*
$$
j - k = \frac{(q-1+p) - (q-1-p)}{2} = \frac{2p}{2} = p \quad(\text{even}),
$$
$$
j + k + 1 = \frac{(q-1+p)+(q-1-p)}{2} + 1 = \frac{2(q-1)}{2} + 1 = (q-1)+1 = q
\quad(\text{odd}),
$$
so `(j-k)(j+k+1) = p·q = 2n`, and by the Collision Lemma `T_j ≡ T_k (mod n)`.

*Index bound `j ≤ ⌈n/2⌉ = n/2`.* We need `j ≤ n/2`, i.e. `q - 1 + p ≤ n = 2^a · q`,
equivalently
$$
p - 1 \le (2^a - 1)\, q.
$$
This is the **same** inequality as in B1, and the identical computation
(`q ≥ 3`, `a ≥ 1`, `2^a ≥ 2`) gives `2^{a+1} - 1 ≤ (2^a-1)q`. Hence `j ≤ n/2 = ⌈n/2⌉`.

In both sub-cases we have produced a collision pair `(k, j)` with
`0 ≤ k < j ≤ ⌈n/2⌉`, so `H` is false.

(For example `n = 6 = 2·3`: `a = 1`, `q = 3`, `p = 4`, and `q < p`, so B1 gives
`k = 0`, `j = 3 = ⌈6/2⌉`; indeed `T_0 = 0`, `T_3 = 6 ≡ 0 (mod 6)`. The index
bound is tight here, `j = ⌈n/2⌉`, which is permitted since the hypothesis range
`{0, …, ⌈n/2⌉}` is inclusive. As another example `n = 20 = 2^2·5`: `a=2`, `q=5`,
`p=8`, `q<p`, B1 gives `k=1`, `j=6 ≤ 10`; `T_6 = 21 ≡ 1`, `T_1 = 1`.) ∎(Case B)

---

### Case C — `n = 2^s` with `s ≥ 2`

Here `2n = 2^{s+1}`. Suppose, for contradiction, that there is a collision: some
`0 ≤ k < j ≤ n-1` with `T_j ≡ T_k (mod n)`. By the Collision Lemma,
$$
2^{s+1} \mid (j-k)(j+k+1),
$$
and exactly one of `j-k`, `j+k+1` is even while the other is odd. Let `E` denote
the even factor and `O` the odd factor, so `(j-k)(j+k+1) = E·O` with `O` odd.

Since `O` is odd, it is coprime to `2^{s+1}` (an odd number shares no factor of
`2` with a power of `2`). Therefore, by the standard divisor property of coprime
factors — equivalently, taking the 2-adic valuation `v_2`:
$$
v_2\big((j-k)(j+k+1)\big) = v_2(E) + v_2(O) = v_2(E) + 0 = v_2(E),
$$
and `2^{s+1} | E·O` means `s+1 ≤ v_2(E·O) = v_2(E)`, hence
$$
2^{s+1} \mid E.
$$
In particular, since `E > 0` (we show below `E` is a positive integer), `E` is a
positive multiple of `2^{s+1}`, so
$$
E \ge 2^{s+1}. \tag{$\star$}
$$

We now bound `E` from above and contradict `(⋆)`. There are two possibilities
for which factor is even.

- **If `E = j - k`** (the difference is the even factor): then
  `0 < j - k ≤ (n-1) - 0 = n - 1 = 2^s - 1`, using `0 ≤ k < j ≤ n-1`. Thus
  $$
  E = j - k \le 2^s - 1 < 2^{s+1}.
  $$

- **If `E = j + k + 1`** (the sum is the even factor): then, using
  `k ≤ n-2` (since `k < j ≤ n-1` forces `k ≤ n-2`) and `j ≤ n-1`,
  $$
  E = j + k + 1 \le (n-1) + (n-2) + 1 = 2n - 2 = 2^{s+1} - 2 < 2^{s+1}.
  $$

In either case `E` is a positive integer (it is the even one of `j-k ≥ 1` and
`j+k+1 ≥ 1`, both positive) with `E < 2^{s+1}`. This contradicts `(⋆)`.

Therefore no collision exists: `T_0, T_1, …, T_{n-1}` are pairwise distinct mod
`n`, which is exactly `C`.

(Sanity at the smallest power: `s = 2`, `n = 4`. The bound `2n - 2 = 6 < 8 =
2^{s+1}` is comfortably strict, and indeed `T_0,…,T_3 = 0,1,3,6 ≡ 0,1,3,2
(mod 4)` are all distinct.) ∎(Case C)

(KB: *Divisor analysis* / 2-adic valuation for "odd factor coprime to `2^{s+1}`
forces the whole `2`-power onto the even factor"; *Perfect-square arguments* —
here the size-bound flavor — for the strict inequality `E < 2^{s+1}` that
forbids the divisibility; *Casework / exhaustion* for the two-way split on which
factor is even.)

---

### Assembling the implication

By Cases A and B: if `n` is not a power of `2`, then `H` is false. Taking the
contrapositive,
$$
H \;\Longrightarrow\; n \text{ is a power of } 2.
$$
By Case C: if `n` is a power of `2`, then `C` holds, i.e.
$$
n \text{ is a power of } 2 \;\Longrightarrow\; C.
$$
Chaining the two implications yields `H ⟹ C`:

> If after `⌈n/2⌉` jumps Zagi has visited `⌈n/2⌉ + 1` distinct vertices, then
> after `n-1` jumps Zagi has visited all `n` vertices.

This is precisely the statement to be proved. ∎
