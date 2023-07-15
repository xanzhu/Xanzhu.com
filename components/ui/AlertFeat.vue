<template>
  <div v-if="!cb"
    class="max-w-md dark:text-white rounded-md mx2 p5 text-sm backdrop-blur-xl backdrop-filter b-1 dark:border-dark-300 b-gray-300 b-dashed">
    <!-- <Icon class="h4 w4 cursor-pointer relative right-2 -top-2 hover:text-red-600" name="ic:baseline-close"
      @click="closeBtn" /> -->
    <p class="text-xl m0 font-semibold">{{ title || t('Alert.feature') }}</p>
    <p>{{ desc || t('Alert.maintenance') }}</p>
    <NuxtLink v-if="access" :to="localePath(link ?? '')" class="no-underline animate-bounce text-[#FF0]">
      {{ t('Alert.view') }}</NuxtLink>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n();

defineProps({
  link: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false
  },
  access: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
    required: false
  }
});

const cb = ref<boolean>(false);

function closeBtn() {
  cb.value = true
}
</script>