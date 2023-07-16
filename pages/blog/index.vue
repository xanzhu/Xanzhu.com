<template>
  <main class="mx-auto space-y-10 text-black dark:text-white sm:mb-10">
    <div class="sm:(mx-10 mt-15) xl:ml-15 mx-4 mt-5 flex flex-col space-y-2 lg:mx-10">
      <h1 class="mb0 text-3xl font-semibold sm:text-5xl">{{ t("Blog.title") }}</h1>
      <p class="text-md sm:(text-xl) sm:w2/3 break-words font-thin dark:text-gray-300">{{ t("Blog.description") }}</p>
    </div>
    <section
      class="md:(grid-cols-2 gap-10) lg:(grid-cols-3) sm:(py-15 px-10) mx-6 grid grid-cols-1 gap-5 rounded-sm p-4 dark:bg-black">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`">
        <NuxtLink class="group flex flex-col no-underline" :to="article._path">
          <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" :title="article.alt" loading="lazy"
            height="369" width="577" object-fit="contain"
            class="md:(transition duration-400 ease-in-out) md:group-hover:scale-102 b-1 b-solid dark:b-dark-700 b-light-700 h-full w-full transform rounded-md"
            :src="article.img" />
          <div class="dark:(bg-black text-white) h-auto rounded-b-md bg-white text-black dark:text-white">
            <div class="space-x-2">
              <Date v-if="article.date" :date="article.date"
                class="dark:(bg-dark-900 b-dark-700 opacity-100) bg-light-500 b-1 b-solid b-gray-300 rounded-sm px-4 py-1.5 text-xs text-white op80" />
              <p v-if="article.tag"
                class="dark:(bg-dark-900 b-dark-700 opacity-100) bg-light-500 b-gray-300 b-1 b-solid inline-block rounded-sm px-4 py-1.5 text-xs text-white op80">
                {{ article.tag }}</p>
            </div>
            <h2 class="group-hover:(underline underline-offset-6) m0 text-xl font-semibold decoration-2"
              v-html="article.title" />
            <p class="op80" v-html="article.description" />
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();

const { data: articles } = await useAsyncData("articles", async () => {
  let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
    .find();
});
;
const seoImage = 'https://source.unsplash.com/x6YWgAN3SX8';

const seoTitle = computed(() => {
  return t('Blog.meta.title');
});

const seoDesc = computed(() => {
  return t('Blog.meta.description');
});

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogDescription: seoDesc,
  ogTitle: seoTitle,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogImage: seoImage,
});
</script>
