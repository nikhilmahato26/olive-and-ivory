/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1E8',
        cream: '#EFE9DB',
        sand: '#E2DAC6',
        sage: '#9AA184',
        'sage-light': '#B5BAA3',
        olive: '#414D24',
        'olive-deep': '#2F3818',
        charcoal: '#2B2B26',
        stone: '#7C7A6B',
        gold: '#B99B5F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        page: '82rem',
      },
    },
  },
  plugins: [],
}
