<template>
  <header
    class="md:(grid-cols-2 space-y-0 gap-4 m-4 place-items-center) grid grid-cols-1 md:space-y-5"
  >
    <div
      class="col-span-1 shrink-0 space-y-2 px-4 mt-5 sm:px-0 mb-3 md:(ml-4 mt-0)"
    >
      <div
        v-if="post.tag"
        class="text-sm inline-flex space-x-3 children:(border-outline px-2 py-0.5 dark:bg-transparent bg-light-200 dark:text-white text-black)"
      >
        <span>
          {{ post.tag }}
        </span>
        <GlobalUtilsDate
          v-if="post.date"
          :date="post.date"
          itemprop="datePublished"
          class="md:hidden"
        />
        <BlogReadTime class="<sm:hidden" :content="post" />
      </div>
      <h1
        itemprop="headline"
        class="md:(text-2xl mr-6) break-words text-xl font-semibold sm:leading-tight lg:text-3xl xl:text-4xl"
      >
        {{ post.title }}
      </h1>
    </div>
    <div v-if="post.img || post.media" class="relative col-span-1 grow-0">
      <div>
        <NuxtImg
          v-if="post.media && !post.img"
          crossorigin="anonymous"
          itemprop="image"
          class="w-full object-cover md:border-outline"
          :src="post.media"
          :alt="post.alt"
          :title="post.alt"
          provider="cloudinary"
          loading="auto"
          format="webp"
        />
        <NuxtImg
          v-if="post.img || (post.img && post.media)"
          crossorigin="anonymous"
          itemprop="image"
          :src="post.img"
          :alt="post.alt"
          :title="post.alt"
          loading="eager"
          class="w-full object-cover md:border-outline"
        />
        <GlobalUtilsDate
          v-if="post.date"
          :date="post.date"
          itemprop="datePublished"
          class="dark:(bg-dark-900 text-white) <md:hidden md:(rounded-tl-none rounded-br-none rounded-bl-md border-outline font-medium) bg-light-500 px-4 py-2 rounded-bl-md text-xs absolute top-0 right-0"
        />
        <div
          v-if="post.source"
          class="dark:(text-light-200) text-dark-700 absolute right-0 px-1 py-0.5 text-xs"
        >
          <p v-t="'Blog.source'" class="inline-block" />
          : {{ post.source }}
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
