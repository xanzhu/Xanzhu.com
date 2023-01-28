<template>
  <div>
    <div class="container mx-auto p-2 space-y-4 sm:(pt-10 p-0) h-screen">
      <div class="grid grid-cols-2 lg:place-items-center space-y-2">
        <div class="col-span-2 lg:col-span-1 pt-2">
          <h1 class="text-2xl sm:text-4xl font-bold">
            {{ t("Resources.heading") }}
          </h1>
          <h2 class="text-base font-normal opacity-90">
            {{ t("Resources.subheading") }}
          </h2>
        </div>
        <div class="col-span-2 lg:(col-span-1 p-10)">
          <NuxtImg
            class="w-full h-auto rounded-md"
            src="/images/resources/guard.webp"
            alt="Security Guards"
            role="presentation"
            width="560"
            height="373"
            title="Security Guards"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:mx-10">
        <div
          v-for="resources in resource"
          :key="resources.category"
          class="p-6 dark:bg-dark-900 border-outline bg-light-500 rounded-lg h-40"
        >
          <h3 class="text-lg font-semibold">{{ t(resources.category) }}</h3>
          <div>
            <ol
              class="list-disc ml-6"
              v-for="url in resources.urls"
              :key="url.name"
            >
              <li>
                <NuxtLink
                  :href="url.path"
                  :target="isExternalLink(url.path)"
                  class="opacity-80 hover:underline"
                  rel="noopener"
                  >{{ url.name }}</NuxtLink
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 m-0 sm:m-10 flex flex-col items-left">
      <div class="my-6 sm:m-6">
        <h2
          id="section-2"
          class=".heading1 font-bold text-3xl border-l-6 dark:border-[#FF0000] border-[#0066CC] pl-2"
        >
          {{ t("Resources.phish.title") }}
        </h2>
        <p class="opacity-80">
          {{ t("Resources.phish.subheading") }}
        </p>
      </div>
      <section class="prose prose-md flex flex-col mx-auto">
        <div class="">
          <p class="opacity-90">
            {{ t("Resources.phish.p-1") }}
          </p>
          <p class="opacity-90">
            {{ t("Resources.phish.p-2") }}
          </p>
        </div>
        <div>
          <div>
            <h3 class="font-medium text-lg">
              {{ t("Resources.phish.detecting") }}
            </h3>
            <ol class="list-decimal ml-6">
              <li>
                <NuxtLink
                  to="https://www.virustotal.com/gui/home/url"
                  class="hover:accent-color"
                  >Virus Total</NuxtLink
                >{{ t("Resources.phish.virus") }}
              </li>
              <li>
                <NuxtLink class="hover:accent-color" to="https://urlscan.io/"
                  >urlscan.io</NuxtLink
                >{{ t("Resources.phish.urlscan") }}
              </li>
            </ol>
          </div>
          <div>
            <h3 class="font-medium text-lg">
              {{ t("Resources.phish.reporting") }}
            </h3>
            <ol class="list-decimal ml-6">
              <li>
                <NuxtLink
                  class="hover:accent-color"
                  to="https://safebrowsing.google.com/safebrowsing/report_phish/"
                  >Google</NuxtLink
                >{{ t("Resources.phish.google") }}
              </li>
              <li>
                <NuxtLink
                  class="hover:accent-color"
                  to="https://safebrowsing.google.com/safebrowsing/report_phish/"
                  >Microsoft</NuxtLink
                >{{ t("Resources.phish.microsoft") }}
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const title = t("Resources.meta.title");
const description = t("Resources.meta.description");
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
    urls: [
      {
        name: t("Resources.explore"),
        path: "#section-2",
      },
      {
        name: "Google Safe Browsing",
        path: "https://safebrowsing.google.com/safebrowsing/report_phish/",
      },
      {
        name: "Microsoft Site Reporting",
        path: "https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest",
      },
    ],
  },
  {
    category: "Resources.malware",
    urls: [
      {
        name: "Virus Total",
        path: "https://www.virustotal.com/gui/home/upload",
      },
      {
        name: "Hybrid Analysis",
        path: "https://www.hybrid-analysis.com/",
      },
    ],
  },
  {
    category: "Resources.accessibility",
    urls: [{ name: "WebAim", path: "https://webaim.org/" }],
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
