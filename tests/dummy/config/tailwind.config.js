// NOTE: we should try an stay in sync with https://github.com/tailwindlabs/headlessui/blob/develop/tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // Added `typography` plugin to style Markdown in docs site
    require('@tailwindcss/typography'),
  ],
};
