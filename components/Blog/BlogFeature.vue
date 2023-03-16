<template>
  <div
    class="flex flex-col dark:(text-white bg-black) space-y-5 mx-auto items-center"
  >
    <div
      v-if="wideFeature"
      v-for="wide in wideFeature"
      :key="wide.title"
      class="sm:(mx-5 p-0) lg:mx-20 p-4 justify-center"
    >
      <NuxtLink
        :to="wide._path"
        class="text-black dark:(text-white) group transform transition duration-500 ease-in-out hover:scale-102 flex flex-col lg:flex-row lg:items-center mx-auto space-y-3 md:py-9 lg:(p-0 space-x-4)"
      >
        <NuxtImg
          crossorigin="anonymous"
          v-if="wide.img"
          :src="wide.img"
          :alt="wide.alt"
          :title="wide.alt"
          class="lg:max-w-lg xl:max-w-2xl"
          height="1253"
          width="1880"
        />
        <NuxtImg
          crossorigin="anonymous"
          v-else
          :alt="wide.alt"
          src="https://source.unsplash.com/bHOKatJHjII/577x369"
          class="md:max-w-2xl"
          height="1253"
          width="1880"
        />
        <div class="sm:(space-y-7) md:space-y-2 space-y-4 lg:max-w-xl">
          <div class="flex flex-row space-x-2">
            <Date
              v-if="wide.date"
              :date="wide.date"
              class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 px-4 py-1.5 border-1 rounded-sm border-gray-300 text-xs"
            />
            <p
              v-if="wide.tag"
              class="dark:(bg-dark-900 text-white border-dark-700 opacity-100) opacity-80 bg-light-500 px-4 py-1.5 border-1 rounded-sm border-gray-300 text-xs"
            >
              {{ wide.tag }}
            </p>
          </div>
          <h2
            class="font-semibold decoration-2 text-xl sm:text-3xl sm:group-hover:(underline decoration-[#FF0000] underline-offset-6)"
          >
            {{ wide.title }}
          </h2>
          <p v-if="wide.description" class="font-thin opacity-80">
            {{ wide.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const { data: wideFeature } = await useAsyncData("wide", async () => {
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .where({ wide: true })
    .limit(1)
    .find();
});
</script>
