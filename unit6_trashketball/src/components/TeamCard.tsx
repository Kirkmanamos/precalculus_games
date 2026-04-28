import { useEffect, useState } from 'react';
import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';
import type { Theme } from '../lib/useTheme';
import { ordinal } from '../lib/ranking';

interface Props {
  team: Team;
  rank: number;
  isLeader: boolean;
  theme: Theme;
  onRename: (name: string) => void;
}

export function TeamCard({ team, rank, isLeader, theme, onRename }: Props) {
  const color = getTeamColor(team);
  const tint = theme === 'dark' ? color.tintDark : color.tint;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(team.name);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setDraft(team.name);
  }, [team.name]);

  // Trigger score-pop animation when score changes.
  useEffect(() => {
    setPop(true);
    const t = setTimeout(() => setPop(false), 400);
    return () => clearTimeout(t);
  }, [team.score]);

  const commit = () => {
    setEditing(false);
    const cleaned = draft.trim() || team.name;
    if (cleaned !== team.name) onRename(cleaned);
  };

  return (
    <div
      className={[
        'relative w-full max-w-[18rem] min-w-0 transition-all duration-300 ease-out md:max-w-none',
        isLeader ? 'md:-translate-y-1 md:scale-[1.01]' : '',
      ].join(' ')}
    >
      {isLeader && (
        <div
          aria-hidden
          className="absolute -top-6 left-1/2 -translate-x-1/2 rotate-[-6deg] rounded-full border-2 border-ink bg-tertiary px-3 py-0.5 font-display text-[10px] font-black tracking-widest shadow-sticker-sm sm:-top-7 sm:text-xs md:-top-4 md:px-2.5 md:text-[9px] xl:-top-5 xl:text-[10px]"
        >
          👑 LEAD
        </div>
      )}

      <div
        className={[
          'rounded-3xl border-2 border-ink shadow-sticker-lg',
          'flex flex-col items-stretch overflow-hidden',
          'w-full min-w-0 md:min-h-[7.75rem] xl:min-h-[8.25rem]',
          'animate-pop-in',
        ].join(' ')}
        style={{ background: tint }}
      >
        {/* color band */}
        <div
          className="flex items-center justify-between border-b-2 border-ink px-4 py-2 md:px-4 md:py-2"
          style={{ background: color.bg, color: color.fg }}
        >
          <span className="font-display text-xs font-bold tracking-widest uppercase md:text-[11px]">
            {ordinal(rank)}
          </span>
          <span
            className="rounded-full bg-white/95 px-2 py-0.5 font-display text-xs font-black uppercase tracking-wider md:text-[11px]"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#1E293B' }}
          >
            {color.label}
          </span>
        </div>

        <div className="flex flex-col gap-4 px-5 pb-4 pt-4 md:min-h-[5.75rem] md:flex-row md:items-end md:justify-between md:gap-4 md:px-4 md:pb-3 md:pt-3">
          {/* name */}
          <div className="min-w-0 md:flex-1">
            {editing ? (
              <input
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={commit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') commit();
                  if (e.key === 'Escape') {
                    setDraft(team.name);
                    setEditing(false);
                  }
                }}
                maxLength={28}
                className="w-full rounded-xl border-2 border-ink bg-white px-3 py-1.5 font-display text-xl font-black focus:outline-none focus:ring-4 focus:ring-accent/30 sm:text-2xl md:px-3 md:py-1.5 md:text-[clamp(1.2rem,1.8vw,2rem)]"
              />
            ) : (
              <button
                onClick={() => setEditing(true)}
                title="Click to rename"
                className="w-full text-left font-display text-xl font-black leading-tight hover:text-accent sm:text-2xl md:text-[clamp(1.2rem,1.8vw,2rem)]"
              >
                {team.name}
              </button>
            )}
          </div>

          {/* score */}
          <div className="mt-auto flex items-end justify-between md:mt-0 md:flex-col md:items-end md:gap-0.5">
            <div
              className={[
                'font-display text-5xl font-black leading-none tabular-nums sm:text-6xl md:text-[clamp(3rem,4vw,4.5rem)]',
                pop ? 'animate-score-pop' : '',
              ].join(' ')}
            >
              {team.score}
            </div>
            <div className="font-body text-xs font-semibold uppercase tracking-widest text-ink/60 md:text-[11px]">
              pts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
