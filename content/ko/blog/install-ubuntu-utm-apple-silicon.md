---
title: "UTM으로 Apple Silicon에서 Ubuntu 25.04 실행하기"
description: "무료 오픈소스 가상화 도구인 UTM을 사용하여 Apple Silicon에서 Ubuntu 25.04를 설정하는 방법을 알아보세요."
date: "2025-04-11"
updated: "2025-07-15"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "UTM으로 Apple Silicon에서 Ubuntu 25.04 실행 중인 화면"
---

::Alert{type="update" title="업데이트: Ubuntu 25.04 사용 가능"}
업데이트 (2025년 7월 15일): 이 가이드는 Ubuntu 25.04에 맞춰 검토 및 업데이트되었습니다.
::

Ubuntu는 이제 ARM 기반의 네이티브 데스크탑 빌드를 제공합니다.  
Linux를 탐색하거나 개발 및 가상화를 효율적으로 활용하려는 Apple Silicon 사용자에게 적합합니다.  
이 가이드에서는 macOS를 위한 무료 오픈소스 가상화 도구인 UTM을 사용해 Ubuntu 25.04 (Plucky Puffin)를 가상 머신에 설치하는 방법을 단계별로 안내합니다.

:PageLink{title="이전 가이드" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"} 에서는 Ubuntu Server와 데스크탑 환경 설치 방법을 소개했습니다.

## 요구 사항

- UTM 버전 4.6.5
- 최소 30GB의 여유 저장 공간
- Ubuntu 25.04 ISO (**ARM64**)
- macOS 15
- Apple Silicon 기기 (M1–M4 시리즈)

## UTM 다운로드

:PageLink{title="UTM GitHub 릴리스 페이지" url="https://github.com/utmapp/UTM/releases"} 에서 UTM 버전 4.6.5를 다운로드하세요.  
이전 4.x.x 버전도 사용 가능합니다.

:PageLink{title="App Store 버전" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"} 을 통해 자동 업데이트를 받을 수 있지만, 이 버전은 유료입니다.

UTM을 **Applications** 폴더로 드래그한 후 정상적으로 실행되는지 확인하세요.

## Ubuntu ISO 다운로드

:PageLink{title="Ubuntu 공식 웹사이트" url="https://cdimage.ubuntu.com/releases/25.04/release/"} 에서 약 3.82GB 크기의 Ubuntu 25.04 **ARM64** ISO를 다운로드하세요.

Ubuntu의 첫 공식 ARM64 데스크탑 빌드이며, 향후 LTS 버전도 출시될 예정입니다.  
사전 릴리스 버전이므로 일부 기능은 실험적일 수 있습니다.  
Ubuntu 25.04의 지원 기간은 약 9개월이며, 새로운 빌드가 출시될 때마다 이 가이드를 계속 업데이트할 예정입니다.

ISO를 다운로드한 후 UTM을 열어 가상 머신을 생성하세요.

## UTM 설정

UTM을 열고 **+** 아이콘을 클릭하여 새 가상 머신 생성을 시작하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: 새 가상 머신 생성을 위한 UTM 메인 화면
---
::

### 가상화 또는 에뮬레이션 선택

UTM에는 두 가지 모드가 있습니다:

- **Virtualise (가상화)**
- **Emulate (에뮬레이션)**

| 모드       | 장점                  | 단점                           |
| ---------- | ---------------------- | ------------------------------ |
| Virtualise | 빠르고 ARM 네이티브 지원 | x86 또는 비-ARM 프로세서 실행 불가 |
| Emulate    | 비-ARM 시스템도 지원 | 속도가 느리고 성능 저하 가능   |

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-mode.webp
alt: 가상화와 에뮬레이션 모드 선택 화면
---
::

Apple Silicon의 성능을 최대한 활용하려면 **Virtualise**를 선택하세요.

에뮬레이션은 속도가 느리지만 더 다양한 시스템을 지원합니다.  
:PageLink{title="UTM 갤러리" url="https://mac.getutm.app/gallery/"} 에서 미리 만들어진 VM을 다운로드할 수도 있습니다.

### 운영체제 선택

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-os.webp
alt: 리눅스 및 macOS 선택 화면
---
::

1. **Linux**를 선택하세요.  
2. **Use Apple Virtualization**을 활성화하여 네이티브 성능을 확보하세요.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-enable-apple-virt.webp
alt: Apple Virtualization 설정 화면
---
::

Apple Virtualization은 macOS 15에서 성능이 최적화됩니다.  
구형 macOS에서는 안정성이 낮아질 수 있습니다.  
호환성을 넓히려면 **Use Apple Virtualization**의 선택을 해제하고 QEMU를 사용하세요.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-qemu.webp
alt: QEMU 설정 화면
---
::

**Browse**를 클릭해 Ubuntu ISO를 선택하고 **Continue**를 클릭하세요.

### 하드웨어 설정

시스템 메모리의 절반 정도를 RAM으로 할당하세요 (기본값: 4096MB).  
CPU 코어는 기본값으로 두세요. **Continue**를 클릭합니다.

### 저장소

기본 저장 용량은 64GB로 대부분의 사용자에게 적합합니다.  
나중에 필요하면 조정할 수 있습니다. **Continue**를 클릭하세요.

### 공유 폴더

Mac과 VM 사이에서 폴더를 공유하려면 **Browse**를 클릭해 폴더를 선택하세요.  
그렇지 않으면 **Continue**를 클릭하세요.

구성 요약을 확인하고 VM 이름을 입력한 후 **Save**를 클릭하세요.

사이드바에 새 VM이 표시되며, 재생 버튼을 눌러 시작할 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/utm-prerun.webp
alt: 생성된 가상 머신 화면
---
::

## Ubuntu 설치

Ubuntu 설치가 자동으로 시작됩니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-linux-install.webp
alt: Ubuntu 설치 시작 화면
---
::

GRUB 메뉴에서 **Try or Install Ubuntu**를 선택하세요.

설치 과정 중 필요한 파일을 다운로드하며, Apple Virtualization에서는 화면 비율이 조금 다를 수 있습니다.

Ubuntu 환영 화면이 나타납니다.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/welcome.webp
alt: Ubuntu 환영 화면
---
::

1. 언어를 선택하고 **Next**를 클릭하세요.  
2. 접근성 옵션을 조정하고 **Next**를 클릭하세요.  
3. 키보드 레이아웃을 선택하고 **Next**를 클릭하세요.  
4. 인터넷에 연결하세요. Mac의 Wi-Fi를 공유하려면 **Use Wired Connection**을 선택하세요. **Next**를 클릭하세요.  
5. **Install Ubuntu**를 선택하고 **Next**를 클릭하세요.  
6. **Interactive installation**을 선택하고 **Next**를 클릭하세요.  
7. 앱은 **Default selection**을 선택하고 **Next**를 클릭하세요.  
8. 필요하다면 독점 소프트웨어 설치를 활성화하세요 (나중에 추가 가능). **Next**를 클릭하세요.  
9. **Erase disk and install Ubuntu**를 선택하고 **Next**를 클릭하세요.  
10. 파일 시스템 암호화 여부를 선택하세요 — 지금은 비활성화 후 **Next**를 클릭하세요.  
11. 이름, 컴퓨터 이름, 사용자 이름, 비밀번호를 입력하고 확인한 뒤 **Next**를 클릭하세요.  

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: Ubuntu 계정 생성 화면
---
::

12. 시간대를 선택하고 **Next**를 클릭하세요.  
13. 모든 설정을 검토하고 **Install**을 클릭하세요.  

설치가 완료되기까지 시간이 걸릴 수 있습니다.  
완료되면 **Restart Now**를 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/installer-restart.webp
alt: 재시작 요청 화면
---
::

- **Apple Virtualization**: VM이 자동으로 재시작됩니다.  
- **QEMU**: 디스크 아이콘을 클릭해 ISO를 꺼내고 **Enter**를 눌러 재부팅하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: ISO를 꺼내라는 메시지 화면
---
::

VM이 Ubuntu로 부팅됩니다.  
QEMU를 사용할 경우 "Display output is not active" 메시지가 잠시 나타날 수 있습니다.  
1–2분 정도 기다리면 데스크탑이 나타납니다.

데스크탑 화면이 나타나면 다음 단계를 진행하세요.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/ubuntu-welcome.webp
alt: Ubuntu 데스크탑 화면
---
::

1. **Next**를 클릭하세요.  
2. Ubuntu 개선을 위한 데이터 공유 여부를 설정하고 **Next**를 클릭하세요.  
3. **Finish**를 클릭하세요.  

이제 가상 머신 사용이 가능합니다.  
다음은 디스플레이 스케일을 최적화하는 단계입니다.

## 추가 참고 사항

더 나은 사용자 경험을 위해 디스플레이 해상도를 조정하세요.

### 해상도 설정

#### Apple Virtualization

1. VM이 실행 중이라면 종료하세요 (**Stop** 선택).  
2. VM을 우클릭 후 **Edit**를 선택하고 **Display**로 이동하세요.  
3. **HiDPI (Retina)**를 활성화하고 다이내믹 해상도를 유지하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple Virtualization 디스플레이 설정 화면
---
::

#### QEMU

1. VM을 종료한 후 **Edit > Display**로 이동하세요.  
2. **Retina Mode**를 활성화하고 **Save**를 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 디스플레이 설정 화면
---
::

3. VM을 부팅하세요. UI가 작게 보일 수 있습니다.  
4. Ubuntu의 **설정 > 디스플레이**에서 **Scale**을 200%로 설정한 후 **Apply**를 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/ubuntu-2504/scale200.webp
alt: 디스플레이 스케일 조정 화면
---
::

이제 macOS의 네이티브 해상도에 맞게 Ubuntu 데스크탑이 표시됩니다.

마지막으로, Ubuntu의 패키지를 업데이트하세요.  
메뉴에서 **Software Updater**를 열고 업데이트를 설치하여 최적의 성능을 유지하세요.

### (QEMU) 알려진 문제

QEMU 사용 시 부팅 과정에서 "Display output is not active" 메시지가 나타날 수 있습니다.  
1–2분 기다리면 데스크탑이 정상적으로 나타납니다.  
:PageLink{title="커뮤니티 토론" url="https://github.com/utmapp/UTM/discussions/5555"} 에서 관련 해결 방법을 확인할 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: 알려진 QEMU 문제 화면
---
::

### 업그레이드

Ubuntu 24.10은 지원이 종료되었습니다.  
Ubuntu 25.04는 최신 ARM 릴리스이며 2026년 1월까지 지원됩니다.

:PageLink{title="변경사항 보기" url="https://discourse.ubuntu.com/t/plucky-puffin-release-notes/48687"}

#### 24.10 → 25.04 변경 사항:
- 설치 과정 중 접근성 및 암호화 옵션 추가  
- 최대 디스플레이 스케일이 200%로 설정됨  

ARM 데스크탑 빌드는 새로운 LTS가 출시될 때까지 9개월 주기로 계속 출시될 예정입니다.

### 결론

이제 Apple Silicon에서 Ubuntu 25.04를 네이티브로 실행할 수 있습니다!  
코드 테스트, Linux 학습, 또는 단순한 탐색에도 유용하며,  
이 VM 설정을 통해 뛰어난 성능과 유연성을 경험할 수 있습니다.

이 가이드가 도움이 되었다면 다른 가상화 관련 팁도 확인해보세요 —  
또는 Mac/Linux 애호가들과 공유해보세요!
