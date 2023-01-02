<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
    <section class="relative h-screen">
        <div class="absolute w-full h-full bg-center bg-cover"
            style="background-image: url('/images/landing/globe.webp');">
        </div>
        <div class="absolute p-4 sm:p-12 left-0 md:right-[20%] xl:right-[30%] top-4">
            <h1 class="pt-10 text-3xl sm:(pt-0 text-5xl) font-semibold text-white">{{ t('blog.landing.desc') }}</h1>
        </div>
        <div>
            <p class="absolute text-white font-thin top-1/2 ml-4 p-6 bg-black right-0 sm:(w-1/2 top-1/2 p-8)"> {{
        t('home.landing-desc')
}}
            </p>
        </div>
        <span class="absolute font-thin text-xs bottom-0 right-0 m-3 p-1">{{ t('article.creditsource') }}: <NuxtLink
                class="font-normal" to="https://www.nasa.gov/" target="_blank">NASA</NuxtLink>, <NuxtLink
                class="font-normal"
                to="https://unsplash.com/photos/Q1p7bh3SHj8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank">Unsplash</NuxtLink></span>
    </section>
</template>