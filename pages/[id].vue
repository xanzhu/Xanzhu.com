<template>
  <GlobalAppError />
</template>
<script setup>
const { t } = useI18n()

useHead({
  title: t('error.404'),
  meta: [
    { property: 'description', content: t('error.desc') },
  ]
})
</script>