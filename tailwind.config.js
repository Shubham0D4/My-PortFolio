/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090d',
        soot: '#0e1016',
        slate: {
          panel: '#13161e',
          line: '#232833',
        },
        paper: '#ece7dc',
        mist: '#9a9588',
        mint: '#6ee7c5',
        bronze: '#d4a574',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(110, 231, 197, 0.35)',
        bronze: '0 0 60px -18px rgba(212, 165, 116, 0.4)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
    },
  },
  plugins: [],
};
