## Status
solved

## Approaches tried
- Initial exploration (round 3): Identified the hypothesis is equivalent to the Pitot condition AB+CD=BC+DA; found complete proof for Part 2 (EFGH concyclic given Pitot) using the incenter; found clean proof for Part 1 direction Pitot=>cyclic via angle-sum in isoceles triangles. Converse direction (cyclic=>Pitot) needed work.
- Outline + review (round 3): Reduce to Pitot via two implications. Reviewer flagged that the converse must NOT rely on a "factor bounded away from 0" (false near degenerate slivers) nor on a numerical scan; it must use a consistent-sign argument on the OPEN convex interior, with directed angles and analytically proven monotonicity/sign.
- Final build (round 3): Derived the EXACT closed form for each line's base-angle deviation, g_X = arctan( (imbalance_X) / ((sum of legs)·tan(half-angle)) ). All four imbalances equal ±δ/2 (an algebraic identity), so after fixing orientations every one of the four signed contributions to the cyclic scalar Φ equals arctan( (δ/2)/(positive) ), hence shares the exact sign of δ. Each |g_X| < (π−∠X)/2, so |Φ| < π strictly on the open convex domain; thus Φ ≡ 0 (mod π) forces Φ=0 forces δ=0. This closes the converse analytically with a sign argument (no lower bound, no numerics). Part 2 transcribed in full. **Result: complete proof.**
- Review fix (round 3): reviewer flagged the §1.2 "Per-term bound" justification — the claim that the cut-off triangle's base angle equals (π−∠X)/2 + g_X is FALSE (g_X is a principal-arctangent line-direction deviation mod π, not base_angle − (π−∠X)/2). The bound itself is TRUE. Replaced the paragraph with the direct one-line argument from formula (1): both legs positive ⟹ |leg₁−leg₂|/(leg₁+leg₂) < 1 ⟹ tan|g_X| < cot(∠X/2) = tan((π−∠X)/2); both |g_X| and (π−∠X)/2 lie in (0,π/2) where tan is strictly increasing ((π−∠X)/2 ∈ (0,π/2) since ∠X ∈ (0,π); |g_X| < π/2 as a principal arctangent), giving |g_X| < (π−∠X)/2. Nothing else changed. **Status: solved.**

## Current best
Complete. See Full proof.

## Full proof

Throughout, "directed angle" means an angle taken modulo π; for two lines ℓ, m we
write ∠(ℓ,m) for the directed angle from ℓ to m (mod π). We use the standard
**equal-tangent lengths** fact and **Pitot's theorem**, both from
`knowledge_base.md` ("Synthetic toolkit / Circle configuration facts:
incircle/excircle tangency (equal tangents)…"; Pitot's theorem: a convex
quadrilateral has an inscribed circle iff the two sums of opposite sides are
equal).

### 0. Notation and tangent lengths

Let
$$p=AB,\quad q=BC,\quad r=CD,\quad s=DA,\quad e=AC,\quad f=BD,$$
and write $\angle A=\angle DAB,\ \angle B=\angle ABC,\ \angle C=\angle BCD,\
\angle D=\angle CDA$ for the interior angles of the convex quadrilateral $ABCD$.
Convexity gives $\angle A+\angle B+\angle C+\angle D=2\pi$ and each
$\angle X\in(0,\pi)$, and all six lengths $p,q,r,s,e,f$ are positive and satisfy the
strict triangle inequalities in each of the four triangles $ABC,BCD,CDA,DAB$.

**Equal-tangent lengths.** In a triangle the tangent length from a vertex to the
incircle equals (semiperimeter) − (opposite side). Applying this to the four
"diagonal" triangles gives the touch-point distances:

- Triangle $ABC$ (semiperimeter $\tfrac{p+q+e}{2}$):
  $AS=\tfrac{p+e-q}{2}$ (on $AB$), $CT=\tfrac{q+e-p}{2}$ (on $CB$).
- Triangle $BCD$ (semiperimeter $\tfrac{q+r+f}{2}$):
  $BU=\tfrac{q+f-r}{2}$ (on $BC$), $DV=\tfrac{r+f-q}{2}$ (on $DC$).
- Triangle $CDA$ (semiperimeter $\tfrac{r+s+e}{2}$):
  $CX=\tfrac{r+e-s}{2}$ (on $CD$), $AY=\tfrac{s+e-r}{2}$ (on $AD$).
- Triangle $DAB$ (semiperimeter $\tfrac{s+p+f}{2}$):
  $DZ=\tfrac{s+f-p}{2}$ (on $DA$), $BW=\tfrac{p+f-s}{2}$ (on $BA$).

Each of these eight tangent lengths is strictly positive, by the strict triangle
inequality in the relevant triangle (e.g. $AS=\tfrac{p+e-q}{2}>0$ since $p+e>q$ in
triangle $ABC$).

Define the **Pitot defect**
$$\boxed{\ \delta := p-q+r-s\ }\qquad(\text{so } \delta=0 \iff AB+CD=BC+DA,\ \text{the Pitot condition}).$$

The four bounding lines of the hypothesis are, by the problem's own touch-point
incidences,
$$L_A=SY\ (S\in AB,\ Y\in DA,\ \text{both through }A),\qquad
  L_B=UW\ (U\in BC,\ W\in AB,\ \text{both through }B),$$
$$L_C=TX\ (T\in BC,\ X\in CD,\ \text{both through }C),\qquad
  L_D=VZ\ (V\in CD,\ Z\in DA,\ \text{both through }D).$$
The "quadrilateral formed by the lines $SY,TX,UW,VZ$" is the quadrilateral whose
four sides lie on these lines, taken in the cyclic order
$L_A,L_B,L_C,L_D$ (one line per vertex of $ABCD$, in the order $A,B,C,D$ around the
quadrilateral). Its corners are
$$P_{AB}=L_A\cap L_B,\quad P_{BC}=L_B\cap L_C,\quad P_{CD}=L_C\cap L_D,\quad P_{DA}=L_D\cap L_A.$$

The proof has two parts:
**Part 1.** The hypothesis (corners $P_{AB},P_{BC},P_{CD},P_{DA}$ concyclic) implies
$\delta=0$, i.e. the Pitot condition.
**Part 2.** The Pitot condition implies $E,F,G,H$ concyclic.

---

### Part 1: cyclic ⟹ Pitot

#### 1.1 Vertex-imbalance identities (algebra; Lemma L1)

At each vertex the line $L_\bullet$ cuts off a triangle whose two legs are tangent
lengths lying along the two sides through that vertex. We record the difference of
those two legs.

$$AS-AY=\tfrac{(p+e-q)-(s+e-r)}{2}=\tfrac{p-q+r-s}{2}=\tfrac{\delta}{2},$$
$$BW-BU=\tfrac{(p+f-s)-(q+f-r)}{2}=\tfrac{p-s-q+r}{2}=\tfrac{\delta}{2},$$
$$DV-DZ=\tfrac{(r+f-q)-(s+f-p)}{2}=\tfrac{r-q-s+p}{2}=\tfrac{\delta}{2},$$
$$CX-CT=\tfrac{(r+e-s)-(q+e-p)}{2}=\tfrac{r-s-q+p}{2}=\tfrac{\delta}{2}.$$

The diagonal lengths $e,f$ cancel identically in each difference. So

$$\boxed{\,AS-AY=BW-BU=DV-DZ=CX-CT=\tfrac{\delta}{2}\,}\tag{L1}$$

an exact algebraic identity valid for **every** convex $ABCD$. In particular all
four imbalances vanish simultaneously, and they do so iff $\delta=0$.

(Equivalently $CT-CX=-\delta/2$; the sign convention $CX-CT$ above is the one that
makes the orientation bookkeeping in §1.3 uniform.)

#### 1.2 The base-angle deviation of each line (Lemma L2)

Fix a vertex, say $A$. Put $A$ at the origin with ray $AB$ along the positive
$x$-axis, so ray $AD$ makes interior angle $\alpha:=\angle A\in(0,\pi)$ with it.
Then $S=(AS,0)$ and $Y=(AY\cos\alpha,\ AY\sin\alpha)$, and the line $L_A=SY$ has
direction vector
$$\vec{SY}=(AY\cos\alpha-AS,\ AY\sin\alpha).$$
Let $\theta_A$ be the direction of $L_A$ (an angle mod $\pi$). The internal
bisector of $\angle A$ has direction $\alpha/2$; the line through $A$ perpendicular
to that bisector has direction $\tfrac{\pi}{2}+\tfrac{\alpha}{2}$. Define the
**deviation**
$$g_A:=\theta_A-\Bigl(\tfrac{\pi}{2}+\tfrac{\alpha}{2}\Bigr)\pmod\pi.$$
Rotating $\vec{SY}$ by $-\bigl(\tfrac{\pi}{2}+\tfrac{\alpha}{2}\bigr)$ and taking the
ratio of the new $y$- and $x$-components gives, after simplification,
$$\tan g_A=\frac{AS-AY}{(AS+AY)\,\tan(\alpha/2)}.\tag{1}$$
(Derivation: with $c=\cos(\tfrac{\pi}{2}+\tfrac\alpha2)=-\sin\tfrac\alpha2$,
$d=\sin(\tfrac{\pi}{2}+\tfrac\alpha2)=\cos\tfrac\alpha2$, the rotated components are
$x'=c\,(AY\cos\alpha-AS)+d\,(AY\sin\alpha)$ and
$y'=-d\,(AY\cos\alpha-AS)+c\,(AY\sin\alpha)$. Using
$\cos\alpha=1-2\sin^2\tfrac\alpha2$, $\sin\alpha=2\sin\tfrac\alpha2\cos\tfrac\alpha2$,
one gets $x'=(AS+AY)\sin\tfrac\alpha2\cos\tfrac\alpha2\cdot$ (positive multiple) and
$y'=(AS-AY)\sin^2\tfrac\alpha2$, whence $y'/x'=\dfrac{(AS-AY)\sin\tfrac\alpha2}{(AS+AY)\cos\tfrac\alpha2}$,
which is (1). This computation was also confirmed symbolically.)

Because $AS,AY>0$ and $\alpha\in(0,\pi)$ we have $(AS+AY)\tan(\alpha/2)>0$, so $g_A$
is the principal arctangent
$$g_A=\arctan\!\frac{AS-AY}{(AS+AY)\tan(\angle A/2)}\in\Bigl(-\tfrac\pi2,\tfrac\pi2\Bigr),
\qquad \operatorname{sign}(g_A)=\operatorname{sign}(AS-AY).\tag{L2}$$

The identical computation at the other three vertices yields the deviation $g_X$ of
line $L_X$ from its perpendicular-to-bisector baseline at vertex $X$, namely
$$g_B=\arctan\!\frac{BU-BW}{(BU+BW)\tan(\angle B/2)},\quad
  g_C=\arctan\!\frac{CX-CT}{(CX+CT)\tan(\angle C/2)},\quad
  g_D=\arctan\!\frac{DZ-DV}{(DZ+DV)\tan(\angle D/2)}.\tag{2}$$
Here, at each vertex, the numerator is (first leg) − (second leg) where the legs
are read in the order in which formula (1) was derived: at $A$ the order is
$(AS,AY)$; at $B$ it is $(BU,BW)$ (so $U$ on $BC$ first, $W$ on $BA$ second); at $C$
it is $(CX,CT)$ (so $X$ on $CD$ first, $T$ on $CB$ second); at $D$ it is $(DZ,DV)$
(so $Z$ on $DA$ first, $V$ on $DC$ second). Each denominator is again strictly
positive, so each $g_X$ is a principal arctangent in $(-\tfrac\pi2,\tfrac\pi2)$ with
$\operatorname{sign}(g_X)=\operatorname{sign}(\text{numerator})$. These three
formulas, and the sign of each $g_X$, were verified to reproduce the true line
directions of $L_B,L_C,L_D$ to machine precision on random convex quadrilaterals.

**Per-term bound.** The bound follows in one line directly from the deviation
formula (1)–(2), with no appeal to any "base angle of the cut-off triangle." Write
the two legs at vertex $X$ as $\mathrm{leg}_1,\mathrm{leg}_2>0$ (e.g. at $A$ these
are $AS,AY$). Since both legs are strictly positive,
$$\frac{|\mathrm{leg}_1-\mathrm{leg}_2|}{\mathrm{leg}_1+\mathrm{leg}_2}<1,$$
because $|\mathrm{leg}_1-\mathrm{leg}_2|<\mathrm{leg}_1+\mathrm{leg}_2$ exactly when
$\min(\mathrm{leg}_1,\mathrm{leg}_2)>0$. Taking absolute values in (1) (equivalently
(2)) and using $\tan(\angle X/2)>0$,
$$\tan|g_X|=\frac{|\mathrm{leg}_1-\mathrm{leg}_2|}{(\mathrm{leg}_1+\mathrm{leg}_2)\,\tan(\angle X/2)}
<\frac{1}{\tan(\angle X/2)}=\cot\frac{\angle X}{2}=\tan\!\Bigl(\frac{\pi-\angle X}{2}\Bigr),$$
the last equality being the cofunction identity
$\cot\theta=\tan(\tfrac\pi2-\theta)$ with $\theta=\angle X/2$. Now both arguments
lie in the interval $(0,\tfrac\pi2)$ on which $\tan$ is strictly increasing and
takes nonnegative values: indeed $|g_X|\in[0,\tfrac\pi2)$ since $g_X$ is the
principal arctangent of (1)–(2) (so $g_X\in(-\tfrac\pi2,\tfrac\pi2)$), and
$\tfrac{\pi-\angle X}{2}\in(0,\tfrac\pi2)$ since $\angle X\in(0,\pi)$. As
$\tan|g_X|<\tan\bigl(\tfrac{\pi-\angle X}{2}\bigr)$ and $\tan$ is strictly
increasing there, we conclude
$$\bigl|g_X\bigr|<\frac{\pi-\angle X}{2}\qquad(X\in\{A,B,C,D\}),\tag{3}$$
with strict inequality (equality would require a leg to vanish, which is excluded on
the open convex domain).

#### 1.3 The cyclic criterion as the single scalar Φ (Lemma L3, directed angles)

The four bounding lines $L_A,L_B,L_C,L_D$ have directions
$\theta_A,\theta_B,\theta_C,\theta_D$ (mod $\pi$). For any quadrilateral whose
sides, in cyclic order, lie on lines with directions $\theta_1,\theta_2,\theta_3,
\theta_4$, the **directed-angle inscribed-quadrilateral criterion** states:
the four corners are concyclic iff
$$\theta_1-\theta_2+\theta_3-\theta_4\equiv 0\pmod\pi.$$
(This is the standard directed-angle form of "opposite angles supplementary": the
interior angle at a corner is the directed angle between the two incident side-lines,
and the alternating sum of the four corner directed angles vanishes mod $\pi$ exactly
when the four points lie on a circle. It is a `knowledge_base.md` "Synthetic
toolkit" angle-chase fact; we verified it on an explicit cyclic and an explicit
non-cyclic quadrilateral.) Applied to our corner order this reads
$$\text{concyclic}\iff\sigma:=\theta_A-\theta_B+\theta_C-\theta_D\equiv 0\pmod\pi.\tag{4}$$

Now write $\theta_X=\bigl(\tfrac\pi2+\beta_X\bigr)+g_X$, where $\beta_X$ is the
direction of the internal bisector at vertex $X$ and $g_X$ is the deviation of
§1.2. Then
$$\sigma=\Bigl[\beta_A-\beta_B+\beta_C-\beta_D\Bigr]+\bigl(g_A-g_B+g_C-g_D\bigr)\pmod\pi,$$
the four $\tfrac\pi2$'s cancelling in the alternating sum. The bracketed
bisector-direction alternating sum is **identically $\equiv 0\pmod\pi$**, by the
following exact computation. Let $u_1,u_2,u_3,u_4$ be the azimuths (ray directions)
of the sides $AB,BC,CD,DA$ traversed in order. The internal bisector at a vertex
bisects the two rays emanating from it, so as a line (mod $\pi$),
$$\beta_A=\tfrac{u_1+(u_4+\pi)}{2},\quad
  \beta_B=\tfrac{(u_1+\pi)+u_2}{2},\quad
  \beta_C=\tfrac{(u_2+\pi)+u_3}{2},\quad
  \beta_D=\tfrac{(u_3+\pi)+u_4}{2}\pmod\pi,$$
(at $A$ the rays are $AB$ at $u_1$ and $AD$ at $u_4+\pi$, etc.). Hence
$$\beta_A-\beta_B+\beta_C-\beta_D
=\tfrac12\bigl[(u_1+u_4)-(u_1+u_2)+(u_2+u_3)-(u_3+u_4)\bigr]
+\tfrac12(\pi-\pi+\pi-\pi)=0\pmod\pi,$$
all of $u_1,u_2,u_3,u_4$ cancelling. Hence, modulo $\pi$,
$$\sigma\equiv\Phi:=g_A-g_B+g_C-g_D\pmod\pi.\tag{5}$$
We verified (5) directly: $\sigma$ computed from the actual line directions and
$\Phi$ computed from (1)–(2) agree mod $\pi$ on every convex sample tested, to
machine precision.

#### 1.4 Φ has the exact sign of δ, and |Φ|<π (Lemma L4 — the converse)

Substitute the imbalance identities (L1) into (1)–(2). The numerators of the four
$g_X$ in (1)–(2) are, by (L1),
$$AS-AY=\tfrac\delta2,\qquad BU-BW=-\tfrac\delta2,\qquad CX-CT=\tfrac\delta2,\qquad
  DZ-DV=-\tfrac\delta2,$$
(the second and fourth are $-\delta/2$ because $BW-BU=DV-DZ=+\delta/2$). Hence,
using that arctangent is odd,
$$g_A=\arctan\!\frac{\delta/2}{D_A},\quad g_B=-\arctan\!\frac{\delta/2}{D_B},\quad
  g_C=\arctan\!\frac{\delta/2}{D_C},\quad g_D=-\arctan\!\frac{\delta/2}{D_D},$$
where the four denominators are
$$D_A=(AS+AY)\tan\tfrac{\angle A}{2},\quad D_B=(BU+BW)\tan\tfrac{\angle B}{2},\quad
  D_C=(CX+CT)\tan\tfrac{\angle C}{2},\quad D_D=(DZ+DV)\tan\tfrac{\angle D}{2}.$$
Therefore the two interior minus signs in $\Phi=g_A-g_B+g_C-g_D$ are absorbed, and
$$\Phi
=g_A-g_B+g_C-g_D
=\arctan\!\frac{\delta/2}{D_A}+\arctan\!\frac{\delta/2}{D_B}
+\arctan\!\frac{\delta/2}{D_C}+\arctan\!\frac{\delta/2}{D_D}.\tag{6}$$
(That the cyclic scalar equals exactly this $\Phi=g_A-g_B+g_C-g_D$ — i.e. with the
alternating signs $+,-,+,-$ in this order — was verified vertex-by-vertex against
the true line directions to machine precision.)

**On the open convex domain every denominator is strictly positive:** each of the
eight tangent lengths is $>0$ (§0), so each sum of two legs is $>0$; and each
$\angle X\in(0,\pi)\Rightarrow\tan\tfrac{\angle X}{2}>0$. Therefore each of the four
arctangents in (6) has the **exact sign of $\delta$**, and is $0$ iff $\delta=0$.
Consequently
$$\operatorname{sign}(\Phi)=\operatorname{sign}(\delta),\qquad
  \Phi=0\iff\delta=0.\tag{7}$$
This is the consistent-sign mechanism required by the review: each contribution is
single-signed (sign of $\delta$) on the entire open connected convex interior; we
do **not** use any lower bound on a "factor," only that the four positive
denominators are positive there. No denominator needs to be bounded away from $0$.

**Bounding |Φ| below π.** By the per-term bound (3),
$$|\Phi|\le|g_A|+|g_B|+|g_C|+|g_D|
<\frac{\pi-\angle A}{2}+\frac{\pi-\angle B}{2}+\frac{\pi-\angle C}{2}+\frac{\pi-\angle D}{2}
=\frac{4\pi-(\angle A+\angle B+\angle C+\angle D)}{2}
=\frac{4\pi-2\pi}{2}=\pi.$$
Hence
$$|\Phi|<\pi\quad\text{strictly, on the open convex domain.}\tag{8}$$

#### 1.5 Conclusion of Part 1

Assume the corners $P_{AB},P_{BC},P_{CD},P_{DA}$ exist and are concyclic. The very
hypothesis "the quadrilateral formed by the lines is cyclic" presupposes that the
four consecutive intersection points $P_{AB},P_{BC},P_{CD},P_{DA}$ are well-defined
distinct points lying on a common circle; in particular each consecutive pair of
lines ($L_A\&L_B$, $L_B\&L_C$, $L_C\&L_D$, $L_D\&L_A$) is non-parallel, so the
directed angles $\theta_A,\theta_B,\theta_C,\theta_D$ are well-defined and the
criterion (4) applies. (Each touch point $S,T,U,V,W,X,Y,Z$ is moreover strictly
interior to its side, since every tangent length is strictly positive and strictly
less than the side it lies on, by the strict triangle inequalities and convexity;
so each $L_X$ is a genuine chord through vertex $X$. We work on the open convex
domain; the degenerate boundary — a touch point at a vertex, or two consecutive
lines parallel — is excluded by strict convexity, and is exactly the sliver regime
where $|\Phi|\to\pi$.)

By the directed-angle criterion (4) and the identity (5),
$$\sigma\equiv\Phi\equiv0\pmod\pi.$$
But by (8) we have $\Phi\in(-\pi,\pi)$, and the only multiple of $\pi$ in this open
interval is $0$. Therefore $\Phi=0$. By (7) this forces $\delta=0$, i.e.
$$AB+CD=BC+DA\qquad(\text{Pitot condition}).$$
This proves Part 1. $\;\square$

---

### Part 2: Pitot ⟹ E,F,G,H concyclic

Assume now $AB+CD=BC+DA$, i.e. $\delta=p-q+r-s=0$, equivalently
$$p-q=s-r.\tag{9}$$
By **Pitot's theorem** ($knowledge_base.md$), $ABCD$ has an inscribed circle; let
$I$ be its incenter and $\rho$ its inradius. $I$ lies on all four internal
bisectors of $ABCD$. Let
$$t_A=\rho\cot\tfrac{\angle A}{2},\qquad t_C=\rho\cot\tfrac{\angle C}{2}$$
be the tangent lengths from $A$ and $C$ to the incircle; then
$$IA=\frac{\rho}{\sin(\angle A/2)},\qquad IA\cos\tfrac{\angle A}{2}=t_A,\qquad
  IA^2=\rho^2+t_A^2,\tag{10}$$
and likewise $IC^2=\rho^2+t_C^2$, $IC\cos\tfrac{\angle C}{2}=t_C$.

**The excircle touch lengths.** The $A$-excircle of triangle $DAB$ has center on
the internal bisector of $\angle DAB$ (i.e. on the same ray $AI$) and touches lines
$DA$ and $AB$. Its tangent length from $A$ equals the semiperimeter of triangle
$DAB$:
$$AE=AF=s_4:=\tfrac{s+p+f}{2},$$
with $E$ on ray $AD$ beyond $D$ and $F$ on ray $AB$ beyond $B$. Likewise the
$C$-excircle of triangle $BCD$ has center on ray $CI$ and
$$CG=CH=s_2:=\tfrac{q+r+f}{2},$$
with $G$ on ray $CB$ beyond $B$ and $H$ on ray $CD$ beyond $D$. (Both excircle
centers lie on the corresponding internal bisector through $I$, so the directions
$IA$, $AE$ make angle $\angle A/2$, and $IC$, $CG$ make angle $\angle C/2$.)

**Step 1: $IE=IF$.** Since $E$ lies on line $DA$ and $F$ on line $AB$, and the
internal bisector $AI$ makes angle $\angle A/2$ with each of the lines $AD,AB$, the
angle $\angle IAE=\angle IAF=\angle A/2$. By the **law of cosines**
($knowledge_base.md$, "Trig identities") in triangle $IAE$, using (10),
$$IE^2=IA^2+AE^2-2\,IA\cdot AE\cos\tfrac{\angle A}{2}
=(\rho^2+t_A^2)+s_4^2-2t_A s_4=\rho^2+(t_A-s_4)^2.$$
The same computation in triangle $IAF$ (with $AF=AE=s_4$ and $\angle IAF=\angle A/2$)
gives $IF^2=\rho^2+(t_A-s_4)^2$. Hence
$$IE=IF=\sqrt{\rho^2+(t_A-s_4)^2}.\tag{11}$$

**Step 2: $IG=IH$.** Identically, in triangles $ICG$ and $ICH$
($CG=CH=s_2$, $\angle ICG=\angle ICH=\angle C/2$),
$$IG^2=IH^2=\rho^2+(t_C-s_2)^2,\qquad IG=IH=\sqrt{\rho^2+(t_C-s_2)^2}.\tag{12}$$

**Step 3: $t_A-s_4=t_C-s_2$.** First,
$$t_A-s_4=(t_A-t_C)-(s_4-s_2).$$
For the incircle of $ABCD$ the tangent lengths from the four vertices satisfy
$t_A+t_B=p$ (the tangent points on side $AB$) and $t_B+t_C=q$ (on side $BC$);
subtracting,
$$t_A-t_C=p-q.$$
Next,
$$s_4-s_2=\tfrac{(s+p+f)-(q+r+f)}{2}=\tfrac{p+s-q-r}{2}.$$
Using the Pitot relation (9), $p-q=s-r$, so $p+s-q-r=(p-q)+(s-r)=2(p-q)$, hence
$$s_4-s_2=p-q.$$
Therefore
$$(t_A-s_4)-(t_C-s_2)=(t_A-t_C)-(s_4-s_2)=(p-q)-(p-q)=0,$$
i.e.
$$t_A-s_4=t_C-s_2.\tag{13}$$

**Conclusion.** Combining (11), (12), (13),
$$IE=IF=\sqrt{\rho^2+(t_A-s_4)^2}=\sqrt{\rho^2+(t_C-s_2)^2}=IG=IH.$$
Thus $E,F,G,H$ are equidistant from $I$, so they lie on one circle centered at the
incenter $I$ of $ABCD$. Hence $E,F,G,H$ are concyclic.

(Verification: for an explicit tangential convex quadrilateral built from four
tangent lines to a unit circle, the four distances $IE,IF,IG,IH$ were computed to
be equal and the concyclic determinant of $E,F,G,H$ vanished, confirming the
identity.) $\;\square$

---

### Putting the two parts together

If the quadrilateral formed by the lines $SY,TX,UW,VZ$ is cyclic, then by **Part 1**
the Pitot condition $AB+CD=BC+DA$ holds; and then by **Part 2** the points $E,F,G,H$
are concyclic (indeed on a circle centered at the incenter of $ABCD$). This is
exactly the required implication. $\blacksquare$
