---
title: "案例研究：YouTube 主页上的定向网络钓鱼诈骗"
date: "2024-01-29"
img: "/images/blog/PS/j2-cover-2.png"
description: "探索网络钓鱼诈骗如何设法将自己推广到 YouTube 主页、逃避检测并给用户带来风险。"
tag: "网络钓鱼"
alt: "人行横道标志的图像，在黑白设置中显示突出显示的红手"
---

最近，我一直在收集信息并报告 YouTube 主页上出现的一个非常特殊的广告。 这是一个高度针对性和推广性的广告，将自己置于主页的第一个位置，使其看起来像一个合法的视频。

它使用了一个点击诱饵缩略图，其中包含与 <PageLink title="Mr Beast" url="https://www.youtube.com/user/mrbeast6000"></PageLink> 相关的图像，该平台上最具影响力的 YouTube 用户之一 此时此刻。 该广告使用相同的个人资料图片，并遵循“Beast 2024”或类似的命名模式，使其看起来与野兽先生相关。

以下是向用户显示的内容的示例。 在隐身浏览器窗口中打开它，以表明它向平台上的新用户和活跃用户显示。

<Media source="/images/blog/PS/j2-1.png" alt="YouTube 主页在目标视频旁边显示网络钓鱼诈骗的赞助视频"></Media>

诈骗的完美地点。 通常，此广告会出现在随机视频旁边，但今天我们收到了 YouTube 上广告现实的最后通牒。 网络钓鱼诈骗就在野兽先生的最新视频旁边宣传。

在点击该视频初次看到该广告后，我们会看到一个快速动作视频，描述：“作为观看者，您如何赚到 X 笔钱！”，并将观看者引向评论部分。

<Media source="/images/blog/PS/j2-3.png" alt="YouTube 的广告报告对话框，其中包含有关广告商的信息以及报告或阻止的选项"></Media>

在评论中，固定评论或点赞评论将提供指向旨在收集用户信息（称为网络钓鱼诈骗）的网站的链接。

该网站包含一个简单的号召性用语按钮“立即领取”，链接到外部网站，用户需要在其中输入信息才能解锁奖励或注册服务。

<Media source="/images/blog/PS/j2-5.png" alt="用于诱骗用户的域名预览，并通过号召性用语诱使用户点击索取奖励"></Media>

由于该视频未公开，因此除非正在宣传广告，否则它不会出现在公众视野中。 这样可以一致地删除并重新上传视频。 这同样适用于评论，现有网站被删除，新网站将在评论中列出。

这种情况已经发生很长时间了，它遵循相同的视频缩略图、相同的视频和相似的网站设计的结构。 宣传这些骗局的广告商在 YouTube 的广告商平台上进行了验证，并且通常是同一群人。

<Media source="/images/blog/PS/j2-2.png" alt="YouTube 评论部分，广告商评论钓鱼网站的链接"></Media>

通过 Google 的透明度服务查看广告商的广告，没有发现来自用户的广告。 托管视频的 YouTube 频道经常被删除并被类似的频道取代。

至于视频评论，这些评论似乎是生成的评论和实际成为骗局受害者的人的混合体。 在这种情况下，很难看到针对此类问题的任何改变或实际行动，因为报告的作用有限。

广告本身只是一个点击诱饵，使用未列出的视频和评论外部来源链接的能力，使任何人都可以轻松地执行此操作并收集信息。 问题源于 Google Ads 和 YouTube 上内容的赞助方式缺乏透明度和节制。

点击 YouTube 上的外部来源链接有时会提示警告，指出该链接指向 YouTube 之外，这是很好的做法，但这并不能阻止广告商简单地链接到恶意软件、网络钓鱼或任何其他类型的诈骗，因为这些链接之间没有验证 广告和提供的链接。

在写这份报告时，我们注意到另一个人的出现。 表明这个骗局是如何不断被复制的。 这种情况很可能发生在所有地区以及野兽先生内容特定人群的其他目标年龄组。

<Media source="/images/blog/PS/j2-6.png" alt="YouTube 主页显示另一个在第一位置推广的网络钓鱼骗局。"></Media>

举报此骗局或类似骗局的一般流程如下：

1. 举报广告
2. 调查广告商的资料
3. 举报频道及视频
4. 使用 Virus Total 或其他工具检查域
5. 向 Google、Microsoft 安全浏览服务报告域名
6. 直接向域名提供商报告域名

调查广告商是否可以通过 Google 的 <PageLink title="Ad Transparency Service" url="https://adstransparency.google.com/?region=anywhere"></PageLink> 进行举报，我们可以在举报时获取广告商的名称 YouTube 上的广告。 该工具很有用，但在该骗局的背景下，它在调查时不会显示任何相关广告。

向 Google 的 <PageLink title="Safe Browser Report" url="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"></PageLink> 或 Microsoft 的 <PageLink title= 等网站报告的方法 “安全情报”url="https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest"></PageLink>。 这些报告工具在采取任何行动之前往往依赖于多个报告。

检查现有检测的 URL 可以通过使用 <PageLink title="VirusTotal" url="https://www.virustotal.com/gui/home/url"></PageLink> 并提交 URL 进行分析来完成。 这是一个很好的工具，可以集体查看该域是否已被其他安全供应商报告。

但是，如果域较新，则检测量几乎始终为 0，而较旧的域则更接近 11 或更高的检测率。

这是我们通常在野外看到的一个例子

<Media source="/images/blog/PS/j2-4.png" alt="VirusTotal 网站显示 12 个从 Youtube 上的网络钓鱼网址中发现的检测"></Media>

报告域名首先要做的是查看域名的 <PageLink title="whois" url="https://whois.domaintools.com/"></PageLink>，这将告诉我们域名提供商是谁， 然后可以直接向他们的滥用电子邮件地址报告。

网络钓鱼在 YouTube 上并不新鲜，我们之前在评论部分看到过更激进的解决方案，这些解决方案由机器人发送垃圾邮件链接到外部网站、电报号码等，并冒充创建者。 <PageLink title="The Verge" url="https://www.theverge.com/2022/4/8/23016861/youtube-comment-spam-testing-moderation"></PageLink> 不久前对此进行了介绍 YouTuber 所经历的挫败感。

尽管这已显着减少了一些内容，但仍有一些内容无法通过 YouTube 的垃圾邮件机器人检测系统。 我们看到的这种类型的骗局可能已经运作了很长时间，但很少受到关注。

关于网络钓鱼的一般建议是避免点击链接并避免输入任何信息（例如登录名或类似信息），因为这是诈骗的重点。 信息将导致账户接管等。 详细了解如何使用 <PageLink title="2FA" url="https://xanzhu.com/zh/blog/2fa-protect-against-phishing-scams"></PageLink> 实施更好的身份验证实践。

这仍然是一场举报广告和视频以及直接举报列出的每个域的持续战斗。 说我们可以捕获所有这些是不现实的，但我们可以尝试减少我们遇到的任何情况。

我们现在面临的主要问题是人工智能的引入使得诈骗变得更容易，相比之下，这种网络钓鱼诈骗在互联网上漂浮的人工智能视频范围内微不足道。 好处是 YouTube <PageLink title="investing more" url="https://www.theverge.com/2024/1/25/24050443/youtube-is-investing-heavily-in-its-ability-to -stop-ai-celebrity-scam-ads"></PageLink>。
潜在地减少人工智能生成的内容宣传诈骗的数量，请阅读 <PageLink title="404Media" url="https://www.404media.co/youtube-deletes-1-000-videos-of-celebrity- 的更多信息 ai-诈骗广告/
"></页面链接>。
