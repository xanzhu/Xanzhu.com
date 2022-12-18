<template>
  <nav class="flex flex-col space-y-5 pt-5 mx-5 sm:(mx-20 pt-10)">
    <div class="flex flex-row justify-between font-normal children:(md:text-xl text-sm m-4 px-3.5 py-1.4)">
      <NuxtLink v-if="prev" :to="prev._path"
        class="border-outline dark:hover:(bg-white text-black) hover:(bg-black text-white)">
        <p v-t="'article.Previous'" />
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path"
        class="border-outline dark:text-[#FF0000] dark:hover:(bg-[#FF0000] text-black) hover:(bg-[#FF0000] text-white) text-dark-600">
        <p v-t="'article.Next'" />
      </NuxtLink>
    </div>
  </nav>
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