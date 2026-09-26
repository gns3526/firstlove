// a_seoha_3.js — 서하 일상 35편: 조우 8 · 전화 4 · 하굣길 4 · 문자 4 · 선물 · 이동 2 · 밤의 메시지 8 · 데이트 4
// 언제·몇 번 나올지 모르는 장면들이다. 특정 사건을 전제하지 않고, 사귀는 사이처럼 쓰지 않는다.
registerScenes({

  // ───────── 조우 (평일 아침·점심, 학교) ─────────

  "enc_seoha_spring_morning": {
    title: "봄 아침 - 1분짜리 지각 명단",
    steps: [
      {bg:"school_gate", time:"morning", fx:"petals"},
      "교문을 서른 걸음 앞두고 종이 울렸다. 벚꽃잎을 헤치며 뛰었다.",
      {show:"t_kang", pos:"left", anim:"in"},
      {say:"t_kang", text:"거기, 뛰지 마! 뛰어 봤자 이미 늦었다.", emote:"exclaim"},
      {show:"seoha", pos:"right"},
      "강철 선생님 옆에서 서하가 클립보드를 들고 있었다. 맨 위에 '지각 명단'.",
      {say:"seoha", text:"2학년 3반 {N}. 08시 11분."},
      {say:"t_kang", text:"1분도 지각은 지각이다. 운동장 세 바퀴 실시!"},
      "그때 볼펜이 멈췄다. 서하가 손목시계와 교문 위 시계를 번갈아 봤다.",
      {say:"seoha", text:"…시계가 빨랐네."},
      "수정테이프가 한 번 지나갔다. 내 이름이 있던 줄이 반듯하게 하얘졌다.",
      {say:"seoha", text:"강 선생님, 다시 확인했습니다. 해당 학생 없습니다."},
      {say:"t_kang", text:"…그래? 서하 씨가 없다면 없는 거지. 다음!", emote:"question"},
      {hide:"t_kang", text:"호루라기 소리가 다음 지각생 쪽으로 멀어졌다."},
      {say:"me", text:"시계, 진짜 빨랐어요?"},
      {say:"seoha", text:"응. 오늘 아침에만."},
      {choice:[
        {text:"감사해요. 내일은 10분 일찍 올게요.", aff:{seoha:3}, goto:"early"},
        {text:"그 시계, 가끔 또 빨라지면 안 돼요?", aff:{seoha:2}, goto:"again"},
        {text:"기록은 정확해야 한다면서요.", aff:{seoha:4}, goto:"exact"}
      ]},
      {label:"early"},
      {say:"seoha", text:"10분은 과해. 5분이면 돼. 내가 명단 들기 전에 인사할 만큼만.", emote:"blush"},
      {jump:"end"},
      {label:"again"},
      {say:"seoha", text:"시계는 한 번만 빨라. 두 번이면 고장이고, 고장은 교체야.", emote:"laugh"},
      {jump:"end"},
      {label:"exact"},
      {say:"seoha", text:"맞아. 틀린 시계로 적은 줄은, 지워야 정확해져."},
      {say:"seoha", text:"…그런 걸로 해 두자. 오늘은.", emote:"laugh"},
      {label:"end"},
      "서하가 남색 수첩을 펴고 무언가를 짧게 적었다. 네모 칸 하나였다.",
      {fx:"heart"},
      {say:"seoha", text:"들어가, {N}. 이번엔 뛰지 말고."}
    ]
  },

  "enc_seoha_spring_noon": {
    title: "봄 점심 - 삼각김밥과 학생 의견",
    steps: [
      {bg:"hallway1", time:"noon"},
      "점심시간의 교무동. 안내 책상 쪽에서 비닐 찢어지는 소리가 났다.",
      {show:"seoha", pos:"center"},
      "서하가 삼각김밥을 든 채 굳어 있었다. 김이 반쯤 찢겨 대롱거렸다.",
      {say:"seoha", text:"…봤어?", emote:"surprise"},
      {say:"seoha", text:"번호 순서대로 뜯었어. 1, 2, 3. 설명서가 틀린 거야."},
      {say:"me", text:"급식실 안 가시고요?"},
      {say:"seoha", text:"교장실 전화는 점심에 더 울려. …마침 잘 왔다. 학생 의견이 필요해."},
      "서하가 종이컵 두 개를 내밀었다. 휴게실에 새로 들인 커피머신에서 뽑은 커피였다.",
      {say:"seoha", text:"만족도 조사표에 '학생 의견' 칸이 있어. 같이 마셔 줄래?"},
      {fx:"shake", text:"동시에 한 모금. …혀가 먼저 뒷걸음질을 쳤다."},
      "서하는 무표정을 지키고 있었다. 눈썹만 따로 떨렸다.",
      {say:"seoha", text:"…어때? 솔직하게."},
      {say:"me", text:"깊어요. 아주 깊은… 한약이요."},
      "버티던 서하의 입꼬리가 무너졌다. 우리는 컵을 내려놓고 같이 웃었다.",
      {say:"seoha", text:"나도 방금 달여 먹는 줄 알았어.", emote:"laugh"},
      {fx:"heart"},
      {choice:[
        {text:"서하 씨 표정도 조사표에 적어야죠.", aff:{seoha:3}, goto:"face"},
        {text:"역시 자판기 블랙 캔커피가 최고예요.", aff:{seoha:4}, goto:"can"},
        {text:"설탕 가져올게요. 반 봉지면 될까요?", aff:{seoha:2}, goto:"sugar"}
      ]},
      {label:"face"},
      {say:"seoha", text:"내 표정은 기밀이야. …귀 빨개진 것도 적으면 안 돼.", emote:"blush"},
      {jump:"end"},
      {label:"can"},
      {say:"seoha", text:"너, 뭘 좀 아는구나. 그건 조사표 말고 내 수첩에 적을게."},
      {jump:"end"},
      {label:"sugar"},
      {say:"seoha", text:"반 봉지. …응, 나도 그게 필요했어. 고마워."},
      {label:"end"},
      "서하가 조사표에 또박또박 적었다. '학생 의견: 한약 같음.'",
      {say:"seoha", text:"확인. 서명은 네가 해. 의견 낸 사람 이름은 남아야 하니까."}
    ]
  },

  "enc_seoha_summer_morning": {
    title: "여름 아침 - 화단의 물줄기",
    steps: [
      {bg:"school_gate", time:"morning"},
      "여름 아침. 교문 옆 화단에서 물소리가 났다.",
      {show:"seoha", pos:"center"},
      "서하가 호스를 들고 있었다. 수국 한 포기마다 셋을 세고 다음 포기로 넘어갔다.",
      {say:"me", text:"안녕하세요, 서하 씨."},
      {say:"seoha", text:"아, {N}. 좋은 아—"},
      {fx:"shake", text:"돌아보는 서하를 따라 호스도 돌아봤다. 물줄기가 정확히 내 가슴팍에 꽂혔다."},
      {say:"me", text:"서, 서하 씨! 물, 물부터 잠가요."},
      "서하가 호스를 꺾어 쥐었다. 물은 멈췄고, 셔츠는 계속 젖어 갔다.",
      {say:"seoha", text:"…확인 없이 물 틀면 안 되는 거였네.", emote:"surprise"},
      {say:"me", text:"그걸 지금 확인하신 거예요?"},
      {say:"seoha", text:"응. 방금. 아주 확실하게."},
      "서하가 울타리에 걸어 둔 수건을 내밀었다. 햇볕에 데워져 따뜻했다.",
      {say:"seoha", text:"머리까지 튀었어. …내가 닦아 줘도 돼?"},
      "고개를 끄덕였다. 수건 너머로 손바닥이 톡, 톡, 톡. 딱 세 번.",
      {fx:"heart"},
      {choice:[
        {text:"덕분에 아침부터 시원해졌어요.", aff:{seoha:3}, goto:"cool"},
        {text:"다음엔 틀기 전에 '물 나갑니다' 해 주세요.", aff:{seoha:2}, goto:"call"},
        {text:"화단은 제가 마저 할게요. 호스 주세요.", aff:{seoha:4}, goto:"hose"}
      ]},
      {label:"cool"},
      {say:"seoha", text:"긍정적이네. 좋아. …그래도 미안해.", emote:"laugh"},
      {jump:"end"},
      {label:"call"},
      {say:"seoha", text:"알겠어. 복창할게. '물 나갑니다.'"},
      {jump:"end"},
      {label:"hose"},
      {say:"seoha", text:"…호스를 넘기면, 이번엔 내가 젖을 차례야?"},
      {say:"me", text:"그럴 리가요. …아마도요."},
      {say:"seoha", text:"'아마도'는 기록해 둘게.", emote:"laugh"},
      {label:"end"},
      "예비종이 울렸다. 서하가 수건을 내 어깨에 걸쳐 주었다.",
      {say:"seoha", text:"1교시 끝나고 돌려줘. 마를 때까지는 네 거야."}
    ]
  },

  "enc_seoha_summer_noon": {
    title: "여름 점심 - 효력 없는 부채",
    steps: [
      {bg:"vending", time:"noon"},
      "점심시간 자판기 앞. 매미 소리가 창문을 흔들었다.",
      {show:"seoha", pos:"center"},
      "서하가 창가에서 서류 뭉치로 부채질을 하고 있었다. 안경이 코끝까지 흘러내린 채였다.",
      {say:"seoha", text:"교무실 에어컨이 고장 났어. 기사님은 네 시에 오신대."},
      {say:"me", text:"그거… 결재 서류 아니에요?"},
      {say:"seoha", text:"결재 전이야. 아직 아무 효력 없는 종이니까 괜찮아."},
      "아이스크림 자판기에서 컵 두 개를 뽑았다. 딸기 하나, 초코 하나.",
      {say:"me", text:"하나 고르세요."},
      {say:"seoha", text:"하나만 고르면 다른 맛은 모르잖아."},
      "서하가 두 컵의 뚜껑을 열고, 나무 숟가락으로 가운데에 선을 그었다. 정확히 반.",
      {say:"seoha", text:"반씩. 딸기 반, 초코 반. 확인."},
      {choice:[
        {text:"자로 잰 것 같아요. 어떻게 한 거예요?", aff:{seoha:3}, goto:"line"},
        {text:"그럼 서하 씨가 먼저 드세요.", aff:{seoha:2}, goto:"first"},
        {text:"선 녹기 전에 빨리 먹어요!", aff:{seoha:4}, goto:"melt"}
      ]},
      {label:"line"},
      {say:"seoha", text:"눈대중이야. 서류 여백을 몇 년 맞추다 보면 이렇게 돼."},
      {jump:"eat"},
      {label:"first"},
      {say:"seoha", text:"그럼 첫 입은 내가, 딸기로. 두 번째는 네 차례. 순서도 반반."},
      {jump:"eat"},
      {label:"melt"},
      "말이 끝나기도 전에 선이 흐물흐물 무너졌다. 딸기가 초코 쪽으로 넘어갔다.",
      {say:"seoha", text:"…국경이 무너졌네.", emote:"surprise"},
      {label:"eat"},
      "창턱에 컵 두 개를 나란히 놓고, 숟가락 두 개로 떠먹었다.",
      "컵 위로 고개를 숙이다 보니 이마가 가까워졌다. 안경 너머 속눈썹이 보였다.",
      {fx:"heart"},
      {say:"seoha", text:"…에어컨 없는 날엔 이 거리도 덥네.", emote:"blush"},
      "서하가 반걸음 물러나더니, 서류로 내 쪽에 바람을 부쳐 주었다.",
      {say:"seoha", text:"아이스크림 값이야. 효력 없는 종이로 치를게."}
    ]
  },

  "enc_seoha_autumn_morning": {
    title: "가을 아침 - 관객 한 명",
    steps: [
      {bg:"hallway2", time:"morning"},
      "조회 전 2층 복도. 창가 쪽에서 낮은 목소리가 같은 말을 되풀이했다.",
      {show:"seoha", pos:"center"},
      "서하가 원고를 든 채 창문을 향해 인사하고 있었다. '안녕하십니까, 하늘고등…'",
      {say:"me", text:"…안녕하세요?"},
      {fx:"shake", say:"seoha", text:"…언제부터 있었어?", emote:"surprise"},
      {say:"me", text:"'하늘고등'부터요."},
      {say:"seoha", text:"처음부터네."},
      {say:"seoha", text:"행사 사회야. 원고는 다 외웠는데, 사람 앞에만 서면 첫 줄이 안 나와."},
      {say:"seoha", text:"창문 앞에선 잘만 나오는데."},
      {choice:[
        {text:"제가 관객 할게요. 한 번 해 보세요.", aff:{seoha:4}, goto:"audience"},
        {text:"관객을 호박이라고 생각하래요.", aff:{seoha:3}, goto:"pumpkin"},
        {text:"원고 보고 읽으면 안 돼요?", aff:{seoha:2}, goto:"paper"}
      ]},
      {label:"audience"},
      {say:"seoha", text:"…관객 한 명. 그 정도면 해 볼게."},
      {jump:"stage"},
      {label:"pumpkin"},
      {say:"seoha", text:"호박… 그럼 너도 호박이야?"},
      {say:"me", text:"네. 맨 앞줄 호박이요."},
      {say:"seoha", text:"말하는 호박은 처음이네.", emote:"laugh"},
      {jump:"stage"},
      {label:"paper"},
      {say:"seoha", text:"사회자가 종이만 보면 관객도 종이만 봐. …한 번만 들어 줘."},
      {label:"stage"},
      "서하가 원고를 접고 나를 똑바로 봤다.",
      {say:"seoha", text:"안녕하십니까. 오늘 사회를 맡은… 맡은…"},
      {say:"me", text:"…다음은 서하 씨 이름인데요."},
      {say:"seoha", text:"알아. …관객이 너무 가까워서 그래.", emote:"blush", fx:"heart"},
      "한 걸음 물러나려는데, 서하가 원고로 내 앞을 가로막았다.",
      {say:"seoha", text:"거기 있어. 처음부터 다시 할게."},
      "두 번째엔 끝까지 갔다. 박수를 치자 서하의 귀가 먼저 빨개졌다.",
      {say:"seoha", text:"확인. 행사 날엔 뒤쪽에 서 있어. 내가 보이는 데."}
    ]
  },

  "enc_seoha_autumn_noon": {
    title: "가을 점심 - 은행나무의 기준",
    steps: [
      {bg:"school_yard", time:"noon", fx:"leaves"},
      "점심시간 교정. 은행잎이 바람 한 번에 한 움큼씩 쏟아졌다.",
      {show:"seoha", pos:"center"},
      "서하가 학교 카메라를 들고 은행나무 둘레를 돌고 있었다.",
      {say:"seoha", text:"{N}, 거기 나무 옆에 서 줄래? 학교 기록용 사진이야."},
      {say:"seoha", text:"나무 크기를 비교할 기준이 필요해. 키 몇이야?"},
      {say:"me", text:"백칠십… 몇이요. 재 본 지 오래돼서요."},
      {say:"seoha", text:"그럼 오늘은 나무가 너를 재는 날이네."},
      "나무 옆에 섰다. 손 둘 곳을 몰라 차렷을 했다. 그러자 더 차렷이 됐다.",
      {say:"seoha", text:"너무 차렷이야. 나무가 긴장하겠어."},
      "브이를 해 봤다. 서하가 고개를 저었다. 이번엔 나무에 기대 봤다.",
      {say:"seoha", text:"그건… 화보잖아."},
      "서하가 카메라를 내리고 웃음을 터뜨렸다. 어깨까지 흔들며, 소리 내서.",
      {say:"seoha", text:"미안. 이렇게 웃긴 기준은 처음이야.", emote:"laugh", fx:"heart"},
      {choice:[
        {text:"나무를 올려다보는 척한다.", aff:{seoha:3}, goto:"look"},
        {text:"은행잎을 하나 주워 들고 선다.", aff:{seoha:4}, goto:"leaf"},
        {text:"서하 씨도 같이 서요. 기준은 둘이면 더 정확하죠.", aff:{seoha:3}, goto:"both"}
      ]},
      {label:"look"},
      "고개를 들었다. 잎 사이로 햇빛이 조각조각 떨어졌다. 셔터가 한 번 울렸다.",
      {say:"seoha", text:"…좋다. 이건 기록용 말고 한 장 더 뽑아야겠어."},
      {jump:"end"},
      {label:"leaf"},
      {say:"seoha", text:"잎 크기까지 비교되겠네. 꼼꼼하다, 너."},
      "촬영이 끝나자 서하가 그 잎을 받아 수첩 사이에 끼웠다.",
      {jump:"end"},
      {label:"both"},
      {say:"seoha", text:"기록 사진에 직원이 나오면 안 돼. …대신 이렇게."},
      "서하가 해를 등지고 한 걸음 옮겼다. 내 그림자 옆에 그림자 하나가 나란히 섰다.",
      {label:"end"},
      "화면을 넘기던 서하가 사진 한 장에서 오래 멈췄다.",
      {say:"seoha", text:"…기록용인데 얼굴이 너무 잘 나왔네. 확인.", emote:"blush"}
    ]
  },

  "enc_seoha_winter_morning": {
    title: "겨울 아침 - 남은 핫팩",
    steps: [
      {bg:"school_entrance", time:"morning", fx:"snow"},
      "밤새 눈이 왔다. 건물 입구 계단에서 눈삽 긁히는 소리가 났다.",
      {show:"seoha", pos:"center", outfit:"r60art_49_resolution"},
      "서하였다. 목도리를 두르고, 안경 없이. 계단 한가운데에 딱 한 사람 폭의 길이 나 있었다.",
      {say:"seoha", text:"안경은 김이 서려서 넣어 뒀어. 그래서 지금 네가 좀 흐려."},
      {say:"me", text:"왜 딱 한 사람 폭이에요?"},
      {say:"seoha", text:"두 사람 폭으로 치우면 두 배로 걸려. 혼자서는."},
      "창고에서 눈삽을 하나 더 가져왔다. 십 분 뒤, 계단에 두 사람 폭의 길이 났다.",
      {say:"seoha", text:"자, 이거. 하나 남아서."},
      "서하가 핫팩을 내밀었다. 벌써 따뜻했다. 미리 흔들어 둔 것처럼.",
      "받는 순간, 서하의 주머니에서 영수증 한 장이 팔랑 떨어졌다. '핫팩 2개. 07:41.'",
      {say:"me", text:"…남은 거 맞아요?"},
      {say:"seoha", text:"맞아. 두 개 샀는데 하나만 쓰면, 하나 남잖아."},
      {say:"me", text:"그건 처음부터 남기려고 산 거잖아요."},
      {show:"seoha", pos:"center", outfit:"r60art_49_reaction"},
      {say:"seoha", text:"…영수증은 못 본 걸로 해.", fx:"heart"},
      {choice:[
        {text:"그럼 다음에도 남겨 주세요.", aff:{seoha:4}, goto:"next"},
        {text:"서하 씨 손이 더 빨개요. 이건 쥐고 계세요.", aff:{seoha:3}, goto:"back"},
        {text:"감사해요. 영수증은 제가 버려 드릴게요.", aff:{seoha:2}, goto:"receipt"}
      ]},
      {label:"next"},
      {say:"seoha", text:"남는 건 내가 정하는 게 아니야. 계산대가 정하지."},
      {say:"seoha", text:"…계산대한테 잘 말해 둘게."},
      {jump:"end"},
      {label:"back"},
      {say:"seoha", text:"그럼 번갈아 쓰자. 1교시 전까진 네 거, 그다음은 내 거."},
      {jump:"end"},
      {label:"receipt"},
      {say:"seoha", text:"안 돼. 그건 기록이야. …내가 버릴게. 나중에."},
      {label:"end"},
      {show:"seoha", pos:"center", outfit:"r60art_49_resolution"},
      "손 안의 핫팩에서, 서하 주머니의 온기가 같이 건너왔다.",
      {say:"seoha", text:"들어가. 계단 미끄러워. …확인하고 밟아."}
    ]
  },

  "enc_seoha_winter_noon": {
    title: "겨울 점심 - 1년짜리 짐",
    steps: [
      {bg:"hallway1", time:"noon"},
      "점심시간의 교무동. 안내 책상 옆에 작은 종이 상자 하나가 놓여 있었다.",
      {show:"seoha", pos:"center"},
      "서하가 서랍을 하나씩 비우고 있었다. 꺼내서 보고, 상자에 넣고. 그 순서대로.",
      {say:"me", text:"벌써 짐 싸세요?"},
      {say:"seoha", text:"조금씩. 한 번에 하면 꼭 뭘 빠뜨리거든."},
      "상자 안엔 다 쓴 수정테이프 여섯 개, 빈 캔을 잘라 만든 펜꽂이, 포스트잇 몇 장.",
      {say:"me", text:"다 쓴 수정테이프는 왜 챙기세요?"},
      {say:"seoha", text:"이걸로 지운 게 1년 치야. 버리면 뭘 지웠는지도 잊을 것 같아서."},
      "서하가 상자를 테이프로 봉하더니, 그 위에 '확인' 도장을 꾹 찍었다.",
      {say:"me", text:"상자에 도장 찍는 사람은 처음 봐요."},
      {say:"seoha", text:"안 찍으면 1년 뒤에 이게 뭔지 모르잖아.", emote:"laugh"},
      "서하가 상자를 들어 가볍게 흔들었다. 달그락. 소리가 작았다.",
      {say:"seoha", text:"…생각보다 짐이 적네. 1년짜리라서."},
      "웃으며 한 말이었다. 그런데 도장을 쥔 손가락이 한참 풀리지 않았다.",
      {choice:[
        {text:"그 1년, 아직 안 끝났어요.", aff:{seoha:4}, goto:"notyet"},
        {text:"그 상자, 나중에 제가 들어 드릴게요.", aff:{seoha:3}, goto:"carry"},
        {text:"…짐이 적은 게 나쁜 건 아니잖아요.", aff:{seoha:2}, goto:"light"}
      ]},
      {label:"notyet"},
      {say:"seoha", text:"…그러네. 아직 남았어. 확인."},
      {jump:"stamp"},
      {label:"carry"},
      {say:"seoha", text:"그날은 들 게 별로 없을 거야. 그래도… 약속은 받아 둘게."},
      {jump:"stamp"},
      {label:"light"},
      {say:"seoha", text:"응. 가볍게 떠나는 게 계약직의 기술이야. …원래는."},
      {label:"stamp"},
      {say:"seoha", text:"손등, 잠깐 내밀어 볼래?"},
      "내밀자 서하가 도장을 내 손등에 살짝 눌렀다. 작고 빨간 '확인'.",
      {fx:"heart"},
      {say:"seoha", text:"이 확인은 상자에 안 넣을게. 네가 들고 있어.", emote:"blush"}
    ]
  },

  // ───────── 밤 전화 ─────────

  "call_seoha_spring": {
    title: "봄 밤 전화 - 서하 (수첩 정리)",
    steps: [
      {phone:"call", who:"seoha"},
      {if:"aff.seoha<20", goto:"low"},
      {if:"aff.seoha<50", goto:"mid"},
      {jump:"high"},
      {label:"low"},
      "신호음이 세 번 울렸다. 정확히 세 번째에 연결됐다.",
      {say:"seoha", text:"네, 하늘고등학교 교장실 서하입… 아.", emote:"surprise"},
      {say:"seoha", text:"…퇴근했지. 방금 건 못 들은 걸로 해 줘.", emote:"blush"},
      {say:"me", text:"용건이 있는 건 아니고요. 그냥 걸어 봤어요."},
      {say:"seoha", text:"용건 없음. 확인."},
      "수화기 너머에서 사각사각, 진짜로 받아 적는 소리가 났다.",
      {say:"seoha", text:"수첩 정리하던 중이었어. …용건 없는 통화는 몇 분이면 돼?", emote:"laugh", fx:"heart"},
      {aff:{seoha:1}},
      {jump:"end"},
      {label:"mid"},
      "신호음 세 번. 서하는 오늘도 세 번째에 받았다.",
      {say:"seoha", text:"응, {N}. 내일 할 일 적던 중이야. 들어 볼래?"},
      {say:"seoha", text:"□ 우편물 분류. □ 화분 물 주기. □ 캔커피 두 개. 그리고…"},
      {say:"me", text:"그리고요?"},
      {say:"seoha", text:"…마지막 줄은 비밀. 체크하면 알려 줄게.", emote:"laugh"},
      {fx:"heart"},
      {aff:{seoha:2}},
      {jump:"end"},
      {label:"high"},
      "신호음이 채 한 번 울리기도 전에 연결됐다.",
      {say:"seoha", text:"…세 번째에 받는 게 내 규칙인데. 오늘은 확인을 건너뛰었네."},
      {say:"seoha", text:"수첩 맨 뒤에 '오늘 좋았던 일' 칸이 있어. 그거 쓰던 중이었어."},
      {say:"seoha", text:"오늘 칸엔 이니셜 하나. 이름은 안 써. 기록은 조심해야 하니까.", emote:"blush"},
      {fx:"hearts"},
      {aff:{seoha:3}},
      {label:"end"},
      {phone:"options"},
      {say:"seoha", text:"잘 자, {N}. 다음에 교무동 지나가면 인사하고 가."},
      {phone:"end"}
    ]
  },

  "call_seoha_summer": {
    title: "여름 밤 전화 - 서하 (창문과 매미)",
    steps: [
      {phone:"call", who:"seoha"},
      {if:"aff.seoha<20", goto:"low"},
      {if:"aff.seoha<50", goto:"mid"},
      {jump:"high"},
      {label:"low"},
      "신호음 세 번. 연결되자 매미 소리가 먼저 쏟아져 들어왔다.",
      {say:"seoha", text:"네, 하늘고 교장… 아니. 여보세요."},
      {say:"seoha", text:"…반은 막았어. 입이 아직 퇴근을 안 했나 봐.", emote:"laugh"},
      {say:"me", text:"매미 소리가 엄청 크네요."},
      {say:"seoha", text:"창문 열어 뒀어. 에어컨 켜면 전기 요금을 자꾸 확인하게 돼서."},
      {say:"seoha", text:"…이 시간엔 매미랑 나만 깨어 있는 줄 알았네.", fx:"heart"},
      {aff:{seoha:1}},
      {jump:"end"},
      {label:"mid"},
      "신호음 세 번. 연결되자마자 매미 소리가 방 안까지 따라 들어왔다.",
      {say:"seoha", text:"응, {N}. 들려? 창문 열어 놨어."},
      {say:"seoha", text:"저 매미, 일곱 번 울고 한 번 쉬어. 아까부터 세고 있었어."},
      {say:"me", text:"…그걸 세고 계셨어요?"},
      {say:"seoha", text:"응. 근데 여섯 번째에 네 전화가 와서, 몇 번째인지 놓쳤어.", emote:"blush"},
      {fx:"heart"},
      {aff:{seoha:2}},
      {jump:"end"},
      {label:"high"},
      "첫 신호음에 연결됐다. 매미 소리가 먼저, 서하의 숨소리가 그다음.",
      {say:"seoha", text:"…잠깐만. 말하지 말고, 들어 봐."},
      "매미 소리. 먼 데서 지나가는 오토바이 한 대. 창틀에 기대는 소리.",
      {say:"seoha", text:"지금 같은 소리 듣고 있는 거 맞지? 확인."},
      {say:"me", text:"…확인이요."},
      {say:"seoha", text:"말 안 해도 끊기 싫은 통화는 처음이야.", emote:"blush"},
      {fx:"hearts"},
      {aff:{seoha:3}},
      {label:"end"},
      {phone:"options"},
      {say:"seoha", text:"잘 자. 창문은 닫고 자. 매미는 밤새 안 쉬어."},
      {phone:"end"}
    ]
  },

  "call_seoha_autumn": {
    title: "가을 밤 전화 - 서하 (안 울어)",
    steps: [
      {phone:"call", who:"seoha"},
      {if:"aff.seoha<20", goto:"low"},
      {if:"aff.seoha<50", goto:"mid"},
      {jump:"high"},
      {label:"low"},
      "신호음 세 번. 연결됐는데, 훌쩍이는 소리가 먼저 들렸다.",
      {say:"seoha", text:"네, 교장실… 아. 집이지. 여보세요."},
      {say:"me", text:"감기 걸리셨어요?"},
      {say:"seoha", text:"아니. 영화 보는 중이야. …안 울어."},
      {say:"me", text:"아직 아무 말도 안 했는데요."},
      {say:"seoha", text:"미리 확인해 두는 거야.", emote:"blush", fx:"heart"},
      {aff:{seoha:1}},
      {jump:"end"},
      {label:"mid"},
      "신호음 세 번. 수화기 너머로 잔잔한 피아노 음악이 흘렀다.",
      {say:"seoha", text:"응, {N}. 잠깐, 소리 좀 줄일게. …훌쩍."},
      {say:"me", text:"…혹시 우세요?"},
      {say:"seoha", text:"안 울어. 확인해 봐, 안 울어."},
      {say:"me", text:"어떻게 확인해요? 영상 통화로요?"},
      {say:"seoha", text:"…그건 안 돼. 지금은 보여 주면 안 되는 얼굴이야.", emote:"sad"},
      {fx:"heart"},
      {aff:{seoha:2}},
      {jump:"end"},
      {label:"high"},
      "첫 신호음이 끝나기도 전에 연결됐다. 목소리가 젖어 있었다.",
      {say:"seoha", text:"{N}. …마침 잘 걸었어. 영화 멈췄어."},
      {say:"seoha", text:"주인공이 끝까지 말을 못 해. 기차는 떠나는데."},
      {say:"me", text:"…울고 계셨죠?"},
      {say:"seoha", text:"안 울었어. …근데 네 목소리 들으니까 멈췄어. 그건 확인했어.", emote:"blush"},
      {fx:"hearts"},
      {aff:{seoha:3}},
      {label:"end"},
      {phone:"options"},
      {say:"seoha", text:"잘 자. 오늘 통화, 아무한테도 말하지 마. 훌쩍인 거 아니니까."},
      {phone:"end"}
    ]
  },

  "call_seoha_winter": {
    title: "겨울 밤 전화 - 서하 (칸이 많은 서류)",
    steps: [
      {phone:"call", who:"seoha"},
      {if:"aff.seoha<20", goto:"low"},
      {if:"aff.seoha<50", goto:"mid"},
      {jump:"high"},
      {label:"low"},
      "신호음 세 번. 연결되자 종이 넘기는 소리가 먼저 들렸다.",
      {say:"seoha", text:"네, 하늘고등학교 교장실… 아. 또 그랬네."},
      {say:"seoha", text:"이 버릇도 이번 겨울까지겠지. …아마."},
      {say:"me", text:"바쁘세요?"},
      {say:"seoha", text:"서류 쓰는 중이야. 칸이 많은 서류. …괜찮아. 너한테는 잠깐 시간 낼 수 있어.", fx:"heart"},
      {aff:{seoha:1}},
      {jump:"end"},
      {label:"mid"},
      "신호음 세 번. 볼펜 뚜껑 닫히는 소리가 딸깍 들렸다.",
      {say:"seoha", text:"응, {N}. 원서 쓰던 중이었어."},
      {say:"me", text:"무슨 원서요?"},
      {say:"seoha", text:"…다 쓰면 말해 줄게. 빈칸이 있는 채로 말하면, 또 못 채울 것 같아서."},
      {say:"me", text:"그럼 다 쓰실 때까지 기다릴게요."},
      {say:"seoha", text:"…응. 그 말은 받아 적을게.", emote:"blush"},
      {fx:"heart"},
      {aff:{seoha:2}},
      {jump:"end"},
      {label:"high"},
      "신호음이 울리자마자 연결됐다. 서하가 먼저 말했다.",
      {say:"seoha", text:"기다렸… 아니, 인수인계서 쓰다가 잠깐 쉬던 중이었어."},
      {say:"seoha", text:"다음 사람한테 남길 칸이 많아. 쓰다 보면 자꾸 펜이 멈춰."},
      {say:"me", text:"제가 방해하는 거 아니에요?"},
      {say:"seoha", text:"아니. 네 목소리 들으면 칸이 채워져. …한 줄씩."},
      {fx:"hearts"},
      {say:"seoha", text:"그러니까 조금만 더 말해 줘. 아무 얘기나. 받아 적진 않을게.", emote:"blush"},
      {aff:{seoha:3}},
      {label:"end"},
      {phone:"options"},
      {say:"seoha", text:"잘 자, {N}. 눈 온대. 내일 계단 조심해."},
      {phone:"end"}
    ]
  },

  // ───────── 하굣길 (서하의 퇴근길, 5시 반) ─────────

  "walkhome_seoha_spring": {
    title: "봄 하굣길 - 8년 전의 같은 길",
    steps: [
      {bg:"road_home", time:"afternoon", fx:"petals"},
      "다섯 시 반. 교문을 나서는데 뒤에서 구두 소리가 따라왔다.",
      {show:"seoha", pos:"center", outfit:"r60art_18_setup"},
      {say:"seoha", text:"{N}. 너도 지금 가? …나 오늘 전화 마흔 통 받았어."},
      "카디건을 걸치고 안경도 벗은 얼굴. 교무동에서 보던 사람과는 딴사람 같았다.",
      {say:"seoha", text:"퇴근 확인. …오늘 치 교장실 목소리는 끝."},
      "벚꽃길이었다. 서하는 어깨에 꽃잎이 앉아도 털지 않았다.",
      {say:"seoha", text:"이 길, 8년 전엔 반대로 걸었어. 등교하느라."},
      {say:"seoha", text:"나 하늘고 나왔어. 그때 담임이 문정희 선생님이셨어. 너희 담임."},
      {say:"seoha", text:"'자, 다들 앉자.' …아직도 그 말로 조회 시작하시지?"},
      "똑같았다. 억양까지. 참지 못하고 웃음이 터졌다.",
      {say:"seoha", text:"8년 동안 토씨 하나 안 바뀌었네. 그게 이상하게 위로가 돼."},
      {choice:[
        {text:"학생 서하 씨는 어땠어요?", aff:{seoha:3}, goto:"past"},
        {text:"어깨에 꽃잎이요. …떼어 드려도 돼요?", aff:{seoha:4}, goto:"petal"}
      ]},
      {label:"past"},
      {say:"seoha", text:"맨 앞자리. 필기는 두 가지 색. 지각 0번. …재미없는 학생이었지."},
      {say:"me", text:"그 학생이랑 같은 반이었으면 좋았겠어요."},
      {show:"seoha", pos:"center", outfit:"r60art_18_reaction", say:"seoha", text:"…그 말, 8년 늦었어.", fx:"heart"},
      {jump:"end"},
      {label:"petal"},
      {say:"seoha", text:"…응. 떼어 줘."},
      "꽃잎 한 장을 조심스럽게 집었다. 서하가 그걸 받아 수첩 사이에 끼웠다.",
      {show:"seoha", pos:"center", outfit:"r60art_18_reaction", say:"seoha", text:"올해 첫 꽃잎이야. 기록해 둘래.", fx:"heart"},
      {label:"end"},
      "갈림길. 서하는 학교 뒷골목 쪽, 나는 큰길 쪽이었다.",
      {say:"seoha", text:"여기서 헤어지자. 또 봐, {N}. 교문에선 지각하지 말고."}
    ]
  },

  "walkhome_seoha_summer": {
    title: "여름 하굣길 - 스탬프 카드의 마지막 칸",
    steps: [
      {bg:"road_home", time:"afternoon"},
      "다섯 시 반인데도 해가 한낮 같았다. 아스팔트에서 열기가 올라왔다.",
      {show:"seoha", pos:"center", outfit:"r60art_1_setup"},
      "편의점 앞에서 퇴근길의 서하와 마주쳤다. 작은 카드 한 장을 들여다보고 있었다.",
      {say:"seoha", text:"아, {N}. 아이스크림 스탬프 카드야. 아홉 칸 찼어. 하나 남았네."},
      {say:"seoha", text:"들어가자. 오늘은 내가 살게. 학교 밖이니까."},
      "냉동고 앞. 서하는 고민도 없이 우유맛 막대를 집었다.",
      {say:"seoha", text:"매번 이거야. 실패한 적이 없거든."},
      {say:"me", text:"다른 건 한 번도 안 드셔 보셨어요?"},
      {say:"seoha", text:"새로운 건 실패할 수도 있잖아."},
      "서하는 웃고 있었다. 그런데 아이스크림 얘기만은 아닌 것 같았다.",
      {choice:[
        {text:"오늘은 제가 골라 드릴게요. 실패하면 제 탓으로 해요.", aff:{seoha:4}, goto:"pick"},
        {text:"실패 안 하는 것도 재능이죠. 저도 같은 걸로요.", aff:{seoha:2}, goto:"same"}
      ]},
      {label:"pick"},
      "냉동고를 뒤져 제일 수상한 걸 골랐다. 수박 모양인데 멜론맛이라고 적힌 막대.",
      {show:"seoha", pos:"center", outfit:"r60art_1_reaction", say:"seoha", text:"이건 정체가 뭐야? 확인이 안 되는데."},
      "편의점 앞 벤치. 서하가 첫 입을 베어 물고, 한참 말이 없었다.",
      {say:"seoha", text:"…맛있어. 억울할 정도로 맛있어. 몇 년을 손해 본 거야.", fx:"heart"},
      {jump:"end"},
      {label:"same"},
      "편의점 앞 벤치. 똑같은 막대 두 개가 똑같은 속도로 녹았다.",
      {say:"seoha", text:"다음엔 모험 한 번 해 볼게. …네가 옆에 있을 때.", fx:"heart"},
      {label:"end"},
      "계산할 때 찍은 도장 하나로 카드의 마지막 칸이 찼다. 서하가 그 카드를 내 손에 쥐여 주었다.",
      {show:"seoha", pos:"center", outfit:"r60art_1_resolution", say:"seoha", text:"열 칸 다 찼어. 공짜 하나는 네가 써. 바꾸러 올 때 나도 불러."},
      {say:"seoha", text:"…빈칸 없는 카드는 오랜만이네. 조심히 가, {N}."}
    ]
  },

  "walkhome_seoha_autumn": {
    title: "가을 하굣길 - 은행 열매 회피 경로",
    steps: [
      {bg:"road_home", time:"afternoon", fx:"leaves"},
      "퇴근하는 서하와 나란히 걸었다. 은행나무 길에 들어서자 냄새가 먼저 달려왔다.",
      {show:"seoha", pos:"center", outfit:"r60art_37_setup"},
      "서하가 걸음을 멈추고 카드 한 장을 꺼냈다. 손으로 그린 지도였다. 열매 자리마다 점이 찍혀 있었다.",
      {say:"seoha", text:"어제 기준 지도야. 오늘 떨어진 건 반영이 안 됐어. …경로 수정 중."},
      {say:"seoha", text:"왼발, 오른발, 한 칸 건너, 오른발. 됐다. 따라와."},
      "서하가 보도블록을 폴짝폴짝 건넜다. 체크리스트를 한 줄씩 지워 나가는 발걸음이었다.",
      "따라가다 박자를 놓쳤다. 발밑에서 물컹, 소리가 났다.",
      {fx:"shake", say:"me", text:"…밟았어요."},
      {show:"seoha", pos:"center", outfit:"r60art_37_reaction", say:"seoha", text:"확인했어. 냄새로."},
      "서하가 웃음을 참다가 실패했다. 한 손으로 머리를 짚었는데 어깨가 흔들렸다.",
      {choice:[
        {text:"이제 서하 씨 발자국만 밟을게요.", aff:{seoha:3}, goto:"follow"},
        {text:"손 잡고 건너면 안 틀릴 것 같은데… 잡아도 돼요?", aff:{seoha:4}, goto:"sleeve"}
      ]},
      {label:"follow"},
      {say:"seoha", text:"좋아. 내 발자국이 곧 매뉴얼이야. 한 칸도 틀리지 마."},
      "앞선 발자국만 골라 밟았다. 서하는 몇 걸음마다 돌아보며 내 발을 확인했다.",
      {fx:"heart"},
      {jump:"end"},
      {label:"sleeve"},
      {say:"seoha", text:"손은… 학교 앞이라 안 돼. 대신 이거."},
      "서하가 카디건 소매 끝을 내밀었다. 그 소매를 잡고 한 칸씩 건넜다.",
      {say:"seoha", text:"…소매는 규정에 없으니까.", fx:"hearts"},
      {label:"end"},
      {show:"seoha", pos:"center", outfit:"r60art_37_resolution"},
      "은행나무 길 끝. 둘 다 무사했다. 내 운동화 한 짝만 빼고.",
      {say:"seoha", text:"지도에 네가 밟은 자리도 표시해 둘게. 다음부터는 그 칸도 피해 가."},
      {say:"seoha", text:"집에 가면 밑창부터 씻어. 확인은 다음 등굣길에, 교문에서 할게."}
    ]
  },

  "walkhome_seoha_winter": {
    title: "겨울 하굣길 - 팥과 슈크림",
    steps: [
      {bg:"road_home", time:"afternoon"},
      "다섯 시 반. 겨울 해는 벌써 건물 뒤로 넘어가고 있었다.",
      {show:"seoha", pos:"center", outfit:"r60art_49_resolution"},
      "퇴근하는 서하가 목도리에 턱을 묻고 걸어왔다. 손에 든 휴대폰 화면엔 기온.",
      {say:"seoha", text:"영하 3도. 확인. …붕어빵 먹을래? 저기, 골목 입구."},
      "포장마차 불빛 아래. 서하가 지폐를 반듯하게 펴서 냈다.",
      {say:"seoha", text:"팥 둘, 슈크림 둘이요."},
      "봉지를 받자마자 서하가 붕어빵을 하나씩 불빛에 비춰 봤다.",
      {say:"seoha", text:"팥. 팥. 슈크림. …이것도 슈크림."},
      {say:"me", text:"어떻게 알아요? 다 똑같이 생겼는데."},
      {say:"seoha", text:"슈크림은 꼬리가 조금 더 탔어. 사장님 버릇이야. 3주 관찰했어."},
      "3주. 퇴근길마다 여기 서 있었을 서하를 생각하니 웃음이 났다.",
      {choice:[
        {text:"머리부터 드세요? 꼬리부터 드세요?", aff:{seoha:3}, goto:"head"},
        {text:"그 관찰, 저도 같이할 걸 그랬어요.", aff:{seoha:4}, goto:"watch"}
      ]},
      {label:"head"},
      {say:"seoha", text:"꼬리. 머리부터 먹으면 붕어랑 끝까지 눈이 마주치잖아. 그럼 못 먹어."},
      {jump:"end"},
      {label:"watch"},
      {show:"seoha", pos:"center", outfit:"r60art_49_reaction", say:"seoha", text:"…그랬으면 3주가 아니라 1주 만에 알아냈겠지."},
      {say:"seoha", text:"다음 관찰은 같이 하자. 이번 겨울 안에.", fx:"heart"},
      {label:"end"},
      {bg:"road_home", time:"night"},
      "갈림길에 닿았을 땐 해가 완전히 져 있었다. 둘의 입김이 하얗게 섞였다.",
      {say:"seoha", text:"내년 겨울에도 이 가게 있을까. …나는 확인 못 하겠지만."},
      "대답을 고르기도 전에, 서하가 마지막 슈크림을 내 손에 쥐여 주었다.",
      {say:"seoha", text:"따뜻할 때 먹어. 조심히 가, {N}.", fx:"heart"}
    ]
  },

  // ───────── 문자 (서하의 진짜 문자 — 앱과 닮은 말투) ─────────

  "text_seoha_spring": {
    title: "문자 - 봄 (서하)",
    steps: [
      {msg:{from:"seoha", text:"{N}. 내일 오후 비 온대. 교무동 창문으로 하늘 확인했어."}},
      {msg:{from:"seoha", text:"□ 우산 □ 여벌 양말 □ 답장은 안 해도 됨. (확인)"}, fx:"heart"},
      {think:{when:"voice=='seoha'", then:"네모 칸, 그리고 '(확인)'. 방금 온 자정 메시지랑 모양이 같은데… 우연이겠지.", else:"문자에도 네모 칸이 있었다. 서하 씨답다고 생각하며 폰을 덮었다."}}
    ]
  },

  "text_seoha_summer": {
    title: "문자 - 여름 (서하)",
    steps: [
      {msg:{from:"seoha", text:"□ 내일 폭염 주의보. □ 물 한 병. □ 교무동 정수기는 찬물 쪽이 더 차가워."}},
      {msg:{from:"seoha", text:"…마지막 건 쓸데없는 정보야. 지우려다 그냥 보내. 잘 자."}, fx:"heart"},
      {think:{when:"voice=='seoha'", then:"체크 칸 세 개. 자정의 그 메시지도 꼭 이렇게 세 칸이었다. …설마.", else:"'찬물 쪽이 더 차가워.' 당연한 걸 확인해 주는 사람. 괜히 웃음이 났다."}}
    ]
  },

  "text_seoha_autumn": {
    title: "문자 - 가을 (서하)",
    steps: [
      {msg:{from:"seoha", text:"✓ 오늘 업무 끝. ✓ 서류 마감. □ 캔커피 하나, 아직 못 줌."}},
      {msg:{from:"seoha", text:"받을 사람은 정해져 있어. 내일 확인. 잘 자, {N}."}, fx:"heart"},
      {think:{when:"voice=='seoha'", then:"체크 표시, 네모 칸, 캔커피. 자정마다 앱이 말하던 '그 사람'이랑 너무 닮았다.", else:"'받을 사람은 정해져 있어.' …그 한 줄을 세 번 읽었다."}}
    ]
  },

  "text_seoha_winter": {
    title: "문자 - 겨울 (서하)",
    steps: [
      {msg:{from:"seoha", text:"{N}. 내일 아침 눈 소식. 계단 미끄러울 거야."}},
      {msg:{from:"seoha", text:"□ 장갑 □ 천천히 걷기 □ 넘어지면 교무동으로. 거기가 제일 가까워. (확인)"}, fx:"heart"},
      {think:{when:"voice=='seoha'", then:"'(확인)'. 자정의 메시지와 한 글자도 다르지 않은 끝인사. …그럴 리가 없는데.", else:"'넘어지면 교무동으로.' …넘어질 핑계가 하나 생긴 기분이었다."}}
    ]
  },

  // ───────── 선물 (데이트 약속 장소에서) ─────────

  "gift_seoha": {
    title: "선물 - 서하",
    steps: [
      {show:"seoha", pos:"center"},
      {if:"flag.gift=='snack_kancho'", goto:"kancho"},
      {if:"flag.gift=='snack_chips'", goto:"chips"},
      {if:"flag.gift=='snack_choco'", goto:"choco"},
      {say:"seoha", text:"빼빼로. 무슨 날인지 달력부터 확인할 뻔했어."},
      "서하가 막대를 하나씩 들어 끝을 살폈다. 초콜릿이 제일 끝까지 발린 걸 골랐다.",
      {say:"seoha", text:"이게 제일 성실하게 발렸어. 네 거.", fx:"heart"},
      {jump:"end"},
      {label:"kancho"},
      {say:"seoha", text:"칸초. …어떻게 알았어? 말한 적 없는데.", emote:"surprise"},
      {say:"seoha", text:"하나씩 세면서 먹는 게 좋아. 끝이 정해져 있잖아."},
      "서하가 과자를 하나 골라 내 손바닥에 올렸다. 눈썹이 팔자로 처진 곰이었다.",
      {say:"seoha", text:"이건 너 닮았어. 네 몫이야.", fx:"hearts"},
      {jump:"end"},
      {label:"chips"},
      {say:"seoha", text:"감자칩. 사무실에선 못 먹는 거야. 소리가 커서."},
      "서하가 가방에서 나무젓가락을 꺼냈다. 정말로 꺼냈다.",
      {say:"seoha", text:"서류 만지는 손이라서. 주말에도 버릇이 이래.", emote:"laugh", fx:"heart"},
      {jump:"end"},
      {label:"choco"},
      {say:"seoha", text:"초코롤. 이건 월요일 오후 세 시에 먹을래. 제일 힘든 시간이거든."},
      "서하가 수첩에 적었다. '□ 월 15:00 초코롤.' 네모 칸이 하나 늘었다.",
      {say:"seoha", text:"그 시간에 버틸 이유가 하나 생겼네.", fx:"heart"},
      {label:"end"},
      {say:"seoha", text:"학생한테 받은 거 아니야. 오늘 약속 상대한테 받은 거야. 그렇게 적어 둘게."}
    ]
  },

  // ───────── 이동 (평일 오후) ─────────

  "loc_hallway1_seoha": {
    title: "이동(교무동 복도) - 거꾸로 붙은 우표",
    steps: [
      {bg:"hallway1", time:"afternoon"},
      "오후의 교무동 복도. 안내 책상 위에 편지 봉투가 탑처럼 쌓여 있었다.",
      {show:"seoha", pos:"center"},
      {say:"seoha", text:"{N}, 손 비었어? 교장 선생님 우편물이야. 오늘 발송분."},
      "서하가 봉투를 세 무더기로 나눴다. 관공서, 학부모, 그 외. 나는 우표 담당이 됐다.",
      {say:"seoha", text:"우표는 오른쪽 위. 모서리에서 5밀리. 붙이고 나서 확인."},
      "스무 통쯤 붙였을 때, 서하의 손이 봉투 하나에서 멈췄다.",
      "우표가 거꾸로 붙어 있었다. 내가 붙인 거였다.",
      {say:"me", text:"아… 죄송해요. 떼서 다시 붙일게요."},
      "서하가 봉투를 한참 보더니, 그대로 발송 바구니에 넣었다.",
      {say:"seoha", text:"이건… 그냥 두자. 틀린 채로 가는 편지도 있어야지."},
      {say:"me", text:"서하 씨가요? 틀린 걸 그냥 둬요?"},
      {say:"seoha", text:"옛날엔 우표를 거꾸로 붙이면 뜻이 있었대. 편지 기록 정리하다 배웠어."},
      {say:"me", text:"무슨 뜻인데요?"},
      {say:"seoha", text:"…그건 기록에 없어.", emote:"blush"},
      {fx:"heart"},
      {choice:[
        {text:"그럼 받는 분이 기뻐하시겠네요.", aff:{seoha:2}, goto:"glad"},
        {text:"나중에 그 뜻, 꼭 알려 주세요.", aff:{seoha:4}, goto:"later"},
        {text:"다음 우표도 슬쩍 거꾸로 붙인다.", aff:{seoha:3}, goto:"again"}
      ]},
      {label:"glad"},
      {say:"seoha", text:"받는 분이 도서관장님이야. …기뻐하실지는 모르겠네.", emote:"laugh"},
      {jump:"end"},
      {label:"later"},
      {say:"seoha", text:"…언젠가. 내가 그 뜻을 말해도 되는 사람이 되면."},
      {jump:"end"},
      {label:"again"},
      "다음 우표를 슬쩍 거꾸로 대는데, 서하의 볼펜 끝이 내 손등을 톡 쳤다.",
      {say:"seoha", text:"한 통이면 실수고, 두 통이면 사건이야. 기록에 남아.", emote:"laugh"},
      {label:"end"},
      {flag:{seoha_stamp:true}},
      "발송 바구니 맨 위, 거꾸로 선 우표 하나가 나를 올려다보고 있었다."
    ]
  },

  "loc_school_entrance_seoha": {
    title: "이동(건물 입구) - 두 칸짜리 높이",
    steps: [
      {bg:"school_entrance", time:"afternoon"},
      "건물 입구 게시판 앞. 서하가 까치발을 들고 있었다. 공지문을 쥔 손이 맨 윗줄에 닿을락 말락.",
      {show:"seoha", pos:"center"},
      {say:"me", text:"제가 붙여 드릴까요?"},
      {say:"seoha", text:"게시는 내 업무야. …사다리 가져올게."},
      "서하가 창고에서 접이식 사다리를 끌고 왔다. 세 칸짜리였다.",
      "두 칸째에서 서하가 멈췄다. 난간을 쥔 손가락이 하얗게 질려 있었다.",
      {say:"seoha", text:"…생각보다 높네.", emote:"surprise"},
      {say:"me", text:"두 칸인데요?"},
      {say:"seoha", text:"두 칸도 높이야. 사다리 좀 잡아 줄래? 흔들리면 말해. …아니, 흔들지 마."},
      "사다리 다리를 두 손으로 붙잡았다. 서하는 압정을 하나 꽂을 때마다 숨을 참았다.",
      {say:"seoha", text:"수평 맞아? 확인해 줘."},
      {choice:[
        {text:"완벽해요. 자로 잰 것 같아요.", aff:{seoha:3}, goto:"perfect"},
        {text:"왼쪽이 1밀리 높아요.", aff:{seoha:2}, goto:"mm"},
        {text:"종이보다 서하 씨가 더 걱정돼요. 천천히요.", aff:{seoha:4}, goto:"worry"}
      ]},
      {label:"perfect"},
      {say:"seoha", text:"다행이다. 한 번 더 올라오긴 싫었어."},
      {jump:"down"},
      {label:"mm"},
      "서하가 정말로 압정을 뽑아 다시 꽂았다. 1밀리를 위해.",
      {say:"seoha", text:"농담이었지? 표정 보니까 농담이네. 기록해 둘 거야.", emote:"angry"},
      {jump:"down"},
      {label:"worry"},
      {say:"seoha", text:"걱정은 공지문한테 해. 난 괜찮아.", emote:"blush"},
      {label:"down"},
      {fx:"shake", text:"내려오던 서하의 발이 마지막 칸을 헛디뎠다."},
      "반사적으로 팔꿈치를 받쳤다. 서하가 내 어깨를 짚고 바닥에 섰다. 잠깐, 아주 가까웠다.",
      "먼저 손을 뗐다. 시선은 게시판으로 돌렸다.",
      {say:"seoha", text:"…고마워. 높은 데 무서운 거, 비밀이야. 교장실 기밀.", emote:"blush"},
      {fx:"heart"}
    ]
  },

  // ───────── 밤의 메시지 (자정, 앱 — 서하의 말투) ─────────

  "night_msg_seoha_spring_1": {
    title: "밤의 메시지 - 봄 1 (서하)",
    steps: [
      "자정. 폰이 짧게 울렸다. 잠금화면의 실루엣은 아직 뿌옜다. 긴 머리 윤곽만 겨우.",
      {msg:{from:"app", text:"✓ 자정. □ 안 자고 있지. □ 짧게 말할게."}},
      {msg:{from:"app", text:"□ 그 사람은 오후 세 시에 캔커피를 두 개 뽑아. □ 하나는 누가 받아 주길 기다려. (확인)"}, fx:"heart"},
      {think:"네모 칸에 체크 표시. 이 말투… 어디서 본 것 같은데."}
    ]
  },

  "night_msg_seoha_spring_2": {
    title: "밤의 메시지 - 봄 2 (서하)",
    steps: [
      "자정. 창밖에서 벚꽃이 소리 없이 지고 있었다. 폰이 울렸다.",
      {msg:{from:"app", text:"□ 벚꽃은 금방 져. □ 그 사람은 어깨에 꽃잎이 앉아도 안 털어."}},
      {msg:{from:"app", text:"□ 누가 말해 주길 기다리는 거야. □ 말해 줘. 손대기 전에, 먼저 물어보고. (확인)"}, fx:"heart"},
      {think:"먼저 물어보고. …이상할 만큼 예의 바른 앱이다."}
    ]
  },

  "night_msg_seoha_summer_1": {
    title: "밤의 메시지 - 여름 1 (서하)",
    steps: [
      "자정. 장맛비가 창을 두드렸다. 잠금화면의 실루엣 옆으로 가느다란 줄 하나가 늘어져 있었다.",
      {msg:{from:"app", text:"□ 장마야. □ 비 오는 날, 그 사람은 안경을 자주 닦아."}},
      {msg:{from:"app", text:"□ 닦는 동안은 앞이 안 보여. □ 그때 말 걸면 놀라. 그래도 걸어 줘. (확인)"}, fx:"heart"},
      {think:"옆으로 늘어진 줄. 땋은 머리 같기도 하고… 안경 닦는 사람이 한둘이야?"}
    ]
  },

  "night_msg_seoha_summer_2": {
    title: "밤의 메시지 - 여름 2 (서하)",
    steps: [
      "자정인데도 매미가 울었다. 폰은 매미가 잠깐 쉰 틈에 울렸다.",
      {msg:{from:"app", text:"✓ 그 사람은 칭찬을 들으면 안경을 고쳐 써. ✓ 귀가 먼저 빨개져. (확인)"}, fx:"heart"},
      "실루엣의 옆으로 땋은 가는 머리가, 지난번보다 조금 또렷했다.",
      {think:"'(확인)'. 이 말버릇, 분명히 어디서 들었는데."}
    ]
  },

  "night_msg_seoha_autumn_1": {
    title: "밤의 메시지 - 가을 1 (서하)",
    steps: [
      "자정. 창틈으로 은행 냄새가 희미하게 들어왔다. 폰이 울렸다.",
      {msg:{from:"app", text:"□ 은행 열매는 밟지 말 것. □ 그 사람은 경로를 외워 둬. 뒤만 따라가면 돼."}},
      {msg:{from:"app", text:"□ 가끔 뒤돌아볼 거야. 네 발 확인하려고. □ 그때 웃어 줘. (확인)"}, fx:"heart"},
      "잠금화면 실루엣의 얼굴 언저리에서, 가는 선 두 개가 빛을 받았다. 안경테 같았다.",
      {think:"안경테. 땋은 머리. …아는 사람 중에 딱 그런 사람이 있긴 한데."}
    ]
  },

  "night_msg_seoha_autumn_2": {
    title: "밤의 메시지 - 가을 2 (서하)",
    steps: [
      "자정. 폰이 울렸다. 이번엔 한 줄씩, 천천히 도착했다.",
      {msg:{from:"app", text:"□ 축제 준비가 시작되면 그 사람은 점심을 거를 거야. □ 삼각김밥 하나로 버텨."}},
      {msg:{from:"app", text:"□ 김은 꼭 찢어. 번호 순서대로 뜯는데도. □ 모른 척해 줘. (확인)"}},
      {fx:"heart", text:"실루엣의 안경테가 한 번 반짝였다. 웃는 것 같았다."},
      {think:"번호 순서대로 뜯는데 찢어지는 김. …누군가 떠올라서, 괜히 폰을 엎어 두었다."}
    ]
  },

  "night_msg_seoha_winter_1": {
    title: "밤의 메시지 - 겨울 1 (서하)",
    steps: [
      "자정. 창문에 성에가 앉아 있었다. 폰이 울렸다. 잠금화면이 조금 더 밝아진 것 같았다.",
      {msg:{from:"app", text:"□ 눈 오는 날, 그 사람은 창문부터 열어. □ 안경에 김이 서리는 게 좋대."}},
      {msg:{from:"app", text:"□ 이상한 취향이지. □ 알아. 나도 알아. (확인)"}, fx:"heart"},
      "실루엣의 목 언저리에 작은 점 하나가 보였다. 물방울 모양, 파란색.",
      {think:"파란 물방울. 안경테. 땋은 머리. …한 사람밖에 떠오르지 않았다."}
    ]
  },

  "night_msg_seoha_winter_2": {
    title: "밤의 메시지 - 겨울 2 (서하)",
    steps: [
      "자정. 폰이 울렸다. 두 번째 메시지는 한참 뒤에야 왔다.",
      {msg:{from:"app", text:"□ 그 사람 달력엔 약속마다 동그라미가 있어. □ 2월 27일에만 없어. 마지막 날은 표시 안 하는 사람이야."}},
      {msg:{from:"app", text:"□ 도장 찍기 전엔 사유 칸부터 읽어. □ 비어 있으면, 오래 봐. (확인)"}},
      {fx:"heart", text:"실루엣이 거의 사람 같았다. 안경테, 땋은 머리, 목의 파란 점. 얼굴만 아직."},
      {think:"사유 칸. 무슨 서류 얘기지. …그 말만 이상하게 오래 남았다."}
    ]
  },

  // ───────── 데이트 (주말 지도, date_start_generic 뒤) ─────────

  "date_bookstore_seoha": {
    title: "데이트 - 북카페 (서하)",
    steps: [
      {bg:"bookstore"},
      "강이 내려다보이는 북카페. 책장 넘기는 소리가 빗소리처럼 깔려 있었다.",
      {show:"seoha", pos:"center", outfit:"r60art_14_setup"},
      "서하는 먼저 와 있었다. 창가 자리, 덮은 책을 옆에 두고 펜던트를 만지작거리면서.",
      {say:"me", text:"서하 씨."},
      {say:"seoha", text:"언제 왔어? 확인 못 했네. 이런 적 없는데."},
      {say:"me", text:"방금이요. 무슨 책 읽으셨어요?"},
      {say:"seoha", text:"여행 에세이. 여기서만 읽어. 사면 가야 할 것 같잖아."},
      "표지 속 도시엔 강과 다리가 있었다. 펜던트와 같은 색의 강이었다.",
      {say:"seoha", text:"오늘 규칙. 서로 책 한 권씩 골라 주기. 상대가 절대 안 고를 걸로."},
      "서가 사이를 돌았다. 서하가 절대 안 고를 책. 그리고 받으면 웃을 책.",
      {choice:[
        {text:"표지부터 눈물 냄새 나는 로맨스를 고른다.", aff:{seoha:2}, goto:"romance"},
        {text:"『혼자 먹는 일주일 도시락』을 고른다.", aff:{seoha:1}, goto:"cook"},
        {text:"아까 그 여행 에세이를 고른다.", aff:{seoha:3}, goto:"essay"}
      ]},
      {label:"romance"},
      {say:"seoha", text:"이건 안 울 자신 있어. 마지막 장까지 확인해 봐도 돼."},
      {say:"me", text:"그럼 마지막 장은 옆에서 같이 읽을게요."},
      {say:"seoha", text:"그건 안 돼. 절대."},
      {jump:"mine"},
      {label:"cook"},
      {say:"seoha", text:"내 점심이 걱정됐구나. 삼각김밥도 요리야."},
      {say:"me", text:"그건 조립이에요."},
      {show:"seoha", pos:"center", outfit:"r60art_4_resolution", say:"seoha", text:"반박을 못 하겠네."},
      {jump:"mine"},
      {label:"essay"},
      {show:"seoha", pos:"center", outfit:"r60art_14_reaction", say:"seoha", text:"…사면 가야 한다니까."},
      {say:"me", text:"그러니까요. 가시라고요."},
      {fx:"heart", text:"서하가 책을 받아 들고 한참 표지만 봤다. 펜던트를 쥔 손에 힘이 들어갔다."},
      {label:"mine"},
      {show:"seoha", pos:"center", outfit:"r60art_14_resolution", say:"seoha", text:"내 차례. 자, 이거."},
      "서하가 내민 건 속지가 텅 빈 노트였다. 표지에 '기록장'.",
      {say:"seoha", text:"넌 남이 쓴 책보다 네가 채울 책이 어울려. 아직 적을 게 많은 사람이니까.", fx:"heart"},
      {show:"seoha", pos:"center", outfit:"r60art_14_reaction", text:"창가로 돌아오자 서하가 에세이를 다시 펼쳤다."},
      {say:"seoha", text:"한 대목만 읽어 줄게. 좋은 문장은 소리 내서 읽어 봐야 알아."},
      {say:"seoha", text:"「어떤 도시는 가기 전부터 그리워진다.」"},
      {say:"seoha", text:"「지도 위의 강을 손가락으로 건너 본 날부터, 나는 이미 조금 그곳에 있었다.」"},
      "업무 목소리도, 확인하는 목소리도 아니었다. 처음 듣는 서하의 목소리였다.",
      {say:"seoha", text:"…여기까지. 더 읽으면 가고 싶어지니까."},
      {minigame:"actiontalk", who:"seoha"},
      {if:"flag.at=='great'", goto:"great"},
      {if:"flag.at=='good'", goto:"good"},
      {jump:"bad"},
      {label:"great"},
      {say:"seoha", text:"대학 때 오래된 편지를 정리하는 일을 했어. 백 년 된 연애편지도 있었고."},
      {say:"seoha", text:"이 얘길 이렇게 길게 한 건 처음이야. 너랑 있으면 시간이 기록이 안 돼."},
      {fx:"hearts", aff:{seoha:3}},
      {jump:"note"},
      {label:"good"},
      {say:"seoha", text:"책 얘기만 한 시간이네. 커피 식은 줄도 몰랐어.", aff:{seoha:1}},
      {jump:"note"},
      {label:"bad"},
      {say:"seoha", text:"…미안. 방금 문장 하나 놓쳤어. 강을 보고 있었어."},
      "대화가 자꾸 강물처럼 비껴갔다. 그래도 서하는 끝까지 고개를 끄덕여 주었다.",
      {label:"note"},
      {say:"seoha", text:"마지막 규칙. 포스트잇에 '하고 싶은 일' 하나씩 적어서 바꾸기."},
      "나는 금방 적었다. '서하 씨 포스트잇 읽기.'",
      {say:"seoha", text:"반칙이야. 그건 하고 싶은 일이 아니라 지금 하려는 일이잖아."},
      "서하는 펜을 든 채 오래 멈춰 있다가, 무언가를 적고 반으로 접었다.",
      {say:"seoha", text:"내 건 헤어질 때 줄게. 지금 보여 주면 내가 못 버텨."},
      {bg:"road_home", time:"night"},
      {show:"seoha", pos:"center", outfit:"r60art_14_resolution", text:"갈림길 앞. 접힌 포스트잇이 내 손바닥에 올라왔다. 네모 칸 하나. '□ 다음에도, 이 창가 자리.'"},
      {say:"seoha", text:"적으면 지켜야 하잖아. 그게 무서워서 자꾸 비워 뒀는데."},
      {say:"seoha", text:"…오늘은 썼어. 체크는 네가 해 줘. 잘 가, {N}."},
      {fx:"hearts"}
    ]
  },

  "date_cinema_seoha": {
    title: "데이트 - 영화관 (서하)",
    steps: [
      {bg:"cinema"},
      "영화관 로비. 어디서나 달큰한 팝콘 냄새가 났다.",
      {show:"seoha", pos:"center", outfit:"r60art_60_setup"},
      {text:{when:"season=='winter'", then:"서하가 먼저 와서 손을 흔들었다. 코트 깃까지 단단히 여미고.", else:"서하가 먼저 와서 손을 흔들었다. 원피스 위에 카디건까지 챙겨 입고."}},
      {say:"seoha", text:"상영관은 추워. 확인했어. 두 시간 내내 추우면 영화가 안 들어와."},
      {say:"me", text:"뭐 볼지 정하셨어요?"},
      {say:"seoha", text:"평점 제일 높은 걸로. 이거."},
      "포스터 속 남녀가 기차역에서 울고 있었다. 누가 봐도 로맨스였다.",
      {say:"me", text:"…서하 씨가 로맨스를요?"},
      {say:"seoha", text:"평점 순이야. 장르는 상관없어. 그리고 난 영화 보고 안 울어. 미리 말해 둘게."},
      "매점에서 서하는 큰 팝콘 하나와 빈 컵 하나를 받았다.",
      "그리고 팝콘을 컵에 옮겨 담았다. 한 알씩 저울질하듯, 정확히 절반.",
      {say:"seoha", text:"반반. 컵은 내 거, 통은 네 거. 같이 왔으면 공평해야지."},
      {hideAll:true, fx:"dim"},
      "상영관. 불이 꺼지고, 스크린 빛만 남았다.",
      "영화는 좋았다. 기차는 떠나고, 두 사람은 끝내 할 말을 못 했다.",
      "옆자리에서 아주 작게, 훌쩍 소리가 났다.",
      "스크린 빛에 비친 서하의 뺨이 젖어 있었다. 본인은 아무렇지 않은 척하는 중이었다.",
      {choice:[
        {text:"말없이 휴지를 건넨다.", aff:{seoha:3}, goto:"tissue"},
        {text:"모른 척 스크린만 본다.", aff:{seoha:2}, goto:"ignore"},
        {text:"'…울어요?' 하고 속삭인다.", aff:{seoha:1}, goto:"ask"}
      ]},
      {label:"tissue"},
      "휴지를 한 장 내밀었다. 서하가 이쪽은 보지도 않고 받아 갔다. 손끝이 잠깐 닿았다.",
      {fx:"heart"},
      {jump:"credit"},
      {label:"ignore"},
      "스크린만 봤다. 옆에서 코 푸는 소리가 두 번, 아주 조심스럽게 났다.",
      {jump:"credit"},
      {label:"ask"},
      {say:"seoha", text:"…안 울어. 조용히 해. 기차 떠나."},
      {label:"credit"},
      "엔딩 크레딧이 올라갔다. 사람들이 일어났다. 서하는 일어나지 않았다.",
      {say:"seoha", text:"끝까지 보자. 만든 사람 이름이 다 나오잖아. 누가 만들었는지는 알아야지."},
      "천천히 올라가는 이름들을, 서하는 하나도 빼놓지 않고 읽었다. 입술이 조금씩 움직였다.",
      {fx:"undim"},
      {show:"seoha", pos:"center", outfit:"r60art_60_reaction", text:"불이 켜졌다. 서하의 눈가가 빨갰다."},
      {say:"me", text:"…우셨죠?"},
      {say:"seoha", text:"안 울었어. 확인해 봐. 안 울었어."},
      "서하가 얼굴을 쑥 내밀었다. 빨간 눈이 코앞이었다. 먼저 고개를 돌린 건 나였다.",
      {fx:"hearts"},
      "그런데 팝콘이 이상했다. 서하의 컵은 그대로인데, 내 팝콘통만 바닥이 보였다.",
      {say:"seoha", text:"…어두워서 경계가 안 보였어. 공평은 다음 회차에 맞추자."},
      {minigame:"actiontalk", who:"seoha"},
      {if:"flag.at=='great'", goto:"great"},
      {if:"flag.at=='good'", goto:"good"},
      {jump:"bad"},
      {label:"great"},
      {say:"seoha", text:"두 사람, 결국 말 못 했잖아. 그게 제일 답답했어."},
      {say:"seoha", text:"…나는 말하는 쪽이고 싶어. 언젠가는. 말해도 되는 날에."},
      {fx:"hearts", aff:{seoha:3}},
      {jump:"out"},
      {label:"good"},
      {say:"seoha", text:"결말 해석이 서로 달라서 재밌었어. 다음 영화도 찾아 둘게.", aff:{seoha:1}},
      {jump:"out"},
      {label:"bad"},
      {say:"seoha", text:"…그 장면, 넌 웃겼어? 난 좀 슬펐는데."},
      "같은 영화를 보고 서로 다른 데서 멈춰 있었다. 그래도 서하는 팝콘 값을 반으로 나눴다.",
      {label:"out"},
      {bg:"road_home", time:"night"},
      {show:"seoha", pos:"center", outfit:"r60art_60_resolution"},
      {say:"seoha", text:"오늘 영화, 좋았어. 다음엔 손수건 챙겨 올게."},
      {say:"seoha", text:"우는 용도 아니야. 확인용이야. …잘 가, {N}."},
      {fx:"heart"}
    ]
  },

  "date_bowling_seoha": {
    title: "데이트 - 볼링장 (서하)",
    steps: [
      {bg:"bowling"},
      "볼링장. 핀이 쓰러지는 소리가 천장까지 튀어 올랐다.",
      {show:"seoha", pos:"center", outfit:"track"},
      "갈아입고 나온 서하는 운동복 차림이었다. 머리는 하나로 묶었고, 주말인데 안경까지.",
      {say:"me", text:"…안경은 왜 쓰셨어요?"},
      {say:"seoha", text:"레인 끝까지 18미터. 안경 없으면 핀이 번져."},
      {say:"seoha", text:"수건도 챙겼어. 손에 땀나면 공이 미끄러지니까."},
      "놀러 온 사람의 준비가 아니었다. 출전하는 사람의 준비였다.",
      "서하가 볼펜과 종이를 꺼내 칸을 그었다. 손으로 적는 점수표였다.",
      {say:"me", text:"점수는 화면에 나오는데요?"},
      {say:"seoha", text:"기계는 가끔 틀려. 그리고 진 사람이 캔커피 사기. 블랙으로."},
      "서하의 첫 투구. 공이 레인 한가운데를 자로 잰 듯 굴러갔다.",
      {fx:"pang", text:"스트라이크."},
      {say:"seoha", text:"좋아!", emote:"exclaim"},
      "주먹을 불끈 쥐었던 서하가, 내 시선을 확인하고 천천히 손을 내렸다.",
      {say:"seoha", text:"방금 건 못 본 걸로 해. 네 차례."},
      {choice:[
        {text:"진지하게 갑니다. 봐주는 거 없어요.", aff:{seoha:3}, goto:"serious"},
        {text:"자세 좀 알려 주세요, 코치님.", aff:{seoha:4}, goto:"coach"},
        {text:"적당히 져 드릴게요.", aff:{seoha:-1}, goto:"lose"}
      ]},
      {label:"serious"},
      {say:"seoha", text:"그래야지. 봐주면 화낼 거였어."},
      "첫 공은 도랑으로 빠졌다. 두 번째 공이 핀 일곱 개를 쓰러뜨렸다.",
      {say:"seoha", text:"7점. 확인. …나쁘지 않네. 긴장되게."},
      {jump:"strike"},
      {label:"coach"},
      {say:"seoha", text:"코치님은 과해. 팔은 시계추처럼, 손목은 고정. …손목만 잡아 줘도 돼?"},
      "고개를 끄덕였다. 서하의 손가락이 내 손목을 살짝 돌려 놓았다. 정확히 한 번.",
      {fx:"heart"},
      {jump:"strike"},
      {label:"lose"},
      "일부러 공을 약하게 굴렸다. 핀이 세 개 넘어졌다.",
      {say:"seoha", text:"…방금 봐줬지. 기록에 남길 거야. '봐줌'.", emote:"angry"},
      "서하가 정말로 점수표 귀퉁이에 적었다. '봐줌.' 밑줄 두 번.",
      {label:"strike"},
      "5프레임. 공이 손을 떠나는 순간 알았다. 이건 간다.",
      {fx:"pang", text:"스트라이크. 뒤돌아보니 서하가 벌써 손바닥을 들고 서 있었다."},
      {say:"seoha", text:"손."},
      "짝. 손바닥 맞닿는 소리가 핀 소리보다 크게 울렸다.",
      {fx:"hearts"},
      {say:"seoha", text:"하이파이브는 규정상 괜찮아. 스포츠니까."},
      {minigame:"actiontalk", who:"seoha"},
      {if:"flag.at=='great'", goto:"great"},
      {if:"flag.at=='good'", goto:"good"},
      {jump:"bad"},
      {label:"great"},
      "마지막 프레임. 한 핀 차이로 내가 이겼다.",
      {say:"seoha", text:"…졌다. 인정. 점수표에도 그렇게 적을게."},
      "서하가 자판기에 가더니 블랙 캔커피를 두 개 뽑아 왔다.",
      {say:"seoha", text:"하나는 네 거. 나머지는… 어차피 두 개 살 생각이었어. 진 거랑 상관없이."},
      {fx:"heart", aff:{seoha:3}},
      {jump:"out"},
      {label:"good"},
      "서하가 이겼다. 점수표 맨 아래에 동그라미가 크게 그려졌다.",
      {say:"seoha", text:"블랙, 차가운 걸로. …네 것도 같이 뽑아. 두 개.", aff:{seoha:1}},
      {jump:"out"},
      {label:"bad"},
      "서하의 압승이었다. 점수 차가 백 점을 넘었다.",
      {say:"seoha", text:"…나 너무 진지했지. 미안. 볼링장에선 사람이 좀 바뀌어."},
      {label:"out"},
      {bg:"road_home", time:"night"},
      {show:"seoha", pos:"center", text:"밤공기가 차가웠다. 원래 옷으로 갈아입은 서하가 손목을 돌리고 있었다."},
      {say:"seoha", text:"내일 팔 뻐근하면 네 자세 탓이야. 확인은 월요일에 할게."},
      {say:"seoha", text:"…오늘 재밌었어. 승부 말고, 그냥. 잘 가, {N}."},
      {fx:"heart"}
    ]
  },

  "date_lake_seoha": {
    title: "데이트 - 호숫가 오리배 (서하)",
    steps: [
      {bg:"lake"},
      {if:"season=='winter'", goto:"w_in"},
      {show:"seoha", pos:"center", outfit:"r60art_42_reaction"},
      {say:"seoha", text:"…왔어? 기척 좀 내. 오리배 요금표 확인하던 중이었어."},
      {jump:"j_in"},
      {label:"w_in"},
      {show:"seoha", pos:"center", outfit:"r60art_49_resolution"},
      {say:"seoha", text:"겨울에도 오리배 떠. 확인했어. 무릎 담요도 준대."},
      {label:"j_in"},
      "오리배는 생각보다 작았다. 나란히 앉으니 어깨가 닿을락 말락 했다.",
      {say:"seoha", text:"페달은 둘, 방향키는 하나. 방향키는 네가 잡아. 박자는 내가 맞출게."},
      {hideAll:true, text:"출발. 서하의 페달은 메트로놈 같았다. 하나, 둘. 하나, 둘."},
      "문제는 방향키였다. 오른쪽으로 꺾자 배가 왼쪽으로 돌았다. 다시 꺾자 제자리에서 돌았다.",
      {say:"seoha", text:"우리 지금 제자리야. 세 바퀴째."},
      {say:"me", text:"호수가 돌고 있는 걸 수도 있어요."},
      "서하가 페달에서 발을 떼고 웃음을 터뜨렸다. 오리배는 느릿느릿 계속 돌았다.",
      {choice:[
        {text:"박자 세 주세요. 페달을 맞춰 볼게요.", aff:{seoha:3}, goto:"sync"},
        {text:"이대로 돌아요. 목적지 없는 것도 괜찮잖아요.", aff:{seoha:4}, goto:"spin"},
        {text:"방향키는 서하 씨가 잡으세요.", aff:{seoha:2}, goto:"swap"}
      ]},
      {label:"sync"},
      {say:"seoha", text:"하나, 둘. 하나, 둘."},
      "박자에 맞춰 밟았다. 페달 두 개가 한 박자가 되자 배가 곧게 나아갔다.",
      {jump:"wind"},
      {label:"spin"},
      {say:"seoha", text:"목적지 없이 가 본 적은 없는데. …나쁘지 않네. 기록해 둘게."},
      {jump:"wind"},
      {label:"swap"},
      "서하가 방향키를 잡자 배가 거짓말처럼 곧게 나갔다. 호수 한가운데까지.",
      {say:"seoha", text:"…너무 똑바로 가니까 재미없네."},
      "서하가 방향키를 끝까지 꺾었다. 일부러였다. 오리배가 다시 뱅글뱅글 돌았다.",
      {label:"wind"},
      "호수 한가운데. 서하가 가방에서 안경을 꺼내 썼다. 건너편 정자까지 보고 싶다고.",
      "바람이 불었다. 물보라가 튀어 안경알에 물방울이 점점이 맺혔다. 서하가 안경을 벗어 접었다.",
      {if:"season=='winter'", goto:"w_gl"},
      {show:"seoha", pos:"center", outfit:"r60art_42_resolution"},
      {jump:"j_gl"},
      {label:"w_gl"},
      {show:"seoha", pos:"center", outfit:"r60art_49_reaction"},
      {label:"j_gl"},
      {say:"me", text:"…안경 벗으면 안 보이지 않아요?"},
      {say:"seoha", text:"괜찮아. 먼 건 흐려도 돼. 가까운 건 보이니까."},
      "가까운 것. 서하는 그 말을 하고 호수만 봤다. 나도 호수만 봤다.",
      {fx:"hearts"},
      {minigame:"actiontalk", who:"seoha"},
      {if:"flag.at=='great'", goto:"great"},
      {if:"flag.at=='good'", goto:"good"},
      {jump:"bad"},
      {label:"great"},
      {say:"seoha", text:"반납 시간 10분 지났어. …시계를 한 번도 안 봤네. 나답지 않게."},
      {say:"seoha", text:"추가 요금 낼게. 이 10분은 그럴 가치가 있었어."},
      {fx:"hearts", aff:{seoha:3}},
      {jump:"out"},
      {label:"good"},
      {say:"seoha", text:"딱 30분. 반납 시간 정확해. …조금 아쉽게 정확하네.", aff:{seoha:1}},
      {jump:"out"},
      {label:"bad"},
      {say:"seoha", text:"…바람 때문에 반은 못 들었어. 다음엔 육지에서 얘기하자."},
      {label:"out"},
      {bg:"road_home", time:"night"},
      "골목 입구에서 헤어졌다. 몇 걸음 가던 서하가 돌아봤다.",
      {say:"seoha", text:"다음에 또 타자. 방향키는 그때도 네가 잡아. 제자리여도 괜찮으니까."},
      {say:"seoha", text:"잘 가, {N}. …오늘은 흐리게 봐서 좋았어."},
      {fx:"heart"}
    ]
  }

});
