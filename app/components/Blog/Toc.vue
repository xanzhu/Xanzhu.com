<template>
  <nav class="m-4 p-4 rounded-md dark:bg-dark9 bg-light2 core-border md:(max-w-md mx-auto sticky top-4)"
    :aria-label="t('Blog.toc')" aria-labelledby="toc-heading" role="navigation">
    <header class="pb-2 mb-2" id="toc-heading">
      <p class="text-lg font-semibold m-0 text-center">
        {{ t("Blog.toc") }}
      </p>
    </header>
    <ul class="flex flex-col gap-2 px-6 text-sm" role="list">
      <li v-for="link of flattenLinks(links)" :key="link.id"
        class="text-gray-800 dark:text-light-400 transition-colors duration-200" :class="{
          'list-disc hover:(underline underline-offset-3 underline-brand-dark underline-2)': !hasChildren && link.depth === 2,
          'ml-4 opacity-80 hover:(underline underline-offset-3 underline-brand-dark underline-2)': link.depth === 3,
          'font-semibold list-none -ml-4 mr-auto py-1 px-3 rounded-md bg-light7 dark:bg-dark7 core-border text-gray-600 dark:text-light-300': link.depth === 2 && hasChildren,
          '!text-brand-light !dark:text-brand-dark font-medium rounded-md': activeSection === link.id,
        }" role="listitem">
        <NuxtLink
          class="no-underline text-inherit dark:text-inherit focus:outline-none focus:ring focus:ring-brand-dark focus:ring-opacity-50 dark:focus:ring-brand-light dark:focus:ring-opacity-50"
          :href="`#${link.id}`" :aria-current="activeSection === link.id ? 'true' : 'false'">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface TocLink {
  id: string;
  text: string;
  depth: number;
  children?: TocLink[];
}

const props = defineProps<{
  links: TocLink[];
}>();

const isDesktop = ref(false);
let observer: IntersectionObserver | null = null;
const activeSection = ref<string | null>(null);

const flattenLinks = (links: TocLink[]): TocLink[] => {
  return links.flatMap((link) => {
    const _link = [link];
    if (link.children) {
      _link.push(...flattenLinks(link.children));
    }
    return _link;
  });
};

const hasChildren = computed<boolean>(() => {
  return flattenLinks(props.links).some((link) => link.depth === 3);
});

const setupIntersectionObserver = () => {
  if (!isDesktop.value) {
    return;
  }

  const sections = flattenLinks(props.links)
    .filter((link) => link.id)
    .map((link) => document.getElementById(link.id))
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length === 0) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0.03,
    }
  );

  sections.forEach((section) => {
    observer?.observe(section);
  });
};

const checkScreenWidth = () => {
  isDesktop.value = window.innerWidth >= 768;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
  setupIntersectionObserver();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth);
  if (observer) {
    observer.disconnect();
  }
});
</script>