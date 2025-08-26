<script setup lang="ts">
const { breadcrumbs, jsonLd } = useBreadcrumbs()

// Add JSON-LD to head
useHead({
  script: computed(() =>
    jsonLd.value
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd.value),
        }]
      : [],
  ),
})
</script>

<template>
  <nav
    v-if="breadcrumbs.length > 1" class="text-sm" aria-label="Breadcrumb" itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <ol class="flex pl4 md:(flex-row items-center)">
      <li
        v-for="(item, index) in breadcrumbs" :key="item.path" class="flex items-center" itemprop="itemListElement"
        itemscope itemtype="https://schema.org/ListItem"
      >
        <meta :content="String(index + 1)" itemprop="position">

        <NuxtLinkLocale
          v-if="!item.current" :to="item.path"
          class="py1 text-neutral-600 underline underline-offset-3 transition-colors dark:text-neutral-400 hover:(text-neutral-900) dark:hover:text-neutral-100"
          itemprop="item"
        >
          <span itemprop="name">{{ item.name }}</span>
        </NuxtLinkLocale>

        <span
          v-else class="text-neutral-900 font-medium dark:text-neutral-100" itemprop="name"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </span>

        <span v-if="index < breadcrumbs.length - 1" class="mx-2 text-neutral-400" aria-hidden="true">
          >
        </span>
      </li>
    </ol>
  </nav>
</template>
