<template>
  <div class="bg-black min-h-screen fixed min-w-full overflow-auto">
    <Headerv2 />
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
      bodyAttrs: {
        class: 'bg-black'
      },
      title: this.$t('title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        },
        {
          hid: 'Naver',
          name: 'naver-site-verification',
          content: 'efe8928c52c47ffddfbd678ff1ac6fe5ca08b009'
        }
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
