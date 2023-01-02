<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
    <section class="relative h-screen">
        <div class="absolute w-full h-full bg-center bg-cover"
            style="background-image: url('/images/landing/globe.jpeg');">
        </div>
        <div class="absolute justify-start p-4 sm:p-12 left-0 top-4">
            <h1 class="text-3xl sm:text-5xl font-semibold text-white">{{ t('blog.landing.desc') }}</h1>
        </div>
        <div>
            <p class="absolute text-white font-thin top-1/2 ml-4 p-8 bg-black right-0 sm:(w-1/2 top-1/2)"> {{ t('home.landing-desc') }}
            </p>
        </div>
    </section>
</template>