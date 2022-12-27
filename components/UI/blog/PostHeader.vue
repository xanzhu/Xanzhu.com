<template>
    <header
        class="md:(grid-cols-2 border-outline bg-light-600 dark:bg-dark-900 space-y-0 gap-4 m-4 place-items-center) grid grid-cols-1 space-y-5">
        <div class="col-span-1 shrink-0 space-y-2 px-4 mt-5 sm:px-0 md:(ml-4 mt-0)">
            <div
                class="text-sm inline-flex space-x-3 children:(border-outline px-2 py-0.5 dark:bg-black bg-white dark:text-white text-black)">
                <span v-if="post.tag">
                    {{ post.tag }}
                </span>
                <BlogReadTime :content="post.body" />
            </div>

            <h1 class="md:(text-2xl mr-6) break-words text-xl font-semibold sm:leading-tight lg:text-3xl xl:text-4xl">
                {{ post.title }}
            </h1>
        </div>
        <div class="relative col-span-1 grow-0">
            <div>
                <NuxtImg v-if="post.media && !post.img" crossorigin="anonymous" class="w-full object-cover md:rounded-r"
                    :src="post.media" :alt="post.alt" :title="post.alt" provider="cloudinary" loading="auto"
                    format="webp" />
                <NuxtImg v-if="post.img || (post.img && post.media)" crossorigin="anonymous" :src="post.img"
                    :alt="post.alt" :title="post.alt" loading="auto" class="w-full object-cover md:rounded-r" />
                <Date v-if="post.date" :date="post.date"
                    class="dark:(bg-dark-900 text-white) bg-white px-4 py-2 rounded-bl-md md:(rounded-tl-none rounded-br-none rounded-tr-[4px] border-l-1 border-b-1 rounded-bl-md border-gray-300 dark:border-dark-300) text-xs absolute top-0 right-0" />
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