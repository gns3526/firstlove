// 게임 공용 데이터 (캐릭터/장소/아이템/달력). 시나리오 작가는 ID만 참조.
window.CONFIG = {
  title: "첫사랑",
  player: { defaultName: "이준", actualAgeMinimum: 20, schoolYear: 2 },
  setting: {
    timeline: "current_school_year",
    classActualAgeMinimum: 20,
    schoolYear: 2,
    schoolAgeLabel: 17,
    schoolAgeLabelIsActualAge: false,
    enrollment: "returning_and_repeating_students",
    adultRomanceTimeline: "current_school_year"
  },
  heroines: ["seoyoon", "daeun", "haneul", "yuri"],
  // 성인 공략 인물. 호감도·전화·데이트·루트 확정·엔딩을 학생 히로인과 같은 규칙으로 쓴다.
  // 학생 전용 흐름(학교 선물 전달, 밤의 학교 목적지, 만화 패널)에는 들어가지 않는다.
  adults: ["seoha", "ina"],

  characters: {
    seoyoon: { name:"한서윤", role:"heroine", color:"#7cb342", house:"house_A", quirk:"야/ㅋㅋ",
      likes:["fitness","charm","sense"], snack:"snack_chips",
      spots:["public_gym","pool","ride","bowling","ice_rink","school_gym"],
      trip:{summer:"trip_sea", winter:"trip_mountain"},
      schedule:{school:["school_gym","school_yard","vending"], town:["playground","public_gym"]} },
    daeun: { name:"정다은", role:"heroine", color:"#5c9e7a", house:"house_B", quirk:"…/저기",
      likes:["sense","study","photo"], snack:"snack_kancho",
      spots:["zoo","lake","insect_museum","cinema","char_shop","park"],
      trip:{summer:"trip_mountain", winter:"trip_abroad"},
      schedule:{school:["art_room","classroom2","hallway2"], town:["cafe_out","town_entrance"]} },
    haneul: { name:"윤하늘", role:"heroine", color:"#4a6fa5", house:"house_C", quirk:"^^/괜찮아",
      likes:["study","sense","charm"], snack:"snack_choco",
      spots:["fountain","park","cvs","karaoke","downtown","cafe_out"],
      trip:{summer:"trip_abroad", winter:"trip_sea"},
      schedule:{school:["classroom1","hallway1","nurse_room"], town:["cafe_out","cvs"]} },
    yuri: { name:"차유리", role:"heroine", color:"#e57fa3", house:"house_D", quirk:"!!/~/헤헤",
      likes:["charm","photo","fitness"], snack:"snack_pepero",
      spots:["theme_park","ride","karaoke","char_shop","maid_cafe","concert_hall"],
      trip:{summer:"trip_sea", winter:"trip_mountain"},
      schedule:{school:["school_yard","hallway1","school_entrance"], town:["playground","cvs"]} },

    minjae:  { name:"강민재", role:"student" },
    seokhwan:{ name:"오석환", role:"student", dark:true, darkName:"N.석환" },
    jiho:    { name:"송지호", role:"student" },
    taeo:    { name:"백태오", role:"student", dark:true, darkName:"N.태오", baseExpressions:{dark:"angry"} },
    t_moon:  { name:"문정희 선생님", role:"teacher" },
    t_park:  { name:"박세훈 선생님", role:"teacher" },
    t_kang:  { name:"강철 선생님", role:"teacher", dark:true, darkName:"N.선생님" },
    doyoon:  { name:"최도윤", role:"adult" },
    mina:    { name:"홍미나", role:"adult" },
    sora:    { name:"김소라", role:"adult" },
    eunjung: { name:"오은정", role:"adult" },
    narae:   { name:"이나래", role:"adult" },
    // 공략 가능한 성인 2인. 학생 히로인 목록(heroines)과 분리하고 adults 목록으로 연애 루트에 합류한다.
    // 서하: 교장실 비서(1년 계약, 2월 말 만료). 이나: 진로 특강 초청 승무원, 주인공의 윗집(1203호) 이웃.
    seoha:   { name:"서하", role:"adult", romance:true, age:26, color:"#526a98", quirk:"(확인)/□",
      likes:["study","sense","photo"], snack:"snack_kancho",
      spots:["bookstore","cinema","bowling","lake"], home:"seoha_home_living",
      winterWear:["r60art_49_resolution"],   // 겨울 바깥 데이트에서 date_winter 원화가 오기 전까지 입는 옷(니트+목도리)
      schedule:{school:["hallway1","school_entrance"], town:[]} },
    ina:     { name:"이나", role:"adult", romance:true, age:28, color:"#c9826b", quirk:"안내 말씀/다녀올게",
      likes:["charm","fitness","sense"], snack:"snack_chips",
      spots:["airport","theme_park","ice_rink","downtown"], home:"ina_home_living",
      winterWear:["r60art_30_setup"],        // 겨울 바깥 데이트에서 date_winter 원화가 오기 전까지 입는 옷(울 코트)
      schedule:{school:[], town:["town_entrance","cvs"]} },
    ina_mom: { name:"이나 어머니", role:"adult" },   // 이나 고향 게스트하우스 주인. 스프라이트 없음(대사만)
    dad:     { name:"아빠", role:"adult" },
    mom:     { name:"엄마", role:"adult" },
    gymowner:{ name:"마강수 관장", role:"adult" },
    seojun:  { name:"한서준", role:"adult" },
    dahoon:  { name:"정다훈", role:"adult" },
    ari:     { name:"차아리", role:"adult" },
    guard:   { name:"경호원", role:"adult" },
    me:  { name:"{N}", role:"me" },
    app: { name:"???", role:"app" },
    "?": { name:"???", role:"unknown" },
    all: { name:"모두", role:"group" }
  },

  stats: { study:"학력", fitness:"체력", art:"예술", charm:"매력", sense:"감성" },
  gems: {
    study:  { name:"학력 대화", block:"item/block_01", cube:"item/result_cube_on_01", cubeOff:"vfx/result_cube_off_01", eff:"vfx/result_cube_eff_01", color:"#ff4d6d" },
    sense:  { name:"감성 대화", block:"item/block_02", cube:"item/result_cube_on_02", cubeOff:"vfx/result_cube_off_02", eff:"vfx/result_cube_eff_02", color:"#4dc3ff" },
    fitness:{ name:"체력 대화", block:"item/block_03", cube:"item/result_cube_on_03", cubeOff:"vfx/result_cube_off_03", eff:"vfx/result_cube_eff_03", color:"#b04dff" },
    charm:  { name:"매력 대화", block:"item/block_04", cube:"item/result_cube_on_04", cubeOff:"vfx/result_cube_off_04", eff:"vfx/result_cube_eff_04", color:"#7fe04d" },
    photo:  { name:"사진 촬영", block:"item/block_05", cube:"item/result_cube_on_05", cubeOff:"vfx/result_cube_off_05", eff:"vfx/result_cube_eff_05", color:"#ffc44d" }
  },

  activities: {
    study:   { name:"공부",   icon:"icon/study_icon",      gain:{study:6},          cond:-10 },
    exercise:{ name:"운동",   icon:"icon/exercise_icon",   gain:{fitness:6},        cond:-10 },
    art:     { name:"미술",   icon:"icon/art_icon",        gain:{art:6},            cond:-10 },
    music:   { name:"음악",   icon:"icon/music_icon",      gain:{art:4, sense:2},   cond:-10 },
    style:   { name:"스타일", icon:"icon/style_icon",      gain:{charm:6},          cond:-10 },
    friend:  { name:"친구",   icon:"icon/friendship_icon", gain:{sense:4, charm:2}, cond:-8 },
    alba:    { name:"알바",   icon:"icon/parttime_icon",   gain:{},                 cond:-20 },
    rest:    { name:"휴식",   icon:"icon/breaktime_icon",  gain:{},                 cond:25 },
    move:    { name:"이동",   icon:"icon/move_icon",       gain:{},                 cond:-5 }
  },

  moveLocations: {
    school: [ {id:"art_room",name:"미술실"}, {id:"nurse_room",name:"보건실"}, {id:"school_gym",name:"체육관"},
              {id:"school_yard",name:"교정"}, {id:"vending",name:"자판기"}, {id:"hallway1",name:"복도"},
              {id:"classroom1",name:"우리 반 교실"}, {id:"classroom2",name:"옆 반 교실"}, {id:"school_entrance",name:"건물 입구"}, {id:"hallway2",name:"2층 복도"}, {id:"road_home",name:"하굣길"} ],
    town:   [ {id:"playground",name:"놀이터"}, {id:"cafe_out",name:"카페 Forin"}, {id:"cvs",name:"편의점"},
              {id:"town_entrance",name:"주택가 입구"}, {id:"public_gym",name:"동네 체육관"} ]
  },

  // 데이트 장소 (지도 핀 좌표는 1162x1734 지도 기준 %)
  dateSpots: [
    { id:"theme_park",   name:"테마파크",   cost:40, icon:"gui/_0007_놀이공원", x:52, y:30, desc:"놀이기구가 잔뜩. 친구에서 연인으로 발전할 찬스." },
    { id:"ride",         name:"놀이기구",   cost:30, icon:"icon/map_icon_10", x:58, y:34, desc:"롤러코스터와 대관람차. 비명과 손." },
    { id:"zoo",          name:"동물원",     cost:25, icon:"icon/map_icon_07", x:44, y:26, desc:"기린이 있는 동물원. 느긋한 산책길." },
    { id:"park",         name:"공원",       cost:10, icon:"gui/_0009_공원", x:40, y:38, desc:"입구 카페와 벤치. 조용한 데이트." },
    { id:"fountain",     name:"분수대",     cost:10, icon:"gui/_0008_관광명소", x:36, y:44, desc:"물보라가 시원한 분수 광장." },
    { id:"lake",         name:"호숫가",     cost:15, icon:"icon/map_icon_04", x:62, y:44, desc:"오리배와 산책로." },
    { id:"concert_hall", name:"야외공연장", cost:20, icon:"icon/map_icon_05", x:48, y:50, desc:"학교 뒤 야외공연장. 바닥에 이상한 문양이 있다." },
    { id:"downtown",     name:"번화가",     cost:30, icon:"gui/_0002_시장", x:30, y:52, desc:"쇼핑과 군것질." },
    { id:"maid_cafe",    name:"메이드카페", cost:35, icon:"gui/_0005_카페", x:26, y:58, desc:"번화가 구석의 메이드카페. 분위기 이상함." },
    { id:"char_shop",    name:"캐릭터샵",   cost:25, icon:"gui/_0003_쇼핑몰", x:22, y:48, desc:"인형과 굿즈 천국." },
    { id:"cinema",       name:"영화관",     cost:30, icon:"gui/_0006_문화시설", x:34, y:62, desc:"어두운 상영관, 팝콘 하나." },
    { id:"karaoke",      name:"노래방",     cost:20, icon:"icon/map_icon_03", x:28, y:68, desc:"마이크 하나에 두 사람." },
    { id:"bowling",      name:"볼링장",     cost:25, icon:"gui/_0001_테마파크", x:56, y:60, desc:"스트라이크 승부." },
    { id:"public_gym",   name:"체육관",     cost:15, icon:"icon/map_icon_06", x:64, y:54, desc:"마강수 관장의 동네 체육관." },
    { id:"pool",         name:"수영장",     cost:30, icon:"gui/_0000_해수욕장", x:66, y:66, desc:"여름 한정. 물속에서는 안경도 벗는다.", lockedUntil:"pool" },
    { id:"ice_rink",     name:"아이스링크", cost:35, icon:"icon/map_icon_09", x:50, y:70, desc:"넘어지면 잡아준다." },
    { id:"insect_museum",name:"곤충생태관", cost:20, icon:"gui/_0004_박물관", x:42, y:76, desc:"다훈 씨가 일하는 곳. 어두운 나비관." },
    { id:"cvs",          name:"편의점",     cost:5,  icon:"icon/map_icon_02", x:20, y:36, desc:"컵라면 데이트. 싸고 맛있다." },
    // 성인 전용 장소. only 에 없는 상대와는 잠겨 있다.
    { id:"bookstore",    name:"북카페",     cost:15, icon:"icon/map_icon_01", x:42, y:58, desc:"강이 내려다보이는 서점 카페. 책장 넘기는 소리만 들린다.", only:["seoha"] },
    { id:"cafe_out",     name:"카페 Forin", cost:10, icon:"icon/map_icon_01", x:28, y:30, desc:"하늘 삼촌의 카페. 마감 뒤 테라스엔 조명 하나만 켜진다.", only:["haneul"] },
    { id:"airport",      name:"공항 전망대", cost:25, icon:"icon/map_icon_08", x:11, y:31, desc:"활주로가 내려다보이는 전망대. 비행기가 뜨고 내린다.", only:["ina"] }
  ],

  items: {
    snack_chips:  { name:"감자칩",   img:"item/_0002_Layer-89", price:30,  desc:"짭짤. 서윤이 좋아할 것 같다." },
    snack_kancho: { name:"칸초",     img:"item/_0001_Layer-90", price:30,  desc:"작고 귀엽다. 다은이 생각난다." },
    snack_choco:  { name:"초코롤",   img:"item/_0000_Layer-91", price:40,  desc:"부드러운 초코롤. 하늘이 좋아할 듯." },
    snack_pepero: { name:"빼빼로",   img:"item/_0003_Layer-88", price:35,  desc:"길쭉한 과자. 유리 취향." },
    film:         { name:"필름",     img:"icon/film_icon",      price:100, qty:5, desc:"사진 5장 분량." },
    charm:        { name:"행운 부적", img:"item/charm",    price:200, desc:"밤의 학교에서 주사위를 하나 더 굴린다." },
    umbrella:     { name:"우산",     img:"item/umbrella",   price:50,  desc:"비 오는 날, 둘이 쓰면 가까워진다." }
  },

  alba: {
    cafe:   { name:"카페 Forin", bg:"cafe_out", boss:"doyoon", staff:null,  jobs:["clean","serve","kitchen"] },
    burger: { name:"BURGUR",     bg:"downtown", boss:"mina",   staff:"sora", jobs:["cashier","serve","kitchen"] },
    cvs:    { name:"편의점",     bg:"cvs",      boss:"eunjung",staff:"narae",jobs:["clean","stock","cashier"] }
  },
  jobs: {
    clean:  { name:"청소",     idx:1, req:{fitness:10},          pay:[150,60] },
    stock:  { name:"물품정리", idx:2, req:{study:15, fitness:15}, pay:[170,70] },
    cashier:{ name:"계산대",   idx:3, req:{study:25, charm:20},   pay:[200,80] },
    serve:  { name:"서빙",     idx:4, req:{charm:25, sense:20},   pay:[220,90] },
    kitchen:{ name:"주방보조", idx:5, req:{art:25, fitness:25},   pay:[250,100] }
  },

  // 하루를 넘나드는 장면의 시간표. slot: 이 칸(아침 morning/점심 noon)에서만 연다.
  // until: 장면이 끝난 뒤 이어질 하루의 단계. 장면이 오후·귀갓길·밤까지 쓰면 그 사이 단계는 건너뛴다.
  // 본편에서 쓰지 않는 삽화 이벤트. 학생(17세) 루트의 입술 입맞춤 2편은 학생 배역 경계(학교·데이트 수준의 두근거림)를 넘는다.
  // 장면·원화 파일은 그대로 두고, 이 목록에서 지우면 다시 열린다.
  retiredEvents: ["r60_3", "r60_11"],
  sceneTiming: {
    route_daeun_1:   { slot:"noon", weekday:true },
    route_daeun_2:   { slot:"noon", until:"night", weekday:true },
    route_daeun_3:   { slot:"noon", weekday:true },
    route_daeun_4:   { slot:"noon", until:"walk_home", weekday:true },
    route_haneul_1:  { slot:"morning", until:"night", weekday:true },
    route_haneul_2:  { slot:"noon", weekday:true },
    route_haneul_3:  { slot:"noon", until:"night", weekday:true },
    route_haneul_4:  { slot:"morning", until:"walk_home" },
    route_seoyoon_1: { slot:"morning", weekday:true },
    route_seoyoon_2: { slot:"noon", until:"night", weekday:true },
    route_seoyoon_3: { slot:"noon", weekday:true },
    route_seoyoon_4: { slot:"morning", until:"walk_home", weekday:true },
    route_yuri_1:    { weekday:true },
    route_yuri_2:    { weekday:true },
    route_yuri_3:    { slot:"noon", until:"night", weekday:true },
    route_yuri_4:    { slot:"noon", until:"night" },
    valentine_haneul:{ until:"night" },
    valentine_yuri:  { until:"night" },
    day11_night:     { late:true },
    day17_night:     { late:true },
    day18_night:     { late:true }
  },
  calendar: [
    {n:1,  season:"spring", date:"3월 2일",   dow:"월", weekend:false},
    {n:2,  season:"spring", date:"3월 9일",   dow:"화", weekend:false},
    {n:3,  season:"spring", date:"3월 17일",  dow:"수", weekend:false},
    {n:4,  season:"spring", date:"3월 25일",  dow:"목", weekend:false},
    {n:5,  season:"spring", date:"4월 3일",   dow:"금", weekend:false},
    {n:6,  season:"spring", date:"4월 11일",  dow:"토", weekend:true},
    {n:7,  season:"spring", date:"4월 19일",  dow:"일", weekend:true},
    {special:"sports_day", season:"spring", date:"5월 8일", dow:"금", title:"체육대회"},
    {n:8,  season:"summer", date:"6월 1일",   dow:"월", weekend:false},
    {n:9,  season:"summer", date:"6월 9일",   dow:"화", weekend:false},
    {n:10, season:"summer", date:"6월 17일",  dow:"수", weekend:false},
    {n:11, season:"summer", date:"6월 25일",  dow:"목", weekend:false},
    {n:12, season:"summer", date:"7월 3일",   dow:"금", weekend:false},
    {n:13, season:"summer", date:"7월 11일",  dow:"토", weekend:true},
    {n:14, season:"summer", date:"7월 19일",  dow:"일", weekend:true},
    {special:"summer_trip", season:"summer", date:"8월 3일", dow:"월", title:"여름방학 여행"},
    {n:15, season:"autumn", date:"9월 1일",   dow:"월", weekend:false},
    {n:16, season:"autumn", date:"9월 9일",   dow:"화", weekend:false},
    {n:17, season:"autumn", date:"9월 17일",  dow:"수", weekend:false},
    {n:18, season:"autumn", date:"9월 25일",  dow:"목", weekend:false},
    {n:19, season:"autumn", date:"10월 3일",  dow:"금", weekend:false},
    {n:20, season:"autumn", date:"10월 11일", dow:"토", weekend:true},
    {n:21, season:"autumn", date:"10월 19일", dow:"일", weekend:true},
    {special:"festival", season:"autumn", date:"10월 24일", dow:"토", title:"가을 축제"},
    {n:22, season:"winter", date:"12월 1일",  dow:"월", weekend:false},
    {n:23, season:"winter", date:"12월 9일",  dow:"화", weekend:false},
    {n:24, season:"winter", date:"12월 17일", dow:"수", weekend:false},
    {special:"xmas_eve", season:"winter", date:"12월 24일", dow:"목", title:"크리스마스 이브"},
    {n:25, season:"winter", date:"1월 8일",   dow:"금", weekend:false},
    {special:"winter_trip", season:"winter", date:"1월 16일", dow:"토", title:"겨울방학 여행"},
    {n:26, season:"winter", date:"1월 24일",  dow:"일", weekend:true},
    {n:27, season:"winter", date:"2월 14일",  dow:"토", weekend:true, valentine:true},
    {special:"confession", season:"winter", date:"2월 27일", dow:"금", title:"종업 전날"},
    {special:"epilogue", season:"spring", date:"3월 2일", dow:"월", title:"다시, 봄"}
  ],

  emotes: {
    laugh:"gui/pose_btn_01_p", sad:"gui/pose_btn_02_p", neutral:"gui/pose_btn_03_p",
    surprise:"gui/pose_btn_04_p", blush:"gui/pose_btn_05_p", angry:"gui/pose_btn_06_p",
    exclaim:"anim/tkn_icon_select_01", question:"anim/night_q_ani01", heart:"gui/info_heroine_like_01", sweat:"guiv/info_heroine_like_03"
  }
};
