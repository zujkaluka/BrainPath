/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Modern medical blue — trust and professionalism
        primary: {
          50: "#eef6fb",
          100: "#d8eaf6",
          200: "#b5d8ee",
          300: "#85bee2",
          400: "#4e9dd2",
          500: "#2b7fbd",
          600: "#1e66a0",
          700: "#1b5382",
          800: "#1b466c",
          900: "#1b3c5b",
          950: "#12263c",
        },
        // Warm beige — family care
        sand: {
          50: "#fbf8f3",
          100: "#f5efe4",
          200: "#eadcc6",
          300: "#dcc49f",
          400: "#cca877",
          500: "#c1935c",
          600: "#b38150",
          700: "#956844",
          800: "#79553c",
          900: "#634633",
        },
        // Soft natural green — health and freshness
        mint: {
          50: "#f2f8f5",
          100: "#e0efe6",
          200: "#c3dfd0",
          300: "#99c7b2",
          400: "#6caa90",
          500: "#4c8e74",
          600: "#39725d",
          700: "#2f5c4c",
          800: "#294a3f",
          900: "#233d35",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgb(27 60 91 / 0.12)",
        lift: "0 12px 40px -12px rgb(27 60 91 / 0.25)",
      },
    },
  },
  plugins: [],
};
