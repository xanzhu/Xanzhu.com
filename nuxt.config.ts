export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@unocss/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-security",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  i18n: {
    baseUrl: "https://xanzhu.com",
    defaultLocale: "en",
    lazy: true,
    strategy: "prefix_except_default",
    langDir: "locales",
    locales: [
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ko",
        language: "ko",
        name: "한국어",
        file: "ko.json",
      },
      {
        code: "zh",
        language: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "0003",
      redirectOn: "root",
      cookieSecure: true,
    },
  },

  site: {
    url: "https://xanzhu.com",
    name: "Xanzhu",
  },

  sitemap: {
    autoI18n: true,
    strictNuxtContentPaths: true,
    autoLastmod: true,
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "50%" },
    ],
    xslTips: false,
    credits: false,
  },

  routeRules: {
    "/blog/**": { isr: true },
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  image: {
    domains: ["images.pexels.com"],
  },

  content: {
    defaultLocale: "en",
  },

  // API
  runtimeConfig: {
    public: {
      WeatherAPI: "",
    },
  },

  // ICON
  icon: {
    provider: "iconify",
    mode: "svg",
  },

  // SECURITY V1
  security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
    },
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
        ],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "base-uri": ["'none'"],
        "img-src": [
          "'self'",
          "data:",
          "https://assets.lotofcarrots.com/media/home/section/desktop/4.webp",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/AI_features_feb6.gif",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/feb_6_AI_hero.width-1000.format-webp.webp",
        ],
        "font-src": ["'self'", "https:", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "frame-src": [
          "'self'",
          "https://www.youtube.com",
          "https://youtube.com",
        ],
      },
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development"
          ? "unsafe-none"
          : "credentialless",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginResourcePolicy: "same-origin",
    },
    sri: true,
  },

  robots: {
    allow: "/",
  },

  compatibilityDate: "2024-07-08",

  // Experimental Features
  experimental: {
    buildCache: true,
  },
});
