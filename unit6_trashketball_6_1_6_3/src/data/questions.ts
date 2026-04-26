import type { Question } from './types';

/**
 * Question bank for Unit 6 (sections 6.1–6.3).
 * Source: Study Guide (6.1–6.3) plus the sequence-and-series items
 * from the Unit 6 Sequences, Series, and Probability test.
 */
export const QUESTIONS: Question[] = [
  // ── 6.1 · Sequences & Recursive Rules ──────────────────────────────────
  {
    id: 1,
    category: 'Sequences & Recursive Rules',
    difficulty: 'easy',
    question: 'Write the first four terms of the sequence $a_n = n^2 + 2$.',
    answer: '$3,\\ 6,\\ 11,\\ 18$',
    hint: 'Substitute $n = 1, 2, 3, 4$ into the explicit formula.',
  },
  {
    id: 2,
    category: 'Sequences & Recursive Rules',
    difficulty: 'easy',
    question:
      'Write the first four terms of the recursive sequence $a_1 = 3,\\ a_{n+1} = 2a_n + 1$.',
    answer: '$3,\\ 7,\\ 15,\\ 31$',
    hint: 'Start at $3$, then double each term and add $1$.',
  },
  {
    id: 3,
    category: 'Sequences & Recursive Rules',
    difficulty: 'medium',
    question: 'Write an explicit formula for the sequence $2,\\ 6,\\ 12,\\ 20,\\ \\dots$.',
    answer: '$a_n = n^2 + n$',
    hint: 'Equivalent form: $a_n = n(n+1)$.',
  },
  {
    id: 4,
    category: 'Sequences & Recursive Rules',
    difficulty: 'medium',
    question:
      'A sequence is defined recursively by $a_n = a_{n-1}a_{n-2}$ with $a_1 = 5$ and $a_2 = 8$. Find $a_5$.',
    answer: '$a_5 = 12{,}800$',
    hint: '$a_3 = 40$, $a_4 = 320$, and $a_5 = 320 \\cdot 40$.',
  },
  {
    id: 5,
    category: 'Sequences & Recursive Rules',
    difficulty: 'hard',
    question: 'For the recursive sequence $a_1 = 3,\\ a_{n+1} = 2a_n + 1$, find $a_6$.',
    answer: '$a_6 = 127$',
    hint: 'The terms go $3, 7, 15, 31, 63, 127$.',
  },

  // ── 6.1 · Factorials & Sigma Notation ─────────────────────────────────
  {
    id: 6,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Simplify $\\dfrac{10!}{8!}$.',
    answer: '$90$',
    hint: 'Expand only what you need: $10! = 10 \\cdot 9 \\cdot 8!$.',
  },
  {
    id: 7,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Evaluate $\\displaystyle \\sum_{k=1}^{4}(2k+1)$.',
    answer: '$24$',
    hint: '$3 + 5 + 7 + 9 = 24$.',
  },
  {
    id: 8,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Write $2 + 5 + 8 + 11 + 14$ in sigma notation.',
    answer: '$\\displaystyle \\sum_{k=1}^{5}(3k - 1)$',
    hint: 'The terms follow the rule $3k - 1$ starting at $k = 1$.',
  },
  {
    id: 9,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question:
      'Write $4\\cdot 2^3 + 5\\cdot 2^4 + 6\\cdot 2^5 + \\cdots + 103\\cdot 2^{102}$ in sigma notation.',
    answer: '$\\displaystyle \\sum_{n=4}^{103} n2^{n-1}$',
    hint: 'The first term happens when $n = 4$ and the last when $n = 103$.',
  },

  // ── 6.2 · Arithmetic Sequences & Means ────────────────────────────────
  {
    id: 10,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'easy',
    question:
      'Determine whether $7,\\ 3,\\ -1,\\ -5,\\ \\dots$ is arithmetic. If it is, state the common difference.',
    answer: 'Arithmetic; $d = -4$',
    hint: 'Check the consecutive differences: $3 - 7$, $-1 - 3$, and $-5 - (-1)$.',
  },
  {
    id: 11,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'easy',
    question: 'In an arithmetic sequence with $a_1 = 12$ and $d = -4$, find $a_7$.',
    answer: '$a_7 = -12$',
    hint: '$a_7 = a_1 + (7-1)d$.',
  },
  {
    id: 12,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'medium',
    question:
      'The $4$th term of an arithmetic sequence is $17$ and the $10$th term is $35$. Find $a_1$ and $d$.',
    answer: '$a_1 = 8,\\ d = 3$',
    hint: 'Use the change from term $4$ to term $10$ to find $d$ first.',
  },
  {
    id: 13,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'medium',
    question: 'Insert three arithmetic means between $8$ and $24$.',
    answer: '$12,\\ 16,\\ 20$',
    hint: 'There are four equal jumps from $8$ to $24$.',
  },

  // ── 6.2 · Arithmetic Series & Applications ────────────────────────────
  {
    id: 14,
    category: 'Arithmetic Series & Applications',
    difficulty: 'medium',
    question: 'Find the sum of the first $15$ terms of the arithmetic sequence $6,\\ 10,\\ 14,\\ \\dots$.',
    answer: '$S_{15} = 510$',
    hint: 'First find $a_{15}$, then use $S_n = \\dfrac{n}{2}(a_1 + a_n)$.',
  },
  {
    id: 15,
    category: 'Arithmetic Series & Applications',
    difficulty: 'medium',
    question:
      'A concert hall has $14$ seats in the first row and each new row has $3$ more seats than the row before. If there are $12$ rows, how many seats are there in all?',
    answer: '$366$ seats',
    hint: 'This is an arithmetic series with $a_1 = 14$, $d = 3$, and $n = 12$.',
  },
  {
    id: 16,
    category: 'Arithmetic Series & Applications',
    difficulty: 'hard',
    question:
      'Find the sum of the first eight terms of an arithmetic sequence if the fourth term is $9$ and the common difference is $-5$.',
    answer: '$52$',
    hint: 'Use $a_4 = a_1 + 3d$ to find $a_1$ before summing.',
  },
  {
    id: 17,
    category: 'Arithmetic Series & Applications',
    difficulty: 'hard',
    question:
      'A small theater has $10$ seats in the first row, $15$ in the second, $20$ in the third, and so on. If the seating capacity is $220$, how many rows are there?',
    answer: '$8$ rows',
    hint: 'Set the arithmetic-series total equal to $220$ and solve for $n$.',
  },

  // ── 6.3 · Geometric Sequences & Means ──────────────────────────────────
  {
    id: 18,
    category: 'Geometric Sequences & Means',
    difficulty: 'easy',
    question:
      'Determine whether $64,\\ 16,\\ 4,\\ 1,\\ \\dots$ is geometric. If it is, state the common ratio.',
    answer: 'Geometric; $r = \\dfrac{1}{4}$',
    hint: 'Divide a term by the previous term.',
  },
  {
    id: 19,
    category: 'Geometric Sequences & Means',
    difficulty: 'easy',
    question: 'In a geometric sequence with $a_1 = 2$ and $r = -3$, find $a_4$.',
    answer: '$a_4 = -54$',
    hint: '$a_4 = a_1r^{4-1}$.',
  },
  {
    id: 20,
    category: 'Geometric Sequences & Means',
    difficulty: 'medium',
    question:
      'A geometric sequence has $a_3 = 45$ and common ratio $r = 3$. Find $a_1$ and write an explicit formula for $a_n$.',
    answer: '$a_1 = 5,\\ a_n = 5 \\cdot 3^{n-1}$',
    hint: 'Since $a_3 = a_1r^2$, solve $45 = 9a_1$ first.',
  },
  {
    id: 21,
    category: 'Geometric Sequences & Means',
    difficulty: 'medium',
    question: 'Insert two geometric means between $2$ and $54$.',
    answer: '$6$ and $18$',
    hint: 'There are three equal ratio jumps from $2$ to $54$.',
  },

  // ── 6.3 · Geometric Series & Convergence ───────────────────────────────
  {
    id: 22,
    category: 'Geometric Series & Convergence',
    difficulty: 'medium',
    question: 'Find the sum of the first $5$ terms of the geometric sequence $3,\\ 6,\\ 12,\\ \\dots$.',
    answer: '$S_5 = 93$',
    hint: 'Use $a_1 = 3$, $r = 2$, and $S_n = \\dfrac{a_1(1-r^n)}{1-r}$.',
  },
  {
    id: 23,
    category: 'Geometric Series & Convergence',
    difficulty: 'medium',
    question: 'In a geometric sequence where $a_1 = 3$ and $r = 2$, which term is equal to $768$?',
    answer: 'The $9\\text{th}$ term',
    hint: 'Solve $3 \\cdot 2^{n-1} = 768$.',
  },
  {
    id: 24,
    category: 'Geometric Series & Convergence',
    difficulty: 'hard',
    question:
      'Determine whether the infinite geometric series $15 - 5 + \\dfrac{5}{3} - \\dfrac{5}{9} + \\cdots$ converges. If it does, find its sum.',
    answer: 'Converges; $S_\\infty = \\dfrac{45}{4}$',
    hint: '$a_1 = 15$ and $r = -\\dfrac{1}{3}$, so $|r| < 1$.',
  },
  {
    id: 25,
    category: 'Geometric Series & Convergence',
    difficulty: 'hard',
    question: 'Evaluate $\\displaystyle \\sum_{n=1}^{\\infty} 50(0.8)^{n-1}$.',
    answer: '$250$',
    hint: 'This is an infinite geometric series with $a_1 = 50$ and $r = 0.8$.',
  },
];

export const CATEGORIES = [
  'Sequences & Recursive Rules',
  'Factorials & Sigma Notation',
  'Arithmetic Sequences & Means',
  'Arithmetic Series & Applications',
  'Geometric Sequences & Means',
  'Geometric Series & Convergence',
] as const;
