/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#007bff',
        btnLight: '#0039a6',
        btnDark: '#FF4D4D',
        textDark: '#13274F'
      }
    },
  },
  plugins: [],
}