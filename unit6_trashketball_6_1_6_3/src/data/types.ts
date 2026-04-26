export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: number;
  category: string;
  difficulty: Difficulty;
  /** Plain text with inline math wrapped in `$...$` (or display math `$$...$$`). */
  question: string;
  /** Plain text with inline math wrapped in `$...$`. */
  answer: string;
  /** Optional teacher-facing explanation, also supports `$...$`. */
  hint?: string;
}
