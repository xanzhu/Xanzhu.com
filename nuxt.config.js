
export default {
  target: 'server',
  client: 'modern',

  server: {
    port: 3001
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'DUUNE BY XANZHU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, {isDev, isClient}) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })
    }
  }
}
