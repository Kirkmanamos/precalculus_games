import {
  useGameState,
  getCurrentShotTeam,
  getRemainingShotTeams,
} from './state/useGameState';
import { QUESTIONS } from './data/questions';
import { useTheme } from './lib/useTheme';
import { Decorations } from './components/ui/Decorations';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { Scoreboard } from './components/Scoreboard';
import { ScoreVisualization } from './components/ScoreVisualization';
import { TeamSetup } from './components/TeamSetup';
import { QuestionModal } from './components/QuestionModal';
import { ControlsPanel } from './components/ControlsPanel';
import { AwardPanel } from './components/AwardPanel';
import { ShotControls } from './components/ShotControls';
import { PracticeOverview } from './components/PracticeOverview';

export default function App() {
  const game = useGameState();
  const { theme, toggle } = useTheme();
  const { state } = game;

  if (state.phase === 'setup') {
    return (
      <TeamSetup
        theme={theme}
        onToggleTheme={toggle}
        onStart={({ mode, teams }) => {
          game.startGame(mode, teams);
        }}
      />
    );
  }

  const remaining = QUESTIONS.length - state.usedQuestionIds.length;
  const isPractice = state.mode === 'practice';
  const shotTeam = getCurrentShotTeam(state);
  const remainingShotTeams = getRemainingShotTeams(state);
  const shotNumber = state.teams.length - remainingShotTeams.length + 1;
  const showModal = state.phase === 'question' || state.phase === 'answer';

  // Map full phase to the subset ControlsPanel knows about.
  const controlsPhase: 'idle' | 'awarding' | 'shooting' =
    state.phase === 'awarding' ? 'awarding'
    : state.phase === 'shooting' ? 'shooting'
    : 'idle';

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <Decorations theme={theme} />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-3 py-4 sm:gap-6 sm:px-8 sm:py-10">
        {/* header strip */}
        <header className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="rounded-2xl border-2 border-ink bg-tertiary px-3 py-1.5 shadow-sticker-sm">
              <span className="font-display text-[11px] font-black uppercase tracking-widest sm:text-xs">
                🏀 Unit 6
              </span>
            </div>
            <h1 className="font-display text-2xl font-black leading-none sm:text-4xl">
              Trashket<span className="text-accent">ball</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <p className="hidden font-body text-sm font-semibold text-ink/60 sm:block">
              Sequences · Series · Binomial Theorem
            </p>
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>
        </header>

        {isPractice ? (
          <section aria-label="Practice overview" className="pt-4 sm:pt-6">
            <PracticeOverview
              remainingQuestions={remaining}
              totalQuestions={QUESTIONS.length}
            />
          </section>
        ) : (
          <>
            {/* scoreboard — always the focal point */}
            <section aria-label="Scoreboard" className="flex justify-center pt-4 sm:pt-6">
              <Scoreboard teams={state.teams} theme={theme} onRename={game.renameTeam} />
            </section>

            {/* secondary visualization */}
            <section aria-label="Score map">
              <ScoreVisualization teams={state.teams} />
            </section>
          </>
        )}

        {/* phase-specific panels */}
        {!isPractice && state.phase === 'awarding' && (
          <AwardPanel
            teams={state.teams}
            onApply={game.awardCorrect}
            onCancel={() => game.awardCorrect([])}
          />
        )}

        {!isPractice && state.phase === 'shooting' && (
          <ShotControls
            selectedTeam={shotTeam}
            remainingTeams={remainingShotTeams}
            shotNumber={shotNumber}
            totalTeams={state.teams.length}
            onSelectTeam={game.selectShotTeam}
            onAward={(points) => {
              if (shotTeam) game.awardShot(shotTeam.id, points);
            }}
          />
        )}

        {/* main controls */}
        <ControlsPanel
          mode={state.mode}
          phase={controlsPhase}
          round={state.round}
          remainingQuestions={remaining}
          totalQuestions={QUESTIONS.length}
          canUndo={game.canUndo}
          onDraw={game.drawQuestion}
          onSkip={game.skipQuestion}
          onUndo={game.undo}
          onReset={game.reset}
          onNewGame={game.newGame}
        />
      </main>

      {showModal && state.currentQuestion && (
        <QuestionModal
          mode={state.mode}
          question={state.currentQuestion}
          showAnswer={state.phase === 'answer'}
          onReveal={game.revealAnswer}
          onAdvancePractice={game.advancePracticeQuestion}
          onClose={game.closeQuestion}
        />
      )}
    </div>
  );
}
