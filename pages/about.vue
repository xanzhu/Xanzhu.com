<template>
    <div class="flex flex-col items-center min-h-screen md:mt-20">
        <h1>{{ t('About.h1') }}</h1>
        <div class="prose text-sm p4 sm:(text-base p2)">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const paragraphs: { [key: number]: string } = {
    1: t('About.p1'),
    2: t('About.p2'),
    3: t('About.p3'),
    4: t('About.p4'),
    5: t('About.p5')
};


const seoImage = 'https://images.pexels.com/photos/27050060/pexels-photo-27050060.jpeg';

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