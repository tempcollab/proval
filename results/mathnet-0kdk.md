## Status
solved

## Approaches tried
- Rotate axes to the tangent line `x+y=0`, parameterize all admissible parabolas
  by an integer `a≠0` (vertex `V=(a,-a)`), reduce "carries a point of `S`" to a
  Diophantine condition `s=50t²/a²∈ℤ, 0<s<200, x,y∈ℤ_{>0}`, classify via a
  perfect-square-divisor lemma, count the valid `a` by a disjoint repartition, and
  double by the `a↦-a` symmetry — **worked**, gives the answer **264**.
  (Brute force over the actual parabola family confirms: 132 positive valid `a`,
  132 negative, total 264; the three families V₅,V₈,V₉ and the disjoint pieces
  A₁⊔A₂⊔A₃=20+32+80 all match.)

## Current best
Complete solution; final answer **264**. See full proof below.

## Full proof

### Notation and set-up

Let
$$S=\{(x,y)\mid x>0,\ y>0,\ x+y<200,\ x,y\in\mathbb Z\}.$$
We must count the parabolas $\mathcal P$ with vertex $V$ such that:

1. $\mathcal P$ passes through $(100,100)$ and through at least one point of $S$;
2. $V$ has integer coordinates;
3. $\mathcal P$ is tangent to the line $\ell:\,x+y=0$ at $V$.

Throughout we use the linear change of coordinates
$$u=x+y,\qquad w=x-y .$$
This is invertible: $x=\tfrac{u+w}{2},\ y=\tfrac{u-w}{2}$. The vector $(1,1)$
(the gradient of $u$) is the *axis direction* and $(1,-1)$ (the gradient of $w$,
the direction of $\ell$) is perpendicular to it; indeed $(1,1)\cdot(1,-1)=0$.

---

### Step 1. The vertex is $V=(a,-a)$ and the axis direction is $(1,1)$

By condition (3) the parabola is tangent to $\ell:x+y=0$ at its vertex $V$, so
$V\in\ell$. By condition (2) $V$ has integer coordinates. A point of $\ell$ with
integer coordinates has the form
$$V=(a,-a),\qquad a\in\mathbb Z ,$$
because $x+y=0$ forces $y=-x$ and $x=a\in\mathbb Z$.

For a parabola, the axis of symmetry is perpendicular to the tangent line at the
vertex (the tangent at the vertex is the unique tangent perpendicular to the axis;
this is the standard fact "a parabola is tangent at its vertex to the line through
the vertex perpendicular to the axis", Knowledge Base, Geometry→Conics). The
tangent $\ell$ has direction $(1,-1)$, hence the axis has direction
$(1,-1)^{\perp}=(1,1)$. In the $(u,w)$ coordinates the axis is the line $w=2a$
(the locus $x-y=2a$ through $V$), and $\ell$ is the line $u=0$.

---

### Step 2. Equation of $\mathcal P$ in rotated coordinates: $u=c\,(w-2a)^2$

We use the standard form of a parabola with a given vertex, axis, and tangent at
the vertex (Knowledge Base, Geometry→Conics: *a parabola tangent to a line at its
vertex satisfies* $(\text{perp. distance to the tangent})^2\propto(\text{distance
along the axis})$; Geometry→Coordinates: *rotate axes to align with the key line
$x+y=0$*).

In coordinates adapted to $V$, set
$$U=u-0=x+y\quad(\text{signed distance, }\propto,\text{ from the tangent }\ell),
\qquad W=w-2a=x-y-2a\quad(\text{signed distance, }\propto,\text{ along }\ell).$$
A parabola with vertex $V$ (where $U=W=0$), axis perpendicular to $\ell$ (the
$U$-direction), tangent to $\ell$ at $V$, is exactly the zero set of a quadratic
in $(U,W)$ whose vertex tangency to $U=0$ forces it into the standard form
$$U=c\,W^2 ,\qquad c\neq 0. \tag{2.1}$$

*Derivation that this is the only possibility.* A conic tangent to the line $U=0$
at the point $U=W=0$ has, after clearing, an equation
$$\alpha U^2+\beta UW+\gamma W^2+\delta U+\varepsilon W=0$$
with no constant term (it passes through $V$). Tangency to $U=0$ at $V$ means: on
the line $U=0$ the equation reduces to $\gamma W^2+\varepsilon W=0$, and the
contact at $V$ is a double point, so $\varepsilon=0$ and $\gamma\neq0$ (otherwise
the intersection with $U=0$ is not a double root at $W=0$). For the conic to be a
*parabola* with axis the $U$-direction, the quadratic part must be a perfect
square in the variable transverse to the axis: the only second-degree terms
compatible with axis-direction $U$ and vertex contact are $\gamma W^2$, i.e.
$\alpha=\beta=0$ (any $U^2$ or $UW$ term would tilt the axis off the
$U$-direction or make the curve an ellipse/hyperbola). Hence the equation is
$\gamma W^2+\delta U=0$ with $\gamma,\delta\neq0$, i.e.
$$U=-\tfrac{\gamma}{\delta}\,W^2=:c\,W^2,\qquad c=-\tfrac{\gamma}{\delta}\neq0,$$
which is (2.1). Conversely every $c\neq0$ in (2.1) gives such a parabola. (If
$c=0$ the locus degenerates to the line $U=0$, i.e. $\ell$ itself, which is not a
parabola; this is why $c\neq0$.)

Substituting back $U=x+y$, $W=x-y-2a$, equation (2.1) reads
$$\boxed{\,x+y=c\,(x-y-2a)^2\,},\qquad c\neq0. \tag{2.2}$$

**Sign of $c$.** Along the axis the vertex value is $U=0$ (at $V$), and on the
parabola $U=cW^2$. If $c<0$ then $U\le0$ on the whole parabola, so every point
satisfies $x+y\le0$; but a point of $S$ has $x+y>0$, and the prescribed point
$(100,100)$ has $x+y=200>0$. Hence the parabola must reach $U>0$, forcing
$$c>0 . \tag{2.3}$$

---

### Step 3. Passing through $(100,100)$ forces $c=50/a^2$ and $a\neq0$

Put $(x,y)=(100,100)$ in (2.2). Then $x+y=200$ and
$x-y-2a=100-100-2a=-2a$, so
$$200=c\,(-2a)^2=4a^2c\ \Longrightarrow\ c=\frac{50}{a^2}. \tag{3.1}$$
For (3.1) to make sense we need $a\neq0$; and indeed if $a=0$ then (2.2) at
$(100,100)$ would give $200=c\cdot0=0$, impossible. So $a\neq0$, and then
$c=50/a^2>0$, consistent with (2.3).

Therefore **the admissible parabolas are exactly**
$$\mathcal P_a:\quad x+y=\frac{50}{a^2}\,(x-y-2a)^2,\qquad a\in\mathbb Z,\ a\neq0,
\tag{3.2}$$
one for each integer $a\neq0$.

**Distinct $a$ give distinct parabolas.** The vertex of $\mathcal P_a$ is
$V=(a,-a)$, and distinct $a$ give distinct vertices; a parabola has a unique
vertex, so $a\mapsto\mathcal P_a$ is injective. (In particular $a$ and $-a$ give
*different* parabolas, with vertices $(a,-a)$ and $(-a,a)$; since $a\neq0$ these
are never equal, so no parabola is "self-paired" — used in Step 9.)

It remains to decide, for each $a\neq0$, whether $\mathcal P_a$ carries a point of
$S$, and to count those $a$.

---

### Step 4. Reduction to a Diophantine condition

Fix $a\neq0$. Let $(x,y)$ be a lattice point on $\mathcal P_a$. Introduce
$$t:=x-y-2a\in\mathbb Z,\qquad s:=x+y\in\mathbb Z .$$
By (3.2),
$$s=\frac{50\,t^2}{a^2}. \tag{4.1}$$
Conversely, from $s$ and $t$ we recover
$$x=\frac{s+t+2a}{2},\qquad y=\frac{s-t-2a}{2}, \tag{4.2}$$
since $x+y=s$ and $x-y=t+2a$. Thus the lattice points $(x,y)$ on $\mathcal P_a$
are exactly the pairs given by (4.2) for integers $t$ with $s=50t^2/a^2\in\mathbb
Z$ and $s+t$ even (so that $x,y\in\mathbb Z$; note $2a$ is even, so $x,y\in\mathbb
Z\iff s+t\in2\mathbb Z$).

Such a point lies in $S$ iff
$$\textbf{(a)}\ \ s=\tfrac{50t^2}{a^2}\in\mathbb Z,\qquad
\textbf{(b)}\ \ 0<s<200,\qquad
\textbf{(c)}\ \ x>0\ \text{and}\ y>0\ \text{and}\ s+t\ \text{even}. \tag{4.3}$$
(The condition $x+y<200$ is the same as $s<200$, already in (b); and $x+y=s>0$ is
in (b).)

Note $t=0\Rightarrow s=0$, which violates (b); so for a point of $S$ we have
$t\neq0$.

---

### Step 5. Lemma 1 (perfect-square divisor): $\bigl(a/\gcd(a,t)\bigr)^2\mid50$,
hence $\bigl|a/\gcd(a,t)\bigr|\in\{1,5\}$

**Lemma 1.** *Let $a,t$ be integers, $a\neq0$, $t\neq0$, and put
$g=\gcd(a,t)$, $a=ga'$, $t=gt'$ with $\gcd(a',t')=1$. Then*
$$\frac{50t^2}{a^2}\in\mathbb Z\iff a'^2\mid 50\iff |a'|\in\{1,5\}.$$

*Proof.* Since $a=ga'$, $t=gt'$,
$$\frac{50t^2}{a^2}=\frac{50\,g^2t'^2}{g^2a'^2}=\frac{50\,t'^2}{a'^2}.$$
Now $\gcd(a',t')=1$ implies $\gcd(a'^2,t'^2)=1$ (a prime dividing both $a'^2$ and
$t'^2$ would divide both $a'$ and $t'$, contradicting coprimality; Knowledge Base,
Number-Theory→Divisor analysis). Therefore $a'^2$ shares no prime factor with
$t'^2$, so
$$a'^2\ \Big|\ 50\,t'^2\iff a'^2\mid 50 .$$
Finally $50=2\cdot5^2$. A perfect square $a'^2$ dividing $50$ can contain $2$ to
an even power $\le1$ (so the exponent is $0$) and $5$ to an even power $\le2$ (so
$0$ or $2$). Hence $a'^2\in\{1,25\}$, i.e. $|a'|\in\{1,5\}$. $\qquad\square$

---

### Step 6. The $s$-menu

We now determine the possible values of $s$ when (a) and (b) hold. With the
notation of Lemma 1, $s=50t'^2/a'^2$.

**Branch $|a'|=1$** (i.e. $a'=\pm1$, equivalently $a\mid t$): then
$s=50t'^2$ with $t'=t/a\in\mathbb Z$, $t'\neq0$. Condition $0<s<200$ gives
$t'^2<4$, so $t'\in\{\pm1\}$ and
$$s=50\qquad(\text{value }2m^2\text{ with }m=5).$$

**Branch $|a'|=5$** (i.e. $a=5g\,a''$ with $a''=\pm1$, equivalently $5\mid a$ and
$a'=\pm5$): then $s=50t'^2/25=2t'^2$ with $\gcd(a',t')=1$, so $5\nmid t'$, and
$t'\neq0$. Condition $0<s<200$ gives $t'^2<100$, i.e. $|t'|\le9$. Excluding
$t'=0$, the multiples of $5$ (forbidden since $5\nmid t'$), we get
$|t'|\in\{1,2,3,4,6,7,8,9\}$, hence
$$s=2t'^2\in\{2,8,18,32,72,98,128,162\}.$$

Collecting both branches, every $s$ that can occur (conditions (a),(b)) has the
form $s=2m^2$ with $m\in\{1,2,3,4,5,6,7,8,9\}$:
$$s\in\{2,8,18,32,50,72,98,128,162\}.$$
We will see (Step 7) that $m=1,2$ (i.e. $s=2,8$) never yield a point of $S$, so the
operative menu is
$$\boxed{s=2m^2,\quad m\in\{3,4,5,6,7,8,9\},\quad
s\in\{18,32,50,72,98,128,162\}.}$$

---

### Step 7. Lemma 2 (per-$s$ valid-$a$ sets, with exact endpoints)

Fix $a>0$ (we count positive $a$ now; negative $a$ is handled by symmetry in Step
9) and fix an admissible $s=2m^2$ from the menu. We determine **for which $a$
there is a point of $S$ on $\mathcal P_a$ witnessed by this $s$**, and we prove
the chosen witness is *optimal* (maximizes $y$), so that if it fails $y>0$ then no
$t$ giving this $s$ works.

**The two candidate $t$'s.** Given $a$ and $s=2m^2$, equation (4.1) is
$50t^2/a^2=s=2m^2$, i.e. $t^2=\dfrac{a^2 m^2}{25}$, so
$$|t|=\frac{a\,m}{5}=:t_0\ \ (\ge0). \tag{7.1}$$
This requires $t_0\in\mathbb Z$, i.e. $5\mid a m$. Thus for a fixed $a,s$ there
are **at most two** admissible $t$, namely $t=\pm t_0$ (and $t=0$ only if
$t_0=0$, i.e. $a=0$, excluded). So among lattice points of $\mathcal P_a$ with
$x+y=s$, the only candidates for membership in $S$ come from $t=+t_0$ or
$t=-t_0$.

**Optimality of $t=-t_0$.** By (4.2), $y=\dfrac{s-t-2a}{2}$ is a strictly
decreasing function of $t$. Hence among $t\in\{+t_0,-t_0\}$, the value $y$ is
*largest* at $t=-t_0$. Consequently:

> if $t=-t_0$ already fails $y>0$, then $t=+t_0$ (with even smaller $y$) also
> fails $y>0$, so this $s$ contributes no point of $S$ for this $a$.

Therefore it suffices to test the single witness $t=-t_0$; it succeeds iff all of
(4.3) hold for it, and if it fails $y>0$ the whole $s$-value is dead for this $a$.

For the witness $t=-t_0=-am/5$ we compute from (4.2):
$$x=\frac{s-t_0+2a}{2}=\frac{2m^2-\tfrac{am}{5}+2a}{2}=m^2+a-\frac{am}{10},\qquad
y=\frac{s+t_0-2a}{2}=m^2-a+\frac{am}{10}. \tag{7.2}$$

We now specialize to the three values $m=5,8,9$ that will turn out to carry the
count; the remaining $m\in\{3,4,6,7\}$ are handled in Step 8 (Lemma 3), and
$m\in\{1,2\}$ are excluded just below.

**(V₅) $m=5$, $s=50$.** Here $t_0=a\cdot5/5=a$ and $t=-a$ (so $a\mid t$, the
$|a'|=1$ branch). From (7.2):
$$x=25+a-\frac{a}{2}=25+\frac a2,\qquad y=25-a+\frac a2=25-\frac a2 .$$
*Integrality (4.3c):* $x,y\in\mathbb Z\iff a$ is even (then $a/2\in\mathbb Z$; if
$a$ odd, $25\pm a/2\notin\mathbb Z$). Equivalently $s+t=50-a$ even $\iff a$ even.
*Positivity:* $y>0\iff 25-\tfrac a2>0\iff a<50$, and $x=25+\tfrac a2>0$
automatically for $a>0$. *Range $s<200$:* $s=50<200$, so $x+y=s=50<200$ holds.
Hence
$$V_5=\{a>0:\ a\text{ even},\ a<50\}=\{2,4,6,\dots,48\},\qquad |V_5|=24 .$$
At the top endpoint $a=48$: $(x,y)=(49,1)\in S$ (valid). For $a=50$ the witness
gives $(50,0)$ with $y=0\notin S$, so the **$s=50$ branch stops contributing at
$a=48$**. (This does not say $a=50$ is globally invalid — $a=50$ is a multiple of
$10$ and *is* valid via $V_9$ below; see the remark after Step 8.)

**(V₈) $m=8$, $s=128$.** Here $t_0=8a/5$, requiring $5\mid a$; write $a=5g$,
$t=-8a/5=-8g$. From (7.2):
$$x=64+a-\frac{8a}{10}=64+a-\frac{4a}{5}=64+\frac a5,\qquad
y=64-a+\frac{4a}{5}=64-\frac a5 .$$
*Integrality (4.3c):* with $5\mid a$, $a/5=g\in\mathbb Z$, so $x,y\in\mathbb Z$
automatically; equivalently $s+t=128-8g$ even. So the integrality requirement here
is exactly $5\mid a$. *Positivity:* $y>0\iff 64-\tfrac a5>0\iff a<320$, and
$x=64+\tfrac a5>0$ for $a>0$. *Range:* $s=128<200$, so $x+y=128<200$. Hence
$$V_8=\{a>0:\ 5\mid a,\ a<320\}=\{5,10,15,\dots,315\},\qquad |V_8|=63 .$$
At the top endpoint $a=315$: $(x,y)=(64+63,64-63)=(127,1)\in S$ (valid). For
$a=320$ the witness gives $(128,0)$, $y=0\notin S$, so the **$s=128$ branch stops
at $a=315$**.

**(V₉) $m=9$, $s=162$.** Here $t_0=9a/5$, requiring $5\mid a$; write $a=5g$,
$t=-9a/5=-9g$. From (7.2):
$$x=81+a-\frac{9a}{10}=81+\frac a{10},\qquad y=81-a+\frac{9a}{10}=81-\frac a{10}.$$
*Integrality (4.3c):* we need $a/10\in\mathbb Z$, i.e. $10\mid a$. (Although
$t=-9g$ is an integer for any $5\mid a$, the *coordinates* $x,y=81\pm a/10$ are
integral only when $10\mid a$; equivalently $s+t=162-9g$ is even $\iff g$ even
$\iff 10\mid a$.) *Positivity:* $y>0\iff81-\tfrac a{10}>0\iff a<810$, and
$x=81+\tfrac a{10}>0$ for $a>0$. *Range:* $s=162<200$, so $x+y=162<200$. Hence
$$V_9=\{a>0:\ 10\mid a,\ a<810\}=\{10,20,30,\dots,800\},\qquad |V_9|=80 .$$
At the top endpoint $a=800$: $(x,y)=(81+80,81-80)=(161,1)\in S$ (valid). For
$a=810$ the witness gives $(162,0)$, $y=0\notin S$, so the **$s=162$ branch stops
at $a=800$**.

**Exclusion of $m=1,2$ ($s=2,8$).** For $m\in\{1,2\}$ the witness $t=-t_0$ from
(7.2) gives $y=m^2-a+am/10$.
- $m=1$: $y=1-a+\tfrac a{10}=1-\tfrac{9a}{10}\le1-\tfrac9{10}<1$ for $a\ge1$; in
  fact $y>0\iff a<10/9$, i.e. only $a=1$, but $m=1$ requires $5\mid a$ (since
  $t_0=a/5$ must be an integer), and $a=1$ fails $5\mid a$. So no valid $a$.
- $m=2$: $t_0=2a/5$ needs $5\mid a$, so $a\ge5$; then
  $y=4-a+\tfrac{2a}{10}=4-\tfrac{4a}{5}\le4-4=0$ for $a\ge5$, so $y\le0$, never
  $>0$.
Hence $s=2,8$ contribute **no** point of $S$, confirming the operative menu of
Step 6. (Brute force over the actual family confirms $s\in\{2,8\}$ is never
attained by a point of $S$.)

---

### Step 8. Lemma 3 (no extra coverage from $m=3,4,6,7$) and the disjoint count

**Lemma 3.** *The valid-$a$ sets witnessed by $m\in\{3,4,6,7\}$ are each contained
in $V_5\cup V_8\cup V_9$; they add no new $a$.*

We compute each set by the same optimal witness $t=-t_0$, formula (7.2). In every
case $t_0=am/5$ requires $5\mid a$ (since $5\nmid m$ for $m\in\{3,4,6,7\}$), and
integrality of $x,y$ requires the further parity stated.

- **$m=3$, $s=18$.** $x=9+a-\tfrac{3a}{10}=9+\tfrac{7a}{10}$,
  $y=9-\tfrac{7a}{10}$. Integral $\iff10\mid a$ (need $a/10\in\mathbb Z$, since
  $7a/10\in\mathbb Z\iff10\mid a$ as $\gcd(7,10)=1$). $y>0\iff a<90/7\approx
  12.86$, so with $10\mid a$ only $a=10$:
  set $=\{10\}$. Since $10$ is a multiple of $10$ in $[10,800]$, $10\in V_9$. ✓
- **$m=4$, $s=32$.** $x=16+a-\tfrac{4a}{10}=16+\tfrac{3a}{5}$,
  $y=16-\tfrac{3a}{5}$. Integral $\iff5\mid a$. $y>0\iff a<80/3\approx26.7$, so
  with $5\mid a$: $a\in\{5,10,15,20,25\}$. Each is a multiple of $5$ in
  $[5,315]$, hence in $V_8$. ✓
- **$m=6$, $s=72$.** $x=36+a-\tfrac{6a}{10}=36+\tfrac{2a}{5}$,
  $y=36-\tfrac{2a}{5}$. Integral $\iff5\mid a$. $y>0\iff a<90$, so with $5\mid a$:
  $a\in\{5,10,\dots,85\}$ (multiples of $5$ in $[5,85]$, $17$ values). Each is a
  multiple of $5$ in $[5,315]$, hence in $V_8$. ✓
- **$m=7$, $s=98$.** $x=49+a-\tfrac{7a}{10}=49+\tfrac{3a}{10}$,
  $y=49-\tfrac{3a}{10}$. Integral $\iff10\mid a$. $y>0\iff a<490/3\approx163.3$,
  so with $10\mid a$: $a\in\{10,20,\dots,160\}$ (multiples of $10$ in $[10,160]$,
  $16$ values). Each is a multiple of $10$ in $[10,800]$, hence in $V_9$. ✓

In every case the witnessed $a$-set is a subset of $V_8$ (for $m=4,6$, since those
$a$ are multiples of $5$ in range) or of $V_9$ (for $m=3,7$, since those $a$ are
multiples of $10$ in range). Therefore $m=3,4,6,7$ contribute no $a$ outside
$V_5\cup V_8\cup V_9$. $\qquad\square$

**Consequence.** The set of valid positive $a$ is exactly
$$V:=V_5\cup V_8\cup V_9 . \tag{8.1}$$
Indeed: every point of $S$ on some $\mathcal P_a$ has, by Steps 4–6, an $s$ in the
menu $\{2m^2:m=1,\dots,9\}$; $m=1,2$ give none (Step 7); $m=5,8,9$ give exactly
$V_5,V_8,V_9$; and $m=3,4,6,7$ give only $a\in V_8\cup V_9$ (Lemma 3). Conversely
each $a\in V_5\cup V_8\cup V_9$ does carry the explicit point of $S$ exhibited in
Step 7. So (8.1) holds with no $a$ missing and no $a$ spurious.

**Remark (the $a=50,320$ trap).** A given $a$ may be witnessed by several
$s$-values; the per-$s$ endpoints (Step 7) are *branch* endpoints, not global
ones. For instance $a=50$ fails the $s=50$ branch ($y=0$ there) but is a multiple
of $10$ in $[10,800]$, hence $a=50\in V_9$ and is globally **valid** (witnessed by
$s=162$). Likewise $a=320\in V_9$ is valid (witnessed by $s=162$, where
$y=81-32=49>0$). The global maximal valid $a$ is $800$ (from $V_9$); $a=810$ is
genuinely invalid (every menu branch gives $y\le0$). This is why the union (8.1),
not any single branch, is what we count.

**Counting $|V|$ by a disjoint repartition (avoids double counting).** Define
$$A_1=V_5\setminus(V_8\cup V_9),\qquad A_2=V_8\setminus V_9,\qquad A_3=V_9 .$$
These three sets are pairwise disjoint and their union is $V_5\cup V_8\cup V_9=V$
(standard set identity: $V_5\cup V_8\cup V_9 = A_1\sqcup A_2\sqcup A_3$, since
$A_3=V_9$, $A_2=V_8\setminus V_9$ adds the part of $V_8$ outside $V_9$, and $A_1$
adds the part of $V_5$ outside $V_8\cup V_9$).

We compute each piece explicitly.

- $V_5=\{$even $a$ in $[2,48]\}$, $V_8=\{$mult. of $5$ in $[5,315]\}$,
  $V_9=\{$mult. of $10$ in $[10,800]\}$.
- $A_3=V_9=\{10,20,\dots,800\}$: multiples of $10$ from $10$ to $800$, count
  $=800/10=80$.
- $A_2=V_8\setminus V_9$: multiples of $5$ in $[5,315]$ that are **not** multiples
  of $10$, i.e. **odd** multiples of $5$: $\{5,15,25,\dots,315\}$. These are
  $5\cdot(\text{odd }k\text{ with }1\le k\le63)$; the odd $k$ in $[1,63]$ number
  $32$. So $|A_2|=32$. (Indeed every multiple of $10$ in $[5,315]$ lies in $V_9$
  since $315<810$, so removing $V_9$ from $V_8$ removes exactly the even multiples
  of $5$.)
- $A_1=V_5\setminus(V_8\cup V_9)$: even $a\in[2,48]$ that are **not** multiples of
  $5$. (A multiple of $5$ that is also even is a multiple of $10$, hence in
  $V_9\subseteq V_8\cup V_9$; an odd multiple of $5$ is not even so not in $V_5$.
  Thus removing $V_8\cup V_9$ from $V_5$ removes exactly the multiples of $10$ in
  $[2,48]$, namely $\{10,20,30,40\}$.) The even numbers in $[2,48]$ number $24$;
  removing the $4$ multiples of $10$ leaves $|A_1|=24-4=20$. Explicitly
  $A_1=\{2,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38,42,44,46,48\}$, indeed $20$
  values, each even and not a multiple of $5$.

**Disjointness check.** $A_1$ consists of integers with $5\nmid a$; $A_2$ consists
of **odd** multiples of $5$; $A_3$ consists of **even** multiples of $5$
(multiples of $10$). No integer is simultaneously in two of these (an element of
$A_1$ has $5\nmid a$, ruling out $A_2,A_3$; $A_2$ is odd and $A_3$ is even). Hence
they are pairwise disjoint, and
$$|V|=|A_1|+|A_2|+|A_3|=20+32+80=132 . \tag{8.2}$$

**Cross-check by inclusion–exclusion.** We verify (8.2) independently:
$$|V_5\cup V_8\cup V_9|=|V_5|+|V_8|+|V_9|-|V_5\cap V_8|-|V_5\cap V_9|-|V_8\cap
V_9|+|V_5\cap V_8\cap V_9|.$$
- $|V_5|=24,\ |V_8|=63,\ |V_9|=80$.
- $V_5\cap V_8$: even $a\in[2,48]$ that are multiples of $5$ in $[5,315]$ = even
  multiples of $5$ in $[2,48]$ = multiples of $10$ in $[10,40]$ = $\{10,20,30,40\}$,
  count $4$.
- $V_5\cap V_9$: even $a\in[2,48]$ that are multiples of $10$ in $[10,800]$ =
  multiples of $10$ in $[10,40]$ = $\{10,20,30,40\}$, count $4$.
- $V_8\cap V_9$: (mult. of $5$ in $[5,315]$) $\cap$ (mult. of $10$ in $[10,800]$) =
  multiples of $10$ in $[10,310]$ = $\{10,20,\dots,310\}$, count $31$.
- $V_5\cap V_8\cap V_9$ = multiples of $10$ in $[10,40]$ = $\{10,20,30,40\}$, count
  $4$.
Hence
$$|V|=24+63+80-4-4-31+4=132,$$
agreeing with (8.2). (In particular the naive "sum over $m$" $24+63+80=167$ is
**wrong**; the correct count of the union is $132$, since e.g. every multiple of
$10$ in $[10,40]$ is counted in all three sets.)

So there are exactly **$132$ valid positive $a$**.

---

### Step 9. Lemma 4 (symmetry $a\mapsto-a$) and the final count

**Lemma 4.** *For every $a\neq0$, $\mathcal P_a$ carries a point of $S$ if and only
if $\mathcal P_{-a}$ does. Hence the number of valid negative $a$ equals the number
of valid positive $a$.*

*Proof.* The set $S$ and the line $x+y=0$ and the point $(100,100)$ are all
invariant under the reflection $\sigma:(x,y)\mapsto(y,x)$ (it preserves $x+y$,
sends $x>0,y>0$ to $y>0,x>0$, fixes $(100,100)$, and maps $x+y=0$ to itself).
Apply $\sigma$ to the defining equation (3.2) of $\mathcal P_a$: with
$(x',y')=(y,x)$ we have $x'+y'=x+y$ and $x'-y'-2(-a)=y-x+2a=-(x-y-2a)$, so
$$x'+y'=x+y=\frac{50}{a^2}(x-y-2a)^2=\frac{50}{(-a)^2}\bigl(-(x-y-2a)\bigr)^2
=\frac{50}{(-a)^2}\bigl(x'-y'-2(-a)\bigr)^2 .$$
Thus $(x,y)\in\mathcal P_a\iff\sigma(x,y)=(y,x)\in\mathcal P_{-a}$, i.e.
$\sigma$ is a bijection $\mathcal P_a\to\mathcal P_{-a}$ carrying lattice points to
lattice points and points of $S$ to points of $S$. Therefore $\mathcal P_a$
carries a point of $S$ iff $\mathcal P_{-a}$ does. $\qquad\square$

By Step 8 there are $132$ valid positive $a$; by Lemma 4 there are exactly $132$
valid negative $a$. By Step 3 each $a\neq0$ gives a *distinct* parabola, and
$a\neq-a$ for all $a\neq0$, so the positive and negative families are disjoint and
together account for all valid parabolas. (The case $a=0$ is impossible, Step 3.)

Therefore the total number of admissible parabolas is
$$132+132=\boxed{264}.$$

---

### Verification of the answer

The answer $264$ is verified two independent ways:

1. **Closed form.** Positive valid $a$: $|A_1|+|A_2|+|A_3|=20+32+80=132$, with the
   inclusion–exclusion cross-check $24+63+80-4-4-31+4=132$ confirming the union
   count; doubling by the $a\mapsto-a$ symmetry gives $2\cdot132=264$.

2. **Direct enumeration.** Looping over the actual family
   $x+y=(50/a^2)(x-y-2a)^2$ for all integers $a$ (only $a$ with $|a|\le800$ can be
   valid, since the global maximal valid $a$ is $800$), testing every integer $t$
   with $s=50t^2/a^2\in\mathbb Z,\ 0<s<200,\ x=(s+t+2a)/2>0,\ y=(s-t-2a)/2>0,\
   x+y<200$, yields exactly $132$ positive and $132$ negative valid $a$, total
   $264$; and the brute-force valid set equals $V_5\cup V_8\cup V_9$ (positive
   side) with no extra and no missing $a$. The boundary witnesses
   $a=48\to(49,1)$, $a=315\to(127,1)$, $a=800\to(161,1)$ are valid while the next
   step in each progression hits $y=0$, confirming the strict-inequality
   endpoints.

Hence the number of parabolas is
$$\boxed{264}. \qquad\blacksquare$$
