<template>
  <main class="mx-auto space-y-10 dark:text-white text-black sm:mb-10">
    <div class="sm:(mx-10 mt-15) xl:ml-15 mx-4 mt-5 flex flex-col space-y-2 lg:mx-10">
      <h1 class="text-3xl font-semibold sm:text-5xl mb0">{{ $t("Blog.title") }}</h1>
      <p class="text-md sm:(text-xl) break-words font-thin dark:text-gray-300 sm:w2/3">
        {{ $t("Blog.description") }}
      </p>
    </div>
    <!-- TODO: Fix cls shift -->
    <!-- <BlogFeature /> -->
    <section
      class="md:(grid-cols-2 mx-6) lg:(grid-cols-3) sm:(py-15 px-10) dark:bg-black grid grid-cols-1 gap-10 rounded-sm p-4">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`">
        <NuxtLink class="group flex flex-col no-underline" :to="article._path">
          <div class="h-auto w-auto">
            <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" :title="article.alt" loading="lazy"
              height="369" width="577"
              class="rounded-md object-cover h-full w-full transform md:(transition duration-400 ease-in-out) md:group-hover:scale-102 b-1 b-solid dark:b-dark-700 b-light-700"
              :src="article.img" />
          </div>
          <div class="dark:(bg-black text-white) h-auto rounded-b-md bg-white dark:text-white text-black">
            <div class="space-x-2">
              <Date v-if="article.date" :date="article.date"
                class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs" />
              <p v-if="article.tag"
                class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 b-gray-300 px-4 py-1.5 border-1 b-solid rounded-sm text-xs inline-block">
                {{ article.tag }}
              </p>
            </div>
            <h2 class="text-xl font-semibold decoration-2 group-hover:(underline underline-offset-6) m0"
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
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    // .where({ feature: { $ne: true } })
    // Reduce Payload - Only below options are included
    .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
    .find();
});

const title = t("Blog.meta.title");
const desc = t("Blog.meta.description");
const image = 'https://source.unsplash.com/x6YWgAN3SX8';

useSeoMeta({
  title: title,
  description: desc,
  ogDescription: desc,
  ogTitle: title,
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: image,
  ogUrl: `https://xanzhu.com${locale.value === "en" ? "" : `/${locale.value}`}/blog`,
  ogImage: image,
});
</script>
