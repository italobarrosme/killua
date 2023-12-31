/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)',
      },
      colors: {
        brand: {
          primary: '#401AE0',
          secondary: '#590BD8',
          ternary: '#DDD5EA',
          grays: {
            100: '#FFFFFF',
            200: '#F5F5F5',
            300: '#E5E5E5',
            400: '#717171',
          },
          dark: '#312A4F',
        }
        
      }
    },
  },
  plugins: [],
}
