## Status
solved

## Approaches tried
- Constructive squarefree-encoding (products of distinct primes; divisibility ⇔ prime-support inclusion via FTA), with the decomposition $e = T_m + j$ and an up-set placement of an auxiliary prime $q$ — worked; gives a divisibility graph with exactly $n$ vertices and $e$ edges for every valid $(n,e)$.

## Current best
A complete proof (below). The graph is built as a chain $a_1,\dots,a_m$ (labelled by nested products $p_1\cdots p_i$), one extra vertex $b$ labelled by a fresh prime $q$ which is appended to the top $j$ chain labels, and $n-m-[j>0]$ isolated vertices labelled by fresh primes. Distinctness and the exact edge count $T_m+j=e$ are proved via the Fundamental Theorem of Arithmetic and the infinitude of primes.

## Full proof

### Setup and notation

Recall the definition. A graph $G$ is a *divisibility graph* if its vertices can be assigned **distinct positive integers** $f(\text{vertex})$ such that two vertices labelled $u,v$ are joined by an edge **iff** $\tfrac{u}{v}\in\mathbb{Z}$ or $\tfrac{v}{u}\in\mathbb{Z}$ (equivalently, iff $u\mid v$ or $v\mid u$).

Fix a positive integer $n$ and an integer $e$ with $0\le e\le \binom{n}{2}=\frac{n(n-1)}{2}$. Write
$$T_k=\binom{k}{2}=\frac{k(k-1)}{2}\qquad(k\ge 0),$$
so $T_0=T_1=0$ and $T_{k+1}-T_k=k$ for all $k\ge 0$. Our task is to construct $n$ distinct positive integers whose divisibility graph has exactly $e$ edges.

We will use two standard facts (knowledge base entry *"Comparability / divisibility graphs"*):

- **(FTA-support)** *Fundamental Theorem of Arithmetic.* Every positive integer has a unique factorization into primes. For a **squarefree** positive integer $x$, let $\mathrm{supp}(x)$ denote its set of prime divisors (so $x=\prod_{p\in\mathrm{supp}(x)}p$). For squarefree positive integers $x,y$,
$$x\mid y \iff \mathrm{supp}(x)\subseteq\mathrm{supp}(y).$$
*Proof of (FTA-support).* If $\mathrm{supp}(x)\subseteq\mathrm{supp}(y)$ then $y=x\cdot\prod_{p\in\mathrm{supp}(y)\setminus\mathrm{supp}(x)}p$, an integer multiple of $x$, so $x\mid y$. Conversely, if $x\mid y$ and $p\in\mathrm{supp}(x)$, then $p\mid x\mid y$, so $p\in\mathrm{supp}(y)$ (a prime dividing $y$ lies in its factorization, by uniqueness in FTA); hence $\mathrm{supp}(x)\subseteq\mathrm{supp}(y)$. $\square$

- **(Primes)** *There are infinitely many primes* (Euclid). In particular we may select any finite list of **pairwise distinct** primes we need.

All labels we assign below will be products of distinct primes, hence squarefree, so (FTA-support) applies to every pair of labels.

---

### Lemma L1 (Decomposition $e=T_m+j$ with $0\le j\le m\le n-1$).

Let $m$ be the largest index in $\{0,1,\dots,n-1\}$ with $T_m\le e$, and set $j=e-T_m$. Then $m$ is well defined and
$$0\le j\le m\le n-1.$$

*Proof.* The set $S=\{k\in\{0,\dots,n-1\}:T_k\le e\}$ is nonempty because $T_0=0\le e$ (as $e\ge 0$), and it is finite, so its maximum $m=\max S$ exists; clearly $0\le m\le n-1$. Since $m\in S$ we have $T_m\le e$, so $j=e-T_m\ge 0$.

It remains to show $j\le m$, i.e. $e\le T_m+m=T_{m+1}$ (using $T_{m+1}=T_m+m$). Consider two cases.

*Case A: $m<n-1$.* Then $m+1\in\{0,\dots,n-1\}$, but $m+1\notin S$ by maximality of $m$, so $T_{m+1}>e$. Hence $e\le T_{m+1}-1<T_{m+1}=T_m+m$, giving $j=e-T_m<m$, so $j\le m$.

*Case B: $m=n-1$.* Then $T_m=T_{n-1}\le e\le T_n=\frac{n(n-1)}{2}$ (the upper bound is the hypothesis on $e$). Since $T_n=T_{n-1}+(n-1)=T_m+m$, we get $e\le T_m+m$, i.e. $j=e-T_m\le m$.

In both cases $0\le j\le m\le n-1$. $\square$

Note for later: $m=n-1$ forces, by $T_n=T_m+m$ and $e\le T_n$, the bound $j\le m$; and when $e=T_n$ we get exactly $m=n-1,\ j=n-1$.

We fix $m$ and $j$ as in L1 for the rest of the proof. Set the indicator $\delta=[j>0]\in\{0,1\}$.

---

### The construction.

By (Primes) choose pairwise distinct primes
$$p_1,p_2,\dots,p_m,\quad q\ (\text{only if }j>0),\quad r_1,\dots,r_{\,n-m-\delta},$$
all distinct from one another. (We do **not** introduce $q$ when $j=0$.) This is possible: the total number of distinct primes required is
$$m+\delta+(n-m-\delta)=n,$$
and the count of isolated labels $n-m-\delta\ge 0$ because $m\le n-1$ and $\delta\le 1$ (if $\delta=1$ then $j>0$ so $m\ge j\ge 1$; and if $m=n-1$ and $\delta=1$ then $n-m-\delta=n-(n-1)-1=0$). So $n-m-\delta\ge0$ in all cases, and we may indeed pick $n$ distinct primes.

Define $n$ vertices and their labels $f$:

- **Chain vertices** $a_1,\dots,a_m$:
$$f(a_i)=\begin{cases}p_1p_2\cdots p_i,& 1\le i\le m-j,\\[2pt] (p_1p_2\cdots p_i)\,q,& m-j+1\le i\le m.\end{cases}$$
That is, $q$ is appended to exactly the **top $j$** chain labels (indices $i$ with $i\ge m-j+1$). Since $j\le m$, the threshold $m-j+1\ge 1$ is a valid index, and the number of $q$-carrying chain vertices is $m-(m-j+1)+1=j$.

- **Extra vertex** $b$ (present iff $j>0$): $f(b)=q$.

- **Isolated vertices** $c_1,\dots,c_{\,n-m-\delta}$: $f(c_s)=r_s$.

Every label is a product of distinct primes, hence a squarefree positive integer. The total number of vertices is $m+\delta+(n-m-\delta)=n$, as required.

The prime supports are, explicitly:
$$\mathrm{supp}(f(a_i))=\begin{cases}\{p_1,\dots,p_i\},& i\le m-j,\\ \{p_1,\dots,p_i\}\cup\{q\},& i\ge m-j+1,\end{cases}\quad \mathrm{supp}(f(b))=\{q\},\quad \mathrm{supp}(f(c_s))=\{r_s\}.\tag{$\ast$}$$

---

### Lemma L3 (Distinctness).

The $n$ labels $f(a_1),\dots,f(a_m),\ f(b)\ (\text{if }j>0),\ f(c_1),\dots,f(c_{n-m-\delta})$ are pairwise distinct positive integers.

*Proof.* By (FTA-support) (more precisely, by uniqueness of factorization), two squarefree integers are equal iff they have the same prime support. So it suffices to check that the supports in $(\ast)$ are pairwise distinct. We compare each pair of the four kinds of labels.

1. **Chain vs chain ($a_i$ vs $a_t$, $i<t$).** Both supports contain the chain primes $p_1,\dots,p_i$ but $\mathrm{supp}(f(a_t))$ contains $p_t$ with $t>i$, while $p_t\notin\mathrm{supp}(f(a_i))$ (its chain primes are only $p_1,\dots,p_i$, and $q\ne p_t$). Hence $\mathrm{supp}(f(a_i))\ne\mathrm{supp}(f(a_t))$, so $f(a_i)\ne f(a_t)$. (This also covers the extreme $m-j=0$, where every chain label carries $q$: they still differ by their top chain prime $p_t$; and $m-j=m$, i.e. $j=0$, where none carries $q$.)

2. **Chain vs $b$ (only when $j>0$).** $f(b)=q$ has $\mathrm{supp}=\{q\}$, a singleton not containing any $p_i$. A chain label $f(a_i)$ has $p_1\in\mathrm{supp}(f(a_i))$ (since $i\ge 1$), and $p_1\ne q$, so $p_1\notin\{q\}$. Hence the supports differ and $f(a_i)\ne f(b)$. In particular when $m-j\ge 1$ the lowest no-$q$ chain label is $f(a_1)=p_1$, a single prime; since $q\ne p_1$ this bare prime is still $\ne q=f(b)$.

3. **Chain vs isolated.** $\mathrm{supp}(f(c_s))=\{r_s\}$ with $r_s$ a prime distinct from all $p_i$ and from $q$, hence $r_s\notin\mathrm{supp}(f(a_i))$ for every $i$. As $\mathrm{supp}(f(a_i))\ne\varnothing$ while $\{r_s\}$ contains $r_s\notin\mathrm{supp}(f(a_i))$, the supports differ; so $f(c_s)\ne f(a_i)$.

4. **$b$ vs isolated, and isolated vs isolated.** $f(b)=q\ne r_s$ since $q,r_s$ are distinct primes; and $f(c_s)=r_s\ne r_{s'}=f(c_{s'})$ for $s\ne s'$ since the $r_s$ are distinct primes.

All pairs of supports are distinct, so all $n$ labels are distinct. $\square$

---

### Lemma L4 (Exact edge count $=T_m+j=e$).

In the divisibility graph on these $n$ labels there is an edge between two distinct labels $f(x),f(y)$ **iff** $\mathrm{supp}(f(x))\subseteq\mathrm{supp}(f(y))$ or $\mathrm{supp}(f(y))\subseteq\mathrm{supp}(f(x))$. The total number of edges equals $T_m+j$.

*Proof.* The "iff" criterion is immediate: by definition there is an edge iff $f(x)\mid f(y)$ or $f(y)\mid f(x)$, and by (FTA-support) (all labels squarefree) this is equivalent to one prime support containing the other. We now count edges, going through all $\binom{n}{2}$ unordered pairs of distinct labels by kind. We will both confirm the claimed edges (the "if" direction) and rule out all other pairs (the "only if" direction).

**(a) Chain–chain pairs: exactly $\binom{m}{2}=T_m$ edges.** Take $i<t$. We show $\mathrm{supp}(f(a_i))\subseteq\mathrm{supp}(f(a_t))$, so every such pair is an edge.
- The chain primes nest: $\{p_1,\dots,p_i\}\subseteq\{p_1,\dots,p_t\}$ since $i<t$.
- For $q$: $q\in\mathrm{supp}(f(a_i))$ holds iff $i\ge m-j+1$ (by $(\ast)$). The set of $q$-carrying indices is $\{m-j+1,\dots,m\}$, an **up-set** in $\{1,\dots,m\}$: if $i$ is $q$-carrying then $i\ge m-j+1$, and since $t>i$ also $t\ge m-j+1$, so $t$ is $q$-carrying. Hence whenever $q\in\mathrm{supp}(f(a_i))$ we also have $q\in\mathrm{supp}(f(a_t))$.

Combining, $\mathrm{supp}(f(a_i))\subseteq\mathrm{supp}(f(a_t))$, so $f(a_i)\mid f(a_t)$ and the pair is an edge. There are $\binom{m}{2}=T_m$ unordered pairs $i<t$ among the $m$ chain vertices, so the chain contributes exactly $T_m$ edges. (Crucially, appending $q$ to the **top** $j$ labels — an up-set — preserves support-inclusion along the whole chain, so no chain edge is lost; and since each chain pair is already an edge there is nothing to gain.)

**(b) $b$–chain pairs (only when $j>0$): exactly $j$ edges.** Here $f(b)=q$, $\mathrm{supp}(f(b))=\{q\}$. Compare with $f(a_i)$:
- $\mathrm{supp}(f(b))=\{q\}\subseteq\mathrm{supp}(f(a_i))$ iff $q\in\mathrm{supp}(f(a_i))$ iff $i\ge m-j+1$ (by $(\ast)$). This holds for the $j$ indices $i\in\{m-j+1,\dots,m\}$ (count $m-(m-j+1)+1=j$). For each such $i$ we get $f(b)=q\mid f(a_i)$, an edge.
- For $i<m-j+1$ (a no-$q$ chain label): is the pair an edge? We need $\{q\}\subseteq\mathrm{supp}(f(a_i))$ or $\mathrm{supp}(f(a_i))\subseteq\{q\}$. The first fails since $q\notin\mathrm{supp}(f(a_i))$ (such $a_i$ carries no $q$). The second would require $\mathrm{supp}(f(a_i))\subseteq\{q\}$; but $p_1\in\mathrm{supp}(f(a_i))$ and $p_1\ne q$, so it fails. Hence **no edge** for $i<m-j+1$. (This includes the boundary case where $f(a_i)$ is the bare prime $p_1$: still $p_1\ne q$, so no edge.)

Also note $f(b)=q$ never *contains* a chain label's support nontrivially: $\mathrm{supp}(f(a_i))\subseteq\{q\}$ never holds (shown above), consistent with the above; the $j$ edges all arise from $q\mid f(a_i)$. So $b$ is comparable to exactly $j$ chain vertices, giving exactly $j$ edges.

**(c) Isolated–everything pairs: $0$ edges.** Let $c_s$ be isolated, $\mathrm{supp}(f(c_s))=\{r_s\}$ with $r_s$ a prime appearing in **no other** label's support (it is distinct from all $p_i$, from $q$, and from all $r_{s'}$, $s'\ne s$). For any other label $w$ (chain, $b$, or a different isolated vertex):
- $\{r_s\}\subseteq\mathrm{supp}(w)$ fails, since $r_s\notin\mathrm{supp}(w)$.
- $\mathrm{supp}(w)\subseteq\{r_s\}$ would force $\mathrm{supp}(w)\subseteq\{r_s\}$ with $w$ squarefree; but no other label has support contained in $\{r_s\}$: a chain label contains $p_1\ne r_s$; $f(b)=q\ne r_s$; another isolated $r_{s'}\ne r_s$. So this fails too.

Hence $c_s$ is in no edge: isolated vertices contribute $0$ edges, and there is no $b$–isolated edge ($q\ne r_s$) and no chain–isolated edge.

**Total.** Edges come only from cases (a) and (b); (c) shows every pair involving an isolated vertex is a non-edge, and we have examined every kind of pair. Therefore the total number of edges is
$$\underbrace{T_m}_{\text{(a)}}+\underbrace{j}_{\text{(b)}}+\underbrace{0}_{\text{(c)}}=T_m+j=e,$$
using $e=T_m+j$ from L1. $\square$

---

### Conclusion.

By L3 the $n$ vertices carry $n$ **distinct positive integers**; the edge relation is "$u\mid v$ or $v\mid u$" by construction, so the constructed graph is a divisibility graph on $n$ vertices. By L4 it has exactly $e$ edges. Since $n$ and $e$ (with $0\le e\le\frac{n(n-1)}{2}$) were arbitrary, every such pair $(n,e)$ is realized by a divisibility graph. $\blacksquare$

---

### Verification of the boundary/degenerate cases (covered by the general argument; spelled out for completeness).

- **$e=0$** (so $m=0$, $j=0$, $\delta=0$): no chain, no $q$, $n$ isolated vertices labelled by distinct primes $r_1,\dots,r_n$. By L4(c) there are $0$ edges. Correct: $T_0+0=0=e$.
- **$j=0$, $m\ge1$** ($e=T_m$ triangular): no vertex $b$, no prime $q$; chain $a_1,\dots,a_m$ with labels $p_1,\,p_1p_2,\dots,\,p_1\cdots p_m$ (a clique of $T_m$ edges, L4(a)) plus $n-m$ isolated vertices. Edges $=T_m=e$.
- **$m=1$** ($T_1=0$, so $e\in\{0,1\}$, i.e. $j\in\{0,1\}$): one chain vertex $a_1$. If $j=0$, $f(a_1)=p_1$ and all else isolated, $0$ edges. If $j=1$, $f(a_1)=p_1q$, $f(b)=q$, and $q\mid p_1q$ gives the single edge ($b$–$a_1$); $T_1+1=1=e$.
- **$m=n-1,\ j=n-1$** ($e=T_n$, maximal): all $n-1$ chain labels carry $q$ ($m-j=0$), $f(a_i)=p_1\cdots p_i\,q$, and $f(b)=q$. Then $q=f(b)\mid f(a_1)\mid f(a_2)\mid\cdots\mid f(a_{n-1})$ is a chain of all $n$ vertices (no isolated vertices, since $n-m-\delta=n-(n-1)-1=0$), so every one of the $\binom{n}{2}=T_n$ pairs is comparable: the complete graph $K_n$. By L4, edges $=T_{n-1}+(n-1)=T_n=e$. (Distinctness in this all-$q$ extreme: $f(b)=q$ vs $f(a_1)=p_1q$ differ since $p_1\ne q$ — L3 case 2.)
- **No isolated vertices** ($n-m-\delta=0$): the vertices are exactly the $m$ chain vertices plus $b$ (when $j>0$); L4(c) is vacuous and the count $T_m+j=e$ still holds.

All cases are consistent with the general L3/L4 argument above.
