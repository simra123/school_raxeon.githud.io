// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone-sm': '320px',
      'phone-md': '375px',
      'phone-lg': '414px',
      'tab-sm': '1024px',
      'tab-md': '1112px',
      'tabl-lg': '1366px',
      'web-sm': '800px',
      'web-md': '1366px',
      'web-lg': '1920px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-purple': '#3e0bec',
        'primary': '#6c63fc',
        'secondary': '#3f3d56',
        'primary-light': '#f0f0ff',
      },
      keyframes: {
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        },
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out',
        grow: 'grow 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}