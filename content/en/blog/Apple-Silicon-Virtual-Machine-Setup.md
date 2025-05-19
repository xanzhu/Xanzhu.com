---
title: "Apple Silicon Virtual Machine Setup 2023"
date: "2023-01-08"
updated: "2023-01-08"
tag: "Guide"
img: "/images/blog/covers/apple-vm-setup-v1.webp"
description: "Learn setup of virtual machines on Apple Silicon using Parallels or UTM. Covering installation, configuration, and running your first virtual machine"
alt: "Apple Silicon Chipset M1"
toc: true
---

::alert
Installation for Windows 11 has changed slightly check out the :PageLink{title="Updated Guide" url="/blog/install-windows-utm-apple-silicon"}
::

If you're a developer or tech enthusiast, you may need to use multiple operating systems for projects or personal use.

In this post, we'll cover the setup process for popular operating systems such as Windows and Ubuntu using Parallels, a paid virtualization software and a Free Open source Solution called UTM.

Whether you're a beginner or an experienced user, this guide will teach you how to install and set up each environment quickly and easily on your Apple Silicon Mac.

How do you know if your Mac is running on Apple Silicon?

1. Click the Apple Icon
2. Click "About this Mac"
3. Chip will say "Apple M1" or similar

## Parallels

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/Parallels.webp
credit: Parallels / Xanzhu
alt: Parallels Virtual Machine Logo
---
::

A paid virtualisation software that works natively and is essentially a one-click install of all your favourite Operating Systems.

It offers great tools and makes the whole process smooth as possible.

1. Visit :PageLink{title="Parallels.com" url="https://www.parallels.com/products/desktop/trial/"} and download the free trial. 
2. Once installed open "Parallels Desktop".
3. Now select the operating system you'd like to install.

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/p-install.webp
alt: Parallels Installation Wizard
---
::

Note it's ideal to have at least 25-30 GB of free space before installing any operating system.

### Windows 11 ARM

Windows will run on the native ARM version as of 2022, simply click on the windows icon and hit install. Parallels will do the rest for you.

The setup process will start by downloading the Operating System, then you'll be booted into the virtual machine where you can begin making adjustments and tweaks to your liking.

1. Select the Windows Icon and select continue
2. Download windows, this will take some time
3. After downloading the virtual machine will automatically start.
4. Once running you'll be asked to restart the virtual machine to finish installing "Parallels Tools", Press restart.
5. Windows 11 has now been installed, there will be a shortcut on your Desktop or simply open "Parallels Desktop" to run the virtual machine.

Afterwards, it's ideal to begin updating Windows to the latest version for the most optimal and secure experience.

### Ubuntu 22.04

Ubuntu follows the same process of simply clicking on the Ubuntu Icon and selecting install, this will download the application and boot you straight into the virtual machine.

Upon startup, you'll be asked to set a password and then Parallels tools will need to be installed and which requires the virtual machine to restart.

1. Select the Ubuntu Icon and click continue
2. Download Ubuntu, this will take some time.

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/u-download.webp
alt: Parallels ubuntu setup wizard
---
::

3. After downloading the virtual machine will automatically start
4. You'll be prompted to create a password for the login
5. Once logged in you'll be asked to restart the virtual machine to install "Parallels Tools"
6. After the virtual machine has restarted, log back in and begin configuring your new Ubuntu Virtual Machine.

It's always good practice to check for updates and ensure you're running the latest versions. This can help with performance and security issues.

Other operating systems are available for you to install such as Kali Linux, Fedora, Debian or your ISO file with some exceptions.

How do you manage or configure your virtual machines?

1. Open "Parallels Desktop" this may automatically boot into your virtual machine, simply shut it down
2. Right-click on the Parallels Desktop Application and select "Control Center", here you can add/edit or remove them.

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/config.webp
alt: Parallels Virtual Machine Configuration Panel
---
::

3. To add another virtual machine press the plus icon and go through the installation process mentioned above
4. Deleting a virtual machine right click on the virtual machine and select _Remove (Device Name)_, Device name will be the name of the virtual machine.
5. Configuring the virtual machine right click on it and select configure, here you can set and adjust the settings you may need. Such as name, external devices, printers, internet connections and more.

## UTM

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/UTM.webp
credit: UTM / Xanzhu
alt: UTM installation wizard
---
::

UTM is a free tool that does the same thing as parallels but you're in charge of the customisations.

The performance will be relatively stable but needs adjusting to your system. This might not be a good choice if you need a responsive virtual machine without the fuss of configuring every aspect of the software.

1. Download :PageLink{title="UTM" url="https://mac.getutm.app/"}, there is an App store version but this is paid, select download
2. Open UTM and select "Create a new Virtual Machine"
3. Select "Virtualise"

### Windows 11 ARM / X86

Windows can be installed in several ways :PageLink{title="UTM" url="https://docs.getutm.app/guides/windows"} offers an in-depth guide on installing windows.

In this guide, we'll be using the Windows Insider Preview version. This requires an insider account.

Alternatively, you can install the version listed here:

4. Select Windows
5. Visit download the latest Windows 11 ARM file from :PageLink{title="Microsoft" url="https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewarm64"}
6. Press Browse and Select the downloaded VHDX file, ensure import VHDX is checked

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/u-install.webp
alt: Installation Settings for UTM windows
---
::

7. Press Continue
8. Select the amount of RAM, a good rule is to use half of what you're system has ie: 8GB using 4GB
9. Select storage size: Recommend setting at least 35GB or leaving the default option
10. Shared directory, here you can specify a folder that will work between the virtual machine and your Mac. This can be set later on.
11. Summary Page will show all your configured settings and allow you to set a name for your virtual machine.
12. Press the play button to run the virtual machine for the first time it will take some time to load.

Now installing windows

1. Select your language
2. Select your Keyboard
3. Select a network, if nothing shows up press `SHIFT + F10` and press yes and in the command prompt enter the following:

```
OOBE\BYPASSNRO
```

4. This will restart the Virtual machine, continue through the setup process and once hitting the network section select "I don't have internet"
5. Continue through the steps, setting name, password, and security questions.
6. Once you've booted into Windows 11 open the file explorer and select the CD drive, double click on install spice-guest-tools

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/u-spice.webp
alt: File explorer windows 11
---
::

7. Select Reboot and you now have a working Windows 11 virtual machine.

Following the official method provided by UTM and utilising the UUP downloading would be recommended to allow for future and ongoing support.

This article will be updated with that method in future.

### Ubuntu 22.04

Installing Ubuntu can be a lengthy process in this guide we'll need to install the server version first and then proceed to install a desktop.

1. Open UTM and select "Create a new Virtual Machine"
2. Select "Virtualise"
3. Select Linux
4. Download :PageLink{title="Ubuntu" url="https://ubuntu.com/download/server/arm"}, open UTM and press browse
5. Press browse and select the downloaded Ubuntu Server ISO file
6. Select Continue
7. Select the Amount of Memory (RAM) to use
8. Select the Storage amount to leave as default for this to be automatically managed.
9. Shared directory, add a folder to be shared between operating systems.
10. Summary will show all the configured options
11. Run the virtual machine by pressing the play button
12. Select the first option "Try or install Ubuntu" this will take some time to load.
13. Select your language and press ENTER
14. Select Keyboard layout and press ENTER
15. Type of installation press ENTER
16. Network Connections press ENTER
17. Configure Proxy press ENTER
18. Configure Ubuntu Archive Mirror press ENTER
19. Guided Storage. Press DOWN ARROW until "Done" is highlighted and press ENTER
20. Storage configuration.. press ENTER
21. Confirm Destructive Action DOWN_ARROW and press ENTER to continue
22. Profile Setup.. set your name and passwords then press DOWN_ARROW and then press ENTER
23. SSH Setup.. press DOWN_ARROW and then press ENTER
24. Featured Server Snaps.. press DOWN_ARROW and then press ENTER to continue
25. The installation will now install

::media
---
source: https://cdn.xanzhu.com/v1/m1-virtual-machine/u-linux.webp
alt: Linux server installing display
---
::

26. Once this is completed press the DOWN_ARROW so "Reboot now" is highlighted and press ENTER
27. Once the screen goes black wait a couple of minutes and then up the top select the disc icon and eject the ISO file.
28. Now restart the virtual machine by pressing the triangle or closing and re-opening the virtual machine.
29. Once rebooted log in and you have a working Linux Server. Everything will be command-line based.
30. To install a desktop, log in first and then type the following commands:

Update packages:

```
sudo apt update
```

Install the desktop, it takes a little while...

```
sudo apt install ubuntu-desktop
```

Reboot the virtual machine:

```
sudo reboot
```

31. After rebooting, log in and that's it!

UTM provides a vast range of :PageLink{title="pre-build virtual machines" url="https://mac.getutm.app/gallery/"} spanning all types of operating systems.

#### Other solutions

While these are two popular choices and ones I've personally used. As ARM gets more adoption from Microsoft and other competitors more tools and software will come.

Linux at the moment is making fantastic moves to get Apple Silicon's Hardware working natively and being able to utilise all aspects of the Chipset acting as a bare metal solution.

:PageLink{title="Asashi Linux" url="https://asahilinux.org/"} provides the groundwork for future installations of Linux-based Operating systems which will eventually allow a smooth bare metal experience and end reliance on virtual machines.
