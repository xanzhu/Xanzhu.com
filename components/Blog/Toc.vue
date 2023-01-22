<template>
  <nav
    class="m-4 p-4 dark:(bg-dark-900 text-white) bg-light-300 text-black border-outline"
  >
    <header class="pb-2 mb-2 border-b border-slate-200">
      <h2 class="text-xl font-bold">
        {{ t("Blog.toc") }}
      </h2>
    </header>
    <ul class="flex flex-col gap-2 px-2 text-sm">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        class="text-gray-700 dark:text-light-400"
        :class="{
          'ml-6 list-disc opacity-70': link.depth === 3,
          'font-bold tracking-wide  hover:underline-transparent':
            link.depth === 2,
        }"
      >
        <NuxtLink :href="`#${link.id}`" class="hover:underline">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
defineProps(["links"]);
const flattenLinks = (links: Array<any>) => {
  const _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        const flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};

const { t } = useI18n();
</script>
