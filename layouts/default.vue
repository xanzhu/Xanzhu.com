<template>
  <div class="min-h-screen fixed min-w-full overflow-auto">
    <Header />
    <Social
      :title="this.$i18n.t('page.title')"
      :description="this.$i18n.t('page.description')"
      :site="('https://xanzhu.com/')"
      :summary="('Close up women in glasses splattered across face monochromatic')"
    />
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
      ],
      ...i18nSeo,
      link: [
        ...i18nSeo.link
      ]
    }
  }
}
</script>
