## Status
solved

## Approaches tried
- Minimal-polynomial reduction (knowledge_base.md, "Minimal-polynomial reduction", Algebra & Polynomials) — worked. Rewrite the hypothesis as x^3 = 8 - 4x and iterate the substitution to reduce x^4, x^5, x^6, x^7 to polynomials of degree ≤ 2 in x. The degree-2 (64x^2) terms cancel exactly, giving x^7 + 64x^2 = 128 for every root, with no need to find x in closed form.

## Current best
The full proof below is complete: x^7 + 64x^2 = 128.

## Full proof

**Problem.** Let x be a real number with x^3 + 4x = 8. Determine x^7 + 64x^2.

**Answer.** x^7 + 64x^2 = 128.

### Step 0: Well-posedness — there is exactly one real x satisfying the hypothesis.

Define f(x) = x^3 + 4x - 8. The hypothesis x^3 + 4x = 8 is equivalent to f(x) = 0. Since f is a polynomial, it is differentiable on all of R, with
  f'(x) = 3x^2 + 4.
For every real x we have 3x^2 >= 0, hence f'(x) = 3x^2 + 4 >= 4 > 0. Thus f is strictly increasing on R, so it is injective and takes each value at most once; in particular f has at most one real root. On the other hand f is continuous with f(0) = -8 < 0 and f(2) = 8 + 8 - 8 = 8 > 0, so by the Intermediate Value Theorem f has a root in (0, 2). Therefore f has **exactly one** real root, and the problem is well-posed: there is a unique real number x with x^3 + 4x = 8. (Numerically this root is x ≈ 1.36466.)

We now compute x^7 + 64x^2 for this x. We never use the closed form of x; we use only the defining relation, so the computation is valid for whichever real x satisfies the hypothesis.

### Step 1: Rearrange the hypothesis.

From x^3 + 4x = 8 we obtain, by subtracting 4x from both sides,
  x^3 = 8 - 4x.    (★)
This identity is the reduction relation: wherever an x^3 appears, we may replace it by 8 - 4x. We use it as the minimal-polynomial reduction relation (knowledge_base.md, "Minimal-polynomial reduction").

### Step 2: Reduce successive powers of x to degree ≤ 2.

At each step we multiply the previous power by x, then replace every occurrence of x^3 using (★).

**Compute x^4.** Multiply (★) by x:
  x^4 = x · x^3 = x(8 - 4x) = 8x - 4x^2.
So
  x^4 = -4x^2 + 8x.    (1)

**Compute x^5.** Multiply (1) by x:
  x^5 = x · x^4 = x(-4x^2 + 8x) = -4x^3 + 8x^2.
Now substitute x^3 = 8 - 4x from (★) into the -4x^3 term:
  -4x^3 = -4(8 - 4x) = -32 + 16x,
hence
  x^5 = (-32 + 16x) + 8x^2 = 8x^2 + 16x - 32.    (2)

**Compute x^6.** Multiply (2) by x:
  x^6 = x · x^5 = x(8x^2 + 16x - 32) = 8x^3 + 16x^2 - 32x.
Substitute x^3 = 8 - 4x into the 8x^3 term:
  8x^3 = 8(8 - 4x) = 64 - 32x,
hence
  x^6 = (64 - 32x) + 16x^2 - 32x = 16x^2 - 64x + 64.    (3)

**Compute x^7.** Multiply (3) by x:
  x^7 = x · x^6 = x(16x^2 - 64x + 64) = 16x^3 - 64x^2 + 64x.
Substitute x^3 = 8 - 4x into the 16x^3 term:
  16x^3 = 16(8 - 4x) = 128 - 64x,
hence
  x^7 = (128 - 64x) - 64x^2 + 64x = 128 - 64x^2.    (4)

(The two +64x and -64x terms in (4) cancel, leaving exactly 128 - 64x^2.)

### Step 3: Form x^7 + 64x^2.

Add 64x^2 to both sides of (4):
  x^7 + 64x^2 = (128 - 64x^2) + 64x^2 = 128.

Every step above is an exact algebraic identity that follows from (★) alone, so the result holds for the (unique) real x with x^3 + 4x = 8. Therefore

  x^7 + 64x^2 = 128.

### Step 4: Verification.

*Symbolic verification.* Identity (4), x^7 = 128 - 64x^2, is itself the verification: combined with adding 64x^2 it gives the value 128 exactly, with no dependence on the irrational value of x. We may also cross-check (4) by expressing x^7 a different way. From (1), x^4 = -4x^2 + 8x; from (3), x^6 = 16x^2 - 64x + 64. Then
  x^7 = x^4 · x^3 = (-4x^2 + 8x)(8 - 4x) = -32x^2 + 16x^3 + 64x - 32x^2 = 16x^3 - 64x^2 + 64x,
and substituting 16x^3 = 16(8 - 4x) = 128 - 64x gives x^7 = 128 - 64x^2, in agreement with (4). (Here we used (★) once: 16x^3 = 128 - 64x.)

*Numerical verification.* The unique real root, found by bisection of f(x) = x^3 + 4x - 8 on [1, 2], is x ≈ 1.3646556076560388, for which f(x) ≈ 1.8×10^-15 (machine zero). Direct evaluation gives
  x^7 + 64x^2 ≈ 128.0000000000000,
matching the exact answer 128 to full double precision.

Hence the required value is

  x^7 + 64x^2 = 128.  ∎
