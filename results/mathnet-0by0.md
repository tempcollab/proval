## Status
solved

## Approaches tried
- Direct equivalence via the PSD common-null-vector lemma: prove 1)⇒2) by extracting a shared kernel vector of the $A_i$ and converting it (via symmetry) to a common *left* null vector of $\sum A_i B_i$; prove 2)⇒1) by contrapositive with the explicit witness $B_i = A_i$ — **worked**, gives a complete rigorous proof.

## Current best
Complete proof (below). The two load-bearing facts are: (i) for real symmetric $A_i$, $v^\top\!\big(\sum_i A_i^2\big)v = \sum_i \|A_iv\|^2$, so a kernel vector $v$ of $M=\sum_i A_i^2$ forces $A_iv=0$ for every $i$; and (ii) by symmetry $A_iv=0 \Rightarrow v^\top A_i = 0$, making $v$ a common left null vector that annihilates $\sum_i A_iB_i$ on the left for *every* choice of $B_i$, hence makes that matrix singular.

## Full proof

Throughout, all matrices and vectors are real. For $x\in\mathbb{R}^n$ write
$\|x\|^2 = x^\top x = \sum_{j=1}^n x_j^2 \ge 0$, with $\|x\| = 0$ if and only if
$x = 0$ (definiteness of the Euclidean norm). Let
$$
M \;=\; A_1^2 + A_2^2 + \cdots + A_k^2 .
$$

### Preliminary identity

**Claim P.** For every $v\in\mathbb{R}^n$,
$$
v^\top M v \;=\; \sum_{i=1}^k \|A_i v\|^2 .
$$

*Proof.* Fix $i$. Since $A_i$ is symmetric, $A_i^\top = A_i$, so $A_i^2 = A_i^\top A_i$. Hence for any $v$,
$$
v^\top A_i^2 v \;=\; v^\top A_i^\top A_i v \;=\; (A_i v)^\top (A_i v) \;=\; \|A_i v\|^2 .
$$
(No complex conjugation is needed because the entries are real, so $(A_iv)^\top$ is the genuine transpose.) Summing over $i=1,\dots,k$ and using $v^\top M v = \sum_i v^\top A_i^2 v$ gives the claim. $\square$

In particular $v^\top M v \ge 0$ for all $v$, i.e. $M$ is positive semidefinite; we use only the identity of Claim P, not this remark.

We now prove $1)\Leftrightarrow 2)$.

---

### Direction $1)\Rightarrow 2)$

Assume $\det(M) = 0$.

**Step 1 (a nonzero kernel vector exists).** A square real matrix has determinant $0$ if and only if it has a nontrivial kernel (kb: *Quadratic forms* — "$\det = 0 \iff$ nontrivial kernel"; equivalently, $\det M = 0$ means the columns of $M$ are linearly dependent, so some nonzero linear combination of them vanishes, which is exactly a nonzero $v$ with $Mv = 0$). Fix such a vector:
$$
v \in \mathbb{R}^n,\qquad v \ne 0,\qquad M v = 0 .
$$

**Step 2 (the key lemma: $v$ is a common right null vector of all $A_i$).**
From $Mv = 0$ we get $v^\top M v = v^\top 0 = 0$. By Claim P,
$$
\sum_{i=1}^k \|A_i v\|^2 \;=\; 0 .
$$
Each summand $\|A_i v\|^2$ is a nonnegative real number, and a sum of finitely many nonnegative reals equals $0$ only when every summand equals $0$ (if some $\|A_{i_0}v\|^2 > 0$, then the sum would be $\ge \|A_{i_0}v\|^2 > 0$, a contradiction). Therefore
$$
\|A_i v\|^2 = 0 \quad\text{for every } i = 1,\dots,k .
$$
By definiteness of the Euclidean norm ($\|x\| = 0 \iff x = 0$), this gives
$$
A_i v = 0 \qquad\text{for every } i = 1,\dots,k. \tag{$\ast$}
$$
Thus the single nonzero vector $v$ lies in $\ker A_i$ for all $i$ (kb: *Symmetric matrices* — "$\sum A_i^2$ singular $\iff$ the $A_i$ share a common null vector"; we have just proved the relevant direction).

**Step 3 (symmetry switch to a common LEFT null vector).**
This is the step where the symmetry of the $A_i$ is essential. Transposing $(\ast)$ and using $A_i^\top = A_i$,
$$
v^\top A_i \;=\; v^\top A_i^\top \;=\; (A_i v)^\top \;=\; 0^\top \;=\; 0 \qquad\text{for every } i. \tag{$\ast\ast$}
$$
So $v^\top$ is a (nonzero) common left null row vector of all the $A_i$.

*Remark on the left-vs-right subtlety.* It is tempting but **wrong** to try to show $\big(\sum_i A_i B_i\big)v = 0$. In the product $A_iB_i$ the matrix $B_i$ sits to the right of $A_i$, so $\big(\sum_i A_iB_i\big)v = \sum_i A_i(B_i v)$ involves $A_i$ applied to $B_iv$, not to $v$, and $B_iv$ need not be a kernel vector; indeed this right action is generically nonzero. The correct route multiplies on the *left*, where $v^\top A_i = 0$ does the work.

**Step 4 (left annihilation of $\sum_i A_i B_i$).**
Let $B_1,\dots,B_k \in \mathcal{M}_n(\mathbb{R})$ be arbitrary. Using $(\ast\ast)$ and linearity of matrix multiplication,
$$
v^\top \Big(\sum_{i=1}^k A_i B_i\Big)
\;=\; \sum_{i=1}^k \big(v^\top A_i\big) B_i
\;=\; \sum_{i=1}^k 0 \cdot B_i
\;=\; 0 .
$$
Hence the nonzero row vector $v^\top$ satisfies $v^\top S = 0$, where $S := \sum_{i=1}^k A_i B_i$.

**Step 5 ($S$ is singular).**
Each $A_i$ and each $B_i$ is $n\times n$, so each product $A_iB_i$ is $n\times n$ and the sum $S = \sum_i A_iB_i$ is an $n\times n$ (square) matrix. From $v^\top S = 0$ with $v \ne 0$ we get, transposing, $S^\top v = (v^\top S)^\top = 0$ with $v \ne 0$; thus $S^\top$ has a nontrivial kernel, so its columns are linearly dependent and $\det(S^\top) = 0$ (kb: *Rank / image / kernel*). Since $\det(S^\top) = \det(S)$ for any square matrix,
$$
\det\Big(\sum_{i=1}^k A_i B_i\Big) \;=\; \det(S) \;=\; \det(S^\top) \;=\; 0 .
$$

Because $B_1,\dots,B_k$ were arbitrary, $\det\big(\sum_i A_iB_i\big) = 0$ for **every** choice of $B_1,\dots,B_k \in \mathcal{M}_n(\mathbb{R})$. This is statement 2). Hence $1)\Rightarrow 2)$.

---

### Direction $2)\Rightarrow 1)$ (contrapositive)

We prove the contrapositive: $\neg 1) \Rightarrow \neg 2)$, i.e. if $\det(M) \ne 0$ then statement 2) fails.

Assume $\det(M) \ne 0$. Choose the explicit witness
$$
B_i = A_i \qquad (i = 1,\dots,k),
$$
which is a legitimate choice since each $A_i \in \mathcal{M}_n(\mathbb{R})$. Then
$$
\sum_{i=1}^k A_i B_i \;=\; \sum_{i=1}^k A_i A_i \;=\; \sum_{i=1}^k A_i^2 \;=\; M ,
$$
so
$$
\det\Big(\sum_{i=1}^k A_i B_i\Big) \;=\; \det(M) \;\ne\; 0 .
$$
Thus there exists a choice of $B_1,\dots,B_k$ with $\det\big(\sum_i A_iB_i\big) \ne 0$, which is precisely the negation of statement 2). Hence $\neg 1) \Rightarrow \neg 2)$, equivalently $2)\Rightarrow 1)$.

---

### Conclusion

We have shown $1)\Rightarrow 2)$ and $2)\Rightarrow 1)$, so the two statements are equivalent. $\blacksquare$

*(Remarks on scope. The argument is uniform in $n \ge 1$ and $k \ge 1$; no casework on their values is needed. If some $A_i = 0$, then $A_i v = 0$ and $v^\top A_i = 0$ hold trivially and the argument is unaffected. The real-field hypothesis is used at exactly one place — Claim P, where $v^\top A_i^\top A_i v = \|A_iv\|^2$ requires the real transpose rather than a conjugate transpose; over $\mathbb{C}$ with the ordinary transpose the identity $v^\top A_i^2 v = \|A_iv\|^2$ would fail.)*
