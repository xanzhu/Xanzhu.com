<template>
  <div class="flex flex-col space-y-10 pt-10 ma px-5 sm:px-20 max-w-4xl">
    <div class="flex items-center justify-center sm:justify-between mb-10">
      <h1 class="sm:text-center font-bold text-3xl sm:text-4xl break-words sm:max-w-md">
        {{ t("Resources.heading") }}
      </h1>
      <div
        class="hidden md:(flex rounded-full h-20 w-20 text-white items-center justify-center b-12 b-rounded-full b-dashed)"
        :class="{ 'md:b-[#0000FF]': phishing, 'md:b-brand-dark': malware, 'md:dark:b-white md:b-black': a11y }" />
    </div>
    <div
      class="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 font-medium children:(dark:text-white text-black cursor-pointer b-1 b-solid rounded-sm px6 py2 font-bold)">
      <button @click="toggle('phishing')" class="hover:b-[#0000FF]"
        :class="{ 'bg-[#0000FF] b-[#0000FF] text-white': phishing, 'bg-transparent dark:b-white': !phishing }">
        {{ t("Resources.phishing") }}
      </button>
      <button @click="toggle('a11y')" class="dark:hover:b-white hover:b-black"
        :class="{ 'dark:bg-white dark:!text-black dark:b-white b-black bg-black text-white': a11y, 'bg-transparent dark:b-white': !a11y }">
        {{ t("Resources.accessibility") }}
      </button>
      <button @click="toggle('malware')" class="hover:b-brand-dark"
        :class="{ 'bg-brand-dark b-brand-dark !text-black': malware, 'bg-transparent dark:b-white': !malware }">
        {{ t("Resources.malware") }}
      </button>
    </div>
    <ResourcesPhishing v-if="phishing && !malware && !a11y" />
    <ResourcesMalware v-else-if="malware && !phishing && !a11y" />
    <ResourcesAccessibility v-else-if="a11y && !phishing && !malware" />

    <p class="text-center">{{ t('Resources.soon') }}</p>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const phishing = ref(true);
const malware = ref(false);
const a11y = ref(false);

function toggle(option: 'phishing' | 'malware' | 'a11y') {
  phishing.value = option === 'phishing';
  malware.value = option === 'malware';
  a11y.value = option === 'a11y';
}

// Seo
const seoImage = 'https://source.unsplash.com/dCuA11z7xHg'

const seoTitle = computed(() => {
  return t('Resources.meta.title');
});

const seoDesc = computed(() => {
  return t('Resources.meta.description');
});

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogDescription: seoDesc,
  ogTitle: seoTitle,
  ogImage: seoImage,
  twitterImage: seoImage,
  twitterDescription: seoDesc,
  twitterTitle: seoTitle
});
</script>