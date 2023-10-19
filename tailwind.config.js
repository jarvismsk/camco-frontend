/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem', // Extra small
        sm: '0.875rem', // Small
        base: '1rem', // Base size
        lg: '1.125rem', // Large
        xl: '1.25rem', // Extra large
        '2xl': '1.5rem', // Double extra large
        '3xl': '1.875rem', // Triple extra large
        '4xl': '2rem',
        // Add more sizes as needed
      },
      backgroundColor: {
        'back': '#D8D8D8',  // Background color for the app
      },
      textColor: {
        'primary': '#AAAAAA', // Primary text color
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Font Inter
      },
    },
  },
  variants: {},
  plugins: [],
};
