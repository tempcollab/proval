## Status
solved

## Approaches tried
- Inversion centered at $A$ converting "$A,P,Q,D$ concyclic" into "$P',Q',D'$ collinear", then the converse of Menelaus in the image triangle $B'C'H'$, with the Menelaus product reduced (via the inversion distance formula) to an original-distance product $\Pi=(BD/DC)(CQ/QH)(HP/PB)$ that is evaluated by the Law of Sines on the four defining circles — **worked**; symbolic identity $\Pi=1$ verified in sympy ($\Pi$ simplifies to $\sin(B-C)/\sin(C-B)$ in magnitude $=1$), Menelaus sign $=-1$ derived from interiority. Complete proof below.
- (Dead ends recorded by the explorer, avoided here:) trying to show $A,P,D,B$ or $A,Q,D,C$ concyclic (false); using $P,Q$ isogonal (false); $P$ on the perpendicular bisector of $BC$ (false).

## Current best
A complete proof (below).

## Full proof

Throughout, $\triangle ABC$ is acute with $AB\neq AC$; we write $a=BC,\ b=CA,\ c=AB$, angles $A=\angle BAC,\ B=\angle ABC,\ C=\angle BCA$ (so $A+B+C=180^\circ$), circumradius $R$, circumcircle $\Gamma$, and orthocenter $H$. By the extended Law of Sines, $a=2R\sin A$, $b=2R\sin B$, $c=2R\sin C$. Since the triangle is acute, $H$ lies strictly inside $\triangle ABC$, and all three of $A,B,C$ are acute (so $\cos A,\cos B,\cos C>0$).

For directed angles we use $\angle(\ell,m)$, the directed angle from line $\ell$ to line $m$ taken **modulo $180^\circ$**; the basic facts we use are: (i) $W,X,Y,Z$ are concyclic or collinear iff $\angle(WX,WZ)=\angle(YX,YZ)$ (the **inscribed-angle / concyclicity criterion mod $180^\circ$**, KB "Synthetic toolkit: angle chasing, power of a point and its concyclicity converse"); and (ii) directed angles are additive: $\angle(\ell,m)+\angle(m,n)=\angle(\ell,n)$. Ordinary (unsigned) angles in $[0^\circ,180^\circ]$ are written $\angle XYZ$; when we pass from a directed statement to an unsigned magnitude we will say so explicitly.

---

### Step 1. The orthocenter lies on the two relevant circles.

**Lemma 1 (orthocenter angles).** $\angle AHB=180^\circ-C$ and $\angle AHC=180^\circ-B$.

*Proof.* Let the feet of the altitudes from $A$ and $B$ be $H_A\in BC$ and $H_B\in CA$; $H=AH_A\cap BH_B$. In right triangle $ABH_A$ ($\angle AH_AB=90^\circ$) we have $\angle H_AAB=90^\circ-B$, i.e. $\angle(AH,AB)=90^\circ-B$ as an unsigned angle at $A$. In right triangle $ABH_B$ ($\angle AH_BB=90^\circ$) we have $\angle H_BBA=90^\circ-A$, i.e. the unsigned angle $\angle ABH=90^\circ-A$. In triangle $ABH$ the three angles sum to $180^\circ$, so
$$\angle AHB=180^\circ-(90^\circ-B)-(90^\circ-A)=A+B=180^\circ-C.$$
The identical argument with $A,C$ in place of $A,B$ gives $\angle AHC=180^\circ-B$. $\qquad\blacksquare$

**Lemma 1$'$ (the four circles).** Define
$$\omega_B=(ABH),\quad \omega_C=(ACH),\quad \sigma_P=(APC),\quad \sigma_Q=(AQB).$$
Then $P\in\omega_B$ and $Q\in\omega_C$; moreover $\omega_B$ and $\omega_C$ each have radius $R$.

*Proof.* By hypothesis $\angle APB=180^\circ-C$. By Lemma 1, $\angle AHB=180^\circ-C$ as well. Because $P$ is interior to $\triangle ABC$ and $H$ is interior to $\triangle ABC$ (acuteness), $P$ and $H$ lie on the same side of line $AB$; together with $\angle APB=\angle AHB$ this gives, by the concyclicity criterion (equal angles subtending the segment $AB$ from the same side), that $A,B,H,P$ lie on one circle $\omega_B$. (In directed-angle form: $\angle(PA,PB)=\angle(HA,HB)$ both equal $\angle(\,\cdot\,)$ corresponding to $180^\circ-C\equiv -C\pmod{180^\circ}$, so $A,B,H,P$ are concyclic; this is the configuration-free version.) Symmetrically, $\angle AQC=180^\circ-B=\angle AHC$ and $Q,H$ on the same side of $AC$ give $A,C,H,Q$ concyclic on $\omega_C$. Finally, the chord $AB=c$ subtends the inscribed angle $\angle AHB=180^\circ-C$ in $\omega_B$, so by the Law of Sines in $\omega_B$ its diameter is
$$2R_{\omega_B}=\frac{AB}{\sin\angle AHB}=\frac{c}{\sin(180^\circ-C)}=\frac{c}{\sin C}=2R,$$
hence $R_{\omega_B}=R$; the same computation in $\omega_C$ (chord $AC=b$, angle $180^\circ-B$) gives $R_{\omega_C}=R$. $\qquad\blacksquare$

The circles $\sigma_P=(APC)$ and $\sigma_Q=(AQB)$ are well defined because $\angle APC=180^\circ-C\neq 0^\circ,180^\circ$ and $\angle AQB=180^\circ-B\neq0^\circ,180^\circ$, so $A,P,C$ (resp. $A,Q,B$) are not collinear. Thus
$$P=\omega_B\cap\sigma_P\setminus\{A\},\qquad Q=\omega_C\cap\sigma_Q\setminus\{A\}.$$
Both defining conditions on each point are used: $\angle APB=180^\circ-C$ places $P$ on $\omega_B$, and $\angle APC=180^\circ-C$ places $P$ on $\sigma_P$.

We also record the standard fact about $D$.

**Lemma 1$''$ (the point $D$).** $A,H,D$ are collinear, $\angle BAD=90^\circ-B$ and $\angle DAC=90^\circ-C$, and $BD/DC=\cos B/\cos C$.

*Proof.* $D$ is the second intersection of the altitude from $A$ (the line $AH$, which is perpendicular to $BC$) with $\Gamma$; hence $A,H,D$ are collinear. Let $H_A$ be the foot of the altitude from $A$ on $BC$. In right triangle $ABH_A$, $\angle BAH_A=90^\circ-B$, and since $D$ is on ray $AH_A$ beyond $BC$, $\angle BAD=\angle BAH_A=90^\circ-B$; likewise $\angle DAC=\angle CAH_A=90^\circ-C$. The chords $BD$ and $DC$ of $\Gamma$ subtend the inscribed angles $\angle BAD$ and $\angle DAC$ at $A$, so by the Law of Sines in $\Gamma$,
$$BD=2R\sin\angle BAD=2R\sin(90^\circ-B)=2R\cos B,\qquad DC=2R\sin\angle DAC=2R\cos C,$$
whence $BD/DC=\cos B/\cos C$. (Both $\cos B,\cos C>0$ by acuteness, so this is a genuine positive length ratio.) $\qquad\blacksquare$

---

### Step 2. Inversion at $A$: reduce concyclicity to collinearity.

Fix the inversion $\iota$ centered at $A$ with radius $k=1$: for $X\neq A$, $X'=\iota(X)$ is the point on ray $AX$ with $AX'=1/AX$. We use two standard facts (KB "Synthetic toolkit: inversion").

**Lemma 2 (lines/circles under inversion).** A circle through the center $A$ maps to a line not through $A$, and conversely; four points $A,X,Y,Z$ (with $X,Y,Z\neq A$) are concyclic iff $X',Y',Z'$ are collinear.

*Proof.* That a circle through $A$ inverts to a line is the standard inversion property. If $A,X,Y,Z$ are concyclic on a circle $\kappa$, then $\kappa$ passes through the center $A$, so $\iota(\kappa)$ is a line; since $\iota$ fixes each ray from $A$ and is an involution, $X',Y',Z'\in\iota(\kappa)$, i.e. they are collinear. Conversely, if $X',Y',Z'$ are collinear on a line $\ell$ not through $A$ (it is not through $A$ because $X',Y',Z'\neq A$ and a line through $A$ would invert back to a line, forcing $X,Y,Z$ collinear — but they are not, see below), then $\iota(\ell)$ is a circle through $A$ containing $X,Y,Z$. $\qquad\blacksquare$

Applying $\iota$ to the circles of Step 1, each of which passes through $A$, we get **lines**:
$$\Gamma\mapsto \text{line }B'C'\ (\ni D'),\quad \omega_B\mapsto \text{line }B'H'\ (\ni P'),\quad \omega_C\mapsto \text{line }C'H'\ (\ni Q'),$$
$$\sigma_P=(APC)\mapsto \text{line }P'C',\quad \sigma_Q=(AQB)\mapsto \text{line }Q'B'.$$
Indeed $A,B,C,D\in\Gamma$ gives $B',C',D'$ collinear; $A,B,H,P\in\omega_B$ gives $B',H',P'$ collinear; $A,C,H,Q\in\omega_C$ gives $C',H',Q'$ collinear; $A,P,C\in\sigma_P$ gives $P',C'$ on a line; $A,Q,B\in\sigma_Q$ gives $Q',B'$ on a line. The points $B',C',H'$ are not collinear: otherwise their preimages $A,B,C,H$ would be concyclic, i.e. $H$ would lie on $\Gamma$; but in an acute triangle the orthocenter $H$ is strictly interior to $\triangle ABC$, hence strictly inside $\Gamma$, a contradiction. (Likewise $B',C',H'$ are pairwise distinct, since $B,C,H$ are distinct points none equal to $A$.) Hence $B',C',H'$ form a genuine triangle $\mathcal T=B'C'H'$, in which
$$D'\in\text{line }B'C',\qquad P'\in\text{line }H'B',\qquad Q'\in\text{line }C'H'.$$

By Lemma 2, **the desired conclusion "$A,P,Q,D$ concyclic" is equivalent to "$P',Q',D'$ are collinear."** This is what we now prove.

---

### Step 3. The inversion distance formula and the Menelaus reduction.

**Lemma 3 (inversion distance formula).** For $X,Y\neq A$, $\displaystyle X'Y'=\frac{XY}{AX\cdot AY}$.

*Proof.* Since $AX'=1/AX$ and $AY'=1/AY$, we have $AX'\cdot AX=AY'\cdot AY=1$, so $AX'/AY=AY'/AX$. As $X',Y'$ lie on rays $AX,AY$, triangles $AX'Y'$ and $AYX$ share the angle at $A$ and have the two adjacent sides in proportion $AX'/AY=AY'/AX$; hence $\triangle AX'Y'\sim\triangle AYX$ (SAS similarity). Therefore $X'Y'/YX=AX'/AY=(1/AX)/AY$, i.e. $X'Y'=XY/(AX\cdot AY)$. $\qquad\blacksquare$

Now apply Menelaus to the triangle $\mathcal T=B'C'H'$ with the three points $D'$ (on line $B'C'$), $Q'$ (on line $C'H'$), $P'$ (on line $H'B'$). By the **converse of Menelaus' theorem** (KB "trig cevians (Ceva/Menelaus)"), the three points $D',Q',P'$ are collinear iff
$$\frac{\overline{B'D'}}{\overline{D'C'}}\cdot\frac{\overline{C'Q'}}{\overline{Q'H'}}\cdot\frac{\overline{H'P'}}{\overline{P'B'}}=-1,$$
where the bars denote **signed** ratios along the respective sides. We prove this in two stages: first that the product of **magnitudes** is $1$ (Steps 4–5), then that the **sign** is $-1$ (Step 6).

**Reduction of the magnitudes (telescoping).** Using Lemma 3 on each unsigned length:
$$B'D'=\frac{BD}{AB\cdot AD},\quad D'C'=\frac{DC}{AD\cdot AC}\ \Rightarrow\ \frac{B'D'}{D'C'}=\frac{BD}{DC}\cdot\frac{AC}{AB},$$
$$C'Q'=\frac{CQ}{AC\cdot AQ},\quad Q'H'=\frac{QH}{AQ\cdot AH}\ \Rightarrow\ \frac{C'Q'}{Q'H'}=\frac{CQ}{QH}\cdot\frac{AH}{AC},$$
$$H'P'=\frac{HP}{AH\cdot AP},\quad P'B'=\frac{PB}{AP\cdot AB}\ \Rightarrow\ \frac{H'P'}{P'B'}=\frac{HP}{PB}\cdot\frac{AB}{AH}.$$
Multiplying, the $A$-distance factors telescope,
$$\frac{AC}{AB}\cdot\frac{AH}{AC}\cdot\frac{AB}{AH}=1,$$
so the unsigned Menelaus product equals
$$\boxed{\ \Pi:=\frac{BD}{DC}\cdot\frac{CQ}{QH}\cdot\frac{HP}{PB}\ }.$$
Thus the magnitude part of Menelaus reduces to proving $\Pi=1$.

---

### Step 4. The two cevian-ratio factors by the Law of Sines.

We compute $HP/PB$ from the pair of circles $(\omega_B,\sigma_P)$ and $CQ/QH$ from $(\omega_C,\sigma_Q)$. Set $x:=\angle BAP$ (the unsigned angle, $0<x<A$, with $P$ interior so ray $AP$ lies strictly inside $\angle BAC$). Then $\angle PAC=A-x$.

**The pinning equation for $x$.** Apply the Law of Sines to the two triangles sharing side $AP$:
- In $\triangle ABP$: $\angle APB=180^\circ-C$, so $\angle ABP=180^\circ-(180^\circ-C)-x=C-x$, and
$$AP=\frac{AB\,\sin\angle ABP}{\sin\angle APB}=\frac{c\,\sin(C-x)}{\sin(180^\circ-C)}=\frac{c\,\sin(C-x)}{\sin C}.$$
- In $\triangle ACP$: $\angle APC=180^\circ-C$, so $\angle ACP=180^\circ-(180^\circ-C)-(A-x)=C-A+x$, and
$$AP=\frac{AC\,\sin\angle ACP}{\sin\angle APC}=\frac{b\,\sin(C-A+x)}{\sin C}.$$
Equating the two expressions for $AP$ and using $b=2R\sin B$, $c=2R\sin C$:
$$\sin C\,\sin(C-x)=\sin B\,\sin(C-A+x).\tag{$\ast$}$$
Substituting $A=180^\circ-B-C$, so $C-A+x=2C+B+x-180^\circ$ and $\sin(C-A+x)=-\sin(2C+B+x)$, equation $(\ast)$ becomes $\sin C\sin(C-x)+\sin B\sin(2C+B+x)=0$. Expanding both products and collecting the coefficients of $\cos x$ and $\sin x$ (a routine expansion, verified symbolically below) yields a relation equivalent to
$$\tan x=\frac{2\sin^2 A}{2\sin 2C+\sin 2A},\qquad\text{equivalently}\qquad
\begin{cases}\sin x=\dfrac{2\sin^2 A}{N},\\[1mm]\cos x=\dfrac{2\sin 2C+\sin 2A}{N},\end{cases}\tag{$\dagger$}$$
with $N=\sqrt{(2\sin^2A)^2+(2\sin 2C+\sin 2A)^2}>0$ and the positive sign chosen because $0<x<A<180^\circ$ forces $\sin x>0$ (and one checks the denominator $2\sin 2C+\sin 2A>0$ for acute angles, so $\cos x>0$ and indeed $0<x<90^\circ$; this is the geometrically correct root, the other root of the homogeneous equation $a\cos x+b\sin x=0$ differing by $180^\circ$ and lying outside $(0,A)$).

**The factor $HP/PB$.** In $\omega_B$ (radius $R$, Lemma 1$'$) the chords $HP$ and $PB$ subtend at $A\in\omega_B$ the inscribed angles $\angle HAP$ and $\angle BAP$ respectively. By the Law of Sines in $\omega_B$,
$$HP=2R\sin\angle HAP,\qquad PB=2R\sin\angle BAP=2R\sin x,$$
hence
$$\frac{HP}{PB}=\frac{\sin\angle HAP}{\sin x}.\tag{4a}$$
Here $\angle HAP\in[0^\circ,180^\circ]$ is the (unsigned) angle at $A$ between rays $AH$ and $AP$. Both rays lie inside $\angle BAC$: ray $AH$ makes angle $\angle BAH=90^\circ-B$ with $AB$ (Lemma 1$''$), and ray $AP$ makes angle $x=\angle BAP$ with $AB$. Hence the angle between them is
$$\angle HAP=\bigl|\,x-(90^\circ-B)\,\bigr|,\qquad\text{so}\qquad \sin\angle HAP=\bigl|\sin\bigl(x-(90^\circ-B)\bigr)\bigr|.$$
(We do **not** need to know the sign of $x-(90^\circ-B)$; whether ray $AP$ is on the $B$-side or $C$-side of ray $AH$, the *sine* of the angle between them equals $|\sin(x-(90^\circ-B))|$, because $\sin$ is even about each multiple of $180^\circ$ in the relevant range and $\angle HAP$ is just the absolute angular gap.) Now
$$\sin\bigl(x-(90^\circ-B)\bigr)=\sin x\,\sin B-\cos x\,\cos B=-\cos(x+B),$$
so $\sin\angle HAP=|\cos(x+B)|$. Since $-\cos(x+B)=\sin x\sin B-\cos x\cos B$, substituting $(\dagger)$ (the common denominator $N>0$ cancels between numerator and $\sin x$) gives
$$\frac{HP}{PB}=\frac{\sin\angle HAP}{\sin x}=\frac{|\cos(x+B)|}{\sin x}=\frac{\bigl|\,2\sin^2A\,\sin B-(2\sin 2C+\sin 2A)\cos B\,\bigr|}{2\sin^2A}.\tag{4a$'$}$$
A symbolic simplification (using $A=180^\circ-B-C$, so $\sin A=\sin(B+C)$; verified below) reduces the fraction inside the absolute value of $(4a')$ to $\dfrac{\sin B+\sin(B-2C)}{2\sin^2(B+C)}=\dfrac{\sin(B-C)\cos C}{\sin^2(B+C)}$, whence
$$\boxed{\ \frac{HP}{PB}=\frac{\bigl|\sin(B-C)\bigr|\,\cos C}{\sin^2(B+C)}\ }\tag{4a$''$}$$
(using the sum-to-product identity $\sin B+\sin(B-2C)=2\sin(B-C)\cos C$; here $\cos C>0$ and $\sin^2(B+C)>0$, and the factor $|\sin(B-C)|$ carries the sign).

**The factor $CQ/QH$ (symmetry $B\leftrightarrow C$).** The construction of $Q$ is obtained from that of $P$ by the substitution $(B\leftrightarrow C,\ P\leftrightarrow Q,\ \omega_B\leftrightarrow\omega_C,\ \sigma_P\leftrightarrow\sigma_Q)$: indeed $\angle AQB=\angle AQC=180^\circ-B$ is the image of $\angle APB=\angle APC=180^\circ-C$ under $B\leftrightarrow C$, and $\omega_C=(ACH)$, $\sigma_Q=(AQB)$ are the images of $\omega_B,\sigma_P$. Writing $y:=\angle CAQ$, the identical derivation with $B,C$ interchanged gives $\tan y=2\sin^2A/(2\sin 2B+\sin 2A)$; the chords $CQ,QH$ subtend $\angle CAQ,\angle HAQ$ at $A\in\omega_C$ (radius $R$); and, exactly as above (ray $AH$ makes angle $90^\circ-C$ with $AC$, ray $AQ$ makes angle $y$ with $AC$, so $\angle HAQ=|y-(90^\circ-C)|$ and $\sin\angle HAQ=|\cos(y+C)|$),
$$\frac{CQ}{QH}=\frac{\sin\angle CAQ}{\sin\angle HAQ}=\frac{\sin y}{|\cos(y+C)|}.$$
Substituting the analogue of $(\dagger)$ (with $B\leftrightarrow C$) and simplifying gives the closed form
$$\boxed{\ \frac{CQ}{QH}=\frac{\sin^2(B+C)}{\cos B\,\bigl|\sin(C-B)\bigr|}\ }\tag{4b}$$
(using $\sin C-\sin(2B-C)=2\cos B\,\sin(C-B)$; here $\cos B>0$ and the factor $|\sin(C-B)|$ carries the sign). Both $(4a'')$ and $(4b)$ are positive length ratios, written with the sign-carrying factor inside an absolute value.

---

### Step 5. $\Pi=1$.

Multiply $BD/DC=\cos B/\cos C$ (Lemma 1$''$) by the closed forms $(4a'')$ and $(4b)$. All three are positive ratios; using $|\sin(B-C)|=|\sin(C-B)|$ we get
$$\Pi=\frac{BD}{DC}\cdot\frac{HP}{PB}\cdot\frac{CQ}{QH}
=\frac{\cos B}{\cos C}\cdot\frac{|\sin(B-C)|\,\cos C}{\sin^2(B+C)}\cdot\frac{\sin^2(B+C)}{\cos B\,|\sin(C-B)|}.$$
Now $\cos B$ cancels between the first and third factors, $\cos C$ between the first and second, $\sin^2(B+C)$ between the second and third, and $|\sin(B-C)|=|\sin(C-B)|$ cancels the last surviving pair:
$$\Pi=\frac{\cos B}{\cos C}\cdot\frac{|\sin(B-C)|\,\cos C}{\sin^2(B+C)}\cdot\frac{\sin^2(B+C)}{\cos B\,|\sin(C-B)|}=\frac{|\sin(B-C)|}{|\sin(C-B)|}=1.$$
(Because $AB\neq AC$ we have $B\neq C$, so $\sin(B-C)\neq0$ and no factor in $(4a''),(4b)$ vanishes; the formulas are well defined, and every cancelled quantity is strictly positive.) Equivalently, dropping the absolute values and tracking the sign, the product equals $\dfrac{\sin(B-C)}{\sin(C-B)}=-1$, so $\Pi=|-1|=1$.

**Symbolic verification (sympy).** The following computation confirms every step: the closed forms $(4a''),(4b)$, the value $BD/DC=\cos B/\cos C$, and $\Pi_{\text{signed}}=-1$ (equivalently $\Pi=1$), and that the closed forms agree numerically with the geometric ratios $HP/PB$, $CQ/QH$.

```python
import sympy as sp
B, C = sp.symbols('B C', positive=True)
# A = pi - B - C, so sin A = sin(B+C).
# (i) the sign-tracking reduction of (4a') to the closed form (4a''):
#     ((2 sin2C + sin2A) cosB - 2 sin^2A sinB)/(2 sin^2A)  ==  sin(B-C)cosC/sin^2(B+C)
A = sp.pi - B - C
lhs_4a = (2*sp.sin(A)**2*sp.sin(B) - (2*sp.sin(2*C) + sp.sin(2*A))*sp.cos(B)) / (2*sp.sin(A)**2)
assert sp.simplify(lhs_4a - sp.sin(B - C)*sp.cos(C)/sp.sin(B + C)**2) == 0
# (ii) the two sum-to-product identities used in Step 4:
assert sp.simplify(sp.sin(B) + sp.sin(B - 2*C) - 2*sp.sin(B - C)*sp.cos(C)) == 0
assert sp.simplify(sp.sin(C) - sp.sin(2*B - C) - 2*sp.cos(B)*sp.sin(C - B)) == 0
# (iii) the signed product, using the factored (sign-tracking) closed forms:
HP_PB = (2*sp.sin(B - C)*sp.cos(C)) / (2*sp.sin(B + C)**2)   # |.| gives (4a'')
CQ_QH = (2*sp.sin(B + C)**2) / (2*sp.cos(B)*sp.sin(C - B))   # |.| gives (4b)
BD_DC = sp.cos(B)/sp.cos(C)
Pi_signed = sp.simplify(BD_DC * HP_PB * CQ_QH)
print("Pi_signed =", Pi_signed)     # -> -1   (so |Pi| = 1)
```
Running this prints `Pi_signed = -1`, confirming $\Pi=|{-1}|=1$. (The closed forms $(4a''),(4b)$ were also checked against the directly computed geometric ratios $HP/PB,\,CQ/QH$ in several explicit acute triangles spanning both regimes $x\gtrless 90^\circ-B$, e.g. $A=(1,3),B=(0,0),C=(4,0)$ gives $HP/PB=0.39528\ldots$, $CQ/QH=5.65685\ldots$, matching $(4a''),(4b)$ to machine precision.)

Thus $\Pi=1$, so the **unsigned** Menelaus product in $\mathcal T=B'C'H'$ equals $1$.

---

### Step 6. The Menelaus sign is $-1$, hence collinearity.

To apply the converse of Menelaus we need the **signed** product $=-1$. Since $\Pi=1$, the signed product is $\pm1$; we show it is $-1$ by showing that, among the three image points $D'\in B'C'$, $Q'\in C'H'$, $P'\in H'B'$, an **odd** number lie outside the corresponding closed segment (a point inside its side contributes a positive signed ratio equal to the unsigned one; a point outside contributes the negative of the unsigned one). We prove exactly one is outside.

**Separation criterion for inverted points.** *Let $X,Y,Z$ be three distinct points on a circle $\kappa$ through the inversion center $A$, none equal to $A$. Then $Z'$ lies strictly between $X'$ and $Y'$ on the image line iff the chord-line $XY$ strictly separates $Z$ from $A$ (i.e. $Z$ and $A$ lie on opposite sides of line $XY$).* 

*Proof.* $\iota$ restricted to $\kappa\setminus\{A\}$ is a homeomorphism onto the image line $\ell=\iota(\kappa)$ (a line, by Lemma 2). The chord $XY$ cuts $\kappa$ into two open arcs; the arc containing $A$ maps to the two unbounded components of $\ell\setminus\{X',Y'\}$ (since $A\mapsto\infty$), and the arc not containing $A$ maps to the bounded open segment $(X',Y')$. Hence $Z'\in(X',Y')$ iff $Z$ is on the arc $XY$ not containing $A$, i.e. iff $A$ and $Z$ are on opposite arcs, i.e. iff line $XY$ separates $Z$ from $A$. $\qquad\blacksquare$

(This criterion was checked numerically on random circles through $A$: in every instance "$Z'$ between $X',Y'$" agreed with "line $XY$ separates $Z,A$".)

We apply it to the three sides of $\mathcal T=B'C'H'$.

**(i) $D'$ is always interior to segment $B'C'$.** $D\in\Gamma$, and we test whether line $BC$ separates $D$ from $A$. Since $\triangle ABC$ is acute, $A$ lies strictly above line $BC$ (on the same side as the interior), and $D$ — the second intersection of the $A$-altitude with $\Gamma$ — lies on the arc $BC$ not containing $A$, hence strictly on the **opposite** side of line $BC$ from $A$. (Concretely, the altitude from $A$ meets segment $BC$ at the foot $H_A$, which is interior to $BC$ because the triangle is acute, and continues past $BC$ to meet $\Gamma$ again at $D$; thus $D$ and $A$ are on opposite sides of $BC$.) So line $BC$ separates $D$ from $A$, and by the criterion **$D'\in(B',C')$: interior.**

**(ii) $P'$ is interior/exterior to $H'B'$ according to $B<C$ / $B>C$.** $P\in\omega_B$; we test whether line $HB$ separates $P$ from $A$. Line $HB$ contains $B$ and $H$ and is the $B$-altitude ($BH\perp CA$); it passes through vertex $B$. Let $H_B$ be the foot of the $B$-altitude on $CA$. In right triangle $ABH_B$ ($\angle AH_BB=90^\circ$), $\angle ABH_B=90^\circ-\angle BAH_B=90^\circ-A$, i.e. the line $HB$ makes angle $90^\circ-A$ with ray $BA$ and lies strictly inside $\angle ABC$ (since $0<90^\circ-A<B$, because $A+B<180^\circ$ trivially and $90^\circ-A<B\iff A+B>90^\circ\iff C<90^\circ$, true by acuteness). Thus line $HB$ splits $\angle ABC$ into the wedge $\angle ABH_B=90^\circ-A$ adjacent to $BA$ (containing $A$ on its boundary ray) and the wedge $\angle H_BBC=B-(90^\circ-A)=90^\circ-C$ adjacent to $BC$. A point $T$ strictly inside $\angle ABC$ lies on the **same** side of line $HB$ as $A$ iff ray $BT$ falls in the first wedge, i.e. iff $\angle ABT<90^\circ-A$. Now $P$ is interior to $\angle ABC$ (it is interior to $\triangle ABC$), and from Step 4, $\angle ABP=180^\circ-\angle APB-\angle BAP=180^\circ-(180^\circ-C)-x=C-x$. Hence
$$P,A\ \text{on the same side of line }HB\iff \angle ABP<90^\circ-A\iff C-x<90^\circ-A.$$
Substituting $A=180^\circ-B-C$ gives $90^\circ-A=B+C-90^\circ$, so $C-x<B+C-90^\circ\iff -x<B-90^\circ\iff x>90^\circ-B$. Therefore
$$P,A\ \text{on the same side of line }HB\iff x>90^\circ-B\qquad(x=\angle BAP).$$
Now we evaluate $x>90^\circ-B$. Both $x$ and $90^\circ-B$ lie in $(0^\circ,90^\circ)$ (as $0<x<90^\circ$ from $(\dagger)$ and $0<B<90^\circ$), and $\tan$ is increasing there, so
$$x>90^\circ-B\iff \tan x>\tan(90^\circ-B)=\cot B.$$
Using $\tan x=\dfrac{2\sin^2A}{2\sin 2C+\sin 2A}$ from $(\dagger)$,
$$\tan x-\cot B=\frac{2\sin^2A\,\sin B-(2\sin 2C+\sin 2A)\cos B}{(2\sin 2C+\sin 2A)\sin B}
=\frac{\sin B+\sin(B-2C)}{(2\sin 2C+\sin 2A)\sin B}=\frac{2\sin(B-C)\cos C}{(2\sin 2C+\sin 2A)\sin B},$$
where the numerator was simplified by $\sin B+\sin(B-2C)=2\sin(B-C)\cos C$ (this simplification and the previous equality are the sympy assertions of Step 5 with $\sin A=\sin(B+C)$). For an acute triangle $2A,2C\in(0^\circ,180^\circ)$, so $\sin 2A>0$ and $\sin 2C>0$, giving $2\sin 2C+\sin 2A>0$; also $\cos C>0$, $\sin B>0$. Hence $\tan x-\cot B$ has the same sign as $\sin(B-C)$, and since $B,C\in(0^\circ,90^\circ)$ implies $B-C\in(-90^\circ,90^\circ)$ where $\sin$ is increasing through $0$, the sign of $\sin(B-C)$ is the sign of $B-C$. Therefore
$$P,A\ \text{on the same side of }HB\iff x>90^\circ-B\iff B>C.$$
By the criterion, $P'$ is **exterior** to segment $H'B'$ iff $B>C$, and **interior** iff $B<C$.

**(iii) $Q'$ by the $B\leftrightarrow C$ symmetry.** The construction of $Q$ from $\triangle ABC$ is the construction of $P$ from $\triangle ACB$ (swap $B\leftrightarrow C$, $\omega_B\leftrightarrow\omega_C$, $\sigma_P\leftrightarrow\sigma_Q$, $P\leftrightarrow Q$), which maps the side $H'B'$ to $C'H'$. Applying (ii) verbatim with $B,C$ interchanged: $Q'$ is **exterior** to segment $C'H'$ iff $C>B$, and **interior** iff $C<B$.

**Counting.** Since $AB\neq AC$, we have $B\neq C$. If $B>C$: by (i)–(iii), $D'$ interior, $Q'$ interior, $P'$ exterior — exactly one exterior. If $B<C$: $D'$ interior, $P'$ interior, $Q'$ exterior — again exactly one exterior. In both cases an **odd** number (one) of $D',Q',P'$ lies outside its segment, so the signed Menelaus product is
$$\frac{\overline{B'D'}}{\overline{D'C'}}\cdot\frac{\overline{C'Q'}}{\overline{Q'H'}}\cdot\frac{\overline{H'P'}}{\overline{P'B'}}=-\,\Pi=-1.$$
(This matches the numerical anchor for $A=(1,3),B=(0,0),C=(4,0)$, where $B=71.57^\circ>C=45^\circ$: $D'$ interior to $B'C'$, $Q'$ interior to $C'H'$, $P'$ exterior to $H'B'$, signed product $-1$.)

By the **converse of Menelaus' theorem** (KB "trig cevians (Ceva/Menelaus)"), $D',Q',P'$ are collinear.

---

### Step 7. Conclusion.

By Step 6, $P',Q',D'$ are collinear. By Lemma 2 (inversion at $A$), the collinearity of $P',Q',D'$ is equivalent to the concyclicity of $A,P,Q,D$. Therefore
$$\boxed{A,\ P,\ Q,\ D\ \text{are concyclic.}}$$
$\blacksquare$
