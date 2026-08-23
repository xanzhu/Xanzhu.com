<script setup>
const { locale, t } = useI18n()

const urls = [
  {
    url: 'https://www.ncsc.govt.nz/',
    name: 'NCSC',
  },
  {
    url: 'https://netsafe.org.nz/',
    name: 'NetSafe',
  },
  {
    url: 'https://bitwarden.com/',
    name: 'Bitwarden',
  },
  {
    url: 'https://www.ownyouronline.govt.nz/',
    name: 'OwnYourOnline',
  },
  {
    url: (locale.value === 'ko') ? 'https://www.samsung.com/sec/' : 'https://www.samsung.com/nz/',
    name: 'Samsung',
  },
]

function getSvgIconUrl(name) {
  return `/images/home/${name.toLowerCase()}.svg`
}
</script>

<template>
  <section
    class="hidden lg:(mb24 mt-20 flex inline-flex h-[12vh] items-center justify-center)" :aria-label="t('aria.brand_home_rec')"
  >
    <ul class="px-8 list-none flex flex-wrap gap-12 justify-center">
      <li v-for="link in urls" :key="link.name">
        <NuxtLink
          :to="link.url"
          target="_blank"
          rel="noopener"
          class="group rounded-sm inline-block focus:outline-hidden focus:ring-2 focus:ring-blue-500"
        >
          <div
            class="p-4 flex h-[40px] w-[128px] items-center justify-center"
            style="aspect-ratio: 128 / 40"
          >
            <NuxtImg
              :src="getSvgIconUrl(link.name)"
              :alt="`${link.name}`"
              width="128"
              height="40"
              loading="lazy"
              class="h-auto max-h-16 max-w-[120px] transition-opacity duration-300 ease-in-out brightness-0 invert-0 filter group-hover:opacity-75 dark:invert"
            />
          </div>
          <span class="sr-only">{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
