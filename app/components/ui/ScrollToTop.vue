<script setup lang="ts">
const isVisible = ref(false)

function checkScroll() {
  isVisible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed bottom-6 right-6 z-30 flex flex-col gap-2"
    >
      <!-- Scroll to Top -->
      <button
        @click="scrollToTop"
        class="flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-200 hover:scale-110 focus:(outline-none ring-2 ring-offset-2) core-ui core-border"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <Icon name="heroicons:chevron-up" class="h-4 w-4" />
      </button>
      
      <!-- Scroll to Bottom -->
      <button
        @click="scrollToBottom"
        class="flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-200 hover:scale-110 focus:(outline-none ring-2 ring-offset-2) core-ui core-border"
        aria-label="Scroll to bottom"
        title="Scroll to bottom"
      >
        <Icon name="heroicons:chevron-down" class="h-4 w-4" />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
