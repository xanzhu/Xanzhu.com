<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const paragraphs: { [key: number]: string } = {
  1: t('about.paragraphs.introduction'),
  2: t('about.paragraphs.mission'),
  3: t('about.paragraphs.goal'),
  4: t('about.paragraphs.importance'),
  5: t('about.paragraphs.closing'),
}
const seoImage = 'https://images.pexels.com/photos/27050060/pexels-photo-27050060.jpeg'
useLangMeta('about.meta', seoImage, 'prefix', t)
</script>

<template>
  <LayoutInternalPage :title="t('about.title')">
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
        "about": {
            "title": "About Xanzhu.com",
            "paragraphs": {
                "introduction": "Cybersecurity is a crucial part of the internet and is a growing concern for many users and businesses. Attacks can strike at any moment, devastating individuals and organisations. That's why we created Xanzhu.",
                "mission": "Our mission is to become a leading source for information and knowledge on security, privacy, and accessibility.",
                "goal": "We want to provide a space for technology lovers, as well as average consumers and business owners, to gain insight into how to protect themselves online.",
                "importance": "Knowing how to protect yourself or your business is important. Privacy and security should be a top priority.",
                "closing": "We are new and will likely make a few mistakes. But we're passionate about making the internet a safer place, and we hope you'll join us in developing the next standard of security practices and guidelines."
            },
            "meta": {
                "description": "Xanzhu.com - Your cybersecurity hub. Protecting you online with valuable insights on security, privacy, and accessibility. Join us!",
                "title": "About"
            }
        }
    },
    "ko": {
        "about": {
            "title": "Xanzhu.com 소개",
            "paragraphs": {
                "introduction": "사이버 보안은 인터넷의 핵심 요소이며, 많은 사용자와 기업에게 점점 더 중요한 관심사가 되고 있습니다. 공격은 언제든지 발생할 수 있고, 개인과 조직에 막대한 피해를 줄 수 있습니다. 그래서 우리는 Xanzhu를 만들었습니다.",
                "mission": "저희의 미션은 보안, 프라이버시, 접근성에 대한 정보와 지식을 제공하는 선도적인 소스가 되는 것입니다.",
                "goal": "기술 애호가뿐 아니라 일반 사용자와 기업 소유자들도 온라인에서 자신을 보호하는 방법에 대한 통찰을 얻을 수 있는 공간을 제공하는 것이 목표입니다.",
                "importance": "자신이나 자신의 비즈니스를 보호하는 방법을 아는 것은 매우 중요합니다. 프라이버시와 보안은 항상 최우선되어야 합니다.",
                "closing": "저희는 이제 막 시작한 만큼 실수를 할 수도 있습니다. 하지만 인터넷을 더 안전한 공간으로 만들기 위해 열정을 가지고 있으며, 여러분도 다음 세대의 보안 기준과 지침을 함께 만들어 가주시길 바랍니다."
            },
            "meta": {
                "description": "Xanzhu.com - 사이버 보안 허브. 보안, 프라이버시, 접근성에 대한 유용한 통찰로 온라인에서 여러분을 보호합니다. 함께하세요!",
                "title": "소개"
            }
        }
    },
    "zh": {
        "about": {
            "title": "关于 Xanzhu.com",
            "paragraphs": {
                "introduction": "网络安全是互联网的重要组成部分，也是越来越多用户和企业关注的重点问题。攻击可能随时发生，给个人和组织带来毁灭性的打击。这正是我们创建 Xanzhu 的原因。",
                "mission": "我们的使命是成为安全、隐私和可访问性方面信息与知识的权威来源。",
                "goal": "我们希望为技术爱好者、普通用户和企业主提供一个平台，让他们了解如何在网上保护自己。",
                "importance": "了解如何保护自己或企业至关重要。隐私和安全应始终放在首位。",
                "closing": "我们是一个新兴平台，可能还会犯错。但我们致力于让互联网变得更加安全，期待您的加入，共同推动新一代的安全实践与规范。"
            },
            "meta": {
                "description": "Xanzhu.com - 您的网络安全中心。通过关于安全、隐私和可访问性的宝贵见解，守护您的网络安全。加入我们！",
                "title": "关于"
            }
        }
    }
}
</i18n>
