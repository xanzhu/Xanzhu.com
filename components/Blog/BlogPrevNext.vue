
<template>
  <div class="flex flex-col space-y-5 pt-10 mx-5 sm:mx-20">
    <div class="flex flex-row justify-between font-normal children:(md:text-xl text-sm m-4 px-3.5 py-1.4)">
      <NuxtLink v-if="prev" :to="prev._path"
        class="border-outline dark:hover:(bg-white text-black) hover:(bg-black text-white)">
        <p v-t="'article.Previous'" />
      </NuxtLink>
      <!-- <span v-else>&nbsp;</span> -->
      <NuxtLink v-if="next" :to="next._path"
        class="border-outline dark:text-[#FF0000] dark:hover:(bg-red-600 text-black) hover:(bg-red-600 text-white) text-red-600">
        <p v-t="'article.Next'" />
      </NuxtLink>
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