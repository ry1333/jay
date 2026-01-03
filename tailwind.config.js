/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bws-dark': '#0d0d0d',
        'bws-card': '#1a1a1a',
        'bws-red': '#c92a2a',
        'bws-red-dark': '#a61e1e',
        // Keep orange as alias for backward compatibility during migration
        'bws-orange': '#c92a2a',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
