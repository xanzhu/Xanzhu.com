
<template>
  <div class="flex flex-col space-y-5 pt-10 mx-5 sm:mx-20">
    <div class="flex flex-row justify-between font-normal">
      <NuxtLink v-if="prev" :to="prev._path"
        class="border-1 border-dark-50 rounded-lg px-3.5 py-1.4 text-sm m-4 dark:hover:(bg-white text-black border-transparent) hover:(bg-black text-white border-transparent) md:(text-xl font-medium)">
        <p v-t="'article.Previous'" />
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" :to="next._path"
        class="border-1 border-dark-50 rounded-lg px-3.5 py-1.4 text-sm m-4 dark:text-[#FF0000] dark:hover:(bg-red-600 text-black border-transparent) hover:(bg-red-600 text-white border-transparent) text-red-600 md:(text-xl font-medium)">
        <p v-t="'article.Next'" />
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface PrevNext {
  title?: string
  _path?: string
}

defineProps<{
  prev?: PrevNext
  next?: PrevNext
}>()
</script>
<!-- TO:DO
- Fix sizing
- bug not working?? test in vercel
-->