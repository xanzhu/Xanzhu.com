<script setup lang="ts">
const props = defineProps<{
  links: TocLink[]
}>()

const { t } = useI18n()

interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

const isDesktop = ref(false)
let observer: IntersectionObserver | null = null
const activeSection = ref<string | null>(null)

function flattenLinks(links: TocLink[]): TocLink[] {
  return links.flatMap((link) => {
    const _link = [link]
    if (link.children) {
      _link.push(...flattenLinks(link.children))
    }
    return _link
  })
}

const hasChildren = computed<boolean>(() => {
  return flattenLinks(props.links).some(link => link.depth === 3)
})

function setupIntersectionObserver() {
  if (!isDesktop.value)
    return

  const sections = flattenLinks(props.links)
    .filter(link => link.id)
    .map(link => document.getElementById(link.id))
    .filter((el): el is HTMLElement => el !== null)

  if (sections.length === 0)
    return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0.03,
    },
  )

  sections.forEach(section => observer?.observe(section))
}

function checkScreenWidth() {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
  setupIntersectionObserver()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth)
  if (observer)
    observer.disconnect()
})
</script>

<template>
  <nav
    class="m-4 core-border rounded-md bg-neutral-100 p-4 md:(mx-auto max-w-xl) lg:(max-w-md) dark:bg-neutral-900"
    :aria-label="t('Blog.toc')"
    aria-labelledby="toc-heading"
    role="navigation"
  >
    <header id="toc-heading" class="mb-2 pb-2">
      <p class="m-0 text-center text-lg font-semibold tracking-wide">
        {{ t("Blog.toc") }}
      </p>
    </header>
    <ul class="flex flex-col gap-2 px-6 text-sm" role="list">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        class="w-fit border border-1 border-transparent rounded-md border-solid text-gray-800 transition-colors duration-200 dark:text-light-400"
        :class="{
          'list-disc hover:(underline underline-offset-3 underline-2)': !hasChildren && link.depth === 2,
          'ml-4 opacity-80 hover:(underline underline-offset-3 underline-2) p1': link.depth === 3,
          'list-none -ml-4 mr-auto py-1 px-3 text-gray-600 dark:text-light-300': link.depth === 2 && hasChildren,
          'bg-light7 dark:bg-dark9 !core-border': activeSection === link.id,
        }"
        role="listitem"
      >
        <NuxtLink
          class="w-fit text-inherit no-underline dark:text-inherit"
          :href="`#${link.id}`"
          :aria-current="activeSection === link.id ? 'true' : 'false'"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
