<script setup lang="ts">

const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="p-4 dark:text-light-200 text-black sm:(justify-center items-center flex p-0 space-x-8)"
    role="main">
    <!-- TO:DO Update this image -->
    <NuxtImg crossorigin="anonymous" src="v1632626904/night_dlu0rp.jpg" width="250" height="400"
      sizes="md:50vw lg:100vw" class="hidden sm:flex" alt="Highway at night" format="webp" loading="eager"
      title="Highway" provider="cloudinary" fit="fill" :modifiers="{ roundCorner: '5' }" />
    <div class="text-4xl font-medium space-y-4">
      <h1>{{ t('maintenance.title') }}</h1>
      <div class="text-base font-extralight">
        <p>{{ t('maintenance.description_1') }}</p>
        <p>{{ t('maintenance.description_2') }}</p>
      </div>
    </div>
  </div>
</template>

<!-- TO:DO Rename all these values -->
<i18n lang="json">
{
  "en": {
    "maintenance": {
      "title": "Website Maintenance",
      "description_1": "This page continues to be updated as the design improves.",
      "description_2": "We expect to release our website by the end of the year."
    }
  },
  "ko": {
    "maintenance": {
      "title": "웹사이트 유지보수",
      "description_1": "이 페이지는 디자인이 개선됨에 따라 계속 업데이트됩니다",
      "description_2": "연말까지 웹 사이트를 공개 할 계획입니다"
    }
  },
  "zh": {
    "maintenance": {
      "title": "网站维护",
      "description_1": "随着设计的改进，此页面将继续更新",
      "description_2": "我们预计在今年年底发布您的网站"
    }
  },
  "mi": {
    "maintenance": {
      "title": "Tiakitanga Paetukutuku",
      "description_1": "Ka whakahou tonu tenei whaarangi ka pai ake te hoahoa.",
      "description_2": "Ko te tumanako ka tukuna ta maatau paetukutuku i te mutunga o te tau."
    }
  }
}
</i18n>
