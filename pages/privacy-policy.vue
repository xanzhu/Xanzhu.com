<script setup lang="ts">
const { t, locale } = useI18n();

const title = t("Privacy-Policy.title");
const desc = t("Privacy-Policy.description");
const date = "2022-12-12";

const paragraphs: { [key: number]: string } = {
  1: t("Privacy-Policy.section-one"),
  2: t("Privacy-Policy.section-two"),
  3: t("Privacy-Policy.section-three"),
};

const url =
  locale.value == "en"
    ? "https://xanzhu.com/privacy-policy/"
    : `https://xanzhu.com/${locale.value}/privacy-policy/`;

useSeoMeta({
  title: title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: url,
});
</script>
<template>
  <div class="sm:mx-auto my-10 space-y-10 max-w-4xl">
    <div
      class="flex flex-col space-y-4 sm:(space-y-0 flex-row justify-between items-center) mx-4"
    >
      <div class="flex flex-col">
        <h1 class="text-2xl sm:text-3xl font-semibold">{{ title }}</h1>
        <p class="font-thin dark:text-light-500">{{ desc }}</p>
      </div>
      <p>
        {{ t("Privacy-Policy.date") }}:
        <GlobalUtilsDate class="font-thin" :date="date" />
      </p>
    </div>
    <div
      class="dark:(bg-dark-900) border-outline bg-light-300 space-y-4 font-thin text-md p-4 sm:(p-10 mx-3)"
    >
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
