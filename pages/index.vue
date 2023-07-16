<template>
  <main class="flex flex-col justify-center">
    <div class="mt1/3 sm:(mt-10) flex h-screen px-4 md:px-12">
      <div class="mx-auto flex flex-col space-y-[10%] sm:max-w-5xl xl:space-y-[7%] 2xl:space-y-[12%]">
        <h1 class="mt0 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">{{ t("Home.title") }}</h1>
        <p
          class="dark:(bg-dark-900 b-dark-600 op100) bg-light-500 b-1 rounded-sm b-solid b-gray-200 p-4 text-gray-300 op70">
          {{ t("Home.desc") }}</p>
        <div class="2xl:pt30 mx-auto hidden xl:flex">
          <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="t('Home.a11y.mouseicon')" />
        </div>
      </div>
    </div>
    <BlogFeature class="min-h-screen" />
    <LazyHomePagesCard class="min-h-screen" />
    <LazyHomeStatsCard class="min-h-screen" />
    <LazyHomeSocialsCard />
  </main>
</template>
<script setup lang="ts">
const { t } = useI18n();

const seoTitle = computed(() => {
  return t('Home.Seo.title');
});

const seoDesc = computed(() => {
  return t('Home.Seo.desc');
});

const seoImage = 'https://source.unsplash.com/IayKLkmz6g0';

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: seoImage,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  titleTemplate: 'Xanzhu - %s',
})

// URL Validation | Redirection for "/?<example>" (Temp Fix)
definePageMeta({
  validate(route) {
    if (route.fullPath.includes('?')) {
      // Throw a 404 error
      throw createError({ statusCode: 404 });
    }
    // The route is valid
    return true;
  },
})
</script>
