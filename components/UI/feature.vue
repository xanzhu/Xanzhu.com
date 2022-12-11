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
    <div
        class="flex flex-col text-black bg-gray-100 border-gray-200 dark:(text-white border-dark-300 bg-dark-900) border-1 rounded-md space-y-5 mx-auto">
        <div class="flex flex-col lg:(space-x-0 space-y-3 justify-between flex-row p-12 items-center) space-y-10 p-6">
            <div class="flex flex-col space-y-2">
                <h2 class="text-3xl font-medium">
                    {{ t('home.feature-post') }}
                </h2>
                <p class="dark:(text-gray-300) text-black text-md break-words lg:mr-[49%] font-thin tracking-wide">
                    {{ t('home.feature-desc') }}
                </p>
            </div>
            <div class="flex flex-col space-y-5 sm:(flex-row space-x-5 space-y-0)">
                <NuxtLink :to="localePath('/resources')"
                    class="border-1 border-dark-700 bg-black rounded-md px-8 py-2 text-sm text-white hover:(bg-dark-500)">
                    {{ t('links.resources') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/blog')"
                    class="border-1 border-gray-300 text-black px-8 py-2 rounded-md text-sm dark:(text-black bg-white) hover:(bg-white) dark:hover:(border-white bg-transparent text-white)">
                    {{ t('links.blog') }}
                </NuxtLink>
            </div>
        </div>
        <div v-if="wideFeature" v-for="wide in wideFeature" :key="wide.title" class="sm:(mx-20 p-0) p-4">
            <NuxtLink :to="(wide._path)"
                class="text-black dark:(text-white) flex flex-col lg:flex-row lg:items-center mx-auto space-y-3">
                <!-- TO:DO
                - A11y improvements
                - Add image contraints and replace with object-fit to control sizing
                -->
                <NuxtImg v-if="wide.img" :src="wide.img"
                    class="dark:(border-dark-300) border-1 border-gray-300 rounded-md" />
                <NuxtImg v-else-if="wide.media" :src="wide.media" provider="cloudinary"
                    class="dark:(border-dark-300) border-1 border-gray-300 rounded-md" />
                <NuxtImg v-else src="https://source.unsplash.com/bHOKatJHjII/577x369"
                    class="dark:(border-dark-300) border-1 border-gray-300 rounded-md" />
                <!-- <NuxtImg v-if="wide.media"
                    class="object-cover w-full h-full sm:rounded-md dark:(border-dark-300 border-1) rounded-md"
                    sizes="sm:100vw md:50vw lg:25vw" :src="wide.media" :alt="wide.alt" :title="wide.alt" format="webp"
                    fit="cover" loading="eager" provider="cloudinary" /> -->
                <div class="sm:(space-y-7) md:(p-6) space-y-2">
                    <div class="flex flex-row space-x-2">
                        <p v-if="wide.tag"
                            class="dark:(bg-black text-white border-dark-300) px-4 border-1 py-1.5 rounded-md text-xs">
                            {{ wide.tag }}
                        </p>
                        <Date v-if="wide.date" :date="wide.date"
                            class="dark:(bg-black text-white border-dark-300) mr-auto px-4 border-1 py-1.5 rounded-md text-xs" />
                    </div>
                    <h2 class="font-semibold text-xl sm:text-3xl">{{ wide.title }}</h2>
                    <p v-if="wide.description" class="font-thin dark:text-gray-300 text-dark-400">{{ wide.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>
        <section class="grid grid-cols-1 gap-10 md:(grid-cols-2) p-4 sm:p-20">
            <div v-if="features" v-for="(feature, $index) in features" :key="`fe-${$index}`">
                <NuxtLink v-if="feature.feature" class="flex flex-col space-y-3" :to="(feature._path)">
                    <NuxtImg v-if="feature.img" class="dark:(border-dark-300) border-1 border-gray-300 rounded-md" :src="feature.img" />
                    <NuxtImg v-else-if="feature.media" :src="feature.media" sizes="sm:100vw md:50vw lg:25vw"
                        provider="cloudinary" class="dark:(border-dark-300 border-1) rounded-md" />
                    <NuxtImg v-else class="dark:(border-dark-300 border-1) rounded-md"
                        src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
                    <div class="flex flex-row space-x-2">
                        <p v-if="feature.tag"
                            class="dark:(bg-black text-white border-dark-300) px-4 border-1 py-1.5 rounded-md text-xs">
                            {{ feature.tag }}
                        </p>
                        <Date v-if="feature.date" :date="feature.date"
                            class="dark:(bg-black text-white border-dark-300) mr-auto px-4 border-1 py-1.5 rounded-md text-xs" />
                    </div>
                    <h2 class="rounded-md font-medium text-xl dark:(text-white)">
                        {{ feature.title }}
                    </h2>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>