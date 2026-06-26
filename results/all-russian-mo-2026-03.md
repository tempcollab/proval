## Status
solved

## Approaches tried
- **Coordinate geometry with the A-excircle** — worked. Place coordinates with B=(0,0), C=(a,0). Parameterize circles through X, Y by their center height h. Derive that external tangency with the incircle uniquely determines h, and verify that the same circle is externally tangent to the A-excircle using a polynomial identity that factors cleanly due to the 60-degree constraint.

## Current best
Complete proof establishing existence of a circle through X, Y that is externally tangent to both the incircle and the A-excircle.

## Full proof

**Problem.** Let $\triangle ABC$ be a scalene triangle with $\angle A = 60°$. Points $X$, $Y$ lie on segment $BC$ such that $2BX = AB$ and $2CY = AC$. Prove that there exists a circle through $X$, $Y$ that is tangent to the incircle and some excircle of $\triangle ABC$.

---

### Setup and Notation

Let $AB = c$, $AC = b$, $BC = a$. By the Law of Cosines at vertex $A$:
$$a^2 = b^2 + c^2 - 2bc\cos(60°) = b^2 + c^2 - bc. \tag{1}$$

Place coordinates with $B = (0, 0)$ and $C = (a, 0)$. Point $A$ lies above the $x$-axis (the positive $y$ half-plane).

From the problem: $BX = c/2$ and $CY = b/2$, so
$$X = \left(\frac{c}{2}, 0\right), \quad Y = \left(a - \frac{b}{2}, 0\right).$$

---

### Lemma 1: X and Y lie strictly inside segment BC

**Claim.** For any valid scalene triangle with $\angle A = 60°$, we have $b < 2a$ and $c < 2a$.

**Proof.** We prove $b < 2a$; the proof for $c < 2a$ is symmetric.

We need $b^2 < 4a^2$. Using (1):
$$4a^2 = 4(b^2 + c^2 - bc) = 4b^2 + 4c^2 - 4bc.$$
Thus $b^2 < 4a^2$ is equivalent to:
$$0 < 3b^2 + 4c^2 - 4bc.$$
The quadratic form $3b^2 - 4bc + 4c^2$ has discriminant $(-4)^2 - 4 \cdot 3 \cdot 4 = 16 - 48 = -32 < 0$ and leading coefficient $3 > 0$, so it is positive definite. Hence $3b^2 - 4bc + 4c^2 > 0$ for all real $b, c$ (in particular for $b, c > 0$).

Therefore $b < 2a$, which implies $b/2 < a$, so $Y = (a - b/2, 0)$ satisfies $0 < a - b/2 < a$, placing $Y$ strictly inside $BC$.

Similarly, $c < 2a$ implies $c/2 < a$, so $X = (c/2, 0)$ lies strictly inside $BC$.

**Claim.** $X$ lies to the left of $Y$, i.e., $c/2 < a - b/2$.

**Proof.** This is equivalent to $b + c < 2a$. By the triangle inequality, $a < b + c$. Also, from (1), $a^2 = b^2 + c^2 - bc < b^2 + c^2 + 2bc = (b+c)^2$, so $a < b + c$. But we need the reverse direction.

Squaring $b + c < 2a$ gives $(b+c)^2 < 4a^2 = 4b^2 + 4c^2 - 4bc$, i.e., $b^2 + 2bc + c^2 < 4b^2 + 4c^2 - 4bc$, i.e., $0 < 3b^2 - 6bc + 3c^2 = 3(b-c)^2$. This holds strictly for scalene triangles (where $b \neq c$).

Hence $X$ lies strictly to the left of $Y$ on segment $BC$.  $\square$

---

### Incircle and A-Excircle Coordinates

Let $s = (a + b + c)/2$ be the semiperimeter and $K$ be the area of $\triangle ABC$.

**Incircle.** Center $I = (s - b, r)$ where $r = K/s$ is the inradius.

**A-excircle.** The excircle opposite vertex $A$ has center $I_A = (s - c, -r_A)$ where $r_A = K/(s - a)$ is the $A$-exradius. Note that $I_A$ lies below the $x$-axis (on the opposite side of $BC$ from $A$).

*Verification of incenter x-coordinate:* The incenter has barycentric coordinates $(a : b : c)$, giving $x$-coordinate:
$$\frac{a \cdot 0 + b \cdot a + c \cdot 0}{a + b + c} = \frac{ab}{2s} = \frac{ab}{a+b+c}.$$
But $s - b = (a + c - b)/2$. Let us verify: using the tangent-length formula, the distance from $B$ to the tangent point on $BC$ is $s - b$. This places the incenter at $x = s - b$. (The standard formula is correct.)

*Verification of A-excircle x-coordinate:* The A-excircle center has signed barycentric coordinates $(-a : b : c)$, normalized by $-a + b + c = 2(s - a)$. The $x$-coordinate is:
$$\frac{-a \cdot 0 + b \cdot a + c \cdot 0}{2(s-a)} = \frac{ab}{2(s-a)}.$$
We need to check this equals $s - c = (a + b - c)/2$:
$$\frac{ab}{2(s-a)} = \frac{ab}{b + c - a} \quad \text{and} \quad s - c = \frac{a + b - c}{2}.$$
These are not obviously equal; let me re-derive. The tangent length from $B$ to the A-excircle is $s$, and the excircle touches line $BC$ (extended if necessary) at distance $s$ from $B$. But for the A-excircle, which is opposite $A$, it touches $BC$ at distance $s - c$ from $C$, i.e., at $x = a - (s - c) = a - s + c = (a + c - b)/2 - (b - c)/2$... 

Actually, the A-excircle touches $BC$ at distance $s - c$ from $B$ (not from $C$). Since the tangent from $B$ to the A-excircle along $BC$ has length $s - c$. So the foot is at $x = s - c$, placing the excircle center at $x = s - c$.

Hence $I_A = (s - c, -r_A)$.

---

### Circles Through X and Y

Any circle passing through $X$ and $Y$ has its center on the perpendicular bisector of segment $XY$. Since $X$ and $Y$ are both on the $x$-axis, this perpendicular bisector is the vertical line $x = m$ where
$$m = \frac{1}{2}\left(\frac{c}{2} + a - \frac{b}{2}\right) = \frac{2a + c - b}{4}.$$

Let the center be $(m, h)$ for some $h \in \mathbb{R}$. The radius is:
$$R = \sqrt{\left(\frac{XY}{2}\right)^2 + h^2} = \sqrt{k + h^2},$$
where
$$k = \left(\frac{XY}{2}\right)^2 = \left(\frac{(a - b/2) - c/2}{2}\right)^2 = \left(\frac{2a - b - c}{4}\right)^2 = \frac{(2a - b - c)^2}{16}.$$

---

### Key Horizontal Offsets

Define:
$$\delta_I = m - (s - b) = \frac{2a + c - b}{4} - \frac{a + c - b}{2} = \frac{2a + c - b - 2a - 2c + 2b}{4} = \frac{b - c}{4}.$$

$$\delta_A = m - (s - c) = \frac{2a + c - b}{4} - \frac{a + b - c}{2} = \frac{2a + c - b - 2a - 2b + 2c}{4} = \frac{3(c - b)}{4} = -3\delta_I.$$

Define:
$$d_2 = \delta_I^2 = \frac{(b - c)^2}{16}.$$

Note that $\delta_A^2 = 9\delta_I^2 = 9d_2$.

---

### External Tangency with the Incircle

The circle centered at $(m, h)$ with radius $R$ is externally tangent to the incircle (centered at $(s-b, r)$ with radius $r$) if and only if:
$$\sqrt{\delta_I^2 + (h - r)^2} = R + r. \tag{2}$$

Squaring both sides:
$$d_2 + (h - r)^2 = (R + r)^2.$$
Expanding:
$$d_2 + h^2 - 2hr + r^2 = R^2 + 2Rr + r^2.$$
Using $R^2 = k + h^2$:
$$d_2 + h^2 - 2hr = k + h^2 + 2Rr.$$
$$d_2 - 2hr - k = 2Rr.$$
$$d_2 - k = 2r(h + R). \tag{3}$$

Since we seek external tangency, we need $R + r$ to be the distance (not $|R - r|$), which requires the circles to be disjoint. We'll verify this at the end.

**Solving for h.** From (3): $d_2 - k = 2r(h + R) = 2rh + 2r\sqrt{k + h^2}$.

Let $D = d_2 - k$. Then:
$$D - 2rh = 2r\sqrt{k + h^2}.$$

For this equation to have a solution, we need $D - 2rh > 0$ (since the RHS is positive). Squaring:
$$(D - 2rh)^2 = 4r^2(k + h^2).$$
$$D^2 - 4Drh + 4r^2h^2 = 4r^2k + 4r^2h^2.$$
$$D^2 - 4Drh = 4r^2k.$$
$$h = \frac{D^2 - 4r^2k}{4Dr} = \frac{(d_2 - k)^2 - 4r^2k}{4r(d_2 - k)}. \tag{4}$$

**Lemma 2: $d_2 - k > 0$ for scalene triangles.**

**Proof.** We have:
$$d_2 - k = \frac{(b-c)^2 - (2a-b-c)^2}{16}.$$
Using the difference of squares:
$$(b-c)^2 - (2a-b-c)^2 = [(b-c) - (2a-b-c)][(b-c) + (2a-b-c)]$$
$$= [2b - 2a][2a - 2c] = 4(b-a)(a-c).$$

So $d_2 - k = (b-a)(a-c)/4$.

For a 60-degree triangle, since $B + C = 120°$, exactly one of $B, C$ is greater than $60°$ and the other is less (for a scalene triangle). By the Law of Sines, the side opposite the larger angle is larger. Hence:
- If $B > 60° > C$: then $b > a > c$, so $(b-a) > 0$ and $(a-c) > 0$.
- If $C > 60° > B$: then $c > a > b$, so $(b-a) < 0$ and $(a-c) < 0$.

In either case, $(b-a)(a-c) > 0$, so $d_2 - k > 0$.  $\square$

Therefore, formula (4) is well-defined with $D = d_2 - k > 0$.

---

### External Tangency with the A-Excircle

The circle centered at $(m, h)$ with radius $R$ is externally tangent to the A-excircle (centered at $(s-c, -r_A)$ with radius $r_A$) if and only if:
$$\sqrt{\delta_A^2 + (h - (-r_A))^2} = R + r_A.$$
$$\sqrt{9d_2 + (h + r_A)^2} = R + r_A. \tag{5}$$

Squaring:
$$9d_2 + (h + r_A)^2 = (R + r_A)^2.$$
$$9d_2 + h^2 + 2hr_A + r_A^2 = R^2 + 2Rr_A + r_A^2.$$
Using $R^2 = k + h^2$:
$$9d_2 + h^2 + 2hr_A = k + h^2 + 2Rr_A.$$
$$9d_2 + 2hr_A - k = 2Rr_A.$$
$$9d_2 - k = 2r_A(R - h). \tag{6}$$

---

### Combining the Two Tangency Conditions

From (3): $d_2 - k = 2r(R + h)$, so $R + h = (d_2 - k)/(2r)$.

From (6): $9d_2 - k = 2r_A(R - h)$, so $R - h = (9d_2 - k)/(2r_A)$.

Multiplying these two equations:
$$(R + h)(R - h) = \frac{(d_2 - k)(9d_2 - k)}{4rr_A}.$$
$$R^2 - h^2 = \frac{(d_2 - k)(9d_2 - k)}{4rr_A}.$$

Since $R^2 = k + h^2$, we have $R^2 - h^2 = k$. Therefore:
$$k = \frac{(d_2 - k)(9d_2 - k)}{4rr_A}.$$
$$4rr_A \cdot k = (d_2 - k)(9d_2 - k). \tag{7}$$

**Thus, both tangency conditions hold simultaneously if and only if identity (7) is satisfied.**

---

### Lemma 3: The 60-Degree Identity $rr_A = bc/4$

**Proof.** By standard formulas:
$$r = \frac{K}{s}, \quad r_A = \frac{K}{s - a},$$
where $K$ is the area. Hence:
$$rr_A = \frac{K^2}{s(s-a)}.$$

By Heron's formula, $K^2 = s(s-a)(s-b)(s-c)$. Substituting:
$$rr_A = \frac{s(s-a)(s-b)(s-c)}{s(s-a)} = (s-b)(s-c).$$

Now:
$$s - b = \frac{a + c - b}{2}, \quad s - c = \frac{a + b - c}{2}.$$
$$(s-b)(s-c) = \frac{(a+c-b)(a+b-c)}{4} = \frac{a^2 - (b-c)^2}{4}.$$

Using $a^2 = b^2 + c^2 - bc$ (from the 60-degree condition):
$$a^2 - (b-c)^2 = (b^2 + c^2 - bc) - (b^2 - 2bc + c^2) = bc.$$

Therefore:
$$rr_A = (s-b)(s-c) = \frac{bc}{4}. \tag{8}$$
$\square$

---

### Lemma 4: The Polynomial Identity

Substituting (8) into (7), we need to verify:
$$4 \cdot \frac{bc}{4} \cdot k = (d_2 - k)(9d_2 - k),$$
i.e.,
$$bc \cdot k = (d_2 - k)(9d_2 - k). \tag{9}$$

**Proof.** Introduce the substitution $x = a - b$, $y = a - c$. Then $b = a - x$ and $c = a - y$.

**Step 1: Constraint from the 60-degree condition.**
From $a^2 = b^2 + c^2 - bc$:
$$a^2 = (a-x)^2 + (a-y)^2 - (a-x)(a-y).$$
Expanding:
$$a^2 = a^2 - 2ax + x^2 + a^2 - 2ay + y^2 - (a^2 - ay - ax + xy).$$
$$a^2 = a^2 - ax - ay + x^2 + y^2 - xy.$$
$$0 = -a(x + y) + x^2 + y^2 - xy.$$
$$a(x + y) = x^2 + y^2 - xy. \tag{10}$$

**Step 2: Express $d_2$, $k$, and $bc$ in terms of $x, y$.**
$$d_2 = \frac{(b-c)^2}{16} = \frac{(y-x)^2}{16}.$$
$$k = \frac{(2a-b-c)^2}{16} = \frac{(x+y)^2}{16}.$$

For $bc$:
$$bc = (a-x)(a-y) = a^2 - a(x+y) + xy.$$
Using (10): $a(x+y) = x^2 + y^2 - xy$, so:
$$bc = a^2 - (x^2 + y^2 - xy) + xy = a^2 - x^2 - y^2 + 2xy. \tag{11}$$

**Step 3: Compute $d_2 - k$.**
$$d_2 - k = \frac{(y-x)^2 - (x+y)^2}{16} = \frac{-4xy}{16} = -\frac{xy}{4}. \tag{12}$$

**Step 4: Transform identity (9).**
Identity (9) becomes:
$$bc \cdot \frac{(x+y)^2}{16} = \left(-\frac{xy}{4}\right)\left(\frac{9(y-x)^2 - (x+y)^2}{16}\right).$$

Multiply both sides by 64:
$$4bc(x+y)^2 = -xy[9(y-x)^2 - (x+y)^2]. \tag{13}$$

**Step 5: Expand the LHS.**
Let $P = x^2 + y^2 - xy$ and $Q = x + y$. From (10), $a = P/Q$ (assuming $Q \neq 0$, which holds since $x + y = 2a - b - c \neq 0$ for a valid triangle).

From (11):
$$bc = a^2 - x^2 - y^2 + 2xy = \frac{P^2}{Q^2} - (x^2 + y^2 - 2xy) = \frac{P^2}{Q^2} - P + xy + xy = \frac{P^2 - PQ^2 + xyQ^2}{Q^2}.$$

Wait, let me recompute. We have $bc = a^2 - x^2 - y^2 + 2xy$. Now:
$$a^2 = \frac{P^2}{Q^2} = \frac{(x^2+y^2-xy)^2}{(x+y)^2}.$$

So:
$$bc = \frac{P^2}{Q^2} - x^2 - y^2 + 2xy.$$

Let us directly expand (13).

**LHS of (13):**
$$4bc(x+y)^2 = 4\left(\frac{P^2}{Q^2} - x^2 - y^2 + 2xy\right)Q^2 = 4P^2 - 4(x^2+y^2-2xy)Q^2.$$
$$= 4P^2 - 4(x^2+y^2)Q^2 + 8xyQ^2.$$

**RHS of (13):**
$$-xy[9(y-x)^2 - (x+y)^2] = -xy[9(x^2 - 2xy + y^2) - (x^2 + 2xy + y^2)]$$
$$= -xy[9x^2 - 18xy + 9y^2 - x^2 - 2xy - y^2]$$
$$= -xy[8x^2 - 20xy + 8y^2]$$
$$= -8x^3y + 20x^2y^2 - 8xy^3.$$

**LHS expansion in detail:**
We need to expand $4P^2 - 4(x^2+y^2)Q^2 + 8xyQ^2$ where $P = x^2+y^2-xy$ and $Q = x+y$.

$P^2 = (x^2+y^2-xy)^2 = x^4 + y^4 + x^2y^2 + 2x^2y^2 - 2x^3y - 2xy^3 = x^4 + y^4 + 3x^2y^2 - 2x^3y - 2xy^3.$

$4P^2 = 4x^4 + 4y^4 + 12x^2y^2 - 8x^3y - 8xy^3.$

$Q^2 = (x+y)^2 = x^2 + 2xy + y^2.$

$(x^2+y^2)Q^2 = (x^2+y^2)(x^2+2xy+y^2) = x^4 + 2x^3y + x^2y^2 + x^2y^2 + 2xy^3 + y^4$
$= x^4 + y^4 + 2x^2y^2 + 2x^3y + 2xy^3.$

$-4(x^2+y^2)Q^2 = -4x^4 - 4y^4 - 8x^2y^2 - 8x^3y - 8xy^3.$

$xyQ^2 = xy(x^2+2xy+y^2) = x^3y + 2x^2y^2 + xy^3.$

$8xyQ^2 = 8x^3y + 16x^2y^2 + 8xy^3.$

**LHS total:**
$$4P^2 - 4(x^2+y^2)Q^2 + 8xyQ^2$$
$$= (4x^4 + 4y^4 + 12x^2y^2 - 8x^3y - 8xy^3)$$
$$\quad + (-4x^4 - 4y^4 - 8x^2y^2 - 8x^3y - 8xy^3)$$
$$\quad + (8x^3y + 16x^2y^2 + 8xy^3)$$
$$= (4-4)x^4 + (4-4)y^4 + (12-8+16)x^2y^2 + (-8-8+8)x^3y + (-8-8+8)xy^3$$
$$= 0 + 0 + 20x^2y^2 - 8x^3y - 8xy^3$$
$$= 20x^2y^2 - 8x^3y - 8xy^3$$
$$= -8x^3y + 20x^2y^2 - 8xy^3.$$

**Comparing:**
- LHS = $-8x^3y + 20x^2y^2 - 8xy^3$
- RHS = $-8x^3y + 20x^2y^2 - 8xy^3$

**LHS = RHS.** $\square$

---

### Verification of Externality

We must verify that both tangencies are external (not internal).

**For the incircle:** The incircle has center at $(s-b, r)$ with $r > 0$ (above BC). The constructed circle has center at $(m, h)$ where $h \le 0$ (at or below BC, as we verify below), with radius $R$. Since the incircle center is above BC and the constructed circle center is at or below BC, and both circles have positive radii, they lie on opposite sides of BC and hence are external to each other. The tangency condition distance = $R + r$ confirms external tangency.

**Claim: $h < 0$.**

From formula (4): $h = \frac{(d_2-k)^2 - 4r^2k}{4r(d_2-k)}$.

We have $d_2 - k > 0$ and $r > 0$, so the denominator $4r(d_2-k) > 0$.

**Lemma 5: The inradius formula $r^2 = \frac{3x^2y^2}{4(x+y)^2}$.**

**Proof.** Using the $x, y$ parametrization with $a = (x^2 + y^2 - xy)/(x+y)$, we compute:
$$s = \frac{a + b + c}{2} = \frac{3a - (x+y)}{2} = \frac{x^2 + y^2 - \frac{5xy}{2}}{x+y}.$$
$$s - a = \frac{a - (x+y)}{2} = -\frac{3xy}{2(x+y)}.$$
$$s - b = \frac{a + x - y}{2} = \frac{x(2x - y)}{2(x+y)}.$$
$$s - c = \frac{a - x + y}{2} = \frac{y(2y - x)}{2(x+y)}.$$

Since $r^2 = K^2/s^2$ and $K^2 = s(s-a)(s-b)(s-c)$ by Heron's formula:
$$r^2 = \frac{(s-a)(s-b)(s-c)}{s} = \frac{-\frac{3xy}{2(x+y)} \cdot \frac{x(2x-y)}{2(x+y)} \cdot \frac{y(2y-x)}{2(x+y)}}{\frac{x^2 + y^2 - \frac{5xy}{2}}{x+y}}.$$

Now, $(2x - y)(2y - x) = 4xy - 2x^2 - 2y^2 + xy = 5xy - 2(x^2 + y^2)$. Since $xy < 0$ (as shown below), and we need $r^2 > 0$, we track signs carefully. In fact, since $(s-a) = -3xy/[2(x+y)]$, and for a valid triangle $s > 0$, we need $s - a, s - b, s - c$ to have appropriate signs.

For a cleaner derivation: Note that $(s-b)(s-c) = bc/4$ by Lemma 3's proof (where we showed $(s-b)(s-c) = bc/4$ from $rr_A = bc/4$). Actually, let's compute directly:

$(s-a)(s-b)(s-c) = -\frac{3xy}{2(x+y)} \cdot \frac{x(2x-y)}{2(x+y)} \cdot \frac{y(2y-x)}{2(x+y)} = -\frac{3x^2y^2(2x-y)(2y-x)}{8(x+y)^3}.$

Since $(2x-y)(2y-x) = -(2x-y)(x-2y) = -[(2x)(x) - (2x)(2y) - y(x) + y(2y)] = -[2x^2 - 4xy - xy + 2y^2] = -[2x^2 - 5xy + 2y^2]$.

So $(s-a)(s-b)(s-c) = -\frac{3x^2y^2 \cdot (-1)(2x^2 - 5xy + 2y^2)}{8(x+y)^3} = \frac{3x^2y^2(2x^2 - 5xy + 2y^2)}{8(x+y)^3}.$

And $s = \frac{x^2 - \frac{5xy}{2} + y^2}{x+y} = \frac{2x^2 - 5xy + 2y^2}{2(x+y)}.$

Therefore:
$$r^2 = \frac{(s-a)(s-b)(s-c)}{s} = \frac{3x^2y^2(2x^2 - 5xy + 2y^2)}{8(x+y)^3} \cdot \frac{2(x+y)}{2x^2 - 5xy + 2y^2} = \frac{3x^2y^2}{4(x+y)^2}. \quad \square$$

**Lemma 6: $(d_2 - k)^2 - 4r^2k < 0$, hence $h < 0$.**

**Proof.** We compute each term using the $x, y$ parametrization:

$(d_2 - k)^2 = \left(-\frac{xy}{4}\right)^2 = \frac{x^2y^2}{16}.$

$4r^2k = 4 \cdot \frac{3x^2y^2}{4(x+y)^2} \cdot \frac{(x+y)^2}{16} = \frac{3x^2y^2}{16}.$

Therefore:
$$(d_2 - k)^2 - 4r^2k = \frac{x^2y^2}{16} - \frac{3x^2y^2}{16} = -\frac{x^2y^2}{8} < 0,$$
since $x, y \neq 0$ for a scalene triangle.

Since the numerator $(d_2 - k)^2 - 4r^2k < 0$ and the denominator $4r(d_2 - k) > 0$, we conclude $h < 0$.  $\square$

Therefore, the constructed circle has its center strictly below line $BC$ (at height $h < 0$), while the incircle has its center strictly above $BC$ (at height $r > 0$). The circles are on opposite sides of $BC$ and hence cannot overlap, confirming that the tangency is external.

**For the A-excircle:** The A-excircle has center at $(s-c, -r_A)$ with $-r_A < 0$ (below BC). The constructed circle has center at $(m, h)$ with $h < 0$. From equation (6): $9d_2 - k = 2r_A(R - h)$.

**Lemma 7: $9d_2 - k > 0$.**

**Proof.** From the verified identity (9): $bc \cdot k = (d_2 - k)(9d_2 - k)$.

We have established:
- $bc > 0$ (product of positive side lengths),
- $k > 0$ (square of a nonzero quantity, since $2a - b - c \neq 0$ for a valid triangle),
- $d_2 - k > 0$ (Lemma 2).

Since $bc \cdot k > 0$ and $d_2 - k > 0$, the identity implies $(9d_2 - k) = \frac{bc \cdot k}{d_2 - k} > 0$.  $\square$

Since $9d_2 - k > 0$ and $r_A > 0$, equation (6) gives $R - h = (9d_2 - k)/(2r_A) > 0$, confirming that $R > h$. Combined with $R > 0$ and $h < 0$, the distance from the A-excircle center to the constructed circle center is $\sqrt{9d_2 + (h + r_A)^2}$, and equation (5) shows this equals $R + r_A$, confirming external tangency.

---

### Conclusion

We have shown:

1. Points $X$ and $Y$ lie strictly inside segment $BC$ (Lemma 1).

2. Any circle through $X$ and $Y$ has center $(m, h)$ on the perpendicular bisector of $XY$, with radius $R = \sqrt{k + h^2}$.

3. The external tangency condition with the incircle uniquely determines $h$ via formula (4).

4. This same value of $h$ also satisfies the external tangency condition with the A-excircle, because the polynomial identity (9) holds (Lemma 4), which in turn follows from the special 60-degree identity $rr_A = bc/4$ (Lemma 3).

5. Both tangencies are external.

Therefore, **there exists a circle through $X$ and $Y$ that is externally tangent to both the incircle and the A-excircle** of triangle $ABC$. $\blacksquare$
