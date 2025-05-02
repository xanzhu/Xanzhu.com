<template>
  <div class="hidden lg:(flex justify-center items-center mt25 h12vh)">
    <div class="flex flex-wrap justify-center gap-12 px-8">
      <NuxtLink v-for="link in urls" :key="link.name" :href="link.url" target="_blank" class="inline-block group">
        <div class="flex justify-center items-center h-24 p-4">
          <NuxtImg :src="getSvgIconUrl(link.name)"
            class="max-w-[120px] max-h-16 h-auto filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
            :alt="`${link.name} logo`" width="128" height="40" loading="lazy" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const urls = [
  {
    url: "https://www.cert.govt.nz/individuals/",
    name: "Certnz",
  },
  {
    url: "https://netsafe.org.nz/",
    name: "NetSafe",
  },
  {
    url: "https://bitwarden.com/",
    name: "Bitwarden",
  },
  {
    url: (locale.value === 'ko') ? 'https://www.samsung.com/sec/' : 'https://www.samsung.com/nz/',
    name: "Samsung"
  }
];

const getSvgIconUrl = (name) => {
  return `/images/home/${name.toLowerCase()}.svg`;
};
</script>