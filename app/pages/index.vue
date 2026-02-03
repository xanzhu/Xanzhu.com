<script setup lang="ts">
const seoImage = 'https://images.pexels.com/photos/5708251/pexels-photo-5708251.jpeg'
useLangMeta('seo.home', seoImage, 'prefix')
</script>

<template>
  <main class="flex flex-col justify-center">
    <HomeHero />
    <LazyHomeBrandList />
    <LazyHomeFeature class="mb20 core-border rounded-md" />
    <LazyHomePagesCard class="mb20" />
    <LazyHomeThreatCard class="mb20 px4" />
  </main>
</template>
