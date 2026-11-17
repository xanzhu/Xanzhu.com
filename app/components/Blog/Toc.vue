<script setup lang="ts">
interface TocLink {
  id: string;
  text: string;
  depth: number;
  children?: TocLink[];
}

const props = defineProps<{
  links: TocLink[];
}>();

const { t } = useI18n();
const tocHeadingId = useId();

const OBSERVER_MARGIN = "-100px 0px -80% 0px";
const DESKTOP_QUERY = "(min-width: 768px)";

const activeSection = ref<string | null>(null);

function flatten(links: TocLink[]): TocLink[] {
  return links.flatMap((link) => [link, ...flatten(link.children ?? [])]);
}

const flattenedLinks = computed(() => flatten(props.links).filter((link) => link.id));

let observer: IntersectionObserver | null = null;
const visibleIds = new Set<string>();

function stopObserving() {
  observer?.disconnect();
  observer = null;
  visibleIds.clear();
}

function startObserving() {
  stopObserving();

  const headings = flattenedLinks.value
    .map((link) => document.getElementById(link.id))
    .filter((el): el is HTMLElement => el !== null);

  if (headings.length === 0) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleIds.add(entry.target.id);
        else visibleIds.delete(entry.target.id);
      }

      // Topmost visible heading wins. If none are visible, keep the last one.
      const current = flattenedLinks.value.find((link) => visibleIds.has(link.id));
      if (current) activeSection.value = current.id;
    },
    { rootMargin: OBSERVER_MARGIN },
  );

  for (const heading of headings) observer.observe(heading);
}

let mediaQuery: MediaQueryList | null = null;

function syncToViewport() {
  if (mediaQuery?.matches) startObserving();
  else stopObserving();
}

function setInitialFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (id && flattenedLinks.value.some((link) => link.id === id)) {
    activeSection.value = id;
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia(DESKTOP_QUERY);
  mediaQuery.addEventListener("change", syncToViewport);
  setInitialFromHash();
  syncToViewport();
});

watch(flattenedLinks, syncToViewport, { flush: "post" });

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener("change", syncToViewport);
  stopObserving();
});
</script>
<template>
  <nav
    class="m-4 p4 core-border rounded-xs md:(mx-auto max-w-xl) lg:(max-w-md)"
    :aria-labelledby="tocHeadingId"
  >
    <header :id="tocHeadingId" class="mb-2 pb-2">
      <p class="text-lg tracking-wide font-semibold m-0 text-center">
        {{ t("common.article.toc") }}
      </p>
    </header>
    <ul class="text-sm leading-tight flex flex-col gap-1" role="list">
      <li v-for="link of flattenedLinks" :key="link.id" :class="link.depth === 3 ? 'ml-4' : ''">
        <NuxtLink
          :href="`#${link.id}`"
          :aria-current="activeSection === link.id ? 'location' : undefined"
          class="block px-2 py-0.5 border-l-2 rounded-xs underline underline-1 underline-offset-3 transition-colors duration-200"
          :class="
            activeSection === link.id
              ? 'border-current decoration-current text-black dark:text-white'
              : 'border-transparent decoration-transparent text-gray-600 dark:text-light-400 hover:decoration-current'
          "
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
