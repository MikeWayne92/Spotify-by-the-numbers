/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          'green-light': '#1ED760',
          'green-dark': '#1AA34A',
          black: '#191414',
          'gray-dark': '#121212',
          'gray-medium': '#282828',
          'gray-light': '#B3B3B3',
          white: '#FFFFFF'
        }
      },
      animation: {
        'flow': 'flow 15s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        'spotify': ['Circular', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'spotify': '0 8px 32px rgba(29, 185, 84, 0.15)',
        'spotify-dark': '0 8px 32px rgba(29, 185, 84, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'spotify-gradient': 'linear-gradient(135deg, #1DB954 0%, #1ED760 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'card-gradient-dark': 'linear-gradient(135deg, rgba(40, 40, 40, 0.8) 0%, rgba(18, 18, 18, 0.9) 100%)'
      }
    },
  },
  plugins: [],
};