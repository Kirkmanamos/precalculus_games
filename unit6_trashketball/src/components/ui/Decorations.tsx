import type { Theme } from '../../lib/useTheme';

interface Props {
  theme: Theme;
}

/**
 * Background art layer. Pointer-events disabled so decor never steals clicks.
 * Sticker theme: blurred blobs, hard-shadow shapes, dot grid.
 * Vaporwave theme: blurred sun gradient + receding perspective grid + scanlines (via CSS).
 */
export function Decorations({ theme }: Props) {
  if (theme === 'vaporwave') {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      >
        <div className="vw-sun" />
        <div className="vw-grid" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      {/* big fuzzy blob */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-tertiary/25 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-quaternary/25 blur-3xl" />

      {/* hard shapes */}
      <div className="absolute top-10 right-16 h-10 w-10 rotate-12 rounded-md border-2 border-ink bg-secondary shadow-sticker animate-float-slow" />
      <div className="absolute top-1/2 left-6 h-14 w-14 rounded-full border-2 border-ink bg-tertiary shadow-sticker-sm" />
      <Triangle className="absolute bottom-20 right-24 h-16 w-16 text-quaternary animate-spin-slow" />
      <div className="absolute bottom-32 left-12 h-8 w-8 rounded-full border-2 border-ink bg-accent" />
      <Squiggle className="absolute top-24 left-1/3 h-10 w-24 text-accent" />
      <Squiggle className="absolute bottom-10 right-1/3 h-10 w-24 text-secondary" />

      {/* dot grid hint */}
      <div className="absolute inset-x-0 top-0 h-32 opacity-[0.07] [background-image:radial-gradient(#1E293B_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
    </div>
  );
}

function Triangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <polygon
        points="50,8 92,88 8,88"
        stroke="#1E293B"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 30" className={className} fill="none" stroke="currentColor">
      <path
        d="M2 15 Q 17 -2, 32 15 T 62 15 T 92 15 T 118 15"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
