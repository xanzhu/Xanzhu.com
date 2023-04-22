<template>
  <main class="flex flex-col space-y-10">
    <LazyUiAlertFeat link="/re2" desc="Change is coming!" :ready="true" />
    <div class="flex flex-col text-center space-y-4 items-center mt-[8%]">
      <h1 class="font-semibold text-4xl sm:(text-5xl text-center) max-w-2xl text-left mx-4">
        {{ t("Resources.heading") }}
      </h1>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div v-for="resources in resource" :key="resources.category"
        class="p-6 dark:(bg-light-900 text-black) bg-dark-700 text-light-500 rounded-sm h-30 sm:mx-auto flex items-center sm:w-sm mx-4">
        <h3 class="sm:text-lg text-sm font-semibold">
          {{ t(resources.category) }}
        </h3>
        <div>
          <ol class="list-disc ml-6" v-for="url in resources.urls" :key="url.name">
            <li
              class="flex items-center space-x-1 opacity-80 sm:text-md text-xs group hover:(underline decoration-1 underline-offset-2)">
              <NuxtLink :href="url.path" :target="isExternalLink(url.path)" rel="noopener">{{ url.name }}</NuxtLink>
              <Icon v-if="isExternalLink(url.path) === '_blank'" name="ri:external-link-line" class="h-4 w-4" />
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="-z-1 p-4 m-0 sm:m-10 flex flex-col items-left max-w-7xl">
      <div class="my-6">
        <h2 id="section-2" class=".heading1 font-bold text-3xl border-l-6 border-[#FF0000] pl-2">
          {{ t("Resources.phish.title") }}
        </h2>
        <p class="opacity-75">
          {{ t("Resources.phish.subheading") }}
        </p>
      </div>
      <section class="prose prose-md flex flex-col mx-auto">
        <div>
          <p class="opacity-90">
            {{ t("Resources.phish.p-1") }}
          </p>
          <p class="opacity-90">
            {{ t("Resources.phish.p-2") }}
          </p>
        </div>
        <div>
          <div>
            <h3 class="font-semibold text-xl py-2">
              {{ t("Resources.phish.detecting") }}
            </h3>
            <ol class="list-decimal list-inside ml-6">
              <li>
                <NuxtLink to="https://www.virustotal.com/gui/home/url" class="hover:text-[#ff0000]">Virus Total</NuxtLink>
                {{ t("Resources.phish.virus") }}
              </li>
              <li>
                <NuxtLink class="hover:text-[#ff0000]" to="https://urlscan.io/">urlscan.io</NuxtLink>{{
                  t("Resources.phish.urlscan") }}
              </li>
            </ol>
          </div>
          <div>
            <h3 class="font-semibold text-xl py-2">
              {{ t("Resources.phish.reporting") }}
            </h3>
            <ol class="list-decimal list-inside ml-6">
              <li>
                <NuxtLink class="hover:text-[#ff0000]" to="https://safebrowsing.google.com/safebrowsing/report_phish/">
                  Google</NuxtLink>{{ t("Resources.phish.google") }}
              </li>
              <li>
                <NuxtLink class="hover:text-[#ff0000]" to="https://safebrowsing.google.com/safebrowsing/report_phish/">
                  Microsoft</NuxtLink>{{ t("Resources.phish.microsoft") }}
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const title = t("Resources.meta.title");
const description = t("Resources.meta.description");

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
  ogUrl: `https://xanzhu.com${locale.value === "en" ? "" : '/' + locale.value
    }/resources`,
  ogImage: "https://source.unsplash.com/dCuA11z7xHg",
  twitterDescription: description,
  twitterTitle: title,
});
</script>
