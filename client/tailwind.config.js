/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxxs: "340px",
        xxs: "400px",
        xs: "480px",
        sm: "580px",
        md: "768px",
        lg: "1024px"
      },
      colors: {
        "green-1": "#12724F",
        "green-2": "#0F5F42",
        "gray-1": "#ddd"
      }
    }
  },
  plugins: []
};
