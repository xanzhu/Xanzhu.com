<template>
    <div class="mt-10 mx-auto">
        <div class="flex md:justify-center items-center sm:space-x-45 lg:space-x-50 lg:p10">
            <h2 class="text-4xl mx6 md:(text-5xl mx0)">{{ $t('home.latest') }}</h2>
            <div class="hidden md:(flex h-2px bg-dark-400 w-40% mx-10)"></div>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-3 gap-4 justify-items-center px6 md:px25 lg:px45 md:max-w-5xl max-w-lg children:(b-1 b-solid rounded-lg border-dark-700)">
            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[0]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[0]._path">
                    <span class="text-sm op-60">{{ features[0].tag }}</span>
                    <h3>{{ features[0].title }}</h3>
                    <p v-if="features[0].description">{{ features[0].description }}</p>
                </NuxtLinkLocale>
            </div>
            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[1]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[1]._path">
                    <span class="text-sm op-60">{{ features[1].tag }}</span>
                    <h3>{{ features[1].title }}</h3>
                    <p v-if="features[1].description">{{ features[1].description }}</p>
                </NuxtLinkLocale>
            </div>
            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[2]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[2]._path">
                    <span class="text-sm op-60">{{ features[2].tag }}</span>
                    <h3>{{ features[2].title }}</h3>
                    <p v-if="features[2].description">{{ features[2].description }}</p>
                </NuxtLinkLocale>
            </div>

            <div class="hidden lg:(grid row-span-2 col-span-2)" v-if="features && features[1]">
                <NuxtImg :src="features[1].img" :alt="features[1].alt" class="object-cover h-full w-full rounded-lg" />
            </div>

            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[3]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[3]._path">
                    <span class="text-sm op-60">{{ features[3].tag }}</span>
                    <h3>{{ features[3].title }}</h3>
                    <p v-if="features[3].description">{{ features[3].description }}</p>
                </NuxtLinkLocale>
            </div>

            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[4]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[4]._path">
                    <span class="text-sm op-60">{{ features[4].tag }}</span>
                    <h3>{{ features[4].title }}</h3>
                    <p v-if="features[4].description">{{ features[4].description }}</p>
                </NuxtLinkLocale>
            </div>

            <div class="col-span-1 p-5 group hover:b-[#0000ff] dark:text-white cursor-pointer"
                v-if="features && features[5]">
                <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="features[5]._path">
                    <span class="text-sm op-60">{{ features[5].tag }}</span>
                    <h3>{{ features[5].title }}</h3>
                    <p v-if="features[5].description">{{ features[5].description }}</p>
                </NuxtLinkLocale>
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