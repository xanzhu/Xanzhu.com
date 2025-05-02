<template>
    <div>
        <h4 class="text-md font-bold mb-4">{{ (title) }}</h4>
        <ul class="list-none text-sm p0">
            <li v-for="(item, index) in links" :key="index" class="mb-2">
                <NuxtLinkLocale v-if="item.href" :to="item.href"
                    class="text-dark-100 dark:text-light-900 hover:(underline underline-2 underline-offset-3 dark:underline-white underline-dark-400) no-underline">
                    {{ (item.text) }} <span v-if="item.external" class="text-xs">↗</span>
                </NuxtLinkLocale>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    links: { text: string; href: string; external?: boolean; }[];
}>();
</script>
