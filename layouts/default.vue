<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
// Update title meta translations to reflect "Pagename | Xanzhu"
const title = computed(() => t(route.meta.title), { title: t(route.meta.title) })

useHead({
  meta: [
    { property: 'og:title', content: t(route.meta.title) + ' | Xanzhu' },
    { property: 'description', content: t(route.meta.description) },
    { property: 'og:description', content: t(route.meta.description) },
    { property: 'twitter:title', content: t(route.meta.title) + '| Xanzhu' },
    { property: 'twitter:description', content: t(route.meta.description) },
    // { property: 'og:url', content: 'https://xanzhu.com' } Add later
  ]
})

</script>
<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ t(route.meta.title) }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body class="flex flex-col subpixel-antialiased">
      <slot />
    </Body>

    </Html>
  </div>
</template>
<style>
svg {
  display: inline-block;
  vertical-align: inherit;
}
</style>