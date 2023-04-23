<template>
  <div>
    <div class="grid sm:grid-cols-2 gap-4">
      <div
        class="sm:col-span-2 rounded-sm border-1 border-solid dark:border-white b-transparent h-30"
      >
        <NuxtImg
          src="https://source.unsplash.com/VqMraGI0BCo"
          class="h-full w-full rounded-sm object-cover"
          alt="Neon White Light Graphic"
        />
      </div>
      <div
        class="p-4 font-bold dark:(bg-white text-black) bg-black text-white b-solid b-1 rounded-sm text-center text-2xl"
      >
        {{ $t("Resources.accessibility") }}
      </div>
      <div
        class="b-1 b-solid rounded-sm bg-light-400 dark:(b-white bg-dark-900) b-black p-4 row-span-2 col-span-1"
      >
        <ol class="m0 p2" v-for="url in urls" :key="url.name">
          <li
            class="flex justify-center items-center space-x-1 opacity-80 sm:text-md text-sm group hover:(underline decoration-1 underline-offset-2)"
          >
            <NuxtLink
              :href="url.path"
              :target="isExternalLink(url.path)"
              rel="noopener"
              class="no-underline text-md dark:text-white text-black op95"
              >{{ url.name }}</NuxtLink
            >
            <Icon
              v-if="isExternalLink(url.path) === '_blank'"
              name="ri:external-link-line"
              class="h-4 w-4"
            />
          </li>
        </ol>
      </div>
      <div
        class="b-1 b-solid rounded-sm bg-light-400 dark:(b-white bg-dark-900) b-black h-sm p-4 col-span-1"
      >
        Explain
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isExternalLink = (url: string): "_blank" | "_self" => {
  if (url.startsWith("https")) {
    return "_blank";
  }
  return "_self";
}

const urls = [{ name: "WebAim", path: "https://webaim.org/" }]
</script>
