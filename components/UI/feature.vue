<script setup lang="ts">

const { locale } = useI18n()

const { data: wideFeature } = await useAsyncData('wide',
    () => queryContent(locale.value + '/blog')
        .where({ wide: true }).limit(1)
        .find()
)

const { data: features } = await useAsyncData('feature',
    () => queryContent(locale.value + '/blog')
        .where({ feature: true }).limit(4)
        .find()
)

</script>
<template>
    <div
        class="flex flex-col text-black bg-gray-100 border-gray-200 dark:(text-white border-dark-300 bg-dark-900) border-1 rounded-md space-y-5 mx-auto">
        <div class="flex flex-row items-center space-x-10 p-12 justify-between">
            <div class="flex flex-col space-y-2">
                <!-- Add Translations -->
                <h2 class="text-3xl font-medium">Featured Posts</h2>
                <p class="dark:(text-gray-300) text-black text-md break-words mr-[49%] font-thin tracking-wide">News,
                    guides and reviews on technology, how to use it and how to ensure your
                    data
                    remains is protected online.</p>
            </div>
            <div class="flex flex-row space-x-5">
                <button
                    class="border-1 border-dark-300 rounded-lg px-8 py-2 text-sm hover:(bg-dark-700 text-white)">Resources</button>
                <!-- Add hover for light -->
                <button
                    class="border-1 bg-white text-black px-10 py-2 rounded-md text-sm dark:hover:(border-1 border-white bg-transparent text-white)">Blog</button>
            </div>
        </div>
        <!-- Wide Feature -->
        <div v-if="wideFeature" v-for="wide in wideFeature" :key="wide.title" class="mx-20">
            <NuxtLink :to="(wide._path)"
                class="text-black dark:(text-white) flex flex-col lg:flex-row items-center mx-auto">
                <!-- Optimise -->
                <NuxtImg v-if="wide.img" :src="wide.img" class="dark:(border-dark-300 border-1) rounded-md" />
                <NuxtImg v-else-if="wide.media" :src="wide.media" sizes="sm:100vw md:50vw lg:25vw" provider="cloudinary"
                    class="dark:(border-dark-300 border-1) rounded-md w-[577px] h-[369px]" />
                <NuxtImg v-else src="https://source.unsplash.com/bHOKatJHjII/577x369"
                    class="dark:(border-dark-300 border-1) rounded-md" />
                <!-- <NuxtImg v-if="wide.media"
                    class="object-cover w-full h-full sm:rounded-md dark:(border-dark-300 border-1) rounded-md"
                    sizes="sm:100vw md:50vw lg:25vw" :src="wide.media" :alt="wide.alt" :title="wide.alt" format="webp"
                    fit="cover" loading="eager" provider="cloudinary" /> -->
                <div class="p-4 space-y-7">
                    <div v-if="wide.tag"
                        class="dark:(bg-dark-900 border-dark-300) border-1 border-gray-300 px-3 py-1 rounded inline-flex">
                        {{ wide.tag }}</div>
                    <h2 class="font-semibold text-3xl">{{ wide.title }}</h2>
                    <p v-if="wide.description" class="font-thin dark:text-gray-300 text-dark-400">{{ wide.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>
        <section class="grid grid-cols-1 gap-10 sm:(grid-cols-2) p-20">
            <!-- Feature 2 -->
            <div v-if="features" v-for="(feature, $index) in features" :key="`fe-${$index}`">
                <NuxtLink v-if="feature.feature" class="flex flex-col space-y-3" :to="(feature._path)">
                    <NuxtImg v-if="feature.img" class="dark:(border-dark-300 border-1) rounded-md" :src="feature.img" />
                    <NuxtImg v-else-if="feature.media" :src="feature.media" sizes="sm:100vw md:50vw lg:25vw"
                        provider="cloudinary" class="dark:(border-dark-300 border-1) rounded-md w-[600px] h-[380px]" />
                    <!-- Backup image -->
                    <NuxtImg v-else class="dark:(border-dark-300 border-1) rounded-md"
                        src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
                    <p v-if="feature.tag"
                        class="dark:(bg-dark-900 text-white border-dark-300) mr-auto px-4 border-1 py-1.5 rounded-md text-xs">
                        {{ feature.tag }}
                    </p>
                    <h2 class="rounded-md font-medium text-xl dark:(text-white)">
                        {{ feature.title }}
                    </h2>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>