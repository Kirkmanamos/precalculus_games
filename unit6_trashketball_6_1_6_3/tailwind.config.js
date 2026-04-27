/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--c-canvas) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        secondary: 'rgb(var(--c-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--c-tertiary) / <alpha-value>)',
        quaternary: 'rgb(var(--c-quaternary) / <alpha-value>)',
        sky: { brand: 'rgb(var(--c-sky) / <alpha-value>)' },
        rose: { brand: 'rgb(var(--c-rose) / <alpha-value>)' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sticker: 'var(--shadow-card)',
        'sticker-sm': 'var(--shadow-sm)',
        'sticker-lg': 'var(--shadow-lg)',
        'sticker-xl': 'var(--shadow-xl)',
        'sticker-press': 'var(--shadow-press)',
      },
      animation: {
        'pop-in': 'pop-in 320ms cubic-bezier(.34,1.56,.64,1)',
        'score-pop': 'score-pop 380ms cubic-bezier(.34,1.56,.64,1)',
        'wiggle': 'wiggle 800ms ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'score-pop': {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.18)' },
          '100%': { transform: 'scale(1)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-1.2deg)' },
          '50%': { transform: 'rotate(1.2deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
