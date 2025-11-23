/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#0D1117',
          text: '#ededed',
          gold: '#C5A059',
          goldHover: '#A88A4A',
          border: 'rgba(255,255,255,0.1)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 4s infinite',
        'shimmer-fast': 'shimmer 1.5s infinite',
        'ai-glow': 'ai-glow 3s ease-in-out infinite',
        'ai-glow-ring': 'ai-glow-ring 3s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(30deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(30deg)' },
        },
        'ai-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(32, 178, 170, 0.4), 0 0 40px rgba(32, 178, 170, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(32, 178, 170, 0.8), 0 0 60px rgba(32, 178, 170, 0.4)',
          },
        },
        'ai-glow-ring': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(32, 178, 170, 0.4), inset 0 0 20px rgba(32, 178, 170, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 0 8px rgba(32, 178, 170, 0), inset 0 0 30px rgba(32, 178, 170, 0.3)',
          },
        },
        'draw-line': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
