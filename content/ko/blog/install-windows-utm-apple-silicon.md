---
title: "UTM을 이용한 Apple Silicon에서의 Windows 11"
description: "무료 오픈 소스 가상화 도구인 UTM을 사용하여 Apple Silicon에 Windows 11을 설정하는 방법을 알아보세요."
date: "2025-05-01"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/covers/utm-windows-m4.webp"
alt: "UTM으로 Apple Silicon에서 실행되는 Windows 11"
---

Apple Silicon에서의 Windows 사용이 점점 더 대중화되고 있습니다. 이 가이드에서는 macOS용으로 맞춤 제작된 무료 오픈 소스 가상화 도구인 UTM을 사용하여 가상 머신에 Windows 11을 설정하는 과정을 안내합니다.

:PageLink{title="이전 게시물" url="/blog/windows-on-apple-silicon"} 에서는 Windows 11 설정 과정을 다루었으며, 그 이후 몇 가지 변경 사항이 있었으므로 이 새로운 가이드는 2025년에 Apple Silicon에 Windows 11을 설치하는 것에 대한 최신 정보를 제공합니다!

Apple Silicon에 Windows를 설치하는 다른 대안적인 솔루션으로는 유료 솔루션이며 더 나은 성능을 제공할 수 있지만 비용이 발생합니다. :PageLink{title="Parallels Desktop" url="https://www.parallels.com/products/desktop/"} 또는 :PageLink{title="VMware Fusion" url="https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion"}을 확인해 보세요.

UTM은 macOS용 무료 오픈 소스 가상화 도구로서 사용하기 쉽고 사용자 정의를 통해 기본 성능을 제공하도록 설계되었습니다.

## 요구 사항

- UTM 버전 4.6.5
- 최소 30GB의 여유 저장 공간
- CrystalFetch 버전 2.2.0
- Apple Silicon 장치 (M1-M4 시리즈)

## UTM 다운로드

:PageLink{title="UTM Github 릴리스 페이지" url="https://github.com/utmapp/UTM/releases"}에서 UTM 버전 4.6.5를 다운로드하십시오. 이전 4.x.x 버전도 작동해야 합니다.

UTM 자동 업데이트는 유료인 :PageLink{title="App Store 버전" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"}을 통해 사용할 수 있습니다. 또는 GitHub 버전을 사용하고 필요에 따라 수동으로 업데이트하십시오.

UTM을 응용 프로그램 폴더로 드래그하고 올바르게 열리는지 확인하십시오.

## CrystalFetch 다운로드

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch-appstore.webp
alt: CrystalFetch 응용 프로그램을 보여주는 Apple App Store
---
::

:PageLink{title="App Store" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"}에서 CrystalFetch 버전 2.2.0을 다운로드하십시오. 이 옵션은 무료이며 자동 업데이트를 제공합니다.

또는 :PageLink{title="CrystalFetch Github 릴리스 페이지" url="https://github.com/TuringSoftware/CrystalFetch/releases"}에서 최신 버전을 다운로드하십시오. 이 경우 수동 업데이트가 필요하지만 공식 릴리스 전에 새로운 기능과 잠재적인 버그 수정 사항을 제공할 수 있습니다.

CrystalFetch를 응용 프로그램 폴더로 드래그하고 올바르게 열리는지 확인하십시오.

## Windows ISO 다운로드

Windows 11 **ARM64** ISO를 다운로드하십시오. Microsoft 웹사이트에서 직접 다운로드하거나 CrystalFetch를 사용할 수 있습니다.

이 설치에서는 ISO 다운로드의 간단한 방법을 제공하는 CrystalFetch를 사용합니다. 아래 단계에 따라 직접 다운로드하여 설치할 수도 있습니다.

### CrystalFetch

1. CrystalFetch를 열고 드롭다운 메뉴에서 **Windows 11**을 선택하십시오.
2. 빌드 버전을 선택하십시오. 드롭다운에서 **최신**을 선택하거나 특정 버전을 선택하십시오. 이 가이드에서는 **26100.2033**을 사용합니다.
3. **Apple Silicon**이 선택되어 있는지 확인하십시오.
4. 언어 및 Windows 에디션 (**Windows 11**)을 선택하십시오.
5. **다운로드**를 선택하고 사용권 계약에 동의하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-crystalfetch.webp
alt: Windows 11용 CrystalFetch 응용 프로그램 설정
---
::

다운로드가 자동으로 시작됩니다. ISO는 약 4.69GB입니다. 완료되면 대상 폴더를 선택하고 ISO를 저장할지 확인하십시오. 기본 다운로드 폴더를 사용합니다.

### Windows - 직접 다운로드

Microsoft 웹사이트에서 직접 다운로드하려면 :PageLink{title="Windows 11 ISO" url="https://www.microsoft.com/en-us/software-download/windows11arm64"}로 이동하십시오.

1. 드롭다운 메뉴에서 **Windows 11 (Arm64용 다중 에디션 ISO)**를 선택하십시오.
2. **다운로드**를 선택하여 ISO를 다운로드하십시오.
3. **제품 언어**를 선택하고 **확인**을 선택하십시오.
4. **지금 다운로드**를 선택하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-download.webp
alt: Windows 11 ISO 다운로드 페이지
---
::

ISO 다운로드가 시작됩니다. 약 5.47GB이며 다운로드 폴더에 저장됩니다.

CrystalFetch와 직접 다운로드의 차이점은 CrystalFetch를 사용하면 특정 버전을 다운로드할 수 있고 더 사용하기 쉬운 형식을 제공한다는 것입니다. 사용 가능한 Windows 버전도 더 자주 업데이트됩니다. CrystalFetch의 주요 목적은 UTM용 ISO를 다운로드할 때 원활한 경험을 제공하는 것입니다. 결과적으로 이 가이드에서는 CrystalFetch를 권장합니다. 두 옵션 모두 테스트를 거쳐 작동하는 것으로 확인되었습니다.

## UTM 구성

UTM에서 **+** 아이콘을 클릭하여 새 가상 머신 생성을 시작하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-app.webp
alt: 새 가상 머신을 만들기 위한 더하기 아이콘이 있는 기본 창을 보여주는 UTM 응용 프로그램 인터페이스
---
::

#### 가상화 또는 에뮬레이션

UTM은 두 가지 모드를 제공합니다.

| 모드       | 장점                   | 단점                               |
| ---------- | ---------------------- | ---------------------------------- |
| 가상화     | 더 빠름, 기본 ARM 지원 | x86 또는 비 ARM 프로세서 실행 불가 |
| 에뮬레이션 | 비 ARM 시스템 지원     | 느림, 잠재적인 성능 문제           |

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-mode.webp
alt: 가상화 및 에뮬레이션 간의 UTM 구성 모드 선택
---
::

Apple Silicon의 효율성을 활용하려면 **가상화**를 선택하십시오.

에뮬레이션은 느리지만 이전 시스템을 지원합니다. :PageLink{title="UTM 갤러리" url="https://mac.getutm.app/gallery/"}를 통해 미리 만들어진 VM도 사용할 수 있습니다.

#### 운영 체제

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-os.webp
alt: Windows, Linux 및 macOS 간의 UTM 구성 OS 선택
---
::

1. **Windows**를 선택하십시오.
2. **찾아보기**를 클릭하고 Windows ISO를 선택한 다음 **계속**을 클릭하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-utm-iso.webp
alt: ISO 선택을 보여주는 UTM 구성 인터페이스
---
::

#### 하드웨어 설정

장치 사용 가능 메모리의 절반으로 RAM을 설정하십시오 (기본값 : 4096MB 또는 4GB). 자동 관리를 위해 CPU 코어를 기본값으로 두십시오. **계속**을 클릭하십시오.

#### 저장 공간

기본 저장 공간 할당은 64GB이며 대부분의 사용자에게 적합합니다. 필요한 경우 나중에 조정하고 **계속**을 클릭하십시오.

#### 공유 폴더

선택적으로 **찾아보기**를 클릭하여 Mac과 VM 간에 공유할 폴더를 선택하십시오. 그렇지 않으면 **계속**을 클릭하십시오.

구성 요약을 검토하고 VM 이름을 지정한 다음 **저장**을 클릭하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-windows-complete.webp
alt: 완료된 UTM 구성
---
::

새 VM이 UTM 사이드바에 나타납니다. 재생 버튼을 클릭하여 가상 머신을 부팅하십시오!

## Windows 설치

가상 머신을 부팅하면 "Press Any Key to continue"라는 메시지가 표시됩니다. 그러면 Windows 설치 프로세스가 시작됩니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-cdboot.webp
alt: ISO 파일을 부팅하기 위해 아무 키나 누르라는 UTM 설정
---
::

1. 언어 설정을 선택하고 **다음**을 클릭하십시오.
2. 키보드 설정을 선택하고 **다음**을 클릭하십시오.
3. 제품 키에 대해 **제품 키가 없습니다**를 선택하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-productkey.webp
alt: 제품 키 선택을 보여주는 Windows 설치
---
::

4. 사용권 계약을 읽고 동의한 다음 **다음**을 클릭하십시오.
5. Windows를 설치할 기본 위치를 선택하고 **다음**을 클릭하십시오.

Windows 설치가 시작됩니다. 시간이 다소 걸릴 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-iso-updates.webp
alt: ISO에서 설치하는 Windows 설치
---
::

이 프로세스가 끝나면 가상 머신이 다시 시작됩니다. "Press Any Key or CD to enter startup"이라는 동일한 메시지가 표시됩니다. 이는 ISO가 여전히 연결되어 있기 때문입니다.

1. UTM 작업 표시줄에서 디스크 아이콘을 선택하십시오.
2. 첫 번째 ISO 옵션 위로 마우스를 가져가 **꺼내기**를 선택하십시오.

이렇게 하면 가상 머신이 설치 프로세스를 반복하는 대신 Windows 설치로 부팅됩니다.

## Windows 설정

1. 국가/지역을 선택하고 **예**를 눌러 계속하십시오.
2. 키보드 입력을 선택하고 **예**를 눌러 계속하십시오.
3. 필요한 경우 두 번째 키보드를 추가하십시오. 그렇지 않으면 **건너뛰기**를 눌러 계속하십시오.
4. Windows는 업데이트를 확인하고 가상 머신을 다시 시작할 수 있습니다.
5. 이름을 입력하고 **다음**을 누르십시오.
6. 비밀번호를 입력하거나 비워두고 **다음**을 누르십시오.
7. Windows는 업데이트를 다시 확인하거나 업데이트 다운로드를 시작할 수 있습니다.

가상 머신이 몇 번 다시 시작된 후 곧 사용할 준비가 됩니다!

평소보다 더 많은 업데이트를 받을 수 있는 이유는 자동으로 최신 버전의 Windows로 푸시하려고 하기 때문입니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-setup-updates.webp
alt: 다운로드 중인 업데이트를 보여주는 Windows 설치
---
::

이 후에는 Spice Guest Tools를 설치할 준비가 된 Windows로 부팅되어야 합니다.

## Spice Guest Tools

네트워킹, 화면 및 그래픽에 필요한 드라이버를 설치합니다.

UTM Guest Tools 설정을 묻는 창이 나타납니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest.webp
alt: Spice Guest Tools 설정의 기본 창
---
::

1. **다음**을 선택하십시오.
2. 사용권 계약에 동의하고 **다음**을 누르십시오.

Spice Guest Tools가 설치됩니다. 설치를 완료하려면 컴퓨터를 다시 시작해야 합니다. "Display output is not active"라는 메시지가 나타나면 가상 머신을 수동으로 다시 시작해야 할 수 있습니다.

Spice Guest Tools 팝업 창이 보이지 않으면 수동으로 실행할 수 있습니다.

1. 파일 탐색기를 여십시오.
2. CD-ROM 드라이브를 클릭하십시오.
3. .exe 파일을 찾아 여십시오.
4. 화면이 깜박이거나 디스플레이 버그가 나타날 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/windows-spiceguest-manual.webp
alt: CD-ROM이 열린 Windows 파일 탐색기를 보여줍니다
---
::

제어판을 방문하여 Spice Guest Tools가 설치되었는지 확인할 수 있습니다. **프로그램 제거** 아래에 게스트 도구가 다음과 같이 나열됩니다.

- UTM Guest Tools 0.229
- Spice webdavd ARM64 2.5.0

## 추가 참고 사항

사용 편의성을 높이려면 더 나은 해상도를 위해 디스플레이 설정을 조정하십시오.

### 해상도

가상 머신을 종료하십시오. UTM의 전원 버튼을 선택하거나 Windows 내에서 간단히 종료하십시오.

1. 가상 머신을 마우스 오른쪽 버튼으로 클릭하고 **편집**을 선택하십시오.
2. **디스플레이**를 선택하십시오.
3. 고해상도 스케일링을 활성화하려면 **Retina 모드**를 선택하고 **저장**을 클릭하십시오.
4. 가상 머신을 시작하십시오.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-settings.webp
alt: Retina 모드 활성화를 위한 UTM 디스플레이 설정
---
::

가상 머신은 이제 Mac의 기본 해상도를 사용합니다.

#### Windows 업데이트

해상도를 수정 한 후 Windows를 업데이트해야합니다. 많은 업데이트가있을 것입니다.

1. 설정 열고 **업데이트 및 보안**을 선택하십시오.
2. **업데이트 확인**을 클릭하십시오.
3. **업데이트 다운로드 및 설치**를 클릭하십시오.
4. 가상 머신을 다시 시작하십시오.

#### ISO 및 Spice Guest Tools 꺼내기

가상 머신에서 ISO 파일과 Spice Guest Tools CD를 꺼내십시오.

1. UTM 작업 표시줄에서 디스크 아이콘을 마우스 오른쪽 버튼으로 클릭하십시오.
2. 옵션 위로 마우스를 가져가 **꺼내기**를 선택하십시오.

### 문제점

Spice Guest Tools를 설치한 후 "Display output is not active" 메시지가 나타날 수 있습니다.

::media
---
source: https://cdn.xanzhu.com/v1/m4-windows/utm-display-bug.webp
alt: Display output is not active 메시지를 보여주는 창
---
::

가상 머신을 다시 시작하십시오.

#### 결론

이것으로 끝입니다! 이제 Apple Silicon에서 Windows 11이 기본적으로 실행됩니다. 이 VM 설정은 견고한 성능으로 유연성을 제공합니다.

이 가이드가 도움이 되었다면 다른 가상화 팁을 확인하거나 Mac/Windows 애호가와 공유해 보세요!
