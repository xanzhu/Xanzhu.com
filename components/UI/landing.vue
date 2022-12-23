<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
    <div
        class="grid grid-cols-1 place-items-center space-y-4 md:(grid-cols-2 mx-auto p-10) dark:(text-white bg-black) p-4 items-center ">
        <div class="grid-col-auto flex flex-col justify-center md:space-y-6 sm:mx-10 space-y-4">
            <h1 class="text-3xl lg:text-4xl font-semibold">
                {{ t('blog.landing.desc') }}
            </h1>
            <p class="text-sm sm:text-lg text-gray-700 dark:(text-gray-300) md:pr-25 font-thin">
                {{ t('home.landing-desc') }}
            </p>
        </div>
        <div class="grid-col-auto pb-10 md:pb-0 flex-0 max-w-md">
            <NuxtImg crossorigin="anonymous" alt="Decorative image" loading="auto" class="border-outline" height="1000"
                width="800" src="https://source.unsplash.com/K5u5bXMGIwM/800x1000" />
        </div>
    </div>
</template>