<template>
  <main class="flex flex-col justify-center">
    <div class="flex mt-10 px-4 md:px-12">
      <div class="flex flex-col mx-auto min-h-75vh sm:max-w-6xl md:(space-y-10% h-screen) lg:space-y-10">
        <h1
          class="font-bold text-4xl mt5 text-center sm:text-6xl md:(text-7xl max-w-[48rem] mx-auto mt-5rem text-left ml20) xl:(max-w-[55rem]) 2xl:(pt-10)">
          {{ t("Home.title") }}
        </h1>
        <p
          class="hidden sm:flex dark:(bg-dark-900 border-dark-600 text-gray-300) bg-light-500 border-solid border-1 rounded-sm p-4 border-gray-200 md:(max-w-[44rem] mx-auto) lg:(max-w-[48rem] ml20)">
          {{ t("Home.desc") }}
        </p>
        <div class="flex mx-auto pt-60 sm:hidden xl:(flex mx-auto pt20) 2xl:(pt70)">
          <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="t('Home.a11y.mouseicon')" />
        </div>
      </div>
    </div>
    <BlogFeature class="min-h-screen" />
    <HomePagesCard class="my-20" />
    <HomeStatsCard class="min-h-screen" />
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
      throw createError({ statusCode: 404 });
    }
    return true;
  },
})
</script>