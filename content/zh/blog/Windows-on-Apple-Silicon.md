---
title: "Apple Silicon 2023 上的 Windows 虚拟机设置 "
description: "了解如何使用免费开源虚拟化软件 UTM 在 Apple Silicon 上设置 Windows。"
date: "2023-11-23"
tag: "指导"
toc: true
feature: true
img: "/images/blog/wvm/wvm.png"
ogURL: "/images/blog/wvm/wvm.png"
alt: "2023 年 Macbook Pro 黑色版显示三种新芯片组的图标"
---

本文介绍如何使用 UTM 在 ARM 处理器上使用最新版本的 Windows。 这适用于所有 Apple Silicon 设备，包括从 M1 到 M3 芯片组的新 Mac 系列。

要检查您的设备是否使用 2020 年推出的新芯片组，请单击 Apple 图标并选择“关于本机”。 在这里您可以找到详细信息，无论是英特尔还是使用新的 M1-M3 芯片。

这是我们年初的 [上一篇文章](https://xanzhu.com/blog/zh/apple-silicon-virtualmachine-setup) 的更新版本，其中我们介绍了使用 UTM 和 Parallels 安装 Windows。 从那时起，这个过程变得更加容易和可靠！

下载次数：

- [UTM](https://mac.getutm.app/)
- [CrystalFetch](https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12)

先决条件：

- 至少 30GB 可用存储空间（Windows 需要很多）
- 连接至 WiFi 以安装 ISO 文件/Windows
- UTM 版本：4.4.4 或更高版本

## 安装 UTM

1. 访问 [UTM](https://mac.getutm.app/)
2. 选择下载

打开后该应用程序将如下所示

<Media source="/images/blog/wvm/wvm-1.png"  alt="UTM 应用程序打开屏幕"></Media>

## CrystalFetch

这是一个免费工具，可帮助我们生成 UTM 虚拟机所需的更新的 Windows ISO 文件。

1. 从 App Store 下载 CrystalFetch。
2. 打开 CrystalFetch 并选择语言和版本 (Windows 11)

看起来应该与此类似：

<Media source="/images/blog/wvm/wvm-2.png"  alt="CrystalFetch 应用程序打开屏幕"></Media>

3.点击下载

需要下载 ISO 文件。 这可能需要一些时间，因为文件大小约为 5GB。 将此文件保存在您可以记住的位置，例如桌面或下载文件夹。

4.关闭 Crystal Fetch 并打开 UTM

## 创建虚拟机

我们现在可以设置虚拟机了！

1. 单击创建新虚拟机
2. 选择虚拟化
3. 选择 Windows
4. 单击“浏览”并选择我们从 CrystalFetch 下载的 ISO 文件，然后选择“继续”。

应该看起来与此类似

<Media source="/images/blog/wvm/wvm-3.png"  alt="虚拟机的 UTM 配置屏幕"></Media>

1. 选择该虚拟机要使用的 RAM 量。 4096 是默认值，等于 4GB。 您的系统使用的一半是理想的，但如果需要，可以稍后进行调整。 现在，将其保留为默认值。

2. 选择要使用的存储量。 默认情况下，该值设置为 64GB，这是虚拟机可以容纳的限制。 同样，如果需要的话，我们可以稍后调整。

3. 如果您需要在 Mac 和虚拟机之间共享文件夹或目录，请单击“浏览”，选择文件夹或路径，然后按“继续”。 否则，请按“继续”继续下一步。

4. 为虚拟机命名，然后选择“保存”。

至此虚拟机已经创建完毕。 您应该会看到与此类似的内容。

<Media source="/images/blog/wvm/wvm-4.png"  alt="显示 UTM 虚拟机"></Media>

## 运行虚拟机

1. 选择您刚刚创建的虚拟机，然后按播放图标。 或者，您可以右键单击并选择“运行”。

现在将启动虚拟机。 在此过程中，它将打开一个新窗口，它会询问的第一件事是“按任意键从 CD 启动”。

2. 单击该窗口内部并按任意键。

<Media source="/images/blog/wvm/wvm-5.png"  alt="UTM 显示提示按任意键继续"></Media>

此步骤很重要，因为如果您按下按键的速度不够快，您将看到以下屏幕。

<Media source="/images/blog/wvm/wvm-5b.png"  alt="UTM 在启动过程中显示错误提示"></Media>

要解决此问题，请关闭虚拟机并再次运行它，或者选择重新启动虚拟机按钮（即三角形按钮）。

如果您不断收到上述错误，请参阅本文的问题和错误部分。 寻求更多帮助。

## 安装 Windows

完成此操作后，我们将进入此屏幕，我们现在可以在其中配置 Windows 的安装。

<Media source="/images/blog/wvm/wvm-6.png"  alt="Windows ISO 安装菜单"></Media>

1. 选择语言，然后按下一步。

2. Windows 激活：系统将要求您输入密钥。 只需点击“我没有钥匙”即可。

3. 选择要使用的 Windows 版本。 选择 Windows 11 家庭版或专业版，然后按下一步。

4. 选中复选框以同意条款和条件，然后按下一步。

5. 选择要安装 Windows 的驱动器。 应该只有一个，因此您只需按“下一步”即可。

Windows 安装程序现在将开始安装 Windows 所需的文件。 请注意，这将需要一些时间。

完成后，它将重新启动几次。 让它运行而不受到干扰。 到达以下屏幕后，我们需要确保弹出当前 ISO，以防止安装程序在重新启动时再次运行。

<Media source="/images/blog/wvm/wvm-7.png" alt="关于从虚拟机中弹出当前 ISO 的 UTM 指南"></Media>

1. 单击光盘图标
2. 将鼠标悬停在 CD/DVD 上并选择弹出。

这是默认的 Windows 11 设置，您需要在其中配置您的名称、密码和其他 Windows 设置。 由于可能会安装更新，因此可能需要一些时间。

按照指示完成设置。

## 安装中 Spice Guest Tools

登录新虚拟机后，您需要确保安装了 Spice Guest Tools。 这将帮助您获得适合互联网、屏幕分辨率等的驱动程序。

默认情况下，会弹出安装菜单。 点击下一步安装并等待。 这将安装驱动程序，因此虚拟机可能会闪烁或变慢，直到安装完成。

<Media source="/images/blog/wvm/wvm-8.png" alt="UTM Spice 访客工具安装程序屏幕"></Media>

如果虚拟机变得无响应，请关闭并重新启动虚拟机。

## 包起来

虚拟机现已正确安装并可以使用。 这是在 UTM 上运行的 Windows 虚拟机。

由于这是基于 ARM 的，某些应用程序可能无法运行，并且总体性能不会完美。 它可以工作，并且可以通过右键单击 UTM 主菜单中的虚拟机并选择“编辑”来找到对存储、RAM 和进程的调整

## 问题和注释

在运行虚拟机的第一步期间无法启动进入 Windows：
ISO 文件可能有问题。 要解决此问题，请选择将光盘图标悬停在 CD/DVD 上，按弹出键，重新选择 ISO 文件，然后重新启动虚拟机。

安装虚拟机后启动虚拟机要求“按任意键从 CD 启动”：
这是因为 ISO 文件仍然存在。 要解决此问题，请弹出 ISO 文件。 请参阅安装 Windows 部分中显示的示例。

Windows 11 不需要激活密钥：
当提示输入激活密钥时，只需选择“我没有密钥”。 您将能够正常运行 Windows，但某些功能可能无法访问。

互联网无法正常工作且屏幕尺寸不正确：
仔细检查 Spice Guest Tools 是否已正确安装。 要安装 Spice Guest Tools，请按照下列步骤操作：

1. 单击文件资源管理器。
2. 转到 CD 驱动器并单击它。
3. 双击“utm-guest-tools”运行安装。

如果您需要更多帮助，请参阅 UTM 的文档 [在此处找到](https://docs.getutm.app/guides/windows/)
