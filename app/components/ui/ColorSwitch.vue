<script lang="ts" setup>
const colorMode = useColorMode()

const colorIcon = computed(() => {
  return colorMode.value === 'dark' ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition' : 'line-md:moon-filled-alt-loop'
})

function switchColor() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="mr-0 inline-block w-8 flex cursor-pointer items-center justify-center border-none bg-transparent"
    :aria-label="$t('v2.app.sr.colorSwitch')"
    @click="switchColor"
  >
    <ClientOnly>
      <Icon :name="colorIcon" class="h-full w-full text-black transition-all duration-500 dark:text-white" />
      <template #fallback>
        <div class="h-full w-full" />
      </template>
    </ClientOnly>
  </button>
</template>
