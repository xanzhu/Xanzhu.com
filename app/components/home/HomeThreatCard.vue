<script setup lang="ts">
const { t } = useI18n()

interface Threat {
  id: number
  name: string
}

interface Breach {
  id: number
  name: string
  subtext: string
  date: string
  reference: string
}

const threats: Threat[] = [
  { id: 1, name: t('home.stats.regional.phish') },
  { id: 2, name: t('home.stats.regional.ransomware') },
  { id: 3, name: t('home.stats.regional.takeOver') },
  { id: 4, name: t('home.stats.regional.supplyChain') },
  { id: 5, name: t('home.stats.regional.dataBreach') },
]

const breaches: Breach[] = [
  {
    id: 1,
    name: 'CROWDSTRIKE',
    subtext: t('home.stats.recent.crowdStrike'),
    date: '2024',
    reference: 'https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/',
  },
  {
    id: 2,
    name: 'OPTUS',
    subtext: t('home.stats.recent.optus'),
    date: '2023',
    reference: 'https://www.optus.com.au/support/cyberresponse',
  },
  {
    id: 3,
    name: 'LATITUDE',
    subtext: t('home.stats.recent.latitude'),
    date: '2023',
    reference: 'https://www.latitudefinancial.com.au/latitude-cyber-incident/',
  },
]
</script>

<template>
  <section aria-labelledby="threat-stats-heading">
    <div class="mx-auto mb4 px4 pt4 border rounded-md sm:core-theme md:(px8 pt8) sm:core-border lg:w-4xl">
      <div class="mb-4 p-3 rounded-lg bg-yellow-400 flex flex-col items-center justify-between sm:mb-6 sm:p-4 sm:flex-row">
        <h2 id="threat-stats-heading" class="text-xl text-black font-bold mb-2 text-center md:text-4xl sm:text-2xl sm:mb-0 sm:text-left">
          {{ t('home.stats.title') }}
        </h2>
        <Icon name="lucide:shield" class="text-black h-8 w-8 sm:h-12 sm:w-12" aria-hidden="true" />
      </div>

      <div class="gap-3 grid sm:gap-4 md:grid-cols-2">
        <div class="p-3 rounded-lg bg-zinc-900 sm:p-4">
          <div class="mb-3 flex items-center sm:mb-4">
            <Icon name="lucide:alert-triangle" class="text-4 text-yellow-400 mr-2 shrink-0 h-5 w-5" aria-hidden="true" />
            <h3 class="text-lg text-yellow-400 font-semibold sm:text-xl">
              {{ t('home.stats.regional.title') }}
            </h3>
          </div>
          <ul class="p0 space-y-3">
            <li
              v-for="threat in threats"
              :key="threat.id"
              class="p-3 border-l-4 border-zinc-600 rounded-sm bg-zinc-800 flex cursor-pointer transition-colors items-center hover:bg-zinc-700"
            >
              <span class="text-3xl text-white font-bold px4 op70">{{ threat.id }}.</span>
              <p class="text-sm text-white font-medium sm:text-base">
                {{ threat.name }}
              </p>
            </li>
          </ul>
        </div>
        <div class="p-3 rounded-lg bg-zinc-900 sm:p-4">
          <div class="mb-3 flex items-center sm:mb-4">
            <Icon name="lucide:lock" class="text-white mr-2 flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <h3 class="text-lg text-white font-semibold sm:text-xl">
              {{ t('home.stats.recent.title') }}
            </h3>
          </div>
          <ul class="p0 list-none space-y-3">
            <li
              v-for="breach in breaches"
              :key="breach.id"
              class="p-3 border-l-4 border-yellow-600 rounded-sm bg-yellow-400 cursor-pointer transition-colors hover:bg-yellow-500"
            >
              <NuxtLink
                :to="breach.reference"
                class="no-underline gap-2 grid grid-cols-[1fr,auto] items-start relative"
                target="_blank"
                :aria-label="`${breach.name} - ${breach.subtext}. ${t('aria.open_new_tab')}`"
              >
                <div class="min-w-0">
                  <p class="text-sm text-black font-semibold truncate sm:text-base">
                    {{ breach.name }}
                  </p>
                  <p class="text-xs text-black/80 font-semibold mt-0.5 truncate uppercase sm:text-sm">
                    {{ breach.subtext }}
                  </p>
                </div>
                <span class="text-xs text-yellow-400 font-bold mr-auto px-2 py-1 rounded-sm bg-black whitespace-nowrap">
                  {{ breach.date }}
                </span>
                <Icon name="lucide:external-link" class="text-black h5 w5 right-0 absolute" aria-hidden="true" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <p class="text-xs text-inherit m4 op70 sm:text-sm">
        {{ t('home.stats.source') }}
      </p>
    </div>
  </section>
</template>
