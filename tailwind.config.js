module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        'alum': '#a7abbb',
        'alum-lite': '#d8d8db',
        'rome': '#ffbe9a',
        'rome-lite': '#feefe4'
      },
      fontFamily: {
        'serif': '"Lora", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'sans': '"Lato", Georgia, Cambria, "Times New Roman", Times, serif'
      }
    },
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          // width: '100%',
          '@apply px-6 mx-auto': {},
          // '@screen sm': {
          //   maxWidth: '400px',
          // },
          // '@screen md': {
          //   maxWidth: '600px',
          // },
          // '@screen lg': {
          //   maxWidth: '800px',
          // },
          // '@screen xl': {
          //   maxWidth: '1000px',
          // },
        }
      })
    }
  ]
}
