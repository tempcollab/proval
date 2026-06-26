# usa-tst-2026-3 (USA TST 2026 P3)

Problem. Prove that for any subset $S \subseteq \mathbb{R}^2$ there exists a
(not necessarily axis-aligned) rectangle of area $1$ that contains either $0$ or
more than $2025$ points of $S$ in its strict interior.

## Status
partial

## Approaches tried

- **Case split (line ≥2026 / per-line ≤2025; cluster / no-cluster; projection-gap /
  every-projection-dense).** This four-way split is exhaustive and disjoint
  (verified below) and reduces the whole problem to a single crux. Three of the
  four leaves are closed rigorously (Case 1, Lemma A via Jung, Lemma C0). — WORKED
  as a reduction; produces the *Current best* below.

- **Lemma A via Jung's theorem (cluster ⇒ >2025).** A radius-$1/4$ open disk
  carrying more than $2025$ points gives a unit square (area $1$) with those points
  strictly inside, because a diameter-$<1/2$ set fits in a disk of Jung radius
  $<\tfrac{1/2}{\sqrt 3}=0.2887<0.5=$ inradius of the unit square. — WORKED,
  fully rigorous.

- **Lemma B (no radius-$1/4$ disk with >2025 ⇒ $S$ locally finite, closed, discrete,
  countable, not dense; an empty open ball exists).** — WORKED, fully rigorous.

- **Lemma C0 (some projection omits an open interval ⇒ empty area-1 rectangle).**
  Slab construction. — WORKED, fully rigorous.

- **Lemma C, the CRUX (locally finite $S$, every line ≤2025, every projection dense
  ⇒ an empty area-1 rectangle): OPEN, but advanced.** Part A this round closes a new
  sub-case and sharpens the remaining gap (see *Current best → Lemma C*):
  - **A1 (large empty ball, $r\ge 1/\sqrt2$): DONE.** If the empty ball $B(0,r)$ has
    radius $r\ge 1/\sqrt2$, the open unit square centered at $0$ lies inside it and
    is $S$-empty. Fully rigorous (proven below). $1/\sqrt2$ is exactly the minimal
    circumradius over all area-$1$ rectangles, so this sub-case is sharp.
  - **A2 (slab-gap sufficiency reduction): DONE.** Lemma C is reduced to the purely
    one-dimensional statement: *some width-$w$ slab, in some direction $u$, whose
    parallel projection of $S\cap\text{slab}$ omits an open interval of length $1/w$.*
    Fully rigorous (proven below). This narrows the crux to the case $r<1/\sqrt2$ and
    the search for one such slab gap.
  - **Remaining gap: $r<1/\sqrt2$ together with producing a width-$w$ slab gap of
    length $1/w$ in some direction.** Still OPEN. The direction-averaging attempt
    (Part B) stalls at a density-$1$ borderline; recorded below as an open direction,
    NOT a proof.
- **Earlier:** Attacked four ways, all failed at the same
  density-$1$ borderline; details recorded under *Current best → The open crux*.
  Specifically:
  - *In-disk rectangle.* The largest empty axis-aligned rectangle that fits inside
    the empty disk $B(0,r)$ has area $\max_{0<w<r} 2w\sqrt{r^2-w^2}=r^2<1$ when $r$
    is small. Insufficient — the rectangle must leave the disk, and then escaping
    points must be controlled. DEAD END by itself.
  - *Single-slab projection gap (the reviewer's suggested target).* For a fixed
    direction $u$ and width $w$, ask whether the parallel-projection of
    $S\cap(\text{slab of width }w)$ has a gap of length $\ge 1/w$. If all gaps are
    $<1/w$ in a parallel-window of length $M$, the slab holds $\ge Mw-1$ points,
    i.e. density $\to 1$ per unit area, which a density-$1$ locally finite set can
    meet. Crude counting does **not** force a good $w$. DEAD END (matches the
    reviewer's independent check).
  - *Radial-needle averaging over directions.* Anchor a width-$w$, length-$1/w$
    needle on the boundary circle of $B(0,r)$ and rotate it through angle $2\pi$.
    A point at distance $\rho\in[r,r+1/w]$ blocks an arc of length $\approx w/\rho$.
    The total blocked measure is $\sum_{x}w/|x|$; over the $\approx 2\pi r/w$ points
    a density-$1$ annulus can hold, each contributing $\approx w/r$, the sum is
    $\approx 2\pi$ — exactly the available budget. BORDERLINE, does not close.
  - *“Every needle has a point” contradiction.* Assuming no empty area-1 rectangle,
    every width-$w$ length-$1/w$ needle has a point. For fixed $w$ this only says the
    parallel-projection of points in the width-$w$ slab is $(1/w)$-dense; taking
    $w\to0$ coarsens, $w\to\infty$ just re-derives projection density. No
    contradiction with the per-line $\le 2025$ bound. DEAD END.
  - The per-line $\le 2025$ bound is, as the reviewer warned, **not yet genuinely
    used** in any attempted finish, which is strong evidence the correct argument
    is different from all four above. The crux remains open.

- **A1 (unit square inside a large empty ball, $r\ge 1/\sqrt2$).** The open unit
  square centered at $0$ has $\sup(x^2+y^2)=1/2$ (unattained), so it sits strictly
  inside $B(0,1/\sqrt2)\subseteq B(0,r)$ and is $S$-empty. $1/\sqrt2$ is the minimal
  circumradius over all area-$1$ rectangles (AM–GM), so the sub-case is sharp. —
  WORKED, fully rigorous; closes Lemma C when $r\ge 1/\sqrt2$.

- **A2 (slab-gap sufficiency reduction).** A length-$1/w$ gap in the parallel
  projection of $S$ restricted to a width-$w$ slab yields an $S$-empty area-$1$
  rectangle (Lemma C0 localized to the slab). — WORKED, fully rigorous; reduces
  Lemma C to a one-dimensional slab-gap search and narrows the crux to $r<1/\sqrt2$.

- **Part B (direction-averaging contradiction toward $r<1/\sqrt2$).** Recorded as an
  open direction, NOT a proof. Reproduces the density-$1$ borderline at the covering
  count (annulus area $=\pi(2r/w+1/w^2)$, no slack). The near-tangent chord through
  the annulus $r\le|p|\le r+1/w$ has half-length $\sqrt{2r/w+1/w^2}$ (NOT the
  outline's $2\sqrt{2r/w}$ — corrected; for small $w$ this is $\approx 1/w$). The
  implication "no $2026$ used points near-collinear $\Rightarrow$ an angular gap
  $>w/r$ (an unserved direction)" could not be made airtight. — DEAD END as written;
  the corrected chord estimate is recorded so the slip is not repeated.

## Current best

Set $N=2025$ throughout (the argument is uniform in $N\ge 1$). For a unit vector
$u=(\cos\theta,\sin\theta)$ write $u^{\perp}=(-\sin\theta,\cos\theta)$, and for
$x\in\mathbb{R}^2$ write $\operatorname{par}_u(x)=\langle x,u\rangle$ and
$\operatorname{perp}_u(x)=\langle x,u^{\perp}\rangle$. An **(axis-$u$) rectangle**
with center $z$, length $\ell$ (along $u$) and width $w$ (along $u^{\perp}$) is
$$R=\{x:\ |\operatorname{par}_u(x)-\operatorname{par}_u(z)|<\tfrac{\ell}{2},\
        |\operatorname{perp}_u(x)-\operatorname{perp}_u(z)|<\tfrac{w}{2}\},$$
an **open** set (its strict interior); it has area $\ell w$.

We have reduced the problem to a single open lemma (Lemma C). The reduction below
is complete and rigorous.

### Case 1 (some line carries ≥ 2026 points). DONE.

Suppose a line $L$ contains at least $2026$ points of $S$. Choose any $2026$ of
them, $q_1,\dots,q_{2026}\in L$. Parametrize $L$ by arclength via a unit vector $u$
along $L$, so each $q_i$ has a real coordinate $t_i=\operatorname{par}_u(q_i)$ and
$\operatorname{perp}_u(q_i)=c$ is the (common) signed distance of $L$ from the
origin. Let $a=\min_i t_i$, $b=\max_i t_i$, and $D=b-a\ge 0$ the spread.

Fix any $\varepsilon>0$ and set $\ell=D+\varepsilon$, $w=\dfrac{1}{D+\varepsilon}$,
so $\ell w=1$. Let $z$ be the point of $L$ with
$\operatorname{par}_u(z)=\tfrac{a+b}{2}$ (so $\operatorname{perp}_u(z)=c$). Consider
the axis-$u$ rectangle $R$ centered at $z$ with length $\ell$ and width $w$. For
each $i$:
$$|\operatorname{par}_u(q_i)-\operatorname{par}_u(z)|=\Big|t_i-\tfrac{a+b}{2}\Big|
   \le \tfrac{b-a}{2}=\tfrac{D}{2}<\tfrac{D+\varepsilon}{2}=\tfrac{\ell}{2},$$
$$|\operatorname{perp}_u(q_i)-\operatorname{perp}_u(z)|=|c-c|=0<\tfrac{w}{2}.$$
Both strict, so $q_1,\dots,q_{2026}$ lie in the strict interior of $R$. Hence $R$ is
an area-$1$ rectangle with at least $2026>2025$ interior points. $\square$

**From now on assume Case 2: every line in $\mathbb{R}^2$ contains at most
$2025$ points of $S$.**

### Lemma A (a small cluster forces > 2025). DONE.

**Claim.** If some open disk of radius $1/4$ contains more than $2025$ points of
$S$, then there is an area-$1$ rectangle (a unit square) with more than $2025$
points of $S$ in its strict interior.

**Proof.** Let $T\subseteq S$ be the set of points lying in such a disk, so
$|T|\ge 2026$ and the diameter satisfies $\operatorname{diam}(T)<2\cdot\tfrac14=\tfrac12$
(any two points of $T$ lie in a radius-$1/4$ disk, hence are within $1/2$ of each
other; the strict bound holds because the disk is open and $T$ is contained in it,
so every pair is at distance $<1/2$). By **Jung's theorem** (a bounded set of
diameter $d$ in $\mathbb{R}^2$ is contained in a closed disk of radius
$\le d/\sqrt 3$), $T$ lies in a closed disk $\overline{B}(z,\rho)$ with
$$\rho\le \frac{\operatorname{diam}(T)}{\sqrt 3}<\frac{1/2}{\sqrt 3}
       =\frac{1}{2\sqrt 3}=0.2886\ldots<\frac12 .$$
Let $Q$ be the open unit square centered at $z$ with sides parallel to the axes;
its strict interior is $\{x:\ |x_1-z_1|<\tfrac12,\ |x_2-z_2|<\tfrac12\}$, and it
contains the open disk $B(z,\tfrac12)$ (every point within Euclidean distance $<1/2$
of $z$ has each coordinate within $<1/2$ of $z$). Since each $t\in T$ satisfies
$|t-z|\le\rho<\tfrac12$, we get $t\in B(z,\tfrac12)\subseteq$ interior of $Q$. Thus
$Q$ has area $1$ and contains $|T|\ge 2026>2025$ points of $S$ in its strict
interior. $\square$

**From now on assume in addition that no open disk of radius $1/4$ contains more
than $2025$ points of $S$.**

### Lemma B (local finiteness, and an empty open ball). DONE.

**Claim.** Under the standing assumptions ($\le 2025$ points per line, and no
radius-$1/4$ disk with $>2025$ points), $S$ has no accumulation point; hence $S$
is closed and discrete (every bounded subset of $\mathbb{R}^2$ contains finitely
many points of $S$), $S$ is countable, and $\mathbb{R}^2\setminus S$ is a nonempty
open set, so there is an open ball $B(p,r)$ with $B(p,r)\cap S=\emptyset$.

**Proof.** Suppose $x_0$ were an accumulation point of $S$: every open neighborhood
of $x_0$ contains infinitely many points of $S$. In particular the open disk
$B(x_0,\tfrac14)$ contains infinitely many points of $S$, hence more than $2025$,
contradicting the standing assumption. So $S$ has no accumulation point.

A set with no accumulation point is closed (its complement contains, around each of
its points, a neighborhood meeting $S$ in at most that point — if the point is not
in $S$, a neighborhood missing $S$ entirely; either way the complement is open).
It is discrete: each $s\in S$ has a neighborhood meeting $S$ only in $s$ (else $s$
would be an accumulation point). Any bounded set $K$ meets $S$ in finitely many
points: were $K\cap S$ infinite, then (Bolzano–Weierstrass) the bounded infinite
set $K\cap S$ would have an accumulation point, contradicting the above. Covering
$\mathbb{R}^2$ by countably many unit disks, each meeting $S$ finitely, shows $S$ is
countable.

Finally $\mathbb{R}^2\setminus S$ is open (as $S$ is closed) and nonempty (a closed
countable set cannot be all of $\mathbb{R}^2$, since $\mathbb{R}^2$ is uncountable),
so it contains an open ball $B(p,r)$ disjoint from $S$. $\square$

### Lemma C0 (a projection with an interval gap ⇒ empty area-1 rectangle). DONE.

**Claim.** If for some unit vector $u$ the projection
$P_u=\{\operatorname{par}_u(q):q\in S\}\subseteq\mathbb{R}$ omits an open interval
$(\alpha,\beta)$ with $g=\beta-\alpha>0$, then there is an area-$1$ rectangle with
$0$ points of $S$ in its strict interior.

**Proof.** Pick the axis-$u$ rectangle $R$ centered at any point $z$ with
$\operatorname{par}_u(z)=\tfrac{\alpha+\beta}{2}$, of length $\ell=g$ (along $u$)
and width $w=\tfrac1g$ (along $u^{\perp}$); then $\ell w=1$. For $x\in R$ we have
$|\operatorname{par}_u(x)-\tfrac{\alpha+\beta}{2}|<\tfrac{g}{2}$, i.e.
$\operatorname{par}_u(x)\in(\alpha,\beta)$. But no point of $S$ has
$\operatorname{par}_u$ in $(\alpha,\beta)$ (that interval is omitted by $P_u$), so
$R$ contains no point of $S$ in its strict interior, while it has area $1$.
$\square$

**The negation of Lemma C0's hypothesis is: every projection $P_u$ is dense in
$\mathbb{R}$.** (A set of reals omits some open interval iff it is not dense.) Thus,
within Case 2 and the no-cluster assumption, either Lemma C0 finishes, or we are in:

### Lemma C — THE CRUX. PARTIALLY ADVANCED, NOT FULLY PROVED.

**Reduced statement.** Let $S\subseteq\mathbb{R}^2$ satisfy
1. $S$ is locally finite (closed, discrete) — Lemma B;
2. every line contains $\le 2025$ points of $S$ — Case 2;
3. for every unit vector $u$, $P_u=\{\operatorname{par}_u(q):q\in S\}$ is dense in
   $\mathbb{R}$ — negation of Lemma C0;
4. there is an empty open ball $B(p,r)$ (WLOG $p=0$) — Lemma B.

Then there exists an area-$1$ rectangle whose strict interior contains no point of
$S$.

#### Lemma C, A1 (the sub-case $r\ge 1/\sqrt2$). DONE.

**Claim.** If the empty open ball is $B(0,r)$ with $r\ge 1/\sqrt2$, then the open
unit square $Q$ centered at $0$ (sides parallel to the axes, or in *any*
orientation) is $S$-empty; it has area $1$, settling Lemma C in this sub-case.

**Proof.** The strict interior of the axis-aligned open unit square centered at $0$
is $Q=\{(x,y):|x|<\tfrac12,\ |y|<\tfrac12\}$. For every $(x,y)\in Q$,
$$x^2+y^2 < \tfrac14+\tfrac14=\tfrac12,$$
the inequality being **strict** because $|x|<\tfrac12$ and $|y|<\tfrac12$ are strict
(so $x^2<\tfrac14$ and $y^2<\tfrac14$); the value $\tfrac12$ is the supremum of
$x^2+y^2$ on $Q$ and is **not attained** on the open square. Hence
$|(x,y)|<\tfrac{1}{\sqrt2}$ for every $(x,y)\in Q$, i.e.
$$Q\subseteq B\!\left(0,\tfrac{1}{\sqrt2}\right)\subseteq B(0,r),$$
where the second inclusion uses $\tfrac1{\sqrt2}\le r$ (with $B(0,s)\subseteq B(0,r)$
for $s\le r$). Since $B(0,r)\cap S=\emptyset$ by hypothesis (4), we get
$Q\cap S=\emptyset$: the strict interior of $Q$ contains no point of $S$. The square
$Q$ has area $1$. Finally, the Euclidean norm is rotation-invariant, so for the unit
square $Q'$ centered at $0$ rotated by any angle $\theta$ we likewise have
$\sup_{Q'}|x|^2=\tfrac12$ unattained, hence $Q'\subseteq B(0,1/\sqrt2)\subseteq B(0,r)$
as well; thus the conclusion holds for the unit square in any orientation. $\square$

**Sharpness (remark, not needed for the proof).** Among area-$1$ rectangles with
side lengths $a,b$ and $ab=1$, the circumradius is $\tfrac12\sqrt{a^2+b^2}$, minimized
at $a=b=1$ by AM–GM ($a^2+b^2\ge 2ab=2$, equality iff $a=b=1$), giving minimal
circumradius $\tfrac12\sqrt2=\tfrac1{\sqrt2}$. So $1/\sqrt2$ is exactly the smallest
$r$ for which *some* area-$1$ rectangle fits inside $B(0,r)$; below this threshold no
area-$1$ rectangle is contained in the ball, which is precisely why the sub-case
$r<1/\sqrt2$ genuinely requires a rectangle that leaves the ball.

#### Lemma C, A2 (slab-gap sufficiency reduction). DONE.

**Claim.** Suppose there exist a unit vector $u$, a width $w>0$, and a real $X$ such
that the open slab $\Sigma_u=\{x:|\operatorname{perp}_u(x)|<\tfrac w2\}$ contains **no**
point $q\in S$ with $\operatorname{par}_u(q)\in(X,\,X+\tfrac1w)$. Then there is an
$S$-empty area-$1$ rectangle. Consequently Lemma C reduces to: *for some direction
$u$ and some width $w>0$, the parallel projection of $S\cap\Sigma_u$ omits an open
interval of length $1/w$.*

**Proof.** Let $R$ be the axis-$u$ rectangle with width $w$ (along $u^\perp$), length
$\tfrac1w$ (along $u$), centered at the point $z$ with $\operatorname{par}_u(z)=X+\tfrac1{2w}$
and $\operatorname{perp}_u(z)=0$. Its area is $w\cdot\tfrac1w=1$. If $x\in R$ (strict
interior), then by definition of an axis-$u$ rectangle
$$|\operatorname{perp}_u(x)-0|<\tfrac w2\quad\text{and}\quad
  \Big|\operatorname{par}_u(x)-\big(X+\tfrac1{2w}\big)\Big|<\tfrac1{2w}.$$
The first inequality says $x\in\Sigma_u$. The second says
$\operatorname{par}_u(x)\in\big(X,\,X+\tfrac1w\big)$. By hypothesis, no point of $S$
satisfies both ($x\in\Sigma_u$ and $\operatorname{par}_u\in(X,X+\tfrac1w)$
simultaneously). Hence $R\cap S=\emptyset$, so $R$ is an $S$-empty area-$1$ rectangle.
The reduction statement is the restatement: "$S\cap\Sigma_u$ has projection
$\{\operatorname{par}_u(q):q\in S\cap\Sigma_u\}$ omitting the open interval $(X,X+\tfrac1w)$
of length $\tfrac1w$" is exactly the hypothesis. $\square$

**Where the crux now stands.** By A1 we may assume $r<1/\sqrt2$. By A2 it suffices to
produce, in some direction $u$, a width-$w$ slab whose restricted parallel projection
has a gap of length $1/w$. The empty ball $B(0,r)$ already gives, in *every* direction
$u$ and for every width $w<2r$, a central gap: the slab $\Sigma_u$ contains no point
of $S$ with $|\operatorname{par}_u|<\sqrt{r^2-w^2/4}$ (such a point would lie in
$B(0,r)$). This central gap has length $2\sqrt{r^2-w^2/4}<2r<\sqrt2$, which is shorter
than $1/w$ only when $w$ is large; for small $w$ the required gap $1/w$ is long and the
central ball-gap alone is too short. The remaining content of Lemma C is therefore:

> **(Lemma C, open core).** Under hypotheses (1)–(4) with $r<1/\sqrt2$, find a unit
> vector $u$ and a width $w>0$ such that the parallel projection of $S\cap\Sigma_u$
> omits an open interval of length $1/w$ — equivalently (A2), produce one $S$-empty
> area-$1$ rectangle.

This is the **sole remaining gap.** We have not closed it. The density-$1$ obstruction
(below) is exactly why.

**Why this is exactly the remaining difficulty, and the precise obstruction.**
Center candidate thin rectangles at $0$ (inside the empty ball). The axis-$u$,
length-$1/w$, width-$w$ rectangle centered at $0$ captures a point $q\ne 0$ in its
strict interior iff
$$|\operatorname{perp}_u(q)|<\tfrac{w}{2}\quad\text{and}\quad
  |\operatorname{par}_u(q)|<\tfrac{1}{2w}.$$
Some width $w>0$ realizes both inequalities simultaneously iff
$$|\operatorname{perp}_u(q)|\cdot|\operatorname{par}_u(q)|<\tfrac14 .$$
The region $\{q:\ |\operatorname{perp}_u(q)|\,|\operatorname{par}_u(q)|<\tfrac14\}$ is
a hyperbolic neighborhood of the line $\{\operatorname{perp}_u=0\}$ of **infinite
area**. Hence local finiteness alone (which only makes *bounded* windows finite)
does **not** bound the number of points that some shrinking-$w$ family must dodge:
points may "escape to infinity" while hugging the central line, staying capturable
for every $w$. This is the genuine obstruction. It is **not** illustrated by
$S=\{(n,1/n!)\}$ (whose $x$-projection $\{1,2,3,\dots\}$ omits $(1,2)$ and is killed
one step earlier by Lemma C0); a witness for the difficulty must have *every*
projection dense, which is hypothesis (3).

A correct finish must combine hypotheses (2) (the per-line bound — still not
genuinely used in any *airtight* argument, though Part B below attempts to use it
structurally) and (3)/(4), with a family that varies **both** the direction $u$ and
the position, since for a single direction or a single slab all elementary
counting/averaging bounds are exactly critical at density $1$ (see *Approaches
tried* and Part B). We were unable to make such an argument airtight, and we do not
assert one.

#### Part B — direction-averaging attempt for the open core ($r<1/\sqrt2$). NOT A PROOF; recorded as an open direction.

The following is an *exploratory* skeleton toward closing the open core. It stalls at
a genuine gap (step B4) and is recorded so the next round does not repeat its
borderline steps. **It is not part of the proof and proves nothing.**

Assume for contradiction there is no $S$-empty area-$1$ rectangle, and $r<1/\sqrt2$.
Fix a width $w>0$.

- **B1.** By A2's contrapositive, for every direction $u$ the parallel projection of
  $S\cap\Sigma_u$ has no gap of length $1/w$; over the central ball-gap (length
  $2g$, $g=\sqrt{r^2-w^2/4}$) the next point to the right exists, giving
  $q(u)\in S\cap\Sigma_u$ with $\operatorname{par}_u(q(u))\in[g,\,g+\tfrac1w)$.
- **B2.** A fixed $p\in S$ at polar coordinates $(\rho,\phi)$ lies in $\Sigma_u$ iff
  $|\rho\sin(\phi-\angle u)|<\tfrac w2$, i.e. an arc of directions of length
  $2\arcsin\!\big(\tfrac{w}{2\rho}\big)$ around $\phi$. Using
  $x\le\arcsin x\le \tfrac{\pi}{2}x$ on $[0,1]$, this arc has length in
  $[\,w/\rho,\ \tfrac{\pi}{2}\,w/\rho\,]$ (when $w\le 2\rho$).
- **B3 (reproduces the recorded density-$1$ borderline — no new content).** The
  serving arcs cover $[0,2\pi)$, so $\gtrsim 2\pi r/w$ distinct points $p$ are used,
  all in the annulus $r\le|p|\le r+\tfrac1w$, whose area is
  $\pi\big((r+\tfrac1w)^2-r^2\big)=\pi\big(\tfrac{2r}{w}+\tfrac1{w^2}\big)$. This is
  consistent with density $1$: no slack. (Same borderline as the radial-needle and
  single-slab dead ends already recorded.)
- **B4 (the OPEN link — not closed).** Intended use of the per-line bound (2): if the
  used points were equi-spaced in angle at spacing $\approx w/r$, a near-tangent line
  at distance $\approx r$ from $0$ meets the annulus $r\le|p|\le r+\tfrac1w$ in a chord
  whose **half-length is** $\sqrt{(r+\tfrac1w)^2-r^2}=\sqrt{\tfrac{2r}{w}+\tfrac1{w^2}}$
  (corrected from the outline's erroneous $2\sqrt{2r/w}$; for small $w$ the $1/w^2$
  term dominates, so the chord half-length is $\approx 1/w$, full chord $\approx 2/w$).
  One hopes this chord carries $>2025$ used points, contradicting (2). **But** converting
  "no $2026$ used points are near-collinear" into "some consecutive angular gap exceeds
  the serving-arc length $\approx w/r$ (hence an unserved direction, contradicting B1)"
  is the missing implication. We could not make it airtight; the corrected chord length
  alone does not force it. **The open core remains open.**

### Exhaustiveness and disjointness of the case split (verified).

Every $S$ falls into exactly one terminal leaf:
- Either some line has $\ge 2026$ points (**Case 1**, DONE), or every line has
  $\le 2025$ points (**Case 2**). Disjoint and exhaustive by trichotomy on
  $\sup_L |L\cap S|$.
- Within Case 2: either some radius-$1/4$ disk has $>2025$ points (**Lemma A**,
  DONE), or none does. Disjoint and exhaustive.
- Within "none does": $S$ is locally finite with an empty ball (**Lemma B**), and
  then either some projection is non-dense (**Lemma C0**, DONE) or every projection
  is dense (**Lemma C**). "Every projection dense" is exactly the negation of
  "some projection omits an interval," so these two are disjoint and exhaustive.
- Within **Lemma C**: either the empty ball has radius $r\ge 1/\sqrt2$ (**A1**, DONE,
  via the unit square inside the ball) or $r<1/\sqrt2$ (the **open core**). Disjoint
  and exhaustive by trichotomy on $r$ vs. $1/\sqrt2$.

Thus the **only** missing piece is the open core of Lemma C: the sub-case
$r<1/\sqrt2$. Everything else is a complete, rigorous proof. By the A2 reduction the
remaining task is precisely: *for a locally finite planar set with at most $2025$
points on every line, every projection dense, and an empty open ball of radius
$r<1/\sqrt2$, find one direction $u$ and width $w$ whose width-$w$ slab has a
length-$1/w$ gap in its parallel projection* (equivalently, produce one empty
area-$1$ rectangle).

## Full proof

(Not present: Status is `partial`. Cases 1, A, B, C0 and Lemma C sub-cases A1/A2 are
complete and rigorous; the sole remaining gap is the open core of Lemma C — the
sub-case $r<1/\sqrt2$, equivalently producing one width-$w$ slab gap of length $1/w$
in some direction. See *Current best*.)
