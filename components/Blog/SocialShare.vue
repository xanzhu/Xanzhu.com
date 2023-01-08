<template>
    <!-- WIP
    - Fix url path -> figure out obtaining full URL path from browser window 
    - Sizing and placement - where to put?
    -->
    <div class="flex flex-col border-outline dark:bg-dark-900 bg-light-700 p-1">
        <span>Share this post!</span>
        <div class="inline-flex space-x-2">
            <NuxtLink
                :to="`https://twitter.com/intent/tweet?url=https://xanzhu.com${post._path}&text=${post.title}&via=Xanzhu1`"
                target="_blank">
                <IconTwitter />
            </NuxtLink>
            <NuxtLink
                :to="`https://www.linkedin.com/shareArticle?url=https://xanzhu.com${post._path}&title=${post.title}`"
                target="_blank">
                <IconLinkedIn />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>