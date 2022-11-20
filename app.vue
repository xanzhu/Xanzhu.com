<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'dark:(bg-black text-white) bg-white text-black'
    }
})
</script>
<template>
    <NuxtLayout>
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </NuxtLayout>
</template>