/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        violet: {
          600: '#7c3aed',
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        ping: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 40px rgba(0,0,0,0.10)',
        glow: '0 4px 20px rgba(99,102,241,0.35)',
      },
    },
  },
  plugins: [],
}
