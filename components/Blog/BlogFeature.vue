<template>
  <div class="flex flex-col dark:(text-white bg-black) space-y-5 mx-auto rounded-md sm:mb-10">
    <h2 class="text-2xl mt-12 sm:(py-10 mt-0) 2xl:text-4xl text-center">{{ t('Home.release') }}</h2>
    <div v-if="features" v-for="feature in features" :key="feature.title"
      class="sm:(mx-5 p-0) lg:mx-20 p-4 justify-center mx-auto">
      <NuxtLinkLocale :to="feature._path"
        class="text-black dark:(text-white) no-underline group flex flex-col mx-auto space-y-3 md:(mb-10 py-9) lg:(p-0 space-x-8 items-center flex-row)">
        <div class="h-auto w-auto max-h-xl max-w-xl">
          <NuxtImg crossorigin="anonymous" v-if="feature.img" :src="feature.img" :alt="feature.alt" :title="feature.alt"
            class="h-full w-full rounded-sm object-cover md:group-hover:scale-102 md:(transform transition duration-400 ease-in-out)"
            height="269" width="377" />
          <NuxtImg crossorigin="anonymous" v-else :alt="feature.alt" src="https://source.unsplash.com/bHOKatJHjII/577x369"
            class="md:max-w-2xl" height="269" width="577" />
        </div>
        <div class="space-y-2 sm:(space-y-7) md:space-y-2 lg:max-w-xl">
          <div class="flex flex-row space-x-2">
            <Date v-if="feature.date" :date="feature.date"
              class="dark:(bg-dark-900 text-white border-dark-700 op100) op80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs" />
            <p v-if="feature.tag"
              class="dark:(bg-dark-900 text-white border-dark-700 op100) op80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs m0">
              {{ feature.tag }}
            </p>
          </div>
          <h3 class="mt-0 font-semibold decoration-2 text-xl sm:text-3xl sm:group-hover:(underline underline-offset-6)">
            {{ feature.title }}
          </h3>
          <p v-if="feature.description" class="op70 font-normal">
            {{ feature.description }}
          </p>
        </div>
      </NuxtLinkLocale>
    </div>
    <div class="flex flex-row space-x-2 pt-10 justify-center">
      <NuxtLinkLocale to="/blog"
        class="px-8 py-2 dark:bg-white bg-black dark:text-black text-white hover:(dark:bg-brand-dark bg-brand-light) decoration-none rounded-md font-semibold">
        {{ t('Home.more') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();

const { data: features } = await useAsyncData("feature-articles", async () => {
  let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
    .find();
});
</script>