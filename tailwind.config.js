/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'linear-gradient(110.97deg, #212130 0%,  #12121C 100%)',
        home_2: '-webkit-linear-gradient(100.53deg, #805FEC 1.07%, #A779F4 102.22%)'
      },
      colors: {
        portage: {
          DEFAULT: '#936CF0'
        }
      },
      fontSize: {
        title: ['4.5rem', '4.8rem'],
        'body-sm': ['0.875rem', '1.25rem']
      }
    }
  },
  plugins: []
};
