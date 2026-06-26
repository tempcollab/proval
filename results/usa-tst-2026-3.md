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
  ⇒ an empty area-1 rectangle): OPEN.** Attacked four ways, all failed at the same
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

### Lemma C — THE OPEN CRUX. NOT PROVED.

**Reduced statement.** Let $S\subseteq\mathbb{R}^2$ satisfy
1. $S$ is locally finite (closed, discrete) — Lemma B;
2. every line contains $\le 2025$ points of $S$ — Case 2;
3. for every unit vector $u$, $P_u=\{\operatorname{par}_u(q):q\in S\}$ is dense in
   $\mathbb{R}$ — negation of Lemma C0;
4. there is an empty open ball $B(p,r)$ (WLOG $p=0$) — Lemma B.

Then there exists an area-$1$ rectangle whose strict interior contains no point of
$S$.

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

A correct finish must combine hypotheses (2) (the per-line bound — not yet
genuinely used in any attempted argument) and (3)/(4), with a family that varies
**both** the direction $u$ and the position, since for a single direction or a
single slab all elementary counting/averaging bounds are exactly critical at
density $1$ (see *Approaches tried*). We were unable to make such an argument
airtight, and we do not assert one.

### Exhaustiveness and disjointness of the case split (verified).

Every $S$ falls into exactly one terminal leaf:
- Either some line has $\ge 2026$ points (**Case 1**, DONE), or every line has
  $\le 2025$ points (**Case 2**). Disjoint and exhaustive by trichotomy on
  $\sup_L |L\cap S|$.
- Within Case 2: either some radius-$1/4$ disk has $>2025$ points (**Lemma A**,
  DONE), or none does. Disjoint and exhaustive.
- Within "none does": $S$ is locally finite with an empty ball (**Lemma B**), and
  then either some projection is non-dense (**Lemma C0**, DONE) or every projection
  is dense (**Lemma C**, OPEN). "Every projection dense" is exactly the negation of
  "some projection omits an interval," so these two are disjoint and exhaustive.

Thus the **only** missing piece is Lemma C. Everything else is a complete, rigorous
proof. The problem is reduced to: *for a locally finite planar set with at most
$2025$ points on every line, every projection dense, and an empty open ball,
produce an empty area-$1$ rectangle.*

## Full proof

(Not present: Status is `partial`. The crux Lemma C is open; see *Current best*.)
