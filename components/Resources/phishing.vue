<template>
  <div class="grid sm:grid-cols-2 gap-4">
    <div
      class="sm:col-span-2 rounded-sm border-1 border-solid dark:border-brand-light b-transparent h-30"
    >
      <NuxtImg
        src="https://source.unsplash.com/nJX3ceE4zuU"
        class="h-full w-full rounded-sm object-cover"
        alt="Paint Waves Graphic"
      />
    </div>
    <div
      class="p-4 font-bold bg-brand-light rounded-sm text-center text-white text-2xl"
    >
      {{ $t("Resources.phishing") }}
    </div>
    <div
      class="dark:bg-dark-900 bg-light-600 b-1 b-solid rounded-sm border-brand-light p-4 row-span-2 col-span-1"
    >
      <ol class="m0 p2" v-for="url in urls" :key="url.name">
        <li
          class="flex justify-center items-center space-x-1 op80 sm:text-md text-sm group hover:(underline decoration-1 underline-offset-2)"
        >
          <NuxtLink
            :href="url.path"
            :target="isExternalLink(url.path)"
            rel="noopener"
            class="no-underline text-md dark:text-white text-black op95"
            >{{ url.name }}</NuxtLink
          >
          <Icon
            v-if="isExternalLink(url.path) === '_blank'"
            name="ri:external-link-line"
            class="h-4 w-4"
          />
        </li>
      </ol>
    </div>
    <div
      class="dark:(bg-dark-900 op-80) bg-light-600 b-1 b-solid rounded-sm border-brand-light h-sm p-4 col-span-1"
    >
    <p class="font-medium items-center inline-flex ml-2">{{ $t('Resources.explain.title') }}<Icon class="h3.5 w3.5 ml-1" name=ooui:help-notice-ltr /></p>
        <p class="px-5 m0">
          {{ $t('Resources.explain.phishing') }}
        </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const isExternalLink = (url: string): "_blank" | "_self" => {
  if (url.startsWith("https")) {
    return "_blank";
  }
  return "_self";
}

const urls = [
      {
        name: "Google Safe Browsing",
        path: "https://safebrowsing.google.com/safebrowsing/report_phish/",
      },
      {
        name: "Microsoft Site Reporting",
        path: "https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest",
      },
]
</script>