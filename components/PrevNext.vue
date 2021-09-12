
<template>
  <div class="flex justify-between gap-6 items-center flex-row-reverse">
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="font-medium px-4 py-2 dark:(hover:bg-dark-700 bg-dark-500) hover:(bg-gray-300) bg-light-900 rounded-md sm:px-6"
    >
      <!-- Convert to UI component card -->
      {{ $t('article.Next') }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="font-medium px-4 py-2 dark:(hover:bg-dark-700 bg-dark-500) hover:(bg-gray-300) bg-light-900 rounded-md sm:px-6"
    >
      {{ $t('article.Previous') }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
