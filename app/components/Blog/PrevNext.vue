<script setup lang="ts">
defineProps<{
  prev?: PrevNext
  next?: PrevNext
}>()

const { t } = useI18n()

export interface PrevNext {
  title?: string
  _path: string
  img: string
  alt: string
}
</script>

<template>
  <div class="mt-10 flex flex-col items-center sm:flex-row sm:justify-evenly sm:gap-10">
    <div v-if="prev" class="w-[250px]">
      <NuxtLink
        :to="prev._path" :aria-label="t('Blog.previous')" rel="prev"
        class="group relative flex flex-col no-underline transition-all duration-300"
      >
        <div class="relative overflow-hidden rounded-lg">
          <NuxtImg
            :src="prev.img" height="150" width="250"
            class="object-cover transition-transform duration-500 group-focus-within:scale-105 group-hover:scale-105"
            :alt="prev.alt" loading="lazy" decoding="async"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 translate-x-4 transform text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 translate-y-full transform from-black/70 to-transparent bg-gradient-to-t p-3 text-white transition-transform duration-300 group-hover:translate-y-0"
          >
            <span class="text-sm font-medium op90">{{ t('Blog.previous') }}</span>
          </div>
        </div>
        <h4
          class="line-clamp-2 mt-3 max-w-[250px] text-wrap text-base text-element-dark font-medium dark:text-element-light group-hover:(underline decoration-1 underline-offset-4)"
        >
          {{ prev.title }}
        </h4>
      </NuxtLink>
    </div>
    <div v-if="next" class="w-[250px]">
      <NuxtLink
        :to="next._path" :aria-label="t('Blog.next')" rel="next"
        class="group relative flex flex-col no-underline transition-all duration-300"
      >
        <div class="relative overflow-hidden rounded-lg">
          <NuxtImg
            :src="next.img" height="150" width="250"
            class="object-cover transition-transform duration-500 group-focus-within:scale-105 group-hover:scale-105"
            :alt="next.alt" loading="lazy" decoding="async"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 translate-x-4 transform text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 translate-y-full transform from-black/70 to-transparent bg-gradient-to-t p-3 text-right text-white transition-transform duration-300 group-hover:translate-y-0"
          >
            <span class="text-sm font-medium">{{ t('Blog.next') }}</span>
          </div>
        </div>
        <h4
          class="line-clamp-2 mt-3 max-w-[250px] text-wrap text-base text-element-dark font-medium dark:text-element-light group-hover:(underline decoration-1 underline-offset-4)"
        >
          {{ next.title }}
        </h4>
      </NuxtLink>
    </div>
  </div>
</template>
