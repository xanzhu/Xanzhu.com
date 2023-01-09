<template>
    <figure>
        <NuxtImg :src="source" />
        <figcaption v-bind:credit="credit">{{ t('Blog.source') + ": " + credit }}</figcaption>
    </figure>

</template>
<script setup lang="ts">
const { t } = useI18n()

defineProps({
    source: { type: String },
    credit: { type: String }
})
</script>
<style>
.prose figure figcaption {
    color: #000;
    font-size: 12px;
    letter-spacing: 1px;
    opacity: 0.7;
}

@media (prefers-color-scheme: dark) {
    .dark .prose figure figcaption {
        color: white;
    }
}
</style>