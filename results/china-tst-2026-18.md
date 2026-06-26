## Status
partial

## Approaches tried
- Existence identity R=(x-y)D for f(n)=n(n+c) — WORKED; closes the "if" direction completely (verified symbolically).
- Lemma G reformulation D(x,y) | y·d(x) − x·d(y), d(n)=f(n)−F(n) — WORKED; exact identity verified.
- Lemma U (unconditional one-sided bound) f(x) ≤ F(x) for all x via D(x,1) | d(x) — WORKED; clean and rigorous.
- Minimal-deviator reduction: min S has x·f(x)=f(1)=a (constant-product branch) — WORKED for the case-split, with two genuinely rigorous sub-results below.
- x₀ ≥ 3 constant branch: KILLED RIGOROUSLY. pair(x₀,2) forces f(x₀)=2, a=2x₀ (via 3a+4−D=(x₀−1)(c₀−2) bounded by D); then pair(x₀,3) (x₀≥4) is impossible since D=9x₀+8 ∤ |R|=16x₀+18; leaving only (a=6, x₀=3) which is killed at n=4. ALL CLOSED in closed form.
- x₀ = 2 reduction: pair(2,1) forces f(2)=a/2 with a even (closed form: only divisor of 3a+4 in the admissible window [a+3, 3a+4) is (3a+4)/2). WORKED.
- x₀ = 2 GLOBAL KILL: the constant value f(2)=a/2 is killed by the pair (1,y)&(2,y) at y = smallest index ≥3 with y ∤ a. The route (a) "constant product propagates" is FALSE (the deviator can return to the family value one step later, e.g. a=6 gives f=(6,3,24) surviving to n=3); a single fixed pair does not suffice; the kill genuinely needs y = first non-divisor of a.
- x₀ = 2 GLOBAL KILL — PRIME SUB-CASE NOW CLOSED IN CLOSED FORM (round 4). MECHANISM: q₁:=M₁/D₁∈{1,…,y−1}, q₁|a (q₁<y=smallest non-divisor) ⟹ q₁|y²; for y prime this forces q₁=1 (w=F(y)), then pair(2,y) ⇔ D₂|(y−1)(c−y) which is impossible by a clean size bound (D₂ exceeds |(y−1)(c−y)| unless c=y, and c=y ⟹ y|a). The prime-power e≥2 sub-case (q₁=p^i possible) is the lone remaining gap; size bound fails near q₁=y/2 and the p-adic lever (i≥1 ⟹ p|q₂) is not yet decisive. Verified true by brute force (cand-w) for all even a≤4·10⁵. Write a=2c. At y = smallest non-divisor of a, every j∈{1,…,y−1} divides a. With w=f(y), pair(1,y) ⇔ D₁=w+a+y | M₁ where M₁=a(y+1)+y² (since yw−a = yD₁−M₁), and D₁∈[a+y+1, M₁] (Lemma U: w≤F(y); note M₁ = F(y)+a+y). So q₁:=M₁/D₁ is a positive integer; q₁ ≤ M₁/(a+y+1) < y+1 (because M₁−(y+1)(a+y+1) = −(2y+1) < 0), hence q₁∈{1,…,y}. Since y∤a, N:=yw−a≠0; as N=(y−q₁)D₁ this gives q₁≠y, so q₁≤y−1, hence q₁|a (q₁<y=smallest non-divisor). Then M₁=a(y+1)+y²≡y² (mod q₁), and q₁|M₁, so **q₁|y²**. When y is PRIME, the only divisor of y² that is <y is 1, so **q₁=1**, i.e. D₁=M₁, w=F(y). Now pair(2,y) ⇔ D₂=w+c+2y | N, and D₂=D₁−(c−y), N=(y−1)D₁, so D₂|N ⇔ D₂|(y−1)(c−y) (verified: N−(y−1)D₂=(y−1)(c−y)). But with w=F(y): if c>y then 0<(y−1)(c−y)<D₂ (since D₂−(y−1)(c−y)=cy+2c+2y²>0), so D₂∤(y−1)(c−y); if c<y then |(y−1)(c−y)|=(y−1)(y−c)<D₂ (since D₂−(y−1)(y−c)=3cy+2y>0), again impossible; if c=y then a=2y so y|a, contradicting y∤a. Contradiction in all cases. **So when the smallest non-divisor of a is prime, the x₀=2 branch is impossible.** [All identities sympy-verified; no both-pair solution found over all even a≤3·10⁵ with prime smallest non-divisor.]

## Current best

Let a := f(1) ≥ 1, F(n) := n² + (a−1)n = n(n+a−1), T(n) := n² + (n+1)a (so F(n)+a+n = T(n)),
D(x,y) := f(x)+f(y)+xy, R(x,y) := xf(x)−yf(y), d(n) := f(n)−F(n).

**ANSWER.** f(n) = n(n+c) for a fixed non-negative integer c (equivalently c = a−1, f(n)=F(n)). The case c=0 gives f(n)=n².

The following are fully proven (existence direction + uniqueness everywhere except the x₀=2 constant chain):

**(0) Existence (closed).** For f(n)=n(n+c), R = x²(x+c)−y²(y+c) = (x−y)[x²+xy+y²+c(x+y)] = (x−y)[x(x+c)+y(y+c)+xy] = (x−y)·D, so D | R (quotient x−y). [Verified symbolically: x f(x)−y f(y) − (x−y)D ≡ 0.]

**(L-G) Reformulation.** R(x,y) − (x−y)D(x,y) = y f(x) − x f(y) − xy(x−y) = y·d(x) − x·d(y) (the F-part cancels: y F(x) − x F(y) − xy(x−y) ≡ 0). Since D | R and D | (x−y)D, we get **D(x,y) | y·d(x) − x·d(y)** for all x,y. [Verified symbolically.]

**(L-U) Unconditional bound f(x) ≤ F(x).** Take y=1: D(x,1)=f(x)+a+x divides d(x)=f(x)−F(x) (since d(1)=0). If d(x)>0 then d(x) ≥ D(x,1) gives −F(x) ≥ a+x, impossible. Hence d(x) ≤ 0 for all x. Moreover if d(x)≠0 then F(x)−f(x) ≥ f(x)+a+x. So **S := {n : f(n) < F(n)}** is the deviator set, and f(n)=F(n) ⇔ n∉S.

**(Reduction) Minimal deviator is constant-type.** Suppose S ≠ ∅ and let x₀ = min S (so f(k)=F(k) for all k<x₀, by L-U these are exactly the non-deviators). Set v=f(x₀), c₀=v. Then by L-G with the lower index k<x₀ (d(k)=0): D(x₀,k) | k·d(x₀). The claim (verified: zero violations over a<150, all x<30) is **x₀·f(x₀) = a**. Two cases below are rigorous; the residual gap is only the final global kill of the x₀=2 sub-case.

**(B, closed for x₀≥3, partial mechanism for x₀=2)**
- pair(x₀,1): D(x₀,1)=v+a+x₀ divides T(x₀); equivalently, writing the Lemma-U multiple g=F(x₀)−v=m·D(x₀,1) (m≥1), one gets x₀·v−a = (x₀−1−m)·T(x₀)/(m+1), so **x₀·v=a ⇔ m=x₀−1**, with v=a/x₀. [Verified symbolically.]
- For **x₀ ≥ 3**: pair(x₀,2) (here f(2)=F(2)=2a+2 since 2<x₀) gives D₂=c₀+2a+2+2x₀ divides |R|=3a+4. Since 3a+4−D₂ = (x₀−1)(c₀−2) and 0 ≤ |3a+4−D₂| < D₂ (as D₂−(x₀−1)(c₀−2)=x₀c₀+2c₀+4x₀>0, and the c₀=1 case gives D₂>3a+4>0, impossible), we force **3a+4=D₂, i.e. c₀=2, a=2x₀**. [Verified symbolically.]
  - Then pair(x₀,3) (available since x₀≥4, f(3)=F(3)=3a+6): D₃=9x₀+8, |R|=16x₀+18. Since 16x₀+18 = 1·(9x₀+8) + (7x₀+10) with 0 < 7x₀+10 < 9x₀+8 (⇔ x₀>1), D₃ ∤ |R| — **contradiction**. So x₀≥4 is impossible.
  - x₀=3, a=6, f(3)=2 is the only survivor; it is killed directly: with f(1)=6, f(2)=14, f(3)=2, no value f(4) ≤ F(4)=36 satisfies all of pair(4,1),(4,2),(4,3) (exhaustive check). **Contradiction.**
  - Hence **no minimal deviator has x₀ ≥ 3.**
- For **x₀ = 2** (the bulk): pair(2,1) gives D=v+a+2 | 3a+4 with a+3 ≤ D < 3a+4. The only divisor of 3a+4 in [a+3, 3a+4) is (3a+4)/2 (since (3a+4)/3 < a+3), forcing **f(2)=a/2 with a even**. [Verified: zero violations a<500.]

**(C) x₀=2 kill — PRIME SUB-CASE CLOSED, prime-power sub-case the lone remaining gap.**

Set-up at y = smallest non-divisor of a (a=2c, c≥1). y exists and is bounded: lcm(1,…,k) grows without bound, so some k has lcm(1,…,k)∤a, forcing a non-divisor ≤k; concretely y≤11 for a≤10⁴ and y=O(log a). y≥3 (1|a, 2|a since a even). The smallest non-divisor of any integer is always a prime power, so write **y=p^e**. Every j∈{1,…,y−1} divides a.

The two pair conditions (all identities below sympy-verified):
- pair(1,y) ⇔ D₁=w+a+y | M₁, where M₁:=a(y+1)+y² and yw−a = y·D₁−M₁. D₁∈[a+y+1, M₁] (w∈[1,F(y)], M₁=F(y)+a+y). q₁:=M₁/D₁ ∈ {1,…,y} (since M₁<(y+1)(a+y+1)). As N:=yw−a=(y−q₁)D₁≠0 (y∤a ⟹ yw≠a), q₁≤y−1, so q₁|a, so q₁|M₁−a(y+1)≡y² (mod q₁): **q₁|y²**.
- pair(2,y) ⇔ D₂=w+c+2y | N, with D₂=D₁−(c−y) and N=(y−q₁)D₁, so **pair(2,y) ⇔ D₂ | (y−q₁)(c−y)** (verified N−(y−q₁)D₂=(y−q₁)(c−y)).

**Prime sub-case (e=1, y=p prime) — DONE.** q₁|y²=p² with q₁<p forces q₁=1, so w=F(y). Then D₂|(y−1)(c−y); but D₂−(y−1)(c−y)=cy+2c+2y²>0 and D₂−(y−1)(y−c)=3cy+2y>0, so |(y−1)(c−y)|<D₂; thus D₂∤(y−1)(c−y) unless c=y, and c=y gives a=2y with y|a, contradicting y∤a. Contradiction. [No both-pair solution over all even a≤3·10⁵ with prime smallest non-divisor.]

**Prime-power sub-case (e≥2) — OPEN (the single remaining gap).** Here q₁|y²=p^{2e} with q₁≤y−1 allows q₁∈{1,p,…,p^{e-1}}. The q₁=1 branch dies exactly as above (forces c=y ⟹ y|a). For q₁=p^i (1≤i≤e−1) the clean size bound fails: at q₁≈y/2 (only possible for p=2) one can have |(y−q₁)(c−y)|≥D₂, so D₂|(y−q₁)(c−y) is no longer excluded by size alone, and the analogous symmetric bound D₁|(y−q₂)(c−y) fails the same way. A p-adic refinement (v_p(M₁)=v_p(M₂)=e−1; for p odd v_p(c−y)=e−1, v_p(D₁)=v_p(D₂)=e−1−i; and the relation c(q₁q₂+2q₁−2q₂)≡0 mod p^e ⟹ for i≥1, p|q₂) constrains q₁,q₂ to small prime powers but does NOT yet close the case. **This e≥2 sub-case is verified true** (brute force over candidate w = M₁/q₁ for every even a≤4·10⁵ whose smallest non-divisor is a prime power with e≥2: zero both-pair solutions), but lacks a closed proof.

Once (C) is fully closed, S=∅, hence f(n)=F(n)=n(n+a−1)=n(n+c) with c=a−1 ranging over all of ℤ_{≥0} as a=f(1) ranges over ℤ_{≥1}, completing uniqueness.

## Full proof
(Not present: Status is partial. The single open step is the **prime-power (e≥2) sub-case** of the x₀=2 kill (C). Everything else — existence, Lemmas G and U, the minimal-deviator reduction, the full x₀≥3 kill, the x₀=2 reduction to f(2)=a/2, and now the **entire prime sub-case (e=1) of the x₀=2 kill in closed form** — is rigorous and machine-verified. The remaining gap is genuinely narrow: at the smallest non-divisor y=p^e of a, only the values q₁=p^i with 1≤i≤e−1 (which require e≥2) are not yet excluded; the size and p-adic levers identified above constrain but do not yet eliminate them.)
