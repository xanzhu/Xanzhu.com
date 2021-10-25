<template>
  <div class="dark:text-light-200 mt-5 text-dark-900 flex-grow px-4 lg:max-w-4xl container mx-auto" role="main">
    <h1 v-t="'page.pp_title'" class="text-3xl" />
    <p v-t="'page.pp_date'" class="pb-4" />
    <p v-t="'page.pp_p1'" class="py-2" />
    <p v-t="'page.pp_p2'" />
    <p v-t="'page.pp_p3'" />
    <p v-t="'page.pp_link'" class="py-5" />
    <div class="flex-col flex">
      <a class="nav-link mr-auto text-red-600" href="https://xanzhu.com" rel="noopener" target="_blank">
        https://xanzhu.com
        <Icon-External class="h-3 inline-flex" />
      </a>
      <a class="nav-link mr-auto text-red-600" href="https://a1.xanzhu.com" rel="noopener" target="_blank">
        https://a1.xanzhu.com
        <Icon-External class="h-3 inline-flex" />
      </a>
      <a class="nav-link mr-auto text-red-600" href="https://a2.xanzhu.com" rel="noopener" target="_blank">
        https://a2.xanzhu.com
        <Icon-External class="h-3 inline-flex" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      titleTemplate: '%s - Xanzhu',
      title: this.$i18n.t('page.pp_title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('page.privacy-policy.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('page.pp_title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('page.privacy-policy.description')
        }
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
