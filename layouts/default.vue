<template>
  <div class="flex flex-col min-h-screen subpixel-antialiased">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
export default {
  layout: 'AppDefault',
  head () {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
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
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1627084292/Twitter-image-v1.2_b0ebgw.png'
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
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1627084292/Twitter-image-v1.2_b0ebgw.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://a2.xanzhu.com' + this.$nuxt.$route.path
        }
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
<style>
svg {
  display: inline-block;
  vertical-align: inherit;
}
</style>
