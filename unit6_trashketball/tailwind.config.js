/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFDF5',
        ink: '#1E293B',
        accent: '#8B5CF6',
        secondary: '#F472B6',
        tertiary: '#FBBF24',
        quaternary: '#34D399',
        sky: { brand: '#38BDF8' },
        rose: { brand: '#FB7185' },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sticker: '4px 4px 0 0 #1E293B',
        'sticker-sm': '3px 3px 0 0 #1E293B',
        'sticker-lg': '6px 6px 0 0 #1E293B',
        'sticker-xl': '8px 8px 0 0 #1E293B',
        'sticker-press': '1px 1px 0 0 #1E293B',
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
