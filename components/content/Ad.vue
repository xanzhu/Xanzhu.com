<template>
  <!-- AD / Promo (Beta) v0.1 -->
  <NuxtLink :to="link" target="_blank"
    class="relative group dark:bg-dark-900 p2 flex flex-col bg-light200 text-center no-underline cursor-pointer rounded-sm b-1 b-solid dark:b-dark-500 b-gray-300 !no-underline">
    <span
      class="sm:absolute op90 px2 py1 b-1 b-solid rounded-sm b-gray-400 bg-light-100 dark:bg-dark-900 mr-auto dark:b-dark-400 text-left text-xs">{{
        type }}</span>
    <span class="m4">{{ message }}
      <span
        class="group-hover:underline underline-offset-2 dark:decoration-brand-dark decoration-brand-light decoration-2">{{
          discount }}
      </span>
      off</span>
  </NuxtLink>
</template> 
<script setup lang="ts">
defineProps({
  type: { type: String, required: true }, // Deal, Ad, Promo etc
  message: { type: String, required: true }, // Set message
  discount: { type: String }, // Discount rate / deal ex: 30%
  link: { type: String, required: true }, // Link
});
</script>