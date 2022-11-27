/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'signin-window': '400px',
        'signup-window': '400px'
      },
      maxHeight: {
        'signin-window': '550px',
        'signup-window': '610px'
      }
    },
  },
  plugins: [],
}
