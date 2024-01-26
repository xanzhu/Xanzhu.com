<template>
    <div class="flex flex-col justify-center items-center px4">
        <!-- Tags -->

        <!-- Main Heading -->
        <div class="mx-auto flex flex-col items-start justify-center p1">
            <span
                class="text-sm inline-flex b-1 b-solid dark:b-dark-700 dark:bg-dark-900 bg-light-300 b-light-500 dark:text-white text-black font-medium py-2 px-6">
                {{ post.tag }}
            </span>
            <h1 class="font-bold text-6xl my4 leading-tight">
                {{ post.title }}
            </h1>
            <!-- post meta -->
            <div class="flex w-full mb4 items-center space-x-2">
                <Date v-if="post.date" :date="post.date" itemprop="datePublished" class="text-sm mt1" />
                <p class="dark:text-brand-dark text-brand-light font-black m0">/</p>
                <BlogReadTime class="lt-sm:hidden items-center mt0.2" :content="post" />
            </div>
            <div class="justify-between flex w-full mb4">
                <div class="font-thin text-2xl opacity-80 max-w-screen-sm">
                    {{ post.description }}
                </div>
                <div>
                    <BlogSocialShare v-bind:post="{ _path: post._path, title: post.title }" />
                </div>
            </div>
            <NuxtImg :src="post.img" :alt="post.alt" class="w-full h-auto object-cover rounded-md" />
        </div>
        <!-- Post Content -->
        <div class="">

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
