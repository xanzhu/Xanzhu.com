<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const seoImage = 'https://images.pexels.com/photos/27050060/pexels-photo-27050060.jpeg'
useLangMeta('about.meta', seoImage, 'prefix')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center md:mt-20">
    <h1>{{ t('about.title') }}</h1>
    <div class="p8 text-sm prose sm:(p2 text-base)">
      <p>{{ t('about.paragraphs.introduction') }}</p>
      <p>{{ t('about.paragraphs.mission') }}</p>
      <p>{{ t('about.paragraphs.goal') }}</p>
      <p>{{ t('about.paragraphs.importance') }}</p>
      <p>{{ t('about.paragraphs.closing') }}</p>
    </div>
  </div>
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
                "introduction": "사이버 보안은 인터넷의 중요한 부분이며 많은 사용자와 기업에게 점점 더 큰 관심사가 되고 있습니다. 공격은 언제든지 발생할 수 있으며 개인과 조직에 큰 피해를 줄 수 있습니다. 그래서 우리는 Xanzhu를 만들었습니다.",
                "mission": "우리의 미션은 보안, 개인 정보 보호 및 접근성에 대한 정보와 지식의 선도적인 소스가 되는 것입니다.",
                "goal": "우리는 기술 애호가뿐만 아니라 일반 소비자와 기업 소유자들이 온라인에서 자신을 보호하는 방법에 대한 통찰력을 얻을 수 있는 공간을 제공하고자 합니다.",
                "importance": "자신이나 비즈니스를 보호하는 방법을 아는 것은 중요합니다. 개인 정보 보호와 보안은 최우선 과제여야 합니다.",
                "closing": "우리는 새롭게 시작한 회사이며 몇 가지 실수를 할 수도 있습니다. 그러나 우리는 인터넷을 더 안전한 곳으로 만들기 위해 열정적이며, 여러분이 다음 세대의 보안 관행과 지침을 개발하는 데 함께해 주시기를 바랍니다."
            },
            "meta": {
                "description": "Xanzhu.com - 사이버 보안 허브. 보안, 개인 정보 보호 및 접근성에 대한 유용한 통찰력으로 여러분을 온라인에서 보호합니다. 함께하세요!",
                "title": "소개"
            }
        }
    },
    "zh": {
        "about": {
            "title": "关于 Xanzhu.com",
            "paragraphs": {
                "introduction": "网络安全是互联网的重要组成部分，也是许多用户和企业日益关注的问题。攻击随时可能发生，给个人和组织带来毁灭性打击。这就是我们创建 Xanzhu 的原因。",
                "mission": "我们的使命是成为安全、隐私和可访问性信息和知识的领先来源。",
                "goal": "我们希望为技术爱好者、普通消费者和企业主提供一个空间，让他们了解如何在线保护自己。",
                "importance": "了解如何保护自己或您的企业非常重要。隐私和安全应该是首要任务。",
                "closing": "我们是一家新公司，可能会犯一些错误。但我们热衷于让互联网变得更安全，我们希望您能加入我们，共同制定下一代安全实践和指南。"
            },
            "meta": {
                "description": "Xanzhu.com - 您的网络安全中心。通过有关安全、隐私和可访问性的宝贵见解，保护您的在线安全。加入我们！",
                "title": "关于"
            }
        }
    }
}
</i18n>
