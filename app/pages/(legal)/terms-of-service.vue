<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const date = '2025-01-27'

const sections = [
  {
    title: t('terms.intellectualProperty.title'),
    content: t('terms.intellectualProperty.content'),
  },
  {
    title: t('terms.userResponsibilities.title'),
    intro: t('terms.userResponsibilities.intro'),
    list: [
      t('terms.userResponsibilities.list.useLawfully'),
      t('terms.userResponsibilities.list.noDisruption'),
    ],
  },
  {
    title: t('terms.disclaimer.title'),
    content: t('terms.disclaimer.content'),
  },
  {
    title: t('terms.thirdPartyLinks.title'),
    content: t('terms.thirdPartyLinks.content'),
  },
  {
    title: t('terms.changesToTerms.title'),
    content: t('terms.changesToTerms.content'),
  },
  {
    title: t('terms.contactUs.title'),
    content: t('terms.contactUs.content'),
    isContact: true,
  },
]

// SEO Metadata
const seoImage = 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg'
useLangMeta('terms.meta', seoImage, 'prefix', t)
</script>

<template>
  <LayoutInternalPage
    :title="t('terms.title')" :description="t('terms.description')" :date="date"
    :datelabel="t('terms.date')"
  >
    <template #content>
      <div>
        <p class="text-dark-300 dark:text-gray-300">
          {{ t('terms.introduction') }}
        </p>
        <div v-for="(section, index) in sections" :key="index" class="mb-8">
          <h2 class="text-2xl text-dark-900 font-semibold mb-4 mt-8 dark:text-gray-100">
            {{ section.title }}
          </h2>
          <p v-if="section.intro" class="text-dark-300 dark:text-gray-300">
            {{ section.intro }}
          </p>
          <ul v-if="section.list" class="text-dark-300 pl-6 list-disc dark:text-gray-300">
            <li v-for="(item, itemIndex) in section.list" :key="itemIndex">
              {{ item }}
            </li>
          </ul>
          <p v-if="section.content" class="text-dark-300 dark:text-gray-300">
            {{ section.content }}
            <NuxtLink
              v-if="section.isContact" href="mailto:support@xanzhu.com"
              class="text-black no-underline dark:text-white hover:underline"
            >
              support@xanzhu.com
            </NuxtLink>
          </p>
        </div>
      </div>
    </template>
  </LayoutInternalPage>
</template>

<i18n lang="json">
{
  "en": {
    "terms": {
      "title": "Terms of Service",
      "description": "By using this Blog, you agree to our Terms of Service. Please read them carefully.",
      "date": "Last Updated",
      "introduction": "Welcome to Xanzhu (the \"Blog\"). By accessing or using this Blog, you agree to comply with and be bound by the following Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use this Blog.",
      "intellectualProperty": {
        "title": "1. Intellectual Property",
        "content": "All content on this Blog, including but not limited to text, graphics, logos, images, and software, is the property of Xanzhu or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or modify any content without prior written consent from Xanzhu."
      },
      "userResponsibilities": {
        "title": "2. User Responsibilities",
        "intro": "When using this Blog, you agree to:",
        "list": {
          "useLawfully": "Use the Blog only for lawful purposes.",
          "noDisruption": "Not engage in any activity that disrupts or interferes with the Blog's functionality."
        }
      },
      "disclaimer": {
        "title": "3. Disclaimer of Warranties",
        "content": "This Blog is provided \"as is\" and \"as available\" without any warranties, express or implied. Xanzhu does not guarantee that the Blog will be error-free, secure, or available at all times."
      },
      "thirdPartyLinks": {
        "title": "4. Third-Party Links",
        "content": "The Blog may contain links to third-party websites or services. Xanzhu is not responsible for the content or practices of these third-party sites. Use them at your own risk."
      },
      "changesToTerms": {
        "title": "5. Changes to Terms",
        "content": "Xanzhu reserves the right to modify or replace these Terms at any time. Your continued use of the Blog after any changes constitutes acceptance of the new Terms."
      },
      "contactUs": {
        "title": "6. Contact Us",
        "content": "If you have any questions about these Terms, please contact us at"
      },
      "meta": {
        "title": "Terms of Service",
        "desc": "Read the Terms of Service for Xanzhu. By using this blog, you agree to these terms."
      }
    }
  },
  "ko": {
    "terms": {
      "title": "이용 약관",
      "description": "이 블로그를 사용함으로써 귀하는 이용 약관에 동의하게 됩니다. 신중하게 읽어보시기 바랍니다.",
      "date": "마지막 업데이트",
      "introduction": "Xanzhu(이하 \"블로그\")에 오신 것을 환영합니다. 이 블로그에 접속하거나 사용함으로써 귀하는 다음 이용 약관(\"약관\")에 동의하게 됩니다. 이 약관에 동의하지 않으시면 블로그를 사용하지 마십시오.",
      "intellectualProperty": {
        "title": "1. 지적 재산권",
        "content": "이 블로그의 모든 콘텐츠(텍스트, 그래픽, 로고, 이미지, 소프트웨어 등)는 Xanzhu의 소유이거나 콘텐츠 공급자의 소유이며, 국제 저작권법에 의해 보호됩니다. Xanzhu의 사전 서면 동의 없이 콘텐츠를 복제, 배포 또는 수정할 수 없습니다."
      },
      "userResponsibilities": {
        "title": "2. 사용자 책임",
        "intro": "이 블로그를 사용함으로써 귀하는 다음 사항에 동의하게 됩니다:",
        "list": {
          "useLawfully": "블로그를 합법적인 목적으로만 사용합니다.",
          "noDisruption": "블로그의 기능을 방해하거나 간섭하는 활동을 하지 않습니다."
        }
      },
      "disclaimer": {
        "title": "3. 보증의 부인",
        "content": "이 블로그는 \"있는 그대로\" 및 \"이용 가능한 상태로\" 제공되며, 명시적 또는 묵시적인 어떠한 보증도 제공하지 않습니다. Xanzhu는 블로그가 오류 없이, 안전하게 또는 항상 이용 가능할 것이라고 보장하지 않습니다."
      },
      "thirdPartyLinks": {
        "title": "4. 제3자 링크",
        "content": "이 블로그에는 제3자 웹사이트 또는 서비스에 대한 링크가 포함될 수 있습니다. Xanzhu는 이러한 제3자 사이트의 콘텐츠 또는 관행에 대해 책임을 지지 않습니다. 이러한 사이트를 사용할 때는 귀하의 책임 하에 이용하십시오."
      },
      "changesToTerms": {
        "title": "5. 약관 변경",
        "content": "Xanzhu는 언제든지 이 약관을 수정하거나 대체할 권리를 보유합니다. 변경 후에도 블로그를 계속 사용하면 새로운 약관에 동의한 것으로 간주됩니다."
      },
      "contactUs": {
        "title": "6. 문의하기",
        "content": "이 약관에 대해 궁금한 점이 있으면 다음 주소로 문의하십시오:"
      },
      "meta": {
        "title": "이용 약관",
        "desc": "Xanzhu의 이용 약관을 읽어보세요. 이 블로그를 사용함으로써 귀하는 이 약관에 동의하게 됩니다."
      }
    }
  },
  "zh": {
    "terms": {
      "title": "服务条款",
      "description": "使用本博客即表示您同意我们的服务条款。请仔细阅读。",
      "date": "最后更新",
      "introduction": "欢迎访问 Xanzhu（以下简称“博客”）。通过访问或使用本博客，您同意遵守并受以下服务条款（“条款”）的约束。如果您不同意这些条款，请不要使用本博客。",
      "intellectualProperty": {
        "title": "1. 知识产权",
        "content": "本博客上的所有内容，包括但不限于文本、图形、徽标、图像和软件，均为 Xanzhu 或其内容供应商的财产，并受国际版权法保护。未经 Xanzhu 事先书面同意，您不得复制、分发或修改任何内容。"
      },
      "userResponsibilities": {
        "title": "2. 用户责任",
        "intro": "使用本博客时，您同意：",
        "list": {
          "useLawfully": "仅将博客用于合法目的。",
          "noDisruption": "不从事任何干扰或破坏博客功能的活动。"
        }
      },
      "disclaimer": {
        "title": "3. 免责声明",
        "content": "本博客“按原样”和“可用”提供，不提供任何明示或暗示的保证。Xanzhu 不保证博客始终无错误、安全或可用。"
      },
      "thirdPartyLinks": {
        "title": "4. 第三方链接",
        "content": "本博客可能包含指向第三方网站或服务的链接。Xanzhu 不对这些第三方网站的内容或做法负责。使用这些网站的风险由您自行承担。"
      },
      "changesToTerms": {
        "title": "5. 条款变更",
        "content": "Xanzhu 保留随时修改或替换这些条款的权利。您在变更后继续使用博客即表示接受新条款。"
      },
      "contactUs": {
        "title": "6. 联系我们",
        "content": "如果您对这些条款有任何疑问，请联系我们："
      },
      "meta": {
        "title": "服务条款",
        "desc": "阅读 Xanzhu 的服务条款。使用本博客即表示您同意这些条款。"
      }
    }
  }
}
</i18n>
