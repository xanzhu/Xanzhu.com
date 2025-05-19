<script setup lang="ts">
defineProps({
  error: Object,
})

const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <client-only v-if="error?.statusCode === 404">
    <div class="m-0 h-screen flex items-center justify-center bg-black text-white font-sans">
      <div class="flex flex-col items-center text-center">
        <h1 class="m-0 text-9xl font-bold">
          404
        </h1>
        <h2 class="mt-10 font-normal">
          {{ t('Error.404.title') }}
        </h2>
        <p class="text-lg">
          {{ t('Error.404.desc') }}
        </p>
        <button class="cursor-pointer rounded-md b-none px-6 py-2 text-sm font-bold" @click="handleError">
          {{ t('Error.return') }}
        </button>
      </div>
    </div>
  </client-only>
</template>
