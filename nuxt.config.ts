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
    "nuxt-link-checker",
    "nuxt-security"
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
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ko",
        iso: "ko",
        name: "한국어",
        file: "ko.json",
      },
      {
        code: "zh",
        iso: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "0002",
      redirectOn: "root",
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
    // Testing Client Bundle
    clientBundle: {
      icons: [
        "line-md:github",
        "line-md:instagram",
        "line-md:linkedin",
        "line-md:twitter-x",
        "fluent:clock-12-regular",
        "line-md:moon-filled-alt-loop",
        "line-md:moon-filled-alt-to-sunny-filled-loop-transition",
        "fluent:local-language-16-filled",
        "fluent:list-rtl-16-filled",
        "fluent:mail-16-filled",
        "fluent:local-language-16-filled",
      ],
    },
  },

  // SECURITY V1
   security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false
    },
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
        ],
        'style-src': [
          "'self'", 
          "https:",
          "'unsafe-inline'" 
        ],
        'base-uri': ["'none'"],
        'img-src': ["'self'", "data:", "https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg", "https://assets.lotofcarrots.com/media/home/section/desktop/4.webp", "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/AI_features_feb6.gif", "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/feb_6_AI_hero.width-1000.format-webp.webp"], // Add relevant https://... sources if you load images from external sources 
        'font-src': ["'self'", "https:", "data:"], 
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'frame-src': ["'self'", "https://www.youtube.com", "https://youtube.com"],
      },
      // Disable for iframe?
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
    },
    sri: true
  },

  compatibilityDate: "2024-07-08",
});