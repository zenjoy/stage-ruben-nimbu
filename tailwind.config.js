/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'infinite-scroll2': 'infinite-scroll 55s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        yellow: '#FDB833',
        blue: '#0A284A',
        darkblue: '#031222',
        blue2: '#133F70',
        blue3: '#23446A',
        black: '#031222',
        white: '#F7F7F7',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        franklin: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
