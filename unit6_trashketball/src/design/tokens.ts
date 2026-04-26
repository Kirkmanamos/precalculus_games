/**
 * Design tokens — single source of truth for non-Tailwind constants.
 * Tailwind's theme.extend in tailwind.config.js mirrors the colors below.
 */

export const COLORS = {
  canvas: '#FFFDF5',
  ink: '#1E293B',
  accent: '#8B5CF6',
  secondary: '#F472B6',
  tertiary: '#FBBF24',
  quaternary: '#34D399',
  sky: '#38BDF8',
  rose: '#FB7185',
} as const;

export type TeamColor = {
  id: string;
  bg: string;
  fg: string;
  tint: string;
  label: string;
};

export const TEAM_PALETTE: TeamColor[] = [
  { id: 'violet',  label: 'Violet',  bg: '#8B5CF6', fg: '#FFFFFF', tint: '#EDE9FE' },
  { id: 'pink',    label: 'Pink',    bg: '#F472B6', fg: '#FFFFFF', tint: '#FCE7F3' },
  { id: 'amber',   label: 'Amber',   bg: '#FBBF24', fg: '#1E293B', tint: '#FEF3C7' },
  { id: 'emerald', label: 'Emerald', bg: '#34D399', fg: '#1E293B', tint: '#D1FAE5' },
  { id: 'sky',     label: 'Sky',     bg: '#38BDF8', fg: '#1E293B', tint: '#E0F2FE' },
  { id: 'rose',    label: 'Rose',    bg: '#FB7185', fg: '#FFFFFF', tint: '#FFE4E6' },
];

export const SCORING = {
  CORRECT_ANSWER: 2,
  SHOT_OPTIONS: [
    { label: 'Miss',    value: 0, tone: 'neutral' as const },
    { label: '+1',      value: 1, tone: 'easy' as const },
    { label: '+2',      value: 2, tone: 'medium' as const },
    { label: '+3',      value: 3, tone: 'hard' as const },
  ],
} as const;
