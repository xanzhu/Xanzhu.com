<script setup lang="ts">
import type { Post } from '~/types/post'

const { post } = defineProps<{
  post: Post
}>()

const { t } = useI18n()
</script>

<template>
  <header>
    <div class="mx-auto px-6 pb-5 max-w-5xl space-y-2 md:px-0">
      <span v-if="post.tag" class="text-sm text-neutral-100 tracking-wide font-bold px4 py1 rounded-xs bg-black dark:(text-neutral-900 bg-white)">{{ post.tag }}</span>
      <h1 class="text-3xl text-neutral-900 leading-tight font-semibold my-2 md:text-5xl dark:text-white">
        {{ post.title }}
      </h1>
      <div class="text-sm text-neutral-600 font-medium flex gap-2 items-center dark:text-neutral-200">
        <UiDate v-if="post.date" :date="post.date" />
        <span v-if="post.date">•</span>
        <LazyBlogReadTime :content="post" />
      </div>
      <p class="text-base text-neutral-600 pt2 md:text-lg dark:text-neutral-400">
        {{ post.description }}
      </p>
      <div
        class="pt-2 aspect-video overflow-hidden"
      >
        <NuxtImg
          v-if="post.img" :src="post.img" :alt="post.alt || post.title" width="1200" height="675" loading="eager" fetchpriority="high" decoding="async"
          class="rounded-md h-auto w-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
        />
      </div>
      <div v-if="post.updated" class="sr-only">
        <span>{{ t('ui.content.lastUpdated') }}:</span>
        <LazyUiUpdated :date="post.updated" />
      </div>
    </div>
  </header>
</template>
