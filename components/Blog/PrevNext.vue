<template>
  <nav
    class="flex justify-between pt-5 sm:justify-around sm:pt-10 children:(md:text-lg text-sm m-4 px-3 py-1 rounded-sm)">
    <NuxtLink v-if="prev" :to="prev._path" :aria-label="t('Blog.previous')"
      class="dark:(bg-dark-900 text-white) group bg-light-400 text-black flex items-center no-underline">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"
        class="md:mr-2 w-5 h-5 dark:group-hover:text-brand-dark group-hover-text-brand-light" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 0 1 0 1.414z"
          clip-rule="evenodd" />
      </svg>
      <p class="lt-sm:hidden op80 m0" v-t="'Blog.previous'" />
    </NuxtLink>
    <p class="invisible" v-else />
    <NuxtLink v-if="next" :to="next._path" :aria-label="t('Blog.next')"
      class="dark:(bg-dark-900 text-white) text-black bg-light-400 group flex items-center no-underline">
      <p class="lt-sm:hidden op80 m0" v-t="'Blog.next'" />
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"
        class="md:ml-2 w-5 h-5 dark:group-hover:text-brand-light group-hover-text-brand-dark" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
          clip-rule="evenodd" />
      </svg>
    </NuxtLink>
    <p class="invisible" v-else />
  </nav>
</template>
<script setup lang="ts">
const { t } = useI18n();

export interface PrevNext {
  title?: string;
  _path?: string;
}

defineProps<{
  prev?: PrevNext;
  next?: PrevNext;
}>();
</script>
