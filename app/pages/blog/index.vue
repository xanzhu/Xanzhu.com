<template>
  <main class="mx-auto space-y-10 text-black dark:text-white sm:mb-10 md:px5 xl:px28 lg:px25 2xl:px35">
    <div class="sm:(mx-10 mt-15) mx-4 mt-5 flex flex-col space-y-2 lg:mx-10">
      <h1 class="text-3xl font-semibold sm:text-5xl mb0">{{ $t("Blog.title") }}</h1>
      <p class="text-md op70 sm:(text-xl) break-words font-300 dark:text-gray-300 sm:w2/3">
        {{ $t("Blog.description") }}
      </p>
    </div>
    <section class="grid grid-cols-1 gap-5 md:(grid-cols-2 gap-10) lg:(grid-cols-3 gap-5) sm:(py-15 px-10) rounded-sm p-4"
      v-if="posts && posts.length">
      <div v-for="article in posts" :key="article._path">
        <NuxtLinkLocale class="group flex flex-col no-underline" :to="article._path">
          <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" :title="article.alt" loading="lazy"
            height="369" width="577" object-fit="contain" format="webp"
            class="rounded-md h-full w-full transform md:(transition duration-400 ease-in-out) md:group-hover:scale-102 b-1 b-solid dark:b-dark-700 b-light-700"
            :src="article.img" />
          <div class="text-black dark:text-white h-auto rounded-b-md">
            <div
              class="space-x-2 children:(op80 px4 py1.5 rounded-sm text-xs core-ui dark:(op100) inline-flex core-border font-mono)">
              <Date v-if="article.date" :date="article.date" />
              <p v-if="article.tag">{{ article.tag }}</p>
            </div>
            <h2 class="text-xl font-semibold decoration-2 group-hover:(underline underline-offset-6) m0">
              {{ article.title }}
            </h2>
            <p class="op70 font-300">
              {{ article.description }}
            </p>
          </div>
        </NuxtLinkLocale>
      </div>
    </section>
    <p v-else class="text-center op70">No posts available.</p>
  </main>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const { data: posts } = await useAsyncData("articles", async () => {
  let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
    .find();
});

const seoImage = 'https://images.pexels.com/photos/27277185/pexels-photo-27277185.jpeg';
useLangMeta('Blog.meta', seoImage);
</script>
