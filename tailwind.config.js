/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
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
      },
      colors: {
        yellow: '#FDB833',
        blue: '#0A284A',
        darkblue: '#031222',
        blue2: '#133F70',
        blue3: '#23446A',
        lightblue: '#CDE5FF',
        black: '#031222',
        white: '#F7F7F7',
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
