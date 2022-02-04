module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'alemania': "url('./public/assets/images/alemania.jpg')",
        'brazil': "url('./public/assets/images/brazil.jpg')",
        'canada': "url('./public/assets/images/canada.jpg')",
        'chichenItza': "url('./public/assets/images/chichen-itza.jpg')",
        'colombia': "url('./public/assets/images/Colombia.jpg')",
        'finlandia': "url('./public/assets/images/finlandia.jpg')",
        'francia': "url('./public/assets/images/francia.jpg')",
        'inglaterra': "url('./public/assets/images/inglaterra.jpg')",
        'machuPichu': "url('./public/assets/images/Machu_Picchu.jpg')",
        'miami': "url('./public/assets/images/Miami-florida.jpg')",
        'newYork': "url('./public/assets/images/newYork.jpg')",
        'noruega': "url('./public/assets/images/noruega.jpg')",
        'portugal': "url('./public/assets/images/portugal.jpg')",
        'roma': "url('./public/assets/images/roma.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1F1EFB',
        'secondary': '#1E7B16',
        'terciary': '#A0050E',
        'dark1': '#05001e',
        'dark2': '#102189'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#1F1EFB',
        'secondary': '#9F893C',
        'terciary': '#A0050E'
      }),
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
