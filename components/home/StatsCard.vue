<template>
  <!-- TODO: Redesign entire section! -->
  <div class="mx-auto sm:min-h-screen space-y-12 mt-20">
    <div
      class="flex flex-col items-center justify-evenly space-y-5 md:flex-row lg:space-y-0 lg:space-x-5"
    >
      <div class="sm:max-w-xl space-y-4 mx-8 sm:mx-0">
        <h2 class="text-4xl lg:text-6xl font-bold">
          {{ t("StatsCard.title") }}
        </h2>
        <p class="opacity-70 border-1 p-4 text-md rounded-sm dark:(bg-dark-900 border-dark-600 opacity-100) bg-light-500 border-gray-300">
          {{ t("StatsCard.warn") }}
        </p>
      </div>
      <NuxtImg
        src="/images/badge.webp"
        class="w-[360px] x h-[367px]"
        height="367"
        width="360"
        :alt="t('StatsCard.image.badge')"
        loading="lazy"
      />
    </div>
    <div
      class="m-10 flex flex-col sm:items-center justify-evenly space-y-10 sm:space-y-0 space-x-2 rounded-sm sm:flex-row"
    >
      <div class="p-2 md:(p-15) flex flex-col items-center">
        <h3 class="mb-3 text-3xl font-bold dark:text-[#ff0000] text-[#001EFA]">
          {{ t("StatsCard.threats.title") }}
        </h3>
        <ul class="list-inside opacity-70 rounded-sm dark:(bg-dark-900 border-dark-600 opacity-100) border-1 bg-light-500 border-gray-300 p-4">
          <li>{{ t("StatsCard.threats.data_1") }}</li>
          <li>{{ t("StatsCard.threats.data_2") }}</li>
          <li>{{ t("StatsCard.threats.data_3") }}</li>
        </ul>
      </div>
      <div class="p-3 md:(p-15) flex flex-col items-center">
        <h3 class="mb-3 text-3xl font-bold dark:text-[#ff0000] text-[#001EFA]">
          {{ t("StatsCard.breaches.title") }}
        </h3>
        <ul class="b-red-600 b-rounded-sm b-4 list-inside op70 rounded-sm dark:(bg-dark-900 border-dark-600 opacity-100) border-1 bg-light-500 border-gray-300 p-4">
          <li>{{ t("StatsCard.breaches.data_1") }}</li>
          <li>{{ t("StatsCard.breaches.data_2") }}</li>
          <li>{{ t("StatsCard.breaches.data_3") }}</li>
        </ul>
      </div>
    </div>
    <div
      class="mx-auto flex flex-col items-center justify-center space-y-2 p-4 text-center mb-auto"
    >
      <p class="text-lg opacity-90">{{ t("StatsCard.check") }}</p>
      <NuxtLink to="https://haveibeenpwned.com/" target="_blank">
        <NuxtImg
          class="h-[40px] rounded-xl bg-white p-1 hover:bg-[#ff0000]"
          src="images/haveibeenpwned.png"
          :alt="t('StatsCard.image.pwn')"
          loading="lazy"
          height="32"
          width="201"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>
