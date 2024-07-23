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
    nonce: true, // Enables HTML nonce support in SSR mode
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false // Disables CSP hash support for styles in SSG mode (recommended)
    },
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'",  // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'" // Recommended default for most Nuxt apps
        ],
        'base-uri': ["'none'"],
        'img-src': ["'self'", "data:", "https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"], // Add relevant https://... sources if you load images from external sources 
        'font-src': ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'upgrade-insecure-requests': true
      }
    },
    sri: true
  },

  compatibilityDate: "2024-07-08",
});