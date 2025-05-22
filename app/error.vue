<script setup lang="ts">
defineProps({
  error: Object,
})

const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

// TODO: Add back button to UI
// const handleGoBack = () => window.history.back()
</script>

<template>
  <client-only v-if="error?.statusCode === 404">
    <div class="m-0 h-screen flex items-center justify-center font-mono">
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
        <button class="cursor-pointer rounded-sm px-6 py-2 text-sm font-bold core-border hover:core-theme" @click="handleError">
          {{ t('Error.return') }}
        </button>
      </div>
    </div>
  </client-only>
</template>
