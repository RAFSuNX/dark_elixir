/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          500: '#39FF14', // Neon Green
          400: '#4DFF33',
          300: '#66FF4D',
        },
        highlight: {
          500: '#FF0000', // Neon Red
          400: '#FF1A1A',
          300: '#FF3333',
        },
        neutral: {
          900: '#000000',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3D3D3D',
          500: '#4D4D4D',
          400: '#666666',
          300: '#808080',
          200: '#999999',
          100: '#B3B3B3',
          50: '#F5F5F5',
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};