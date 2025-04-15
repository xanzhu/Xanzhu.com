<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 justify-items-center mx-auto lg:w-5xl">
        <NuxtLinkLocale v-for="page in pages" :key="page.path" :to="page.path"
            class="group relative block w-full max-w-sm decoration-none">
            <div
                class="relative overflow-hidden rounded-2xl core-theme dark:(from-zinc-900 to-black bg-gradient-to-bl) bg-gradient-to-tr from-gray-2 to-white p4 transition-all duration-300 border core-border h-[180px] group-hover:(scale-102)">
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div class="relative h-full flex flex-col dark:text-white text-black">
                    <div class="flex justify-between items-start">
                        <h2 class="text-4xl font-bold text-inherit">
                            {{ $t(page.title) }}
                        </h2>
                        <Icon name="lucide:arrow-up-right"
                            class="w6 h6 text-inherit transition-colors group-hover:(bg-black text-white ) dark:group-hover:(bg-white text-black) p2 rounded-full core-ui flex" />
                    </div>
                    <p class="dark:text-white text-sm flex-grow">
                        {{ $t(page.description) }}
                    </p>
                </div>
            </div>
        </NuxtLinkLocale>
    </div>
</template>

<script setup lang="ts">
const pages = [
    {
        path: "/resources",
        title: "Links.resources",
        description: "pageCard.tools",
    },
    {
        path: "/blog",
        title: "Links.blog",
        description: "pageCard.article",
    },
    {
        path: "/analysis",
        title: "Links.analysis",
        description: "pageCard.caseStudy",
    }
];
</script>