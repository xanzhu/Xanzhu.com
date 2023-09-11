---
title: "Apple Silicon 虚拟机设置2023"
date: "2023-01-08"
tag: "指导"
img: "/images/blog/VM/vm1.png"
description: "了解如何使用 Parallels 或 UTM 在 Apple Silicon Mac 上设置虚拟机。 我们的指南涵盖安装、配置和运行您的第一个虚拟机。"
alt: "Apple Silicon 芯片组 M1"
toc: true
feature: true
ogLink: "https://source.unsplash.com/mP7aPSUm7aE"
---

如果您是一名开发人员或技术爱好者，您可能需要为项目或个人使用使用多个操作系统。 在本文中，我们将介绍使用 Parallels、付费虚拟化软件和名为 UTM 的免费开源解决方案设置流行操作系统（例如 Windows 和 Ubuntu）的过程。 无论您是初学者还是经验丰富的用户，本指南都将教您如何在 Apple Silicon Mac 上快速轻松地安装和设置每个环境。

您如何知道您的 Mac 是否运行在 Apple Silicon 上？

1. 点击苹果图标
2. 点击“关于本机”
3. 芯片会说“Apple M1”或类似的

## Parallels

<Media source="/images/blog/VM/Parallels.webp" credit="Parallels / Xanzhu" alt="Parallels 虚拟机徽标"></Media>

本机运行的付费虚拟化软件，本质上是所有您喜欢的操作系统的一键式安装。 它提供了很好的工具，并使整个过程尽可能顺利。

1. 访问 [Parallels.com](https://www.parallels.com/products/desktop/trial/){:target="\_blank"} 并下载免费试用版。
2. 安装后打开“Parallels Desktop”。
3. 现在选择您要安装的操作系统。

<Media source="/images/blog/VM/p-install.webp" alt="Parallels 安装向导"></Media>

请注意，在安装操作系统之前最好至少有 25-30 GB 的可用空间。

### Windows 11

从 2022 年开始，Windows 将在原生 ARM 版本上运行，只需单击 Windows 图标并点击安装即可。 Parallels 将为您完成剩下的工作。 安装过程将从下载操作系统开始，然后您将被引导到一个虚拟机中，您可以在其中开始根据自己的喜好进行调整和微调。

1. 选择 Windows 图标并选择继续
2. 下载 windows，需要一些时间
3. 下载完成后，虚拟机会自动启动。
4. 运行后系统会提示你重启虚拟机完成“Parallels Tools”的安装，按重启即可。
5. Windows 11 现在安装好了，桌面会有快捷方式或者直接打开“Parallels Desktop”运行虚拟机。

之后，最好开始将 Windows 更新到最新版本以获得最佳和安全的体验。

### Ubuntu 22.04

Ubuntu 遵循相同的过程，只需单击 Ubuntu 图标并选择安装，这将下载应用程序并直接引导您进入虚拟机。 启动时，系统会要求您设置密码，然后您需要安装 Parallels Tools，这需要重启虚拟机。

1. 选择 Ubuntu 图标，点击继续
2. 下载 Ubuntu，这需要一些时间。

<Media source="/images/blog/VM/u-download.webp" alt="Parallels ubuntu 安装向导"></Media>

3. 下载完成后，虚拟机会自动启动
4. 系统会提示您创建登录密码
5. 登录后会要求重启虚拟机安装“Parallels Tools”
6. 虚拟机重启后，重新登录，开始配置新的 Ubuntu 虚拟机。

It's always good practice to check for updates and ensure you're running the latest versions. This can help with performance and security issues.

## 其他

其他操作系统可供您安装，例如 Kali Linux、Fedora、Debian 或您的 ISO 文件，但有一些例外。

您如何管理或配置虚拟机？

1. 打开“Parallels Desktop”这可能会自动启动到你的虚拟机，关闭它即可
2. 右键单击 Parallels Desktop 应用程序并选择控制中心，您可以在其中添加/编辑或删除它们。

<Media source="/images/blog/VM/config.webp" alt="Parallels 虚拟机配置面板"></Media>

3. 要添加另一个虚拟机，请按加号图标并完成上述安装过程
4. 删除虚拟机 右键点击虚拟机，选择*Remove(Device Name)*，Device name 就是虚拟机的名字。
5. 配置虚拟机 右键单击它并选择配置，在这里您可以设置和调整您可能需要的设置。 例如名称、外部设备、打印机、互联网连接等。

## UTM

<Media source="/images/blog/VM/UTM.webp" credit="UTM / Xanzhu" alt="UTM 安装向导"></Media>

UTM 是一款免费工具，其功能与平行线相同，但您需要负责定制。
性能将不一致，需要根据您的系统进行调整。 如果您需要一个响应迅速的虚拟机而不用大惊小怪地配置软件的各个方面，这可能不是一个好的选择。

1. 下载[UTM](https://mac.getutm.app/){:target="\_blank"} 有 App store 版本但是这个是付费的，选择下载
2. 打开 UTM，选择“创建新的虚拟机”
3. 选择“虚拟化”

### Windows 11

Windows 可以通过多种不同的方式安装。
对于本指南，我们将使用 Windows Insider Preview 版本。 这需要一个内部帐户。
或者，您可以安装此处列出的版本：

4. 选择窗口
5. 访问从 [Microsoft](https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewarm64?wa=wsignin1.0) 下载最新的 Windows 11 ARM 文件{:target="\_blank"}
6. 按浏览并选择下载的 VHDX 文件，确保选择导入 VHDX

<Media source="/images/blog/VM/u-install.webp" alt="UTM 窗口的安装设置"></Media>

7. 按继续
8. 选择 RAM 的大小，一个好的规则是使用系统的一半，即：8GB 使用 4GB
9. 选择存储大小：建议至少设置 35GB 或保持默认选项
10. 共享目录，在这里你可以指定一个文件夹在虚拟机和你的 Mac 之间工作。 这可以稍后设置。
11. Summary 页面将显示所有已配置的设置，并允许您为虚拟机设置名称。
12. 按播放键第一次运行虚拟机，加载需要一些时间。

Now installing windows

1. 选择您的语言
2. 选择你的键盘
3. 选择一个网络，如果没有出现，请按 <b>SHIFT + F10</b> 并按是，然后在命令提示符下输入以下内容：

```CODE
 OOBE\BYPASSNRO
```

4. 这将重启虚拟机，继续完成设置过程，点击网络部分后，选择“我没有互联网”
5. 继续执行设置名称、密码和安全问题的步骤。
6. 开机进入 Windows 11 后，打开文件资源管理器，选择光驱，双击安装 spice-guest-tools

<Media source="/images/blog/VM/u-spice.webp" alt="文件资源管理器 Windows 11"></Media>

7. 选择重新启动，您现在拥有一个正常工作的 Windows 11 虚拟机。

建议遵循 UTM 提供的官方方法并使用 UUP 下载，以便将来和持续支持。

本文将在未来使用该方法进行更新。

### Ubuntu 22.04

在本指南中安装 Ubuntu 可能是一个漫长的过程，我们需要先安装服务器版本，然后再转到桌面版本。

1. 打开 UTM，选择“创建新的虚拟机”
2. 选择“虚拟化”
3. 选择 Linux
4. 下载[Linux](https://ubuntu.com/download/server/arm){:target="\_blank"}，打开 UTM，按浏览
5. 按浏览并选择下载的 Ubuntu Server ISO 文件
6. 选择继续
7. 选择要使用的内存量 (RAM)
8. 选择存储量保留为自动管理的默认值。
9. 共享目录，添加操作系统之间的共享文件夹。
10. Summary 会显示所有的配置选项
11. 按播放键运行虚拟机
12. 选择第一个选项“Try or install Ubuntu”，加载需要一些时间。
13. 选择您的语言并按 ENTER
14. 选择键盘布局并按 ENTER
15. 按 ENTER 选择安装类型
16. 网络连接按 ENTER
17. 配置代理按 ENTER
18. 配置 Ubuntu 存档镜像按 ENTER
19. 引导存储。 按向下箭头直到突出显示完成，然后按 ENTER
20. 存储配置.. 按 ENTER
21. 确认 Destructive Action DOWN_ARROW 然后按 ENTER 继续
22. 配置文件设置.. 设置您的姓名和密码，然后按向下箭头，然后按 ENTER
23. SSH 设置.. 按向下箭头并按 ENTER
24. 精选服务器快照.. 按向下箭头键并回车继续
25. Install 现在会安装

<Media source="/images/blog/VM/u-linux.webp" alt="Linux服务器安装显示"></Media>

26. 完成后按向下箭头突出显示 Reboot Now 并按 ENTER
27. 屏幕变黑后，等待几分钟，然后选择顶部的光盘图标，会弹出 ISO 文件。
28. 现在通过按三角形或关闭电源并再次打开来重新启动虚拟机。
29. 重新启动并登录后，您就有了一个工作的 Linux 服务器。 一切都将基于命令行。
30. 要安装桌面，请登录并键入以下命令：

更新包：

```
sudo apt update
```

安装桌面需要一些时间...

```
sudo apt install ubuntu-desktop
```

重启虚拟机：

```
sudo reboot
```

31. 重新启动后，登录并瞧瞧！

### 其他

UTM 提供范围广泛的[预构建虚拟机](https://mac.getutm.app/gallery/){:target="\_blank"}，涵盖所有类型的操作系统。
这适用于“仿真”选项。 很多选项，完全免费使用。

## 未来的解决方案

虽然这是两个流行的选项，也是我个人使用过的选项。 随着 ARM 越来越多地被 Microsoft 和其他竞争对手采用，将会出现更多的工具和软件。 Linux 目前正在采取奇妙的举措，让 Apple Silicon 的硬件在本地工作，并能够利用芯片组的所有方面作为裸机解决方案。

### Asahi Linux

[Asashi Linux](https://asahilinux.org/){:target="\_blank"} 为将来安装基于 Linux 的操作系统奠定基础，最终将提供流畅的裸机体验并结束对虚拟机的依赖。
