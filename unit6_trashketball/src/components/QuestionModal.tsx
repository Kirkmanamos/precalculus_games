import { useEffect } from 'react';
import type { Question } from '../data/types';
import { Button } from './ui/Button';
import { MathText } from './ui/Math';

interface Props {
  question: Question;
  showAnswer: boolean;
  onReveal: () => void;
  onClose: () => void;
}

const NARRATIVE_WORD_THRESHOLD = 22;
const NARRATIVE_CHAR_THRESHOLD = 150;
const PROSE_HEAVY_CATEGORY = 'AP-Style Applications';

const DIFFICULTY_LABEL: Record<Question['difficulty'], { label: string; bg: string }> = {
  easy:   { label: 'Easy',   bg: 'bg-quaternary' },
  medium: { label: 'Medium', bg: 'bg-tertiary' },
  hard:   { label: 'Hard',   bg: 'bg-secondary' },
};

function getWordCount(text: string) {
  return text
    .replace(/(\$\$[\s\S]+?\$\$|\$(?:\\.|[^\\$\n])+\$)/g, ' math ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function QuestionModal({ question, showAnswer, onReveal, onClose }: Props) {
  // Esc closes; Enter reveals/closes.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter') {
        if (showAnswer) onClose();
        else onReveal();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showAnswer, onReveal, onClose]);

  const dl = DIFFICULTY_LABEL[question.difficulty];
  const questionWordCount = getWordCount(question.question);
  const answerWordCount = getWordCount(question.answer);
  const hintWordCount = question.hint ? getWordCount(question.hint) : 0;

  const useNarrativeQuestionLayout =
    question.category === PROSE_HEAVY_CATEGORY ||
    questionWordCount >= NARRATIVE_WORD_THRESHOLD ||
    question.question.length >= NARRATIVE_CHAR_THRESHOLD;

  const useNarrativeAnswerLayout =
    useNarrativeQuestionLayout ||
    answerWordCount >= 15 ||
    question.answer.length >= 95;

  const useNarrativeHintLayout =
    hintWordCount >= 18 || (question.hint?.length ?? 0) >= 110;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Question"
      className="fixed inset-0 z-40 overflow-y-auto bg-ink/70 p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex min-h-full items-start justify-center py-2 sm:items-center sm:py-4">
        <div className="relative w-full max-w-5xl max-h-[calc(100vh-1rem)] overflow-y-auto rounded-3xl border-2 border-ink bg-canvas shadow-sticker-xl animate-pop-in sm:max-h-[calc(100vh-2rem)]">
          <button
            onClick={onClose}
            aria-label="Close question"
            className="absolute right-4 top-4 h-10 w-10 rounded-full border-2 border-ink bg-white font-display text-xl font-black shadow-sticker-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker-lg active:translate-x-1 active:translate-y-1 active:shadow-sticker-press sm:right-6 sm:top-6"
          >
            ✕
          </button>

          <div className="px-6 pb-8 pt-6 sm:px-14 sm:pb-10 sm:pt-8">
            <div className="flex flex-wrap gap-2 pr-14 sm:pr-20">
              <span className="rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-white shadow-sticker-sm">
                {question.category}
              </span>
              <span
                className={`rounded-full border-2 border-ink ${dl.bg} px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-ink shadow-sticker-sm`}
              >
                {dl.label}
              </span>
            </div>

            <div className="mt-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
              Question
            </div>
            <div
              className={[
                'mt-3 font-body font-semibold text-ink',
                useNarrativeQuestionLayout
                  ? 'max-w-3xl text-2xl leading-relaxed'
                  : 'text-3xl leading-snug sm:text-5xl sm:leading-tight',
              ].join(' ')}
            >
              <MathText>{question.question}</MathText>
            </div>

            {showAnswer && (
              <div className="mt-10 animate-pop-in">
                <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-quaternary">
                  Answer
                </div>
                <div className="mt-3 rounded-3xl border-2 border-ink bg-quaternary/30 px-6 py-6 shadow-sticker">
                  <div
                    className={[
                      'font-body font-bold text-ink',
                      useNarrativeAnswerLayout
                        ? 'max-w-3xl text-2xl leading-relaxed'
                        : 'text-3xl leading-snug sm:text-5xl sm:leading-tight',
                    ].join(' ')}
                  >
                    <MathText>{question.answer}</MathText>
                  </div>
                  {question.hint && (
                    <div
                      className={[
                        'mt-4 border-t-2 border-ink/20 pt-4 text-ink/75',
                        useNarrativeHintLayout
                          ? 'text-base leading-relaxed'
                          : 'text-lg leading-relaxed sm:text-xl',
                      ].join(' ')}
                    >
                      <span className="font-display font-bold uppercase text-xs tracking-widest text-ink/50 mr-2">
                        Why:
                      </span>
                      <MathText>{question.hint}</MathText>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap items-center justify-end gap-4">
              <Button variant="ghost" size="lg" onClick={onClose}>
                Close
              </Button>
              {!showAnswer ? (
                <Button variant="primary" size="xl" onClick={onReveal}>
                  Reveal Answer ✨
                </Button>
              ) : (
                <Button variant="quaternary" size="xl" onClick={onClose}>
                  Done — Score Round →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
