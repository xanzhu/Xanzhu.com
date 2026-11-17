<script setup lang="ts">
const { threshold = 600 } = defineProps<{
  threshold?: number;
}>();

const { t } = useI18n();
const isVisible = ref(false);
let lastScrollTop = 0;
let ticking = false;

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const top = window.scrollY;
    const delta = top - lastScrollTop;
    if (Math.abs(delta) > 8) {
      isVisible.value = delta < 0 && top > threshold;
      lastScrollTop = top;
    }
    if (top <= threshold) isVisible.value = false;
    ticking = false;
  });
}

onMounted(() => {
  lastScrollTop = window.scrollY;
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
    leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      class="core-ui core-border rounded-full flex h-10 w-10 cursor-pointer shadow-lg transition-transform duration-200 items-center bottom-6 right-3 justify-center fixed z-30 hover:core-theme focus:outline-hidden focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 md:right-6 dark:focus:ring-brand-light"
      :aria-label="t('common.scroll')"
      @click="scrollToTop"
    >
      <Icon name="lucide:chevron-up" class="h-5 w-5" />
    </button>
  </Transition>
</template>
