import { useState } from 'react';
import { TEAM_PALETTE } from '../design/tokens';
import { makeTeam, type Team } from '../state/useGameState';
import { Button } from './ui/Button';
import { Decorations } from './ui/Decorations';

interface Props {
  onStart: (teams: Team[]) => void;
}

const TEAM_COUNT_OPTIONS = [2, 3, 4, 5, 6] as const;

const DEFAULT_NAMES = [
  'The Crushers',
  'Pi Squad',
  'Slope Goblins',
  'Sigma Squad',
  'Limit Breakers',
  'Quadratic Crew',
];

export function TeamSetup({ onStart }: Props) {
  const [count, setCount] = useState<number>(2);
  const [teams, setTeams] = useState<Team[]>(() =>
    Array.from({ length: 2 }, (_, i) =>
      makeTeam(DEFAULT_NAMES[i] ?? `Team ${i + 1}`, TEAM_PALETTE[i % TEAM_PALETTE.length].id),
    ),
  );

  const updateCount = (next: number) => {
    setCount(next);
    setTeams((prev) => {
      if (prev.length === next) return prev;
      if (prev.length < next) {
        const additions = Array.from({ length: next - prev.length }, (_, i) => {
          const idx = prev.length + i;
          return makeTeam(
            DEFAULT_NAMES[idx] ?? `Team ${idx + 1}`,
            TEAM_PALETTE[idx % TEAM_PALETTE.length].id,
          );
        });
        return [...prev, ...additions];
      }
      return prev.slice(0, next);
    });
  };

  const renameTeam = (id: string, name: string) =>
    setTeams((prev) => prev.map((t) => (t.id === id ? { ...t, name } : t)));

  const cycleColor = (id: string) =>
    setTeams((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const idx = TEAM_PALETTE.findIndex((c) => c.id === t.colorId);
        const next = TEAM_PALETTE[(idx + 1) % TEAM_PALETTE.length];
        return { ...t, colorId: next.id };
      }),
    );

  const start = () => {
    const cleaned = teams.map((t, i) => ({
      ...t,
      name: t.name.trim() || `Team ${i + 1}`,
    }));
    onStart(cleaned);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <Decorations />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-10">
        <div className="mb-2 flex items-center gap-3 rounded-full border-2 border-ink bg-tertiary px-5 py-2 shadow-sticker">
          <span className="font-display text-sm font-bold tracking-widest uppercase">
            Pre-Calculus · Unit 6
          </span>
        </div>
        <h1 className="mt-4 text-center font-display text-6xl font-black leading-none sm:text-7xl">
          Trashket<span className="text-accent">ball</span>
        </h1>
        <p className="mt-3 text-center font-body text-lg text-ink/70">
          Sections 6.1–6.3 · Sequences &amp; Series
        </p>

        <section className="mt-10 w-full rounded-3xl border-2 border-ink bg-white p-8 shadow-sticker-lg">
          <h2 className="font-display text-2xl font-bold">How many teams?</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {TEAM_COUNT_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => updateCount(n)}
                className={[
                  'h-14 w-14 rounded-2xl border-2 border-ink font-display text-2xl font-black shadow-sticker',
                  'transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker-lg',
                  'active:translate-x-1 active:translate-y-1 active:shadow-sticker-press',
                  count === n ? 'bg-accent text-white' : 'bg-white text-ink',
                ].join(' ')}
              >
                {n}
              </button>
            ))}
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold">Team names &amp; colors</h2>
          <p className="mt-1 text-sm text-ink/60">
            Tap the swatch to cycle colors. Names show on every card.
          </p>
          <div className="mt-4 grid gap-3">
            {teams.map((team, i) => {
              const color = TEAM_PALETTE.find((c) => c.id === team.colorId)!;
              return (
                <div
                  key={team.id}
                  className="flex items-center gap-3 rounded-2xl border-2 border-ink bg-canvas p-3 shadow-sticker-sm"
                >
                  <button
                    onClick={() => cycleColor(team.id)}
                    aria-label={`Change color (currently ${color.label})`}
                    className="h-12 w-12 shrink-0 rounded-full border-2 border-ink shadow-sticker-sm transition-transform hover:scale-105"
                    style={{ background: color.bg }}
                  />
                  <span className="font-display text-xl font-black text-ink/40 w-8 text-center">
                    {i + 1}
                  </span>
                  <input
                    value={team.name}
                    onChange={(e) => renameTeam(team.id, e.target.value)}
                    maxLength={28}
                    className="flex-1 rounded-xl border-2 border-ink bg-white px-4 py-2 font-body text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-accent/30"
                    placeholder={`Team ${i + 1}`}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <Button variant="primary" size="xl" onClick={start}>
              Start Game →
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
