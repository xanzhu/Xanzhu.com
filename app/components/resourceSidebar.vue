<script setup lang="ts">
const route = useRoute()
const { locale, t } = useI18n()

const basePath = computed(() => `/${locale.value === 'en' ? '' : `${locale.value}/`}resources`)
const isOnSubpage = computed(() => route.path !== basePath.value)

const categories = [
  {
    name: 'phishing',
    title: t('v2.resources.category.phishing'),
    icon: 'ion:fish',
    description: t('v2.resources.category.phishingDesc'),
  },
  {
    name: 'malware',
    title: t('v2.resources.category.malware'),
    icon: 'ri:bug-line',
    description: t('v2.resources.category.malwareDesc'),
  },
  {
    name: 'network-security',
    title: t('v2.resources.category.networkSec'),
    icon: 'ri:global-line',
    description: t('v2.resources.category.networkSecDesc'),
  },
  {
    name: 'privacy',
    title: t('v2.resources.category.privacy'),
    icon: 'ri:shield-line',
    description: t('v2.resources.category.privacyDesc'),
  },
]

const categoryLinks = computed(() =>
  categories.map(cat => ({
    ...cat,
    path: `${basePath.value}/${cat.name}`,
    isActive: route.path.includes(`/${cat.name}`),
  })),
)
</script>

<template>
  <aside
    class="w-auto flex flex-col bg-black p4 text-white font-mono md:(ml4 min-h-screen w-15rem p4)"
    role="complementary"
    aria-label="Resource categories navigation"
  >
    <nav aria-label="Resource navigation">
      <NuxtLink
        v-if="isOnSubpage"
        :to="basePath"
        class="group flex items-center gap-2 text-neutral-3 no-underline transition-colors -mb-5 focus:(text-white outline-2 outline-white outline-offset-2) hover:text-white"
      >
        <Icon
          name="lucide:arrow-left"
          class="h4 w4 transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        />
        <span>{{ t('v2.resources.category.back') }}</span>
      </NuxtLink>

      <h2
        id="categories-heading"
        class="m0 mb2 mt-10 text-sm text-neutral-4 font-semibold tracking-wide uppercase"
      >
        {{ t('v2.resources.subHead') }}
      </h2>

      <ul
        class="m0 list-none p0"
        role="list"
        aria-labelledby="categories-heading"
      >
        <li v-for="category in categoryLinks" :key="category.name" class="mb-2">
          <NuxtLink
            :to="category.path"
            class="flex items-center gap-2 rounded px-2 py-1.5 text-sm no-underline transition-colors focus:(bg-neutral-8 outline-2 outline-white outline-offset-2) hover:bg-neutral-8"
            :class="category.isActive ? 'text-white bg-neutral-8' : 'text-neutral-3'"
            :aria-current="category.isActive ? 'page' : undefined"
            :aria-label="`${category.title}: ${category.description}`"
          >
            <Icon
              :name="category.icon"
              class="h4 w4 flex-shrink-0"
              aria-hidden="true"
            />
            <span class="flex-1">{{ category.title }}</span>

            <span
              v-if="category.isActive"
              class="sr-only"
            >
              ({{ t('v2.resources.currentPage') }})
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

*:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
