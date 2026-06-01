/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:      '#0a0a0a',
        graphite:   '#2a2a2a',
        gold:       '#c9a84c',
        'gold-light': '#e0c06a',
        offwhite:   '#f8f6f1',
        champagne:  '#e8e0d0',
        navy:       '#1a2744',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
