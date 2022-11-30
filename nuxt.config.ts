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
          sizes: "180x180",
          href: "/favicon/apple-180-dark.png",
        },
        { rel: "mask-icon", href: "/favicon.svg", color: "#FDFDFD" },
      ],
    },
  },
  css: ["virtual:windi.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
  ],
  i18n: {
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
    baseUrl: process.env.BASE_URL,
    defaultLocale: "en",
    strategy: "prefix",
    langDir: "i18n",
    lazy: true,
    detectBrowserLanguage: {
      // Detect language based on root
      useCookie: true,
      cookieKey: "i18n_redirected", // Custom cookie name
      redirectOn: "root",
    },
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/xanzhu/image/upload/",
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
