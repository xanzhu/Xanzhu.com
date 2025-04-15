<template>
  <header>
    <div class="mx-auto max-w-5xl px-6 pb-12 lg:pb-20">
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-neutral-600 dark:text-neutral-300 font-mono uppercase tracking-wide mb-4">
        <span class="bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded w-fit">
          {{ post.tag }}
        </span>

        <div class="flex items-center gap-2">
          <Date v-if="post.date" :date="post.date" itemprop="datePublished" />
          <span class="font-black">•</span>
          <BlogReadTime :content="post" />
        </div>
      </div>

      <h1 class="text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight my2">
        {{ post.title }}
      </h1>

      <p class="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-base md:text-lg">
        {{ post.description }}
      </p>

      <div
        class="mt-6 aspect-video bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden rounded-md">
        <NuxtImg height="400" width="700" loading="eager" v-if="post.img" :src="post.img" :alt="post.alt"
          class="w-full h-full object-cover" />
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
