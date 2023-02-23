<template>
  <div
    class="h-full bg-black flex flex-col text-white justify-center items-center space-y-25"
  >
    <div class="flex flex-col items-center sm:(flex-row space-x-10 text-xl)">
      <span class="font-black text-8xl">404</span>
      <h1 class="text-center text-sm">{{ t("Error.not-found") }}</h1>
    </div>
    <NuxtLink
      @click="handleError"
      v-t="'Error.return-home'"
      :to="localePath('/')"
      class="border-outline py-2 px-8 hover:(bg-white text-black) leading-none"
    />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const handleError = () => clearError({ redirect: localePath("/") });
</script>
