## Status
partial

## Approaches tried

- **Direct synthetic geometry** — not applicable; touching condition is not a standard synthetic configuration.
- **LP + Caratheodory alone** — dead-end: Caratheodory gives a 3-element sub-basis {i,j,k} at the LP optimum, but the optimum can have more than 3 tight constraints (degenerate vertex), so "exactly 3" does not follow without a further argument.
- **Perturbation of c** — dead-end: a generic perturbation of the RHS makes the LP non-degenerate, but the limit as ε→0 can produce 4+ tight constraints, losing the guarantee.
- **Induction removing one hyperplane** — dead-end: removing index n can destroy the 4-EXT condition for triples where n was the only witness.
- **Growing the tight set S** — dead-end: starting from T(p*) and trying to add elements; witnesses for pairs in S are always outside S, so growth stalls.
- **Linear reformulation + Helly + LP + KEY LEMMA (contrapositive)** — the correct approach; LP/KKT not actually needed; KEY LEMMA alone (via L_{12}-clustering) gives the result directly (round 7–8, KEY LEMMA now proved — see Current best).

## Current best

**Full structure of the proof is now established (KEY LEMMA proved in round 8). Status should be upgraded to `solved` after proof-builder writes the full proof.**

### Reformulation (proved)

**Touching is linear.** If H_i has outward unit normal n_i ∈ S¹ and offset c_i (H_i = {n_i·x ≥ c_i}), then a circle (O ∈ ℝ², r > 0) touches H_i from outside iff n_i·O + r = c_i. Setting v_i = (n_i, 1) ∈ ℝ³ and p = (O, r) ∈ ℝ³, this is v_i·p = c_i: a hyperplane P_i in "circle-space" ℝ³.

**Problem reformulation.** Given n hyperplanes P_i: v_i·p = c_i in ℝ³:
- (GP) Any 3 rows v_i are linearly independent (from general position of boundary lines).
- (C2) Every triple p_{ijk} = P_i ∩ P_j ∩ P_k satisfies r(p_{ijk}) > 0 (from condition 2).
- (C3) The full system has no solution (from condition 3): c ∉ Im(V).

**Goal:** prove some triple {i,j,k} has p_{ijk} ∉ P_l for ALL l ∉ {i,j,k}, i.e., p_{ijk} touches exactly H_i, H_j, H_k.

### KEY LEMMA (proved in round 8 via L_{12}-clustering)

**Statement.** If V is n×3 with any 3 rows linearly independent and 4-EXT holds for every triple {i,j,k} (meaning: there exists l ∉ {i,j,k} with v_l·p_{ijk} = c_l), then c ∈ Im(V).

**Contrapositive.** If c ∉ Im(V) (condition C3), then 4-EXT fails for some triple {i,j,k}: no l outside {i,j,k} satisfies v_l·p_{ijk} = c_l.

**Proof of KEY LEMMA** (by contradiction: assume 4-EXT holds for all triples and c ∉ Im(V)):

**Step 1 (L_{12}-clustering).** Fix the pair {1,2}. Let L_{12} = P_1 ∩ P_2 (a line in ℝ³, since rows 1,2 are linearly independent). By GP, each P_m (m ≥ 3) meets L_{12} at exactly one point p_{12m}. Applying 4-EXT to {1,2,m}: there exists l ∈ {3,...,n}\{m} with v_l·p_{12m} = c_l. Since p_{12m} ∈ P_1, P_2, P_l, and any 3 rows are linearly independent, p_{12m} = P_1 ∩ P_2 ∩ P_l = p_{12l}. So m and l lie in the same "L_{12}-cluster" (they map to the same point on L_{12}). Consequently every element of {3,...,n} has a cluster-mate, so every cluster has size ≥ 2.

**Step 2 (Only one cluster).** Suppose two distinct clusters C₁ (at point q₁ on L_{12}) and C₂ (at point q₂ on L_{12}) exist, with q₁ ≠ q₂. Pick a ∈ C₁, c ∈ C₂. The cluster definitions mean: q₁ ∈ P_1, P_2, P_a (since a ∈ C₁ means P_a meets L_{12} at q₁), and q₂ ∈ P_1, P_2, P_c.

Apply 4-EXT to {1, a, c}: there must exist a witness w ∉ {1,a,c}.

- **Case A: w ∈ C₁ ∪ {2}.** (Here "2" satisfies q₁ ∈ P_2, analogous to C₁.) P_w passes through p_{1ac}. Since q₁ ∈ P_1, P_a, P_w (all contain q₁ and any 3 rows are linearly independent), P_1 ∩ P_a ∩ P_w = {q₁}, so p_{1ac} = q₁. Then q₁ ∈ P_c, but P_c meets L_{12} at q₂, so q₁ = P_c ∩ L_{12} = q₂. Contradiction q₁ ≠ q₂.

- **Case B: w ∈ C₂.** Pick w = d ∈ C₂ (so q₂ ∈ P_d). P_d passes through p_{1ac}. Since p_{1ac} ∈ P_c ∩ P_d = L_{cd}, and q₂ ∈ P_c, P_d, P_1 (q₂ on L_{12} ⊂ P_1), we have q₂ ∈ L_{cd} ∩ P_1. By GP (rows c, d, 1 are linearly independent), L_{cd} meets P_1 at a unique point, which must be q₂. Hence p_{1ac} = q₂. Then q₂ ∈ P_a. Since q₂ ∈ P_1, P_2 (q₂ on L_{12}), we get q₂ ∈ P_1 ∩ P_2 ∩ P_a = q₁. Contradiction q₁ ≠ q₂.

In every case a contradiction arises, so only one cluster can exist.

**Step 3 (One cluster ⇒ contradiction).** All elements {3,...,n} lie in one cluster at q* ∈ L_{12}. Thus P_m passes through q* for every m ≥ 3. And q* ∈ L_{12} = P_1 ∩ P_2, so q* ∈ P_1, P_2 as well. Therefore P_1, ..., P_n all pass through q*, meaning v_i·q* = c_i for all i, i.e., c ∈ Im(V). This contradicts c ∉ Im(V). ∎

### Complete proof of the problem

1. **Linearize.** As above, each condition "circle touches H_i" becomes v_i·p = c_i in ℝ³.
2. **Condition 2** gives: for every triple {i,j,k}, the unique solution p_{ijk} = V_{ijk}^{-1}c_{ijk} satisfies r(p_{ijk}) > 0 (a valid circle).
3. **Condition 3** is equivalent to: c ∉ Im(V) (no common solution to all n equations).
4. **KEY LEMMA (contrapositive):** c ∉ Im(V) implies 4-EXT fails for some triple {i,j,k}: for all l ∉ {i,j,k}, v_l·p_{ijk} ≠ c_l.
5. **Conclusion:** The circle p_{ijk} has r > 0 (by step 2) and v_l·p_{ijk} ≠ c_l for all l ∉ {i,j,k} (by step 4). This means p_{ijk} touches exactly H_i, H_j, H_k and none of the other half-planes. ∎

### Verified small cases

- **n = 4:** 4-EXT for {1,2,3} forces l=4, giving p_{123}=p_{124}=q₁. One cluster {3,4} at q₁. All 4 hyperplanes concurrent at q₁ → c ∈ Im(V). Contradiction.
- **n = 5:** Clusters on L_{12} partition {3,4,5} with each ≥ 2. Only option: one cluster of size 3. All concurrent. Contradiction.
- **n = 6:** Two clusters would lead to q₁=q₂ via cross-cluster triple (Step 2). One cluster → contradiction.

### Note on LP approach (alternative, not needed)

Helly's theorem + LP also gives an alternative route: max r s.t. v_i·p ≤ c_i feasible (Helly in ℝ²), optimal p* exists, |T(p*)| ≥ 3 by KKT/Caratheodory. But managing degenerate LP vertices requires additional argument. The KEY LEMMA approach is cleaner and direct.

## Full proof
(Not yet written — KEY LEMMA was proved in the exploration phase of round 8. The proof-builder should produce the full rigorous write-up in this round.)
