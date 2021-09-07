<template>
  <div class="dark:text-light-200 mt-5 text-dark-900 flex-grow px-4 lg:max-w-4xl container mx-auto" role="main">
    <h1 class="text-3xl">
      {{ $t('page.pp_title') }}
    </h1>
    <p class="pb-4">
      {{ $t('page.pp_date') }}
    </p>
    <p class="py-2">
      {{ $t('page.pp_p1') }}
    </p>
    <p> {{ $t('page.pp_p2') }}</p>
    <p> {{ $t('page.pp_p3') }}</p>
    <p class="py-5">
      {{ $t('page.pp_link') }}
      <a class="nav-link text-red-600" href="https://xanzhu.com" rel="nofollow noopener noreferrer" target="_blank">
        https://xanzhu.com
        <Icon-External class="h-3 inline-flex" />
      </a>
    </p>
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
