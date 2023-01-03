<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()

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
    <div class="flex flex-col dark:(text-white bg-black) space-y-5 mx-auto">
        <div class="flex flex-col lg:(space-x-0 space-y-3 justify-between flex-row items-center pb-12) space-y-10 p-6">
            <div class="flex flex-col space-y-2">
                <h2 class="text-4xl font-medium">
                    {{ t('home.feature-post') }}
                </h2>
                <p class="dark:(text-gray-300) text-black text-md break-words lg:mr-[49%] font-thin tracking-wide">
                    {{ t('home.feature-desc') }}
                </p>
            </div>
            <div
                class="flex flex-col space-y-5 sm:(flex-row space-x-5 space-y-0) children:(border-outline text-center)">
                <NuxtLink :to="localePath('/resources')"
                    class="bg-black px-8 py-2 text-sm text-white hover:(bg-dark-500)">
                    {{ t('links.resources') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/blog')"
                    class="text-black px-8 py-2 text-sm dark:(text-black bg-white) bg-white hover:border-black dark:hover:(border-white bg-transparent text-white)">
                    {{ t('links.blog') }}
                </NuxtLink>
            </div>
        </div>
        <div v-if="wideFeature" v-for="wide in wideFeature" :key="wide.title" class="sm:(mx-5 p-0) lg:mx-20 p-4">
            <NuxtLink :to="(wide._path)"
                class="text-black dark:(text-white) group zoomef flex flex-col lg:flex-row lg:items-center mx-auto space-y-3 md:p-9 lg:(p-0 space-x-4)">
                <NuxtImg crossorigin="anonymous" v-if="wide.img" :src="wide.img" :alt="wide.alt" loading="lazy"
                    class="border-outline lg:max-w-lg xl:max-w-2xl" height="1253" width="1880" />
                <NuxtImg crossorigin="anonymous" v-else-if="wide.media" :src="wide.media" :alt="wide.alt" loading="lazy"
                    provider="cloudinary" class="border-outline md:max-w-2xl lg:max-w-lg" height="1253" width="1880" />
                <NuxtImg crossorigin="anonymous" v-else :alt="wide.alt" loading="lazy"
                    src="https://source.unsplash.com/bHOKatJHjII/577x369" class="border-outline md:max-w-2xl"
                    height="1253" width="1880" />
                <div class="sm:(space-y-7) md:space-y-2 space-y-4">
                    <div class="flex flex-row space-x-2">
                        <p v-if="wide.tag"
                            class="dark:(bg-black text-white) bg-white px-4 border-outline py-1.5 text-xs">
                            {{ wide.tag }}
                        </p>
                        <GlobalUtilsDate v-if="wide.date" :date="wide.date"
                            class="dark:(bg-black text-white) bg-white mr-auto px-4 py-1.5 border-outline text-xs" />
                    </div>
                    <h2
                        class="font-semibold text-xl sm:text-3xl sm:group-hover:(underline decoration-1 underline-offset-6)">
                        {{ wide.title }}</h2>
                    <p v-if="wide.description" class="font-thin dark:text-gray-300 text-dark-400">{{ wide.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>
        <section class="grid grid-cols-1 gap-10 md:(grid-cols-2) p-4 sm:p-5 lg:p-20">
            <div v-if="features" v-for="(feature, $index) in features" :key="`fe-${$index}`">
                <NuxtLink v-if="feature.feature" class="flex flex-col group relative zoomef" :to="(feature._path)">
                    <NuxtImg crossorigin="anonymous" v-if="feature.img" :alt="feature.alt" loading="lazy" height="369"
                        width="577" class="border-outline" :src="feature.img" />
                    <NuxtImg crossorigin="anonymous" v-else-if="feature.media" :src="feature.media" :alt="feature.alt"
                        height="369" width="577" sizes="sm:100vw md:50vw lg:25vw" provider="cloudinary" loading="lazy"
                        class="border-outline" />
                    <NuxtImg crossorigin="anonymous" :alt="feature.alt" loading="lazy" v-else height="369" width="577"
                        class="border-outline" src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
                    <GlobalUtilsDate v-if="feature.date" :date="feature.date"
                        class="dark:(bg-black text-white) bg-white px-4 py-2 border-outline rounded-tr-none rounded-bl-none rounded-tl-br-md text-xs absolute" />
                    <div class="mt-3 space-y-2">
                        <p v-if="feature.tag"
                            class="dark:(bg-black text-white) bg-white px-4 border-outline py-1.5 text-xs group-hover:(text-border-600) inline-flex">
                            {{ feature.tag }}
                        </p>
                        <h2
                            class="rounded-md font-medium text-xl dark:(text-white) sm:group-hover:(underline decoration-1 underline-offset-6)">
                            {{ feature.title }}
                        </h2>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<style>
.zoomef {
    transition: transform 0.5s;
}

.zoomef:hover {
    transform: scale(1.02);
}
</style>