<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <!-- TO:DO ERROR Page Redesign -->
  <div class="dark:text-light-200 text-black text-center font-normal flex-grow" role="main">
    <div class="font-medium md:text-2xl pt-32 pb-4 text-xl">
      <h1 v-t="'error.404'"></h1>
    </div>
    <NuxtLink v-t="'error.return'" :to="localePath('/blog')"
      class="focus:outline-none text-sm py-1.5 text-light-200 font-semibold px-4 rounded-md bg-dark-900 hover:shadow-lg dark:bg-red-700" />
  </div>
</template>