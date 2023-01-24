<template>
  <GlobalAppError />
</template>
<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("Error.not-found"),
  description: t("Error.description"),
});
</script>
