/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'custom-gray': '#f3f4f6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
    },
  },
  plugins: [], // Removed '@tailwindcss/forms' from here if not using it
};
