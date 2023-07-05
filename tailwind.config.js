/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#DDD5EA',
        secondary: '#590BD8',
        tertiary: '#312A4F',
        grays: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E5E5E5',
          400: '#717171',
        }
      }
    },
  },
  plugins: [],
}
