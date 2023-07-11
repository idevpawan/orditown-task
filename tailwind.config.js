/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'spaced': ['Spaced', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        primary: "#E6A71E",
        secondary: "#B837FC"
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
      }
    },
  },
  plugins: [],
}
