<template>
  <header class="lg:(grid-cols-2 mt-15 gap-4 my-4 place-items-center ml-10) grid grid-cols-1">
    <div class="col-span-1 shrink-0 space-y-2 px-4 mt-5 sm:(px-0 mx-4) mb-3 md:(mt-0)">
      <div v-if="post.tag"
        class="text-sm inline-flex items-center space-x-3 children:(dark:opacity-100 opacity-80 px4 py1.0 rounded-sm b-1 b-solid dark:b-dark-700 dark:bg-dark-900 bg-light-400 dark:text-white text-black b-gray-300)">
        <span>
          {{ post.tag }}
        </span>
        <Date v-if="post.date && !post.updated" :date="post.date" itemprop="datePublished" class="md:hidden" />
        <BlogReadTime class="lt-sm:hidden items-center" :content="post" />
        <p v-if="post.updated" class="md:hidden flex items-center space-x-1">
          <Icon class="h-3.5 w-3.5 dark:text-yellow-400" name="material-symbols:update-rounded" />
          <Date :date="post.updated" itemprop="dateModified" class="dark:text-yellow-400 font-semibold" />
        </p>
      </div>
      <div>
        <h1 itemprop="headline"
          class="md:(text-3xl mr-6 mb-5) break-words text-xl font-bold sm:leading-tight lg:(text-3xl) xl:text-4xl my0">
          {{ post.title }}
        </h1>
        <p class="dark:op70 op80 lt-sm:text-sm my2" itemprop="description">{{ post.description }}</p>
      </div>
      <div class="flex flex-col space-y-5">
        <div class="flex flex-row items-center space-x-2 op90">
          <p class="text-sm font-medium m0">Xanzhu</p>
          <p class="dark:text-brand-dark text-brand-light font-black m0">/</p>
          <Date v-if="post.date" :date="post.date" itemprop="datePublished" class="text-sm" />
        </div>
        <BlogSocialShare v-bind:post="{ _path: post._path, title: post.title }" />
      </div>
    </div>
    <div v-if="post.img" class="relative col-span-1 grow-0 h-auto w-auto px-4 sm:px0 mb-5 md:m4">
      <div class="h-auto md:(h-100 w-auto) lg:h-70 w-auto sm:w-md mx-auto lg:w-auto" itemscope
        itemtype="https://schema.org/ImageObject">
        <NuxtImg crossorigin="anonymous" itemprop="image" :src="post.img" :alt="post.alt" :title="post.alt" height="369"
          width="577" class="h-full w-full rounded-md b-brand-border b-1 b-solid dark:b-dark-700 b-gray-300"
          format="webp" />
        <div v-if="post.source"
          class="dark:(text-white opacity-70) text-dark-700 op90 absolute right-3 sm:right-2 px-1 py-1 text-xs lt-sm:(mr-2) tracking-wide">
          <p class="inline-block m0" />
          {{ t("Blog.source") + ": " + post.source }}
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
