<template>
    <figure>
        <NuxtImg :src="source" loading="lazy" placeholder :alt="alt" :title="alt" />
        <figcaption v-if="credit" v-bind:credit="credit">{{ t('Blog.source') + ": " + credit }}</figcaption>
    </figure>

</template>
<script setup lang="ts">
const { t } = useI18n()

defineProps({
    source: { type: String },
    credit: { type: String },
    alt: { type: String }
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