<script setup lang="ts">
const isVisible = ref(false)
const isAtBottom = ref(false)

function checkScrollPosition() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  isVisible.value = scrollTop > 300
  isAtBottom.value = scrollTop + windowHeight >= documentHeight - 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToBottom() {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
  checkScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="isVisible"
      class="fixed bottom-6 right-6 z-30 flex flex-col gap-2"
    >
      <button
        v-if="!isAtBottom"
        @click="scrollToBottom"
        class="flex h-10 w-10 items-center justify-center rounded-full core-border core-ui shadow-lg transition-all duration-200 hover:core-theme focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 dark:focus:ring-brand-light"
        :aria-label="$t('ui.scroll.bottom')"
      >
        <Icon name="mdi:chevron-down" class="h-5 w-5" />
      </button>
      
      <button
        @click="scrollToTop"
        class="flex h-10 w-10 items-center justify-center rounded-full core-border core-ui shadow-lg transition-all duration-200 hover:core-theme focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 dark:focus:ring-brand-light"
        :aria-label="$t('ui.scroll.top')"
      >
        <Icon name="mdi:chevron-up" class="h-5 w-5" />
      </button>
    </div>
  </Transition>
</template>