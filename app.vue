<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'dark:(bg-black text-white) bg-white text-black'
    }
})
</script>
<template>
    <div class="h-screen flex flex-col">
        <AppHeader />
        <NuxtPage class="flex-1" />
        <AppFooter />
    </div>
</template>