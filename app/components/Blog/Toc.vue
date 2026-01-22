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

const flattenedLinks = computed(() => {
  const result: TocLink[] = []

  function flatten(links: TocLink[]) {
    for (const link of links) {
      result.push(link)
      if (link.children) {
        flatten(link.children)
      }
    }
  }

  flatten(props.links)
  return result
})

const hasChildren = computed(() =>
  flattenedLinks.value.some(link => link.depth === 3),
)

function setupIntersectionObserver() {
  if (!isDesktop.value)
    return

  const sections = flattenedLinks.value
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
      rootMargin: '-100px 0px -80% 0px',
      threshold: 0.03,
    },
  )

  sections.forEach(section => observer?.observe(section))
}

let resizeTimeout: ReturnType<typeof setTimeout> | null = null

function checkScreenWidth() {
  const wasDesktop = isDesktop.value
  isDesktop.value = window.innerWidth >= 768

  if (!wasDesktop && isDesktop.value) {
    setupIntersectionObserver()
  }

  else if (wasDesktop && !isDesktop.value && observer) {
    observer.disconnect()
    observer = null
  }
}

function handleResize() {
  if (resizeTimeout)
    clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(checkScreenWidth, 150)
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (resizeTimeout)
    clearTimeout(resizeTimeout)
  if (observer)
    observer.disconnect()
})
</script>

<template>
  <nav
    class="m-4 core-border rounded-sm p4 md:(mx-auto max-w-xl) lg:(max-w-md)"
    :aria-label="t('blog.toc')"
    aria-labelledby="toc-heading"
    role="navigation"
  >
    <header id="toc-heading" class="mb-2 pb-2">
      <p class="m-0 text-center text-lg font-semibold tracking-wide">
        {{ t("blog.toc") }}
      </p>
    </header>
    <ul class="flex flex-col gap-2 px-4 text-sm leading-tight" role="list">
      <li
        v-for="link of flattenedLinks"
        :key="link.id"
        class="w-fit border border-transparent rounded-sm transition-all duration-300 dark:text-light-400 hover:(underline underline-1 underline-offset-3)"
        :class="{
          'list-disc': !hasChildren && link.depth === 2,
          'ml-3 opacity-80': link.depth === 3,
          'list-none -ml-4 py-0.5 px-2 text-gray-800 dark:text-light-300': link.depth === 2 && hasChildren,
          'transform p0.5 underline underline-offset-3 underline-1 font-semibold': activeSection === link.id,
        }"
      >
        <NuxtLink
          class="text-inherit no-underline"
          :href="`#${link.id}`"
          :aria-current="activeSection === link.id ? 'true' : 'false'"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
