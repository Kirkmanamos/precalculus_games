import type { Theme } from '../../lib/useTheme';

interface Props {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Sticker' : 'Dark';
  const icon = isDark ? '☀️' : '🌙';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${label} theme`}
      title={`Switch to ${label} theme`}
      className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1.5 font-display text-xs font-black uppercase tracking-widest shadow-sticker-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-press"
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
