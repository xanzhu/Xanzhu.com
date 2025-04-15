<template>
    <div class="flex flex-col justify-center items-center px4 md:px0 lg:min-w-screen-lg mx-auto">
        <div class="mx-auto items-center flex flex-col justify-center w-full max-w-screen-lg">
            <div class="w-full">
                <span
                    class="text-sm op-80 bg-white dark:bg-black px4 py1 rounded-sm core-border tracking-wide mr-auto">
                    {{ post.tag }}
                </span>
                <h1 class="font-bold text-4xl md:(text-5xl line-height-tight) mt2 mb1">
                    {{ post.title }}
                </h1>
                <div class="flex w-full mb4 items-center space-x-1.5">
                    <Date v-if="post.date" :date="post.date" itemprop="datePublished" />
                    <p class="font-black m0">•</p>
                    <BlogReadTime class="items-center mt0.7" :content="post" />
                </div>
                <div class="flex flex-col space-y-5 justify-left w-full">
                    <div class="font-300 text-lg md:text-xl opacity-80 max-w-screen-sm lg:max-w-screen-md">
                        {{ post.description }}
                    </div>
                </div>
            </div>
            <figure class="w-full h-auto mx-auto m0">
                <NuxtImg v-if="post.img" :src="post.img" :alt="post.alt" height="400" width="700" loading="eager"
                    preload class="w-full h-auto object-cover rounded-md core-border mt5" />
                <NuxtImg v-else src="/images/resources/a11y.webp" class="w-full h-auto object-cover rounded-md" />
                <figcaption v-if="post.source"
                    class="dark:(text-white opacity-60) text-dark-700 op90 text-xs tracking-wide">
                    <p class="inline-block m0" />
                    {{ $t("Blog.source") + ": " + post.source }}
                </figcaption>
            </figure>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>
