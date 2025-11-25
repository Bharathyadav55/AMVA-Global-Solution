// tailwind.config.js
export default {
  // Use class strategy so toggling `document.documentElement.classList` controls dark mode
  darkMode: "class",

  // Theme customizations
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0b5563",
          blue: "#0ea5e9",
          yellow: "#facc15",
        },
      },
      spacing: {
        // used in some hero styles in the components
        "160": "40rem",
      },
    },
  },

  // Note: with the @tailwindcss/vite plugin you typically don't need to supply `content`
  // here — the Vite plugin handles content scanning for you.
  //
  // If you prefer to include plugins like forms, comment/uncomment below:
  //
  // plugins: [
  //   require('@tailwindcss/forms'),
  // ],
};
