# Crux Bank — CHEATSHEET

Reusable olympiad techniques, grouped by domain and subtopic. Each `[id]` is an exemplar problem where the technique was used (see `cruxes.json`, `problems_with_solutions.json`).

## number_theory

### diophantine-and-factoring

- After a forced factor is divided out of one side of an equation, note the leftover cofactor divides both sides, hence divides their (small constant) difference, which boxes the cofactor's size and pins it to a tiny value. _(1 example)_  `[aimo-0578]`
- Bound how many (smaller) partners a fixed element can have by counting the roots of the congruence that defines the partnership: a degree-d congruence has at most d roots per modulus (e.g. a quadratic congruence modulo a prime has at most two). _(1 example)_  `[aimo-0581]`
- Build a fixed finite integer set in which every pairwise difference divides both elements of its pair. _(1 example)_  `[aimo-0580]`
- Cancel the common factor block shared by two adjacent 'consecutive differences are equal' expressions to extract a per-index relation between neighboring terms. _(1 example)_  `[aimo-0731]`
- Eliminate the shared third variable between two instances of a defining relation to reach an expression symmetric in all the parameters. _(1 example)_  `[aimo-0581]`
- Exhibit a parametric family of solutions engineered so its summary quantity ranges over every required target value. _(1 example)_  `[aimo-0729]`
- Factor a prime power written as a difference of two squares; since the product is a prime power, conclude each of the two factors is itself a power of that prime. _(1 example)_  `[aimo-0725]`
- Force the minimal positive value represented by a quadratic form to be coprime to a small prime by Fermat descent across equivalent forms: if the prime divides the minimal value, use form-equivalence identities to exhibit a strictly smaller represented multiple, contradicting minimality. _(1 example)_  `[aimo-0582]`
- Pin the value of a quantity known to be a multiple of a prime p by squeezing it into an interval spanning only one or two multiples of p, forcing it to equal one of those multiples. _(1 example)_  `[aimo-0576]`
- Prove a given integer is not represented by a quadratic form by checking the form's attainable residues against the integer modulo well-chosen small moduli, or equivalently by running a Jacobi-symbol reciprocity chain on the relevant quadratic-residue symbol. _(1 example)_  `[aimo-0582]`
- Prove an auxiliary quantity is unbounded by contradiction: if it were bounded, the prime factors occurring in the sequence would lie in a finite set, contradicting that infinitely many primes appear. _(1 example)_  `[aimo-0727]`
- Read a divisibility by m involving a difference of odd powers as m representing a binary quadratic form, then invoke Thue's lemma to extract a small nonzero value of that form that is a multiple of m. _(1 example)_  `[aimo-0582]`
- Resolve a prime-power-equals-polynomial equation by lower-bounding the exponent so the prime power eventually outgrows the polynomial, leaving only finitely many small cases to check. _(1 example)_  `[aimo-0725]`
- Upper-bound a factorial by pairing factors k and (n-k) symmetrically and applying AM-GM to each pair to bound it by a common square. _(1 example)_  `[aimo-0578]`
- When two fractions known to be in lowest terms are equal, match numerator to numerator and denominator to denominator. _(1 example)_  `[aimo-0731]`

### divisibility-and-gcd

- Apply the complement involution d ↔ n/d to a divisor-list condition, converting a relation among small divisors into a divisibility among the complementary large divisors (and reversing their order). _(1 example)_  `[aimo-0724]`
- Bound how many (smaller) partners a fixed element can have by counting the roots of the congruence that defines the partnership: a degree-d congruence has at most d roots per modulus (e.g. a quadratic congruence modulo a prime has at most two). _(1 example)_  `[aimo-0581]`
- Bound the orbit of a map that either adds a fixed step or divides by d (when divisible) using coprimality of step and d: among any d consecutive additive iterates one is divisible by d, capping the additions before a forced division. _(1 example)_  `[aimo-0577]`
- Bound the spread of an interval-count: the number of multiples of n in any interval of fixed length L is floor(L/n) or floor(L/n)+1, so counts over equal-length intervals differ by at most one. _(1 example)_  `[aimo-0579]`
- Build a fixed finite integer set in which every pairwise difference divides both elements of its pair. _(1 example)_  `[aimo-0580]`
- Cancel the common factor block shared by two adjacent 'consecutive differences are equal' expressions to extract a per-index relation between neighboring terms. _(1 example)_  `[aimo-0731]`
- Collapse a minimum taken over the prime valuations of a composite divisor by proving one prime's valuation uniformly dominates, dropping it from the min. _(1 example)_  `[aimo-0726]`
- Combine two divisibility relations that share the same left-hand divisor by subtracting one from a suitable multiple of the other, collapsing them into a single tighter divisibility. _(1 example)_  `[aimo-0724]`
- Divide a common prime factor out of every term of a recurrence and shift the index to manufacture a smaller instance of the same recurrence (descent). _(1 example)_  `[aimo-0728]`
- Evaluate the same expression via two substitutions whose shared value is symmetric in two free parameters, then equate the resulting two composition expressions to extract a symmetric identity. _(1 example)_  `[aimo-0730]`
- Exhibit a parametric family of solutions engineered so its summary quantity ranges over every required target value. _(1 example)_  `[aimo-0729]`
- Factor a prime power written as a difference of two squares; since the product is a prime power, conclude each of the two factors is itself a power of that prime. _(1 example)_  `[aimo-0725]`
- Identify the smallest divisors of n as the consecutive powers of its least prime, up to the index where its second-smallest prime first enters the divisor list. _(1 example)_  `[aimo-0724]`
- If N is square-free and every prime factor of N divides X, conclude that N itself divides X. _(1 example)_  `[aimo-0729]`
- Induct on a cyclic configuration by deleting its extremal (largest) element and contracting its two neighbors into a single adjacency, producing a smaller valid instance of the same problem. _(1 example)_  `[aimo-0581]`
- Pigeonhole on the finitely many parity vectors of a tuple of additive invariants: any collection larger than the number of parity classes contains two elements sharing the same parity vector. _(1 example)_  `[aimo-0580]`
- Pin the value of a quantity known to be a multiple of a prime p by squeezing it into an interval spanning only one or two multiples of p, forcing it to equal one of those multiples. _(1 example)_  `[aimo-0576]`
- Prove an auxiliary quantity is unbounded by contradiction: if it were bounded, the prime factors occurring in the sequence would lie in a finite set, contradicting that infinitely many primes appear. _(1 example)_  `[aimo-0727]`
- Recognize an add-or-divide update rule as a bijection on a finite invariant state set and iterate its inverse backward from the seed to read off the desired pre-images. _(1 example)_  `[aimo-0577]`
- Reparametrize a second-order recurrence by its consecutive differences b_n = a_n - a_{n-1}, so a factored two-branch relation becomes a per-step multiplicative ratio choice for the differences. _(1 example)_  `[aimo-0728]`
- Rewrite each branch of a recurrence as p times one combination plus an earlier term to show every term is congruent mod p to an earlier term, confining all residues to the starting pair. _(1 example)_  `[aimo-0728]`
- Take the first index at which a unit-step (increments at most one) unbounded integer sequence reaches a target value to force the immediately preceding term to equal the target minus one. _(1 example)_  `[aimo-0727]`
- Take the p-adic valuation of both sides of an equation, using that a cofactor of the form p^k - 1 is coprime to p, to pin an unknown prime-power exponent. _(1 example)_  `[aimo-0725]`
- To justify a coprimality WLOG, divide out any common factor of a pair and show this strictly decreases the quantity being minimized, so a minimal configuration must already be coprime. _(1 example)_  `[aimo-0731]`
- To perturb a count that came out too uniform, lower the range's upper endpoint by one so exactly one extremal element is removed, shifting a single tally while the others stay fixed. _(1 example)_  `[aimo-0579]`
- To show divisibility by a modulus coprime to the base is preserved under a cyclic rotation of a fixed-width digit string, write (base times the number) minus its rotation as (base^k - 1) times the leading digit. _(1 example)_  `[aimo-0579]`
- When N is the sum of two quantities X and Y, a prime dividing N together with one of X, Y must divide the other. _(1 example)_  `[aimo-0729]`
- When a parity or congruence condition is built from a completely additive function f (f(ab)=f(a)+f(b)), show it is invariant under dividing both arguments by a common divisor d, since f(m)+f(n) and f(m/d)+f(n/d) differ only by 2f(d). _(1 example)_  `[aimo-0580]`
- When k terms of an arithmetic progression whose common difference is coprime to a small prime p run through all residues mod p, one term is forced divisible by p; if every term must be prime, that divisible term equals p itself. _(1 example)_  `[aimo-0576]`
- When two fractions known to be in lowest terms are equal, match numerator to numerator and denominator to denominator. _(1 example)_  `[aimo-0731]`

### lifting-the-exponent

- Pin the exact prime-power dividing a difference a^n - 1 (or a^n - b^n) by applying the lifting-the-exponent lemma, using the special even-exponent form for the prime 2. _(1 example)_  `[aimo-0578]`

### modular-arithmetic-and-CRT

- Bound how many (smaller) partners a fixed element can have by counting the roots of the congruence that defines the partnership: a degree-d congruence has at most d roots per modulus (e.g. a quadratic congruence modulo a prime has at most two). _(1 example)_  `[aimo-0581]`
- Bound the orbit of a map that either adds a fixed step or divides by d (when divisible) using coprimality of step and d: among any d consecutive additive iterates one is divisible by d, capping the additions before a forced division. _(1 example)_  `[aimo-0577]`
- Bound the spread of an interval-count: the number of multiples of n in any interval of fixed length L is floor(L/n) or floor(L/n)+1, so counts over equal-length intervals differ by at most one. _(1 example)_  `[aimo-0579]`
- Divide a common prime factor out of every term of a recurrence and shift the index to manufacture a smaller instance of the same recurrence (descent). _(1 example)_  `[aimo-0728]`
- Eliminate the shared third variable between two instances of a defining relation to reach an expression symmetric in all the parameters. _(1 example)_  `[aimo-0581]`
- Evaluate the same expression via two substitutions whose shared value is symmetric in two free parameters, then equate the resulting two composition expressions to extract a symmetric identity. _(1 example)_  `[aimo-0730]`
- Force the minimal positive value represented by a quadratic form to be coprime to a small prime by Fermat descent across equivalent forms: if the prime divides the minimal value, use form-equivalence identities to exhibit a strictly smaller represented multiple, contradicting minimality. _(1 example)_  `[aimo-0582]`
- Pigeonhole on the finitely many parity vectors of a tuple of additive invariants: any collection larger than the number of parity classes contains two elements sharing the same parity vector. _(1 example)_  `[aimo-0580]`
- Pin the value of a quantity known to be a multiple of a prime p by squeezing it into an interval spanning only one or two multiples of p, forcing it to equal one of those multiples. _(1 example)_  `[aimo-0576]`
- Prove a given integer is not represented by a quadratic form by checking the form's attainable residues against the integer modulo well-chosen small moduli, or equivalently by running a Jacobi-symbol reciprocity chain on the relevant quadratic-residue symbol. _(1 example)_  `[aimo-0582]`
- Read a divisibility by m involving a difference of odd powers as m representing a binary quadratic form, then invoke Thue's lemma to extract a small nonzero value of that form that is a multiple of m. _(1 example)_  `[aimo-0582]`
- Recognize an add-or-divide update rule as a bijection on a finite invariant state set and iterate its inverse backward from the seed to read off the desired pre-images. _(1 example)_  `[aimo-0577]`
- Reparametrize a second-order recurrence by its consecutive differences b_n = a_n - a_{n-1}, so a factored two-branch relation becomes a per-step multiplicative ratio choice for the differences. _(1 example)_  `[aimo-0728]`
- Rewrite each branch of a recurrence as p times one combination plus an earlier term to show every term is congruent mod p to an earlier term, confining all residues to the starting pair. _(1 example)_  `[aimo-0728]`
- To find where a dynamical orbit first enters a target residue class, track its residues modulo a fixed modulus d, using that a 'divide by a' step acts as multiplication by a^{-1} mod d. _(1 example)_  `[aimo-0577]`
- To perturb a count that came out too uniform, lower the range's upper endpoint by one so exactly one extremal element is removed, shifting a single tally while the others stay fixed. _(1 example)_  `[aimo-0579]`
- To show divisibility by a modulus coprime to the base is preserved under a cyclic rotation of a fixed-width digit string, write (base times the number) minus its rotation as (base^k - 1) times the leading digit. _(1 example)_  `[aimo-0579]`
- When N is the sum of two quantities X and Y, a prime dividing N together with one of X, Y must divide the other. _(1 example)_  `[aimo-0729]`
- When a parity or congruence condition is built from a completely additive function f (f(ab)=f(a)+f(b)), show it is invariant under dividing both arguments by a common divisor d, since f(m)+f(n) and f(m/d)+f(n/d) differ only by 2f(d). _(1 example)_  `[aimo-0580]`
- When k terms of an arithmetic progression whose common difference is coprime to a small prime p run through all residues mod p, one term is forced divisible by p; if every term must be prime, that divisible term equals p itself. _(1 example)_  `[aimo-0576]`
- When two valuation expressions agree at leading order, break the tie by choosing n's residue modulo the relevant prime to tilt the second-order floor correction in floor(n/p). _(1 example)_  `[aimo-0726]`

### orders-and-primitive-roots

- Forbid periodic points of an iterated self-map by exhibiting a single argument whose orbit attains infinitely many values. _(1 example)_  `[aimo-0730]`
- To find where a dynamical orbit first enters a target residue class, track its residues modulo a fixed modulus d, using that a 'divide by a' step acts as multiplication by a^{-1} mod d. _(1 example)_  `[aimo-0577]`
- To show divisibility by a modulus coprime to the base is preserved under a cyclic rotation of a fixed-width digit string, write (base times the number) minus its rotation as (base^k - 1) times the leading digit. _(1 example)_  `[aimo-0579]`

### p-adic-valuation

- After a forced factor is divided out of one side of an equation, note the leftover cofactor divides both sides, hence divides their (small constant) difference, which boxes the cofactor's size and pins it to a tiny value. _(1 example)_  `[aimo-0578]`
- Apply the complement involution d ↔ n/d to a divisor-list condition, converting a relation among small divisors into a divisibility among the complementary large divisors (and reversing their order). _(1 example)_  `[aimo-0724]`
- Bound an unknown factorial's p-adic valuation by monotonicity of v_p(n!) against a smaller forced factorial, counting the p-divisible integers swept by the larger consecutive range to compare with an exact closed form. _(1 example)_  `[aimo-0578]`
- Choose the variable to be a power of the prime p so that Legendre's formula for v_p(n!) telescopes to an exact closed form with no floor loss. _(1 example)_  `[aimo-0726]`
- Collapse a minimum taken over the prime valuations of a composite divisor by proving one prime's valuation uniformly dominates, dropping it from the min. _(1 example)_  `[aimo-0726]`
- Pin the exact prime-power dividing a difference a^n - 1 (or a^n - b^n) by applying the lifting-the-exponent lemma, using the special even-exponent form for the prime 2. _(1 example)_  `[aimo-0578]`
- Take the p-adic valuation of both sides of an equation, using that a cofactor of the form p^k - 1 is coprime to p, to pin an unknown prime-power exponent. _(1 example)_  `[aimo-0725]`
- When two valuation expressions agree at leading order, break the tie by choosing n's residue modulo the relevant prime to tilt the second-order floor correction in floor(n/p). _(1 example)_  `[aimo-0726]`

### sequences-and-recurrences

- Combine two divisibility relations that share the same left-hand divisor by subtracting one from a suitable multiple of the other, collapsing them into a single tighter divisibility. _(1 example)_  `[aimo-0724]`
- Forbid periodic points of an iterated self-map by exhibiting a single argument whose orbit attains infinitely many values. _(1 example)_  `[aimo-0730]`
- Force an auxiliary function to be arithmetic by summing the additive shift-displacements around a closed 3-cycle of arguments and requiring them to cancel, yielding a three-term linear relation. _(1 example)_  `[aimo-0730]`
- Take the first index at which a unit-step (increments at most one) unbounded integer sequence reaches a target value to force the immediately preceding term to equal the target minus one. _(1 example)_  `[aimo-0727]`

### size-bounding-and-descent

- Bound an unknown factorial's p-adic valuation by monotonicity of v_p(n!) against a smaller forced factorial, counting the p-divisible integers swept by the larger consecutive range to compare with an exact closed form. _(1 example)_  `[aimo-0578]`
- Bound the orbit of a map that either adds a fixed step or divides by d (when divisible) using coprimality of step and d: among any d consecutive additive iterates one is divisible by d, capping the additions before a forced division. _(1 example)_  `[aimo-0577]`
- Bound the spread of an interval-count: the number of multiples of n in any interval of fixed length L is floor(L/n) or floor(L/n)+1, so counts over equal-length intervals differ by at most one. _(1 example)_  `[aimo-0579]`
- Choose the variable to be a power of the prime p so that Legendre's formula for v_p(n!) telescopes to an exact closed form with no floor loss. _(1 example)_  `[aimo-0726]`
- Divide a common prime factor out of every term of a recurrence and shift the index to manufacture a smaller instance of the same recurrence (descent). _(1 example)_  `[aimo-0728]`
- Eliminate the shared third variable between two instances of a defining relation to reach an expression symmetric in all the parameters. _(1 example)_  `[aimo-0581]`
- Evaluate the same expression via two substitutions whose shared value is symmetric in two free parameters, then equate the resulting two composition expressions to extract a symmetric identity. _(1 example)_  `[aimo-0730]`
- Forbid periodic points of an iterated self-map by exhibiting a single argument whose orbit attains infinitely many values. _(1 example)_  `[aimo-0730]`
- Force an auxiliary function to be arithmetic by summing the additive shift-displacements around a closed 3-cycle of arguments and requiring them to cancel, yielding a three-term linear relation. _(1 example)_  `[aimo-0730]`
- Force the minimal positive value represented by a quadratic form to be coprime to a small prime by Fermat descent across equivalent forms: if the prime divides the minimal value, use form-equivalence identities to exhibit a strictly smaller represented multiple, contradicting minimality. _(1 example)_  `[aimo-0582]`
- If N is square-free and every prime factor of N divides X, conclude that N itself divides X. _(1 example)_  `[aimo-0729]`
- Induct on a cyclic configuration by deleting its extremal (largest) element and contracting its two neighbors into a single adjacency, producing a smaller valid instance of the same problem. _(1 example)_  `[aimo-0581]`
- Pin the value of a quantity known to be a multiple of a prime p by squeezing it into an interval spanning only one or two multiples of p, forcing it to equal one of those multiples. _(1 example)_  `[aimo-0576]`
- Prove a given integer is not represented by a quadratic form by checking the form's attainable residues against the integer modulo well-chosen small moduli, or equivalently by running a Jacobi-symbol reciprocity chain on the relevant quadratic-residue symbol. _(1 example)_  `[aimo-0582]`
- Prove an auxiliary quantity is unbounded by contradiction: if it were bounded, the prime factors occurring in the sequence would lie in a finite set, contradicting that infinitely many primes appear. _(1 example)_  `[aimo-0727]`
- Read a divisibility by m involving a difference of odd powers as m representing a binary quadratic form, then invoke Thue's lemma to extract a small nonzero value of that form that is a multiple of m. _(1 example)_  `[aimo-0582]`
- Recognize an add-or-divide update rule as a bijection on a finite invariant state set and iterate its inverse backward from the seed to read off the desired pre-images. _(1 example)_  `[aimo-0577]`
- Resolve a prime-power-equals-polynomial equation by lower-bounding the exponent so the prime power eventually outgrows the polynomial, leaving only finitely many small cases to check. _(1 example)_  `[aimo-0725]`
- Take the first index at which a unit-step (increments at most one) unbounded integer sequence reaches a target value to force the immediately preceding term to equal the target minus one. _(1 example)_  `[aimo-0727]`
- To find where a dynamical orbit first enters a target residue class, track its residues modulo a fixed modulus d, using that a 'divide by a' step acts as multiplication by a^{-1} mod d. _(1 example)_  `[aimo-0577]`
- To justify a coprimality WLOG, divide out any common factor of a pair and show this strictly decreases the quantity being minimized, so a minimal configuration must already be coprime. _(1 example)_  `[aimo-0731]`
- To perturb a count that came out too uniform, lower the range's upper endpoint by one so exactly one extremal element is removed, shifting a single tally while the others stay fixed. _(1 example)_  `[aimo-0579]`
- Upper-bound a factorial by pairing factors k and (n-k) symmetrically and applying AM-GM to each pair to bound it by a common square. _(1 example)_  `[aimo-0578]`
- When k terms of an arithmetic progression whose common difference is coprime to a small prime p run through all residues mod p, one term is forced divisible by p; if every term must be prime, that divisible term equals p itself. _(1 example)_  `[aimo-0576]`
- When two fractions known to be in lowest terms are equal, match numerator to numerator and denominator to denominator. _(1 example)_  `[aimo-0731]`
- When two valuation expressions agree at leading order, break the tie by choosing n's residue modulo the relevant prime to tilt the second-order floor correction in floor(n/p). _(1 example)_  `[aimo-0726]`

### telescoping-and-summation

- Cancel the common factor block shared by two adjacent 'consecutive differences are equal' expressions to extract a per-index relation between neighboring terms. _(1 example)_  `[aimo-0731]`
- Force an auxiliary function to be arithmetic by summing the additive shift-displacements around a closed 3-cycle of arguments and requiring them to cancel, yielding a three-term linear relation. _(1 example)_  `[aimo-0730]`

## algebra

### divisibility-and-gcd

- Write a relation containing a running sum or sliding product at two consecutive indices and subtract (additive case) or divide (multiplicative case) the two copies to cancel the shared cumulative part, leaving a local recurrence between neighboring terms.  `[aimo-0712 aimo-0727]`

### extremal-principle

- Pick the index pair maximizing a position-weighted product of two sequence terms, then compare it against the same product with one index shifted, using optimality to bound how fast the neighboring terms may grow relative to the extremal pair. _(1 example)_  `[aimo-0553]`
- To force a rounding / integer-approximation lower bound, place every target value at a half-integer so any integer assignment is at least 1/2 away from it. _(1 example)_  `[aimo-0707]`

### functional-equations

- Substitute f (possibly a deeper iterate of f) applied to one variable in place of a free variable of the functional relation, folding the multivariable relation into a constraint among composites/iterates of f — e.g. an index-shifted chain relating consecutive-iterate gaps.  `[aimo-0552 aimo-0710]`
- Add to a functional inequality its copy with one variable negated so the antisymmetric part of the relation cancels, leaving a clean symmetric sign condition. _(1 example)_  `[aimo-0708]`
- Iterate the functional equation along the additive orbit of a distinguished value (such as f(0)) to determine f across the whole arithmetic progression that value generates. _(1 example)_  `[aimo-0555]`
- Substitute an already-established equal pair of terms back into the self-composed (index-additive) defining relation to propagate the equality one index forward. _(1 example)_  `[aimo-0557]`
- Substitute sum/difference coordinates s = x+y, t = x-y to recast an inequality in shifted arguments as a symmetric relation in two independent free variables. _(1 example)_  `[aimo-0708]`
- To pick an integer that avoids every point of a shifted integer lattice, use that two consecutive integers cannot both land on it because their forbidden offsets would differ by a non-integer step. _(1 example)_  `[aimo-0555]`
- When each object has a unique partner satisfying a relation, test the object against itself: if it already has a different valid partner, uniqueness forces the self-pairing to violate the relation, yielding a strict inequality. _(1 example)_  `[aimo-0552]`
- When the functional equation couples f-values only within equivalence classes, generate solution families by assigning f freely and independently on each class the equation leaves uncoupled. _(1 example)_  `[aimo-0555]`

### induction-and-construction

- To force a rounding / integer-approximation lower bound, place every target value at a half-integer so any integer assignment is at least 1/2 away from it. _(1 example)_  `[aimo-0707]`

### inequalities-SOS-and-convexity

- Bound a one-sided tail sum of a sequence by a geometric series, using a uniform per-step multiplicative ratio between consecutive terms so the whole tail caps at a constant multiple of its anchor term.  `[aimo-0553 aimo-0557]`
- Apply AM-GM to a pair of cross terms whose geometric-mean product regroups into quantities you already control. _(1 example)_  `[aimo-0552]`
- Apply a shift-invariant strict inequality at the next index, using the relation's symmetry to derive the same inequality reversed and force a contradiction. _(1 example)_  `[aimo-0550]`
- Assign each value a potential equal to its distance from the central/median value, so the potentials form a fixed multiset whose total is independent of the arrangement. _(1 example)_  `[aimo-0711]`
- Bound an extremal element that must equal a sum of k others by the sum of the k smallest (or k largest) of the remaining elements. _(1 example)_  `[aimo-0551]`
- Bound the change from a small perturbation of a quantity under a square root via the difference-of-square-roots identity sqrt(A)-sqrt(a) = (A-a)/(sqrt(A)+sqrt(a)). _(1 example)_  `[aimo-0713]`
- Bound the sum of the k smallest of n sorted non-negative values by (k/n) times their total sum. _(1 example)_  `[aimo-0707]`
- Control the parity of a decimal digit sum by carry-counting: each carry in an addition lowers the digit sum by exactly 9 (an odd change), so digit-sum parity is fixed by the number of carries. _(1 example)_  `[aimo-0556]`
- Lower-bound a quantity by a counting mismatch: when the prescribed target values outnumber the atomic (consecutive-index) differences available, force at least one target to be a non-atomic difference, which decomposes into a sum of two smaller differences. _(1 example)_  `[aimo-0554]`
- Maximize a product of positive integers with a fixed sum by splitting the sum into parts of size 3. _(1 example)_  `[aimo-0557]`
- Pick the index pair maximizing a position-weighted product of two sequence terms, then compare it against the same product with one index shifted, using optimality to bound how fast the neighboring terms may grow relative to the extremal pair. _(1 example)_  `[aimo-0553]`
- Replace a convex exponential term by its tangent-line (Bernoulli) bound 2^t <= 1+t to convert exponential contributions into linear ones. _(1 example)_  `[aimo-0553]`
- Round each irrational/real term to its nearest integer to convert an approximate-sum inequality into an exact integer constant-sum target. _(1 example)_  `[aimo-0713]`
- Squeeze a sum of distinct positive integers (or strictly decreasing positive integer gaps) between its forced minimal value 1+2+...+k and an independently derived upper bound; when the two bounds coincide, equality is forced in every term. _(1 example)_  `[aimo-0554]`
- Sum a per-edge bound along a path so that each interior vertex's contribution is counted twice while the two endpoints are counted once, isolating an inequality on only the endpoint terms. _(1 example)_  `[aimo-0711]`
- Telescope a quantity that is bounded independently of m into a sum of m same-sign terms each at least a fixed constant; letting m grow forces that constant to vanish (Archimedean principle). _(1 example)_  `[aimo-0710]`
- Use strict convexity of t -> r^t to lift a monotone ordering of consecutive power-differences to the same ordering of the underlying integer exponent gaps. _(1 example)_  `[aimo-0554]`
- When a chain of terms admits both a lower-bound inequality and an upper-bound inequality that share a common block of middle terms, add the two inequalities so the shared block cancels, leaving a relation among only the boundary terms. _(1 example)_  `[aimo-0551]`
- When a factored inequality has one factor pinned to a known interval, replace that factor by a coarser monotone bound chosen so the product recombines into a neighboring term's difference of squares. _(1 example)_  `[aimo-0550]`
- When a fixed monic degree-k polynomial equals a sliding product of k shifted terms, compare the subleading (x^{k-1}) coefficient of both sides to constrain the sum of the shifts. _(1 example)_  `[aimo-0712]`
- When each object has a unique partner satisfying a relation, test the object against itself: if it already has a different valid partner, uniqueness forces the self-pairing to violate the relation, yielding a strict inequality. _(1 example)_  `[aimo-0552]`
- When the extremal element splits in many two-term ways and a threshold shows only a few values can exceed half of it, use distinctness across the splittings to pin which elements those large halves must be. _(1 example)_  `[aimo-0554]`
- When two terms are forced to be distinct, use that the bound (a+b)(1/a+1/b) >= 4 becomes strict to extract a definite surplus over the equality value. _(1 example)_  `[aimo-0709]`

### pigeonhole

- Bound a one-sided tail sum of a sequence by a geometric series, using a uniform per-step multiplicative ratio between consecutive terms so the whole tail caps at a constant multiple of its anchor term.  `[aimo-0553 aimo-0557]`

### polynomial-roots-and-factoring

- Write a relation containing a running sum or sliding product at two consecutive indices and subtract (additive case) or divide (multiplicative case) the two copies to cancel the shared cumulative part, leaving a local recurrence between neighboring terms.  `[aimo-0712 aimo-0727]`
- Choose the common ratio of a geometric progression to be a root of a tailored polynomial so that a sum of consecutive powers collapses into a single higher power. _(1 example)_  `[aimo-0554]`
- From an equation forcing k times the minimum of a set of quantities to equal a sum of k quantities each at least that minimum, invoke the equality case to conclude every one of them equals the minimum. _(1 example)_  `[aimo-0712]`
- Subtract a well-chosen constant from both sides of a quadratic constraint so the remainder factors as a product of shifted linear terms, exposing the sign structure. _(1 example)_  `[aimo-0550]`
- To pick an integer that avoids every point of a shifted integer lattice, use that two consecutive integers cannot both land on it because their forbidden offsets would differ by a non-integer step. _(1 example)_  `[aimo-0555]`
- When a fixed monic degree-k polynomial equals a sliding product of k shifted terms, compare the subleading (x^{k-1}) coefficient of both sides to constrain the sum of the shifts. _(1 example)_  `[aimo-0712]`

### sequences-and-recurrences

- Bound a one-sided tail sum of a sequence by a geometric series, using a uniform per-step multiplicative ratio between consecutive terms so the whole tail caps at a constant multiple of its anchor term.  `[aimo-0553 aimo-0557]`
- Substitute f (possibly a deeper iterate of f) applied to one variable in place of a free variable of the functional relation, folding the multivariable relation into a constraint among composites/iterates of f — e.g. an index-shifted chain relating consecutive-iterate gaps.  `[aimo-0552 aimo-0710]`
- Write a relation containing a running sum or sliding product at two consecutive indices and subtract (additive case) or divide (multiplicative case) the two copies to cancel the shared cumulative part, leaving a local recurrence between neighboring terms.  `[aimo-0712 aimo-0727]`
- Apply a shift-invariant strict inequality at the next index, using the relation's symmetry to derive the same inequality reversed and force a contradiction. _(1 example)_  `[aimo-0550]`
- Assign each value a potential equal to its distance from the central/median value, so the potentials form a fixed multiset whose total is independent of the arrangement. _(1 example)_  `[aimo-0711]`
- Bound the change from a small perturbation of a quantity under a square root via the difference-of-square-roots identity sqrt(A)-sqrt(a) = (A-a)/(sqrt(A)+sqrt(a)). _(1 example)_  `[aimo-0713]`
- Build a constant-column-sum arrangement of a self-similar multiset by recursion on its size, reducing the larger instance to the arrangement of the next-smaller copy plus a small base block. _(1 example)_  `[aimo-0713]`
- Choose the common ratio of a geometric progression to be a root of a tailored polynomial so that a sum of consecutive powers collapses into a single higher power. _(1 example)_  `[aimo-0554]`
- From an equation forcing k times the minimum of a set of quantities to equal a sum of k quantities each at least that minimum, invoke the equality case to conclude every one of them equals the minimum. _(1 example)_  `[aimo-0712]`
- Iterate the functional equation along the additive orbit of a distinguished value (such as f(0)) to determine f across the whole arithmetic progression that value generates. _(1 example)_  `[aimo-0555]`
- Lower-bound a quantity by a counting mismatch: when the prescribed target values outnumber the atomic (consecutive-index) differences available, force at least one target to be a non-atomic difference, which decomposes into a sum of two smaller differences. _(1 example)_  `[aimo-0554]`
- Pick the index pair maximizing a position-weighted product of two sequence terms, then compare it against the same product with one index shifted, using optimality to bound how fast the neighboring terms may grow relative to the extremal pair. _(1 example)_  `[aimo-0553]`
- Produce two inputs with identical digit sum by multiplying one fixed number by two different powers of 10, exploiting s(10^m X) = s(X). _(1 example)_  `[aimo-0556]`
- Substitute an already-established equal pair of terms back into the self-composed (index-additive) defining relation to propagate the equality one index forward. _(1 example)_  `[aimo-0557]`
- Subtract a well-chosen constant from both sides of a quadratic constraint so the remainder factors as a product of shifted linear terms, exposing the sign structure. _(1 example)_  `[aimo-0550]`
- Sum a per-edge bound along a path so that each interior vertex's contribution is counted twice while the two endpoints are counted once, isolating an inequality on only the endpoint terms. _(1 example)_  `[aimo-0711]`
- Telescope a quantity that is bounded independently of m into a sum of m same-sign terms each at least a fixed constant; letting m grow forces that constant to vanish (Archimedean principle). _(1 example)_  `[aimo-0710]`
- To hit an exact target sum while keeping a prescribed number of distinct summands, pad the set with sign-symmetric zero-sum pairs {-i, i} that change the count without changing the total. _(1 example)_  `[aimo-0551]`
- To lower-bound a cumulative increasing-integer sequence, partition its index range into disjoint fixed-length windows, prove a uniform minimum gain over each window, and sum the per-window bounds. _(1 example)_  `[aimo-0709]`
- Use strict convexity of t -> r^t to lift a monotone ordering of consecutive power-differences to the same ordering of the underlying integer exponent gaps. _(1 example)_  `[aimo-0554]`
- When a factored inequality has one factor pinned to a known interval, replace that factor by a coarser monotone bound chosen so the product recombines into a neighboring term's difference of squares. _(1 example)_  `[aimo-0550]`
- When a fixed monic degree-k polynomial equals a sliding product of k shifted terms, compare the subleading (x^{k-1}) coefficient of both sides to constrain the sum of the shifts. _(1 example)_  `[aimo-0712]`
- When the extremal element splits in many two-term ways and a threshold shows only a few values can exceed half of it, use distinctness across the splittings to pin which elements those large halves must be. _(1 example)_  `[aimo-0554]`
- When two terms are forced to be distinct, use that the bound (a+b)(1/a+1/b) >= 4 becomes strict to extract a definite surplus over the equality value. _(1 example)_  `[aimo-0709]`

### symmetric-functions-and-substitution

- Substitute f (possibly a deeper iterate of f) applied to one variable in place of a free variable of the functional relation, folding the multivariable relation into a constraint among composites/iterates of f — e.g. an index-shifted chain relating consecutive-iterate gaps.  `[aimo-0552 aimo-0710]`
- Add to a functional inequality its copy with one variable negated so the antisymmetric part of the relation cancels, leaving a clean symmetric sign condition. _(1 example)_  `[aimo-0708]`
- Apply AM-GM to a pair of cross terms whose geometric-mean product regroups into quantities you already control. _(1 example)_  `[aimo-0552]`
- Assign each value a potential equal to its distance from the central/median value, so the potentials form a fixed multiset whose total is independent of the arrangement. _(1 example)_  `[aimo-0711]`
- Bound an extremal element that must equal a sum of k others by the sum of the k smallest (or k largest) of the remaining elements. _(1 example)_  `[aimo-0551]`
- Build a constant-column-sum arrangement of a self-similar multiset by recursion on its size, reducing the larger instance to the arrangement of the next-smaller copy plus a small base block. _(1 example)_  `[aimo-0713]`
- Control the parity of a decimal digit sum by carry-counting: each carry in an addition lowers the digit sum by exactly 9 (an odd change), so digit-sum parity is fixed by the number of carries. _(1 example)_  `[aimo-0556]`
- Decompose each real into its floor plus fractional part, so the leftover integer budget equals the sum of the fractional parts. _(1 example)_  `[aimo-0707]`
- Maximize a product of positive integers with a fixed sum by splitting the sum into parts of size 3. _(1 example)_  `[aimo-0557]`
- Pick the variable large enough that the monomials of a polynomial occupy disjoint decimal-digit ranges, so that with no carries the digit sum of the value splits as the sum of the individual monomials' digit sums. _(1 example)_  `[aimo-0556]`
- Produce two inputs with identical digit sum by multiplying one fixed number by two different powers of 10, exploiting s(10^m X) = s(X). _(1 example)_  `[aimo-0556]`
- Round each irrational/real term to its nearest integer to convert an approximate-sum inequality into an exact integer constant-sum target. _(1 example)_  `[aimo-0713]`
- Substitute sum/difference coordinates s = x+y, t = x-y to recast an inequality in shifted arguments as a symmetric relation in two independent free variables. _(1 example)_  `[aimo-0708]`
- Subtract a well-chosen constant from both sides of a quadratic constraint so the remainder factors as a product of shifted linear terms, exposing the sign structure. _(1 example)_  `[aimo-0550]`
- To hit an exact target sum while keeping a prescribed number of distinct summands, pad the set with sign-symmetric zero-sum pairs {-i, i} that change the count without changing the total. _(1 example)_  `[aimo-0551]`
- When the functional equation couples f-values only within equivalence classes, generate solution families by assigning f freely and independently on each class the equation leaves uncoupled. _(1 example)_  `[aimo-0555]`
- When two terms are forced to be distinct, use that the bound (a+b)(1/a+1/b) >= 4 becomes strict to extract a definite surplus over the equality value. _(1 example)_  `[aimo-0709]`

### telescoping-and-summation

- Bound a one-sided tail sum of a sequence by a geometric series, using a uniform per-step multiplicative ratio between consecutive terms so the whole tail caps at a constant multiple of its anchor term.  `[aimo-0553 aimo-0557]`
- Substitute f (possibly a deeper iterate of f) applied to one variable in place of a free variable of the functional relation, folding the multivariable relation into a constraint among composites/iterates of f — e.g. an index-shifted chain relating consecutive-iterate gaps.  `[aimo-0552 aimo-0710]`
- Write a relation containing a running sum or sliding product at two consecutive indices and subtract (additive case) or divide (multiplicative case) the two copies to cancel the shared cumulative part, leaving a local recurrence between neighboring terms.  `[aimo-0712 aimo-0727]`
- Bound the sum of the k smallest of n sorted non-negative values by (k/n) times their total sum. _(1 example)_  `[aimo-0707]`
- Decompose each real into its floor plus fractional part, so the leftover integer budget equals the sum of the fractional parts. _(1 example)_  `[aimo-0707]`
- From an equation forcing k times the minimum of a set of quantities to equal a sum of k quantities each at least that minimum, invoke the equality case to conclude every one of them equals the minimum. _(1 example)_  `[aimo-0712]`
- Pick the variable large enough that the monomials of a polynomial occupy disjoint decimal-digit ranges, so that with no carries the digit sum of the value splits as the sum of the individual monomials' digit sums. _(1 example)_  `[aimo-0556]`
- Replace a convex exponential term by its tangent-line (Bernoulli) bound 2^t <= 1+t to convert exponential contributions into linear ones. _(1 example)_  `[aimo-0553]`
- Squeeze a sum of distinct positive integers (or strictly decreasing positive integer gaps) between its forced minimal value 1+2+...+k and an independently derived upper bound; when the two bounds coincide, equality is forced in every term. _(1 example)_  `[aimo-0554]`
- Sum a per-edge bound along a path so that each interior vertex's contribution is counted twice while the two endpoints are counted once, isolating an inequality on only the endpoint terms. _(1 example)_  `[aimo-0711]`
- Telescope a quantity that is bounded independently of m into a sum of m same-sign terms each at least a fixed constant; letting m grow forces that constant to vanish (Archimedean principle). _(1 example)_  `[aimo-0710]`
- To lower-bound a cumulative increasing-integer sequence, partition its index range into disjoint fixed-length windows, prove a uniform minimum gain over each window, and sum the per-window bounds. _(1 example)_  `[aimo-0709]`
- When a chain of terms admits both a lower-bound inequality and an upper-bound inequality that share a common block of middle terms, add the two inequalities so the shared block cancels, leaving a relation among only the boundary terms. _(1 example)_  `[aimo-0551]`

## combinatorics

### bijections-and-encoding

- Argue that an object maximizing a set-function cannot be a proper subset of any competitor (else the competitor would score strictly higher), so its self-overlap strictly exceeds every cross-overlap. _(1 example)_  `[aimo-0562]`
- Encode each maximal run of consecutive labels as a directed edge from its start value to its end value, turning a 'reassemble the pieces into one strip' question into existence of an Eulerian circuit in the resulting multigraph. _(1 example)_  `[aimo-0717]`
- Evaluate the mixed second difference of a lattice-point-counting function by exhibiting a translation bijection between the two adjacent slanted strips it differences. _(1 example)_  `[aimo-0566]`
- Realize an every-cell-flipped-once target as an exact tiling of the board by the move-shapes, covering each cell exactly once. _(1 example)_  `[aimo-0714]`
- Recast a lower bound on the number of parts in a partition as an area-deficit packing bound by setting up a count-preserving correspondence that encodes each part as a chain of tiles in a grid. _(1 example)_  `[aimo-0719]`
- To build arbitrary targets under coordinatewise max plus addition, assemble them from building-block vectors each of which max-dominates at one chosen coordinate. _(1 example)_  `[aimo-0564]`
- To lower-bound the number of objects satisfying a property, inject an explicitly-sized family into them by sending each base object to a qualifying one via a single minimal perturbation that an extremal feature of the object lets you invert. _(1 example)_  `[aimo-0562]`
- When a total order on the integer lattice is invariant under every translation, represent it by ranking points along a single real linear form x + alpha*y. _(1 example)_  `[aimo-0566]`

### coloring-and-parity

- Find a periodic coloring of the board so that every legal move (or move-window) intersects each color class in the same fixed count, making the move act uniformly on the classes.  `[aimo-0560 aimo-0714]`
- Build a few-color edge-coloring robust to deletion of any single color by deriving each edge's color from a recursive bisection of the vertex set into geometrically sized nested classes. _(1 example)_  `[aimo-0720]`
- Build an extremal sequence avoiding a forbidden signed consecutive-block sum by a self-similar recursive construction, defining the full sequence from a scaled copy of itself. _(1 example)_  `[aimo-0715]`
- Get a conserved invariant for a local chip-passing/redistribution move by assigning position-dependent cell weights that the move's symmetric difference-stencil annihilates. _(1 example)_  `[aimo-0561]`
- In any block of consecutive integers, use that exactly one element attains the maximal 2-adic valuation to single out one summand not divisible by the next power of two. _(1 example)_  `[aimo-0715]`
- Make a periodic grid construction close up for every input size by choosing its period according to the side-length's residue class. _(1 example)_  `[aimo-0565]`
- Pigeonhole on the per-coordinate sign patterns of a few vectors: when the number of coordinates exceeds the number of possible sign patterns, two coordinates must share the identical sign pattern across all the vectors. _(1 example)_  `[aimo-0564]`
- Realize an every-cell-flipped-once target as an exact tiling of the board by the move-shapes, covering each cell exactly once. _(1 example)_  `[aimo-0714]`
- Reduce a constant mixed (parallelogram) second-difference relation on a grid modulo 2 to pin a fixed parity relation among the four corners of every 2x2 block, converting a count of odd-valued cells into a sum of per-block tallies. _(1 example)_  `[aimo-0566]`
- To compute the mixed second difference of a lattice-point-counting function over one unit cell, count the lattice points falling in the half-open strip swept between the two consecutive boundary lines as the evaluation point advances by one in each coordinate. _(1 example)_  `[aimo-0566]`
- To limit how many marked cells a bounded-step monotone path can collect, give the mark pattern a per-row horizontal shift steeper than the path's maximum step so the path falls off each marked band. _(1 example)_  `[aimo-0716]`
- To lower-bound a sum over vertices of (number of monotone/increasing paths ending at that vertex), charge each edge of the underlying graph to one fixed (smaller-valued) endpoint, turning the per-edge total into a lower bound on the vertex-weight sum, one term per adjacency. _(1 example)_  `[aimo-0565]`
- To reach the extremal endpoints of a lattice-rank-by-linear-form construction, slide its free slope to just above versus just below a critical integer (taking it irrational and infinitesimally to a selected side), flipping whole residue classes of boundary lattice points across the threshold line. _(1 example)_  `[aimo-0566]`
- To show an extremal bound is attained, characterize its equality case as a single combinatorial target object (a vertex set whose induced subgraph and complement have prescribed structure) and construct that object explicitly for every input size. _(1 example)_  `[aimo-0565]`
- Use divisibility by a fixed odd modulus as a backward-propagating invariant of a doubling/merging process, where the oddness is what lets the divisibility survive the move's doubling step. _(1 example)_  `[aimo-0563]`
- Weight the cells of a balanced periodic coloring by a root of unity matching its period, so that each move's weighted contribution sums to zero and the global weighted total becomes an exact invariant. _(1 example)_  `[aimo-0714]`
- When a lattice map's value-comparisons are invariant under unit translation in each coordinate, deduce that the sign of f(P+v) - f(P) depends only on the difference vector v, and classify each lattice direction as one along which f increases or decreases. _(1 example)_  `[aimo-0566]`
- When an exact once-each tiling cannot cover a small leftover region, cover it instead with overlapping copies of the move-shapes so that every cell is flipped an odd number of times (a parity cover rather than an exact cover). _(1 example)_  `[aimo-0714]`
- When each move flips exactly one element per color class, equate the move count to each class's total flip count modulo 2 to force the class sizes to share parity. _(1 example)_  `[aimo-0714]`

### construction

- Prove a target state unreachable / a parameter value infeasible by exhibiting a starting configuration whose orbit under the move is periodic, so it cycles forever without hitting the target — with the block sizes left as free parameters tuned to keep the cycle alive at the boundary value. _(1 example)_  `[aimo-0559]`

### constructions

- Partition the board into independent local blocks (sizes forced by the divisibility hypothesis) so that every move's support lies entirely inside one block, letting the blocks be cleared independently. _(1 example)_  `[aimo-0714]`

### double-counting

- Find a periodic coloring of the board so that every legal move (or move-window) intersects each color class in the same fixed count, making the move act uniformly on the classes.  `[aimo-0560 aimo-0714]`
- Bound the size of an antichain by covering its ground set with comparable (totally ordered) chains, since an antichain meets each chain at most once. _(1 example)_  `[aimo-0716]`
- Charge a packing/tiling lower bound by a billiard argument: reflect non-crossing beams off the cell diagonals and pair the boundary edges where each beam enters and exits, using non-crossing to cap how many pairs of each geometric type can coexist. _(1 example)_  `[aimo-0719]`
- Convert a per-class bound of the form 'a class's size is at most the index of its topmost member' into a doubling recursion on cumulative size. _(1 example)_  `[aimo-0716]`
- Count all increasing paths on a labeled board by a per-cell DP indexed on the path's final cell, where each cell's count is the sum of its strictly-smaller adjacent neighbors' counts and local minima are seeded at 1. _(1 example)_  `[aimo-0565]`
- Evaluate the mixed second difference of a lattice-point-counting function by exhibiting a translation bijection between the two adjacent slanted strips it differences. _(1 example)_  `[aimo-0566]`
- Label each node by the maximum number of marked nodes on a monotone chain ending at it, converting 'a long marked chain exists' into 'some marked node carries a large label.' _(1 example)_  `[aimo-0716]`
- Lower-bound the combined same-color degree of two vertices by counting the edges that successive rotations of a Hamiltonian path about each endpoint force to carry a given color, each such forced edge being incident to an endpoint exactly once. _(1 example)_  `[aimo-0720]`
- Recast a lower bound on the number of parts in a partition as an area-deficit packing bound by setting up a count-preserving correspondence that encodes each part as a chain of tiles in a grid. _(1 example)_  `[aimo-0719]`
- Reduce a constant mixed (parallelogram) second-difference relation on a grid modulo 2 to pin a fixed parity relation among the four corners of every 2x2 block, converting a count of odd-valued cells into a sum of per-block tallies. _(1 example)_  `[aimo-0566]`
- Sum, over each element of a set in turn, a lower bound the structure forces on that element, then divide by the elements' known total to get an averaged bound that contradicts the hypothesis. _(1 example)_  `[aimo-0559]`
- To lower-bound a sum over vertices of (number of monotone/increasing paths ending at that vertex), charge each edge of the underlying graph to one fixed (smaller-valued) endpoint, turning the per-edge total into a lower bound on the vertex-weight sum, one term per adjacency. _(1 example)_  `[aimo-0565]`
- To upper-bound a gap-limited selection process, construct an adversarial sign sequence whose local structure forces every bounded-gap subsequence to cancel rather than accumulate one-sign surplus. _(1 example)_  `[aimo-0558]`
- When each move flips exactly one element per color class, equate the move count to each class's total flip count modulo 2 to force the class sizes to share parity. _(1 example)_  `[aimo-0714]`

### extremal-principle

- Find a periodic coloring of the board so that every legal move (or move-window) intersects each color class in the same fixed count, making the move act uniformly on the classes.  `[aimo-0560 aimo-0714]`
- Amortize a periodic process's local constraints by summing the per-step inequality over one full period of the (eventually periodic) process. _(1 example)_  `[aimo-0559]`
- Argue that an object maximizing a set-function cannot be a proper subset of any competitor (else the competitor would score strictly higher), so its self-overlap strictly exceeds every cross-overlap. _(1 example)_  `[aimo-0562]`
- Bound the size of an antichain by covering its ground set with comparable (totally ordered) chains, since an antichain meets each chain at most once. _(1 example)_  `[aimo-0716]`
- Build a few-color edge-coloring robust to deletion of any single color by deriving each edge's color from a recursive bisection of the vertex set into geometrically sized nested classes. _(1 example)_  `[aimo-0720]`
- Charge a packing/tiling lower bound by a billiard argument: reflect non-crossing beams off the cell diagonals and pair the boundary edges where each beam enters and exits, using non-crossing to cap how many pairs of each geometric type can coexist. _(1 example)_  `[aimo-0719]`
- Control the extreme entries / spread of an evolving sorted multiset by dominating it in the majorisation (prefix-sum) order by a constructed auxiliary reference sequence that holds a fixed spread while its running total dominates the real process, transferring entrywise bounds from the auxiliary to the real one. _(1 example)_  `[aimo-0718]`
- Drive an edge-coloring toward canonical form using each vertex's largest color-degree as a monovariant: via the local exchange lemma, recolor a chosen vertex's entire incident star to the color realizing its current maximum, a move that pushes that maximum monotonically upward (collapsing the star to a single color) and so terminates. _(1 example)_  `[aimo-0720]`
- Identify a homogeneous two-coordinate linear inequality v_j >= a*v_k (a >= 0) that is preserved by both coordinatewise addition and coordinatewise maximum, making it an invariant of any process built from those two operations. _(1 example)_  `[aimo-0564]`
- Label each node by the maximum number of marked nodes on a monotone chain ending at it, converting 'a long marked chain exists' into 'some marked node carries a large label.' _(1 example)_  `[aimo-0716]`
- Lower-bound the combined same-color degree of two vertices by counting the edges that successive rotations of a Hamiltonian path about each endpoint force to carry a given color, each such forced edge being incident to an endpoint exactly once. _(1 example)_  `[aimo-0720]`
- Promote a purely local firing move into a long-range transport — ship one unit (or chip-pair) to a site at a fixed distance k while restoring every intermediate site to its original value, via a fixed scripted macro of legal operations — established by induction on the transport distance k. _(1 example)_  `[aimo-0561]`
- Prove a constrained chip-firing process terminates by adopting a strictly convex site-weight (such as count weighted by squared position) as a monovariant that every outward-spreading firing strictly increases. _(1 example)_  `[aimo-0561]`
- Prove an iterative shuttling/balancing loop terminates by tracking a strictly shrinking sub-block as the monovariant. _(1 example)_  `[aimo-0561]`
- Re-apply an already-established conserved invariant to the unique near-terminal normal form a descent reaches, using it to rule out the unwanted terminal state. _(1 example)_  `[aimo-0561]`
- Sum, over each element of a set in turn, a lower bound the structure forces on that element, then divide by the elements' known total to get an averaged bound that contradicts the hypothesis. _(1 example)_  `[aimo-0559]`
- Tighten a counting bound by one by showing its equality case is itself inadmissible: the only configuration that would attain it is forced to use a deficient boundary block. _(1 example)_  `[aimo-0558]`
- To bound what a maximizer can guarantee in a pursuit/erosion game, replace the minimizer by a strictly stronger but more rigidly structured adversary whose every response you can enumerate, prove the guarantee against that adversary, then transfer it back since out-guaranteeing the stronger one out-guarantees the real one. _(1 example)_  `[aimo-0560]`
- To cap how many unwanted (off-type) elements a spacing-constrained selection is forced to include, injectively charge each forced inclusion to a distinct skipped position. _(1 example)_  `[aimo-0558]`
- To exploit a failed prefix-count condition on index-ordered vertices, splice the two ordered vertex classes alternately into a single Hamiltonian path. _(1 example)_  `[aimo-0720]`
- To limit how many marked cells a bounded-step monotone path can collect, give the mark pattern a per-row horizontal shift steeper than the path's maximum step so the path falls off each marked band. _(1 example)_  `[aimo-0716]`
- To lower-bound a sum over vertices of (number of monotone/increasing paths ending at that vertex), charge each edge of the underlying graph to one fixed (smaller-valued) endpoint, turning the per-edge total into a lower bound on the vertex-weight sum, one term per adjacency. _(1 example)_  `[aimo-0565]`
- To lower-bound the edge count of a graph carrying several edge-disjoint cycles, delete one edge from each cycle (a cycle edge is never a bridge) so connectivity survives, leaving a connected spanning subgraph with at least (#vertices - 1) edges. _(1 example)_  `[aimo-0717]`
- To lower-bound the number of objects satisfying a property, inject an explicitly-sized family into them by sending each base object to a qualifying one via a single minimal perturbation that an extremal feature of the object lets you invert. _(1 example)_  `[aimo-0562]`
- To prove a given label or color must appear on every Hamiltonian path of a graph (or that a color class is removable), argue the contrapositive by explicitly constructing a Hamiltonian path that avoids it, routing only through the other colors' vertices. _(1 example)_  `[aimo-0720]`
- To prove a non-increasing integer monovariant must eventually strictly drop, classify every move by whether it preserves the monovariant and reduce to the single recurrent move that keeps it constant. _(1 example)_  `[aimo-0559]`
- To test whether a single edge of an extremal coloring that must meet every Hamiltonian path in all colors is recolorable, pivot the witnessing Hamiltonian path about that edge, sending one endpoint to the path's far end and rerouting its arms. _(1 example)_  `[aimo-0720]`
- To upper-bound a gap-limited selection process, construct an adversarial sign sequence whose local structure forces every bounded-gap subsequence to cancel rather than accumulate one-sign surplus. _(1 example)_  `[aimo-0558]`
- To upper-bound how many cells a maximizer can keep nonzero, design a coloring and have the minimizer each turn reactively cut exactly the cells the maximizer just raised in one designated color class, permanently pinning that whole class at zero. _(1 example)_  `[aimo-0560]`
- Translate the equality case of an edge-charging (per-edge minimum) bound into adjacency constraints on the cells, separating those that attain the minimum from those that strictly exceed it. _(1 example)_  `[aimo-0565]`
- When a total order on the integer lattice is invariant under every translation, represent it by ranking points along a single real linear form x + alpha*y. _(1 example)_  `[aimo-0566]`
- When an agent always acts on the current minimum while an adversary freezes one item per turn, recast the dynamics as an order-statistic inequality on the sorted state keyed to the running count of frozen items. _(1 example)_  `[aimo-0718]`
- When each region you build up is steadily eroded by all later work, process the regions in a fixed order and assign them geometrically growing budgets, so each region's secured surplus outlasts the cumulative erosion still to come from every later region. _(1 example)_  `[aimo-0560]`

### games-and-strategy

- To bound what a maximizer can guarantee in a pursuit/erosion game, replace the minimizer by a strictly stronger but more rigidly structured adversary whose every response you can enumerate, prove the guarantee against that adversary, then transfer it back since out-guaranteeing the stronger one out-guarantees the real one. _(1 example)_  `[aimo-0560]`
- To upper-bound how many cells a maximizer can keep nonzero, design a coloring and have the minimizer each turn reactively cut exactly the cells the maximizer just raised in one designated color class, permanently pinning that whole class at zero. _(1 example)_  `[aimo-0560]`
- When an adversary's reply to one repeated identical move is drawn from a finite set of response patterns, repeat that move enough times that pigeonhole forces a single response pattern to recur a guaranteed number of times. _(1 example)_  `[aimo-0560]`
- When an agent always acts on the current minimum while an adversary freezes one item per turn, recast the dynamics as an order-statistic inequality on the sorted state keyed to the running count of frozen items. _(1 example)_  `[aimo-0718]`
- When each region you build up is steadily eroded by all later work, process the regions in a fixed order and assign them geometrically growing budgets, so each region's secured surplus outlasts the cumulative erosion still to come from every later region. _(1 example)_  `[aimo-0560]`

### graph-theory-and-connectivity

- Build a few-color edge-coloring robust to deletion of any single color by deriving each edge's color from a recursive bisection of the vertex set into geometrically sized nested classes. _(1 example)_  `[aimo-0720]`
- Drive an edge-coloring toward canonical form using each vertex's largest color-degree as a monovariant: via the local exchange lemma, recolor a chosen vertex's entire incident star to the color realizing its current maximum, a move that pushes that maximum monotonically upward (collapsing the star to a single color) and so terminates. _(1 example)_  `[aimo-0720]`
- Encode each maximal run of consecutive labels as a directed edge from its start value to its end value, turning a 'reassemble the pieces into one strip' question into existence of an Eulerian circuit in the resulting multigraph. _(1 example)_  `[aimo-0717]`
- Lower-bound the combined same-color degree of two vertices by counting the edges that successive rotations of a Hamiltonian path about each endpoint force to carry a given color, each such forced edge being incident to an endpoint exactly once. _(1 example)_  `[aimo-0720]`
- Make a periodic grid construction close up for every input size by choosing its period according to the side-length's residue class. _(1 example)_  `[aimo-0565]`
- To exploit a failed prefix-count condition on index-ordered vertices, splice the two ordered vertex classes alternately into a single Hamiltonian path. _(1 example)_  `[aimo-0720]`
- To lower-bound a sum over vertices of (number of monotone/increasing paths ending at that vertex), charge each edge of the underlying graph to one fixed (smaller-valued) endpoint, turning the per-edge total into a lower bound on the vertex-weight sum, one term per adjacency. _(1 example)_  `[aimo-0565]`
- To lower-bound the edge count of a graph carrying several edge-disjoint cycles, delete one edge from each cycle (a cycle edge is never a bridge) so connectivity survives, leaving a connected spanning subgraph with at least (#vertices - 1) edges. _(1 example)_  `[aimo-0717]`
- To prove a given label or color must appear on every Hamiltonian path of a graph (or that a color class is removable), argue the contrapositive by explicitly constructing a Hamiltonian path that avoids it, routing only through the other colors' vertices. _(1 example)_  `[aimo-0720]`
- To realize the equality case of a path-counting bound, number the vertices in a search (BFS/DFS) order from a chosen root so that every non-root vertex has exactly one earlier-numbered neighbor. _(1 example)_  `[aimo-0565]`
- To show an extremal bound is attained, characterize its equality case as a single combinatorial target object (a vertex set whose induced subgraph and complement have prescribed structure) and construct that object explicitly for every input size. _(1 example)_  `[aimo-0565]`
- To test whether a single edge of an extremal coloring that must meet every Hamiltonian path in all colors is recolorable, pivot the witnessing Hamiltonian path about that edge, sending one endpoint to the path's far end and rerouting its arms. _(1 example)_  `[aimo-0720]`
- Translate the equality case of an edge-charging (per-edge minimum) bound into adjacency constraints on the cells, separating those that attain the minimum from those that strictly exceed it. _(1 example)_  `[aimo-0565]`

### induction

- Promote a purely local firing move into a long-range transport — ship one unit (or chip-pair) to a site at a fixed distance k while restoring every intermediate site to its original value, via a fixed scripted macro of legal operations — established by induction on the transport distance k. _(1 example)_  `[aimo-0561]`

### induction-and-construction

- Argue that an object maximizing a set-function cannot be a proper subset of any competitor (else the competitor would score strictly higher), so its self-overlap strictly exceeds every cross-overlap. _(1 example)_  `[aimo-0562]`
- Bleed a single oversized pile down to a target size one unit per step by repeatedly pairing it against a small auxiliary pile that is regenerated each step, so no fresh material is consumed during the bleed. _(1 example)_  `[aimo-0563]`
- Build a few-color edge-coloring robust to deletion of any single color by deriving each edge's color from a recursive bisection of the vertex set into geometrically sized nested classes. _(1 example)_  `[aimo-0720]`
- Build an extremal sequence avoiding a forbidden signed consecutive-block sum by a self-similar recursive construction, defining the full sequence from a scaled copy of itself. _(1 example)_  `[aimo-0715]`
- Collapse equal objects by a doubling ladder: repeatedly combine two piles of the same size into one of double size, halving the number of piles each round. _(1 example)_  `[aimo-0563]`
- Control the extreme entries / spread of an evolving sorted multiset by dominating it in the majorisation (prefix-sum) order by a constructed auxiliary reference sequence that holds a fixed spread while its running total dominates the real process, transferring entrywise bounds from the auxiliary to the real one. _(1 example)_  `[aimo-0718]`
- Convert a per-class bound of the form 'a class's size is at most the index of its topmost member' into a doubling recursion on cumulative size. _(1 example)_  `[aimo-0716]`
- Count all increasing paths on a labeled board by a per-cell DP indexed on the path's final cell, where each cell's count is the sum of its strictly-smaller adjacent neighbors' counts and local minima are seeded at 1. _(1 example)_  `[aimo-0565]`
- Drive an edge-coloring toward canonical form using each vertex's largest color-degree as a monovariant: via the local exchange lemma, recolor a chosen vertex's entire incident star to the color realizing its current maximum, a move that pushes that maximum monotonically upward (collapsing the star to a single color) and so terminates. _(1 example)_  `[aimo-0720]`
- Extend a corner-anchored monotone path toward the opposite corner by splicing in the tail or a sub-segment of each path it abuts. _(1 example)_  `[aimo-0719]`
- Make a periodic grid construction close up for every input size by choosing its period according to the side-length's residue class. _(1 example)_  `[aimo-0565]`
- Partition the board into independent local blocks (sizes forced by the divisibility hypothesis) so that every move's support lies entirely inside one block, letting the blocks be cleared independently. _(1 example)_  `[aimo-0714]`
- Promote a purely local firing move into a long-range transport — ship one unit (or chip-pair) to a site at a fixed distance k while restoring every intermediate site to its original value, via a fixed scripted macro of legal operations — established by induction on the transport distance k. _(1 example)_  `[aimo-0561]`
- Prove a target state unreachable / a parameter value infeasible by exhibiting a starting configuration whose orbit under the move is periodic, so it cycles forever without hitting the target — with the block sizes left as free parameters tuned to keep the cycle alive at the boundary value. _(1 example)_  `[aimo-0559]`
- Realize a required cyclic shift of a strip by cutting it into two complementary-length blocks and swapping them by translation. _(1 example)_  `[aimo-0717]`
- Realize an every-cell-flipped-once target as an exact tiling of the board by the move-shapes, covering each cell exactly once. _(1 example)_  `[aimo-0714]`
- Tighten a counting bound by one by showing its equality case is itself inadmissible: the only configuration that would attain it is forced to use a deficient boundary block. _(1 example)_  `[aimo-0558]`
- To build arbitrary targets under coordinatewise max plus addition, assemble them from building-block vectors each of which max-dominates at one chosen coordinate. _(1 example)_  `[aimo-0564]`
- To cap how many unwanted (off-type) elements a spacing-constrained selection is forced to include, injectively charge each forced inclusion to a distinct skipped position. _(1 example)_  `[aimo-0558]`
- To exploit a failed prefix-count condition on index-ordered vertices, splice the two ordered vertex classes alternately into a single Hamiltonian path. _(1 example)_  `[aimo-0720]`
- To limit how many marked cells a bounded-step monotone path can collect, give the mark pattern a per-row horizontal shift steeper than the path's maximum step so the path falls off each marked band. _(1 example)_  `[aimo-0716]`
- To lower-bound a sum over vertices of (number of monotone/increasing paths ending at that vertex), charge each edge of the underlying graph to one fixed (smaller-valued) endpoint, turning the per-edge total into a lower bound on the vertex-weight sum, one term per adjacency. _(1 example)_  `[aimo-0565]`
- To lower-bound the number of objects satisfying a property, inject an explicitly-sized family into them by sending each base object to a qualifying one via a single minimal perturbation that an extremal feature of the object lets you invert. _(1 example)_  `[aimo-0562]`
- To prove a given label or color must appear on every Hamiltonian path of a graph (or that a color class is removable), argue the contrapositive by explicitly constructing a Hamiltonian path that avoids it, routing only through the other colors' vertices. _(1 example)_  `[aimo-0720]`
- To reach the extremal endpoints of a lattice-rank-by-linear-form construction, slide its free slope to just above versus just below a critical integer (taking it irrational and infinitesimally to a selected side), flipping whole residue classes of boundary lattice points across the threshold line. _(1 example)_  `[aimo-0566]`
- To realize the equality case of a path-counting bound, number the vertices in a search (BFS/DFS) order from a chosen root so that every non-root vertex has exactly one earlier-numbered neighbor. _(1 example)_  `[aimo-0565]`
- To show an extremal bound is attained, characterize its equality case as a single combinatorial target object (a vertex set whose induced subgraph and complement have prescribed structure) and construct that object explicitly for every input size. _(1 example)_  `[aimo-0565]`
- To upper-bound a gap-limited selection process, construct an adversarial sign sequence whose local structure forces every bounded-gap subsequence to cancel rather than accumulate one-sign surplus. _(1 example)_  `[aimo-0558]`
- Translate the equality case of an edge-charging (per-edge minimum) bound into adjacency constraints on the cells, separating those that attain the minimum from those that strictly exceed it. _(1 example)_  `[aimo-0565]`
- When a lattice map's value-comparisons are invariant under unit translation in each coordinate, deduce that the sign of f(P+v) - f(P) depends only on the difference vector v, and classify each lattice direction as one along which f increases or decreases. _(1 example)_  `[aimo-0566]`
- When an exact once-each tiling cannot cover a small leftover region, cover it instead with overlapping copies of the move-shapes so that every cell is flipped an odd number of times (a parity cover rather than an exact cover). _(1 example)_  `[aimo-0714]`
- When each region you build up is steadily eroded by all later work, process the regions in a fixed order and assign them geometrically growing budgets, so each region's secured surplus outlasts the cumulative erosion still to come from every later region. _(1 example)_  `[aimo-0560]`

### invariants

- Get a conserved invariant for a local chip-passing/redistribution move by assigning position-dependent cell weights that the move's symmetric difference-stencil annihilates. _(1 example)_  `[aimo-0561]`

### invariants-and-monovariants

- Find a periodic coloring of the board so that every legal move (or move-window) intersects each color class in the same fixed count, making the move act uniformly on the classes.  `[aimo-0560 aimo-0714]`
- Amortize a periodic process's local constraints by summing the per-step inequality over one full period of the (eventually periodic) process. _(1 example)_  `[aimo-0559]`
- Assign signs online by a balancing rule (add when the running total is nonpositive, subtract when positive) to confine every prefix sum to a bounded interval. _(1 example)_  `[aimo-0715]`
- Charge a packing/tiling lower bound by a billiard argument: reflect non-crossing beams off the cell diagonals and pair the boundary edges where each beam enters and exits, using non-crossing to cap how many pairs of each geometric type can coexist. _(1 example)_  `[aimo-0719]`
- Control the extreme entries / spread of an evolving sorted multiset by dominating it in the majorisation (prefix-sum) order by a constructed auxiliary reference sequence that holds a fixed spread while its running total dominates the real process, transferring entrywise bounds from the auxiliary to the real one. _(1 example)_  `[aimo-0718]`
- Drive an edge-coloring toward canonical form using each vertex's largest color-degree as a monovariant: via the local exchange lemma, recolor a chosen vertex's entire incident star to the color realizing its current maximum, a move that pushes that maximum monotonically upward (collapsing the star to a single color) and so terminates. _(1 example)_  `[aimo-0720]`
- Evaluate the mixed second difference of a lattice-point-counting function by exhibiting a translation bijection between the two adjacent slanted strips it differences. _(1 example)_  `[aimo-0566]`
- Get a conserved invariant for a local chip-passing/redistribution move by assigning position-dependent cell weights that the move's symmetric difference-stencil annihilates. _(1 example)_  `[aimo-0561]`
- Identify a homogeneous two-coordinate linear inequality v_j >= a*v_k (a >= 0) that is preserved by both coordinatewise addition and coordinatewise maximum, making it an invariant of any process built from those two operations. _(1 example)_  `[aimo-0564]`
- In a merging process, keep one oversized pile as a reservoir and draw an equal amount from it to inflate a smaller pile up to a partner's size, making any two piles mergeable. _(1 example)_  `[aimo-0563]`
- In any block of consecutive integers, use that exactly one element attains the maximal 2-adic valuation to single out one summand not divisible by the next power of two. _(1 example)_  `[aimo-0715]`
- Prove a constrained chip-firing process terminates by adopting a strictly convex site-weight (such as count weighted by squared position) as a monovariant that every outward-spreading firing strictly increases. _(1 example)_  `[aimo-0561]`
- Prove a target state unreachable / a parameter value infeasible by exhibiting a starting configuration whose orbit under the move is periodic, so it cycles forever without hitting the target — with the block sizes left as free parameters tuned to keep the cycle alive at the boundary value. _(1 example)_  `[aimo-0559]`
- Re-apply an already-established conserved invariant to the unique near-terminal normal form a descent reaches, using it to rule out the unwanted terminal state. _(1 example)_  `[aimo-0561]`
- Recast a qualitative target condition on a sequence as a fixed value of a counting monovariant (such as the number of maximal monochromatic blocks/runs), so reaching the target becomes driving that count to a specified value. _(1 example)_  `[aimo-0559]`
- To bound what a maximizer can guarantee in a pursuit/erosion game, replace the minimizer by a strictly stronger but more rigidly structured adversary whose every response you can enumerate, prove the guarantee against that adversary, then transfer it back since out-guaranteeing the stronger one out-guarantees the real one. _(1 example)_  `[aimo-0560]`
- To prove a non-increasing integer monovariant must eventually strictly drop, classify every move by whether it preserves the monovariant and reduce to the single recurrent move that keeps it constant. _(1 example)_  `[aimo-0559]`
- To upper-bound how many cells a maximizer can keep nonzero, design a coloring and have the minimizer each turn reactively cut exactly the cells the maximizer just raised in one designated color class, permanently pinning that whole class at zero. _(1 example)_  `[aimo-0560]`
- Use divisibility by a fixed odd modulus as a backward-propagating invariant of a doubling/merging process, where the oddness is what lets the divisibility survive the move's doubling step. _(1 example)_  `[aimo-0563]`
- When a total order on the integer lattice is invariant under every translation, represent it by ranking points along a single real linear form x + alpha*y. _(1 example)_  `[aimo-0566]`
- When an adversary's reply to one repeated identical move is drawn from a finite set of response patterns, repeat that move enough times that pigeonhole forces a single response pattern to recur a guaranteed number of times. _(1 example)_  `[aimo-0560]`
- When an agent always acts on the current minimum while an adversary freezes one item per turn, recast the dynamics as an order-statistic inequality on the sorted state keyed to the running count of frozen items. _(1 example)_  `[aimo-0718]`
- When each move flips exactly one element per color class, equate the move count to each class's total flip count modulo 2 to force the class sizes to share parity. _(1 example)_  `[aimo-0714]`
- When each region you build up is steadily eroded by all later work, process the regions in a fixed order and assign them geometrically growing budgets, so each region's secured surplus outlasts the cumulative erosion still to come from every later region. _(1 example)_  `[aimo-0560]`

### modular-arithmetic

- Get a conserved invariant for a local chip-passing/redistribution move by assigning position-dependent cell weights that the move's symmetric difference-stencil annihilates. _(1 example)_  `[aimo-0561]`

### monovariants

- Promote a purely local firing move into a long-range transport — ship one unit (or chip-pair) to a site at a fixed distance k while restoring every intermediate site to its original value, via a fixed scripted macro of legal operations — established by induction on the transport distance k. _(1 example)_  `[aimo-0561]`
- Prove an iterative shuttling/balancing loop terminates by tracking a strictly shrinking sub-block as the monovariant. _(1 example)_  `[aimo-0561]`

### monovariants-and-invariants

- Reduce a constant mixed (parallelogram) second-difference relation on a grid modulo 2 to pin a fixed parity relation among the four corners of every 2x2 block, converting a count of odd-valued cells into a sum of per-block tallies. _(1 example)_  `[aimo-0566]`
- To compute the mixed second difference of a lattice-point-counting function over one unit cell, count the lattice points falling in the half-open strip swept between the two consecutive boundary lines as the evaluation point advances by one in each coordinate. _(1 example)_  `[aimo-0566]`
- To reach the extremal endpoints of a lattice-rank-by-linear-form construction, slide its free slope to just above versus just below a critical integer (taking it irrational and infinitesimally to a selected side), flipping whole residue classes of boundary lattice points across the threshold line. _(1 example)_  `[aimo-0566]`
- When a lattice map's value-comparisons are invariant under unit translation in each coordinate, deduce that the sign of f(P+v) - f(P) depends only on the difference vector v, and classify each lattice direction as one along which f increases or decreases. _(1 example)_  `[aimo-0566]`

### p-adic-valuation

- Build an extremal sequence avoiding a forbidden signed consecutive-block sum by a self-similar recursive construction, defining the full sequence from a scaled copy of itself. _(1 example)_  `[aimo-0715]`
- In any block of consecutive integers, use that exactly one element attains the maximal 2-adic valuation to single out one summand not divisible by the next power of two. _(1 example)_  `[aimo-0715]`

### pigeonhole

- Assign signs online by a balancing rule (add when the running total is nonpositive, subtract when positive) to confine every prefix sum to a bounded interval. _(1 example)_  `[aimo-0715]`
- Bound the size of an antichain by covering its ground set with comparable (totally ordered) chains, since an antichain meets each chain at most once. _(1 example)_  `[aimo-0716]`
- Build a few-color edge-coloring robust to deletion of any single color by deriving each edge's color from a recursive bisection of the vertex set into geometrically sized nested classes. _(1 example)_  `[aimo-0720]`
- Convert a per-class bound of the form 'a class's size is at most the index of its topmost member' into a doubling recursion on cumulative size. _(1 example)_  `[aimo-0716]`
- Label each node by the maximum number of marked nodes on a monotone chain ending at it, converting 'a long marked chain exists' into 'some marked node carries a large label.' _(1 example)_  `[aimo-0716]`
- Pigeonhole on the per-coordinate sign patterns of a few vectors: when the number of coordinates exceeds the number of possible sign patterns, two coordinates must share the identical sign pattern across all the vectors. _(1 example)_  `[aimo-0564]`
- Sum, over each element of a set in turn, a lower bound the structure forces on that element, then divide by the elements' known total to get an averaged bound that contradicts the hypothesis. _(1 example)_  `[aimo-0559]`
- To prove a given label or color must appear on every Hamiltonian path of a graph (or that a color class is removable), argue the contrapositive by explicitly constructing a Hamiltonian path that avoids it, routing only through the other colors' vertices. _(1 example)_  `[aimo-0720]`
- When an adversary's reply to one repeated identical move is drawn from a finite set of response patterns, repeat that move enough times that pigeonhole forces a single response pattern to recur a guaranteed number of times. _(1 example)_  `[aimo-0560]`

### processes-and-algorithms

- Amortize a periodic process's local constraints by summing the per-step inequality over one full period of the (eventually periodic) process. _(1 example)_  `[aimo-0559]`
- Assign signs online by a balancing rule (add when the running total is nonpositive, subtract when positive) to confine every prefix sum to a bounded interval. _(1 example)_  `[aimo-0715]`
- Bleed a single oversized pile down to a target size one unit per step by repeatedly pairing it against a small auxiliary pile that is regenerated each step, so no fresh material is consumed during the bleed. _(1 example)_  `[aimo-0563]`
- Collapse equal objects by a doubling ladder: repeatedly combine two piles of the same size into one of double size, halving the number of piles each round. _(1 example)_  `[aimo-0563]`
- Count all increasing paths on a labeled board by a per-cell DP indexed on the path's final cell, where each cell's count is the sum of its strictly-smaller adjacent neighbors' counts and local minima are seeded at 1. _(1 example)_  `[aimo-0565]`
- Extend a corner-anchored monotone path toward the opposite corner by splicing in the tail or a sub-segment of each path it abuts. _(1 example)_  `[aimo-0719]`
- Get a conserved invariant for a local chip-passing/redistribution move by assigning position-dependent cell weights that the move's symmetric difference-stencil annihilates. _(1 example)_  `[aimo-0561]`
- In a merging process, keep one oversized pile as a reservoir and draw an equal amount from it to inflate a smaller pile up to a partner's size, making any two piles mergeable. _(1 example)_  `[aimo-0563]`
- Promote a purely local firing move into a long-range transport — ship one unit (or chip-pair) to a site at a fixed distance k while restoring every intermediate site to its original value, via a fixed scripted macro of legal operations — established by induction on the transport distance k. _(1 example)_  `[aimo-0561]`
- Prove a constrained chip-firing process terminates by adopting a strictly convex site-weight (such as count weighted by squared position) as a monovariant that every outward-spreading firing strictly increases. _(1 example)_  `[aimo-0561]`
- Prove a target state unreachable / a parameter value infeasible by exhibiting a starting configuration whose orbit under the move is periodic, so it cycles forever without hitting the target — with the block sizes left as free parameters tuned to keep the cycle alive at the boundary value. _(1 example)_  `[aimo-0559]`
- Prove an iterative shuttling/balancing loop terminates by tracking a strictly shrinking sub-block as the monovariant. _(1 example)_  `[aimo-0561]`
- Re-apply an already-established conserved invariant to the unique near-terminal normal form a descent reaches, using it to rule out the unwanted terminal state. _(1 example)_  `[aimo-0561]`
- Recast a qualitative target condition on a sequence as a fixed value of a counting monovariant (such as the number of maximal monochromatic blocks/runs), so reaching the target becomes driving that count to a specified value. _(1 example)_  `[aimo-0559]`
- To cap how many unwanted (off-type) elements a spacing-constrained selection is forced to include, injectively charge each forced inclusion to a distinct skipped position. _(1 example)_  `[aimo-0558]`
- To prove a non-increasing integer monovariant must eventually strictly drop, classify every move by whether it preserves the monovariant and reduce to the single recurrent move that keeps it constant. _(1 example)_  `[aimo-0559]`
- Use divisibility by a fixed odd modulus as a backward-propagating invariant of a doubling/merging process, where the oddness is what lets the divisibility survive the move's doubling step. _(1 example)_  `[aimo-0563]`
- When each region you build up is steadily eroded by all later work, process the regions in a fixed order and assign them geometrically growing budgets, so each region's secured surplus outlasts the cumulative erosion still to come from every later region. _(1 example)_  `[aimo-0560]`

### sequences-and-recurrences

- Control the extreme entries / spread of an evolving sorted multiset by dominating it in the majorisation (prefix-sum) order by a constructed auxiliary reference sequence that holds a fixed spread while its running total dominates the real process, transferring entrywise bounds from the auxiliary to the real one. _(1 example)_  `[aimo-0718]`

### size-bounding-and-descent

- Use divisibility by a fixed odd modulus as a backward-propagating invariant of a doubling/merging process, where the oddness is what lets the divisibility survive the move's doubling step. _(1 example)_  `[aimo-0563]`

## geometry

### angle-chasing-and-cyclic-quads

- Identify each external homothety center of two circles (the meet of their common tangents, or their point of tangency) and apply Monge-d'Alembert's three-circle theorem to a circle triple so the three pairwise homothety centers, with consistent internal/external parity, are forced collinear.  `[aimo-0572 aimo-0574]`
- Prove a line through a point of a circle is tangent there by the converse tangent-chord (alternate segment) theorem: a directed-angle chase showing the angle it makes with a chord through that point equals the inscribed angle that chord subtends in the alternate segment.  `[aimo-0570 aimo-0573]`
- Apply the homothety centered at the centroid with ratio -1/2, which carries each vertex to the opposite side's midpoint and the orthocenter to the circumcenter, to transport vertex and orthocenter data onto the medial triangle and nine-point circle. _(1 example)_  `[aimo-0573]`
- Certify a point is the incenter of an inscribed (Poncelet) triangle via the trillium converse: show its distance to an arc-midpoint equals that midpoint's distance to the endpoints of the touched chord, placing it on the radical axis of two arc-midpoint circles. _(1 example)_  `[aimo-0574]`
- Certify a point on a chord's perpendicular bisector as the circumcenter of a triangle erected on that chord by checking that the angle it subtends over the chord equals twice the inscribed angle the triangle's third vertex subtends (central-equals-twice-inscribed test). _(1 example)_  `[aimo-0723]`
- Convert a tangency hypothesis into an inscribed-angle equality using the tangent-chord (alternate segment) angle. _(1 example)_  `[aimo-0569]`
- Express the perpendicular distance from a point to a line as an adjacent segment times the sine of the known angle that segment makes with the line, so shared angles cancel and a distance-ratio reduces to a pure side-ratio. _(1 example)_  `[aimo-0721]`
- Identify a point as the internal homothety center of two tangent circles by proving it is the harmonic conjugate of their tangency point (the external center) with respect to the two circle centers. _(1 example)_  `[aimo-0572]`
- Identify the midpoints (or equal-ratio points) of corresponding sides as corresponding points under an established similarity, so an angle measured at one transfers to its counterpart. _(1 example)_  `[aimo-0569]`
- Introduce an auxiliary third circle so that the Monge line of three circles coincides with a known radical axis, dragging an external homothety center onto that target line. _(1 example)_  `[aimo-0574]`
- Make three chords concur at a point of equal power by recognizing them as the three pairwise radical axes of a circle triple, which meet at the radical center. _(1 example)_  `[aimo-0723]`
- Obtain a second equal-power point distinct from the first by re-running the same concyclic-quadrilateral radical-center construction on an alternative auxiliary point chosen on each circle. _(1 example)_  `[aimo-0723]`
- Prove a constructed intersection point has a desired property by introducing a phantom point that has the property by construction and showing it satisfies the original point's defining concyclicity, forcing the two to coincide. _(1 example)_  `[aimo-0570]`
- Prove a quadrilateral is tangential by taking the circle tangent to three of its four sides and using Monge's three-circle theorem (on that circle and two reference circles) to show it also touches the fourth side. _(1 example)_  `[aimo-0574]`
- Prove a target concyclicity by writing the inscribed angle at the crossing of two carrier lines as the exterior angle of the triangle those lines cut off, so it splits as a difference of two angles already equated. _(1 example)_  `[aimo-0567]`
- Prove four points concyclic by exhibiting a chord through two of them that is antiparallel to the chord through the other two with respect to the two connecting lines. _(1 example)_  `[aimo-0574]`
- Prove two circles are tangent by exhibiting a homothety that carries one onto the other and showing its center lies on both circles, so that center is their unique common point. _(1 example)_  `[aimo-0571]`
- Prove two constructed points are distinct by showing their coincidence would force a reflective symmetry on the configuration that a scalene/asymmetry hypothesis forbids. _(1 example)_  `[aimo-0723]`
- Prove two triangles sharing one equal (apex) angle are similar by showing their two base-angle pairs have the same sum and the same difference, then solving that linear system to match the base angles. _(1 example)_  `[aimo-0721]`
- Realize the reflections of a vertex across two cevians through that vertex as the images of the two cevian-feet under the homothety of ratio 2 centered at the vertex, carrying the foot-triangle's similarity type to the reflection triangle. _(1 example)_  `[aimo-0722]`
- Recognize a point on the line of a right triangle's hypotenuse that is equidistant from the right-angle vertex and one endpoint as the hypotenuse midpoint, hence the circumcenter equidistant from all three vertices. _(1 example)_  `[aimo-0570]`
- Recognize points whose ratio of distances to two fixed points is constant as lying on the Apollonius circle of those points, forcing that circle's center onto the line through the two fixed points. _(1 example)_  `[aimo-0722]`
- Recognize two triangles with respectively parallel corresponding sides as homothetic and locate the homothety center as the intersection of two corresponding-vertex lines, forcing the third corresponding-vertex line through it. _(1 example)_  `[aimo-0571]`
- Reconstruct a given fixed circle in the configuration as a tritangent circle (incircle or excircle) of an auxiliary triangle erected on the same base. _(1 example)_  `[aimo-0572]`
- Reduce a 'three lines concurrent' claim to a single candidate point defined as the second intersection of one line with an auxiliary circle through key points, then verify each remaining line passes through it. _(1 example)_  `[aimo-0569]`
- To prove four points concyclic, introduce the intersection of two connecting chords and instead show that point has equal power to two auxiliary circles (i.e. that it lies on their radical axis). _(1 example)_  `[aimo-0568]`
- Treat the second intersection of two circles through a common point as the center of the spiral similarity carrying one circle's chord to the other's (the Miquel point of the four lines). _(1 example)_  `[aimo-0570]`
- When a vertex on a circle is equidistant from two of the circle's points (equal chords), treat it as the arc-midpoint so the side through it bisects the inscribed angle and the second chord is the reflection of the first across that side. _(1 example)_  `[aimo-0568]`
- When two carrier lines pass through a shared vertex, replace an apex angle by its supplement at that vertex to manufacture the second equal-angle pair needed to conclude AA similarity of two triangles built on that vertex. _(1 example)_  `[aimo-0567]`
- When two figures have parallel corresponding sides (so are homothetic or translates), directed-angle-chase the lines joining two pairs of corresponding points to show they are not parallel, ruling out translation and leaving a homothety. _(1 example)_  `[aimo-0571]`
- When two products of signed segment lengths taken along two lines through their common intersection point are equal, invoke the converse of power-of-a-point to conclude the four segment endpoints are concyclic. _(1 example)_  `[aimo-0567]`
- When two triangles share a vertex and are each inversely similar to a common reference triangle, recognize them as related by a spiral similarity centered at the shared vertex. _(1 example)_  `[aimo-0722]`
- When two triangles share a vertex and have three pairs of equal sides, recognize the SSS congruence as a rotation about the shared vertex and read off the equal apex angles. _(1 example)_  `[aimo-0567]`

### barycentric-and-areas

- To prove a moving point is collinear with the intersection of two fixed lines, show its ratio of distances to those two lines stays constant (a point lies on a fixed line through the intersection iff this distance-ratio is fixed). _(1 example)_  `[aimo-0721]`

### complete-quadrilateral-and-newton-gauss

- Apply the Newton-Gauss line: the midpoints of the three diagonals of a complete quadrilateral are collinear. _(1 example)_  `[aimo-0573]`

### euclidean-geometry

- Identify each external homothety center of two circles (the meet of their common tangents, or their point of tangency) and apply Monge-d'Alembert's three-circle theorem to a circle triple so the three pairwise homothety centers, with consistent internal/external parity, are forced collinear.  `[aimo-0572 aimo-0574]`
- Identify a point as the internal homothety center of two tangent circles by proving it is the harmonic conjugate of their tangency point (the external center) with respect to the two circle centers. _(1 example)_  `[aimo-0572]`
- Reconstruct a given fixed circle in the configuration as a tritangent circle (incircle or excircle) of an auxiliary triangle erected on the same base. _(1 example)_  `[aimo-0572]`

### homothety-and-similarity

- Apply the homothety centered at the centroid with ratio -1/2, which carries each vertex to the opposite side's midpoint and the orthocenter to the circumcenter, to transport vertex and orthocenter data onto the medial triangle and nine-point circle. _(1 example)_  `[aimo-0573]`

### inversion

- Evaluate the power of a point with respect to a circle by treating it as a pole and using that its inverse is the foot of the perpendicular from it onto its polar, turning the inversion product OP*OP' into the squared radius. _(1 example)_  `[aimo-0573]`

### power-of-a-point-and-radical-axes

- Identify each external homothety center of two circles (the meet of their common tangents, or their point of tangency) and apply Monge-d'Alembert's three-circle theorem to a circle triple so the three pairwise homothety centers, with consistent internal/external parity, are forced collinear.  `[aimo-0572 aimo-0574]`
- Prove a line through a point of a circle is tangent there by the converse tangent-chord (alternate segment) theorem: a directed-angle chase showing the angle it makes with a chord through that point equals the inscribed angle that chord subtends in the alternate segment.  `[aimo-0570 aimo-0573]`
- Apply the Newton-Gauss line: the midpoints of the three diagonals of a complete quadrilateral are collinear. _(1 example)_  `[aimo-0573]`
- Apply the homothety centered at the centroid with ratio -1/2, which carries each vertex to the opposite side's midpoint and the orthocenter to the circumcenter, to transport vertex and orthocenter data onto the medial triangle and nine-point circle. _(1 example)_  `[aimo-0573]`
- Certify a point is the incenter of an inscribed (Poncelet) triangle via the trillium converse: show its distance to an arc-midpoint equals that midpoint's distance to the endpoints of the touched chord, placing it on the radical axis of two arc-midpoint circles. _(1 example)_  `[aimo-0574]`
- Certify a point on a chord's perpendicular bisector as the circumcenter of a triangle erected on that chord by checking that the angle it subtends over the chord equals twice the inscribed angle the triangle's third vertex subtends (central-equals-twice-inscribed test). _(1 example)_  `[aimo-0723]`
- Convert a pair of parallel-line conditions into an equal-power product equality by chasing the shared ratio they create into a product of collinear segment lengths. _(1 example)_  `[aimo-0568]`
- Evaluate the power of a point with respect to a circle by treating it as a pole and using that its inverse is the foot of the perpendicular from it onto its polar, turning the inversion product OP*OP' into the squared radius. _(1 example)_  `[aimo-0573]`
- For a cyclic quadrilateral, invoke Brocard's theorem: the diagonal triangle (meet of the diagonals together with the two meets of opposite-side pairs) is self-polar with respect to the circle, so each vertex is the pole of the opposite side. _(1 example)_  `[aimo-0573]`
- Make three chords concur at a point of equal power by recognizing them as the three pairwise radical axes of a circle triple, which meet at the radical center. _(1 example)_  `[aimo-0723]`
- Obtain a second equal-power point distinct from the first by re-running the same concyclic-quadrilateral radical-center construction on an alternative auxiliary point chosen on each circle. _(1 example)_  `[aimo-0723]`
- Prove a set of circle centres collinear by showing the circles are coaxial: exhibit two distinct points each of equal power to all of them, forcing the centres onto the common perpendicular radical line. _(1 example)_  `[aimo-0573]`
- Prove four points concyclic by exhibiting a chord through two of them that is antiparallel to the chord through the other two with respect to the two connecting lines. _(1 example)_  `[aimo-0574]`
- Recognize the external homothety center of two circles as the radical center of a triple of auxiliary circles built on the configuration. _(1 example)_  `[aimo-0574]`
- Reduce a 'three lines concurrent' claim to a single candidate point defined as the second intersection of one line with an auxiliary circle through key points, then verify each remaining line passes through it. _(1 example)_  `[aimo-0569]`
- To prove four points concyclic, introduce the intersection of two connecting chords and instead show that point has equal power to two auxiliary circles (i.e. that it lies on their radical axis). _(1 example)_  `[aimo-0568]`
- To prove two homothety centers that lie on a common line coincide, show they divide a shared segment in equal ratios (equal homothety radius-ratios force the same internal center). _(1 example)_  `[aimo-0572]`
- Upgrade two distinct equal-power points of a coaxial circle family into two genuine common intersection points by certifying their shared radical axis is of secant type, exhibiting a point lying strictly inside the circles. _(1 example)_  `[aimo-0723]`
- When a spiral similarity at the common point of two circles has rotation angle 90 degrees, conclude the circles meet orthogonally there, so each circle's radius at that point is tangent to the other circle. _(1 example)_  `[aimo-0570]`
- When two products of signed segment lengths taken along two lines through their common intersection point are equal, invoke the converse of power-of-a-point to conclude the four segment endpoints are concyclic. _(1 example)_  `[aimo-0567]`

### projective-and-cross-ratio

- Identify each external homothety center of two circles (the meet of their common tangents, or their point of tangency) and apply Monge-d'Alembert's three-circle theorem to a circle triple so the three pairwise homothety centers, with consistent internal/external parity, are forced collinear.  `[aimo-0572 aimo-0574]`
- Apply the Newton-Gauss line: the midpoints of the three diagonals of a complete quadrilateral are collinear. _(1 example)_  `[aimo-0573]`
- Evaluate the power of a point with respect to a circle by treating it as a pole and using that its inverse is the foot of the perpendicular from it onto its polar, turning the inversion product OP*OP' into the squared radius. _(1 example)_  `[aimo-0573]`
- Spot a complete quadrangle in the figure and use its harmonic property: the two opposite sides through one diagonal point cut a harmonic range on the line joining the other two diagonal points, certifying a constructed intersection as the harmonic conjugate of two known points. _(1 example)_  `[aimo-0572]`
- When a moving point keeps a constant difference (or sum) of distances to two fixed points, conclude it traces a conic having those two points as foci. _(1 example)_  `[aimo-0572]`

### projective-and-polar-methods

- For a cyclic quadrilateral, invoke Brocard's theorem: the diagonal triangle (meet of the diagonals together with the two meets of opposite-side pairs) is self-polar with respect to the circle, so each vertex is the pole of the opposite side. _(1 example)_  `[aimo-0573]`

### radical-axes-and-power-of-a-point

- Introduce an auxiliary third circle so that the Monge line of three circles coincides with a known radical axis, dragging an external homothety center onto that target line. _(1 example)_  `[aimo-0574]`
- Prove a quadrilateral is tangential by taking the circle tangent to three of its four sides and using Monge's three-circle theorem (on that circle and two reference circles) to show it also touches the fourth side. _(1 example)_  `[aimo-0574]`
- Prove four points concyclic by exhibiting a chord through two of them that is antiparallel to the chord through the other two with respect to the two connecting lines. _(1 example)_  `[aimo-0574]`

### spiral-similarity-and-rotation

- Apply the homothety centered at the centroid with ratio -1/2, which carries each vertex to the opposite side's midpoint and the orthocenter to the circumcenter, to transport vertex and orthocenter data onto the medial triangle and nine-point circle. _(1 example)_  `[aimo-0573]`
- Convert a tangency hypothesis into an inscribed-angle equality using the tangent-chord (alternate segment) angle. _(1 example)_  `[aimo-0569]`
- Identify the midpoints (or equal-ratio points) of corresponding sides as corresponding points under an established similarity, so an angle measured at one transfers to its counterpart. _(1 example)_  `[aimo-0569]`
- Introduce an auxiliary third circle so that the Monge line of three circles coincides with a known radical axis, dragging an external homothety center onto that target line. _(1 example)_  `[aimo-0574]`
- Prove a quadrilateral is tangential by taking the circle tangent to three of its four sides and using Monge's three-circle theorem (on that circle and two reference circles) to show it also touches the fourth side. _(1 example)_  `[aimo-0574]`
- Prove four points concyclic by exhibiting a chord through two of them that is antiparallel to the chord through the other two with respect to the two connecting lines. _(1 example)_  `[aimo-0574]`
- Prove two circles are tangent by exhibiting a homothety that carries one onto the other and showing its center lies on both circles, so that center is their unique common point. _(1 example)_  `[aimo-0571]`
- Realize the reflections of a vertex across two cevians through that vertex as the images of the two cevian-feet under the homothety of ratio 2 centered at the vertex, carrying the foot-triangle's similarity type to the reflection triangle. _(1 example)_  `[aimo-0722]`
- Recognize the external homothety center of two circles as the radical center of a triple of auxiliary circles built on the configuration. _(1 example)_  `[aimo-0574]`
- Recognize two triangles with respectively parallel corresponding sides as homothetic and locate the homothety center as the intersection of two corresponding-vertex lines, forcing the third corresponding-vertex line through it. _(1 example)_  `[aimo-0571]`
- Treat the second intersection of two circles through a common point as the center of the spiral similarity carrying one circle's chord to the other's (the Miquel point of the four lines). _(1 example)_  `[aimo-0570]`
- When a spiral similarity at the common point of two circles has rotation angle 90 degrees, conclude the circles meet orthogonally there, so each circle's radius at that point is tangent to the other circle. _(1 example)_  `[aimo-0570]`
- When a vertex on a circle is equidistant from two of the circle's points (equal chords), treat it as the arc-midpoint so the side through it bisects the inscribed angle and the second chord is the reflection of the first across that side. _(1 example)_  `[aimo-0568]`
- When two carrier lines pass through a shared vertex, replace an apex angle by its supplement at that vertex to manufacture the second equal-angle pair needed to conclude AA similarity of two triangles built on that vertex. _(1 example)_  `[aimo-0567]`
- When two figures have parallel corresponding sides (so are homothetic or translates), directed-angle-chase the lines joining two pairs of corresponding points to show they are not parallel, ruling out translation and leaving a homothety. _(1 example)_  `[aimo-0571]`
- When two triangles share a vertex and are each inversely similar to a common reference triangle, recognize them as related by a spiral similarity centered at the shared vertex. _(1 example)_  `[aimo-0722]`
- When two triangles share a vertex and have three pairs of equal sides, recognize the SSS congruence as a rotation about the shared vertex and read off the equal apex angles. _(1 example)_  `[aimo-0567]`

### triangle-centers-and-euler-line

- Apply the homothety centered at the centroid with ratio -1/2, which carries each vertex to the opposite side's midpoint and the orthocenter to the circumcenter, to transport vertex and orthocenter data onto the medial triangle and nine-point circle. _(1 example)_  `[aimo-0573]`

### trig-and-length-bashing

- Convert a pair of parallel-line conditions into an equal-power product equality by chasing the shared ratio they create into a product of collinear segment lengths. _(1 example)_  `[aimo-0568]`
- Express the perpendicular distance from a point to a line as an adjacent segment times the sine of the known angle that segment makes with the line, so shared angles cancel and a distance-ratio reduces to a pure side-ratio. _(1 example)_  `[aimo-0721]`
- Prove two triangles sharing one equal (apex) angle are similar by showing their two base-angle pairs have the same sum and the same difference, then solving that linear system to match the base angles. _(1 example)_  `[aimo-0721]`
- Recognize points whose ratio of distances to two fixed points is constant as lying on the Apollonius circle of those points, forcing that circle's center onto the line through the two fixed points. _(1 example)_  `[aimo-0722]`
- To prove a moving point is collinear with the intersection of two fixed lines, show its ratio of distances to those two lines stays constant (a point lies on a fixed line through the intersection iff this distance-ratio is fixed). _(1 example)_  `[aimo-0721]`
- To prove two homothety centers that lie on a common line coincide, show they divide a shared segment in equal ratios (equal homothety radius-ratios force the same internal center). _(1 example)_  `[aimo-0572]`
- When a moving point keeps a constant difference (or sum) of distances to two fixed points, conclude it traces a conic having those two points as foci. _(1 example)_  `[aimo-0572]`
