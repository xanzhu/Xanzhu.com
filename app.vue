<script setup>
const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})

useHead({
    bodyAttrs: {
        class: 'dark:(bg-black text-white) bg-white text-black'
    },
    meta: [
        { property: 'og:title', content: t(route.meta.title) },
        { property: 'description', content: t(route.meta.description) },
        { property: 'og:description', content: t(route.meta.description) },
        { property: 'twitter:title', content: t(route.meta.title) },
        { property: 'twitter:description', content: t(route.meta.description) },
        // { property: 'og:url', content: 'https://xanzhu.com{path}' } Add later
    ]
})
</script>
<template>
    <div class="h-screen flex flex-col">
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

        <Head>
            <title>{{ t(route.meta.title) }}</title>
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
            </template>
        </Head>
        <AppHeader />
        <NuxtPage class="flex-1" />
        <AppFooter />

        </Html>
    </div>
</template>