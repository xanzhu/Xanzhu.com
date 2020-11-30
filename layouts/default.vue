<template>
  <div class="min-h-screen fixed min-w-full overflow-auto">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      title: this.$i18n.t('page.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('page.description')
        }
        // {
        //   hid: 'Naver',
        //   name: 'naver-site-verification',
        //   content: 'efe8928c52c47ffddfbd678ff1ac6fe5ca08b009'
        // }
      ],
      ...i18nSeo,
      link: [
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://xanzhu.com/'
        },
        {
          rel: 'alternate',
          hreflang: 'zh',
          href: 'https://xanzhu.com/zh'
        },
        {
          rel: 'alternate',
          hreflang: 'ko',
          href: 'https://xanzhu.com/ko'
        },
        {
          rel: 'alternate',
          hreflang: 'ru',
          href: 'https://xanzhu.com/ru'
        },
        {
          rel: 'alternate',
          hreflang: 'ja',
          href: 'https://xanzhu.com/ja'
        },
        {
          rel: 'alternate',
          hreflang: 'de',
          href: 'https://xanzhu.com/de'
        },
        {
          rel: 'alternate',
          hreflang: 'fr',
          href: 'https://xanzhu.com/fr'
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://xanzhu.com/'
        },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
