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
        primary: {
          900: '#0B1221',
          800: '#0F1A2E',
          700: '#142339',
          600: '#1B2D47',
          500: '#234B78',
        },
        accent: {
          500: '#00E5FF',
          400: '#33EAFF',
          300: '#66EFFF',
        },
        highlight: {
          500: '#7C3AED',
          400: '#9061FF',
          300: '#A585FF',
        },
        neutral: {
          900: '#0A0A0A',
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
      animation: {
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};