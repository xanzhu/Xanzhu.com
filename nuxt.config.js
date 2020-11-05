export default {
  target: 'static',
  client: 'modern',

  server: {
    port: 3001
  },
  head: {
    title: 'Home - xanzhu.com | Understand the technology you use',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Find information on using the latest technologies. Staying up to date with trends and understand what security means to you.'
      }
    ],
    // bodyAttrs: {
    //   class: 'bg-black'
    // },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'https://res.cloudinary.com/xanzhu/image/upload/v1603961317/xanzhu.com/x16_gqxqxw.png'
      }
    ]
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
    '@nuxtjs/cloudinary',
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
            code: 'ja',
            iso: 'ja',
            name: 'JA',
            file: 'ja.js'
          },
          {
            code: 'ru',
            iso: 'ru',
            name: 'RU',
            file: 'ru.js'
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
        ja: {
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
        }
      }
    }
  },

  sitemap: {
    hostname: 'https://xanzhu.com',
    gzip: true,
    i18n: true
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME
    // apiKey: process.env.API_KEY,
    // apiSecret: process.env.API_SECRET
  },
  /* Testing Netlify 404 fall back */
  generate: {
    fallback: true
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
