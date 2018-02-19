module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Knot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' }
  ],
  plugins: [
    { src: '~plugins/lazysizes.js' },
    { src: '~plugins/vue-picture-input.js' },
    { src: '~plugins/buefy.js' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    vendor: [
      'axios',
      'lazysizes'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
