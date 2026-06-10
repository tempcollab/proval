## Status
solved

## Approaches tried
- Pigeonhole on the 10 decimal digits (gives k ≤ 5) combined with a mod-2 parity argument to rule out k = 5, matched by the explicit construction (1234, 6789) with exponents (m, n) = (2, 1) — worked; yields the largest value k = 4.

## Current best
Complete solution. The answer is **k = 4**. Upper bound: distinctness of all 2k digits forces 2k ≤ 10, so k ≤ 5; a parity (mod 2) argument shows k = 5 is impossible. Construction: (1234, 6789) is a 4-similar pair.

## Full proof

### Setup and conventions

A pair of natural numbers written $\overline{a_1 a_2 \dots a_k}$ and $\overline{b_1 b_2 \dots b_k}$ is *$k$-similar* if:

- all $2k$ digits $a_1, \dots, a_k, b_1, \dots, b_k$ are pairwise distinct (each lies in $\{0,1,\dots,9\}$), and
- there exist **distinct** natural numbers $m, n$ with
$$
a_1^m + a_2^m + \dots + a_k^m \;=\; b_1^n + b_2^n + \dots + b_k^n. \tag{$\ast$}
$$

We use the convention that natural numbers are the positive integers, so $m, n \ge 1$; this is the relevant convention here because the exponents must be genuine natural numbers, and (as flagged in the outline review) the parity argument below relies on $m, n \ge 1$. Also, $\overline{a_1\dots a_k}$ denotes a $k$-digit numeral, so $a_1 \ne 0$ and $b_1 \ne 0$ (the leading-digit condition is used only to confirm that the construction below produces genuine $k$-digit numbers; it is never used in the upper-bound argument).

We claim the largest such $k$ is
$$
\boxed{k = 4}.
$$

The proof has two parts: an upper bound $k \le 4$, and a construction achieving $k = 4$.

---

### Part 1: Upper bound — no $k$-similar pair exists for $k \ge 5$

**Step 1 (Pigeonhole: $k \le 5$).**
By definition, the $2k$ digits $a_1, \dots, a_k, b_1, \dots, b_k$ are pairwise distinct, and every digit is an element of the $10$-element set $\{0,1,\dots,9\}$. Hence we have $2k$ distinct elements inside a set of size $10$, which forces
$$
2k \le 10, \qquad\text{i.e.}\qquad k \le 5.
$$
(This uses distinctness across *both* numbers, not merely within each number, which is exactly the hypothesis.)

It remains to exclude $k = 5$.

**Step 2 ($k = 5$ forces a partition of $\{0,\dots,9\}$).**
Suppose $k = 5$. Then the $2k = 10$ digits are $10$ pairwise-distinct elements of the $10$-element set $\{0,1,\dots,9\}$. A set of $10$ distinct elements drawn from a set of exactly $10$ elements must be the whole set; that is, every one of $0,1,\dots,9$ occurs exactly once among the digits. Writing
$$
A = \{a_1,\dots,a_5\}, \qquad B = \{b_1,\dots,b_5\},
$$
these are disjoint $5$-element sets (disjoint because the $a_i$ and $b_j$ are mutually distinct), and their union is all of $\{0,1,\dots,9\}$. Thus $A \sqcup B$ is a partition of $\{0,1,\dots,9\}$ into two blocks of size $5$.

**Step 3 (Parity Lemma).**
*For every digit $a \in \{0,1,\dots,9\}$ and every integer exponent $e \ge 1$,*
$$
a^e \equiv a \pmod 2.
$$
*Consequently, for any finite set $S \subseteq \{0,1,\dots,9\}$ and any $e \ge 1$,*
$$
\sum_{a \in S} a^e \;\equiv\; \sum_{a \in S} a \;\equiv\; \#\{a \in S : a \text{ odd}\} \pmod 2.
$$

*Proof of the lemma.* Work modulo $2$. Every integer is congruent to $0$ or $1$ mod $2$.

- If $a$ is even, then $a \equiv 0 \pmod 2$, so $a^e \equiv 0^e = 0 \equiv a \pmod 2$ (here $e \ge 1$ is used so that $0^e = 0$).
- If $a$ is odd, then $a \equiv 1 \pmod 2$, so $a^e \equiv 1^e = 1 \equiv a \pmod 2$.

In both cases $a^e \equiv a \pmod 2$, proving the first statement. (This is an instance of basic modular arithmetic; cf. the "Modular arithmetic, CRT" entry of the knowledge base.)

Summing over $a \in S$ and reducing mod $2$:
$$
\sum_{a\in S} a^e \equiv \sum_{a\in S} a \pmod 2.
$$
Finally, in the sum $\sum_{a\in S} a$ each even $a$ contributes $0 \pmod 2$ and each odd $a$ contributes $1 \pmod 2$, so the sum is congruent to the number of odd elements of $S$. $\square$

Note the hypothesis $e \ge 1$ is essential: at $e = 0$ one would have $a^0 = 1 \not\equiv a$ for even $a$. Since $m, n \ge 1$ are natural numbers, the lemma applies to both exponents.

**Step 4 (The parity dichotomy kills $k = 5$).**
The set $\{0,1,\dots,9\}$ contains exactly the five odd digits $\{1,3,5,7,9\}$. Let
$$
p = \#\{a \in A : a \text{ odd}\}.
$$
Since $A \sqcup B = \{0,\dots,9\}$ and the odd digits number $5$, the number of odd digits in $B$ is $5 - p$.

By the Parity Lemma (Step 3), applied with $S = A,\, e = m$ and with $S = B,\, e = n$ (both $m, n \ge 1$),
$$
\sum_{a \in A} a^m \equiv p \pmod 2, \qquad
\sum_{b \in B} b^n \equiv 5 - p \pmod 2,
$$
**for every** choice of exponents $m, n \ge 1$. Now
$$
p + (5 - p) = 5,
$$
which is odd, so $p$ and $5 - p$ have **opposite** parities. Therefore the two sides of $(\ast)$ are incongruent mod $2$:
$$
\sum_{a \in A} a^m \;\not\equiv\; \sum_{b \in B} b^n \pmod 2,
$$
and in particular they cannot be equal, for any $m, n \ge 1$. This contradicts $(\ast)$.

Hence no $5$-similar pair exists. (Observe that the distinctness $m \ne n$ was never used here: the parity obstruction is exponent-independent and rules out $k = 5$ for *all* pairs $(m,n)$.)

**Conclusion of Part 1.** Combining Step 1 ($k \le 5$) with Step 4 (no $k = 5$), every $k$-similar pair has
$$
k \le 4.
$$

---

### Part 2: Construction achieving $k = 4$

Consider the two natural numbers
$$
\overline{a_1 a_2 a_3 a_4} = 1234, \qquad \overline{b_1 b_2 b_3 b_4} = 6789,
$$
with exponents $m = 2$ and $n = 1$.

**Validity checks.**

- *Genuine $4$-digit numbers:* the leading digits are $a_1 = 1 \ne 0$ and $b_1 = 6 \ne 0$, so $1234$ and $6789$ are honest $4$-digit natural numbers.
- *Pairwise distinct digits:* the eight digits used are $1, 2, 3, 4, 6, 7, 8, 9$, which are pairwise distinct (and all lie in $\{0,\dots,9\}$).
- *Distinct natural exponents:* $m = 2$ and $n = 1$ are natural numbers with $m \ne n$.

**The equation.** Compute both sides:
$$
a_1^m + a_2^m + a_3^m + a_4^m = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30,
$$
$$
b_1^n + b_2^n + b_3^n + b_4^n = 6^1 + 7^1 + 8^1 + 9^1 = 6 + 7 + 8 + 9 = 30.
$$
Both equal $30$, so $(\ast)$ holds with $k = 4$:
$$
1^2 + 2^2 + 3^2 + 4^2 \;=\; 30 \;=\; 6^1 + 7^1 + 8^1 + 9^1.
$$

Therefore $(1234, 6789)$ is a $4$-similar pair, and $k = 4$ is attained.

---

### Conclusion

By Part 1, every $k$-similar pair satisfies $k \le 4$; by Part 2, a $4$-similar pair exists. Hence the largest value of $k$ for which $k$-similar numbers exist is
$$
\boxed{k = 4}.
$$
$\blacksquare$
