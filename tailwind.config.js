/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      width: {
        "camera-width": "700px",
      },
      height: {
        "camera-height": "385px",
      }
    },
  },
  plugins: [],
}

