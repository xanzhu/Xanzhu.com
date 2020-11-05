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
        }
      ],
      link: [
        // {
        //   rel: 'alternate',
        //   hreflang: 'zh',
        //   href: 'https://xanzhu.com/zh'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ru',
        //   href: 'https://xanzhu.com/ru'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ja',
        //   href: 'https://xanzhu.com/ja'
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'ko',
        //   href: 'https://xanzhu.com/ko'
        // },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
