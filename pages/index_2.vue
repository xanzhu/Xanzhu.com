<template>
  <div class="h-screen flex flex-col mt-10 px-4 md:px-12 justify-center items-center">
    <div class="text-center">
      <h1 class="text-left font-semibold lg:text-7xl md:text-6xl text-4xl">
        Privacy, security and everything in between.
      </h1>
    </div>
    <div
      class="flex text-left items-center justify-between font-thin hidden sm:flex dark:(bg-dark-900 border-dark-600 text-gray-300 opacity-100) opacity-70 bg-light-500 border-solid border-1 rounded-sm p-4 border-gray-200">
      <span>Xanzhu is a platform for sharing knowledge on tehcnology.</span>
      <button class="bg-brand-dark b-none rounded-sm p4">Learn More</button>
    </div>
    <div class="flex mx-auto pt-60 sm:hidden xl:(flex mx-auto pt0) 2xl:pt30">
      <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="t('Home.a11y.mouseicon')" />
    </div>
  </div>
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



<style></style>
