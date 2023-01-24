<template>
  <div class="flex flex-col space-y-4 children:lg:mx-40">
    <div
      class="flex flex-col mx-4 space-y-4 md:flex-row justify-center items-center"
    >
      <div class="flex flex-col text-left m-2 sm:space-y-4">
        <h1
          class="text-2xl lg:text-4xl xl:text-5xl font-semibold sm:mt-10 mt-5"
        >
          {{ t("Resources.heading") }}
        </h1>
        <p class="dark:text-white opacity-70">
          {{ t("Resources.subheading") }}
        </p>
      </div>
      <div class="h-auto w-auto md:w-[700px] object-cover">
        <NuxtImg
          src="images/resources/guard.webp"
          alt="Security Guards"
          title="Security Guards"
          class="rounded-md"
          height="700"
          width="1000"
        />
      </div>
    </div>
    <div
      class="flex flex-col space-y-4 md:(flex-row space-x-8 items-center space-y-0) mx-4 h-1/6"
    >
      <div
        class="bg-dark-900 p-2 border-outline"
        v-for="(resources, index) in resource"
        :key="index"
      >
        <h2 class="text-lg font-semibold tracking-wide">
          {{ t(resources.category) }}
        </h2>
        <ul class="list-disc ml-5">
          <li v-for="link in resources.urls" :key="link.path">
            <NuxtLink
              :to="link.path"
              :target="isExternalLink(link.path)"
              class="opacity-70 hover:border-b"
              rel="noopener"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
// TODO: Add translations
const title = "Security Toolkit: Essential Tools & Services for Online Safety";
const description =
  "Stay safe online with our curated list of the best security tools and services. From phishing protection to malware reporting, we've got you covered.";
const path = useRoute();

const isExternalLink = (url: string): "_blank" | "_self" => {
  if (url.startsWith("https")) {
    return "_blank";
  }
  return "_self";
};

const resource = [
  {
    category: "Resources.phishing",
    urls: [{ name: "Links Soon", path: "https://xanzhu.com" }],
  },
  {
    category: "Resources.malware",
    urls: [{ name: "Links Soon", path: "#" }],
  },
  {
    category: "Resources.accessibility",
    urls: [{ name: "Links Soon", path: "#" }],
  },
];

useSeoMeta({
  title: title,
  description: description,
  ogDescription: description,
  ogTitle: title,
  ogUrl: `https://xanzhu.com${path}`,
  ogImage: "https://source.unsplash.com/dCuA11z7xHg",
  twitterDescription: description,
  twitterTitle: title,
});
</script>
