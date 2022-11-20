<script setup>
definePageMeta({
  title: 'links.privacy_policy',
  description: 'page.privacy-policy.description'
})

useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="dark:text-light-200 mt-5 text-black flex-grow px-4 lg:max-w-4xl container mx-auto" role="main">
    <h1 v-t="'page.pp_title'" class="text-5xl font-bold" />
    <p v-t="'page.pp_date'" class="pb-4" />
    <p v-t="'page.pp_p1'" class="py-2" />
    <p v-t="'page.pp_p2'" />
    <p v-t="'page.pp_p3'" />
    <p v-t="'page.pp_link'" class="pt-5 pb-2 font-semibold text-xl" />
    <div class="flex-col flex">
      <NuxtLink class="nav-link mr-auto" to="https://xanzhu.com" rel="noopener" target="_blank">
        https://xanzhu.com
        <Icon-External class="h-3 inline-flex" />
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="json">
{
  // Rename all these values
  "en": {
    "page": {
      "pp_title": "Privacy Policy",
      "pp_date": "Last updated: August 1, 2022",
      "pp_p1": "We value privacy and respect those who visit our website. No identifiable information is stored or accessed without your permission to ensure that we do not infringe upon your privacy.",
      "pp_p2": "Because our site contains links to third-party websites, we cannot prevent tracking outside of our domain.",
      "pp_p3": "Apart from usage data which your browser provides (User-Agent) nothing is collected",
      "pp_link": "Offical Websites are listed below",
      "privacy-policy": {
        "description": "See our Privacy Policy and how it could relate to you"
      }
    }
  },
  "ko": {
    "page": {
      "pp_title": "개인 정보 정책",
      "pp_date": "최종 업데이트: 2022년 8월 1일",
      "pp_p1": "우리는 개인 정보를 소중히 여기며 웹 사이트를 방문하는 사람들을 존중합니다. 당사가 귀하의 개인 정보를 침해하지 않도록 보장하기 위해 사용자의 허가없이 식별 가능한 정보가 저장되거나 액세스되지 않습니다.,",
      "pp_p2": "당사 사이트에는 제3자 웹사이트에 대한 링크가 포함되어 있으므로 당사 도메인 외부에서 추적하는 것을 방지할 수 없습니다.",
      "pp_p3": "브라우저가 제공하는 사용 데이터(User-Agent) 외에는 아무것도 수집되지 않습니다.",
      "pp_link": "공식 웹사이트는 다음과 같습니다.",
      "privacy-policy": {
        "description": "당사의 개인정보 보호정책 및 귀하와의 관련성을 확인하십시오."
      }
    }
  },
  "zh": {
    "page": {
      "pp_title": "隐私政策",
      "pp_date": "最后更新: 2022 年 8 月 1 日",
      "pp_p1": "我们重视隐私并尊重访问我们网站的人。 未经您的许可，不会存储或访问任何可识别信息，以确保我们不会侵犯您的隐私",
      "pp_p2": "由于我们的网站包含指向第三方网站的链接，因此我们无法阻止我们域外的跟踪。",
      "pp_p3": "除了您的浏览器提供的使用数据（用户代理）之外，不会收集任何数据",
      "pp_link": "官方网站如下",
      "privacy-policy": {
        "description": "查看我们的隐私政策以及它与您的关系"
      }
    }
  },
  "mi": {
    "page": {
      "pp_title": "Kaupapahere Tūmataiti",
      "pp_date": "Whakahoutanga whakamutunga: Hurae 1, 2022",
      "pp_p1": "He mea nui ki a maatau muna me te whakaute ki te hunga e toro mai ana ki ta maatau paetukutuku. Kaore he korero tautuhi e penapena, e uru atu ana ranei ki te kore a koe e whakaaetia kia mohio kei poka ke to noho muna.",
      "pp_p3": "I tua atu i nga raraunga whakamahinga e tukuna ana e to tirotiro (User-Agent) kaore he mea e kohia",
      "pp_link": "Ko nga Paetukutuku Whaimana kei raro nei",
      "pp_p2": "Na te mea kei roto i te papa anga nga hona nga ki nga paetukutuku a-tuatoru, kaore e taea e maatau te tiaki i a koe i waho atu o ta maatau rohe.",
      "privacy-policy": {
        "description": "Tirohia ta maatau Kaupapahere Tūmataiti me te aha o te hononga ki a koe"
      }
    }
  }
}
</i18n>