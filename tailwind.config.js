/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust as needed if you use TypeScript
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#009444',
        'primary-dark': '#7e9f37', // Darker shade of the primary color
        'secondary': '#F7FAFF', // Secondary color (another green shade)
        'alert': '#d33', // Red color for alerts or warnings
        'confirm': '#3085d6', // Blue color for confirmation buttons
      },
    },
  },
  plugins: [],
};
