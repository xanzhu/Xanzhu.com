export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {
      titleTemplate: "%s | Xanzhu ",
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "og:type", property: "ogtype", content: "website" },
        { name: "twitter:site", content: "@xanzhu1" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      noscript: [{ children: "Javascript is required" }],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-dark.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:dark)",
        },
        {
          rel: "apple-touch-icon",
          size: "180x180",
          href: "/favicon/apple-180-dark.png",
        },
        { rel: "mask-icon", href: "/favicon.svg", color: "#FDFDFD" },
      ],
    },
  },
  css: [],
  plugins: [],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: ["en", "mi", "ko", "zh"],
      dateTimeFormats: {
        en: {
          short: {
            day: "numeric",
            month: "long",
            year: "numeric",
          },
        },
        ko: {
          short: {
            day: "numeric",
            month: "long",
            year: "numeric",
          },
        },
        zh: {
          short: {
            day: "numeric",
            month: "long",
            year: "numeric",
          },
        },
      },
    },
    baseUrl: process.env.BASE_URL,
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "./i18n/",
    detectBrowserLanguage: {
      redirectOn: "root",
      useCookie: true,
      alwaysRedirect: true,
    },
    seo: false,
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "mi",
        iso: "mi",
        name: "Māori",
        file: "mi.json",
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
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/xanzhu/image/upload/",
    },
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-holi-theme.css",
      },
    },
  },
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
});
