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
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('page.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('page.description')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://res.cloudinary.com/xanzhu/image/upload/v1603594106/xanzhu.com/banner-image_itbtx2.webp'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.$i18n.t('page.banner.alt')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('page.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('page.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '~/assets/img/xubanner_v1.webp'
        },
        // {
        //   hid: 'og:image:secure_url',
        //   property: 'og:image:secure_url',
        //   content: this.image
        // },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.$i18n.t('page.banner.alt')
        }
      ],
      link: [
        { rel: 'shortcut icon', sizes: '16x16 24x24 32x32 48x48 64x64', href: '/favicon.ico' },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
