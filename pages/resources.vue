<template>
  <div
    class="flex p-4 sm:mx-10 <lg:justify-between flex-col mx-auto sm:p-10 space-y-5"
  >
    <div
      class="flex flex-col justify-between md:(flex-row justify-center) items-center space-y-4 sm:space-y-0"
    >
      <div class="grid grid-cols-1 sm:space-y-4">
        <h1 class="text-2xl lg:text-4xl xl:text-5xl font-semibold mt-10 pr-2">
          {{ t("Resources.heading") }}
        </h1>
        <p class="dark:text-white opacity-70">
          {{ t("Resources.subheading") }}
        </p>
      </div>
      <div class="h-[250px] w-auto md:w-[1000px] object-cover">
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
      class="flex lg:pt-[8%] <sm:justify-center space-x-4 children:(py-2 px-4 sm:px-6 border-outline)"
    >
      <div v-for="(resources, index) in resource" :key="index">
        <h2 class="text-lg font-bold tracking-wide">
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

useHead({
  title: title,
  meta: [
    { property: "og:title", content: title },
    { name: "description", content: description },
    { property: "og:description", content: description },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    { property: "og:url", content: `https://xanzhu.com${path}` },
    {
      property: "og:image",
      content: "https://source.unsplash.com/dCuA11z7xHg",
    },
  ],
});
</script>
