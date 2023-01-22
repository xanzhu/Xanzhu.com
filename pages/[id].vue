<template>
  <GlobalAppError />
</template>
<script setup>
const { t } = useI18n();

useHead({
  title: t("Error.not-found"),
  meta: [{ property: "description", content: t("Error.description") }],
});
</script>
