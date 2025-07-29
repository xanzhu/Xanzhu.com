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
  <main class="flex flex-col justify-center">
    <section aria-labelledby="hero">
      <HomeHero />
    </section>
    <section class="hidden lg:(mb24 inline-flex justify-center)">
      <LazyHomeBrandList />
    </section>
    <LazyHomeBlogFeature class="mb32 core-border rounded-md" />
    <section aria-labelledby="pages-card" class="mb32">
      <LazyHomePagesCard />
    </section>
    <section aria-labelledby="threat-card" class="pb24">
      <LazyHomeThreatCard />
    </section>
  </main>
</template>
