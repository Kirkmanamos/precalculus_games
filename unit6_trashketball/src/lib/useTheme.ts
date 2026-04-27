import { useEffect, useState } from 'react';

export type Theme = 'sticker' | 'vaporwave';

const STORAGE_KEY = 'unit6_trashketball_theme';

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'sticker';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'vaporwave' ? 'vaporwave' : 'sticker';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'vaporwave') {
    root.setAttribute('data-theme', 'vaporwave');
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

  const toggle = () => setTheme((t) => (t === 'sticker' ? 'vaporwave' : 'sticker'));

  return { theme, setTheme, toggle };
}
