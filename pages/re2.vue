<template>
<div class="flex flex-col space-y-10 pt-10 ma px-5 sm:px-20 max-w-4xl">
  <div class="flex items-center justify-center sm:justify-between mb-10">
    <div
      class="sm:text-center font-bold text-3xl sm:text-4xl break-words sm:max-w-md"
    >
    {{ $t("Resources.heading") }}
    </div>
    <div
      class="hidden md:flex rounded-full h-20 w-20 text-white items-center justify-center b-12 b-rounded-full b-dashed"
      :class="{'b-[#001EFA]':phishing, 'b-[#FF0000]':malware, 'b-white':a11y}"
    />
  </div>
  <div
    class="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 font-medium children:(dark:text-white text-black cursor-pointer b-1 b-solid rounded-sm px6 py2 font-bold)"
  >
    <button
      @click="toggle('phishing')"
      class="hover:b-[#001EFA]"
      :class="{'bg-[#001EFA] b-[#001EFA] text-white': phishing, 'bg-transparent':!phishing}"
    >
    {{ $t("Resources.phishing") }}
    </button>
    <button
      @click="toggle('a11y')"
      class="dark:hover:b-white hover:b-black"
      :class="{'dark:bg-white dark:!text-black dark:b-white b-black bg-black text-white': a11y, 'bg-transparent':!a11y}"
    >
    {{ $t("Resources.accessibility") }}
    </button>
    <button
      @click="toggle('malware')"
      class="hover:b-[#FF0000]"
      :class="{'bg-[#FF0000] b-[#FF0000] !text-black': malware, 'bg-transparent':!malware}"
    >
    {{ $t("Resources.malware") }}
    </button>
  </div>
  <ResourcesPhishing v-if="phishing && !malware && !a11y" />
  <LazyResourcesMalware v-else-if="malware && !phishing && !a11y" />
  <LazyResourcesAccessibility v-else-if="a11y && !phishing && !malware" />
</div>

</template>
<script setup lang="ts">
// Default option
const phishing = ref(true);

const malware = ref(false);
const a11y = ref(false);

function toggle(option: 'phishing' | 'malware' | 'a11y') {
  phishing.value = option === 'phishing';
  malware.value = option === 'malware';
  a11y.value = option === 'a11y';
}
</script>