/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'd1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'd2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'd3': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h5': ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      colors: {
        accent: {
          500: '#00FF66', // Brighter, more vibrant green
          400: '#33FF85',
          300: '#66FFA3',
        },
        highlight: {
          500: '#FF3366', // More vibrant red
          400: '#FF4D7F',
          300: '#FF6699',
        },
        neutral: {
          900: '#0A0A0A', // Darker black for better contrast
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#404040',
          500: '#666666',
          400: '#808080',
          300: '#A3A3A3', // Lighter text for better readability
          200: '#CCCCCC',
          100: '#E5E5E5',
          50: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
};