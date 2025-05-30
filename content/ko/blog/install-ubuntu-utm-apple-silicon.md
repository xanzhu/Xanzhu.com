---
title: "UTM을 이용한 Apple Silicon에서의 Ubuntu 24.10"
description: "무료 오픈소스 가상화 도구인 UTM을 사용하여 Apple Silicon에 Ubuntu 24.10을 설정하는 방법을 알아보세요."
date: "2025-04-15"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/covers/utm-ubuntu-m4.webp"
alt: "Apple Silicon의 UTM을 사용한 Ubuntu 24.10"
---

Ubuntu는 이제 네이티브 ARM 데스크톱 빌드를 제공합니다. 이는 Linux를 탐색하고, 개발하거나, 효율적으로 가상화하려는 Apple Silicon 사용자에게 완벽합니다. 이 가이드에서는 macOS에 맞춰 제작된 무료 오픈소스 가상화 도구인 UTM을 사용하여 Ubuntu 24.10 (Oracular Oriole) 을 가상 머신에 설정하는 과정을 안내합니다.

이전 :PageLink{title="이전 글" url="/blog/apple-silicon-virtual-machine-setup#ubuntu-2204-1"}
에서는 데스크톱 환경을 추가한 Ubuntu Server 설정에 대해 자세히 설명했습니다. 이 업데이트된 가이드는 최근 출시된 전용 ARM 데스크톱 빌드를 사용하여 프로세스를 단순화합니다.

## 요구 사항

- UTM 버전 4.6.5
- 최소 30GB의 여유 저장 공간
- Ubuntu 24.10 ISO (**ARM64**)
- macOS 15
- Apple Silicon 장치 (M1-M4 시리즈)

## UTM 다운로드

에서 UTM 버전 4.6.5를 다운로드하세요. 이전 4.x.x 버전도 작동해야 합니다. :PageLink{title="UTM Github 릴리스 페이지" url="https://github.com/utmapp/UTM/releases"}

을 통해 UTM 자동 업데이트가 가능하지만 유료입니다. 또는 GitHub 버전을 사용하고 필요에 따라 수동으로 업데이트하세요. :PageLink{title="앱 스토어 버전" url="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817"}

UTM을 응용 프로그램 폴더로 드래그하고 올바르게 열리는지 확인하세요.

## Ubuntu ISO 다운로드

다음으로 :PageLink{title="Ubuntu 웹사이트" url="https://cdimage.ubuntu.com/releases/oracular/release/"} 에서 약 3.54GB 크기의 Ubuntu 24.10 **ARM64** ISO를 다운로드하세요.

이것은 Ubuntu의 첫 번째 ARM64 데스크톱 빌드이며, 향후 LTS 버전이 계획되어 있습니다. 사전 릴리스 버전이므로 일부 기능은 실험적일 수 있습니다.

ISO가 다운로드되면 UTM을 열어 가상 머신을 생성하세요.

## UTM 구성

UTM에서 **+** 아이콘을 클릭하여 새 가상 머신 생성을 시작합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm.webp
alt: 새 가상 머신을 생성하기 위한 더하기 아이콘이 있는 UTM 애플리케이션 인터페이스의 메인 창
---
::

### 가상화 또는 에뮬레이션

UTM은 두 가지 모드를 제공합니다.

- **가상화**
- **에뮬레이션**

| 모드       | 장점                       | 단점                               |
| ---------- | -------------------------- | ---------------------------------- |
| 가상화     | 더 빠름, 네이티브 ARM 지원 | x86 또는 비 ARM 프로세서 실행 불가 |
| 에뮬레이션 | 비 ARM 시스템 지원         | 느림, 잠재적인 성능 문제           |

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-mode.webp
alt: 가상화 및 에뮬레이션 간의 UTM 구성 모드 선택
---
::

Apple Silicon의 효율성을 활용하려면 **가상화** 를 선택하세요.

에뮬레이션은 더 느리지만 이전 시스템을 지원합니다. :PageLink{title="UTM 갤러리" url="https://mac.getutm.app/gallery/"} 를 통해 미리 빌드된 VM도 사용할 수 있습니다.

### 운영 체제

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-os.webp
alt: Linux 및 macOS 간의 UTM 구성 OS 선택
---
::

1. **Linux** 를 선택하세요.
2. 네이티브 성능을 위해 **Apple 가상화 사용** 을 활성화하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt.webp
alt: Apple 가상화를 위한 UTM 구성
---
::

Apple 가상화는 macOS 15에서 성능을 최적화하지만, 이전 macOS 버전에서도 안정성이 떨어질 수 있지만 작동할 수 있습니다. 또는 더 넓은 호환성을 위해 **Apple 가상화 사용** 을 선택 해제하여 QEMU를 사용하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu.webp
alt: QEMU를 위한 UTM 구성
---
::

**찾아보기** 를 클릭하고 Ubuntu ISO를 선택한 다음 **계속**을 클릭하세요.

### 하드웨어 설정

RAM을 장치 사용 가능 메모리의 절반으로 설정하세요 (기본값: 4096MB 또는 4GB). CPU 코어는 자동 관리를 위해 기본값으로 두세요. **계속** 을 클릭하세요.

### 저장 공간

기본 저장 공간 할당량은 64GB이며, 대부분의 사용자에게 적합합니다. 필요한 경우 나중에 조정하고 **계속** 을 클릭하세요.

### 공유 폴더

선택적으로 **찾아보기** 를 클릭하여 Mac과 VM 간에 공유할 폴더를 선택하세요. 그렇지 않으면 **계속** 을 클릭하세요.

구성 요약을 검토하고 VM 이름을 지정한 다음 **저장** 을 클릭하세요.

새 VM이 UTM의 사이드바에 나타납니다. 재생 버튼을 클릭하여 시작하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-complete-avirt.webp
alt: UTM 애플리케이션 완료된 가상 머신
---
::

## Ubuntu 설치

Ubuntu 설정이 자동으로 시작됩니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-linux-install.webp
alt: Ubuntu 가상 머신 설치 선택
---
::

**Ubuntu 사용해보기 또는 설치** 를 선택하세요.

설치 프로그램이 연결되어 필요한 파일을 다운로드합니다. Apple 가상화를 사용하면 디스플레이 스케일링이 약간 다를 수 있습니다.

Ubuntu 환영 화면이 나타납니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-welcome.webp
alt: 부팅 후 Ubuntu 환영 화면
---
::

1. 언어를 선택하고 **다음** 을 클릭하세요.
2. 키보드 레이아웃을 선택하고 **다음** 을 클릭하세요.
3. 인터넷에 연결하고 Mac의 Wi-Fi를 공유하려면 **유선 연결 사용** 이 선택되어 있는지 확인하세요. **다음** 을 클릭하세요.
4. **Ubuntu 설치** 를 선택하고 **다음** 을 클릭하세요.
5. **대화형 설치** 를 선택하고 **다음**을 클릭하세요.
6. 앱에 대해 **기본 선택** 을 선택하고 **다음**을 클릭하세요.
7. 선택적으로 독점 소프트웨어 설치를 활성화하세요 (나중에 추가 가능). **다음** 을 클릭하세요.
8. **디스크 지우고 Ubuntu 설치** 를 선택하고 **다음** 을 클릭하세요.
9. 이름, 컴퓨터 이름, 사용자 이름 및 비밀번호 (예: "test")를 입력하세요. 비밀번호를 확인하고 **다음** 을 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-account.webp
alt: 샘플 값을 보여주는 Ubuntu 계정 생성
---
::

10. 지도에서 시간대를 선택하고 **다음** 을 클릭하세요.
11. 선택 사항을 검토하고 **설치** 를 클릭하세요.

설치 프로그램은 파일을 복사하고 구성하며, 다소 시간이 걸릴 수 있습니다. 메시지가 표시되면 **지금 다시 시작** 을 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-restart.webp
alt: Ubuntu가 사용자에게 다시 시작하라는 메시지를 표시함
---
::

- **Apple 가상화**: VM이 자동으로 다시 시작됩니다.
- **QEMU**: 디스크 아이콘을 클릭하고 ISO를 선택한 다음 **꺼내기** 를 선택하여 ISO를 수동으로 꺼내세요. **Enter** 키를 눌러 재부팅하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-eject.webp
alt: 계속하려면 ISO를 꺼내라는 Ubuntu 메시지
---
::

이제 VM이 Ubuntu로 부팅됩니다. QEMU를 사용하는 경우 "Display output is not active" 메시지가 잠시 나타날 수 있습니다. 데스크톱이 로드될 때까지 1-2분 정도 기다리세요.

## 추가 참고 사항

사용 편의성을 높이려면 더 나은 해상도를 위해 디스플레이 설정을 조정하세요.

### 해상도

#### Apple 가상화

1. 실행 중인 VM을 중지하세요 (마우스 오른쪽 버튼 클릭 후 **중지** 선택).
2. VM을 마우스 오른쪽 버튼으로 클릭하고 **편집** 을 선택한 다음 **디스플레이** 로 이동하세요.
3. **HiDPI (Retina)** 를 활성화하고 동적 해상도를 활성화된 상태로 유지하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-avirt-display.webp
alt: Apple 가상화 디스플레이 설정을 위한 UTM 구성
---
::

#### QEMU

1. VM을 중지하고 편집한 다음 **디스플레이** 로 이동하세요.
2. 고해상도 스케일링을 활성화하려면 **Retina 모드** 를 선택하고 **저장** 을 클릭하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-display-setting.webp
alt: QEMU 디스플레이 설정을 위한 UTM 구성
---
::

3. VM을 부팅하세요. UI가 작게 보일 수 있습니다.
4. Ubuntu에서 **설정** 을 열고 **디스플레이** 를 선택한 다음 **배율** 을 200%로 설정하세요.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-ubuntu-display200.webp
alt: 고해상도 스케일링을 위한 Ubuntu 디스플레이 설정
---
::

이제 데스크톱은 선명도를 위해 네이티브 macOS 해상도를 사용합니다.

마지막으로 Ubuntu 패키지를 업데이트하세요. 메뉴를 열고 **소프트웨어 업데이트** 를 선택한 다음 사용 가능한 업데이트를 설치하여 최적의 성능을 보장하세요.

### 문제점 (QEMU)

QEMU 부팅 중에 "Display output is not active" 메시지가 나타날 수 있습니다. 데스크톱이 로드될 때까지 1-2분 정도 기다리세요. :PageLink{title="커뮤니티 토론" url="https://github.com/utmapp/UTM/discussions/5555"} 에서는 사용자 설정에 따라 이 문제를 해결할 수 있는 해결 방법을 제시합니다.

::media
---
source: https://cdn.xanzhu.com/v1/m3-ubuntu/utm-qemu-bug.webp
alt: UTM QEMU가 알려진 버그인 데스크톱 로드를 기다리라는 메시지를 표시함
---
::

### 결론

이것으로 끝입니다! 이제 Apple Silicon에서 완전한 GUI 지원으로 Ubuntu 24.10을 네이티브로 실행할 수 있습니다. 코드를 테스트하든, Linux를 배우든, 아니면 단순히 탐색하든, 이 VM 설정은 견고한 성능으로 유연성을 제공합니다.

이 가이드가 도움이 되었다면 다른 가상화 팁을 확인하거나 Mac/Linux 애호가와 공유해 보세요!
