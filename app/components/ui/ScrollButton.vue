<script setup lang="ts">
interface Props {
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 600,
})

const isVisible = ref(false)

function scrollToTop() {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

let lastScrollTop = 0
let ticking = false
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      isVisible.value = scrollTop < lastScrollTop && scrollTop > props.threshold
      lastScrollTop = scrollTop
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', onScroll, { passive: true })
    lastScrollTop = window.scrollY || document.documentElement.scrollTop
    isVisible.value = false
  }
})
onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
  }
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
    <button
      v-if="isVisible"
      class="fixed bottom-6 right-3 z-30 h-10 w-10 flex cursor-pointer items-center justify-center core-border rounded-full core-ui shadow-lg transition-all duration-200 md:right-6 hover:core-theme focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 dark:focus:ring-brand-light"
      :aria-label="$t('v2.ui.scrollTop')"
      @click="scrollToTop"
    >
      <Icon name="mdi:chevron-up" class="h-5 w-5" />
    </button>
  </Transition>
</template>
