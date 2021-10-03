
<template>
  <div class="flex justify-between align-center">
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="btn-prev-next"
    >
      <p v-t="'article.Next'" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="btn-prev-next"
    >
      <p v-t="'article.Previous'" />
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
