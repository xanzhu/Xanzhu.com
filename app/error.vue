<script setup lang="ts">
const props = defineProps({
  error: Object,
})

const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

useHead({
  title: props.error?.statusCode === 404 ? t('Error.404.title') : t('Error.500.title'),
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})

const handleGoBack = () => window.history.length > 1 ? window.history.back() : handleError()
</script>

<template>
  <client-only v-if="error?.statusCode === 404">
    <div class="m-0 h-screen flex items-center justify-center font-mono">
      <div class="flex flex-col items-center text-center" role="alert" aria-live="polite">
        <h1 class="m-0 text-9xl font-bold">
          404
        </h1>
        <h2 class="mt-10 font-normal">
          {{ $t('Error.404.title') }}
        </h2>
        <p class="text-lg">
          {{ $t('Error.404.desc') }}
        </p>
        <button class="cursor-pointer rounded-sm px-6 py-2 text-sm font-bold core-border hover:core-theme" @click="handleGoBack">
          {{ $t('Error.return') }}
        </button>
      </div>
    </div>
  </client-only>
</template>
