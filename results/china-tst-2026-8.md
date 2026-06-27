## Status
solved

## Approaches tried
- Complement-counting upper bound with a naive "all witness non-edges distinct" argument + explicit construction — the construction and the answer are correct, but the naive distinctness claim is FALSE: a single remaining–remaining cross-committee non-edge $\{r,r'\}$ is a valid witness for two distinct demands $(r,c(r'))$ and $(r',c(r))$, so witnesses are NOT automatically distinct. Recorded as a dead end in the distinctness step.
- Complement-counting upper bound with witness-injectivity established by **Hall's marriage theorem / SDR** (not by naive distinctness), where the Hall condition is proved by ruling out (via a committee-label color-swap that would create a second valid assignment) any connected component of the demand→non-edge bipartite graph in which every non-edge is shared; plus the explicit construction and the algebraic identity — WORKS. This is the proof below.
- **Fixing the L2' swap (round 3).** The first version of L2' swapped labels $\alpha,\beta$ for *all* of $Q$ and asserted validity from "$s$ has no $M$-edges"; this was a real gap, because a moved vertex $q$ could have a cross-committee non-edge to a non-$Q$ vertex $s$ living in a **different** component of $B$ (a vertex has demands in $\ge2$ committees, and those demands need not lie in the same component). The corrected L2' swaps only a connected component $K$ of the cross-non-edge graph $M_C$ **built from the non-edges of the single component $C$**, restricted to two colours $\alpha,\beta$. Every adjacency needed ($q\sim P_\beta$; no blocking non-edge $\{q,s\}$ with $s\notin K$) is derived from membership in $C$ alone, via fact $(\star)$: a demand whose non-edge lies in $C$ has *all* its eligible non-edges in $C$ (definition of a connected component), so an all-shared $C$ forces $q\sim P_{c(r')}$ and pulls any blocking $\{q,s\}$ back into $K$. The blocker classification "the only obstruction to an $\alpha\!\leftrightarrow\!\beta$ swap on a both-colour $M_C^{\alpha\beta}$-component is non-adjacency of a moved vertex to the opposite core" was verified exhaustively over all unique configs for $(m,n)=(2,5),(2,6),(3,7)$ and randomly for $(3,8),(4,9)$ (0 mismatches). No cross-component leak remains. This is the proof below.

## Current best
The maximum is
$$\binom{n}{2}-(n-2m)(m-1)=\frac{(n-2m)(n-2m+1)}{2}+m(n-1).$$
Upper bound: uniqueness forces, for each remaining vertex $r$ and each foreign committee $j$, a non-edge from $r$ into committee $j$ (swap lemma L1); these $k(m-1)$ demands admit a system of distinct representatives among the non-edges by Hall's theorem, whose condition is verified through per-$r$ disjointness of eligible sets (Fact i), the fact that every non-edge serves at most two demands (Fact ii), and the impossibility of an "all-shared" component (L2'). Hence $|E(\overline G)|\ge k(m-1)$. Construction: a big clique $K_{k+2}$, $m-1$ disjoint edges, all cross-committee fixed-member pairs joined, and $r_i\sim c_j$ but $r_i\not\sim v_j$ for the small committees; it attains the bound with a unique assignment.

## Full proof

### Setup and notation

We are given integers $m,n$ with $n>2m>2$. Set
$$k:=n-2m.$$
From $n>2m$ we get $k\ge 1$, and from $2m>2$ we get $m\ge 2$.

A configuration consists of:

- a *friendship graph* $G$ on the vertex set $V$ of the $n$ members ($E:=|E(G)|$; $\overline G$ is the complement, whose edges we call *non-edges*);
- a partition of $V$ into $m$ labelled committees, and within each committee a chair and a vice-chair. The $2m$ chosen chairs and vice-chairs are the *fixed members*; they form $m$ disjoint *core pairs* $P_1,\dots,P_m$, where $P_j=\{c_j,v_j\}$ ($c_j$ chair, $v_j$ vice-chair of committee $j$). Each $P_j$ must be an edge of $G$ (chair and vice-chair always sit in their committee, and a committee must be a clique). The remaining $k=n-2m$ vertices form the *remaining set* $R$; note $R\cap P_j=\varnothing$ for every $j$.

A *valid assignment* is a function $a:R\to\{1,\dots,m\}$ such that, putting
$$T_j:=P_j\cup\{r\in R: a(r)=j\},$$
every $T_j$ is a clique of $G$. The hypothesis is that there is **exactly one** valid assignment. We seek the maximum of $E$ over all configurations satisfying this uniqueness.

**Answer.**
$$\boxed{\;\binom{n}{2}-(n-2m)(m-1)\;=\;\frac{(n-2m)(n-2m+1)}{2}+m(n-1).\;}$$

We verify the two displayed forms are equal, prove the upper bound, then give a construction attaining it.

### Verification of the algebraic identity

We show $\binom n2-(n-2m)(m-1)=\frac{(n-2m)(n-2m+1)}2+m(n-1)$ as a polynomial identity. Write $k=n-2m$, so $n=k+2m$.

Right form: $\dfrac{k(k+1)}2+m(k+2m-1)=\dfrac{k^2+k}2+mk+2m^2-m.$

Left form:
$$\frac{(k+2m)(k+2m-1)}2-k(m-1)=\frac{k^2+4mk+4m^2-k-2m}{2}-km+k.$$
Now $\dfrac{k^2+4mk+4m^2-k-2m}{2}=\dfrac{k^2-k}2+2mk+2m^2-m$, so the left form equals
$$\frac{k^2-k}2+2mk+2m^2-m-km+k=\frac{k^2-k}2+k+mk+2m^2-m=\frac{k^2+k}2+mk+2m^2-m,$$
using $\frac{k^2-k}2+k=\frac{k^2+k}2$. This equals the right form. $\square$

(Sanity checks: $(m,n)=(2,5)$: $\binom52-1\cdot1=9$; $(2,6)$: $\binom62-2\cdot1=13$; $(3,7)$: $\binom72-1\cdot2=19$. These match the brute-force maxima.)

---

## Part I: Upper bound $E\le\binom n2-(n-2m)(m-1)$

Fix any configuration satisfying uniqueness. Let $a$ be the unique valid assignment, with committees $T_1,\dots,T_m$ as above; for $r\in R$ write $c(r):=a(r)$. Define the set of **demands**
$$D:=\{(r,j): r\in R,\ j\in\{1,\dots,m\},\ j\ne c(r)\},\qquad |D|=k(m-1),$$
and for $(r,j)\in D$ its set of **eligible non-edges**
$$\mathcal E(r,j):=\bigl\{\{r,x\}\in E(\overline G): x\in T_j\bigr\}.$$

### Lemma L1 (swap lemma)

*For every $(r,j)\in D$, $\mathcal E(r,j)\ne\varnothing$: $r$ has a non-neighbour in $T_j$.*

**Proof.** Suppose $r$ is adjacent to *every* vertex of $T_j$, for some $r\in R$, $j\ne c(r)$. Define $a'$ equal to $a$ except $a'(r)=j$. Its committees are
$$T'_j=T_j\cup\{r\},\quad T'_{c(r)}=T_{c(r)}\setminus\{r\},\quad T'_\ell=T_\ell\ (\ell\ne j,c(r)).$$
Each is a clique: $T'_j=T_j\cup\{r\}$ is a clique because $T_j$ is and $r$ is adjacent to all of $T_j$; $T'_{c(r)}\subseteq T_{c(r)}$ is a clique; the others are unchanged. So $a'$ is valid. Since $r\in R$ is non-core ($r\notin P_\ell$ for all $\ell$), deleting $r$ from $T_{c(r)}$ keeps the core pair $P_{c(r)}$ intact, so $a'$ is a genuine assignment (no chair or vice-chair was removed). Finally $a'(r)=j\ne c(r)=a(r)$, so $a'\ne a$ — two valid assignments, contradicting uniqueness. (The fact $r\notin P_{c(r)}$ is load-bearing.) $\square$

### Two structural facts

Recall $T_1,\dots,T_m$ partition $V$.

**Fact (i) — per-$r$ disjointness.** *For fixed $r\in R$, the sets $\mathcal E(r,j)$ over $j\ne c(r)$ are pairwise disjoint.*

*Proof.* A common element $\{r,x\}\in\mathcal E(r,j)\cap\mathcal E(r,j')$ with $j\ne j'$ would force $x\in T_j\cap T_{j'}=\varnothing$. $\square$

For an eligible non-edge $e$ (one lying in some $\mathcal E(r,j)$) define its **demand-degree** $\deg(e):=|\{(r,j)\in D: e\in\mathcal E(r,j)\}|$.

**Fact (ii) — degree $\le 2$.** *Every eligible non-edge $e$ has $\deg(e)\le 2$. Moreover $\deg(e)=2$ iff $e=\{r,r'\}$ with $r,r'\in R$ and $c(r)\ne c(r')$ (a **shared** non-edge); in that case the two demands served are exactly $(r,c(r'))$ and $(r',c(r))$.*

*Proof.* Let $e=\{r,w\}$ be eligible with $r\in R$ and $w\in T_j$ for the demand $(r,j)$ that witnesses eligibility. Any demand $(r^*,j^*)$ serving $e$ has $r^*\in R\cap\{r,w\}$, with the *other* endpoint of $e$ in $T_{j^*}$.

- If $w\notin R$: then $w$ is a fixed member, lying in the single committee $\ell$ with $w\in P_\ell$. The only remaining endpoint of $e$ is $r$, so $r^*=r$, and $w\in T_{j^*}$ forces $j^*=\ell$. Hence the unique demand serving $e$ is $(r,\ell)$; $\deg(e)\le 1$.
- If $w=r'\in R$: a serving demand has $r^*\in\{r,r'\}$. If $r^*=r$, the other endpoint $r'\in T_{c(r')}$ forces $j^*=c(r')$, a demand iff $c(r')\ne c(r)$. Symmetrically $r^*=r'$ gives $j^*=c(r)$, a demand iff $c(r)\ne c(r')$. If $c(r)=c(r')$, neither is a demand, so $e$ would not be eligible — contradiction. Hence $c(r)\ne c(r')$ and the serving demands are exactly $(r,c(r'))$, $(r',c(r))$, giving $\deg(e)=2$.

Thus $\deg(e)\le 2$ always, with equality exactly for shared non-edges. $\square$

### Lemma L2' (no all-shared component)

Build the bipartite graph $B$ with parts $D$ and $E(\overline G)$, joining $(r,j)$ to each member of $\mathcal E(r,j)$. (Only eligible non-edges have neighbours; we may delete the isolated non-edges, so the right part of $B$ is the set of eligible non-edges.) Call a non-edge of degree $1$ *private* and of degree $2$ *shared*.

**Claim.** *No connected component of $B$ consists entirely of shared non-edges on the right. Equivalently, every connected component of $B$ that contains at least one non-edge contains at least one private (degree-$1$) non-edge.*

**Proof.** Suppose, for contradiction, that some connected component $C$ of $B$ has every right-vertex (non-edge) of degree $2$, i.e. **every non-edge of $C$ is shared.**

We will produce a second valid assignment, contradicting uniqueness. The whole argument is confined to the non-edges and demands of $C$; we never invoke a property of any object outside $C$. This is the precise point at which the earlier "global colour-swap on all of $Q$" failed (a moved vertex could have a non-edge living in a *different* component), and the fix below keeps every reference inside $C$.

**The cross-non-edge graph of $C$.** Let $M_C$ be the graph on $R$ whose edge set is exactly $\{\,\{r,r'\}: \{r,r'\}\text{ is a non-edge of }C\,\}$. By Fact (ii), every non-edge of $C$, being shared, has the form $\{r,r'\}$ with $r,r'\in R$, $r\not\sim r'$ in $G$, and $c(r)\ne c(r')$. So every $M_C$-edge is a **cross-committee** non-edge of $G$ between two remaining vertices. Since $C$ contains at least one non-edge, $M_C$ has at least one edge; fix one such edge $\{r_0,r_0'\}$ and set $\alpha:=c(r_0)$, $\beta:=c(r_0')$, so $\alpha\ne\beta$.

**A demand-membership fact (all references inside $C$).** We record the consequence of "$C$ is all-shared" that drives the argument:

> $(\star)$ For every $M_C$-edge $\{r,r'\}$, the demand $(r,c(r'))$ belongs to $C$, and *every* eligible non-edge of that demand is a non-edge of $C$ (hence shared); in particular $r$ is adjacent in $G$ to every fixed member of committee $c(r')$, i.e. $r\sim P_{c(r')}$.

*Proof of $(\star)$.* The non-edge $e=\{r,r'\}$ lies in $C$; by Fact (ii) the two demands it serves are exactly $(r,c(r'))$ and $(r',c(r))$. In the bipartite graph $B$, the non-edge $e$ is adjacent to both of these demands, and $e\in C$, so both demands lie in the same connected component $C$. Now take the demand $d=(r,c(r'))\in C$. By definition of a connected component of $B$, **every** eligible non-edge of $d$ — i.e. every member of $\mathcal E(r,c(r'))$ — is adjacent to $d$ in $B$ and therefore also lies in $C$. Since $C$ is all-shared, each such eligible non-edge is shared, i.e. has its *other* endpoint in $R$ (Fact ii). Equivalently, $r$ has **no** non-neighbour among the fixed members of $T_{c(r')}$: a non-edge from $r$ to a fixed member $w\in P_{c(r')}$ would be eligible for $d$ (as $w\in T_{c(r')}$) but private (Fact ii, case $w\notin R$), contradicting all-sharedness. Hence $r\sim P_{c(r')}$. $\hfill\square$ ($\star$)

Note $(\star)$ is the corrected substitute for the old "every $q$ is adjacent to every fixed member of every committee": it asserts adjacency to $P_{c(r')}$ **only** for committees $c(r')$ reached from $r$ by an $M_C$-edge, and it is proved entirely from membership in $C$.

**The swap target: an $M_C$-component restricted to two colours.** Consider the subgraph $M_C^{\alpha\beta}$ of $M_C$ induced on the vertex set $\{r\in R: c(r)\in\{\alpha,\beta\}\}$ and keeping only those $M_C$-edges whose endpoints are coloured $\alpha$ and $\beta$. Because every $M_C$-edge is cross-committee, an $M_C$-edge with both endpoints coloured in $\{\alpha,\beta\}$ has one endpoint of colour $\alpha$ and one of colour $\beta$; thus $M_C^{\alpha\beta}$ is **bipartite**, with the two sides being the colour-$\alpha$ and colour-$\beta$ vertices. Let $K$ be the connected component of $M_C^{\alpha\beta}$ containing the edge $\{r_0,r_0'\}$. Then:

- $K$ contains the edge $\{r_0,r_0'\}$, so $K$ uses **both** colours $\alpha,\beta$;
- $K$ is connected and bipartite between its colour-$\alpha$ part $K_\alpha$ and colour-$\beta$ part $K_\beta$, each non-empty, and (since $K$ is connected with $\ge1$ edge) **every** vertex of $K_\alpha$ has at least one $M_C$-neighbour in $K_\beta$, and symmetrically every vertex of $K_\beta$ has an $M_C$-neighbour in $K_\alpha$.

Define $a':R\to\{1,\dots,m\}$ by swapping $\alpha,\beta$ **only on $K$**:
$$a'(q)=\begin{cases}\beta,&q\in K_\alpha,\\ \alpha,&q\in K_\beta,\\ c(q),&q\notin K.\end{cases}$$

**$a'\ne a$.** Pick $r_0\in K_\alpha$: $a'(r_0)=\beta\ne\alpha=a(r_0)$.

**$a'$ is a valid assignment.** Its committees are $T'_\ell:=P_\ell\cup\{q\in R:a'(q)=\ell\}$. For $\ell\notin\{\alpha,\beta\}$ we have $T'_\ell=T_\ell$ (no vertex changes into or out of committee $\ell$), a clique. By the symmetry $\alpha\leftrightarrow\beta$ it suffices to verify $T'_\beta$ is a clique. Now
$$T'_\beta=P_\beta\ \cup\ \underbrace{\{q\in R:c(q)=\beta,\ q\notin K\}}_{=:S}\ \cup\ K_\alpha,$$
because the committee-$\beta$ members that stay are the non-$K$ ones (the vertices of $K_\beta$ left), and the vertices that arrive are exactly $K_\alpha$. We check that every pair inside $T'_\beta$ is an edge of $G$, by the following exhaustive case split on the pair $\{x,y\}\subseteq T'_\beta$.

1. **$x,y\in P_\beta$.** $P_\beta$ is a core pair, an edge of $G$.
2. **$x\in P_\beta,\ y\in S$, or $x,y\in S$.** Then $\{x,y\}\subseteq P_\beta\cup S\subseteq T_\beta$ (these are all original committee-$\beta$ members), and $T_\beta$ is a clique under the valid assignment $a$. So $\{x,y\}\in E(G)$.
3. **$x\in K_\alpha,\ y\in P_\beta$.** By construction $x$ has an $M_C$-neighbour in $K_\beta$, i.e. there is $r'\in K_\beta$ ($c(r')=\beta$) with $\{x,r'\}$ an $M_C$-edge. Apply $(\star)$ to this edge: $x\sim P_{c(r')}=P_\beta$. So $x\sim y$.
4. **$x,y\in K_\alpha$.** Then $c(x)=c(y)=\alpha$, so $x,y\in T_\alpha$, which is a clique under $a$; hence $\{x,y\}\in E(G)$.
5. **$x\in K_\alpha,\ y\in S$** (so $c(y)=\beta$, $y\notin K$). Suppose for contradiction $\{x,y\}\notin E(G)$. Then $\{x,y\}$ is a non-edge of $G$ with $x,y\in R$ and $c(x)=\alpha\ne\beta=c(y)$, i.e. a shared non-edge; by Fact (ii) it serves the demand $(x,\beta)$. Now $x\in K_\alpha$ has an $M_C$-neighbour $r'\in K_\beta$ with $c(r')=\beta$; by $(\star)$ the demand $(x,c(r'))=(x,\beta)$ lies in $C$ and **all** of its eligible non-edges lie in $C$. The non-edge $\{x,y\}$ is eligible for $(x,\beta)$ (since $y\in T_\beta$, $y\not\sim x$), so $\{x,y\}$ is a non-edge of $C$, hence an $M_C$-edge. Its endpoints are coloured $\alpha$ ($x$) and $\beta$ ($y$), so it is an edge of $M_C^{\alpha\beta}$ incident to $x\in K$. Therefore $y$ lies in the same $M_C^{\alpha\beta}$-component as $x$, namely $K$ — so $y\in K_\beta\subseteq K$. This contradicts $y\notin K$. Hence $\{x,y\}\in E(G)$.

These cases are exhaustive: every element of $T'_\beta$ lies in $P_\beta$, $S$, or $K_\alpha$, and every unordered pair drawn from these three sets is covered (within $P_\beta$: case 1; within $S$ or $P_\beta$–$S$: case 2; within $K_\alpha$: case 4; $K_\alpha$–$P_\beta$: case 3; $K_\alpha$–$S$: case 5). Thus $T'_\beta$ is a clique. By the $\alpha\leftrightarrow\beta$ symmetric argument (using $(\star)$ for $K_\beta$-vertices, which have $M_C$-neighbours in $K_\alpha$), $T'_\alpha$ is a clique. Hence $a'$ is valid.

Finally, $a'$ is a genuine assignment: it never moves a fixed member (it only relabels remaining vertices in $K\subseteq R$), so every core pair $P_\ell$ stays intact. Thus $a'$ and $a$ are two distinct valid assignments, contradicting uniqueness. Hence no all-shared component exists. $\square$

### Lemma L2 (Hall's condition holds)

**Claim.** *In $B$ (parts $D$ and the eligible non-edges), Hall's condition holds: $|N(S)|\ge|S|$ for every $S\subseteq D$.*

We prove the stronger statement that $B$ itself has a matching saturating $D$ (an SDR for $\{\mathcal E(r,j)\}_{(r,j)\in D}$); by **Hall's marriage theorem / SDR** (knowledge_base.md, "Hall's marriage theorem / SDR"), it is equivalent to verify $|N(S)|\ge|S|$ for all $S\subseteq D$. We verify it componentwise.

It suffices to prove that **every connected component of $B$ satisfies $\#(\text{non-edges})\ge\#(\text{demands})$.** Indeed, for $S\subseteq D$, group $S$ by the components of $B$; the neighbourhoods $N(\cdot)$ of demands in different components are disjoint, so $|N(S)|=\sum_{\text{components }C}|N(S\cap C)|$. Within one component $C'$, restricting $B$ to $S\cap C'$ and its neighbourhood is a subgraph; but more simply, since we will show the *full* component $C$ has $\#\text{non-edges}\ge\#\text{demands}$ and each demand has degree $\ge1$ (Lemma L1, non-empty eligible set) we get a saturating matching of all of $D$ component by component, which gives Hall for all $S$ at once. So we prove the component inequality.

Let $C$ be a connected component of $B$ containing at least one demand (a component with no demand is irrelevant). Write
$$L=\#\{\text{demands in }C\},\qquad Re=\#\{\text{non-edges in }C\},\qquad e=\#\{\text{edges of }B\text{ in }C\}.$$
Three counts:

1. **Connectivity.** $C$ is a connected bipartite graph on $L+Re$ vertices, so $e\ge (L+Re)-1$.
2. **Demand degrees.** Each demand has $\deg_B\ge 1$ by Lemma L1 (its eligible set is non-empty), and we need no more here.
3. **Non-edge degrees.** Each non-edge has $\deg_B\le 2$ by Fact (ii). By Lemma L2', the component $C$ contains at least one *private* non-edge (degree $1$). Hence
$$e=\sum_{\text{non-edges }f\in C}\deg_B(f)\le 2Re-1,$$
since at least one of the $Re$ summands is $1$ and the rest are $\le 2$.

Combining 1 and 3:
$$L+Re-1\le e\le 2Re-1\ \Longrightarrow\ L\le Re.$$
Thus every component has $\#\text{non-edges}\ge\#\text{demands}$, with every demand of degree $\ge1$. By Hall's theorem applied within each component, there is a matching saturating all demands in $C$; taking the union over components gives a matching of $B$ saturating $D$, i.e. an SDR. In particular Hall's condition $|N(S)|\ge|S|$ holds for all $S\subseteq D$. $\square$

(The component case $L=Re$ does occur — the bound is tight — but it never gives a deficiency; the only way a deficiency could arise, namely an all-shared tree component with $L=Re+1$, is exactly what Lemma L2' forbids, since such a component would have $e=L+Re-1=2Re$, forcing every non-edge to have degree $2$, contradicting the existence of a private non-edge.)

### Conclusion of the upper bound

By Lemma L2 there is a system of distinct representatives: an injection $\varphi:D\hookrightarrow E(\overline G)$ with $\varphi(r,j)\in\mathcal E(r,j)$. Distinct demands map to distinct non-edges, so
$$|E(\overline G)|\ \ge\ |D|\ =\ k(m-1)\ =\ (n-2m)(m-1).$$
Therefore
$$E=\binom n2-|E(\overline G)|\ \le\ \binom n2-(n-2m)(m-1).\qquad\blacksquare\text{(upper bound)}$$

---

## Part II: Construction attaining the bound

We exhibit a configuration with $E=\binom n2-(n-2m)(m-1)$ satisfying uniqueness.

**Vertices and committees.** Let $R=\{r_1,\dots,r_k\}$ ($k=n-2m$ remaining members) and let the core pairs be $P_1=\{c_1,v_1\},\dots,P_m=\{c_m,v_m\}$. The chair/vice-chair selection we will use is exactly this: cores $P_1,\dots,P_m$, with $R$ remaining.

**Graph $G$.** Specify $G$ by listing its **non-edges** only; all other pairs are edges. The non-edges of $G$ are exactly
$$\bigl\{\,\{r_i,v_j\}\ :\ 1\le i\le k,\ 2\le j\le m\,\bigr\}.$$
(So $r_i$ is *not* adjacent to the vice-chair $v_j$ of each small committee $j\ge 2$; everything else is an edge.) In particular:

- the "big" set $B^{\star}:=P_1\cup R=\{c_1,v_1,r_1,\dots,r_k\}$ induces a complete graph $K_{k+2}$ (none of its pairs is a listed non-edge);
- all $\binom{2m}2$ pairs among the $2m$ core vertices are edges (no core–core pair is listed);
- each $r_i$ is adjacent to every chair $c_j$ and to $v_1$, but not to $v_j$ for $j\ge 2$.

Each core pair $P_j$ is an edge (core–core pairs are edges), so this is a legitimate configuration.

### L3 (uniqueness)

**Claim.** *The unique valid assignment is $a^\star$ given by $a^\star(r_i)=1$ for all $i$; its committees are $T_1=B^\star=K_{k+2}$ and $T_j=P_j$ for $j\ge 2$.*

**Proof.** *Validity of $a^\star$.* $T_1=B^\star$ is a complete graph, hence a clique; for $j\ge2$, $T_j=P_j$ is an edge, hence a clique. So $a^\star$ is valid.

*Uniqueness.* Let $a$ be any valid assignment and fix a remaining vertex $r_i$. Suppose $a(r_i)=j$ for some $j\ge 2$. Then $T_j\supseteq P_j\cup\{r_i\}\ni v_j$, and $T_j$ must be a clique, so $r_i\sim v_j$. But $\{r_i,v_j\}$ is a listed non-edge for $j\ge2$, so $r_i\not\sim v_j$ — contradiction. Hence $a(r_i)\notin\{2,\dots,m\}$, i.e. $a(r_i)=1$ for every $i$. Thus $a=a^\star$. (This uses $m\ge2$, so that the committees $j\ge2$ exist; for $m\ge2$ the argument forces all $r_i$ into committee $1$, and the single resulting assignment is valid.) $\square$

### L4 (edge count)

**Claim.** *$G$ has exactly $k(m-1)$ non-edges, so $E=\binom n2-(n-2m)(m-1)$, attaining the bound.*

**Proof.** The listed non-edges $\{r_i,v_j\}$ with $1\le i\le k$, $2\le j\le m$ are pairwise distinct (each determined by its unique pair $(i,j)$, and the endpoints $r_i$ and $v_j$ are determined since $r_i\in R$, $v_j\in\{v_2,\dots,v_m\}$ are in disjoint vertex sets). Their number is $k\cdot(m-1)$. As these are *all* the non-edges,
$$|E(\overline G)|=k(m-1)=(n-2m)(m-1),\qquad E=\binom n2-(n-2m)(m-1).$$
By the identity of the opening section this equals $\frac{(n-2m)(n-2m+1)}2+m(n-1)$.

(Cross-check by direct edge count: $T_1=K_{k+2}$ has $\binom{k+2}2$ edges; the $m-1$ small committees contribute $m-1$ core edges; the $\binom{2m}{2}-m$ remaining core–core pairs... we instead just trust the non-edge count, which is cleanest: total pairs $\binom n2$ minus $k(m-1)$ non-edges.) $\square$

By Part I, $E\le\binom n2-(n-2m)(m-1)$ for every valid configuration, and Part II exhibits a configuration achieving equality. Hence the maximum number of friend pairs is
$$\boxed{\;\binom{n}{2}-(n-2m)(m-1)\;=\;\frac{(n-2m)(n-2m+1)}{2}+m(n-1).\;}$$
$\blacksquare$
