import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';
import { Button } from './ui/Button';
import { SCORING } from '../design/tokens';

interface Props {
  selectedTeam: Team | null;
  remainingTeams: Team[];
  shotNumber: number;
  totalTeams: number;
  onSelectTeam: (teamId: string) => void;
  onAward: (points: number) => void;
}

export function ShotControls({
  selectedTeam,
  remainingTeams,
  shotNumber,
  totalTeams,
  onSelectTeam,
  onAward,
}: Props) {
  const color = selectedTeam ? getTeamColor(selectedTeam) : null;

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-sticker-lg animate-pop-in sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
        <div>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
            Shot Phase · Shot {shotNumber} of {totalTeams}
          </span>
          {selectedTeam ? (
            <h2 className="mt-1 flex flex-wrap items-center gap-2 font-display text-3xl font-black sm:gap-3 sm:text-5xl">
              <span
                className="inline-block h-6 w-6 rounded-full border-2 border-ink"
                style={{ background: color?.bg }}
              />
              <span className="truncate">{selectedTeam.name}</span>
              <span className="text-ink/40">→ shoot!</span>
            </h2>
          ) : (
            <h2 className="mt-1 font-display text-2xl font-black sm:text-4xl">
              Choose who is shooting
            </h2>
          )}
        </div>
        <span className="rounded-full border-2 border-ink bg-tertiary px-3 py-1 font-display text-xs font-black uppercase tracking-widest shadow-sticker-sm">
          🏀 Trashket
        </span>
      </div>

      <div className="mt-6">
        <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
          Remaining Shooters
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {remainingTeams.map((team) => {
            const teamColor = getTeamColor(team);
            const isSelected = selectedTeam?.id === team.id;

            return (
              <button
                key={team.id}
                onClick={() => onSelectTeam(team.id)}
                className={[
                  'rounded-2xl border-2 border-ink px-4 py-3 text-left shadow-sticker-sm transition-transform',
                  'hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker',
                  'active:translate-x-1 active:translate-y-1 active:shadow-sticker-press',
                  isSelected ? 'ring-4 ring-accent/40' : '',
                ].join(' ')}
                style={{ background: isSelected ? teamColor.bg : teamColor.tint, color: isSelected ? teamColor.fg : '#1E293B' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-5 w-5 rounded-full border-2 border-ink shrink-0"
                    style={{ background: teamColor.bg }}
                  />
                  <span className="font-display text-lg font-black truncate">{team.name}</span>
                </div>
                <div className="mt-1 font-body text-xs font-semibold uppercase tracking-wider opacity-80">
                  {isSelected ? 'selected shooter' : 'tap to choose'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedTeam && (
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
                className="h-20 text-2xl sm:h-24 sm:text-3xl"
                onClick={() => onAward(opt.value)}
              >
                {opt.label}
              </Button>
            );
          })}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-ink/50">
        {selectedTeam
          ? 'Award the shot result, then choose the next shooter from the remaining teams.'
          : 'Tap any remaining team to decide who shoots next.'}
      </p>
    </div>
  );
}
