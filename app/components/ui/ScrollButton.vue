<script setup lang="ts">
const { threshold = 600 } = defineProps<{
  threshold?: number
}>()

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
      isVisible.value = scrollTop < lastScrollTop && scrollTop > threshold
      lastScrollTop = scrollTop
      ticking = false
    })
    ticking = true
  }
}

const { t } = useI18n()

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
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      class="core-ui core-border rounded-full flex h-10 w-10 cursor-pointer shadow-lg transition-transform duration-200 items-center bottom-6 right-3 justify-center fixed z-30 hover:core-theme focus:outline-hidden focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 md:right-6 dark:focus:ring-brand-light"
      :aria-label="t('ui.scrollTop')"
      @click="scrollToTop"
    >
      <Icon name="lucide:chevron-up" class="h-5 w-5" />
    </button>
  </Transition>
</template>
