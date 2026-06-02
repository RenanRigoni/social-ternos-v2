/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm-dark editorial palette
        ink:        '#0b0a09', // fundo base (quase preto, levemente quente)
        charcoal:   '#141210', // seções alternadas
        graphite:   '#1b1815', // painéis / cards
        gold:       '#c5a258', // accent champagne-dourado controlado
        'gold-light': '#e0c47e',
        champagne:  '#cdbd9c', // texto de destaque quente
        bone:       '#efe9dd', // off-white quente
        offwhite:   '#efe9dd', // alias (compat)
        black:      '#0b0a09', // alias (compat)
        navy:       '#1a2744',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        heading: ['"Bodoni Moda"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra:  '0.35em',
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.14)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s ease-out forwards',
        marquee:  'marquee 38s linear infinite',
        floaty:   'floaty 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
