import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';

interface Props {
  teams: Team[];
}

const LEADER_TARGET_RATIO = 0.75;
const MIN_SCORE_FLOOR = 0;
const MIN_VISIBLE_MAX = 10;

/**
 * Number-line / bar hybrid: each team floats above its score position so
 * the gaps between teams are visible at a glance.
 */
export function ScoreVisualization({ teams }: Props) {
  const highestScore = Math.max(...teams.map((t) => t.score), MIN_SCORE_FLOOR);
  const min = Math.min(MIN_SCORE_FLOOR, ...teams.map((t) => t.score));
  const max = computeVisibleMax(highestScore, min);
  const range = max - min || 1;

  // Cluster teams that share a score so chips don't fully overlap.
  const buckets = new Map<number, number>();
  const positioned = teams.map((team) => {
    const offset = buckets.get(team.score) ?? 0;
    buckets.set(team.score, offset + 1);
    const pct = ((team.score - min) / range) * 100;
    return { team, pct, offset };
  });

  // Tick marks every "nice" interval.
  const tickStep = niceStep(range);
  const ticks = new Set<number>([min, max]);
  for (let v = Math.ceil(min / tickStep) * tickStep; v <= max; v += tickStep) {
    ticks.add(Number(v.toFixed(4)));
  }
  const orderedTicks = [...ticks].sort((a, b) => a - b);

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-5 shadow-sticker">
      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-ink/60">
          Score Map
        </span>
        <span className="font-display text-xs font-bold tabular-nums text-ink/40">
          {formatTick(min)} — {formatTick(max)}
        </span>
      </div>

      <div className="relative mt-5 h-24">
        {/* track */}
        <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full border-2 border-ink bg-canvas" />
        {/* ticks */}
        {orderedTicks.map((v) => {
          const pct = ((v - min) / range) * 100;
          return (
            <div
              key={v}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${pct}%` }}
            >
              <div className="h-3 w-0.5 -translate-x-1/2 bg-ink/30" />
              <div className="absolute top-3 -translate-x-1/2 pt-1 font-display text-[10px] font-bold tabular-nums text-ink/50">
                {formatTick(v)}
              </div>
            </div>
          );
        })}

        {/* team chips */}
        {positioned.map(({ team, pct, offset }) => {
          const color = getTeamColor(team);
          return (
            <div
              key={team.id}
              className="absolute top-1/2 transition-all duration-500 ease-out"
              style={{
                left: `${pct}%`,
                transform: `translate(-50%, calc(-50% - ${28 + offset * 6}px))`,
              }}
              title={`${team.name} · ${team.score}`}
            >
              <div
                className="flex items-center gap-1.5 rounded-full border-2 border-ink px-2.5 py-1 shadow-sticker-sm"
                style={{ background: color.bg, color: color.fg }}
              >
                <span className="font-display text-xs font-black truncate max-w-[8rem]">
                  {team.name}
                </span>
                <span className="rounded-full bg-white/95 px-1.5 py-0.5 font-display text-[10px] font-black tabular-nums text-ink">
                  {team.score}
                </span>
              </div>
              <div
                aria-hidden
                className="absolute left-1/2 top-full -translate-x-1/2 h-3 w-0.5"
                style={{ background: '#1E293B' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function computeVisibleMax(highestScore: number, min: number): number {
  const paddedRange = Math.ceil((highestScore - min) / LEADER_TARGET_RATIO);
  return Math.max(MIN_VISIBLE_MAX, min + paddedRange);
}

function niceStep(range: number): number {
  if (range <= 12) return 2;
  if (range <= 20) return 5;
  if (range <= 32) return 8;
  if (range <= 60) return 10;
  if (range <= 120) return 20;
  return 25;
}

function formatTick(value: number): string {
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
}
