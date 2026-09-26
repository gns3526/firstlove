# 첫사랑 OST 로컬 음원

현재 v23 오리지널 기악곡 6개(`title`, `classroom`, `date`, `phone`, `prediction`, `ending`)를 설치했습니다. 외부 곡·샘플을 사용하지 않고 직접 작곡·합성한 160kbps 스테레오 MP3입니다. 원본 작곡 스크립트와 수치 검증은 `art_refresh/audio-v23/`에 있습니다. 상황별 음악과 인물 장면은 이 6곡으로 이어지며, 보컬을 새로 녹음한 것은 아닙니다. 직접 청취 평가는 수행하지 않았고 전체 디코딩·루프 경계·클리핑·브라우저 실제 재생을 검사했습니다.

실제 사용할 MP3, OGG 또는 WAV 파일을 이 게임에 연결하는 폴더입니다. 음악 기획, Suno 생성 링크, 피아노 커버 참고 영상은 설치된 음원이 아닙니다. 기존 FL 후보를 자동으로 가져오지 않습니다.

프로젝트 루트에서 로컬 음원의 **절대 경로**를 지정합니다.

```powershell
python game/tools/import_music.py --cue title --file 'C:\Users\admin\Downloads\firstlove-title.wav'
python game/tools/import_music.py --cue spring --file 'C:\Users\admin\Downloads\spring.mp3' --source-url 'https://suno.com/song/실제-곡-ID'
python game/tools/import_music.py --check
```

`--source-url`은 실제 출처를 기록하는 선택 옵션입니다. 도구는 URL을 열거나 음원을 다운로드하지 않습니다. HTML 파일, 스트리밍 주소, 네트워크 경로, 지원하지 않는 확장자는 입력할 수 없습니다.

설치 위치는 `game/audio/<cue>.<확장자>`로 고정됩니다. 확장자와 실제 오디오 헤더를 검사한 후 임시 파일을 거쳐 복사하고, `game/data/music-files.js`에 아래 형식으로 등록합니다. 파일명에 공백이나 한글이 있어도 원래 이름은 `source`에 남습니다.

```javascript
window.MUSIC_FILES = {
  "title": {
    "src": "audio/title.wav",
    "source": "firstlove-title.wav",
    "importedAt": "2026-09-13T00:00:00+00:00"
  }
};
```

같은 cue나 목적지 파일이 있으면 기본적으로 중단합니다. 교체할 파일을 확인한 뒤 CLI에 `--replace`를 명시합니다. 확장자가 달라진 이전 파일은 삭제하지 않으며, `--check`의 `unregistered_audio_files`에 표시될 수 있습니다. 가져오기가 비정상 종료되어 `.music-import.lock`이 남았다면 다른 가져오기 프로세스가 실행 중인지 먼저 확인하세요.

```powershell
python game/tools/import_music.py --cue title --file 'C:\Users\admin\Downloads\title-final.wav' --replace
```

사용 가능한 cue:

| 구분 | cue |
| --- | --- |
| 타이틀·계절·일상 | `title`, `spring`, `classroom`, `comedy`, `summer`, `rain`, `autumn`, `winter` |
| 인물 | `seoyoon`, `daeun`, `haneul`, `yuri`, `seoha`, `ina` |
| 휴대폰·긴장 | `phone`, `midnight`, `prediction`, `night_school`, `dice`, `reveal` |
| 관계·이벤트 | `date`, `intimate`, `sad`, `trip`, `festival`, `fireworks`, `confession` |
| 결말 | `ending`, `normal_ending`, `epilogue` |
| 보컬 | `opening`, `yuri_song`, `yuri_duet`, `haneul_song` |

`--check`는 등록된 로컬 파일이 존재하는지, 경로가 지정 폴더를 벗어나지 않는지, 파일에 MP3 Layer III / OGG Vorbis·Opus / WAV PCM·float 식별 정보가 있는지 확인합니다. 설치가 0개이면 0개라고 보고합니다. **헤더 통과는 전체 파일 디코딩, 실제 청취, 볼륨 균형 또는 루프 이음새 검수의 완료를 뜻하지 않습니다.**

Windows 실행본은 `art_refresh/package_release.py`로 갱신하면 이 폴더의 음원과 음악 등록 파일이 함께 복사됩니다. 음원을 이미지용 `game/data/assets.json`의 `all` 목록에 추가하지 마세요.
