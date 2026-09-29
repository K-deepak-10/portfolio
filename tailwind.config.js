/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0B0D',
        surface: '#131418',
        'surface-2': '#1A1C21',
        border: '#24262C',
        muted: '#9A9CA6',
        faint: '#5C5E66',
        ink: '#F3F3F1',
        accent: '#FFB454',
        'accent-dim': '#8A6633',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
