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
  { id: 1, name: t('threatCard.regional.phish') },
  { id: 2, name: t('threatCard.regional.ransomware') },
  { id: 3, name: t('threatCard.regional.takeOver') },
  { id: 4, name: t('threatCard.regional.supplyChain') },
  { id: 5, name: t('threatCard.regional.dataBreach') },
]

const breaches: Breach[] = [
  {
    id: 1,
    name: 'CROWDSTRIKE',
    subtext: t('threatCard.recent.crowdStrike'),
    date: '2024',
    reference: 'https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/',
  },
  {
    id: 2,
    name: 'OPTUS',
    subtext: t('threatCard.recent.optus'),
    date: '2023',
    reference: 'https://www.optus.com.au/support/cyberresponse',
  },
  {
    id: 3,
    name: 'LATITUDE',
    subtext: t('threatCard.recent.latitude'),
    date: '2023',
    reference: 'https://www.latitudefinancial.com.au/latitude-cyber-incident/',
  },
]
</script>

<template>
  <div class="mx-auto mb4 border rounded-md px4 pt4 lg:w-4xl sm:core-border sm:core-theme md:(px8 pt8)">
    <div class="mb-4 flex flex-col items-center justify-between rounded-lg bg-yellow-4 p-3 sm:mb-6 sm:flex-row sm:p-4">
      <h2 id="threat-card-title" class="mb-2 text-center text-xl text-black font-bold sm:mb-0 sm:text-left md:text-4xl sm:text-2xl">
        {{ t('threatCard.title') }}
      </h2>
      <Icon name="lucide:shield" class="h-8 w-8 text-black sm:h-12 sm:w-12" aria-hidden="true" />
    </div>
    <div class="grid gap-3 md:grid-cols-2 sm:gap-4">
      <section aria-labelledby="regional-threats-title" class="rounded-lg bg-zinc-900 p-3 sm:p-4">
        <div class="mb-3 flex items-center sm:mb-4">
          <Icon name="lucide:alert-triangle" class="mr-2 h-5 w-5 flex-shrink-0 text-4 text-yellow-4" />
          <h3 id="regional-threats-title" class="text-lg text-yellow-4 font-semibold sm:text-xl">
            {{ t('threatCard.regional.title') }}
          </h3>
        </div>
        <ul role="list" class="p0 space-y-3">
          <li
            v-for="threat in threats" :key="threat.id"
            class="flex cursor-pointer items-center border-l-4 rounded bg-zinc-800 p-3 transition-all hover:bg-zinc-700"
          >
            <span class="px4 text-3xl text-white font-bold op70">{{ threat.id }}.</span>
            <p class="text-sm text-white font-medium sm:text-base">
              {{ threat.name }}
            </p>
          </li>
        </ul>
      </section>
      <section aria-labelledby="recent-breaches-title" class="rounded-lg bg-zinc-900 p-3 sm:p-4">
        <div class="mb-3 flex items-center sm:mb-4">
          <Icon name="lucide:lock" class="mr-2 h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
          <h3 id="recent-breaches-title" class="text-lg text-white font-semibold sm:text-xl">
            {{ t('threatCard.recent.title') }}
          </h3>
        </div>
        <ul role="list" class="list-none p0 space-y-3">
          <li
            v-for="breach in breaches" :key="breach.id"
            class="cursor-pointer border-l-4 rounded bg-yellow-4 p-3 transition-all hover:bg-yellow-5"
          >
            <NuxtLink
              :to="breach.reference"
              class="relative grid grid-cols-[1fr,auto] items-start gap-2 decoration-none" target="_blank"
              :aria-label="`${breach.name} - ${breach.subtext} ${t('threatCard.ariaLabel')}`"
            >
              <div class="min-w-0">
                <p class="truncate text-sm text-black font-semibold sm:text-base">
                  {{ breach.name }}
                </p>
                <p class="mt-0.5 truncate text-xs text-black/80 sm:text-sm">
                  {{ breach.subtext }}
                </p>
              </div>
              <span class="mr-auto whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-yellow-4 font-bold">
                {{ breach.date }}
              </span>
              <Icon name="lucide:external-link" class="absolute right-0 h5 w5 text-black" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
    <p class="mt-4 px-1 text-xs text-inherit op70 sm:text-sm">
      {{ $t('threatCard.source') }}
    </p>
  </div>
</template>
