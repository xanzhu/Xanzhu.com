<template>
<div class="flex flex-col space-y-10 pt-10 ma px-5 sm:px-20 max-w-4xl">
  <div class="flex items-center justify-center sm:justify-between mb-10">
    <div class="sm:text-center font-bold text-3xl sm:text-4xl break-words sm:max-w-md">
      Stay Safe Online with Our Essential Security Toolkit
    </div>
    <div
      class="hidden md:flex rounded-full h-20 w-20 text-white items-center justify-center b-12 b-rounded-full b-dashed"
      :class="{'b-[#001EFA]':phishing, 'b-[#FF0000]':malware, 'b-white':a11y}"
    />
  </div>
  <div class="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 font-medium children:(dark:text-white text-black cursor-pointer b-1 b-solid rounded-sm px6 py2 font-bold)">
    <button @click="toggle('phishing')" class="hover:b-[#001EFA]" :class="{'bg-[#001EFA] b-[#001EFA] text-white': phishing, 'bg-transparent':!phishing}">PHISHING</button>
    <button @click="toggle('a11y')" class="dark:hover:b-white hover:b-black" :class="{'dark:bg-white dark:!text-black dark:b-white b-black bg-black text-white': a11y, 'bg-transparent':!a11y}">ACCESSIBILITY</button>
    <button @click="toggle('malware')" class="hover:b-[#FF0000] " :class="{'bg-[#FF0000] b-[#FF0000] !text-black': malware, 'bg-transparent':!malware}">MALWARE</button>
  </div>
<div v-if="phishing && !malware && !a11y" class="grid sm:grid-cols-2 gap-4">
  <div class="sm:col-span-2 rounded-sm border-1 border-solid dark:border-[#001EFA] b-transparent h-30">
    <img src="https://source.unsplash.com/kBzQNk9AgOg" class="h-full w-full rounded-sm object-cover" />
  </div>
  <div class="p-4 font-bold bg-[#001EFA] rounded-sm text-center text-white text-2xl">PHISHING</div>
  <div class="dark:bg-dark-900 bg-light-600 b-1 b-solid rounded-sm border-[#001EFA] p-4 row-span-2 col-span-1">Links</div>
  <div class="dark:bg-dark-900 bg-light-600 b-1 b-solid rounded-sm border-[#001EFA] h-sm p-4 col-span-1">Explain</div>
</div>
<div v-else-if="malware && !phishing && !a11y" class="grid sm:grid-cols-2 gap-4">
  <div class="sm:col-span-2 rounded-sm border-1 border-solid dark:border-[#FF0000] b-transparent h-30">
    <img src="https://source.unsplash.com/qrfUCntPV8s" class="h-full w-full  rounded-sm object-cover" />
  </div>
  <div class="p-4 font-bold bg-[#FF0000] text-black rounded-sm text-center text-2xl">MALWARE</div>
  <div class="b-1 b-solid rounded-sm bg-light-400 dark:(b-[#FF0000] bg-dark-900) b-[#FF0000] p-4 row-span-2 col-span-1">Links</div>
  <div class="b-1 b-solid rounded-sm bg-light-400 dark:(b-[#FF0000] bg-dark-900) b-[#FF0000] h-sm p-4 col-span-1">Explain</div>
</div>
<div v-else-if="a11y && !phishing && !malware" class="grid sm:grid-cols-2 gap-4">
  <div class="sm:col-span-2 rounded-sm border-1 border-solid dark:border-white b-transparent h-30">
    <img src="https://source.unsplash.com/facU72FcKBI" class="h-full w-full  rounded-sm object-cover" />
  </div>
  <div class="p-4 font-bold dark:(bg-white text-black) bg-black text-white b-solid b-1 rounded-sm text-center text-2xl">ACCESSIBILITY</div>
  <div class="b-1 b-solid rounded-sm bg-light-400 dark:(b-white bg-dark-900) b-black p-4 row-span-2 col-span-1">Links</div>
  <div class="b-1 b-solid rounded-sm bg-light-400 dark:(b-white bg-dark-900) b-black h-sm p-4 col-span-1">Explain</div>
</div>
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