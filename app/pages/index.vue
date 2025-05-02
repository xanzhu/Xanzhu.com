<template>
    <main class="flex flex-col justify-center">
        <HomeHero />
        <LazyHomeBrandList hydrate-never />
        <LazyHomeBlogFeature class="min-h-screen" hydrate-never />
        <LazyHomePagesCard class="my-20" hydrate-never />
        <LazyHomeThreatCard class="mt-20" hydrate-never />
    </main>
</template>
<script setup lang="ts">
const seoImage = 'https://images.pexels.com/photos/5708251/pexels-photo-5708251.jpeg';
useLangMeta('Home.Seo', seoImage, 'prefix');

// URL Validation | Redirection for "/?<example>" (Temp Fix)
definePageMeta({
    validate(route) {
        if (route.fullPath.includes('?')) {
            throw createError({ statusCode: 404 });
        }
        return true;
    },
})
</script>