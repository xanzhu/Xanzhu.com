<template>
    <div class="grid place-items-center">
        <h1 class="text-lg px-10 py-4 border-outline dark:bg-dark-800 bg-light-600">{{ t('maintenance.title') }}</h1>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: t('maintenance.title')
})
</script>