/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      colors: {
        deepRed: '#990000',
        gold: '#FFD700',
        earth: '#CD853F',
        saffron: '#FF9933',
      },
      animation: {
        'diya-glow': 'diya-glow 2s ease-in-out',
        'bell-ring': 'bell-ring 0.5s ease-in-out',
        'flicker': 'flicker 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUpSlightly 1s ease-out forwards',
      },
      keyframes: {
        'diya-glow': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bell-ring': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'flicker': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '25%': { transform: 'scale(1.05)', opacity: '0.9' },
          '50%': { transform: 'scale(0.95)', opacity: '0.7' },
          '75%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'fadeInUpSlightly': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'mandala-pattern': "url('/images/mandala-bg.png')",
      },
    },
  },
  plugins: [],
};