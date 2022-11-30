<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { path } = useRoute();

definePageMeta({
  title: 'blog.landing.title',
  description: 'blog.landing.desc'
})

const { data: posts } = await useAsyncData('blog', () => {
  return queryContent(`${locale.value}/blog`).find()
})

</script>
<template>
  <div class="max-w-sm mx-auto my-4 sm:(container mx-auto mb-10) dark:text-light-200 text-black flex-grow" role="main">
    <h1 class="text-center text-red-600 font-semibold text-4xl md:text-6xl mt-">
      {{ t('blog.landing.title') }}
    </h1>
    <p class="text-lg p-2 mb-5 text-center break-words sm:(text-xl) md:(mb-10) dark:text-gray-300">
      {{ t('blog.landing.desc') }}
    </p>
    <section class="grid grid-cols-1 gap-4 sm:(grid-cols-2 mx-8) md:(grid-cols-2 gap-6) lg:(grid-cols-3 mx-10)">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`"
        class="max-w-lg w-full rounded overflow-hidden flex flex-col shadow-md dark:(bg-dark-900 shadow-none border-dark-700 border-1) bg-white mx-auto border-0"
        role="article">
        <NuxtLink :to="(post._path)" class="font-bold text-xl mb-2">
          <NuxtImg crossorigin="anonymous" v-if="post.media"
            class="relative w-full h-32 object-cover sm:(object-center h-40)" :src="post.media" :alt="post.alt"
            format="webp" height="290" width="130" sizes="sm:100vw md:50vw lg:25vw" loading="eager" fit="cover"
            provider="cloudinary" />
          <div class="flex flex-row items-center px-4 py-2 space-x-2">
            <p class="text-red-500 bg-transparent rounded-md text-xs dark:(text-[#FF0000])">
              {{ post.tag }}
            </p>
            <Date v-if="post.date" :date="post.date" class="text-sm font-medium text-right" />
          </div>
          <h2 class="rounded-md font-medium text-xl px-4">
            {{ post.title }}
          </h2>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>