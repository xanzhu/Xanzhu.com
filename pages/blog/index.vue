<template>
  <div
    class="mx-auto space-y-10 sm:space-y-20 dark:text-white text-black sm:mb-10"
    role="main"
  >
    <div class="mt-5 mx-4 sm:(mx-8 mt-15) lg:mx-10 space-y-2">
      <h1 class="font-semibold text-3xl sm:text-5xl">
        {{ t("Blog.title") }}
      </h1>
      <p
        class="text-lg break-words font-thin sm:(text-2xl) dark:text-gray-300 md:w-[80%] lg:w-[70%]"
      >
        {{ t("Blog.description") }}
      </p>
    </div>
    <section
      class="grid grid-cols-1 gap-10 md:(grid-cols-2 mx-6) lg:(grid-cols-3) p-4 sm:(py-15 px-10) dark:(bg-dark-900) border-outline bg-gray-100"
    >
      <div
        v-if="articles"
        v-for="(article, $index) in articles"
        :key="`fe-${$index}`"
      >
        <NuxtLink
          class="flex flex-col group zoomef border-outline"
          :to="article._path"
        >
          <NuxtImg
            crossorigin="anonymous"
            v-if="article.img"
            :alt="article.alt"
            :title="article.alt"
            loading="lazy"
            height="369"
            width="577"
            class="rounded-t-md"
            :src="article.img"
          />
          <GlobalUtilsDate
            v-if="article.date"
            :date="article.date"
            class="dark:(bg-black text-white) bg-white px-4 py-2 border-r-1 border-b-1 rounded-tr-none rounded-bl-none rounded-tl-md rounded-b border-t-none border-l-none text-xs absolute border-gray-300 dark:border-dark-300"
          />
          <div
            class="dark:(bg-black text-white) bg-white rounded-b-md h-auto p-4"
          >
            <h2 class="font-medium text-xl" v-html="article.title" />
            <p class="opacity-80 pt-1" v-html="article.description" />
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();

const { data: articles } = await useAsyncData("articles", async () => {
  if (locale.value !== "en") {
    return await queryContent(`${locale.value}/blog/`)
      .sort({ date: -1 })
      .find();
  } else {
    return await queryContent("/blog/").sort({ date: -1 }).find();
  }
});

const title = t("Blog.meta.title");
const desc = t("Blog.meta.description");

const url =
  locale.value == "en"
    ? "https://xanzhu.com/blog"
    : `https://xanzhu.com/${locale.value}/blog`;


useSeoMeta({
  title: title,
  description: desc,
  ogDescription: desc,
  ogTitle: title,
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: url,
  ogImage: "https://source.unsplash.com/kUmcSBJcFPg",
});
</script>
