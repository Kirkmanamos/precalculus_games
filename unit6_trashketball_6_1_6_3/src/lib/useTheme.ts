import { useEffect, useState } from 'react';

export type Theme = 'sticker' | 'dark';

const STORAGE_KEY = 'unit6_trashketball_theme';

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'sticker';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'dark' ? 'dark' : 'sticker';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* localStorage unavailable — non-fatal */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'sticker' ? 'dark' : 'sticker'));

  return { theme, setTheme, toggle };
}
