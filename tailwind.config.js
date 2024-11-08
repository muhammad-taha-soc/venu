/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        clash: ["Clash Grotesk"],
        general: ["General Sans"],
      },
      backgroundImage: {
        "background-image": "url('/assets/img/background.png')",
        "background-vector": "url('/assets/img/vector-hero-img.png')",
      },
    },
  },
  plugins: [],
};
