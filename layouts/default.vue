<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t(route.meta.title), { title: t(route.meta.title) })

useHead({
  meta: [
    { property: 'og:title', content: t(route.meta.title) },
    { property: 'description', content: t(route.meta.description) },
    { property: 'og:description', content: t(route.meta.description) },
    { property: 'twitter:title', content: t(route.meta.title) },
    { property: 'twitter:description', content: t(route.meta.description) },
    // { property: 'og:url', content: 'https://xanzhu.com' } Add later
  ]
})

</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body class="flex flex-col min-h-screen subpixel-antialiased">
      <slot />
    </Body>

    </Html>
  </div>
</template>


<!-- <template>
  <div class="flex flex-col min-h-screen subpixel-antialiased">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script>
export default {
  layout: 'AppDefault',
  head () {
    const i18nHead = this.localeHead({ addDirAttribute: true, addSeoAttributes: true })
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
</style> -->
