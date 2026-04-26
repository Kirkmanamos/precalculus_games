import { useEffect, useState } from 'react';
import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';
import { ordinal } from '../lib/ranking';

interface Props {
  team: Team;
  rank: number;
  isLeader: boolean;
  onRename: (name: string) => void;
}

export function TeamCard({ team, rank, isLeader, onRename }: Props) {
  const color = getTeamColor(team);
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
        'relative shrink-0 transition-all duration-300 ease-out',
        isLeader ? 'sm:scale-110' : 'sm:scale-100',
      ].join(' ')}
    >
      {isLeader && (
        <div
          aria-hidden
          className="absolute -top-7 left-1/2 -translate-x-1/2 rotate-[-6deg] rounded-full border-2 border-ink bg-tertiary px-3 py-0.5 font-display text-xs font-black tracking-widest shadow-sticker-sm"
        >
          👑 LEAD
        </div>
      )}

      <div
        className={[
          'rounded-3xl border-2 border-ink shadow-sticker-lg',
          'flex flex-col items-stretch overflow-hidden',
          'min-w-[220px] sm:min-w-[260px]',
          'animate-pop-in',
        ].join(' ')}
        style={{ background: color.tint }}
      >
        {/* color band */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b-2 border-ink"
          style={{ background: color.bg, color: color.fg }}
        >
          <span className="font-display text-xs font-bold tracking-widest uppercase">
            {ordinal(rank)}
          </span>
          <span
            className="rounded-full bg-white/95 px-2 py-0.5 font-display text-xs font-black uppercase tracking-wider"
            style={{ color: '#1E293B' }}
          >
            {color.label}
          </span>
        </div>

        {/* name */}
        <div className="px-5 pt-4 pb-1">
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
              className="w-full rounded-xl border-2 border-ink bg-white px-3 py-1.5 font-display text-2xl font-black focus:outline-none focus:ring-4 focus:ring-accent/30"
            />
          ) : (
            <button
              onClick={() => setEditing(true)}
              title="Click to rename"
              className="w-full text-left font-display text-2xl font-black leading-tight hover:text-accent"
            >
              {team.name}
            </button>
          )}
        </div>

        {/* score */}
        <div className="flex items-end justify-between px-5 pb-4">
          <div
            className={[
              'font-display text-6xl font-black leading-none tabular-nums',
              pop ? 'animate-score-pop' : '',
            ].join(' ')}
          >
            {team.score}
          </div>
          <div className="font-body text-xs font-semibold uppercase tracking-widest text-ink/60">
            pts
          </div>
        </div>
      </div>
    </div>
  );
}
