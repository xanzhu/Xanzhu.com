---
title: "UTM을 사용하여 Apple Silicon에서 Ubuntu 25.10 설정하기"
description: "무료 오픈 소스 가상화 도구인 UTM을 사용하여 Apple Silicon에 Ubuntu 25.10을 설치하는 방법을 알아보세요."
date: "2026-02-03"
updated: "2026-02-03"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "UTM을 통해 Apple Silicon에서 실행 중인 Ubuntu 25.10"
---

Ubuntu는 이제 네이티브 ARM 데스크톱 빌드를 제공합니다. 이는 Linux를 탐색하거나 개발, 또는 효율적인 가상화를 원하는 Apple Silicon 사용자에게 완벽한 환경을 제공합니다. 이 가이드에서는 macOS에 최적화된 무료 오픈 소스 가상화 도구인 **UTM**을 사용하여 가상 머신에 **Ubuntu 25.10 (Questing Quokka)**을 설치하는 과정을 살펴보겠습니다.

데스크톱 환경을 포함한 Ubuntu Server 설정 방법은 :PageLink{title="이전 아티클" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"}에서 자세히 확인할 수 있습니다.

::ArticleUpdates
- **2025-07-15** - Ubuntu 25.04용 가이드 업데이트.
- **2026-02-03** - **연간 재출시**: Ubuntu 25.10 설치를 위한 모든 단계 확인 및 업데이트 완료.
::

---

## 요구 사항

* **UTM**: 버전 4.7.5 이상.
* **저장 공간**: 최소 30GB 이상의 여유 공간.
* **ISO**: Ubuntu 25.10 Desktop (**ARM64**).
* **하드웨어**: Apple Silicon (M1, M2, M3, M4 또는 M5).

## UTM 다운로드

:PageLink{title="UTM GitHub 릴리스 페이지" url="https://github.com/utmapp/UTM/releases"}에서 **UTM 버전 4.7.5**를 다운로드하세요.

GitHub 버전은 무료로 다운로드할 수 있습니다. 또는 자동 업데이트를 지원하고 개발자를 후원할 수 있는 :PageLink{title="Mac App Store" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817?mt=12"} 버전(유료)을 이용할 수도 있습니다.

다운로드한 UTM을 **응용 프로그램(Applications)** 폴더로 드래그하여 실행하세요.

## Ubuntu ISO 다운로드

:PageLink{title="Ubuntu CD 이미지 서버" url="https://cdimage.ubuntu.com/releases/25.10/release/"}에서 **Ubuntu 25.10 ARM64 ISO**(약 4.98GB)를 다운로드하세요.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/ubuntu-download.webp
alt: ARM용 다운로드 옵션을 보여주는 Ubuntu 웹사이트
---
::

* **Ubuntu 25.10**은 Apple Silicon에 필요한 최신 커널 및 드라이버 업데이트를 제공하는 임시(Interim) 릴리스입니다.
* **Ubuntu 26.04 (Resolute Raccoon)**는 차세대 LTS 릴리스로, 처음으로 공식 ARM 데스크톱 다운로드가 포함될 예정입니다. 2026년 4월 출시 예정입니다.

이 가이드는 Ubuntu가 LTS 버전으로 발전함에 따라 계속 업데이트될 예정입니다. 일부 기능이나 버그는 이후 버전에서 해결될 수 있으며, 잠재적인 문제와 해결 방법은 최대한 기록해 두겠습니다.

---

## UTM 구성

UTM을 열고 **+ (플러스)** 아이콘을 클릭하여 새 가상 머신을 만듭니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: 새 가상 머신 생성을 위한 플러스 아이콘이 있는 UTM 인터페이스
---
::

### 가상화(Virtualise) 또는 에뮬레이션(Emulate)

UTM은 두 가지 모드를 제공합니다:

| 모드 | 장점 | 단점 |
| ---------- | -------------------------- | ------------------------------------ |
| 가상화(Virtualise) | 빠름, 네이티브 ARM 지원 | x86 (Intel/AMD) 아키텍처를 지원하지 않음. |
| 에뮬레이션(Emulate) | 비 ARM 시스템 지원 가능 | 느림, 성능 저하 가능성 있음 |

Apple Silicon의 효율성을 극대화하려면 **가상화(Virtualise)**를 선택하세요.

에뮬레이션은 느리지만 구형 시스템을 지원합니다. :PageLink{title="UTM 갤러리" url="https://mac.getutm.app/gallery/"}를 통해 사전 구축된 VM을 사용할 수도 있습니다.

### 운영 체제 (Operating System)

**Linux**를 선택하세요.

### 하드웨어 설정

* **메모리**: 최소 **4096MB (4GB)**를 할당하세요. Mac의 RAM이 16GB 이상이라면 더 부드러운 환경을 위해 **8GB (8192MB)**를 권장합니다.
* **CPU**: 자동 코어 관리를 위해 기본값으로 둡니다.

메모리를 기기 가용 메모리의 절반으로 설정하세요(기본값: 4096MB 또는 4GB). CPU 코어는 기본값으로 두고 **Continue**를 클릭합니다.

#### QEMU vs Apple Virtualization

기본적으로 UTM은 유연하고 호환성이 넓은 **QEMU**를 사용합니다.
macOS 15 이상에서는 **Apple Virtualization**을 활성화하면 Ubuntu와 같은 ARM 게스트의 성능과 반응 속도를 높일 수 있습니다. 호환성 문제가 발생하면 언제든지 QEMU로 다시 전환할 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-config-virt.webp
alt: Apple Virtualization을 위한 UTM 구성
---
::

* **Use Apple Virtualization** 체크 (선택 사항, macOS 15 이상 권장).
* **Boot Image Type:** Boot from ISO 선택.
* **Browse**를 클릭하여 다운로드한 Ubuntu ISO를 선택하고 **Continue**를 클릭합니다.

#### 저장 공간 (Storage)

기본값인 **64GB**를 권장합니다. Ubuntu는 OS 및 기본 앱 설치에 약 20GB가 필요하며, 나머지는 사용자 파일용입니다.

필요에 따라 조정하고 **Continue**를 클릭하세요.

#### 공유 디렉토리 (Shared Directory)

필요한 경우 **Browse**를 클릭하여 Mac과 VM 간에 공유할 폴더를 선택하세요. 그렇지 않으면 **Continue**를 클릭합니다.

구성 요약을 확인하고 VM 이름을 지정한 뒤 **Save**를 클릭합니다.

---

## Ubuntu 설치

새 VM의 **재생(Play)** 버튼을 클릭하여 설치 프로그램을 부팅합니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-default.webp
alt: 생성이 완료된 가상 머신이 표시된 UTM 앱
---
::

Ubuntu 설정이 자동으로 시작됩니다. 키보드 입력이 캡처되도록 VM 창 내부를 클릭해야 합니다.

**GRUB 메뉴:** 화살표 키를 사용하여 **Try or Install Ubuntu**를 선택하고 Enter를 누릅니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/utm-grub-boot.webp
alt: Ubuntu 가상 머신 설치 선택 화면
---
::

설치 과정 중 추가 구성 요소가 다운로드될 수 있습니다. Apple Virtualization 사용 시 디스플레이 배율이 약간 다를 수 있습니다.

Ubuntu 환영 화면이 나타납니다:

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-welcome-setup.webp
alt: 부팅 후 나타나는 Ubuntu 환영 화면
---
::

1. 언어를 선택하고 **Next**를 클릭합니다.
2. 접근성 옵션을 필요에 따라 조정하고 **Next**를 클릭합니다.
3. 키보드 레이아웃을 선택하고 **Next**를 클릭합니다.
4. 인터넷에 연결합니다. **Use Wired Connection**이 선택되었는지 확인하세요(UTM이 Mac의 Wi-Fi 연결을 공유합니다). **Next**를 클릭합니다.
5. **Install Ubuntu**를 선택하고 **Next**를 클릭합니다.
6. **Interactive installation**을 선택하고 **Next**를 클릭합니다.
7. 앱 설치 옵션에서 **Default selection**을 선택하고 **Next**를 클릭합니다.
8. 선택적으로 독점 소프트웨어 설치를 활성화하고(나중에 추가 가능) **Next**를 클릭합니다.
9. **Erase disk and install Ubuntu**를 선택하고 **Next**를 클릭합니다.
10. 파일 시스템 암호화 여부를 선택합니다(지금은 해제 상태로 둠). **Next**를 클릭합니다.
11. 사용자 이름, 컴퓨터 이름, 비밀번호를 입력합니다. **Next**를 클릭합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: 샘플 값이 입력된 Ubuntu 계정 생성 화면
---
::

12. 지도에서 시간대를 선택하고 **Next**를 클릭합니다.
13. 선택한 내용을 검토하고 **Install**을 클릭합니다.

파일 복사 및 구성에 시간이 다소 소요될 수 있습니다. 완료되면 **Restart Now**를 클릭합니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-restart.webp
alt: 재시작을 요청하는 Ubuntu 화면
---
::

#### ISO 파일 꺼내기(Eject)

재부팅 후 Ubuntu에서 설치 미디어를 제거하라는 메시지가 나타날 수 있습니다. UTM에서 ISO를 꺼낸 다음 Enter를 눌러 부팅을 계속합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: ISO를 꺼내는 방법을 보여주는 시각적 자료
---
::

* UTM 툴바의 **CD/DVD 아이콘**을 클릭합니다.
* 두 번째 옵션에 마우스를 올리고 **Eject**를 선택합니다.
* 다시 VM 창을 클릭하고 **Enter**를 누릅니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-eject-prompt.webp
alt: ISO를 꺼내고 Enter를 누르라는 Ubuntu 메시지
---
::

QEMU 사용 시 "Display output is not active" 메시지가 잠시 나타날 수 있습니다. 데스크톱이 로드될 때까지 30초에서 1분 정도 기다리세요.

데스크톱이 로드되면 다음 단계를 따르세요:

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-complete.webp
alt: 환영 화면이 표시된 Ubuntu 데스크톱
---
::

1. **Next**를 선택하여 계속합니다.
2. 데이터 공유 여부를 설정하고 **Next**를 선택합니다.
3. **Finish**를 선택합니다.

이제 가상 머신을 사용할 준비가 되었습니다. 다음 단계는 디스플레이 배율을 개선하는 것입니다.

## 해상도 설정

가독성을 높이기 위해 디스플레이 설정을 조정합니다.

#### Apple Virtualization 사용 시

1. VM을 **종료(Shut down)**합니다. (실행 중인 경우 우클릭 후 **Stop** 선택).
2. VM을 우클릭하고 **Edit**을 선택한 뒤 **Display** 탭으로 이동합니다.
3. **HiDPI (Retina)**를 활성화하고 동적 해상도(dynamic resolution)를 유지합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple Virtualization 디스플레이 설정을 위한 UTM 구성
---
::

#### QEMU 사용 시

1. VM을 중지하고 **Edit** -> **Display**로 이동합니다.
2. 고해상도 배율을 위해 **Retina Mode**를 체크하고 **Save**를 클릭합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 디스플레이 설정을 위한 UTM 구성
---
::

VM을 부팅합니다. Ubuntu 사용자 인터페이스가 너무 작게 보일 수 있습니다.

1. Ubuntu 내부에서 **Settings** -> **Display**로 이동합니다.
2. **Scale**을 **200%**로 설정하고 **Apply**를 클릭합니다.

::media
---
source: https://cdn.xanzhu.com/2026/utm-ubuntu/os-setting-display.webp
alt: 고해상도 배율을 위한 Ubuntu 디스플레이 설정
---
::

이제 데스크톱이 선명하고 적절한 크기로 표시됩니다.

#### 소프트웨어 업데이트

마지막으로 Ubuntu 패키지를 업데이트합니다. 메뉴를 열고 **Software Updater**를 선택하여 최적의 성능을 위한 업데이트를 설치하세요.

또는 **터미널(Terminal)**을 열고 다음 명령어를 실행하세요:

```bash
sudo apt update && sudo apt upgrade -y
```

이를 통해 Ubuntu 25.10의 최신 패치를 모두 적용할 수 있습니다.

## 문제 해결

#### "Display output is not active"
이는 초기 부팅 단계에서 발생하는 일반적인 QEMU 버그입니다. 화면이 2분 이상 검은색으로 유지되면 UTM 창의 크기를 살짝 조절해 보세요. 그러면 그래픽 드라이버가 다시 활성화되는 경우가 많습니다.

추가적인 해결 방법은 :PageLink{title="GitHub 토론" url="https://github.com/utmapp/UTM/discussions/5555"}을 참고하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: 데스크톱 로드를 기다리라는 메시지가 포함된 UTM QEMU 버그 안내
---
::

#### 결론

축하합니다! 이제 Apple Silicon에서 네이티브로 실행되는 Ubuntu 25.10을 사용할 수 있습니다. 코드 테스트, Linux 학습, 또는 단순한 탐색 등 어떤 용도든 이 VM 설정은 강력한 성능과 유연성을 제공할 것입니다.

이 가이드가 도움이 되었다면 다른 가상화 팁도 확인해 보거나, 동료 Mac/Linux 사용자들에게 공유해 주세요!
