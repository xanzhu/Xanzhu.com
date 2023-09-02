<template>
    <div class="sm:mx-auto my-10 space-y-10 max-w-4xl min-h-screen">
        <div class="flex flex-col space-y-4 sm:(space-y-0 flex-row justify-between items-center) mx-4">
            <div class="flex flex-col">
                <h1 class="text-2xl sm:text-3xl font-semibold m0">{{ title }}</h1>
                <p class="font-thin dark:text-light-500 m0">{{ desc }}</p>
            </div>
            <p class="m0">
                {{ t("PP.date") }}:
                <span class="font-thin">{{ date }}</span>
            </p>
        </div>
        <div
            class="dark:(bg-dark-900) border-outline bg-light-300 space-y-4 font-thin text-md p-4 sm:(p-10 mx-3) rounded-md m2">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const title = t("PP.title");
const desc = t("PP.description");
const date = "2023-09-02";

const paragraphs: { [key: number]: string } = {
    1: t("PP.section-one"),
    2: t("PP.section-two"),
    3: t("PP.section-three"),
};
</script>