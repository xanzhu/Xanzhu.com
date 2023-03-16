<template>
  <header
    class="md:(grid-cols-2 space-y-5 gap-4 my-4 place-items-center) grid grid-cols-1"
  >
    <div
      class="col-span-1 shrink-0 space-y-3 px-4 mt-5 sm:(px-0 mx-4) mb-3 md:(mt-0)"
    >
      <div
        v-if="post.tag"
        class="text-sm inline-flex space-x-3 children:(border-1 dark:border-dark-600 dark:opacity-100 opacity-80 border-gray-300 rounded-sm px-2 py-0.5 dark:bg-dark-900 bg-light-400 dark:text-white text-black)"
      >
        <span>
          {{ post.tag }}
        </span>
        <Date
          v-if="post.date"
          :date="post.date"
          itemprop="datePublished"
          class="md:hidden"
        />
        <BlogReadTime class="<sm:hidden" :content="post" />
        <p v-if="post.updated" class="flex items-center space-x-1">
          <Icon
            name="material-symbols:update-rounded"
            class="h-3.5 w-3.5 dark:text-yellow-400"
          />
          <Date
            :date="post.updated"
            itemprop="dateModified"
            class="dark:text-yellow-400 font-semibold"
          />
        </p>
      </div>
      <div>
        <h1
          itemprop="headline"
          class="md:(text-2xl mr-6) break-words text-xl font-semibold sm:leading-tight lg:text-3xl xl:text-4xl"
        >
          {{ post.title }}
        </h1>
        <p class="dark:opacity-70 pt-3 opacity-80">{{ post.description }}</p>
      </div>
      <BlogSocialShare v-bind:post="post" />
    </div>
    <div v-if="post.img" class="relative col-span-1 grow-0">
      <div>
        <NuxtImg
          crossorigin="anonymous"
          itemprop="image"
          :src="post.img"
          :alt="post.alt"
          :title="post.alt"
          loading="lazy"
          height="407"
          width="600"
          class="w-full object-cover md:border-outline"
        />
        <Date
          v-if="post.date"
          :date="post.date"
          itemprop="datePublished"
          class="dark:(bg-dark-900 text-white) <md:hidden md:(rounded-tl-none rounded-br-none rounded-bl-md border-outline font-medium) bg-light-400 px-4 py-2 rounded-bl-md text-xs absolute top-0 right-0"
        />
        <div
          v-if="post.source"
          class="dark:(text-light-200 opacity-70) text-dark-700 opacity-80 absolute right-0 px-1 py-0.5 text-xs <sm:mr-2 tracking-wide"
        >
          <p class="inline-block" />
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
