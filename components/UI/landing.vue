<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
    <div
        class="flex sm:(p-15 space-y-0 items-center) md:flex-row flex-col-reverse dark:(text-white bg-black) p-7 items-center">
        <div class="flex flex-col justify-center md:space-y-6 sm:mx-10 space-y-4">
            <!-- Update locale naming scheme -->
            <h1 class="text-3xl lg:text-4xl font-semibold">{{ t('blog.landing.desc') }}</h1>
            <!-- Add Translation for this and improve wording-->
            <p class="text-sm sm:text-lg text-gray-700 dark:(text-gray-300) md:pr-25 font-thin">Xanzhu is a platform
                used to share
                knowledge.
                Helping build the next standard of privacy and accessibility. Teaching how to use technology and remain
                safe
                online.</p>
        </div>
        <div class="pb-10 md:pb-0 flex-0 md:flex-grow">
            <!-- Add sizing -->
            <NuxtImg class="dark:(border-dark-300 border-1) rounded-md"
                src="https://source.unsplash.com/K5u5bXMGIwM/800x1000" />
        </div>
    </div>
</template>