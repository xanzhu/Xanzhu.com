<script setup lang="ts">
withDefaults(
  defineProps<{
    date: string | Date | number;
    isUpdated?: boolean;
  }>(),
  {
    isUpdated: false,
  },
);
const { locale, t } = useI18n();
</script>

<template>
  <template v-if="isUpdated">
    {{ t("common.article.updated") }}:
    <NuxtTime :datetime="date" :locale="locale" month="long" day="numeric" year="numeric" />
  </template>
  <NuxtTime v-else :datetime="date" :locale="locale" month="long" day="numeric" year="numeric" />
</template>
