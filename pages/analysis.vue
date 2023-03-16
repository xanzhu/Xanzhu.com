<template>
  <div class="flex justify-center items-center h-[70%]">
    <div class="flex flex-col items-center space-y-5 lg:max-w-lg xl:max-w-2xl">
      <h1 class="text-5xl font-bold">{{ t("Analysis.h1") }}</h1>
      <p
        class="dark:(bg-dark-900 border-dark-700 opacity-100) opacity-80 p-2 border-1 xl:max-w-lg"
      >
        {{ t("Analysis.soon") }}
      </p>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("Analysis.h1"),
  description: t("Analysis.soon"),
});
</script>
