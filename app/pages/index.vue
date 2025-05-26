<script setup lang="ts">
const seoImage = 'https://images.pexels.com/photos/5708251/pexels-photo-5708251.jpeg'
useLangMeta('Home.Seo', seoImage, 'prefix')

// URL Validation | Redirection for "/?<example>" (Temp Fix)
definePageMeta({
  validate(route) {
    if (route.fullPath.includes('?')) {
      throw createError({ statusCode: 404 })
    }
    return true
  },
})
</script>

<template>
  <main class="flex flex-col justify-center pb-32 space-y-32">
    <section aria-labelledby="hero">
      <HomeHero />
    </section>
    <section aria-labelledby="brand-list">
      <LazyHomeBrandList />
    </section>
    <section aria-labelledby="latest-posts">
      <LazyHomeBlogFeature />
    </section>
    <section aria-labelledby="pages-card">
      <LazyHomePagesCard />
    </section>
    <section aria-labelledby="threat-card">
      <LazyHomeThreatCard />
    </section>
  </main>
</template>
