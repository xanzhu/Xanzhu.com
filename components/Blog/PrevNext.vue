<template>
    <nav class="flex justify-between pt-5 mx-5 sm:(mx-40 pt-10) children:(md:text-lg text-sm m-4 px-3 py-1 border-outline )">
        <NuxtLink v-if="prev" :to="prev._path"
            class="dark:hover:(bg-white text-black) hover:(bg-black text-white)">
            <p v-t="'article.Previous'" />
        </NuxtLink>
        <p class="invisible" v-else />
        <NuxtLink v-if="next" :to="next._path"
            class="dark:hover:(bg-white text-black) hover:(bg-black text-white)">
            <p v-t="'article.Next'" />
        </NuxtLink>
    </nav>
</template>
<script setup lang="ts">
export interface PrevNext {
    title?: string
    _path?: string
}

defineProps<{
    prev?: PrevNext
    next?: PrevNext
}>()
</script>