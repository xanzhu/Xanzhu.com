<template>
  <div class="flex flex-col min-h-screen">
    <Header-2 />
    <Nuxt />
    <Footer />
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
      title: this.$i18n.t('meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('meta.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('meta.description')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1626593072/Xanzhu-share-v2_l1lvnk.png'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('meta.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1626593072/Xanzhu-share-v2_l1lvnk.png'
        }
      ],
      link: [
        ...i18nSeo.link
      ]
    }
  }
}
</script>
