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
        // Display typography
        'd1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'd2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'd3': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        // Heading typography
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h5': ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Body typography
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'xs': ['0.75rem', { lineHeight: '1.6', letterSpacing: '0' }],
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