<template>
  <client-only v-if="error?.statusCode === 404">
    <div class="flex items-center justify-center bg-black font-sans text-white h-screen m-0">
      <div class="flex flex-col items-center text-center">
        <h1 class="font-bold m-0 text-9xl">404</h1>
        <h2 class="mt-10 font-normal">{{ $t('Error.404.title') }}</h2>
        <p class="text-lg">{{ $t('Error.404.desc') }}</p>
        <button class="py-2 b-none cursor-pointer rounded-md px-6 text-sm font-bold" @click="handleError">
          {{ $t('Error.return') }}
        </button>
      </div>
    </div>
  </client-only>
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: localePath('/') });
const localePath = useLocalePath();
</script>