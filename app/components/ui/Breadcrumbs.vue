<script setup lang="ts">
const { breadcrumbs, jsonLd } = useBreadcrumbs()

// Add JSON-LD to head
useHead({
  script: computed(() =>
    jsonLd.value
      ? [{
          key: 'breadcrumbs-jsonld',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd.value),
        }]
      : [],
  ),
})

const separator = computed(() => '>')
</script>

<template>
  <nav
    v-if="breadcrumbs.length > 1"
    class="text-sm"
    :aria-label="t('aria.breadcrumb')"
  >
    <ol class="flex pl4 md:(flex-row items-center)">
      <li
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
        class="flex items-center"
      >
        <NuxtLinkLocale
          v-if="!item.current"
          :to="item.path"
          class="text-neutral-600 underline underline-offset-3 transition-colors dark:text-neutral-400 hover:(text-neutral-900) dark:hover:text-neutral-100"
        >
          {{ item.name }}
        </NuxtLinkLocale>

        <span
          v-else
          class="text-neutral-900 font-medium dark:text-neutral-100"
          aria-current="page"
        >
          {{ item.name }}
        </span>

        <span
          v-if="index < breadcrumbs.length - 1"
          class="mx-2 text-neutral-400"
          aria-hidden="true"
        >
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>
