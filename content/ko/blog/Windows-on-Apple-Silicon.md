---
title: "Apple Silicon 2023에서 Windows 가상 머신 설정"
description: "무료 오픈 소스 가상화 소프트웨어인 UTM을 사용하여 Apple Silicon에서 Windows를 설정하는 방법을 알아보세요."
date: "2023-11-23"
tag: "가이드"
toc: true
feature: true
img: "/images/blog/wvm/wvm.png"
alt: "3가지 새로운 칩셋의 아이콘을 표시하는 2023년 Macbook Pro Black Edition"
---

이 문서에서는 UTM을 사용하여 ARM 프로세서에서 최신 버전의 Windows를 사용하는 방법을 다룹니다. 이는 M1부터 M3 칩셋까지의 새로운 Mac 라인업을 포함하여 모든 Apple Silicon 장치에서 작동합니다.

장치가 2020년에 출시된 새로운 칩셋을 사용하고 있는지 확인하려면 Apple 아이콘을 클릭하고 "이 Mac 정보"를 선택하세요. 여기서는 Intel인지 아니면 새로운 M1-M3 칩을 사용하는지에 대한 세부 정보를 확인할 수 있습니다.

이는 연초에 UTM 및 Parallels를 사용한 Windows 설치를 다룬 <PageLink title="이전 기사" url="/ko/blog/apple-silicon-virtual-machine-setup"></PageLink> 의 업데이트 버전입니다. 그 이후로 프로세스가 훨씬 더 쉽고 안정적이 되었습니다!

다운로드:

- <PageLink title="UTM 웹사이트" url="https://mac.getutm.app/"></PageLink>
- <PageLink title="UTM Github" url="https://github.com/utmapp/UTM/releases"></PageLink>
- <PageLink title="CrystalFetch" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"></PageLink>

전제 조건:

- 최소 30GB의 무료 저장 공간(Windows에서는 많은 시간이 소요됨)
- ISO 파일 설치를 위한 WiFi 연결 / Windows
- UTM 버전: 4.4.4 이상

## UTM 설치하기

- <PageLink title="공식 웹사이트" url="https://mac.getutm.app/"></PageLink> 에서 UTM을 다운로드하거나 <PageLink title="Github" url="https://github.com/utmapp/UTM/releases"></PageLink>

<i>참고: UTM은 앱 스토어에서도 사용할 수 있습니다. 단, UTM은 업데이트를 제공하는 유료 옵션이므로 위의 두 가지 옵션처럼 모든 업데이트를 수동으로 다운로드해야 합니다.</i>

응용 프로그램을 열면 다음과 같이 표시됩니다.

<Media source="/images/blog/wvm/wvm-1.png" alt="UTM 애플리케이션 오프닝 화면"></Media>

## CrystalFetch

이는 UTM 가상 머신에 필요한 업데이트된 Windows ISO 파일을 생성하는 데 도움이 되는 무료 도구입니다.

1. <PageLink title="앱 스토어" url="https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12"></PageLink> 에서 CrystalFetch를 다운로드하세요.
1. CrystalFetch를 열고 언어 및 버전 선택(Windows 11)

다음과 유사해야 합니다.

<Media source="/images/blog/wvm/wvm-2.png"  alt="CrystalFetch 애플리케이션 시작 화면"></Media>

3. 다운로드를 클릭하세요

ISO 파일을 다운로드해야 합니다. 파일 크기가 약 5GB이므로 시간이 다소 걸릴 수 있습니다. 바탕 화면이나 다운로드 폴더 등 기억할 수 있는 위치에 이 파일을 저장합니다.

4. Crystal Fetch를 닫고 UTM을 엽니다.

## 가상 머신 생성

이제 가상 머신을 설정할 수 있습니다!

1. 새 가상 머신 생성을 클릭하세요.
2. 가상화를 선택하세요
3. 윈도우를 선택하세요
4. 찾아보기를 클릭하고 CrystalFetch에서 다운로드한 ISO 파일을 선택한 다음 계속을 선택합니다.

이것과 비슷하게 보일 것입니다

<Media source="/images/blog/wvm/wvm-3.png"  alt="가상 머신의 UTM 구성 화면"></Media>

1. 이 가상 머신에 사용할 RAM의 양을 선택합니다. 4096이 기본값이며 4GB와 같습니다. 시스템이 사용하는 것의 절반이 이상적이지만 필요한 경우 나중에 조정할 수 있습니다. 지금은 기본값으로 두세요.

2. 사용할 저장용량을 선택하세요. 기본적으로 이는 가상 머신이 보유할 수 있는 제한인 64GB로 설정됩니다. 다시 말하지만, 필요한 경우 나중에 이를 조정할 수 있습니다.

3. Mac과 가상 머신 간에 폴더나 디렉터리를 공유해야 하는 경우 찾아보기를 클릭하고 폴더나 경로를 선택한 다음 계속을 누릅니다. 그렇지 않으면 계속을 눌러 다음 단계로 진행하세요.

4. 가상 머신에 이름을 지정한 다음 저장을 선택합니다.

이제 가상 머신이 생성되었습니다. 이와 비슷한 내용이 표시되어야 합니다.

<Media source="/images/blog/wvm/wvm-4.png"  alt="UTM 가상 머신 표시"></Media>

## 가상 머신 실행

1. 방금 만든 가상 머신을 선택하고 재생 아이콘을 누릅니다. 또는 마우스 오른쪽 버튼을 클릭하고 "실행"을 선택할 수도 있습니다.

이제 가상 머신이 부팅됩니다. 이 과정에서 새 창이 열리고 가장 먼저 "CD에서 부팅하려면 아무 키나 누르십시오"라는 메시지가 나타납니다.

2. 이 창 내부를 클릭하고 아무 키나 누르십시오.

<Media source="/images/blog/wvm/wvm-5.png"  alt="계속 진행하려면 아무 키나 누르라는 메시지를 표시하는 UTM"></Media>

이 단계는 중요합니다. 키를 충분히 빨리 누르지 않으면 다음 화면이 표시되기 때문입니다.

<Media source="/images/blog/wvm/wvm-5b.png"  alt="부팅 오류를 표시하는 UTM"></Media>

이 문제를 해결하려면 가상 머신을 닫았다가 다시 실행하거나 삼각형 버튼인 가상 머신 다시 시작 버튼을 선택하세요.

위의 오류가 계속 발생하는 경우 이 문서의 문제 및 버그 섹션을 참조하세요. 추가 도움이 필요한 경우

## 윈도우 설치

이 작업을 수행하면 이제 Windows 설치를 구성할 수 있는 화면이 표시됩니다.

<Media source="/images/blog/wvm/wvm-6.png"  alt="Windows ISO 설치 메뉴"></Media>

1. 언어를 선택하고 다음을 누르세요.

2. Windows 활성화: 키를 입력하라는 메시지가 표시됩니다. "열쇠가 없습니다."를 클릭하기만 하면 됩니다.

3. 사용할 Windows 버전을 선택하세요. Windows 11 Home 또는 Pro를 선택하고 다음을 누릅니다.

4. 이용약관에 동의한다는 체크박스를 선택하고 다음을 누르세요.

5. Windows를 설치할 드라이브를 선택합니다. 하나만 있어야 하므로 Next를 누르면 됩니다.

이제 Windows 설치 프로그램이 Windows에 필요한 파일을 설치하기 시작합니다. 이 작업에는 시간이 좀 걸립니다.

이 작업이 완료되면 몇 번 재부팅됩니다. 방해받지 않고 실행되도록 하세요. 다음 화면에 도달하면 재부팅 시 설치 프로그램이 다시 실행되지 않도록 현재 ISO를 꺼내야 합니다.

<Media source="/images/blog/wvm/wvm-7.png" alt="가상 머신에서 현재 ISO를 꺼내는 방법에 대한 UTM 가이드"></Media>

1. 디스크 아이콘을 클릭합니다
2. CD/DVD 위에 마우스를 놓고 꺼내기를 선택합니다.

이는 기본 Windows 11 설정으로, 여기서 이름, 비밀번호 및 기타 Windows 설정을 구성해야 합니다. 업데이트가 설치될 수 있으므로 시간이 다소 걸릴 수 있습니다.

지시에 따라 설정을 완료합니다.

## Spice Guest Tools 설치

새 가상 머신에 로그인한 후 Spice Guest Tools가 설치되어 있는지 확인해야 합니다. 이렇게 하면 인터넷, 화면 해상도 등에 적합한 드라이버를 얻는 데 도움이 됩니다.

기본적으로 설치 메뉴가 나타납니다. 다음을 클릭하여 설치하고 기다리세요. 이렇게 하면 드라이버가 설치되므로 설치가 완료될 때까지 가상 머신이 깜박이거나 속도가 느려질 수 있습니다.

<Media source="/images/blog/wvm/wvm-8.png" alt="UTM Spice 게스트 도구 설치 프로그램 화면"></Media>

가상 머신이 응답하지 않으면 가상 머신을 닫고 재부팅하세요.

## 마무리

이제 가상 머신이 올바르게 설치되었으며 사용할 준비가 되었습니다. 이것은 UTM에서 실행되는 Windows 가상 머신입니다.

이는 ARM 기반이므로 일부 응용 프로그램이 작동하지 않을 수 있으며 일반적인 성능이 완벽하지 않을 수 있습니다. UTM 메인 메뉴에서 가상 머신을 마우스 오른쪽 버튼으로 클릭하고 "편집"을 선택하면 작동하고 스토리지, RAM 및 프로세스에 대한 조정을 찾을 수 있습니다.

## 문제 및 참고 사항

가상 머신 실행의 첫 번째 단계에서 Windows로 부팅할 수 없습니다.
ISO 파일에 문제가 있을 수 있습니다. 이 문제를 해결하려면 CD/DVD 위에 마우스를 올려 놓은 디스크 아이콘을 선택하고 꺼내기를 누른 다음 ISO 파일을 다시 선택한 다음 가상 머신을 재부팅하세요.

가상 머신을 시작하면 이미 가상 머신을 설치한 후 "CD에서 부팅하려면 아무 키나 누르십시오"라는 메시지가 표시됩니다.
이는 ISO 파일이 아직 존재하기 때문입니다. 이 문제를 해결하려면 ISO 파일을 꺼내십시오. Windows 설치 섹션에 표시된 예를 참조하세요.

Windows 11에는 활성화 키가 필요하지 않습니다.
활성화 키를 묻는 메시지가 나타나면 "키가 없습니다."를 선택하세요. Windows를 정상적으로 실행할 수 있지만 일부 기능에 액세스하지 못할 수도 있습니다.

인터넷이 작동하지 않고 화면 크기가 올바르지 않습니다.
Spice Guest Tools가 올바르게 설치되었는지 다시 확인하세요. Spice 게스트 도구를 설치하려면 다음 단계를 따르세요.

1. 파일 탐색기를 클릭하세요.
2. CD 드라이브로 이동하여 클릭합니다.
3. "utm-guest-tools"를 두 번 클릭하여 설치를 실행합니다.

추가 도움이 필요하시면 UTM <PageLink Link title="문서" url="https://docs.getutm.app/guides/windows/"></PageLink> 를 참조하세요.
