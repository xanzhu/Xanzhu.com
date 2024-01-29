<template>
    <div class="flex flex-col justify-center items-center px4 lg:min-w-screen-lg  max-w-screen-lg mx-auto">
        <div class="mx-auto flex flex-col items-start justify-center p1">
            <span
                class="text-sm inline-flex b-1 b-solid dark:b-dark-700 dark:bg-dark-900 bg-light-300 b-light-500 dark:text-white text-black font-medium py-2 px-6">
                {{ post.tag }}
            </span>
            <h1 class="font-bold text-4xl md:text-5xl my4 leading-tight">
                {{ post.title }}
            </h1>
            <div class="flex w-full mb4 items-center space-x-2">
                <Date v-if="post.date" :date="post.date" itemprop="datePublished" class="text-sm mt1" />
                <p class="lt-sm:hidden dark:text-brand-dark text-brand-light font-black m0">/</p>
                <BlogReadTime class="lt-sm:hidden items-center mt0.2" :content="post" />
            </div>
            <div class="justify-between flex w-full md:mb8">
                <div class="font-thin text-xl md:text-2xl opacity-80 max-w-screen-sm">
                    {{ post.description }}
                </div>
                <div>
                    <BlogSocialShare v-bind:post="{ _path: post._path, title: post.title }" />
                </div>
            </div>
            <figure class="w-full h-auto mx-auto">
                <NuxtImg :src="post.img" :alt="post.alt" class="w-full h-auto object-cover rounded-md mt0 md:mt-5" />
                <figcaption v-if="post.source"
                    class="dark:(text-white opacity-60) text-dark-700 op90 text-xs tracking-wide">
                    <p class="inline-block m0" />
                    {{ t("Blog.source") + ": " + post.source }}
                </figcaption>
            </figure>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>
