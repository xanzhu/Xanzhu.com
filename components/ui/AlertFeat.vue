<template>
   <!-- TODO: Add translation support and for default options -->
    <div v-if="!cb" class="max-w-md dark:text-white rounded-md sm:left-4 mx2 top-20 fixed p5 text-sm backdrop-blur-xl backdrop-filter b-1 border-dark-300 border-solid absolute">
      <Icon class="h4 w4 cursor-pointer relative right-2 -top-2 hover:text-red-600" name="ic:baseline-close" @click="closeBtn"/>
      <p class="text-xl m0 font-semibold">{{ title || "Feature preview" }}</p>
        <p>{{ desc || $t('alert.maintenance') }}</p>
        <NuxtLink v-if="ready" :to="link" class="no-underline animate-bounce text-[#FF0]">View latest version</NuxtLink>
    </div>
</template>
<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false
  },
  ready: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
    required: false
  }
});

const cb = ref(false);

function closeBtn() {
  cb.value = true
}
</script>