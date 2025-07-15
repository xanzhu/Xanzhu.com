---
title: "在 Apple Silicon 上使用 UTM 运行 Ubuntu 25.04"
description: "了解如何使用免费的开源虚拟化工具 UTM，在 Apple Silicon 上安装 Ubuntu 25.04。"
date: "2025-04-11"
updated: "2025-07-15"
tag: "Guide"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "在 Apple Silicon 上通过 UTM 运行的 Ubuntu 25.04"
---

::Alert{type="update" title="更新：Ubuntu 25.04 可用"}
更新（2025年7月15日）：本指南已根据 Ubuntu 25.04 审核并更新。
::

Ubuntu 现已提供原生 ARM 桌面版本，非常适合 Apple Silicon（即苹果 M 系列芯片）用户探索 Linux、进行开发或高效虚拟化。  
在本指南中，我们将通过适用于 macOS 的免费开源虚拟化工具 UTM，详细介绍如何在虚拟机中安装 Ubuntu 25.04（Plucky Puffin）。

我们的 :PageLink{title="上一篇文章" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"} 中介绍了如何为 Ubuntu Server 配置桌面环境。

## 系统需求

- UTM 版本 4.6.5
- 至少 30GB 可用存储空间
- Ubuntu 25.04 ISO (**ARM64**)
- macOS 15
- Apple Silicon 设备（M1-M4 系列）

## 下载 UTM

从 :PageLink{title="UTM GitHub 发布页面" url="https://github.com/utmapp/UTM/releases"} 下载 UTM 4.6.5 版本。  
旧版 4.x.x 也可以正常使用。

您也可以通过 :PageLink{title="App Store 版本" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"} 获取 UTM 的自动更新，但该版本是付费的。

将 UTM 拖动到 **应用程序** 文件夹中，并确认能够正常打开。

## 下载 Ubuntu ISO

然后，从 :PageLink{title="Ubuntu 官方网站" url="https://cdimage.ubuntu.com/releases/25.04/release/"} 下载约 3.82GB 的 Ubuntu 25.04 **ARM64** ISO 文件。

这是 Ubuntu 首个 ARM64 官方桌面版本，未来还计划推出 LTS 版本。  
作为预览版本，部分功能可能仍处于实验阶段。  
Ubuntu 25.04 的支持周期约为 9 个月。我们会根据 Ubuntu 新版本持续更新本指南。

下载完成后，打开 UTM，开始创建虚拟机。

## 配置 UTM

在 UTM 中，点击 **+** 图标开始创建新的虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: UTM 应用界面，显示用于创建新虚拟机的加号按钮
---
::

### 虚拟化 或 仿真

UTM 提供两种模式：

- **Virtualise（虚拟化）**
- **Emulate（仿真）**

| 模式       | 优点                      | 缺点                       |
| ---------- | ------------------------- | -------------------------- |
| Virtualise | 更快，支持 ARM 原生性能   | 无法运行 x86 或非 ARM 系统 |
| Emulate    | 支持非 ARM 系统           | 较慢，可能存在性能问题     |

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-mode.webp
alt: UTM 配置界面中的模式选择，虚拟化与仿真
---
::

建议选择 **Virtualise**，以发挥 Apple Silicon 的高效性能。

如果需要支持旧系统，可以选择 **Emulate**。  
UTM 还提供 :PageLink{title="UTM Gallery" url="https://mac.getutm.app/gallery/"} 可下载的预设虚拟机。

### 选择操作系统

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-os.webp
alt: UTM 配置界面中的操作系统选择，Linux 和 macOS
---
::

1. 选择 **Linux**。  
2. 启用 **Use Apple Virtualization** 以获得原生性能。

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-enable-apple-virt.webp
alt: UTM 中 Apple Virtualization 的设置界面
---
::

Apple Virtualization 在 macOS 15 中可获得最佳性能。  
若使用旧版本 macOS，可能会影响稳定性。  
为提高兼容性，您可以取消勾选 **Use Apple Virtualization**，改用 QEMU：

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-qemu.webp
alt: UTM 中 QEMU 配置界面
---
::

点击 **Browse**，选择下载好的 Ubuntu ISO，继续点击 **Continue**。

### 硬件设置

将内存设置为设备可用内存的一半（默认：4096MB 或 4GB）。  
CPU 核心数保持默认设置，以便自动管理。  
点击 **Continue**。

### 存储设置

默认分配 64GB 存储空间，适合大多数用户。  
可根据需求稍后调整，点击 **Continue**。

### 共享文件夹

可选操作，若需在 Mac 和虚拟机间共享文件夹，请点击 **Browse** 选择文件夹。  
否则，点击 **Continue**。

检查配置摘要，为虚拟机命名后，点击 **Save**。

新的虚拟机会显示在 UTM 侧边栏中，点击播放按钮启动虚拟机。

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-prerun.webp
alt: 完成配置后的 UTM 虚拟机界面
---
::

## 安装 Ubuntu

Ubuntu 安装过程将自动开始。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-linux-install.webp
alt: Ubuntu 虚拟机安装选项界面
---
::

在 GRUB 菜单中，选择 **Try or Install Ubuntu**。

安装器会自动联网并下载必要文件。  
使用 Apple Virtualization 时，显示比例可能会略有不同。

接着，您会看到 Ubuntu 欢迎界面：

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/welcome.webp
alt: 启动后显示的 Ubuntu 欢迎界面
---
::

1. 选择语言，点击 **Next**。  
2. 根据需要调整辅助功能，点击 **Next**。  
3. 选择键盘布局，点击 **Next**。  
4. 连接互联网，确保已选择 **Use Wired Connection** 以共享 Mac 的 Wi-Fi，点击 **Next**。  
5. 选择 **Install Ubuntu**，点击 **Next**。  
6. 选择 **Interactive installation**，点击 **Next**。  
7. 应用程序选择 **Default selection**，点击 **Next**。  
8. 可选择安装专有软件（此选项可后续添加），点击 **Next**。  
9. 选择 **Erase disk and install Ubuntu**，点击 **Next**。  
10. 是否加密文件系统（默认不加密），点击 **Next**。  
11. 输入您的姓名、计算机名、用户名及密码（如 “test”），确认密码后点击 **Next**。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: Ubuntu 账户创建示例界面
---
::

12. 在地图上选择您的时区，点击 **Next**。  
13. 核对所有选项后，点击 **Install**。

安装过程将复制并配置文件，可能需要一些时间。  
安装完成后，点击 **Restart Now**。

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/installer-restart.webp
alt: Ubuntu 提示用户重启的界面
---
::

- **Apple Virtualization**：虚拟机会自动重启。  
- **QEMU**：需手动点击光盘图标弹出 ISO，再按 **Enter** 重新启动。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: Ubuntu 提示用户弹出 ISO 的界面
---
::

虚拟机将启动进入 Ubuntu。  
若使用 QEMU，启动时可能短暂出现“Display output is not active”提示，耐心等待 1–2 分钟，桌面会正常加载。

加载完成后，您将看到如下界面：

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/ubuntu-welcome.webp
alt: Ubuntu 桌面欢迎界面
---
::

1. 点击 **Next** 继续。  
2. 是否共享数据帮助改进 Ubuntu，选择后点击 **Next**。  
3. 点击 **Finish** 结束设置。  

虚拟机现在可以使用了。  
接下来，我们优化显示比例。

## 其他说明

为了更好的使用体验，请调整显示设置以获得最佳分辨率。

### 分辨率调整

#### 使用 Apple Virtualization

1. 若虚拟机正在运行，请右键点击选择 **Stop** 停止。  
2. 右键点击虚拟机，选择 **Edit**，前往 **Display** 设置。  
3. 启用 **HiDPI (Retina)**，保持动态分辨率开启。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple Virtualization 显示设置界面
---
::

#### 使用 QEMU

1. 停止虚拟机，进入 **Edit > Display** 设置。  
2. 勾选 **Retina Mode** 启用高分辨率缩放，点击 **Save**。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 显示设置界面
---
::

3. 启动虚拟机，界面可能会较小。  
4. 在 Ubuntu 中打开 **设置 > 显示**，将 **缩放** 设置为 200%，点击 **应用**。

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/scale200.webp
alt: Ubuntu 显示设置调整界面
---
::

现在，桌面会以 macOS 原生分辨率呈现，效果更清晰。

最后，更新 Ubuntu 软件包。  
打开菜单，选择 **Software Updater**，安装可用更新，以确保最佳性能。

### QEMU 已知问题

使用 QEMU 时，启动过程中可能会显示“Display output is not active”提示。  
请等待 1–2 分钟，桌面会正常显示。  
社区的 :PageLink{title="讨论贴" url="https://github.com/utmapp/UTM/discussions/5555"} 中提供了可能的解决方案。

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: QEMU 启动时提示已知问题界面
---
::

### 系统升级

Ubuntu 24.10 已结束生命周期，不再受支持。  
Ubuntu 25.04 是最新的 ARM 版本，支持至 2026 年 1 月。

查看 :PageLink{title="更新日志" url="https://discourse.ubuntu.com/t/plucky-puffin-release-notes/48687"}

#### 24.10 到 25.04 的变更：
- 安装过程中新增辅助功能与加密选项  
- 最大显示缩放调整为 200%  

ARM 桌面版本将以 9 个月的发布周期继续更新，直到推出新的 LTS 版本。

### 结语

就是这样！  
您已经成功在 Apple Silicon 上原生运行 Ubuntu 25.04，并拥有完整的图形界面支持。  
无论是测试代码、学习 Linux 还是探索系统，这套虚拟机配置都能为您带来良好的性能与灵活的使用体验。

如果您觉得本指南有帮助，欢迎查看我们其他的虚拟化技巧——或者分享给其他 Mac/Linux 爱好者吧！
