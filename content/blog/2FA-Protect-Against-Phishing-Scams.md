---
title: "2FA: Protect Against Phishing Scams"
date: "2023-02-01"
tag: "Security"
img: "/images/blog/2FA/2FA.webp"
description: "How Two-Factor Authentication (2FA) improves your online security and protects you from phishing scams"
alt: "Microsoft Authenticator"
ogLink: "https://source.unsplash.com/RMIsZlv8qv4"
---

In my previous article, I discussed using password managers to enhance your security. Another crucial aspect to consider is using two-factor authentication (2FA).
2FA provides an additional layer of security for your accounts. In case your password becomes compromised and used without your permission, this second layer of authentication will prevent unauthorized access to your account, as it requires a new key.
There are various forms of two-factor authentication available today, such as:

1. Text/SMS messaging or voice calling
2. Email login links, codes, or one-click logins
3. Dedicated authentication applications
4. Security keys like YubiKey

With the multitude of options available, choosing the right one may not always be in your control. Many popular applications have built-in features that handle authentication methods through dedicated applications or text-based services.

## Dedicated Authenticator Application

Dedicated authentication applications store a special key, generated by scanning a QR code or copying a link, which displays a series of numbers. These codes change every 15 to 30 seconds and are used to authenticate when signing into services that use 2FA.

Popular applications for this include:

* Google Authenticator
* Twilio Authy
* Microsoft Authenticator

These work on your mobile phone. However, a notable issue with Google Authenticator is that codes are not backed up. If you were to uninstall or reset your phone, the authentication keys would be lost, causing significant problems when you need access to your accounts.

A good option would be to use an authenticator with the ability to backup codes, such as Twilio Authy, or to ensure you have recovery codes stored securely.

## SMS Authentication

Text/SMS messaging is a method where the service sends a code to your device for login. The code typically comes from a short number, such as 5043, and provides an authentication code used to unlock your accounts.

This method is bound to a mobile number, which can pose a risk from a security threat known as SIM swapping. SIM swapping is when an attacker intercepts your SIM and gains access to your messages, making it a significant security concern for influential users who are more likely to be targeted by these types of attacks.

To prevent the risk of SIM swapping, you can:

1. Set up and use a SIM pin or password
2. Keep your device up to date
3. Be aware of scam calls and text messages
4. Use strong passwords on all your accounts
5. Enable two-factor authentication.

## Email Authentication

Email authentication can display a link or a code to enter for unlocking your account. This method is common and convenient for quick login, but is not widely used in all two-factor authentication setups. It is often used for password resetting and one-time logins.

The risk will always be present with email. Consider:

* Monitoring your account for unusual activity
* Ensuring the account uses a secure password
* Enabling two-factor authentication.

## Security Keys

Security keys are a physical form of multi-factor authentication (MFA) that add an extra layer of security to online accounts. One popular solution is the YubiKey from Yubico, which can be inserted into USB ports or accessed wirelessly via NFC. 

This method of authentication is more secure as it is a physical device that you have on hand, making it nearly impossible for attackers to compromise your accounts. Security keys eliminate the need for additional codes to authenticate, as once the key is verified on your account, no further authentication is required.

MFA is ideal for enterprise usage, as it integrates with WebAuth/FIDO and Smart Card/PIV authentication, protecting against common phishing attempts. Security keys will continue to be widely adopted by platforms and services as this technology evolves. You can learn more about security keys and their features by visiting [Yubico.com](https://www.yubico.com/){:target="\_blank"}

## Summary

Two Factor Authentication (2FA) provides an extra layer of security to your online accounts, making it harder for attackers to access your personal information. With a variety of methods available, such as SMS, email, and authenticator apps, there is a solution that fits the needs of different users. 

Security keys, like Yubico's YubiKey, are also an option for those who prefer a physical device for MFA. As passwords continue to become more complex, biometric data may become a more popular form of verification in the future. 

Regardless of the method used, it is recommended to implement 2FA on important accounts, such as those related to finances, social media, and mobile/internet services.

