import { Button } from './ui/Button';

interface Props {
  phase: 'idle' | 'awarding' | 'shooting';
  round: number;
  remainingQuestions: number;
  totalQuestions: number;
  canUndo: boolean;
  onDraw: () => void;
  onSkip: () => void;
  onUndo: () => void;
  onReset: () => void;
  onNewGame: () => void;
}

export function ControlsPanel({
  phase,
  round,
  remainingQuestions,
  totalQuestions,
  canUndo,
  onDraw,
  onSkip,
  onUndo,
  onReset,
  onNewGame,
}: Props) {
  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-5 shadow-sticker">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-white shadow-sticker-sm">
            Round {round}
          </span>
          <span className="font-display text-xs font-bold uppercase tracking-widest text-ink/50">
            {remainingQuestions} of {totalQuestions} questions left
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {phase === 'idle' && (
            <>
              <Button variant="primary" size="xl" onClick={onDraw}>
                🎯 Draw Question
              </Button>
              <Button variant="ghost" size="md" onClick={onSkip} disabled>
                Skip
              </Button>
            </>
          )}
          <Button variant="ghost" size="md" onClick={onUndo} disabled={!canUndo}>
            ↶ Undo
          </Button>
          <Button variant="ghost" size="md" onClick={onReset}>
            ↺ Reset Scores
          </Button>
          <Button variant="ghost" size="md" onClick={onNewGame}>
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
}
