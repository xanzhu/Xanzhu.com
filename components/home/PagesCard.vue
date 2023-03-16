<template>
  <div class="flex justify-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:(grid-cols-3 items-center) gap-10 sm:gap-20 p-4 sm:mx-10 grid-auto-rows-max"
    >
      <NuxtLink :to="localePath('/resources')" class="group">
        <NuxtImg
          src="/images/Option2.png"
          class="sm:h-[367px] w-[327px] rounded-sm"
          height="367"
          width="327"
          :alt="t('PagesCard.image.iceland')"
          loading="lazy"
        />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2">
          <h2 class="dark:text-white text-3xl font-bold">
            {{ t("Links.resources") }}
          </h2>
          <p class="opacity-75">{{ t("PagesCard.resources") }}</p>
          <div class="text-[#ff0000]">
            <HomeArrowIcon
              class="sm:group-hover:(bg-[#ff0000] text-white w-full p-1 ease-in-out duration-300) sm:(ease-out duration-500)"
              :aria-label="t('a11y.ResourcePage')"
            />
          </div>
        </div>
      </NuxtLink>

      <NuxtLink :to="localePath('/blog')" class="group">
        <NuxtImg
          src="/images/Option3.png"
          class="rounded-sm h-[599px] w-[327px]"
          height="599"
          width="327"
          :alt="t('PagesCard.image.sky')"
          loading="lazy"
        />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2">
          <h2 class="dark:text-white text-3xl font-bold">{{ t("Links.blog") }}</h2>
          <p class="opacity-75">{{ t("PagesCard.blog") }}</p>
          <div class="text-[#ff0000]">
            <HomeArrowIcon
              class="sm:group-hover:(bg-[#ff0000] text-white w-full p-1 ease-in-out duration-300) sm:(ease-out duration-500)"
              :aria-label="t('a11y.BlogPage')"
            />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="localePath('/analysis')" class="group">
        <NuxtImg
          src="/images/Option1.png"
          class="sm:h-[367px] w-[327px] rounded-sm"
          :alt="t('PagesCard.image.street')"
          height="367"
          width="327"
          loading="lazy"
        />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2">
          <h2 class="dark:text-white text-3xl font-bold">
            {{ t("Links.analysis") }}
          </h2>
          <p class="opacity-75">{{ t("PagesCard.analysis") }}</p>
          <div class="text-[#ff0000]">
            <HomeArrowIcon
              class="sm:group-hover:(bg-[#ff0000] text-white w-full p-1 ease-in-out duration-300) sm:(ease-out duration-500)"
              :aria-label="t('a11y.AnalysisPage')"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
