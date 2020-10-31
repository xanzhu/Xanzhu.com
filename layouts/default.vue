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
      title: this.$t('title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        }
      ]
    }
  }
}
</script>
