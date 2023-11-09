<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
        <div class="rounded-md p4" v-for="page in pages">
            <NuxtLinkLocale :to="page.path" class="no-underline mx-auto space-y-2 group">
                <div class="h-[208px] sm:w-[308px]">
                    <NuxtImg :src="page.img"
                        class="h-full w-full max-w-xl rounded-sm object-cover transform md:(transition duration-400 ease-in-out) md:group-hover:scale-102"
                        height="208" width="308" :alt="t(page.alt)" loading="lazy" format="webp" />
                </div>
                <div class="dark:text-white text-black flex flex-row items-center space-x-4 justify-between">
                    <div class="flex flex-col">
                        <h2 class="text-3xl font-bold m0">
                            {{ t(page.title) }}
                        </h2>
                        <p class="m0">{{ t(page.p) }}</p>
                    </div>
                    <div>
                        <Icon class="text-transparent b-rounded-md w8 h8 group-hover:(text-brand-dark)"
                            name="uil:arrow-right" :aria-label="t(page.aria)" />
                    </div>
                </div>
            </NuxtLinkLocale>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

// TODO: Update ALT + Translations

const pages = [
    {
        path: "/resources",
        title: "Links.resources",
        p: "PagesCard.resources",
        img: "https://source.unsplash.com/_wpce-AsLxk",
        alt: "PagesCard.image.street",
        aria: "a11y.ResourcePage"
    },
    {
        path: "/blog",
        title: "Links.blog",
        p: "PagesCard.blog",
        img: "https://source.unsplash.com/ACt8ycSzpdE",
        alt: "PagesCard.image.sky",
        aria: "a11y.BlogPage"
    },
    {
        path: "/analysis",
        title: "Links.analysis",
        p: "PagesCard.analysis",
        img: "https://source.unsplash.com/FBkrQhnLQoY",
        alt: "PagesCard.image.street",
        aria: "a11y.AnalysisPage"
    },
];
</script>