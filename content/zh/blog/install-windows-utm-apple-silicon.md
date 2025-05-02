---
title: "在 Apple Silicon 上使用 UTM 安装 Windows 11"
description: "了解如何使用免费开源的虚拟化工具 UTM 在 Apple Silicon 上设置 Windows 11。"
date: "2025-05-01"
tag: "指南"
toc: true
feature: true
img: "/images/blog/covers/utm-windows-m4.webp"
alt: "在 Apple Silicon 上通过 UTM 运行 Windows 11"
---

在 Apple Silicon 上运行 Windows 越来越受欢迎。在本指南中，我们将逐步介绍如何使用专为 macOS 设计的免费开源虚拟化工具 UTM 在虚拟机中设置 Windows 11。

我们之前的<PageLink title="文章" url="/blog/windows-on-apple-silicon">文章</PageLink>介绍了 Windows 11 的设置过程，但自那时以来发生了一些变化，因此本新指南将作为 2025 年在 Apple Silicon 上安装 Windows 11 的最新说明！

对于在 Apple Silicon 上安装 Windows 的替代解决方案，请注意这些是付费解决方案，可能以更高的价格提供更好的性能。查看<PageLink title="Parallels Desktop" url="https://www.parallels.com/products/desktop/"></PageLink>或<PageLink title="VMware Fusion" url="https://www.vmware.com/products/fusion.html"></PageLink>。

UTM 是一款适用于 macOS 的免费开源虚拟化工具，旨在简单易用，并通过自定义提供原生性能。

## 要求

- UTM 版本 4.6.5
- 至少 30 GB 的可用存储空间
- CrystalFetch 版本 2.2.0
- Apple Silicon 设备（M1-M4 系列）

## UTM 下载

从<PageLink title="UTM Github 发布页面" url="https://github.com/utmapp/UTM/releases"></PageLink>下载 UTM 4.6.5 版本。之前的 4.x.x 版本也应该可以工作。

UTM 的自动更新可通过付费的<PageLink title="App Store 版本" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"></PageLink>获得。或者，使用 GitHub 版本并根据需要手动更新。

将 UTM 拖到您的“应用程序”文件夹中，并验证它是否正确打开。

## CrystalFetch 下载

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch-appstore.webp" alt="显示 CrystalFetch 应用程序的 Apple App Store"></Media>

从<PageLink title="App Store" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"></PageLink>下载 CrystalFetch 2.2.0 版本。此选项免费，并提供自动更新。

或者，从<PageLink title="CrystalFetch Github 发布页面" url="https://github.com/TuringSoftware/CrystalFetch/releases"></PageLink>下载最新版本。这将需要手动更新，但可能会在正式发布之前提供新功能以及潜在的错误修复。

将 CrystalFetch 拖到您的“应用程序”文件夹中，并验证它是否正确打开。

## Windows ISO 下载

下载 Windows 11 **ARM64** ISO。您可以直接从 Microsoft 网站下载，也可以使用 CrystalFetch 下载。

对于此安装，我们将使用 CrystalFetch，因为它提供了一种简单的方式来下载 ISO。也可以通过以下步骤直接下载安装。

### CrystalFetch

1. 打开 CrystalFetch，然后从下拉菜单中选择 **Windows 11**。
2. 选择构建版本。从下拉菜单中选择 **最新**，或选择特定版本。在本指南中，我们将使用 **26100.2033**。
3. 确保已选择 **Apple Silicon**。
4. 选择您的语言和 Windows 版本（**Windows 11**）。
5. 选择 **下载** 并接受许可协议。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch.webp" alt="Windows 11 的 CrystalFetch 应用程序设置"></Media>

下载将自动开始。ISO 大约 4.69GB。完成后，选择目标文件夹并确认存储 ISO。我们将使用默认的“下载”文件夹。

### Windows - 直接下载

要直接从 Microsoft 网站下载，请导航至<PageLink title="Windows 11 ISO" url="https://www.microsoft.com/zh-cn/software-download/windows11arm64"></PageLink>。

1. 从下拉菜单中选择 **Windows 11 (适用于 Arm64 的多版本 ISO)**。
2. 选择 **下载** 以下载 ISO。
3. 选择您的 **产品语言** 并选择 **确认**。
4. 选择 **立即下载**。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-iso-download.webp" alt="Windows 11 ISO 下载页面"></Media>

这将开始下载 ISO。它大约 5.47GB，将存储在“下载”文件夹中。

CrystalFetch 和直接下载的区别在于，CrystalFetch 允许选择下载特定版本，并提供更易于使用的格式。可用的 Windows 版本也会更频繁地更新。CrystalFetch 的主要目的是在下载 UTM 的 ISO 时提供无缝体验。因此，本指南推荐使用 CrystalFetch。这两个选项都经过测试和验证可以工作。

## UTM 配置

在 UTM 中，单击 **+** 图标开始创建新的虚拟机。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-utm-app.webp" alt="UTM 应用程序界面，显示带有用于创建新虚拟机的加号图标的主窗口"></Media>

#### 虚拟化或模拟

UTM 提供两种模式：

| 模式   | 优点                     | 缺点                                 |
| ------ | ------------------------ | ------------------------------------ |
| 虚拟化 | 更快，原生 ARM 支持     | 无法运行 x86 或非 ARM 处理器       |
| 模拟   | 支持非 ARM 系统          | 较慢，可能存在性能问题               |

<Media source="https://cdn.xanzhu.com/v1/m4-windows/utm-windows-mode.webp" alt="虚拟化和模拟之间的 UTM 配置模式选择"></Media>

选择 **虚拟化** 以利用 Apple Silicon 的效率。

模拟较慢，但支持旧系统。也可以通过<PageLink title="UTM Gallery" url="https://mac.getutm.app/gallery/"></PageLink>获得预构建的 VM。

#### 操作系统

<Media source="https://cdn.xanzhu.com/v1/m4-windows/utm-windows-os.webp" alt="Windows、Linux 和 macOS 之间的 UTM 配置操作系统选择"></Media>

1. 选择 **Windows**。
2. 单击 **浏览**，选择 Windows ISO，然后单击 **继续**。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-utm-iso.webp" alt="显示 ISO 选择的 UTM 配置界面"></Media>

#### 硬件设置

将 RAM 设置为您设备可用内存的一半（默认：4096 MB 或 4 GB）。将 CPU 核心数保留为默认值以进行自动管理。单击 **继续**。

#### 存储

默认存储分配为 64 GB，这适合大多数用户。如果需要，稍后可以调整，然后单击 **继续**。

#### 共享目录

（可选）单击 **浏览** 选择要在 Mac 和虚拟机之间共享的文件夹。否则，单击 **继续**。

查看配置摘要，命名虚拟机，然后单击 **保存**。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/utm-windows-complete.webp" alt="已完成的 UTM 配置"></Media>

您的新虚拟机将出现在 UTM 的侧边栏中。单击播放按钮以启动虚拟机！

## Windows 安装

启动虚拟机后，系统将提示您“按任意键继续”。这将启动 Windows 安装过程。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-cdboot.webp" alt="UTM 设置，按任意键从 ISO 文件启动"></Media>

1. 选择您的语言设置，然后单击 **下一步**。
2. 选择您的键盘设置，然后单击 **下一步**。
3. 对于产品密钥，选择 **我没有产品密钥**。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-productkey.webp" alt="显示产品密钥选择的 Windows 设置"></Media>

4. 阅读并接受许可协议，然后单击 **下一步**。
5. 选择安装 Windows 的默认位置，然后单击 **下一步**。

Windows 现在将开始安装。这需要一些时间。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-iso-updates.webp" alt="从 ISO 安装的 Windows 设置"></Media>

此过程完成后，虚拟机将重新启动。请注意，您将看到相同的提示“按任意键或 CD 进入启动”。这是因为 ISO 仍然连接着。

1. 在 UTM 任务栏中选择光盘图标。
2. 将鼠标悬停在第一个 ISO 选项上，然后选择 **弹出**。

这将确保虚拟机启动到 Windows 安装程序，而不是循环执行安装过程。

## Windows 设置

1. 选择您的国家/地区，然后按 **是** 继续。
2. 选择您的键盘输入，然后按 **是** 继续。
3. 如果需要，添加第二个键盘；否则，按 **跳过** 继续。
4. Windows 将检查更新，并可能重新启动虚拟机。
5. 输入一个名称，然后按 **下一步**。
6. 输入密码或留空，然后按 **下一步**。
7. Windows 可能会再次检查更新或开始下载更新。

虚拟机重新启动几次后，很快就可以使用了！

您可能会收到比平时更多的更新，原因是它会自动尝试推送最新版本的 Windows。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-setup-updates.webp" alt="显示正在下载更新的 Windows 设置"></Media>

之后，您应该启动进入 Windows，准备安装 Spice Guest Tools。

## Spice Guest Tools

这将安装网络、屏幕和图形所需的驱动程序。

应该会弹出一个窗口，询问是否设置 UTM Guest Tools。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest.webp" alt="Spice Guest Tools 设置的默认窗口"></Media>

1. 选择 **下一步**。
2. 同意许可协议，然后按 **下一步**。

这将安装 Spice Guest Tools。计算机需要重新启动才能完成安装。请注意，如果出现“显示输出不活动”消息，您可能需要手动重新启动虚拟机。

如果您没有看到 Spice Guest Tools 的弹出窗口，您可以手动运行它。

1. 打开文件资源管理器。
2. 单击 CD-ROM 驱动器。
3. 找到 .exe 文件并打开它。
4. 屏幕可能会闪烁或出现显示错误。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest-manual.webp" alt="显示打开 CD-ROM 的 Windows 文件资源管理器"></Media>

您可以通过访问控制面板验证 Spice Guest Tools 是否已安装。在“卸载程序”下，Guest Tools 将按以下方式列出：

* UTM Guest Tools 0.229
* Spice webdavd ARM64 2.5.0

## 附加说明

要提高可用性，请调整显示设置以获得更好的分辨率。

### 分辨率

关闭虚拟机。选择 UTM 中的电源按钮或直接在 Windows 中关闭。

1. 右键单击虚拟机，然后选择 **编辑**。
2. 选择 **显示**。
3. 选中 **Retina 模式** 以启用高分辨率缩放，然后单击 **保存**。
4. 启动虚拟机。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/utm-display-settings.webp" alt="用于启用 Retina 模式的 UTM 显示设置"></Media>

虚拟机现在将使用您 Mac 的原生分辨率。

#### Windows 更新

修复分辨率后，请务必更新 Windows。可能有很多更新可用。

1. 打开“设置”，然后选择“更新和安全”。
2. 单击 **检查更新**。
3. 单击 **下载并安装更新**。
4. 重新启动虚拟机。

#### 弹出 ISO 和 Spice Guest Tools

确保从虚拟机中弹出 ISO 文件和 Spice Guest Tools CD。

1. 右键单击 UTM 任务栏中的光盘图标。
2. 将鼠标悬停在选项上，然后选择 **弹出**。

### 问题

安装 Spice Guest Tools 后，可能会出现“显示输出不活动”消息。

<Media source="https://cdn.xanzhu.com/v1/m4-windows/utm-display-bug.webp" alt="显示“显示输出不活动”消息的窗口"></Media>

重新启动虚拟机。

#### 结论

就这样！您现在已经在 Apple Silicon 上原生运行 Windows 11 了。此 VM 设置为您提供了灵活且可靠的性能。

如果您觉得本指南有帮助，请考虑查看我们的其他虚拟化技巧 — 或与同样热衷于 Mac/Windows 的朋友分享！