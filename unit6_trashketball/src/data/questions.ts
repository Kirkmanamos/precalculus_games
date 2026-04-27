import type { Question } from './types';

/**
 * Question bank for Unit 6 (sections 6.1–6.4).
 * Source: Study Guide (6.1–6.4) + Unit 6 Test Version B.
 *
 * Difficulty maps to the original board point values:
 *   easy   → 100/200
 *   medium → 300/400
 *   hard   → 500
 */
export const QUESTIONS: Question[] = [
  // ── 6.1 · Sequences & Recursion ────────────────────────────────────────
  {
    id: 1,
    category: 'Sequences & Recursion',
    difficulty: 'easy',
    question: 'Write the first four terms of the sequence $a_n = 2n^2 - 1$.',
    answer: '$a_1 = 1,\\ a_2 = 7,\\ a_3 = 17,\\ a_4 = 31$',
    hint: 'Substitute $n = 1, 2, 3, 4$ into the explicit formula.',
  },
  {
    id: 2,
    category: 'Sequences & Recursion',
    difficulty: 'easy',
    question:
      'Write the first four terms of the recursive sequence $a_1 = 4,\\ a_{n+1} = 2 a_n - 3$.',
    answer: '$a_1 = 4,\\ a_2 = 5,\\ a_3 = 7,\\ a_4 = 11$',
    hint: 'Each term doubles the previous one and then subtracts 3.',
  },
  {
    id: 3,
    category: 'Sequences & Recursion',
    difficulty: 'medium',
    question: 'Find an explicit formula for the sequence $3,\\ 8,\\ 15,\\ 24,\\ \\dots$',
    answer: '$a_n = n^2 + 2n$',
    hint: 'Equivalent forms: $n(n+2)$ or $(n+1)^2 - 1$.',
  },
  {
    id: 4,
    category: 'Sequences & Recursion',
    difficulty: 'medium',
    question:
      'Write the first four terms of the recursive sequence $a_1 = 2,\\ a_{n+1} = a_n + 3 n$.',
    answer: '$a_1 = 2,\\ a_2 = 5,\\ a_3 = 11,\\ a_4 = 20$',
    hint: '$a_2 = 2 + 3(1),\\ a_3 = 5 + 3(2),\\ a_4 = 11 + 3(3)$.',
  },
  {
    id: 5,
    category: 'Sequences & Recursion',
    difficulty: 'hard',
    question:
      'A sequence is defined by $a_1 = 3$ and $a_{n+1} = 2 a_n + 5$. Find $a_4$.',
    answer: '$a_4 = 59$',
    hint: '$a_2 = 11,\\ a_3 = 27,\\ a_4 = 59$.',
  },

  // ── 6.1 · Factorials & Sigma Notation ──────────────────────────────────
  {
    id: 6,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Simplify $\\dfrac{8!}{6!}$.',
    answer: '$56$',
    hint: 'Expand only what cancels: $\\dfrac{8 \\cdot 7 \\cdot 6!}{6!} = 56$.',
  },
  {
    id: 7,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Evaluate $\\displaystyle \\sum_{k=2}^{5}(k^2 - 1)$.',
    answer: '$50$',
    hint: '$3 + 8 + 15 + 24 = 50$.',
  },
  {
    id: 8,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Write the sum $4 + 7 + 10 + 13 + 16$ in sigma notation.',
    answer: '$\\displaystyle\\sum_{n=1}^{5}(3 n + 1)$',
    hint: 'Common difference $3$, first term $4$, so $a_n = 3n + 1$.',
  },
  {
    id: 9,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Simplify $\\dfrac{(n + 4)!}{(n + 1)!}$.',
    answer: '$(n + 2)(n + 3)(n + 4)$',
    hint: '$(n+4)! = (n+4)(n+3)(n+2)(n+1)!$; the $(n+1)!$ cancels.',
  },
  {
    id: 10,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question: 'Evaluate $\\displaystyle \\sum_{n=1}^{5}\\dfrac{(n+3)!}{(n+2)!}$.',
    answer: '$30$',
    hint: '$\\dfrac{(n+3)!}{(n+2)!} = n + 3$, so the sum is $4 + 5 + 6 + 7 + 8 = 30$.',
  },

  // ── 6.2 · Arithmetic Sequences & Series ────────────────────────────────
  {
    id: 11,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'easy',
    question: 'Find the common difference of $11,\\ 6,\\ 1,\\ -4,\\ \\dots$',
    answer: '$d = -5$',
    hint: 'Subtract any term from the next: $6 - 11 = -5$.',
  },
  {
    id: 12,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'easy',
    question:
      'An arithmetic sequence has $a_1 = 22$ and $d = -5$. Find $a_8$.',
    answer: '$a_8 = -13$',
    hint: '$a_8 = 22 + 7(-5) = -13$.',
  },
  {
    id: 13,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'medium',
    question: 'Insert two arithmetic means between $12$ and $27$.',
    answer: '$17$ and $22$',
    hint: 'Three equal jumps: $d = \\dfrac{27 - 12}{3} = 5$.',
  },
  {
    id: 14,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'medium',
    question:
      'Find the sum of the first $20$ terms of $5,\\ 9,\\ 13,\\ \\dots$',
    answer: '$S_{20} = 860$',
    hint:
      '$a_{20} = 5 + 19(4) = 81$ and $S_{20} = \\dfrac{20}{2}(5 + 81) = 860$.',
  },
  {
    id: 15,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'hard',
    question:
      'A theater has $14$ seats in row $1$, $19$ in row $2$, $24$ in row $3$, and so on. With $12$ rows, how many seats total?',
    answer: '$498$ seats',
    hint:
      'Arithmetic: $a_1 = 14,\\ d = 5$. $a_{12} = 69$; $S_{12} = \\dfrac{12}{2}(14 + 69) = 498$.',
  },

  // ── 6.3 · Geometric Sequences & Series ─────────────────────────────────
  {
    id: 16,
    category: 'Geometric Sequences & Series',
    difficulty: 'easy',
    question: 'Find the common ratio of $81,\\ 27,\\ 9,\\ 3,\\ \\dots$',
    answer: '$r = \\dfrac{1}{3}$',
    hint: 'Divide any term by the previous one: $\\dfrac{27}{81} = \\dfrac{1}{3}$.',
  },
  {
    id: 17,
    category: 'Geometric Sequences & Series',
    difficulty: 'easy',
    question:
      'A geometric sequence has $a_1 = 3$ and $r = 2$. Which term equals $384$?',
    answer: 'The $8\\text{th}$ term',
    hint: '$3 \\cdot 2^{n-1} = 384 \\Rightarrow 2^{n-1} = 128 = 2^7$, so $n = 8$.',
  },
  {
    id: 18,
    category: 'Geometric Sequences & Series',
    difficulty: 'medium',
    question: 'Insert three geometric means between $2$ and $162$.',
    answer: '$6,\\ 18,\\ 54$',
    hint: 'Four ratio jumps: $r^4 = \\dfrac{162}{2} = 81 \\Rightarrow r = 3$.',
  },
  {
    id: 19,
    category: 'Geometric Sequences & Series',
    difficulty: 'medium',
    question:
      'Find the sum of the first $6$ terms of $3,\\ 6,\\ 12,\\ \\dots$',
    answer: '$S_6 = 189$',
    hint: '$a_1 = 3,\\ r = 2$, so $S_6 = \\dfrac{3(1 - 2^6)}{1 - 2} = 189$.',
  },
  {
    id: 20,
    category: 'Geometric Sequences & Series',
    difficulty: 'hard',
    question:
      'Does $24 - 8 + \\dfrac{8}{3} - \\dfrac{8}{9} + \\cdots$ converge? If so, find $S_\\infty$.',
    answer: 'Converges; $S_\\infty = 18$',
    hint:
      '$a_1 = 24,\\ r = -\\dfrac{1}{3}$. $|r| < 1$, so $S_\\infty = \\dfrac{24}{1 - (-1/3)} = 18$.',
  },

  // ── 6.4 · Pascal, Combinations & Binomial Theorem ──────────────────────
  {
    id: 21,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'easy',
    question: 'How many terms are in the expansion of $(x + 2)^8$?',
    answer: '$9$ terms',
    hint: '$(a + b)^n$ has $n + 1$ terms.',
  },
  {
    id: 22,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'easy',
    question: 'Evaluate $\\dbinom{7}{3}$.',
    answer: '$35$',
    hint: '$\\dfrac{7!}{3!\\,4!} = \\dfrac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$.',
  },
  {
    id: 23,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'medium',
    question: "Use Pascal's Triangle to expand $(x + 1)^4$.",
    answer: '$x^4 + 4 x^3 + 6 x^2 + 4 x + 1$',
    hint: "Row $4$ of Pascal's Triangle: $1,\\ 4,\\ 6,\\ 4,\\ 1$.",
  },
  {
    id: 24,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'medium',
    question: 'Find the fourth term in the expansion of $(x - 3 y)^6$.',
    answer: '$-540\\, x^3 y^3$',
    hint:
      'Use $r = 3$: $T_4 = \\dbinom{6}{3} x^3 (-3y)^3 = 20 \\cdot (-27) \\, x^3 y^3$.',
  },
  {
    id: 25,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'hard',
    question:
      'Find the coefficient of $x^4 y^{12}$ in the expansion of $(2 x - 3 y^3)^{8}$.',
    answer: '$90{,}720$',
    hint:
      '$k = 4$: $\\dbinom{8}{4} = 70$, $2^4 = 16$, $(-3)^4 = 81$; product is $90{,}720$.',
  },

  // ── 6.1 · Sequences & Recursion (extended) ─────────────────────────────
  {
    id: 26,
    category: 'Sequences & Recursion',
    difficulty: 'easy',
    question: 'Write the first four terms of the sequence $a_n = n^2 + 3$.',
    answer: '$a_1 = 4,\\ a_2 = 7,\\ a_3 = 12,\\ a_4 = 19$',
    hint: 'Substitute $n = 1, 2, 3, 4$ into the explicit formula.',
  },
  {
    id: 27,
    category: 'Sequences & Recursion',
    difficulty: 'medium',
    question: 'Find an explicit formula for the sequence $-1,\\ 2,\\ 7,\\ 14,\\ 23,\\ \\dots$',
    answer: '$a_n = n^2 - 2$',
    hint: 'First differences $3, 5, 7, 9$; second differences are constant, so $a_n$ is quadratic.',
  },
  {
    id: 28,
    category: 'Sequences & Recursion',
    difficulty: 'medium',
    question:
      'Write the first four terms of the recursive sequence $a_1 = 2,\\ a_{n+1} = 3 a_n - 2$.',
    answer: '$a_1 = 2,\\ a_2 = 4,\\ a_3 = 10,\\ a_4 = 28$',
    hint: '$a_2 = 3(2) - 2,\\ a_3 = 3(4) - 2,\\ a_4 = 3(10) - 2$.',
  },
  {
    id: 29,
    category: 'Sequences & Recursion',
    difficulty: 'hard',
    question:
      'A sequence is defined by $a_1 = 1,\\ a_2 = 3$, and $a_{n+2} = a_{n+1} + 2 a_n$. Find $a_5$.',
    answer: '$a_5 = 21$',
    hint: '$a_3 = 3 + 2(1) = 5,\\ a_4 = 5 + 2(3) = 11,\\ a_5 = 11 + 2(5) = 21$.',
  },
  {
    id: 30,
    category: 'Sequences & Recursion',
    difficulty: 'hard',
    question:
      'A sequence has values $a_1 = 5,\\ a_2 = 11,\\ a_3 = 21,\\ a_4 = 35$. Find an explicit formula for $a_n$.',
    answer: '$a_n = 2 n^2 + 3$',
    hint:
      'First differences $6, 10, 14$; second differences are constant ($4$), so $a_n$ is quadratic with leading coefficient $2$.',
  },

  // ── 6.1 · Factorials & Sigma Notation (extended) ───────────────────────
  {
    id: 31,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Evaluate $\\displaystyle \\sum_{k=1}^{4} 2 k$.',
    answer: '$20$',
    hint: '$2 + 4 + 6 + 8 = 20$.',
  },
  {
    id: 32,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Write the sum $5 + 10 + 15 + 20 + 25 + 30$ in sigma notation.',
    answer: '$\\displaystyle\\sum_{k=1}^{6} 5 k$',
    hint: 'Each term is a multiple of $5$: $a_k = 5k$ for $k = 1, \\dots, 6$.',
  },
  {
    id: 33,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Simplify $\\dfrac{(n + 1)!}{(n - 1)!}$.',
    answer: '$n(n + 1)$',
    hint: '$(n+1)! = (n+1)(n)(n-1)!$; the $(n-1)!$ cancels.',
  },
  {
    id: 34,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question: 'Evaluate $\\displaystyle \\sum_{k=3}^{6}(2 k^2 - 1)$.',
    answer: '$168$',
    hint: '$17 + 31 + 49 + 71 = 168$.',
  },
  {
    id: 35,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question: 'Solve for the positive integer $n$: $\\dfrac{(n + 1)!}{(n - 1)!} = 42$.',
    answer: '$n = 6$',
    hint: '$(n+1)n = 42 \\Rightarrow n^2 + n - 42 = 0 \\Rightarrow (n - 6)(n + 7) = 0$.',
  },

  // ── 6.2 · Arithmetic Sequences & Series (extended) ─────────────────────
  {
    id: 36,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'easy',
    question: 'Find the common difference of $-7,\\ -2,\\ 3,\\ 8,\\ \\dots$',
    answer: '$d = 5$',
    hint: 'Subtract any term from the next: $-2 - (-7) = 5$.',
  },
  {
    id: 37,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'medium',
    question:
      'An arithmetic sequence has $a_5 = 19$ and $a_{12} = 54$. Find $a_1$ and $d$.',
    answer: '$a_1 = -1,\\ d = 5$',
    hint: '$d = \\dfrac{54 - 19}{12 - 5} = 5$; then $19 = a_1 + 4(5) \\Rightarrow a_1 = -1$.',
  },
  {
    id: 38,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'medium',
    question:
      'In an arithmetic sequence with $a_1 = 7$ and $d = 4$, which term equals $79$?',
    answer: 'The $19\\text{th}$ term',
    hint: '$79 = 7 + (n - 1)(4) \\Rightarrow n - 1 = 18 \\Rightarrow n = 19$.',
  },
  {
    id: 39,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'hard',
    question:
      'Find the sum of the first $30$ terms of the arithmetic series with $a_1 = -8$ and $d = 3$.',
    answer: '$S_{30} = 1{,}065$',
    hint: '$a_{30} = -8 + 29(3) = 79$; $S_{30} = \\dfrac{30}{2}(-8 + 79) = 1{,}065$.',
  },
  {
    id: 40,
    category: 'Arithmetic Sequences & Series',
    difficulty: 'hard',
    question:
      'A teacher’s salary starts at $\\$48{,}000$ and increases by $\\$2{,}500$ each year. What are the total earnings over the first $10$ years?',
    answer: '$\\$592{,}500$',
    hint:
      'Arithmetic: $a_1 = 48{,}000,\\ d = 2{,}500$. $a_{10} = 70{,}500$; $S_{10} = \\dfrac{10}{2}(48{,}000 + 70{,}500) = 592{,}500$.',
  },

  // ── 6.3 · Geometric Sequences & Series (extended) ──────────────────────
  {
    id: 41,
    category: 'Geometric Sequences & Series',
    difficulty: 'easy',
    question: 'Find the common ratio of $4,\\ 12,\\ 36,\\ 108,\\ \\dots$',
    answer: '$r = 3$',
    hint: 'Divide any term by the previous one: $\\dfrac{12}{4} = 3$.',
  },
  {
    id: 42,
    category: 'Geometric Sequences & Series',
    difficulty: 'medium',
    question:
      'A geometric sequence has $a_2 = 6$ and $a_5 = -48$. Find $a_1$ and $r$.',
    answer: '$a_1 = -3,\\ r = -2$',
    hint:
      '$\\dfrac{a_5}{a_2} = r^3 = \\dfrac{-48}{6} = -8 \\Rightarrow r = -2$; then $a_1 = \\dfrac{a_2}{r} = -3$.',
  },
  {
    id: 43,
    category: 'Geometric Sequences & Series',
    difficulty: 'medium',
    question:
      'A car worth $\\$24{,}000$ depreciates by $15\\%$ each year. What is its value after $6$ years (round to the nearest dollar)?',
    answer: '$\\approx \\$9{,}052$',
    hint: '$V = 24{,}000(0.85)^6 \\approx 24{,}000 \\cdot 0.3771 \\approx 9{,}052$.',
  },
  {
    id: 44,
    category: 'Geometric Sequences & Series',
    difficulty: 'hard',
    question:
      'Find the sum of the first $8$ terms of the geometric series $1 - 2 + 4 - 8 + \\cdots$',
    answer: '$S_8 = -85$',
    hint: '$a_1 = 1,\\ r = -2$, so $S_8 = \\dfrac{1(1 - (-2)^8)}{1 - (-2)} = \\dfrac{-255}{3} = -85$.',
  },
  {
    id: 45,
    category: 'Geometric Sequences & Series',
    difficulty: 'hard',
    question:
      'Does $\\displaystyle \\sum_{n=1}^{\\infty} 4 \\left(\\dfrac{3}{5}\\right)^{n-1}$ converge? If so, find its sum.',
    answer: 'Converges; $S_\\infty = 10$',
    hint:
      '$a_1 = 4,\\ r = \\dfrac{3}{5}$. $|r| < 1$, so $S_\\infty = \\dfrac{4}{1 - 3/5} = \\dfrac{4}{2/5} = 10$.',
  },

  // ── 6.4 · Pascal, Combinations & Binomial Theorem (extended) ───────────
  {
    id: 46,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'easy',
    question: 'Evaluate $\\dbinom{8}{2}$.',
    answer: '$28$',
    hint: '$\\dfrac{8!}{2!\\,6!} = \\dfrac{8 \\cdot 7}{2 \\cdot 1} = 28$.',
  },
  {
    id: 47,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'medium',
    question: 'Find the middle term of the expansion of $(x + 2)^6$.',
    answer: '$160\\, x^3$',
    hint: 'There are $7$ terms; the middle is $T_4 = \\dbinom{6}{3} x^3 (2)^3 = 20 \\cdot 8 \\, x^3$.',
  },
  {
    id: 48,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'medium',
    question: "Use Pascal's Triangle to expand $(2 x - 1)^4$.",
    answer: '$16 x^4 - 32 x^3 + 24 x^2 - 8 x + 1$',
    hint: "Row $4$: $1,\\ 4,\\ 6,\\ 4,\\ 1$; alternate signs because of the $-1$.",
  },
  {
    id: 49,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'hard',
    question: 'Find the term containing $x^2$ in the expansion of $(x - 3)^5$.',
    answer: '$-270\\, x^2$',
    hint:
      'Use $k = 3$: $T_4 = \\dbinom{5}{3} x^2 (-3)^3 = 10 \\cdot (-27) \\, x^2$.',
  },
  {
    id: 50,
    category: 'Pascal, Combinations & Binomial Theorem',
    difficulty: 'hard',
    question:
      'Find the coefficient of $x^3 y^4$ in the expansion of $(2 x + y)^7$.',
    answer: '$280$',
    hint:
      '$k = 4$: $\\dbinom{7}{4} = 35$, $2^3 = 8$; product is $280$.',
  },

  // ── AP-Style Applications (Unit 6) ─────────────────────────────────────
  {
    id: 51,
    category: 'AP-Style Applications',
    difficulty: 'hard',
    question:
      'A function $f$ has values $f(1) = 6,\\ f(2) = 18,\\ f(3) = 54,\\ f(4) = 162$. Determine whether $f$ is best modeled by an arithmetic or geometric sequence, and write a formula for $f(n)$.',
    answer: 'Geometric; $f(n) = 6 \\cdot 3^{n-1}$',
    hint:
      'Successive ratios are constant ($\\tfrac{18}{6} = \\tfrac{54}{18} = \\tfrac{162}{54} = 3$), so $f$ is geometric with $a_1 = 6,\\ r = 3$.',
  },
  {
    id: 52,
    category: 'AP-Style Applications',
    difficulty: 'hard',
    question:
      'A teacher earns $\\$45{,}000$ in year $1$. Each year, the salary increases by $4\\%$ of the previous year’s salary. Write a formula for the salary $S(n)$ in year $n$, and find $S(10)$ to the nearest dollar.',
    answer: '$S(n) = 45{,}000 (1.04)^{n-1}$; $S(10) \\approx \\$64{,}049$',
    hint:
      'Geometric with $r = 1.04$. $S(10) = 45{,}000 (1.04)^9 \\approx 45{,}000 \\cdot 1.4233$.',
  },
  {
    id: 53,
    category: 'AP-Style Applications',
    difficulty: 'hard',
    question:
      'A ball is dropped from a height of $20$ feet. After each bounce it rebounds to $\\tfrac{3}{5}$ of its previous height. Find the total vertical distance the ball travels before coming to rest.',
    answer: '$80$ feet',
    hint:
      'Down: $\\dfrac{20}{1 - 3/5} = 50$. Up: $\\dfrac{12}{1 - 3/5} = 30$. Total $= 50 + 30 = 80$.',
  },
  {
    id: 54,
    category: 'AP-Style Applications',
    difficulty: 'hard',
    question:
      'A patient takes $50$ mg of medication every hour, and $85\\%$ of the previous hour’s amount remains in the body when the next dose is taken. The amount just after the $n$th dose satisfies $a_1 = 50,\\ a_{n+1} = 0.85\\, a_n + 50$. Interpret $0.85$ and $50$ in context, and find $a_4$ to the nearest tenth.',
    answer:
      '$0.85$ = fraction of the previous amount still in the body; $50$ = mg added by each new dose. $a_4 \\approx 159.3$ mg',
    hint:
      '$a_2 = 92.5,\\ a_3 = 128.625,\\ a_4 = 0.85(128.625) + 50 \\approx 159.3$.',
  },
  {
    id: 55,
    category: 'AP-Style Applications',
    difficulty: 'hard',
    question:
      'Plan A pays $\\$1{,}000$ in week $1$ and increases by $\\$200$ each week. Plan B pays $\\$200$ in week $1$ and doubles every week. In which week does Plan B’s weekly pay first exceed Plan A’s?',
    answer: 'Week $5$',
    hint:
      'Compare $200 \\cdot 2^{n-1}$ to $800 + 200 n$. Equal at $n = 4$ (each $\\$1{,}600$); at $n = 5$, Plan B $= \\$3{,}200 > \\$1{,}800$.',
  },
];

export const CATEGORIES = [
  'Sequences & Recursion',
  'Factorials & Sigma Notation',
  'Arithmetic Sequences & Series',
  'Geometric Sequences & Series',
  'Pascal, Combinations & Binomial Theorem',
  'AP-Style Applications',
] as const;
