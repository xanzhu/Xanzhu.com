<script setup lang="ts">
const props = defineProps<{
  content: object
}>()

const { t } = useI18n()

const wordsPerMinute = 230

const contentString = JSON.stringify(props.content)
  .replace(/<[^>]+(>|$)/g, '')
  .replace(/\s+/g, ' ')
  .trim()

const words = contentString.split(' ').filter(Boolean).length
const readingTime = Math.ceil(words / wordsPerMinute)
</script>

<template>
  <div class="flex items-center gap-1">
    <p class="m0">
      {{ t("ui.content.readTime", { count: readingTime }) }}
    </p>
  </div>
</template>
