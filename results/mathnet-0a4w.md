## Status
solved

## Approaches tried
- Polynomial identity / "transform the roots" (Resultants entry, knowledge_base.md): exhibit an identity $Q(x^2) = P(x)\cdot(x^3 - 2x - 1)$ in $\mathbb{Z}[x]$, then substitute $x = r$. — worked; gives a complete, case-free proof.

## Current best
The full proof below is complete and rigorous.

## Full proof

**Setup.** We are given
$$P(x) = x^3 - 2x + 1, \qquad Q(x) = x^3 - 4x^2 + 4x - 1,$$
and a number $r$ with $P(r) = 0$. We must show $Q(r^2) = 0$. (The claim is about any root $r$ of $P$, real or complex; the argument below does not depend on which root it is.)

**Key Lemma (polynomial identity).** As an equality of polynomials in $\mathbb{Z}[x]$,
$$Q(x^2) = P(x)\cdot\bigl(x^3 - 2x - 1\bigr). \tag{$\ast$}$$

*Proof of the Lemma.* We expand both sides and compare them coefficient by coefficient.

**Left-hand side.** Here $Q(x^2)$ means $Q$ evaluated at the argument $x^2$, i.e. every $x$ in $Q$ is replaced by $x^2$:
$$
Q(x^2) = (x^2)^3 - 4(x^2)^2 + 4(x^2) - 1.
$$
Using $(x^2)^3 = x^6$ and $(x^2)^2 = x^4$, this is
$$
Q(x^2) = x^6 - 4x^4 + 4x^2 - 1. \tag{1}
$$

**Right-hand side.** We multiply $P(x) = x^3 - 2x + 1$ by $x^3 - 2x - 1$ term by term. Write the two factors as
$$
P(x) = x^3 + 0\cdot x^2 - 2x + 1, \qquad x^3 - 2x - 1 = x^3 + 0\cdot x^2 - 2x - 1.
$$
The product is the sum of nine terms, $x^3\cdot(\cdots)$, $-2x\cdot(\cdots)$, $+1\cdot(\cdots)$:
$$
\begin{aligned}
x^3 \cdot (x^3 - 2x - 1) &= x^6 - 2x^4 - x^3, \\
(-2x)\cdot (x^3 - 2x - 1) &= -2x^4 + 4x^2 + 2x, \\
(+1)\cdot (x^3 - 2x - 1) &= x^3 - 2x - 1.
\end{aligned}
$$
Adding these three rows and collecting powers of $x$:

- $x^6$ : coefficient $1$ (only from the first row), giving $x^6$.
- $x^4$ : $-2 + (-2) = -4$, giving $-4x^4$.
- $x^3$ : $-1 + 1 = 0$, giving $0$.
- $x^2$ : $+4$ (only from the second row), giving $4x^2$.
- $x^1$ : $+2 + (-2) = 0$, giving $0$.
- $x^0$ : $-1$ (only from the third row), giving $-1$.

Hence
$$
P(x)\cdot(x^3 - 2x - 1) = x^6 - 4x^4 + 4x^2 - 1. \tag{2}
$$

Comparing (1) and (2), every coefficient agrees, so $Q(x^2) = P(x)\cdot(x^3 - 2x - 1)$ as polynomials. This proves $(\ast)$. $\qquad\blacksquare$ (Lemma)

*Remark (how the identity arises).* The factorization is a difference of squares. From (1),
$$
Q(x^2) = x^6 - 4x^4 + 4x^2 - 1 = (x^3 - 2x)^2 - 1,
$$
since $(x^3 - 2x)^2 = x^6 + 2\cdot x^3\cdot(-2x) + 4x^2 = x^6 - 4x^4 + 4x^2$. Applying $A^2 - B^2 = (A+B)(A-B)$ with $A = x^3 - 2x$ and $B = 1$,
$$
(x^3 - 2x)^2 - 1 = (x^3 - 2x + 1)(x^3 - 2x - 1) = P(x)\,(x^3 - 2x - 1),
$$
because $x^3 - 2x + 1 = P(x)$ by definition. This is an independent verification of $(\ast)$.

**Conclusion.** Identity $(\ast)$ holds for every value of $x$; in particular, substitute $x = r$:
$$
Q(r^2) = P(r)\cdot\bigl(r^3 - 2r - 1\bigr).
$$
By hypothesis $P(r) = 0$, so the right-hand side is $0\cdot(r^3 - 2r - 1) = 0$ by the zero-product property. Therefore
$$
Q(r^2) = 0,
$$
as required. (The factor $r^3 - 2r - 1$ need not be evaluated; the product vanishes because $P(r) = 0$, independent of which root $r$ is.) $\qquad\blacksquare$
