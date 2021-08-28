
<template>
  <div class="flex justify-between gap-6 items-center">
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="font-semibold dark:(hover:bg-dark-700 bg-dark-500) px-4 py-2 sm:px-6 hover:(bg-gray-300) bg-light-900 rounded-md"
    >
      <!-- Convert to UI component card -->
      {{ $t('article.Next') }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="font-semibold dark:(hover:bg-dark-700 bg-dark-500) px-4 py-2 sm:px-6 hover:(bg-gray-300) bg-light-900 rounded-md"
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
