<template>
  <div class="dark:bg-black bg-gray-200">
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
          // Match this to page image in future
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1617503527/Xanzhu4521a_mk9agy.png'
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
          // Match this to page image in future
          hid: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1617503527/Xanzhu4521a_mk9agy.png'
        }
      ],
      link: [
        // { rel: 'shortcut icon', sizes: '16x16 24x24 32x32 48x48 64x64', href: '/favicon.ico' },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
