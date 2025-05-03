<script setup lang="ts">
const props = defineProps<{
  content: object
}>()

const { t } = useI18n()

const wordsPerMinute = 230

const contentString = JSON.stringify(props.content)
  .replace(/[^a-z0-9\s]/gi, '')
  .replace(/\s+/g, ' ')
  .trim()

const words = contentString.split(' ').filter(Boolean).length
const readingTime = ref(Math.ceil(words / wordsPerMinute))
</script>

<template>
  <div class="flex space-x-1">
    <p class="m0">
      {{ readingTime }}
    </p>
    <span>{{ t("Blog.read-time") }}</span>
  </div>
</template>
