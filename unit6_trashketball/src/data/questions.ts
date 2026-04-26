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
      'A sequence is defined by $a_1 = 4$ and $a_{n+1} = 2 a_n + 3$. Find $a_4$.',
    answer: '$a_4 = 53$',
    hint: '$a_2 = 11,\\ a_3 = 25,\\ a_4 = 53$.',
  },

  // ── 6.1 · Factorials & Sigma Notation ──────────────────────────────────
  {
    id: 6,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Simplify $\\dfrac{9!}{7!}$.',
    answer: '$72$',
    hint: 'Expand only what cancels: $\\dfrac{9 \\cdot 8 \\cdot 7!}{7!} = 72$.',
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
    question: 'Simplify $\\dfrac{(n + 2)!}{(n - 1)!}$.',
    answer: '$n(n + 1)(n + 2)$',
    hint: '$(n+2)! = (n+2)(n+1)(n)(n-1)!$; the $(n-1)!$ cancels.',
  },
  {
    id: 10,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question: 'Evaluate $\\displaystyle \\sum_{n=1}^{4}\\dfrac{(n+2)!}{(n+1)!}$.',
    answer: '$18$',
    hint: '$\\dfrac{(n+2)!}{(n+1)!} = n + 2$, so the sum is $3 + 4 + 5 + 6 = 18$.',
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
      'An arithmetic sequence has $a_1 = 18$ and $d = -4$. Find $a_7$.',
    answer: '$a_7 = -6$',
    hint: '$a_7 = 18 + 6(-4) = -6$.',
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
      'A theater has $18$ seats in row $1$, $22$ in row $2$, $26$ in row $3$, and so on. With $15$ rows, how many seats total?',
    answer: '$690$ seats',
    hint:
      'Arithmetic: $a_1 = 18,\\ d = 4$. $a_{15} = 74$; $S_{15} = \\dfrac{15}{2}(18 + 74) = 690$.',
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
      'A geometric sequence has $a_1 = 2$ and $r = 3$. Which term equals $486$?',
    answer: 'The $6\\text{th}$ term',
    hint: '$2 \\cdot 3^{n-1} = 486 \\Rightarrow 3^{n-1} = 243 = 3^5$, so $n = 6$.',
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
      'Find the coefficient of $x^7 y^{12}$ in the expansion of $(2 x - 3 y^3)^{11}$.',
    answer: '$3{,}421{,}440$',
    hint:
      '$k = 4$: $\\dbinom{11}{4} = 330$, $2^7 = 128$, $(-3)^4 = 81$; product is $3{,}421{,}440$.',
  },
];

export const CATEGORIES = [
  'Sequences & Recursion',
  'Factorials & Sigma Notation',
  'Arithmetic Sequences & Series',
  'Geometric Sequences & Series',
  'Pascal, Combinations & Binomial Theorem',
] as const;
