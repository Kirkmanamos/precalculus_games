import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';
import { Button } from './ui/Button';
import { SCORING } from '../design/tokens';

interface Props {
  team: Team;
  shotIndex: number;
  totalTeams: number;
  onAward: (points: number) => void;
}

export function ShotControls({ team, shotIndex, totalTeams, onAward }: Props) {
  const color = getTeamColor(team);

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-sticker-lg animate-pop-in">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
            Shot Phase · Team {shotIndex + 1} of {totalTeams}
          </span>
          <h2 className="mt-1 flex items-center gap-3 font-display text-4xl font-black sm:text-5xl">
            <span
              className="inline-block h-6 w-6 rounded-full border-2 border-ink"
              style={{ background: color.bg }}
            />
            <span className="truncate">{team.name}</span>
            <span className="text-ink/40">→ shoot!</span>
          </h2>
        </div>
        <span className="rounded-full border-2 border-ink bg-tertiary px-3 py-1 font-display text-xs font-black uppercase tracking-widest shadow-sticker-sm">
          🏀 Trashket
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SCORING.SHOT_OPTIONS.map((opt) => {
          const variant =
            opt.value === 0 ? 'ghost'
            : opt.value === 1 ? 'quaternary'
            : opt.value === 2 ? 'tertiary'
            : 'secondary';
          return (
            <Button
              key={opt.label}
              variant={variant}
              size="xl"
              className="h-24 text-3xl"
              onClick={() => onAward(opt.value)}
            >
              {opt.label}
            </Button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-ink/50">
        Award the shot result. Last team finishing shots advances the round.
      </p>
    </div>
  );
}
