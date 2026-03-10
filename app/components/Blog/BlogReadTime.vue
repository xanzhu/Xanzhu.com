<script setup lang="ts">
const { content = {} } = defineProps<{
  content?: {
    body?: {
      type?: string
      value?: any[]
    }
  }
}>()

const { t } = useI18n()

const WORDS_PER_MINUTE = 238

function countWords(nodes: any): number {
  if (!nodes)
    return 0

  if (Array.isArray(nodes)) {
    let count = 0
    for (const node of nodes) {
      count += countWords(node)
    }
    return count
  }

  if (typeof nodes === 'string') {
    const text = nodes.trim()
    return text ? (text.match(/\S+/g) || []).length : 0
  }

  if (typeof nodes === 'object') {
    let count = 0
    if (nodes.value && typeof nodes.value === 'string') {
      const text = nodes.value.trim()
      count += text ? (text.match(/\S+/g) || []).length : 0
    }
    for (const key in nodes) {
      if (Array.isArray(nodes[key])) {
        count += countWords(nodes[key])
      }
    }
    return count
  }
  return 0
}

const readingTime = computed(() => {
  const totalWords = countWords(content.body?.value)
  return Math.max(1, Math.ceil(totalWords / WORDS_PER_MINUTE))
})
</script>

<template>
  <div class="flex items-center gap-1">
    <p class="m0">
      {{ t("ui.content.readTime", { count: readingTime }) }}
    </p>
  </div>
</template>
