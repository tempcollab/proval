## Status
solved

## Approaches tried
- Canonical-path / discrete L^p Poincaré method on the grid graph P_n^3: mean-zero
  identity + Jensen + power-mean (Hölder) along axis-aligned canonical paths +
  path-load double counting. — worked; gives the bound with constant
  (n/2)^{1/p} D^{(p-1)/p} for every p ≥ 1, and (n/2)·D^{p-1} ≤ 6677^p closes it.

## Current best
Complete proof below. The crux is the path-load lemma: a canonical x-, y-, or
z-edge at "position k" is used by exactly 2k(n−k)n² ordered vertex pairs, whose
maximum over k is n⁴/2 (attained at k=n/2 since n=2026 is even); dividing by
N=n³ gives n/2=1013. Combined with the power-mean inequality (length factor
D^{p−1}, D=3(n−1)=6075) and n/2≤6677, D≤6677, this yields the constant 6677^p.

## Full proof

Throughout, write $n=2026$, so that
$$V=\{(x,y,z):1\le x,y,z\le n\},\qquad N:=|V|=n^3,\qquad D:=3(n-1)=6075,\qquad C:=6677.$$
Two vertices are adjacent iff they differ in exactly one coordinate, by exactly
$\pm1$. For an edge $e=\{a,b\}$ we set $g(e)=|f(a)-f(b)|\ge 0$. We are given
$\sum_{v\in V}f(v)=0$, and we must prove, for every real $p\ge 1$,
$$\sum_{v\in V}|f(v)|^p\ \le\ C^{\,p}\sum_{e\in E}g(e)^p .$$

We first record the two elementary inequalities we use, with proofs, since the
knowledge base contains no entry for them.

### Lemma A (Jensen for $t\mapsto |t|^p$).
Let $p\ge 1$, let $a_1,\dots,a_M$ be real numbers, and let $w_1,\dots,w_M\ge 0$
with $\sum_i w_i=1$. Then
$$\Big|\sum_{i=1}^M w_i a_i\Big|^p\ \le\ \sum_{i=1}^M w_i\,|a_i|^p .$$

*Proof.* The function $\varphi(t)=|t|^p$ is convex on $\mathbb{R}$ for $p\ge 1$
(for $p>1$ it is twice differentiable away from $0$ with
$\varphi''(t)=p(p-1)|t|^{p-2}\ge 0$, and it is continuous and convex through $0$;
for $p=1$ it is the absolute value, which is convex). Jensen's inequality applied
to the convex function $\varphi$ with weights $w_i$ gives
$\varphi\!\left(\sum_i w_i a_i\right)\le \sum_i w_i\,\varphi(a_i)$, i.e.
$\big|\sum_i w_i a_i\big|^p\le \sum_i w_i|a_i|^p$. $\square$

### Lemma B (Power-mean / Hölder with uniform weights).
Let $p\ge 1$, let $L\ge 1$ be an integer, and let $b_1,\dots,b_L\ge 0$. Then
$$\Big(\sum_{i=1}^L b_i\Big)^p\ \le\ L^{\,p-1}\sum_{i=1}^L b_i^{\,p} .$$

*Proof.* Apply Lemma A with $M=L$, $a_i=b_i\ge 0$, and uniform weights
$w_i=1/L$ (so $\sum_i w_i=1$). This gives
$\big(\tfrac1L\sum_i b_i\big)^p\le \tfrac1L\sum_i b_i^p$. Multiplying both sides
by $L^p$ yields $\big(\sum_i b_i\big)^p\le L^{p-1}\sum_i b_i^p$. (Equivalently this
is Hölder's inequality with exponents $p$ and $p/(p-1)$ applied to the vectors
$(b_i)$ and $(1,\dots,1)$; for $p=1$ both sides are equal, $L^0=1$.) $\square$

### Step 1: Mean-zero identity.
Fix any $v\in V$. Since $\sum_{u\in V}f(u)=0$,
$$N f(v)=N f(v)-\sum_{u\in V}f(u)=\sum_{u\in V}\big(f(v)-f(u)\big),$$
where the second equality uses $N=|V|$ so that $\sum_{u\in V}f(v)=Nf(v)$. Dividing
by $N$,
$$f(v)=\frac1N\sum_{u\in V}\big(f(v)-f(u)\big).\tag{1}$$
This is an exact identity (it uses the hypothesis $\sum_u f(u)=0$ and nothing about
$f$ otherwise; there is no circularity).

### Step 2: Apply Jensen vertex-wise.
By (1) and Lemma A with the $N$ uniform weights $w_u=1/N$ and the numbers
$a_u=f(v)-f(u)$,
$$|f(v)|^p=\Big|\frac1N\sum_{u\in V}\big(f(v)-f(u)\big)\Big|^p
\ \le\ \frac1N\sum_{u\in V}\big|f(v)-f(u)\big|^p.$$
Summing over $v\in V$,
$$\sum_{v\in V}|f(v)|^p\ \le\ \frac1N\sum_{(v,u)\in V\times V}\big|f(v)-f(u)\big|^p,\tag{2}$$
the inner sum running over all $N^2$ ordered pairs.

### Step 3: Canonical paths.
For an ordered pair $(v,u)$ with $v=(v_x,v_y,v_z)$ and $u=(u_x,u_y,u_z)$, define
the **canonical path** $\gamma(v,u)$ as the axis-aligned lattice walk that

1. moves along the $x$-axis from $v_x$ to $u_x$ with $(y,z)$ held at $(v_y,v_z)$,
   stepping one unit at a time;
2. then moves along the $y$-axis from $v_y$ to $u_y$ with $(x,z)$ held at
   $(u_x,v_z)$;
3. then moves along the $z$-axis from $v_z$ to $u_z$ with $(x,y)$ held at
   $(u_x,u_y)$.

Each step changes a single coordinate by $\pm1$ and stays inside
$\{1,\dots,n\}^3$ (since all intermediate coordinate values lie between the
corresponding coordinates of $v$ and $u$, hence in $\{1,\dots,n\}$). Thus
$\gamma(v,u)$ is a genuine walk in $G$ from $v$ to $u$, using exactly
$$L(v,u)=|v_x-u_x|+|v_y-u_y|+|v_z-u_z|$$
edges, each leg having length at most $n-1$, so
$$L(v,u)\ \le\ 3(n-1)=D.\tag{3}$$
If $v=u$ the walk is empty ($L=0$) and $|f(v)-f(u)|^p=0$, contributing nothing to
(2); we henceforth consider only pairs with $v\ne u$, i.e. $L(v,u)\ge 1$.

Orient each edge of $\gamma(v,u)$ in the direction of travel and let, for an edge
$e=\{a,b\}$, $df(e)=f(a)-f(b)$ for the chosen orientation; then telescoping along
the $L=L(v,u)$ edges of $\gamma(v,u)$ gives
$f(v)-f(u)=\sum_{e\in\gamma(v,u)}df(e)$, whence by the triangle inequality
$$|f(v)-f(u)|\ \le\ \sum_{e\in\gamma(v,u)}|df(e)|=\sum_{e\in\gamma(v,u)}g(e).$$
(The edges of $\gamma(v,u)$ are pairwise distinct: consecutive legs touch only at a
shared endpoint, and within a leg the moving coordinate is strictly monotone, so no
edge repeats.) Now apply Lemma B with $b_e=g(e)\ge 0$ over the $L\ge1$ edges of the
path:
$$|f(v)-f(u)|^p\ \le\ \Big(\sum_{e\in\gamma(v,u)}g(e)\Big)^p
\ \le\ L(v,u)^{\,p-1}\sum_{e\in\gamma(v,u)}g(e)^p.$$
Since $p\ge 1$ gives $p-1\ge 0$, the map $t\mapsto t^{p-1}$ is non-decreasing on
$[1,\infty)$, so by (3) and $L(v,u)\ge 1$,
$L(v,u)^{p-1}\le D^{\,p-1}$. Therefore
$$|f(v)-f(u)|^p\ \le\ D^{\,p-1}\sum_{e\in\gamma(v,u)}g(e)^p.\tag{4}$$
(At $p=1$, (4) is just the triangle inequality $|f(v)-f(u)|\le\sum_e g(e)$, with
$D^{0}=1$; the chain above remains valid.)

### Step 4: Swap summation order.
Substituting (4) into (2) and summing over all ordered pairs $(v,u)$ with $v\ne u$
(the pairs $v=u$ contribute $0$, so including them changes nothing):
$$\sum_{v\in V}|f(v)|^p\ \le\ \frac{D^{\,p-1}}{N}\sum_{(v,u)}\ \sum_{e\in\gamma(v,u)}g(e)^p
\ =\ \frac{D^{\,p-1}}{N}\sum_{e\in E}g(e)^p\,T(e),\tag{5}$$
where
$$T(e):=\#\{(v,u)\in V\times V:\ e\in\gamma(v,u)\}$$
is the **path load** of $e$. The interchange in (5) is a finite Fubini swap: the
double sum $\sum_{(v,u)}\sum_{e\in\gamma(v,u)}g(e)^p$ counts each term $g(e)^p$ once
for every ordered pair whose canonical path traverses $e$, i.e. $T(e)$ times.

### Step 5: Path-load lemma.
**Claim.** For every edge $e\in E$, $T(e)=2k(n-k)\,n^2$, where $k\in\{1,\dots,n-1\}$
is the position of $e$ defined below. Consequently
$$\max_{e\in E}T(e)=\frac{n^4}{2},\qquad\text{attained when }k=\tfrac n2.$$

We prove the count separately for $x$-, $y$-, and $z$-edges, because the canonical
routing fixes a *different* set of transverse coordinates for each axis (it routes
$x$ first, then $y$, then $z$). We are careful in each case to identify which
coordinates of $v$ and $u$ are *pinned* and which are *free*.

**(a) $x$-edges.** Let $e$ join $(k,y_0,z_0)$ and $(k+1,y_0,z_0)$ with
$k\in\{1,\dots,n-1\}$; call $k$ its position. The path $\gamma(v,u)$ traverses an
$x$-edge only during leg 1, where $y$ and $z$ are held at $(v_y,v_z)$. Hence
$e\in\gamma(v,u)$ forces $v_y=y_0$ and $v_z=z_0$. During leg 1 the $x$-coordinate
moves monotonically from $v_x$ to $u_x$, so the $x$-edge between layers $k,k+1$ is
used iff $k$ lies strictly between $v_x$ and $u_x$, i.e.
$$\min(v_x,u_x)\le k< \max(v_x,u_x)
\quad\Longleftrightarrow\quad
\big(v_x\le k<u_x\big)\ \text{or}\ \big(u_x\le k<v_x\big).$$
Conversely, if $v_y=y_0$, $v_z=z_0$, and this strict-between condition holds, then
leg 1 passes through $e$. So $e\in\gamma(v,u)$ iff:
$$v_y=y_0,\quad v_z=z_0,\quad \{v_x,u_x\}\text{ straddles }k\text{ as above},
\quad u_y,u_z\ \text{arbitrary}.$$
We count the admissible $(v,u)$:
- $v_y,v_z$ are **pinned** to $(y_0,z_0)$: $1$ choice.
- $u_y,u_z$ are **free**: $n\cdot n=n^2$ choices.
- The pair $(v_x,u_x)$ must straddle $k$. The number of *ordered* pairs
  $(v_x,u_x)\in\{1,\dots,n\}^2$ with $\min\le k<\max$ is: choose one coordinate in
  $\{1,\dots,k\}$ (the "left block", $k$ values) and the other in
  $\{k+1,\dots,n\}$ (the "right block", $n-k$ values), with two orderings of which
  of $v_x,u_x$ is on the left. This gives $2\,k\,(n-k)$ ordered pairs. (These are
  exactly the ordered pairs with one entry $\le k$ and the other $\ge k+1$, which is
  the straddling condition; there is no double counting since the two blocks are
  disjoint.)

Multiplying, $T(e)=1\cdot n^2\cdot 2k(n-k)=2k(n-k)\,n^2$.

**(b) $y$-edges.** Let $e$ join $(x_0,k,z_0)$ and $(x_0,k+1,z_0)$,
$k\in\{1,\dots,n-1\}$. A $y$-edge is traversed only during leg 2, where the path
sits at $x=u_x$ and $z=v_z$, with $y$ moving monotonically from $v_y$ to $u_y$.
Hence $e\in\gamma(v,u)$ forces $u_x=x_0$ and $v_z=z_0$, and requires
$\min(v_y,u_y)\le k<\max(v_y,u_y)$. Note that the leg-1 routing does not constrain
$y$ here; and after leg 1 the $x$-coordinate equals $u_x$, which is why the pinned
$x$-coordinate is $u_x=x_0$ (not $v_x$). Conversely these conditions suffice. So
$e\in\gamma(v,u)$ iff:
$$u_x=x_0,\quad v_z=z_0,\quad \{v_y,u_y\}\text{ straddles }k,\quad
v_x,u_z\ \text{free}.$$
Counting:
- $u_x$ pinned to $x_0$ and $v_z$ pinned to $z_0$: $1$ choice.
- $v_x$ and $u_z$ free: $n\cdot n=n^2$ choices.
- $(v_y,u_y)$ straddling $k$: $2k(n-k)$ ordered pairs, as in (a).

Thus $T(e)=1\cdot n^2\cdot 2k(n-k)=2k(n-k)\,n^2$.

**(c) $z$-edges.** Let $e$ join $(x_0,y_0,k)$ and $(x_0,y_0,k+1)$,
$k\in\{1,\dots,n-1\}$. A $z$-edge is traversed only during leg 3, where the path
sits at $x=u_x$ and $y=u_y$, with $z$ moving monotonically from $v_z$ to $u_z$.
Hence $e\in\gamma(v,u)$ forces $u_x=x_0$ and $u_y=y_0$, and requires
$\min(v_z,u_z)\le k<\max(v_z,u_z)$; conversely these suffice. So
$e\in\gamma(v,u)$ iff:
$$u_x=x_0,\quad u_y=y_0,\quad \{v_z,u_z\}\text{ straddles }k,\quad
v_x,v_y\ \text{free}.$$
Counting:
- $u_x$ pinned to $x_0$ and $u_y$ pinned to $y_0$: $1$ choice.
- $v_x$ and $v_y$ free: $n\cdot n=n^2$ choices.
- $(v_z,u_z)$ straddling $k$: $2k(n-k)$ ordered pairs.

Thus $T(e)=1\cdot n^2\cdot 2k(n-k)=2k(n-k)\,n^2$.

In all three cases $T(e)=2k(n-k)\,n^2$. (The pinned/free coordinate sets genuinely
differ by axis — for $x$-edges $v$'s transverse coordinates are pinned, for $z$-edges
$u$'s are pinned, for $y$-edges one of each — but the count is the same, so we
have written each case out rather than appealing to a coordinate-permutation
symmetry, which is not available because the routing order breaks that symmetry.)

**Maximizing the load.** Consider $h(k)=2k(n-k)$ for integer $k\in\{1,\dots,n-1\}$.
As a real function $h(t)=2t(n-t)$ is a downward parabola with vertex at $t=n/2$.
Since $n=2026$ is even, $k=n/2=1013$ is an admissible integer, and there
$h(n/2)=2\cdot\frac n2\cdot\frac n2=\frac{n^2}{2}$. For any other integer $k$,
$h(k)\le h(n/2)$ by concavity. Therefore
$$\max_{e\in E}T(e)=\frac{n^2}{2}\cdot n^2=\frac{n^4}{2}.$$
This proves the Claim. $\square$

(Arithmetic checks: $n^4/2=2026^4/2=8\,424\,182\,532\,488$, and
$\dfrac{n^4/2}{N}=\dfrac{n^4/2}{n^3}=\dfrac n2=1013$.)

### Step 6: Combine.
By Step 5, $T(e)\le n^4/2$ for every $e$, so $T(e)/N\le (n^4/2)/n^3=n/2$.
Plugging into (5) and using $g(e)^p\ge 0$:
$$\sum_{v\in V}|f(v)|^p\ \le\ D^{\,p-1}\sum_{e\in E}g(e)^p\cdot\frac{T(e)}{N}
\ \le\ \frac n2\,D^{\,p-1}\sum_{e\in E}g(e)^p.\tag{6}$$

### Step 7: Final comparison of constants.
We claim $\dfrac n2\,D^{\,p-1}\le C^{\,p}$ for all $p\ge 1$. Indeed:
$$\frac n2=1013\le 6677=C,\qquad D=6075\le 6677=C.$$
Since $p-1\ge 0$ and $t\mapsto t^{\,p-1}$ is non-decreasing on $[0,\infty)$ (for the
exponent $p-1\ge 0$), $D\le C$ gives $D^{\,p-1}\le C^{\,p-1}$. Multiplying the two
non-negative inequalities $\frac n2\le C$ and $D^{\,p-1}\le C^{\,p-1}$:
$$\frac n2\,D^{\,p-1}\ \le\ C\cdot C^{\,p-1}=C^{\,p}=6677^{\,p}.$$
Substituting into (6),
$$\boxed{\ \sum_{v\in V}|f(v)|^p\ \le\ 6677^{\,p}\sum_{e\in E}g(e)^p\ }\qquad\text{for all }p\ge1.$$
$\blacksquare$

### Remarks (not part of the proof).
- At $p=1$ the bound (6) reads $\sum_v|f(v)|\le \frac n2\sum_e g(e)$, and the
  coefficient $n/2$ is exact: a half-split step function (e.g. $f\equiv +1$ on
  $\{x\le n/2\}$ and $f\equiv -1$ on $\{x>n/2\}$, which is mean-zero) attains
  $\sum_v|f|=N=n^3$ and $\sum_e g(e)=2n^2$ (one $g(e)=2$ per $x$-line at the middle
  cut), giving ratio $n^3/(2n^2)=n/2$. Hence Step 5 cannot be improved; the slack in
  the final constant $C=6677$ comes only from the deliberate over-estimates
  $D\le C$ and $n/2\le C$, which are all that is needed.
- The two factors in Step 7 are both required: neither $n/2\le C$ alone nor
  $D\le C$ alone yields $C^p$; their product does, because the exponent on $D$ is
  $p-1$ and on the load coefficient is $1$, and $1+(p-1)=p$.
