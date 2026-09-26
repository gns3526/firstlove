// Only inspected CGs have runnable school-event scripts. Original scene indices are unchanged.
window.STUDENT_EVENTS = [
  {
    "id": "seoyoon_sick_care_v6",
    "title": "오늘은 쉬는 것도 훈련",
    "heroine": "seoyoon",
    "scene": "v6_seoyoon_sick_care",
    "onceFlag": "v6_event_seen_seoyoon_sick_care_v6",
    "trigger": {
      "scene": "winter_trip_seoyoon",
      "index": 88,
      "anchor": "…그리고 장갑 한 짝. 못 찾아도 돼. 이게 더 좋아.",
      "kind": "weekend",
      "seasons": [
        "winter"
      ],
      "beforeValentine": true,
      "routeOnly": true,
      "priority": 50
    },
    "requireSuccess": false,
    "requiresEvent": null,
    "invitation": "서준과 연락하고, 쉬고 있는 서윤을 만나러 간다."
  },
  {
    "id": "seoyoon_cheek_kiss_v6",
    "title": "골인 뒤, 작은 용기",
    "heroine": "seoyoon",
    "scene": "v6_seoyoon_cheek_kiss",
    "onceFlag": "v6_event_seen_seoyoon_cheek_kiss_v6",
    "trigger": {
      "scene": "confession_seoyoon",
      "index": 73,
      "anchor": "손을 잡았다. 크리스마스 그 밤처럼. 이번엔 둘 다 장갑이 없었다.",
      "kind": "after_confession"
    },
    "requireSuccess": true,
    "requiresEvent": null,
    "invitation": "서윤과 교문까지 조금 더 걷는다."
  },
  {
    "id": "seoyoon_home_visit_v6",
    "title": "대문 안에서 들리는 곡",
    "heroine": "seoyoon",
    "scene": "v6_seoyoon_home_visit",
    "onceFlag": "v6_event_seen_seoyoon_home_visit_v6",
    "trigger": {
      "scene": "walkhome_seoyoon_autumn",
      "index": 19,
      "anchor": "서윤의 집 앞. 2층 창문에서 음악 소리가 새어 나왔다.",
      "kind": "weekend",
      "seasons": [
        "autumn"
      ],
      "priority": 20
    },
    "requireSuccess": false,
    "requiresEvent": null,
    "invitation": "서윤이 골라 둔 곡을 함께 들으러 간다."
  },
  {
    "id": "seoyoon_changing_room_door_mixup_v6",
    "title": "문 앞에서, 콩",
    "heroine": "seoyoon",
    "scene": "v6_seoyoon_changing_room_door_mixup",
    "onceFlag": "v6_event_seen_seoyoon_changing_room_door_mixup_v6",
    "trigger": {
      "scene": "enc_seoyoon_summer_noon",
      "index": 24,
      "anchor": "오후 수업 가자. 땀 냄새 나면 미안.",
      "kind": "schoolday",
      "seasons": [
        "summer"
      ],
      "priority": 10
    },
    "requireSuccess": false,
    "requiresEvent": null,
    "invitation": "체육관에 들러 서윤과 공 정리를 돕는다."
  }
];
registerScenes({
  "v6_seoyoon_sick_care": {
    "steps": [
      {
        "bg": "house_A",
        "season": "winter",
        "time": "afternoon"
      },
      {
        "show": "seojun",
        "pos": "center"
      },
      "겨울 여행에서 돌아온 뒤, 서윤이 감기에 걸렸다. 주말 낮, 서준 형과 약속하고 집을 찾았다.",
      {
        "say": "seojun",
        "text": "어이, {N}. 들어와. 서윤이는 오늘 훈련 쉬어. 물은 내가 데워 놨어."
      },
      {
        "hide": "seojun"
      },
      {
        "show": "seoyoon",
        "pos": "center",
        "outfit": "date_casual"
      },
      "서윤은 거실 소파에 앉아 무릎담요 끝을 만지작거렸다. 나는 물컵을 그 앞 탁자에 내려놓았다.",
      {
        "say": "seoyoon",
        "text": "…뭐 하러 왔어. 나 뛰지도 못하는데."
      },
      {
        "say": "me",
        "text": "이마 좀 짚어 봐도 돼?"
      },
      {
        "say": "seoyoon",
        "text": "응. 손 차가우면 미리 말해.",
        "emote": "neutral"
      },
      "이마를 잠깐 짚었다가 손을 거뒀다. 뜨끈했다. 옆에 놓인 체온계를 건넸다.",
      {
        "eventCg": "seoyoon_sick_care_v6",
        "eventBg": "seoyoon_sick_care_v6",
        "hideAll": true
      },
      {
        "say": "me",
        "text": "오늘은 쉬는 것도 훈련이라고 하자."
      },
      {
        "say": "seoyoon",
        "text": "그럼 너도 기록 재지 마. 나 얼마나 잘 쉬는지.",
        "emote": "blush"
      },
      "서윤이 물을 한 모금 마셨다. 함께 창밖을 보는 동안 시계만 천천히 갔다.",
      {
        "say": "seojun",
        "text": "서윤아, 푹 쉬어. 친구 배웅은 오빠가 할 테니까 넌 그대로 있어."
      },
      "다 나으면 다시 오기로 하고, 조용히 인사했다."
    ],
    "title": "오늘은 쉬는 것도 훈련"
  },
  "v6_seoyoon_cheek_kiss": {
    "steps": [
      {
        "bg": "school_gate",
        "season": "winter",
        "time": "afternoon"
      },
      {
        "show": "seoyoon",
        "pos": "center",
        "outfit": "winter"
      },
      "좋아한다는 말을 주고받고 교문 쪽으로 걸었다. 서윤이 두 걸음 앞에서 멈췄다.",
      {
        "say": "seoyoon",
        "text": "야. 아까는 너무 빨리 뛰어들었지."
      },
      {
        "say": "me",
        "text": "평소보다 조금 빨랐어."
      },
      {
        "say": "seoyoon",
        "text": "그러니까 이번엔 먼저 물어볼게."
      },
      {
        "say": "seoyoon",
        "text": "볼에… 한 번 해도 돼?",
        "emote": "blush"
      },
      {
        "choice": [
          {
            "text": "응. 나도 좋아.",
            "goto": "yes",
            "preview": "seoyoon"
          },
          {
            "text": "오늘은 인사만 하자.",
            "goto": "no",
            "preview": "seoyoon"
          }
        ]
      },
      {
        "label": "yes"
      },
      {
        "say": "me",
        "text": "응. 이번엔 가만히 있을게."
      },
      "서윤이 내 볼에 짧게 입맞추고 한 발 물러났다. 놀랐는지 제 귀부터 만졌다.",
      {
        "eventCg": "seoyoon_cheek_kiss_v6"
      },
      {
        "say": "seoyoon",
        "text": "이건 기록 재는 거 아니야. 웃지 마.",
        "emote": "blush"
      },
      {
        "jump": "done"
      },
      {
        "label": "no"
      },
      {
        "say": "seoyoon",
        "text": "알았어. 인사도 좋지. 대신 같이 걷는 건 그대로다.",
        "emote": "neutral"
      },
      "서윤은 장난스럽게 손을 내밀었다. 재촉하는 기색은 없었다.",
      {
        "label": "done"
      },
      "교문을 나설 때는 누가 앞서지도 않고 나란히 걸었다."
    ],
    "title": "골인 뒤, 작은 용기"
  },
  "v6_seoyoon_home_visit": {
    "steps": [
      {
        "bg": "house_A",
        "season": "autumn",
        "time": "afternoon"
      },
      {
        "show": "seoyoon",
        "pos": "center",
        "outfit": "spring"
      },
      "약속한 주말, 서윤의 집 앞. 음악 소리를 듣고 있는데 서준 형이 대문을 열었다.",
      {
        "say": "seojun",
        "text": "왔구나. 들어와. 서윤이 아침부터 곡 고르느라 난리였어."
      },
      {
        "say": "seoyoon",
        "text": "야, 잠깐만 있다 가. 오빠가 해설 시작하면 안 끝나."
      },
      {
        "say": "me",
        "text": "곡 하나만 듣고 갈게."
      },
      {},
      {},
      "거실 탁자에 물컵 세 개가 놓였다. 서준 형이 스피커 소리를 낮췄다.",
      {
        "say": "seoyoon",
        "text": "이거. 훈련할 때 듣는 목록. 첫 곡은 내가 골랐어."
      },
      "서윤이 폰 화면을 내 쪽으로 돌렸다. 늘 달리며 듣던 박자가 거실에 잔잔히 흘렀다.",
      {
        "eventCg": "seoyoon_home_visit_v6",
        "eventBg": "seoyoon_home_visit_v6",
        "hideAll": true
      },
      {
        "say": "me",
        "text": "뛰지 않고 들어도 좋은데."
      },
      {
        "say": "seoyoon",
        "text": "…그렇네. 이렇게 듣는 건 처음이야.",
        "emote": "blush"
      },
      "곡이 끝나자 서준 형에게 인사했다. 서윤이 대문까지 배웅해 주었다.",
      {
        "say": "seoyoon",
        "text": "다음엔 네가 한 곡 골라 와."
      },
      "해가 지기 전, 다음에 들려줄 곡을 생각하며 집으로 걸었다."
    ],
    "title": "대문 안에서 들리는 곡"
  },
  "v6_seoyoon_changing_room_door_mixup": {
    "steps": [
      {
        "bg": "hallway1",
        "season": "summer",
        "time": "afternoon"
      },
      {
        "show": "seoyoon",
        "pos": "center",
        "outfit": "track"
      },
      "방과 후, 체육관 공 정리를 도우러 가다가 복도에서 엉뚱한 문 앞에 섰다.",
      "손잡이에 손을 댄 순간, 이미 체육복을 다 갖춰 입은 서윤이 밖으로 나오며 문을 닫았다.",
      "서로 어깨가 부딪쳤다. 둘 다 균형을 잃고 바닥에 주저앉았다가 금세 몸을 일으켰다.",
      {
        "say": "me",
        "text": "미안! 문을 잘못 봤어. 괜찮아?"
      },
      {
        "say": "seoyoon",
        "text": "난 괜찮아. 넌? 앞 좀 보고 다녀."
      },
      "서윤은 닫힌 문 앞에서 머리를 고쳐 묶더니, 내 이마 쪽으로 손을 가볍게 들었다.",
      "콩. 아픈 것보다 놀라서 눈을 감았다.",
      {
        "eventCg": "seoyoon_changing_room_door_mixup_v6"
      },
      {
        "say": "seoyoon",
        "text": "이건 문 확인 안 한 벌. 이제 제대로 찾아가.",
        "emote": "blush"
      },
      {
        "say": "me",
        "text": "응. 진짜 미안. 다음엔 표지판부터 볼게."
      },
      "급히 걸음을 옮기는데, 등 뒤에서 서윤이 큭, 웃었다.",
      {
        "say": "seoyoon",
        "text": "야, 뛰지 말고! 또 부딪칠라."
      },
      "이번에는 안내 화살표를 확인하고 체육관으로 갔다. 공 정리는 서윤과 둘이 금방 끝냈다."
    ],
    "title": "문 앞에서, 콩"
  }
});
