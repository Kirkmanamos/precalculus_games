import type { GameMode } from '../state/useGameState';
import { Button } from './ui/Button';

interface Props {
  mode: GameMode;
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
  mode,
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
  const isPractice = mode === 'practice';

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-sticker sm:p-5">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-start">
          {isPractice ? (
            <span className="rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-white shadow-sticker-sm">
              Practice Mode
            </span>
          ) : (
            <span className="rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-white shadow-sticker-sm">
              Round {round}
            </span>
          )}
          <span className="font-display text-[11px] font-bold uppercase tracking-widest text-ink/50 sm:text-xs">
            {remainingQuestions} of {totalQuestions} questions left
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
          {phase === 'idle' && (
            <>
              <Button variant="primary" size="xl" onClick={onDraw} className="col-span-2 w-full sm:col-span-1 sm:w-auto">
                {isPractice ? '🎯 Continue Practice' : '🎯 Draw Question'}
              </Button>
              {!isPractice && (
                <Button variant="ghost" size="md" onClick={onSkip} disabled className="w-full sm:w-auto">
                  Skip
                </Button>
              )}
            </>
          )}
          <Button variant="ghost" size="md" onClick={onUndo} disabled={!canUndo} className="w-full sm:w-auto">
            ↶ Undo
          </Button>
          <Button variant="ghost" size="md" onClick={onReset} className="w-full sm:w-auto">
            {isPractice ? '↺ Reset Deck' : '↺ Reset Scores'}
          </Button>
          <Button variant="ghost" size="md" onClick={onNewGame} className="w-full sm:w-auto">
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
}
