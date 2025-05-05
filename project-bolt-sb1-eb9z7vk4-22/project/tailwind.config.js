/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f6f4fe',
          100: '#edebfd',
          200: '#dad5fa',
          300: '#bfb4f6',
          400: '#a28ef0',
          500: '#8264ed', // Primary
          600: '#724ae2',
          700: '#5e38cb',
          800: '#4d2fa8',
          900: '#422d89',
          950: '#271a57',
        },
        indigo: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d5fe',
          300: '#a4bafd',
          400: '#8295fa',
          500: '#6369f5',
          600: '#5244e9',
          700: '#4336d2',
          800: '#392daa',
          900: '#302a86',
          950: '#1c1950',
        },
        gray: {
          750: '#374151', // Custom for dark mode hover
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(130, 100, 237, 0.3)',
      },
    },
  },
  plugins: [],
};