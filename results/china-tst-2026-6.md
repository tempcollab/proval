## Status
partial

## Approaches tried
- Modular arithmetic with substitution b_k = a_k - k, reducing to Key Lemma f(p) <= (p-1)/2 — reduction works, Key Lemma proof incomplete
- Direct complement pairing r <-> p-r — dead-end, both residues can be in T_p (e.g., p=23 has residues 11 and 12)
- Interval containment (T_p residues in {n0, ..., p-1}) — dead-end, false for many primes (p=67 has residue 5 < n0=33)
- Strong induction on n0 + max_b >= (p+1)/2 — Lemma C is true but doesn't connect to f(p) bound

## Current best
The main inequality reduces completely to proving f(p) <= (p-1)/2 for odd primes p. Established facts:
1. Distinct residues: T_p elements have distinct residues mod p in {1,...,p-1}, giving f(p) <= p-1
2. f(2) = 2 exactly, f(3) = 0
3. Numerical verification: f(p) <= (p-1)/2 holds for all primes up to at least p = 1579
4. n0(p) + max_b(p) >= (p+1)/2 holds numerically (via Bertrand) but doesn't directly bound f(p)

Most promising unexplored direction: Track blocking density through first p steps. Roughly half of residues get blocked by step p, leaving ~(p-1)/2 unblocked for T_p.

## Full proof
Not yet complete.
