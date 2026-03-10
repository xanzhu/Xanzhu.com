<script setup lang="ts">
import type { Post } from '~/types/post'

const { post } = defineProps<{
  post: Post
}>()

const { t } = useI18n()
</script>

<template>
  <header>
    <div class="mx-auto max-w-5xl px-6 pb-5 space-y-2 md:px-0">
      <span v-if="post.tag" class="rounded-sm bg-black px4 py1 text-sm text-neutral-100 font-bold tracking-wide dark:(bg-white text-neutral-900)">{{ post.tag }}</span>
      <h1 class="my-2 text-3xl text-neutral-900 font-semibold leading-tight md:text-5xl dark:text-white" itemprop="headline">
        {{ post.title }}
      </h1>
      <div class="flex items-center gap-2 text-sm text-neutral-600 font-medium dark:text-neutral-200">
        <UiDate v-if="post.date" :date="post.date" itemprop="datePublished" />
        <span v-if="post.date">•</span>
        <LazyBlogReadTime :content="post" />
      </div>
      <p class="pt2 text-base text-neutral-600 md:text-lg dark:text-neutral-400">
        {{ post.description }}
      </p>
      <div
        class="aspect-video overflow-hidden pt-2"
      >
        <NuxtImg
          v-if="post.img" :src="post.img" :alt="post.alt || post.title" width="1200" height="675" loading="eager" fetchpriority="high" decoding="async"
          class="h-auto w-full rounded-md object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
        />
      </div>
      <div v-if="post.updated" class="sr-only">
        <span>{{ t('ui.content.lastUpdated') }}:</span>
        <LazyUiUpdated :date="post.updated" itemprop="dateModified" />
      </div>
    </div>
  </header>
</template>
