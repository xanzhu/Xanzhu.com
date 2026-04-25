---
title: "在 Apple Silicon 上运行 Ubuntu 26.04 LTS，通过 UTM 进行管理"
description: "了解如何使用免费开源虚拟化工具 UTM 在 Apple Silicon 上设置 Ubuntu 26.04。"
date: "2026-04-25"
updated: "2026-04-25"
tag: "指南"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "运行在 Apple Silicon 上的 Ubuntu 26.04 LTS，带有 UTM 功能"
---

Ubuntu 现在提供原生 ARM 桌面版本！对于想要探索 Linux、进行开发或高效虚拟化的 Apple Silicon 用户来说，这堪称完美之选。在本指南中，我们将逐步介绍如何使用专为 macOS 定制的免费开源工具 UTM 在虚拟机中安装 Ubuntu 26.04 (Resolute Raccoon) LTS。

关于如何设置带有桌面环境的 Ubuntu Server，可以参考我们的 :PageLink{title="上一篇文章" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"}。

::ArticleUpdates
- **2025年7月15日** - 指南已更新，支持Ubuntu 25.04。
- **2026年2月3日** - **年度更新**：已验证并更新所有步骤，支持Ubuntu 25.10。
- **2026年4月25日** - 现已支持Ubuntu 26.04 LTS。
::

---

## 系统要求

* **UTM**: 版本 4.7.5 或更高。
* **存储空间**: 至少 30 GB 剩余空间。
* **ISO**: Ubuntu 26.04 LTS 桌面版 (**ARM64**)。
* **硬件**: Apple Silicon (M1, M2, M3, M4 或 M5 系列芯片)。

## 下载 UTM

从 :PageLink{title="UTM GitHub 发布页面" url="https://github.com/utmapp/UTM/releases"} 下载 **UTM 版本 4.7.5**。

GitHub 版本可免费下载。另外 :PageLink{title="Mac App Store" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817?mt=12"}  版本（付费）支持自动更新并可帮助支持开发者。

将 UTM 拖入你的 **应用程序 (Applications)** 文件夹并运行。

## 下载 Ubuntu ISO

从 :PageLink{title="Ubuntu website" url="https://ubuntu.com/download/desktop"} 下载 **Ubuntu 26.04 LTS ARM64 ISO**（约 4.16 GB）。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/ubuntu-download-lts.webp
alt: 展示 ARM 下载选项的 Ubuntu 官网
---
::

* **Ubuntu 26.04 (Resolute Raccoon)** 是当前的长期服务版本 (LTS)，也是首个官方 ARM 桌面版。发布日期为 2026 年 4 月。

本指南将随着 Ubuntu 后续版本的更新而持续更新。某些功能或错误可能会在后续版本中得到修复，我们将尽力记录潜在问题及其解决方法。

---

## UTM 配置

打开 UTM，点击 **+ (加号)** 图标开始创建新的虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: UTM 应用程序界面，显示带有用于创建新虚拟机的加号图标的主窗口
---
::

### 虚拟化 (Virtualise) 或 模拟 (Emulate)

UTM 提供两种模式：

| 模式 | 优点 | 缺点 |
| ---------- | -------------------------- | ------------------------------------ |
| 虚拟化 (Virtualise) | 速度更快，支持原生 ARM | 不支持 x86 (Intel/AMD) 架构。 |
| 模拟 (Emulate) | 支持非 ARM 系统 | 速度较慢，可能存在性能问题 |

选择 **虚拟化 (Virtualise)** 以充分发挥 Apple Silicon 的效率。

模拟模式较慢，但支持旧系统。你也可以通过 :PageLink{title="UTM 库" url="https://mac.getutm.app/gallery/"} 获取预构建的虚拟机。

### 操作系统

选择 **Linux**。

### 硬件设置

* **内存**: 分配至少 **4096 MB (4 GB)**。如果你的 Mac 有 16GB+ 内存，建议分配 **8GB (8192 MB)** 以获得更流畅的体验。
* **CPU**: 保持默认设置，由系统自动管理核心。

将内存设置为设备可用内存的一半（默认：4096 MB 或 4 GB）。保持 CPU 核心为默认设置，然后点击 **Continue**。

#### QEMU 与 Apple Virtualization

默认情况下，UTM 使用 **QEMU**，它灵活且兼容性广。
在 macOS 15+ 上，启用 **Apple Virtualization** 可以提高 Ubuntu 等 ARM 客户机的性能和响应速度。如果遇到兼容性问题，你可以随时切换回 QEMU。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-config-virt.webp
alt: Apple Virtualization 的 UTM 配置
---
::

* 勾选 **Use Apple Virtualization**（可选，建议 macOS 15+ 用户开启）。
* **Boot Image Type:** 选择 Boot from ISO。
* 点击 **Browse**，选择你下载的 Ubuntu ISO，然后点击 **Continue**。

#### 存储 (Storage)

推荐默认的 **64 GB**。Ubuntu 操作系统及基础应用约占用 20 GB，剩余空间用于存放你的文件。

根据需要进行调整，然后点击 **Continue**。

#### 共享目录 (Shared Directory)

（可选）点击 **Browse** 选择一个文件夹在 Mac 和虚拟机之间共享。否则，点击 **Continue**。

查看配置摘要，为虚拟机命名，然后点击 **Save**。

---

## 安装 Ubuntu

点击新虚拟机上的 **播放 (Play)** 按钮以启动安装程序。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-default.webp
alt: 已完成创建的 UTM 虚拟机
---
::

Ubuntu 设置会自动启动。请确保点击进入虚拟机窗口，以便捕获键盘输入。

**GRUB 菜单**：使用方向键选择 **Try or Install Ubuntu** 并按回车。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-grub-boot.webp
alt: Ubuntu 虚拟机安装选项选择
---
::

安装程序可能会在设置期间下载额外组件。使用 Apple Virtualization 时，显示缩放比例可能会略有不同。

进入 Ubuntu 欢迎界面：

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-welcome-setup.webp
alt: 启动后的 Ubuntu 欢迎界面
---
::

1. 选择语言，点击 **Next**。
2. 根据需要调整辅助功能选项，点击 **Next**。
3. 选择键盘布局，点击 **Next**。
4. 连接网络，确保勾选 **Use Wired Connection**（UTM 会共享 Mac 的 Wi-Fi 连接），点击 **Next**。
5. 选择 **Install Ubuntu**，点击 **Next**。
6. 选择 **Interactive installation**（交互式安装），点击 **Next**。
7. 应用选择中点击 **Default selection**（默认选择），点击 **Next**。
8. （可选）启用第三方软件安装（稍后也可添加），点击 **Next**。
9. 选择 **Erase disk and install Ubuntu**（擦除磁盘并安装），点击 **Next**。
10. 选择是否加密文件系统——暂时保持关闭——点击 **Next**。
11. 输入你的姓名、计算机名、用户名和密码。点击 **Next**。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: 显示示例值的 Ubuntu 账户创建页面
---
::

12. 在地图上选择时区，点击 **Next**。
13. 确认你的选择，点击 **Install**。

安装程序将复制并配置档案，这可能需要一些时间。完成后根据提示点击 **Restart Now**。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-restart-lts.webp
alt: Ubuntu 提示用户重启
---
::

#### 弹出 ISO 镜像

重启后，Ubuntu 可能会提示你移除安装介质。在 UTM 中弹出 ISO，然后按回车继续启动。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: 展示如何弹出 ISO 的视觉说明
---
::

* 点击 UTM 工具栏中的 **CD/DVD 图标**。
* 悬停在第二个选项上，选择 **Eject**（弹出）。
* 点击回到虚拟机窗口并按 **回车 (Enter)**。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-eject-prompt.webp
alt: Ubuntu 提示用户弹出 ISO 并按回车
---
::

使用 QEMU 时，可能会短暂出现“Display output is not active”消息。请等待 30 秒到 1 分钟，让桌面加载。

桌面加载后，你将看到以下内容：

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-welcome-lts.webp
alt: 显示欢迎界面的 Ubuntu 桌面
---
::

1. 选择 **Next** 继续。
2. 设置是否共享数据以帮助改进 Ubuntu，然后选择 **Next**。
3. 选择 **Finish**。

现在虚拟机已准备就绪。下一步是优化显示缩放。

## 分辨率设置

为了提升使用体验，请调整显示设置以获得更好的分辨率。

#### Apple Virtualization 用户

1. **关闭 (Shut down)** 虚拟机。如果在运行，请右键点击并选择 **Stop**。
2. 右键点击虚拟机，选择 **Edit**，进入 **Display**（显示）。
3. 启用 **HiDPI (Retina)** 并保持动态分辨率开启。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple Virtualization 显示设置的 UTM 配置
---
::

#### QEMU 用户

1. 停止虚拟机，编辑它，进入 **Display**。
2. 勾选 **Retina Mode** 以启用高分辨率缩放，点击 **Save**。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 显示设置的 UTM 配置
---
::

启动虚拟机。Ubuntu 的用户界面可能看起来很小。

1. 在 Ubuntu 中，打开 **Settings**（设置），选择 **Display**（显示）。
2. 将 **Scale**（缩放）设置为 **200%**，然后点击 **Apply**。

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-setting-display.webp
alt: 针对高分辨率缩放的 Ubuntu 显示设置
---
::

现在桌面看起来应该清晰且比例正常。

#### 软件更新

最后，更新 Ubuntu 软件包。打开菜单，选择 **Software Updater**（软件更新器），安装可用更新以确保最佳性能。

或者打开 **终端 (Terminal)** 并运行：

```bash
sudo apt update && sudo apt upgrade -y
```

这样做可以确保您拥有 26.04 版本的最新补丁。

**关于 26.04 LTS 的说明**：虽然长期支持 (LTS) 版本优先考虑稳定性，但基于 Apple Silicon 的运行是一个不断发展的目标。早期用户在最初几周内可能会遇到一些小问题。

## 常见问题

#### “Display output is not active”
这是 QEMU 在初始启动阶段的一个常见 Bug。如果屏幕黑屏超过 2 分钟，尝试轻微调整 UTM 窗口的大小；这通常会强制图形驱动“唤醒”。

:PageLink{title="GitHub 讨论" url="https://github.com/utmapp/UTM/discussions/5555"} 提供了针对此问题的一些解决方案。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: UTM QEMU 提示用户等待桌面加载的已知 Bug
---
::

#### 总结

搞定！现在你已经在 Apple Silicon 上原生运行了 Ubuntu 26.04 LTS。无论你是测试代码、学习 Linux，还是只是探索一番，这套虚拟机配置都能为你提供灵活的操作方式和稳定的性能。

如果你觉得本指南有用，不妨看看我们其他的虚拟化技巧——或者分享给其他 Mac/Linux 爱好者！
