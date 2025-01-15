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
      },
      colors: {
        accent: {
          500: '#39FF14',
          400: '#4DFF33',
          300: '#66FF4D',
        },
        highlight: {
          500: '#FF0000',
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
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
};