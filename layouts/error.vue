<template>
  <div class="dark:text-light-200 text-black text-center font-normal flex-grow" role="main">
    <div class="font-medium md:text-2xl pt-32 pb-4 text-xl">
      <h1 v-if="error.statusCode === 404" v-t="'error.404'" />
      <h1 v-else v-t="'error.else'" />
    </div>
    <NuxtLink v-t="'error.return'" :to="localePath('/blog')" class="focus:outline-none text-sm py-1.5 text-light-200 font-semibold px-4 rounded-md bg-dark-900 hover:shadow-lg dark:bg-red-700" />
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      titleTemplate: '%s - Xanzhu',
      title: this.$i18n.t('error.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('error.desc')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('error.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('error.desc')
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.BASE_URL + this.$nuxt.$route.fullpath
        }
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
