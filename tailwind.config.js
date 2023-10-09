/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
