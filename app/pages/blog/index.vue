<script setup lang="ts">
const { locale } = useI18n()

const { data: posts } = await useAsyncData(`blogArticles-${locale.value}`, async () => {
  const query = locale.value !== 'en' ? `${locale.value}/blog` : '/blog'
  return await queryContent(query)
    .sort({ date: -1 })
    .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
    .find()
})

const seoImage = 'https://images.pexels.com/photos/27277185/pexels-photo-27277185.jpeg'
useLangMeta('Blog.meta', seoImage)
</script>

<template>
  <main class="mx-auto text-black sm:mb-10 space-y-10 2xl:px35 lg:px25 md:px5 xl:px28 dark:text-white">
    <div class="mx-4 mt-5 flex flex-col lg:mx-10 sm:(mx-10 mt-15) space-y-2">
      <h1 class="mb0 text-3xl font-semibold sm:text-5xl">
        {{ $t("Blog.title") }}
      </h1>
      <p class="text-md break-words font-300 op70 sm:(w2/3 text-xl) dark:text-gray-300">
        {{ $t("Blog.description") }}
      </p>
    </div>
    <section
      v-if="posts && posts.length"
      class="grid grid-cols-1 gap-5 rounded-sm p-4 lg:(grid-cols-3 gap-5) md:(grid-cols-2 gap-10) sm:(px-10 py-15)"
    >
      <div v-for="article in posts" :key="article._path">
        <NuxtLinkLocale class="group flex flex-col no-underline" :to="article._path">
          <NuxtImg
            v-if="article.img" crossorigin="anonymous" :alt="article.alt" :title="article.alt" loading="lazy"
            height="369" width="577" object-fit="contain" format="webp"
            class="h-full w-full transform b-1 b-light-700 rounded-md b-solid dark:b-dark-700 md:(transition duration-400 ease-in-out group-hover:scale-102)"
            :src="article.img"
          />
          <div class="h-auto rounded-b-md text-black dark:text-white">
            <div
              class="children:(inline-flex core-border rounded-md core-ui px4 py1.5 text-xs font-mono op80 dark:op100) space-x-2"
            >
              <Date v-if="article.date" :date="article.date" />
              <p v-if="article.tag">
                {{ article.tag }}
              </p>
            </div>
            <h2 class="m0 text-xl font-semibold decoration-2 group-hover:(underline underline-offset-6)">
              {{ article.title }}
            </h2>
            <p class="font-300 op70">
              {{ article.description }}
            </p>
          </div>
        </NuxtLinkLocale>
      </div>
    </section>
    <p v-else class="text-center op70">
      {{ $t('v2.blog.noPosts') }}
    </p>
  </main>
</template>
