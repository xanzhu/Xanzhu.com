---
title: "如何使用 UTM 在 Apple Silicon 上安装 Windows 11"
description: "使用 UTM 在 M1–M5 Mac 上运行 Windows 11 的完整更新指南。了解如何绕过 Microsoft 账户要求并修复常见显示问题。"
date: "2026-01-01"
updated: "2026-01-01"
tag: "指南"
toc: true
feature: true
img: "/images/blog/covers/utm-windows-m4.webp"
alt: "在 Apple Silicon 上使用 UTM 运行 Windows 11"
---

在 Apple Silicon 上运行 Windows 越来越受欢迎。在本指南中，我们将介绍如何使用 UTM（一款专为 macOS 量身定制的免费开源虚拟化工具）在虚拟机中设置 Windows 11。

我们的 :PageLink{title="上一篇文章" url="/blog/windows-on-apple-silicon"} 介绍了在 Apple Silicon 上设置 Windows 的基础知识。

::ArticleUpdates
- **2026年1月1日** - **年度重新发布**：进行了完整的技术审核。验证并更新了 Windows 11（24H2/25H2）、UTM 4.7.5 的所有步骤，并添加了新的本地账户绕过方法。
::

对于在 Apple Silicon 上安装 Windows 的替代解决方案，请注意这些是付费解决方案，可能以更高的价格提供更好的性能。查看 :PageLink{title="Parallels Desktop" url="https://www.parallels.com/products/desktop/"} 或 :PageLink{title="VMware Fusion" url="https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion"}。

UTM 是一款适用于 macOS 的免费开源虚拟化工具，设计简单易用，并提供原生性能和自定义功能。

## 系统要求

- UTM 版本 4.7.5
- 至少 30 GB 可用存储空间
- CrystalFetch 版本 2.2.0
- Apple Silicon 芯片组（M1-M5 系列）

## UTM 下载

从 :PageLink{title="UTM Github 发布页面" url="https://github.com/utmapp/UTM/releases"} 下载 UTM 版本 4.7.5。之前的 4.x.x 版本也应该可以使用。

可以通过 :PageLink{title="App Store 版本" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"} 获得 UTM 的自动更新，但这是付费选项。或者，使用 GitHub 版本并根据需要手动更新。

将 UTM 拖到您的"应用程序"文件夹中，并验证它是否正常打开。

## CrystalFetch 下载

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch-appstore.webp
alt: 显示 CrystalFetch 应用程序的 Apple App Store
---
::

从 :PageLink{title="App Store" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"} 下载 CrystalFetch 版本 2.2.0。此选项是免费的，并提供自动更新。

或者，从 :PageLink{title="CrystalFetch Github 发布页面" url="https://github.com/TuringSoftware/CrystalFetch/releases"} 下载最新版本。这需要手动更新，但可能在正式发布之前提供更新的功能以及潜在的错误修复。

将 CrystalFetch 拖到您的"应用程序"文件夹中，并验证它是否正常打开。

## Windows ISO 下载

下载 Windows 11 **ARM64** ISO。您可以直接从 Microsoft 网站下载，也可以使用 CrystalFetch。

对于本次安装，我们将使用 CrystalFetch，因为它提供了一种简单的方式来下载 ISO。也可以通过直接下载进行安装，下面概述了步骤。

### CrystalFetch

1. 打开 CrystalFetch 并从下拉菜单中选择 **Windows 11**。
2. 选择构建版本。从下拉菜单中选择 **latest** 或选择特定版本。
3. 确保选择了 **Apple Silicon**。
4. 选择您的语言和 Windows 版本（**Windows 11**）。
5. 选择 **Download** 并接受许可协议。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch.webp
alt: Windows 11 的 CrystalFetch 应用程序设置
---
::

下载将自动开始。ISO 大约为 5.27GB。完成后，系统会要求您将文件移动到目标文件夹以存储此 ISO 文件。我们将使用默认的"下载"文件夹。点击 **Move**。

现在您可以关闭 CrystalFetch 并开始设置 UTM。

### Windows - 直接下载

要直接从 Microsoft 网站下载，请导航至 :PageLink{title="Windows 11 ISO" url="https://www.microsoft.com/en-us/software-download/windows11arm64"}。

1. 从下拉菜单中选择 **Windows 11 (multi-edition ISO for Arm64)**。
2. 选择 **Download Now**
3. 选择您的 **Product Language** 并选择 **Confirm**。
4. 选择 **Download Now** 下载 ISO。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-download.webp
alt: Windows 11 ISO 下载页面
---
::

这将开始下载 ISO。大约为 5.47GB，将存储在"下载"文件夹中。

CrystalFetch 和直接下载的区别在于，CrystalFetch 允许选择要下载的特定版本，并提供更友好的下载工作流程。可用的 Windows 版本也会更频繁地更新。

CrystalFetch 的主要目的是在为 UTM 下载 ISO 时提供无缝体验。因此，本指南推荐使用 CrystalFetch。这两个选项都经过测试并验证可以使用。

直接版本将始终获取最新的 Windows ARM 构建。

## UTM 配置

在 UTM 中，点击 **+** 图标开始创建新的虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-app.webp
alt: UTM 应用程序界面，显示带有加号图标的主窗口以创建新虚拟机
---
::

### 虚拟化或仿真

UTM 提供两种模式：

| 模式   | 优点                   | 缺点                            |
| ------ | ---------------------- | ------------------------------- |
| 虚拟化 | 更快，原生 ARM 支持    | 不支持 x86（Intel/AMD）架构     |
| 仿真   | 支持非 ARM 系统        | 较慢，可能存在性能问题          |

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-mode.webp
alt: UTM 配置模式在虚拟化和仿真之间选择
---
::

选择 **Virtualise** 以利用 Apple Silicon 的效率。

仿真较慢但支持较旧的系统。预构建的虚拟机也可通过 :PageLink{title="UTM Gallery" url="https://mac.getutm.app/gallery/"} 获得。

### 操作系统

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/os-selection.webp
alt: UTM 配置操作系统在 Windows、Linux 和 macOS 之间选择
---
::

### 硬件设置

将 RAM 设置为设备可用内存的一半（默认值：4096 MB 或 4 GB）。将 CPU 核心数保留为默认值以进行自动管理。点击 **Continue**。

接下来，我们定义 ISO 文件。

1. 选择 **Windows**。
2. 点击 **Browse**，选择我们刚才下载的 Windows ISO，然后点击 **Continue**。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-iso.webp
alt: 显示 ISO 选择的 UTM 配置界面
---
::

确保启用"Install Drivers or SPICE guest tools"。这对于确保虚拟机和原生设备之间的稳定性非常重要。

#### 存储

默认存储分配为 64 GB，适合大多数用户。如果需要，以后可以调整，然后点击 **Continue**。

#### 共享目录

可选择一个文件夹在 Mac 和虚拟机之间共享。

点击 **Browse** 并选择要共享的文件夹。否则，点击 **Continue**。

接下来查看配置摘要，输入虚拟机的名称，然后点击 **Save**。

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/complete-setup.webp
alt: 完成的 UTM 配置
---
::

您的新虚拟机将出现在 UTM 的侧边栏中。点击播放按钮启动虚拟机！

## Windows 安装

启动虚拟机时，系统会提示您"Press Any Key to continue"。按任意键后将开始 Windows 安装过程。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-cdboot.webp
alt: UTM 设置按任意键从 ISO 文件启动
---
::

1. 选择您的语言设置，然后点击 **Next**。
2. 选择您的键盘设置，然后点击 **Next**。
3. 对于产品密钥，选择 **I don't have a product key**。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-productkey.webp
alt: 显示产品密钥选择的 Windows 设置
---
::

4. 选择要安装的 Windows 版本（Pro、Home、Home Single Language），然后点击 **Next**。
5. 阅读许可协议，然后点击 **Accept**。
6. 选择安装 Windows 的默认位置，然后点击 **Next**。
（这可能会跳过并直接进入安装）。

Windows 现在将开始安装。这需要一些时间。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-updates.webp
alt: 从 ISO 安装 Windows 设置
---
::

此过程结束后，虚拟机将重新启动。请注意，您可能会收到相同的"Press Any Key or CD to enter startup"提示。这是因为 ISO 仍然连接着。它也可能正常启动，但删除此 ISO 文件很重要。

1. 在 UTM 任务栏中选择光盘图标。
2. 将鼠标悬停在第一个 ISO 选项上并选择 **Eject**。

这可以防止虚拟机重新启动进入安装程序而不是您的新 Windows 磁盘。

## Windows 设置

1. 选择您的国家/地区，然后按 **Yes** 继续。
2. 选择您的键盘输入，然后按 **Yes** 继续。
3. 如果需要，添加第二个键盘；否则，按 **Skip** 继续。
4. Windows 将检查更新并可能重新启动虚拟机。

如果 Windows 要求互联网连接才能继续但找不到连接，请使用下面"问题"部分中提到的 Shift + F10 绕过方法，以继续进行有限的设置。

5. 输入名称，然后按 **Next**。
6. 输入密码或将其留空，然后按 **Next**。
7. Windows 可能会再次检查更新或开始下载更新；这可能需要几分钟，请耐心等待。

您可能获得比平时更多更新的原因是它会自动尝试推送最新版本的 Windows 安装程序。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-setup-updates.webp
alt: 显示正在下载更新的 Windows 设置
---
::

之后，您将进入 Windows 11。下一步是安装 Spice Guest Tools。

## Spice Guest Tools

这将安装用于网络、显示缩放和图形加速的基本驱动程序。
虚拟机启动后，通常会弹出一个窗口要求设置 UTM Guest Tools。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest.webp
alt: Spice Guest Tools 设置的默认窗口
---
::

1. 选择 **Next**。
2. 同意许可协议并按 **Next**。

这将安装 Spice Guest Tools。机器需要重新启动才能完成安装。请注意，如果收到"Display output is not active"消息，您可能需要手动重新启动虚拟机。

如果您没有看到 Spice Guest Tools 的弹出窗口，可以手动运行它。

1. 打开文件资源管理器。
2. 接下来点击侧边栏中的 **This PC**
3. 点击名为"UTM Guest Tools"的 CD 驱动器。
4. 找到文件 **utm-guest-tools-0.1.271.exe** 并打开它。
5. 在此过程中，安装驱动程序时屏幕可能会闪烁

安装完成后，网络连接将立即工作，分辨率将开始缩放。安装后最好重新启动 Windows。

重新启动后，打开文件资源管理器并导航回 CD 驱动器，右键单击并选择弹出，因为我们不再需要 Spice guest tools。如果您看到另一个 CD 驱动器，这是我们用来安装 Windows 的 ISO 文件，如果您还没有弹出，也请弹出它。

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/spice-drivers.webp
alt: 显示打开 CD Rom 的 Windows 文件资源管理器
---
::

您可以通过访问控制面板来验证 Spice Guest Tools 是否已安装。在 **Uninstall a program** 下，Guest Tools 将列出如下：

- UTM Guest Tools 0.1.271
- Spice webdavd ARM64 2.5.0

## 附加说明

要增强可用性，请调整显示设置以获得更好的分辨率。

#### 分辨率

关闭虚拟机。在 UTM 中选择电源按钮或在 Windows 中关闭。

1. 右键单击虚拟机并选择 **Edit**。
2. 选择 **Display**。
3. 勾选 **Retina Mode** 以启用高分辨率缩放，然后点击 **Save**。
4. 启动虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-settings.webp
alt: 用于启用 Retina Mode 的 UTM 显示设置
---
::

虚拟机现在将使用您 Mac 的原生分辨率。

#### Windows 更新

修复分辨率后，请确保更新 Windows。可能会有许多可用更新。

1. 打开设置并选择 **Windows Update**。
2. 点击 **Check for updates**。
3. 点击 **Download and install updates**。
4. 重新启动虚拟机。

#### 弹出 ISO 和 Spice Guest Tools

确保从虚拟机中弹出 ISO 文件和 Spice Guest Tools CD。

1. 右键单击 UTM 任务栏中的光盘图标。
2. 将鼠标悬停在选项上并选择 **Eject**。

## 问题

#### Display Output not Active

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-bug.webp
alt: 显示 Display output is not active 消息的窗口
---
::

在安装 Spice Guest Tools 或启动虚拟机后，可能会出现几秒钟的"Display output is not active"消息。
如果长时间停留在此屏幕上，请重新启动虚拟机。

1. 在 UTM 任务栏中选择 **Reset**（三角形）
2. 点击 **OK** 重置虚拟机

#### 绕过"Let's connect you to a network"

在 Windows 设置期间，可能会要求您连接到互联网以获取最新更新。

1. 按 **Shift + F10**（注意：您可能需要在 Mac 键盘上按住 Fn 键）
2. 在命令提示符窗口中，输入以下内容并按 Enter：
```
OOBE\BYPASSNRO
```

虚拟机应该会重新启动，现在您将看到"I don't have internet"选项，然后是"Continue with limited setup"。
注意：这是绕过设置在线 Microsoft 账户的旧方法，可能不再有效。请尝试下面的解决方案。

#### 创建本地账户（绕过 Microsoft 登录）

最近的 Windows 构建（25H2 及更高版本）使跳过 Microsoft 账户登录变得更加困难。如果您更喜欢本地离线账户，请使用此绕过方法：

1. 按 **Shift + F10**（或 **Fn Shift + F10**）打开命令提示符
2. 输入以下命令：
```
start ms-cxh:localonly
```

3. 这将强制 Windows 允许创建本地用户名和密码。
4. 输入用户名、密码和安全问题。

在 Windows 11 ARM（24H2 构建 26100.4349）、UTM 4.7.5、macOS 15.7.3 上测试。

**注意：** 这些步骤在未来可能会更改。以下是 David Bombal 关于绕过在线账户要求的视频演示。

::youtube
---
video-id: TVJ3gGqkMak
title: "Skip Microsoft Login: One Command to a Local Account"
---
::

#### 结论

就是这样！您现在已在 Apple Silicon 上原生运行 Windows 11。此虚拟机设置为您提供灵活性和稳定的性能。

如果您觉得本指南有帮助，请考虑查看我们的其他虚拟化技巧或与其他 Mac/Windows 爱好者分享！
