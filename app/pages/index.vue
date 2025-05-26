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
    <LazyHomeBrandList />
    <LazyHomeBlogFeature class="min-h-screen" />
    <LazyHomePagesCard class="my-20" />
    <LazyHomeThreatCard class="mt-20" />
  </main>
</template>
