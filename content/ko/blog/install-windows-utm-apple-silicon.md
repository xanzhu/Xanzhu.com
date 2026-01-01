---
title: "UTM으로 Apple Silicon에 Windows 11 설치하는 방법"
description: "UTM을 사용하여 M1–M5 Mac에서 Windows 11을 실행하는 완전하고 업데이트된 가이드입니다. Microsoft 계정 요구 사항을 우회하고 일반적인 디스플레이 문제를 해결하는 방법을 알아보세요."
date: "2026-01-01"
updated: "2026-01-01"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/covers/utm-windows-m4.webp"
alt: "UTM으로 Apple Silicon에서 실행 중인 Windows 11"
---

Apple Silicon에서 Windows를 실행하는 것이 점점 더 인기를 얻고 있습니다. 이 가이드에서는 macOS에 맞춤 제작된 무료 오픈 소스 가상화 도구인 UTM을 사용하여 가상 머신에 Windows 11을 설정하는 과정을 안내합니다.

이전 :PageLink{title="문서" url="/blog/windows-on-apple-silicon"}에서는 Apple Silicon에 Windows를 설정하는 기본 사항을 다뤘습니다.

::ArticleUpdates
- **2026년 1월 1일** - **연례 재출시**: 전체 기술 감사를 수행했습니다. Windows 11(24H2/25H2), UTM 4.7.5에 대한 모든 단계를 확인하고 업데이트했으며 새로운 로컬 계정 우회 방법을 추가했습니다.
::

Apple Silicon에 Windows를 설치하는 대체 솔루션의 경우, 이러한 솔루션은 유료이며 비용 대비 더 나은 성능을 제공할 수 있습니다. :PageLink{title="Parallels Desktop" url="https://www.parallels.com/products/desktop/"} 또는 :PageLink{title="VMware Fusion" url="https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion"}을 확인하세요.

UTM은 macOS용 무료 오픈 소스 가상화 도구로, 사용하기 쉽고 사용자 정의 기능을 갖춘 네이티브 성능을 제공하도록 설계되었습니다.

## 요구 사항

- UTM 버전 4.7.5
- 최소 30GB의 여유 저장 공간
- CrystalFetch 버전 2.2.0
- Apple Silicon 칩셋(M1-M5 시리즈)

## UTM 다운로드

:PageLink{title="UTM Github 릴리스 페이지" url="https://github.com/utmapp/UTM/releases"}에서 UTM 버전 4.7.5를 다운로드하세요. 이전 4.x.x 버전도 작동합니다.

:PageLink{title="App Store 버전" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"}을 통해 UTM의 자동 업데이트를 사용할 수 있지만 이는 유료 옵션입니다. 또는 GitHub 버전을 사용하고 필요에 따라 수동으로 업데이트하세요.

UTM을 Applications 폴더로 드래그하고 올바르게 열리는지 확인하세요.

## CrystalFetch 다운로드

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch-appstore.webp
alt: CrystalFetch 애플리케이션을 표시하는 Apple App Store
---
::

:PageLink{title="App Store" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"}에서 CrystalFetch 버전 2.2.0을 다운로드하세요. 이 옵션은 무료이며 자동 업데이트를 제공합니다.

또는 :PageLink{title="CrystalFetch Github 릴리스 페이지" url="https://github.com/TuringSoftware/CrystalFetch/releases"}에서 최신 버전을 다운로드하세요. 수동 업데이트가 필요하지만 공식 출시 전에 새로운 기능과 잠재적인 버그 수정을 제공할 수 있습니다.

CrystalFetch를 Applications 폴더로 드래그하고 올바르게 열리는지 확인하세요.

## Windows ISO 다운로드

Windows 11 **ARM64** ISO를 다운로드하세요. Microsoft 웹사이트에서 직접 다운로드하거나 CrystalFetch를 사용할 수 있습니다.

이 설치에서는 ISO를 다운로드하는 간단한 방법을 제공하는 CrystalFetch를 사용합니다. 직접 다운로드를 통한 설치도 가능하며 아래에 단계가 설명되어 있습니다.

### CrystalFetch

1. CrystalFetch를 열고 드롭다운 메뉴에서 **Windows 11**을 선택하세요.
2. 빌드 버전을 선택하세요. 드롭다운에서 **latest**를 선택하거나 특정 버전을 선택하세요.
3. **Apple Silicon**이 선택되어 있는지 확인하세요.
4. 언어와 Windows 에디션(**Windows 11**)을 선택하세요.
5. **Download**를 선택하고 라이선스 계약에 동의하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch.webp
alt: Windows 11용 CrystalFetch 애플리케이션 설정
---
::

다운로드가 자동으로 시작됩니다. ISO는 약 5.27GB입니다. 완료 후 이 ISO 파일을 저장할 대상 폴더로 파일을 이동하라는 메시지가 표시됩니다. 기본 Downloads 폴더를 사용합니다. **Move**를 클릭하세요.

이제 CrystalFetch를 닫고 UTM 설정을 시작할 수 있습니다.

### Windows - 직접 다운로드

Microsoft 웹사이트에서 직접 다운로드하려면 :PageLink{title="Windows 11 ISO" url="https://www.microsoft.com/en-us/software-download/windows11arm64"}로 이동하세요.

1. 드롭다운 메뉴에서 **Windows 11 (multi-edition ISO for Arm64)**를 선택하세요.
2. **Download Now**를 선택하세요.
3. **Product Language**를 선택하고 **Confirm**을 선택하세요.
4. **Download Now**를 선택하여 ISO를 다운로드하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-download.webp
alt: Windows 11 ISO 다운로드 페이지
---
::

ISO 다운로드가 시작됩니다. 약 5.47GB이며 Downloads 폴더에 저장됩니다.

CrystalFetch와 직접 다운로드의 차이점은 CrystalFetch가 다운로드할 특정 버전을 선택할 수 있고 더 사용자 친화적인 다운로드 워크플로를 제공한다는 것입니다. 사용 가능한 Windows 버전도 더 자주 업데이트됩니다.

CrystalFetch의 주요 목적은 UTM용 ISO를 다운로드할 때 원활한 경험을 제공하는 것입니다. 따라서 이 가이드에는 CrystalFetch를 권장합니다. 두 옵션 모두 테스트되었으며 작동하는 것으로 확인되었습니다.

직접 다운로드 버전은 항상 최신 Windows ARM 빌드를 가져옵니다.

## UTM 구성

UTM에서 **+** 아이콘을 클릭하여 새 가상 머신 생성을 시작하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-app.webp
alt: 새 가상 머신을 생성하는 플러스 아이콘이 있는 메인 창을 표시하는 UTM 애플리케이션 인터페이스
---
::

### 가상화 또는 에뮬레이션

UTM은 두 가지 모드를 제공합니다:

| 모드     | 장점                     | 단점                                  |
| -------- | ------------------------ | ------------------------------------- |
| 가상화   | 더 빠름, 네이티브 ARM 지원 | x86 (Intel/AMD) 아키텍처를 지원하지 않음 |
| 에뮬레이션 | 비ARM 시스템 지원         | 느림, 잠재적인 성능 문제               |

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-mode.webp
alt: 가상화와 에뮬레이션 사이의 UTM 구성 모드 선택
---
::

Apple Silicon의 효율성을 활용하려면 **Virtualise**를 선택하세요.

에뮬레이션은 느리지만 이전 시스템을 지원합니다. 사전 구축된 VM은 :PageLink{title="UTM Gallery" url="https://mac.getutm.app/gallery/"}에서도 사용할 수 있습니다.

### 운영 체제

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/os-selection.webp
alt: Windows, Linux 및 macOS 사이의 UTM 구성 OS 선택
---
::

### 하드웨어 설정

RAM을 장치의 사용 가능한 메모리의 절반으로 설정하세요(기본값: 4096MB 또는 4GB). CPU 코어는 자동 관리를 위해 기본값으로 두세요. **Continue**를 클릭하세요.

다음으로 ISO 파일을 정의합니다.

1. **Windows**를 선택하세요.
2. **Browse**를 클릭하고 방금 다운로드한 Windows ISO를 선택한 다음 **Continue**를 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-iso.webp
alt: ISO 선택을 표시하는 UTM 구성 인터페이스
---
::

"Install Drivers or SPICE guest tools"가 활성화되어 있는지 확인하세요. 이는 가상 머신과 네이티브 장치 간의 안정성을 보장하는 데 매우 중요합니다.

#### 저장 공간

기본 저장 공간 할당은 64GB이며 대부분의 사용자에게 적합합니다. 필요한 경우 나중에 조정한 다음 **Continue**를 클릭하세요.

#### 공유 디렉토리

선택적으로 Mac과 VM 간에 공유할 폴더를 선택하세요.

**Browse**를 클릭하고 공유할 폴더를 선택하세요. 그렇지 않으면 **Continue**를 클릭하세요.

다음으로 구성 요약을 검토하고 가상 머신의 이름을 입력한 다음 **Save**를 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/complete-setup.webp
alt: 완료된 UTM 구성
---
::

새 VM이 UTM 사이드바에 나타납니다. 재생 버튼을 클릭하여 가상 머신을 부팅하세요!

## Windows 설치

가상 머신을 부팅하면 "Press Any Key to continue"라는 메시지가 표시됩니다. 아무 키나 누르면 Windows 설치 프로세스가 시작됩니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-cdboot.webp
alt: ISO 파일로 부팅하기 위해 아무 키나 누르라는 UTM 설정
---
::

1. 언어 설정을 선택하고 **Next**를 클릭하세요.
2. 키보드 설정을 선택하고 **Next**를 클릭하세요.
3. 제품 키의 경우 **I don't have a product key**를 선택하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-productkey.webp
alt: 제품 키 선택을 표시하는 Windows 설정
---
::

4. 설치할 Windows 버전(Pro, Home, Home Single Language)을 선택한 다음 **Next**를 클릭하세요.
5. 라이선스 계약을 읽은 다음 **Accept**를 클릭하세요.
6. Windows를 설치할 기본 위치를 선택하고 **Next**를 클릭하세요.
(이 단계는 건너뛰고 설치로 바로 이동할 수 있습니다).

이제 Windows 설치가 시작됩니다. 시간이 좀 걸립니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-updates.webp
alt: ISO에서 설치 중인 Windows 설정
---
::

이 프로세스가 끝나면 가상 머신이 다시 시작됩니다. "Press Any Key or CD to enter startup"라는 동일한 프롬프트가 표시될 수 있습니다. 이는 ISO가 여전히 연결되어 있기 때문입니다. 정상적으로 부팅될 수도 있지만 이 ISO 파일을 제거하는 것이 중요합니다.

1. UTM 작업 표시줄에서 디스크 아이콘을 선택하세요.
2. 첫 번째 ISO 옵션 위로 마우스를 가져간 다음 **Eject**를 선택하세요.

이렇게 하면 VM이 새 Windows 디스크 대신 설치 프로그램으로 다시 부팅되는 것을 방지할 수 있습니다.

## Windows 설정

1. 국가/지역을 선택하고 **Yes**를 눌러 계속하세요.
2. 키보드 입력을 선택하고 **Yes**를 눌러 계속하세요.
3. 필요한 경우 두 번째 키보드를 추가하세요. 그렇지 않으면 **Skip**을 눌러 계속하세요.
4. Windows가 업데이트를 확인하고 가상 머신을 다시 시작할 수 있습니다.

Windows에서 계속하려면 인터넷 연결을 요청하는데 연결을 찾을 수 없는 경우, 아래 문제 섹션에 언급된 Shift + F10 우회를 사용하여 제한된 설정으로 진행하세요.

5. 이름을 입력하고 **Next**를 누르세요.
6. 비밀번호를 입력하거나 비워두고 **Next**를 누르세요.
7. Windows가 업데이트를 다시 확인하거나 다운로드를 시작할 수 있습니다. 몇 분이 걸릴 수 있으므로 기다려주세요.

평소보다 더 많은 업데이트를 받을 수 있는 이유는 Windows 설치 프로그램의 최신 버전으로 자동 푸시를 시도하기 때문입니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-setup-updates.webp
alt: 업데이트가 다운로드되는 Windows 설정
---
::

그런 다음 Windows 11로 부팅됩니다. 다음 단계는 Spice Guest Tools를 설치하는 것입니다.

## Spice Guest Tools

네트워킹, 디스플레이 스케일링 및 그래픽 가속화를 위한 필수 드라이버를 설치합니다.
가상 머신이 시작되면 일반적으로 UTM Guest Tools 설정을 요청하는 창이 나타납니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest.webp
alt: Spice Guest Tools 설정 기본 창
---
::

1. **Next**를 선택하세요.
2. 라이선스 계약에 동의하고 **Next**를 누르세요.

Spice Guest Tools가 설치됩니다. 설치를 완료하려면 머신을 다시 시작해야 합니다. "Display output is not active" 메시지가 표시되면 가상 머신을 수동으로 다시 시작해야 할 수 있습니다.

Spice Guest Tools 팝업 창이 표시되지 않으면 수동으로 실행할 수 있습니다.

1. 파일 탐색기를 여세요.
2. 사이드바에 있는 **This PC**를 클릭하세요.
3. "UTM Guest Tools"라는 CD 드라이브를 클릭하세요.
4. **utm-guest-tools-0.1.271.exe** 파일을 찾아 여세요.
5. 이 프로세스 중에 드라이버가 설치되면서 화면이 깜빡일 수 있습니다.

설치가 완료되면 네트워킹 연결이 즉시 작동하고 해상도가 조정되기 시작합니다. 설치 후 Windows를 다시 시작하는 것이 좋습니다.

다시 시작한 후 파일 탐색기를 열고 CD 드라이브로 다시 이동한 다음 마우스 오른쪽 버튼을 클릭하고 Eject를 선택하세요. 더 이상 Spice guest tools가 필요하지 않습니다. 다른 CD 드라이브가 보이면 이것은 Windows를 설치하는 데 사용한 ISO 파일입니다. 아직 꺼내지 않았다면 이것도 꺼내세요.

::media
---
source: https://cdn.xanzhu.com/2026/utm-windows/spice-drivers.webp
alt: CD Rom이 열린 Windows 파일 탐색기 표시
---
::

제어판을 방문하여 Spice Guest Tools가 설치되었는지 확인할 수 있습니다. **Uninstall a program**에서 Guest Tools가 다음과 같이 나열됩니다:

- UTM Guest Tools 0.1.271
- Spice webdavd ARM64 2.5.0

## 추가 참고 사항

사용성을 향상시키려면 더 나은 해상도를 위해 디스플레이 설정을 조정하세요.

#### 해상도

가상 머신을 종료하세요. UTM에서 전원 버튼을 선택하거나 Windows 내에서 종료하세요.

1. 가상 머신을 마우스 오른쪽 버튼으로 클릭하고 **Edit**를 선택하세요.
2. **Display**를 선택하세요.
3. **Retina Mode**를 체크하여 고해상도 스케일링을 활성화한 다음 **Save**를 클릭하세요.
4. 가상 머신을 시작하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-settings.webp
alt: Retina Mode 활성화를 위한 UTM 디스플레이 설정
---
::

이제 가상 머신이 Mac의 네이티브 해상도를 사용합니다.

#### Windows 업데이트

해상도를 수정한 후 Windows를 업데이트하세요. 사용 가능한 업데이트가 많을 것입니다.

1. 설정을 열고 **Windows Update**를 선택하세요.
2. **Check for updates**를 클릭하세요.
3. **Download and install updates**를 클릭하세요.
4. 가상 머신을 다시 시작하세요.

#### ISO 및 Spice Guest Tools 꺼내기

가상 머신에서 ISO 파일과 Spice Guest Tools CD를 꺼내세요.

1. UTM 작업 표시줄에서 디스크 아이콘을 마우스 오른쪽 버튼으로 클릭하세요.
2. 옵션 위로 마우스를 가져간 다음 **Eject**를 선택하세요.

## 문제

#### Display Output not Active

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-bug.webp
alt: Display output is not active 메시지를 표시하는 창
---
::

Spice Guest Tools를 설치하거나 가상 머신을 시작한 후 몇 초 동안 "Display output is not active" 메시지가 나타날 수 있습니다.
이 화면에 오랫동안 멈춰 있으면 가상 머신을 다시 시작하세요.

1. UTM 작업 표시줄에서 **Reset**(삼각형)을 선택하세요.
2. **OK**를 클릭하여 가상 머신을 재설정하세요.

#### "Let's connect you to a network" 우회하기

Windows 설정 중에 최신 업데이트를 받기 위해 인터넷에 연결하라는 메시지가 표시될 수 있습니다.

1. **Shift + F10**을 누르세요(참고: Mac 키보드에서 Fn 키를 누르고 있어야 할 수 있습니다).
2. 명령 프롬프트 창에서 다음을 입력하고 Enter를 누르세요:
```
OOBE\BYPASSNRO
```

가상 머신이 재부팅되어야 하며 이제 "I don't have internet" 옵션이 표시되고 그 다음에 "Continue with limited setup"이 표시됩니다.
참고: 이것은 온라인 Microsoft 계정 설정을 우회하는 이전 방법이었으며 더 이상 작동하지 않을 수 있습니다. 아래 솔루션을 시도하세요.

#### 로컬 계정 생성(Microsoft 로그인 우회)

최근 Windows 빌드(25H2 이상)에서는 Microsoft 계정 로그인을 건너뛰기가 더 어려워졌습니다. 로컬 오프라인 계정을 선호하는 경우 이 우회 방법을 사용하세요:

1. **Shift + F10**(또는 **Fn Shift + F10**)을 눌러 명령 프롬프트를 여세요.
2. 다음 명령을 입력하세요:
```
start ms-cxh:localonly
```

3. 이렇게 하면 Windows가 로컬 사용자 이름과 비밀번호 생성을 허용하도록 강제합니다.
4. 사용자 이름과 비밀번호 및 보안 질문을 입력하세요.

Windows 11 ARM(24H2 빌드 26100.4349), UTM 4.7.5, macOS 15.7.3에서 테스트되었습니다.

**참고:** 이러한 단계는 향후 변경될 수 있습니다. 다음은 온라인 계정 요구 사항 우회에 대한 David Bombal의 비디오 데모입니다.

::youtube
---
video-id: TVJ3gGqkMak
title: "Skip Microsoft Login: One Command to a Local Account"
---
::

#### 결론

완료되었습니다! 이제 Apple Silicon에서 네이티브로 Windows 11이 실행됩니다. 이 VM 설정은 견고한 성능으로 유연성을 제공합니다.

이 가이드가 도움이 되었다면 다른 가상화 팁을 확인하거나 Mac/Windows 애호가 동료와 공유해보세요!
