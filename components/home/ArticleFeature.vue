<template>
    <div class="mt-10 mx-auto">
        <div class="flex md:justify-center items-center sm:space-x-45 lg:space-x-50 lg:p10">
            <h2 class="text-4xl mx6 md:(text-5xl mx0)">{{ $t('home.latest') }}</h2>
            <div class="hidden md:(flex h-2px bg-dark-400 w-40% mx-10)"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-3 gap-4 justify-items-center px6 md:px25 lg:px45 md:max-w-5xl max-w-lg children:(b-1 b-solid rounded-lg border-dark-700)"
            v-if="features">
            <div v-for="(feature, index) in features.slice(0, 3) " :key="index" class="group hover:b-[#0000ff]">
                <div class="col-span-1 p-5 dark:text-white cursor-pointer" v-if="features && features[index]">
                    <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature._path">
                        <span class="text-sm op-60">{{ feature.tag }}</span>
                        <h3>{{ feature.title }}</h3>
                        <p v-if="feature.description">{{ feature.description }}</p>
                    </NuxtLinkLocale>
                </div>
            </div>

            <div class="hidden lg:(grid row-span-2 col-span-2)" v-if="features && features[1]">
                <NuxtImg :src="features[1].img" :alt="features[1].alt" class="object-cover h-full w-full rounded-lg" />
            </div>

            <div v-for="(feature, index) in features.slice(3, 6)" :key="index" class="group hover:b-[#0000ff]">
                <div class="col-span-1 p-5 dark:text-white cursor-pointer" v-if="features && features[index + 3]">
                    <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature._path">
                        <span class="text-sm op-60">{{ feature.tag }}</span>
                        <h3>{{ feature.title }}</h3>
                        <p v-if="feature.description">{{ feature.description }}</p>
                    </NuxtLinkLocale>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const { data: features } = await useAsyncData("feature-articles", async () => {
    let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
    return await queryContent(query)
        .sort({ date: -1 })
        .where({ feature: true })
        .only(['title', 'description', 'img', 'date', 'tag', '_path', 'alt'])
        .limit(5)
        .find();
});
</script>