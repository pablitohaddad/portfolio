/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso garante que ele olhe dentro de src e subpastas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}