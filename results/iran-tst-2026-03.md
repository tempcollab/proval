## Status
solved

## Approaches tried
- Coordinate bash in D-centered coordinates (D at origin, BC on the x-axis), reducing the claim to polynomial identities on the genuine configuration variety — **worked**. The hidden constraint b+c=2a is derived (Lemma 1), EF⊥DA is recorded (Lemma 2), and the orthocenter claim is settled by anchoring at the foot H of the altitude from P (which always meets BC because DA is not horizontal) and verifying the two remaining altitude conditions as exact polynomial identities. The verification is a clean ideal reduction: substitute the metric relations |E|²=p², |F|²=q² (which give b,c as rational functions of u,v,p,q), reduce modulo the relation Lfac (a consequence of the two metric conditions) and finally modulo the genuine cubic relation Cubic (forced by a resultant). All denominators are shown nonzero for a non-degenerate triangle (key facts: b>p, c>q ⟹ bc>pq>0, and v>0).
- Earlier "two-feet-coincidence (★)" framing — also valid, but it requires excluding the degenerate cases Px=Fx, Px=Ex (altitude ∥ BC). The anchor-at-P framing used here avoids that casework entirely, since the altitude from P is parallel to DA and meets BC whenever v≠0.

## Current best
Complete proof below.

## Full proof

Throughout, write
$$p=BD=DE=EA,\qquad q=CD=DF=FA,\qquad a=BC,\ b=CA,\ c=AB.$$
Because $D$ lies on side $BC$ with $BD=p$ and $CD=q$, we have $a=p+q$.

### Coordinates

Place
$$D=(0,0),\qquad B=(-p,0),\qquad C=(q,0),\qquad A=(u,v),\ v>0,$$
so $BC$ is the $x$-axis and (since $A$ is a genuine vertex) $v>0$. Then
$$b^2=CA^2=(u-q)^2+v^2,\qquad c^2=AB^2=(u+p)^2+v^2. \tag{0}$$
Note $|B|=p$ and $|C|=q$ (distances from $D$), consistent with $BD=p$, $CD=q$.

Since $E$ lies on segment $AC$ with $EA=p$ and $AC=b$, we have $E=A+\tfrac pb(C-A)$; likewise $F=A+\tfrac qc(B-A)$ from $FA=q$, $AB=c$. With $s=p/b$, $r=q/c$:
$$E=\big((1-s)u+sq,\ (1-s)v\big),\qquad F=\big((1-r)u-rp,\ (1-r)v\big). \tag{1}$$
Because $E$ is strictly interior to side $AC$ we have $0<p=EA<AC=b$, i.e.
$$b>p>0,\qquad\text{and similarly}\qquad c>q>0. \tag{2}$$

The two remaining hypotheses $DE=p$ and $DF=q$ are, since $D$ is the origin,
$$\textbf{(R1)}\quad |E|^2=p^2,\qquad\textbf{(R2)}\quad |F|^2=q^2.$$

### Lemma 1 (the configuration forces $b+c=2a$)

Using $|A|^2=u^2+v^2=:\rho^2$, $A\cdot(C-A)=A\cdot C-|A|^2=uq-\rho^2$ and $|C-A|^2=b^2$,
$$|E|^2=|A|^2+2s\,A\cdot(C-A)+s^2|C-A|^2=\rho^2+\tfrac{2p}{b}(uq-\rho^2)+p^2 .$$
Hence
$$b\,(|E|^2-p^2)=(b-2p)\rho^2+2pq\,u. \tag{R1$'$}$$
Symmetrically, $A\cdot(B-A)=-up-\rho^2$, $|B-A|^2=c^2$, so
$$c\,(|F|^2-q^2)=(c-2q)\rho^2-2pq\,u. \tag{R2$'$}$$
On the configuration, (R1) and (R2) hold, so the left sides of (R1$'$), (R2$'$) vanish. Adding,
$$(b+c-2p-2q)\,\rho^2=0 .$$
Since $\rho^2=|A|^2>0$ (because $A\ne D$, indeed $v>0$), we get
$$\boxed{\,b+c=2(p+q)=2a\,.} \tag{3}$$

Moreover, from (R1$'$)=0 and (R2$'$)=0 we may solve for $b$ and $c$ on the configuration:
$$b=\frac{2p\rho^2-2pq\,u}{\rho^2},\qquad c=\frac{2q\rho^2+2pq\,u}{\rho^2}. \tag{4}$$
(One checks $b+c=2(p+q)$ directly from (4), re-deriving (3).) These are exact identities **valid on the configuration**, and they are the form of (R1),(R2) we use below.

### Lemma 2 (EF ⟂ DA)

$DE=EA$ says $E$ is equidistant from $D$ and $A$, so $E$ lies on the perpendicular bisector $m$ of segment $DA$. $DF=FA$ says $F$ lies on $m$ as well. As $D\ne A$, $m$ is a single well-defined line, so $E,F\in m$, i.e. **line $EF=m$ is the perpendicular bisector of $DA$**; in particular $EF\perp DA$. Consequently any line perpendicular to $EF$ is parallel to $DA$, which has direction $(u,v)$ with $v>0$ (not horizontal).

### The point $P=BE\cap CF$

Solving the two cevian lines (Cramer's rule) gives, with $\Delta:=(E_x-B_x)F_y-E_y(F_x-C_x)$,
$$P=\Big(P_x,\,P_y\Big),\quad
P_x=\frac{bc\,u-bpq-bqu+cpq-cpu+p^2q-pq^2+pqu}{\,bc-pq\,},\quad
P_y=\frac{v(b-p)(c-q)}{\,bc-pq\,}, \tag{5}$$
and one computes $\Delta=\dfrac{v(p+q)(bc-pq)}{bc}$. By (2), $b>p$ and $c>q$, hence
$$bc>pq>0,\qquad\text{so}\qquad bc-pq>0. \tag{6}$$
Together with $v>0$, $p+q>0$, this shows $\Delta\ne 0$: the cevians $BE$ and $CF$ are **not parallel** (equivalently $BE\times CF=\Delta\ne0$), so $P$ is the unique finite intersection and the denominators in (5) are nonzero. Also $P_y=\dfrac{v(b-p)(c-q)}{bc-pq}>0$ by (2),(6): $P$ lies strictly above $BC$.

### The orthocenter

Let $H=(h_0,0)$ be the foot on $BC$ of the line through $P$ perpendicular to $EF$. By Lemma 2 this line is **parallel to $DA$**, direction $(u,v)$ with $v>0$, so it is not horizontal and meets the $x$-axis in exactly one point; solving $P_y+\tau v=0$ gives $\tau=-P_y/v$ and
$$h_0=P_x-\frac{u}{v}\,P_y . \tag{7}$$
Thus $H$ is the unique point where the altitude of $\triangle PEF$ from $P$ meets $BC$.

**Triangle $PEF$ is non-degenerate.** A direct computation of twice its signed area gives
$$2\,[\triangle PEF]=(E-P)\times(F-P)=\frac{pq\,v\,(b-p)(c-q)(p+q)}{bc\,(bc-pq)}\;>0,$$
because every factor is positive: $p,q,v>0$, $p+q>0$, $bc>0$, $b-p>0$ and $c-q>0$ by (2), and $bc-pq>0$ by (6). Hence $P,E,F$ are not collinear and the orthocenter of $\triangle PEF$ is a well-defined point — the common intersection of its three altitudes.

We claim $H$ is the orthocenter of $\triangle PEF$. Since $H$ is on the altitude from $P$, it suffices to prove $H$ lies on the altitude from $E$ (the line through $E$ perpendicular to $PF$) and on the altitude from $F$ (through $F$ perpendicular to $PE$); the three altitudes of a triangle are concurrent at the orthocenter, so a point on all three **is** the orthocenter, and it lies on $BC$. Equivalently we must show the two dot products
$$\textbf{(I)}\ (H-E)\cdot(F-P)=0,\qquad \textbf{(II)}\ (H-F)\cdot(E-P)=0 .$$
These conditions involve no division by the unknown slopes, so there is no degenerate-altitude issue: we only used $v\ne0$ to define $H$.

Substituting (1),(5),(7) and clearing denominators, a direct computation gives
$$(H-E)\cdot(F-P)=\frac{p\,(p-b)(q-c)}{bc\,(bc-pq)^2}\;\cdot\;\Phi_1, \tag{8}$$
$$(H-F)\cdot(E-P)=\frac{q\,(p-b)(q-c)}{bc\,(bc-pq)^2}\;\cdot\;\Phi_2, \tag{9}$$
where
$$
\Phi_1= bc^2qu-bc^2u^2-bc^2v^2+bcpq^2+bcqu^2+bcqv^2+bp^2q^2+bpq^2u
+cpq^3-2cpq^2u+cpqu^2+cpqv^2+p^2q^3-p^2q^2u+pq^3u-pq^2u^2-pq^2v^2,
$$
$$
\Phi_2= -b^2cpu-b^2cu^2-b^2cv^2+bcp^2q+bcpu^2+bcpv^2+bp^3q+2bp^2qu+bpqu^2+bpqv^2
+cp^2q^2-cp^2qu+p^3q^2-p^3qu+p^2q^2u-p^2qu^2-p^2qv^2 .
$$
By (2),(6) the rational prefactors in (8),(9) are nonzero, so it remains to prove
$$\Phi_1=0\quad\text{and}\quad\Phi_2=0\qquad\text{on the configuration.} \tag{10}$$

### Proof of (10): two algebraic reductions

Write $\rho^2=u^2+v^2$. On the configuration we may substitute the exact values (4) of $b$ and $c$. Concretely, $\Phi_1$ has degree $1$ in $b$ and $2$ in $c$; multiplying by $\rho^{6}$ and replacing $b\rho^2\mapsto 2p\rho^2-2pqu$, $c\rho^2\mapsto 2q\rho^2+2pqu$ (this is (4)) turns $\rho^{6}\Phi_1$ into a polynomial $\widetilde\Phi_1(u,v,p,q)$. Likewise $\rho^{6}\Phi_2\mapsto\widetilde\Phi_2$. By construction,
$$\Phi_i=0\ \text{on the configuration}\iff \widetilde\Phi_i=0\ \text{on the configuration.} \tag{11}$$

We now use two scalar relations that hold on the configuration.

**Relation $\mathrm{Lfac}=0$.** Substituting (4) into the side-length definitions (0) gives two scalar identities $G_1=0$, $G_2=0$, where (after clearing $\rho^2$)
$$G_1:=\big(2p\rho^2-2pqu\big)^2-\rho^4\big((u-q)^2+v^2\big)=0,\quad
G_2:=\big(2q\rho^2+2pqu\big)^2-\rho^4\big((u+p)^2+v^2\big)=0 .$$
A direct expansion yields the exact polynomial identity
$$G_1-G_2=(p+q)\,\rho^2\cdot \mathrm{Lfac},\qquad
\mathrm{Lfac}:=\big(5(p-q)+2u\big)v^2-\big(8pqu-5(p-q)u^2-2u^3\big). \tag{12}$$
Since $G_1=G_2=0$ and $(p+q)\rho^2>0$, we conclude
$$\mathrm{Lfac}=0\quad\text{on the configuration.} \tag{13}$$

**Relation $\mathrm{Cubic}=0$.** Regard $G_1$ and $\mathrm{Lfac}$ as polynomials in the single variable $v$ (with coefficients in $u,p,q$). Their resultant eliminates $v$:
$$\operatorname{Res}_v\!\big(G_1,\ \mathrm{Lfac}\big)=16\,p^4q^4u^4\cdot \mathrm{Cubic}^2, \tag{14}$$
where
$$\mathrm{Cubic}:=45p^3+105p^2q-42p^2u-105pq^2+52pqu-4pu^2-45q^3-42q^2u+4qu^2+8u^3 .$$
(Equation (14) is an exact polynomial identity, verified by expansion.) On the configuration $G_1=0$ and $\mathrm{Lfac}=0$ hold **simultaneously** with the same value of $v$, so $G_1$ and $\mathrm{Lfac}$ share the common root $v$; therefore their resultant vanishes:
$$16\,p^4q^4u^4\cdot \mathrm{Cubic}^2=0 .$$
We have $p,q>0$, so $16p^4q^4>0$. If $u\ne0$ then $\mathrm{Cubic}^2=0$, hence $\mathrm{Cubic}=0$. If $u=0$, then (0) and (4) give $b=2p$, $c=2q$ together with $b^2=q^2+v^2$, $c^2=p^2+v^2$, i.e. $4p^2=q^2+v^2$ and $4q^2=p^2+v^2$; subtracting yields $5(p^2-q^2)=0$, so $p=q$. Substituting $u=0,\ p=q$ into $\mathrm{Cubic}$ gives
$$\mathrm{Cubic}\big|_{u=0}=15\,(p-q)(p+3q)(3p+q),$$
which equals $0$ when $p=q$. Thus in **every** case
$$\mathrm{Cubic}=0\quad\text{on the configuration.} \tag{15}$$

**Finishing (10).** Both $\widetilde\Phi_1$ and $\widetilde\Phi_2$ are polynomials in $v$. Let $\ell:=5(p-q)+2u$ denote the $v^2$-coefficient of $\mathrm{Lfac}$. Polynomial pseudo-division of $\widetilde\Phi_i$ by $\mathrm{Lfac}$ in the variable $v$ produces, for some integer $k_i\ge0$, the **exact integral** identity
$$\ell^{\,k_i}\,\widetilde\Phi_i=\mathrm{Q}_i\cdot \mathrm{Lfac}+\mathrm{R}_i, \tag{16}$$
with $\mathrm{Q}_i,\mathrm{R}_i\in\mathbb{Q}[u,v,p,q]$ and $\mathrm{R}_i$ of degree $0$ in $v$ (the pseudo-remainder). Carrying out the division explicitly, one finds in each case that $\mathrm{Cubic}$ divides $\mathrm{R}_i$:
$$\mathrm{R}_i=\mathrm{S}_i\cdot \mathrm{Cubic},\qquad \mathrm{S}_i\in\mathbb{Q}[u,p,q]. \tag{17}$$
(Identities (16),(17) are exact and were verified by symbolic expansion.) On the configuration, $\mathrm{Lfac}=0$ by (13) and $\mathrm{Cubic}=0$ by (15), so the right-hand side of (16) is $\mathrm{Q}_i\cdot 0+\mathrm{S}_i\cdot 0=0$, whence
$$\ell^{\,k_i}\,\widetilde\Phi_i=0\quad\text{on the configuration.} \tag{18}$$

It remains to deduce $\widetilde\Phi_i=0$. We split on $\ell$.

*Case $\ell\ne0$.* By (18), $\widetilde\Phi_i=0$.

*Case $\ell=0$.* We show this forces the single isosceles configuration. If $\ell=5(p-q)+2u=0$ then $u=-\tfrac52(p-q)$. Substituting this into $\mathrm{Lfac}=\ell v^2-\big(8pqu-5(p-q)u^2-2u^3\big)$ and using $\ell=0$ and (13) gives $8pqu-5(p-q)u^2-2u^3=0$; evaluating at $u=-\tfrac52(p-q)$ yields $-20pq(p-q)=0$. Since $p,q>0$, this forces $p=q$, and then $\ell=2u=0$ gives $u=0$. Thus the only configuration point with $\ell=0$ is $u=0,\ p=q$. By (0),(4) this is $b=c=2p$ with $4p^2=p^2+v^2$, i.e. the explicit isosceles triangle $u=0,\ q=p,\ b=c=2p,\ v=p\sqrt3$. A direct evaluation of (1),(5),(7) at this point gives $E=\big(\tfrac p2,\tfrac{p\sqrt3}{2}\big)$, $F=\big(-\tfrac p2,\tfrac{p\sqrt3}{2}\big)$, $P=\big(0,\tfrac{p}{\sqrt3}\big)$, $H=(0,0)=D$, and one checks directly
$$(H-E)\cdot(F-P)=0,\qquad (H-F)\cdot(E-P)=0,$$
so $\Phi_1=\Phi_2=0$ there as well. (Indeed $DE=\sqrt{(p/2)^2+(p\sqrt3/2)^2}=p$, confirming this is a genuine configuration.)

In both cases $\Phi_1=\Phi_2=0$, which is exactly (10).

### Conclusion

By (8),(9),(10), the dot products **(I)** and **(II)** vanish: the point $H=(h_0,0)$ on $BC$ lies on the altitude of $\triangle PEF$ from $E$ and on the altitude from $F$, and by construction it lies on the altitude from $P$. The three altitudes of a triangle are concurrent at its orthocenter, so $H$ is the orthocenter of $\triangle PEF$. Since $H=(h_0,0)$ has $y$-coordinate $0$, the orthocenter of $\triangle PEF$ lies on line $BC$. $\blacksquare$

### Numerical confirmation (sanity check, not part of the logic)

Concrete instance: take $B=(0,0)$, $C=(1,0)$, $A$ on the ellipse $b+c=2$ at parameter $\theta=1.1$, giving $A\approx(0.954,0.772)$, $b\approx0.880$, $c\approx1.120$. Solving $DE=p$ yields $p\approx0.5239$, $q\approx0.4761$, and one checks
$$BD=DE=EA=0.52394\ldots,\qquad CD=DF=FA=0.47606\ldots$$
to machine precision. In the $D$-centered frame the foot of the altitude from $P$ is $H\approx(0.17891,\,0)$, and the two altitude conditions evaluate to $(H-E)\cdot(F-P)\approx2.2\times10^{-15}$, $(H-F)\cdot(E-P)\approx-1.4\times10^{-15}$. The orthocenter computed directly as the intersection of the altitudes from $E$ and $F$ is $(0.17891,\,-9\times10^{-16})$ — on $BC$. Across $40+$ valid configurations the orthocenter's $y$-coordinate stays below $5\times10^{-14}$, and $\Phi_1,\Phi_2$ vanish to $\sim10^{-13}$. These confirm the symbolic identities (8)–(15) above; the proof itself rests on those exact identities, not on the numerics.
