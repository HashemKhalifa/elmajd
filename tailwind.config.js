const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.violet,
        indigo: colors.indigo,
        teal: colors.teal,
        cyan: colors.cyan,
      }
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      alignContent: ['hover', 'focus'],
      animation: ['motion-reduce', 'motion-safe'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
