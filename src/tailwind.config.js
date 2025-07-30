/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.export = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',     // IE and Edge
          'scrollbar-width': 'none',        // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',                  // Chrome, Safari, Opera
        },
      });
    },
  ],
};
