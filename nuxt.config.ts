import process from 'node:process'
import pkg from './package.json'

const siteUrl = 'https://xanzhu.com'
const cdnUrl = 'https://cdn.xanzhu.com'
const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  devtools: { enabled: isDev },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security',
    '@nuxt/fonts',
    'nitro-cloudflare-dev',
    '@nuxt/scripts',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        // Open Graph
        { property: 'og:site_name', content: 'Xanzhu' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:logo', content: 'https://xanzhu.com/images/favicon/logo.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@xanzhu1' },
        // Naver Verification
        { name: 'naver-site-verification', content: 'efe8928c52c47ffddfbd678ff1ac6fe5ca08b009' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg', sizes: 'any' },
        { rel: 'preconnect', href: cdnUrl, crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://api.iconify.design' },
        // Fallback
        { rel: 'dns-prefetch', href: cdnUrl },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
      ],
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'xanzhu-color-mode',
  },

  // i18n V10
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        files: ['en/common.json', 'en/app.json'],
      },
      {
        code: 'ko',
        language: 'ko',
        name: '한국어',
        files: ['ko/common.json', 'ko/app.json'],
      },
      {
        code: 'zh',
        language: 'zh',
        name: '中文',
        files: ['zh/common.json', 'zh/app.json'],
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'xanzhu-i18n',
      redirectOn: 'root',
      cookieSecure: true,
    },
    hmr: true,
  },

  site: {
    url: 'https://xanzhu.com',
    name: 'Xanzhu',
  },

  // Sitemap
  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '50%' },
    ],
    xslTips: false,
    credits: false,
    cacheMaxAgeSeconds: 3600,
    zeroRuntime: true,
    discoverImages: true,
    exclude: [
      '/health',
    ],
  },

  routeRules: {
    '/': { isr: 86400 },
    '/**': {
      headers: {
        'x-robots-tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
      },
    },
    '/**/_payload.json': {
      prerender: false,
      ssr: false,
    },
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=2592000, immutable',
      },
    },
    '/health': {
      security: { headers: false },
      prerender: false,
    },
    '/blog/**': { isr: 86400 },
    '/ko/blog/**': { isr: 86400 },
    '/zh/blog/**': { isr: 86400 },
    '/resources': { isr: 86400 },
    '/ko/resources': { isr: 86400 },
    '/zh/resources': { isr: 86400 },
  },

  image: {
    domains: [cdnUrl],
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    build: {
      markdown: {
        // Shiki
        highlight: false,
      },
    },
  },

  // API
  runtimeConfig: {
    public: {
      version: pkg.version,
      i18n: {
        baseUrl: siteUrl,
      },
    },
  },

  // ICON
  icon: {
    provider: 'iconify',
    mode: 'svg',
    clientBundle: {
      scan: true,
      sizeLimitKb: 128,
    },
    serverBundle: 'remote',
  },

  // SECURITY V2.1
  security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    headers: {
      contentSecurityPolicy: {
        'default-src': ['\'self\'', 'https://*.xanzhu.com'],
        'script-src': [
          '\'self\'',
          '\'strict-dynamic\'',
          '\'nonce-{{nonce}}\'',
          'https://*.xanzhu.com',
          'https://*.xanzhu.workers.dev',
          'https://s.ytimg.com',
          'https://www.youtube.com',
          '\'wasm-unsafe-eval\'',
        ],
        'style-src': [
          '\'self\'',
          isDev ? '\'unsafe-inline\'' : '\'nonce-{{nonce}}\'',
          'https://*.xanzhu.com',
        ],
        'base-uri': '\'none\'',
        'img-src': [
          '\'self\'',
          'data:',
          cdnUrl,
          'https://*.xanzhu.com',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
          'https://i.ytimg.com',
          'https://unocss.dev',
          'https://nuxt.com',
        ],
        'media-src': [
          '\'self\'',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
          'https://storage.quantum-engine.ai',
          'https://assets.lotofcarrots.com',
          'https://www.apple.com',
          'https://*.xanzhu.com',
        ],
        'font-src': ['\'self\'', 'data:'],
        'object-src': ['\'none\''],
        'script-src-attr': ['\'none\''],
        'style-src-attr': ['\'unsafe-inline\''],
        'form-action': ['\'self\''],
        'connect-src': [
          '\'self\'',
          'https://*.xanzhu.com',
          'https://*.xanzhu.workers.dev',
          'https://api.weatherapi.com',
          'https://api.iconify.design',
          ...(isDev
            ? ['ws://localhost:*']
            : []),
        ],
        'frame-src': [
          '\'self\'',
          'https://*.xanzhu.workers.dev',
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
        ],
        'upgrade-insecure-requests': !isDev,
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },
    sri: true,
  },

  compatibilityDate: '2026-06-23',

  sourcemap: isDev,

  unocss: {
    disableNuxtInlineStyle: false,
    content: {
      pipeline: {
        include: [/\.(vue|ts|mdx?|html)($|\?)/],
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
    minify: !isDev,
    compressPublicAssets: true,
  },

  $env: {
    cloudflare: {
      nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
          deployConfig: true,
        },
      },
    },
  },

  // Experimental Vue Features
  experimental: {
    extractAsyncDataHandlers: true,
    payloadExtraction: 'client',
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@vueuse/core'],
    },
  },

  future: {
    compatibilityVersion: 5,
  },
})
