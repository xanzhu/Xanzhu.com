<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <header>
    <div class="mx-auto max-w-5xl px-6 pb-5 md:px-0">
      <div
        class="mb-4 flex flex-col gap-1 text-sm text-neutral-600 tracking-wide font-mono uppercase sm:flex-row sm:items-center sm:gap-4 dark:text-neutral-300"
      >
        <span class="w-fit rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-900">
          {{ post.tag }}
        </span>

        <div class="flex items-center gap-2">
          <Date v-if="post.date" :date="post.date" itemprop="datePublished" />
          <span class="font-black">•</span>
          <BlogReadTime :content="post" />
        </div>
      </div>

      <h1 class="my2 text-3xl text-neutral-900 font-semibold leading-tight md:text-5xl dark:text-white">
        {{ post.title }}
      </h1>

      <p class="mt-4 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-neutral-400">
        {{ post.description }}
      </p>

      <div
        class="mt-6 aspect-video overflow-hidden border border-neutral-200 rounded-md bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <NuxtImg
          v-if="post.img" :src="post.img" :alt="post.alt" width="1200" height="675" loading="eager"
          class="h-auto w-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
        />
      </div>
      <div v-if="post.updated" class="mt-4 flex">
        <div
          class="flex items-center core-border rounded-md bg-white px-4 py-2 text-sm text-gray-7 space-x-2 dark:bg-dark-8 dark:text-gray-3"
        >
          <span class="h-3 w-3 rounded-full bg-brand-dark" />
          <span>{{ t('v2.blog.lastUpdated') }}:</span>
          <Updated :date="post.updated" itemprop="dateModified" />
        </div>
      </div>
    </div>
  </header>
</template>
