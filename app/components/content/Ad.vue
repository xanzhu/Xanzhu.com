<script setup lang="ts">
defineProps({
  type: { type: String, required: true }, // Deal, Ad, Promo etc
  message: { type: String, required: true }, // Set message
  discount: { type: String }, // Discount rate / deal ex: 30%
  link: { type: String, required: true }, // Link
})
</script>

<template>
  <!-- AD / Promo (Beta) v0.1 -->
  <NuxtLink
    :to="link" target="_blank"
    class="group relative flex flex-col cursor-pointer b-1 b-gray-300 rounded-sm b-solid bg-light200 p2 text-center no-underline dark:b-dark-500 dark:bg-dark-900 !no-underline"
  >
    <span
      class="mr-auto b-1 b-gray-400 rounded-sm b-solid bg-light-100 px2 py1 text-left text-xs op90 sm:absolute dark:b-dark-400 dark:bg-dark-900"
    >{{
      type }}</span>
    <span class="m4">{{ message }}
      <span
        class="decoration-2 decoration-brand-light underline-offset-2 group-hover:underline dark:decoration-brand-dark"
      >{{
        discount }}
      </span>
      off</span>
  </NuxtLink>
</template>
