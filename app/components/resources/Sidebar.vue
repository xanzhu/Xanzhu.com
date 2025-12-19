<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const localePath = useLocalePath()

const basePath = computed(() => localePath('/resources'))
const isOnSubpage = computed(() => route.path !== basePath.value)

const categories = computed(() => [
  {
    name: 'phishing',
    title: t('resources.category.phishing'),
    icon: 'ion:fish',
    description: t('resources.category.phishingDesc'),
  },
  {
    name: 'malware',
    title: t('resources.category.malware'),
    icon: 'ri:bug-line',
    description: t('resources.category.malwareDesc'),
  },
  {
    name: 'network-security',
    title: t('resources.category.networkSec'),
    icon: 'ri:global-line',
    description: t('resources.category.networkSecDesc'),
  },
  {
    name: 'privacy',
    title: t('resources.category.privacy'),
    icon: 'ri:shield-line',
    description: t('resources.category.privacyDesc'),
  },
])

const categoryLinks = computed(() => {
  const base = basePath.value
  return categories.value.map(cat => ({
    ...cat,
    path: `${base}/${cat.name}`,
    isActive: route.path.startsWith(`${base}/${cat.name}`),
  }))
})
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
        <span>{{ t('resources.category.back') }}</span>
      </NuxtLink>

      <h2
        id="categories-heading"
        class="m0 mb2 mt-10 text-sm text-neutral-4 font-semibold tracking-wide uppercase"
      >
        {{ t('resources.subHead') }}
      </h2>

      <ul
        class="m0 list-none p0"
        role="list"
        aria-labelledby="categories-heading"
      >
        <li v-for="category in categoryLinks" :key="category.name" class="mb-2">
          <NuxtLink
            :to="category.path"
            class="flex items-center gap-2 rounded px-2 py-1.5 text-sm no-underline transition-colors focus:(bg-neutral-8 outline-2 outline-white outline-offset-2) hover:(bg-neutral-8 text-white)"
            :class="category.isActive ? 'text-white bg-neutral-8' : 'text-neutral-3'"
            :aria-current="category.isActive ? 'page' : undefined"
            :aria-label="category.description ? `${category.title}. ${category.description}` : category.title"
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
              ({{ t('resources.currentPage') }})
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

a:focus-visible,
button:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
