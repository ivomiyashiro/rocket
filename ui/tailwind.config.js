/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': '250px 1fr',
      },
      gridColumn: {
        'dashboard-add-product-first-img': '1/span 2'
      },
      gridRow: {
        'dashboard-add-product-first-img': '1/span 2'
      },
      flex: {
        'dashboard-add-product-col-1': '2 2 30rem',
        'dashboard-add-product-col-2': '1 1 15rem'
      },
      width: {
        'dashboard-mobile-aside-menu': '360px',
        'dashboard-add-product-image-base': '292px',
        'dashboard-add-product-image-sm': '150px',
      },
      height: {
        'dashboard-header': '56px',
        'dashboard-add-product-image-base': '292px',
        'dashboard-add-product-image-sm': '138px',
      },
      minWidth: {
        'dashboard-header-logo': '240px',
        'dashboard-header-menu': '145px',
        'dashboard-alerts-menu': '380px',
        'dashboard-add-product-col-1': '51%'
      },
      minHeight: {
        'dashboard-searcher-results': '160px',
        'dashboard-add-product-media': '118px'
      },
      maxWidth: {
        'signin-window': '400px',
        'signup-window': '400px',
        'dashboard-main': '62.375rem',
        'dashboard-searcher': '700px',
        'dashboard-create-product-col-2': '350px'
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
