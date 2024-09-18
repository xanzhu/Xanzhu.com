<template>
    <main class="flex flex-col justify-center">
        <div class="relative min-h-screen flex justify-center">
            <UiSvg loadSVG="landing-1" class="hidden md:flex" />
            <UiSvg loadSVG="landing-2" class="op60 md:op100" />
            <div class="flex flex-col items-center justify-center h-full z-0 text-center pt-70">
                <h1 class="text-6xl max-w-screen-md mx5 sm:(text-8xl max-w-screen-lg text-center mx4 -mt-20) m0 -mt-40">
                    {{
                        $t("Home.title")
                    }}</h1>
                <div class="mt-20">
                    <h2 class="text-xl font-thin dark:text-gray-300 text-dark-8">{{ $t("Home.subhead") }}</h2>
                    <div class="flex flex-col space-y-5 justify-center sm:(flex-row space-y-0 space-x-4)">
                        <NuxtLinkLocale to="/blog"
                            class="no-underline px-5 sm:px-10 py-3 dark:(bg-white text-black) bg-black text-white rounded-full border-none font-semibold hover:(cursor-pointer bg-[#0000ff] text-white) bg-[#0000ff]">
                            {{
                                $t("Home.cta-1") }}</NuxtLinkLocale>
                    </div>
                </div>
            </div>
        </div>
        <LazyHomeCompany />
        <LazyHomeArticleFeature class="min-h-screen" />
        <LazyHomePagesCard class="my-20" />
        <LazyHomeStatsCard class="min-h-screen" />
    </main>
</template>
<script setup lang="ts">
const seoImage = 'https://images.pexels.com/photos/5708251/pexels-photo-5708251.jpeg';
useLangMeta('Home.Seo', seoImage, 'prefix');

// URL Validation | Redirection for "/?<example>" (Temp Fix)
definePageMeta({
    validate(route) {
        if (route.fullPath.includes('?')) {
            throw createError({ statusCode: 404 });
        }
        return true;
    },
})
</script>