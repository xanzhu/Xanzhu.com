
<template>
  <div class="flex flex-col space-y-5 pt-10 mx-5 sm:mx-20">
    <div class="flex flex-row justify-between font-normal">
      <NuxtLink v-if="prev" :to="prev._path"
        class="border-1 border-dark-50 rounded-lg px-3.5 py-1.4 text-sm m-4 md:(text-xl font-medium)">
        <p v-t="'article.Previous'" />
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" :to="next._path"
        class="border-1 border-dark-50 rounded-lg px-3.5 py-1.4 text-sm m-4 dark:text-[#FF0000] text-red-600 md:(text-xl font-medium)">
        <p v-t="'article.Next'" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface PrevNext {
  title?: string;
  _path?: string
}

defineProps<{
  prev: PrevNext
  next: PrevNext
}>()
</script>

<!-- TO:DO
- Add hover effects
-->

<!-- 
<script>
export default {
    props: {
        prev: {
            type: Object,
            default: () => null
        },
        next: {
            type: Object,
            default: () => null
        }
    }
}
</script> -->
