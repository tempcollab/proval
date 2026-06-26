## Status
solved

## Approaches tried
- Complex coordinates on the circumcircle |z|=R: derive a closed form for every pairwise Simson-line intersection, identify the closure of S with the filled Steiner deltoid, and bound the convex hull by a support-function argument that pins the hull to the equilateral triangle of the deltoid's three cusps (circumradius 3R/2). — **worked**; gives the full proof below. All non-trivial identities verified symbolically with sympy and the final answer checked on the 3-4-5 triangle (= 675√3/64).

## Current best
Complete solution. The smallest convex set containing S has area
**27√3·R²/16**, where R is the circumradius of triangle ABC. In terms of the side
lengths,
$$\boxed{\ \mathrm{Area}=\dfrac{27\sqrt{3}\,(abc)^2}{16\,(a+b+c)(-a+b+c)(a-b+c)(a+b-c)}\ }$$
verified to equal 675√3/64 on the 3-4-5 right triangle.

## Full proof

Throughout, ABC is a non-degenerate triangle, so the strict triangle inequalities
hold and its area Δ>0 and circumradius R are finite and positive.

### 0. Setup (complex coordinates on the circumcircle)

Place the circumcenter at the origin and write the circumcircle as $|z|=R$. Choose
real angles $a,b,c$ with
$$A=Re^{ia},\qquad B=Re^{ib},\qquad C=Re^{ic}.$$
A general point of $\Gamma$ is $P=Re^{ip}$, $p\in\mathbb R$ (with $p$ defined mod
$2\pi$). The orthocenter is $H=A+B+C=R(e^{ia}+e^{ib}+e^{ic})$ (the standard fact
that for a triangle inscribed in $|z|=R$ centered at $O=0$ the orthocenter is the
vector sum of the vertices). The nine-point center is $N=H/2$. We abbreviate the
total angle $S_0=a+b+c$.

For any $z$ on the circle $|w|=R$ we have $\overline z=R^2/z$; we will repeatedly
use that complex conjugation of an expression built from $R$ (real) and exponentials
$e^{i\theta}$ ($\theta$ real) is obtained by replacing $i$ with $-i$.

A point $z$ lies on the (oriented) line through $U$ and $V$ iff $(z-U)/(V-U)$ is
real, i.e. equals its conjugate. The vector $z-U$ is perpendicular to $V-U$ iff
$(z-U)/(V-U)$ is purely imaginary, i.e. equals minus its conjugate.

### 1. Lemma A (Simson line: direction and a point on it)

**Claim.** For $P=Re^{ip}$, the Simson line $\ell_P$ of $P$ with respect to $ABC$
(the line through the three feet of the perpendiculars from $P$ to the sides) has
direction $e^{i(S_0-p)/2}$ (mod $\pi$) and passes through the midpoint
$M=(P+H)/2$ of segment $PH$.

**Proof.** *Foot-of-perpendicular formula.* Let $U,V$ lie on $|w|=R$ and let
$z_0$ be any point. We claim the foot of the perpendicular from $z_0$ to the line
$UV$ is
$$f(z_0;U,V)=\tfrac12\Big(z_0+U+V-\frac{UV\,\overline{z_0}}{R^2}\Big).$$
Indeed, $f$ lies on line $UV$: using $\overline U=R^2/U,\ \overline V=R^2/V$, the
ratio $(f-U)/(V-U)$ equals its own conjugate; and $z_0-f$ is perpendicular to
$V-U$: $(z_0-f)/(V-U)$ equals minus its conjugate. Both identities were verified
to be exactly $0$ in sympy (replacing $i\mapsto -i$ for conjugation). Hence $f$ is
the orthogonal projection of $z_0$ onto line $UV$.

Apply this with $z_0=P$:
$$f_A=f(P;B,C),\quad f_B=f(P;C,A),\quad f_C=f(P;A,B)$$
are the feet on $BC,CA,AB$. Compute the differences. Writing $\overline P=Re^{-ip}$,
$$f_A-f_B=\tfrac12\Big(B+C-A- \tfrac{(BC-CA)\overline P}{R^2}\Big)
=-\tfrac{R}{2}\big[(e^{ia}-e^{ib})e^{ip}-e^{i(a+c)}+e^{i(b+c)}\big]e^{-ip}.$$
Dividing by $e^{i(S_0-p)/2}$ gives a quantity equal to its own conjugate
(sympy: the difference with its $i\mapsto-i$ image is exactly $0$); the same holds
for $(f_A-f_C)/e^{i(S_0-p)/2}$. Thus $f_A-f_B$ and $f_A-f_C$ are **real** scalar
multiples of $e^{i(S_0-p)/2}$. In particular the three feet are collinear (this is
the Simson line) and the line's direction is $e^{i(S_0-p)/2}$ (mod $\pi$).

*The midpoint $M=(P+H)/2$ lies on $\ell_P$.* Write each foot in the form
$f=M+t\,e^{i(S_0-p)/2}$. A direct computation (sympy) gives, for the foot on $BC$,
$$f_A-M=t_A\,e^{i(S_0-p)/2},\qquad
t_A=-\frac R2\big(e^{i(a+p)}+e^{i(b+c)}\big)e^{-i(S_0+p)/2}.$$
The exponents simplify: with $u=\tfrac{a+p-b-c}{2}$ we have
$a+p-\tfrac{S_0+p}{2}=u$ and $b+c-\tfrac{S_0+p}{2}=-u$, so
$$t_A=-\tfrac R2\big(e^{iu}+e^{-iu}\big)=-R\cos u\in\mathbb R$$
(sympy confirmed $t_A=-R\cos\!\frac{a+p-b-c}{2}$ exactly). Since $t_A$ is real, the
foot $f_A$ equals $M$ plus a **real** multiple of the unit direction
$e^{i(S_0-p)/2}$; hence $M$ lies on the line through $f_A$ with that direction, i.e.
$M\in\ell_P$. (The analogous real values $t_B,t_C$ confirm $f_B,f_C$ lie on the same
line.) Note $M-N=(P+H)/2-H/2=P/2$, so $|M-N|=R/2$, i.e. $M$ lies on the nine-point
circle $|z-N|=R/2$. $\square$

Thus every Simson line is
$$\ell_P=\Big\{\,M+t\,e^{i\varphi}\ :\ t\in\mathbb R\,\Big\},\qquad
M=(P+H)/2,\quad \varphi=\tfrac{S_0-p}{2}. \tag{1}$$

### 2. Lemma B (every pair of distinct Simson lines meets in one point; the formula)

**Claim.** Let $P_1=Re^{ip_1},P_2=Re^{ip_2}$ be distinct points of $\Gamma$, with
direction angles $\varphi_j=\tfrac{S_0-p_j}{2}$ and base points $M_j=(P_j+H)/2$.
Then $\ell_{P_1}$ and $\ell_{P_2}$ are never parallel, and their unique
intersection is
$$z(p_1,p_2)=M_1+R\cos(p_2-\varphi_1)\,e^{i\varphi_1}. \tag{2}$$

**Proof.** *Non-parallel.* The directions agree mod $\pi$ iff
$\varphi_1-\varphi_2=\tfrac{p_2-p_1}{2}\equiv 0\pmod\pi$, i.e. iff
$p_2-p_1\equiv 0\pmod{2\pi}$, i.e. iff $P_1=P_2$. As $P_1\ne P_2$, the two lines
have distinct directions and so meet in exactly one point. (There is no separate
"antipodal" exception: the only excluded pairs are $P_1=P_2$.)

*The formula.* Write the two lines from (1) as
$M_1+t_1e^{i\varphi_1}=M_2+t_2e^{i\varphi_2}$ and solve the resulting two real
linear equations for $t_1$. Sympy returns the unique solution $t_1=R\cos(p_2-\varphi_1)$
(the difference $t_1-R\cos(p_2-\varphi_1)$ simplifies to exactly $0$). Substituting
$t_1$ into the first line gives (2). $\square$

Using $M_1=N+P_1/2=N+\tfrac R2 e^{ip_1}$, formula (2) becomes
$$z(p_1,p_2)-N=\tfrac R2 e^{ip_1}+R\cos(p_2-\varphi_1)\,e^{i\varphi_1},
\qquad \varphi_1=\tfrac{S_0-p_1}{2}. \tag{2'}$$

### 3. Lemma C (the set S is the deltoid filled along chords)

Fix $P_1$ (hence $p_1$, $\varphi_1$, $M_1$). As $P_2$ ranges over $\Gamma\setminus\{P_1\}$,
i.e. $p_2$ ranges over $\mathbb R\setminus(p_1+2\pi\mathbb Z)$, the value
$r:=\cos(p_2-\varphi_1)$ ranges over a subset of $[-1,1]$:

- It attains **every** value in $(-1,1]$: for any $r_0\in(-1,1]$ there are two
  values of $p_2-\varphi_1$ in $[0,2\pi)$ with cosine $r_0$, and (since
  $\varphi_1=\tfrac{S_0-p_1}{2}$) at most one choice of $p_2$ can coincide with $p_1$
  mod $2\pi$; the other choice gives a legitimate $P_2\ne P_1$.
- The value $r=-1$ ($p_2-\varphi_1\equiv\pi$, i.e. $p_2\equiv \varphi_1+\pi$) is
  attained provided $\varphi_1+\pi\not\equiv p_1$, i.e. $p_1\not\equiv\varphi_1+\pi$.
  Since $\varphi_1=\tfrac{S_0-p_1}{2}$, the bad case $p_1\equiv\varphi_1+\pi$ means
  $p_1\equiv\tfrac{S_0}{3}+\tfrac{2\pi}{3}\,(\text{mod }2\pi$, up to the three
  branches); for all other $p_1$ the value $r=-1$ is attained.
- The value $r=+1$ ($p_2\equiv\varphi_1$) requires $\varphi_1\not\equiv p_1$, i.e.
  $p_1\not\equiv\tfrac{S_0}{3}\pmod{2\pi}$ (again up to three branches); for the
  exceptional $p_1$ it forces $p_2=p_1$ and is excluded.

In all cases, for fixed $P_1$ the intersection points $\{z(p_1,p_2):P_2\ne P_1\}$
fill the chord
$$\{\,M_1+R\,r\,e^{i\varphi_1}\ :\ r\in[-1,1]\,\}$$
of length $2R$ on the line $\ell_{P_1}$, centered at $M_1$, **with at most the two
endpoints possibly missing for finitely many exceptional $p_1$.** Consequently
$$S=\bigcup_{p_1}\{z(p_1,p_2):p_2\ne p_1\}\subseteq
\mathcal D:=\Big\{N+\tfrac R2 e^{ip}+R\,r\,e^{i(S_0-p)/2}\ :\ p\in[0,2\pi),\ r\in[-1,1]\Big\}, \tag{3}$$
and $\mathcal D\subseteq \mathrm{cl}(S)$ because the missing endpoints occur only for
finitely many $p_1$ and each such endpoint is a limit of interior chord points and
of nearby chords. We call $\mathcal D$ the **filled deltoid**; it is closed (continuous
image of the compact set $[0,2\pi]\times[-1,1]$). Hence
$$\mathrm{cl}(S)=\mathcal D. \tag{4}$$

### 4. Lemma D (boundary of $\mathcal D$ is the Steiner deltoid; its cusps)

The boundary contribution $r=\pm1$ of (3) is, after the substitution $w=e^{ip/2}$
(so $e^{ip}=w^2$) and $\lambda:=e^{iS_0/2}$ (note $e^{i(S_0-p)/2}=\lambda/w$),
$$z-N=\tfrac R2 w^2+R\,\frac{\lambda}{w},\qquad |w|=1. \tag{5}$$
(The value $r=-1$ corresponds to the same curve with $w$ replaced by $-w$:
$-e^{i(S_0-p)/2}=\lambda\,(-1/w)=\lambda/(\text{the antipodal }w)$, sympy-confirmed,
so as $w=e^{i\theta}$ runs once over the full unit circle, (5) traces **both**
the $r=+1$ and $r=-1$ envelopes — the entire deltoid boundary.)

Curve (5) is a 3-cusped hypocycloid (Steiner deltoid) centered at $N$. Its singular
points (cusps) are where $\frac{dz}{dw}=R\,w-\frac{R\lambda}{w^2}=\frac{R(w^3-\lambda)}{w^2}=0$,
i.e. $w^3=\lambda=e^{iS_0/2}$. The three cusp parameters are
$$w_k=e^{i(S_0/6+2\pi k/3)},\qquad k=0,1,2.$$
At a cusp, $w^3=\lambda$ gives $\lambda/w=w^2$, so by (5)
$$z-N=\tfrac R2 w^2+R\,w^2=\tfrac{3R}{2}\,w^2 .$$
Writing $w_k^2=e^{i(S_0/3+4\pi k/3)}$, the three cusps are
$$Z_k=N+\tfrac{3R}{2}\,e^{i\mu_k},\qquad \mu_k=\tfrac{S_0}{3}+\tfrac{4\pi k}{3},\quad k=0,1,2. \tag{6}$$
(All of the above — $dz/dw$, the cusp identity $z-N=\tfrac{3R}2 w^2$, and the
$r=-1$ branch identity — were checked symbolically in sympy.)

The points $Z_k$ all lie at distance $3R/2$ from $N$, at angles $\mu_k$ spaced
$2\pi/3$ apart, so they are the vertices of an **equilateral triangle $T$** inscribed
in the circle $|z-N|=3R/2$.

### 5. Lemma E (the support computation: $\mathcal D\subseteq T$, the load-bearing step)

We must show the filled deltoid lies inside the cusp triangle $T$. Define $T$ as the
intersection of the three closed half-planes whose bounding lines are the support
lines of $T$ in the three outward directions $e^{i\mu_k}$:
$$T=\bigcap_{k=0}^{2}\Big\{z:\ \mathrm{Re}\big(e^{-i\mu_k}(z-N)\big)\le \tfrac{3R}{2}\Big\}. \tag{7}$$
*Justification that (7) is exactly the cusp triangle.* For the three vertices,
$\mathrm{Re}\big(e^{-i\mu_k}(Z_j-N)\big)=\tfrac{3R}2\cos(\mu_j-\mu_k)$, and
$\mu_j-\mu_k\in\{0,\pm\tfrac{2\pi}{3}\}$ gives $\cos\in\{1,-\tfrac12\}$. So in
direction $\mu_k$ the maximum over $j$ is $\tfrac{3R}2$, attained only at $j=k$.
Thus the support value of $\{Z_0,Z_1,Z_2\}$ (and of their convex hull) in each
direction $\mu_k$ is exactly $\tfrac{3R}2$, and the support line in direction $\mu_k$
passes through $Z_k$ and through no other vertex except where the edge meets it.
The three support lines (directions $\mu_0,\mu_1,\mu_2$ spaced $2\pi/3$) bound a
triangle, which is precisely the convex hull of $Z_0,Z_1,Z_2$; hence (7) is the
closed equilateral triangle $T$ with vertices $Z_k$.

**Main estimate.** We show every point of $\mathcal D$ satisfies all three
inequalities in (7).

*Step 1 — reduce filled set to its boundary.* For a point of $\mathcal D$,
$z-N=\tfrac R2 e^{ip}+R\,r\,e^{i(S_0-p)/2}$, and
$$\mathrm{Re}\big(e^{-i\mu}(z-N)\big)=\tfrac R2\cos(p-\mu)+R\,r\,\cos\!\big(\tfrac{S_0-p}{2}-\mu\big),$$
which is **linear in $r$** on $[-1,1]$. Its maximum over $r$ is attained at an
endpoint $r=\pm1$, i.e. at a boundary (deltoid) point. So it suffices to bound the
support of the boundary curve (5).

*Step 2 — support of the boundary curve in direction $\mu$.* Parametrize (5) by
$w=e^{i\theta}$, $\theta\in[0,2\pi)$:
$z-N=\tfrac R2 e^{2i\theta}+R\,e^{i(S_0/2-\theta)}$, so
$$g(\theta):=\mathrm{Re}\big(e^{-i\mu}(z-N)\big)
=\tfrac R2\cos(2\theta-\mu)+R\cos\!\big(\tfrac{S_0}{2}-\theta-\mu\big). \tag{8}$$

*Step 3 — bound $g$ in a cusp direction $\mu=\mu_k$.* Recall the cusp parameter is
$\theta_k=\tfrac{S_0}{6}+\tfrac{2\pi k}{3}$, satisfying $2\theta_k=\mu_k$ and
$3\theta_k=\tfrac{S_0}{2}$. Substitute $\mu=\mu_k=2\theta_k$ and $\tfrac{S_0}{2}=3\theta_k$
into (8) and set $x=\theta-\theta_k$:
$$g(\theta)=\tfrac R2\cos\!\big(2\theta-2\theta_k\big)+R\cos\!\big(3\theta_k-\theta-2\theta_k\big)
=\tfrac R2\cos(2x)+R\cos(x).$$
(This simplification was confirmed exactly in sympy.) Using $\cos2x=2\cos^2x-1$ and
writing $u=\cos x\in[-1,1]$,
$$g=\tfrac R2(2u^2-1)+Ru=R\big(u^2+u-\tfrac12\big)=R\,h(u),\quad h(u)=u^2+u-\tfrac12 .$$
On $[-1,1]$, $h$ is a upward parabola with vertex at $u=-\tfrac12$ (value $-\tfrac34$),
so its maximum on $[-1,1]$ is at $u=1$, namely $h(1)=\tfrac32$. Therefore
$$g(\theta)\le \tfrac{3R}{2}\quad\text{for all }\theta,\ \text{with equality iff }\cos x=1,\ \text{i.e. }\theta=\theta_k,$$
which is exactly the cusp $Z_k$. By Step 1 this gives
$\mathrm{Re}\big(e^{-i\mu_k}(z-N)\big)\le\tfrac{3R}{2}$ for **all** $z\in\mathcal D$,
with equality (on the boundary) only at $Z_k$.

Doing this for $k=0,1,2$ shows $\mathcal D$ satisfies all three inequalities in (7),
i.e.
$$\mathcal D\subseteq T. \tag{9}$$
This is the rigorous form of "the deltoid arcs bow strictly inward": between two
adjacent cusps the boundary curve stays strictly on the inner side of the edge of
$T$, touching the support lines only at the cusps. $\square$

### 6. The convex hull and the closure subtlety

Combine the pieces. By (3), $S\subseteq\mathcal D$, and by (9), $\mathcal D\subseteq T$;
since $T$ is convex,
$$\mathrm{conv}(S)\subseteq T. \tag{10}$$

For the reverse, we show each cusp $Z_k$ is a **limit point of $S$** (it is not a
member of $S$, because reaching it would require the excluded pair $p_2=p_1$). Fix
$k$; take $p_1=\tfrac{S_0}{3}+\tfrac{4\pi k}{3}+\varepsilon$ (so
$\varphi_1=\tfrac{S_0-p_1}{2}$) and $p_2=\varphi_1+\delta$ with $\delta\ne 0$ chosen
so that $p_2\not\equiv p_1$ (possible for all small $\delta$, since
$p_2\equiv p_1$ would force $\delta=2\varphi_1-2p_1+\dots$, a fixed nonzero value as
$\varepsilon\to0^+$). Then $P_1\ne P_2$ and by (2')
$$z(p_1,p_2)-N=\tfrac R2 e^{ip_1}+R\cos\delta\,e^{i\varphi_1}\xrightarrow[\varepsilon,\delta\to0]{}
\tfrac R2 e^{i\mu_k}+R\,e^{i\mu_k}=\tfrac{3R}{2}e^{i\mu_k}=Z_k-N,$$
using $e^{ip_1}\to e^{i\mu_k}$ and $e^{i\varphi_1}\to e^{i\mu_k}$ as
$\varepsilon\to0$, and $\cos\delta\to1$. (Numerically: for
$(\varepsilon,\delta)=(10^{-5},10^{-6})$ on a sample triangle, $|z-Z_0|\approx4\times10^{-11}$.)
Hence each $Z_k\in\mathrm{cl}(S)$.

Therefore $\mathrm{cl}(\mathrm{conv}(S))\supseteq\{Z_0,Z_1,Z_2\}$, and since the closure
of a convex set is convex, $\mathrm{cl}(\mathrm{conv}(S))\supseteq\mathrm{conv}\{Z_0,Z_1,Z_2\}=T$.
On the other hand, by (10), $\mathrm{cl}(\mathrm{conv}(S))\subseteq\mathrm{cl}(T)=T$.
Hence
$$\mathrm{cl}(\mathrm{conv}(S))=T. \tag{11}$$

**Interpretation (smallest convex set and its area).** The smallest convex set
containing $S$ is $\mathrm{conv}(S)$. By (10) and (11),
$$T\setminus\{Z_0,Z_1,Z_2\}\ \text{(at most)}\ \subseteq\ \mathrm{conv}(S)\ \subseteq\ T,$$
so $\mathrm{conv}(S)$ differs from the closed triangle $T$ by at most its three
vertices — a set of (Lebesgue) measure zero. **In particular the area of the
smallest convex set containing $S$ equals the area of $T$.** (We do not claim the
set-equality $\mathrm{conv}(S)=T$: the cusps $Z_k$ lie in $\mathrm{cl}(S)$ but not
in $S$, so they need not belong to the non-closed set $\mathrm{conv}(S)$; the
measure-zero corner set is irrelevant to the area, which is what the problem asks.)

### 7. Area and conversion to $a,b,c$

$T$ is equilateral, inscribed in a circle of radius $\rho=3R/2$. The area of an
equilateral triangle inscribed in a circle of radius $\rho$ is $\tfrac{3\sqrt3}{4}\rho^2$
(side $=\rho\sqrt3$, area $=\tfrac{\sqrt3}{4}(\rho\sqrt3)^2=\tfrac{3\sqrt3}{4}\rho^2$).
Hence
$$\mathrm{Area}=\frac{3\sqrt3}{4}\Big(\frac{3R}{2}\Big)^2=\frac{27\sqrt3}{16}R^2. \tag{12}$$

Convert via the circumradius formula $R=\dfrac{abc}{4\Delta}$ and Heron’s formula
$\Delta=\sqrt{s(s-a)(s-b)(s-c)}$, $s=\tfrac{a+b+c}{2}$. The identity
$$16\Delta^2=(a+b+c)(-a+b+c)(a-b+c)(a+b-c)$$
holds (sympy: $16\Delta^2$ minus the right side simplifies to $0$). Then
$R^2=\dfrac{(abc)^2}{16\Delta^2}$ and
$$\mathrm{Area}=\frac{27\sqrt3}{16}\cdot\frac{(abc)^2}{16\Delta^2}
=\frac{27\sqrt3\,(abc)^2}{256\,\Delta^2}
=\frac{27\sqrt3\,(abc)^2}{16\,(a+b+c)(-a+b+c)(a-b+c)(a+b-c)}, \tag{13}$$
using $256\Delta^2=16\cdot16\Delta^2=16\cdot(a+b+c)(-a+b+c)(a-b+c)(a+b-c)$
(sympy-verified).

### 8. Verification of the answer (3-4-5 triangle)

For the right triangle with legs $3,4$ and hypotenuse $5$, the circumradius is
$R=\tfrac{\text{hypotenuse}}{2}=\tfrac52$. By (12),
$$\mathrm{Area}=\frac{27\sqrt3}{16}\Big(\frac52\Big)^2=\frac{27\sqrt3}{16}\cdot\frac{25}{4}
=\frac{675\sqrt3}{64}\approx 18.2677 .$$
Cross-check via (13): $(abc)^2=(3\cdot4\cdot5)^2=3600$, and
$(a+b+c)(-a+b+c)(a-b+c)(a+b-c)=12\cdot6\cdot4\cdot2=576$, so
$$\mathrm{Area}=\frac{27\sqrt3\cdot3600}{16\cdot576}=\frac{97200\sqrt3}{9216}
=\frac{675\sqrt3}{64},$$
matching exactly (sympy-confirmed). 

### Conclusion

The area of the smallest convex set containing $S$ is
$$\boxed{\ \mathrm{Area}=\frac{27\sqrt3}{16}R^2
=\frac{27\sqrt3\,(abc)^2}{16\,(a+b+c)(-a+b+c)(a-b+c)(a+b-c)}\ }$$
where $R=\dfrac{abc}{4\Delta}$ is the circumradius. $\blacksquare$
