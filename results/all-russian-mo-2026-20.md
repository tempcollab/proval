## Status
solved

## Approaches tried
- Vector computation in $I$-centered coordinates, with the scalar-triple-product
  coplanarity criterion collapsed by the "master key" identity
  $S_X(a_X-r)=-Tr$ (constant in $X$), itself derived from the equilibrium of
  face-area-weighted outward normals $\sum_X S_X\,n_X=0$ — **worked**; gives a
  complete, gap-free proof.

## Current best
Complete proof below.

## Full proof

### 0. Setup and notation

Let $ABCD$ be a (non-degenerate) tetrahedron with inscribed sphere of center
$I$ and radius $r>0$. By hypothesis the insphere touches the four faces at
$$A_1\in\text{face }BCD,\quad B_1\in\text{face }CDA,\quad
C_1\in\text{face }DAB,\quad D_1\in\text{face }ABC .$$

We work in **vectors based at $I$**: we place the origin at $I$, so each letter
$A,B,C,D,\dots$ also denotes the position vector of that point relative to $I$.
Thus $I=\mathbf 0$.

For each vertex $X\in\{A,B,C,D\}$ let
- $n_X$ = the **outward** unit normal to the face *opposite* $X$ (the face not
  containing $X$); "outward" means pointing from the interior of the tetrahedron
  toward the exterior, i.e. *away* from the opposite vertex $X$. Explicitly:
  $n_A\perp$ face $BCD$, $n_B\perp$ face $CDA$, $n_C\perp$ face $DAB$,
  $n_D\perp$ face $ABC$.
- $S_X$ = the area of the face opposite $X$ (so $S_A=\operatorname{area}(BCD)$,
  $S_B=\operatorname{area}(CDA)$, $S_C=\operatorname{area}(DAB)$,
  $S_D=\operatorname{area}(ABC)$).
- $T:=S_A+S_B+S_C+S_D$ (total surface area), and
  $a_X:=n_X\cdot X$ (the dot product of $n_X$ with the *opposite* vertex $X$,
  which lies off its own face).

Let $M:=\tfrac12(A+B)$ be the midpoint of $AB$. **Goal:** the four points
$M,C,D,E$ are coplanar.

We record once the non-degeneracy facts we use (all immediate from $ABCD$ being a
genuine tetrahedron with $r>0$):
$$r>0,\qquad S_A+S_B>0,$$
and for any two distinct vertices $X\neq Y$ the normals $n_X,n_Y$ are
**linearly independent** (the two faces opposite $X$ and $Y$ are non-parallel
planes — they meet along an edge of the tetrahedron — so their normals are not
parallel). In particular $n_A,n_B$ are independent and $n_C,n_D$ are independent.

Throughout, "$\cdot$" is the dot product, "$\times$" the cross product, and for
three vectors $p,q,s$ we write $\det(p,q,s)=p\cdot(q\times s)=(p\times q)\cdot s$
for the scalar triple product (the two expressions are equal by the cyclic
symmetry of the triple product). We use one standard vector identity:
- **(VTP)** vector triple product: $(p\times q)\times s=q\,(p\cdot s)-p\,(q\cdot s)$.

---

### 1. The contact points are $X_1=r\,n_X$

Fix a vertex $X$ and let $\Pi_X$ be the plane of the face opposite $X$. Since the
insphere has center $I=\mathbf 0$ and radius $r$ and is tangent to $\Pi_X$, the
plane $\Pi_X$ is at distance exactly $r$ from the origin, on the outward side (the
interior of the tetrahedron, hence the center $I$, lies on the inward side of each
face). Therefore the signed distance from $I$ to $\Pi_X$ measured along the
outward unit normal $n_X$ is $+r$, i.e.
$$\Pi_X=\{Z:\ n_X\cdot Z=r\}. \tag{1}$$

The contact point of a sphere with a tangent plane is the foot of the
perpendicular dropped from the center onto the plane. The foot of the
perpendicular from the origin onto the plane $\{Z:n_X\cdot Z=r\}$ (with $n_X$ a
unit vector) is the point $r\,n_X$: indeed $n_X\cdot(r\,n_X)=r\|n_X\|^2=r$ so
$r\,n_X\in\Pi_X$, and $r\,n_X$ is parallel to $n_X$, hence perpendicular to
$\Pi_X$. Consequently
$$A_1=r\,n_A,\qquad B_1=r\,n_B,\qquad C_1=r\,n_C,\qquad D_1=r\,n_D. \tag{2}$$

### 2. The face equation $n_X\cdot Y=r$ for every vertex $Y$ on the face opposite $X$

The face opposite $X$ is the triangle whose vertices are the three vertices
$\neq X$. Each such vertex $Y$ lies on the plane $\Pi_X$, so by (1)
$$n_X\cdot Y=r\qquad\text{for every vertex }Y\neq X. \tag{3}$$
Writing this out:
$$
\begin{aligned}
&n_A\cdot B=n_A\cdot C=n_A\cdot D=r, &&
 n_B\cdot A=n_B\cdot C=n_B\cdot D=r,\\
&n_C\cdot A=n_C\cdot B=n_C\cdot D=r, &&
 n_D\cdot A=n_D\cdot B=n_D\cdot C=r.
\end{aligned}\tag{3'}
$$
By definition $a_X=n_X\cdot X$ (here $X$ is the vertex *not* on its own face, so
(3) does **not** apply to it).

### 3. Equilibrium of the area-weighted outward normals

**Claim.** $\;S_A\,n_A+S_B\,n_B+S_C\,n_C+S_D\,n_D=\mathbf 0.$

We prove this by the closed-surface vector-area identity, with an explicit
edge-by-edge cancellation (no divergence theorem is invoked).

*Vector area of an oriented triangle.* For an ordered triple of points $(P,Q,R)$
define the **vector area**
$$\vec a(P,Q,R):=\tfrac12\big(P\times Q+Q\times R+R\times P\big). \tag{4}$$
This is the standard vector area: indeed, using bilinearity and
$P\times P=\mathbf 0$,
$$
\tfrac12(Q-P)\times(R-P)
=\tfrac12\big(Q\times R-Q\times P-P\times R\big)
=\tfrac12\big(Q\times R+P\times Q+R\times P\big)=\vec a(P,Q,R),
$$
which is exactly (4). Hence $\|\vec a(P,Q,R)\|=\tfrac12\|(Q-P)\times(R-P)\|$ is
the **area** of triangle $PQR$, and $\vec a(P,Q,R)$ is parallel to the normal
$(Q-P)\times(R-P)$ determined by the right-hand rule from the ordering
$(P,Q,R)$. Reversing two of the three vertices reverses the sign of $\vec a$,
since (4) is totally antisymmetric in $P,Q,R$ (swapping any two of $P,Q,R$
negates the sum). Thus, for a given face, the two possible windings give the two
opposite normals.

*The consistent (edge-cancelling) winding.* Orient the four faces by the cyclic
orders
$$
G_A=(B,D,C),\quad G_B=(A,C,D),\quad G_C=(A,D,B),\quad G_D=(A,B,C). \tag{8}
$$
These four windings are **edge-consistent**: every undirected edge of the
tetrahedron is traversed once in each direction by the two faces sharing it.
Indeed, $\vec a(G_X)=S_X\,\tilde n_X$ where $\tilde n_X:=\pm n_X$ is one of the
two unit normals to the face opposite $X$; we determine the signs after proving
the cancellation.

We compute $\sum_X\vec a(G_X)$ explicitly. Expand each by (4):
$$
\begin{aligned}
2\,\vec a(G_A)&=B\times D+D\times C+C\times B,\\
2\,\vec a(G_B)&=A\times C+C\times D+D\times A,\\
2\,\vec a(G_C)&=A\times D+D\times B+B\times A,\\
2\,\vec a(G_D)&=A\times B+B\times C+C\times A.
\end{aligned}
$$
Sum and collect by ordered pair, listing all occurrences:
$$
\begin{array}{ll}
B\times D:\ +1\,(G_A); & D\times B:\ +1\,(G_C);\\
D\times C:\ +1\,(G_A); & C\times D:\ +1\,(G_B);\\
C\times B:\ +1\,(G_A); & B\times C:\ +1\,(G_D);\\
A\times C:\ +1\,(G_B); & C\times A:\ +1\,(G_D);\\
D\times A:\ +1\,(G_B); & A\times D:\ +1\,(G_C);\\
A\times B:\ +1\,(G_D); & B\times A:\ +1\,(G_C).
\end{array}
$$
Every ordered pair now appears **exactly once in each direction**: $B\times D$
with $D\times B$, $D\times C$ with $C\times D$, $C\times B$ with $B\times C$,
$A\times C$ with $C\times A$, $D\times A$ with $A\times D$, $A\times B$ with
$B\times A$. Since $Y\times X=-(X\times Y)$, each of these six pairs sums to
$\mathbf 0$. Therefore
$$
\vec a(G_A)+\vec a(G_B)+\vec a(G_C)+\vec a(G_D)=\mathbf 0. \tag{9}
$$
This is the genuine closed-surface vector-area identity, established by explicit
edge cancellation: each of the six edges $BD,DC,CB,AC,DA,AB$ of the tetrahedron
is traversed once in each direction by the two faces meeting along it, so the
corresponding cross products cancel in pairs.

**The windings (8) carry a single global orientation.** Write
$\vec a(G_X)=\varepsilon_X\,S_X\,n_X$
with $\varepsilon_X\in\{+1,-1\}$, where $n_X$ is the outward unit normal; this is
possible because $\vec a(G_X)$ has magnitude $S_X$ and is parallel to the
face-normal. We show $\varepsilon_A=\varepsilon_B=\varepsilon_C=\varepsilon_D$ (a common
value, which turns out to be $-1$) by a single signed-volume computation per face.

Fix the orientation of space by the signed volume
$\operatorname{Vol}:=\tfrac16\det(B-A,\ C-A,\ D-A)$; without loss of generality
$\operatorname{Vol}>0$ (otherwise relabel two vertices, which preserves the entire
problem statement). Recall the outward normal $n_X$ to the face opposite $X$
satisfies $n_X\cdot(P-X)>0$ for every face vertex $P$ (the face lies on the far
side from $X$, so the displacement $P-X$ from $X$ toward the face has positive
component along the outward normal). Hence $\vec a(G_X)=\varepsilon_X S_X n_X$ has
$\varepsilon_X=+1$ iff $\vec a(G_X)\cdot(P-X)>0$ and $\varepsilon_X=-1$ iff
$\vec a(G_X)\cdot(P-X)<0$. We compute this dot product (with $P$ a chosen face
vertex) for each of the four faces, in terms of the signed volume:

- $G_D=(A,B,C)$, opposite $D$: $\vec a(G_D)=\tfrac12(B-A)\times(C-A)$, and
$$
\vec a(G_D)\cdot(A-D)=\tfrac12\,(B-A)\times(C-A)\cdot(A-D)
=-\tfrac12\det(B-A,\,C-A,\,D-A)=-3\operatorname{Vol}<0,
$$
where we used $(p\times q)\cdot s=\det(p,q,s)$ and
$\det(B-A,C-A,A-D)=-\det(B-A,C-A,D-A)$. So $\varepsilon_D=-1$.

Now the analogous quantity $\vec a(G_X)\cdot(P-X)$ for the other three faces:

- $G_A=(B,D,C)$, opposite $A$: $\vec a(G_A)=\tfrac12(D-B)\times(C-B)$, so
$$
\vec a(G_A)\cdot(B-A)=\tfrac12(D-B)\times(C-B)\cdot(B-A).
$$
Using that adding a multiple of one column to another leaves a determinant
unchanged: adding the third column $B-A$ to the first column gives
$(D-B)+(B-A)=D-A$, and adding it to the second gives $(C-B)+(B-A)=C-A$, so
$\det(D-B,\,C-B,\,B-A)=\det(D-A,\,C-A,\,B-A)$. Then
$\det(D-A,C-A,B-A)=-\det(B-A,C-A,D-A)=-6\operatorname{Vol}$ (a single transposition
of the first and third columns negates the determinant). Hence
$\vec a(G_A)\cdot(B-A)=-3\operatorname{Vol}<0$.

- $G_B=(A,C,D)$, opposite $B$: $\vec a(G_B)=\tfrac12(C-A)\times(D-A)$, so
$$
\vec a(G_B)\cdot(A-B)=\tfrac12(C-A)\times(D-A)\cdot(A-B)
=-\tfrac12\det(C-A,\,D-A,\,B-A).
$$
Now $\det(C-A,D-A,B-A)=\det(B-A,C-A,D-A)=6\operatorname{Vol}$ (cyclic permutation
of the three columns leaves the determinant unchanged). Hence
$\vec a(G_B)\cdot(A-B)=-3\operatorname{Vol}<0$.

- $G_C=(A,D,B)$, opposite $C$: $\vec a(G_C)=\tfrac12(D-A)\times(B-A)$, so
$$
\vec a(G_C)\cdot(A-C)=\tfrac12(D-A)\times(B-A)\cdot(A-C)
=-\tfrac12\det(D-A,\,B-A,\,C-A).
$$
And $\det(D-A,B-A,C-A)=\det(B-A,C-A,D-A)=6\operatorname{Vol}$ (cyclic permutation).
Hence $\vec a(G_C)\cdot(A-C)=-3\operatorname{Vol}<0$, so $\varepsilon_C=-1$.

In all four cases $\vec a(G_X)\cdot(P-X)=-3\operatorname{Vol}<0$, so
$\varepsilon_X=-1$ for all four faces uniformly:
$$
\vec a(G_X)=-\,S_X\,n_X\qquad(X=A,B,C,D). \tag{6}
$$
(The uniformity is the whole point; the common sign $-1$ is harmless.) Combining
(6) with the edge-cancellation identity (9),
$$
\mathbf 0=\sum_X\vec a(G_X)=-\sum_X S_X\,n_X
\;\Longrightarrow\;
\boxed{\,S_A\,n_A+S_B\,n_B+S_C\,n_C+S_D\,n_D=\mathbf 0.\,}\tag{10}
$$
This proves the Claim.

### 4. The master key: $S_X(a_X-r)=-Tr$ for every $X$

Dot the equilibrium (10) with the vector $A$:
$$
S_A(n_A\cdot A)+S_B(n_B\cdot A)+S_C(n_C\cdot A)+S_D(n_D\cdot A)=0 .
$$
By the face equation (3'), $n_B\cdot A=n_C\cdot A=n_D\cdot A=r$, and
$n_A\cdot A=a_A$. Hence
$$
S_A\,a_A+(S_B+S_C+S_D)\,r=0
\;\Longrightarrow\;
S_A\,a_A+(T-S_A)\,r=0
\;\Longrightarrow\;
S_A(a_A-r)=-Tr .
$$
Repeating verbatim with $B,C,D$ in place of $A$ (dotting (10) with $B$, then $C$,
then $D$, and using the corresponding three equalities from (3')) gives the
**master key**
$$
\boxed{\,S_X(a_X-r)=-Tr\quad\text{for every }X\in\{A,B,C,D\}.\,}\tag{11}
$$
The right-hand side $-Tr$ is **independent of $X$** — this constancy is the entire
engine of the final cancellation. Equivalently,
$$
r-a_X=\frac{Tr}{S_X}>0\qquad(\text{since }T,r,S_X>0). \tag{11'}
$$
The positivity in (11') will pin $E$ strictly inside the segment $A_1B_1$.

### 5. The plane $(C_1D_1I)$ is $\{X:(A-B)\cdot X=0\}$

From the face equation (3'), $n_C\cdot A=n_C\cdot B=r$, so
$n_C\cdot(A-B)=0$; likewise $n_D\cdot A=n_D\cdot B=r$ gives $n_D\cdot(A-B)=0$.
Thus both $n_C$ and $n_D$ are orthogonal to the nonzero vector $A-B$. Since
$n_C,n_D$ are linearly independent (Step 0), the cross product $n_C\times n_D\neq
\mathbf 0$ is a nonzero vector orthogonal to both $n_C$ and $n_D$; as the
orthogonal complement of $\operatorname{span}\{n_C,n_D\}$ is the line
$\mathbb R(A-B)$, we get $n_C\times n_D\parallel(A-B)$.

By (2), $C_1=r\,n_C$ and $D_1=r\,n_D$, so the plane through $C_1,D_1,I$ has normal
$$
(C_1-I)\times(D_1-I)=C_1\times D_1=r^2\,(n_C\times n_D)\parallel(A-B).
$$
The plane passes through $I=\mathbf 0$, so its equation is
$$
(A-B)\cdot X=0. \tag{12}
$$
($A-B\neq\mathbf 0$ since the tetrahedron is non-degenerate, and the three points
$C_1,D_1,I$ are non-collinear because $n_C,n_D$ are independent, so this genuinely
is the plane $(C_1D_1I)$.)

### 6. Computing $E=A_1B_1\cap\text{plane}(C_1D_1I)$

Parametrize the segment $A_1B_1$ by
$$
E(t)=(1-t)A_1+t\,B_1=r\big((1-t)n_A+t\,n_B\big),\qquad t\in[0,1].
$$
Impose the plane equation (12), $(A-B)\cdot E=0$. Compute the two endpoint values
using (2) and (3'):
$$
(A-B)\cdot A_1=r\,(n_A\cdot A-n_A\cdot B)=r\,(a_A-r),\qquad
(A-B)\cdot B_1=r\,(n_B\cdot A-n_B\cdot B)=r\,(r-a_B),
$$
where we used $n_A\cdot A=a_A$, $n_A\cdot B=r$, $n_B\cdot A=r$,
$n_B\cdot B=a_B$. Hence
$$
(A-B)\cdot E(t)=(1-t)\,r(a_A-r)+t\,r(r-a_B)=0 .
$$
Since $r>0$, divide by $r$: $(1-t)(a_A-r)+t(r-a_B)=0$. Replacing $a_A-r$ by
$-(r-a_A)$ gives $-(1-t)(r-a_A)+t(r-a_B)=0$, i.e. $(1-t)(r-a_A)=t(r-a_B)$.
Solving for $t$,
$$
t=\frac{r-a_A}{(r-a_A)+(r-a_B)} .
$$
By (11'), $r-a_A=Tr/S_A$ and $r-a_B=Tr/S_B$, both strictly positive. Therefore
$$
t=\frac{Tr/S_A}{Tr/S_A+Tr/S_B}=\frac{1/S_A}{1/S_A+1/S_B}=\frac{S_B}{S_A+S_B}\in(0,1),
$$
the strict membership in $(0,1)$ because $S_A,S_B>0$. Thus $E$ lies on the **open**
segment $A_1B_1$, consistent with the problem statement. With $1-t=S_A/(S_A+S_B)$,
$$
E=\frac{S_A\,A_1+S_B\,B_1}{S_A+S_B}=\frac{r\,(S_A\,n_A+S_B\,n_B)}{S_A+S_B}. \tag{13}
$$

For Step 7 we record two dot products derived from (13) using (3')
($n_A\cdot B=r$, $n_B\cdot A=r$, $n_A\cdot A=a_A$, $n_B\cdot B=a_B$) and
$n_A\cdot C=n_B\cdot C=r$:
$$
n_A\cdot E=\frac{r\,(S_A\,n_A\cdot n_A+S_B\,n_A\cdot n_B)}{S_A+S_B}
=\frac{r\,(S_A+S_B\,(n_A\cdot n_B))}{S_A+S_B}, \tag{14a}
$$
$$
n_B\cdot E=\frac{r\,(S_A\,n_A\cdot n_B+S_B\,n_B\cdot n_B)}{S_A+S_B}
=\frac{r\,(S_A\,(n_A\cdot n_B)+S_B)}{S_A+S_B}, \tag{14b}
$$
where we used $n_A\cdot n_A=n_B\cdot n_B=1$ (unit normals).

### 7. Coplanarity of $M,C,D,E$

The four points $M,C,D,E$ are coplanar iff the three vectors $M-C,\ D-C,\ E-C$
are linearly dependent, i.e.
$$
\det(M-C,\ D-C,\ E-C)=0 . \tag{15}
$$
Set $u:=M-C,\ v:=D-C,\ w:=E-C$.

**The vector $v=D-C$ is parallel to $n_A\times n_B$.** By (3'),
$n_A\cdot C=n_A\cdot D=r$, so $n_A\cdot(D-C)=0$; likewise $n_B\cdot C=n_B\cdot D=r$
gives $n_B\cdot(D-C)=0$. Thus $v$ is orthogonal to both $n_A$ and $n_B$. Since
$n_A,n_B$ are independent, $n_A\times n_B\neq\mathbf 0$ spans the line
orthogonal to both, so
$$
v=\mu\,(n_A\times n_B)\qquad\text{for some scalar }\mu. \tag{16}
$$

**Expanding the determinant.** Using $\det(u,v,w)=u\cdot(v\times w)$ and (16),
$$
\det(u,v,w)=u\cdot\big((\mu\,n_A\times n_B)\times w\big)
=\mu\;u\cdot\big((n_A\times n_B)\times w\big).
$$
By the vector triple product identity (VTP) with $p=n_A,\,q=n_B,\,s=w$,
$$
(n_A\times n_B)\times w=n_B\,(n_A\cdot w)-n_A\,(n_B\cdot w).
$$
Dotting with $u$,
$$
u\cdot\big((n_A\times n_B)\times w\big)
=(u\cdot n_B)(n_A\cdot w)-(u\cdot n_A)(n_B\cdot w),
$$
so
$$
\det(u,v,w)=\mu\Big[(u\cdot n_B)(n_A\cdot w)-(u\cdot n_A)(n_B\cdot w)\Big]. \tag{17}
$$

**The four scalars.** Recall $u=M-C=\tfrac12(A+B)-C$ and $w=E-C$.

- $u\cdot n_A=\tfrac12(n_A\cdot A+n_A\cdot B)-n_A\cdot C
   =\tfrac12(a_A+r)-r=\tfrac{a_A-r}{2}$ (using $n_A\cdot A=a_A$,
   $n_A\cdot B=r$, $n_A\cdot C=r$ from (3')).
- $u\cdot n_B=\tfrac12(n_B\cdot A+n_B\cdot B)-n_B\cdot C
   =\tfrac12(r+a_B)-r=\tfrac{a_B-r}{2}$ (using $n_B\cdot A=r$, $n_B\cdot B=a_B$,
   $n_B\cdot C=r$).
- $n_A\cdot w=n_A\cdot E-n_A\cdot C$. By (14a) and $n_A\cdot C=r$,
$$
n_A\cdot w=\frac{r(S_A+S_B(n_A\cdot n_B))}{S_A+S_B}-r
=\frac{r\,S_B\,(n_A\cdot n_B-1)}{S_A+S_B},
$$
since $\frac{r(S_A+S_B(n_A\cdot n_B))-r(S_A+S_B)}{S_A+S_B}
=\frac{rS_B(n_A\cdot n_B-1)}{S_A+S_B}$.
- $n_B\cdot w=n_B\cdot E-n_B\cdot C$. By (14b) and $n_B\cdot C=r$,
$$
n_B\cdot w=\frac{r(S_A(n_A\cdot n_B)+S_B)}{S_A+S_B}-r
=\frac{r\,S_A\,(n_A\cdot n_B-1)}{S_A+S_B},
$$
by the same algebra.

**Substituting into (17).** Write $\kappa:=\dfrac{r\,(n_A\cdot n_B-1)}{S_A+S_B}$
for brevity, so that $n_A\cdot w=\kappa\,S_B$ and $n_B\cdot w=\kappa\,S_A$. Then
$$
\begin{aligned}
\det(u,v,w)
&=\mu\Big[(u\cdot n_B)(n_A\cdot w)-(u\cdot n_A)(n_B\cdot w)\Big]\\
&=\mu\Big[\tfrac{a_B-r}{2}\cdot\kappa S_B-\tfrac{a_A-r}{2}\cdot\kappa S_A\Big]\\
&=\frac{\mu\,\kappa}{2}\Big[S_B(a_B-r)-S_A(a_A-r)\Big].
\end{aligned}
$$

**The master key kills the bracket.** By (11), $S_A(a_A-r)=-Tr$ and
$S_B(a_B-r)=-Tr$. Hence
$$
S_B(a_B-r)-S_A(a_A-r)=(-Tr)-(-Tr)=0 .
$$
Therefore
$$
\det(M-C,\ D-C,\ E-C)=\frac{\mu\,\kappa}{2}\cdot 0=0 . \tag{18}
$$

The vanishing in (18) is *exact* and does **not** depend on the values of the
prefactor $\mu$ or $\kappa$ (either may be nonzero — $\kappa\neq0$ generically,
e.g. when $n_A\cdot n_B\neq1$, and $\mu\neq0$ whenever $D\neq C$): the determinant
vanishes **solely** because the bracket $S_B(a_B-r)-S_A(a_A-r)$ equals $0$ by the
$X$-independence of $-Tr$ in the master key.

### Conclusion

By (18) and the coplanarity criterion (15), the vectors $M-C,\,D-C,\,E-C$ are
linearly dependent, so the four points $M,C,D,E$ are coplanar. Equivalently, the
midpoint $M=\tfrac12(A+B)$ of edge $AB$ lies in the plane $CDE$. $\blacksquare$
