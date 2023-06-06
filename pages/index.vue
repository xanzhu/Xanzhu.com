<template>
  <main class="flex flex-col justify-center">
    <div class="flex h-screen mt1/3 sm:(items-center mt-0) px-4 md:px-12">
      <div class="flex flex-col space-y-[10%] xl:space-y-[8%] 2xl:space-y-[18%] sm:max-w-5xl mx-auto">
        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt0">
          {{ $t("Home.title") }}
        </h1>
        <p
          class="dark:(bg-dark-900 border-dark-600 text-gray-300 opacity-100) opacity-70 bg-light-500 border-solid border-1 rounded-sm p-4 border-gray-200">
          {{ $t("Home.desc") }}
        </p>
        <div class="mx-auto hidden xl:(flex)">
          <HomeMouseIcon class="animate-bounce" role="presentation" :aria-label="$t('Home.a11y.mouseicon')" />
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
const { t, locale } = useI18n();

const title = t("Home.Seo.title");
const desc = t("Home.Seo.desc");
const image = 'https://source.unsplash.com/TCbn80k-lrg';

useSeoMeta({
  title: title,
  ogTitle: title,
  description: desc,
  twitterImage: image,
  ogDescription: desc,
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: `https://xanzhu.com${locale.value === "en" ? "" : `/${locale.value}`}`,
  ogImage: image,
});
</script>
