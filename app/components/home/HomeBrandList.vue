<script setup>
const { locale } = useI18n()

const urls = [
  {
    url: 'https://www.cert.govt.nz/',
    name: 'Certnz',
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
  <div class="hidden lg:(mt25 h12vh flex items-center justify-center)">
    <ul class="flex flex-wrap list-none justify-center gap-12 px-8" role="list">
      <li v-for="link in urls" :key="link.name" role="listitem">
        <NuxtLink :href="link.url" target="_blank" class="group inline-block">
          <div class="h-24 flex items-center justify-center p-4">
            <NuxtImg
              :src="getSvgIconUrl(link.name)"
              class="h-auto max-h-16 max-w-[120px] grayscale filter transition duration-300 ease-in-out dark:invert-0 group-hover:filter-none"
              :alt="`${link.name} logo`" width="128" height="40" loading="lazy"
            />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
