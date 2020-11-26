<template>
  <div class="dark:bg-black bg-gray-200 min-h-screen fixed min-w-full overflow-auto">
    <Header />
    <Nuxt class="bg-black dark:bg-black" />
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
      title: this.$t('page.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('page.description')
        }
        // {
        //   hid: 'Naver',
        //   name: 'naver-site-verification',
        //   content: 'efe8928c52c47ffddfbd678ff1ac6fe5ca08b009'
        // }
      ],
      link: [
        // {
        //   rel: 'alternate',
        //   hreflang: 'zh',
        //   href: 'https://xanzhu.com/zh/'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ru',
        //   href: 'https://xanzhu.com/ru/'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ja',
        //   href: 'https://xanzhu.com/ja/'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ko',
        //   href: 'https://xanzhu.com/ko/'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'x-default',
        //   href: 'https://xanzhu.com/'
        // },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
