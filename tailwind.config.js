module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        aoboshi: ["Aoboshi One", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "genesis-orange": "#ff6f3d",
        "genesis-blue": "#3a84b6",
      },
      boxShadow: {
        "inset-bottom": "inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5)",
      },
      dropShadow: {
        sm: "0 4px 3px rgb(0 0 0 / 42%)",
      },
      screens: {
        "custom-nav": { min: "768px", max: "850px" },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-focus",
      ],
      display: ["responsive", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
      textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
      translate: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
