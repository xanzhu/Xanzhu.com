---
title: "Windows Virtual Machine Setup on Apple Silicon 2023"
description: "Learn how to setup Windows on Apple Silicon using UTM, a free and open-source virtualisation software."
date: "2023-11-23"
tag: "Guide"
toc: true
feature: true
img: "/images/blog/wvm/wvm.png"
ogURL: "/images/blog/wvm/wvm.png"
alt: "2023 Macbook Pro Black Edition displaying icons of the three new chipsets"
---

This article covers using the latest version of Windows on ARM processors using UTM. This will work on all Apple Silicon Devices, including the new Mac lineup from M1 to M3 chipset.

To check your device is using the new chipset introduced in 2020, click on the Apple icon and select "About This Mac". Here you will find details whether it is Intel or using the new M1-M3 Chips.

This is an updated version from our [previous article](https://xanzhu.com/blog/apple-silicon-virtualmachine-setup) at the beginning of the year, where we covered the installation of Windows using UTM and Parallels. Since then, the process has become much easier and reliable!

Downloads:

- [UTM](https://mac.getutm.app/)
- [CrystalFetch](https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12)

Prerequisites:

- Minimum 30GB Free Storage (Windows takes a lot)
- Connection to WiFi to install ISO file / Windows
- UTM Version: 4.4.4 or newer

## Installing UTM

1. Visit [UTM](https://mac.getutm.app/).
2. Select Download

The application will look like this when opened

<Media source="/images/blog/wvm/wvm-1.png"  alt="UTM Application Opening Screen"></Media>

## CrystalFetch

This is a free tool what will help us to generate an updated windows ISO file needed for the UTM virtual machine.

1. Download CrystalFetch from the App Store.
2. Open CrystalFetch and Select Language and Edition (Windows 11)

Should look similar to this:

<Media source="/images/blog/wvm/wvm-2.png"  alt="CrystalFetch Application Opening Screen"></Media>

3. Click on download

The ISO file needs to be downloaded. This may take some time as the file is around 5GB in size. Save this file in a location you can remember, such as the desktop or downloads folder.

4. Close Crystal Fetch and Open UTM

## Creating Virtual Machine

We can now setup our virtual machine!

1. Click Create New Virtual Machine
2. Select Virtualise
3. Select Windows
4. Click on Browse and Select the ISO file we downloaded from CrystalFetch then select continue.

Should look similar to this

<Media source="/images/blog/wvm/wvm-3.png"  alt="UTM Configuration Screen For Virtual Machine"></Media>

1. Select the amount of RAM to be used for this virtual machine. 4096 is the default, which is equal to 4GB. Half of what your system is using is ideal, but this can be adjusted later on if needed. For now, leave it as the default.

2. Select the amount of storage to be used. By default, this is set to 64GB, which is the limit that your virtual machine can hold. Again, we can adjust this later on if needed.

3. If you need to share folders or directories between your Mac and the virtual machine, click on Browse, select a folder or path, and press Continue. Otherwise, proceed to the next step by pressing continue.

4. Give the virtual machine a name, and then select Save.

The virtual machine has now been created. You should see something similar to this.

<Media source="/images/blog/wvm/wvm-4.png"  alt="Showing UTM Virtual Machines"></Media>

## Running Virtual Machine

1. Select the Virtual Machine you just made and press the play icon. Alternatively you can right click and select "Run".

This will now boot up the virtual machine. During this process it will open up a new window and the first thing it will ask is to "Press any key to boot from CD".

2. Click inside this window and press any key.

<Media source="/images/blog/wvm/wvm-5.png"  alt="UTM showing prompt to press any key to proceed"></Media>

This step is important as if you don't press a key fast enough you will get the following screen.

<Media source="/images/blog/wvm/wvm-5b.png"  alt="UTM showing error prompt during boot"></Media>

To solve this close the virtual machine and run it again or select the restart virtual machine button which is the triangle button.

If you keep getting the above error then refer to the Issues and bugs section of this article. For more help.

## Installing Windows

After doing this we will get to this screen where we can now configure the installation for windows.

<Media source="/images/blog/wvm/wvm-6.png"  alt="Windows ISO installation menu"></Media>

1. Select the language and press Next.

2. Windows Activation: You will be asked to enter a key. Simply click on "I don't have a key."

3. Select the version of Windows to use. Select either Windows 11 Home or Pro, and press Next.

4. Select the check box to agree to the terms and conditions, and press Next.

5. Select the drive to install Windows on. There should be only one, so you can just press Next.

The Windows installer will now begin to install the required files for Windows. Note that this will take some time.

After this has been completed, it will reboot a few times. Let it run without interfering. Once you reach the following screen, we need to make sure we eject the current ISO to prevent the installer from running again if we reboot.

<Media source="/images/blog/wvm/wvm-7.png" alt="UTM guide on ejecting current ISO from Virtual Machine"></Media>

1. Click on the disc Icon
2. Hover over CD/DVD and select eject.

This is the default Windows 11 setup, where you will need to configure your name, password, and other Windows settings. It may take some time as updates may be installed.

Complete the setup as instructed.

## Installing Spice Guest Tools

After signing into your new virtual machine, you need to ensure Spice Guest Tools is installed. This will help you get the right drivers for the Internet, screen resolution, and more.

By default, the installation menu will pop up. Click Next to install and wait. This will install the drivers, so the virtual machine may flash or slow down until the installation is complete.

<Media source="/images/blog/wvm/wvm-8.png" alt="UTM Spice Guest Tools Installer screen"></Media>

If the virtual machine becomes unresponsive close and reboot the virtual machine.

## Wrapping Up

The virtual machine is now installed correctly and ready to use. This is a Windows virtual machine running on UTM.

Since this is ARM based some application may not work and general performance will not be perfect. It works and adjustments to Storage, RAM and processes can be found by right clicking on the virtual machine in the UTM main menu and selecting "edit"

## Issues and Notes

Cannot boot into Windows during the first step of running the virtual machine:
There may be an issue with the ISO file. To resolve this, select the disc icon hover over CD/DVD, press eject, reselect the ISO file, and then reboot the virtual machine.

Starting virtual machine is asking to "Press any key to boot from CD" after already installing the virtual machine:
This is because the ISO file is still present. To resolve this, eject the ISO file. Refer to the example shown in the Installing Windows section.

Windows 11 does not require an activation key:
When prompted for an activation key, simply select "I don't have a key." You will be able to run Windows as normal, but some features may not be accessible.

Internet is not working and screen size isn't right:
Double-check that Spice Guest Tools has been installed correctly. To install Spice Guest Tools, follow these steps:

1. Click on File Explorer.
2. Go to the CD drive and click on it.
3. Double-click on "utm-guest-tools" to run the installation.

If you need more help please refer to UTM's docs [found here](https://docs.getutm.app/guides/windows/).
