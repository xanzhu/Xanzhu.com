
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
    title: 'XANZHU | Developer preview',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    bodyAttrs: {
      class: 'bg-black'
    }
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
    '@nuxtjs/cloudinary',
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
          Under: 'Understand Security, Technology',
          Stand: 'and everything in-between.',
          warning: 'Translations may be incorrect',
          Coming: 'This page will constantly update as we improve our design',
          Soon: 'We expect to release our website by the end of the year',
          error500h1: 'System Error',
          error500p: 'This request could not be processed',
          error404h1: 'PAGE NOT FOUND',
          error404p: 'The link you clicked on may be broken or no longer exists.',
          MobileUD: 'UNDER DEVELOPMENT'
        },
        ko: {
          LatestNews: '최근 뉴스',
          Under: '기술, 보안',
          Stand: '및 그 사이의 모든 것.',
          warning: '번역이 잘못되었을 수 있습니다.',
          Coming: '이 페이지는 디자인이 개선됨에 따라 변경됩니다.',
          Soon: '연말까지 웹 사이트를 공개 할 계획입니다.',
          error500h1: '시스템 오류',
          error500p: '이 요청을 처리 할 수 없습니다.',
          error404h1: '페이지를 찾을 수 없습니다',
          error404p: '클릭 한 링크가 끊어 졌거나 더 이상 존재하지 않을 수 있습니다.',
          MobileUD: '개발중인'
        },
        zh: { // Simplified Version
          LatestNews: '最新消息',
          Under: '了解安全技术',
          Stand: '还有其他一切',
          warning: '翻译可能不正确',
          Coming: '随着我们改进设计，此页面将继续更新',
          Soon: '我们希望在今年年底之前发布此网站',
          error500h1: '系统错误',
          error500p: '该请求无法处理',
          error404h1: '找不到网页',
          error404p: '您点击的链接可能已损坏或不再存在',
          MobileUD: '开发中'
        },
        ja: {
          LatestNews: '最新ニュース',
          Under: 'セキュリティ、テクノロジーを理解し、',
          Stand: 'そして残りすべて',
          warning: '翻訳が正しくない可能性があります。',
          Coming: 'このページは常にデザインの改善により更新されています',
          Soon: '年末までにウェブサイトを公開する予定です。',
          error500h1: 'システムエラー',
          error500p: 'このリクエストは処理できませんでした',
          error404h1: 'ページが見つかりません',
          error404p: 'このページが見つかりません。構文を確認してください',
          MobileUD: '開発中'
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
  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.API_KEY, // only needed if you are using server-side upload
    apiSecret: process.env.API_SECRET // only needed if you are using server-side upload
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
