/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js",
    "./components/Nav.js",
    "./components/home/HeaderInput.js",
    "./components/home/HeaderAlert.js",
    "./components/home/HomeInput.js",
  ],
  theme: {
    screens: {
      sm: "0px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
