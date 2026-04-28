import { useState } from 'react';
import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';
import { Button } from './ui/Button';
import { SCORING } from '../design/tokens';

interface Props {
  teams: Team[];
  onApply: (correctIds: string[]) => void;
  onCancel: () => void;
}

export function AwardPanel({ teams, onApply, onCancel }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-sticker-lg animate-pop-in sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-black sm:text-3xl">Who got it right?</h2>
          <p className="text-sm text-ink/60">
            Each correct team gets <strong>+{SCORING.CORRECT_ANSWER}</strong> points. Tap any team to toggle.
          </p>
        </div>
        <span className="rounded-full border-2 border-ink bg-tertiary px-3 py-1 font-display text-xs font-black uppercase tracking-widest shadow-sticker-sm">
          Phase 3 · Score
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {teams.map((team) => {
          const color = getTeamColor(team);
          const on = selected.has(team.id);
          return (
            <button
              key={team.id}
              onClick={() => toggle(team.id)}
              className={[
                'relative rounded-2xl border-2 border-ink p-4 text-left shadow-sticker-sm transition-transform',
                'hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker',
                'active:translate-x-1 active:translate-y-1 active:shadow-sticker-press',
                on ? 'ring-4 ring-quaternary/70' : '',
              ].join(' ')}
              style={{ background: on ? color.bg : color.tint, color: on ? color.fg : '#1E293B' }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-black truncate">{team.name}</span>
                <span
                  className={[
                    'flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink text-xs font-black',
                    on ? 'bg-white text-ink' : 'bg-white/70 text-ink/30',
                  ].join(' ')}
                >
                  {on ? '✓' : ''}
                </span>
              </div>
              <div className="mt-1 font-body text-xs font-semibold uppercase tracking-wider opacity-80">
                {on ? `+${SCORING.CORRECT_ANSWER} points` : 'tap to select'}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
        <Button variant="ghost" size="lg" onClick={onCancel} className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button variant="ghost" size="lg" onClick={() => onApply([])} className="w-full sm:w-auto">
          No One Got It
        </Button>
        <Button variant="primary" size="lg" onClick={() => onApply([...selected])} className="w-full sm:w-auto">
          Apply &amp; Continue → Shots
        </Button>
      </div>
    </div>
  );
}
