<template>
  <main class="flex flex-col justify-center">
    <div class="flex sm:h-screen mt-10 px-4 md:px-12">
      <div class="flex flex-col space-y-[10%] xl:space-y-[7%] 2xl:space-y-[12%] sm:max-w-5xl mx-auto">
        <h1 class="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt0">
          {{ t("Home.title") }}
        </h1>
        <p
          class="hidden sm:flex dark:(bg-dark-900 border-dark-600 text-gray-300 opacity-100) opacity-70 bg-light-500 border-solid border-1 rounded-sm p-4 border-gray-200">
          {{ t("Home.desc") }}
        </p>
        <div class="hidden xl:(flex mx-auto) 2xl:pt30">
          <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="t('Home.a11y.mouseicon')" />
        </div>
      </div>
    </div>
    <BlogFeature class="min-h-screen" />
    <HomePagesCard class="my-20" />
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
