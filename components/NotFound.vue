<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()

useHead({
    title: t('error.404')
})
</script>
<template>
    <div class="bg-black flex flex-col text-white justify-center items-center space-y-10">
        <div class="flex flex-row items-center justify-center space-x-10">
            <img src="/images/404.png" height="450" width="270" />
            <h1>{{ t('error.404') }}</h1>
        </div>
        <NuxtLink v-t="'error.return'" :to="localePath('/')"
            class="border-2 border-white py-1 px-8 font-normal hover:(bg-white text-black)" />
    </div>
</template>
<!-- TO:DO
- Mobile Support
- Nuxt Image Support
- Design improvements
-->