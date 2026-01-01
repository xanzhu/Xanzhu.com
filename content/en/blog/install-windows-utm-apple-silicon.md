---
title: "How to Install Windows 11 on Apple Silicon with UTM"
description: "A complete, updated guide to running Windows 11 on M1–M5 Macs using UTM. Learn how to bypass Microsoft account requirements and fix common display issues."
date: "2026-01-01"
updated: "2026-01-01"
tag: "Guide"
toc: true
feature: true
img: "/images/blog/covers/utm-windows-m4.webp"
alt: "Windows 11 running on Apple Silicon with UTM"
---

Windows on Apple Silicon is becoming increasingly popular. In this guide, we'll walk through setting up Windows 11 in a virtual machine using UTM, a free and open-source virtualization tool tailored for macOS.

Our :PageLink{title="previous article" url="/blog/windows-on-apple-silicon"} covered the basics of setting up Windows on Apple Silicon.

::ArticleUpdates
- **2026-01-01** - **Annual Re-release**: Complete technical audit performed. Verified and updated all steps for Windows 11 (24H2/25H2), UTM 4.7.5, and added the new local account bypass methods.
::

For alternative solutions for installing Windows on Apple Silicon, note that these are paid solutions and may offer better performance at a price. Check out :PageLink{title="Parallels Desktop" url="https://www.parallels.com/products/desktop/"} or :PageLink{title="VMware Fusion" url="https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion"}.

UTM serves as a free, open-source virtualization tool for macOS, designed to be simple to use and offer native performance with customization.

## Requirements

- UTM version 4.7.5
- Minimum 30 GB free storage
- CrystalFetch version 2.2.0
- Apple Silicon Chipset (M1-M5 series)

## UTM Download

Download UTM version 4.7.5 from the :PageLink{title="UTM Github releases page" url="https://github.com/utmapp/UTM/releases"}. Previous 4.x.x versions should also work.

Automatic updates are available for UTM via the :PageLink{title="App Store Version" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"}, though this is a paid option. Alternatively, use the GitHub version and manually update as needed.

Drag UTM to your Applications folder and verify that it opens correctly.

## CrystalFetch Download

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch-appstore.webp
alt: Apple App Store showing CrystalFetch Application
---
::

Download CrystalFetch version 2.2.0 from the :PageLink{title="App Store" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"}. This option is free and provides automatic updates.

Alternatively, download the latest version from the :PageLink{title="CrystalFetch Github releases page" url="https://github.com/TuringSoftware/CrystalFetch/releases"}. This will require manual updates but may offer newer features before being officially released, as well as potential bug fixes.

Drag CrystalFetch to your Applications folder and verify that it opens correctly.

## Windows ISO Download

Download the Windows 11 **ARM64** ISO. You can download it either directly from the Microsoft website or use CrystalFetch.

For this installation, we'll use CrystalFetch as it provides a simplistic way to download the ISO. Installation via direct download is also possible, with the steps outlined below.

### CrystalFetch

1. Open CrystalFetch and select **Windows 11** from the dropdown menu.
2. Select the Build version. Opt for **latest** from the dropdown or choose a specific version.
3. Ensure **Apple Silicon** is selected.
4. Select your Language and Windows edition (**Windows 11**).
5. Select **Download** and accept the license agreement.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch.webp
alt: CrystalFetch application settings for Windows 11
---
::

The download will begin automatically. The ISO is approximately 5.27GB. After completion, you'll be asked to move the file to a destination folder to store this ISO file. We'll use the default Downloads folder. Click **Move**.

Now you can close CrystalFetch and get started on setting up UTM.

### Windows - Direct

To download directly from the Microsoft website, navigate to the :PageLink{title="Windows 11 ISO" url="https://www.microsoft.com/en-us/software-download/windows11arm64"}.

1. Select **Windows 11 (multi-edition ISO for Arm64)** from the dropdown menu.
2. Select **Download Now**
3. Select your **Product Language** and select **Confirm**.
4. Select **Download Now** to download the ISO.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-download.webp
alt: Windows 11 ISO download page
---
::

This will begin downloading the ISO. It's approximately 5.47GB and will be stored in the Downloads folder.

The difference between CrystalFetch and direct download is that CrystalFetch allows for selecting specific versions to be downloaded and provides a provides a more user-friendly download workflow. The available Windows versions will also be updated more frequently.

The main purpose of CrystalFetch is to provide a seamless experience when downloading the ISO for UTM. As a result, CrystalFetch is recommended for this guide. Both options have been tested and verified to work.

The direct version will always pull the latest Windows ARM build.

## UTM Configuration

In UTM, click the **+** icon to start creating a new virtual machine.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-app.webp
alt: UTM application interface showing the main window with a plus icon to create a new virtual machine
---
::

### Virtualise or Emulate

UTM offers two modes:

| Mode       | Pros                       | Cons                                 |
| ---------- | -------------------------- | ------------------------------------ |
| Virtualise | Faster, native ARM support | Does not support x86 (Intel/AMD) architecture.  |
| Emulate    | Supports non-ARM systems   | Slower, potential performance issues |

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-mode.webp
alt: UTM Configuration Mode selection between Virtualise and Emulate
---
::

Select **Virtualise** to leverage Apple Silicon's efficiency.

Emulation is slower but supports older systems. Pre-built VMs are also available via the :PageLink{title="UTM Gallery" url="https://mac.getutm.app/gallery/"}.

### Operating System

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/os-selection.webp
alt: UTM Configuration OS selection between Windows, Linux and macOS
---
::

### Hardware Settings

Set RAM to half of your device's available memory (default: 4096 MB or 4 GB). Leave CPU cores at the default for automatic management. Click **Continue**.

Next, we define the ISO file.

1. Choose **Windows**.
2. Click **Browse**, select the Windows ISO we just downloaded, and click **Continue**.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-iso.webp
alt: UTM configuration interface showing the ISO selection
---
::

Ensure "Install Drivers or SPICE guest tools" is enabled. This is very important to ensure stability between the virtual machine and your native device.

#### Storage

The default storage allocation is 64 GB, which is suitable for most users. Adjust it later if needed, then click **Continue**.

#### Shared Directory

Optionally, select a folder to share between your Mac and the VM.

Click **Browse** and select the folder to be shared. Otherwise, click **Continue**.

Next review the configuration summary, Enter a name for the virtual machine, and click **Save**.

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/complete-setup.webp
alt: Completed UTM configuration
---
::

Your new VM appears in UTM's sidebar. Click the play button to boot the virtual machine!

## Windows Installation

Booting up the virtual machine, you'll be prompted to "Press Any Key to continue." This will start the Windows installation process after pressing any key.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-cdboot.webp
alt: UTM Setup press any key to boot into ISO file
---
::

1. Select your Language Settings and click **Next**.
2. Select your Keyboard Settings and click **Next**.
3. For the Product Key, select **I don't have a product key**.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-productkey.webp
alt: Windows setup showing selection of product key
---
::

4. Select which version of Windows to install (Pro, Home, Home Single Language) then click **Next**.
5. Read the license agreement, then click **Accept**.
6. Select the default location to install Windows and click **Next**.
(This might skip and go directly into installing).

Windows will now begin installing. This will take some time.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-updates.webp
alt: Windows setup installing from ISO
---
::

After this process, the virtual machine will restart. Notice that you might get the same prompt to "Press Any Key or CD to enter startup." This is because the ISO is still attached. It may also just boot normally but it is important to remove this ISO file.

1. Select the Disc Icon in the UTM Taskbar.
2. Hover over the first ISO option and select **Eject**.

This prevents the VM from booting back into the installer instead of your new Windows disk.

## Windows Setup

1. Select your Country/Region and press **Yes** to continue.
2. Select your Keyboard Input and press **Yes** to continue.
3. Add a second keyboard if needed; otherwise, press **Skip** to continue.
4. Windows will check for updates and may restart the virtual machine.

If Windows asks for an internet connection to continue and none are found, use the Shift + F10 bypass mentioned in the Issues section below to proceed with a limited setup.

5. Enter a name and press **Next**.
6. Enter a password or leave it blank and press **Next**.
7. Windows may check for updates again or begin downloading them; please be patient as this can take several minutes.

The reason you may get more updates than usual is that it automatically tries to push for the latest version of the Windows Installer.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-setup-updates.webp
alt: Windows setup showing updates being downloaded
---
::

After this, you will be booted into Windows 11. The next step is to install the Spice Guest Tools.

## Spice Guest Tools

This installs essential drivers for networking, display scaling, and graphics acceleration.
After the virtual machine, a window usually pops up asking to setup UTM Guest Tools.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest.webp
alt: Default window for Spice Guest Tools Setup
---
::

1. Select **Next**.
2. Agree to the license agreement and press **Next**.

This will install Spice Guest Tools. The machine will need to restart to complete the installation. Notice that you may need to manually restart the virtual machine if you get a "Display output is not active" message.

If you don't see a popup window for Spice Guest Tools, you can manually run it.

1. Open File Explorer.
2. Next click on **This PC** found in the sidebar
3. Click on the CD Drive named "UTM Guest Tools".
4. Locate the file **utm-guest-tools-0.1.271.exe** and open it.
5. During this process the screen may flicker as drivers are being installed

After this has been installed, networking connections will work right away and the resolution will begin to scale. It's best to restart Windows after this has been installed.

Once restarted open up File Explorer and navigate back to the CD Drive and right click and select Eject as we no longer need Spice guest tools. If you see another CD Drive this is the ISO file we used to install Windows eject this as well if you haven't already.

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/spice-drivers.webp
alt: Showing Windows file explorer with the CD Rom open
---
::

You can verify that Spice Guest Tools have been installed by visiting the Control Panel.

Under **Uninstall a program**, Guest Tools will be listed as follows:

- UTM Guest Tools 0.1.271
- Spice webdavd ARM64 2.5.0

## Additional Notes

To enhance usability, adjust the display settings for better resolution.

#### Resolution

Shut down the virtual machine. Select the power button in UTM or simply shut down within Windows.

1. Right-click on the virtual machine and select **Edit**.
2. Select **Display**.
3. Check **Retina Mode** to enable high-resolution scaling, then click **Save**.
4. Start the virtual machine.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-settings.webp
alt: UTM display settings for enabling Retina Mode
---
::

The virtual machine will now use your Mac's native resolution.

#### Windows Updates

After fixing the resolution, ensure that you update Windows. There will likely be many updates available.

1. Open Settings and select **Windows Update**.
2. Click **Check for updates**.
3. Click **Download and install updates**.
4. Restart the virtual machine.

#### Eject ISO and Spice Guest Tools

Ensure that you eject the ISO file and the Spice Guest Tools CD from the virtual machine.

1. Right-click on the Disc icon in the UTM taskbar.
2. Hover over the options and select **Eject**.

## Issues

#### Display Output not Active

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-bug.webp
alt: Window showing the Display output is not active message
---
::

A “Display output is not active” message may appear for a few seconds after installing Spice Guest Tools or Starting the virtual machine.
If it's stuck on this screen for a while restart the virtual machine.

1. Select the **Reset** (Triangle) in the UTM Taskbar
2. Click **OK** to reset the Virtual Machine

#### Bypassing the "Let's connect you to a network"

During Windows setup it may ask you to connect to the internet to get the latest updates.

1. Press **Shift + F10** (Note: You may need to hold the Fn key on your Mac keyboard)
2. In the command prompt window, type the following and press Enter:

```
OOBE\BYPASSNRO
```

The virtual machine should reboot, and you will now see an option for "I don't have internet" followed by "Continue with limited setup."
Note: this was the previous method to bypass setting up an Online Microsoft Account and may no longer work. Try the solution below.

#### Creating Local Account (Bypassing Microsoft Login)

Recent Windows builds (25H2 and newer) have made it harder to skip the Microsoft Account login. If you prefer a local offline account, use this bypass:

1. Press **Shift + F10** (or **Fn Shift + F10**) to open the Command Prompt
2. Enter the following command:

```
start ms-cxh:localonly
```

3. This will force Windows to allow the creation of a local username and password.
4. Enter a Username followed by a password and security questions.

Tested with Windows 11 ARM (24H2 build 26100.4349), UTM 4.7.5, macOS 15.7.3

**Note:** These steps may change in future. Here is a video demonstration by David Bombal on bypassing online account requirements.

::youtube
---
video-id: TVJ3gGqkMak
title: "Skip Microsoft Login: One Command to a Local Account"
---
::

#### Conclusion

That's it! You've now got Windows 11 running natively on Apple Silicon. This VM setup gives you flexibility with solid performance.

If you found this guide helpful, consider checking out our other virtualization tips or share this with a fellow Mac/Windows enthusiast!
