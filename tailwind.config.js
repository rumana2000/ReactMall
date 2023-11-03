/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        poppins: " 'Poppins' , sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        "primary" : "#ef4444"
      }
    },
  },
  variants: {
    extends: {
      display:['group-hover']
    },
  },
  plugins: [require('@tailwindcss/forms')],
}