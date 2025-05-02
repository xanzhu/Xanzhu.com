---
title: "Ubuntu 24.10 on Apple Silicon with UTM"
description: "Learn how to set up Ubuntu 24.10 on Apple Silicon using UTM, a free and open-source virtualization tool."
date: "2025-04-11"
tag: "Guide"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "Ubuntu 24.10 running on Apple Silicon with UTM"
---

Ubuntu now offers a native ARM desktop build — perfect for Apple Silicon users looking to explore Linux, develop, or virtualize efficiently. In this guide, we'll walk through setting up Ubuntu 24.10 (Oracular Oriole) in a virtual machine using UTM, a free and open-source virtualization tool tailored for macOS.

Our <PageLink title="previous article" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1">previous article</PageLink> detailed setting up Ubuntu Server with a desktop environment added. This updated guide simplifies the process using the dedicated ARM desktop build recently released.

## Requirements

- UTM version 4.6.5
- Minimum 30 GB free storage
- Ubuntu 24.10 ISO (**ARM64**)
- macOS 15
- Apple Silicon device (M1-M4 series)

## UTM Download

Download UTM version 4.6.5 from the <PageLink title="UTM Github releases page" url="https://github.com/utmapp/UTM/releases"></PageLink>. Previous 4.x.x versions should also work.

Automatic updates are available for UTM via the <PageLink title="App Store Version" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"></PageLink> though this is paid. Alternatively, use the GitHub version and manually update as needed.

Drag UTM to your Applications folder and verify it opens correctly.

## Ubuntu ISO Download

Next, download the Ubuntu 24.10 **ARM64** ISO, approximately 3.54 GB, from the <PageLink title="Ubuntu website" url="https://cdimage.ubuntu.com/releases/oracular/release/"></PageLink>.

This is Ubuntu's first ARM64 desktop build, with LTS variants planned for the future. As a pre-release version, some features may be experimental.

With the ISO downloaded, open UTM to create the virtual machine.

## UTM Configuration

In UTM, click the **+** icon to start creating a new virtual machine.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp" alt="UTM application interface showing the main window with a plus icon to create a new virtual machine"></Media>

### Virtualize or Emulate

UTM offers two modes:

- **Virtualize**
- **Emulate**

| Mode       | Pros                       | Cons                                 |
| ---------- | -------------------------- | ------------------------------------ |
| Virtualize | Faster, native ARM support | Can't run x86 or non ARM processors  |
| Emulate    | Supports non-ARM systems   | Slower, potential performance issues |

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-mode.webp" alt="UTM Configuration Mode selection between Virtualise and Emulate"></Media>

Select **Virtualize** to leverage Apple Silicon's efficiency.

Emulation is slower but supports older systems. Pre-built VMs are also available via the <PageLink title="UTM Gallery" url="https://mac.getutm.app/gallery/"></PageLink>.

### Operating System

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-os.webp" alt="UTM Configuration OS selection between Linux and macOS"></Media>

1. Choose **Linux**.
2. Enable **Use Apple Virtualization** for native performance.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt.webp" alt="UTM Configuration for Apple Virtualization"></Media>

Apple Virtualization optimizes performance on macOS 15, though older macOS versions may work with reduced stability. Alternatively, uncheck **Use Apple Virtualization** to use QEMU for broader compatibility:

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu.webp" alt="UTM Configuration for QEMU"></Media>

Click **Browse**, select the Ubuntu ISO, and click **Continue**.

### Hardware Settings

Set RAM to half your device's available memory (default: 4096 MB or 4 GB). Leave CPU cores at the default for automatic management. Click **Continue**.

### Storage

The default storage allocation is 64 GB, which is suitable for most users. Adjust later if needed, then click **Continue**.

### Shared Directory

Optionally, select a folder to share between your Mac and the VM by clicking **Browse**. Otherwise, click **Continue**.

Review the configuration summary, name the VM, and click **Save**.

Your new VM appears in UTM's sidebar. Click the play button to start it.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-complete-avirt.webp" alt="UTM Application completed Virtual Machine"></Media>

## Ubuntu Installation

The Ubuntu setup begins automatically.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-linux-install.webp" alt="Ubuntu Virtual Machine Installation selection"></Media>

Select **Try or Install Ubuntu**.

The installer will connect and download necessary files. Display scaling may vary slightly with Apple Virtualization.

You'll arrive at the Ubuntu welcome screen:

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-welcome.webp" alt="Ubuntu welcome screen after booting"></Media>

1. Choose your language and click **Next**.
2. Select your keyboard layout and click **Next**.
3. Connect to the internet, ensuring **Use Wired Connection** is selected to share your Mac's Wi-Fi. Click **Next**.
4. Choose **Install Ubuntu** and click **Next**.
5. Select **Interactive installation** and click **Next**.
6. Pick **Default selection** for apps and click **Next**.
7. Optionally, enable proprietary software installation (can be added later). Click **Next**.
8. Choose **Erase disk and install Ubuntu** and click **Next**.
9. Enter your name, computer name, username, and a password (e.g., “test”). Confirm the password and click **Next**.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp" alt="Ubuntu account creation showing sample values"></Media>

10. Select your time zone on the map and click **Next**.
11. Review your choices and click **Install**.

The installation will copy and configure files, which may take some time. When prompted, click **Restart Now**.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-restart.webp" alt="Ubuntu prompting user to restart"></Media>

- **Apple Virtualization**: The VM restarts automatically.
- **QEMU**: Eject the ISO manually by clicking the disc icon, selecting the ISO, and choosing **Eject**. Press **Enter** to reboot.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp" alt="Ubuntu prompting user to eject ISO to continue"></Media>

The VM now boots into Ubuntu. If using QEMU, a “Display output is not active” message may appear briefly. Wait 1-2 minutes for the desktop to load.

## Additional Notes

To enhance usability, adjust the display settings for better resolution.

### Resolution

#### Apple Virtualization

1. Stop the VM if running (right-click and select **Stop**).
2. Right-click the VM, select **Edit**, and go to **Display**.
3. Enable **HiDPI (Retina)** and keep dynamic resolution enabled.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp" alt="UTM Configuration for Apple Virtualization display settings"></Media>

#### QEMU

1. Stop the VM, edit it, and navigate to **Display**.
2. Check **Retina Mode** to enable high-resolution scaling, click **Save**.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp" alt="UTM Configuration for QEMU display settings"></Media>

3. Boot the VM. The UI may appear small.
4. In Ubuntu, open **Settings**, select **Display**, and set **Scale** to 200%.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-display200.webp" alt="Ubuntu display settings for high-resolution scaling"></Media>

The desktop now uses native macOS resolution for clarity.

Finally, update Ubuntu's packages. Open the menu, select **Software Updater**, and install available updates to ensure optimal performance.

### Issues (QEMU)

A “Display output is not active” message may appear during QEMU boot. Wait 1-2 minutes for the desktop to load. The <PageLink title="Community discussion" url="https://github.com/utmapp/UTM/discussions/5555"></PageLink> suggests workarounds that may resolve this for your setup.

<Media source="https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp" alt="UTM QEMU prompting user to wait for desktop to load known bug"></Media>

### Conclusion

That's it! You've now got Ubuntu 24.10 running natively on Apple Silicon with full GUI support. Whether you're testing code, learning Linux, or just exploring, this VM setup gives you flexibility with solid performance.

If you found this guide helpful, consider checking out our other virtualization tips — or share this with a fellow Mac/Linux enthusiast!
