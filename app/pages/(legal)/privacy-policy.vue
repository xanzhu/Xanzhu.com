<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const date = '27/01/2025'

const paragraphs: { [key: number]: string } = {
  1: t('PP.section-one'),
  2: t('PP.section-two'),
  3: t('PP.section-three'),
  4: t('PP.section-four'),
  5: t('PP.section-five'),
  6: t('PP.section-six'),
}

// SEO Metadata
const seoImage = 'https://images.pexels.com/photos/27286458/pexels-photo-27286458.jpeg'
useLangMeta('PP', seoImage)
</script>

<template>
  <div class="my-10 max-w-4xl min-h-screen sm:mx-auto space-y-10">
    <div class="mx-4 flex flex-col sm:(flex-row items-center justify-between space-y-0) space-y-4">
      <div class="flex flex-col">
        <h1 class="m0 text-2xl font-semibold sm:text-3xl">
          {{ t('PP.title') }}
        </h1>
        <p class="m0 font-300 op80 dark:text-light-500">
          {{ t('PP.description') }}
        </p>
      </div>
      <p class="m0">
        {{ t("PP.date") }}:
        <span class="font-300 font-mono">{{ date }}</span>
      </p>
    </div>
    <div
      class="text-md rounded-lg from-light-100 to-neutral-200 bg-gradient-to-b p-6 font-300 shadow-sm sm:(mx-3 p-10) space-y-6 core-border dark:from-dark-800 dark:to-dark-900"
    >
      <p v-for="(paragraph, index) in paragraphs" :key="index" class="leading-relaxed">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<i18n lang="json">
{
    "en": {
        "PP": {
            "title": "Privacy Policy",
            "description": "Read our privacy policy statement",
            "date": "Last Updated",
            "section-one": "At Xanzhu, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.",
            "section-two": "We collect information that your browser sends when you visit our site. This may include your IP address, browser type, device type, and pages visited. This data is used for analytics and to improve your experience.",
            "section-three": "Our website uses cookies to enhance functionality and analyze usage. Cookies are small text files stored on your device. You can disable cookies in your browser settings, but this may affect site functionality.",
            "section-four": "We do not share your personal information with third parties except as required by law or to provide services you have requested. We may share anonymized data for analytics purposes.",
            "section-five": "You have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us.",
            "section-six": "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the 'Last Updated' date will be revised accordingly."
        }
    },
    "ko": {
        "PP": {
            "title": "개인 정보 정책",
            "description": "개인 정보 보호 정책 설명을 검토하세요",
            "date": "수정됨",
            "section-one": "Xanzhu에서는 귀하의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 당사 웹사이트를 방문할 때 귀하의 정보를 어떻게 수집, 사용 및 보호하는지 설명합니다.",
            "section-two": "당사는 귀하가 당사 사이트를 방문할 때 브라우저가 전송하는 정보를 수집합니다. 여기에는 IP 주소, 브라우저 유형, 장치 유형 및 방문한 페이지가 포함될 수 있습니다. 이 데이터는 분석 및 사용자 경험 개선을 위해 사용됩니다.",
            "section-three": "당사 웹사이트는 기능 향상 및 사용 분석을 위해 쿠키를 사용합니다. 쿠키는 귀하의 장치에 저장된 작은 텍스트 파일입니다. 브라우저 설정에서 쿠키를 비활성화할 수 있지만 이 경우 사이트 기능이 영향을 받을 수 있습니다.",
            "section-four": "당사는 법률에 의해 요구되거나 귀하가 요청한 서비스를 제공하기 위해 필요한 경우를 제외하고 귀하의 개인정보를 제3자와 공유하지 않습니다. 분석 목적으로 익명화된 데이터를 공유할 수 있습니다.",
            "section-five": "귀하는 개인 데이터에 접근, 수정 또는 삭제할 권리가 있습니다. 이러한 권리를 행사하려면 문의하십시오.",
            "section-six": "당사는 이 개인정보 보호정책을 수시로 업데이트할 수 있습니다. 변경 사항은 이 페이지에 게시되며 '마지막 업데이트' 날짜가 그에 따라 수정됩니다."
        }
    },
    "zh": {
        "PP": {
            "title": "隐私政策",
            "description": "查看我们的隐私政策声明",
            "date": "修改日期",
            "section-one": "在Xanzhu，我们致力于保护您的隐私。本隐私政策解释了当您访问我们的网站时，我们如何收集、使用和保护您的信息。",
            "section-two": "我们收集您访问我们网站时浏览器发送的信息。这可能包括您的IP地址、浏览器类型、设备类型和访问的页面。此数据用于分析和改善您的体验。",
            "section-three": "我们的网站使用Cookie来增强功能并分析使用情况。Cookie是存储在您设备上的小型文本文件。您可以在浏览器设置中禁用Cookie，但这可能会影响网站功能。",
            "section-four": "除非法律要求或为您提供所需服务，否则我们不会与第三方共享您的个人信息。我们可能会共享匿名数据以用于分析目的。",
            "section-five": "您有权访问、更正或删除您的个人数据。如果您希望行使这些权利，请联系我们。",
            "section-six": "我们可能会不时更新本隐私政策。任何更改都将发布在此页面上，并相应地修订“最后更新”日期。"
        }
    }
}
</i18n>
