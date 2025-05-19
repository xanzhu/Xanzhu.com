<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  access: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
})
const { t } = useI18n()
const localePath = useLocalePath()

const cb = ref<boolean>(false)

// function closeBtn() {
//   cb.value = true
// }
</script>

<template>
  <div
    v-if="!cb"
    class="mx2 mb-5 max-w-md b-1 b-gray-300 rounded-md b-dashed p5 text-sm backdrop-blur-xl backdrop-filter dark:border-dark-300 dark:text-white"
  >
    <!-- <Icon class="h4 w4 cursor-pointer relative right-2 -top-2 hover:text-red-600" name="ic:baseline-close"
      @click="closeBtn" /> -->
    <h1 class="m0 text-xl font-semibold">
      {{ title || t('Alert.feature') }}
    </h1>
    <h2 class="font-normal">
      {{ desc || t('Alert.maintenance') }}
    </h2>
    <NuxtLink v-if="access" :to="localePath(link ?? '')" class="animate-bounce text-[#FF0] no-underline">
      {{ t('Alert.view') }}
    </NuxtLink>
    <p v-if="date" class="text-sm font-normal">
      Updated: {{ date }}
    </p>
  </div>
</template>
