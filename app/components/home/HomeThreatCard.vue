<template>
  <div class="px4 pt4 md:(px8 pt8) lg:w-4xl mx-auto rounded-lg border sm:core-ui sm:core-border mb4">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 bg-yellow-4 p-3 sm:p-4 rounded-lg">
      <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-black text-center sm:text-left mb-2 sm:mb-0">
        {{ t('threatCard.title') }}
      </h2>
      <Icon name="lucide:shield" class="h-8 w-8 sm:h-12 sm:w-12 text-black" aria-hidden="true" />
    </div>
    <div class="grid md:grid-cols-2 gap-3 sm:gap-4">
      <section aria-labelledby="regional-threats-title" class="bg-zinc-900 rounded-lg p-3 sm:p-4">
        <div class="flex items-center mb-3 sm:mb-4">
          <Icon name="lucide:alert-triangle" class="h-5 w-5 text-4 mr-2 text-yellow-4 flex-shrink-0" />
          <h3 id="regional-threats-title" class="text-lg sm:text-xl font-semibold text-yellow-4">
            {{ t('threatCard.regional.title') }}
          </h3>
        </div>
        <ul role="list" class="space-y-3 p0">
          <li v-for="threat in threats" :key="threat.id"
            class="bg-zinc-800 p-3 rounded transition-all hover:bg-zinc-700 cursor-pointer border-l-4 flex items-center">
            <span class="text-3xl font-bold text-white op70 px4">{{ threat.id }}.</span>
            <p class="text-white font-medium text-sm sm:text-base">
              {{ threat.name }}
            </p>
          </li>
        </ul>
      </section>
      <section aria-labelledby="recent-breaches-title" class="bg-zinc-900 rounded-lg p-3 sm:p-4">
        <div class="flex items-center mb-3 sm:mb-4">
          <Icon name="lucide:lock" class="h-5 w-5 text-white mr-2 flex-shrink-0" aria-hidden="true" />
          <h3 id="recent-breaches-title" class="text-lg sm:text-xl font-semibold text-white">
            {{ t('threatCard.recent.title') }}
          </h3>
        </div>
        <ul role="list" class="space-y-3 p0 list-none">
          <li v-for="breach in breaches" :key="breach.id"
            class="bg-yellow-4 p-3 rounded transition-all hover:bg-yellow-5 cursor-pointer border-l-4">
            <NuxtLink :to="breach.reference"
              class="grid grid-cols-[1fr,auto] gap-2 items-start decoration-none relative" target="_blank"
              :aria-label="`${breach.name} - ${breach.subtext} ` + t('threatCard.ariaLabel')">
              <div class="min-w-0">
                <p class="text-black font-semibold truncate text-sm sm:text-base">
                  {{ breach.name }}
                </p>
                <p class="text-black/80 truncate text-xs sm:text-sm mt-0.5">
                  {{ breach.subtext }}
                </p>
              </div>
              <span class="text-xs font-bold bg-black text-yellow-4 px-2 py-1 rounded whitespace-nowrap mr-auto">
                {{ breach.date }}
              </span>
              <Icon name="lucide:external-link" class="absolute right-0 h5 w5 text-black" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
    <p class="text-xs sm:text-sm text-inherit op70 mt-4 px-1">
      {{ t('threatCard.source') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface Threat {
  id: number;
  name: string;
}

interface Breach {
  id: number;
  name: string;
  subtext: string;
  date: string;
  reference: string;
}

const threats: Threat[] = [
  { id: 1, name: t('threatCard.regional.phish') },
  { id: 2, name: t('threatCard.regional.ransomware') },
  { id: 3, name: t('threatCard.regional.takeOver') },
  { id: 4, name: t('threatCard.regional.supplyChain') },
  { id: 5, name: t('threatCard.regional.dataBreach') }
];

const breaches: Breach[] = [
  {
    id: 1,
    name: "CROWDSTRIKE",
    subtext: t('threatCard.recent.crowdStrike'),
    date: "2024",
    reference: "https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/"
  },
  {
    id: 2,
    name: "OPTUS",
    subtext: t('threatCard.recent.optus'),
    date: "2023",
    reference: "https://www.optus.com.au/support/cyberresponse"
  },
  {
    id: 3,
    name: "LATITUDE",
    subtext: t('threatCard.recent.latitude'),
    date: "2023",
    reference: "https://www.latitudefinancial.com.au/latitude-cyber-incident/"
  }
];
</script>