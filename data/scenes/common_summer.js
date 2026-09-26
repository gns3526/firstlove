// 여름 공용 고정 이벤트 (common_summer.js)
// day8~day14, 밤의 학교 1(N.선생님), 방학식, 노멀 여름여행, 밤 메시지, 범용 아침/정오, 집 밤.
registerScenes({

  // ───────────────────────────────────────────────
  // 6월 1일 (월) 아침 - 장마, 우산
  // ───────────────────────────────────────────────
  "day8_morning": {
    title: "6월 1일 아침 - 장마, 우산 하나",
    steps: [
      {sethero:"top"},
      {title:"제2장 여름", sub:"장마"},
      {bg:"road_to_school", weather:"rain"},
      {fx:"rain"},
      "6월 1일. 장마가 시작됐다. 하늘은 아침부터 회색이었다.",
      "현관에서 엄마가 우산을 손에 쥐여줬다. \"오늘 종일 온대. 잃어버리지 마.\"",
      "우산 위로 떨어지는 빗소리가 생각보다 컸다. 운동화 코가 벌써 젖었다.",
      {bg:"classroom1", weather:"rain"},
      "교실 창문에 물줄기가 흘러내렸다. 형광등을 켜도 어딘가 어두웠다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"야, {N}! 너 우산 있냐? 나 없거든. 집에 갈 때 좀 빌려 줘."},
      {say:"me", text:"넌 어떻게 왔는데."},
      {say:"minjae", text:"석환이한테 우산 얻어 쓰고 왔지. 근데 그게 AKI 응원 우산이야.", emote:"sweat"},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"한정판이거든! 빗소리 들릴 때마다 노래가 떠오르는 구조야.", emote:"exclaim"},
      {say:"minjae", text:"그러니까 싫다는 거야! 형광 핑크라고!"},
      {hide:"seokhwan"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"시끄러. 비 오는 날은 조용히 좀 살자.", emote:"neutral"},
      {say:"jiho", text:"…아, 근데 습기 때문에 기타 줄이 늘어져. 그건 짜증나."},
      {hide:"jiho"},
      {hide:"minjae"},
      {show:"t_moon", pos:"center", anim:"in"},
      {say:"t_moon", text:"자, 조용. 오늘부터 장마래요. 우산 없는 사람, 손 한번 들어 봐요."},
      "손이 여기저기 올라갔다. 민재는 두 손을 다 들었다.",
      {say:"t_moon", text:"1교시 체육은 체육관에서 해요. 강 선생님 기다리시니까 늦지 말고, 미끄러우니까 뛰지는 말고."},
      {say:"t_moon", text:"비 오는 날은 괜히 마음까지 젖으니까. 우산 좀 나눠 쓰고."},
      {hide:"t_moon"},
      {bg:"school_entrance", weather:"rain"},
      {fx:"rain"},
      "건물 입구 처마 끝에서 물이 실처럼 떨어졌다. 체육관까지는 운동장을 가로질러야 했다.",
      "다들 우산을 펴고 하나둘 빗속으로 사라졌다. 한 사람만 빼고.",
      {show:"$h", pos:"center"},
      "{H}가 처마 밑에 서 있었다. 우산도 없이, 하늘만 올려다보면서.",
      {say:"$h", text:{
        seoyoon:"야, 뭘 봐. 우산 없어서 그래.",
        daeun:"…저기. 집에서 일찍 나왔거든. 그땐 비가 안 왔는데.",
        haneul:"아, {N}. 먼저 가. 난 괜찮아. 좀 있으면 그칠 거야.",
        yuri:"{N}! 나 우산 버스에 두고 내렸어. 헤헤… 웃을 일은 아니지."
      }},
      "빗줄기는 그칠 기미가 없었다. 내 손엔 엄마가 쥐여준 우산이 있었다.",
      {choice:[
        {text:"같이 쓰자.", aff:{h:3}, goto:"share"},
        {text:"이거 써. 난 뛰어갈게.", aff:{h:2}, goto:"give"}
      ]},
      {label:"give"},
      {say:"$h", text:{
        seoyoon:"야, 됐어. 그럼 네가 젖잖아. …같이 써.",
        daeun:"…안 돼. 그럼 {N}이 젖어. …같이, 쓰면 되잖아.",
        haneul:"그건 안 돼. 그러면 내가 안 괜찮아. …같이 쓰자.",
        yuri:"싫어! 그럼 {N}이 물에 빠진 생쥐 되잖아. 같이 쓰자!"
      }, emote:"blush"},
      {fx:"heart"},
      {label:"share"},
      "우산을 폈다. 둘이 들어가기엔 조금 작았다. 어깨가 닿을락 말락.",
      {bg:"school_yard", weather:"rain"},
      {fx:"rain"},
      "빗소리가 우산 천 위에서 둥글게 울렸다. 그 안쪽만 이상하게 조용했다.",
      "발을 맞춰 걸었다. 물웅덩이를 피할 때마다 팔꿈치가 스쳤다.",
      {say:"$h", text:{
        seoyoon:"너 우산 진짜 못 든다. 네 쪽 다 젖잖아.",
        daeun:"…{N}. 우산, 너무 내 쪽으로 기울였어. 어깨 젖어.",
        haneul:"{N}, 어깨 젖고 있어. 좀 더 이쪽으로 와. 괜찮으니까.",
        yuri:"{N}, 어깨 다 젖었잖아! 더 붙어~ 안 잡아먹어."
      }},
      {choice:[
        {text:"우산을 더 기울여 준다.", aff:{h:3}, goto:"tilt"},
        {text:"보폭을 맞춰 천천히 걷는다.", aff:{h:2}, goto:"slow"},
        {text:"셋 세면 뛰자!", aff:{h:1}, goto:"run"}
      ]},
      {label:"tilt"},
      "우산을 슬쩍 기울였다. 오른쪽 어깨에 빗방울이 닿았다. 차가웠다.",
      "대신 옆 사람은 머리카락 한 올 젖지 않았다.",
      {say:"$h", text:{
        seoyoon:"…바보냐. 누가 이렇게까지 하래.",
        daeun:"…바보. 감기 걸리면 어떡해.",
        haneul:"…정말, 왜 그렇게까지 해. …고마워.",
        yuri:"으아… 뭐야, 완전 젠틀맨이잖아."
      }, emote:"blush"},
      {fx:"hearts"},
      {jump:"gym"},
      {label:"slow"},
      "걸음을 늦췄다. 옆의 걸음도 따라 느려졌다. 우산 하나의 속도로 둘이 걸었다.",
      "체육관이 가까워지는 게 조금 아쉬웠다.",
      {say:"$h", text:{
        seoyoon:"…야. 왜 이렇게 천천히 가.\n…아니, 됐어. 이대로 가.",
        daeun:"…천천히 가는 거, 나쁘지 않네.",
        haneul:"이러다 늦겠다. 근데… 괜찮아. 조금은.",
        yuri:"헤헤, 이러다 지각하겠다. 근데… 좀 더 걷고 싶어~"
      }, emote:"blush"},
      {fx:"heart"},
      {jump:"gym"},
      {label:"run"},
      {say:"me", text:"하나, 둘, 셋!"},
      {fx:"shake"},
      "달렸다. 우산이 뒤집힐 뻔했고, 물웅덩이를 정통으로 밟았다.",
      {say:"$h", text:{
        seoyoon:"큭… 야, 물웅덩이를 그대로 밟냐? 양말 다 젖었겠다.",
        daeun:"…푸흡. {N}, 양말… 다 젖었어.",
        haneul:"아하하! {N}, 양말이… 미안, 웃으면 안 되는데.",
        yuri:"꺄하하! 양말 다 젖었어! 나도 젖었고!"
      }, emote:"laugh"},
      "웃음소리가 빗소리보다 컸다. 젖은 양말이 하나도 안 억울했다.",
      {fx:"heart"},
      {label:"gym"},
      {bg:"school_gym"},
      "체육관. 우산을 접자 빗소리가 멀어지고, 나무 바닥 냄새가 올라왔다.",
      {say:"$h", text:{
        seoyoon:"…고맙다. 우산.",
        daeun:"…우산, 고마워.",
        haneul:"우산, 고마워. 이 신세는 꼭 갚을게.",
        yuri:"우산 고마워~ 내일은 내가 씌워 줄게!"
      }},
      {hide:"$h"},
      {show:"t_kang", pos:"center", anim:"in"},
      {say:"t_kang", text:"거기 둘! 늦었다! 비 온다고 마음까지 느슨해졌나!", emote:"angry"},
      {say:"t_kang", text:"운동장 못 쓰니까 오늘은 실내 서킷이다! 열 바퀴!"},
      {hide:"t_kang"},
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"(속삭임) 야, 너네 둘이 같이 들어왔냐? 우산 하나로?", emote:"laugh"},
      {say:"minjae", text:"장마 만세. 이 비가 영원히 안 그쳤으면 좋겠다."},
      {hide:"minjae"},
      "젖은 어깨는 좀처럼 마르지 않았다. 마르는 내내, 우산 속 좁은 틈이 자꾸 떠올랐다."
    ]
  },

  // ───────────────────────────────────────────────
  // 6월 9일 (화) 정오 - 수영 수업 공지
  // ───────────────────────────────────────────────
  "day9_noon": {
    title: "6월 9일 정오 - 수영 수업 공지",
    steps: [
      {sethero:"top"},
      {bg:"classroom1"},
      "점심시간 직전. 비는 잠깐 그쳤고, 교실은 찜통이었다.",
      "선풍기 두 대가 고개를 저으며 돌았다. 다들 책받침으로 부채질을 하고 있었다.",
      {show:"t_kang", pos:"center", anim:"in"},
      {say:"t_kang", text:"주목! 밥 먹기 전에 공지 하나!", emote:"exclaim"},
      {say:"t_kang", text:"다음 주부터 체육은 수영이다! 시립 수영장 빌렸다!"},
      "교실이 반으로 갈라졌다. 반은 환호했고, 반은 비명을 질렀다.",
      {say:"t_kang", text:"수영복, 수모, 물안경 챙겨라. 수영 못 하는 놈은 내가 직접 가르친다. 각오해라."},
      {say:"t_kang", text:"주말에도 학생증 보여주면 반값이다. 미리 연습해 둬라."},
      {hide:"t_kang"},
      {unlock:{spot:"pool"}},
      "지도에 새 장소가 하나 추가된 기분이었다. 수영장.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"수영이라니… 여름, 수영장, 매점 핫도그…", emote:"heart"},
      {say:"me", text:"목적이 수영이 아닌 것 같은데."},
      {say:"minjae", text:"아니 난 순수하게 물놀이가 좋은 거야. 핫도그는 덤이고."},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"…나 수영 못 하는데. 물에 뜨질 않아. 밀도 문제인가.", emote:"sad"},
      {say:"minjae", text:"넌 천문동아리니까 우주에서 뜨면 되잖아."},
      {say:"seokhwan", text:"우주엔 물이 없거든! 그리고 그날은 AKI 팬미팅 추첨일이라고.", emote:"exclaim"},
      {hide:"seokhwan"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"난 수영 좀 해. 초등학교 때 선수반이었거든.", emote:"neutral"},
      {say:"minjae", text:"넌 왜 뭐든 다 해? 기타도 치고 수영도 하고. 얼굴도 되고."},
      {say:"jiho", text:"…얼굴은 네가 왜 신경 써."},
      {hide:"jiho"},
      {show:"taeo", pos:"right"},
      {say:"taeo", text:"수영 수업이면 평가 기준이 있겠지. 자유형 50미터 기록일 거야."},
      {say:"minjae", text:"태오야. 제발. 물에서까지 1등 하려고 하지 마."},
      {say:"taeo", text:"안 할 이유가 없잖아.", emote:"laugh"},
      {hide:"taeo"},
      {hide:"minjae"},
      "그때, 옆에서 누가 나를 불렀다.",
      {show:"$h", pos:"center"},
      {say:"$h", text:{
        seoyoon:"야. 너 수영할 줄 알아?",
        daeun:"…저기, {N}. 수영… 할 줄 알아?",
        haneul:"{N}은 수영할 줄 알아?",
        yuri:"{N}~ 수영할 줄 알아? 난 완전 잘해!"
      }},
      {choice:[
        {text:"조금. 너는?", aff:{h:2}, goto:"ask"},
        {text:"잘하지. 가르쳐줄까?", aff:{h:2}, goto:"teach"},
        {text:"못 해. 사실 물 무서워.", aff:{h:3}, goto:"scared"}
      ]},
      {label:"ask"},
      {say:"$h", text:{
        seoyoon:"나? 잘하지. …근데 물에선 트랙보다 느려. 그게 싫어.",
        daeun:"…나는, 그냥. 안경 때문에… 물속에선 아무것도 안 보여서.",
        haneul:"어렸을 때 삼촌이 가르쳐줬어. 근데 오래돼서.",
        yuri:"나야 당연하지~ 바다에서 자란 여자거든! …는 아니지만."
      }},
      {text:{
        seoyoon:"물에서까지 1등이어야 직성이 풀리는 애였다. 그게 좀 귀여웠다.",
        daeun:"안 보여서. 안경 너머의 눈을 아직 제대로 본 적이 없다는 걸 깨달았다.",
        haneul:"삼촌. 그 말이 나올 때마다 하늘의 목소리가 아주 조금 낮아진다.",
        yuri:"텐션이 반 박자 꺾였다. 바다, 라는 단어 뒤에 누군가가 있는 것 같았다."
      }},
      {jump:"end"},
      {label:"teach"},
      {say:"$h", text:{
        seoyoon:"큭. 누가 누굴 가르쳐. 시합해서 내가 이기면, 네가 배우는 거다.",
        daeun:"…가르쳐준다고? …그럼, 손 놓으면 안 돼.",
        haneul:"정말? 그럼 부탁할까. 대신 놀리면 안 돼.",
        yuri:"오~ 자신감! 좋아, 주말에 수영장 가자. 약속이야!"
      }, emote:"blush"},
      {fx:"heart"},
      {jump:"end"},
      {label:"scared"},
      {say:"$h", text:{
        seoyoon:"…뭐야. 의외네. 야, 그럼 내가 잡아줄게. 물속에서.",
        daeun:"…나도 무서워. 안경 벗으면 온 세상이 물 같아서.",
        haneul:"괜찮아. 무섭다고 말하는 것도 용기야.",
        yuri:"헤헤, 그럼 내가 지켜 줄게! 유리 구조대 출동~"
      }},
      {text:{
        seoyoon:"잡아줄게, 라는 말이 물보다 먼저 몸을 감쌌다.",
        daeun:"온 세상이 물 같다는 말. 그 세상에서 손을 잡아주고 싶어졌다.",
        haneul:"괜찮아, 라는 말이 오늘은 유난히 따뜻하게 들렸다.",
        yuri:"구조대라니. 웃음이 나기도 전에, 심장이 먼저 웃었다."
      }},
      {fx:"heart"},
      {label:"end"},
      {hide:"$h"},
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"야! 방금 둘이 무슨 얘기 했어? 수영? 나도 껴 줘.", emote:"exclaim"},
      {say:"me", text:"안 껴줘."},
      {say:"minjae", text:"매정한 놈. 내가 링크 안 보냈으면 넌 지금도 혼자였어."},
      "그 말은 사실이었다. 그래서 더 얄미웠다.",
      {hide:"minjae"},
      "밥 먹으러 가자는 민재의 팔에 끌려 나갔다. 창밖에 다시 빗방울이 듣기 시작했다."
    ]
  },

  // ───────────────────────────────────────────────
  // 6월 17일 (수) 정오 - 시험, 태오 1등, 문 선생님의 전설
  // ───────────────────────────────────────────────
  "day10_noon": {
    title: "6월 17일 정오 - 시험, 그리고 전설",
    steps: [
      {bg:"classroom1"},
      "시험 주간. 교실은 조용했고, 연필 소리만 사각거렸다.",
      "마지막 과목은 수학, 감독은 박세훈 선생님이었다.",
      {show:"t_park", pos:"center", anim:"in"},
      {say:"t_park", text:"시험지 뒤집지 말고. 책상 위엔 필기구만. 50분.", emote:"neutral"},
      {say:"t_park", text:"부정행위는 0점. 눈이 옆으로 가면 나는 그걸 다 본다."},
      "박 선생님은 정말로 다 보는 것 같았다. 교실을 한 바퀴 돌 때마다 등이 서늘했다.",
      {say:"t_park", text:"시작."},
      {hide:"t_park"},
      "시험지를 펼쳤다. 첫 문제부터 낯익다… 낯설다… 정하는 데 1분이 걸렸다.",
      {if:"stat.study>=40", goto:"good_exam", else:"bad_exam"},
      {label:"good_exam"},
      "다행히 손이 먼저 움직였다. 공부한 게 헛되진 않았다.",
      {think:"…이건 어제 풀어본 유형이다. 좋아."},
      {jump:"after_exam"},
      {label:"bad_exam"},
      "3번부터 손이 멈췄다. 창밖 빗소리가 시험지보다 크게 들렸다.",
      {think:"…찍자. 4번은 정답 확률이 높다고 민재가 그랬어."},
      {label:"after_exam"},
      {show:"t_park", pos:"center"},
      {say:"t_park", text:"그만. 펜 내려. 뒤에서부터 걷는다."},
      {say:"t_park", text:"…{N}. 전학 와서 첫 시험이지. 결과는 결과대로 받아. 그게 공정한 거다."},
      {hide:"t_park"},
      {bg:"hallway1"},
      "점심시간. 복도로 나오자마자 민재가 벽에 기대 주르륵 미끄러졌다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"끝났다… 내 여름도 끝났다… 4번 찍었는데 답이 다 2번이었어.", emote:"sad"},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"별자리 시험이었으면 내가 전교 1등인데. 왜 수학이야.", emote:"sad"},
      {say:"minjae", text:"그런 시험은 없어, 석환아."},
      {hide:"seokhwan"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"난 20분 자고, 남은 시간에 풀었어. 잠이 제일 중요해.", emote:"neutral"},
      {say:"minjae", text:"그러고도 평균은 넘잖아 넌! 왜!"},
      {hide:"jiho"},
      "그때 복도 저쪽에서 술렁임이 일었다. 여학생들이 게시판 앞에 몰려 있었다.",
      {hide:"minjae"},
      {show:"taeo", pos:"center", anim:"in"},
      {say:"taeo", text:"…아, 가채점 순위 나왔나 보네."},
      "게시판 맨 위에 태오의 이름이 있었다. 전 과목 만점에 가까운 점수였다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"태오야. 넌 도대체 언제 공부해? 어제도 농구 했잖아.", emote:"surprise"},
      {say:"taeo", text:"수업 시간에 다 하지. 집에선 안 해.", emote:"laugh"},
      {say:"minjae", text:"세상은 불공평해. 얼굴도 주고 머리도 주고. 난 뭘 받았지."},
      {say:"taeo", text:"넌 목소리 크잖아. …농담이야. {N}, 넌 어땠어?"},
      {choice:[
        {text:"그럭저럭.", goto:"soso"},
        {text:"솔직히 망했어.", goto:"fail"},
        {text:"너 어떻게 그렇게 잘하냐?", goto:"how"}
      ]},
      {label:"soso"},
      {say:"taeo", text:"그럭저럭이면 됐어. 전학 와서 보는 첫 시험은 원래 그래."},
      {jump:"moon"},
      {label:"fail"},
      {say:"taeo", text:"다음엔 같이 하자. 난 가르치는 것도 좋아하거든."},
      {say:"minjae", text:"야 나도! 나도 껴줘!"},
      {say:"taeo", text:"넌 안 돼. 30분마다 간식 얘기 하잖아."},
      {jump:"moon"},
      {label:"how"},
      {say:"taeo", text:"…글쎄. 잘하고 싶은 이유가 있으면 되던데."},
      "태오가 잠깐 창밖을 봤다. 운동장 트랙 쪽. 누군가를 찾는 눈이었다.",
      {say:"taeo", text:"아무튼. 비결은 없어. 미안."},
      {label:"moon"},
      {hide:"taeo"},
      {hide:"minjae"},
      {bg:"hallway2"},
      "시험지 봉투를 교무실에 갖다 놓는 심부름을 맡았다. 2층 복도 끝에서 문 선생님을 만났다.",
      {show:"t_moon", pos:"center", anim:"in"},
      {say:"t_moon", text:"{N}, 수고했어요. 시험 끝난 얼굴이네."},
      {say:"t_moon", text:"…아, 그 봉투는 이리 줘요. 내가 갖다 놓을게."},
      "창밖으로 학교 뒤 야외공연장이 보였다. 비에 씻긴 바닥 문양이 희미하게 드러나 있었다.",
      {say:"me", text:"선생님. 체육대회 때 말씀하신 거요. 저 무늬 전설, 선생님 버전이요."},
      {say:"t_moon", text:"어머, 기억하고 있었어요? 저 무늬… 내가 학생 때부터 있던 거예요."},
      {say:"t_moon", text:"내 버전은 이래요. 12월 24일 밤, 그 자리에서 진심으로 빈 소원은…"},
      {say:"t_moon", text:"…1년 전의 그 사람에게 닿는다고."},
      {think:"1년 전의… 그 사람? 도윤 씨가 말한 거랑 조금 다른데."},
      {say:"me", text:"1년 '전'이요? 미래가 아니라요?"},
      {say:"t_moon", text:"응. 소원은 앞으로 가지 않아요. 뒤로 가요. 아직 늦지 않았던 때로."},
      {say:"t_moon", text:"그래서 받는 쪽은 몰라요. 그게 소원인지, 우연인지."},
      "받는 쪽. 주머니 속 폰이 괜히 무겁게 느껴졌다.",
      {choice:[
        {text:"선생님도 빌어본 적 있어요?", goto:"asked"},
        {text:"…믿으세요, 그거?", goto:"believe"}
      ]},
      {label:"asked"},
      {say:"t_moon", text:"…글쎄요. 그건 비밀. 선생님도 비밀 하나쯤은 있어야죠."},
      {say:"t_moon", text:"다만, 빌 거면 진심이어야 해요. 그 애… 아니, 그 사람한테."},
      {jump:"moon_end"},
      {label:"believe"},
      {say:"t_moon", text:"믿는 게 아니라, 알아요. 닿은 걸 본 적이 있거든."},
      {say:"t_moon", text:"…농담이에요. 국어 선생이 하는 말은 반은 이야기야."},
      {label:"moon_end"},
      {say:"t_moon", text:"자, 가서 밥 먹어요. 시험 끝났으니까 오늘은 실컷 놀아도 돼."},
      {hide:"t_moon"},
      "계단을 내려오는 동안 폰 잠금화면의 실루엣이 자꾸 떠올랐다.",
      "1년 전의 그 사람. 그 말이 빗소리처럼 귓가에 오래 남았다."
    ]
  },

  // ───────────────────────────────────────────────
  // 6월 25일 (목) 밤 - 밤의 학교 1 (N.선생님)
  // ───────────────────────────────────────────────
  "day11_night": {
    title: "6월 25일 밤 - 밤의 학교 1",
    steps: [
      {sethero:"top"},
      {bg:"town_entrance", time:"night"},
      "6월 25일 밤. 낮 동안 내리던 비가 그치고, 젖은 아스팔트 냄새가 창으로 들어왔다.",
      "자정. 폰이 짧게 진동했다.",
      {msg:{from:"app", text:{
        seoyoon:"야. 오늘 밤, 학교로 와. 그 애가 두고 온 게 있어.",
        daeun:"…저기. 오늘 밤, 학교로 와 줘. 그 애가 두고 온 게 있어.",
        haneul:"오늘 밤, 학교로 와 줄래? 그 애가 두고 온 게 있어. 무섭지 않아 ^^",
        yuri:"오늘 밤!! 학교로 와~!! 그 애가 두고 온 게 있어!!", seoha:"□ 오늘 밤, 학교로. □ 두고 온 게 있어. □ 무섭지 않아. (확인)", ina:"안내 말씀 드립니다. 오늘 밤, 학교로 와 줘. 두고 온 게 있어. 무섭지 않아."
      }}},
      {msg:{from:"app", text:{
        seoyoon:"순찰 도는 사람 조심해. 낮이랑 다르니까.",
        daeun:"…순찰 도는 사람이 있어. 낮의 그 사람이… 아니야.",
        haneul:"순찰 도는 분이 계셔. 낮과는 조금 달라. 괜찮아, 조심만 하면 돼.",
        yuri:"순찰 도는 사람 조심~!! 낮이랑 완전 달라!!", seoha:"□ 순찰 도는 분이 계셔. □ 낮이랑 조금 달라. □ 조심만 할 것. (확인)", ina:"순찰 도는 분이 계셔. 낮이랑은 달라. 비상구 위치부터 확인해."
      }}},
      {think:"학교로? 이 시간에? …두고 온 거라니, 뭘."},
      "곧이어 민재한테서도 문자가 왔다.",
      {msg:{from:"minjae", text:"야 자냐. 강 선생 요즘 밤에 학교 순찰 돈대. 야자 애들이 봤는데 눈이 빨갛대 ㅋㅋㅋ"}},
      {msg:{from:"minjae", text:"학교 귀신 썰 알지? 자정에 낮의 마음이 걸어다닌다는 거. 잘 자라 ㅋㅋ"}},
      {think:"…하필 이럴 때 이런 문자를."},
      {choice:[
        {text:"지금 바로 나간다.", goto:"go"},
        {text:"잠깐 망설이다… 결국 운동화를 신는다.", goto:"hesitate"}
      ]},
      {label:"hesitate"},
      "십 분쯤 침대에 앉아 있었다. 잠금화면의 실루엣이 조용히 이쪽을 보고 있었다.",
      {think:"…두고 온 게 있다면, 가져다줘야지."},
      {label:"go"},
      {bg:"school_gate", time:"night"},
      {fx:"night"},
      "교문. 가로등 하나만 켜져 있었다. 젖은 벚나무 잎이 바람에 뒤척였다.",
      "담을 넘을 각오까지 하고 왔는데, 막상 교문 앞에 서자 심장이 어이없을 만큼 크게 뛰었다.",
      {msg:{from:"app", text:{
        seoyoon:"들어왔네. 야, 겁먹지 마. 다 낮에 있던 것들이야.",
        daeun:"…들어왔구나. 괜찮아. 다, 낮에 있던 것들이니까.",
        haneul:"들어왔구나. 괜찮아. 다 낮에 있던 것들이야 ^^",
        yuri:"들어왔다~!! 괜찮아, 다 낮에 있던 것들이야!! 아마도!!", seoha:"□ 들어왔구나. □ 전부 낮에 있던 것들이야. (확인)", ina:"탑승 완료. 괜찮아, 전부 낮에 있던 것들이야."
      }}},
      {nightschool:{enemy:"kang", dest:"nightschool_dest_$top"}},
      {bg:"town_entrance", time:"night"},
      "집에 돌아온 건 새벽 두 시가 넘어서였다. 운동화 밑창에 학교 흙이 묻어 있었다.",
      "폰을 확인했다. 잠금화면의 실루엣이 조금… 아주 조금 선명해진 것 같았다."
    ]
  },

  // ───────────────────────────────────────────────
  // 밤의 학교 - N.선생님 규칙 소개
  // ───────────────────────────────────────────────
  "nightschool_intro_kang": {
    title: "밤의 학교 - N.선생님 등장과 규칙",
    steps: [
      {bg:"hallway1", time:"night"},
      {fx:"night"},
      "자정의 복도. 낮에 그렇게 시끄럽던 곳이 발소리 하나에 통째로 울렸다.",
      "저 끝에서 손전등 불빛이 흔들렸다. 뚜벅. 뚜벅. 규칙적이고, 너무 느렸다.",
      {show:"t_kang", outfit:"dark", pos:"center", anim:"in"},
      {say:"t_kang", text:"…거기. 누구냐. 이 시간에. 학교에서."},
      "강 선생님이었다. 그런데 아니었다. 눈이 붉고, 목소리가 두 겹으로 들렸다.",
      "자정의 학교에서는 낮의 마음이 형체를 얻어 나타난다. 이건 '두려움'이었다. N.선생님.",
      {say:"t_kang", text:"규칙은 간단하다. 주사위다. 이기면 지나가고, 지면… 네 컨디션은 내 거다."},
      {fx:"flash"},
      "발밑에 낡은 종이 한 장이 떨어져 있었다. 규칙이 적힌 종이였다.",
      "「1부터 5 중 숫자 하나를 고른다. 주사위 두 개를 굴려 하나라도 맞으면 적중.」",
      "「3라운드 중 2승이면 퇴치. 행운 부적이 있으면 주사위를 하나 더 굴린다.」",
      {say:"t_kang", text:"숫자를 골라라. 두려움은 늘 확률보다 크게 느껴지는 법이니까.", emote:"angry"},
      {think:"…36퍼센트. 낮의 강 선생님이 늘 말했지. 숫자 앞에서 쫄지 말라고."}
    ]
  },

  // ───────────────────────────────────────────────
  // 7월 3일 (금) 아침 - 방학식, 여행 결정
  // ───────────────────────────────────────────────
  "day12_morning": {
    title: "7월 3일 아침 - 방학식",
    steps: [
      {sethero:"top"},
      {bg:"classroom1"},
      "7월 3일. 방학식. 창문을 다 열어도 교실은 더웠지만, 아무도 신경 쓰지 않았다.",
      {show:"t_moon", pos:"center", anim:"in"},
      {say:"t_moon", text:"자, 여름방학이에요. 다치지 말고, 물 조심하고, 8월엔 까매져서 만나요."},
      {say:"t_moon", text:"방학 숙제는… 있어요. 근데 오늘은 말 안 할래. 내일 문자로 보낼게."},
      "교실에 환호가 터졌다. 문 선생님은 웃으며 손을 흔들고 나갔다.",
      {hide:"t_moon"},
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"야, {N}! 방학이다! 여행 가자. 남자들끼리, 산으로!", emote:"exclaim"},
      {say:"me", text:"왜 하필 산."},
      {say:"minjae", text:"바다는 비싸. 산은 공짜. 그리고 석환이가 별 본다고."},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"8월 초에 페르세우스 유성우가 와! 산 정상에선 시간당 60개야.", emote:"exclaim"},
      {say:"seokhwan", text:"…그리고 AKI가 데뷔 전에 별 보러 다녔다는 산이 있어."},
      {say:"minjae", text:"그게 진짜 목적이잖아."},
      {hide:"seokhwan"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"난 기타 들고 갈 거야. 산에서 치면 소리가 다르대."},
      {say:"minjae", text:"태오는?"},
      {say:"jiho", text:"학원 캠프. 전교 1등은 방학에도 1등이래."},
      {hide:"jiho"},
      {say:"minjae", text:"그래서, {N}. 너 올 거지? 설마 다른 약속 있는 건 아니지?", emote:"question"},
      "민재의 눈이 가늘어졌다. 나는 대답하기 전에 교실 뒤쪽을 돌아봤다.",
      {hide:"minjae"},
      {if:"(lead=='seoha'||lead=='ina') && aff.lead>=30", goto:"adult"},
      {if:"aff.h>=20", goto:"her", else:"boys"},
      {label:"her"},
      {show:"$h", pos:"center"},
      "{H}가 가방을 메고 이쪽을 보고 있었다. 뭔가 말하려다 마는 얼굴이었다.",
      {say:"$h", text:{
        seoyoon:"야. …방학에 뭐 해? 그냥 물어보는 거야.",
        daeun:"…저기. 방학 때… 뭐 해? 아니, 안 바쁘면.",
        haneul:"{N}, 방학 때 계획 있어? 없으면… 아니, 괜찮아.",
        yuri:"{N}! 방학 때 뭐 해~? 난 진짜 심심할 예정인데."
      }, emote:"blush"},
      {choice:[
        {text:"너랑 어디 가고 싶은데.", aff:{h:4}, goto:"her_yes"},
        {text:"아직 안 정했어. 너는?", aff:{h:2}, goto:"her_ask"}
      ]},
      {label:"her_yes"},
      {say:"$h", text:{
        seoyoon:"…! 야, 그런 말을 그렇게 아무렇지도 않게…",
        daeun:"…! …나, 나도. 나도 그렇게 생각했어.",
        haneul:"…정말? 그럼… 나중에 연락할게. 꼭.",
        yuri:"진짜? 진짜지? 헤헤… 나도. 나도 그 말 하려고 했어."
      }, emote:"surprise"},
      {fx:"hearts"},
      "{H}는 귀 끝이 빨개진 채 가방끈을 꽉 쥐고 교실을 나갔다.",
      {hide:"$h"},
      {jump:"merge"},
      {label:"her_ask"},
      {say:"$h", text:{
        seoyoon:"나? 나는 뭐… 바다. 훈련 겸. 너도 오든가.",
        daeun:"…산. 스케치하러. …같이 가면, 좋고.",
        haneul:"삼촌이 잠깐 해외 가신대. 나도 따라갈지도. …같이 가면 좋을 텐데.",
        yuri:"바다! 언니랑… 아니, 혼자. 근데 혼자는 재미없단 말이야~"
      }},
      {fx:"heart"},
      "말끝에 작게 숨을 삼키는 소리가 났다. 그걸 못 들은 척할 수는 없었다.",
      {hide:"$h"},
      {jump:"merge"},
      {label:"adult"},
      {if:"lead=='ina'", goto:"adult_ina"},
      "교실 뒤 게시판에 방학 공지가 붙어 있었다. 「해변 정화 봉사 사전 답사 — 학생 대표 1명」",
      "대표 칸에는 내 이름이 있었다. 반 의견을 정리해 냈더니 그렇게 됐다. 담당 칸엔 반듯한 글씨로 '교장실'.",
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"답사? 날짜 겹치면 산은 어쩌고? …잠깐, 교장실? 야, 너 교장실 누나랑 무슨 사이야?", emote:"surprise"},
      {say:"me", text:"…그냥 학생 대표야. 날짜 나오면 말해 줄게."},
      {hide:"minjae"},
      {jump:"merge"},
      {label:"adult_ina"},
      "교실 뒤 창문 너머로 비행기 한 대가 하얀 줄을 긋고 있었다.",
      {show:"minjae", pos:"center"},
      {say:"me", text:"…나 8월에 유럽 갈지도 몰라. 아빠 근속 20주년 휴가래. 가족 여행."},
      {say:"minjae", text:"유럽? 이 배신자! 산은 공짜라니까! 넌 지금 공짜를 버리는 거라고.", emote:"angry"},
      {hide:"minjae"},
      "유럽. 위층 이웃이 지나가듯 알려 준 단어가 떠올랐다. 레이오버, 비행과 비행 사이의 쉼.",
      {jump:"merge"},
      {label:"boys"},
      "특별히 눈에 밟히는 사람은 없었다. 아직은.",
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"봐, 없잖아. 그럼 결정! 남자 다섯… 아니, 넷이서 산이다!", emote:"laugh"},
      {hide:"minjae"},
      {label:"merge"},
      {bg:"school_gate"},
      "교문을 나서며 생각했다. 이번 여름, 누구와 어디로 갈지.",
      "답은 이미 마음 어딘가에 있었다. 폰 속 실루엣이 그걸 먼저 아는 것 같았다.",
      "8월 3일. 여행 날짜만은 정해졌다."
    ]
  },

  // ───────────────────────────────────────────────
  // 8월 3일 - 여름방학 여행 (노멀: 남자들끼리 산)
  // ───────────────────────────────────────────────
  "summer_trip_normal": {
    title: "여름방학 여행 - 남자 넷, 산",
    steps: [
      {sethero:"top"},
      {title:"여름방학 여행", sub:"남자 넷, 산"},
      {bg:"trip_mountain", time:"morning"},
      "8월 3일. 새벽 다섯 시 버스로 두 시간을 달렸다. 산 입구에 내리자 공기부터 달랐다.",
      "매미 소리가 벽처럼 밀려왔다. 그 벽을 뚫고 민재의 목소리가 날아왔다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"자, 짐 검사! 나는 라면 스무 개, 삼겹살 2킬로, 휴대용 선풍기 세 개!", emote:"exclaim"},
      {say:"me", text:"산에 오르는데 삼겹살 2킬로를?"},
      {say:"minjae", text:"그리고 향수. 혹시 산에서 여학생들을 만날 수도 있으니까."},
      {say:"me", text:"산에서?"},
      {say:"minjae", text:"산에도 사람이 살아, {N}."},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"나는 망원경. 8킬로. 삼각대 3킬로. 별자리판. 그리고 응원봉."},
      {say:"minjae", text:"응원봉은 왜."},
      {say:"seokhwan", text:"밤에 랜턴 대신 쓰려고. 산이 AKI 컬러로 빛나는 거지.", emote:"heart"},
      {hide:"seokhwan"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"기타. 그리고 소금 한 봉지.", emote:"neutral"},
      {say:"minjae", text:"…소금?"},
      {say:"jiho", text:"삼겹살 2킬로에 소금 안 챙긴 놈이 있을 것 같아서."},
      {hide:"jiho"},
      {hide:"minjae"},
      "내 가방엔 물 세 병과 엄마의 상비약 파우치. 쪽지가 붙어 있었다. 「친구들 다치면 써. 넌 안 다칠 거고.」",
      {bg:"trip_mountain", time:"day"},
      "등산 시작. 처음 20분은 다들 씩씩했다. 21분째부터 민재가 말을 안 했다.",
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"헉, 잠깐만. 잠깐만 쉬자. 3분만. 아니, 30초만.", emote:"sweat"},
      {say:"me", text:"아까도 30초 쉬었잖아."},
      {say:"minjae", text:"삼겹살이… 삼겹살이 무거워. 내가 왜 2킬로나 싸 왔지…"},
      {hide:"minjae"},
      "석환은 망원경에 삼각대까지, 11킬로를 메고도 멀쩡했다. AKI 콘서트 밤샘 줄로 단련됐다나.",
      {fx:"shake"},
      "그리고 일이 터졌다. 젖은 바위를 밟은 민재가 미끄러졌다.",
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"으아아악!", emote:"surprise"},
      "…다행히 진흙 웅덩이였다. 온 얼굴이 진흙 범벅이라, 꼭 팩을 한 것 같았다.",
      {say:"minjae", text:"…이거 피부에 좋은 거지? 그렇지?", emote:"sad"},
      {choice:[
        {text:"엄마 파우치에서 물티슈를 꺼내준다.", goto:"wipe"},
        {text:"사진을 찍는다.", goto:"pic"}
      ]},
      {label:"wipe"},
      {say:"minjae", text:"와, 너네 엄마 천사시냐? 이따 삼겹살 제일 큰 거 너 줄게."},
      {jump:"valley"},
      {label:"pic"},
      "찰칵. 민재의 절규가 산에 메아리쳤다. 지호가 처음으로 웃었다.",
      {say:"minjae", text:"지워! 지우라고! 그거 유리한테 가면 학교 전체에 퍼진다고!", emote:"angry"},
      {label:"valley"},
      {hide:"minjae"},
      "계곡. 물소리가 매미 소리를 이겼다. 민재가 신발도 안 벗고 뛰어들었다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"차가워! 진짜 차갑다고! 심장이… 심장이 멈춘다!", emote:"surprise"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"산 계곡물은 원래 13도야. 알고 들어간 거 아니었어?"},
      {say:"minjae", text:"너는 왜 그런 걸 알아…!"},
      {say:"jiho", text:"하늘이가 어렸을 때 여기랑 비슷한 데서 똑같이 뛰어들었거든. 그때 배웠어."},
      "지호가 잠깐 먼 곳을 봤다. 소꿉친구 이야기를 할 때, 지호의 목소리는 반 톤 부드러워진다.",
      {hide:"jiho"},
      {hide:"minjae"},
      {bg:"trip_mountain", time:"afternoon"},
      "캠핑장. 텐트를 치는 데 20분이 걸렸다. 설명서를 거꾸로 봤다는 건 15분째에 알았다.",
      {fx:"shake"},
      "다 세우자마자 바람 한 번에 텐트가 굴러갔다. 말뚝은 결국 지호가 박았다. 네 개, 정확하게.",
      {bg:"trip_mountain", time:"night"},
      {fx:"night"},
      "해가 졌다. 삼겹살을 구웠다. 민재가 구웠다. 그게 문제였다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"이게 익은 건가? 검은데? 검은 건 익은 거지?", emote:"question"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"그건 탄 거야. 비켜. 소금 어딨어."},
      "지호가 집게를 뺏었다. 3분 뒤, 삼겹살이 삼겹살다워졌다. 소금이 옳았다.",
      {hide:"jiho"},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"다 먹었으면 불 꺼! 빛 공해 때문에 별이 안 보인다고.", emote:"exclaim"},
      {say:"minjae", text:"라면은? 라면 스무 개는 어쩌고?"},
      {say:"seokhwan", text:"유성우가 먼저야. 라면은 도망 안 가."},
      {say:"minjae", text:"별도 도망 안 가!"},
      {say:"seokhwan", text:"별은 도망가. 초속 30킬로로.", emote:"neutral"},
      "민재가 또 졌다. 오늘 민재는 3전 3패였다.",
      {hide:"minjae"},
      {hide:"seokhwan"},
      "불을 껐다. 눈이 어둠에 익는 데 5분. 그리고 하늘이 쏟아졌다.",
      {fx:"sparkle"},
      "별이 이렇게 많았나. 도시에서는 한 번도 본 적 없는 밀도였다.",
      {show:"seokhwan", pos:"center"},
      {say:"seokhwan", text:"저기! 방금 저기 하나 떨어졌어. 봤어? 봤지?", emote:"exclaim"},
      {say:"seokhwan", text:"페르세우스자리 방향. 저 W 모양 옆. 1시간에 60개."},
      {say:"seokhwan", text:"…AKI 노래 중에 '별의 이름'이란 곡이 있거든. 여기서 만들었대."},
      {say:"seokhwan", text:"데뷔 전에 동생이랑 둘이서 이 산에 별 보러 왔었대. 인터뷰에서 그랬어."},
      "동생. 석환의 목소리가 평소보다 조용했다. 팬이 아니라, 그냥 한 사람의 목소리였다.",
      {hide:"seokhwan"},
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"야, 유성 떨어질 때 소원 빌면 이뤄진대. 나 빌었다. 여친."},
      {say:"minjae", text:"{N}, 넌 뭐 빌었어? 솔직히 말해. 여기 산이야. 아무도 못 들어."},
      {choice:[
        {text:{when:"lead=='seoha'||lead=='ina'", then:"…그 사람이 잘 지냈으면.", else:"…그 애가 잘 지냈으면."}, aff:{h:2}, goto:"wish_her"},
        {text:"비밀.", goto:"wish_secret"},
        {text:"라면 하나 더.", goto:"wish_ramen"}
      ]},
      {label:"wish_her"},
      {say:"minjae", text:{when:"lead=='seoha'||lead=='ina'", then:"…그 사람? 야, 그 사람 누구야. 누구냐고. 산이라니까. 아무도 없어.", else:"…그 애? 야, 그 애 누구야. 누구냐고. 산이라니까. 아무도 없어."}, emote:"surprise"},
      {say:"me", text:"산에도 사람이 산다며."},
      {say:"minjae", text:"…내 말로 나를 치지 마."},
      "민재는 더 캐묻지 않았다. 대신 어깨로 내 어깨를 툭 쳤다. 그게 민재식 응원이었다.",
      {jump:"wish_end"},
      {label:"wish_secret"},
      {say:"minjae", text:"비밀이라는 건 있다는 뜻이잖아! 그치? 있는 거지?", emote:"exclaim"},
      {say:"me", text:"라면 끓일게."},
      {say:"minjae", text:"…화제 전환도 실력이다. 인정."},
      {jump:"wish_end"},
      {label:"wish_ramen"},
      {say:"minjae", text:"그게 소원이야? 유성우한테? 넌 진짜… 나랑 똑같다.", emote:"laugh"},
      "둘이서 낄낄거렸다. 별이 하나 더 떨어졌다. 이번엔 진짜 소원을 빌었다. 속으로.",
      {label:"wish_end"},
      {hide:"minjae"},
      {show:"jiho", pos:"center"},
      "지호는 소원 얘기에 끼지 않았다. 대신 기타를 꺼냈다. 조율하는 소리가 낮게 깔렸다.",
      {say:"jiho", text:"…하늘이는 잘 지내나. 방학인데 카페 일만 할 텐데."},
      {say:"me", text:"걱정돼?"},
      {say:"jiho", text:"어릴 때부터 그랬어. 괜찮다고만 해. 안 괜찮을 때도."},
      {say:"jiho", text:"…아무한테나 하는 얘기 아니야. 잊어."},
      "지호가 기타를 쳤다. 제목 없는 곡이었다. 산이 그 소리를 받아 되돌려 주었다.",
      {hide:"jiho"},
      {show:"minjae", pos:"center"},
      {say:"minjae", text:"자, 분위기 잡혔으니까 귀신 얘기 갑니다. 이 산에 옛날에…"},
      {say:"minjae", text:"…밤마다 텐트를 두드리는 손이 있대. 똑, 똑, 똑."},
      {fx:"dim"},
      "부스럭.",
      {say:"minjae", text:"…방금 뭐야. 방금 뭐였어. 지호야. 석환아.", emote:"surprise"},
      "부스럭. 부스럭. 텐트 뒤쪽. 확실히 뭔가가 있었다.",
      {fx:"shake"},
      {say:"minjae", text:"으아아아악!", emote:"surprise"},
      {fx:"undim"},
      {hide:"minjae"},
      {show:"seokhwan", pos:"center"},
      {say:"seokhwan", text:"…고라니야. 응원봉 켜니까 도망갔어.", emote:"neutral"},
      {say:"seokhwan", text:"봐. 응원봉 챙기길 잘했지. AKI가 우릴 지켜준 거야."},
      "그 말에는 아무도 반박하지 못했다. 응원봉이 산속에서 핑크로 빛났다.",
      {hide:"seokhwan"},
      "자정. 나만 빼고 다들 잠들었다. 민재는 코를 골았고, 석환은 잠꼬대로 별자리를 읊었다.",
      "잠이 안 왔다. 폰을 켰다. 산속인데도 신호가 한 칸 떠 있었다.",
      {msg:{from:"app", text:{
        seoyoon:"야. 산이야? 그 애도 지금 하늘 보고 있어. 같은 별.",
        daeun:"…산이구나. 그 애도 지금, 창가에서 같은 하늘을 보고 있어.",
        haneul:"산이구나. 그 애도 지금 하늘 보고 있어. 같은 별이야 ^^",
        yuri:"산이야!? 그 애도 지금 하늘 보고 있어~!! 같은 별!!", seoha:"□ 산이구나. □ 그 사람도 지금 하늘 보고 있어. □ 같은 별. (확인)", ina:"산이구나. 그 사람은 지금 구름 위야. 같은 별을 반대쪽에서 보고 있어."
      }}},
      {msg:{from:"app", text:{
        seoyoon:"…다음 여름엔, 같이 봐. 늦기 전에.",
        daeun:"…다음 여름엔, 같이 봐 줘. 늦기 전에.",
        haneul:"다음 여름엔 같이 보면 좋겠다. 늦기 전에.",
        yuri:"다음 여름엔 같이 보자~!! 늦기 전에!!", seoha:"□ 다음 여름엔 같이. □ 늦기 전에. (확인)", ina:"다음 여름엔 같은 쪽에서 보면 좋겠다. 늦기 전에. 다녀올게."
      }}},
      {fx:"heart"},
      "늦기 전에. 그 말이 별똥별처럼 잠깐 빛나고 사라졌다.",
      {bg:"trip_mountain", time:"morning"},
      "일출. 산 능선이 주황색으로 타올랐다. 민재가 부스스한 얼굴로 일어났다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"야, 이거 봐. 이거 보라고. 삼겹살 메고 온 값은 하네.", emote:"laugh"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"다음엔 태오도 데려오자. 걔도 가끔은 1등 아닌 데서 쉬어야지."},
      {say:"minjae", text:"그리고 {N}, 넌 다음엔 좋아하는 사람이랑 와라."},
      {say:"me", text:"…또 그 소리냐."},
      {say:"minjae", text:"자정에 폰 보면서 웃던데? 산에도 사람이 산다니까."},
      {hide:"jiho"},
      {hide:"minjae"},
      "버스 안에서 셋 다 잠들었다. 창밖으로 여름이 지나갔다. 다음 여름이 벌써 기다려졌다."
    ]
  },

  // ───────────────────────────────────────────────
  // 밤의 메시지 (여름 고정)
  // ───────────────────────────────────────────────
  "day8_night_msg": {
    title: "6월 1일 밤 메시지",
    steps: [
      {sethero:"top"},
      "자정. 창밖 빗소리 사이로 폰이 짧게 울렸다.",
      {msg:{from:"app", text:{
        seoyoon:"야. 오늘 우산, 그 애가 집 가서도 계속 생각했대. ㅋㅋ",
        daeun:"…오늘 우산. 그 애, 집에 가서도 계속 생각했어.",
        haneul:"오늘 우산 고마웠대. 그 애, 집에 가서도 계속 생각했어 ^^",
        yuri:"오늘 우산!! 그 애 집 가서도 계속 생각했대~ 헤헤!!", seoha:"□ 오늘 비. □ 그 사람은 현관 우산 표찰을 정리했어. □ 젖은 네 우산도 봤어. (확인)", ina:"오늘 비 왔지. 그 사람, 비 오는 날엔 꼭 뭘 잊어버려. 우산이든, 열쇠든."
      }}},
      {msg:{from:"app", text:{
        seoyoon:"내일 체육쌤이 물 얘기 할 거야. 그 애, 물 앞에선 좀 달라.",
        daeun:"…내일, 체육 선생님이 물 얘기를 하실 거야. 그 애는 물속에서 안경을 못 써.",
        haneul:"내일 체육 선생님이 물 이야기를 하실 거야. 그 애, 물 앞에선 조금 달라.",
        yuri:"내일 체육쌤이 물 얘기 할 거야~!! 그 애 물 앞에선 텐션이 달라!!", seoha:"□ 내일, 수영 수업 공지. □ 그 사람은 안전 수칙 안내문을 만들 거야. (확인)", ina:"내일 수영 수업 공지가 나와. 구명조끼 입는 법은 그 사람이 제일 잘 알아. 다녀올게."
      }}},
      "잠금화면의 실루엣 위로, 빗방울 같은 그림자가 지나갔다."
    ]
  },

  "day10_night_msg": {
    title: "6월 17일 밤 메시지",
    steps: [
      {sethero:"top"},
      "자정. 시험이 끝난 밤은 이상하게 길었다. 폰이 울렸다.",
      {msg:{from:"app", text:{
        seoyoon:"시험 끝났네. 그 애는 오늘 시험지보다 네 뒷모습을 더 오래 봤어. ㅋㅋ",
        daeun:"…시험, 끝났구나. 그 애는 오늘 시험지보다 네 뒷모습을 더 오래 봤어.",
        haneul:"시험 끝났구나. 그 애는 오늘 시험지보다 네 뒷모습을 더 오래 봤어 ^^",
        yuri:"시험 끝~!! 그 애는 오늘 시험지보다 네 뒷모습을 더 오래 봤어!!", seoha:"□ 시험 끝. □ 그 사람은 오늘 교무동 창가에서 하교하는 너를 봤어. (확인)", ina:"시험 끝났구나. 그 사람은 착륙하자마자 네 시험이 궁금했어. 다녀올게."
      }}},
      {msg:{from:"app", text:{
        seoyoon:"1년 전의 그 사람. 그거, 잊지 마. 곧 그 애가 뭘 두고 올 거야.",
        daeun:"…'1년 전의 그 사람'. 잊지 말아 줘. 곧, 그 애가 뭘 두고 올 거야.",
        haneul:"'1년 전의 그 사람'. 잊지 말아 줘. 곧 그 애가 뭘 두고 올 거야.",
        yuri:"'1년 전의 그 사람'!! 잊지 마~!! 곧 그 애가 뭘 두고 올 거야!!", seoha:"□ '1년 전의 그 사람'. □ 잊지 말 것. □ 곧 누가 뭘 두고 올 거야. (확인)", ina:"'1년 전의 그 사람'. 잊지 말아 줘. 곧 누군가 학교에 뭘 두고 올 거야."
      }}},
      "문 선생님이 했던 말 그대로였다. 실루엣이 잠깐 웃는 것처럼 보였다."
    ]
  },

  "day12_night_msg": {
    title: "7월 3일 밤 메시지",
    steps: [
      {sethero:"top"},
      "방학 첫날 밤. 숙제 문자는 아직 안 왔고, 다른 문자가 먼저 왔다.",
      {msg:{from:"app", text:{
        seoyoon:"방학이다. 야, 내일 주말이잖아. 그 애 아침부터 폰만 볼걸.",
        daeun:"…방학이구나. 내일 주말이야. 그 애, 아침부터 폰만 보고 있을 거야.",
        haneul:"방학이네 ^^ 내일 주말이잖아. 그 애, 아침부터 폰만 보고 있을 거야.",
        yuri:"방학~!! 내일 주말이잖아!! 그 애 아침부터 폰만 볼걸~!!", seoha:"□ 방학. □ 내일은 주말. □ 그 사람은 주말에도 수첩을 들여다봐. (확인)", ina:"방학이네. 내일은 주말이야. 그 사람은 쉬는 날이면 공항 전망대에 가. 알려 준 적 없지?"
      }}},
      {msg:{from:"app", text:{
        seoyoon:"전화 기다리는 거야. 먼저 걸어. 그 애는 절대 먼저 안 걸어.",
        daeun:"…전화, 기다리는 거야. 먼저 걸어 줘. 그 애는 먼저 못 걸어.",
        haneul:"전화 기다리는 거야. 먼저 걸어 줘. 그 애는 괜찮은 척하느라 먼저 못 걸어.",
        yuri:"전화 기다리는 거야!! 먼저 걸어~!! 그 애는 먼저 걸면 지는 줄 알아!!", seoha:"□ 전화 기다리는 거야. □ 먼저 걸어 줘. □ 그 사람은 절대 먼저 안 걸어. (확인)", ina:"전화 기다리는 거야. 먼저 걸어 줘. 그 사람은 떠나는 건 잘하는데 부르는 건 못해. 다녀올게."
      }}},
      "실루엣의 어깨가 조금 선명해졌다. 뒷모습이 아니라, 이쪽을 향한 어깨였다."
    ]
  },

  "day14_night_msg": {
    title: "7월 19일 밤 메시지",
    steps: [
      {sethero:"top"},
      "일요일 밤, 열대야였다. 창을 열어도 바람 한 점 없었다. 폰 화면만 시원한 빛을 냈다.",
      {msg:{from:"app", text:{
        seoyoon:"다음은 여행이야. 그 애, 가방 벌써 쌌어. 세 번 다시 쌌어. ㅋㅋ",
        daeun:"…다음은 여행이야. 그 애, 가방을 벌써 쌌어. 세 번 다시 쌌어.",
        haneul:"다음은 여행이야. 그 애, 가방 벌써 쌌어. 세 번이나 다시 쌌어 ^^",
        yuri:"다음은 여행~!! 그 애 가방 벌써 쌌어!! 세 번 다시 쌌어!!", seoha:"□ 다음은 여행. □ 그 사람은 짐 목록을 세 번 확인했어. (확인)", ina:"안내 말씀 드립니다. 다음은 여름 여행. 그 사람 캐리어는 늘 싸여 있어. 문제는 너야."
      }}},
      {if:"aff.lead>=30", goto:"trip", else:"none"},
      {label:"trip"},
      {msg:{from:"app", text:{
        seoyoon:"바다에서 뛰지 마. 그 애 따라 뛰다가 다친다. 넘어지면 손 내밀고.",
        daeun:"…산에서 스케치북 떨어뜨리면 그 애가 제일 먼저 뛰어갈 거야. 그 손, 잡아 줘.",
        haneul:"비행기에서 그 애가 창가 자리를 양보할 거야. 받지 마. 같이 보는 게 좋아.",
        yuri:"바다에서 그 애가 파도에 밀려 넘어질 거야~!! 그때 손 잡아!! 꼭!!", seoha:"□ 바다에서 그 사람이 선크림을 들고 머뭇거릴 거야. □ 모른 척하지 말 것. (확인)", ina:"여행지에서 시계탑을 보게 되면 3시에 올려다봐. 이건 예언이 아니라 부탁이야."
      }}},
      {jump:"end"},
      {label:"none"},
      {msg:{from:"app", text:{
        seoyoon:"어디 가든 밤하늘 한 번은 봐. 별 떨어지면 소원 빌고. ㅋㅋ",
        daeun:"…어디로 가든, 밤에 하늘 한 번만 올려다봐 줘. 그 애도 그 시간에 올려다볼 거야.",
        haneul:"어디 가든 밤하늘 한 번은 봐 줘 ^^ 그 애도 같은 하늘 아래 있어. 괜찮아, 멀어도.",
        yuri:"어디 가든 밤에 하늘 봐~!! 별 떨어지면 소원 빌기!! 그 애 것까지!! 헤헤!", seoha:"□ 어디로 가든. □ 밤하늘 한 번. □ 별이 떨어지면 소원 하나. (확인)", ina:"안내 말씀 드립니다. 어디로 가든 밤하늘을 한 번 올려다봐 줘. 그 사람은 그 위를 날고 있을 거야."
      }}},
      {label:"end"},
      "여행. 잠금화면 속 실루엣도 어딘가로 떠날 채비를 하는 것 같았다. 착각이었을까."
    ]
  },

  // ───────────────────────────────────────────────
  // 범용 아침 (여름) - 히로인 없이
  // ───────────────────────────────────────────────
  "generic_morning_summer": {
    title: "여름 아침 - 범용",
    steps: [
      {if:"weekend", goto:"wk"},
      {if:"day<=9", goto:"a"},
      {if:"day<=10", goto:"b", else:"c"},
      {label:"a"},
      {bg:"vending"},
      "아침 자판기 앞. 벌써 습기가 셔츠에 달라붙었다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"{N}, 아침부터 아이스크림. 이게 여름 예의야.", emote:"laugh"},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"AKI가 아침 방송에서 먹은 거 이거야. 딸기맛. 나도 이거."},
      {say:"minjae", text:"넌 AKI가 돌 씹으면 돌도 씹을 놈이야."},
      {say:"seokhwan", text:"…AKI는 돌 안 씹어.", emote:"angry"},
      "자판기가 덜컹, 하고 두 개를 뱉었다. 민재가 하나를 나한테 던졌다. 차가웠다.",
      {jump:"end"},
      {label:"b"},
      {bg:"school_gate"},
      "교문. 강 선생님이 팔짱을 끼고 서 있었다. 아침 복장 검사였다.",
      {show:"t_kang", pos:"left"},
      {say:"t_kang", text:"셔츠 넣어라! 하복이라고 옷차림 흐트러지면 마음도 흐트러진다!", emote:"angry"},
      {show:"taeo", pos:"right"},
      {say:"taeo", text:"안녕하세요, 선생님. 오늘도 더우시죠."},
      {say:"t_kang", text:"어, 태오. 넌 됐다. 통과."},
      "태오는 셔츠가 반쯤 나와 있었다. 전교 1등의 특권인가.",
      {say:"taeo", text:"(작게) {N}, 인사 먼저 하면 돼. 선생님은 인사를 못 이겨.", emote:"laugh"},
      {jump:"end"},
      {label:"c"},
      {bg:"hallway1"},
      "복도. 아침인데 벌써 기타 소리가 났다. 지호였다.",
      {show:"jiho", pos:"center"},
      {say:"jiho", text:"…아. 축제 때 할 곡 정하는 중이야. 여름에 정해 둬야 가을에 맞출 수 있어."},
      {say:"me", text:"보컬은 정했어?"},
      {say:"jiho", text:"유리가 불러 준대. 근데 노래 잘하는 애가 하나 더 있어. 본인만 모르더라."},
      {show:"t_moon", pos:"right"},
      {say:"t_moon", text:"송지호. 아침 자습 시간에 복도 콘서트는 좀 그렇지 않니?"},
      {say:"jiho", text:"…죄송합니다. 근데 여기 울림이 제일 좋아서요."},
      {say:"t_moon", text:"그건 그렇지. 그럼 딱 한 곡만. 나도 듣고 갈래.", emote:"laugh"},
      {label:"end"},
      "여름 아침은 이런 식으로 시작됐다. 시끄럽고, 덥고, 나쁘지 않게.",
      {jump:"fin"},
      {label:"wk"},
      {scene:"home_morning_weekend"},
      {label:"fin"}
    ]
  },

  // ───────────────────────────────────────────────
  // 범용 정오 (여름) - 히로인 없이
  // ───────────────────────────────────────────────
  "generic_noon_summer": {
    title: "여름 정오 - 범용",
    steps: [
      {if:"weekend", goto:"wk"},
      {if:"day<=9", goto:"a"},
      {if:"day<=11", goto:"b", else:"c"},
      {label:"a"},
      {bg:"classroom1"},
      "점심시간. 교실 선풍기 앞자리를 두고 전쟁이 벌어졌다.",
      {show:"minjae", pos:"left"},
      {say:"minjae", text:"여긴 내 자리야. 아침에 가방 놨잖아. 영토 선포했다고."},
      {show:"seokhwan", pos:"right"},
      {say:"seokhwan", text:"가방은 영토가 아니야. 실효 지배가 중요해. 지금 내가 앉아 있잖아."},
      {say:"minjae", text:"너 천문동아리지 국제법 동아리 아니잖아!"},
      {say:"seokhwan", text:"{N}. 판결해 줘. 공정하게.", emote:"question"},
      {choice:[
        {text:"민재.", goto:"a_m"},
        {text:"석환.", goto:"a_s"}
      ]},
      {label:"a_m"},
      {say:"seokhwan", text:"…편파 판정. AKI가 실망할 거야.", emote:"sad"},
      {jump:"end"},
      {label:"a_s"},
      {say:"minjae", text:"배신이다! 너한텐 우산도 안 빌려줄 거야! …아, 나 우산 없지.", emote:"angry"},
      {jump:"end"},
      {label:"b"},
      {bg:"school_yard"},
      "점심시간 교정. 나무 그늘 아래 태오 주위에 여학생들이 몰려 있었다.",
      {show:"taeo", pos:"left"},
      {say:"taeo", text:"아, 그 문제? 이차함수 꼭짓점부터 잡으면 돼. 이렇게…"},
      {show:"jiho", pos:"right"},
      {say:"jiho", text:"쟤는 점심시간에도 과외야. 무료로.", emote:"neutral"},
      {say:"me", text:"부럽진 않아?"},
      {say:"jiho", text:"…별로. 밥은 조용히 먹고 싶어."},
      {say:"taeo", text:"지호! {N}! 이리 와서 나 좀 구해 줘. 밥도 못 먹었어.", emote:"sweat"},
      "인기가 많은 것도 고생이었다. 태오가 빵 한 조각을 들고 우리 쪽으로 도망쳐 왔다.",
      {jump:"end"},
      {label:"c"},
      {bg:"vending"},
      "자판기 앞. 박 선생님이 캔커피를 뽑고 있었다. 정확히 동전 세 개.",
      {show:"t_park", pos:"center"},
      {say:"t_park", text:"{N}. 점심에 자판기 앞을 서성이는 건 좋은 습관이 아니다."},
      {say:"me", text:"…음료수 하나만요."},
      {say:"t_park", text:"…그래. 더우니까. 이건 내가 산다. 오늘만."},
      "덜컹. 박 선생님이 캔 하나를 더 뽑아 내밀었다. 표정은 그대로였다.",
      {say:"t_park", text:"공정하려면, 반 애들한테는 비밀이다.", emote:"neutral"},
      "깐깐한 사람의 작은 친절은 두 배로 시원했다.",
      {label:"end"},
      "종이 울렸다. 여름의 정오는 뜨겁게, 그리고 금세 지나갔다.",
      {jump:"fin"},
      {label:"wk"},
      {bg:"town_entrance", time:"noon"},
      "방학 주말 점심. 엄마가 말아 준 냉국수를 먹으며 폰 화면을 켰다 껐다 했다. 오후는 길었다.",
      {label:"fin"}
    ]
  },

  // ───────────────────────────────────────────────
  // 집 밤 (여름) - 엄마/아빠
  // ───────────────────────────────────────────────
  "home_night_summer": {
    title: "여름 밤 - 집",
    steps: [
      {bg:"town_entrance", time:"night"},
      {if:"weekend", goto:"wk", else:"wd"},
      {label:"wd"},
      "밤. 거실 선풍기가 삐걱거리며 돌았다. 엄마가 수박을 잘라 왔다.",
      {show:"mom", pos:"center"},
      {say:"mom", text:"{N}. 수박 먹어. …근데 너 요즘 폰 자주 보더라?"},
      {say:"me", text:"…그냥. 친구."},
      {say:"mom", text:"친구. 그래. 친구가 우산도 같이 쓰고 그러니? 어깨 한쪽만 젖어서 왔던데."},
      {say:"me", text:"…!"},
      {say:"mom", text:"됐어. 엄마는 아무것도 몰라. 수박이나 먹어.", emote:"laugh"},
      "엄마의 눈치는 여전히 100단이었다. 수박은 달았고, 귀는 뜨거웠다.",
      {jump:"end"},
      {label:"wk"},
      "주말 밤. 아빠가 야구 중계를 틀어놓고 소파에 반쯤 누워 있었다.",
      {show:"dad", pos:"center"},
      {say:"dad", text:"…{N}. 요즘 지낼 만하냐."},
      {say:"me", text:"응, 괜찮아."},
      {say:"dad", text:"그래. …이사 오게 한 거, 아직도 좀 미안하다."},
      {say:"dad", text:"근데 너, 여기 와서 얼굴이 좀 나아졌어. 엄마가 그러더라."},
      "아빠는 화면에서 눈을 떼지 않았다. 그래도 그 말은 정확히 이쪽으로 왔다.",
      {say:"dad", text:"…홈런이다. 봤냐."},
      "못 봤다. 그래도 같이 박수를 쳤다. 여름밤이 조금 시원해졌다.",
      {label:"end"},
      "방에 들어와 폰을 켰다. 잠금화면의 실루엣이 오늘도 거기 있었다."
    ]
  }

});
