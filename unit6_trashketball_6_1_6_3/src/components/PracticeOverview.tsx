interface Props {
  remainingQuestions: number;
  totalQuestions: number;
}

export function PracticeOverview({ remainingQuestions, totalQuestions }: Props) {
  const seenQuestions = totalQuestions - remainingQuestions;

  return (
    <div className="rounded-3xl border-2 border-ink bg-white p-5 shadow-sticker-lg sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-white shadow-sticker-sm">
          Practice Mode
        </span>
        <span className="font-display text-[11px] font-bold uppercase tracking-widest text-ink/50 sm:text-xs">
          {remainingQuestions} of {totalQuestions} questions left
        </span>
      </div>

      <h2 className="mt-5 font-display text-3xl font-black leading-none sm:text-4xl">
        Random Question Drill
      </h2>
      <p className="mt-3 max-w-3xl font-body text-base font-semibold leading-relaxed text-ink/70 sm:text-lg">
        Work through the 6.1–6.3 bank without teams, scores, or shot phases.
        Reveal the answer, then jump straight to the next random question.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-sticker-sm">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-ink/50 sm:text-xs">
            Seen
          </div>
          <div className="mt-2 font-display text-3xl font-black leading-none text-ink">
            {seenQuestions}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-sticker-sm">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-ink/50 sm:text-xs">
            Remaining
          </div>
          <div className="mt-2 font-display text-3xl font-black leading-none text-ink">
            {remainingQuestions}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-sticker-sm">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-ink/50 sm:text-xs">
            Total Bank
          </div>
          <div className="mt-2 font-display text-3xl font-black leading-none text-ink">
            {totalQuestions}
          </div>
        </div>
      </div>
    </div>
  );
}
