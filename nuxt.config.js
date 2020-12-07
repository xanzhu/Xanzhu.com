export default {
  target: 'static',

  server: {
    port: 3001
  },

  head: {
    bodyAttrs: {
      class: 'dark:bg-black bg-gray-200'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
    // link: [
    //   { rel: 'icon', type: 'image/png', href: '16.png', sizes: '16x16' },
    //   { rel: 'icon', type: 'image/png', href: '32.png', sizes: '32x32' }
    // ]
  },
  css: [],
  plugins: [],
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-svg-loader',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en',
            name: 'EN',
            file: 'en.js'
          },
          {
            code: 'ko',
            iso: 'ko',
            name: 'KO',
            file: 'ko.js'
          },
          {
            code: 'zh',
            iso: 'zh',
            name: 'ZH',
            file: 'zh.js'
          },
          {
            code: 'de',
            iso: 'de',
            name: 'DE',
            file: 'de.js'
          },
          {
            code: 'ru',
            iso: 'ru',
            name: 'RU',
            file: 'ru.js'
          },
          {
            code: 'fr',
            iso: 'fr',
            name: 'FR',
            file: 'fr.js'
          },
          {
            code: 'ja',
            iso: 'ja',
            name: 'JA',
            file: 'ja.js'
          }
        ]
      }
    ],
    '@nuxtjs/sitemap'
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'i18n/',
    lazy: true,
    detectBrowserLanguage: {
      onlyOnRoot: true
    },
    seo: false,
    vueI18n: {
      fallbackLocale: 'en',
      dateTimeFormats: {
        ko: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        zh: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        en: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        ru: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        de: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        fr: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        ja: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        }
      }
    }
  },
  // cloudinary: { - Dropped support for now.
  //   cloudName: process.env.CLOUDNAME,
  //   useComponent: true,
  //   secure: true
  //   // apiKey / apiSecret - Server Side uploads (Not Needed)
  // },
  generate: {
    fallback: true
  },
  sitemap: {
    hostname: 'https://xanzhu.com',
    gzip: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend (config, { isDev, isClient }) {
      config.module.rules.forEach((rule) => {
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
