<script setup lang="ts">
const { desc, title } = defineProps<{
  desc?: string;
  title?: string;
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="text-sm mx2 mb-5 p5 core-border bg-neutral-200 rounded-md b-dashed text-black dark:(text-white bg-neutral-900)"
  >
    <div class="flex items-center space-x-2">
      <Icon name="lucide:triangle-alert" class="h5 w5" />
      <h1 class="text-xl font-semibold m-0">
        {{ title ?? t("app.alert.title") }}
      </h1>
    </div>

    <p class="font-normal">
      {{ desc ?? t("app.alert.desc") }}
    </p>
  </div>
</template>
