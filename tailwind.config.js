/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: {
          accent                : 'var(--color-accent)',
          onaccent              : 'var(--color-text-onaccent)',
          base                  : 'var(--color-text-base)',
          muted                 : 'var(--color-text-muted)',
          inverted              : 'var(--color-text-inverted)',
          contentbg             : 'var(--color-contentbg)',
          sidebarbg             : 'var(--color-sidebarbg)',
          secondsidebarbg       : 'var(--color-secondsidebarbg)',
          secondsidebarline     : 'var(--color-secondsidebarline)',
          secondsidebarhover    : 'var(--color-secondsidebarhover)',
          secondsidebarselected : 'var(--color-secondsidebarselected)',
          sidebarselected       : 'var(--color-sidebarselected)',
          tooltipbg             : 'var(--color-tooltipbg)',
          scrollbarbg           : 'var(--color-scrollbarbg)',
          scrollbartrackbg      : 'var(--color-scrollbartrackbg)',
        },
        tblue: '#5865f2',
        tlightblue: '#16a1a3',
        tgreen: '#16a34a',
        tred: '#ed4245',
        torange: '#faa61a',
        tyellow: '#ffd01a',
        grey: {
          950: '#111214',
          900: '#1e1f22',
          800: '#232428',
          700: '#2b2d31',
          600: '#313338',
          500: '#36373d',
          400: '#3a3c42',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
    
  ],
}
