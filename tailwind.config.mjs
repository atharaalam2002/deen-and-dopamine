/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arab: ['Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eefdf5',
          100: '#d6fae7',
          200: '#aef2d0',
          300: '#76e2b1',
          400: '#36c68b',
          500: '#10b981',
          600: '#0d9569',
          700: '#0f7557',
          800: '#0f5d47',
          900: '#0c4a3e'
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed'
        },
        warm: { 500: '#f59e0b' }
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(139,92,246,.25), 0 0 30px rgba(16,185,129,.18)'
      },
      backgroundImage: {
        'islamic': 'radial-gradient(circle at 25px 25px, rgba(16,185,129,0.08) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(139,92,246,0.08) 2px, transparent 2px)',
        'grid': 'linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: [],
}
