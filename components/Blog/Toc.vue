<template>
  <nav class="m-4 p-4 rounded-md dark:(bg-dark-900 b-dark-600) b-gray-300 b-1 b-solid md:(max-w-md mx-auto)">
    <header class="pb-2 mb-2 border-b b-slate-200 dark:b-dark-300">
      <p class="text-lg font-semibold m0 text-center">
        {{ t("Blog.toc") }}
      </p>
    </header>
    <ul class="flex flex-col gap-2 px-6 text-sm">
      <li v-for="link of flattenLinks(links)" :key="link.id" class="text-gray-500 dark:text-light-400" :class="{
        'ml-4 list-disc opacity-80 hover:(underline underline-offset-3 decoration-2)':
          link.depth === 3,
        'font-semibold tracking-wide  hover:underline-transparent':
          link.depth === 2,
      }">
        <NuxtLink class="no-underline dark:text-white text-black" :href="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const { t } = useI18n();

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
</script>
