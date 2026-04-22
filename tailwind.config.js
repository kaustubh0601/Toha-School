/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark:    '#1d4ed8',
          light:   '#3b82f6',
          50:      '#eff6ff',
          100:     '#dbeafe',
        },
        /* keep legacy names so existing JSX classes still compile */
        navy: {
          DEFAULT: '#111827',
          mid:     '#1f2937',
          deep:    '#2563eb',
        },
        gold: {   
          DEFAULT: '#2563eb',
          light:   '#3b82f6',
          dark:    '#1d4ed8',
        },
        cream: '#f9fafb',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans:     ['"Inter"', 'sans-serif'],
        playfair: ['"Inter"', 'sans-serif'],
        dm:       ['"Inter"', 'sans-serif'],
        mono:     ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float:        'float 4s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.25s ease forwards',
        shimmer:      'shimmer 2s infinite linear',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
