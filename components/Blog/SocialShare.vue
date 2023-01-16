<template>
    <div class="lg:(sticky top-20) <sm:(ml-10 mt-5) mt-5">
        <ul
            class="items-center lg:(space-y-4 flex flex-col items-center space-x-0) flex flex-row justify-left space-x-2 children:(p-2 lg:p-4 border-outline accent-color bg-light-200 dark:bg-dark-900)">
            <li>
                <NuxtLink
                    :to="`https://twitter.com/intent/tweet?url=https://xanzhu.com${post._path}&text=${post.title}&via=Xanzhu1`"
                    target="_blank">
                    <IconTwitter />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                    :to="`https://www.linkedin.com/shareArticle?url=https://xanzhu.com${post._path}&title=${post.title}`"
                    target="_blank">
                    <IconLinkedIn />
                </NuxtLink>
            </li>
        </ul>
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