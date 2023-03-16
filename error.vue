<template>
  <Html class="bg-black text-white">
  <div class="flex justify-center items-center h-screen">
    <div v-if="error?.statusCode == 404" class="space-y-2">
      <NuxtLink
        class="text-[#ff0000] font-medium flex items-center p-1 hover:(bg-[#ff0000] text-white ease-in duration-300) inline-flex rounded-sm ease-out duration-500"
        :to="localePath('/')">
        <HomeArrowIcon class="transform rotate-180 h-4 w-4 mr-1" />{{
          t("Error.return")
        }}
      </NuxtLink>
      <h1 class="text-6xl font-bold">{{ t("Error.404.title") }}</h1>
      <p class="text-light-600 text-xl">
        {{ t("Error.404.desc") }}
      </p>
      <div class="space-x-0.5 flex items-center opacity-75">
        <Icon name="material-symbols:error-outline" class="h-4 w-4" />
        <p class="text-sm">{{ t("Error.404.code") }}</p>
      </div>
    </div>
    <div v-if="error?.statusCode == 500" class="space-y-3">
      <NuxtLink class="text-[#ff0000] font-medium flex items-center p-1" :to="localePath('/')">
        <HomeArrowIcon class="transform rotate-180 h-4 w-4 mr-1" />{{
          t("Error.return")
        }}
      </NuxtLink>
      <h1 class="text-6xl font-bold">{{ t("Error.500.title") }}</h1>
      <p class="text-light-600 text-xl">
        {{ t("Error.500.desc") }}
      </p>
      <div class="space-x-0.5 flex items-center opacity-75">
        <Icon name="material-symbols:error-outline" class="h-4 w-4" />
        <p class="text-sm">{{ t("Error.500.code") }}</p>
      </div>
    </div>
  </div>

  </Html>
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});

const localePath = useLocalePath();
const { t } = useI18n();
</script>
