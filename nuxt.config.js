
export default {
  target: 'static',
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
    ]
    // link: [
    //   { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
    // ]
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
    'nuxt-purgecss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en',
          name: 'EN'
        },
        {
          code: 'ko',
          iso: 'ko',
          name: 'KO'
        },
        {
          code: 'zh',
          iso: 'zh',
          name: 'ZH'
        },
        {
          code: 'ja',
          iso: 'ja',
          name: 'JA'
        }
      ]
    }]
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      onlyOnRoot: true
    },
    seo: false,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          LatestNews: 'Latest News',
          UnderstandTech1: 'Understand Security, Technology',
          UnderstandTech2: 'and everything in-between.',
          TranslationWarn: 'Translation may be incorrect'
        },
        ko: {
          LatestNews: '최근 뉴스',
          UnderstandTech1: '기술, 보안',
          UnderstandTech2: '및 그 사이의 모든 것.',
          TranslationWarn: '번역이 잘못되었을 수 있습니다.'
        },
        zh: { // Simplified Version
          LatestNews: '最新消息',
          UnderstandTech1: '了解安全技术',
          UnderstandTech2: '还有其他一切',
          TranslationWarn: '翻译可能不正确'
        },
        ja: {
          LatestNews: '最新ニュース',
          UnderstandTech1: 'セキュリティ、テクノロジーを理解し、',
          UnderstandTech2: 'そして残りすべて',
          TranslationWarn: '翻訳が正しくない可能性があります。'
        }
      },
      dateTimeFormats: {
        ko: {
          short: {
            day: 'numeric', month: 'long', year: 'numeric'
          }
        },
        zh: {
          short: {
            day: 'numeric', month: 'long', year: 'numeric'
          }
        },
        ja: {
          short: {
            day: 'numeric', month: 'long', year: 'numeric'
          }
        },
        en: {
          short: {
            day: 'numeric', month: 'long', year: 'numeric'
          }
        }
      }
    }
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
