/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        border: {
          to: { '--border-angle': '360deg' },
        },
        'infinite-scroll-1': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-2': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-scroll-1': 'infinite-scroll-1 40s linear infinite',
        'infinite-scroll-2': 'infinite-scroll-2 6s linear infinite',
        border: 'border 14s linear infinite',
      },
      colors: {
        yellow: '#FDB833',
        blue: '#071C33',
        lightblue: '#0A284A',
        black: '#031222',
        white: '#F7F7F7',
        pink: '#fe8bbb',
        lightyellow: '#f9c151',
        lightyellow2: '#fee3ac',
        lightyellow3: '#ffe9be9c',
        grayLine: '#323c48',
        pomelo: '#F25566',
        lime: '#78BC61',
        orange: '#F45930',
        darkblue: '#020c17',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        franklin: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
