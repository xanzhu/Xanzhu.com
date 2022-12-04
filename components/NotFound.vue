<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()

</script>
<template>
    <div class="bg-black flex flex-col text-white justify-center items-center space-y-25">
        <div class="flex flex-col items-center sm:(flex-row space-x-10 text-xl)">
            <NuxtImg src="/images/404.png" width="270" height="151" />
            <h1>{{ t('error.404') }}</h1>
        </div>
        <NuxtLink v-t="'error.return'" :to="localePath('/')"
            class="border-2 border-white py-1 px-8 hover:(bg-white text-black)" />
    </div>
</template>