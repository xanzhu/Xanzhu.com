<template>
    <header
        class="md:(grid-cols-2 border-outline bg-light-600 dark:bg-dark-900 space-y-0 gap-4 m-4 place-items-center) grid grid-cols-1 space-y-5">
        <div class="col-span-1 shrink-0 space-y-2 px-4 mt-5 sm:px-0 md:(ml-4 mt-0)">
            <div class="inline-flex space-x-1 text-sm">
                <p class="border-outline bg-white px-2 py-0.5 dark:bg-black">{{ post.tag }}</p>
                <Date v-if="post.date" class="border-outline bg-white px-2 py-0.5 dark:bg-black" :date="post.date" />
            </div>
            <h1 class="md:(text-2xl mr-6) break-words text-xl font-semibold sm:leading-tight lg:text-3xl xl:text-4xl">
                {{ post.title }}
            </h1>
            <div class="inline-flex space-x-2 text-sm">
                <p v-if="post.author">By: <span class="text-[#0066CC] dark:text-[#FF0000]">Example user</span></p>
                <BlogReadTime class="flex" :content="post.body" />
            </div>
        </div>
        <div class="relative col-span-1 grow-0">
            <div>
                <NuxtImg v-if="post.media && !post.img" crossorigin="anonymous" class="w-full object-cover md:rounded-r"
                    :src="post.media" :alt="post.alt" :title="post.alt" provider="cloudinary" loading="auto"
                    format="webp" />
                <NuxtImg v-if="post.img || (post.img && post.media)" crossorigin="anonymous" :src="post.img"
                    :alt="post.alt" :title="post.alt" loading="auto" class="w-full object-cover md:rounded-r" />
                <div v-if="post.source"
                    class="dark:(text-light-200 opacity-65) text-dark-700 absolute right-0 px-1 py-0.5 text-xs italic opacity-80">
                    <p v-t="'article.creditsource'" class="inline-block" />: {{ post.source }}
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>