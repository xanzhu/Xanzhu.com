---
title: "在配备 UTM 的 Apple 芯片上安装 Ubuntu 24.10"
description: "了解如何使用免费开源虚拟化工具 UTM 在 Apple 芯片上设置 Ubuntu 24.10。"
date: "2025-04-11"
tag: "指南"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "在搭载 UTM 的 Apple 芯片上运行 Ubuntu 24.10"
---

Ubuntu 现在提供了一个原生的 ARM 桌面构建版本——非常适合希望探索 Linux、进行开发或高效虚拟化的 Apple 芯片用户。在本指南中，我们将逐步介绍如何使用 UTM（一款专为 macOS 量身定制的免费开源虚拟化工具）在虚拟机中设置 Ubuntu 24.10 (Oracular Oriole)。

我们之前的 :PageLink{title="上一篇文章" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"} 详细介绍了如何设置添加了桌面环境的 Ubuntu Server。这个更新后的指南使用最近发布的专用 ARM 桌面构建版本简化了该过程。

## 要求

- UTM 版本 4.6.5
- 至少 30 GB 的可用存储空间
- Ubuntu 24.10 ISO (**ARM64**)
- macOS 15
- Apple 芯片设备（M1-M4 系列）

## UTM 下载

从 :PageLink{title="UTM Github 发布页面" url="https://github.com/utmapp/UTM/releases"} 下载 UTM 4.6.5 版本。之前的 4.x.x 版本也应该可以工作。

UTM 可以通过 :PageLink{title="App Store 版本" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"} 自动更新，但这需要付费。或者，您可以使用 GitHub 版本并根据需要手动更新。

将 UTM 拖到您的“应用程序”文件夹，并验证它是否能正确打开。

## Ubuntu ISO 下载

接下来，从 :PageLink{title="Ubuntu 网站" url="https://cdimage.ubuntu.com/releases/oracular/release/"} 下载 Ubuntu 24.10 **ARM64** ISO，大约 3.54 GB。

这是 Ubuntu 的第一个 ARM64 桌面构建版本，未来计划推出 LTS 变体。作为一个预发布版本，某些功能可能处于实验阶段。

下载 ISO 后，打开 UTM 以创建虚拟机。

## UTM 配置

在 UTM 中，单击 **+** 图标开始创建新的虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: UTM 应用程序界面，显示带有用于创建新虚拟机的加号图标的主窗口
---
::

### 虚拟化或模拟

UTM 提供两种模式：

- **虚拟化**
- **模拟**

| 模式   | 优点                | 缺点                         |
| ------ | ------------------- | ---------------------------- |
| 虚拟化 | 更快，原生 ARM 支持 | 无法运行 x86 或非 ARM 处理器 |
| 模拟   | 支持非 ARM 系统     | 更慢，可能存在性能问题       |

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-mode.webp
alt: 在“虚拟化”和“模拟”之间选择 UTM 配置模式
---
::

选择 **虚拟化** 以利用 Apple 芯片的效率。

模拟速度较慢，但支持旧系统。也可以通过 :PageLink{title="UTM 库" url="https://mac.getutm.app/gallery/"} 获取预构建的虚拟机。

### 操作系统

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-os.webp
alt: 在 Linux 和 macOS 之间选择 UTM 配置操作系统
---
::

1. 选择 **Linux**。
2. 启用 **使用 Apple 虚拟化** 以获得原生性能。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt.webp
alt: Apple 虚拟化的 UTM 配置
---
::

Apple 虚拟化优化了 macOS 15 上的性能，尽管较旧的 macOS 版本可能也能工作，但稳定性会降低。或者，取消选中 **使用 Apple 虚拟化** 以使用 QEMU 获得更广泛的兼容性：

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu.webp
alt: QEMU 的 UTM 配置
---
::

单击 **浏览**，选择 Ubuntu ISO，然后单击 **继续**。

### 硬件设置

将 RAM 设置为您设备可用内存的一半（默认值：4096 MB 或 4 GB）。将 CPU 核心数保留为默认值以进行自动管理。单击 **继续**。

### 存储

默认存储分配为 64 GB，这对于大多数用户来说是足够的。如果需要，稍后可以调整，然后单击 **继续**。

### 共享目录

（可选）单击 **浏览** 选择一个文件夹，以便在您的 Mac 和虚拟机之间共享。否则，单击 **继续**。

查看配置摘要，为虚拟机命名，然后单击 **保存**。

您的新虚拟机将出现在 UTM 的侧边栏中。单击播放按钮启动它。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-complete-avirt.webp
alt: UTM 应用程序已完成的虚拟机
---
::

## Ubuntu 安装

Ubuntu 安装将自动开始。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-linux-install.webp
alt: Ubuntu 虚拟机安装选择
---
::

选择 **Try or Install Ubuntu**（试用或安装 Ubuntu）。

安装程序将连接并下载必要的文件。使用 Apple 虚拟化时，显示缩放比例可能会略有不同。

您将看到 Ubuntu 欢迎屏幕：

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-welcome.webp
alt: 启动后 Ubuntu 欢迎屏幕
---
::

1. 选择您的语言，然后单击 **Next**（下一步）。
2. 选择您的键盘布局，然后单击 **Next**（下一步）。
3. 连接到互联网，确保选中 **Use Wired Connection**（使用有线连接）以共享您 Mac 的 Wi-Fi。单击 **Next**（下一步）。
4. 选择 **Install Ubuntu**（安装 Ubuntu），然后单击 **Next**（下一步）。
5. 选择 **Interactive installation**（交互式安装），然后单击 **Next**（下一步）。
6. 为应用程序选择 **Default selection**（默认选择），然后单击 **Next**（下一步）。
7. （可选）启用专有软件安装（稍后可以添加）。单击 **Next**（下一步）。
8. 选择 **Erase disk and install Ubuntu**（擦除磁盘并安装 Ubuntu），然后单击 **Next**（下一步）。
9. 输入您的姓名、计算机名称、用户名和密码（例如，“test”）。确认密码，然后单击 **Next**（下一步）。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: 显示示例值的 Ubuntu 帐户创建
---
::

10. 在地图上选择您的时区，然后单击 **Next**（下一步）。
11. 检查您的选择，然后单击 **Install**（安装）。

安装程序将复制和配置文件，这可能需要一些时间。出现提示时，单击 **Restart Now**（立即重启）。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-restart.webp
alt: Ubuntu 提示用户重新启动
---
::

- **Apple 虚拟化**：虚拟机将自动重启。
- **QEMU**：通过单击光盘图标，选择 ISO，然后选择 **Eject**（弹出），手动弹出 ISO。按 **Enter** 键重新启动。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: Ubuntu 提示用户弹出 ISO 以继续
---
::

现在，虚拟机将启动进入 Ubuntu。如果使用 QEMU，可能会短暂出现“Display output is not active”（显示输出未激活）的消息。等待 1-2 分钟，直到桌面加载完毕。

## 附加说明

为了提高可用性，请调整显示设置以获得更好的分辨率。

### 分辨率

#### Apple 虚拟化

1. 如果虚拟机正在运行，请停止它（右键单击并选择 **Stop**（停止））。
2. 右键单击虚拟机，选择 **Edit**（编辑），然后转到 **Display**（显示）。
3. 启用 **HiDPI (Retina)** 并保持启用动态分辨率。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple 虚拟化的 UTM 配置显示设置
---
::

#### QEMU

1. 停止虚拟机，编辑它，然后导航到 **Display**（显示）。
2. 选中 **Retina Mode**（Retina 模式）以启用高分辨率缩放，然后单击 **Save**（保存）。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 的 UTM 配置显示设置
---
::

3. 启动虚拟机。用户界面可能会显得很小。
4. 在 Ubuntu 中，打开 **Settings**（设置），选择 **Display**（显示），然后将 **Scale**（缩放）设置为 200%。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-display200.webp
alt: 高分辨率缩放的 Ubuntu 显示设置
---
::

现在，桌面使用原生的 macOS 分辨率以获得清晰度。

最后，更新 Ubuntu 的软件包。打开菜单，选择 **Software Updater**（软件更新器），然后安装可用的更新以确保最佳性能。

### 问题 (QEMU)

在 QEMU 启动期间，可能会出现“Display output is not active”（显示输出未激活）的消息。等待 1-2 分钟，直到桌面加载完毕 :PageLink{title="社区讨论" url="https://github.com/utmapp/UTM/discussions/5555"} 提供了可能解决您设置中此问题的变通方法。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: UTM QEMU 提示用户等待桌面加载（已知错误）
---
::

### 结论

就这样！您现在已经在 Apple 芯片上原生运行了具有完整 GUI 支持的 Ubuntu 24.10。无论您是测试代码、学习 Linux 还是仅仅进行探索，此虚拟机设置都能为您提供具有可靠性能的灵活性。

如果您觉得本指南有帮助，请考虑查看我们的其他虚拟化技巧——或者与您的 Mac/Linux 爱好者朋友分享！
