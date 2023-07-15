<template>
  <div class="flex justify-center">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:(grid-cols-3 items-center) gap-10 sm:gap-20 p-4 sm:mx-10 grid-auto-rows-max">
      <NuxtLink :to="localePath('/resources')" class="group no-underline mx-auto">
        <NuxtImg src="/images/Option2.png" class="sm:h-[367px] sm:w-[327px] w-[290px] rounded-sm" height="367" width="327"
          :alt="t('PagesCard.image.iceland')" loading="lazy" />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2 dark:text-white text-black">
          <h2 class="text-3xl font-bold m0">
            {{ t("Links.resources") }}
          </h2>
          <p class="op75 m0">{{ t("PagesCard.resources") }}</p>
          <div class="text-brand-light">
            <Icon
              class="sm:group-hover:(bg-brand-light text-white w-full ease-in-out duration-300) p-1 b-rounded-sm sm:(ease-out duration-500) h8 w8"
              name="uil:arrow-right" :aria-label="t('a11y.ResourcePage')" />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="localePath('/blog')" class="group no-underline mx-auto">
        <NuxtImg src="/images/Option3.png" class="rounded-sm h-[367px] sm:h-[599px] sm:w-[327px] w-[290px]" height="599"
          width="327" :alt="t('PagesCard.image.sky')" loading="lazy" />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2 dark:text-white text-black">
          <h2 class="text-3xl font-bold m0">{{ t("Links.blog") }}</h2>
          <p class="op75 m0">{{ t("PagesCard.blog") }}</p>
          <div class="text-brand-light">
            <Icon
              class="sm:group-hover:(bg-brand-light text-white w-full ease-in-out duration-300) p-1 b-rounded-sm sm:(ease-out duration-500) h8 w8"
              :aria-label="t('a11y.BlogPage')" name="uil:arrow-right" />
          </div>
        </div>
      </NuxtLink>
      <NuxtLink :to="localePath('/analysis')" class="group no-underline mx-auto">
        <NuxtImg src="/images/Option1.png" class="sm:h-[367px] sm:w-[327px] rounded-sm w-[290px]"
          :alt="t('PagesCard.image.street')" height="367" width="327" loading="lazy" />
        <div class="flex flex-col justify-center m-2 sm:m-4 space-y-2 dark:text-white text-black">
          <h2 class="text-3xl font-bold m0">
            {{ t("Links.analysis") }}
          </h2>
          <p class="op75 m0">{{ t("PagesCard.analysis") }}</p>
          <div class="text-brand-light">
            <Icon
              class="sm:group-hover:(bg-brand-light text-white w-full ease-in-out duration-300) b-rounded-sm sm:(ease-out duration-500) w8 h8"
              name="uil:arrow-right" :aria-label="t('a11y.AnalysisPage')" />
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
