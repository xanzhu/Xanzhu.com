<template>
    <div class="flex flex-col items-center">
        <h1>{{ $t('About.h1') }}</h1>
        <div class="prose text-sm p4 sm:(text-base p2)">
            <p> {{ $t('About.p1') }}</p>
            <p> {{ $t('About.p2') }}</p>
            <p> {{ $t('About.p3') }}</p>
            <p> {{ $t('About.p4') }}</p>
            <p> {{ $t('About.p5') }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">

const { t } = useI18n();

const seoImage = 'https://source.unsplash.com/WLORfDtl7oM'

const seoTitle = computed(() => {
    return t('About.title');
});

const seoDesc = computed(() => {
    return t('About.desc');
});

useSeoMeta({
    title: seoTitle,
    description: seoDesc,
    ogTitle: seoTitle,
    ogDescription: seoDesc,
    twitterDescription: seoDesc,
    twitterTitle: seoTitle,
    twitterImage: seoImage,
    ogImage: seoImage,
});

</script>