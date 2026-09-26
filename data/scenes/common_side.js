// 공용 서브 씬 (common_side.js)
// 범용 활동 / 알바 / 상점(나래·은정) / 선생님 / 장소 범용 / 가족 / 취침
// 배경은 대부분 엔진이 슬롯에 맞춰 먼저 깔아준다. 필요한 곳만 bg 를 명시한다.

// ---------------------------------------------------------------
// 1. 범용 활동 (act_*) — 엔진이 배경을 깔고 h = 최고호감으로 호출
// ---------------------------------------------------------------
registerScenes({
  "act_study": {
    title: "활동 - 공부",
    steps: [
      {if:"season=='summer'", goto:"summer"},
      {if:"season=='winter'", goto:"winter"},
      "빈 옆 반 교실. 문제집을 펴자 새 종이 냄새가 훅 올라왔다.",
      {show:"taeo", pos:"center", anim:"in"},
      {say:"taeo", text:"어, {N}. 여기서 공부해? 나도 자주 와. 조용하거든."},
      {say:"taeo", text:"그 문제는 공식부터 쓰지 말고 그림을 먼저 그려. 그럼 반은 풀려."},
      "짧고 정확한 힌트였다. 펜이 조금 빨라졌다.",
      {say:"taeo", text:"…뭐. 다음엔 힌트 없이 이기러 와.", emote:"laugh"},
      {hide:"taeo"},
      {jump:"end"},
      {label:"summer"},
      "교실 선풍기가 느리게 고개를 돌렸다. 바람이 지나갈 때마다 종이가 들썩였다.",
      "땀이 손목을 타고 내려와 문제집에 동그란 자국을 남겼다.",
      {think:"…더워도 한 문제만 더. 태오는 이 날씨에도 1등이겠지, 아마."},
      {jump:"end"},
      {label:"winter"},
      "난방이 시원찮은 옆 반 교실. 입김이 문제집 위로 하얗게 퍼졌다.",
      {show:"minjae", pos:"center", anim:"in"},
      {say:"minjae", text:"야, 너 미쳤냐. 여기서 공부를? 손가락 얼어서 펜 놓치겠다."},
      {say:"minjae", text:"…나도 옆에 앉는다. 공부는 못 도와줘도 체온은 나눠 줄게.", emote:"laugh"},
      "둘이서 문제집 하나를 나눠 봤다. 이상하게 집중이 더 잘됐다.",
      {hide:"minjae"},
      {label:"end"},
      {think:"…오늘 푼 만큼은 머리에 남았겠지."}
    ]
  },

  "act_exercise": {
    title: "활동 - 운동",
    steps: [
      {if:"season=='summer'", goto:"summer"},
      {if:"season=='winter'", goto:"winter"},
      "체육관. 바닥에 운동화가 끌리는 소리가 높게 울렸다.",
      {show:"t_kang", pos:"center", anim:"in"},
      {say:"t_kang", text:"오, 제 발로 운동하러 온 놈이 있네? 기특하다!", emote:"exclaim"},
      {say:"t_kang", text:"기특한 김에 열 바퀴. 아니, 스무 바퀴. 청춘은 뛰는 거다!"},
      {fx:"shake"},
      "칭찬인지 벌인지 모를 소리를 들으며 뛰었다. 다리가 후들거렸다.",
      {say:"t_kang", text:"좋아, 그 표정. 내일도 와라!", emote:"laugh"},
      {hide:"t_kang"},
      {jump:"end"},
      {label:"summer"},
      "체육관 안은 찜통이었다. 문을 다 열어도 바람 한 점 없었다.",
      {show:"jiho", pos:"center", anim:"in"},
      {say:"jiho", text:"…운동? 이 날씨에? 대단하네. 난 에어컨 찾으러 왔는데."},
      {say:"jiho", text:"물 마셔. 쓰러지면 내가 업어야 되잖아."},
      "지호가 던져 준 생수는 미지근했다. 그래도 한 모금에 살 것 같았다.",
      {hide:"jiho"},
      {jump:"end"},
      {label:"winter"},
      "겨울 체육관. 숨을 쉴 때마다 하얀 김이 농구 골대 쪽으로 흘러갔다.",
      "몸이 풀리기까지 한참 걸렸다. 그래도 뛰고 나니 손끝까지 뜨거웠다.",
      {think:"…추울 때 뛰는 게 더 개운하네. 서윤이가 왜 매일 뛰는지 조금 알겠다."},
      {label:"end"}
    ]
  },

  "act_art": {
    title: "활동 - 미술",
    steps: [
      {if:"season=='autumn'", goto:"autumn"},
      "미술실엔 유화 물감 냄새가 늘 반 발짝 먼저 나와 있었다.",
      "이젤 앞에 앉아 석고상을 봤다. 석고상도 나를 봤다. 서로 어색했다.",
      {show:"seokhwan", pos:"center", anim:"in"},
      {say:"seokhwan", text:"{N}도 그림 그려? 나, 나는 동아리 포스터 그리러 왔는데…"},
      {say:"seokhwan", text:"별자리 그리다가 자꾸 AKI 얼굴이 돼. 이상하지? 이상하지…", emote:"sweat"},
      "석환의 도화지엔 별 사이에 진짜로 사람 얼굴이 떠 있었다. 잘 그렸다는 게 문제였다.",
      {say:"me", text:"…그냥 그걸로 내. 천문동아리 부원 늘 것 같은데."},
      {say:"seokhwan", text:"그, 그럴까?", emote:"laugh"},
      {hide:"seokhwan"},
      {jump:"end"},
      {label:"autumn"},
      "가을 오후의 미술실. 창으로 들어온 빛이 이젤 다리에 길게 걸렸다.",
      "붓끝이 종이에 닿는 소리가 좋았다. 사각, 사각. 그것 말곤 아무 소리도 없었다.",
      {think:"…축제 부스 간판, 이 정도면 되려나. 다은이한테 보여주면 한마디 하겠지."},
      {label:"end"},
      "손가락 끝에 물감이 남았다. 씻어도 잘 안 지워지는 파란색이었다."
    ]
  },

  "act_music": {
    title: "활동 - 음악",
    steps: [
      "2층 복도 끝, 음악실 앞. 문틈으로 기타 튜닝 소리가 새어 나왔다.",
      {show:"jiho", pos:"center", anim:"in"},
      {say:"jiho", text:"…왔냐. 들어와. 문 앞에 서서 들으면 신경 쓰여."},
      {say:"jiho", text:"코드 세 개면 노래 하나는 돼. 잡아 봐. 검지, 중지, 약지."},
      "지호가 내 손가락을 하나씩 줄 위로 옮겨줬다. 손끝이 아팠다.",
      {choice:[
        {text:"열심히 따라 친다.", stat:{sense:1}, goto:"try"},
        {text:"지호 연주를 듣기만 한다.", goto:"listen"}
      ]},
      {label:"try"},
      "띵, 띠잉. 소리는 형편없었지만 지호는 웃지 않았다.",
      {say:"jiho", text:"됐어. 소리 났잖아. 처음엔 그게 다야."},
      {jump:"end"},
      {label:"listen"},
      "지호의 손이 줄 위를 미끄러졌다. 음악실이 잠깐 다른 계절이 된 것 같았다.",
      {say:"jiho", text:"…이 곡, 아직 끝을 못 냈어. 마지막 몇 마디가 안 나와."},
      {label:"end"},
      {hide:"jiho"},
      "돌아오는 길에도 손끝이 저릿했다. 나쁜 저릿함은 아니었다."
    ]
  },

  "act_style": {
    title: "활동 - 스타일",
    steps: [
      {if:"season=='winter'", goto:"winter"},
      "번화가. 쇼윈도 유리에 비친 내 모습을 괜히 한 번 더 봤다.",
      {show:"minjae", pos:"center", anim:"in"},
      {say:"minjae", text:"오, 스타일 공부? 좋아. 이 몸이 가르쳐준다. 첫째, 앞머리."},
      {say:"minjae", text:"둘째, 향수는 한 번만. 셋째… 셋째가 뭐였지. 아무튼 자신감."},
      {say:"me", text:"넌 왜 여자친구가 없냐."},
      {say:"minjae", text:"…그건 네 번째 규칙이야. 말하지 않기.", emote:"sweat"},
      "민재가 골라준 머리 왁스를 샀다. 미묘하게 어른이 된 기분이었다.",
      {hide:"minjae"},
      {jump:"end"},
      {label:"winter"},
      "겨울 번화가. 코트 깃을 세운 사람들 사이를 걸었다.",
      "매장 거울 앞에서 목도리를 두 번 감았다 풀었다 했다. 사소한데 오래 걸렸다.",
      {think:"…이런 걸 신경 쓰게 될 줄은 몰랐다. 봄엔 안 그랬는데."},
      {label:"end"}
    ]
  },

  "act_friend": {
    title: "활동 - 친구",
    steps: [
      {if:"season=='summer'", goto:"summer"},
      "교정 벤치. 민재와 석환이 이미 자리를 잡고 있었다.",
      {show:"minjae", pos:"left"},
      {show:"seokhwan", pos:"right"},
      {say:"minjae", text:"{N}! 마침 잘 왔어. 석환이가 오늘 밤 별 보러 가자는데 같이 갈래?"},
      {say:"seokhwan", text:"오, 오늘 목성이 가까워! 망원경 렌즈도 벌써 닦아 놨어.", emote:"exclaim"},
      {say:"minjae", text:"난 목성보다 그 옆 반 애가 더 궁금한데… 농담이야, 농담."},
      {say:"seokhwan", text:"…그 애 이름 뭐야?", emote:"question"},
      {say:"minjae", text:"그걸 왜 네가 물어봐!", emote:"angry"},
      "둘이 티격태격하는 걸 듣다 보니 한 시간이 금방 갔다.",
      {hide:"minjae"},
      {hide:"seokhwan"},
      {jump:"end"},
      {label:"summer"},
      "매미 소리가 교정을 꽉 채웠다. 그늘 벤치는 자리 쟁탈전이었다.",
      {show:"jiho", pos:"left"},
      {show:"taeo", pos:"right"},
      {say:"taeo", text:"{N}. 너 요즘 누구랑 자주 다녀? 소문이 좀 있던데."},
      {say:"jiho", text:"…태오. 그런 건 본인이 말하기 전엔 안 묻는 거야."},
      {say:"taeo", text:"그래? 난 궁금하면 묻는 편이라.", emote:"neutral"},
      "태오의 눈이 잠깐 웃지 않았다. 지호가 아이스크림을 내 손에 쥐여줬다.",
      {say:"jiho", text:"녹는다. 먹어."},
      {hide:"jiho"},
      {hide:"taeo"},
      {label:"end"}
    ]
  },

  "act_rest": {
    title: "활동 - 휴식",
    steps: [
      {if:"season=='winter'", goto:"winter"},
      {if:"season=='summer'", goto:"summer"},
      {text:{when:"weekend", then:"집. 침대에 그대로 엎어졌다. 주말 오후가 이불처럼 느슨했다.", else:"집. 교복을 벗어 던지고 침대에 엎어졌다."}},
      "창밖 멀리서 아이들 노는 소리가 들렸다. 눈꺼풀이 무거워졌다.",
      {show:"mom", pos:"center"},
      {say:"mom", text:"{N}, 자는 거야? 저녁은 먹고 자. 국 데워 놨어."},
      "엄마 목소리가 꿈 안쪽까지 따라왔다. 기분 좋은 무게였다.",
      {hide:"mom"},
      {jump:"end"},
      {label:"summer"},
      "선풍기 바람이 얼굴을 훑고 지나갔다. 방바닥이 등에 시원했다.",
      "폰을 들었다가 내려놨다. 잠금화면의 실루엣과 잠깐 눈이 마주친 것 같았다.",
      {think:"…기분 탓이겠지."},
      {jump:"end"},
      {label:"winter"},
      "이불 속. 손끝이 녹을 때까지 아무것도 하지 않았다.",
      {show:"dad", pos:"center"},
      {say:"dad", text:"…귤 먹어라. 방문 앞에 두고 간다."},
      "아빠는 그 말만 하고 갔다. 귤은 열 개나 됐다.",
      {hide:"dad"},
      {label:"end"}
    ]
  }
});

// ---------------------------------------------------------------
// 2. 알바 — 첫 방문 소개 / 직종 시작 / 결과
// ---------------------------------------------------------------
registerScenes({
  "alba_intro_cafe": {
    title: "알바 첫 방문 - 카페 Forin",
    steps: [
      "카페 Forin. 문에 달린 종이 딸랑, 하고 울렸다. 원두 냄새가 마중 나왔다.",
      {show:"doyoon", pos:"center", anim:"in"},
      {say:"doyoon", text:"왔네. 진짜 왔네. 짐꾼 실력은 저번에 봤으니까, 오늘은 일 실력 좀 보자."},
      {say:"doyoon", text:"일은 셋 중 하나야. 청소, 서빙, 주방 보조. 편한 건 없어."},
      {say:"doyoon", text:"청소는 몸으로, 서빙은 얼굴로, 주방은 손으로. 넌 어느 쪽이냐?"},
      {say:"me", text:"…셋 다 자신은 없는데요."},
      {say:"doyoon", text:"솔직해서 좋다. 자신 있는 놈은 컵 깨. 자신 없는 놈이 오래가.", emote:"laugh"},
      "도윤 씨가 앞치마를 던졌다. 하늘이 매일 두르는 것과 같은 색이었다.",
      {say:"doyoon", text:"실수하면 내가 욕하고, 잘하면 하늘이가 칭찬할 거야. 분업이지."},
      {say:"doyoon", text:"…여기선 하늘이한테 학교 얘기 꺼내지 마라. 걔, 학교랑 여기를 나눠 두고 싶어 하거든."},
      {hide:"doyoon"},
      "앞치마 끈을 두 번 묶었다. 손이 조금 떨렸다."
    ]
  },

  "alba_intro_burger": {
    title: "알바 첫 방문 - BURGUR",
    steps: [
      "번화가 모퉁이 BURGUR. 튀김 기름 냄새가 문밖까지 새어 나왔다.",
      {show:"mina", pos:"left", anim:"in"},
      {say:"mina", text:"하늘고 {N} 학생? 매니저 홍미나예요. 앉아요. 3분 안에 설명 끝낼게요."},
      {say:"mina", text:"계산대, 서빙, 주방보조. 손 씻기 30초, 인사 15도, 미소는 기본."},
      {say:"mina", text:"질문은 나중에. 지금은 외워요. 시간은 돈이고 돈은 시급이니까."},
      {show:"sora", pos:"right", anim:"jump"},
      {say:"sora", text:"매니저님, 그러다 애 도망가요. 안녕, 나 김소라. 옆 학교 2학년!", emote:"laugh"},
      {say:"sora", text:"같은 2학년이지? 말 놔. 여기 매니저님 무서워 보여도 생일엔 케이크 사줘."},
      {say:"mina", text:"김소라 씨. 감자 튀길 시간.", emote:"neutral"},
      {say:"sora", text:"넵! …나중에 하늘고 얘기 잔뜩 해 줘. 우리 학교는 재미가 없거든.", emote:"sweat"},
      "소라는 소리 없이 입 모양으로 '파이팅'을 하고 주방으로 사라졌다.",
      {hide:"sora"},
      {say:"mina", text:"3분 지났네요. 시작하죠."},
      {hide:"mina"}
    ]
  },

  "alba_intro_cvs": {
    title: "알바 첫 방문 - 편의점",
    steps: [
      "동네 편의점. 자동문이 열리며 익숙한 멜로디가 흘렀다.",
      {show:"eunjung", pos:"left", anim:"in"},
      {say:"eunjung", text:"…네가 그 전학생이구나. 점장 오은정. 팔짱 낀 건 습관이니까 신경 쓰지 마."},
      {say:"eunjung", text:"청소, 물품정리, 계산대. 유통기한 지난 거 팔면 그날로 끝이야. 알겠니?"},
      {say:"me", text:"네, 네!"},
      {show:"narae", pos:"right", anim:"in"},
      {say:"narae", text:"점장님, 첫날부터 겁주지 마세요. 얘 손 떨리는 것 좀 봐요."},
      {say:"narae", text:{when:"flag.shop_visited", then:"대학생 이나래예요. 밤에 손님으로 왔을 때 봤죠? 낮에도 있어요.", else:"대학생 이나래예요. 밤에도 있으니까 놀러 와요."}},
      {say:"eunjung", text:"나래야, 얘한테 폐기 삼각김밥 주지 마. 신입은 그거 먹으면 정 붙어서 못 나가."},
      {say:"narae", text:"그게 노림수 아니었어요?", emote:"laugh"},
      "점장님은 대답 대신 눈을 흘겼다. 그 눈에도 어딘가 웃음이 묻어 있었다.",
      {hide:"eunjung"},
      {say:"narae", text:"…걱정 마요. 점장님, 정 많아요. 그냥 표정이 저럴 뿐이에요."},
      {hide:"narae"}
    ]
  },

  "alba_job_clean": {
    title: "알바 - 청소 시작",
    steps: [
      "대걸레와 양동이. 바닥의 얼룩이 오늘의 상대였다.",
      "물이 너무 많아도, 너무 적어도 안 된다고 했다. 힘 조절이 전부였다.",
      {think:"…게이지가 초록에서 멈추면 돼. 팔에 힘 빼고."}
    ]
  },
  "alba_job_stock": {
    title: "알바 - 물품정리 시작",
    steps: [
      "창고 안 박스 더미. 유통기한 순서대로, 앞엔 오래된 것, 뒤엔 새것.",
      "머리로 외우고 몸으로 옮기는 일. 숫자와 팔이 같이 바빴다.",
      {think:"…한 번에 너무 많이 들면 무너진다. 딱 좋은 만큼만."}
    ]
  },
  "alba_job_cashier": {
    title: "알바 - 계산대 시작",
    steps: [
      "계산대 앞. 손님이 들어오면 인사, 바코드, 거스름돈, 다시 인사.",
      "손이 빠르면 실수하고, 느리면 줄이 길어진다. 리듬을 찾아야 했다.",
      {think:"…웃는 얼굴 유지. 게이지는 초록. 침착하게."}
    ]
  },
  "alba_job_serve": {
    title: "알바 - 서빙 시작",
    steps: [
      "쟁반 위에 잔 세 개. 걸음마다 표면이 찰랑거렸다.",
      "손님 눈을 보고, 컵은 소리 없이. 말은 짧고, 웃음은 진짜처럼.",
      {think:"…떨지 말자. 딱 좋은 속도로. 넘치지도, 늦지도 않게."}
    ]
  },
  "alba_job_kitchen": {
    title: "알바 - 주방보조 시작",
    steps: [
      "주방. 칼과 팬, 그리고 뜨거운 기름. 손놀림 하나에 접시 하나가 걸렸다.",
      "썰고, 옮기고, 닦고. 세 박자가 어긋나면 셰프의 한숨이 날아왔다.",
      {think:"…불 조절이 전부야. 게이지 초록, 초록만 보자."}
    ]
  },

  "alba_win": {
    title: "알바 - 성공",
    steps: [
      {fx:"sparkle"},
      "마지막 손님이 나갈 때까지 실수는 없었다. 오늘은 내 편이었다.",
      "봉투에 담긴 보수가 손바닥 안에서 묵직했다. 땀만큼의 무게였다.",
      {think:"…이 돈으로 뭘 하지. 누구한테 뭘 사주지."}
    ]
  },
  "alba_lose": {
    title: "알바 - 실패",
    steps: [
      {fx:"shake"},
      "결정적인 순간에 손이 미끄러졌다. 가게 안이 잠깐 조용해졌다.",
      "그래도 봉투는 받았다. 얇았다. 죄송하다는 말보다 고맙다는 말이 먼저 나왔다.",
      {think:"…다음엔 게이지 좀 더 보고 멈추자. 팔에 힘이 너무 들어갔어."}
    ]
  }
});

// ---------------------------------------------------------------
// 3. 편의점 — 나래 연애상담 / 은정 점장
// ---------------------------------------------------------------
registerScenes({
  "shop_talk_1": {
    title: "편의점 상담 1 - 좋아하는 사람",
    steps: [
      {sethero:"top"},
      {show:"narae", pos:"right"},
      {say:"narae", text:"요즘 얼굴이 좀 달라졌어요. 누구 생겼죠? 누나 눈은 못 속여요."},
      {say:"me", text:"…그렇게 티 나요?"},
      {say:"narae", text:"삼각김밥 고르는 데 3분 걸리는 남자는 둘 중 하나예요. 배고프거나, 사랑이거나."},
      {choice:[
        {text:"…있긴 해요.", goto:"yes"},
        {text:"없어요. 진짜로.", goto:"no"}
      ]},
      {label:"yes"},
      {say:"narae", text:"오, 그럼 첫 번째 조언. 그 애가 뭘 좋아하는지, 하나만 정확히 알아 둬요."},
      {say:"narae", text:{
        seoyoon:"육상부 애라면 짭짤한 거. 뛰고 나면 단 것보다 짠 게 당기거든요.",
        daeun:"조용한 애라면 작고 나눠 먹기 좋은 거. 과자 한 알씩 건네면 말이 늘어요.",
        haneul:"똑 부러진 애라면 오히려 부드러운 거. 하루 종일 남 챙기느라 자기 건 못 먹거든요.",
        yuri:"텐션 높은 애라면 긴 거! 반으로 나눠서 게임하듯 먹으면 엄청 좋아해요."
      }},
      {think:"…나래 씨, 혹시 {H}를 아나? 아니, 그냥 감이겠지."},
      {jump:"end"},
      {label:"no"},
      {say:"narae", text:"없다고 하는 사람이 제일 위험해요. 그 말, 한 달 뒤에 다시 물어볼게요.", emote:"laugh"},
      {label:"end"},
      {say:"narae", text:"아무튼, 간식은 여기서 사요. 누나 매출도 사랑이니까."}
    ]
  },

  "shop_talk_2": {
    title: "편의점 상담 2 - 문자 답장",
    steps: [
      {sethero:"top"},
      {show:"narae", pos:"right"},
      {say:"narae", text:"폰 보면서 한숨 쉬는 거, 지금 세 번째예요. 답장 고민이죠?"},
      {say:"me", text:"…뭐라고 보내야 할지 모르겠어서요."},
      {say:"narae", text:"답장 규칙 알려줄까요? 첫째, 그 애가 보낸 길이랑 비슷하게."},
      {say:"narae", text:"둘째, 물음표 하나는 남겨요. 대화가 안 끊기게. 셋째, 밤 12시 넘기지 말기."},
      {say:"me", text:"12시 넘으면요?"},
      {say:"narae", text:"12시 넘은 문자는 다 진심이 돼요. 준비 안 됐으면 위험하죠.", emote:"laugh"},
      "12시. 자정마다 오는 그 메시지가 떠올랐다. 그건 누구의 진심일까.",
      {say:"narae", text:{
        seoyoon:"아, 그리고 무뚝뚝한 애는 'ㅋㅋ' 하나가 하트예요. 놓치지 마요.",
        daeun:"말끝에 점 찍는 애는 그 점마다 할 말이 있는 거예요. 물어봐 줘요.",
        haneul:"'괜찮아' 자주 쓰는 애는… 가끔 안 괜찮은 날이 있어요. 그날을 봐요.",
        yuri:"느낌표 많은 애는 느낌표 없는 날을 조심해요. 그날이 진짜예요."
      }},
      {think:"…꼭 {H} 얘기 같다. 나래 씨는 {H}를 모를 텐데."},
      {say:"narae", text:"자, 얼른 답장해요. 삼각김밥은 서비스."}
    ]
  },

  "shop_talk_3": {
    title: "편의점 상담 3 - 나래의 옛날 얘기",
    steps: [
      {sethero:"top"},
      {show:"narae", pos:"right"},
      {say:"narae", text:"…내 고등학교 때 얘기 해 줄까요? 심심한데."},
      {say:"narae", text:"좋아하는 애가 있었는데, 걔 취향 다 외웠어요. 과자, 음료, 자리까지."},
      {say:"narae", text:"근데 한 번도 못 줬어요. 주면 들킬까 봐. 졸업하고 나서야 후회했죠."},
      {say:"me", text:"…지금은요?"},
      {say:"narae", text:"지금은 편의점에서 남의 사랑 참견하죠. 재밌어요, 이게.", emote:"laugh"},
      "웃는데 눈이 잠깐 창밖으로 갔다. 유리창엔 나래 씨 얼굴만 흐릿하게 비쳤다.",
      {choice:[
        {text:"지금이라도 연락해 보세요.", goto:"now"},
        {text:"저는 늦지 않을게요.", aff:{h:1}, goto:"me"}
      ]},
      {label:"now"},
      {say:"narae", text:"…그럴까. 아니다, 이건 손님 상담이지 내 상담이 아니야!", emote:"blush"},
      {jump:"end"},
      {label:"me"},
      {say:"narae", text:"…그 말, 마음에 든다. 늦지 마요. 진짜로."},
      {text:{when:"flag.alba_open", then:"늦지 마라. 도윤 씨도 같은 말을 했었다. 어른들은 다 같은 후회를 하는 걸까.", else:"늦지 말라는 말이 이상하게 오래 남았다. 어른들은 다 같은 후회를 하는 걸까."}},
      {label:"end"},
      {say:"narae", text:"자, {H}… 아, 이름은 민재 군한테 들었어요. 그 애한테 줄 거 하나 골라요. 오늘은 10% 누나 할인."},
      {think:"…민재. 정보통이 아니라 정보 유출자다. 내일 두고 보자."}
    ]
  },

  "shop_talk_4": {
    title: "편의점 상담 4 - 선물의 타이밍",
    steps: [
      {sethero:"top"},
      {show:"narae", pos:"right"},
      {say:"narae", text:"선물은 타이밍이에요. 비싼 거 말고, 딱 필요한 순간에."},
      {say:"narae", text:"뛰고 난 뒤, 울고 난 뒤, 시험 끝난 뒤. 그때 건네는 과자 하나가 반지보다 세요."},
      {say:"me", text:"…반지는 좀 이르죠."},
      {say:"narae", text:"당연하죠. 고2가 무슨 반지예요! 누나 심장 떨어질 뻔했네.", emote:"surprise"},
      {if:"season=='winter' && day>=22 && day<=24", goto:"winter"},
      {say:"narae", text:"아무튼, 그 애가 힘든 날 뭘 찾는지 봐 둬요. 그게 답이에요."},
      {jump:"end"},
      {label:"winter"},
      {say:"narae", text:"겨울이면 더 그래요. 12월엔 다들 뭔가 기다리잖아요. 특히 24일 밤."},
      {say:"narae", text:"그날 빈손으로 가지 마요. 주머니에 뭐라도 하나 넣어 가요. 손이라도."},
      {fx:"heart"},
      {think:"…24일 밤. 왜 다들 그날을 얘기하는 걸까."},
      {label:"end"},
      {say:"narae", text:"상담비는 매출로 받을게요. 뭐 살래요?"}
    ]
  },

  "shop_manager_1": {
    title: "편의점 점장 1 - 은정의 폐기 삼각김밥",
    steps: [
      {show:"eunjung", pos:"left", anim:"in"},
      {show:"narae", pos:"right"},
      {say:"eunjung", text:"…또 왔네, 하늘고. 군것질 이렇게 자주 하면 엄마가 걱정하셔."},
      {say:"me", text:"안녕하세요, 점장님."},
      {say:"eunjung", text:"인사는 됐고. 밥은 먹었니? 얼굴이 밥 안 먹은 얼굴이야."},
      {say:"narae", text:"점장님 얼굴 판독기, 가끔 무섭다니까요."},
      {say:"eunjung", text:"넌 조용히 해. …이거. 폐기 나온 거야. 팔면 안 되니까 먹어 치워."},
      "점장님이 계산대 너머로 삼각김밥 두 개를 밀어 놓았다. 아직 따뜻했다.",
      {think:"…폐기가 따뜻할 리가 없는데."},
      {say:"eunjung", text:"뭘 봐. 빨리 가져가. 다른 손님 보면 나도 곤란해.", emote:"angry"},
      {say:"narae", text:"점장님은 원래 저래요. 고맙단 말 들으면 더 화내요.", emote:"laugh"},
      {say:"me", text:"…잘 먹겠습니다."},
      {say:"eunjung", text:"…그래. 늦게 다니지 말고."},
      {hide:"eunjung"}
    ]
  },

  "shop_manager_2": {
    title: "편의점 점장 2 - 은정의 잔소리",
    steps: [
      {show:"eunjung", pos:"left", anim:"in"},
      {show:"narae", pos:"right"},
      {say:"eunjung", text:"너, 우리 나래한테 연애 상담 받으러 오는 애지? 얼굴에 써 있어."},
      {say:"me", text:"어, 어떻게 아셨어요?"},
      {say:"eunjung", text:"이 편의점 안에서 내가 모르는 건 유통기한밖에 없어. …농담이야."},
      {say:"narae", text:"점장님도 상담 좀 해 주세요. 결혼 선배잖아요!"},
      {say:"eunjung", text:"결혼이랑 연애는 다른 과목이야. 근데 하나만 말해줄게."},
      {say:"eunjung", text:"좋아하는 애 앞에서 착한 척하지 마. 착한 척은 3개월이면 들통나."},
      {say:"eunjung", text:"그냥 생긴 대로 있어. 그런 널 좋아해 주는 애가 진짜야."},
      "팔짱을 낀 채 툭 던진 말이었다. 나도 모르게 고개를 끄덕였다.",
      {say:"narae", text:"…점장님, 지금 좀 멋있었어요.", emote:"surprise"},
      {say:"eunjung", text:"매출이나 올려. …너도 뭐 좀 사 가고.", emote:"neutral"},
      {hide:"eunjung"}
    ]
  }
});

// ---------------------------------------------------------------
// 4. 선생님 정오 랜덤 씬
// ---------------------------------------------------------------
registerScenes({
  "teacher_moon_1": {
    title: "문 선생님 1 - 마법진 전설(문 선생님 버전)",
    steps: [
      {bg:"hallway2", time:"noon"},
      "점심시간. 2층 복도 창가에서 문 선생님이 혼자 밖을 보고 있었다.",
      {show:"t_moon", pos:"center", anim:"in"},
      {say:"t_moon", text:"{N}. 점심은 먹었어요? …저기 보여요? 공연장 바닥."},
      "창 너머 야외공연장. 낡은 문양이 햇빛 각도에 따라 나타났다 사라졌다.",
      {if:"day<10", goto:"early"},
      {say:"me", text:"선생님 버전 전설이요. 1년 전의 그 사람한테 닿는다는 거, 자꾸 생각나요."},
      {say:"t_moon", text:"아직도 그 얘기 생각해요? 도윤 씨 버전보다 오래 남죠?"},
      {say:"t_moon", text:"그날 말 안 한 게 있어요. 왜 하필 옛사랑이 아니라, 1년 전일까."},
      {say:"t_moon", text:"옛사랑은 이미 끝난 사람이잖아요. 1년 전의 그 사람은, 아직 시작도 안 한 사람이고."},
      {say:"me", text:"1년 전이면… 아직 아무 일도 없었을 때잖아요."},
      {say:"t_moon", text:"그렇죠. 그래서 무서운 전설이에요. 아무것도 몰랐던 사람한테 마음이 가는 거니까."},
      {say:"t_moon", text:"받은 쪽은 그게 왜 오는지 몰라요. 그냥… 누군가 자기를 안다는 느낌만."},
      "주머니 속 폰이 딱 한 번 진동했다. 아무 알림도 없었다.",
      {choice:[
        {text:"선생님은 믿으세요?", goto:"believe"},
        {text:"누가 빌었는지 알 수 있어요?", goto:"who"}
      ]},
      {label:"believe"},
      {say:"t_moon", text:"믿는다기보다… 매년 24일 밤에 저기 불이 켜지는 건 봤어요. 아무도 없는데."},
      {jump:"end"},
      {label:"who"},
      {say:"t_moon", text:"그건 받은 사람만 알 수 있어요. 그것도, 아주 나중에."},
      {jump:"end"},
      {label:"early"},
      {say:"me", text:"저 무늬요. 전설 같은 게 있다면서요?"},
      {say:"t_moon", text:"있죠. 근데 점심시간에 하기엔 좀 긴 얘기예요."},
      {say:"t_moon", text:"시험 끝나면 물어봐요. 그때쯤이면 저 무늬도 비에 씻겨서 잘 보일 거예요."},
      {label:"end"},
      {say:"t_moon", text:"자, 5교시 늦지 말고요. 국어 시간이면 봐주겠지만, 수학은 안 봐줘요.", emote:"laugh"},
      {hide:"t_moon"}
    ]
  },

  "teacher_moon_2": {
    title: "문 선생님 2 - 말하지 못한 문장",
    steps: [
      {sethero:"top"},
      {bg:"classroom1", time:"noon"},
      "점심시간 교실. 문 선생님이 시 프린트를 나눠주다 내 자리 앞에서 멈췄다.",
      {show:"t_moon", pos:"center"},
      {say:"t_moon", text:"{N}, 어제 숙제에서 마지막 줄 비워 놨더라. '말하지 못한 문장' 쓰는 거."},
      {say:"me", text:"…그게, 딱히 떠오르는 게 없어서요."},
      {say:"t_moon", text:"없는 게 아니라 못 쓴 거겠죠. 다들 그래요. 있으니까 못 써요."},
      "선생님이 창가 쪽을 흘끗 봤다. 운동장 너머로 누군가 걸어가는 게 보였다.",
      {say:"t_moon", text:"고등학교 때 나도 그 줄을 못 썼어요. 졸업식 날까지. 그리고 그 사람은 이사를 갔죠."},
      {say:"t_moon", text:"그러니까 그 줄은 숙제가 아니에요. 연습이에요. 언젠가 진짜로 말할 때를 위한."},
      {choice:[
        {text:"…써 볼게요.", stat:{sense:1}, goto:"write"},
        {text:"선생님은 결국 말씀하셨어요?", goto:"ask"}
      ]},
      {label:"write"},
      {say:"t_moon", text:"좋아요. 이름은 안 써도 돼요. 문장만."},
      {text:{when:"lead=='seoha'", then:"빈칸에 볼펜을 댔다. 제일 먼저 서하의 얼굴이 떠올랐다. 펜 끝이 잠깐 멈췄다.", else:{when:"lead=='ina'", then:"빈칸에 볼펜을 댔다. 제일 먼저 이나의 얼굴이 떠올랐다. 펜 끝이 잠깐 멈췄다.", else:"빈칸에 볼펜을 댔다. 제일 먼저 {H}의 얼굴이 떠올랐다. 펜 끝이 잠깐 멈췄다."}}},
      {fx:"heart"},
      {jump:"end"},
      {label:"ask"},
      {say:"t_moon", text:"…아니요. 그래서 이 숙제를 매년 내요. 내 몫까지 누가 말해 주라고.", emote:"sad"},
      {label:"end"},
      {say:"t_moon", text:"자, 프린트 뒤로 넘겨요. 시 외우기는 다음 주까지!"},
      {hide:"t_moon"}
    ]
  },

  "teacher_park_1": {
    title: "박 선생님 1 - 수학과 공정함",
    steps: [
      {bg:"hallway1", time:"noon"},
      "점심시간 복도. 박 선생님이 팔짱을 낀 채 벽에 붙은 시험 시간표를 보고 있었다.",
      {show:"t_park", pos:"center"},
      {say:"t_park", text:"{N}. 지난 쪽지시험, 계산은 맞았는데 풀이가 없더군. 0점 처리했다."},
      {say:"me", text:"네? 답은 맞았는데요…"},
      {say:"t_park", text:"답만 맞는 건 찍은 것과 구분이 안 돼. 나는 과정을 채점한다. 예외 없이."},
      {say:"t_park", text:"태오도 예외 아니야. 걔도 1학년 때 나한테 0점 두 번 받았어."},
      {think:"…전교 1등이 0점을? 그게 더 무섭다."},
      {choice:[
        {text:"다시 풀어서 제출하겠습니다.", stat:{study:1}, goto:"redo"},
        {text:"…너무하신 거 아니에요?", goto:"protest"}
      ]},
      {label:"redo"},
      {say:"t_park", text:"좋아. 오늘 6시까지 교무실. 1분이라도 늦으면 안 받는다."},
      {say:"t_park", text:"…근데 그 문제, 마지막 줄에서 부호 하나 조심해. 이건 힌트가 아니라 잔소리다."},
      {jump:"end"},
      {label:"protest"},
      {say:"t_park", text:"너무하지. 하지만 세상도 너무해. 나는 그걸 연습시키는 사람이고.", emote:"neutral"},
      {say:"t_park", text:"…그래도 다시 내면 받아준다. 6시까지."},
      {label:"end"},
      "박 선생님은 시계를 한 번 보더니 정확히 같은 보폭으로 복도를 걸어갔다.",
      {hide:"t_park"}
    ]
  },

  "teacher_park_2": {
    title: "박 선생님 2 - 학생부의 소문 관리",
    steps: [
      {sethero:"top"},
      {bg:"classroom2", time:"noon"},
      "옆 반 교실 앞. 박 선생님이 손가락을 까딱여 나를 불렀다. 좋은 예감은 아니었다.",
      {show:"t_park", pos:"center"},
      {say:"t_park", text:"{N}. 학생부에 제보가 들어왔다. 네가 여학생이랑 자주 다닌다고."},
      {say:"me", text:"…그게 문제가 되나요?"},
      {say:"t_park", text:"아니. 문제는 제보자가 강민재라는 거다. 걔는 제보라는 걸 오락으로 아나 봐."},
      {say:"t_park", text:"학생부는 소문을 다루지 않아. 사실만 다뤄. 그러니까 하나만 말해 두겠다."},
      {say:"t_park", text:"…성적 떨어지면 그 관계도 내 소관이 된다. 그것만 기억해."},
      {choice:[
        {text:"안 떨어뜨리겠습니다.", stat:{study:1}, goto:"ok"},
        {text:"민재는 어떻게 하실 거예요?", goto:"minjae"}
      ]},
      {label:"ok"},
      {say:"t_park", text:"좋은 대답이다. 대답은 쉬워. 증명은 시험지로 해."},
      {jump:"end"},
      {label:"minjae"},
      {say:"t_park", text:"청소 일주일. 제보의 대가는 공정해야지.", emote:"neutral"},
      "박 선생님 입가가 아주 조금 올라갔다. 처음 보는 표정이었다.",
      {label:"end"},
      {say:"t_park", text:"…{H}인가. 그 학생, 성실하지. 너도 그만큼은 해라."},
      {think:"…학생부는 소문을 안 다룬다면서요."},
      {hide:"t_park"}
    ]
  },

  "teacher_kang_1": {
    title: "강 선생님 1 - 호랑이의 점심",
    steps: [
      {bg:"school_yard", time:"noon"},
      "점심시간 교정. 운동장 쪽에서 호루라기 소리가 세 번 울렸다. 나를 부르는 거였다.",
      {show:"t_kang", pos:"center", anim:"jump"},
      {say:"t_kang", text:"{N}, 밥 먹고 바로 앉아 있으면 위장이 운다. 열 바퀴!", emote:"exclaim"},
      {say:"me", text:"저 방금 급식 먹었는데요…"},
      {say:"t_kang", text:"그러니까 뛰라는 거다. 소화는 다리로 하는 거야!"},
      {choice:[
        {text:"뛴다.", stat:{fitness:2}, goto:"run"},
        {text:"선생님도 같이 뛰시죠.", goto:"together"},
        {text:"배가 아파서요…", goto:"excuse"}
      ]},
      {label:"run"},
      {fx:"shake"},
      "열 바퀴. 다섯 바퀴째부터 급식이 목까지 올라왔다. 여덟 바퀴째엔 내려갔다.",
      {say:"t_kang", text:"봐라, 위장이 자리를 찾았지? 그게 과학이다!", emote:"laugh"},
      {jump:"end"},
      {label:"together"},
      {say:"t_kang", text:"…오, 도발이냐. 좋다. 나는 반대 방향으로 뛴다. 만나면 진 거다!"},
      {fx:"shake"},
      "만나는 데 30초도 안 걸렸다. 선생님은 숨도 안 찼다.",
      {say:"t_kang", text:"내가 왜 호랑이라고 불리는지 알겠지? 하하!", emote:"laugh"},
      {jump:"end"},
      {label:"excuse"},
      {say:"t_kang", text:"배가 아파? …그럼 보건실 가. 진짜 아프면 뛰는 거 아니다.", emote:"neutral"},
      "의외로 순순히 물러섰다. 호랑이도 아픈 사람은 안 무는 모양이었다.",
      {label:"end"},
      {say:"t_kang", text:"오후 수업 잘 듣고. 졸면 내가 창문 밖에서 다 본다!"},
      {hide:"t_kang"}
    ]
  },

  "teacher_kang_2": {
    title: "강 선생님 2 - 호랑이의 연애론",
    steps: [
      {sethero:"top"},
      {bg:"school_gym", time:"noon"},
      "점심시간 체육관. 강 선생님이 혼자 농구공을 튀기고 있었다. 탕, 탕, 탕.",
      {show:"t_kang", pos:"center"},
      {say:"t_kang", text:"{N}. 너 요즘 눈빛이 흐리다. 사랑이냐?"},
      {say:"me", text:"…왜 다들 저한테 그걸 물어보죠."},
      {say:"t_kang", text:"얼굴에 써 있으니까. 체육 선생은 얼굴로 컨디션을 읽는다!"},
      {say:"t_kang", text:"잘 들어. 연애는 계주다. 바통은 네가 먼저 내밀어야 상대가 받아."},
      {say:"t_kang", text:"기다리기만 하면 바통 떨어진다. 떨어지면 실격이야. 알겠나!", emote:"exclaim"},
      "농구공이 내 쪽으로 날아왔다. 얼떨결에 받았다.",
      {say:"t_kang", text:"봐라. 받을 준비가 됐으면 받는다. 그 애도 마찬가지야."},
      {choice:[
        {text:{when:"lead=='seoha'||lead=='ina'", then:"…그 사람이 안 받으면요?", else:"…그 애가 안 받으면요?"}, goto:"miss"},
        {text:"알겠습니다!", aff:{h:1}, goto:"yes"}
      ]},
      {label:"miss"},
      {say:"t_kang", text:"그럼 주우러 가서 다시 내밀어. 계주는 원래 그런 거다. 몇 번이고.", emote:"laugh"},
      {jump:"end"},
      {label:"yes"},
      {say:"t_kang", text:"목소리 좋다. 그 목소리로 그 애한테도 말해라!"},
      {label:"end"},
      "공을 돌려주자 선생님은 골대도 안 보고 슛을 던졌다. 들어갔다. 얄미울 정도로.",
      {hide:"t_kang"}
    ]
  }
});

// ---------------------------------------------------------------
// 5. 장소 범용 (loc_{loc}_generic) — 히로인이 없을 때
// ---------------------------------------------------------------
registerScenes({
  "loc_art_room_generic": {
    title: "미술실 - 아무도 없는 이젤",
    steps: [
      "미술실. 이젤 몇 개가 창 쪽을 보고 서 있었다. 사람은 없었다.",
      "구석 이젤에 스케치가 한 장 걸려 있었다. 벚꽃 아래 교문, 그리고 뒷모습 하나.",
      {think:"…이거, 어디서 본 것 같은데. 누구 뒷모습이지."},
      {show:"seokhwan", pos:"center", anim:"in"},
      {say:"seokhwan", text:"아, {N}! 그거 보지 마. 아니, 내 거 아니고, 그냥, 누가…", emote:"sweat"},
      {say:"seokhwan", text:"…나는 별자리 포스터 말리러 온 거야. 미술부 애들이 안 보이길래."},
      {say:"me", text:"근데 왜 네가 당황해."},
      {say:"seokhwan", text:"그, 그림 주인이 화내면 무서우니까. 조용한 애가 화내면 제일 무섭잖아!"},
      "석환은 포스터를 안고 도망치듯 나갔다. 스케치는 그대로 창을 보고 있었다.",
      {hide:"seokhwan"}
    ]
  },

  "loc_nurse_room_generic": {
    title: "보건실 - 쿨가이의 낮잠",
    steps: [
      "보건실. 소독약 냄새가 났다. 커튼 너머로 규칙적인 숨소리가 들렸다.",
      {show:"jiho", pos:"center"},
      {say:"jiho", text:"…아. 들켰네. 밴드부 밤샘 연습이었어. 선생님한텐 두통이라고 했고."},
      {say:"me", text:"보건 선생님은?"},
      {say:"jiho", text:"회의. 30분 뒤에 온대. 그 안에 자야 돼. …너도 누울래? 침대 두 개야."},
      {choice:[
        {text:"옆 침대에 눕는다.", goto:"lie"},
        {text:"방해하지 않고 나간다.", goto:"leave"}
      ]},
      {label:"lie"},
      "커튼 너머로 지호가 낮게 흥얼거렸다. 축제 곡인 것 같았다.",
      {say:"jiho", text:"…이 부분, 가사가 안 나와. 누가 좋아지면 나오려나."},
      "대답하기 전에 잠들었다. 15분이 15시간 같았다.",
      {jump:"end"},
      {label:"leave"},
      {say:"jiho", text:"…고맙다. 커튼 좀 쳐 줘."},
      {label:"end"},
      {hide:"jiho"},
      "보건실 문을 닫자 복도 소음이 다시 밀려들었다."
    ]
  },

  "loc_school_gym_generic": {
    title: "체육관 - 1대1",
    steps: [
      "체육관. 농구공 소리 하나가 규칙적으로 울렸다. 태오였다.",
      {show:"taeo", pos:"center"},
      {say:"taeo", text:"{N}. 마침 잘 왔다. 1대1 할래? 지는 쪽이 음료수."},
      {say:"me", text:"전교 1등이 농구도 잘하면 반칙 아니냐."},
      {say:"taeo", text:"공부는 잘하는 게 아니라 오래 하는 거야. 농구는… 그냥 잘해.", emote:"laugh"},
      {choice:[
        {text:"붙는다.", stat:{fitness:1}, goto:"play"},
        {text:"구경만 한다.", goto:"watch"}
      ]},
      {label:"play"},
      {fx:"shake"},
      "3점 차로 졌다. 마지막 슛이 림을 세 바퀴 돌고 튕겨 나갔다.",
      {say:"taeo", text:"…아깝네. 다음엔 네가 이길지도. 음료수는 내가 살게. 오늘은."},
      {say:"me", text:"진 쪽이 사는 거 아니었어?"},
      {say:"taeo", text:"이긴 쪽이 기분 좋으면 사도 돼. 규칙은 이긴 쪽이 정하니까."},
      {jump:"end"},
      {label:"watch"},
      "태오는 혼자서도 정확했다. 슛, 리바운드, 슛. 기계 같았다.",
      {say:"taeo", text:"…구경만 하면 재미없잖아. 다음엔 같이 해. 혼자는 좀 지겨워."},
      {label:"end"},
      {hide:"taeo"},
      "체육관을 나올 때, 등 뒤에서 공 소리가 다시 시작됐다."
    ]
  },

  "loc_school_yard_generic": {
    title: "교정 - 정보통과 천문학자",
    steps: [
      "교정 벤치. 민재가 폰을 보다가 나를 발견하고 손을 크게 흔들었다.",
      {show:"minjae", pos:"left"},
      {show:"seokhwan", pos:"right"},
      {say:"minjae", text:"{N}! 너 그 앱 아직 쓰냐? 내가 보낸 거. 잠금화면에 실루엣 나오는 거."},
      {say:"me", text:"…쓰긴 하는데. 왜."},
      {say:"minjae", text:"나도 깔았거든? 근데 내 건 실루엣이 안 나와. 그냥 까만 화면이야.", emote:"sad"},
      {say:"seokhwan", text:"그건 민재가 좋아하는 사람이 없어서 그런 거 아닐까…"},
      {say:"minjae", text:"야! 있거든. 매주 바뀌어서 그렇지.", emote:"angry"},
      {say:"seokhwan", text:"…앱이 계산을 못 하겠네.", emote:"sweat"},
      "석환의 한마디에 민재가 무너졌다. 나는 폰을 주머니 깊이 넣었다.",
      {think:"…민재 건 안 나오고 내 건 나온다. 왜지."},
      {hide:"minjae"},
      {hide:"seokhwan"}
    ]
  },

  "loc_vending_generic": {
    title: "자판기 - 걸린 캔",
    steps: [
      "자판기 앞. 동전을 넣고 버튼을 눌렀다. 덜컹. 그리고 침묵.",
      {fx:"shake"},
      {think:"…걸렸다. 300원짜리 비극."},
      {show:"minjae", pos:"center", anim:"in"},
      {say:"minjae", text:"오, 걸렸어? 내가 이 자판기 전문가야. 왼쪽 아래를 이렇게—"},
      {fx:"shake"},
      "민재가 자판기를 발로 찼다. 캔 두 개가 떨어졌다. 하나는 내 것, 하나는 모르는 것.",
      {say:"minjae", text:"봐봐. 보너스. 이건 내 거."},
      {show:"t_park", pos:"left", anim:"in"},
      {say:"t_park", text:"강민재. 학교 기물을 발로 차는 걸 학생부가 봤다."},
      {say:"minjae", text:"…선생님, 이건 구조 활동이었습니다.", emote:"sweat"},
      {say:"t_park", text:"청소 3일. 구조 활동은 인정한다. 그래서 5일이 아니라 3일이야."},
      {hide:"t_park"},
      {hide:"minjae"},
      "캔은 미지근했다. 민재의 희생을 생각하며 마셨다."
    ]
  },

  "loc_hallway1_generic": {
    title: "복도 - 기타 케이스",
    steps: [
      "1층 복도. 창가에 기타 케이스가 하나 세워져 있었다. 주인은 없었다.",
      {show:"jiho", pos:"center", anim:"in"},
      {say:"jiho", text:"…내 거. 화장실 갔다 왔어. 훔치려고 했냐?"},
      {say:"me", text:"안 훔쳐. 무거워 보이는데."},
      {say:"jiho", text:"무거워. 근데 안 들면 더 무거워. 이상하지."},
      "지호는 케이스를 메고 잠깐 창밖을 봤다. 운동장 끝에서 누군가 뛰고 있었다.",
      {say:"jiho", text:"…하늘이가 그러더라. 너 요즘 눈이 바쁘다고. 좋은 뜻이래."},
      {say:"me", text:"눈이 바쁘다는 게 뭔데."},
      {say:"jiho", text:"누굴 자꾸 찾는다는 뜻이래. 나도 몰라. 걔가 그렇게 말했어.", emote:"laugh"},
      {hide:"jiho"},
      "지호가 사라진 복도에 기타 줄 냄새 같은 게 남았다. 그런 냄새가 있다면."
    ]
  },

  "loc_classroom1_generic": {
    title: "우리 반 교실 - 사흘째 체육복",
    steps: [
      {bg:"classroom1", time:"afternoon"},
      "방과 후의 우리 반. 의자가 전부 책상 위로 올라가 있었다. 청소 당번이 벌써 다녀간 모양이었다.",
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"오, {N}. 두고 간 거 있냐? 나는 있어. 내 체육복. 사흘째."},
      {say:"me", text:"사흘이면 체육복이 널 두고 간 거 아니야?"},
      {say:"minjae", text:"…맞는 말이라 더 싫다.", emote:"sweat"},
      {hide:"minjae"},
      "칠판 구석에 누가 적어 둔 내일 준비물이 반듯했다. 반장 글씨였다."
    ]
  },

  "loc_classroom2_generic": {
    title: "옆 반 교실 - 1등의 뒷자리",
    steps: [
      "방과 후의 빈 옆 반 교실. 창가 맨 뒤 자리에 우리 반 태오가 혼자 앉아 있었다. 책은 덮여 있었다.",
      {show:"taeo", pos:"center"},
      {say:"taeo", text:"…아. {N}. 여긴 왜."},
      {say:"me", text:"그냥. 너야말로 왜 책 덮고 있어."},
      {say:"taeo", text:"1등도 가끔 쉬어. 쉬는 걸 들키기 싫을 뿐이지."},
      "태오는 창밖을 봤다. 운동장에서 육상부가 트랙을 돌고 있었다.",
      {say:"taeo", text:"…서윤이랑 나, 여섯 살 때부터 알았어. 걔는 뛰고 나는 봤지. 늘."},
      {say:"taeo", text:"보는 게 익숙해지면 말하는 걸 잊어. 너는… 잊지 마."},
      {think:"…태오가 나한테 이런 말을 한다고?"},
      {say:"taeo", text:"…뭘 봐. 이 얘기 민재한테 하면 죽는다.", emote:"angry"},
      {hide:"taeo"},
      "책상 위 덮인 책 밑으로 트랙 사진 한 장이 살짝 삐져나와 있었다."
    ]
  },

  "loc_road_home_generic": {
    title: "하굣길 - 혼자 걷는 길",
    steps: [
      "혼자 걷는 하굣길. 앞뒤로 아무도 없었다. 발소리가 유난히 컸다.",
      {if:"season=='winter' && day<=24", goto:"winter"},
      "가로수 그림자가 길게 늘어졌다. 폰이 울렸다. 그 앱이었다.",
      {msg:{from:"app", text:{
        seoyoon:"야. 오늘 혼자 걷네. 내일은 안 그럴 거야. 그 애가 먼저 올 거니까 ㅋㅋ",
        daeun:"…오늘은 혼자 걷네. 저기, 내일은… 그 애가 먼저 말 걸 거야. 아마.",
        haneul:"오늘은 혼자 걸었네. 괜찮아. 내일은 그 애가 옆에 있을 거야 ^^",
        yuri:"혼자 걷지 마~!! 내일은 그 애가 먼저 달려올 거야!! 헤헤!!", seoha:"□ 오늘은 혼자 걸었네. □ 내일은 그 사람이 캔커피를 두 개 살 거야. (확인)", ina:"혼자 걸었네. 내일은 그 사람이 먼저 '다녀왔어' 할지도 몰라. 다녀올게."
      }}},
      {think:"…내일 일을 어떻게 알아. 그리고 이 앱이 말하는 건, 대체 누구야."},
      {jump:"end"},
      {label:"winter"},
      {fx:"snow"},
      "눈이 얇게 쌓인 길. 발자국은 내 것뿐이었다. 폰이 울렸다.",
      {msg:{from:"app", text:{
        seoyoon:"야. 12월 24일. 비워 둬. 그 애도 그날 아무 약속 안 잡을 거야.",
        daeun:"…12월 24일. 저기, 그날은… 비워 둬. 그 애도 그날을 기다리고 있으니까.",
        haneul:"12월 24일, 비워 둘래? 괜찮아. 그 애도 그날 아무 데도 안 갈 거야 ^^",
        yuri:"12월 24일!! 절대 약속 잡지 마~!! 그 애도 그날 기다리고 있단 말이야!!", seoha:"□ 12월 24일, 비워 둘 것. □ 그 사람도 그날 아무 약속 안 잡아. (확인)", ina:"안내 말씀 드립니다. 12월 24일은 비워 둬. 그 사람도 그날 비행을 안 잡을 거야."
      }}},
      {think:"…24일. 이 앱도, 사람들도, 왜 다들 그날을."},
      {label:"end"},
      "잠금화면의 실루엣이 오늘따라 조금 더 또렷해 보였다. 착각이길 바라면서 걸었다."
    ]
  },

  "loc_playground_generic": {
    title: "놀이터 - 곤충 연구원",
    steps: [
      "동네 놀이터. 그네 옆 화단에 누군가 쭈그리고 앉아 있었다. 손에 잠자리채.",
      {show:"dahoon", pos:"center", anim:"in"},
      {say:"dahoon", text:"쉿! …아, 학생. 미안. 여기 희귀한 애가 있어서. 가만히, 가만히."},
      "잠자리채를 든 남자가 숨을 멈췄다. 나도 따라 멈췄다. 뭔지도 모르면서.",
      {say:"dahoon", text:"…놓쳤다. 괜찮아, 다음 주면 또 나와. 나는 곤충생태관 정다훈. 다은이 오빠야."},
      {say:"me", text:"아, 다은이 오빠요?"},
      {say:"dahoon", text:"그래. 걔가 요즘 스케치북에 자꾸 남자애 그리길래 누군가 했더니… 너냐?"},
      {choice:[
        {text:"…글쎄요.", goto:"maybe"},
        {text:"저 아닐 거예요.", goto:"deny"}
      ]},
      {label:"maybe"},
      {say:"dahoon", text:"그 표정, 곤충으로 치면 '보호색'이야. 숨는 중이라는 뜻이지.", emote:"laugh"},
      {jump:"end"},
      {label:"deny"},
      {say:"dahoon", text:"그래? 그럼 잘됐네. 걔 그림 실력이 갑자기 늘어서 걱정했거든.", emote:"neutral"},
      {label:"end"},
      {say:"dahoon", text:"생태관 놀러 와. 나비관, 요즘 어둡게 해 놨어. 둘이 오면 더 좋고."},
      {hide:"dahoon"},
      "다훈 씨는 잠자리채를 어깨에 걸고 휘파람을 불며 갔다. 다은이랑은 하나도 안 닮았다."
    ]
  },

  "loc_cafe_out_generic": {
    title: "카페 Forin - 도윤의 옛사랑",
    steps: [
      {text:{when:"flag.alba_open", then:"카페 Forin 앞. 도윤 씨가 간판 아래서 담배 대신 커피를 마시고 있었다.", else:"카페 Forin 앞. 사장님으로 보이는 아저씨가 간판 아래서 커피를 마시고 있었다."}},
      {show:"doyoon", pos:"center"},
      {say:"doyoon", text:{when:"flag.alba_open", then:"어, {N}. 하늘이는 오늘 학교 일로 늦어. 들어와서 기다릴래?", else:"구경 왔어? 문 열려 있어. 들어와서 한 잔 하고 가."}},
      {if:"day<10", goto:"early"},
      {say:"me", text:"괜찮아요. …근데 사장님, 저번에 하신 마법진 얘기요."},
      {say:"doyoon", text:"아, 그거. 문 선생은 뭐래? 1년 전 어쩌고 하지?"},
      {say:"me", text:"네. 옛사랑이 아니라 1년 전의 그 사람이라고요."},
      {say:"doyoon", text:"…문 선생은 늘 정확해. 나는 낭만파고. 근데 내 버전엔 뒷얘기가 있어."},
      {say:"doyoon", text:"나 그날 밤 빌었어. 좋아하는 애한테 닿으라고. 근데 그 애, 다음 날 나한테 오더라."},
      {say:"doyoon", text:"'너 혹시 나한테 할 말 있어?' 하고. 나는 없다고 했어. 무서워서."},
      {say:"me", text:"…그게 늦었다는 거예요?"},
      {say:"doyoon", text:"응. 소원은 닿았는데 내가 안 받았어. 닿는 거랑 잡는 건 다르더라."},
      "도윤 씨가 커피잔을 돌렸다. 잔 바닥에 남은 동그란 자국이 마법진처럼 보였다.",
      {say:"doyoon", text:"…하늘이한테는 이 얘기 하지 마. 삼촌 체면이 있지.", emote:"laugh"},
      {hide:"doyoon"},
      "닿는 것과 잡는 것. 카페 종소리가 등 뒤에서 한 번 울렸다.",
      {jump:"fin"},
      {label:"early"},
      {say:"me", text:"괜찮아요. 그냥 지나가던 길이라서요."},
      {say:"doyoon", text:"지나가다 카페 앞에서 멈추는 애들은 대개 누굴 기다리던데. 다음엔 들어와.", emote:"laugh"},
      {label:"fin"}
    ]
  },

  "loc_cvs_generic": {
    title: "편의점 앞 - 휴식 중인 알바",
    steps: [
      "편의점 앞 파라솔 테이블. 나래 씨가 유니폼 조끼를 입은 채 컵라면을 먹고 있었다.",
      {show:"narae", pos:"center"},
      {say:"narae", text:"어? 낮에 보니까 더 학생 같네. 밥 안 먹었으면 하나 사 와요. 같이 먹게."},
      {say:"narae", text:"점장님이 '10분' 하고 손가락으로 딱 보여줬어요. 9분 남았어요.", emote:"laugh"},
      {say:"narae", text:"낮 손님은 다 어른들이라 재미없어요. 밤엔 학생들이 와서 사랑 얘기 하고 가는데."},
      {say:"me", text:"…그게 재미있어요?"},
      {say:"narae", text:"세상에서 제일 재밌죠. 남의 사랑은 결말을 미리 알 것 같거든요. 내 건 모르는데."},
      "나래 씨가 남은 국물을 한 번에 마셨다. 점장님이 유리문 안에서 손가락 하나를 들었다.",
      {say:"narae", text:"1분 남았대요. 가야겠다. 밤에 와요. 상담은 밤에만 하거든요."},
      {hide:"narae"}
    ]
  },

  "loc_town_entrance_generic": {
    title: "주택가 입구 - 관장님의 조깅",
    steps: [
      "주택가 입구. 저 멀리서 규칙적인 발소리가 다가왔다. 육상부치곤 무거웠다.",
      {show:"gymowner", pos:"center", anim:"in"},
      {say:"gymowner", text:"허, 허… 학생, 잠깐 스톱! 나 저기 체육관 관장, 마강수야."},
      {say:"gymowner", text:"내가 서윤이 코치거든. 요즘 걔 기록이 들쭉날쭉해. 학교에서 무슨 일 있냐?"},
      {choice:[
        {text:"잘 모르겠는데요.", goto:"dunno"},
        {text:"…제가 물어볼까요?", goto:"ask"}
      ]},
      {label:"dunno"},
      {say:"gymowner", text:"모르겠다고? 하, 그 얼굴은 아는 얼굴인데. 뭐, 됐다."},
      {jump:"end"},
      {label:"ask"},
      {say:"gymowner", text:"오, 네가? 좋아. 근데 살살 물어봐. 걔 성격 알지? 물으면 더 뛰어.", emote:"laugh"},
      {label:"end"},
      {say:"gymowner", text:"체육관 놀러 와라. 학생은 반값. 볼링도 있어. …자, 나는 열 바퀴 더!"},
      {hide:"gymowner"},
      "관장님은 다시 뛰어갔다. 골목이 잠깐 체육관 냄새로 가득 찼다."
    ]
  }
});

// ---------------------------------------------------------------
// 6. 가족 / 취침
// ---------------------------------------------------------------
registerScenes({
  "home_morning_weekend": {
    title: "주말 아침 - 집",
    steps: [
      {bg:"town_entrance", time:"morning"},
      "주말 아침. 알람도 없이 눈을 떴는데, 평일보다 이른 시간이었다.",
      {show:"mom", pos:"left"},
      {show:"dad", pos:"right"},
      {say:"mom", text:"어머, 주말인데 일찍 일어났네? 어디 가? 누구 만나?"},
      {say:"dad", text:"…여보, 아침부터 취조하지 마."},
      {say:"mom", text:"취조 아니야. 관심이야. 당신은 관심이 없어서 그래."},
      {say:"dad", text:"…{N}. 나갈 거면 너무 늦지는 말고."},
      "아빠는 신문 뒤로 숨었고, 엄마는 찬장에서 도시락 통을 꺼냈다. 두 개였다.",
      {say:"mom", text:"혹시 몰라서. 하나는 네 거, 하나는… 아무나."},
      {think:"…엄마 눈치는 앱보다 빠르다."},
      {hide:"mom"},
      {hide:"dad"}
    ]
  },

  "sleep_flavor_1": {
    title: "취침 1",
    steps: [
      "이불을 끌어올렸다. 폰 화면의 실루엣이 어둠 속에서 잠깐 이쪽을 본 것 같았다."
    ]
  },
  "sleep_flavor_2": {
    title: "취침 2",
    steps: [
      "창밖에서 누군가의 발소리가 멀어졌다. 오늘 있었던 일을 하나씩 세다가 잠들었다."
    ]
  },
  "sleep_flavor_3": {
    title: "취침 3",
    steps: [
      "눈을 감기 직전, 오늘 들은 웃음소리 하나가 귓가에 남아 있었다. 누구 것인지는 알 것 같았다."
    ]
  }
});
