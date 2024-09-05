/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5sm': '.5rem', // 8
        '4sm': '.625rem', // 10
        '3sm': '.675rem',
        xs: '.75rem', // 12
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem', // 18
        xl: '1.25rem', // 20
        '2xl': '1.375rem', // 24
        '3xl': '1.5rem', // 24
        '4xl': '2.0rem', // 32
        '5xl': '2.5rem', // 42
      },
    },
  },
  plugins: [],
};
