export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@unocss/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-robots",
    "@nuxt/image",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  i18n: {
    // vueI18n: "i18n.config.ts",
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
      cookieKey: "xanzhu_v6",
      redirectOn: "root",
    },
  },

  site: {
    url: "https://xanzhu.com",
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
    "/blog/*": { isr: true },
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  image: {
    domains: ["source.unsplash.com"],
  },

  content: {
    defaultLocale: "en",
    locales: ["en", "ko", "zh"],
  }
});
