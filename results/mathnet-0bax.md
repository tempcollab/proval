## Status
solved

## Approaches tried
- Direct proof of the iff by reducing condition (1) to the symmetric pair
  {|a|=|b|, |a²−4b|=|b²−4a|} (via Vieta's formulas and the sum-of-squared-moduli
  formula), then a polar-form trigonometric reduction of the second equation to a
  single cosine equation, whose two solution families are exactly a³=b³ and b=ā —
  **worked**; full rigorous proof below. Lemmas 1, 2 verified symbolically/numerically
  (Lemma 2 symbolic difference = 0; Lemma 1 max error 2e−14); full iff confirmed over
  300k structured+random trials with 0 mismatches.

## Current best
Complete proof (see Full proof).

## Full proof

Throughout, $\bar z$ denotes the complex conjugate of $z$, and $|z|$ its modulus.
We write the two quadratics as
$$\text{eq1}: \; x^2 - a x + b = 0, \qquad \text{eq2}: \; x^2 - b x + a = 0,$$
with roots $r_1, r_2$ of eq1 and $s_1, s_2$ of eq2 (counted with multiplicity, in
$\mathbb{C}$, which exist by the Fundamental Theorem of Algebra).

**Reading of condition (1).** A monic quadratic has an *unordered* pair (multiset)
of roots; there is no canonical ordering of complex roots. The only well-defined
reading of "the absolute values of the roots of eq1 are respectively equal to the
absolute values of the roots of eq2" is therefore the equality of the two
*multisets* of nonnegative reals:
$$\text{(1)} \iff \{\,|r_1|,\,|r_2|\,\} = \{\,|s_1|,\,|s_2|\,\} \quad\text{(as multisets).}$$
This is the reading we prove equivalent to (2). We must show (1) $\iff$ (2), where
$$\text{(2)}: \quad a^3 = b^3 \ \text{ or } \ b = \bar a.$$

---

### Preliminary lemmas

**Lemma 0 (Vieta's formulas).** For eq1, $r_1 + r_2 = a$ and $r_1 r_2 = b$; for eq2,
$s_1 + s_2 = b$ and $s_1 s_2 = a$.

*Proof.* $x^2 - ax + b = (x-r_1)(x-r_2) = x^2 - (r_1+r_2)x + r_1 r_2$; compare
coefficients. Same for eq2. $\square$

**Lemma 1 (sum of squared root-moduli).** For the quadratic $x^2 - p x + q$ with
complex roots $\rho_1,\rho_2$,
$$|\rho_1|^2 + |\rho_2|^2 = \tfrac12\bigl(|p|^2 + |p^2 - 4q|\bigr).$$

*Proof.* By the quadratic formula, $\rho_{1,2} = \tfrac12(p \pm d)$ where
$d \in \mathbb{C}$ is a fixed square root of $p^2 - 4q$, i.e. $d^2 = p^2 - 4q$.
Then
$$|\rho_1|^2 + |\rho_2|^2 = \tfrac14\bigl(|p+d|^2 + |p-d|^2\bigr).$$
For any complex $u,v$ the **parallelogram law** $|u+v|^2 + |u-v|^2 = 2|u|^2 + 2|v|^2$
holds (expand $|u\pm v|^2 = |u|^2 \pm 2\operatorname{Re}(u\bar v) + |v|^2$ and add).
Applying it with $u = p$, $v = d$:
$$|\rho_1|^2 + |\rho_2|^2 = \tfrac14\bigl(2|p|^2 + 2|d|^2\bigr) = \tfrac12\bigl(|p|^2 + |d|^2\bigr).$$
Finally $|d|^2 = |d^2| = |p^2 - 4q|$. Substituting gives the claim. $\square$

**Lemma 2 (a multiset of two nonnegative reals is determined by its sum and product).**
For nonnegative reals $p,q,p',q'$,
$$\{p,q\} = \{p',q'\} \ \text{(as multisets)} \iff p+q = p'+q' \ \text{ and }\ pq = p'q'.$$

*Proof.* ($\Rightarrow$) Equal multisets have equal sums and equal products.
($\Leftarrow$) The numbers $p,q$ are precisely the two roots (with multiplicity) of
the monic real quadratic $t^2 - (p+q)t + pq = 0$, and likewise $p',q'$ are the roots
of $t^2 - (p'+q')t + p'q' = 0$. If $p+q=p'+q'$ and $pq=p'q'$ these are the *same*
polynomial, hence have the same multiset of roots: $\{p,q\} = \{p',q'\}$. $\square$

A direct consequence we will use: if $\{|r_1|,|r_2|\} = \{|s_1|,|s_2|\}$, then in
addition to the equalities of sum and product we also have equality of the sums of
squares, since for nonnegative reals
$$|r_1|^2 + |r_2|^2 = (|r_1|+|r_2|)^2 - 2|r_1||r_2|,$$
which is a function of the (equal) sum and (equal) product. This identity applies to
the nonnegative reals $|r_i|$, **not** to the complex roots themselves.

---

### Part I: condition (1) $\Longrightarrow$ condition (2)

Assume $\{|r_1|,|r_2|\} = \{|s_1|,|s_2|\}$. By Lemma 2 (the "$\Rightarrow$"
direction together with the consequence above) this gives three equalities:
$$|r_1|+|r_2| = |s_1|+|s_2|, \qquad |r_1||r_2| = |s_1||s_2|, \qquad |r_1|^2+|r_2|^2 = |s_1|^2+|s_2|^2. \tag{$\ast$}$$

**Step 1: extract $|a| = |b|$.** By Lemma 0, $r_1 r_2 = b$ and $s_1 s_2 = a$, so
$$|r_1||r_2| = |r_1 r_2| = |b|, \qquad |s_1||s_2| = |s_1 s_2| = |a|.$$
The middle equality of $(\ast)$ then gives
$$\boxed{|a| = |b|}. \tag{i}$$

**Step 2: extract $|a^2 - 4b| = |b^2 - 4a|$.** Apply Lemma 1 to each equation.
For eq1, $(p,q) = (a,b)$:
$$|r_1|^2 + |r_2|^2 = \tfrac12\bigl(|a|^2 + |a^2 - 4b|\bigr).$$
For eq2, $(p,q) = (b,a)$:
$$|s_1|^2 + |s_2|^2 = \tfrac12\bigl(|b|^2 + |b^2 - 4a|\bigr).$$
The third equality of $(\ast)$ equates these:
$$|a|^2 + |a^2 - 4b| = |b|^2 + |b^2 - 4a|.$$
Now use (i): $|a|^2 = |b|^2$, so these terms cancel, leaving
$$\boxed{|a^2 - 4b| = |b^2 - 4a|}. \tag{ii}$$
(The cancellation requires (i), so Step 1 must precede Step 2.)

Thus condition (1) implies (i) and (ii). We now solve (i)+(ii).

**Step 3: degenerate case.** If $a = 0$, then by (i) $|b| = |a| = 0$, so $b = 0$; and
symmetrically if $b=0$ then $a=0$. So either $a = b = 0$, or both $a,b \neq 0$. If
$a = b = 0$ then $a^3 = b^3 = 0$, so condition (2) holds. Assume henceforth
$a, b \neq 0$.

**Step 4: polar normalization.** Since $a,b \neq 0$ and $|a| = |b|$ by (i), set
$$r := |a| = |b| > 0, \qquad a = r e^{i\alpha}, \quad b = r e^{i\beta},$$
with real arguments $\alpha,\beta$.

**Step 5: reduce (ii) to a cosine equation (Lemma 3).**

**Lemma 3.** With $a = r e^{i\alpha}$, $b = r e^{i\beta}$ ($r>0$),
$$|a^2 - 4b|^2 - |b^2 - 4a|^2 = 8 r^3\bigl(\cos(\alpha - 2\beta) - \cos(2\alpha - \beta)\bigr).$$

*Proof.* For any complex $z$, $|z|^2 = z\bar z$. Compute
$$|a^2 - 4b|^2 = (a^2 - 4b)(\overline{a^2} - 4\bar b)
= |a|^4 - 4 a^2 \bar b - 4 \overline{a^2}\, b + 16 |b|^2,$$
$$|b^2 - 4a|^2 = (b^2 - 4a)(\overline{b^2} - 4\bar a)
= |b|^4 - 4 b^2 \bar a - 4 \overline{b^2}\, a + 16 |a|^2.$$
Subtracting and using $|a| = |b| = r$ (so $|a|^4 = |b|^4 = r^4$ and
$16|b|^2 = 16|a|^2 = 16 r^2$ cancel pairwise):
$$|a^2 - 4b|^2 - |b^2 - 4a|^2
= -4\bigl(a^2\bar b + \overline{a^2}\,b\bigr) + 4\bigl(b^2\bar a + \overline{b^2}\,a\bigr).$$
Since $a^2\bar b + \overline{a^2}\,b = a^2 \bar b + \overline{a^2 \bar b}
= 2\operatorname{Re}(a^2 \bar b)$ and likewise
$b^2\bar a + \overline{b^2}\,a = 2\operatorname{Re}(b^2 \bar a)$, this is
$$= -8\operatorname{Re}(a^2\bar b) + 8\operatorname{Re}(b^2\bar a).$$
Now $a^2\bar b = r^2 e^{2i\alpha}\cdot r e^{-i\beta} = r^3 e^{i(2\alpha-\beta)}$, so
$\operatorname{Re}(a^2\bar b) = r^3 \cos(2\alpha-\beta)$; and
$b^2\bar a = r^3 e^{i(2\beta-\alpha)}$, so
$\operatorname{Re}(b^2\bar a) = r^3 \cos(2\beta-\alpha) = r^3\cos(\alpha-2\beta)$
(cosine is even). Therefore
$$|a^2 - 4b|^2 - |b^2 - 4a|^2 = -8 r^3 \cos(2\alpha-\beta) + 8 r^3\cos(\alpha-2\beta)
= 8 r^3\bigl(\cos(\alpha-2\beta) - \cos(2\alpha-\beta)\bigr),$$
as claimed. $\square$

Equation (ii) says $|a^2-4b| = |b^2-4a|$, i.e. $|a^2-4b|^2 - |b^2-4a|^2 = 0$ (both
sides nonnegative, so equality of moduli is equivalent to equality of squared
moduli). Since $r > 0$, Lemma 3 turns (ii) into the single cosine equation
$$\cos(\alpha - 2\beta) = \cos(2\alpha - \beta). \tag{$\dagger$}$$

**Step 6: solve the cosine equation.** Write $X = 2\alpha - \beta$ and
$Y = \alpha - 2\beta$, so $(\dagger)$ is $\cos X = \cos Y$. The standard
characterization is
$$\cos X = \cos Y \iff X \equiv Y \pmod{2\pi} \ \text{ or }\ X \equiv -Y \pmod{2\pi},$$
(because $\cos X - \cos Y = -2\sin\!\frac{X+Y}{2}\sin\!\frac{X-Y}{2} = 0$ iff
$\frac{X-Y}{2} \equiv 0$ or $\frac{X+Y}{2} \equiv 0 \pmod{\pi}$, i.e.
$X-Y \equiv 0$ or $X+Y \equiv 0 \pmod{2\pi}$). We treat the two branches.

**Case A: $X \equiv Y \pmod{2\pi}$.** Here $X - Y = (2\alpha-\beta) - (\alpha-2\beta)
= \alpha + \beta$, so $X \equiv Y \pmod{2\pi}$ is equivalent to
$\alpha + \beta \equiv 0 \pmod{2\pi}$, i.e. $\beta \equiv -\alpha \pmod{2\pi}$. Then
$$b = r e^{i\beta} = r e^{-i\alpha} = \overline{r e^{i\alpha}} = \bar a,$$
so $b = \bar a$, the second alternative of (2).

**Case B: $X \equiv -Y \pmod{2\pi}$.** Then $X + Y = (2\alpha-\beta) + (\alpha-2\beta)
= 3\alpha - 3\beta = 3(\alpha - \beta)$, and $X \equiv -Y$ means
$$3(\alpha - \beta) \equiv 0 \pmod{2\pi} \iff \alpha - \beta \in \Bigl\{0,\ \tfrac{2\pi}{3},\ \tfrac{4\pi}{3}\Bigr\} \pmod{2\pi}.$$
Equivalently $\dfrac{a}{b} = e^{i(\alpha-\beta)} \in \{1, \omega, \omega^2\}$ where
$\omega = e^{2\pi i/3}$ (a primitive cube root of unity), using that $|a/b| = 1$ by
(i). Hence $\left(\dfrac{a}{b}\right)^3 = 1$, i.e. $a^3 = b^3$, the first alternative
of (2).

In either branch condition (2) holds. This completes Part I:
$$\text{(1)} \Longrightarrow \text{(2)}.$$

---

### Part II: condition (2) $\Longrightarrow$ condition (1)

Assume (2). We handle the two alternatives.

**Branch B (conjugate): $b = \bar a$.** Then also $a = \overline{\bar a} = \bar b$.
We show conjugation $r \mapsto \bar r$ is a modulus-preserving bijection from the
roots of eq1 to the roots of eq2.

Let $\rho$ be any root of eq1, so $\rho^2 - a\rho + b = 0$. Conjugating the whole
equation (using $\overline{z+w} = \bar z + \bar w$ and $\overline{zw} = \bar z\,\bar w$):
$$\overline{\rho^2 - a\rho + b} = \bar\rho^{\,2} - \bar a\,\bar\rho + \bar b = 0.$$
Since $\bar a = b$ and $\bar b = a$, this reads
$$\bar\rho^{\,2} - b\,\bar\rho + a = 0,$$
i.e. $\bar\rho$ is a root of eq2. Thus the map $\rho \mapsto \bar\rho$ sends roots of
eq1 to roots of eq2. Conjugation is an involution ($\overline{\bar\rho} = \rho$) and
hence a bijection on $\mathbb{C}$; the same computation in reverse (conjugating a
root $\sigma$ of eq2 gives a root $\bar\sigma$ of eq1, since $\bar b = a$, $\bar a = b$)
shows it restricts to a bijection between the two (multi)sets of roots. As it
preserves modulus ($|\bar\rho| = |\rho|$), the multisets of moduli coincide:
$$\{|r_1|,|r_2|\} = \{\,|\bar r_1|,|\bar r_2|\,\} = \{|s_1|,|s_2|\}.$$
(The bijection respects multiplicity because conjugation is injective; a double root
$\rho$ of eq1 maps to the double root $\bar\rho$ of eq2.) Hence condition (1) holds.

**Branch A (cube): $a^3 = b^3$.** First, $|a|^3 = |a^3| = |b^3| = |b|^3$, and since
$|a|,|b|$ are nonnegative reals, the strictly increasing map $t \mapsto t^3$ gives
$$|a| = |b|. \tag{i'}$$

*Sub-case $a = 0$.* Then by (i'), $b = 0$, so eq1 and eq2 are identical
($x^2 = 0$), both with root multiset $\{0,0\}$; condition (1) holds trivially.

*Sub-case $a \neq 0$.* By (i'), $b \neq 0$ as well, and we may write
$a = r e^{i\alpha}$, $b = r e^{i\beta}$ with $r = |a| = |b| > 0$. From $a^3 = b^3$ we
get $r^3 e^{3i\alpha} = r^3 e^{3i\beta}$, hence $e^{3i(\alpha-\beta)} = 1$, i.e.
$$3(\alpha - \beta) \equiv 0 \pmod{2\pi}.$$
This is exactly the condition of Case B in Step 6, so $X + Y = 3(\alpha-\beta)
\equiv 0 \pmod{2\pi}$, giving $X \equiv -Y$, hence $\cos X = \cos Y$, i.e. equation
$(\dagger)$ holds. By Lemma 3 (read in the forward direction),
$$|a^2 - 4b|^2 - |b^2 - 4a|^2 = 8r^3(\cos Y - \cos X) = 0,$$
and since both moduli are nonnegative, $|a^2 - 4b| = |b^2 - 4a|$, i.e. (ii) holds.

We now run the modulus-reduction of Part I backwards. By Lemma 1,
$$|r_1|^2 + |r_2|^2 = \tfrac12(|a|^2 + |a^2-4b|), \qquad
|s_1|^2 + |s_2|^2 = \tfrac12(|b|^2 + |b^2-4a|).$$
Using (i') ($|a| = |b|$) and (ii) ($|a^2-4b| = |b^2-4a|$), the two right-hand sides
are equal, so
$$|r_1|^2 + |r_2|^2 = |s_1|^2 + |s_2|^2. \tag{S1}$$
By Lemma 0 and (i'),
$$|r_1||r_2| = |r_1 r_2| = |b| = |a| = |s_1 s_2| = |s_1||s_2|. \tag{S2}$$
From (S1) and (S2), and the identity $(|r_1|+|r_2|)^2 = (|r_1|^2+|r_2|^2) +
2|r_1||r_2|$ (and the analogue for $s$), the squared sums agree:
$$(|r_1|+|r_2|)^2 = (|s_1|+|s_2|)^2.$$
Both sums of moduli are nonnegative, so taking nonnegative square roots,
$$|r_1| + |r_2| = |s_1| + |s_2|. \tag{S3}$$
By (S2) and (S3) the two multisets $\{|r_1|,|r_2|\}$ and $\{|s_1|,|s_2|\}$ have equal
sums and equal products, so by Lemma 2 ("$\Leftarrow$") they are equal as multisets:
$$\{|r_1|,|r_2|\} = \{|s_1|,|s_2|\}.$$
Hence condition (1) holds.

In both branches of (2), condition (1) holds. This completes Part II:
$$\text{(2)} \Longrightarrow \text{(1)}.$$

---

### Conclusion

Part I gives (1) $\Rightarrow$ (2) and Part II gives (2) $\Rightarrow$ (1).
Therefore the two statements are equivalent:
$$\{|r_1|,|r_2|\} = \{|s_1|,|s_2|\} \iff \bigl(a^3 = b^3 \ \text{ or }\ b = \bar a\bigr).$$

**Remark (overlap of families is harmless).** The two families in (2) are not
disjoint: e.g. if $a$ is real then $b = \bar a = a$ also satisfies $a^3 = b^3$. This
is consistent — condition (2) is a disjunction ("or"), so an overlap of the two
solution sets poses no logical difficulty; each branch of Part II independently
establishes (1).

**Remark (consistency on degenerate inputs).** If exactly one of $a,b$ is zero (say
$a \neq 0$, $b = 0$), then $|a| \neq |b|$, so (i) fails and by Step 1 condition (1)
fails; correspondingly $a^3 \neq 0 = b^3$ and $b = 0 \neq \bar a$, so (2) fails.
Both sides are false, consistent with the equivalence. The case $a = b = 0$ makes
both conditions true (handled in Step 3 and the $a=0$ sub-case of Branch A). $\blacksquare$
