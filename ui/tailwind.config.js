/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': '250px 1fr' 
      },
      width: {
        'alerts-menu': '380px'
      },
      height: {
        'dashboard-header': '65px'
      },
      maxWidth: {
        'signin-window': '400px',
        'signup-window': '400px'
      },
      maxHeight: {
        'signin-window': '550px',
        'signup-window': '610px'
      },
      boxShadow: {
        'popover': '0 0.1875rem 0.375rem -0.1875rem #17181814,0 0.5rem 1.25rem -0.25rem #1718181f',
        'card': '0 0 0.3125rem #1718180d,0 0.0625rem 0.125rem #00000026'
      },
      outlineColor: {
        'divider': '#e1e3e5'
      }
    },
  },
  plugins: [],
}
