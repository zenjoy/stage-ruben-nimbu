/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },      
      colors: {
        'yellow': '#FDB833',
        'blue': '#84C7D0',
        'green': '#708D81',
        'black': '#272727',
        'white': '#F7F7F7',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        franklin: ['Libre Franklin', 'sans-serif']
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
