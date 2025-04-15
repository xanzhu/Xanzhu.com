<template>
  <div class="flex flex-col sm:flex-row sm:justify-evenly sm:gap-10 items-center mt-10">
    <div v-if="prev" class="w-[250px]">
      <NuxtLink :to="prev._path" :aria-label="t('Blog.previous')" rel="prev"
        class="group relative flex flex-col transition-all duration-300 no-underline">
        <div class="relative overflow-hidden rounded-lg">
          <NuxtImg :src="prev.img" height="150" width="250"
            class="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
            :alt="prev.alt" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-black/70 to-transparent">
            <span class="text-sm font-medium op90">{{ $t('Blog.previous') }}</span>
          </div>
        </div>
        <h4
          class="mt-3 text-base font-medium line-clamp-2 group-hover:(underline decoration-1 underline-offset-4) text-wrap max-w-[250px] dark:text-element-light text-element-dark">
          {{ prev.title }}
        </h4>
      </NuxtLink>
    </div>
    <div v-if="next" class="w-[250px]">
      <NuxtLink :to="next._path" :aria-label="t('Blog.next')" rel="next"
        class="group relative flex flex-col transition-all duration-300 no-underline">
        <div class="relative overflow-hidden rounded-lg">
          <NuxtImg :src="next.img" height="150" width="250"
            class="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
            :alt="next.alt" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 p-3 text-white text-right transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-black/70 to-transparent">
            <span class="text-sm font-medium">{{ $t('Blog.next') }}</span>
          </div>
        </div>
        <h4
          class="mt-3 text-base font-medium line-clamp-2 group-hover:(underline decoration-1 underline-offset-4) text-wrap max-w-[250px] text-element-dark dark:text-element-light">
          {{ next.title }}
        </h4>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

export interface PrevNext {
  title?: string;
  _path: string;
  img: string;
  alt: string;
}

defineProps<{
  prev?: PrevNext;
  next?: PrevNext;
}>();
</script>