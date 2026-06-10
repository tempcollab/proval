## Status
solved

## Approaches tried
- Brute-force scan (prior exploration) — found 11 valid pairs and identified (35,90) as the max-b pair, but only conjectured the bound k ≤ 6; not a proof on its own.
- Vieta jumping / infinite descent on the quadratic b² − ((k−2)a−1)b + a(a+1) = 0, AM-GM lower bound k ≥ 5, base-case enumeration (a=b), and chain completeness via predecessor-uniqueness — worked; gives a complete classification of all valid pairs and the extremal pair.

## Current best
Complete classification: a pair (a,b) with 1 ≤ a ≤ b is valid iff it lies on one of two
chains, the k = 5 chain (2,2)→(2,3)→(3,6)→(6,14)→(14,35)→(35,90)→… or the k = 6 chain
(1,1)→(1,2)→(2,6)→(6,21)→(21,77)→…, where k = (a+b)(a+b+1)/(ab). Within 1 ≤ a ≤ b ≤ 100
these give exactly 11 pairs; the unique one with maximal b is **(35, 90)**.

## Full proof

**Problem.** Among all ordered integer pairs (a,b) with 1 ≤ a ≤ b ≤ 100 for which
N(a,b) := (a+b)(a+b+1)/(ab) is an integer, find the pair with the largest value of b
(breaking a tie by the largest a).

Throughout, for integers 1 ≤ a ≤ b we say (a,b) is a **valid pair** if ab divides
(a+b)(a+b+1); equivalently N(a,b) ∈ ℤ. We classify ALL valid pairs (with no upper bound
on b), then intersect with the range b ≤ 100.

For a valid pair set
$$k = k(a,b) = \frac{(a+b)(a+b+1)}{ab} \in \mathbb{Z}_{>0}.$$
(It is positive since a,b ≥ 1.) More generally, for an integer k ≥ 1 and integers a,b ≥ 1
we call (a,b) a **k-solution** if (a+b)(a+b+1) = k·ab. Every valid pair is a k-solution
for k = k(a,b), and conversely every k-solution with a ≤ b is a valid pair. So it suffices
to classify k-solutions.

---

### Step 1. The defining quadratic and Vieta's formulas.

Expand the equation (a+b)(a+b+1) = k·ab:
$$(a+b)(a+b+1) = a^2 + 2ab + a + b^2 + b.$$
Setting this equal to k·ab and collecting in powers of b:
$$b^2 + (2a + 1 - ka)\,b + (a^2 + a) = 0,$$
that is, with k − 2 grouped,
$$\boxed{\,b^2 - \big((k-2)a - 1\big)\,b + a(a+1) = 0.\,}\tag{$\star$}$$
(Indeed 2a + 1 − ka = −((k−2)a − 1), and a² + a = a(a+1).) This is a **monic** quadratic
in b with integer coefficients. By symmetry of the original equation in a and b, the same
identity holds with the roles of a and b swapped.

Fix a and k, and regard (★) as a quadratic in b. If b is one root, let b′ be the other.
By **Vieta's formulas** (KB "Vieta's formulas"):
$$b + b' = (k-2)a - 1, \qquad b\cdot b' = a(a+1).\tag{1}$$

We record three free consequences, valid whenever (a,b) is a k-solution:

- **(V1) b′ is an integer.** From the first equation in (1),
  b′ = (k−2)a − 1 − b, a difference of integers. (We do NOT need to assume b | a(a+1)
  separately; integrality is automatic from Vieta because the quadratic is monic with
  integer coefficients.)
- **(V2) b′ is a positive integer.** From the second equation in (1),
  b·b′ = a(a+1) > 0. Since b > 0, we get b′ > 0, hence b′ ≥ 1.
- **(V3) (a, b′) is again a k-solution.** b′ is, by construction, a root of (★), the
  quadratic whose roots are exactly the k-solutions with first coordinate a; equivalently
  one checks directly that (a+b′)(a+b′+1) = k·a·b′ holds because b′ satisfies (★) for the
  same a, k. After reordering its two entries into nondecreasing order, (a, b′) is a valid
  pair with the same k.

---

### Step 2. Lower bound k ≥ 5 (AM-GM).

By **AM-GM** (KB "Standard inequalities: AM-GM"), for positive reals a, b we have
a + b ≥ 2√(ab), so (a+b)² ≥ 4ab. Since a + b + 1 > a + b > 0,
$$(a+b)(a+b+1) > (a+b)^2 \ge 4ab.$$
Dividing by ab > 0,
$$k = \frac{(a+b)(a+b+1)}{ab} > 4.$$
As k is an integer, **k ≥ 5**. (The first inequality is strict because a+b+1 > a+b; we do
not even need equality analysis of AM-GM.)

---

### Step 3. Descent inequality (Lemma D).

> **Lemma D.** If (a,b) is a k-solution with b > a ≥ 1, then b′ := a(a+1)/b is an integer
> with 1 ≤ b′ ≤ a. Consequently the reordered pair (b′, a) is a k-solution whose larger
> coordinate, a, is strictly less than the larger coordinate b of (a,b).

*Proof.* By (V1)–(V2), b′ = (k−2)a − 1 − b is a positive integer, and by (1),
b·b′ = a(a+1), so indeed b′ = a(a+1)/b.

Since a and b are integers with b > a, we have b ≥ a + 1. Hence
$$b' = \frac{a(a+1)}{b} \le \frac{a(a+1)}{a+1} = a.$$
Combined with b′ ≥ 1 (V2) this gives 1 ≤ b′ ≤ a.

By (V3), (a, b′) is a k-solution; reordering its entries (b′ ≤ a) gives the k-solution
(b′, a). Its larger coordinate is a, and a < b (given). So the larger coordinate strictly
decreased. ∎

Note b′ may equal a (it does, e.g., when (a,b) = (2,3), giving b′ = 2(3)/3 = 2, reordered
pair (2,2)); the *larger coordinate* still strictly drops from b = 3 to a = 2, which is all
we need.

---

### Step 4. The descent terminates at a pair with equal coordinates.

Let (a,b) be any k-solution, written with a ≤ b. Define a process: while the larger
coordinate strictly exceeds the smaller, apply Lemma D to replace (a,b) (with b > a) by the
k-solution (b′, a), whose larger coordinate a is strictly smaller than b.

The larger coordinate is a positive integer that strictly decreases at each step. By the
**well-ordering principle** (no infinite strictly decreasing sequence of positive integers —
this is the **infinite descent** principle, KB "Vieta jumping & infinite descent"), the
process must terminate after finitely many steps. It can terminate only when Lemma D no
longer applies, i.e. when the current k-solution has b = a (equal coordinates). Every step
preserves k (V3). Hence:

> Every k-solution descends, in finitely many Vieta steps preserving k, to a k-solution with
> equal coordinates a = b.

---

### Step 5. Base case: a = b forces k ∈ {5,6} (Lemma B).

> **Lemma B.** A k-solution with a = b exists iff a ∈ {1, 2}, giving (1,1) with k = 6 and
> (2,2) with k = 5. In particular every k-solution has k = 5 or k = 6.

*Proof.* Put b = a in the original equation (a+b)(a+b+1) = k·ab:
$$(2a)(2a+1) = k\,a^2 \implies k = \frac{2(2a+1)}{a} = 4 + \frac{2}{a}.$$
For k to be an integer we need a | 2, so a ∈ {1, 2}:
- a = 1: k = 4 + 2 = 6, pair (1,1). Check: (2)(3) = 6 = 6·1·1. ✓
- a = 2: k = 4 + 1 = 5, pair (2,2). Check: (4)(5) = 20 = 5·2·2. ✓

By Step 4 every k-solution shares its k with some equal-coordinate k-solution, so its k is
6 or 5. ∎

This is the crux: the bound "only k = 5, 6 occur" is now PROVED by descent plus integrality
of 2/a — it is not a brute-force observation.

---

### Step 6. Chain completeness (Lemma C): all solutions form a single ascending chain per k.

For a fixed k ∈ {5,6} we now show the set of k-solutions is exactly one explicit chain.

**Predecessor map and its uniqueness.** Let (a,b) be a k-solution with a < b (strict; i.e.
not the base pair). By Lemma D its descent step produces the k-solution (b′, a) with
b′ = a(a+1)/b ≤ a; call this the **parent** P(a,b) := (b′, a). The parent is *uniquely
determined* by (a,b): given (a,b), b′ is forced as the second root of the monic quadratic
(★) (equivalently b′ = a(a+1)/b), so P is a well-defined function on non-base k-solutions.
Moreover the parent's larger coordinate a equals the smaller coordinate of (a,b), and its
smaller coordinate is b′; thus P is determined with no choices.

By Step 4, iterating P from any k-solution reaches the unique base pair (the only
equal-coordinate k-solution for this k: (2,2) for k = 5, (1,1) for k = 6, by Lemma B). So
the directed graph on k-solutions whose edges are (child → parent) is a tree in which every
node has a path to the single root (the base pair), and every non-root node has exactly one
parent. Hence the k-solutions form a structure where each node has a unique ancestor line to
the base.

**Children are unique too — the chain does not branch.** We show each k-solution has at most
one child under P, so the tree is in fact a single path. Suppose (a,b) (with a ≤ b) is the
parent of a child (c,d), c ≤ d. By the definition of P, the child's smaller coordinate
equals the parent's smaller coordinate's... more directly: if (c,d) is a non-base solution
with parent (a,b) = P(c,d) = (d', c) where d' = c(c+1)/d, then matching coordinates forces
a = d' and b = c. So from a child's parent (a,b) we can recover the child's smaller
coordinate: c = b. Given c = b, the child's larger coordinate d is the root of the quadratic
(★) (with a := c = b) OTHER than the known smaller root; by Vieta (1) applied at first
coordinate c, the two roots multiply to c(c+1) and sum to (k−2)c − 1, so the larger root is
$$d = (k-2)c - 1 - d' \quad\text{with } d' \cdot d = c(c+1).$$
Here d′ = a is already determined (= the smaller coordinate of the parent), so
$$d = (k-2)c - 1 - a, \qquad c = b.$$
Thus the child (c,d) is *uniquely* determined by the parent (a,b): there is at most one
child, given by the **ascending recurrence**
$$\boxed{(a,b) \longmapsto (b,\; b_+), \quad b_+ = (k-2)b - 1 - a.}\tag{2}$$
(One must also confirm b₊ ≥ b so that (b, b₊) is correctly ordered with larger coordinate
b₊; this is checked per chain below, and in general follows since the child of a node has a
strictly larger maximum than the node — the inverse of the strict descent of Lemma D.)

Therefore the parent map P is a bijection between non-base k-solutions and their parents'
"next" images, and the set of all k-solutions is a **single ascending chain** rooted at the
base pair, generated by recurrence (2). No solution can lie off this chain: any solution
descends to the base (Step 4), and from the base only one upward path exists (uniqueness of
children just shown).

**The two chains explicitly.** Apply (2):

- **k = 5** (start (2,2), b₊ = 3b − 1 − a):
  $$(2,2)\to(2,3)\to(3,6)\to(6,14)\to(14,35)\to(35,90)\to(90,234)\to\cdots$$
  Check each is a 5-solution (and that b₊ ≥ b so ordering holds):
  (2,3): 3·2−1−2 = 3 ✓ , (2+3)(6) = 30 = 5·2·3 ✓;
  (3,6): 3·3−1−2 = 6 ✓ , (3+6)(10) = 90 = 5·3·6 ✓;
  (6,14): 3·6−1−3 = 14 ✓ , (6+14)(21) = 420 = 5·6·14 ✓;
  (14,35): 3·14−1−6 = 35 ✓ , (14+35)(50) = 2450 = 5·14·35 ✓;
  (35,90): 3·35−1−14 = 90 ✓ , (35+90)(126) = 125·126 = 15750 = 5·35·90 ✓;
  next (90,234): 3·90−1−35 = 234, larger coordinate 234 > 100.

- **k = 6** (start (1,1), b₊ = 4b − 1 − a):
  $$(1,1)\to(1,2)\to(2,6)\to(6,21)\to(21,77)\to(77,286)\to\cdots$$
  Check: (1,2): 4·1−1−1 = 2 ✓ , (1+2)(4) = 12 = 6·1·2 ✓;
  (2,6): 4·2−1−1 = 6 ✓ , (2+6)(9) = 72 = 6·2·6 ✓;
  (6,21): 4·6−1−2 = 21 ✓ , (6+21)(28) = 756 = 6·6·21 ✓;
  (21,77): 4·21−1−6 = 77 ✓ , (21+77)(99) = 98·99 = 9702 = 6·21·77 ✓;
  next (77,286): 4·77−1−21 = 286, larger coordinate 286 > 100.

In both chains each step strictly increases the larger coordinate (2→3→6→14→35→90→234… and
1→2→6→21→77→286…), confirming the ordering b₊ ≥ b assumed in (2) and that the chains are
infinite and strictly ascending. By Lemma C these two chains contain **every** k-solution.

---

### Step 7. Enumerate all valid pairs with 1 ≤ a ≤ b ≤ 100.

A valid pair is a k-solution with k ∈ {5,6} (Lemma B) and b ≤ 100, hence a chain term whose
larger coordinate is ≤ 100. Reading off the two chains and stopping when the larger
coordinate first exceeds 100 (next k=5 term has b = 234, next k=6 term has b = 286):

- k = 5: (2,2), (2,3), (3,6), (6,14), (14,35), (35,90).
- k = 6: (1,1), (1,2), (2,6), (6,21), (21,77).

That is **exactly 11 pairs**, and these are all valid pairs in the range (no others exist by
chain completeness). Each has a ≤ b ≤ 100 and was verified above to be a k-solution, so
N(a,b) = k ∈ ℤ.

The values of b occurring are: from k=5, {2,3,6,14,35,90}; from k=6, {1,2,6,21,77}. The
largest is **b = 90**, occurring only in the pair (35, 90). Since b = 90 is attained by a
single pair, the tie-break rule of the problem (largest a among pairs of maximal b) is
vacuous here — it never needs to be applied. (The statement's example "(3,85) over (2,85)
over (4,84)" merely illustrates the ordering convention; no tie actually occurs.)

---

### Step 8. Final answer and verification.

The pair with the largest b is
$$\boxed{(a,b) = (35,\,90)}.$$

**Verification by substitution into the original expression:**
$$N(35,90) = \frac{(35+90)(35+90+1)}{35\cdot 90} = \frac{125\cdot 126}{3150} = \frac{15750}{3150} = 5 \in \mathbb{Z}.\ \checkmark$$
Indeed 35·90 = 3150 and 125·126 = 15750 = 5·3150, and 1 ≤ 35 ≤ 90 ≤ 100, so (35,90) is a
valid pair, and by Step 7 it is the unique valid pair with b = 90, the maximal value of b.

$\blacksquare$
