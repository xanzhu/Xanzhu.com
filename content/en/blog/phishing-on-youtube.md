---
title: "Case Study: Phishing Scam on YouTube's Home Page"
date: "2024-01-29"
img: "/images/blog/PS/j2-cover-2.png"
description: "Explore how a phishing scam manages to promote itself to the YouTube Homepage, evading detection and posing a risk to users."
tag: "Phishing"
alt: "Image of a crossing walk sign showing highlighted red hand in black and white setting"
feature: true
---

Recently I've been collecting information and reporting a very particular ad appearing on the home page of YouTube. It's a highly targeted and promoted ad that places itself in the first position of the home page making it look like a legitimate video.

It uses a clickbait thumbnail featuring images related to <PageLink title="Mr Beast" url="https://www.youtube.com/user/mrbeast6000"></PageLink>, one of the most impactful YouTubers on the platform at the moment. The Ad uses the same profile picture and follows a naming pattern of "Beast 2024" or similar making it appear to be associated with Mr Beast.

Here is an example of what is being displayed to users. Opening up this in an incognito browser window to show that this is appearing to new users and active users on the platform.

<Media source="/images/blog/PS/j2-1.png" alt="Youtube Home Page showing a sponsored video the phishing scam next to targeted video"></Media>

The perfect placement for a scam. Usually, this ad will appear next to random videos but today we got the ultimatum of the reality of advertising on YouTube. A phishing scam was promoted right next to the latest video from Mr Beast.

After the initial exposure to this ad upon clicking on this video we're given a fast-action video describing: "How you as a viewer can earn X amount of money!", and referring the viewer to the comment section.

<Media source="/images/blog/PS/j2-3.png" alt="Youtube's Ad Reporting Dialog Box with information about advertiser and options to report or block"></Media>

In the comments, the pinned comment or liked comment will provide a link to a website designed to collect user information known as a phishing scam.

The website contains a simple call to action button "Claim this now" linking to external websites where the user needs to enter information to unlock rewards or sign up for services.

<Media source="/images/blog/PS/j2-5.png" alt="Preview of the domain used to phish users with a call to action enticing a click to claim rewards"></Media>

As the video is unlisted it appears out of public view unless the ad is being promoted. This way the video can be removed and re-uploaded consistently. The same applies to comments as well with existing websites being taken down a new website will be listed in the comments.

This has been happening for a very long time it follows the structure of the same video thumbnail, same video and similar website design. The advertisers promoting these scams are verified on YouTube's Advertiser platform and are usually the same set of people.

<Media source="/images/blog/PS/j2-2.png" alt="Youtube Comment section where the advertiser comments a link to a phishing website"></Media>

Reviewing the advertiser's ads through Google's Transparency service there are no ads found from the user. The YouTube channel that hosts the videos often gets taken down and replaced with a similar channel.

As for comments on the videos these appear to be a mixture of generated comments and actual people falling victim to the scam. In this situation, it is difficult to see any change or real action towards these types of issues as reporting can only do so much.

The ad itself is simply clickbait, using unlisted videos and the ability to comment links to external sources that make it easy for anyone to do this and collect information. The problem stems from a lack of transparency and moderation in both Google Ads and the way content is sponsored on YouTube.

Links to external sources when clicked on YouTube will sometimes prompt a warning that it leads outside of YouTube which is great practice but this doesn't stop the advertiser from simply linking to malware, phishing or any other types of scam there is no verification between the ad and the links provided.

Writing this report we noticed another appearing. Showing how consistently this scam is being replicated. This is likely occurring in all regions and other targeted age groups specific to the demographic of Mr Beast's content.

<Media source="/images/blog/PS/j2-6.png" alt="Youtube Home Page showing another phishing scam promoted in the first position."></Media>

Reporting this scam or similar follows a general process of:

1. Reporting the Advertisement
2. Investigating Advertisers' Profile
3. Reporting the Channel & Video
4. Checking the Domain using VirusTotal or other tools
5. Reporting Domain to Google, Microsoft Safe Browsing services
6. Reporting the Domain directly to Domain Provider

Investigating if the advertiser can be done through Google's <PageLink title="Ad Transparency Service" url="https://adstransparency.google.com/?region=anywhere"></PageLink> we can get the advertisers' name when reporting the ad on YouTube. This tool is helpful but in the context of this scam, it doesn't show any related ads when investigating.

The approach of reporting to sites like Google's <PageLink title="Safe Browser Report" url="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"></PageLink> or Microsoft's <PageLink title="Security Intelligence" url="https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest"></PageLink>. These reporting tools tend to rely on multiple reports before any action is taken.

Checking the URL for existing detections can be done by using <PageLink title="VirusTotal" url="https://www.virustotal.com/gui/home/url"></PageLink> and submitting the url for analysis. This is a good tool for collectively seeing if the domain has been reported by other security vendors.

However, if the domain is newer the amount of detections is almost always 0 while a much older domain is closer to seeing a detection rate of 11 or higher.

Here is an example of what we usually see in the wild

<Media source="/images/blog/PS/j2-4.png" alt="VirusTotal website Showing 12 Detections found from phishing url found on Youtube"></Media>

Reporting the domain the first thing to do is see the <PageLink title="whois" url="https://whois.domaintools.com/"></PageLink> of the domain this will tell us who the domain provider is, and then it can be reported directly to their abuse email address.

Phishing isn't new on YouTube and we've seen more aggressive solutions previously in comment sections powered by bots spamming links to external websites, Telegram Numbers and more impersonating the creator. <PageLink title="The Verge" url="https://www.theverge.com/2022/4/8/23016861/youtube-comment-spam-testing-moderation"></PageLink> covered this a while back over the frustrations experienced by YouTubers.

While this has reduced significantly some still slip through the cracks of YouTube's Spam Bot Detection System. This type of scam we're seeing has likely been operating for a very long time rarely gaining traction.

General advice on phishing is to avoid clicking on the links and avoid entering any information such as logins or similar as this is the point of the scam. Information will lead to account takeovers and more. Learn more about implementing better authentication practices using <PageLink title="2FA" url="https://xanzhu.com/blog/2fa-protect-against-phishing-scams"></PageLink>.

This continues to be an ongoing battle of reporting the ads, and the videos and directly reporting each domain listed. It's unrealistic to say we could catch them all but we can try to reduce any we come across.

The major problem we are facing now is the introduction of AI making it easier to establish scams, in comparison, this phishing scam is minuscule in the range of AI Videos floating on the internet. The good thing is YouTube is investing more
to potentially reduce the amount of AI-generated content-promoting scams read more on <PageLink title="404Media" url="https://www.404media.co/youtube-deletes-1-000-videos-of-celebrity-ai-scam-ads/
"></PageLink>.
