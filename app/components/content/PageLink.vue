<template>
    <NuxtLink :to="url" target="_blank"
        class="dark:text-brand-dark text-brand-light hover:(underline decoration-2 underline-offset-3) decoration-none ">
        {{ title }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String },
    url: { type: String },
});
</script>