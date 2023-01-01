<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()
</script>
<template>
    <div class="h-full bg-black flex flex-col text-white justify-center items-center space-y-25">
        <div class="flex flex-col items-center sm:(flex-row space-x-10 text-xl)">
            <NuxtImg src="/images/404.png" width="270" height="151" :alt="t('error.404')" />
            <h1 class="text-center text-sm">{{ t('error.404') }}</h1>
        </div>
        <NuxtLink v-t="'error.return'" :to="localePath('/')"
            class="border-outline py-2 px-8 hover:(bg-white text-black) leading-none" />
    </div>
</template>