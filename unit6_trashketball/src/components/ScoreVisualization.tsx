import type { Team } from '../state/useGameState';
import { getTeamColor } from '../state/useGameState';

interface Props {
  teams: Team[];
}

interface ScoreBucket {
  score: number;
  pct: number;
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
  const scoreBuckets = buildScoreBuckets(teams, min, range);
  const largestBucketSize = Math.max(...scoreBuckets.map((bucket) => bucket.teams.length), 1);
  const plotHeight = getPlotHeight(largestBucketSize);

  // Tick marks every "nice" interval.
  const tickStep = niceStep(range);
  const ticks = new Set<number>([min, max]);
  for (let v = Math.ceil(min / tickStep) * tickStep; v <= max; v += tickStep) {
    ticks.add(Number(v.toFixed(4)));
  }
  const orderedTicks = [...ticks].sort((a, b) => a - b);

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-sticker sm:p-5 lg:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-ink/60 lg:text-sm">
          Score Map
        </span>
        <span className="font-display text-xs font-bold tabular-nums text-ink/40 lg:text-sm">
          {formatTick(min)} — {formatTick(max)}
        </span>
      </div>

      <div className="mt-5 overflow-x-auto pb-2 lg:pb-0">
        <div className="relative min-w-[30rem] sm:min-w-0" style={{ height: plotHeight }}>
          <div className="absolute inset-x-6 inset-y-0 sm:inset-x-8 md:inset-x-10 xl:inset-x-12">
            {scoreBuckets.map((bucket) => (
              <div
                key={bucket.score}
                className="absolute bottom-12 transition-all duration-500 ease-out"
                style={{
                  left: `${bucket.pct}%`,
                  transform: bucketPosition(bucket.score, min, max),
                  zIndex: 10 + bucket.teams.length,
                }}
              >
                <BucketChipStack bucket={bucket} />
                <div aria-hidden className="mx-auto h-4 w-0.5 bg-ink/35" />
              </div>
            ))}

            {/* track */}
            <div className="absolute inset-x-0 bottom-8 h-2 rounded-full border-2 border-ink bg-canvas lg:h-3" />

            {/* ticks */}
            {orderedTicks.map((v) => {
              const pct = ((v - min) / range) * 100;
              return (
                <div
                  key={v}
                  className="absolute bottom-8 -translate-x-1/2"
                  style={{ left: `${pct}%` }}
                >
                  <div className="h-3 w-0.5 bg-ink/30 lg:h-4" />
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 pt-1 font-display text-[9px] font-bold tabular-nums text-ink/50 sm:text-[10px] lg:text-xs">
                    {formatTick(v)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function buildScoreBuckets(teams: Team[], min: number, range: number): ScoreBucket[] {
  const grouped = new Map<number, Team[]>();
  teams.forEach((team) => {
    const bucket = grouped.get(team.score) ?? [];
    bucket.push(team);
    grouped.set(team.score, bucket);
  });

  return [...grouped.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([score, bucketTeams]) => ({
      score,
      pct: ((score - min) / range) * 100,
      teams: bucketTeams,
    }));
}

function bucketPosition(score: number, min: number, max: number): string {
  if (score === min) return 'translateX(0)';
  if (score === max) return 'translateX(-100%)';
  return 'translateX(-50%)';
}

function getPlotHeight(largestBucketSize: number): number {
  if (largestBucketSize >= 6) return 256;
  if (largestBucketSize >= 4) return 216;
  if (largestBucketSize >= 2) return 182;
  return 144;
}

function BucketChipStack({ bucket }: { bucket: ScoreBucket }) {
  return (
    <div className="flex flex-col-reverse items-start -space-y-2">
      {bucket.teams.map((team) => (
        <MiniScoreChip key={team.id} team={team} />
      ))}
    </div>
  );
}

function MiniScoreChip({ team }: { team: Team }) {
  const color = getTeamColor(team);
  return (
    <div
      className="flex w-[10.25rem] max-w-[10.25rem] items-center gap-2 rounded-2xl border-2 border-ink px-2.5 py-1 shadow-sticker-sm"
      style={{ background: color.bg, color: color.fg }}
      title={`${team.name} · ${team.score}`}
    >
      <span className="min-w-0 flex-1 truncate font-display text-sm font-black leading-none">
        {team.name}
      </span>
      <span className="rounded-full bg-white/95 px-2 py-0.5 font-display text-xs font-black tabular-nums text-ink">
        {team.score}
      </span>
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
