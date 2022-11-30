<script setup lang="ts">
const { path } = useRoute()
const { locale } = useI18n()

definePageMeta({
  title: '',
  description: ''
})

const { data: post } = await useAsyncData(path.replace(/\/$/, ''), () => {
  return queryContent(`${locale.value}/blog`)
    .where({ _path: path })
    .findOne()
})

</script>
<template>
  <div class="container mb-4 mx-auto md:(px-6 mb-0 justify-center) lg:px-12" role="main">
    <article v-if="post !== null"
      class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12">
      <header class="flex flex-col lg:(flex-row items-center top-0)">
        <div class="flex flex-col mx-4 mt-4 space-y-2 sm:space-y-1 md:mx-6">
          <div class="text-xs space-x-4 inline-flex items-center">
            <p
              class="dark:(text-[#FF0000] border-1 border-[#FF0000] bg-transparent) rounded-md px-2 py-0.2 bg-red-600 text-light-200 font-semibold tracking-wide">
              {{ post.tag }}
            </p>
            <Date v-if="post.date" :date="post.date" />
          </div>
          <h1
            class="text-xl sm:leading-tight md:(text-2xl mr-6) lg:text-3xl xl:text-6xl font-semibold break-words lg:(flex-1 pb-2)">
            {{ post.title }}
          </h1>
          <div class="flex text-xs">
            <!-- TO:DO Upgrade to TS -->
            <!-- <BlogReadTime :content="post.body" /> -->
            <div v-if="post.author" class="inline-flex ml-2 py-1 lg:my-4 px-2 rounded-md border-1 border-red-700">
              {{ post.author }}
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-56 sm:(min-h-sm mx-4) md:(mx-4) my-4 overflow-hidden lg:(w-4/6)">
          <NuxtImg v-if="post.media" class="object-cover w-full h-full sm:rounded-md" sizes="sm:100vw md:50vw lg:25vw"
            :src="post.media" :alt="post.alt" :title="post.alt" format="webp" fit="cover" loading="eager"
            provider="cloudinary" />
        </div>
      </header>
      <div v-if="post.source"
        class="dark:(text-light-200 opacity-45) text-black text-sm opacity-80 italic pr-2 sm:pr-6 -mt-2 text-right">
        <p v-t="'article.creditsource'" class="inline-block" />: {{ post.source }}
      </div>
      <ContentRenderer :value="post" class="px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal lg:(w-4xl)">
        <template #empty>
          <!-- TO:DO Add translation -->
          <p>No content found.</p>
        </template>
      </ContentRenderer>
      <!-- TO:DO Convert to new version 
        <BlogPrevNext loading="lazy" :prev="prev" :next="next" /> -->
    </article>
  </div>
</template>
<style>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 46px;
}

.nuxt-content h2 {
  font-weight: 600;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: 500;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>
