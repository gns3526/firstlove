// 생성물 — game/tools/apply_art_v32.py 가 도착한 v32 그림만 적는다. 직접 고치지 않는다.
// 작업 목록: game/docs/ART_WORKLIST_V32.md
(function () {
  'use strict';
  var A = window.ASSETS, CB = window.CINEMA_BASE_V16 || (window.CINEMA_BASE_V16 = { version: 16, paths: {} });
  var V32 = {
    "bgs": {
      "concert_hall": {
        "winter_night": "assets/3._6af95b/refresh_2026_v32/concert_hall_winter_night.webp",
        "autumn_night": "assets/3._6af95b/refresh_2026_v32/concert_hall_autumn_night.webp"
      },
      "lake": {
        "winter_evening": "assets/3._6af95b/refresh_2026_v32/lake_winter_evening.webp"
      },
      "trip_sea": {
        "summer_evening": "assets/3._6af95b/refresh_2026_v32/trip_sea_summer_evening.webp",
        "summer_night": "assets/3._6af95b/refresh_2026_v32/trip_sea_summer_night.webp",
        "winter_night": "assets/3._6af95b/refresh_2026_v32/trip_sea_winter_night.webp",
        "winter_dawn": "assets/3._6af95b/refresh_2026_v32/trip_sea_winter_dawn.webp"
      },
      "trip_mountain": {
        "summer_night": "assets/3._6af95b/refresh_2026_v32/trip_mountain_summer_night.webp",
        "winter_night": "assets/3._6af95b/refresh_2026_v32/trip_mountain_winter_night.webp"
      },
      "trip_abroad": {
        "summer_night": "assets/3._6af95b/refresh_2026_v32/trip_abroad_summer_night.webp",
        "winter_night": "assets/3._6af95b/refresh_2026_v32/trip_abroad_winter_night.webp"
      },
      "r60bg_car_rear_seat": {
        "night": "assets/6._89afee/refresh_2026_v32/backgrounds/car-rear-seat-night.webp"
      },
      "r60bg_onsen": {
        "autumn": "assets/6._89afee/refresh_2026_v32/backgrounds/onsen-autumn.webp",
        "winter": "assets/6._89afee/refresh_2026_v32/backgrounds/onsen-winter.webp"
      },
      "r60bg_festival_art_booth": {
        "autumn": "assets/6._89afee/refresh_2026_v32/backgrounds/festival-art-booth-autumn.webp"
      },
      "r60bg_subway_car": {
        "winter": "assets/6._89afee/refresh_2026_v32/backgrounds/subway-car-winter.webp"
      },
      "ride": {
        "night": "assets/3._6af95b/refresh_2026_v32/ride_night.webp"
      },
      "theme_park": {
        "night": "assets/3._6af95b/refresh_2026_v32/theme_park_night.webp"
      },
      "art_room": {
        "night": "assets/3._6af95b/refresh_2026_v32/art_room_night.webp"
      },
      "school_gym": {
        "night": "assets/3._6af95b/refresh_2026_v32/school_gym_night.webp"
      },
      "r60bg_art_studio": {
        "night": "assets/3._6af95b/refresh_2026_v32/r60bg_art_studio_night.webp"
      }
    },
    "allSeason": {
      "art_room": "assets/3._6af95b/refresh_2026_v32/art_room_allseason.webp",
      "maid_cafe": "assets/3._6af95b/refresh_2026_v32/maid_cafe_allseason.webp",
      "nurse_room": "assets/3._6af95b/refresh_2026_v32/nurse_room_allseason.webp",
      "bowling": "assets/3._6af95b/refresh_2026_v32/bowling_allseason.webp",
      "char_shop": "assets/3._6af95b/refresh_2026_v32/char_shop_allseason.webp",
      "cinema": "assets/3._6af95b/refresh_2026_v32/cinema_allseason.webp",
      "cvs": "assets/3._6af95b/refresh_2026_v32/cvs_allseason.webp",
      "cvs_nocounter": "assets/3._6af95b/refresh_2026_v32/cvs_nocounter_allseason.webp",
      "pool": "assets/3._6af95b/refresh_2026_v32/pool_allseason.webp",
      "school_gym": "assets/3._6af95b/refresh_2026_v32/school_gym_allseason.webp"
    },
    "characterArt": {
      "seoyoon": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/seoyoon_date_winter_neutral-key.webp"
        },
        "winter_school": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/seoyoon_winter_school_neutral-key.webp"
        }
      },
      "daeun": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/daeun_date_winter_neutral-key.webp"
        }
      },
      "haneul": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/haneul_date_winter_neutral-key.webp"
        }
      },
      "yuri": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/yuri_date_winter_neutral-key.webp"
        }
      },
      "seoha": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/seoha_date_winter_neutral-key.webp"
        }
      },
      "ina": {
        "date_winter": {
          "neutral": "assets/1._c3aeb7/refresh_2026_v32/ina_date_winter_neutral-key.webp"
        }
      }
    },
    "cgs": {
      "daeun_confession": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/daeun_confession_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/daeun_confession_wide.webp"
      },
      "seoyoon_confession": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/seoyoon_confession_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/seoyoon_confession_wide.webp"
      },
      "yuri_confession": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/yuri_confession_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/yuri_confession_wide.webp"
      },
      "seoyoon_ending": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/seoyoon_ending_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/seoyoon_ending_wide.webp"
      },
      "daeun_ending": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/daeun_ending_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/daeun_ending_wide.webp"
      },
      "haneul_ending": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/haneul_ending_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/haneul_ending_wide.webp"
      },
      "yuri_ending": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/yuri_ending_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/yuri_ending_wide.webp"
      },
      "ina_date": {
        "portrait": "assets/6._89afee/refresh_2026_v32/cg/ina_date_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v32/cg/ina_date_wide.webp"
      }
    },
    "keyed": [
      "assets/1._c3aeb7/refresh_2026_v32/seoyoon_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/daeun_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/haneul_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/yuri_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/seoha_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/ina_date_winter_neutral-key.webp",
      "assets/1._c3aeb7/refresh_2026_v32/seoyoon_winter_school_neutral-key.webp"
    ],
    "stills": {
      "seoyoon_xmas_hands": {
        "title": "서윤 — 크리스마스이브, 뜨거운 손과 차가운 손",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_xmas_hands_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_xmas_hands_wide.webp"
      },
      "daeun_xmas_hands": {
        "title": "다은 — 크리스마스이브, 30cm를 먼저 넘은 손",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/daeun_xmas_hands_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/daeun_xmas_hands_wide.webp"
      },
      "haneul_xmas_hands": {
        "title": "하늘 — 크리스마스이브, 앞치마째 달려온 밤",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/haneul_xmas_hands_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/haneul_xmas_hands_wide.webp"
      },
      "yuri_xmas_stage": {
        "title": "유리 — 크리스마스이브, 관객 없는 무대 위의 둘",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/yuri_xmas_stage_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/yuri_xmas_stage_wide.webp"
      },
      "seoha_xmas_hands": {
        "title": "서하 — 크리스마스이브, 김 서린 안경을 쥔 채",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoha_xmas_hands_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoha_xmas_hands_wide.webp"
      },
      "ina_xmas_hands": {
        "title": "이나 — 크리스마스이브, 캐리어를 세워 두고 잡은 손",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/ina_xmas_hands_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/ina_xmas_hands_wide.webp"
      },
      "seoyoon_festival_fireworks": {
        "title": "서윤 — 축제 밤, 뺨에 떨어지는 불꽃빛",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_festival_fireworks_wide.webp"
      },
      "daeun_festival_fireworks": {
        "title": "다은 — 축제 밤, 안경알에 핀 두 개의 불꽃",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/daeun_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/daeun_festival_fireworks_wide.webp"
      },
      "haneul_festival_fireworks": {
        "title": "하늘 — 축제 밤, 눈동자에 핀 금색 불꽃",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/haneul_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/haneul_festival_fireworks_wide.webp"
      },
      "yuri_festival_fireworks": {
        "title": "유리 — 축제 밤, 무대 뒤에서 눈 안에 터진 불꽃",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/yuri_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/yuri_festival_fireworks_wide.webp"
      },
      "seoha_festival_fireworks": {
        "title": "서하 — 축제 밤, 안경을 벗고 보는 불꽃",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoha_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoha_festival_fireworks_wide.webp"
      },
      "ina_festival_fireworks": {
        "title": "이나 — 축제 밤, 하늘이 아니라 나를 보며",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/ina_festival_fireworks_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/ina_festival_fireworks_wide.webp"
      },
      "seoyoon_summer_moonlight": {
        "title": "서윤 — 여름 바다, 달빛에 말하려다 멈춘 입술",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_summer_moonlight_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoyoon_summer_moonlight_wide.webp"
      },
      "daeun_summer_milkyway": {
        "title": "다은 — 여름 산, 별이 쏟아지는 능선",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/daeun_summer_milkyway_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/daeun_summer_milkyway_wide.webp"
      },
      "haneul_summer_starlight": {
        "title": "하늘 — 여름 해외, 도시 불빛 위로 별을 가린 손",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/haneul_summer_starlight_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/haneul_summer_starlight_wide.webp"
      },
      "yuri_summer_moonsong": {
        "title": "유리 — 여름 바다, 바다에게 부르는 노래",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/yuri_summer_moonsong_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/yuri_summer_moonsong_wide.webp"
      },
      "seoha_summer_sunset": {
        "title": "서하 — 여름 바다, 확인표 없이 보는 노을",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoha_summer_sunset_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoha_summer_sunset_wide.webp"
      },
      "ina_summer_arch": {
        "title": "이나 — 여름 유럽, 아치 너머로 흔든 손",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/ina_summer_arch_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/ina_summer_arch_wide.webp"
      },
      "daeun_winter_square": {
        "title": "다은 — 겨울 연수, 눈 내리는 광장의 핫초코",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/daeun_winter_square_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/daeun_winter_square_wide.webp"
      },
      "haneul_winter_scarf": {
        "title": "하늘 — 겨울 바다, 두 바퀴 감아 준 목도리",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/haneul_winter_scarf_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/haneul_winter_scarf_wide.webp"
      },
      "yuri_winter_meteor": {
        "title": "유리 — 겨울 산, 3초 동안의 소원",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/yuri_winter_meteor_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/yuri_winter_meteor_wide.webp"
      },
      "ina_winter_dawn": {
        "title": "이나 — 겨울 바닷가, 흔드는 쪽이 된 새벽",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/ina_winter_dawn_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/ina_winter_dawn_wide.webp"
      },
      "seoha_winter_sunrise": {
        "title": "서하 — 겨울 바다, 네모 칸에 그은 ✓",
        "orientation": "match",
        "portrait": "assets/6._89afee/refresh_2026_v33/stills/seoha_winter_sunrise_portrait.webp",
        "wide": "assets/6._89afee/refresh_2026_v33/stills/seoha_winter_sunrise_wide.webp"
      }
    },
    "stillPlan": [
      {
        "id": "seoyoon_xmas_hands",
        "title": "서윤 — 크리스마스이브, 뜨거운 손과 차가운 손",
        "scene": "xmas_eve_seoyoon",
        "anchor": "손이 잡혔다. 서윤 손은 뛰어와서 뜨거웠고, 내 손은 눈 맞아서 차가웠다.",
        "hold": 4
      },
      {
        "id": "daeun_xmas_hands",
        "title": "다은 — 크리스마스이브, 30cm를 먼저 넘은 손",
        "scene": "xmas_eve_daeun",
        "anchor": "손을 잡았다. 다은의 손도 차가웠다. 두 개의 차가운 손이 서로를 데웠다.",
        "hold": 5
      },
      {
        "id": "haneul_xmas_hands",
        "title": "하늘 — 크리스마스이브, 앞치마째 달려온 밤",
        "scene": "xmas_eve_haneul",
        "anchor": "손을 잡았다. 하늘의 손도 차가웠다. 두 개의 차가운 손이 서로를 데웠다.",
        "hold": 5
      },
      {
        "id": "yuri_xmas_stage",
        "title": "유리 — 크리스마스이브, 관객 없는 무대 위의 둘",
        "scene": "xmas_eve_yuri",
        "anchor": "눈이 우리 둘의 머리 위에 내렸다. 문양 위에는 여전히 쌓이지 않았다.",
        "hold": 4
      },
      {
        "id": "seoha_xmas_hands",
        "title": "서하 — 크리스마스이브, 김 서린 안경을 쥔 채",
        "scene": "xmas_eve_seoha",
        "anchor": "손을 잡았다. 두 개의 차가운 손이 서로를 데웠다.",
        "hold": 5
      },
      {
        "id": "ina_xmas_hands",
        "title": "이나 — 크리스마스이브, 캐리어를 세워 두고 잡은 손",
        "scene": "xmas_eve_ina",
        "anchor": "손을 잡았다. 두 개의 차가운 손이 서로를 데웠다.",
        "hold": 5
      },
      {
        "id": "seoyoon_festival_fireworks",
        "title": "서윤 — 축제 밤, 뺨에 떨어지는 불꽃빛",
        "scene": "festival_seoyoon",
        "anchor": "서윤이 하늘을 봤다. 나는 서윤을 봤다. 불꽃빛이 뺨에 색을 바꿔가며 떨어졌다.",
        "hold": 4
      },
      {
        "id": "daeun_festival_fireworks",
        "title": "다은 — 축제 밤, 안경알에 핀 두 개의 불꽃",
        "scene": "festival_daeun",
        "anchor": "첫 번째 불꽃이 터졌다. 붉은색. 다은의 안경알에 작은 불꽃이 두 개 피었다.",
        "hold": 3
      },
      {
        "id": "haneul_festival_fireworks",
        "title": "하늘 — 축제 밤, 눈동자에 핀 금색 불꽃",
        "scene": "festival_haneul",
        "anchor": "첫 번째 불꽃이 터졌다. 금색. 하늘의 눈에 두 개의 불꽃이 피었다.",
        "hold": 4
      },
      {
        "id": "yuri_festival_fireworks",
        "title": "유리 — 축제 밤, 무대 뒤에서 눈 안에 터진 불꽃",
        "scene": "festival_yuri",
        "anchor": "그러다 하늘 대신 나를 봤다. 불꽃이 눈 안에서 터졌다.",
        "hold": 3
      },
      {
        "id": "seoha_festival_fireworks",
        "title": "서하 — 축제 밤, 안경을 벗고 보는 불꽃",
        "scene": "festival_seoha",
        "anchor": "서하가 안경을 벗었다. 불꽃을 올려다보며, 작게 말했다.",
        "hold": 3
      },
      {
        "id": "ina_festival_fireworks",
        "title": "이나 — 축제 밤, 하늘이 아니라 나를 보며",
        "scene": "festival_ina",
        "anchor": "첫 불꽃이 터졌다. 이나가 반 박자 늦게 '와' 하고 웃었다. 하늘이 아니라 나를 보면서.",
        "hold": 3
      },
      {
        "id": "seoyoon_summer_moonlight",
        "title": "서윤 — 여름 바다, 달빛에 말하려다 멈춘 입술",
        "scene": "summer_trip_seoyoon",
        "anchor": "서윤이 내 쪽으로 몸을 돌렸다. 달빛에 얼굴이 하얬다. 입술이 달싹였다.",
        "hold": 3
      },
      {
        "id": "daeun_summer_milkyway",
        "title": "다은 — 여름 산, 별이 쏟아지는 능선",
        "scene": "summer_trip_daeun",
        "anchor": "별이 쏟아진다는 말을 처음 이해했다. 소리가 날 것 같았다.",
        "hold": 4
      },
      {
        "id": "haneul_summer_starlight",
        "title": "하늘 — 여름 해외, 도시 불빛 위로 별을 가린 손",
        "scene": "summer_trip_haneul",
        "anchor": "난간에 나란히 기댔다. 밤인데도 공기가 따뜻했다. 하늘이 팔을 뻗어 별을 가렸다가 놓았다.",
        "hold": 3
      },
      {
        "id": "yuri_summer_moonsong",
        "title": "유리 — 여름 바다, 바다에게 부르는 노래",
        "scene": "summer_trip_yuri",
        "anchor": "모래사장. 달빛 아래 유리가 파도 끝에 서 있었다. 등이 작았다.",
        "hold": 4
      },
      {
        "id": "seoha_summer_sunset",
        "title": "서하 — 여름 바다, 확인표 없이 보는 노을",
        "scene": "summer_trip_seoha",
        "anchor": "해가 기울었다. 다시 안경을 쓰고 답사표 마지막 칸을 채운 서하가, 그 안경을 벗어 접었다.",
        "hold": 3
      },
      {
        "id": "ina_summer_arch",
        "title": "이나 — 여름 유럽, 아치 너머로 흔든 손",
        "scene": "summer_trip_ina",
        "anchor": "이나가 아치 쪽으로 걸어갔다. 돌길에서 한 번 휘청하고, 혼자 웃고, 돌아서 손을 흔들었다.",
        "hold": 2
      },
      {
        "id": "daeun_winter_square",
        "title": "다은 — 겨울 연수, 눈 내리는 광장의 핫초코",
        "scene": "winter_trip_daeun",
        "anchor": "핫초코 두 잔. 종이컵이 손을 데웠다. 다은이 컵을 두 손으로 감싸고 광장을 봤다.",
        "hold": 3
      },
      {
        "id": "haneul_winter_scarf",
        "title": "하늘 — 겨울 바다, 두 바퀴 감아 준 목도리",
        "scene": "winter_trip_haneul",
        "anchor": "목도리를 잡았다. 그리고 다시 하늘의 목에 둘러 줬다. 두 바퀴. 얼굴이 가까웠다.",
        "hold": 3
      },
      {
        "id": "yuri_winter_meteor",
        "title": "유리 — 겨울 산, 3초 동안의 소원",
        "scene": "winter_trip_yuri",
        "anchor": "별똥별이 하나 떨어졌다. 유리가 눈을 감았다. 3초.",
        "hold": 3
      },
      {
        "id": "ina_winter_dawn",
        "title": "이나 — 겨울 바닷가, 흔드는 쪽이 된 새벽",
        "scene": "winter_trip_ina",
        "anchor": "수평선 끝이 먼저 밝아졌다. 바퀴 소리가 멀어질 때까지 이나는 손을 내리지 않았다. 다른 손엔 열쇠를 쥔 채.",
        "hold": 2
      },
      {
        "id": "seoha_winter_sunrise",
        "title": "서하 — 겨울 바다, 네모 칸에 그은 ✓",
        "scene": "winter_trip_seoha",
        "anchor": "그 아래 줄, '□ 겨울 바다 일출.' 서하가 펜을 꾹 눌러 네모 안에 ✓를 그었다.",
        "hold": 3
      }
    ]
  };
  // 배경 변형: 기존 계절·시간 그림은 그대로 두고 새 키(예: winter_night)만 더한다.
  Object.keys(V32.bgs).forEach(function (loc) {
    var v = A.bgs[loc] || (A.bgs[loc] = {}), add = V32.bgs[loc];
    Object.keys(add).forEach(function (key) { v[key] = add[key]; });
  });
  // 사계절 공용 실내: 봄 그림은 spring 으로 남기고, 다른 계절은 새 기본 그림을 쓴다.
  Object.keys(V32.allSeason).forEach(function (loc) {
    var v = A.bgs[loc]; if (!v) return;
    if (!v.spring && v.default) v.spring = v.default;
    v.default = V32.allSeason[loc];
  });
  // 새 의상(초록 텍스처): 의상 선택 규칙이 등록된 원화부터 쓰므로 여기서 등록만 한다.
  A.characterArt = A.characterArt || {};
  Object.keys(V32.characterArt).forEach(function (who) {
    var bucket = A.characterArt[who] || (A.characterArt[who] = {});
    Object.keys(V32.characterArt[who]).forEach(function (outfit) { bucket[outfit] = V32.characterArt[who][outfit]; });
  });
  CB.paths = CB.paths || {};
  V32.keyed.forEach(function (p) { if (!CB.paths[p]) CB.paths[p] = { path: p, greenKey: true, keyProfile: 'standard' }; });
  // 다시 그린 수집 원화: 새 세로만 왔으면 옛 가로를 쓰지 않는다(옷이 다른 두 장이 섞이지 않게).
  Object.keys(V32.cgs).forEach(function (id) {
    var box = (A.cgs || {})[id] ? A.cgs : (A.eventCgs || (A.eventCgs = {})), old = box[id] || {}, next = {};
    Object.keys(old).forEach(function (k) { if (k !== 'portrait' && k !== 'wide') next[k] = old[k]; });
    var add = V32.cgs[id];
    if (add.portrait) next.portrait = add.portrait; else if (!add.wide && old.portrait) next.portrait = old.portrait;
    if (add.wide) next.wide = add.wide; else if (!add.portrait && old.wide) next.wide = old.wide;
    box[id] = next;
  });
  // 새 스틸컷(v33): 도착한 그림을 등록하고, 장면의 그 문장이 나오는 순간 무대에 띄운다.
  // 문장을 못 찾거나 두 번 이상 나오면 붙이지 않고 G.artV32.errors 에 남긴다(validate.js 가 알린다).
  A.eventCgs = A.eventCgs || {};
  Object.keys(V32.stills).forEach(function (id) { A.eventCgs[id] = V32.stills[id]; });
  var G = window.G, report = { attached: [], waiting: [], errors: [] };
  if (G) G.artV32 = report;
  var scenes = (G && G.scenes) || null;
  if (scenes) V32.stillPlan.forEach(function (row) {
    var sc = scenes[row.scene];
    if (!sc) { report.errors.push(row.id + ': 장면 없음 ' + row.scene); return; }
    var hits = [];
    sc.steps.forEach(function (s, i) {
      var t = typeof s === 'string' ? s : s && typeof s.text === 'string' ? s.text : '';
      if (t.indexOf(row.anchor) >= 0) hits.push(i);
    });
    if (hits.length !== 1) { report.errors.push(row.id + ': ' + row.scene + ' 에서 문장 ' + hits.length + '곳'); return; }
    if (!V32.stills[row.id]) { report.waiting.push(row.id); return; }
    var step = sc.steps[hits[0]];
    if (typeof step === 'string') step = sc.steps[hits[0]] = { text: step };
    if (step.eventCg) { report.errors.push(row.id + ': 이미 삽화가 있는 문장 ' + row.scene + '#' + hits[0]); return; }
    step.eventCg = row.id; step.eventCgHold = row.hold;
    report.attached.push(row.id + '@' + row.scene + '#' + hits[0]);
  });
})();
