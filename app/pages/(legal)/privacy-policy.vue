<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const date = '2025-01-27'

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
useLangMeta('PP', seoImage, 'prefix', t)
</script>

<template>
  <LayoutInternalPage :title="t('PP.title')" :description="t('PP.desc')" :date="date" :datelabel="t('PP.date')">
    <template #content>
      <p v-for="(paragraph, index) in paragraphs" :key="index" class="leading-relaxed">
        {{ paragraph }}
      </p>
    </template>
  </LayoutInternalPage>
</template>

<i18n lang="json">
{
  "en": {
    "PP": {
      "title": "Privacy Policy",
      "desc": "Read our privacy policy statement",
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
      "title": "개인정보 처리방침",
      "desc": "개인정보 처리방침을 확인하세요",
      "date": "마지막 업데이트",
      "section-one": "Xanzhu는 귀하의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 처리방침은 당사 웹사이트 방문 시 정보를 어떻게 수집, 사용 및 보호하는지 설명합니다.",
      "section-two": "당사는 귀하가 웹사이트를 방문할 때 브라우저가 전송하는 정보를 수집합니다. 여기에는 IP 주소, 브라우저 유형, 기기 종류 및 방문한 페이지 등이 포함될 수 있으며, 분석 및 서비스 개선에 활용됩니다.",
      "section-three": "당사 웹사이트는 기능 향상 및 사용 분석을 위해 쿠키를 사용합니다. 쿠키는 귀하의 기기에 저장되는 작은 텍스트 파일입니다. 브라우저 설정에서 쿠키를 비활성화할 수 있으나, 이 경우 일부 기능에 제한이 있을 수 있습니다.",
      "section-four": "법적 요구사항이 있거나 귀하가 요청한 서비스를 제공하는 경우를 제외하고, 당사는 귀하의 개인정보를 제3자와 공유하지 않습니다. 다만, 분석 목적을 위해 익명화된 데이터를 공유할 수 있습니다.",
      "section-five": "귀하는 본인의 개인정보에 대해 열람, 정정 또는 삭제를 요청할 권리가 있습니다. 이러한 권리를 행사하고자 하실 경우 문의해 주시기 바랍니다.",
      "section-six": "당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경사항은 본 페이지에 게시되며 '마지막 업데이트' 날짜가 수정됩니다."
    }
  },
  "zh": {
    "PP": {
      "title": "隐私政策",
      "desc": "查看我们的隐私政策声明",
      "date": "最后更新",
      "section-one": "在 Xanzhu，我们致力于保护您的隐私。本隐私政策说明了您访问我们网站时，我们如何收集、使用并保护您的信息。",
      "section-two": "我们会收集您访问网站时浏览器发送的信息。这可能包括您的 IP 地址、浏览器类型、设备类型和访问的页面等。此数据用于分析并优化用户体验。",
      "section-three": "我们的网站使用 Cookie 来增强功能并分析使用情况。Cookie 是存储在您设备上的小型文本文件。您可以通过浏览器设置禁用 Cookie，但这可能会影响网站的部分功能。",
      "section-four": "除非法律要求或为了向您提供所需服务，否则我们不会与第三方共享您的个人信息。我们可能会共享匿名化数据用于分析目的。",
      "section-five": "您有权访问、更正或删除您的个人数据。如需行使这些权利，请联系我们。",
      "section-six": "我们可能会不时更新本隐私政策。所有更改将公布在本页面，并相应更新“最后更新”日期。"
    }
  }
}
</i18n>
