## Status
solved

## Approaches tried
- Direct constructive existence proof via prime-indexed independent sets — worked. Assign a distinct prime $p_k$ to each set $S_k\subseteq\mathbb{Z}_{\ge1}$ that contains no two consecutive integers, and set $a_n=\prod_{k:\,n\in S_k}p_k$. Choosing the family $\{S_k\}$ so that every non-adjacent index pair shares some $S_k$ while no $S_k$ contains an adjacent pair realizes exactly the required coprimality pattern. Verified computationally ($N=200$): independence, finiteness bound $K(n)\subseteq\{1,\dots,n+2\}$, coverage of all gap-$\ge2$ pairs, and the full iff — all with zero failures.

## Current best
Complete proof below.

## Full proof

**Answer.** Yes, such a sequence exists. We construct one explicitly.

### Setup and notation

Throughout, indices $m,n,k$ range over the positive integers $\mathbb{Z}_{\ge1}$. Let
$$p_1<p_2<p_3<\cdots$$
be the sequence of all prime numbers in increasing order ($p_1=2,p_2=3,\dots$). By **Euclid's theorem** (there are infinitely many primes; knowledge_base.md, "Infinitude of primes"), this sequence is infinite, so $p_k$ is well defined for every $k\ge1$, with $p_k\ge2>1$ and the $p_k$ pairwise distinct.

For each $k\ge1$ we define a set $S_k\subseteq\mathbb{Z}_{\ge1}$ of indices:
$$
\begin{aligned}
S_1 &= \{\,n\ge1 : n\text{ odd}\,\} = \{1,3,5,7,\dots\},\\
S_2 &= \{1\}\cup\{\,n\ge4 : n\text{ even}\,\} = \{1,4,6,8,\dots\},\\
S_3 &= \{\,n\ge1 : n\text{ even}\,\} = \{2,4,6,8,\dots\},\\
S_4 &= \{2\}\cup\{\,n\ge5 : n\text{ odd}\,\} = \{2,5,7,9,\dots\},\\
S_k &= \{\,k-2\,\}\cup\{\,n\ge k+1 : n\equiv k+1\pmod 2\,\}\qquad(k\ge5).
\end{aligned}
$$
For $k\ge5$ we call $k-2$ the **anchor** of $S_k$ and the set $\{n\ge k+1:n\equiv k+1\pmod 2\}$ its **tail**; the tail is an arithmetic progression of step $2$ (a single parity class) starting at $k+1$.

Now define the sequence by
$$
a_n \;=\; \prod_{k\,:\,n\in S_k} p_k \qquad (n\ge1),
$$
with the convention that an empty product equals $1$. We must show: (a) each $a_n$ is a well-defined positive integer; and (b) for all $m\ne n$, $\gcd(a_m,a_n)=1$ if and only if $|m-n|=1$.

The single combinatorial fact driving everything is:

> **Key observation.** For any $m\ne n$ and any prime $q$: $q\mid\gcd(a_m,a_n)$ if and only if $q=p_k$ for some $k$ with $\{m,n\}\subseteq S_k$.

*Proof of Key observation.* By definition $a_n=\prod_{k:n\in S_k}p_k$ is a product of distinct primes (the $p_k$ are distinct), so the set of prime divisors of $a_n$ is exactly $\{p_k : n\in S_k\}$. A prime $q$ divides $\gcd(a_m,a_n)$ iff $q$ divides both $a_m$ and $a_n$, i.e. iff $q\in\{p_k:m\in S_k\}\cap\{p_k:n\in S_k\}=\{p_k:\{m,n\}\subseteq S_k\}$, using that $k\mapsto p_k$ is injective. $\square$

Consequently $\gcd(a_m,a_n)>1$ iff *some* $S_k$ contains both $m$ and $n$; and $\gcd(a_m,a_n)=1$ iff *no* $S_k$ contains both. Thus the whole problem reduces to two statements about the family $\{S_k\}$:

- **Lemma A (independence):** no $S_k$ contains two consecutive integers. (This will give: adjacent indices are coprime.)
- **Lemma B (coverage):** every pair $\{m,n\}$ with $|m-n|\ge2$ is contained in some single $S_k$. (This will give: non-adjacent indices are not coprime.)

We also prove finiteness so that the $a_n$ are genuine positive integers.

### Step 1: Finiteness (each $a_n$ is a well-defined positive integer)

Fix $n\ge1$ and let $K(n)=\{k\ge1 : n\in S_k\}$. We claim
$$K(n)\subseteq\{1,2,\dots,n+2\},$$
so $K(n)$ is finite and $a_n=\prod_{k\in K(n)}p_k$ is a finite product of positive integers, hence a positive integer with $a_n\ge1$.

It suffices to show that for every $k\ge n+3$ we have $n\notin S_k$. Since $n\ge1$ we have $k\ge n+3\ge4$, so $k\in\{4\}\cup\{k\ge5\}$; we treat the two cases.

*Case $k=4$.* This occurs only when $n=1$ (as $k\ge n+3$ forces $n\le1$). Here $S_4=\{2\}\cup\{m\ge5:m\text{ odd}\}$, and $1\ne2$ while $1$ is odd but $1<5$, so $1\notin S_4$.

*Case $k\ge5$.* Here $S_k=\{k-2\}\cup(\text{tail starting at }k+1)$. Now:

- $n$ is not the anchor: $k-2\ge (n+3)-2=n+1>n$, so $n\ne k-2$.
- $n$ is not in the tail: every tail element is $\ge k+1\ge n+4>n$, so $n$ is smaller than every tail element.

Hence $n\notin S_k$ for all $k\ge n+3$, proving $K(n)\subseteq\{1,\dots,n+2\}$. (This bound was verified computationally for all $n\le200$, zero violations.) Therefore each $a_n$ is a well-defined positive integer. $\square$

### Step 2: Lemma A (independence) — no $S_k$ contains two consecutive integers

We check each family. The pattern is: each $S_k$ is a single fixed-parity arithmetic progression of step $2$, possibly together with one extra "anchor" point; within a step-$2$ progression consecutive elements differ by exactly $2$, and the anchor (when present) differs from the nearest progression element by at least $2$ and lies in the opposite parity class.

Suppose for contradiction some $S_k$ contains two consecutive integers $j,j+1$.

**$S_1$ and $S_3$.** $S_1$ consists entirely of odd integers and $S_3$ entirely of even integers. Two consecutive integers $j,j+1$ have opposite parity, so they cannot both be odd (contradicting $\{j,j+1\}\subseteq S_1$) nor both even (contradicting $\{j,j+1\}\subseteq S_3$). So neither $S_1$ nor $S_3$ contains consecutive integers.

**$S_2=\{1\}\cup\{4,6,8,\dots\}$.** All elements except $1$ are even and $\ge4$. The element $1$ has neighbors $0\notin\mathbb{Z}_{\ge1}$ (excluded) and $2$; but $2\notin S_2$ (the even part starts at $4$). So $1$ is not adjacent in $S_2$ to any element. Two elements both from the even part $\{4,6,8,\dots\}$ are both even, hence not consecutive (consecutive integers have opposite parity). So $S_2$ contains no consecutive pair.

**$S_4=\{2\}\cup\{5,7,9,\dots\}$.** All elements except $2$ are odd and $\ge5$. The element $2$ has neighbors $1$ and $3$; neither is in $S_4$ ($1$ is not, and the odd part starts at $5$ so $3\notin S_4$). Two elements both from the odd part $\{5,7,9,\dots\}$ are both odd, hence not consecutive. So $S_4$ contains no consecutive pair.

**$S_k$, $k\ge5$.** Here $S_k=\{k-2\}\cup T$ with $T=\{n\ge k+1:n\equiv k+1\pmod2\}$. The tail $T$ is a single parity class (all $\equiv k+1\pmod2$), so any two of its elements have the same parity and thus cannot be consecutive. The anchor $a:=k-2$ satisfies $a\equiv k\equiv (k+1)+1\pmod2$, i.e. the anchor has parity opposite to the tail; hence the anchor is distinct from every tail element and, being of the opposite parity, the only way it could be consecutive to a tail element $t$ is $|a-t|=1$. But every tail element $t\ge k+1$, while $a=k-2$, so
$$t-a\ge (k+1)-(k-2)=3>1,$$
so the anchor is not consecutive to any tail element. And the anchor cannot be consecutive to itself. So $S_k$ contains no consecutive pair.

This exhausts all $k$, so **no $S_k$ contains two consecutive integers.** (Verified computationally for all $k\le205$, $n\le200$, zero failures.) $\square$

### Step 3: Adjacent indices are coprime

Let $n\ge1$. By Lemma A, no $S_k$ contains both $n$ and $n+1$. By the Key observation, no prime divides $\gcd(a_n,a_{n+1})$; since the only positive integer with no prime divisor is $1$, we get
$$\gcd(a_n,a_{n+1})=1.$$
More generally, if $|m-n|=1$ then $\{m,n\}=\{n',n'+1\}$ for $n'=\min(m,n)$, so $\gcd(a_m,a_n)=1$. This proves the "$\Leftarrow$" direction: $|m-n|=1\Rightarrow\gcd(a_m,a_n)=1$. $\square$

### Step 4: Lemma B (coverage) — non-adjacent indices share a set

**Claim.** For every pair of indices $m<n$ with $n-m\ge2$, there exists $k$ with $\{m,n\}\subseteq S_k$.

We split into five cases according to the parity of $n-m$ and (in the odd case) the value of $m$. We first record that the cases are **exhaustive and the split is complete**:
- If $m,n$ have the **same parity**, then $n-m$ is even (and $\ge2$): Cases 1–2 (subdivided by whether they are both odd or both even).
- If $m,n$ have **opposite parity**, then $n-m$ is odd; since $n-m\ge2$ and $n-m$ is odd, in fact $n-m\ge3$. We subdivide on $m$: $m=1$ (Case 3), $m=2$ (Case 4), or $m\ge3$ (Case 5).

These options ($m,n$ same parity / opposite parity, and within opposite parity $m\in\{1\}$, $m\in\{2\}$, $m\ge3$) are mutually exclusive and cover all pairs with $n-m\ge2$.

**Case 1 ($n-m$ even, $m,n$ both odd).** Since $m,n$ are odd, $m,n\in S_1=\{$odd$\}$. Take $k=1$: $\{m,n\}\subseteq S_1$.

**Case 2 ($n-m$ even, $m,n$ both even).** Since $m,n$ are even, $m,n\in S_3=\{$even$\}$. Take $k=3$: $\{m,n\}\subseteq S_3$.

(In Cases 1–2, $n-m$ even forces $m,n$ to share a parity, and exactly one of "both odd" / "both even" holds; conversely if $m,n$ share a parity then $n-m$ is even. So Cases 1–2 are precisely the same-parity pairs.)

**Case 3 ($n-m$ odd, $m=1$).** Since $m=1$ and $n-m$ is odd, $n=1+(n-m)$ is $1+\text{odd}=$ even. Also $n=m+(n-m)\ge1+3=4$. Thus $n$ is even and $\ge4$, so $n\in S_2=\{1\}\cup\{$even $\ge4\}$. Also $m=1\in S_2$. Take $k=2$: $\{1,n\}\subseteq S_2$.

(Note: we must use the bespoke $S_2$ here, not a "generic" rule. The set $S_3=\{$even$\}$ does not contain $m=1$, and the anchor convention $S_k=\{k-2\}\cup\cdots$ is defined only for $k\ge5$, so $k=m+2=3$ would not apply. This is exactly why $S_2$ is defined separately.)

**Case 4 ($n-m$ odd, $m=2$).** Since $m=2$ and $n-m$ is odd, $n=2+\text{odd}=$ odd. Also $n\ge m+3=5$. Thus $n$ is odd and $\ge5$, so $n\in S_4=\{2\}\cup\{$odd $\ge5\}$. Also $m=2\in S_4$. Take $k=4$: $\{2,n\}\subseteq S_4$.

(As above, $S_4$ is needed because $S_1=\{$odd$\}$ does not contain $m=2$, and the generic anchor rule starts only at $k\ge5$.)

**Case 5 ($n-m$ odd, $m\ge3$).** Take $k=m+2$. Since $m\ge3$, we have $k=m+2\ge5$, so $S_k=\{k-2\}\cup\{n'\ge k+1:n'\equiv k+1\pmod2\}$ with anchor $k-2=m$ and tail starting at $k+1=m+3$.

- $m\in S_k$: indeed $m=k-2$ is the anchor of $S_k$.
- $n\in S_k$: we show $n$ is in the tail. First the parity. Since $n-m$ is odd, $n\equiv m+1\pmod2$. Now $k=m+2$, so $m\equiv k\pmod2$ and hence $k+1\equiv m+1\equiv n\pmod2$; that is, $n\equiv k+1\pmod2$, the correct tail parity. Second the size. Because $n-m$ is odd and $n-m\ge2$, in fact $n-m\ge3$, so
$$n\ge m+3=(m+2)+1=k+1,$$
the tail's starting bound. Therefore $n\ge k+1$ and $n\equiv k+1\pmod2$, so $n$ lies in the tail of $S_k$.

Hence $\{m,n\}\subseteq S_{m+2}$.

This completes all five cases, proving Lemma B. (All five branches, using the specific $k$ named in each case, were verified for every pair $m<n$ with $n-m\ge2$ and $n\le200$ — zero failures.) $\square$

### Step 5: Non-adjacent indices are not coprime

Let $m,n$ be distinct indices with $|m-n|\ge2$; write $\{m,n\}=\{m',n'\}$ with $m'<n'$, so $n'-m'\ge2$. By Lemma B there is a $k$ with $\{m',n'\}\subseteq S_k$, i.e. both $m$ and $n$ lie in $S_k$. By the Key observation, $p_k\mid\gcd(a_m,a_n)$. Since $p_k\ge2$,
$$\gcd(a_m,a_n)\ge p_k\ge2>1.$$
Thus $\gcd(a_m,a_n)\ne1$.

Taking the contrapositive: if $\gcd(a_m,a_n)=1$ (with $m\ne n$), then $|m-n|<2$, i.e. $|m-n|=1$ (as $m\ne n$ forces $|m-n|\ge1$). This proves the "$\Rightarrow$" direction: $\gcd(a_m,a_n)=1\Rightarrow|m-n|=1$. $\square$

### Step 6: Conclusion

Combining Steps 3 and 5: for all distinct indices $m,n$,
$$\gcd(a_m,a_n)=1 \quad\Longleftrightarrow\quad |m-n|=1.$$
Indeed, Step 3 gives the implication "$|m-n|=1\Rightarrow\gcd=1$", and Step 5 gives the implication "$\gcd=1\Rightarrow|m-n|=1$" (equivalently, "$|m-n|\ne1\Rightarrow\gcd\ne1$").

By Step 1 each $a_n$ is a positive integer, so $(a_n)_{n\ge1}$ is a sequence of positive integers with the required property. Therefore such a sequence **exists**. $\blacksquare$

### Remark (a concrete glance)

To make the construction tangible, the first few index-membership sets $K(n)=\{k:n\in S_k\}$ are
$$K(1)=\{1,2\},\ K(2)=\{3,4\},\ K(3)=\{1,5\},\ K(4)=\{2,3,6\},\ K(5)=\{1,4,7\},\dots$$
giving $a_1=p_1p_2=2\cdot3=6$, $a_2=p_3p_4=5\cdot7=35$, $a_3=p_1p_5=2\cdot11=22$, $a_4=p_2p_3p_6=3\cdot5\cdot13=195$, $a_5=p_1p_4p_7=2\cdot7\cdot17=238$. One checks directly e.g. $\gcd(a_1,a_2)=\gcd(6,35)=1$ (adjacent), $\gcd(a_1,a_3)=\gcd(6,22)=2>1$ (gap $2$, shared prime $p_1=2$), $\gcd(a_2,a_4)=\gcd(35,195)=5>1$ (gap $2$, shared prime $p_3=5$), consistent with the iff.
