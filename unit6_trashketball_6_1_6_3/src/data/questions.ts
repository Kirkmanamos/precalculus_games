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
      'A sequence is defined recursively by $a_n = a_{n-1}a_{n-2}$ with $a_1 = 3$ and $a_2 = 4$. Find $a_5$.',
    answer: '$a_5 = 576$',
    hint: '$a_3 = 12$, $a_4 = 48$, and $a_5 = 48 \\cdot 12$.',
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
      'Write $5\\cdot 3^4 + 6\\cdot 3^5 + 7\\cdot 3^6 + \\cdots + 80\\cdot 3^{79}$ in sigma notation.',
    answer: '$\\displaystyle \\sum_{n=5}^{80} n\\,3^{n-1}$',
    hint: 'The first term happens when $n = 5$ and the last when $n = 80$.',
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
      'Find the sum of the first ten terms of an arithmetic sequence if the fifth term is $12$ and the common difference is $-3$.',
    answer: '$105$',
    hint: 'Use $a_5 = a_1 + 4d$ to find $a_1 = 24$, then $a_{10} = -3$ and $S_{10} = \\dfrac{10}{2}(24 + (-3))$.',
  },
  {
    id: 17,
    category: 'Arithmetic Series & Applications',
    difficulty: 'hard',
    question:
      'A small theater has $6$ seats in the first row, $10$ in the second, $14$ in the third, and so on. If the seating capacity is $240$, how many rows are there?',
    answer: '$10$ rows',
    hint: 'Set the arithmetic-series total equal to $240$ and solve for $n$: $n^2 + 2n - 120 = 0 \\Rightarrow (n + 12)(n - 10) = 0$.',
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
    question: 'In a geometric sequence where $a_1 = 6$ and $r = 2$, which term is equal to $192$?',
    answer: 'The $6\\text{th}$ term',
    hint: 'Solve $6 \\cdot 2^{n-1} = 192 \\Rightarrow 2^{n-1} = 32 = 2^5$.',
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
    question: 'Evaluate $\\displaystyle \\sum_{n=1}^{\\infty} 36(0.75)^{n-1}$.',
    answer: '$144$',
    hint: 'This is an infinite geometric series with $a_1 = 36$ and $r = 0.75$, so $S_\\infty = \\dfrac{36}{1 - 0.75}$.',
  },

  // ── 6.1 · Sequences & Recursive Rules (extended) ───────────────────────
  {
    id: 26,
    category: 'Sequences & Recursive Rules',
    difficulty: 'easy',
    question: 'Write the first four terms of the sequence $a_n = 3n - 4$.',
    answer: '$-1,\\ 2,\\ 5,\\ 8$',
    hint: 'Substitute $n = 1, 2, 3, 4$ into the explicit formula.',
  },
  {
    id: 27,
    category: 'Sequences & Recursive Rules',
    difficulty: 'medium',
    question:
      'Write the first four terms of the recursive sequence $a_1 = 4,\\ a_{n+1} = 3 a_n - 5$.',
    answer: '$4,\\ 7,\\ 16,\\ 43$',
    hint: '$a_2 = 3(4) - 5,\\ a_3 = 3(7) - 5,\\ a_4 = 3(16) - 5$.',
  },
  {
    id: 28,
    category: 'Sequences & Recursive Rules',
    difficulty: 'medium',
    question: 'Write an explicit formula for the sequence $4,\\ 9,\\ 16,\\ 25,\\ \\dots$.',
    answer: '$a_n = (n + 1)^2$',
    hint: 'These are the perfect squares starting from $2^2$, so $a_n = (n+1)^2 = n^2 + 2n + 1$.',
  },
  {
    id: 29,
    category: 'Sequences & Recursive Rules',
    difficulty: 'hard',
    question:
      'A sequence is defined recursively by $a_1 = 2$ and $a_{n+1} = a_n^2 - 1$. Find $a_4$.',
    answer: '$a_4 = 63$',
    hint: '$a_2 = 4 - 1 = 3,\\ a_3 = 9 - 1 = 8,\\ a_4 = 64 - 1 = 63$.',
  },

  // ── 6.1 · Factorials & Sigma Notation (extended) ───────────────────────
  {
    id: 30,
    category: 'Factorials & Sigma Notation',
    difficulty: 'easy',
    question: 'Simplify $\\dfrac{6!}{4!}$.',
    answer: '$30$',
    hint: 'Expand only what cancels: $\\dfrac{6 \\cdot 5 \\cdot 4!}{4!} = 30$.',
  },
  {
    id: 31,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Write $1 + 4 + 9 + 16 + 25 + 36$ in sigma notation.',
    answer: '$\\displaystyle \\sum_{k=1}^{6} k^2$',
    hint: 'Each term is a perfect square: $a_k = k^2$ for $k = 1, \\dots, 6$.',
  },
  {
    id: 32,
    category: 'Factorials & Sigma Notation',
    difficulty: 'medium',
    question: 'Simplify $\\dfrac{n!}{(n - 2)!}$.',
    answer: '$n(n - 1)$',
    hint: '$n! = n(n-1)(n-2)!$; the $(n-2)!$ cancels.',
  },
  {
    id: 33,
    category: 'Factorials & Sigma Notation',
    difficulty: 'hard',
    question: 'Evaluate $\\displaystyle \\sum_{k=2}^{5}(3 k - 1)$.',
    answer: '$38$',
    hint: '$5 + 8 + 11 + 14 = 38$.',
  },

  // ── 6.2 · Arithmetic Sequences & Means (extended) ──────────────────────
  {
    id: 34,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'easy',
    question: 'Find the common difference of $-3,\\ 1,\\ 5,\\ 9,\\ \\dots$.',
    answer: '$d = 4$',
    hint: 'Subtract any term from the next: $1 - (-3) = 4$.',
  },
  {
    id: 35,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'medium',
    question: 'In an arithmetic sequence with $a_1 = -2$ and $d = 6$, find $a_{20}$.',
    answer: '$a_{20} = 112$',
    hint: '$a_{20} = a_1 + 19 d = -2 + 19(6) = 112$.',
  },
  {
    id: 36,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'medium',
    question: 'Insert four arithmetic means between $5$ and $30$.',
    answer: '$10,\\ 15,\\ 20,\\ 25$',
    hint: 'Five equal jumps from $5$ to $30$: $d = \\dfrac{30 - 5}{5} = 5$.',
  },
  {
    id: 37,
    category: 'Arithmetic Sequences & Means',
    difficulty: 'hard',
    question:
      'The $3$rd term of an arithmetic sequence is $-4$ and the $7$th term is $12$. Find $a_1$ and $d$.',
    answer: '$a_1 = -12,\\ d = 4$',
    hint: '$d = \\dfrac{12 - (-4)}{7 - 3} = 4$; then $-4 = a_1 + 2(4) \\Rightarrow a_1 = -12$.',
  },

  // ── 6.2 · Arithmetic Series & Applications (extended) ──────────────────
  {
    id: 38,
    category: 'Arithmetic Series & Applications',
    difficulty: 'medium',
    question:
      'Find the sum of the first $20$ terms of the arithmetic sequence $4,\\ 9,\\ 14,\\ 19,\\ \\dots$.',
    answer: '$S_{20} = 1{,}030$',
    hint: '$a_1 = 4,\\ d = 5$; $a_{20} = 99$ and $S_{20} = \\dfrac{20}{2}(4 + 99) = 1{,}030$.',
  },
  {
    id: 39,
    category: 'Arithmetic Series & Applications',
    difficulty: 'medium',
    question:
      'An auditorium has $20$ seats in the first row, and each row has $4$ more seats than the previous row. With $10$ rows, how many seats in all?',
    answer: '$380$ seats',
    hint: 'Arithmetic with $a_1 = 20,\\ d = 4$: $a_{10} = 56$; $S_{10} = \\dfrac{10}{2}(20 + 56) = 380$.',
  },
  {
    id: 40,
    category: 'Arithmetic Series & Applications',
    difficulty: 'medium',
    question: 'Find the sum of all integers from $30$ to $80$, inclusive.',
    answer: '$2{,}805$',
    hint: 'Count $n = 80 - 30 + 1 = 51$ terms; $S = \\dfrac{51}{2}(30 + 80) = 2{,}805$.',
  },
  {
    id: 41,
    category: 'Arithmetic Series & Applications',
    difficulty: 'hard',
    question:
      'The sum of the first $12$ terms of an arithmetic sequence is $258$. If $a_1 = 5$, find $d$.',
    answer: '$d = 3$',
    hint:
      '$258 = \\dfrac{12}{2}(2(5) + 11 d) = 60 + 66 d$, so $66 d = 198 \\Rightarrow d = 3$.',
  },

  // ── 6.3 · Geometric Sequences & Means (extended) ───────────────────────
  {
    id: 42,
    category: 'Geometric Sequences & Means',
    difficulty: 'easy',
    question: 'Find the common ratio of $5,\\ -10,\\ 20,\\ -40,\\ \\dots$.',
    answer: '$r = -2$',
    hint: 'Divide any term by the previous one: $\\dfrac{-10}{5} = -2$.',
  },
  {
    id: 43,
    category: 'Geometric Sequences & Means',
    difficulty: 'medium',
    question: 'In a geometric sequence with $a_1 = 7$ and $r = 2$, find $a_8$.',
    answer: '$a_8 = 896$',
    hint: '$a_8 = 7 \\cdot 2^7 = 7 \\cdot 128 = 896$.',
  },
  {
    id: 44,
    category: 'Geometric Sequences & Means',
    difficulty: 'medium',
    question: 'Insert three geometric means between $3$ and $48$.',
    answer: '$6,\\ 12,\\ 24$',
    hint: 'Four ratio jumps: $r^4 = \\dfrac{48}{3} = 16 \\Rightarrow r = 2$.',
  },
  {
    id: 45,
    category: 'Geometric Sequences & Means',
    difficulty: 'hard',
    question:
      'A geometric sequence has $a_2 = -12$ and $a_5 = 96$. Find $a_1$ and $r$.',
    answer: '$a_1 = 6,\\ r = -2$',
    hint:
      '$\\dfrac{a_5}{a_2} = r^3 = \\dfrac{96}{-12} = -8 \\Rightarrow r = -2$; then $a_1 = \\dfrac{a_2}{r} = 6$.',
  },

  // ── 6.3 · Geometric Series & Convergence (extended) ────────────────────
  {
    id: 46,
    category: 'Geometric Series & Convergence',
    difficulty: 'medium',
    question:
      'Find the sum of the first $6$ terms of the geometric sequence $2,\\ 6,\\ 18,\\ 54,\\ \\dots$.',
    answer: '$S_6 = 728$',
    hint: '$a_1 = 2,\\ r = 3$; $S_6 = \\dfrac{2(1 - 3^6)}{1 - 3} = 728$.',
  },
  {
    id: 47,
    category: 'Geometric Series & Convergence',
    difficulty: 'medium',
    question:
      'Does $20 + 5 + \\dfrac{5}{4} + \\dfrac{5}{16} + \\cdots$ converge? If so, find $S_\\infty$.',
    answer: 'Converges; $S_\\infty = \\dfrac{80}{3}$',
    hint:
      '$a_1 = 20,\\ r = \\dfrac{1}{4}$. $|r| < 1$, so $S_\\infty = \\dfrac{20}{1 - 1/4} = \\dfrac{80}{3}$.',
  },
  {
    id: 48,
    category: 'Geometric Series & Convergence',
    difficulty: 'medium',
    question: 'In a geometric sequence with $a_1 = 4$ and $r = \\dfrac{1}{2}$, find $a_7$.',
    answer: '$a_7 = \\dfrac{1}{16}$',
    hint: '$a_7 = 4 \\left(\\dfrac{1}{2}\\right)^6 = \\dfrac{4}{64} = \\dfrac{1}{16}$.',
  },
  {
    id: 49,
    category: 'Geometric Series & Convergence',
    difficulty: 'hard',
    question:
      'Find the sum of the first $7$ terms of the geometric series $1 - 3 + 9 - 27 + \\cdots$.',
    answer: '$S_7 = 547$',
    hint:
      '$a_1 = 1,\\ r = -3$; $S_7 = \\dfrac{1(1 - (-3)^7)}{1 - (-3)} = \\dfrac{2{,}188}{4} = 547$.',
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
