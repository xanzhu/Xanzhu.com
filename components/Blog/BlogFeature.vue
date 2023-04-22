<template>
  <div
    class="flex flex-col dark:(text-white bg-black) space-y-5 mx-auto items-center"
  >
    <div
      v-if="features"
      v-for="feature in features"
      :key="feature.title"
      class="sm:(mx-5 p-0) lg:mx-20 p-4 justify-center"
    >
      <NuxtLink
        :to="feature._path"
        class="text-black dark:(text-white) no-underline group flex flex-col lg:flex-row lg:items-center mx-auto space-y-3 md:py-9 lg:(p-0 space-x-8)"
      >
        <div class="h-auto w-auto max-h-xl max-w-2xl">
          <NuxtImg
          crossorigin="anonymous"
          v-if="feature.img"
          :src="feature.img"
          :alt="feature.alt"
          :title="feature.alt"
          class="h-full w-full rounded-md object-cover md:group-hover:scale-102 md:(transform transition duration-500 ease-in-out)"
          height="1253"
          width="1880"
        />
        <NuxtImg
          crossorigin="anonymous"
          v-else
          :alt="feature.alt"
          src="https://source.unsplash.com/bHOKatJHjII/577x369"
          class="md:max-w-2xl"
          height="1253"
          width="1880"
        />
        </div>
        <div class="sm:(space-y-7) md:space-y-2 space-y-4 lg:max-w-xl">
          <div class="flex flex-row space-x-2">
            <Date
              v-if="feature.date"
              :date="feature.date"
              class="dark:(bg-dark-900 text-white border-dark-700 op100) op80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs"
            />
            <p
              v-if="feature.tag"
              class="dark:(bg-dark-900 text-white border-dark-700 op100) op80 bg-light-500 px-4 py-1.5 b-1 b-solid rounded-sm b-gray-300 text-xs m0"
            >
              {{ feature.tag }}
            </p>
          </div>
          <h2
            class="font-semibold decoration-2 text-xl sm:text-3xl sm:group-hover:(underline underline-offset-6)"
          >
            {{ feature.title }}
          </h2>
          <p v-if="feature.description" class="op80 m0">
            {{ feature.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const { data: features } = await useAsyncData("feature", async () => {
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .where({ feature: true })
    .limit(1)
    .find();
});
</script>
