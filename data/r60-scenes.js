// REQUESTED60 60편을 본편 달력·루트에 연결한다. 생성물이므로 직접 수정하지 않는다.
(function () {
  'use strict';
  var A = window.ASSETS, CB = window.CINEMA_BASE_V16 || (window.CINEMA_BASE_V16 = { version: 16, paths: {} });
  var BGS = {
    "r60bg_massage_classroom": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp"
    },
    "r60bg_beach_day": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp"
    },
    "r60bg_photo_studio": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp"
    },
    "r60bg_seoha_dressing_room": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp"
    },
    "r60bg_ina_dressing_room": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp"
    },
    "r60bg_hotel_suite_evening": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp"
    },
    "r60bg_spa_reception": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp"
    },
    "r60bg_ina_home_living_evening": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp"
    },
    "r60bg_art_studio": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp"
    },
    "r60bg_cosplay_preparation_day": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp"
    },
    "r60bg_yuri_photo_booth_afternoon": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp"
    },
    "r60bg_lounge_evening": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp"
    },
    "r60bg_perfume_store": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp"
    },
    "r60bg_haneul_home_living_day": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp"
    },
    "r60bg_yoga_studio": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp"
    },
    "r60bg_dance_studio": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp"
    },
    "r60bg_seoha_home_living_evening": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp"
    },
    "r60bg_party_room_closet": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp"
    },
    "r60bg_car_rear_seat": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp"
    },
    "r60bg_cafe_day": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp"
    },
    "r60bg_hotel_corridor": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp"
    },
    "r60bg_fitting_room_corridor": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp"
    },
    "r60bg_festival_art_booth": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp"
    },
    "r60bg_candle_workshop": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp"
    },
    "r60bg_apartment_entrance_night": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp"
    },
    "r60bg_bathroom_exterior": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp"
    },
    "r60bg_onsen": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp"
    },
    "r60bg_pool_changing_corridor": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp"
    },
    "r60bg_beach_cabana": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp"
    },
    "r60bg_city_rain_shelter": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp"
    },
    "r60bg_hotel_suite_night": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp"
    },
    "r60bg_hotel_suite_morning": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp"
    },
    "r60bg_home_sofa_night": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp"
    },
    "r60bg_elevator": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp"
    },
    "r60bg_subway_car": {
      "default": "assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp"
    },
    "r60bg_reading_room_day": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp"
    },
    "r60bg_yuri_cinema_previews": {
      "default": "assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp"
    }
  };
  var ART = {
    "seoha": {
      "r60art_1_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-setup-cinema-v16.webp"
      },
      "r60art_1_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-reaction-cinema-v16.webp"
      },
      "r60art_1_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-resolution-cinema-v16.webp"
      },
      "r60art_2_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-setup-cinema-v16.webp"
      },
      "r60art_2_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-reaction-cinema-v16.webp"
      },
      "r60art_2_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-resolution-cinema-v16.webp"
      },
      "r60art_4_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-setup-cinema-v16.webp"
      },
      "r60art_4_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v17_scene_repair/characters/r60-04-seoha-reaction-left-hand-v17.webp"
      },
      "r60art_4_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-resolution-cinema-v16.webp"
      },
      "r60art_9_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-setup-cinema-v16.webp"
      },
      "r60art_9_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-reaction-cinema-v16.webp"
      },
      "r60art_9_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-resolution-cinema-v16.webp"
      },
      "r60art_14_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-setup-cinema-v16.webp"
      },
      "r60art_14_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-reaction-cinema-v16.webp"
      },
      "r60art_14_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-resolution-cinema-v16.webp"
      },
      "r60art_18_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-setup-cinema-v16.webp"
      },
      "r60art_18_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-reaction-cinema-v16.webp"
      },
      "r60art_18_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-resolution-cinema-v16.webp"
      },
      "r60art_20_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-setup-key.webp"
      },
      "r60art_20_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-reaction-key.webp"
      },
      "r60art_20_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-resolution-key.webp"
      },
      "r60art_28_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-setup-key.webp"
      },
      "r60art_28_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-reaction-key.webp"
      },
      "r60art_28_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-resolution-key.webp"
      },
      "r60art_31_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-setup-cinema-v16.webp"
      },
      "r60art_31_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-reaction-cinema-v16.webp"
      },
      "r60art_31_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-resolution-cinema-v16.webp"
      },
      "r60art_35_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-setup-key.webp"
      },
      "r60art_35_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-reaction-key.webp"
      },
      "r60art_35_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-resolution-key.webp"
      },
      "r60art_37_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-setup-key.webp"
      },
      "r60art_37_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-reaction-key.webp"
      },
      "r60art_37_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-resolution-key.webp"
      },
      "r60art_38_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-setup-key.webp"
      },
      "r60art_38_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-reaction-key.webp"
      },
      "r60art_38_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-resolution-key.webp"
      },
      "r60art_42_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-setup-cinema-v16.webp"
      },
      "r60art_42_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-reaction-cinema-v16.webp"
      },
      "r60art_42_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-resolution-cinema-v16.webp"
      },
      "r60art_43_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-setup-cinema-v16.webp"
      },
      "r60art_43_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-reaction-cinema-v16.webp"
      },
      "r60art_43_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-43-seoha-resolution-key.webp"
      },
      "r60art_49_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-setup-key.webp"
      },
      "r60art_49_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-reaction-key.webp"
      },
      "r60art_49_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-resolution-key.webp"
      },
      "r60art_50_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-setup-key.webp"
      },
      "r60art_50_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-reaction-key.webp"
      },
      "r60art_50_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-resolution-key.webp"
      },
      "r60art_52_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-setup-key.webp"
      },
      "r60art_52_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-reaction-key.webp"
      },
      "r60art_52_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-resolution-key.webp"
      },
      "r60art_60_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-setup-cinema-v16.webp"
      },
      "r60art_60_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-reaction-cinema-v16.webp"
      },
      "r60art_60_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-resolution-cinema-v16.webp"
      },
      "r60art_227_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/seoha-227-setup-key.webp"
      },
      "r60art_227_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/seoha-227-reaction-key.webp"
      },
      "r60art_227_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/seoha-227-resolution-key.webp"
      }
    },
    "yuri": {
      "r60art_3_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-setup-green-cinema-v16.webp"
      },
      "r60art_3_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-reaction-cinema-v16.webp"
      },
      "r60art_3_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-resolution-cinema-v16.webp"
      },
      "r60art_13_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-setup-green-cinema-v16.webp"
      },
      "r60art_13_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-reaction-cinema-v16.webp"
      },
      "r60art_13_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-resolution-cinema-v16.webp"
      },
      "r60art_27_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-setup-cinema-v16.webp"
      },
      "r60art_27_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-reaction-cinema-v16.webp"
      },
      "r60art_27_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-resolution-cinema-v16.webp"
      },
      "r60art_29_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-setup-cinema-v16.webp"
      },
      "r60art_29_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-reaction-cinema-v16.webp"
      },
      "r60art_29_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-resolution-cinema-v16.webp"
      },
      "r60art_58_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-01-cinema-v16.webp"
      },
      "r60art_58_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-03-cinema-v16.webp"
      },
      "r60art_58_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-06-cinema-v16.webp"
      },
      "r60art_59_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-01-cinema-v16.webp"
      },
      "r60art_59_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-04-cinema-v16.webp"
      },
      "r60art_59_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-06-cinema-v16.webp"
      }
    },
    "ina": {
      "r60art_5_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-setup-key.webp"
      },
      "r60art_5_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-reaction-key.webp"
      },
      "r60art_5_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-resolution-key.webp"
      },
      "r60art_6_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-setup-cinema-v16.webp"
      },
      "r60art_6_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-reaction-cinema-v16.webp"
      },
      "r60art_6_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-resolution-cinema-v16.webp"
      },
      "r60art_7_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-setup-cinema-v16.webp"
      },
      "r60art_7_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-reaction-cinema-v16.webp"
      },
      "r60art_7_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-resolution-cinema-v16.webp"
      },
      "r60art_8_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-setup-cinema-v16.webp"
      },
      "r60art_8_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-reaction-cinema-v16.webp"
      },
      "r60art_8_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-resolution-cinema-v16.webp"
      },
      "r60art_12_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-setup-key.webp"
      },
      "r60art_12_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-reaction-key.webp"
      },
      "r60art_12_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-resolution-key.webp"
      },
      "r60art_17_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-setup-key.webp"
      },
      "r60art_17_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-reaction-key.webp"
      },
      "r60art_17_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-resolution-key.webp"
      },
      "r60art_19_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-setup-key.webp"
      },
      "r60art_19_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-reaction-key.webp"
      },
      "r60art_19_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-resolution-key.webp"
      },
      "r60art_22_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-setup-key.webp"
      },
      "r60art_22_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-reaction-key.webp"
      },
      "r60art_22_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-resolution-key.webp"
      },
      "r60art_24_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-setup-key.webp"
      },
      "r60art_24_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-reaction-key.webp"
      },
      "r60art_24_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-resolution-key.webp"
      },
      "r60art_30_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-setup-key.webp"
      },
      "r60art_30_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-reaction-key.webp"
      },
      "r60art_30_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-resolution-key.webp"
      },
      "r60art_32_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-setup-key.webp"
      },
      "r60art_32_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-reaction-key.webp"
      },
      "r60art_32_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-resolution-key.webp"
      },
      "r60art_33_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-setup-key.webp"
      },
      "r60art_33_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-reaction-key.webp"
      },
      "r60art_33_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-33-ina-resolution-cinema-v16.webp"
      },
      "r60art_34_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-setup-cinema-v16.webp"
      },
      "r60art_34_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-reaction-cinema-v16.webp"
      },
      "r60art_34_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-resolution-cinema-v16.webp"
      },
      "r60art_36_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-setup-key.webp"
      },
      "r60art_36_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-reaction-key.webp"
      },
      "r60art_36_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-resolution-key.webp"
      },
      "r60art_47_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-setup-key.webp"
      },
      "r60art_47_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-reaction-key.webp"
      },
      "r60art_47_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-resolution-key.webp"
      },
      "r60art_48_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-setup-cinema-v16.webp"
      },
      "r60art_48_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-48-ina-reaction-key.webp"
      },
      "r60art_48_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-resolution-cinema-v16.webp"
      },
      "r60art_51_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-setup-key.webp"
      },
      "r60art_51_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-reaction-key.webp"
      },
      "r60art_51_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-resolution-key.webp"
      },
      "r60art_53_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-setup-key.webp"
      },
      "r60art_53_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-reaction-key.webp"
      },
      "r60art_53_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-resolution-key.webp"
      },
      "r60art_227_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/ina-227-setup-key.webp"
      },
      "r60art_227_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/ina-227-reaction-key.webp"
      },
      "r60art_227_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v32/characters/ina-227-resolution-key.webp"
      }
    },
    "haneul": {
      "r60art_10_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-setup-green-cinema-v16.webp"
      },
      "r60art_10_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-reaction-cinema-v16.webp"
      },
      "r60art_10_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-resolution-cinema-v16.webp"
      },
      "r60art_11_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-setup-green-cinema-v16.webp"
      },
      "r60art_11_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-reaction-cinema-v16.webp"
      },
      "r60art_11_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-resolution-cinema-v16.webp"
      },
      "r60art_15_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-setup-green-cinema-v16.webp"
      },
      "r60art_15_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-reaction-cinema-v16.webp"
      },
      "r60art_15_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-resolution-cinema-v16.webp"
      },
      "r60art_21_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-setup-cinema-v16.webp"
      },
      "r60art_21_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-reaction-cinema-v16.webp"
      },
      "r60art_21_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-resolution-cinema-v16.webp"
      },
      "r60art_25_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-setup-cinema-v16.webp"
      },
      "r60art_25_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-reaction-cinema-v16.webp"
      },
      "r60art_25_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-resolution-cinema-v16.webp"
      },
      "r60art_39_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-setup-cinema-v16.webp"
      },
      "r60art_39_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-reaction-cinema-v16.webp"
      },
      "r60art_39_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-resolution-cinema-v16.webp"
      },
      "r60art_40_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-setup-cinema-v16.webp"
      },
      "r60art_40_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-reaction-cinema-v16.webp"
      },
      "r60art_40_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-resolution-cinema-v16.webp"
      },
      "r60art_41_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-setup-cinema-v16.webp"
      },
      "r60art_41_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-reaction-cinema-v16.webp"
      },
      "r60art_41_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-resolution-cinema-v16.webp"
      },
      "r60art_54_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-setup-cinema-v16.webp"
      },
      "r60art_54_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-reaction-cinema-v16.webp"
      },
      "r60art_54_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-resolution-cinema-v16.webp"
      }
    },
    "seoyoon": {
      "r60art_16_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-setup-key-cinema-v16.webp"
      },
      "r60art_16_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-reaction-key-cinema-v16.webp"
      },
      "r60art_16_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-resolution-key-cinema-v16.webp"
      },
      "r60art_26_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-setup-cinema-v16.webp"
      },
      "r60art_26_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-reaction-cinema-v16.webp"
      },
      "r60art_26_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-resolution-cinema-v16.webp"
      },
      "r60art_44_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-setup-cinema-v16.webp"
      },
      "r60art_44_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-reaction-cinema-v16.webp"
      },
      "r60art_44_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-resolution-cinema-v16.webp"
      },
      "r60art_45_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-setup-cinema-v16.webp"
      },
      "r60art_45_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-reaction-cinema-v16.webp"
      },
      "r60art_45_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-resolution-cinema-v16.webp"
      },
      "r60art_46_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-setup-cinema-v16.webp"
      },
      "r60art_46_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-reaction-cinema-v16.webp"
      },
      "r60art_46_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-resolution-cinema-v16.webp"
      },
      "r60art_55_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-setup-cinema-v16.webp"
      },
      "r60art_55_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-reaction-cinema-v16.webp"
      },
      "r60art_55_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-resolution-cinema-v16.webp"
      }
    },
    "daeun": {
      "r60art_23_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-setup-cinema-v16.webp"
      },
      "r60art_23_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-reaction-cinema-v16.webp"
      },
      "r60art_23_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-resolution-cinema-v16.webp"
      },
      "r60art_56_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-setup-cinema-v16.webp"
      },
      "r60art_56_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-reaction-cinema-v16.webp"
      },
      "r60art_56_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-resolution-cinema-v16.webp"
      },
      "r60art_57_setup": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-setup-cinema-v16.webp"
      },
      "r60art_57_reaction": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-reaction-cinema-v16.webp"
      },
      "r60art_57_resolution": {
        "neutral": "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-resolution-cinema-v16.webp"
      }
    }
  };
  var CGS = {
    "r60_1": {
      "title": "마사지 연습 상대",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-01-seoha-incident.webp"
    },
    "r60_2": {
      "title": "등에 선크림",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-02-seoha-incident.webp"
    },
    "r60_3": {
      "title": "커플 화보 촬영",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-03-yuri-incident.webp"
    },
    "r60_4": {
      "title": "드레스 지퍼 고장",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-04-seoha-incident.webp"
    },
    "r60_5": {
      "title": "소맷부리의 단추 하나",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-05-ina-incident.webp"
    },
    "r60_6": {
      "title": "가운만 남은 저녁",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-06-ina-incident.webp"
    },
    "r60_7": {
      "title": "예약표의 두 자리",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-07-ina-incident.webp"
    },
    "r60_8": {
      "title": "머리 말려주기",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-08-ina-incident.webp"
    },
    "r60_9": {
      "title": "안내물에 들어갈 한 장",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-09-seoha-incident.webp"
    },
    "r60_10": {
      "title": "코스튬 사이즈 오류",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-10-haneul-incident.webp"
    },
    "r60_11": {
      "title": "사진부스 커플 미션",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-11-haneul-incident.webp"
    },
    "r60_12": {
      "title": "조금 더 오래 있고 싶어",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-12-ina-incident.webp"
    },
    "r60_13": {
      "title": "향수 시향",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-13-yuri-incident.webp"
    },
    "r60_14": {
      "title": "목걸이 채워주기",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-14-seoha-incident.webp"
    },
    "r60_15": {
      "title": "귀걸이 찾아주기",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-15-haneul-incident.webp"
    },
    "r60_16": {
      "title": "커플 요가 체험",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-16-seoyoon-incident.webp"
    },
    "r60_17": {
      "title": "둘이 맞추는 박자",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-17-ina-incident.webp"
    },
    "r60_18": {
      "title": "이마로 재는 열",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-18-seoha-incident.webp"
    },
    "r60_19": {
      "title": "립스틱 번짐",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-19-ina-incident.webp"
    },
    "r60_20": {
      "title": "두 치수 큰 택배",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-incident.webp"
    },
    "r60_20_tryon": {
      "title": "한 번은 입어 봐야지",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-tryon.webp"
    },
    "r60_21": {
      "title": "옷장에 같이 숨기",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-21-haneul-incident.webp"
    },
    "r60_22": {
      "title": "자동차 뒷좌석 물건 찾기",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-22-ina-incident.webp"
    },
    "r60_23": {
      "title": "립밤 공유 논쟁",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-23-daeun-incident.webp"
    },
    "r60_24": {
      "title": "호텔 카드키 하나",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-24-ina-incident.webp"
    },
    "r60_25": {
      "title": "의상 매장 커플 피팅",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-25-haneul-incident.webp"
    },
    "r60_26": {
      "title": "바디페인팅 행사",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-26-seoyoon-incident.webp"
    },
    "r60_27": {
      "title": "향초 만들기 공방",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-27-yuri-incident.webp"
    },
    "r60_28": {
      "title": "조명 버튼이 아니었다",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-28-seoha-incident.webp"
    },
    "r60_29": {
      "title": "커플 게임 벌칙",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-29-yuri-incident.webp"
    },
    "r60_30": {
      "title": "문이 닫히기 전에",
      "portrait": "assets/6._89afee/refresh_2026_v32/special/r60-30-ina-incident.webp"
    },
    "r60_31": {
      "title": "노크를 잊은 밤",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-31-seoha-incident.webp"
    },
    "r60_32": {
      "title": "다음엔 목소리부터",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-32-ina-incident.webp"
    },
    "r60_33": {
      "title": "걸리지 않는 문고리",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-33-ina-incident.webp"
    },
    "r60_34": {
      "title": "연수원 복도에서 마주치다",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-34-ina-incident.webp"
    },
    "r60_35": {
      "title": "문틈으로 건넨 한 벌",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-35-seoha-incident.webp"
    },
    "r60_36": {
      "title": "높이 들어 올린 수건",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-36-ina-incident.webp"
    },
    "r60_37": {
      "title": "한 칸 잘못 읽은 시간표",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-37-seoha-incident.webp"
    },
    "r60_38": {
      "title": "젖은 돌바닥과 붙잡은 팔",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-38-seoha-incident.webp"
    },
    "r60_39": {
      "title": "옆 칸을 착각했다",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-39-haneul-incident.webp"
    },
    "r60_40": {
      "title": "탈의실 앞 장난",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-40-haneul-incident.webp"
    },
    "r60_41": {
      "title": "커튼 너머의 한 벌",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-41-haneul-incident.webp"
    },
    "r60_42": {
      "title": "등 지퍼 올려주기",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-42-seoha-incident.webp"
    },
    "r60_43": {
      "title": "바다 앞에서 바르는 선크림",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-43-seoha-incident.webp"
    },
    "r60_44": {
      "title": "큰 파도와 풀린 머리끈",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-44-seoyoon-incident.webp"
    },
    "r60_45": {
      "title": "빌려 입은 큰 셔츠",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-45-seoyoon-incident.webp"
    },
    "r60_46": {
      "title": "소나기 속 재킷",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-46-seoyoon-incident.webp"
    },
    "r60_47": {
      "title": "수건으로 머리 닦아주기",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-47-ina-incident.webp"
    },
    "r60_48": {
      "title": "복도에서 마주친 한 걸음",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-48-ina-incident.webp"
    },
    "r60_49": {
      "title": "트윈이 아니었던 예약",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-49-seoha-incident.webp"
    },
    "r60_50": {
      "title": "베개로 나눈 경계선",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-50-seoha-incident.webp"
    },
    "r60_51": {
      "title": "담요 끝을 붙잡고",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-51-ina-incident.webp"
    },
    "r60_52": {
      "title": "저린 팔로 맞은 아침",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-52-seoha-incident.webp"
    },
    "r60_53": {
      "title": "영화 보다 무릎에 잠들기",
      "portrait": "assets/6._89afee/refresh_2026_v18_recast/special/r60-53-ina-incident.webp"
    },
    "r60_54": {
      "title": "사람이 몰린 엘리베이터",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-54-haneul-incident.webp"
    },
    "r60_55": {
      "title": "지하철 급정거",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-55-seoyoon-incident.webp"
    },
    "r60_56": {
      "title": "책상 아래에서 이마 쿵",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-56-daeun-incident.webp"
    },
    "r60_57": {
      "title": "입가의 생크림",
      "portrait": "assets/6._89afee/refresh_2026_v17_scene_repair/special/r60-57-daeun-incident-v17.webp"
    },
    "r60_58": {
      "title": "팝콘 위에서 겹친 손",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-58-yuri-incident.webp"
    },
    "r60_59": {
      "title": "너무 좁은 사진 부스",
      "portrait": "assets/6._89afee/refresh_2026_v15_requested60/special/r60-59-yuri-incident.webp"
    },
    "r60_60": {
      "title": "집 앞에서 머뭇거리다 입맞춤",
      "portrait": "assets/6._89afee/refresh_2026_v32/special/r60-60-seoha-incident.webp"
    }
  };
  var KEYED = [
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-setup-green-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v17_scene_repair/characters/r60-04-seoha-reaction-left-hand-v17.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-setup-green-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-setup-green-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-setup-green-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-setup-green-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-setup-key-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-reaction-key-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-resolution-key-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-33-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-43-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-48-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-setup-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-01-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-03-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-06-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-01-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-04-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-06-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-setup-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-reaction-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-resolution-cinema-v16.webp",
    "assets/6._89afee/refresh_2026_v32/characters/seoha-227-setup-key.webp",
    "assets/6._89afee/refresh_2026_v32/characters/seoha-227-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v32/characters/seoha-227-resolution-key.webp",
    "assets/6._89afee/refresh_2026_v32/characters/ina-227-setup-key.webp",
    "assets/6._89afee/refresh_2026_v32/characters/ina-227-reaction-key.webp",
    "assets/6._89afee/refresh_2026_v32/characters/ina-227-resolution-key.webp"
  ];
  Object.keys(BGS).forEach(function (k) { if (!A.bgs[k]) A.bgs[k] = BGS[k]; });
  Object.keys(CGS).forEach(function (k) { if (!A.eventCgs[k]) A.eventCgs[k] = CGS[k]; });
  A.characterArt = A.characterArt || {};
  Object.keys(ART).forEach(function (who) {
    var bucket = A.characterArt[who] || (A.characterArt[who] = {});
    Object.keys(ART[who]).forEach(function (outfit) { bucket[outfit] = ART[who][outfit]; });
  });
  // 그린스크린 원본은 그대로 두고 런타임에서만 키잉한다.
  CB.paths = CB.paths || {};
  KEYED.forEach(function (p) { if (!CB.paths[p]) CB.paths[p] = { path: p, greenKey: true, keyProfile: 'standard' }; });
  registerScenes({
    "r60_1": {
      "title": "마사지 연습 상대",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_massage_classroom",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "반에서 겨우 정한 희망 사항을 채워, 방과 후 신청서를 다시 내러 갔다.",
        "서하는 교무동이 아니라, 보건 선생님께 빌린 빈 교육실에 있었다.",
        {
          "say": "seoha",
          "text": "{N}, 마침 잘 왔다. 종일 앉아 있었더니 어깨가 다 굳었네."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_1_setup"
        },
        {
          "say": "seoha",
          "text": "실은 주말마다 듣는 자격증 수업이 있어. 실습 과제 연습 상대를 못 구했어."
        },
        "신청서를 받아 둔 서하가 가방에서 연습 카드를 꺼내 펼쳤다. 어깨 그림이 그려져 있었다.",
        {
          "say": "seoha",
          "text": "여기, 어깨만 잠깐 빌려줄래? 다섯 번만 해 보면 돼."
        },
        {
          "say": "me",
          "text": "네. 그 정도면 괜찮아요. 어디에 앉으면 될까요?"
        },
        {
          "eventCg": "r60_1",
          "eventBg": "r60_1",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하가 카드 순서대로 옷 위를 천천히 눌렀다. 손끝이 조심스러웠다.",
        {
          "say": "me",
          "text": "…생각보다 시원하네요. 계속하셔도 돼요."
        },
        "귀 뒤에서 숨소리가 들렸다. 어디를 봐야 할지 몰랐다.",
        {
          "bg": "r60bg_massage_classroom",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_1_reaction"
        },
        "손이 멈췄다. 돌아보니 붉어진 얼굴과 눈이 마주쳤다.",
        {
          "say": "seoha",
          "text": "…생각보다 가까워서. 잠깐만."
        },
        {
          "say": "me",
          "text": "아, 아니요. 그, 너무 가까워서… 아니 손이 따뜻해서요."
        },
        {
          "say": "seoha",
          "text": "…지금 뭐라고 했어?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_1_resolution"
        },
        {
          "say": "me",
          "text": "의자를 조금 옮길게요. 천천히 하시면 될 것 같아요."
        },
        "의자가 반 뼘 물러났다. 서하가 힘을 다시 물으며 카드로 돌아갔다.",
        {
          "say": "seoha",
          "text": "이 정도 힘이면 괜찮아? 다음 주에 한 번만 더 부탁할게."
        },
        {
          "say": "me",
          "text": "네. 그땐 제가 캔커피 두 개 사 올게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_2": {
      "title": "등에 선크림",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_beach_day",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "우리 반이 낸 해변 정화 봉사 안이 후보에 올랐다. 방학 중 사전 답사에 학생 대표로 따라나섰다.",
        {
          "say": "seoha",
          "text": "박 선생님이 몸살이셔서 둘이 가게 됐어. 담임 선생님 허락은 받았어."
        },
        {
          "say": "me",
          "text": "네. 친구들 의견을 제가 정리했으니까, 현장도 같이 볼게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_2_setup"
        },
        "답사 기록을 마치고 그늘에 앉자, 서하가 선크림 병을 들고 등 쪽을 가리켰다.",
        {
          "say": "seoha",
          "text": "두 시간은 더 걸어야 하는데, 등까지는 혼자 못 바르겠어. 조금만 부탁해도 될까?"
        },
        {
          "say": "me",
          "text": "아, 네. 제가 할게요."
        },
        {
          "eventCg": "r60_2",
          "eventBg": "r60_2",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "허락을 받고 어깨 위쪽부터 발랐다. 목덜미가 생각보다 가까웠다.",
        {
          "say": "me",
          "text": "차가울 수 있어요. 그러면 바로 말씀해 주세요."
        },
        "선크림이 닿은 순간, 서하의 어깨가 작게 움찔했다.",
        {
          "bg": "r60bg_beach_day",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_2_reaction"
        },
        "서하가 놀란 얼굴로 돌아보다 민망한 웃음을 터뜨렸다. 눈이 마주쳤다.",
        {
          "say": "seoha",
          "text": "앗, 차가워서 그래. 진짜 그것 때문이야. …이거, 기록에서 빼 줄래?"
        },
        {
          "say": "me",
          "text": "무슨 기록이요? 저 아무것도 안 적었는데요."
        },
        {
          "say": "seoha",
          "text": "…넌 그런 거 잘하더라. 모르는 척, 정확하게."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_2_resolution"
        },
        {
          "say": "me",
          "text": "네. 남은 곳은 천천히 바를게요."
        },
        "다 바르자 서하가 병을 닫고 바다 쪽으로 고개를 돌렸다.",
        {
          "say": "seoha",
          "text": "정화 봉사면 아침 시간이 낫겠다. 돌아가서 그 이유도 같이 적자."
        },
        {
          "say": "me",
          "text": "네. 오늘 본 것부터 적을게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_3": {
      "title": "커플 화보 촬영",
      "heroine": "yuri",
      "minAff": 100,
      "steps": [
        {
          "bg": "r60bg_photo_studio",
          "trans": "fade"
        },
        {
          "bg": "r60bg_photo_studio",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_3_setup"
        },
        "서로의 마음을 확인한 날, 그냥 헤어지긴 아깝다며 유리가 나를 사진관으로 끌고 갔다.",
        {
          "say": "yuri",
          "text": "무대에서는 안 떨리는데, 너랑 사진 찍는 건 왜 이러지?"
        },
        {
          "eventCg": "r60_3",
          "eventBg": "r60_3",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "사진사가 조금만 더 가까이 앉아 달라고 했다. 유리가 내 손 위에 조심스레 손을 포갰다.",
        {
          "say": "yuri",
          "text": "이번엔… 나도 눈 안 피할게."
        },
        "서로 고개를 끄덕이고 눈을 감았다. 입술이 살짝 닿는 순간 셔터 소리가 났다.",
        {
          "bg": "r60bg_photo_studio",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_3_reaction"
        },
        "화면에 뜬 사진을 보자 유리가 두 손으로 붉어진 뺨을 감쌌다.",
        {
          "say": "yuri",
          "text": "자, 잠깐! 이렇게 바로 보여 주면 어떡해…!"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_3_resolution"
        },
        "유리는 한참 망설이다 그 사진을 골랐다.",
        {
          "say": "yuri",
          "text": "이건 지우지 마. 오늘의 나는… 진짜 좋아하는 얼굴이니까."
        },
        {
          "say": "me",
          "text": "나도 이 사진이 제일 좋아."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_4": {
      "title": "드레스 지퍼 고장",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "개교기념일 행사 날이었다. 강당 진행은 서하가 맡았다.",
        "식순 자료는 내가 들기로 해서, 시작 전에 준비실로 갔다.",
        {
          "say": "seoha",
          "text": "시작 십 분 전이야. 행사복만 갈아입고 나올 테니 자료 순서만 맞춰 놔 줘."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_4_setup"
        },
        "갈아입고 나온 서하가 문을 반쯤 열었다. 드레스 등 뒤 지퍼가 중간에 멈춰 있었다.",
        {
          "say": "seoha",
          "text": "이거 혼자서는 안 되겠다. {N}, 잠깐만 봐줄 수 있어?"
        },
        {
          "say": "me",
          "text": "네, 볼게요. 그대로 서 계세요."
        },
        {
          "eventCg": "r60_4",
          "eventBg": "r60_4",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하가 가만히 섰다. 걸린 데를 살피는 동안 숨소리가 가까웠다.",
        {
          "say": "me",
          "text": "천을 잡아당기면 상해요. 슬라이더부터 볼게요."
        },
        "천 사이에 실밥이 물려 있었다. 손끝이 자꾸 미끄러졌다.",
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_4_reaction"
        },
        "슬라이더가 걸린 데를 겨우 빠져나왔다. 서하가 참았던 숨을 내쉬었다.",
        {
          "say": "seoha",
          "text": "지금 움직였어. …아, 다행이다."
        },
        "돌아보는 얼굴이 붉었다. 나는 얼른 천장으로 눈을 돌렸다.",
        {
          "say": "seoha",
          "text": "…왜 갑자기 천장을 봐?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_4_resolution"
        },
        {
          "say": "me",
          "text": "처, 천장에 거미줄이 있어서요."
        },
        {
          "say": "me",
          "text": "천장을 보면서도 지퍼는 끝까지 올렸어요. 늦지 않았으니 천천히 가요."
        },
        "옷매무새를 확인한 서하가 이제 출발하자며 웃었다.",
        {
          "say": "seoha",
          "text": "…거미줄은 무대 내려와서 같이 확인하자. 자료 챙겼지?"
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_5": {
      "title": "소맷부리의 단추 하나",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "ina_home_living",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "진로 체험 날 아침. 같은 학교로 가는 길이라 1203호에 들렀다. 이나는 나갈 준비가 한창이었다.",
        {
          "say": "ina",
          "text": "{N}, 잠깐만. 나가려는데 소맷부리 단추가 떨어졌어."
        },
        "현관 신발장 앞에서 이나가 난처하게 웃었다. 출발까지 10분 남아 있었다.",
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_5_setup"
        },
        "소맷부리에서 떨어진 단추가 이나의 손바닥 위에 놓였다.",
        {
          "say": "ina",
          "text": "곧 나가야 하는데, 지금 달 수 있을까? 나 바느질은 영 서툴러."
        },
        {
          "say": "me",
          "text": "반짇고리 있으면 제가 달게요. 소매만 조금 내밀어 주세요."
        },
        {
          "eventCg": "r60_5",
          "eventBg": "r60_5",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "신발장 위에 반짇고리를 열었다. 실이 소맷부리의 단추 구멍을 천천히 오갔다.",
        {
          "say": "me",
          "text": "손목은 그대로 두세요. 거의 다 됐어요."
        },
        "손목이 눈앞에 있었다. 바늘 끝만 보려고 애썼다.",
        {
          "say": "ina",
          "text": "응. 이상하게 나까지 숨을 참게 되네."
        },
        {
          "bg": "ina_home_living",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_5_reaction"
        },
        "이나는 작은 통을 품에 안고 내 손을 보다가, 눈이 마주치자 수줍게 웃었다.",
        {
          "say": "ina",
          "text": "바느질하는 손이 이렇게 진지할 줄은 몰랐네."
        },
        {
          "say": "me",
          "text": "아, 그게… 오늘 단추는 지각하면 안 되니까요."
        },
        {
          "say": "ina",
          "text": "…방금 말끝, 흔들렸는데."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_5_resolution"
        },
        {
          "say": "me",
          "text": "아, 아니에요. 매듭을 세느라 숨을 참아서요."
        },
        "이나는 웃으며 다시 채워진 소맷부리를 살짝 눌러 보았다.",
        {
          "say": "ina",
          "text": "튼튼하네. 고마워. 그럼 이제 출발할까? 오늘은 지각 없이."
        },
        {
          "say": "me",
          "text": "네. …단추까지 준비 끝입니다."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_6": {
      "title": "가운만 남은 저녁",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_lounge_evening",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "연수 때 걷은 질문지 절반이 공항 이야기였다. 학교는 공항 진로 체험을 하룻밤 일정으로 잡았다.",
        "인솔은 담임 선생님이, 안내는 이나가, 질문 정리는 내가 맡았다.",
        {
          "say": "ina",
          "text": "저녁에 내일 순서만 맞춰 두자. 숙소 거실로 와 줄래?"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_6_setup"
        },
        "비에 젖은 옷은 둘 다 세탁에 맡겼다. 이나가 안내장을 다시 읽었다.",
        {
          "say": "ina",
          "text": "세탁물이 다른 방으로 갔대. 오늘 안에는 찾아준다더라."
        },
        {
          "say": "me",
          "text": "그럼 저녁 시간은 조금 뒤로 미룰까요?"
        },
        {
          "eventCg": "r60_6",
          "eventBg": "r60_6",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "가운 깃을 단단히 여민 채 마주 앉았다. 시선은 자꾸 안내장으로 돌아갔다.",
        "룸서비스 저녁이 먼저 왔다. 긴 잔에는 청포도 주스가 담겨 있었다.",
        {
          "say": "me",
          "text": "저, 가운 차림으로 먹는 저녁도 추억으로 남기면 안 될까요?"
        },
        {
          "say": "ina",
          "text": "…뭐든 적어 두는 애다운 말이네."
        },
        {
          "bg": "r60bg_lounge_evening",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_6_reaction"
        },
        "이나가 입을 가렸다. 그래도 웃음이 새어 나왔다.",
        {
          "say": "ina",
          "text": "근사하게 나오려고 했는데. 둘이 이러고 있으니까 웃기네."
        },
        {
          "say": "me",
          "text": "저는 좋은데요. 웃으시는 거, 학교에선 잘 못 봤거든요."
        },
        {
          "say": "ina",
          "text": "…그 말은 안내장에 적지 마. 나만 알게."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_6_resolution"
        },
        "프런트에 다시 전화를 걸고, 거실 소파에 앉아 기다리기로 했다.",
        {
          "say": "me",
          "text": "옷이 돌아올 때까지 따뜻한 차라도 드릴까요?"
        },
        {
          "say": "ina",
          "text": "그래. 내일 순서는 차 마시면서 맞추자. 선생님 오시면 바로 시작하고."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_7": {
      "title": "예약표의 두 자리",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_spa_reception",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "첫 특강 때 좌석벨트 시연을 도운 답례로, 협찬 업체가 이나와 내 몫의 휴식권을 보냈다.",
        {
          "say": "ina",
          "text": "두 장이 한 예약으로 묶여 있대. 접수는 같이 해야 한다네. 동네니까 가 볼래?"
        },
        {
          "say": "me",
          "text": "네. 걸어서 5분이니까 금방이에요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_7_setup"
        },
        "안내 데스크 앞에서 이나가 예약표를 다시 짚어 내려갔다.",
        "종이를 따라가던 손끝이 한 줄에서 멈췄다.",
        {
          "say": "ina",
          "text": "…이상하네. 나는 일반 코스로 신청한 것 같은데."
        },
        {
          "eventCg": "r60_7",
          "eventBg": "r60_7",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "직원이 안내한 방에는 마사지 베드가 나란히 두 개 놓여 있었다.",
        "일상복 그대로인 두 사람이 그 앞에 섰다. 거리가 한 걸음도 안 됐다.",
        {
          "say": "me",
          "text": "베드가… 두 개네요. 커플 코스로 들어간 것 같은데요."
        },
        {
          "bg": "r60bg_spa_reception",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_7_reaction"
        },
        "이나가 예약표와 베드를 번갈아 보다 잠깐 굳었다가, 곧 웃음을 지었다.",
        {
          "say": "ina",
          "text": "탑승권은 두 번 확인하라고 가르치는 사람이, 예약표 한 줄을 넘겼네."
        },
        {
          "say": "me",
          "text": "괜찮아요. 웃으시니까 저도 좀… 아, 아니에요."
        },
        {
          "say": "ina",
          "text": "손님, 방금 방송이 끊겼는데요? 다시 한번 부탁드립니다."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_7_resolution"
        },
        {
          "say": "me",
          "text": "아, 아니요. 예약표 줄이 붙어 있어서… 그 얘기였어요."
        },
        {
          "say": "me",
          "text": "둘 다 편한 코스가 있는지 제가 다시 여쭤볼게요."
        },
        "직원이 시간표를 짚었다. 붙어 있던 두 자리가 떨어진 칸으로 옮겨졌다.",
        {
          "say": "ina",
          "text": "다음엔 끝까지 읽고 확인할게. 오늘 같이 와 줘서 고마워, {N}."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_8": {
      "title": "머리 말려주기",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_ina_home_living_evening",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "진로 특강이 끝나자마자 소나기가 쏟아졌다.",
        "반 친구들 질문지를 윗집 1203호에 전해 주러 올라갔다. 담임 선생님 부탁이었다.",
        {
          "say": "ina",
          "text": "고마워. 강의 자료 옮기다 비를 다 맞았어. 들어와서 질문지는 탁자에 둬."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_8_setup"
        },
        "이나가 헤어드라이어와 작은 수건을 들고 목덜미의 젖은 잔머리를 가리켰다.",
        {
          "say": "ina",
          "text": "자료 상자 나르느라 팔이 후들거려. 뒤쪽만 잠깐 도와줄래?"
        },
        {
          "say": "me",
          "text": "네. 어디까지 말리면 될까요?"
        },
        {
          "eventCg": "r60_8",
          "eventBg": "r60_8",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "이나가 고개를 조금 숙였다. 목덜미 잔머리부터 조심스럽게 바람을 댔다.",
        {
          "say": "me",
          "text": "뜨겁거나 당기면 바로 말씀해 주세요."
        },
        "거리가 한 뼘도 안 됐다. 바람 소리 사이로 숨소리가 들려서 손끝만 봤다.",
        {
          "bg": "r60bg_ina_home_living_evening",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_8_reaction"
        },
        "바람이 간지러웠는지 이나가 어깨를 움츠리며 웃었다.",
        {
          "say": "ina",
          "text": "갑자기 조용해졌네. …왜 말이 없어?"
        },
        {
          "say": "me",
          "text": "아, 아니에요. 그게… 바람 소리만 듣고 있어서요."
        },
        {
          "say": "ina",
          "text": "…나도 할 말을 잊었어."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_8_resolution"
        },
        "드라이어를 끄고, 머리가 다 말랐는지 함께 확인했다.",
        {
          "say": "me",
          "text": "다 마른 것 같아요. 감기 드시면 안 되니까요."
        },
        {
          "say": "ina",
          "text": "고마워, {N}. 질문지는 오늘 밤에 다 읽어 둘게."
        },
        {
          "say": "me",
          "text": "네. 다음 특강 때는 제 질문도 하나 적어 갈게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_9": {
      "title": "안내물에 들어갈 한 장",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_art_studio",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "신청서를 맡기고 나오는데, 서하가 안내 책상에 안내물 시안을 펼쳐 보였다.",
        {
          "say": "seoha",
          "text": "안내하는 사람 그림이 들어갈 칸이야. 사진은 아직 공개 동의를 못 받았어."
        },
        {
          "say": "seoha",
          "text": "미술 시간 스케치가 괜찮다고 들었어. {N}, 이 칸 네가 그려 줄래?"
        },
        {
          "say": "me",
          "text": "네. 다만 사람은 보고 그려야 정확해서, 모델이 한 분 필요해요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_9_setup"
        },
        "그날 저녁, 서하는 근무복이 아닌 외출복 차림으로 미술실에 왔다.",
        {
          "say": "seoha",
          "text": "퇴근 준비를 하다 왔어. 이 옷으로 모델을 해 달라고? 평소랑은 꽤 다른데."
        },
        {
          "say": "me",
          "text": "괜찮아요. 학생들이 말을 걸기 쉬운 쪽이 좋아서, 그 차림이 더 맞아요."
        },
        {
          "eventCg": "r60_9",
          "eventBg": "r60_9",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하가 익숙하게 자세를 잡고 앉자, 스케치북 위에 첫 선이 놓였다.",
        {
          "say": "me",
          "text": "불편하시면 다른 자세로 바꾸셔도 돼요. 금방 끝낼게요."
        },
        {
          "say": "seoha",
          "text": "괜찮아. 안내 책상에 이렇게 앉아 있는 건 익숙하니까."
        },
        {
          "bg": "r60bg_art_studio",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_9_reaction"
        },
        "선을 맞추려고 얼굴을 오래 봤다. 서하가 잠깐 눈을 피했다.",
        {
          "say": "seoha",
          "text": "그렇게 진지하게 보니까 더 쑥스럽잖아."
        },
        {
          "say": "me",
          "text": "죄송해요. 선을 맞추려면 봐야 해서요."
        },
        {
          "say": "seoha",
          "text": "그럼 공평하게, 나도 그리는 사람 얼굴 좀 볼게."
        },
        "서하가 턱을 괴고 나를 똑바로 봤다. 연필 끝이 종이 위에서 헛돌았다.",
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_9_resolution"
        },
        "완성한 장을 건네자 서하가 그림을 받아 들고 긴장을 풀며 웃었다.",
        {
          "say": "me",
          "text": "다 됐어요. 웃으실 때 표정이 제일 마음에 들어서, 그 얼굴로 골랐어요."
        },
        {
          "say": "seoha",
          "text": "안내물에는 이걸 쓰자. 원본은 내가 가져도 될까?"
        },
        {
          "say": "me",
          "text": "네. 내일 담당 선생님께 시안이랑 같이 드릴게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_10": {
      "title": "코스튬 사이즈 오류",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_cosplay_preparation_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_cosplay_preparation_day",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_10_setup"
        },
        {
          "say": "haneul",
          "text": "행사용 재킷이래. 색은 괜찮지?"
        },
        {
          "say": "me",
          "text": "입어 보고 불편하면 바꾸면 되지."
        },
        {
          "eventCg": "r60_10",
          "eventBg": "r60_10",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "밑단을 내리면 소매가 당겼고, 소매를 편 뒤에는 밑단이 다시 올라갔다.",
        {
          "say": "haneul",
          "text": "잠깐만. 이거 나한테 온 사이즈가 맞아?"
        },
        {
          "bg": "r60bg_cosplay_preparation_day",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_10_reaction"
        },
        {
          "say": "haneul",
          "text": "자꾸 옷만 만지게 되네. 신경 쓰여."
        },
        {
          "say": "me",
          "text": "편한 걸로 입자. 아직 시작 전이잖아."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_10_resolution"
        },
        {
          "say": "haneul",
          "text": "응, 큰 걸로 바꿔 달라고 할래. 이제야 숨 돌린다."
        },
        {
          "say": "me",
          "text": "무대보다 사이즈 확인이 먼저였네."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_11": {
      "title": "사진부스 커플 미션",
      "heroine": "haneul",
      "minAff": 100,
      "steps": [
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "fade"
        },
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_11_setup"
        },
        "고백한 날, 그냥 헤어지기 아쉬워 하늘과 사진 부스에 들어갔다. 작은 의자에 나란히 앉으니 서로 웃음이 났다.",
        {
          "say": "haneul",
          "text": "오늘 사진은 꼭 둘 다 잘 나와야 해."
        },
        {
          "eventCg": "r60_11",
          "eventBg": "r60_11",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "화면 속 마지막 하트가 반짝였다. 하늘이 먼저 내 쪽으로 얼굴을 돌렸다.",
        {
          "say": "haneul",
          "text": "포즈만 잡는 거… 조금 아쉽지 않아?"
        },
        {
          "say": "me",
          "text": "괜찮아?"
        },
        "하늘이 작게 고개를 끄덕였다. 눈을 감고 짧게 입을 맞추자 플래시가 터졌다.",
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_11_reaction"
        },
        "둘은 동시에 사진을 보고, 동시에 시선을 피했다. 하늘이 웃음을 참느라 입술을 꾹 눌렀다.",
        {
          "say": "haneul",
          "text": "우리 진짜 똑같이 빨개졌네."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_11_resolution"
        },
        "하늘이 사진 한 장을 내 손에 쥐여 주고, 나머지는 자신의 지갑에 넣었다.",
        {
          "say": "haneul",
          "text": "이건 우리 둘만의 비밀이야."
        },
        {
          "say": "me",
          "text": "약속할게. 다음 사진도 같이 찍자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_12": {
      "title": "조금 더 오래 있고 싶어",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_lounge_evening",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "이나의 근무가 바뀌어 밀린 진로 상담은, 학교 허가를 받아 공항 견학 날로 옮겨졌다.",
        {
          "say": "ina",
          "text": "견학은 끝났고 셔틀은 한 시간 뒤야. 남은 질문지, 여기 라운지에서 마저 보자."
        },
        {
          "say": "me",
          "text": "네. 제가 모아 온 질문지라, 셔틀 오기 전까지 다 정리할 수 있을 것 같아요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_12_setup"
        },
        "라운지의 음악이 잦아들었다. 이나가 레몬에이드 잔을 내려놓을 때도 이야기는 끊이지 않았다.",
        {
          "say": "ina",
          "text": "질문지는 진작 끝났는데. 오늘은 이상하게 얘기가 잘 풀리네."
        },
        {
          "say": "me",
          "text": "저도요. 벌써 시간이 이렇게 됐네요."
        },
        {
          "eventCg": "r60_12",
          "eventBg": "r60_12",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "이나가 한 자리 가까이 옮겨 앉았다. 무릎 위에 두 손을 모으는 동안 목소리가 낮아졌다.",
        {
          "say": "ina",
          "text": "괜히 더 오래 있고 싶네. 아직 못 한 얘기가 많아서."
        },
        {
          "say": "me",
          "text": "저도… 아, 그게, 조금 더 듣고 싶어서요."
        },
        {
          "bg": "r60bg_lounge_evening",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_12_reaction"
        },
        "자기 말을 뒤늦게 들은 사람처럼, 이나의 손이 붉어진 뺨으로 올라갔다.",
        {
          "say": "ina",
          "text": "…지금 너무 솔직했지?"
        },
        {
          "say": "me",
          "text": "아니요. 솔직하게 말해 주셔서 좋았어요."
        },
        "고개를 든 얼굴이 가까웠다. 나는 괜히 질문지만 내려다봤다.",
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_12_resolution"
        },
        "물잔을 두 손으로 감싼 이나가 천천히 웃었다. 가까워진 자리는 그대로였다.",
        {
          "say": "ina",
          "text": "그럼 다음 얘기는 조금 덜 떨면서 할게. 다음 상담도 밀릴지 모르니까."
        },
        {
          "say": "me",
          "text": "급하게 말하지 않아도 괜찮아요. 저는 기다릴 수 있어요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_13": {
      "title": "향수 시향",
      "heroine": "yuri",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_perfume_store",
          "trans": "fade"
        },
        {
          "bg": "r60bg_perfume_store",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_13_setup"
        },
        {
          "say": "yuri",
          "text": "종이에서는 좋은데, 손목에서는 향이 다르대."
        },
        {
          "say": "me",
          "text": "그럼 둘 다 비교해 보자."
        },
        {
          "eventCg": "r60_13",
          "eventBg": "r60_13",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "유리가 향을 맡아 보라며 손목을 살짝 돌렸다. 내가 다가서자 말끝이 멎었다.",
        {
          "say": "yuri",
          "text": "아… 생각보다 가깝네."
        },
        {
          "bg": "r60bg_perfume_store",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_13_reaction"
        },
        {
          "say": "yuri",
          "text": "싫다는 건 아닌데, 이렇게 조용해질 줄은 몰랐어."
        },
        {
          "say": "me",
          "text": "조금 떨어져서도 향은 맡을 수 있어."
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_13_resolution"
        },
        {
          "say": "yuri",
          "text": "이 향으로 할래!! 이제 기억하기도 쉽겠다, 헤헤."
        },
        {
          "say": "me",
          "text": "향보다 네 표정이 먼저 떠오를 것 같은데."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_14": {
      "title": "목걸이 채워주기",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "학교 개방 행사가 끝나고, 안내 봉사를 한 우리 반은 안내판을 걷었다.",
        {
          "say": "seoha",
          "text": "받침대는 무거우니까 나랑 같이 옮기자. 학생들끼리 들면 안 돼."
        },
        {
          "say": "seoha",
          "text": "이따 기록용 사진도 찍어야 하는데, 드는 사이에 목걸이가 풀렸나 봐."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_14_setup"
        },
        "창고에서 돌아온 준비실 거울 앞, 서하가 손바닥 위의 작은 잠금장치를 보여 주었다.",
        {
          "say": "seoha",
          "text": "거울로 봐도 고리가 안 보이네. 뒤에서 채워 줄래?"
        },
        {
          "say": "me",
          "text": "네. 제가 해 볼게요."
        },
        {
          "eventCg": "r60_14",
          "eventBg": "r60_14",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하가 머리카락을 한쪽으로 모아 쥐었다.",
        {
          "say": "me",
          "text": "머, 머리는 그대로 잡고 계셔 주세요."
        },
        "숨소리가 들릴 만큼 가까웠다. 작은 고리 말고는 아무 데도 보지 못했다.",
        "손끝이 두 번 미끄러진 뒤에야 작은 고리가 걸렸다.",
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_14_reaction"
        },
        "목걸이가 닿자 서하가 어깨의 힘을 풀고 수줍게 돌아봤다.",
        {
          "say": "seoha",
          "text": "고마워. …이렇게 가까이 있으니까 좀 이상하네."
        },
        {
          "say": "me",
          "text": "…귀가 빨개지셨어요."
        },
        {
          "say": "seoha",
          "text": "…그런 건 확인 안 해도 돼."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_14_resolution"
        },
        "서하가 펜던트를 가볍게 만져 보고 나를 돌아봤다.",
        {
          "say": "seoha",
          "text": "사진에 같이 찍힐 텐데, 이상하진 않아?"
        },
        {
          "say": "me",
          "text": "잘 잠겼어요. 오늘 옷이랑 잘 어울리세요."
        },
        {
          "say": "seoha",
          "text": "그럼 됐다. {N}도 같이 서자. 안내 봉사도 기록에 남아야지."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_15": {
      "title": "귀걸이 찾아주기",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_haneul_home_living_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_haneul_home_living_day",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_15_setup"
        },
        {
          "say": "haneul",
          "text": "귀걸이가 하나 없어. 방금 여기 앉았을 때까진 있었는데."
        },
        {
          "say": "me",
          "text": "쿠션 틈부터 볼까?"
        },
        {
          "eventCg": "r60_15",
          "eventBg": "r60_15",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "같은 틈으로 뻗은 팔이 겹쳤다. 더 움직이려다 둘 다 그대로 멈췄다.",
        {
          "say": "me",
          "text": "잠깐, 내가 먼저 뺄게."
        },
        {
          "bg": "r60bg_haneul_home_living_day",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_15_reaction"
        },
        {
          "say": "haneul",
          "text": "귀걸이보다 우리가 먼저 끼일 뻔했네."
        },
        {
          "say": "me",
          "text": "하나씩 찾으면 되는데 너무 급했어."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_15_resolution"
        },
        {
          "say": "haneul",
          "text": "찾았다. 두 개 다 있네. 고마워."
        },
        {
          "say": "me",
          "text": "다음엔 쿠션을 먼저 들어 보자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_16": {
      "title": "커플 요가 체험",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_yoga_studio",
          "trans": "fade"
        },
        {
          "bg": "r60bg_yoga_studio",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_16_setup"
        },
        "서윤이 안내 그림을 들여다봤다. 혼자 하는 스트레칭 수업인 줄 알았는데, 매트마다 두 사람씩 마주 앉아 있었다.",
        {
          "say": "seoyoon",
          "text": "야. 이거 혼자 하는 거 아니잖아."
        },
        {
          "say": "me",
          "text": "안내를 끝까지 읽을 걸 그랬네. 그냥 갈까?"
        },
        {
          "say": "seoyoon",
          "text": "왜 가. 왔으면 해야지. 손 줘."
        },
        {
          "eventCg": "r60_16",
          "eventBg": "r60_16",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "손을 맞잡고 천천히 몸을 기울였다. 한쪽이 조금만 움직여도 다른 쪽 중심이 따라 흔들렸다.",
        {
          "say": "seoyoon",
          "text": "힘 빼. 내가 맞출게."
        },
        {
          "say": "me",
          "text": "네가 기울이는 만큼만 버텨 볼게. 하나, 둘."
        },
        {
          "bg": "r60bg_yoga_studio",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_16_reaction"
        },
        "균형이 풀리는 순간 서윤이 급히 무릎을 굽혔다. 둘 다 매트에 발을 붙이고서야 숨을 내쉬었다.",
        {
          "say": "seoyoon",
          "text": "야, 방금 넘어갈 뻔했잖아."
        },
        {
          "say": "me",
          "text": "미안, 내가 먼저 힘을 줬어. 발은 괜찮아?"
        },
        {
          "say": "seoyoon",
          "text": "…괜찮아. 손이나 다시 줘."
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_16_resolution"
        },
        "서윤이 다시 손을 내밀며 박자를 셌다. 이번에는 힘을 겨루지 않고 서로 움직이는 속도를 따랐다.",
        {
          "say": "seoyoon",
          "text": "하나, 둘. …됐다. 아까보다 낫네."
        },
        {
          "say": "me",
          "text": "이번엔 안 흔들렸어. 네 박자가 알아듣기 쉬워."
        },
        {
          "say": "seoyoon",
          "text": "당연하지. 출발 신호는 내 전문이야."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_17": {
      "title": "둘이 맞추는 박자",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_dance_studio",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "진로 체험 안내 동작을 다시 짜게 됐다며, 담당 선생님이 나를 연습실로 보내셨다.",
        {
          "say": "ina",
          "text": "{N}, 잘 왔어. 지난 진로 체험 때 뒷줄 친구들이 앞이 안 보였대."
        },
        {
          "say": "ina",
          "text": "그 안내 동작에 박자를 붙여 다시 짜는 중이야. 짝이 하나 필요해."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_17_setup"
        },
        {
          "say": "me",
          "text": "저라도 괜찮으면 맞춰 볼게요."
        },
        "이나가 연습실 바닥의 시작점을 짚고 박자를 세었다.",
        {
          "say": "ina",
          "text": "이번엔 기본 자세부터. 하나, 둘… 손은 여기."
        },
        {
          "say": "me",
          "text": "제가 발을 밟으면 바로 말씀해 주세요."
        },
        {
          "eventCg": "r60_17",
          "eventBg": "r60_17",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "손을 맞잡고 어깨에 손을 얹자, 세던 숫자가 동시에 끊겼다.",
        {
          "say": "me",
          "text": "이 정도 거리면 괜찮을까요?"
        },
        {
          "say": "ina",
          "text": "응. …그런데 다음 숫자가 뭐였지?"
        },
        {
          "bg": "r60bg_dance_studio",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_17_reaction"
        },
        "이나가 시선을 피했다. 박자를 세던 손가락만 숫자 도중에 멈춰 있었다.",
        {
          "say": "ina",
          "text": "방금까지는 다 외우고 있었는데."
        },
        {
          "say": "me",
          "text": "저도요. …하나 다음이 뭐였죠?"
        },
        {
          "say": "ina",
          "text": "둘. …둘 다 둘을 까먹은 건 비밀로 하자."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_17_resolution"
        },
        {
          "say": "me",
          "text": "죄송해요. 처음부터 복습해야겠네요."
        },
        "이나가 웃으며 손가락 하나를 세웠다. 이번에는 서로를 보면서 시작했다.",
        {
          "say": "ina",
          "text": "복습은 나도. 다시 하나부터, 이번엔 같이 세자."
        },
        {
          "say": "me",
          "text": "하나, 둘. 이제 맞네요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_18": {
      "title": "이마로 재는 열",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_seoha_home_living_evening",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "학교 행사가 끝난 저녁. 창고가 닫혀서, 걷어 온 봉사 명찰 상자를 서하의 집으로 옮겼다.",
        "서하는 종일 운동장에 서 있다가 막 들어온 참이었다.",
        {
          "say": "seoha",
          "text": "{N}, 고마워. 상자는 거기 둬. 수량은 내일 내가 셀게."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_18_setup"
        },
        "상자를 내려놓는 사이, 서하가 제 이마를 짚더니 미간을 좁혔다.",
        {
          "say": "seoha",
          "text": "…나 좀 뜨거운 것 같지 않아? 잠깐 봐 줄래, 내 손으론 모르겠어."
        },
        {
          "say": "me",
          "text": "네, 확인해 볼게요. 가까이서 봐도 괜찮을까요?"
        },
        {
          "say": "seoha",
          "text": "응, 괜찮아. 네가 봐 줘."
        },
        {
          "eventCg": "r60_18",
          "eventBg": "r60_18",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        {
          "say": "me",
          "text": "그럼 이마를 잠깐 대 봐도 될까요?"
        },
        "서하가 눈을 감고 고개를 조금 들었다. 손이 아니라 이마였다.",
        "따뜻했다. 숨이 닿는 자리에서, 열이 어느 쪽 것인지 알 수 없었다.",
        {
          "bg": "r60bg_seoha_home_living_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_18_reaction"
        },
        "서하가 눈을 크게 떴다. 그제야 거리가 보인 듯 얼굴이 붉어졌다.",
        {
          "say": "seoha",
          "text": "…이러면 열이 더 오르겠는데."
        },
        {
          "say": "me",
          "text": "아, 아니요. 손보다 이마가 정확하다고 해서요. 그, 그래서요."
        },
        {
          "say": "seoha",
          "text": "변명이 길다, {N}."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_18_resolution"
        },
        "서하가 약상자에서 체온계를 찾아 들고, 물 한 컵을 내 쪽으로 밀어 주었다.",
        {
          "say": "seoha",
          "text": "체온계가 여기 있었네. 처음부터 이걸로 잴걸. 일단 앉아서 마시자."
        },
        {
          "say": "me",
          "text": "네. 재 보시고, 열 있으면 내일은 꼭 쉬세요."
        },
        "물을 다 마셨는데도 이마가 좀처럼 식지 않았다.",
        {
          "hideAll": true
        }
      ]
    },
    "r60_19": {
      "title": "립스틱 번짐",
      "heroine": "ina",
      "minAff": 100,
      "steps": [
        {
          "bg": "r60bg_lounge_evening",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "이나의 거실. 1년째 다 풀지 못한 상자들이, 오늘은 한쪽에 가지런히 쌓여 있었다.",
        {
          "say": "ina",
          "text": "상자, 이번 주말에 다 풀 거야. 이제 떠날 준비 안 해도 되니까."
        },
        "차를 내려놓던 이나가 내 얼굴을 보더니, 입을 틀어막았다.",
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_19_setup"
        },
        "문 앞에서 나눈 인사가 그대로 얼굴에 남은 모양이었다. 이나가 웃음을 참았다.",
        {
          "say": "ina",
          "text": "잠깐. 가기 전에 거울 한번 볼래?"
        },
        {
          "say": "me",
          "text": "…내 얼굴에 뭐 묻었어?"
        },
        {
          "eventCg": "r60_19",
          "eventBg": "r60_19",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "이나가 내민 손거울에 장밋빛 자국이 비쳤다. 뺨 한가운데, 선명하게.",
        {
          "say": "ina",
          "text": "내 립스틱… 생각보다 잘 남네. 이거 지속력 12시간짜리야."
        },
        {
          "say": "me",
          "text": "엄마가 보면 끝이야."
        },
        {
          "bg": "r60bg_lounge_evening",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_19_reaction"
        },
        "휴지를 건네는 손이 가까웠다. 거울과 그 손 사이에서 눈이 갈팡질팡했다.",
        {
          "say": "ina",
          "text": "조금만 오른쪽. 아니, 내 기준 오른쪽!"
        },
        {
          "say": "me",
          "text": "거울을 봐야 하는데 자꾸… 아니, 방향이 반대라서 그래."
        },
        "말끝을 알아챈 이나가 고개를 돌렸다. 귀가 내 얼굴보다 더 붉었다.",
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_19_resolution"
        },
        "자국이 지워진 걸 확인한 이나가 휴지를 받아 접었다.",
        {
          "say": "ina",
          "text": "됐어. 이번엔 깨끗해. …아마도."
        },
        {
          "say": "me",
          "text": "아마도는 뭐야?"
        },
        {
          "say": "ina",
          "text": "어머님이면 벌써 알고 계실걸. 발렌타인에 창문으로 다 보셨잖아."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_20": {
      "title": "두 치수 큰 택배",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_seoha_home_living_evening",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "행사 안내 조끼가 학교가 아니라 서하의 집으로 배송됐다고 했다.",
        {
          "say": "seoha",
          "text": "{N}, 주말엔 창고가 닫혀서 우리 집으로 받았어. 무거운 건 내가 들게."
        },
        {
          "say": "me",
          "text": "네. 월요일 아침에 반별로 나눠야 하니까 수량표만 맞춰 볼게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_20_setup"
        },
        "조끼 상자 옆에 다른 택배가 하나 더 있었다. 서하가 무릎에 올리고 습자지를 걷었다.",
        {
          "say": "seoha",
          "text": "이건 학교 물건 아니야. 같이 시킨 김에 집에서 편하게 입을 걸 하나 골랐어."
        },
        {
          "say": "me",
          "text": "색은 고르신 대로 온 것 같은데요?"
        },
        {
          "eventCg": "r60_20",
          "eventBg": "r60_20",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "분홍 체크 상의를 펼치자 소매가 한 뼘 더 늘어졌다. 서하가 주문 내역과 번갈아 보았다.",
        {
          "say": "seoha",
          "text": "내가 고른 거랑 치수가 두 칸은 다른데?"
        },
        {
          "say": "me",
          "text": "이건… 소매 끝에서 손부터 찾아야겠는데요."
        },
        {
          "bg": "r60bg_seoha_home_living_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_20_reaction"
        },
        "서하가 상의를 몸에 대 보았다. 소매가 무릎 위로 한참 늘어졌다.",
        "멋쩍은 웃음과 함께 머리카락이 흘러내렸다. 눈 둘 곳을 몰랐다.",
        {
          "say": "me",
          "text": "적어도 손은 따뜻하겠네요. …그, 잘 어울리셔서. 아니, 소매가요."
        },
        {
          "say": "seoha",
          "text": "…소매가 잘 어울린다고? 못 들은 걸로 해 줄게."
        },
        "서하가 긴 소매를 보다가 웃으며 자리에서 일어났다.",
        "이왕 왔으니 한 번은 입어 봐야겠다는 말에, 나는 거실에서 기다렸다.",
        {
          "eventCg": "r60_20_tryon",
          "eventBg": "r60_20_tryon",
          "hideAll": true
        },
        "잠시 뒤 서하가 분홍 체크 잠옷을 입고 돌아왔다. 손이 소매 속으로 쏙 들어가 있었다.",
        {
          "say": "seoha",
          "text": "어때? 손을 찾으려면 구조대부터 불러야겠지?"
        },
        {
          "say": "me",
          "text": "웃으면 안 되는데… 그래도 잘 어울려요."
        },
        {
          "say": "seoha",
          "text": "네가 웃으니까 나도 못 참겠어. 치수만 맞았으면 좋았을 텐데."
        },
        "함께 웃고 나서 서하는 다시 평소 옷으로 갈아입었다. 이번에는 입어 본 크기를 적어 교환을 신청하기로 했다.",
        {
          "bg": "r60bg_seoha_home_living_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_20_resolution"
        },
        "서하가 택배 상자에 교환 용지를 붙였다. 치수 칸은 두 번 확인했다.",
        {
          "say": "seoha",
          "text": "조끼 상자는 월요일 아침에 내가 옮길게. 너는 반별 수량표만 챙겨 와."
        },
        {
          "say": "seoha",
          "text": "이건 다음에 맞는 치수로 입고 보여 줄게."
        },
        {
          "say": "me",
          "text": "…네. 그때도 오늘처럼 웃으시면 좋겠어요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_21": {
      "title": "옷장에 같이 숨기",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_party_room_closet",
          "trans": "fade"
        },
        {
          "bg": "r60bg_party_room_closet",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_21_setup"
        },
        {
          "say": "haneul",
          "text": "생일 주인공 오기 전에 이것만 걸면 돼."
        },
        {
          "say": "me",
          "text": "문 앞에 발소리 들리는 것 같은데."
        },
        {
          "eventCg": "r60_21",
          "eventBg": "r60_21",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "우리는 급히 옷장 안으로 몸을 피했다. 리본이 바스락거릴까 손을 멈췄다.",
        {
          "say": "me",
          "text": "쉿… 아직 눈치 못 챘어."
        },
        {
          "bg": "r60bg_party_room_closet",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_21_reaction"
        },
        {
          "say": "haneul",
          "text": "숨소리까지 들리는 것 같아."
        },
        {
          "say": "me",
          "text": "조금만 기다리자. 발소리 멀어졌어."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_21_resolution"
        },
        {
          "say": "haneul",
          "text": "이제 나가자. 파티 준비가 제일 스릴 있었네."
        },
        {
          "say": "me",
          "text": "다음엔 망 보는 사람부터 정하자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_22": {
      "title": "자동차 뒷좌석 물건 찾기",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_car_rear_seat",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "진로 상담 모임이 끝난 밤, 이나가 가져온 자료 상자를 주차장까지 옮겼다.",
        {
          "say": "ina",
          "text": "비행 근무가 바뀌어서 오늘 밤밖에 시간이 없어. 남아 줘서 고마워, {N}."
        },
        {
          "say": "me",
          "text": "정리 당번이라 어차피 남아 있었어요. 상자는 뒷좌석에 실을게요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_22_setup"
        },
        "마지막 상자를 밀어 넣다가, 이나의 휴대폰이 앞좌석 아래로 미끄러졌다.",
        {
          "say": "ina",
          "text": "안내 말씀 드립니다. 휴대폰이 좌석 아래로 이륙했습니다. …손전등 좀 비춰 줄래?"
        },
        {
          "say": "me",
          "text": "보이네요. 제가 닿을 것 같아요."
        },
        {
          "eventCg": "r60_22",
          "eventBg": "r60_22",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "같은 순간 팔을 넣는 바람에, 휴대폰보다 서로의 손등에 먼저 닿았다.",
        {
          "say": "ina",
          "text": "앗, 그건 내 손인데."
        },
        {
          "say": "me",
          "text": "죄, 죄송해요. 둘이 동시에 들어갔네요."
        },
        {
          "bg": "r60bg_car_rear_seat",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_22_reaction"
        },
        "고개를 들려던 이나가 멈췄다. 좁은 뒷좌석에서 숨소리가 가까웠다.",
        {
          "say": "ina",
          "text": "잠깐만. 내 팔부터 뺄게."
        },
        {
          "say": "me",
          "text": "네… 저는 불만 비출게요."
        },
        {
          "say": "ina",
          "text": "…그런데 손전등이 자꾸 흔들리는데."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_22_resolution"
        },
        {
          "say": "me",
          "text": "그, 그게요. …제 손이 아직 놀란 것 같아서요."
        },
        "이나가 휴대폰을 꺼내 들고 먼지를 털며 웃었다.",
        {
          "say": "ina",
          "text": "찾았다! 다음엔 한 명씩 움직이자."
        },
        {
          "say": "me",
          "text": "역할 분담이 이렇게 중요한 거였네요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_23": {
      "title": "립밤 공유 논쟁",
      "heroine": "daeun",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_cafe_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_23_setup"
        },
        "다은이 가방에서 립밤을 꺼냈다. 별생각 없이 내민 손이었다.",
        {
          "say": "daeun",
          "text": "…입술 좀 텄네. 립밤 있는데."
        },
        {
          "say": "me",
          "text": "고마워. 잠깐만 빌릴게."
        },
        {
          "eventCg": "r60_23",
          "eventBg": "r60_23",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "뚜껑을 여는 순간, 다은이 립밤을 도로 움켜쥐었다. 둘 사이의 작은 물건이 갑자기 어색해졌다.",
        {
          "say": "daeun",
          "text": "잠깐… 이거, 내가 쓰던 거였어."
        },
        {
          "say": "me",
          "text": "아. …그렇네. 그건 생각 못 했다."
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_23_reaction"
        },
        "다은이 눈을 피하며 뚜껑을 다시 끼웠다. 나도 괜히 찻잔 손잡이만 만지작거렸다.",
        {
          "say": "daeun",
          "text": "…괜히 의식하게 되잖아. 잠깐, 뚜껑부터."
        },
        {
          "say": "me",
          "text": "내가 먼저 확인했어야 했는데. 차부터 한 모금 마실까?"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_23_resolution"
        },
        "가방을 뒤적이던 다은이 새 립밤 하나를 찾아 건넸다. 우습게 길어진 망설임은 작은 선물로 끝났다.",
        {
          "say": "daeun",
          "text": "…새것도 하나 있어. 이건 편하게 써."
        },
        {
          "say": "me",
          "text": "이건 잘 쓸게. 다음엔 내가 하나 사 줄게."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_24": {
      "title": "호텔 카드키 하나",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_corridor",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "학교가 신청한 진로 박람회가 호텔 컨벤션 홀에서 열렸다. 나는 학생 대표로 따라왔다.",
        "이나는 초청 강사로 동행했고, 배부 자료는 보관 객실에 넣어 두었다.",
        {
          "say": "ina",
          "text": "{N}, 보관 객실 카드키는 두 장이야. 한 장은 네가 들고 있어."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_24_setup"
        },
        "저녁 설명회를 앞두고, 우리 부스로 이나가 쟁반을 든 채 뛰어왔다.",
        {
          "say": "ina",
          "text": "간식 쟁반 받는 사이에 보관 객실 문이 닫혔어. 카드키는 안에 두고."
        },
        {
          "say": "me",
          "text": "잠깐만요. 제 쪽 한 장이 있어요. 같이 가요."
        },
        {
          "eventCg": "r60_24",
          "eventBg": "r60_24",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "보관 객실 앞. 쟁반을 받쳐 주고 카드키를 건네다 손끝이 살짝 닿았다.",
        {
          "say": "me",
          "text": "여기요. …쟁반도 같이 들게요."
        },
        {
          "say": "ina",
          "text": "고마워. 아슬아슬하게 한 가지씩 놓치네."
        },
        "닿았던 손끝이 이상하게 오래 남아서, 시선을 복도 끝에 두었다.",
        {
          "bg": "r60bg_hotel_corridor",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_24_reaction"
        },
        "이나가 쟁반을 안은 채 아까 잠겼던 문을 흘끗 보았다.",
        {
          "say": "ina",
          "text": "문 잠기는 소리가 그렇게 클 줄은 몰랐어."
        },
        {
          "say": "me",
          "text": "같이 뛰어오느라… 아, 숨이 좀 찼네요."
        },
        {
          "say": "ina",
          "text": "…나보다 네가 더 급했네."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_24_resolution"
        },
        "쟁반을 내려놓은 이나가 카드키부터 확인했다.",
        {
          "say": "ina",
          "text": "다음에는 주머니 확인, 그다음 문 열기."
        },
        {
          "say": "me",
          "text": "그 순서, 저도 기억할게요."
        },
        {
          "say": "ina",
          "text": "남은 한 장은 계속 네가 갖고 있어. 저녁 배부도 남았으니까."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_25": {
      "title": "의상 매장 커플 피팅",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "fade"
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_25_setup"
        },
        {
          "say": "haneul",
          "text": "직원분이 이 조합을 한번 입어 보래."
        },
        {
          "say": "me",
          "text": "나한테도 같은 무늬를 주셨어."
        },
        {
          "eventCg": "r60_25",
          "eventBg": "r60_25",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "나란히 내민 소매의 체크무늬가 똑같았다. 하늘이 뒤늦게 웃음을 삼켰다.",
        {
          "say": "haneul",
          "text": "이거… 커플 옷이었구나."
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_25_reaction"
        },
        {
          "say": "haneul",
          "text": "서로 평가해 보라니까 더 말을 못 하겠네."
        },
        {
          "say": "me",
          "text": "잘 어울려. 그건 바로 말할 수 있어."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_25_resolution"
        },
        {
          "say": "haneul",
          "text": "그럼 나도 말할게. 너도 잘 어울려."
        },
        {
          "say": "me",
          "text": "이제 직원분 오해는 더 커지겠다."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_26": {
      "title": "바디페인팅 행사",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_festival_art_booth",
          "trans": "fade"
        },
        {
          "bg": "r60bg_festival_art_booth",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_26_setup"
        },
        "동네 가을 행사의 그림 체험 부스. 서윤이 별 모양 도안을 골라 소매를 걷었다.",
        {
          "say": "seoyoon",
          "text": "별 하나면 금방 끝나지? 여기. 네가 그려."
        },
        {
          "say": "me",
          "text": "팔에 작은 별 하나. 움직이면 꼬리가 생길지도 몰라."
        },
        {
          "eventCg": "r60_26",
          "eventBg": "r60_26",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "노란 물감을 묻힌 붓이 팔에 닿자 서윤의 어깨가 움찔했다. 선 하나를 그을 때마다 참던 웃음이 새어 나왔다.",
        {
          "say": "seoyoon",
          "text": "야, 간지러워! 붓 끝 좀 살살…!"
        },
        {
          "say": "me",
          "text": "간지러웠구나. 붓은 잠깐 떼고 있을게."
        },
        {
          "bg": "r60bg_festival_art_booth",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_26_reaction"
        },
        "서윤이 입술을 꾹 다물어 봤지만 끝내 웃었다. 붓을 떼자, 이번엔 안 움직이겠다며 고개를 끄덕였다.",
        {
          "say": "seoyoon",
          "text": "움직이면 삐뚤어지지? 알았어. 참는다."
        },
        {
          "say": "me",
          "text": "괜찮아. 웃음 멈출 때까지 기다렸다 그리자."
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_26_resolution"
        },
        "완성된 별을 보려고 서윤이 팔을 돌렸다. 살짝 흔들린 선까지 마음에 든다며 물감이 마르기를 기다렸다.",
        {
          "say": "seoyoon",
          "text": "봐. 결국 예쁘게 됐잖아. 흔들린 것도 좋고."
        },
        {
          "say": "me",
          "text": "조금 흔들렸지만, 이 별은 네 거라는 표시가 됐네."
        },
        {
          "say": "seoyoon",
          "text": "…씻기 아깝다, 이거."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_27": {
      "title": "향초 만들기 공방",
      "heroine": "yuri",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_candle_workshop",
          "trans": "fade"
        },
        {
          "bg": "r60bg_candle_workshop",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_27_setup"
        },
        {
          "say": "yuri",
          "text": "너한테 어울리는 향을 골라 주는 거래."
        },
        {
          "say": "me",
          "text": "그럼 내 건 네가 골라 봐."
        },
        {
          "eventCg": "r60_27",
          "eventBg": "r60_27",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "직원이 연인에게 매력적으로 느껴지는 향을 비교해 보라며 시향지를 더 건넸다.",
        {
          "say": "me",
          "text": "그 말을 들으니까 갑자기 다르게 맡게 되네."
        },
        {
          "bg": "r60bg_candle_workshop",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_27_reaction"
        },
        {
          "say": "yuri",
          "text": "이쪽이 좋아. 너무 달지도 않고… 네가 생각나."
        },
        {
          "say": "me",
          "text": "그 이유까지 들으니까 나도 그 향이 좋아졌어."
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_27_resolution"
        },
        {
          "say": "yuri",
          "text": "굳으면 가져가자~ 오늘 냄새가 오래 남겠다, 헤헤."
        },
        {
          "say": "me",
          "text": "불 켤 때마다 이 공방 생각나겠네."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_28": {
      "title": "조명 버튼이 아니었다",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "학년 수련회 숙소를 미리 점검하는 날이었다. 서하는 인솔 담당으로, 나는 학생 대표로 따라갔다.",
        {
          "say": "seoha",
          "text": "{N}, 방마다 조명이랑 침대만 확인하면 돼. 학생 눈높이로 봐 줘."
        },
        {
          "say": "me",
          "text": "네. 친구들이 묵을 자리에서 보면 될까요?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_28_setup"
        },
        "불빛이 너무 밝았다. 서하가 머리맡의 리모컨을 집었다.",
        {
          "say": "seoha",
          "text": "리모컨 하나로 다 된대. 설명서엔 확인 표시를 해 뒀어."
        },
        {
          "say": "seoha",
          "text": "…비슷한 그림이 두 개네. 이 버튼인가?"
        },
        {
          "say": "me",
          "text": "그건 침대 쪽 같은데요. 스탠드 스위치는 여기 있어요."
        },
        {
          "eventCg": "r60_28",
          "eventBg": "r60_28",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "불은 그대로인데 침대 등받이가 올라갔다. 쌓아 둔 베개가 서하의 어깨로 쏟아졌다.",
        {
          "say": "seoha",
          "text": "어? 조명 버튼이 아니었어!"
        },
        {
          "say": "me",
          "text": "잠깐만요, 베개부터 받을게요!"
        },
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_28_reaction"
        },
        "멈춤 버튼을 누르려던 손가락이 웃음 때문에 자꾸 빗나갔다. 그 손끝에서 눈을 못 뗐다.",
        {
          "say": "seoha",
          "text": "잠깐만. 웃어서 누르질 못하겠어."
        },
        {
          "say": "me",
          "text": "저도 웃으면 안 되는데… 그, 그런 얼굴은 처음 봐서요."
        },
        {
          "say": "seoha",
          "text": "…그런 얼굴이 어떤 얼굴인데?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_28_resolution"
        },
        {
          "say": "me",
          "text": "아, 그게. 카드요. 안내 카드부터 읽어야 할 것 같아서요."
        },
        "서하가 웃음을 삼키며 리모컨을 내려놓고, 안내 카드를 함께 폈다.",
        {
          "say": "seoha",
          "text": "그러자. 다음 버튼은 설명부터 읽고. 수련회 날 친구들한테는 네가 알려 줘."
        },
        {
          "say": "me",
          "text": "불 하나 끄는 데 이렇게 웃을 줄은 몰랐네요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_29": {
      "title": "커플 게임 벌칙",
      "heroine": "yuri",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_cafe_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_29_setup"
        },
        {
          "say": "yuri",
          "text": "이번 판은 진짜 안 질 거야."
        },
        {
          "say": "me",
          "text": "그 말은 아까도 했는데."
        },
        {
          "eventCg": "r60_29",
          "eventBg": "r60_29",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "마지막 카드가 내려갔다. 유리는 타이머를 10초에 맞추고 고개를 들었다.",
        {
          "say": "yuri",
          "text": "눈 피하면 안 되는 거지? 시작해."
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_29_reaction"
        },
        {
          "say": "yuri",
          "text": "…열 초가 이렇게 길었어?"
        },
        {
          "say": "me",
          "text": "아직 웃음 참는 건 벌칙에 없었는데."
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_29_resolution"
        },
        {
          "say": "yuri",
          "text": "다시 하자!! 이번엔 내가 벌칙 정할래~"
        },
        {
          "say": "me",
          "text": "카드부터 잘 보고 정하는 게 어때."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_30": {
      "title": "문이 닫히기 전에",
      "heroine": "ina",
      "minAff": 100,
      "steps": [
        {
          "bg": "r60bg_apartment_entrance_night",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "공항 전망대에서 돌아오는 길. 공항버스에서 내려, 같은 아파트까지 손을 잡고 걸었다.",
        {
          "say": "ina",
          "text": "이상해. 1년 동안 다닌 길인데, 오늘 처음 집에 가는 것 같아."
        },
        {
          "say": "me",
          "text": "떠나는 길이 아니라서 그래."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_30_setup"
        },
        "12층, 1203호 앞. 인사말이 중간에서 멈췄다. 이나의 손바닥 위 열쇠도 그대로였다.",
        {
          "say": "ina",
          "text": "다 왔네. 너는 한 층만 내려가면 되고."
        },
        "현관 등이 켜졌다. 가까이 선 만큼 목소리도 가까웠다.",
        {
          "say": "me",
          "text": "…잘 자. 내일 봐."
        },
        {
          "eventCg": "r60_30",
          "eventBg": "r60_30",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "닫히던 문이 다시 열렸다. 이나가 한 걸음 돌아와 내 소매를 살짝 잡았다.",
        {
          "say": "ina",
          "text": "마지막 인사, 한 번만 더 해도 될까."
        },
        {
          "say": "me",
          "text": "…응."
        },
        "서로 고개를 가까이 기울여 짧게 입맞췄다.",
        {
          "bg": "r60bg_apartment_entrance_night",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_30_reaction"
        },
        "이나가 붉어진 뺨에 손을 댔다. 눈은 피했다가도 다시 나를 찾았다.",
        {
          "say": "ina",
          "text": "돌아가려다가… 그냥 보내기 싫었어."
        },
        {
          "say": "me",
          "text": "…다시 불러 줘서 좋았어. 말이 자꾸 막히네."
        },
        {
          "say": "ina",
          "text": "…지금 그 말, 내일 다시 해 줘."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_30_resolution"
        },
        "이나가 열쇠를 들고 작게 손을 흔들었다.",
        {
          "say": "ina",
          "text": "들어와. 차 한 잔만."
        },
        {
          "say": "me",
          "text": "…응. 한 잔만."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_31": {
      "title": "노크를 잊은 밤",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "기록물 전시 인솔로 연수원에 묵는 날이었다. 행정 담당은 서하였다.",
        {
          "say": "seoha",
          "text": "동의까지 다 받은 기록이야. 마감은 내가 조정해 뒀으니 오늘은 여기까지."
        },
        {
          "say": "me",
          "text": "네. 확인표만 정리하고 씻고 올게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_31_setup"
        },
        "복도 끝 공용 욕실. 사용 시간표에는 아무 이름도 적혀 있지 않았다.",
        "목욕을 마치고 가운을 제대로 입은 서하가 문 쪽 인기척에 고개를 들었다.",
        {
          "say": "me",
          "text": "…여기, 비어 있는 줄 알았어요."
        },
        {
          "eventCg": "r60_31",
          "eventBg": "r60_31",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "수건장 앞의 서하와 눈이 마주쳤다. 둘 다 그대로 굳었다.",
        {
          "say": "me",
          "text": "죄송해요! 바로 닫을게요."
        },
        "문이 도로 닫혔다. 심장 뛰는 소리만 복도에 남았다.",
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_31_reaction"
        },
        "문 너머로 사과를 들은 서하가 놀란 얼굴로 고개를 내밀었다.",
        "가운 깃을 여미는 손끝만 보였다. 나는 복도 벽 쪽으로 몸을 돌렸다.",
        {
          "say": "me",
          "text": "노, 노크… 다음엔 꼭 노크부터 할게요."
        },
        {
          "say": "seoha",
          "text": "다음부터는 꼭 먼저 물어봐 줘. 나도 진짜 놀랐으니까."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_31_resolution"
        },
        {
          "say": "seoha",
          "text": "…근데 왜 네가 더 빨개졌어."
        },
        {
          "say": "me",
          "text": "그, 그건… 다시는 확인 없이 열지 않을게요."
        },
        {
          "say": "seoha",
          "text": "사진도 그랬잖아. 남기기 전에 먼저 물어보는 거."
        },
        "서하가 시간표 옆 이름표에 제 이름을 적어 걸었다. 적어 두라던 사람이 먼저 빠뜨린 칸이었다.",
        {
          "hideAll": true
        }
      ]
    },
    "r60_32": {
      "title": "다음엔 목소리부터",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "겨울 행사 안내 자료 최종본이 저녁에야 인쇄됐다. 이나는 새벽 비행이라 학교에 못 온다.",
        "선생님은 봉투를 나에게 맡겼다. 윗집에 사니까 제일 빠르다고.",
        {
          "say": "me",
          "text": "봉투만 드리고 바로 내려올게요. 한 층이니까요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_32_setup"
        },
        "현관 앞에서 봉투를 고쳐 들고 노크했다.",
        "안에서 발소리가 성큼 다가왔다. 기다리던 사람이 온 줄 아는 걸음이었다.",
        {
          "say": "ina",
          "text": "잠깐만. 지금 나갈게. 생각보다 빨리 왔네."
        },
        {
          "eventCg": "r60_32",
          "eventBg": "r60_32",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "문이 열렸다. 나를 알아본 이나가 반걸음 물러났다.",
        {
          "say": "ina",
          "text": "어머. 벌써 왔어?"
        },
        {
          "say": "me",
          "text": "늦은 시간에 죄송해요. 이름부터 말할 걸 그랬어요."
        },
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_32_reaction"
        },
        "이나가 가슴을 쓸어내리더니 멋쩍게 웃었다. 학교에서 듣던 목소리가 아니었다.",
        {
          "say": "ina",
          "text": "가족인 줄 알았어. 짐 갖다주기로 했거든. 나 혼자 엄청 놀랐네."
        },
        {
          "say": "me",
          "text": "저, 저도 밖에서 같이 놀랐어요. …그, 목소리가 달라서요."
        },
        {
          "say": "ina",
          "text": "…그건 문 앞에서 할 말은 아닌 것 같은데."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_32_resolution"
        },
        "이나가 손님용 슬리퍼를 가져와 문 앞에 놓았다.",
        {
          "say": "ina",
          "text": "다음엔 목소리부터 들려줘. 문 열기 전에 누군지 알게."
        },
        {
          "say": "me",
          "text": "아, 네. 그, 봉투 얘기를 하려던 거였어요. …약속할게요. {N} 왔습니다."
        },
        {
          "say": "ina",
          "text": "이제 알겠네. 어서 와. 최종본은 같이 확인하자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_33": {
      "title": "걸리지 않는 문고리",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "이나의 고향, 어머니의 게스트하우스에서 맞은 첫날 밤이었다.",
        "밤 아홉 시. 이나가 먼저 욕실로 가고 얼마 안 돼, 철컥 소리와 짧은 비명이 났다.",
        {
          "say": "me",
          "text": "…이나 씨? 괜찮아요?"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_33_setup"
        },
        "복도로 뛰어나가자, 라벤더색 니트 카디건 차림의 이나가 손바닥을 내밀었다.",
        {
          "say": "ina",
          "text": "…문손잡이가 손에 딸려 나왔어. 원래 빠지는 물건은 아니지?"
        },
        {
          "say": "me",
          "text": "손잡이가 헐거워졌나 봐요. 제가 볼게요."
        },
        {
          "eventCg": "r60_33",
          "eventBg": "r60_33",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "손잡이를 잃은 문이 바닷바람에 끼익 움직였다. 걸쇠가 걸리지 않았다.",
        {
          "say": "me",
          "text": "문은 제가 받치고 있을게요. 어머님께 공구함 있는지 여쭤봐 주세요."
        },
        {
          "say": "ina",
          "text": "그래. 부속은 내가 챙길게. 하나라도 흘리면 안 되니까."
        },
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_33_reaction"
        },
        "바람에 문이 한 번 더 덜컹했다. 이나가 반사적으로 내 소매를 움켜쥐었다.",
        {
          "say": "ina",
          "text": "멀쩡한 문도 오늘은 자꾸 신경 쓰이네."
        },
        "소매를 쥔 손끝이 차가웠다. 목소리가 평소보다 가까이서 들렸다.",
        {
          "say": "me",
          "text": "…소매는 계속 잡고 있어도 돼요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_33_resolution"
        },
        "나사 세 개를 다 찾았을 때, 공구함을 든 이나 어머니가 계단을 올라왔다.",
        {
          "say": "ina",
          "text": "혼자였으면 이 문만 계속 붙잡고 있었겠다. 고마워."
        },
        {
          "say": "me",
          "text": "어머님 오셨어요. 이제 금방 고치겠네요."
        },
        {
          "say": "ina",
          "text": "…{N}. 내가 아직 소매를 잡고 있었네. 문은 이제 안 움직이는데."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_34": {
      "title": "연수원 복도에서 마주치다",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_corridor",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "가을 특강에서 다 못 한 질문이 쌓여, 학교가 1박 진로 연수를 열었다. 이나도 초청 강사로 동행했다.",
        {
          "say": "ina",
          "text": "담당 선생님이 층별 질문지를 너한테 맡기셨다며. 나도 오늘은 같은 숙소에 묵어."
        },
        {
          "say": "me",
          "text": "네. 저녁 자유시간에 층마다 돌면서 받아 둘게요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_34_setup"
        },
        "대욕장 앞 복도. 이나가 두꺼운 스파 타월을 단단히 여민 채 쓴 수건을 정리하고 있었다.",
        {
          "say": "ina",
          "text": "…이것만 통에 넣고 바로 방으로 가면 되겠다."
        },
        "나는 질문지 뭉치를 든 채 반대편 계단에서 그 층으로 올라오는 중이었다.",
        {
          "eventCg": "r60_34",
          "eventBg": "r60_34",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "복도 한가운데서 마주쳤다. 둘 다 그대로 발이 멈췄다.",
        {
          "say": "me",
          "text": "죄, 죄송해요. 이쪽에 계신 줄 몰라서요."
        },
        "질문지가 손에서 미끄러질 뻔했다. 나는 계단 쪽으로 눈을 돌렸다.",
        {
          "bg": "r60bg_hotel_corridor",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_34_reaction"
        },
        "이나가 붉어진 얼굴로 시선을 옆으로 돌렸다. 먼저 지나가라는 손짓이었다.",
        {
          "say": "ina",
          "text": "둘이 동시에 멈춰 서니까 더 어색하네."
        },
        {
          "say": "me",
          "text": "네. 저는, 저쪽으로… 아니 그, 질문지를 세고 있어서요."
        },
        {
          "say": "ina",
          "text": "…그 질문지, 거꾸로 들었어."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_34_resolution"
        },
        {
          "say": "me",
          "text": "천천히 가세요. 저는 여기서 뒤돌아 기다릴게요."
        },
        "모퉁이를 돌 때까지 벽 쪽을 보고 섰다. 이나가 옷을 갖춰 입고 나온 뒤에야 다시 마주 섰다.",
        {
          "say": "ina",
          "text": "그럼 다시. 안녕, {N}. 질문지는 로비에서 같이 세자."
        },
        {
          "say": "me",
          "text": "…네. 세는 건 처음부터 다시 할게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_35": {
      "title": "문틈으로 건넨 한 벌",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "기록물 공개 동의 설명회는 이틀짜리였다. 행정 담당인 서하를 따라 학생 대표로 연수원에 묵게 됐다.",
        {
          "say": "seoha",
          "text": "설명회 자료는 내일 아침에 다시 보자. 대욕장은 열 시에 닫는대."
        },
        {
          "say": "me",
          "text": "네, 자료만 방에 두고 내려갈게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_35_setup"
        },
        "탈의실 앞 벤치에 접힌 옷 한 벌이 그대로 있었다. 서하가 두고 들어간 모양이었다.",
        {
          "say": "seoha",
          "text": "{N}, 아직 거기 있니? 밖에 접어 둔 옷 좀 건네줄래?"
        },
        {
          "say": "me",
          "text": "네, 벤치 위에 접혀 있는 거 맞죠?"
        },
        {
          "eventCg": "r60_35",
          "eventBg": "r60_35",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "문이 한 뼘쯤 열리고, 트레이닝복 차림의 서하가 고개만 내밀었다. 머리끝이 젖어 있었다.",
        "접힌 니트를 내민 손 위에 올려놓았다. 눈은 복도 끝에 두었다.",
        {
          "say": "me",
          "text": "여기 있어요. 저, 저는 바로 밖에서 기다릴게요."
        },
        {
          "say": "seoha",
          "text": "응, 고마워. 금방 나갈게."
        },
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_35_reaction"
        },
        "니트를 품에 안고 나온 서하가 쑥스럽게 웃었다. 머리끝에서 물이 떨어졌다.",
        {
          "say": "seoha",
          "text": "확인하고 들어간 줄 알았는데, 꼭 하나씩 빠뜨리네."
        },
        {
          "say": "me",
          "text": "저도 자주 그래요. 아, 저는 아무것도 안 봤어요."
        },
        {
          "say": "seoha",
          "text": "…뭘 안 봤다는 건데?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_35_resolution"
        },
        {
          "say": "me",
          "text": "…손만요. 물기 묻은 손만 봤어요."
        },
        "서하가 웃으면서 남은 짐을 하나씩 확인하고 가방을 닫았다.",
        {
          "say": "seoha",
          "text": "이제 전부 챙겼어. 다음엔 내가 네 짐 확인해 줄게."
        },
        {
          "say": "me",
          "text": "그럼 서로 하나씩 맡는 걸로 해요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_36": {
      "title": "높이 들어 올린 수건",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "진로 행사 소품 상자를 행사 전까지 1203호에 맡기기로 했다. 밤비를 뚫고 한 층 올라갔다.",
        {
          "say": "ina",
          "text": "어서 와. 나도 방금 비 맞고 들어왔어. 상자는 현관에 둬."
        },
        {
          "say": "me",
          "text": "네. 여기 둘게요. …머리가 다 젖으셨네요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_36_setup"
        },
        "이나가 수건장 맨 위 칸으로 손을 뻗었다. 까치발을 들어도 손끝이 닿지 않았다.",
        {
          "say": "ina",
          "text": "이사 올 때 맨 위에 넣어 두고 1년째 못 꺼냈어. 좀 꺼내 줄래?"
        },
        {
          "say": "me",
          "text": "네. 여기… 있네요. 제일 푹신한 걸로요."
        },
        {
          "eventCg": "r60_36",
          "eventBg": "r60_36",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "접힌 수건을 알아본 이나가 손을 뻗었다. 나도 모르게 팔을 조금 더 위로 들었다.",
        {
          "say": "ina",
          "text": "…{N}? 지금 장난치는 거지? 손님, 수하물은 선반에서 내려 주세요."
        },
        "나는 장난을 멈추고 손에 닿는 높이로 내려 주었다.",
        {
          "say": "me",
          "text": "네, 바로 돌려 드릴게요."
        },
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_36_reaction"
        },
        "수건을 받아 든 이나가 어이없다는 듯 웃었다. 고개를 드는 얼굴이 코앞이었다.",
        {
          "say": "ina",
          "text": "1103호가 장난을 다 치네? 사람을 이렇게 애태우고."
        },
        {
          "say": "me",
          "text": "죄송해요. …웃으시는 게 보고 싶어서요."
        },
        {
          "say": "ina",
          "text": "…그런 건 장난 말고 그냥 말로 해."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_36_resolution"
        },
        "이나가 수건을 머리에 둘러쓰고 웃었다. 남은 한 장은 접어서 내 쪽으로 내밀었다.",
        {
          "say": "ina",
          "text": "너도 어깨 젖었어. 하나는 네 거야."
        },
        {
          "say": "me",
          "text": "…네. 수건은 이제 아래 칸에 두세요."
        },
        {
          "say": "ina",
          "text": "그래. 다음엔 까치발 안 들게. 소품은 행사 날 같이 가져가자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_37": {
      "title": "한 칸 잘못 읽은 시간표",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_onsen",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "가을 행사 준비표를 낸 반에서 학생 대표를 한 명 보내기로 했다. 담당 선생님이 나를 답사에 붙여 주셨다.",
        {
          "say": "seoha",
          "text": "{N}, 오늘은 시설 시간표만 옮겨 적으면 돼. 네가 낸 준비표에 붙일 거야."
        },
        {
          "say": "me",
          "text": "네. 빠짐없이 적어 볼게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_37_setup"
        },
        "체험 시설 정원 입구에서 서하가 안내 시간표를 다시 들여다봤다. 카디건은 팔에 걸쳐 있었다.",
        {
          "say": "seoha",
          "text": "한 칸 잘못 읽었네. 지금은 족욕 시간이래. 다음 코스까지 비는데, 앉았다 갈까."
        },
        {
          "say": "me",
          "text": "네. 시간표는 제가 다시 옮겨 적을게요."
        },
        {
          "eventCg": "r60_37",
          "eventBg": "r60_37",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하가 카디건을 옆 돌 위에 내려놓았다. 나란히 앉아 발을 담갔다.",
        {
          "say": "seoha",
          "text": "발만 따뜻해져도 한결 낫네. 종일 서서 걸었더니."
        },
        {
          "say": "me",
          "text": "오늘 코스를 두 바퀴나 도셨잖아요."
        },
        {
          "bg": "r60bg_onsen",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_37_reaction"
        },
        "자리에서 일어서던 서하가 조용한 정원을 돌아보았다. 옆얼굴에 걸린 저녁 빛에서 눈을 떼기가 어려웠다.",
        {
          "say": "seoha",
          "text": "시간을 잘못 본 덕에 이런 곳도 알았네."
        },
        {
          "say": "me",
          "text": "…네. 다음에도 한 칸쯤은 잘못 읽으셔도 될 것 같아요."
        },
        {
          "say": "seoha",
          "text": "그건 칭찬이야, 놀리는 거야? …확인은 보류할게."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_37_resolution"
        },
        "이야기를 나누며 발을 담그고 있으니 시간이 꽤 흘렀다. 휴대폰을 보니 어느새 다섯 시였다.",
        "서하가 돌 위의 카디건을 집어 팔에 걸쳤다.",
        {
          "say": "seoha",
          "text": "나도 확인 표시를 여러 번 한다고 했잖아. 다음엔 시간표를 같이 확인하자."
        },
        {
          "say": "me",
          "text": "네. 준비표에 이 시간대도 적어 둘게요. 다음 코스도 천천히 가요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_38": {
      "title": "젖은 돌바닥과 붙잡은 팔",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_onsen",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "시간표를 옮겨 적었던 그 체험 시설에, 준비표에 붙일 사진을 찍으러 다시 갔다.",
        {
          "say": "seoha",
          "text": "사람이 안 찍힌 사진으로만 골라야 해. 해 지기 전에 정원 쪽만 같이 돌자."
        },
        {
          "say": "me",
          "text": "네. 준비물이랑 화단 쪽으로 골라 볼게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_38_setup"
        },
        "낮에 갠 비가 정원 돌길에 그대로 남아 있었다. 서하가 걸음을 늦췄다.",
        {
          "say": "seoha",
          "text": "여기는 조금 미끄럽겠다. 젖은 데는 피해서 가자."
        },
        {
          "say": "me",
          "text": "난간 쪽으로 가요. 제가 먼저 밟아 볼게요."
        },
        {
          "eventCg": "r60_38",
          "eventBg": "r60_38",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서하의 발이 젖은 돌에서 미끄러졌다. 허우적 뻗은 팔을 나도 모르게 붙잡았다.",
        {
          "say": "seoha",
          "text": "앗, 잠깐!"
        },
        "붙잡은 팔째로, 둘 다 온천물 속에 첨벙 빠졌다.",
        {
          "say": "me",
          "text": "괘, 괜찮아요? 어디 안 부딪혔어요?"
        },
        {
          "bg": "r60bg_onsen",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_38_reaction"
        },
        "서로 괜찮은지 확인하고 나서야 웃음이 났다. 웃는 얼굴이 바로 앞에 있었다.",
        {
          "say": "seoha",
          "text": "구해 주려다가 너까지 홀딱 젖었네."
        },
        {
          "say": "me",
          "text": "둘 다 안 다쳤으니까… 서, 성공이에요."
        },
        {
          "say": "seoha",
          "text": "그 손은 언제까지 잡고 있을 거야?"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_38_resolution"
        },
        {
          "say": "me",
          "text": "죄송해요. 놓는 걸… 깜빡했어요."
        },
        "빌린 수건으로 대충 물기를 닦았다. 돌 위에 둔 가방 속 카메라는 멀쩡했다.",
        {
          "say": "seoha",
          "text": "이번엔 한 걸음씩. 같이 맞춰서 걷자."
        },
        {
          "say": "me",
          "text": "좋아요. 제가 먼저 디뎌 볼게요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_39": {
      "title": "옆 칸을 착각했다",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "fade"
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_39_setup"
        },
        {
          "say": "haneul",
          "text": "잠깐 기다려. 짐만 챙겨서 나갈게."
        },
        {
          "say": "me",
          "text": "응. 나도 재킷 가지러 갔다 올게. 아까 칸에 걸어 뒀거든."
        },
        {
          "eventCg": "r60_39",
          "eventBg": "r60_39",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "비슷한 커튼이 줄지어 있었다. 아까 쓴 칸인 줄 알고 손을 뻗는데, 하늘이 먼저 커튼을 붙잡았다.",
        {
          "say": "haneul",
          "text": "거기 내 칸이야! 안에 내 가방 있어."
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_39_reaction"
        },
        {
          "say": "haneul",
          "text": "네 재킷은 여기. 아까 나오면서 내가 챙겼어."
        },
        {
          "say": "me",
          "text": "…그걸 네가 들고 있었구나. 칸마다 뒤지고 다닐 뻔했네."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_39_resolution"
        },
        {
          "say": "haneul",
          "text": "번호가 비슷해서 헷갈릴 만하긴 하네."
        },
        {
          "say": "me",
          "text": "다음엔 번호부터 확인할게. 재킷, 고마워."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_40": {
      "title": "탈의실 앞 장난",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_pool_changing_corridor",
          "trans": "fade"
        },
        {
          "bg": "r60bg_pool_changing_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_40_setup"
        },
        "수영 수업이 끝난 탈의실 복도. 하늘이 커튼 친 빈 칸 앞을 지키고 서 있었다.",
        {
          "say": "haneul",
          "text": "이 칸은 비워 둬. 강 선생님 생신 선물을 숨겨 놨거든."
        },
        {
          "say": "me",
          "text": "알겠어. 반 애들 모일 때까지 같이 지킬게."
        },
        {
          "eventCg": "r60_40",
          "eventBg": "r60_40",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "지나가던 민재가 궁금했는지 커튼 자락을 휙 잡아당겼다. 하늘이 먼저 커튼을 단단히 붙잡았다.",
        {
          "say": "haneul",
          "text": "장난이어도 커튼은 열지 마!"
        },
        {
          "bg": "r60bg_pool_changing_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_40_reaction"
        },
        "팔짱을 낀 하늘이 달아나는 민재의 뒤통수를 노려봤다.",
        {
          "say": "haneul",
          "text": "깜짝 선물은 놀랄 사람이 딱 한 명이어야 해. 민재가 먼저 놀라면 곤란하지."
        },
        {
          "say": "me",
          "text": "반장이 막아서 다행이다. 선물은 무사해?"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_40_resolution"
        },
        {
          "say": "haneul",
          "text": "응. 선생님 오시기 전까지만 지키면 돼. 끝나면 따뜻한 거 마시러 가자."
        },
        {
          "say": "me",
          "text": "오늘은 내가 살게."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_41": {
      "title": "커튼 너머의 한 벌",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "fade"
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_41_setup"
        },
        "하늘이 피팅룸에서 나와 옷걸이에 걸린 스웨터를 들어 보였다.",
        {
          "say": "haneul",
          "text": "이거 어때? 색이 괜찮은 것 같아."
        },
        {
          "eventCg": "r60_41",
          "eventBg": "r60_41",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "옷걸이를 도로 걸어 주려고 커튼 쪽으로 손을 뻗었다. 하늘이 화들짝 커튼을 붙잡았다.",
        {
          "say": "haneul",
          "text": "잠깐만! 안에 입어 본 옷이 산더미야. 보면 안 돼!"
        },
        {
          "bg": "r60bg_fitting_room_corridor",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_41_reaction"
        },
        {
          "say": "haneul",
          "text": "미안. 반장이 이렇게 어질러 놓은 거, 들키기 싫었어."
        },
        {
          "say": "me",
          "text": "아니, 내가 먼저 물어봤어야지."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_41_resolution"
        },
        {
          "say": "haneul",
          "text": "정리 끝. 결국 입고 온 거랑 비슷한 색을 골랐네."
        },
        {
          "say": "me",
          "text": "응. 그 색이 제일 잘 어울려."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_42": {
      "title": "등 지퍼 올려주기",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "가을 행사 개회식 날, 준비표 최종본을 들고 강당 대기실 문을 두드렸다.",
        {
          "say": "seoha",
          "text": "왔구나. 개회식 진행이 십 분 뒤인데 손이 하나 모자라네."
        },
        {
          "say": "me",
          "text": "제가 할 수 있는 일이면 말씀해 주세요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_42_setup"
        },
        "서하가 어깨 너머로 손을 뻗어 행사복 등 지퍼를 가리켰다.",
        {
          "say": "seoha",
          "text": "혼자서는 위까지 올라가질 않네. …부탁할게. 등 지퍼, 끝까지."
        },
        {
          "say": "me",
          "text": "…네. 제가 올려 드릴게요."
        },
        {
          "eventCg": "r60_42",
          "eventBg": "r60_42",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "불투명한 안감이 등을 가리고 있었다. 슬라이더만 조심히 잡았다.",
        {
          "say": "me",
          "text": "옷은 안 당길게요. 슬라이더만 천천히 올릴게요."
        },
        {
          "say": "seoha",
          "text": "천천히 해도 돼. 너는 이럴 때 이상하게 침착하더라."
        },
        "슬라이더가 손이 닿지 않던 데를 지나 끝까지 올라갔다.",
        {
          "bg": "r60bg_seoha_dressing_room",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_42_reaction"
        },
        "서하가 참고 있던 어깨를 풀며 뒤를 돌아봤다. 돌아본 얼굴이 코앞이었다.",
        {
          "say": "seoha",
          "text": "됐네. 이제 손 내려도 괜찮아."
        },
        {
          "say": "me",
          "text": "아, 네. …손이 아직 올라가 있었네요."
        },
        {
          "say": "seoha",
          "text": "지퍼보다 네가 더 긴장했네. 고마워, {N}."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_42_resolution"
        },
        "서하가 거울 앞에서 등을 한 번 더 확인했다.",
        {
          "say": "me",
          "text": "끝까지 잘 잠겼어요. 이제 나가셔도 돼요."
        },
        {
          "say": "seoha",
          "text": "부탁하니까 되네. 준비표는 끝나고 같이 보자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_43": {
      "title": "바다 앞에서 바르는 선크림",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_beach_day",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "지난 답사 때 물때를 못 봤다고 했다. 서하를 따라 그 바닷가에 다시 나왔다.",
        {
          "say": "seoha",
          "text": "쉴 자리는 물때를 봐야 정해진대. 담임 선생님께 한 번 더 허락받아 뒀어."
        },
        {
          "say": "me",
          "text": "네. 그늘 자리랑 안전 항목은 제가 적을게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_43_setup"
        },
        "답사표 첫 항목은 자외선 차단이었다. 서하가 등 뒤로 손을 뻗어 보다가 병을 내게 건넸다.",
        {
          "say": "seoha",
          "text": "지난번에 발리볼 하느라 다 지워졌잖아. 저녁엔 따가웠어. 이번엔 등만 부탁할게."
        },
        {
          "say": "seoha",
          "text": "그리고 이번엔 안 놀랄 거야. 확인했어."
        },
        {
          "say": "me",
          "text": "…네. 답사표에 있는 항목이니까요."
        },
        {
          "eventCg": "r60_43",
          "eventBg": "r60_43",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "어디부터 바를지 묻자 서하가 어깨 너머로 고개를 끄덕였다.",
        "허락한 곳에만 조금씩 펴 발랐다. 손끝 말고는 아무 데도 보지 못했다.",
        {
          "say": "me",
          "text": "차가우면 바로 말씀해 주세요. 천천히 할게요."
        },
        {
          "bg": "r60bg_beach_day",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_43_reaction"
        },
        "차가운 크림에 서하의 어깨가 또 움찔했다. 곧 참던 웃음이 터졌다.",
        {
          "say": "me",
          "text": "…안 놀라신다고 확인하셨는데요."
        },
        {
          "say": "seoha",
          "text": "…확인 취소. 근데 귀는 왜 네가 빨개져?"
        },
        "한동안 바다에서 놀고 나오니 바람이 서늘했다. 서하가 남색 집업을 걸치고 밀짚모자를 썼다.",
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_43_resolution"
        },
        "돌아갈 준비를 마친 서하가 선크림 뚜껑을 닫고 토트백에 넣었다.",
        {
          "say": "seoha",
          "text": "이제 빠진 데 없지? 도와줘서 고마워."
        },
        {
          "say": "me",
          "text": "네. 그늘 자리는 이쪽이 낫겠어요. 답사표에 적어 둘게요."
        },
        {
          "say": "seoha",
          "text": "좋아. 쉬었다 가자. 이번엔 내가 시원한 음료를 가져올게."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_44": {
      "title": "큰 파도와 풀린 머리끈",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_beach_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_beach_day",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_44_setup"
        },
        "워터파크 파도풀. 얕은 데 선 서윤이 밀려오는 파도를 재어 봤다. 잔잔하다고 하려는 순간, 뒤에서 더 큰 물결이 일었다.",
        {
          "say": "seoyoon",
          "text": "이 정도는 파도도 아니지."
        },
        {
          "say": "me",
          "text": "뒤에 오는 건 좀 큰데? 한 걸음 물러설까?"
        },
        {
          "eventCg": "r60_44",
          "eventBg": "r60_44",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "예상보다 큰 파도가 어깨까지 덮쳤다. 머리끈이 풀려, 젖은 머리카락이 서윤의 얼굴을 온통 덮었다.",
        {
          "say": "seoyoon",
          "text": "앗! 야, 앞이 하나도 안 보여!"
        },
        {
          "say": "me",
          "text": "발부터 단단히 디뎌. 나 바로 옆에 있어."
        },
        {
          "bg": "r60bg_beach_day",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_44_reaction"
        },
        "서윤이 얼굴에 붙은 머리카락을 걷어 내고 물을 털었다. 나를 보고 웃다가, 작은 물방울을 튀겼다.",
        {
          "say": "seoyoon",
          "text": "머리끈 어디 갔어. …뭘 웃어. 내 머리 파도 됐냐?"
        },
        {
          "say": "me",
          "text": "머리뿐 아니라 표정도 방금 파도를 맞았어."
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_44_resolution"
        },
        "서윤이 보드를 챙겨 다음 파도를 멀리서 기다렸다. 이번에는 신호를 맞추고 작은 물결부터 발을 담갔다.",
        {
          "say": "seoyoon",
          "text": "이번엔 작은 거부터. 같이 보고 들어가."
        },
        {
          "say": "me",
          "text": "하나, 둘, 지금. 이번 파도는 얌전하네."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_45": {
      "title": "빌려 입은 큰 셔츠",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_beach_cabana",
          "trans": "fade"
        },
        {
          "bg": "r60bg_beach_cabana",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_45_setup"
        },
        "워터파크 카바나. 물놀이를 마치고 보니, 말리려고 걸어 둔 서윤의 옷까지 물벼락에 젖어 있었다.",
        {
          "say": "seoyoon",
          "text": "내 옷 다 젖었어. 야, 그 셔츠 좀 빌려."
        },
        {
          "say": "me",
          "text": "물론이지. 그건 안 젖었으니까 편하게 입어."
        },
        {
          "eventCg": "r60_45",
          "eventBg": "r60_45",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "서윤이 셔츠를 수영복 위에 걸치고 두 팔을 들어 보였다. 긴 소매 속으로 손끝이 쏙 들어가 버렸다.",
        {
          "say": "seoyoon",
          "text": "뭐야, 손이 안 나와. 너 팔 왜 이렇게 길어."
        },
        {
          "say": "me",
          "text": "소매를 두 번쯤 접어 볼까?"
        },
        {
          "bg": "r60bg_beach_cabana",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_45_reaction"
        },
        "커다란 소매를 흔들던 서윤이 내가 웃는 걸 보고 입을 내밀었다. 그래도 옷깃은 꼭 쥔 채였다.",
        {
          "say": "seoyoon",
          "text": "웃지 마. …따뜻하단 말이야."
        },
        {
          "say": "me",
          "text": "놀리는 게 아니라 진짜 커서 그래. 안 추우면 됐어."
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_45_resolution"
        },
        "소매를 두 번 접은 서윤이 이제 움직이기 편하다며 고개를 끄덕였다. 우리는 젖은 옷을 펼쳐 놓고 마르기를 기다렸다.",
        {
          "say": "seoyoon",
          "text": "접으니까 됐다. 빨아서 돌려줄게."
        },
        {
          "say": "me",
          "text": "급하게 안 돌려줘도 돼. 오늘은 따뜻하게 입어."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_46": {
      "title": "소나기 속 재킷",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_city_rain_shelter",
          "trans": "fade"
        },
        {
          "bg": "r60bg_city_rain_shelter",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_46_setup"
        },
        "하굣길, 구름이 순식간에 몰려왔다. 서윤이 손바닥을 펴고 올려다봤다.",
        {
          "say": "seoyoon",
          "text": "예보에 없었는데. 뭐 떨어진다."
        },
        {
          "say": "me",
          "text": "저기 정류장까지 뛰자. 가방은 내가 들게."
        },
        {
          "eventCg": "r60_46",
          "eventBg": "r60_46",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "정류장 지붕 아래로 뛰어들었을 땐 이미 늦었다. 서윤의 앞머리와 셔츠 끝에서 물방울이 떨어졌다.",
        {
          "say": "me",
          "text": "서윤, 잠깐만. 이거 걸쳐."
        },
        "재킷을 벗어 서윤의 어깨에 걸쳐 주었다. 서윤이 옷깃을 두 손으로 붙잡았다.",
        {
          "say": "seoyoon",
          "text": "야, 너도 다 젖었잖아. …고마워."
        },
        {
          "bg": "r60bg_city_rain_shelter",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_46_reaction"
        },
        "빗줄기가 지붕 끝을 두드렸다. 서윤이 재킷 앞섶을 여미고, 우리는 비가 가늘어지는 쪽을 함께 살폈다.",
        {
          "say": "seoyoon",
          "text": "좀 쉬었다 가. 금방 그칠 거야."
        },
        {
          "say": "me",
          "text": "응. 뛰어가다 미끄러지는 것보다 낫지."
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_46_resolution"
        },
        "정류장 옆 편의점에서 산 따뜻한 음료를, 서윤이 두 손으로 감싸 쥐고 앉았다.",
        {
          "say": "seoyoon",
          "text": "재킷은 빨아서 줄게. 오늘은 네가 더 빨랐네."
        },
        {
          "say": "me",
          "text": "그럼 다음 소나기에는 네가 날 구조해 줘."
        },
        {
          "say": "seoyoon",
          "text": "…생각해 볼게. 육상부는 비싸."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_47": {
      "title": "수건으로 머리 닦아주기",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_pool_changing_corridor",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "겨울 진로 행사 전날. 행사장인 체육 센터에 마지막 확인 차례로 남아 있었다.",
        "밖에 안내 표지를 세우러 나갔던 이나가 진눈깨비를 맞고 수영장 옆 휴게실로 들어왔다.",
        {
          "say": "ina",
          "text": "우산을 두고 나갔더니 이렇게 됐네. 수건 좀 빌릴게."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_47_setup"
        },
        "이나가 젖은 머리 끝과 접힌 수건을 번갈아 가리켰다.",
        {
          "say": "ina",
          "text": "{N}, 전에도 머리는 네가 말려 줬잖아. 표지판 세우느라 어깨가 다 굳었어."
        },
        {
          "say": "ina",
          "text": "뒤쪽만 조금 닦아 줄래?"
        },
        {
          "say": "me",
          "text": "세게 문지르지 않고 눌러서 닦을게요."
        },
        {
          "eventCg": "r60_47",
          "eventBg": "r60_47",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "수건으로 머리 끝을 누르던 순간 이나가 고개를 들었다.",
        "이마 앞에서 수건도 말도 함께 멎었다. 나는 수건 끝만 보고 있었다.",
        {
          "say": "ina",
          "text": "잠깐. 갑자기 가까워졌네."
        },
        {
          "say": "me",
          "text": "아, 죄송해요. 제가… 조금 물러설게요."
        },
        {
          "bg": "r60bg_pool_changing_corridor",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_47_reaction"
        },
        "이나가 수건 끝을 잡고 옆으로 눈을 돌렸다.",
        {
          "say": "ina",
          "text": "놀란 거야. 아픈 건 아니고."
        },
        {
          "say": "me",
          "text": "그럼 다행이에요. 저만 놀란 줄 알았어요."
        },
        {
          "say": "ina",
          "text": "둘 다 놀랐으면 난기류 경보감이네. 좌석벨트 매고 기다려."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_47_resolution"
        },
        "이나가 수건을 받아 오른쪽 머리 끝에 눌러 댔다.",
        {
          "say": "ina",
          "text": "나머지는 내가 할게. 여기까지 맡아 줘서 고마워."
        },
        {
          "say": "me",
          "text": "오른쪽 끝만 조금 더 닦으면 되겠어요."
        },
        {
          "say": "ina",
          "text": "나누니까 금방 끝나네. 내일 안내도 이렇게 하자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_48": {
      "title": "복도에서 마주친 한 걸음",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "1월, 이나의 고향 바닷마을. 어머니의 게스트하우스에서 우리는 복도 끝과 끝 방을 받았다.",
        "욕실은 가운데 하나라 교대로 쓰기로 했다. 한 시간 뒤, 욕실 문 열리는 소리가 났다.",
        {
          "say": "ina",
          "text": "욕실 비었어! 뜨거운 물은 오른쪽으로 틀어."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_48_setup"
        },
        "목욕을 끝내고 잠옷을 갖춰 입은 이나가, 작은 수건을 든 채 복도로 나왔다.",
        {
          "say": "ina",
          "text": "…머리는 방에 가서 말려야지."
        },
        "나는 수건을 챙겨 복도 모퉁이를 돌았다.",
        {
          "eventCg": "r60_48",
          "eventBg": "r60_48",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "분홍 긴팔 잠옷 차림의 이나와 코앞에서 마주쳤다. 둘 다 손을 들고, 동시에 한 걸음 물러났다.",
        "그런데도 복도가 좁아서, 물러난 자리에서도 목소리가 바로 앞에 있었다.",
        {
          "say": "me",
          "text": "아, 죄송해요! 제 차례라서…"
        },
        {
          "say": "ina",
          "text": "물러나는 것도 동시네. 신호를 안 맞췄으니까."
        },
        {
          "bg": "r60bg_bathroom_exterior",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_48_reaction"
        },
        "이나가 가슴에 손을 얹고 웃음을 터뜨렸다. 나는 먼저 수건장 쪽으로 눈을 돌렸다.",
        {
          "say": "ina",
          "text": "2월 27일까지는 계속 이렇게 물러나자. 신호 없이도, 동시에."
        },
        {
          "say": "me",
          "text": "네. 한 걸음씩, 동시에요. …그리고 머리는 말리고 자요."
        },
        {
          "say": "ina",
          "text": "방금 우리 엄마랑 똑같은 소리 한 거 알아?"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_48_resolution"
        },
        "이나가 동쪽 끝으로 걸어가다가, 어깨 너머로 돌아봤다.",
        {
          "say": "ina",
          "text": "잘 자, 1103호. …아, 여기선 서쪽 끝 방이지."
        },
        {
          "say": "me",
          "text": "…안녕히 주무세요, 동쪽 끝 방."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_49": {
      "title": "트윈이 아니었던 예약",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "계약이 끝나기 전 남은 연차로, 서하가 겨울 바다 일출을 보러 가자고 했다.",
        "방은 두 개 잡았다고, 확인했다고 했다. 해 질 녘 호텔 복도에서 카드키를 받았다.",
        {
          "say": "seoha",
          "text": "네 방 키. 난 1207호."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_49_setup"
        },
        "서하가 여행 가방을 세우고 예약 문자의 방 번호를 확인했다.",
        {
          "say": "me",
          "text": "…봉투에 저도 1207호라고 적혀 있는데요."
        },
        {
          "say": "seoha",
          "text": "…같은 번호라고?"
        },
        {
          "eventCg": "r60_49",
          "eventBg": "r60_49",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "문 안을 본 서하가 휴대폰 화면을 다시 들어 보였다.",
        {
          "say": "seoha",
          "text": "침대가 하나야. 분명히 두 개로 잡았어. 여기 봐, '2'라고…"
        },
        {
          "say": "me",
          "text": "예약 내용을 같이 확인해 볼까요?"
        },
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_49_reaction"
        },
        "'디럭스 더블 1실, 성인 2.' 숫자 2는 방이 아니라 사람 옆에 붙어 있었다.",
        {
          "say": "seoha",
          "text": "…두 방이 아니라, 두 사람으로 한 방을 잡았더라."
        },
        {
          "say": "me",
          "text": "프런트에 빈방이 있는지 물어볼까요?"
        },
        {
          "say": "seoha",
          "text": "확인했는데. 분명히 확인… 죄송… 아니, 미안."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_49_resolution"
        },
        "프런트와 통화를 마친 서하가 고개를 저었다. 주말 성수기라 빈방이 없었다.",
        {
          "say": "seoha",
          "text": "베개만 네 개 더 받기로 했어. 가운데 한 줄, 경계선이야."
        },
        {
          "say": "me",
          "text": "네. 제가 가방부터 치울게요."
        },
        {
          "say": "seoha",
          "text": "일출은 7시 36분이야. 오늘은 일찍 자자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_50": {
      "title": "베개로 나눈 경계선",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "겨울 바다 호텔. 두 개인 줄 알았던 방은 하나였고, 침대도 하나였다.",
        {
          "say": "seoha",
          "text": "성수기라 빈방이 없대. 베개 네 개로 정리하자. 확인한 사람 체면이 있지."
        },
        {
          "say": "me",
          "text": "네. 서하 씨가 정하는 대로 할게요."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_50_setup"
        },
        "라벤더색 니트로 갈아입은 서하가 베개를 안고 침대 폭을 뼘으로 쟀다.",
        {
          "say": "seoha",
          "text": "이걸 가운데 한 줄로 놓으면 구분하기 쉽겠다."
        },
        {
          "say": "me",
          "text": "생각보다 정밀한 작업이네요."
        },
        {
          "eventCg": "r60_50",
          "eventBg": "r60_50",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "베개가 한 줄로 놓였다. 서하가 제 쪽을 가리키자 나도 마지막 베개를 맞췄다.",
        {
          "say": "seoha",
          "text": "여기부터 내 쪽. 알겠지?"
        },
        {
          "say": "me",
          "text": "네. 경계선 확인했어요."
        },
        {
          "bg": "r60bg_hotel_suite_evening",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_50_reaction"
        },
        "엄숙하게 말하던 서하가 먼저 웃어 버렸다. 낮아진 목소리가 베개 한 줄 너머에서 들렸다.",
        {
          "say": "seoha",
          "text": "너무 진지했나? 그냥 편하게 쉬려고 그러는 거야."
        },
        {
          "say": "me",
          "text": "네. …선 넘으면 어떻게 돼요?"
        },
        {
          "say": "seoha",
          "text": "벌칙. 캔커피 두 개. 잠결에 넘어도 벌칙."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_50_resolution"
        },
        "서하가 마지막 베개를 토닥이며 잘 자라고 했다.",
        {
          "say": "seoha",
          "text": "갈아입고 나오면 불 끈다. 잘 자, {N}."
        },
        {
          "say": "seoha",
          "text": "일출은 7시 36분이야. 알람은 내가 세 개 맞춰 뒀어."
        },
        {
          "say": "me",
          "text": "안녕히 주무세요, 서하 씨."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_51": {
      "title": "담요 끝을 붙잡고",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_suite_night",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "봄 진로 캠프 사전 답사에 학생 대표로 따라왔다. 이나는 초청 강사로 함께였다.",
        "그날 밤 눈으로 셔틀이 끊겼다. 인솔 선생님은 관리동에서 차편을 알아보셨다.",
        {
          "say": "ina",
          "text": "학교엔 선생님이 연락하셨어. 첫차까지 이 빈 숙소 방에서 버티자."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_51_setup"
        },
        "방 난방이 약했다. 이나가 큰 담요 가운데를 손날로 눌렀다.",
        {
          "say": "ina",
          "text": "비품은 이 한 장뿐이래. 이렇게 딱 반씩이면 되겠지?"
        },
        {
          "say": "me",
          "text": "네. 저는 이쪽 끝만 있으면 돼요."
        },
        "손날이 지나간 자리가 경계선이 됐다. 그 선 너머가 가까웠다.",
        {
          "eventCg": "r60_51",
          "eventBg": "r60_51",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "한참 뒤, 담요가 전부 이나 쪽으로 넘어가 있었다. 끝자락을 더듬는 손끝에 이나가 눈을 떴다.",
        {
          "say": "ina",
          "text": "어… 내가 다 가져갔어?"
        },
        {
          "say": "me",
          "text": "그, 담요 끝이 거기까지 도망가서요."
        },
        {
          "bg": "r60bg_hotel_suite_night",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_51_reaction"
        },
        "이나가 담요를 활짝 펴 반쪽을 돌려주었다. 목소리가 잠에 잠겨 낮았다.",
        {
          "say": "ina",
          "text": "미안. 잠들면 이렇게 되는 줄 몰랐어."
        },
        {
          "say": "me",
          "text": "처음 알게 된 거면, 저만 아는 거네요."
        },
        {
          "say": "ina",
          "text": "…그건 비밀로 해 줘. 반은 네 거야, {N}."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_51_resolution"
        },
        "이나가 제 쪽 담요 끝을 집어 보이며 졸린 눈으로 웃었다.",
        {
          "say": "ina",
          "text": "오늘은 이 끝을 꼭 잡고 잘게. 첫차는 내가 깨워 줄게."
        },
        {
          "say": "me",
          "text": "너무 힘주진 마세요. 안녕히 주무세요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_52": {
      "title": "저린 팔로 맞은 아침",
      "heroine": "seoha",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_hotel_suite_morning",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "겨울 바다 호텔의 아침. 서하의 알람이 울렸다. 세 개 중 첫 번째였다.",
        "어젯밤 베개 네 개로 세운 경계선은, 분명히 있었다.",
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_52_setup"
        },
        "어젯밤 가운데 세워 둔 베개는 저만치 밀려나 있었다.",
        "아침 빛에 눈을 뜬 서하가 베개를 더듬다 손을 멈췄다.",
        {
          "say": "seoha",
          "text": "…그런데 베개가 왜 이렇게 단단하지?"
        },
        {
          "eventCg": "r60_52",
          "eventBg": "r60_52",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "몸을 일으킨 둘은 담요 위에 겹친 소맷자락을 내려다보았다.",
        {
          "say": "seoha",
          "text": "잠깐. 이거… 네 팔이야?"
        },
        "잠에 잠긴 목소리가 평소보다 가까이에서 났다. 눈을 어디에 둬야 할지 몰랐다.",
        {
          "say": "me",
          "text": "그러네요. 저도 서하 씨 팔을 베고 있었어요."
        },
        {
          "bg": "r60bg_hotel_suite_morning",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_52_reaction"
        },
        "천천히 팔을 뺀 서하가 저린 손가락을 폈다 접었다.",
        {
          "say": "seoha",
          "text": "둘 다 조금씩 움직이자. 아직 찌릿해."
        },
        {
          "say": "me",
          "text": "저, 저도요. …이번엔 베개부터 제가 다시 놓을게요."
        },
        {
          "say": "seoha",
          "text": "지금 말 더듬었지? 아직 덜 깼네."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_52_resolution"
        },
        "서하가 흐트러진 베개를 들어 보이며 웃었다.",
        {
          "say": "seoha",
          "text": "잘 잤냐고 묻기 전에, 팔부터 괜찮냐고 물어야겠네."
        },
        {
          "say": "seoha",
          "text": "일출은 7시 36분이야, {N}. 팔 풀리면 나가자."
        },
        {
          "say": "me",
          "text": "이제 괜찮아요. …좋은 아침이에요."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_53": {
      "title": "영화 보다 무릎에 잠들기",
      "heroine": "ina",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_ina_home_living_evening",
          "trans": "fade"
        },
        {
          "show": "ina",
          "pos": "center"
        },
        "엄마가 싸 준 반찬을 들고 윗집에 올라갔다. 이나는 야간 비행에서 막 돌아온 참이었다.",
        {
          "say": "ina",
          "text": "진로 상담 모임에 틀 영화, 오늘 저녁까지 미리 봐야 해. 학생 눈으로 같이 봐 줄래?"
        },
        {
          "say": "me",
          "text": "네. 반찬은 냉장고에 넣어 둘게요. 금방 틀어요."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_53_setup"
        },
        "소파에 나란히 앉았다. 쿠션을 안고 화면을 보던 이나는 대답보다 눈꺼풀이 먼저 느려졌다.",
        {
          "say": "ina",
          "text": "안 졸려. 결말까지만 보고 메모할게."
        },
        {
          "say": "me",
          "text": "졸리시면 잠깐 쉬셔도 돼요. 제가 표시해 둘게요."
        },
        {
          "eventCg": "r60_53",
          "eventBg": "r60_53",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "어깨에 기대던 무게가 무릎 위 쿠션으로 옮겨 왔다. 나는 영화 소리를 낮췄다.",
        "숨소리가 고르게 바뀌었다. 나는 화면 쪽으로만 고개를 두었다.",
        {
          "say": "me",
          "text": "편히 주무세요. 결말은 다음에 같이 봐요."
        },
        {
          "bg": "r60bg_ina_home_living_evening",
          "trans": "cut"
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_53_reaction"
        },
        "잠에서 깬 이나가 쿠션을 짚고 일어났다. 목소리가 아직 낮았다.",
        {
          "say": "ina",
          "text": "무겁진 않았어? 깨워도 됐는데."
        },
        {
          "say": "me",
          "text": "안 무거웠어요. 깨우기 아까워서… 아, 영화는 멈춰 뒀어요."
        },
        {
          "say": "ina",
          "text": "…앞말은 못 들은 척해 줄게."
        },
        {
          "show": "ina",
          "pos": "center",
          "outfit": "r60art_53_resolution"
        },
        "이나가 쿠션을 바로 놓고 흐트러진 머리카락을 정리했다.",
        {
          "say": "ina",
          "text": "다음에는 쿠션을 제대로 베고 볼게. 오늘은 고마워."
        },
        {
          "say": "me",
          "text": "그럼 다음엔 시작 전에 쿠션부터 놔둘게요."
        },
        {
          "say": "ina",
          "text": "메모는 내가 맞출게. 남은 부분은 특강 때 너희랑 같이 보자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_54": {
      "title": "사람이 몰린 엘리베이터",
      "heroine": "haneul",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_elevator",
          "trans": "fade"
        },
        {
          "bg": "r60bg_elevator",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_54_setup"
        },
        {
          "say": "haneul",
          "text": "여긴 생각보다 오래 기다리네."
        },
        {
          "say": "me",
          "text": "다음 거 타도 되겠다."
        },
        {
          "eventCg": "r60_54",
          "eventBg": "r60_54",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "문이 열리자 뒤에서 사람들이 몰려들었다. 하늘은 가방을 앞으로 모으고 나를 올려다봤다.",
        {
          "say": "me",
          "text": "너 괜찮아? 많이 좁다."
        },
        {
          "bg": "r60bg_elevator",
          "trans": "cut"
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_54_reaction"
        },
        {
          "say": "haneul",
          "text": "응. 다음 층에서 조금 비면 괜찮을 거야."
        },
        {
          "say": "me",
          "text": "발 밟으면 바로 말해 줘."
        },
        {
          "show": "haneul",
          "pos": "center",
          "outfit": "r60art_54_resolution"
        },
        {
          "say": "haneul",
          "text": "밖으로 나오니까 공기가 다르네."
        },
        {
          "say": "me",
          "text": "다음엔 여유 있는 걸 기다리자."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_55": {
      "title": "지하철 급정거",
      "heroine": "seoyoon",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_subway_car",
          "trans": "fade"
        },
        {
          "bg": "r60bg_subway_car",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_55_setup"
        },
        "내릴 역이 가까워지자 서윤이 문 쪽을 살폈다. 흔들리던 열차가 갑자기 속도를 크게 줄였다.",
        {
          "say": "seoyoon",
          "text": "다음 역이지? 금방이네."
        },
        {
          "say": "me",
          "text": "응, 다음 역. 아직 움직이니까 손잡이는 잡고 있자."
        },
        {
          "eventCg": "r60_55",
          "eventBg": "r60_55",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "급정거에 서윤의 몸이 기울었다. 나도 모르게 팔을 뻗어 받쳤다. 서윤이 기둥을 다시 쥐고, 가까워진 거리에 잠깐 굳었다.",
        {
          "say": "seoyoon",
          "text": "앗—! …잡았으면 됐어. 고마워."
        },
        {
          "say": "me",
          "text": "발 디뎠지? 이제 천천히 놓을게."
        },
        {
          "bg": "r60bg_subway_car",
          "trans": "cut"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_55_reaction"
        },
        "서윤이 발을 다시 딛고 괜찮다고 했다. 놀라서인지, 조금 붉어진 얼굴로 시선을 피했다.",
        {
          "say": "seoyoon",
          "text": "…괜찮아. 놀라서 손을 놓친 거야. 진짜로."
        },
        {
          "say": "me",
          "text": "넘어지지 않아서 다행이야. 어디 부딪치지는 않았고?"
        },
        {
          "show": "seoyoon",
          "pos": "center",
          "outfit": "r60art_55_resolution"
        },
        "서윤이 기둥을 꼭 쥐었다. 반응이 빨랐다며 웃는 사이, 열차는 다시 천천히 역으로 들어갔다.",
        {
          "say": "seoyoon",
          "text": "야, 너 반응 빠르다. 육상부 올래?"
        },
        {
          "say": "me",
          "text": "오늘은 네 출발 연습을 좀 따라 한 셈이네."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_56": {
      "title": "책상 아래에서 이마 쿵",
      "heroine": "daeun",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_reading_room_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_reading_room_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_56_setup"
        },
        "책상 아래로 지우개가 굴러떨어졌다. 다은이 주워 오겠다고 말하는 순간, 나도 같은 쪽으로 몸을 숙였다.",
        {
          "say": "daeun",
          "text": "저기… 지우개 떨어졌어. 내가 주울게."
        },
        {
          "say": "me",
          "text": "내 발 가까이에 떨어졌네. 내가—"
        },
        {
          "eventCg": "r60_56",
          "eventBg": "r60_56",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "같은 지우개를 향하던 이마가 가볍게 부딪쳤다. 놀라 고개를 들려던 우리는, 눈앞의 얼굴을 보고 또 멈췄다.",
        {
          "say": "daeun",
          "text": "아야… 둘이 동시에 숙였네. 괜찮아?"
        },
        {
          "say": "me",
          "text": "아, 미안. 나도 동시에 숙였어. 아프지 않아?"
        },
        {
          "bg": "r60bg_reading_room_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_56_reaction"
        },
        "다은이 이마를 한 번 문지르고 지우개를 들어 보였다. 별것 아닌 물건 때문에 둘 다 서두른 게 우스웠다.",
        {
          "say": "daeun",
          "text": "…난 괜찮아. 지우개 하나에 너무 급했지."
        },
        {
          "say": "me",
          "text": "응, 나도 괜찮아. 지우개는 무사하네."
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_56_resolution"
        },
        "다은이 지우개를 책상 위에 내려놓았다. 다음에는 먼저 말한 사람이 줍기로 했다.",
        {
          "say": "daeun",
          "text": "다음엔… 먼저 말한 사람이 줍는 걸로 하자."
        },
        {
          "say": "me",
          "text": "그럼 이번 승자는 먼저 말한 너야. 다음엔 기다릴게."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_57": {
      "title": "입가의 생크림",
      "heroine": "daeun",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_cafe_day",
          "trans": "fade"
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_57_setup"
        },
        "다은이 케이크를 한 입 맛보고 고개를 끄덕였다. 이야기를 이어 가는 동안, 입가에 생크림이 조금 묻어 있었다.",
        {
          "say": "daeun",
          "text": "이 케이크… 생각보다 안 달아서 좋아."
        },
        {
          "say": "me",
          "text": "딸기가 신선해서 그런가 봐. 잠깐, 크림이 묻었네."
        },
        {
          "eventCg": "r60_57",
          "eventBg": "r60_57",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "접은 냅킨을 들고 다은의 입가 쪽으로 손을 뻗었다. 다은의 말이 뚝 끊기고, 시선이 내 손을 따라왔다.",
        {
          "say": "daeun",
          "text": "…응? 입가에 묻었어? 잠깐만…"
        },
        {
          "say": "me",
          "text": "가만히 있어 봐. 여기만 살짝 닦을게."
        },
        {
          "bg": "r60bg_cafe_day",
          "trans": "cut"
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_57_reaction"
        },
        "다은이 안경을 고쳐 쓰며 고맙다는 말을 골랐다. 방금까지 자연스럽던 대화에 짧은 침묵이 생겼다.",
        {
          "say": "daeun",
          "text": "…갑자기 조용해졌지. 조금 놀라서 그래."
        },
        {
          "say": "me",
          "text": "갑자기 손을 가져가서 놀랐지. 이제 다 닦였어."
        },
        {
          "show": "daeun",
          "pos": "center",
          "outfit": "r60art_57_resolution"
        },
        "다은이 남은 냅킨을 내 쪽으로 밀어 주었다. 조금 전 일을 웃으며 넘기고, 우리는 다시 케이크 이야기를 이어 갔다.",
        {
          "say": "daeun",
          "text": "닦아 줘서 고마워. 다음엔… 내가 먼저 확인할게."
        },
        {
          "say": "me",
          "text": "그럼 내 입가도 확인해 줘. 나는 안 묻었어?"
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_58": {
      "title": "팝콘 위에서 겹친 손",
      "heroine": "yuri",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_yuri_cinema_previews",
          "trans": "fade"
        },
        {
          "bg": "r60bg_yuri_cinema_previews",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_58_setup"
        },
        {
          "say": "yuri",
          "text": "예고편 아직 많이 남았네."
        },
        {
          "say": "me",
          "text": "그럼 팝콘부터 먹을까?"
        },
        {
          "eventCg": "r60_58",
          "eventBg": "r60_58",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "같은 한 알을 향한 손이 통 위에서 겹쳤다.",
        {
          "say": "me",
          "text": "어… 너도 이거 집으려고 했어?"
        },
        {
          "bg": "r60bg_yuri_cinema_previews",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_58_reaction"
        },
        {
          "say": "yuri",
          "text": "먼저 가져가. 나는 다른 걸 먹으면 되니까."
        },
        {
          "say": "me",
          "text": "아니, 네가 먼저였던 것 같은데."
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_58_resolution"
        },
        {
          "say": "yuri",
          "text": "이러다 영화 끝나도 못 먹겠다~ 하나씩 집자. 헤헤."
        },
        {
          "say": "me",
          "text": "응. 대신 이제 목소리는 작게."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_59": {
      "title": "너무 좁은 사진 부스",
      "heroine": "yuri",
      "minAff": 0,
      "steps": [
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "fade"
        },
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_59_setup"
        },
        {
          "say": "yuri",
          "text": "벤치가 생각보다 작다. 가방은 발밑에 둘까?"
        },
        {
          "say": "me",
          "text": "응. 그래도 한쪽 얼굴이 잘리는데."
        },
        {
          "eventCg": "r60_59",
          "eventBg": "r60_59",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "유리가 화면을 확인하고 내 쪽으로 조금 더 붙어 앉았다. 어깨가 닿자 둘 다 웃음이 났다.",
        {
          "say": "me",
          "text": "이제야 둘 다 들어온다."
        },
        {
          "bg": "r60bg_yuri_photo_booth_afternoon",
          "trans": "cut"
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_59_reaction"
        },
        {
          "say": "yuri",
          "text": "카운트 너무 빠르잖아. 아직 표정 못 정했어."
        },
        {
          "say": "me",
          "text": "지금 웃는 표정이면 되겠는데."
        },
        {
          "show": "yuri",
          "pos": "center",
          "outfit": "r60art_59_resolution"
        },
        {
          "say": "yuri",
          "text": "한 장은 네가 가져!! 같은 사진이어야 기억도 같지. 헤헤."
        },
        {
          "say": "me",
          "text": "그럼 나는 이쪽 절반."
        },
        {
          "hideAll": true
        }
      ]
    },
    "r60_60": {
      "title": "집 앞에서 머뭇거리다 입맞춤",
      "heroine": "seoha",
      "minAff": 100,
      "steps": [
        {
          "bg": "r60bg_apartment_entrance_night",
          "trans": "fade"
        },
        {
          "show": "seoha",
          "pos": "center"
        },
        "호숫가에서 서하의 집까지. 학교 뒷골목을 손을 잡고 걸었다.",
        {
          "say": "seoha",
          "text": "이상해. 1년 내내 다닌 골목인데, 처음 오는 길 같아."
        },
        {
          "say": "me",
          "text": "직원이 아니라서 그런가 봐."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_60_setup"
        },
        "골목 끝, 서하의 집 앞. 서하는 가방 끈만 만지작거렸다.",
        {
          "say": "seoha",
          "text": "다 왔네. …조금만 더 같이 있고 싶다."
        },
        {
          "say": "seoha",
          "text": "들어가기 전에, 확인할 거 하나만."
        },
        {
          "say": "me",
          "text": "뭔데?"
        },
        {
          "say": "seoha",
          "text": "…눈 감아."
        },
        {
          "eventCg": "r60_60",
          "eventBg": "r60_60",
          "hideAll": true
        },
        {
          "fx": "heart"
        },
        "가로등 아래로 얼굴이 가까워졌다. 숨을 멈춘 건 둘 다였다.",
        "짧고 가벼운 입맞춤. 펜던트가 내 코트 단추에 부딪혀 작게 소리를 냈다.",
        {
          "bg": "r60bg_apartment_entrance_night",
          "trans": "cut"
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_60_reaction"
        },
        "서하가 눈을 내렸다가, 붉어진 얼굴로 다시 눈을 맞췄다.",
        {
          "say": "seoha",
          "text": "…확인."
        },
        {
          "say": "me",
          "text": "뭐가 확인이야?"
        },
        {
          "say": "seoha",
          "text": "빈칸이 아니었다는 거. 1년 동안."
        },
        {
          "show": "seoha",
          "pos": "center",
          "outfit": "r60art_60_resolution"
        },
        {
          "say": "seoha",
          "text": "들어갈게. 더 있으면 내일 출근 못 해."
        },
        {
          "say": "me",
          "text": "내일 출근 안 하잖아."
        },
        {
          "say": "seoha",
          "text": "…아. 그러네. 나 이제 백수네."
        },
        "서하가 문 앞에서 작은 손인사를 보냈다.",
        {
          "hideAll": true
        }
      ]
    }
  });
  var STUDENT = [
    {
      "id": "r60_3",
      "title": "커플 화보 촬영",
      "heroine": "yuri",
      "scene": "r60_3",
      "onceFlag": "r60_seen_3",
      "trigger": {
        "scene": "confession_yuri",
        "index": 0,
        "kind": "after_confession",
        "seasons": [],
        "priority": 30,
        "minAff": 100
      },
      "minAff": 100,
      "requireSuccess": true,
      "requiresEvent": null,
      "invitation": "커플 화보 촬영 · 유리와 함께 간다."
    },
    {
      "id": "r60_10",
      "title": "코스튬 사이즈 오류",
      "heroine": "haneul",
      "scene": "r60_10",
      "onceFlag": "r60_seen_10",
      "trigger": {
        "scene": "enc_haneul_autumn_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "autumn"
        ],
        "priority": 40,
        "minAff": 10
      },
      "minAff": 10,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "코스튬 사이즈 오류 · 하늘과 함께 간다."
    },
    {
      "id": "r60_11",
      "title": "사진부스 커플 미션",
      "heroine": "haneul",
      "scene": "r60_11",
      "onceFlag": "r60_seen_11",
      "trigger": {
        "scene": "confession_haneul",
        "index": 0,
        "kind": "after_confession",
        "seasons": [],
        "priority": 20,
        "minAff": 100
      },
      "minAff": 100,
      "requireSuccess": true,
      "requiresEvent": null,
      "invitation": "사진부스 커플 미션 · 하늘과 함께 간다."
    },
    {
      "id": "r60_13",
      "title": "향수 시향",
      "heroine": "yuri",
      "scene": "r60_13",
      "onceFlag": "r60_seen_13",
      "trigger": {
        "scene": "enc_yuri_summer_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "summer"
        ],
        "priority": 30,
        "minAff": 20
      },
      "minAff": 20,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "향수 시향 · 유리와 함께 간다."
    },
    {
      "id": "r60_15",
      "title": "귀걸이 찾아주기",
      "heroine": "haneul",
      "scene": "r60_15",
      "onceFlag": "r60_seen_15",
      "trigger": {
        "scene": "enc_haneul_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 25,
        "minAff": 30
      },
      "minAff": 30,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "귀걸이 찾아주기 · 하늘과 함께 간다."
    },
    {
      "id": "r60_16",
      "title": "커플 요가 체험",
      "heroine": "seoyoon",
      "scene": "r60_16",
      "onceFlag": "r60_seen_16",
      "trigger": {
        "scene": "enc_seoyoon_summer_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "summer"
        ],
        "priority": 40,
        "minAff": 15
      },
      "minAff": 15,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "커플 요가 체험 · 서윤과 함께 간다."
    },
    {
      "id": "r60_21",
      "title": "옷장에 같이 숨기",
      "heroine": "haneul",
      "scene": "r60_21",
      "onceFlag": "r60_seen_21",
      "trigger": {
        "scene": "enc_haneul_winter_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "winter"
        ],
        "priority": 30,
        "minAff": 40
      },
      "minAff": 40,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "옷장에 같이 숨기 · 하늘과 함께 간다."
    },
    {
      "id": "r60_23",
      "title": "립밤 공유 논쟁",
      "heroine": "daeun",
      "scene": "r60_23",
      "onceFlag": "r60_seen_23",
      "trigger": {
        "scene": "enc_daeun_spring_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "spring"
        ],
        "priority": 45,
        "minAff": 0
      },
      "minAff": 0,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "립밤 공유 논쟁 · 다은과 함께 간다."
    },
    {
      "id": "r60_25",
      "title": "의상 매장 커플 피팅",
      "heroine": "haneul",
      "scene": "r60_25",
      "onceFlag": "r60_seen_25",
      "trigger": {
        "scene": "enc_haneul_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 30,
        "minAff": 25
      },
      "minAff": 25,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "의상 매장 커플 피팅 · 하늘과 함께 간다."
    },
    {
      "id": "r60_26",
      "title": "바디페인팅 행사",
      "heroine": "seoyoon",
      "scene": "r60_26",
      "onceFlag": "r60_seen_26",
      "trigger": {
        "scene": "enc_seoyoon_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 35,
        "minAff": 20
      },
      "minAff": 20,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "바디페인팅 행사 · 서윤과 함께 간다."
    },
    {
      "id": "r60_27",
      "title": "향초 만들기 공방",
      "heroine": "yuri",
      "scene": "r60_27",
      "onceFlag": "r60_seen_27",
      "trigger": {
        "scene": "enc_yuri_autumn_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "autumn"
        ],
        "priority": 35,
        "minAff": 30
      },
      "minAff": 30,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "향초 만들기 공방 · 유리와 함께 간다."
    },
    {
      "id": "r60_29",
      "title": "커플 게임 벌칙",
      "heroine": "yuri",
      "scene": "r60_29",
      "onceFlag": "r60_seen_29",
      "trigger": {
        "scene": "enc_yuri_summer_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "summer"
        ],
        "priority": 25,
        "minAff": 30
      },
      "minAff": 30,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "커플 게임 벌칙 · 유리와 함께 간다."
    },
    {
      "id": "r60_39",
      "title": "옆 칸을 착각했다",
      "heroine": "haneul",
      "scene": "r60_39",
      "onceFlag": "r60_seen_39",
      "trigger": {
        "scene": "enc_haneul_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 15,
        "minAff": 40
      },
      "minAff": 40,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "옆 칸을 착각했다 · 하늘과 함께 간다."
    },
    {
      "id": "r60_40",
      "title": "탈의실 앞 장난",
      "heroine": "haneul",
      "scene": "r60_40",
      "onceFlag": "r60_seen_40",
      "trigger": {
        "scene": "enc_haneul_summer_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "summer"
        ],
        "priority": 35,
        "minAff": 20
      },
      "minAff": 20,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "탈의실 앞 장난 · 하늘과 함께 간다."
    },
    {
      "id": "r60_41",
      "title": "커튼 너머의 한 벌",
      "heroine": "haneul",
      "scene": "r60_41",
      "onceFlag": "r60_seen_41",
      "trigger": {
        "scene": "enc_haneul_winter_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "winter"
        ],
        "priority": 20,
        "minAff": 45
      },
      "minAff": 45,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "커튼 너머의 한 벌 · 하늘과 함께 간다."
    },
    {
      "id": "r60_44",
      "title": "큰 파도와 풀린 머리끈",
      "heroine": "seoyoon",
      "scene": "r60_44",
      "onceFlag": "r60_seen_44",
      "trigger": {
        "scene": "enc_seoyoon_summer_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "summer"
        ],
        "priority": 35,
        "minAff": 25
      },
      "minAff": 25,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "큰 파도와 풀린 머리끈 · 서윤과 함께 간다."
    },
    {
      "id": "r60_45",
      "title": "빌려 입은 큰 셔츠",
      "heroine": "seoyoon",
      "scene": "r60_45",
      "onceFlag": "r60_seen_45",
      "trigger": {
        "scene": "enc_seoyoon_summer_morning",
        "index": 0,
        "kind": "weekend",
        "seasons": [
          "summer"
        ],
        "priority": 25,
        "minAff": 35
      },
      "minAff": 35,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "빌려 입은 큰 셔츠 · 서윤과 함께 간다."
    },
    {
      "id": "r60_46",
      "title": "소나기 속 재킷",
      "heroine": "seoyoon",
      "scene": "r60_46",
      "onceFlag": "r60_seen_46",
      "trigger": {
        "scene": "enc_seoyoon_summer_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "summer"
        ],
        "priority": 40,
        "minAff": 15
      },
      "minAff": 15,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "소나기 속 재킷 · 서윤과 함께 간다."
    },
    {
      "id": "r60_54",
      "title": "사람이 몰린 엘리베이터",
      "heroine": "haneul",
      "scene": "r60_54",
      "onceFlag": "r60_seen_54",
      "trigger": {
        "scene": "enc_haneul_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 20,
        "minAff": 35
      },
      "minAff": 35,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "사람이 몰린 엘리베이터 · 하늘과 함께 간다."
    },
    {
      "id": "r60_55",
      "title": "지하철 급정거",
      "heroine": "seoyoon",
      "scene": "r60_55",
      "onceFlag": "r60_seen_55",
      "trigger": {
        "scene": "enc_seoyoon_winter_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "winter"
        ],
        "priority": 30,
        "minAff": 30
      },
      "minAff": 30,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "지하철 급정거 · 서윤과 함께 간다."
    },
    {
      "id": "r60_56",
      "title": "책상 아래에서 이마 쿵",
      "heroine": "daeun",
      "scene": "r60_56",
      "onceFlag": "r60_seen_56",
      "trigger": {
        "scene": "enc_daeun_spring_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "spring"
        ],
        "priority": 40,
        "minAff": 10
      },
      "minAff": 10,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "책상 아래에서 이마 쿵 · 다은과 함께 간다."
    },
    {
      "id": "r60_57",
      "title": "입가의 생크림",
      "heroine": "daeun",
      "scene": "r60_57",
      "onceFlag": "r60_seen_57",
      "trigger": {
        "scene": "enc_daeun_spring_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "spring"
        ],
        "priority": 35,
        "minAff": 25
      },
      "minAff": 25,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "입가의 생크림 · 다은과 함께 간다."
    },
    {
      "id": "r60_58",
      "title": "팝콘 위에서 겹친 손",
      "heroine": "yuri",
      "scene": "r60_58",
      "onceFlag": "r60_seen_58",
      "trigger": {
        "scene": "enc_yuri_winter_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "winter"
        ],
        "priority": 30,
        "minAff": 35
      },
      "minAff": 35,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "팝콘 위에서 겹친 손 · 유리와 함께 간다."
    },
    {
      "id": "r60_59",
      "title": "너무 좁은 사진 부스",
      "heroine": "yuri",
      "scene": "r60_59",
      "onceFlag": "r60_seen_59",
      "trigger": {
        "scene": "enc_yuri_autumn_morning",
        "index": 0,
        "kind": "schoolday",
        "seasons": [
          "autumn"
        ],
        "priority": 20,
        "minAff": 40
      },
      "minAff": 40,
      "requireSuccess": false,
      "requiresEvent": null,
      "invitation": "너무 좁은 사진 부스 · 유리와 함께 간다."
    }
  ];
  window.STUDENT_EVENTS = window.STUDENT_EVENTS || [];
  STUDENT.forEach(function (row) { if (!window.STUDENT_EVENTS.some(function (e) { return e.id === row.id; })) window.STUDENT_EVENTS.push(row); });
  window.ADULT_EVENTS = [
    {
      "id": "r60_7",
      "title": "예약표의 두 자리",
      "route": "ina",
      "scene": "r60_7",
      "invite": "휴식권 두 장이 한 예약이래. 같이 가 줄래?",
      "onceFlag": "r60_seen_7",
      "afterChapter": 1,
      "order": 7,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_8",
      "title": "머리 말려주기",
      "route": "ina",
      "scene": "r60_8",
      "invite": "비 다 맞았어. 질문지는 윗집으로 가져다줄래?",
      "onceFlag": "r60_seen_8",
      "afterChapter": 1,
      "order": 8,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_5",
      "title": "소맷부리의 단추 하나",
      "route": "ina",
      "scene": "r60_5",
      "invite": "소매 단추 하나만 부탁해도 될까?",
      "onceFlag": "r60_seen_5",
      "afterChapter": 2,
      "order": 5,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_17",
      "title": "둘이 맞추는 박자",
      "route": "ina",
      "scene": "r60_17",
      "invite": "연습실에 잠깐 올래? 박자 맞출 짝이 필요해.",
      "onceFlag": "r60_seen_17",
      "afterChapter": 2,
      "order": 17,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_12",
      "title": "조금 더 오래 있고 싶어",
      "route": "ina",
      "scene": "r60_12",
      "invite": "셔틀 오기 전까지, 남은 얘기 마저 할까?",
      "onceFlag": "r60_seen_12",
      "afterChapter": 3,
      "order": 12,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_22",
      "title": "자동차 뒷좌석 물건 찾기",
      "route": "ina",
      "scene": "r60_22",
      "invite": "오늘 밤에 자료 상자만 실어 줄래?",
      "onceFlag": "r60_seen_22",
      "afterChapter": 3,
      "order": 22,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_53",
      "title": "영화 보다 무릎에 잠들기",
      "route": "ina",
      "scene": "r60_53",
      "invite": "상담 때 틀 영화, 오늘 저녁에 같이 봐 줄래?",
      "onceFlag": "r60_seen_53",
      "afterChapter": 3,
      "order": 53,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_6",
      "title": "가운만 남은 저녁",
      "route": "ina",
      "scene": "r60_6",
      "invite": "내일 순서만 맞추자. 거실로 와 줄래?",
      "onceFlag": "r60_seen_6",
      "afterChapter": 4,
      "order": 6,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_24",
      "title": "호텔 카드키 하나",
      "route": "ina",
      "scene": "r60_24",
      "invite": "그 카드키, 아직 갖고 있지?",
      "onceFlag": "r60_seen_24",
      "afterChapter": 4,
      "order": 24,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_34",
      "title": "연수원 복도에서 마주치다",
      "route": "ina",
      "scene": "r60_34",
      "invite": "층별 질문지, 지금 걷으러 올래?",
      "onceFlag": "r60_seen_34",
      "afterChapter": 4,
      "order": 34,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_32",
      "title": "다음엔 목소리부터",
      "route": "ina",
      "scene": "r60_32",
      "invite": "새벽 비행이라, 자료는 윗집으로 부탁해.",
      "onceFlag": "r60_seen_32",
      "afterChapter": 5,
      "order": 32,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_33",
      "title": "걸리지 않는 문고리",
      "route": "ina",
      "scene": "r60_33",
      "invite": "겨울 바다 예뻐. 우리 엄마 집, 같이 갈래?",
      "onceFlag": "r60_seen_33",
      "afterChapter": 5,
      "order": 33,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_36",
      "title": "높이 들어 올린 수건",
      "route": "ina",
      "scene": "r60_36",
      "invite": "행사 소품 상자, 우리 집에 맡겨 둘래?",
      "onceFlag": "r60_seen_36",
      "afterChapter": 5,
      "order": 36,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_47",
      "title": "수건으로 머리 닦아주기",
      "route": "ina",
      "scene": "r60_47",
      "invite": "표지 세우고 왔더니 다 젖었어. 수건 좀.",
      "onceFlag": "r60_seen_47",
      "afterChapter": 5,
      "order": 47,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_19",
      "title": "립스틱 번짐",
      "route": "ina",
      "scene": "r60_19",
      "invite": "차 한 잔만 하고 가. 거울도 한번 보고.",
      "onceFlag": "r60_seen_19",
      "afterChapter": 6,
      "order": 19,
      "minAff": 100,
      "requiresEvent": 30
    },
    {
      "id": "r60_30",
      "title": "문이 닫히기 전에",
      "route": "ina",
      "scene": "r60_30",
      "invite": "공항버스 내리면, 집까지 같이 걷자.",
      "onceFlag": "r60_seen_30",
      "afterChapter": 6,
      "order": 30,
      "minAff": 100,
      "requiresEvent": null
    },
    {
      "id": "r60_48",
      "title": "복도에서 마주친 한 걸음",
      "route": "ina",
      "scene": "r60_48",
      "invite": "사흘 쉬는데, 우리 엄마 게스트하우스 갈래?",
      "onceFlag": "r60_seen_48",
      "afterChapter": 6,
      "order": 48,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_51",
      "title": "담요 끝을 붙잡고",
      "route": "ina",
      "scene": "r60_51",
      "invite": "첫차까지 빈방에서 대기야. 담요는 한 장이고.",
      "onceFlag": "r60_seen_51",
      "afterChapter": 6,
      "order": 51,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_1",
      "title": "마사지 연습 상대",
      "route": "seoha",
      "scene": "r60_1",
      "invite": "어깨만 잠깐 빌려줄 수 있어?",
      "onceFlag": "r60_seen_1",
      "afterChapter": 1,
      "order": 1,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_9",
      "title": "안내물에 들어갈 한 장",
      "route": "seoha",
      "scene": "r60_9",
      "invite": "안내물에 들어갈 그림, 오늘 저녁 될까?",
      "onceFlag": "r60_seen_9",
      "afterChapter": 1,
      "order": 9,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_14",
      "title": "목걸이 채워주기",
      "route": "seoha",
      "scene": "r60_14",
      "invite": "사진 찍기 전에 잠깐만 도와줄래?",
      "onceFlag": "r60_seen_14",
      "afterChapter": 2,
      "order": 14,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_18",
      "title": "이마로 재는 열",
      "route": "seoha",
      "scene": "r60_18",
      "invite": "명찰 상자, 우리 집으로 옮겨 줄래?",
      "onceFlag": "r60_seen_18",
      "afterChapter": 2,
      "order": 18,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_20",
      "title": "두 치수 큰 택배",
      "route": "seoha",
      "scene": "r60_20",
      "invite": "조끼 상자 왔어. 수량만 세고 가 줄래?",
      "onceFlag": "r60_seen_20",
      "afterChapter": 2,
      "order": 20,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_2",
      "title": "등에 선크림",
      "route": "seoha",
      "scene": "r60_2",
      "invite": "방학 답사, 같이 가 줄 수 있어?",
      "onceFlag": "r60_seen_2",
      "afterChapter": 3,
      "order": 2,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_4",
      "title": "드레스 지퍼 고장",
      "route": "seoha",
      "scene": "r60_4",
      "invite": "시작 전에 준비실로 잠깐 와 줄래?",
      "onceFlag": "r60_seen_4",
      "afterChapter": 3,
      "order": 4,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_43",
      "title": "바다 앞에서 바르는 선크림",
      "route": "seoha",
      "scene": "r60_43",
      "invite": "물때만 다시 보고 올래? 내일 아침.",
      "onceFlag": "r60_seen_43",
      "afterChapter": 3,
      "order": 43,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_28",
      "title": "조명 버튼이 아니었다",
      "route": "seoha",
      "scene": "r60_28",
      "invite": "수련회 숙소 점검, 같이 가 줄래?",
      "onceFlag": "r60_seen_28",
      "afterChapter": 4,
      "order": 28,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_37",
      "title": "한 칸 잘못 읽은 시간표",
      "route": "seoha",
      "scene": "r60_37",
      "invite": "가을 행사 코스 답사, 같이 가 줄래?",
      "onceFlag": "r60_seen_37",
      "afterChapter": 4,
      "order": 37,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_42",
      "title": "등 지퍼 올려주기",
      "route": "seoha",
      "scene": "r60_42",
      "invite": "손이 안 닿는 데가 있어. 잠깐만 도와줄래?",
      "onceFlag": "r60_seen_42",
      "afterChapter": 4,
      "order": 42,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_31",
      "title": "노크를 잊은 밤",
      "route": "seoha",
      "scene": "r60_31",
      "invite": "복도 끝 욕실 쓸 거면 이름 적어 둬.",
      "onceFlag": "r60_seen_31",
      "afterChapter": 5,
      "order": 31,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_35",
      "title": "문틈으로 건넨 한 벌",
      "route": "seoha",
      "scene": "r60_35",
      "invite": "옷을 두고 들어왔어. 잠깐 도와줄래?",
      "onceFlag": "r60_seen_35",
      "afterChapter": 5,
      "order": 35,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_38",
      "title": "젖은 돌바닥과 붙잡은 팔",
      "route": "seoha",
      "scene": "r60_38",
      "invite": "해 지기 전에 정원 사진만 찍고 오자",
      "onceFlag": "r60_seen_38",
      "afterChapter": 5,
      "order": 38,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_49",
      "title": "트윈이 아니었던 예약",
      "route": "seoha",
      "scene": "r60_49",
      "invite": "겨울 바다 일출 보러 갈래? 방은 두 개 잡았어.",
      "onceFlag": "r60_seen_49",
      "afterChapter": 5,
      "order": 49,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_50",
      "title": "베개로 나눈 경계선",
      "route": "seoha",
      "scene": "r60_50",
      "invite": "방 정리 같이 하자. 경계선부터.",
      "onceFlag": "r60_seen_50",
      "afterChapter": 6,
      "order": 50,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_52",
      "title": "저린 팔로 맞은 아침",
      "route": "seoha",
      "scene": "r60_52",
      "invite": "일출은 7시 36분. 먼저 깬 사람이 깨우기.",
      "onceFlag": "r60_seen_52",
      "afterChapter": 6,
      "order": 52,
      "minAff": 0,
      "requiresEvent": null
    },
    {
      "id": "r60_60",
      "title": "집 앞에서 머뭇거리다 입맞춤",
      "route": "seoha",
      "scene": "r60_60",
      "invite": "호숫가에서 집까지, 같이 걸을래?",
      "onceFlag": "r60_seen_60",
      "afterChapter": 6,
      "order": 60,
      "minAff": 100,
      "requiresEvent": null
    }
  ];
  // 성인 무대로 옮긴 편. 그림 속 인물이 달라 기존 컷을 쓰지 않는다.
  window.R60_RECAST = {
    "r60-12": {
      "to": "ina",
      "name": "이나"
    },
    "r60-19": {
      "to": "ina",
      "name": "이나"
    },
    "r60-20": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-22": {
      "to": "ina",
      "name": "이나"
    },
    "r60-28": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-30": {
      "to": "ina",
      "name": "이나"
    },
    "r60-35": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-36": {
      "to": "ina",
      "name": "이나"
    },
    "r60-37": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-38": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-47": {
      "to": "ina",
      "name": "이나"
    },
    "r60-49": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-50": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-51": {
      "to": "ina",
      "name": "이나"
    },
    "r60-52": {
      "to": "seoha",
      "name": "서하"
    },
    "r60-53": {
      "to": "ina",
      "name": "이나"
    }
  };
  // 그림이 담은 장면에 맞춘 제목 (메뉴 표시용)
  window.R60_TITLE = {
    "r60-05": "소맷부리의 단추 하나",
    "r60-11": "사진부스 커플 미션",
    "r60-12": "조금 더 오래 있고 싶어",
    "r60-20": "두 치수 큰 택배",
    "r60-28": "조명 버튼이 아니었다",
    "r60-30": "문이 닫히기 전에",
    "r60-32": "다음엔 목소리부터",
    "r60-33": "걸리지 않는 문고리",
    "r60-35": "문틈으로 건넨 한 벌",
    "r60-37": "한 칸 잘못 읽은 시간표",
    "r60-38": "젖은 돌바닥과 붙잡은 팔",
    "r60-39": "옆 칸을 착각했다",
    "r60-40": "탈의실 앞 장난",
    "r60-41": "커튼 너머의 한 벌",
    "r60-43": "바다 앞에서 바르는 선크림",
    "r60-44": "큰 파도와 풀린 머리끈",
    "r60-48": "복도에서 마주친 한 걸음",
    "r60-49": "트윈이 아니었던 예약",
    "r60-51": "담요 끝을 붙잡고",
    "r60-52": "저린 팔로 맞은 아침"
  };
  window.R60_CURRENT = [{"id":"r60-01","number":1,"hero":"seoha","title":"마사지 연습 상대","original":"마사지 연습 상대 — 마사지 수업 과제를 연습하다 예상보다 가까운 자세가 되어 둘 다 어색해진다.","background_id":"massage-classroom","name":"서하","beats":[{"id":"r60-01-seoha-setup","phase":"setup","title":"마사지 연습 상대 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"868daac78c94c159aa2f9a01b0e092876d014dadff004d4303ce1a8da7bf2835"},"ready":true,"dialogue":[{"speaker":"","text":"반에서 겨우 정한 희망 사항을 채워, 방과 후 신청서를 다시 내러 갔다."},{"speaker":"","text":"서하는 교무동이 아니라, 보건 선생님께 빌린 빈 교육실에 있었다."},{"speaker":"서하","text":"{N}, 마침 잘 왔다. 종일 앉아 있었더니 어깨가 다 굳었네."},{"speaker":"서하","text":"실은 주말마다 듣는 자격증 수업이 있어. 실습 과제 연습 상대를 못 구했어."},{"speaker":"","text":"신청서를 받아 둔 서하가 가방에서 연습 카드를 꺼내 펼쳤다. 어깨 그림이 그려져 있었다."},{"speaker":"서하","text":"여기, 어깨만 잠깐 빌려줄래? 다섯 번만 해 보면 돼."},{"speaker":"나","text":"네. 그 정도면 괜찮아요. 어디에 앉으면 될까요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-01-seoha-incident","phase":"incident","title":"마사지 연습 상대 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-01-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-01-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"868daac78c94c159aa2f9a01b0e092876d014dadff004d4303ce1a8da7bf2835"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 카드 순서대로 옷 위를 천천히 눌렀다. 손끝이 조심스러웠다."},{"speaker":"나","text":"…생각보다 시원하네요. 계속하셔도 돼요."},{"speaker":"","text":"귀 뒤에서 숨소리가 들렸다. 어디를 봐야 할지 몰랐다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-01-seoha-reaction","phase":"reaction","title":"마사지 연습 상대 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"868daac78c94c159aa2f9a01b0e092876d014dadff004d4303ce1a8da7bf2835"},"ready":true,"dialogue":[{"speaker":"","text":"손이 멈췄다. 돌아보니 붉어진 얼굴과 눈이 마주쳤다."},{"speaker":"서하","text":"…생각보다 가까워서. 잠깐만."},{"speaker":"나","text":"아, 아니요. 그, 너무 가까워서… 아니 손이 따뜻해서요."},{"speaker":"서하","text":"…지금 뭐라고 했어?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-01-seoha-resolution","phase":"resolution","title":"마사지 연습 상대 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-01-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/massage-classroom.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"868daac78c94c159aa2f9a01b0e092876d014dadff004d4303ce1a8da7bf2835"},"ready":true,"dialogue":[{"speaker":"나","text":"의자를 조금 옮길게요. 천천히 하시면 될 것 같아요."},{"speaker":"","text":"의자가 반 뼘 물러났다. 서하가 힘을 다시 물으며 카드로 돌아갔다."},{"speaker":"서하","text":"이 정도 힘이면 괜찮아? 다음 주에 한 번만 더 부탁할게."},{"speaker":"나","text":"네. 그땐 제가 캔커피 두 개 사 올게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-02","number":2,"hero":"seoha","title":"등에 선크림","original":"등에 선크림 — 해변에서 등에 발라달라고 부탁했다가 손이 닿을 때마다 움찔한다.","background_id":"beach-day","name":"서하","beats":[{"id":"r60-02-seoha-setup","phase":"setup","title":"등에 선크림 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"우리 반이 낸 해변 정화 봉사 안이 후보에 올랐다. 방학 중 사전 답사에 학생 대표로 따라나섰다."},{"speaker":"서하","text":"박 선생님이 몸살이셔서 둘이 가게 됐어. 담임 선생님 허락은 받았어."},{"speaker":"나","text":"네. 친구들 의견을 제가 정리했으니까, 현장도 같이 볼게요."},{"speaker":"","text":"답사 기록을 마치고 그늘에 앉자, 서하가 선크림 병을 들고 등 쪽을 가리켰다."},{"speaker":"서하","text":"두 시간은 더 걸어야 하는데, 등까지는 혼자 못 바르겠어. 조금만 부탁해도 될까?"},{"speaker":"나","text":"아, 네. 제가 할게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-02-seoha-incident","phase":"incident","title":"등에 선크림 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-02-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-02-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"허락을 받고 어깨 위쪽부터 발랐다. 목덜미가 생각보다 가까웠다."},{"speaker":"나","text":"차가울 수 있어요. 그러면 바로 말씀해 주세요."},{"speaker":"","text":"선크림이 닿은 순간, 서하의 어깨가 작게 움찔했다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-02-seoha-reaction","phase":"reaction","title":"등에 선크림 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 놀란 얼굴로 돌아보다 민망한 웃음을 터뜨렸다. 눈이 마주쳤다."},{"speaker":"서하","text":"앗, 차가워서 그래. 진짜 그것 때문이야. …이거, 기록에서 빼 줄래?"},{"speaker":"나","text":"무슨 기록이요? 저 아무것도 안 적었는데요."},{"speaker":"서하","text":"…넌 그런 거 잘하더라. 모르는 척, 정확하게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-02-seoha-resolution","phase":"resolution","title":"등에 선크림 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-02-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"나","text":"네. 남은 곳은 천천히 바를게요."},{"speaker":"","text":"다 바르자 서하가 병을 닫고 바다 쪽으로 고개를 돌렸다."},{"speaker":"서하","text":"정화 봉사면 아침 시간이 낫겠다. 돌아가서 그 이유도 같이 적자."},{"speaker":"나","text":"네. 오늘 본 것부터 적을게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-03","number":3,"hero":"yuri","title":"커플 화보 촬영","original":"커플 화보 촬영 — 사진사가 계속 “조금 더 가까이”를 요구해 결국 얼굴 사이가 몇 cm밖에 남지 않는다.","background_id":"photo-studio","name":"유리","beats":[{"id":"r60-03-yuri-setup","phase":"setup","title":"커플 화보 촬영 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-setup-green-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-setup-green-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"79e82c2e1ce678b975360d6d69546950ebc1a5cb6abcebdf9100f76ebc8441c3"},"ready":true,"dialogue":[{"speaker":"","text":"서로의 마음을 확인한 날, 그냥 헤어지긴 아깝다며 유리가 나를 사진관으로 끌고 갔다."},{"speaker":"유리","text":"무대에서는 안 떨리는데, 너랑 사진 찍는 건 왜 이러지?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-03-yuri-incident","phase":"incident","title":"커플 화보 촬영 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-03-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-03-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"79e82c2e1ce678b975360d6d69546950ebc1a5cb6abcebdf9100f76ebc8441c3"},"ready":true,"dialogue":[{"speaker":"","text":"사진사가 조금만 더 가까이 앉아 달라고 했다. 유리가 내 손 위에 조심스레 손을 포갰다."},{"speaker":"유리","text":"이번엔… 나도 눈 안 피할게."},{"speaker":"","text":"서로 고개를 끄덕이고 눈을 감았다. 입술이 살짝 닿는 순간 셔터 소리가 났다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-03-yuri-reaction","phase":"reaction","title":"커플 화보 촬영 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"79e82c2e1ce678b975360d6d69546950ebc1a5cb6abcebdf9100f76ebc8441c3"},"ready":true,"dialogue":[{"speaker":"","text":"화면에 뜬 사진을 보자 유리가 두 손으로 붉어진 뺨을 감쌌다."},{"speaker":"유리","text":"자, 잠깐! 이렇게 바로 보여 주면 어떡해…!"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-03-yuri-resolution","phase":"resolution","title":"커플 화보 촬영 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-03-yuri-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/photo-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"79e82c2e1ce678b975360d6d69546950ebc1a5cb6abcebdf9100f76ebc8441c3"},"ready":true,"dialogue":[{"speaker":"","text":"유리는 한참 망설이다 그 사진을 골랐다."},{"speaker":"유리","text":"이건 지우지 마. 오늘의 나는… 진짜 좋아하는 얼굴이니까."},{"speaker":"나","text":"나도 이 사진이 제일 좋아."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"사진사의 요청으로 얼굴을 가까이 맞추는 순간을 비성적인 기념사진으로 구성한다. 상대 얼굴은 프레임 왼쪽 가장자리 일부만 사용한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":100,"kiss":true,"presentationVersion":18},{"id":"r60-04","number":4,"hero":"seoha","title":"드레스 지퍼 고장","original":"드레스 지퍼 고장 — 등 지퍼가 중간에서 완전히 걸려 상대에게 고쳐달라고 부탁한다.","background_id":"seoha-dressing-room","name":"서하","beats":[{"id":"r60-04-seoha-setup","phase":"setup","title":"드레스 지퍼 고장 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"개교기념일 행사 날이었다. 강당 진행은 서하가 맡았다."},{"speaker":"","text":"식순 자료는 내가 들기로 해서, 시작 전에 준비실로 갔다."},{"speaker":"서하","text":"시작 십 분 전이야. 행사복만 갈아입고 나올 테니 자료 순서만 맞춰 놔 줘."},{"speaker":"","text":"갈아입고 나온 서하가 문을 반쯤 열었다. 드레스 등 뒤 지퍼가 중간에 멈춰 있었다."},{"speaker":"서하","text":"이거 혼자서는 안 되겠다. {N}, 잠깐만 봐줄 수 있어?"},{"speaker":"나","text":"네, 볼게요. 그대로 서 계세요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-04-seoha-incident","phase":"incident","title":"드레스 지퍼 고장 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-04-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-04-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 가만히 섰다. 걸린 데를 살피는 동안 숨소리가 가까웠다."},{"speaker":"나","text":"천을 잡아당기면 상해요. 슬라이더부터 볼게요."},{"speaker":"","text":"천 사이에 실밥이 물려 있었다. 손끝이 자꾸 미끄러졌다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-04-seoha-reaction","phase":"reaction","title":"드레스 지퍼 고장 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v17_scene_repair/characters/r60-04-seoha-reaction-left-hand-v17.webp","url":"assets/6._89afee/refresh_2026_v17_scene_repair/characters/r60-04-seoha-reaction-left-hand-v17.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"슬라이더가 걸린 데를 겨우 빠져나왔다. 서하가 참았던 숨을 내쉬었다."},{"speaker":"서하","text":"지금 움직였어. …아, 다행이다."},{"speaker":"","text":"돌아보는 얼굴이 붉었다. 나는 얼른 천장으로 눈을 돌렸다."},{"speaker":"서하","text":"…왜 갑자기 천장을 봐?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-04-seoha-resolution","phase":"resolution","title":"드레스 지퍼 고장 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-04-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"나","text":"처, 천장에 거미줄이 있어서요."},{"speaker":"나","text":"천장을 보면서도 지퍼는 끝까지 올렸어요. 늦지 않았으니 천천히 가요."},{"speaker":"","text":"옷매무새를 확인한 서하가 이제 출발하자며 웃었다."},{"speaker":"서하","text":"…거미줄은 무대 내려와서 같이 확인하자. 자료 챙겼지?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-05","number":5,"hero":"ina","title":"소맷부리의 단추 하나","original":"셔츠 단추 사고 — 외출 직전 단추가 떨어져 상대가 바로 앞에서 급하게 바느질해준다.","background_id":"ina-dressing-room","name":"이나","beats":[{"id":"r60-05-ina-setup","phase":"setup","title":"셔츠 단추 사고 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0f3221e8d32ea89843301d5b1b6b6fb58f8997e769b9a05253d17822573daba8"},"ready":true,"dialogue":[{"speaker":"","text":"진로 체험 날 아침. 같은 학교로 가는 길이라 1203호에 들렀다. 이나는 나갈 준비가 한창이었다."},{"speaker":"이나","text":"{N}, 잠깐만. 나가려는데 소맷부리 단추가 떨어졌어."},{"speaker":"","text":"현관 신발장 앞에서 이나가 난처하게 웃었다. 출발까지 10분 남아 있었다."},{"speaker":"","text":"소맷부리에서 떨어진 단추가 이나의 손바닥 위에 놓였다."},{"speaker":"이나","text":"곧 나가야 하는데, 지금 달 수 있을까? 나 바느질은 영 서툴러."},{"speaker":"나","text":"반짇고리 있으면 제가 달게요. 소매만 조금 내밀어 주세요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-05-ina-incident","phase":"incident","title":"셔츠 단추 사고 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-05-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-05-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0f3221e8d32ea89843301d5b1b6b6fb58f8997e769b9a05253d17822573daba8"},"ready":true,"dialogue":[{"speaker":"","text":"신발장 위에 반짇고리를 열었다. 실이 소맷부리의 단추 구멍을 천천히 오갔다."},{"speaker":"나","text":"손목은 그대로 두세요. 거의 다 됐어요."},{"speaker":"","text":"손목이 눈앞에 있었다. 바늘 끝만 보려고 애썼다."},{"speaker":"이나","text":"응. 이상하게 나까지 숨을 참게 되네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-05-ina-reaction","phase":"reaction","title":"셔츠 단추 사고 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0f3221e8d32ea89843301d5b1b6b6fb58f8997e769b9a05253d17822573daba8"},"ready":true,"dialogue":[{"speaker":"","text":"이나는 작은 통을 품에 안고 내 손을 보다가, 눈이 마주치자 수줍게 웃었다."},{"speaker":"이나","text":"바느질하는 손이 이렇게 진지할 줄은 몰랐네."},{"speaker":"나","text":"아, 그게… 오늘 단추는 지각하면 안 되니까요."},{"speaker":"이나","text":"…방금 말끝, 흔들렸는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-05-ina-resolution","phase":"resolution","title":"셔츠 단추 사고 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-05-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/ina-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0f3221e8d32ea89843301d5b1b6b6fb58f8997e769b9a05253d17822573daba8"},"ready":true,"dialogue":[{"speaker":"나","text":"아, 아니에요. 매듭을 세느라 숨을 참아서요."},{"speaker":"","text":"이나는 웃으며 다시 채워진 소맷부리를 살짝 눌러 보았다."},{"speaker":"이나","text":"튼튼하네. 고마워. 그럼 이제 출발할까? 오늘은 지각 없이."},{"speaker":"나","text":"네. …단추까지 준비 끝입니다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-06","number":6,"hero":"ina","title":"가운만 남은 저녁","original":"호텔 가운만 남음 — 세탁 서비스 착오로 옷이 전부 사라져 둘 다 가운 차림으로 저녁을 보내야 한다.","background_id":"hotel-suite-evening","name":"이나","beats":[{"id":"r60-06-ina-setup","phase":"setup","title":"호텔 가운만 남음 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"연수 때 걷은 질문지 절반이 공항 이야기였다. 학교는 공항 진로 체험을 하룻밤 일정으로 잡았다."},{"speaker":"","text":"인솔은 담임 선생님이, 안내는 이나가, 질문 정리는 내가 맡았다."},{"speaker":"이나","text":"저녁에 내일 순서만 맞춰 두자. 숙소 거실로 와 줄래?"},{"speaker":"","text":"비에 젖은 옷은 둘 다 세탁에 맡겼다. 이나가 안내장을 다시 읽었다."},{"speaker":"이나","text":"세탁물이 다른 방으로 갔대. 오늘 안에는 찾아준다더라."},{"speaker":"나","text":"그럼 저녁 시간은 조금 뒤로 미룰까요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-06-ina-incident","phase":"incident","title":"호텔 가운만 남음 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-06-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-06-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"가운 깃을 단단히 여민 채 마주 앉았다. 시선은 자꾸 안내장으로 돌아갔다."},{"speaker":"","text":"룸서비스 저녁이 먼저 왔다. 긴 잔에는 청포도 주스가 담겨 있었다."},{"speaker":"나","text":"저, 가운 차림으로 먹는 저녁도 추억으로 남기면 안 될까요?"},{"speaker":"이나","text":"…뭐든 적어 두는 애다운 말이네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-06-ina-reaction","phase":"reaction","title":"호텔 가운만 남음 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 입을 가렸다. 그래도 웃음이 새어 나왔다."},{"speaker":"이나","text":"근사하게 나오려고 했는데. 둘이 이러고 있으니까 웃기네."},{"speaker":"나","text":"저는 좋은데요. 웃으시는 거, 학교에선 잘 못 봤거든요."},{"speaker":"이나","text":"…그 말은 안내장에 적지 마. 나만 알게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-06-ina-resolution","phase":"resolution","title":"호텔 가운만 남음 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-06-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"프런트에 다시 전화를 걸고, 거실 소파에 앉아 기다리기로 했다."},{"speaker":"나","text":"옷이 돌아올 때까지 따뜻한 차라도 드릴까요?"},{"speaker":"이나","text":"그래. 내일 순서는 차 마시면서 맞추자. 선생님 오시면 바로 시작하고."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-07","number":7,"hero":"ina","title":"예약표의 두 자리","original":"커플 스파 예약 착오 — 일반 마사지인 줄 알았는데 커플용 프라이빗 스파룸으로 안내된다.","background_id":"spa-reception","name":"이나","beats":[{"id":"r60-07-ina-setup","phase":"setup","title":"커플 스파 예약 착오 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"58ac2e0a34d714b51cc897b4f6fee68e8b7e605138fd8bbf5ed4f642fb90dfae"},"ready":true,"dialogue":[{"speaker":"","text":"첫 특강 때 좌석벨트 시연을 도운 답례로, 협찬 업체가 이나와 내 몫의 휴식권을 보냈다."},{"speaker":"이나","text":"두 장이 한 예약으로 묶여 있대. 접수는 같이 해야 한다네. 동네니까 가 볼래?"},{"speaker":"나","text":"네. 걸어서 5분이니까 금방이에요."},{"speaker":"","text":"안내 데스크 앞에서 이나가 예약표를 다시 짚어 내려갔다."},{"speaker":"","text":"종이를 따라가던 손끝이 한 줄에서 멈췄다."},{"speaker":"이나","text":"…이상하네. 나는 일반 코스로 신청한 것 같은데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-07-ina-incident","phase":"incident","title":"커플 스파 예약 착오 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-07-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-07-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"58ac2e0a34d714b51cc897b4f6fee68e8b7e605138fd8bbf5ed4f642fb90dfae"},"ready":true,"dialogue":[{"speaker":"","text":"직원이 안내한 방에는 마사지 베드가 나란히 두 개 놓여 있었다."},{"speaker":"","text":"일상복 그대로인 두 사람이 그 앞에 섰다. 거리가 한 걸음도 안 됐다."},{"speaker":"나","text":"베드가… 두 개네요. 커플 코스로 들어간 것 같은데요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-07-ina-reaction","phase":"reaction","title":"커플 스파 예약 착오 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"58ac2e0a34d714b51cc897b4f6fee68e8b7e605138fd8bbf5ed4f642fb90dfae"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 예약표와 베드를 번갈아 보다 잠깐 굳었다가, 곧 웃음을 지었다."},{"speaker":"이나","text":"탑승권은 두 번 확인하라고 가르치는 사람이, 예약표 한 줄을 넘겼네."},{"speaker":"나","text":"괜찮아요. 웃으시니까 저도 좀… 아, 아니에요."},{"speaker":"이나","text":"손님, 방금 방송이 끊겼는데요? 다시 한번 부탁드립니다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-07-ina-resolution","phase":"resolution","title":"커플 스파 예약 착오 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-07-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/spa-reception.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"58ac2e0a34d714b51cc897b4f6fee68e8b7e605138fd8bbf5ed4f642fb90dfae"},"ready":true,"dialogue":[{"speaker":"나","text":"아, 아니요. 예약표 줄이 붙어 있어서… 그 얘기였어요."},{"speaker":"나","text":"둘 다 편한 코스가 있는지 제가 다시 여쭤볼게요."},{"speaker":"","text":"직원이 시간표를 짚었다. 붙어 있던 두 자리가 떨어진 칸으로 옮겨졌다."},{"speaker":"이나","text":"다음엔 끝까지 읽고 확인할게. 오늘 같이 와 줘서 고마워, {N}."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-08","number":8,"hero":"ina","title":"머리 말려주기","original":"머리 말려주기 — 드라이기가 하나뿐이라 머리를 말려주다가 목덜미 근처에서 서로 갑자기 조용해진다.","background_id":"ina-home-living-evening","name":"이나","beats":[{"id":"r60-08-ina-setup","phase":"setup","title":"머리 말려주기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"171845027801e982961b8f080ec9c388e79268f9ef50b5590f35949053fe71c4"},"ready":true,"dialogue":[{"speaker":"","text":"진로 특강이 끝나자마자 소나기가 쏟아졌다."},{"speaker":"","text":"반 친구들 질문지를 윗집 1203호에 전해 주러 올라갔다. 담임 선생님 부탁이었다."},{"speaker":"이나","text":"고마워. 강의 자료 옮기다 비를 다 맞았어. 들어와서 질문지는 탁자에 둬."},{"speaker":"","text":"이나가 헤어드라이어와 작은 수건을 들고 목덜미의 젖은 잔머리를 가리켰다."},{"speaker":"이나","text":"자료 상자 나르느라 팔이 후들거려. 뒤쪽만 잠깐 도와줄래?"},{"speaker":"나","text":"네. 어디까지 말리면 될까요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-08-ina-incident","phase":"incident","title":"머리 말려주기 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-08-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-08-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"171845027801e982961b8f080ec9c388e79268f9ef50b5590f35949053fe71c4"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 고개를 조금 숙였다. 목덜미 잔머리부터 조심스럽게 바람을 댔다."},{"speaker":"나","text":"뜨겁거나 당기면 바로 말씀해 주세요."},{"speaker":"","text":"거리가 한 뼘도 안 됐다. 바람 소리 사이로 숨소리가 들려서 손끝만 봤다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-08-ina-reaction","phase":"reaction","title":"머리 말려주기 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"171845027801e982961b8f080ec9c388e79268f9ef50b5590f35949053fe71c4"},"ready":true,"dialogue":[{"speaker":"","text":"바람이 간지러웠는지 이나가 어깨를 움츠리며 웃었다."},{"speaker":"이나","text":"갑자기 조용해졌네. …왜 말이 없어?"},{"speaker":"나","text":"아, 아니에요. 그게… 바람 소리만 듣고 있어서요."},{"speaker":"이나","text":"…나도 할 말을 잊었어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-08-ina-resolution","phase":"resolution","title":"머리 말려주기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-08-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/ina-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"171845027801e982961b8f080ec9c388e79268f9ef50b5590f35949053fe71c4"},"ready":true,"dialogue":[{"speaker":"","text":"드라이어를 끄고, 머리가 다 말랐는지 함께 확인했다."},{"speaker":"나","text":"다 마른 것 같아요. 감기 드시면 안 되니까요."},{"speaker":"이나","text":"고마워, {N}. 질문지는 오늘 밤에 다 읽어 둘게."},{"speaker":"나","text":"네. 다음 특강 때는 제 질문도 하나 적어 갈게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-09","number":9,"hero":"seoha","title":"안내물에 들어갈 한 장","original":"모델 포즈 참고 — 그림을 그리는 상대에게 포즈 모델을 부탁받고 평소보다 과감한 의상을 입어 쑥스러워한다.","background_id":"art-studio","name":"서하","beats":[{"id":"r60-09-seoha-setup","phase":"setup","title":"모델 포즈 참고 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"a1082371cf2479769ebfa62505fbcb1869326e6ac7f89d5772ee0b806a804d28"},"ready":true,"dialogue":[{"speaker":"","text":"신청서를 맡기고 나오는데, 서하가 안내 책상에 안내물 시안을 펼쳐 보였다."},{"speaker":"서하","text":"안내하는 사람 그림이 들어갈 칸이야. 사진은 아직 공개 동의를 못 받았어."},{"speaker":"서하","text":"미술 시간 스케치가 괜찮다고 들었어. {N}, 이 칸 네가 그려 줄래?"},{"speaker":"나","text":"네. 다만 사람은 보고 그려야 정확해서, 모델이 한 분 필요해요."},{"speaker":"","text":"그날 저녁, 서하는 근무복이 아닌 외출복 차림으로 미술실에 왔다."},{"speaker":"서하","text":"퇴근 준비를 하다 왔어. 이 옷으로 모델을 해 달라고? 평소랑은 꽤 다른데."},{"speaker":"나","text":"괜찮아요. 학생들이 말을 걸기 쉬운 쪽이 좋아서, 그 차림이 더 맞아요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-09-seoha-incident","phase":"incident","title":"모델 포즈 참고 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-09-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-09-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"a1082371cf2479769ebfa62505fbcb1869326e6ac7f89d5772ee0b806a804d28"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 익숙하게 자세를 잡고 앉자, 스케치북 위에 첫 선이 놓였다."},{"speaker":"나","text":"불편하시면 다른 자세로 바꾸셔도 돼요. 금방 끝낼게요."},{"speaker":"서하","text":"괜찮아. 안내 책상에 이렇게 앉아 있는 건 익숙하니까."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-09-seoha-reaction","phase":"reaction","title":"모델 포즈 참고 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"a1082371cf2479769ebfa62505fbcb1869326e6ac7f89d5772ee0b806a804d28"},"ready":true,"dialogue":[{"speaker":"","text":"선을 맞추려고 얼굴을 오래 봤다. 서하가 잠깐 눈을 피했다."},{"speaker":"서하","text":"그렇게 진지하게 보니까 더 쑥스럽잖아."},{"speaker":"나","text":"죄송해요. 선을 맞추려면 봐야 해서요."},{"speaker":"서하","text":"그럼 공평하게, 나도 그리는 사람 얼굴 좀 볼게."},{"speaker":"","text":"서하가 턱을 괴고 나를 똑바로 봤다. 연필 끝이 종이 위에서 헛돌았다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-09-seoha-resolution","phase":"resolution","title":"모델 포즈 참고 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-09-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/art-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"a1082371cf2479769ebfa62505fbcb1869326e6ac7f89d5772ee0b806a804d28"},"ready":true,"dialogue":[{"speaker":"","text":"완성한 장을 건네자 서하가 그림을 받아 들고 긴장을 풀며 웃었다."},{"speaker":"나","text":"다 됐어요. 웃으실 때 표정이 제일 마음에 들어서, 그 얼굴로 골랐어요."},{"speaker":"서하","text":"안내물에는 이걸 쓰자. 원본은 내가 가져도 될까?"},{"speaker":"나","text":"네. 내일 담당 선생님께 시안이랑 같이 드릴게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"The held paper depicts a generic three-view anatomy guide rather than the completed clothed portrait described in this resolution. The smiling reaction is present, but the prop does not fully match the story."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-10","number":10,"hero":"haneul","title":"코스튬 사이즈 오류","original":"코스튬 사이즈 오류 — 행사 의상이 예상보다 몸에 딱 맞아 계속 옷자락을 당기며 신경 쓴다.","background_id":"cosplay-preparation-day","name":"하늘","beats":[{"id":"r60-10-haneul-setup","phase":"setup","title":"코스튬 사이즈 오류 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-setup-green-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-setup-green-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"46b6f6c1fd900a5a472e1c62d41ed125483bebdb0150e13c0d439d0478ef0e50"},"ready":true,"dialogue":[{"speaker":"하늘","text":"행사용 재킷이래. 색은 괜찮지?"},{"speaker":"나","text":"입어 보고 불편하면 바꾸면 되지."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-10-haneul-incident","phase":"incident","title":"코스튬 사이즈 오류 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-10-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-10-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1671,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"46b6f6c1fd900a5a472e1c62d41ed125483bebdb0150e13c0d439d0478ef0e50"},"ready":true,"dialogue":[{"speaker":"","text":"밑단을 내리면 소매가 당겼고, 소매를 편 뒤에는 밑단이 다시 올라갔다."},{"speaker":"하늘","text":"잠깐만. 이거 나한테 온 사이즈가 맞아?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-10-haneul-reaction","phase":"reaction","title":"코스튬 사이즈 오류 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"46b6f6c1fd900a5a472e1c62d41ed125483bebdb0150e13c0d439d0478ef0e50"},"ready":true,"dialogue":[{"speaker":"하늘","text":"자꾸 옷만 만지게 되네. 신경 쓰여."},{"speaker":"나","text":"편한 걸로 입자. 아직 시작 전이잖아."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-10-haneul-resolution","phase":"resolution","title":"코스튬 사이즈 오류 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-10-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/cosplay-preparation-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"46b6f6c1fd900a5a472e1c62d41ed125483bebdb0150e13c0d439d0478ef0e50"},"ready":true,"dialogue":[{"speaker":"하늘","text":"응, 큰 걸로 바꿔 달라고 할래. 이제야 숨 돌린다."},{"speaker":"나","text":"무대보다 사이즈 확인이 먼저였네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"행사 의상이 예상보다 작은 문제를 재킷 밑단·소매의 불편함으로 표현한다. 신체 강조나 노출은 없고 끝에는 큰 사이즈로 교환하기로 한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-11","number":11,"hero":"haneul","title":"사진부스 커플 미션","original":"사진부스 성인 커플 모드 — 평범한 사진인 줄 알았는데 화면에 “볼 맞대기 → 포옹 → 키스 포즈” 미션이 뜬다.","background_id":"yuri-photo-booth-afternoon","name":"하늘","beats":[{"id":"r60-11-haneul-setup","phase":"setup","title":"사진부스 성인 커플 모드 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-setup-green-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-setup-green-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"","text":"고백한 날, 그냥 헤어지기 아쉬워 하늘과 사진 부스에 들어갔다. 작은 의자에 나란히 앉으니 서로 웃음이 났다."},{"speaker":"하늘","text":"오늘 사진은 꼭 둘 다 잘 나와야 해."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-11-haneul-incident","phase":"incident","title":"사진부스 성인 커플 모드 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-11-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-11-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"","text":"화면 속 마지막 하트가 반짝였다. 하늘이 먼저 내 쪽으로 얼굴을 돌렸다."},{"speaker":"하늘","text":"포즈만 잡는 거… 조금 아쉽지 않아?"},{"speaker":"나","text":"괜찮아?"},{"speaker":"","text":"하늘이 작게 고개를 끄덕였다. 눈을 감고 짧게 입을 맞추자 플래시가 터졌다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-11-haneul-reaction","phase":"reaction","title":"사진부스 성인 커플 모드 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"","text":"둘은 동시에 사진을 보고, 동시에 시선을 피했다. 하늘이 웃음을 참느라 입술을 꾹 눌렀다."},{"speaker":"하늘","text":"우리 진짜 똑같이 빨개졌네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-11-haneul-resolution","phase":"resolution","title":"사진부스 성인 커플 모드 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-11-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"","text":"하늘이 사진 한 장을 내 손에 쥐여 주고, 나머지는 자신의 지갑에 넣었다."},{"speaker":"하늘","text":"이건 우리 둘만의 비밀이야."},{"speaker":"나","text":"약속할게. 다음 사진도 같이 찍자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"원문의 볼 맞대기·포옹·키스 포즈 미션 화면을 보여 주되 이번 핵심 사진은 볼 맞대기만 수행한다. 실제 키스나 탈의는 묘사하지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":100,"kiss":true,"presentationVersion":18},{"id":"r60-12","number":12,"hero":"ina","title":"조금 더 오래 있고 싶어","original":"칵테일 한 잔 후 거리감 붕괴 — 평소보다 솔직해진 상대가 소파에서 너무 가까이 앉아 계속 눈을 바라본다.","background_id":"lounge-evening","name":"이나","beats":[{"id":"r60-12-ina-setup","phase":"setup","title":"칵테일 한 잔 후 거리감 붕괴 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"이나의 근무가 바뀌어 밀린 진로 상담은, 학교 허가를 받아 공항 견학 날로 옮겨졌다."},{"speaker":"이나","text":"견학은 끝났고 셔틀은 한 시간 뒤야. 남은 질문지, 여기 라운지에서 마저 보자."},{"speaker":"나","text":"네. 제가 모아 온 질문지라, 셔틀 오기 전까지 다 정리할 수 있을 것 같아요."},{"speaker":"","text":"라운지의 음악이 잦아들었다. 이나가 레몬에이드 잔을 내려놓을 때도 이야기는 끊이지 않았다."},{"speaker":"이나","text":"질문지는 진작 끝났는데. 오늘은 이상하게 얘기가 잘 풀리네."},{"speaker":"나","text":"저도요. 벌써 시간이 이렇게 됐네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-12-ina-incident","phase":"incident","title":"칵테일 한 잔 후 거리감 붕괴 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-12-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-12-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 한 자리 가까이 옮겨 앉았다. 무릎 위에 두 손을 모으는 동안 목소리가 낮아졌다."},{"speaker":"이나","text":"괜히 더 오래 있고 싶네. 아직 못 한 얘기가 많아서."},{"speaker":"나","text":"저도… 아, 그게, 조금 더 듣고 싶어서요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-12-ina-reaction","phase":"reaction","title":"칵테일 한 잔 후 거리감 붕괴 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"자기 말을 뒤늦게 들은 사람처럼, 이나의 손이 붉어진 뺨으로 올라갔다."},{"speaker":"이나","text":"…지금 너무 솔직했지?"},{"speaker":"나","text":"아니요. 솔직하게 말해 주셔서 좋았어요."},{"speaker":"","text":"고개를 든 얼굴이 가까웠다. 나는 괜히 질문지만 내려다봤다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-12-ina-resolution","phase":"resolution","title":"칵테일 한 잔 후 거리감 붕괴 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-12-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"물잔을 두 손으로 감싼 이나가 천천히 웃었다. 가까워진 자리는 그대로였다."},{"speaker":"이나","text":"그럼 다음 얘기는 조금 덜 떨면서 할게. 다음 상담도 밀릴지 모르니까."},{"speaker":"나","text":"급하게 말하지 않아도 괜찮아요. 저는 기다릴 수 있어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"대화가 솔직해지는 계기와 가까운 소파 거리를 표현한다. 취해 판단력을 잃거나 강제 접촉하는 상황은 아니다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-13","number":13,"hero":"yuri","title":"향수 시향","original":"향수 시향 — 손목 향을 맡아보라고 내밀었는데 상대가 예상보다 가까이 다가와 당황한다.","background_id":"perfume-store","name":"유리","beats":[{"id":"r60-13-yuri-setup","phase":"setup","title":"향수 시향 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-setup-green-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-setup-green-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"4acce97ea30251ad18e80d17d47cf794674e3a0079cfa5927e90c49fb1f60dc7"},"ready":true,"dialogue":[{"speaker":"유리","text":"종이에서는 좋은데, 손목에서는 향이 다르대."},{"speaker":"나","text":"그럼 둘 다 비교해 보자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-13-yuri-incident","phase":"incident","title":"향수 시향 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-13-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-13-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"4acce97ea30251ad18e80d17d47cf794674e3a0079cfa5927e90c49fb1f60dc7"},"ready":true,"dialogue":[{"speaker":"","text":"유리가 향을 맡아 보라며 손목을 살짝 돌렸다. 내가 다가서자 말끝이 멎었다."},{"speaker":"유리","text":"아… 생각보다 가깝네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-13-yuri-reaction","phase":"reaction","title":"향수 시향 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"4acce97ea30251ad18e80d17d47cf794674e3a0079cfa5927e90c49fb1f60dc7"},"ready":true,"dialogue":[{"speaker":"유리","text":"싫다는 건 아닌데, 이렇게 조용해질 줄은 몰랐어."},{"speaker":"나","text":"조금 떨어져서도 향은 맡을 수 있어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-13-yuri-resolution","phase":"resolution","title":"향수 시향 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-13-yuri-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/perfume-store.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"4acce97ea30251ad18e80d17d47cf794674e3a0079cfa5927e90c49fb1f60dc7"},"ready":true,"dialogue":[{"speaker":"유리","text":"이 향으로 할래!! 이제 기억하기도 쉽겠다, 헤헤."},{"speaker":"나","text":"향보다 네 표정이 먼저 떠오를 것 같은데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"손목에 뿌린 향을 맡는 거리 때문에 당황하는 일상 시향이다. 성적인 신체 클로즈업 없이 얼굴과 손목 행동을 함께 보여 준다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-14","number":14,"hero":"seoha","title":"목걸이 채워주기","original":"목걸이 채워주기 — 뒤에서 목걸이를 채워주는데 머리카락을 넘겨주면서 목덜미가 드러나 둘 다 의식한다.","background_id":"seoha-dressing-room","name":"서하","beats":[{"id":"r60-14-seoha-setup","phase":"setup","title":"목걸이 채워주기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"학교 개방 행사가 끝나고, 안내 봉사를 한 우리 반은 안내판을 걷었다."},{"speaker":"서하","text":"받침대는 무거우니까 나랑 같이 옮기자. 학생들끼리 들면 안 돼."},{"speaker":"서하","text":"이따 기록용 사진도 찍어야 하는데, 드는 사이에 목걸이가 풀렸나 봐."},{"speaker":"","text":"창고에서 돌아온 준비실 거울 앞, 서하가 손바닥 위의 작은 잠금장치를 보여 주었다."},{"speaker":"서하","text":"거울로 봐도 고리가 안 보이네. 뒤에서 채워 줄래?"},{"speaker":"나","text":"네. 제가 해 볼게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-14-seoha-incident","phase":"incident","title":"목걸이 채워주기 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-14-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-14-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 머리카락을 한쪽으로 모아 쥐었다."},{"speaker":"나","text":"머, 머리는 그대로 잡고 계셔 주세요."},{"speaker":"","text":"숨소리가 들릴 만큼 가까웠다. 작은 고리 말고는 아무 데도 보지 못했다."},{"speaker":"","text":"손끝이 두 번 미끄러진 뒤에야 작은 고리가 걸렸다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-14-seoha-reaction","phase":"reaction","title":"목걸이 채워주기 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"목걸이가 닿자 서하가 어깨의 힘을 풀고 수줍게 돌아봤다."},{"speaker":"서하","text":"고마워. …이렇게 가까이 있으니까 좀 이상하네."},{"speaker":"나","text":"…귀가 빨개지셨어요."},{"speaker":"서하","text":"…그런 건 확인 안 해도 돼."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-14-seoha-resolution","phase":"resolution","title":"목걸이 채워주기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-14-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 펜던트를 가볍게 만져 보고 나를 돌아봤다."},{"speaker":"서하","text":"사진에 같이 찍힐 텐데, 이상하진 않아?"},{"speaker":"나","text":"잘 잠겼어요. 오늘 옷이랑 잘 어울리세요."},{"speaker":"서하","text":"그럼 됐다. {N}도 같이 서자. 안내 봉사도 기록에 남아야지."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-15","number":15,"hero":"haneul","title":"귀걸이 찾아주기","original":"귀걸이 찾아주기 — 소파 틈에 떨어진 귀걸이를 찾다가 둘이 동시에 좁은 틈으로 들어가 꼼짝 못 한다.","background_id":"haneul-home-living-day","name":"하늘","beats":[{"id":"r60-15-haneul-setup","phase":"setup","title":"귀걸이 찾아주기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-setup-green-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-setup-green-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"하늘","text":"귀걸이가 하나 없어. 방금 여기 앉았을 때까진 있었는데."},{"speaker":"나","text":"쿠션 틈부터 볼까?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Native background-only green edit; original fake-alpha candidate preserved. Batch visual review pending."},{"id":"r60-15-haneul-incident","phase":"incident","title":"귀걸이 찾아주기 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-15-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-15-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"","text":"같은 틈으로 뻗은 팔이 겹쳤다. 더 움직이려다 둘 다 그대로 멈췄다."},{"speaker":"나","text":"잠깐, 내가 먼저 뺄게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-15-haneul-reaction","phase":"reaction","title":"귀걸이 찾아주기 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"하늘","text":"귀걸이보다 우리가 먼저 끼일 뻔했네."},{"speaker":"나","text":"하나씩 찾으면 되는데 너무 급했어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-15-haneul-resolution","phase":"resolution","title":"귀걸이 찾아주기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-15-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"하늘","text":"찾았다. 두 개 다 있네. 고마워."},{"speaker":"나","text":"다음엔 쿠션을 먼저 들어 보자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"소파 틈을 동시에 찾다가 팔이 같은 좁은 공간에 겹쳐 당황하는 생활 코미디. 위험하게 끼이거나 신체를 강조하지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-16","number":16,"hero":"seoyoon","title":"커플 요가 체험","original":"커플 요가 체험 — 모르고 신청한 프로그램이 서로 몸을 지지해야 하는 2인용 자세 위주다.","background_id":"yoga-studio","name":"서윤","beats":[{"id":"r60-16-seoyoon-setup","phase":"setup","title":"커플 요가 체험","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-setup-key-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-setup-key-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0abae7624ca95c61a714e5beefadf88409078c7fb2ee4552636e1f388db31b88"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 안내 그림을 들여다봤다. 혼자 하는 스트레칭 수업인 줄 알았는데, 매트마다 두 사람씩 마주 앉아 있었다."},{"speaker":"서윤","text":"야. 이거 혼자 하는 거 아니잖아."},{"speaker":"나","text":"안내를 끝까지 읽을 걸 그랬네. 그냥 갈까?"},{"speaker":"서윤","text":"왜 가. 왔으면 해야지. 손 줘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-16-seoyoon-incident","phase":"incident","title":"커플 요가 체험","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-16-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-16-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0abae7624ca95c61a714e5beefadf88409078c7fb2ee4552636e1f388db31b88"},"ready":true,"dialogue":[{"speaker":"","text":"손을 맞잡고 천천히 몸을 기울였다. 한쪽이 조금만 움직여도 다른 쪽 중심이 따라 흔들렸다."},{"speaker":"서윤","text":"힘 빼. 내가 맞출게."},{"speaker":"나","text":"네가 기울이는 만큼만 버텨 볼게. 하나, 둘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-16-seoyoon-reaction","phase":"reaction","title":"커플 요가 체험","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-reaction-key-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-reaction-key-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0abae7624ca95c61a714e5beefadf88409078c7fb2ee4552636e1f388db31b88"},"ready":true,"dialogue":[{"speaker":"","text":"균형이 풀리는 순간 서윤이 급히 무릎을 굽혔다. 둘 다 매트에 발을 붙이고서야 숨을 내쉬었다."},{"speaker":"서윤","text":"야, 방금 넘어갈 뻔했잖아."},{"speaker":"나","text":"미안, 내가 먼저 힘을 줬어. 발은 괜찮아?"},{"speaker":"서윤","text":"…괜찮아. 손이나 다시 줘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-16-seoyoon-resolution","phase":"resolution","title":"커플 요가 체험","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-resolution-key-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-16-seoyoon-resolution-key-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/yoga-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0abae7624ca95c61a714e5beefadf88409078c7fb2ee4552636e1f388db31b88"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 다시 손을 내밀며 박자를 셌다. 이번에는 힘을 겨루지 않고 서로 움직이는 속도를 따랐다."},{"speaker":"서윤","text":"하나, 둘. …됐다. 아까보다 낫네."},{"speaker":"나","text":"이번엔 안 흔들렸어. 네 박자가 알아듣기 쉬워."},{"speaker":"서윤","text":"당연하지. 출발 신호는 내 전문이야."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-17","number":17,"hero":"ina","title":"둘이 맞추는 박자","original":"댄스 레슨 — 허리에 손을 올리고 밀착해야 하는 동작에서 평소 장난치던 둘이 갑자기 말이 없어진다.","background_id":"dance-studio","name":"이나","beats":[{"id":"r60-17-ina-setup","phase":"setup","title":"댄스 레슨 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"455358f468dbf4df0cc94e1bef5058e538d26a0ed176860b3237e34499be62ed"},"ready":true,"dialogue":[{"speaker":"","text":"진로 체험 안내 동작을 다시 짜게 됐다며, 담당 선생님이 나를 연습실로 보내셨다."},{"speaker":"이나","text":"{N}, 잘 왔어. 지난 진로 체험 때 뒷줄 친구들이 앞이 안 보였대."},{"speaker":"이나","text":"그 안내 동작에 박자를 붙여 다시 짜는 중이야. 짝이 하나 필요해."},{"speaker":"나","text":"저라도 괜찮으면 맞춰 볼게요."},{"speaker":"","text":"이나가 연습실 바닥의 시작점을 짚고 박자를 세었다."},{"speaker":"이나","text":"이번엔 기본 자세부터. 하나, 둘… 손은 여기."},{"speaker":"나","text":"제가 발을 밟으면 바로 말씀해 주세요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-17-ina-incident","phase":"incident","title":"댄스 레슨 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-17-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-17-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"455358f468dbf4df0cc94e1bef5058e538d26a0ed176860b3237e34499be62ed"},"ready":true,"dialogue":[{"speaker":"","text":"손을 맞잡고 어깨에 손을 얹자, 세던 숫자가 동시에 끊겼다."},{"speaker":"나","text":"이 정도 거리면 괜찮을까요?"},{"speaker":"이나","text":"응. …그런데 다음 숫자가 뭐였지?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-17-ina-reaction","phase":"reaction","title":"댄스 레슨 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"455358f468dbf4df0cc94e1bef5058e538d26a0ed176860b3237e34499be62ed"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 시선을 피했다. 박자를 세던 손가락만 숫자 도중에 멈춰 있었다."},{"speaker":"이나","text":"방금까지는 다 외우고 있었는데."},{"speaker":"나","text":"저도요. …하나 다음이 뭐였죠?"},{"speaker":"이나","text":"둘. …둘 다 둘을 까먹은 건 비밀로 하자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-17-ina-resolution","phase":"resolution","title":"댄스 레슨 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-17-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/dance-studio.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"455358f468dbf4df0cc94e1bef5058e538d26a0ed176860b3237e34499be62ed"},"ready":true,"dialogue":[{"speaker":"나","text":"죄송해요. 처음부터 복습해야겠네요."},{"speaker":"","text":"이나가 웃으며 손가락 하나를 세웠다. 이번에는 서로를 보면서 시작했다."},{"speaker":"이나","text":"복습은 나도. 다시 하나부터, 이번엔 같이 세자."},{"speaker":"나","text":"하나, 둘. 이제 맞네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-18","number":18,"hero":"seoha","title":"이마로 재는 열","original":"체온 측정 장난 — 열이 있는 것 같다며 이마를 맞댔다가 서로 눈을 피하지 못한다.","background_id":"seoha-home-living-evening","name":"서하","beats":[{"id":"r60-18-seoha-setup","phase":"setup","title":"체온 측정 장난 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5bb8805331ccf932a4a526b0c41b23d20dc8c214976ddab57b093a2673660b7c"},"ready":true,"dialogue":[{"speaker":"","text":"학교 행사가 끝난 저녁. 창고가 닫혀서, 걷어 온 봉사 명찰 상자를 서하의 집으로 옮겼다."},{"speaker":"","text":"서하는 종일 운동장에 서 있다가 막 들어온 참이었다."},{"speaker":"서하","text":"{N}, 고마워. 상자는 거기 둬. 수량은 내일 내가 셀게."},{"speaker":"","text":"상자를 내려놓는 사이, 서하가 제 이마를 짚더니 미간을 좁혔다."},{"speaker":"서하","text":"…나 좀 뜨거운 것 같지 않아? 잠깐 봐 줄래, 내 손으론 모르겠어."},{"speaker":"나","text":"네, 확인해 볼게요. 가까이서 봐도 괜찮을까요?"},{"speaker":"서하","text":"응, 괜찮아. 네가 봐 줘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-18-seoha-incident","phase":"incident","title":"체온 측정 장난 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-18-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-18-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5bb8805331ccf932a4a526b0c41b23d20dc8c214976ddab57b093a2673660b7c"},"ready":true,"dialogue":[{"speaker":"나","text":"그럼 이마를 잠깐 대 봐도 될까요?"},{"speaker":"","text":"서하가 눈을 감고 고개를 조금 들었다. 손이 아니라 이마였다."},{"speaker":"","text":"따뜻했다. 숨이 닿는 자리에서, 열이 어느 쪽 것인지 알 수 없었다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Adult faces are close in a forehead temperature comparison; the intended contact area is partly hidden by bangs, so clear skin-to-skin forehead contact is not certified. The male silhouette occupies a relatively large left area."},{"id":"r60-18-seoha-reaction","phase":"reaction","title":"체온 측정 장난 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5bb8805331ccf932a4a526b0c41b23d20dc8c214976ddab57b093a2673660b7c"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 눈을 크게 떴다. 그제야 거리가 보인 듯 얼굴이 붉어졌다."},{"speaker":"서하","text":"…이러면 열이 더 오르겠는데."},{"speaker":"나","text":"아, 아니요. 손보다 이마가 정확하다고 해서요. 그, 그래서요."},{"speaker":"서하","text":"변명이 길다, {N}."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-18-seoha-resolution","phase":"resolution","title":"체온 측정 장난 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-18-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/seoha-home-living-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5bb8805331ccf932a4a526b0c41b23d20dc8c214976ddab57b093a2673660b7c"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 약상자에서 체온계를 찾아 들고, 물 한 컵을 내 쪽으로 밀어 주었다."},{"speaker":"서하","text":"체온계가 여기 있었네. 처음부터 이걸로 잴걸. 일단 앉아서 마시자."},{"speaker":"나","text":"네. 재 보시고, 열 있으면 내일은 꼭 쉬세요."},{"speaker":"","text":"물을 다 마셨는데도 이마가 좀처럼 식지 않았다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-19","number":19,"hero":"ina","title":"립스틱 번짐","original":"립스틱 번짐 — 키스 후 상대 얼굴에 립스틱 자국이 남아 서로 보고 웃다가 다시 가까워진다.","background_id":"lounge-evening","name":"이나","beats":[{"id":"r60-19-ina-setup","phase":"setup","title":"립스틱 번짐 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"이나의 거실. 1년째 다 풀지 못한 상자들이, 오늘은 한쪽에 가지런히 쌓여 있었다."},{"speaker":"이나","text":"상자, 이번 주말에 다 풀 거야. 이제 떠날 준비 안 해도 되니까."},{"speaker":"","text":"차를 내려놓던 이나가 내 얼굴을 보더니, 입을 틀어막았다."},{"speaker":"","text":"문 앞에서 나눈 인사가 그대로 얼굴에 남은 모양이었다. 이나가 웃음을 참았다."},{"speaker":"이나","text":"잠깐. 가기 전에 거울 한번 볼래?"},{"speaker":"나","text":"…내 얼굴에 뭐 묻었어?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-19-ina-incident","phase":"incident","title":"립스틱 번짐 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-19-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-19-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 내민 손거울에 장밋빛 자국이 비쳤다. 뺨 한가운데, 선명하게."},{"speaker":"이나","text":"내 립스틱… 생각보다 잘 남네. 이거 지속력 12시간짜리야."},{"speaker":"나","text":"엄마가 보면 끝이야."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-19-ina-reaction","phase":"reaction","title":"립스틱 번짐 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"휴지를 건네는 손이 가까웠다. 거울과 그 손 사이에서 눈이 갈팡질팡했다."},{"speaker":"이나","text":"조금만 오른쪽. 아니, 내 기준 오른쪽!"},{"speaker":"나","text":"거울을 봐야 하는데 자꾸… 아니, 방향이 반대라서 그래."},{"speaker":"","text":"말끝을 알아챈 이나가 고개를 돌렸다. 귀가 내 얼굴보다 더 붉었다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-19-ina-resolution","phase":"resolution","title":"립스틱 번짐 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-19-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/lounge-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bd1b2618f0354a80b3af6a9c0acfd4939158dacc88a8834c99260e806f915f89"},"ready":true,"dialogue":[{"speaker":"","text":"자국이 지워진 걸 확인한 이나가 휴지를 받아 접었다."},{"speaker":"이나","text":"됐어. 이번엔 깨끗해. …아마도."},{"speaker":"나","text":"아마도는 뭐야?"},{"speaker":"이나","text":"어머님이면 벌써 알고 계실걸. 발렌타인에 창문으로 다 보셨잖아."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"키스 자체는 새로 재시도하지 않고 원문이 요구한 립스틱 자국을 본 뒤 웃는 순간을 묘사한다. 자국은 상대 뺨의 작은 표시이며 노골적 접촉은 없다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":100,"kiss":true,"presentationVersion":18},{"id":"r60-20","number":20,"hero":"seoha","title":"두 치수 큰 택배","original":"잠옷 택배 오배송 — 주문한 평범한 잠옷 대신 예상보다 과감한 디자인이 와서 입을지 말지 실랑이한다.","background_id":"haneul-home-living-day","name":"서하","beats":[{"id":"r60-20-seoha-setup","phase":"setup","title":"잠옷 택배 오배송 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"","text":"행사 안내 조끼가 학교가 아니라 서하의 집으로 배송됐다고 했다."},{"speaker":"서하","text":"{N}, 주말엔 창고가 닫혀서 우리 집으로 받았어. 무거운 건 내가 들게."},{"speaker":"나","text":"네. 월요일 아침에 반별로 나눠야 하니까 수량표만 맞춰 볼게요."},{"speaker":"","text":"조끼 상자 옆에 다른 택배가 하나 더 있었다. 서하가 무릎에 올리고 습자지를 걷었다."},{"speaker":"서하","text":"이건 학교 물건 아니야. 같이 시킨 김에 집에서 편하게 입을 걸 하나 골랐어."},{"speaker":"나","text":"색은 고르신 대로 온 것 같은데요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-20-seoha-incident","phase":"incident","title":"잠옷 택배 오배송 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"","text":"분홍 체크 상의를 펼치자 소매가 한 뼘 더 늘어졌다. 서하가 주문 내역과 번갈아 보았다."},{"speaker":"서하","text":"내가 고른 거랑 치수가 두 칸은 다른데?"},{"speaker":"나","text":"이건… 소매 끝에서 손부터 찾아야겠는데요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-20-seoha-reaction","phase":"reaction","title":"잠옷 택배 오배송 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 상의를 몸에 대 보았다. 소매가 무릎 위로 한참 늘어졌다."},{"speaker":"","text":"멋쩍은 웃음과 함께 머리카락이 흘러내렸다. 눈 둘 곳을 몰랐다."},{"speaker":"나","text":"적어도 손은 따뜻하겠네요. …그, 잘 어울리셔서. 아니, 소매가요."},{"speaker":"서하","text":"…소매가 잘 어울린다고? 못 들은 걸로 해 줄게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-20-seoha-tryon","phase":"tryon","title":"한 번은 입어 봐야지","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-tryon.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-20-seoha-tryon.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"ready":true,"dialogue":[{"speaker":"","text":"잠시 뒤 서하가 분홍 체크 잠옷을 입고 돌아왔다. 손이 소매 속으로 쏙 들어가 있었다."},{"speaker":"서하","text":"어때? 손을 찾으려면 구조대부터 불러야겠지?"},{"speaker":"나","text":"웃으면 안 되는데… 그래도 잘 어울려요."},{"speaker":"서하","text":"네가 웃으니까 나도 못 참겠어. 치수만 맞았으면 좋았을 텐데."},{"speaker":"","text":"함께 웃고 나서 서하는 다시 평소 옷으로 갈아입었다. 이번에는 입어 본 크기를 적어 교환을 신청하기로 했다."}],"status":"GENERATED","visual_status":"CANDIDATE"},{"id":"r60-20-seoha-resolution","phase":"resolution","title":"잠옷 택배 오배송 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-20-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/haneul-sick-home-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb13431f61dfc66a9f2a6c71b102bfd0bf1aa7a02e23ff75dc5f0f3aef5d6070"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 택배 상자에 교환 용지를 붙였다. 치수 칸은 두 번 확인했다."},{"speaker":"서하","text":"조끼 상자는 월요일 아침에 내가 옮길게. 너는 반별 수량표만 챙겨 와."},{"speaker":"서하","text":"이건 다음에 맞는 치수로 입고 보여 줄게."},{"speaker":"나","text":"…네. 그때도 오늘처럼 웃으시면 좋겠어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"오배송된 과감한 잠옷은 착용하지 않는다. 상자에서 접힌 옷을 확인하고 반품을 의논하는 장면으로 그리며 원문의 입을지 말지 실랑이는 대화로 유지한다.","ready_count":5,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-21","number":21,"hero":"haneul","title":"옷장에 같이 숨기","original":"옷장에 같이 숨기 — 깜짝파티 준비 중 사람이 들어오는 바람에 둘이 좁은 옷장에 숨어 숨소리까지 들릴 정도로 가까워진다.","background_id":"party-room-closet","name":"하늘","beats":[{"id":"r60-21-haneul-setup","phase":"setup","title":"옷장에 같이 숨기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"e3bab26aceccc01c07b07a021d2826e836ad9c46a4d2eaf2ad2f39096ec221bb"},"ready":true,"dialogue":[{"speaker":"하늘","text":"생일 주인공 오기 전에 이것만 걸면 돼."},{"speaker":"나","text":"문 앞에 발소리 들리는 것 같은데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-21-haneul-incident","phase":"incident","title":"옷장에 같이 숨기 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-21-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-21-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"e3bab26aceccc01c07b07a021d2826e836ad9c46a4d2eaf2ad2f39096ec221bb"},"ready":true,"dialogue":[{"speaker":"","text":"우리는 급히 옷장 안으로 몸을 피했다. 리본이 바스락거릴까 손을 멈췄다."},{"speaker":"나","text":"쉿… 아직 눈치 못 챘어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-21-haneul-reaction","phase":"reaction","title":"옷장에 같이 숨기 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"e3bab26aceccc01c07b07a021d2826e836ad9c46a4d2eaf2ad2f39096ec221bb"},"ready":true,"dialogue":[{"speaker":"하늘","text":"숨소리까지 들리는 것 같아."},{"speaker":"나","text":"조금만 기다리자. 발소리 멀어졌어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-21-haneul-resolution","phase":"resolution","title":"옷장에 같이 숨기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-21-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/party-room-closet.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"e3bab26aceccc01c07b07a021d2826e836ad9c46a4d2eaf2ad2f39096ec221bb"},"ready":true,"dialogue":[{"speaker":"하늘","text":"이제 나가자. 파티 준비가 제일 스릴 있었네."},{"speaker":"나","text":"다음엔 망 보는 사람부터 정하자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"깜짝파티 들키지 않으려 옷장 안에 숨는 짧은 코미디. 둘 다 완전히 옷을 입었고 성적 접촉 없이 가까운 거리와 소리 죽이는 행동만 표현한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-22","number":22,"hero":"ina","title":"자동차 뒷좌석 물건 찾기","original":"자동차 뒷좌석 물건 찾기 — 좌석 아래 휴대폰을 동시에 찾다가 서로 엉킨 자세가 되어 급히 떨어진다.","background_id":"car-rear-seat","name":"이나","beats":[{"id":"r60-22-ina-setup","phase":"setup","title":"자동차 뒷좌석 물건 찾기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"22ae7f8db9c08172a1c86203e90234e9bde7566db7ca71be607b8a13f396c568"},"ready":true,"dialogue":[{"speaker":"","text":"진로 상담 모임이 끝난 밤, 이나가 가져온 자료 상자를 주차장까지 옮겼다."},{"speaker":"이나","text":"비행 근무가 바뀌어서 오늘 밤밖에 시간이 없어. 남아 줘서 고마워, {N}."},{"speaker":"나","text":"정리 당번이라 어차피 남아 있었어요. 상자는 뒷좌석에 실을게요."},{"speaker":"","text":"마지막 상자를 밀어 넣다가, 이나의 휴대폰이 앞좌석 아래로 미끄러졌다."},{"speaker":"이나","text":"안내 말씀 드립니다. 휴대폰이 좌석 아래로 이륙했습니다. …손전등 좀 비춰 줄래?"},{"speaker":"나","text":"보이네요. 제가 닿을 것 같아요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-22-ina-incident","phase":"incident","title":"자동차 뒷좌석 물건 찾기","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-22-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-22-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"22ae7f8db9c08172a1c86203e90234e9bde7566db7ca71be607b8a13f396c568"},"ready":true,"dialogue":[{"speaker":"","text":"같은 순간 팔을 넣는 바람에, 휴대폰보다 서로의 손등에 먼저 닿았다."},{"speaker":"이나","text":"앗, 그건 내 손인데."},{"speaker":"나","text":"죄, 죄송해요. 둘이 동시에 들어갔네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 몸 전체가 복잡하게 엉킨 자세까지 표현했는지는 후속 검토 대상이다."},{"id":"r60-22-ina-reaction","phase":"reaction","title":"자동차 뒷좌석 물건 찾기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"22ae7f8db9c08172a1c86203e90234e9bde7566db7ca71be607b8a13f396c568"},"ready":true,"dialogue":[{"speaker":"","text":"고개를 들려던 이나가 멈췄다. 좁은 뒷좌석에서 숨소리가 가까웠다."},{"speaker":"이나","text":"잠깐만. 내 팔부터 뺄게."},{"speaker":"나","text":"네… 저는 불만 비출게요."},{"speaker":"이나","text":"…그런데 손전등이 자꾸 흔들리는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-22-ina-resolution","phase":"resolution","title":"자동차 뒷좌석 물건 찾기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-22-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/car-rear-seat.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"22ae7f8db9c08172a1c86203e90234e9bde7566db7ca71be607b8a13f396c568"},"ready":true,"dialogue":[{"speaker":"나","text":"그, 그게요. …제 손이 아직 놀란 것 같아서요."},{"speaker":"","text":"이나가 휴대폰을 꺼내 들고 먼지를 털며 웃었다."},{"speaker":"이나","text":"찾았다! 다음엔 한 명씩 움직이자."},{"speaker":"나","text":"역할 분담이 이렇게 중요한 거였네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-23","number":23,"hero":"daeun","title":"립밤 공유 논쟁","original":"립밤 공유 논쟁 — “이거 같이 쓰면 간접키스 아니야?”라는 한마디 때문에 갑자기 둘 다 의식하기 시작한다.","background_id":"cafe-day","name":"다은","beats":[{"id":"r60-23-daeun-setup","phase":"setup","title":"립밤 공유 논쟁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 가방에서 립밤을 꺼냈다. 별생각 없이 내민 손이었다."},{"speaker":"다은","text":"…입술 좀 텄네. 립밤 있는데."},{"speaker":"나","text":"고마워. 잠깐만 빌릴게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-23-daeun-incident","phase":"incident","title":"립밤 공유 논쟁","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-23-daeun-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-23-daeun-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"뚜껑을 여는 순간, 다은이 립밤을 도로 움켜쥐었다. 둘 사이의 작은 물건이 갑자기 어색해졌다."},{"speaker":"다은","text":"잠깐… 이거, 내가 쓰던 거였어."},{"speaker":"나","text":"아. …그렇네. 그건 생각 못 했다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 직접 입맞춤은 원문 요청이 아니며 묘사하지 않는다."},{"id":"r60-23-daeun-reaction","phase":"reaction","title":"립밤 공유 논쟁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 눈을 피하며 뚜껑을 다시 끼웠다. 나도 괜히 찻잔 손잡이만 만지작거렸다."},{"speaker":"다은","text":"…괜히 의식하게 되잖아. 잠깐, 뚜껑부터."},{"speaker":"나","text":"내가 먼저 확인했어야 했는데. 차부터 한 모금 마실까?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-23-daeun-resolution","phase":"resolution","title":"립밤 공유 논쟁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-23-daeun-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"가방을 뒤적이던 다은이 새 립밤 하나를 찾아 건넸다. 우습게 길어진 망설임은 작은 선물로 끝났다."},{"speaker":"다은","text":"…새것도 하나 있어. 이건 편하게 써."},{"speaker":"나","text":"이건 잘 쓸게. 다음엔 내가 하나 사 줄게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-24","number":24,"hero":"ina","title":"호텔 카드키 하나","original":"호텔 카드키 하나 — 한 명이 샤워하는 동안 다른 사람이 룸서비스를 받으러 나갔다가 문이 잠겨 가운 차림으로 구조 요청을 한다.","background_id":"hotel-corridor","name":"이나","beats":[{"id":"r60-24-ina-setup","phase":"setup","title":"호텔 카드키 하나 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"학교가 신청한 진로 박람회가 호텔 컨벤션 홀에서 열렸다. 나는 학생 대표로 따라왔다."},{"speaker":"","text":"이나는 초청 강사로 동행했고, 배부 자료는 보관 객실에 넣어 두었다."},{"speaker":"이나","text":"{N}, 보관 객실 카드키는 두 장이야. 한 장은 네가 들고 있어."},{"speaker":"","text":"저녁 설명회를 앞두고, 우리 부스로 이나가 쟁반을 든 채 뛰어왔다."},{"speaker":"이나","text":"간식 쟁반 받는 사이에 보관 객실 문이 닫혔어. 카드키는 안에 두고."},{"speaker":"나","text":"잠깐만요. 제 쪽 한 장이 있어요. 같이 가요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-24-ina-incident","phase":"incident","title":"호텔 카드키 하나 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-24-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-24-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"보관 객실 앞. 쟁반을 받쳐 주고 카드키를 건네다 손끝이 살짝 닿았다."},{"speaker":"나","text":"여기요. …쟁반도 같이 들게요."},{"speaker":"이나","text":"고마워. 아슬아슬하게 한 가지씩 놓치네."},{"speaker":"","text":"닿았던 손끝이 이상하게 오래 남아서, 시선을 복도 끝에 두었다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-24-ina-reaction","phase":"reaction","title":"호텔 카드키 하나 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 쟁반을 안은 채 아까 잠겼던 문을 흘끗 보았다."},{"speaker":"이나","text":"문 잠기는 소리가 그렇게 클 줄은 몰랐어."},{"speaker":"나","text":"같이 뛰어오느라… 아, 숨이 좀 찼네요."},{"speaker":"이나","text":"…나보다 네가 더 급했네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-24-ina-resolution","phase":"resolution","title":"호텔 카드키 하나 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-24-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"쟁반을 내려놓은 이나가 카드키부터 확인했다."},{"speaker":"이나","text":"다음에는 주머니 확인, 그다음 문 열기."},{"speaker":"나","text":"그 순서, 저도 기억할게요."},{"speaker":"이나","text":"남은 한 장은 계속 네가 갖고 있어. 저녁 배부도 남았으니까."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-25","number":25,"hero":"haneul","title":"의상 매장 커플 피팅","original":"의상 매장 커플 피팅 — 직원이 연인으로 착각하고 커플용 의상을 입힌 뒤 서로 평가해보라고 한다.","background_id":"fitting-room-corridor","name":"하늘","beats":[{"id":"r60-25-haneul-setup","phase":"setup","title":"의상 매장 커플 피팅 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"직원분이 이 조합을 한번 입어 보래."},{"speaker":"나","text":"나한테도 같은 무늬를 주셨어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-25-haneul-incident","phase":"incident","title":"의상 매장 커플 피팅 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-25-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-25-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"","text":"나란히 내민 소매의 체크무늬가 똑같았다. 하늘이 뒤늦게 웃음을 삼켰다."},{"speaker":"하늘","text":"이거… 커플 옷이었구나."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-25-haneul-reaction","phase":"reaction","title":"의상 매장 커플 피팅 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"서로 평가해 보라니까 더 말을 못 하겠네."},{"speaker":"나","text":"잘 어울려. 그건 바로 말할 수 있어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-25-haneul-resolution","phase":"resolution","title":"의상 매장 커플 피팅 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-25-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"그럼 나도 말할게. 너도 잘 어울려."},{"speaker":"나","text":"이제 직원분 오해는 더 커지겠다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"직원이 권한 같은 패턴의 평상복을 완전히 입고 서로 평가한다. 갈아입는 장면은 보여 주지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-26","number":26,"hero":"seoyoon","title":"바디페인팅 행사","original":"바디페인팅 행사 — 팔·어깨에 그림을 그려주는 체험에서 붓이 피부에 닿을 때마다 간지러워 몸을 피한다.","background_id":"festival-art-booth","name":"서윤","beats":[{"id":"r60-26-seoyoon-setup","phase":"setup","title":"바디페인팅 행사","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0d6313ecdd15fb492167af6233d20ee7c025ad821b65fd157109cb251857666e"},"ready":true,"dialogue":[{"speaker":"","text":"동네 가을 행사의 그림 체험 부스. 서윤이 별 모양 도안을 골라 소매를 걷었다."},{"speaker":"서윤","text":"별 하나면 금방 끝나지? 여기. 네가 그려."},{"speaker":"나","text":"팔에 작은 별 하나. 움직이면 꼬리가 생길지도 몰라."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-26-seoyoon-incident","phase":"incident","title":"바디페인팅 행사","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-26-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-26-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0d6313ecdd15fb492167af6233d20ee7c025ad821b65fd157109cb251857666e"},"ready":true,"dialogue":[{"speaker":"","text":"노란 물감을 묻힌 붓이 팔에 닿자 서윤의 어깨가 움찔했다. 선 하나를 그을 때마다 참던 웃음이 새어 나왔다."},{"speaker":"서윤","text":"야, 간지러워! 붓 끝 좀 살살…!"},{"speaker":"나","text":"간지러웠구나. 붓은 잠깐 떼고 있을게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 어깨에 그리는 별도 동작은 이번 컷에 포함하지 않았다."},{"id":"r60-26-seoyoon-reaction","phase":"reaction","title":"바디페인팅 행사","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0d6313ecdd15fb492167af6233d20ee7c025ad821b65fd157109cb251857666e"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 입술을 꾹 다물어 봤지만 끝내 웃었다. 붓을 떼자, 이번엔 안 움직이겠다며 고개를 끄덕였다."},{"speaker":"서윤","text":"움직이면 삐뚤어지지? 알았어. 참는다."},{"speaker":"나","text":"괜찮아. 웃음 멈출 때까지 기다렸다 그리자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-26-seoyoon-resolution","phase":"resolution","title":"바디페인팅 행사","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-26-seoyoon-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/festival-art-booth.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0d6313ecdd15fb492167af6233d20ee7c025ad821b65fd157109cb251857666e"},"ready":true,"dialogue":[{"speaker":"","text":"완성된 별을 보려고 서윤이 팔을 돌렸다. 살짝 흔들린 선까지 마음에 든다며 물감이 마르기를 기다렸다."},{"speaker":"서윤","text":"봐. 결국 예쁘게 됐잖아. 흔들린 것도 좋고."},{"speaker":"나","text":"조금 흔들렸지만, 이 별은 네 거라는 표시가 됐네."},{"speaker":"서윤","text":"…씻기 아깝다, 이거."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-27","number":27,"hero":"yuri","title":"향초 만들기 공방","original":"향초 만들기 공방 — 서로에게 어울리는 향을 골라주다가 직원이 “연인에게 가장 매력적으로 느껴지는 향” 테스트를 권한다.","background_id":"candle-workshop","name":"유리","beats":[{"id":"r60-27-yuri-setup","phase":"setup","title":"향초 만들기 공방 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b7b2b4531400ae67d1e2065a164e896d40d1e87114200decd4a3ffa313e0cb1d"},"ready":true,"dialogue":[{"speaker":"유리","text":"너한테 어울리는 향을 골라 주는 거래."},{"speaker":"나","text":"그럼 내 건 네가 골라 봐."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-27-yuri-incident","phase":"incident","title":"향초 만들기 공방 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-27-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-27-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b7b2b4531400ae67d1e2065a164e896d40d1e87114200decd4a3ffa313e0cb1d"},"ready":true,"dialogue":[{"speaker":"","text":"직원이 연인에게 매력적으로 느껴지는 향을 비교해 보라며 시향지를 더 건넸다."},{"speaker":"나","text":"그 말을 들으니까 갑자기 다르게 맡게 되네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-27-yuri-reaction","phase":"reaction","title":"향초 만들기 공방 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b7b2b4531400ae67d1e2065a164e896d40d1e87114200decd4a3ffa313e0cb1d"},"ready":true,"dialogue":[{"speaker":"유리","text":"이쪽이 좋아. 너무 달지도 않고… 네가 생각나."},{"speaker":"나","text":"그 이유까지 들으니까 나도 그 향이 좋아졌어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-27-yuri-resolution","phase":"resolution","title":"향초 만들기 공방 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-27-yuri-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/candle-workshop.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b7b2b4531400ae67d1e2065a164e896d40d1e87114200decd4a3ffa313e0cb1d"},"ready":true,"dialogue":[{"speaker":"유리","text":"굳으면 가져가자~ 오늘 냄새가 오래 남겠다, 헤헤."},{"speaker":"나","text":"불 켤 때마다 이 공방 생각나겠네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"향을 서로 골라주는 향초 공방 체험과 직원의 연인 향 테스트 권유를 평범한 대화·시향 행동으로 표현한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-28","number":28,"hero":"seoha","title":"조명 버튼이 아니었다","original":"숙소 침대 리모컨 사고 — 조명 버튼인 줄 알고 눌렀는데 침대 마사지 기능이 갑자기 작동해 둘 다 폭소한다.","background_id":"hotel-suite-evening","name":"서하","beats":[{"id":"r60-28-seoha-setup","phase":"setup","title":"숙소 침대 리모컨 사고","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"학년 수련회 숙소를 미리 점검하는 날이었다. 서하는 인솔 담당으로, 나는 학생 대표로 따라갔다."},{"speaker":"서하","text":"{N}, 방마다 조명이랑 침대만 확인하면 돼. 학생 눈높이로 봐 줘."},{"speaker":"나","text":"네. 친구들이 묵을 자리에서 보면 될까요?"},{"speaker":"","text":"불빛이 너무 밝았다. 서하가 머리맡의 리모컨을 집었다."},{"speaker":"서하","text":"리모컨 하나로 다 된대. 설명서엔 확인 표시를 해 뒀어."},{"speaker":"서하","text":"…비슷한 그림이 두 개네. 이 버튼인가?"},{"speaker":"나","text":"그건 침대 쪽 같은데요. 스탠드 스위치는 여기 있어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-28-seoha-incident","phase":"incident","title":"숙소 침대 리모컨 사고","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-28-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-28-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"불은 그대로인데 침대 등받이가 올라갔다. 쌓아 둔 베개가 서하의 어깨로 쏟아졌다."},{"speaker":"서하","text":"어? 조명 버튼이 아니었어!"},{"speaker":"나","text":"잠깐만요, 베개부터 받을게요!"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 플레이어의 폭소는 대사로 이어지며 그림의 주된 인물은 다은이다."},{"id":"r60-28-seoha-reaction","phase":"reaction","title":"숙소 침대 리모컨 사고","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"멈춤 버튼을 누르려던 손가락이 웃음 때문에 자꾸 빗나갔다. 그 손끝에서 눈을 못 뗐다."},{"speaker":"서하","text":"잠깐만. 웃어서 누르질 못하겠어."},{"speaker":"나","text":"저도 웃으면 안 되는데… 그, 그런 얼굴은 처음 봐서요."},{"speaker":"서하","text":"…그런 얼굴이 어떤 얼굴인데?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-28-seoha-resolution","phase":"resolution","title":"숙소 침대 리모컨 사고","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-28-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"나","text":"아, 그게. 카드요. 안내 카드부터 읽어야 할 것 같아서요."},{"speaker":"","text":"서하가 웃음을 삼키며 리모컨을 내려놓고, 안내 카드를 함께 폈다."},{"speaker":"서하","text":"그러자. 다음 버튼은 설명부터 읽고. 수련회 날 친구들한테는 네가 알려 줘."},{"speaker":"나","text":"불 하나 끄는 데 이렇게 웃을 줄은 몰랐네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-29","number":29,"hero":"yuri","title":"커플 게임 벌칙","original":"커플 게임 벌칙 — 데이트 카페 게임에서 진 사람이 상대에게 10초 동안 눈을 피하지 않는 벌칙을 수행하다 분위기가 묘해진다.","background_id":"cafe-day","name":"유리","beats":[{"id":"r60-29-yuri-setup","phase":"setup","title":"커플 게임 벌칙 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"유리","text":"이번 판은 진짜 안 질 거야."},{"speaker":"나","text":"그 말은 아까도 했는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-29-yuri-incident","phase":"incident","title":"커플 게임 벌칙 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-29-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-29-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"마지막 카드가 내려갔다. 유리는 타이머를 10초에 맞추고 고개를 들었다."},{"speaker":"유리","text":"눈 피하면 안 되는 거지? 시작해."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-29-yuri-reaction","phase":"reaction","title":"커플 게임 벌칙 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"유리","text":"…열 초가 이렇게 길었어?"},{"speaker":"나","text":"아직 웃음 참는 건 벌칙에 없었는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-29-yuri-resolution","phase":"resolution","title":"커플 게임 벌칙 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-29-yuri-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"유리","text":"다시 하자!! 이번엔 내가 벌칙 정할래~"},{"speaker":"나","text":"카드부터 잘 보고 정하는 게 어때."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"보드게임 패배 뒤 10초 동안 눈을 피하지 않는 벌칙. 실제 시간 경과는 대본으로, CG는 타이머와 눈맞춤을 보여 준다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-30","number":30,"hero":"ina","title":"문이 닫히기 전에","original":"현관에서 두 번째 키스 — 데이트 후 짧게 키스하고 헤어졌는데, 문을 닫기 직전 한쪽이 다시 돌아와 이번에는 조금 더 오래 입맞춘다.","background_id":"apartment-entrance-night","name":"이나","beats":[{"id":"r60-30-ina-setup","phase":"setup","title":"현관에서 두 번째 키스 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"공항 전망대에서 돌아오는 길. 공항버스에서 내려, 같은 아파트까지 손을 잡고 걸었다."},{"speaker":"이나","text":"이상해. 1년 동안 다닌 길인데, 오늘 처음 집에 가는 것 같아."},{"speaker":"나","text":"떠나는 길이 아니라서 그래."},{"speaker":"","text":"12층, 1203호 앞. 인사말이 중간에서 멈췄다. 이나의 손바닥 위 열쇠도 그대로였다."},{"speaker":"이나","text":"다 왔네. 너는 한 층만 내려가면 되고."},{"speaker":"","text":"현관 등이 켜졌다. 가까이 선 만큼 목소리도 가까웠다."},{"speaker":"나","text":"…잘 자. 내일 봐."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-30-ina-incident","phase":"incident","title":"현관에서 두 번째 키스 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v32/special/r60-30-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v32/special/r60-30-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"닫히던 문이 다시 열렸다. 이나가 한 걸음 돌아와 내 소매를 살짝 잡았다."},{"speaker":"이나","text":"마지막 인사, 한 번만 더 해도 될까."},{"speaker":"나","text":"…응."},{"speaker":"","text":"서로 고개를 가까이 기울여 짧게 입맞췄다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"현관에서 머뭇거리는 도입/붉어진 반응/인사는 제작하되 실제 두 번째 입맞춤 핵심 CG는 기존 도구 차단 이력 때문에 이번에 시도하지 않는다. 입맞춤 완료로 계산하지 않는다."},{"id":"r60-30-ina-reaction","phase":"reaction","title":"현관에서 두 번째 키스 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 붉어진 뺨에 손을 댔다. 눈은 피했다가도 다시 나를 찾았다."},{"speaker":"이나","text":"돌아가려다가… 그냥 보내기 싫었어."},{"speaker":"나","text":"…다시 불러 줘서 좋았어. 말이 자꾸 막히네."},{"speaker":"이나","text":"…지금 그 말, 내일 다시 해 줘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-30-ina-resolution","phase":"resolution","title":"현관에서 두 번째 키스 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-30-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 열쇠를 들고 작게 손을 흔들었다."},{"speaker":"이나","text":"들어와. 차 한 잔만."},{"speaker":"나","text":"…응. 한 잔만."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"현관에서 머뭇거리는 도입/붉어진 반응/인사는 제작하되 실제 두 번째 입맞춤 핵심 CG는 기존 도구 차단 이력 때문에 이번에 시도하지 않는다. 입맞춤 완료로 계산하지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":100,"kiss":true,"presentationVersion":18},{"id":"r60-31","number":31,"hero":"seoha","title":"노크를 잊은 밤","original":"욕실에 사람이 없는 줄 알고 문을 열었는데 상대가 목욕 중이라 바로 닫기","background_id":"bathroom-exterior","name":"서하","beats":[{"id":"r60-31-seoha-setup","phase":"setup","title":"목욕 중인 줄 모르고 문 열기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"기록물 전시 인솔로 연수원에 묵는 날이었다. 행정 담당은 서하였다."},{"speaker":"서하","text":"동의까지 다 받은 기록이야. 마감은 내가 조정해 뒀으니 오늘은 여기까지."},{"speaker":"나","text":"네. 확인표만 정리하고 씻고 올게요."},{"speaker":"","text":"복도 끝 공용 욕실. 사용 시간표에는 아무 이름도 적혀 있지 않았다."},{"speaker":"","text":"목욕을 마치고 가운을 제대로 입은 서하가 문 쪽 인기척에 고개를 들었다."},{"speaker":"나","text":"…여기, 비어 있는 줄 알았어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-31-seoha-incident","phase":"incident","title":"목욕 중인 줄 모르고 문 열기 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-31-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-31-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"수건장 앞의 서하와 눈이 마주쳤다. 둘 다 그대로 굳었다."},{"speaker":"나","text":"죄송해요! 바로 닫을게요."},{"speaker":"","text":"문이 도로 닫혔다. 심장 뛰는 소리만 복도에 남았다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"The image shows the visitor hand on the door and Seoha already wearing a securely tied opaque robe. It does not show the requested nearly closed door hiding every person inside. Bathing remains offscreen; this depicts a clothed doorway reaction instead of the exact door-only instant."},{"id":"r60-31-seoha-reaction","phase":"reaction","title":"목욕 중인 줄 모르고 문 열기 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"문 너머로 사과를 들은 서하가 놀란 얼굴로 고개를 내밀었다."},{"speaker":"","text":"가운 깃을 여미는 손끝만 보였다. 나는 복도 벽 쪽으로 몸을 돌렸다."},{"speaker":"나","text":"노, 노크… 다음엔 꼭 노크부터 할게요."},{"speaker":"서하","text":"다음부터는 꼭 먼저 물어봐 줘. 나도 진짜 놀랐으니까."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-31-seoha-resolution","phase":"resolution","title":"목욕 중인 줄 모르고 문 열기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-31-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"서하","text":"…근데 왜 네가 더 빨개졌어."},{"speaker":"나","text":"그, 그건… 다시는 확인 없이 열지 않을게요."},{"speaker":"서하","text":"사진도 그랬잖아. 남기기 전에 먼저 물어보는 거."},{"speaker":"","text":"서하가 시간표 옆 이름표에 제 이름을 적어 걸었다. 적어 두라던 사람이 먼저 빠뜨린 칸이었다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-32","number":32,"hero":"ina","title":"다음엔 목소리부터","original":"샤워 중인데 가족인 줄 알고 문을 열어줬다가 연인이 서 있어 비명 지르기","background_id":"bathroom-exterior","name":"이나","beats":[{"id":"r60-32-ina-setup","phase":"setup","title":"문 앞의 연인을 보고 비명 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"겨울 행사 안내 자료 최종본이 저녁에야 인쇄됐다. 이나는 새벽 비행이라 학교에 못 온다."},{"speaker":"","text":"선생님은 봉투를 나에게 맡겼다. 윗집에 사니까 제일 빠르다고."},{"speaker":"나","text":"봉투만 드리고 바로 내려올게요. 한 층이니까요."},{"speaker":"","text":"현관 앞에서 봉투를 고쳐 들고 노크했다."},{"speaker":"","text":"안에서 발소리가 성큼 다가왔다. 기다리던 사람이 온 줄 아는 걸음이었다."},{"speaker":"이나","text":"잠깐만. 지금 나갈게. 생각보다 빨리 왔네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-32-ina-incident","phase":"incident","title":"문 앞의 연인을 보고 비명 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-32-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-32-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"문이 열렸다. 나를 알아본 이나가 반걸음 물러났다."},{"speaker":"이나","text":"어머. 벌써 왔어?"},{"speaker":"나","text":"늦은 시간에 죄송해요. 이름부터 말할 걸 그랬어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-32-ina-reaction","phase":"reaction","title":"문 앞의 연인을 보고 비명 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 가슴을 쓸어내리더니 멋쩍게 웃었다. 학교에서 듣던 목소리가 아니었다."},{"speaker":"이나","text":"가족인 줄 알았어. 짐 갖다주기로 했거든. 나 혼자 엄청 놀랐네."},{"speaker":"나","text":"저, 저도 밖에서 같이 놀랐어요. …그, 목소리가 달라서요."},{"speaker":"이나","text":"…그건 문 앞에서 할 말은 아닌 것 같은데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-32-ina-resolution","phase":"resolution","title":"문 앞의 연인을 보고 비명 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-32-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 손님용 슬리퍼를 가져와 문 앞에 놓았다."},{"speaker":"이나","text":"다음엔 목소리부터 들려줘. 문 열기 전에 누군지 알게."},{"speaker":"나","text":"아, 네. 그, 봉투 얘기를 하려던 거였어요. …약속할게요. {N} 왔습니다."},{"speaker":"이나","text":"이제 알겠네. 어서 와. 최종본은 같이 확인하자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-33","number":33,"hero":"ina","title":"걸리지 않는 문고리","original":"욕실 잠금장치가 고장 나 상대가 실수로 문을 열어버리기","background_id":"bathroom-exterior","name":"이나","beats":[{"id":"r60-33-ina-setup","phase":"setup","title":"고장 난 욕실 잠금장치 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나의 고향, 어머니의 게스트하우스에서 맞은 첫날 밤이었다."},{"speaker":"","text":"밤 아홉 시. 이나가 먼저 욕실로 가고 얼마 안 돼, 철컥 소리와 짧은 비명이 났다."},{"speaker":"나","text":"…이나 씨? 괜찮아요?"},{"speaker":"","text":"복도로 뛰어나가자, 라벤더색 니트 카디건 차림의 이나가 손바닥을 내밀었다."},{"speaker":"이나","text":"…문손잡이가 손에 딸려 나왔어. 원래 빠지는 물건은 아니지?"},{"speaker":"나","text":"손잡이가 헐거워졌나 봐요. 제가 볼게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-33-ina-incident","phase":"incident","title":"고장 난 욕실 잠금장치 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-33-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-33-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"손잡이를 잃은 문이 바닷바람에 끼익 움직였다. 걸쇠가 걸리지 않았다."},{"speaker":"나","text":"문은 제가 받치고 있을게요. 어머님께 공구함 있는지 여쭤봐 주세요."},{"speaker":"이나","text":"그래. 부속은 내가 챙길게. 하나라도 흘리면 안 되니까."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-33-ina-reaction","phase":"reaction","title":"고장 난 욕실 잠금장치 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-33-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"바람에 문이 한 번 더 덜컹했다. 이나가 반사적으로 내 소매를 움켜쥐었다."},{"speaker":"이나","text":"멀쩡한 문도 오늘은 자꾸 신경 쓰이네."},{"speaker":"","text":"소매를 쥔 손끝이 차가웠다. 목소리가 평소보다 가까이서 들렸다."},{"speaker":"나","text":"…소매는 계속 잡고 있어도 돼요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-33-ina-resolution","phase":"resolution","title":"고장 난 욕실 잠금장치 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-33-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-33-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"나사 세 개를 다 찾았을 때, 공구함을 든 이나 어머니가 계단을 올라왔다."},{"speaker":"이나","text":"혼자였으면 이 문만 계속 붙잡고 있었겠다. 고마워."},{"speaker":"나","text":"어머님 오셨어요. 이제 금방 고치겠네요."},{"speaker":"이나","text":"…{N}. 내가 아직 소매를 잡고 있었네. 문은 이제 안 움직이는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-34","number":34,"hero":"ina","title":"연수원 복도에서 마주치다","original":"목욕을 끝내고 수건을 두른 채 나오다가 복도에서 정면으로 마주치기","background_id":"hotel-corridor","name":"이나","beats":[{"id":"r60-34-ina-setup","phase":"setup","title":"수건 차림 복도에서 마주침 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"가을 특강에서 다 못 한 질문이 쌓여, 학교가 1박 진로 연수를 열었다. 이나도 초청 강사로 동행했다."},{"speaker":"이나","text":"담당 선생님이 층별 질문지를 너한테 맡기셨다며. 나도 오늘은 같은 숙소에 묵어."},{"speaker":"나","text":"네. 저녁 자유시간에 층마다 돌면서 받아 둘게요."},{"speaker":"","text":"대욕장 앞 복도. 이나가 두꺼운 스파 타월을 단단히 여민 채 쓴 수건을 정리하고 있었다."},{"speaker":"이나","text":"…이것만 통에 넣고 바로 방으로 가면 되겠다."},{"speaker":"","text":"나는 질문지 뭉치를 든 채 반대편 계단에서 그 층으로 올라오는 중이었다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-34-ina-incident","phase":"incident","title":"수건 차림 복도에서 마주침 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-34-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-34-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"복도 한가운데서 마주쳤다. 둘 다 그대로 발이 멈췄다."},{"speaker":"나","text":"죄, 죄송해요. 이쪽에 계신 줄 몰라서요."},{"speaker":"","text":"질문지가 손에서 미끄러질 뻔했다. 나는 계단 쪽으로 눈을 돌렸다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-34-ina-reaction","phase":"reaction","title":"수건 차림 복도에서 마주침 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 붉어진 얼굴로 시선을 옆으로 돌렸다. 먼저 지나가라는 손짓이었다."},{"speaker":"이나","text":"둘이 동시에 멈춰 서니까 더 어색하네."},{"speaker":"나","text":"네. 저는, 저쪽으로… 아니 그, 질문지를 세고 있어서요."},{"speaker":"이나","text":"…그 질문지, 거꾸로 들었어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Representative around saved output 50: Ina has an embarrassed open laugh, raised inner brows, one hand beside her mouth and the other holding a folded towel. The opaque spa wrap remains secured; crown-to-knees framing is preserved. Bright green RGB background is present and is not alpha. This is a candidate, not a complete fine-detail anatomical certification."},{"id":"r60-34-ina-resolution","phase":"resolution","title":"수건 차림 복도에서 마주침 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-34-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"65276fa3914afd0955e955eb4c95d19e8ec31922f6549a81f201f33514e282e3"},"ready":true,"dialogue":[{"speaker":"나","text":"천천히 가세요. 저는 여기서 뒤돌아 기다릴게요."},{"speaker":"","text":"모퉁이를 돌 때까지 벽 쪽을 보고 섰다. 이나가 옷을 갖춰 입고 나온 뒤에야 다시 마주 섰다."},{"speaker":"이나","text":"그럼 다시. 안녕, {N}. 질문지는 로비에서 같이 세자."},{"speaker":"나","text":"…네. 세는 건 처음부터 다시 할게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-35","number":35,"hero":"seoha","title":"문틈으로 건넨 한 벌","original":"갈아입을 옷을 밖에 두고 와서 문틈으로 가져다 달라고 부탁하기","background_id":"bathroom-exterior","name":"서하","beats":[{"id":"r60-35-seoha-setup","phase":"setup","title":"문틈으로 갈아입을 옷 부탁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"기록물 공개 동의 설명회는 이틀짜리였다. 행정 담당인 서하를 따라 학생 대표로 연수원에 묵게 됐다."},{"speaker":"서하","text":"설명회 자료는 내일 아침에 다시 보자. 대욕장은 열 시에 닫는대."},{"speaker":"나","text":"네, 자료만 방에 두고 내려갈게요."},{"speaker":"","text":"탈의실 앞 벤치에 접힌 옷 한 벌이 그대로 있었다. 서하가 두고 들어간 모양이었다."},{"speaker":"서하","text":"{N}, 아직 거기 있니? 밖에 접어 둔 옷 좀 건네줄래?"},{"speaker":"나","text":"네, 벤치 위에 접혀 있는 거 맞죠?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-35-seoha-incident","phase":"incident","title":"문틈으로 갈아입을 옷 부탁","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-35-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-35-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"문이 한 뼘쯤 열리고, 트레이닝복 차림의 서하가 고개만 내밀었다. 머리끝이 젖어 있었다."},{"speaker":"","text":"접힌 니트를 내민 손 위에 올려놓았다. 눈은 복도 끝에 두었다."},{"speaker":"나","text":"여기 있어요. 저, 저는 바로 밖에서 기다릴게요."},{"speaker":"서하","text":"응, 고마워. 금방 나갈게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 갈아입는 과정은 화면 밖이다."},{"id":"r60-35-seoha-reaction","phase":"reaction","title":"문틈으로 갈아입을 옷 부탁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"니트를 품에 안고 나온 서하가 쑥스럽게 웃었다. 머리끝에서 물이 떨어졌다."},{"speaker":"서하","text":"확인하고 들어간 줄 알았는데, 꼭 하나씩 빠뜨리네."},{"speaker":"나","text":"저도 자주 그래요. 아, 저는 아무것도 안 봤어요."},{"speaker":"서하","text":"…뭘 안 봤다는 건데?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-35-seoha-resolution","phase":"resolution","title":"문틈으로 갈아입을 옷 부탁","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-35-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"나","text":"…손만요. 물기 묻은 손만 봤어요."},{"speaker":"","text":"서하가 웃으면서 남은 짐을 하나씩 확인하고 가방을 닫았다."},{"speaker":"서하","text":"이제 전부 챙겼어. 다음엔 내가 네 짐 확인해 줄게."},{"speaker":"나","text":"그럼 서로 하나씩 맡는 걸로 해요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-36","number":36,"hero":"ina","title":"높이 들어 올린 수건","original":"샤워 후 수건을 찾는데 상대가 장난으로 수건을 높이 들어 올리기","background_id":"bathroom-exterior","name":"이나","beats":[{"id":"r60-36-ina-setup","phase":"setup","title":"높이 들어 올린 수건","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"진로 행사 소품 상자를 행사 전까지 1203호에 맡기기로 했다. 밤비를 뚫고 한 층 올라갔다."},{"speaker":"이나","text":"어서 와. 나도 방금 비 맞고 들어왔어. 상자는 현관에 둬."},{"speaker":"나","text":"네. 여기 둘게요. …머리가 다 젖으셨네요."},{"speaker":"","text":"이나가 수건장 맨 위 칸으로 손을 뻗었다. 까치발을 들어도 손끝이 닿지 않았다."},{"speaker":"이나","text":"이사 올 때 맨 위에 넣어 두고 1년째 못 꺼냈어. 좀 꺼내 줄래?"},{"speaker":"나","text":"네. 여기… 있네요. 제일 푹신한 걸로요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-36-ina-incident","phase":"incident","title":"높이 들어 올린 수건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-36-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-36-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"접힌 수건을 알아본 이나가 손을 뻗었다. 나도 모르게 팔을 조금 더 위로 들었다."},{"speaker":"이나","text":"…{N}? 지금 장난치는 거지? 손님, 수하물은 선반에서 내려 주세요."},{"speaker":"","text":"나는 장난을 멈추고 손에 닿는 높이로 내려 주었다."},{"speaker":"나","text":"네, 바로 돌려 드릴게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 착용한 가운·수건을 벗기거나 빼앗는 장면은 구성하지 않았다."},{"id":"r60-36-ina-reaction","phase":"reaction","title":"높이 들어 올린 수건","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"수건을 받아 든 이나가 어이없다는 듯 웃었다. 고개를 드는 얼굴이 코앞이었다."},{"speaker":"이나","text":"1103호가 장난을 다 치네? 사람을 이렇게 애태우고."},{"speaker":"나","text":"죄송해요. …웃으시는 게 보고 싶어서요."},{"speaker":"이나","text":"…그런 건 장난 말고 그냥 말로 해."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-36-ina-resolution","phase":"resolution","title":"높이 들어 올린 수건","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-36-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 수건을 머리에 둘러쓰고 웃었다. 남은 한 장은 접어서 내 쪽으로 내밀었다."},{"speaker":"이나","text":"너도 어깨 젖었어. 하나는 네 거야."},{"speaker":"나","text":"…네. 수건은 이제 아래 칸에 두세요."},{"speaker":"이나","text":"그래. 다음엔 까치발 안 들게. 소품은 행사 날 같이 가져가자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-37","number":37,"hero":"seoha","title":"한 칸 잘못 읽은 시간표","original":"온천의 이용시간을 잘못 확인해서 상대가 들어오자 물속으로 황급히 숨기","background_id":"onsen","name":"서하","beats":[{"id":"r60-37-seoha-setup","phase":"setup","title":"온천 시간 착각","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"가을 행사 준비표를 낸 반에서 학생 대표를 한 명 보내기로 했다. 담당 선생님이 나를 답사에 붙여 주셨다."},{"speaker":"서하","text":"{N}, 오늘은 시설 시간표만 옮겨 적으면 돼. 네가 낸 준비표에 붙일 거야."},{"speaker":"나","text":"네. 빠짐없이 적어 볼게요."},{"speaker":"","text":"체험 시설 정원 입구에서 서하가 안내 시간표를 다시 들여다봤다. 카디건은 팔에 걸쳐 있었다."},{"speaker":"서하","text":"한 칸 잘못 읽었네. 지금은 족욕 시간이래. 다음 코스까지 비는데, 앉았다 갈까."},{"speaker":"나","text":"네. 시간표는 제가 다시 옮겨 적을게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-37-seoha-incident","phase":"incident","title":"온천 시간 착각","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-37-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-37-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 카디건을 옆 돌 위에 내려놓았다. 나란히 앉아 발을 담갔다."},{"speaker":"서하","text":"발만 따뜻해져도 한결 낫네. 종일 서서 걸었더니."},{"speaker":"나","text":"오늘 코스를 두 바퀴나 도셨잖아요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 원문의 장소와 시간 착각은 유지하고 입수 복장은 명시적으로 추가했다."},{"id":"r60-37-seoha-reaction","phase":"reaction","title":"온천 시간 착각","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"자리에서 일어서던 서하가 조용한 정원을 돌아보았다. 옆얼굴에 걸린 저녁 빛에서 눈을 떼기가 어려웠다."},{"speaker":"서하","text":"시간을 잘못 본 덕에 이런 곳도 알았네."},{"speaker":"나","text":"…네. 다음에도 한 칸쯤은 잘못 읽으셔도 될 것 같아요."},{"speaker":"서하","text":"그건 칭찬이야, 놀리는 거야? …확인은 보류할게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-37-seoha-resolution","phase":"resolution","title":"온천 시간 착각","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-37-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"이야기를 나누며 발을 담그고 있으니 시간이 꽤 흘렀다. 휴대폰을 보니 어느새 다섯 시였다."},{"speaker":"","text":"서하가 돌 위의 카디건을 집어 팔에 걸쳤다."},{"speaker":"서하","text":"나도 확인 표시를 여러 번 한다고 했잖아. 다음엔 시간표를 같이 확인하자."},{"speaker":"나","text":"네. 준비표에 이 시간대도 적어 둘게요. 다음 코스도 천천히 가요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-38","number":38,"hero":"seoha","title":"젖은 돌바닥과 붙잡은 팔","original":"온천에서 미끄러질 뻔한 상대의 팔을 잡아주다가 둘 다 물에 빠지기","background_id":"onsen","name":"서하","beats":[{"id":"r60-38-seoha-setup","phase":"setup","title":"온천에서 미끄러져 함께 풍덩","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"시간표를 옮겨 적었던 그 체험 시설에, 준비표에 붙일 사진을 찍으러 다시 갔다."},{"speaker":"서하","text":"사람이 안 찍힌 사진으로만 골라야 해. 해 지기 전에 정원 쪽만 같이 돌자."},{"speaker":"나","text":"네. 준비물이랑 화단 쪽으로 골라 볼게요."},{"speaker":"","text":"낮에 갠 비가 정원 돌길에 그대로 남아 있었다. 서하가 걸음을 늦췄다."},{"speaker":"서하","text":"여기는 조금 미끄럽겠다. 젖은 데는 피해서 가자."},{"speaker":"나","text":"난간 쪽으로 가요. 제가 먼저 밟아 볼게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-38-seoha-incident","phase":"incident","title":"온천에서 미끄러져 함께 풍덩","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-38-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-38-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,940]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"서하의 발이 젖은 돌에서 미끄러졌다. 허우적 뻗은 팔을 나도 모르게 붙잡았다."},{"speaker":"서하","text":"앗, 잠깐!"},{"speaker":"","text":"붙잡은 팔째로, 둘 다 온천물 속에 첨벙 빠졌다."},{"speaker":"나","text":"괘, 괜찮아요? 어디 안 부딪혔어요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 입수 복장은 명시적으로 추가했다."},{"id":"r60-38-seoha-reaction","phase":"reaction","title":"온천에서 미끄러져 함께 풍덩","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"","text":"서로 괜찮은지 확인하고 나서야 웃음이 났다. 웃는 얼굴이 바로 앞에 있었다."},{"speaker":"서하","text":"구해 주려다가 너까지 홀딱 젖었네."},{"speaker":"나","text":"둘 다 안 다쳤으니까… 서, 성공이에요."},{"speaker":"서하","text":"그 손은 언제까지 잡고 있을 거야?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-38-seoha-resolution","phase":"resolution","title":"온천에서 미끄러져 함께 풍덩","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-38-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/onsen.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"1b2139d54da9f8de7334fc4f436e45b53486e666f04cced9eae0361a1cfdf4e2"},"ready":true,"dialogue":[{"speaker":"나","text":"죄송해요. 놓는 걸… 깜빡했어요."},{"speaker":"","text":"빌린 수건으로 대충 물기를 닦았다. 돌 위에 둔 가방 속 카메라는 멀쩡했다."},{"speaker":"서하","text":"이번엔 한 걸음씩. 같이 맞춰서 걷자."},{"speaker":"나","text":"좋아요. 제가 먼저 디뎌 볼게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-39","number":39,"hero":"haneul","title":"옆 칸을 착각했다","original":"탈의실 칸을 착각해 커튼을 열었다가 서로 동시에 얼어붙기","background_id":"fitting-room-corridor","name":"하늘","beats":[{"id":"r60-39-haneul-setup","phase":"setup","title":"잘못 연 탈의실 커튼 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"잠깐 기다려. 짐만 챙겨서 나갈게."},{"speaker":"나","text":"응. 나도 재킷 가지러 갔다 올게. 아까 칸에 걸어 뒀거든."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-39-haneul-incident","phase":"incident","title":"잘못 연 탈의실 커튼 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-39-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-39-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"","text":"비슷한 커튼이 줄지어 있었다. 아까 쓴 칸인 줄 알고 손을 뻗는데, 하늘이 먼저 커튼을 붙잡았다."},{"speaker":"하늘","text":"거기 내 칸이야! 안에 내 가방 있어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-39-haneul-reaction","phase":"reaction","title":"잘못 연 탈의실 커튼 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"네 재킷은 여기. 아까 나오면서 내가 챙겼어."},{"speaker":"나","text":"…그걸 네가 들고 있었구나. 칸마다 뒤지고 다닐 뻔했네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-39-haneul-resolution","phase":"resolution","title":"잘못 연 탈의실 커튼 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-39-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"번호가 비슷해서 헷갈릴 만하긴 하네."},{"speaker":"나","text":"다음엔 번호부터 확인할게. 재킷, 고마워."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"잘못 연 커튼의 내부나 갈아입는 몸은 전혀 보여 주지 않는다. 즉시 닫힌 커튼과 완전히 옷을 입고 나온 뒤의 놀람·사과만 보여 주며 원래 노출 사고는 OFFSCREEN.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-40","number":40,"hero":"haneul","title":"탈의실 앞 장난","original":"수영장 탈의실에서 옷을 갈아입는데 친구가 장난으로 커튼을 열어버리기","background_id":"pool-changing-corridor","name":"하늘","beats":[{"id":"r60-40-haneul-setup","phase":"setup","title":"수영장 커튼 장난 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"167eaccdffe6f7cfebd8e89f1b2b29554829533edc29e8c85d52d597c49e0bd8"},"ready":true,"dialogue":[{"speaker":"","text":"수영 수업이 끝난 탈의실 복도. 하늘이 커튼 친 빈 칸 앞을 지키고 서 있었다."},{"speaker":"하늘","text":"이 칸은 비워 둬. 강 선생님 생신 선물을 숨겨 놨거든."},{"speaker":"나","text":"알겠어. 반 애들 모일 때까지 같이 지킬게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-40-haneul-incident","phase":"incident","title":"수영장 커튼 장난 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-40-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-40-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"167eaccdffe6f7cfebd8e89f1b2b29554829533edc29e8c85d52d597c49e0bd8"},"ready":true,"dialogue":[{"speaker":"","text":"지나가던 민재가 궁금했는지 커튼 자락을 휙 잡아당겼다. 하늘이 먼저 커튼을 단단히 붙잡았다."},{"speaker":"하늘","text":"장난이어도 커튼은 열지 마!"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-40-haneul-reaction","phase":"reaction","title":"수영장 커튼 장난 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"167eaccdffe6f7cfebd8e89f1b2b29554829533edc29e8c85d52d597c49e0bd8"},"ready":true,"dialogue":[{"speaker":"","text":"팔짱을 낀 하늘이 달아나는 민재의 뒤통수를 노려봤다."},{"speaker":"하늘","text":"깜짝 선물은 놀랄 사람이 딱 한 명이어야 해. 민재가 먼저 놀라면 곤란하지."},{"speaker":"나","text":"반장이 막아서 다행이다. 선물은 무사해?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-40-haneul-resolution","phase":"resolution","title":"수영장 커튼 장난 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-40-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/pool-changing-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"167eaccdffe6f7cfebd8e89f1b2b29554829533edc29e8c85d52d597c49e0bd8"},"ready":true,"dialogue":[{"speaker":"하늘","text":"응. 선생님 오시기 전까지만 지키면 돼. 끝나면 따뜻한 거 마시러 가자."},{"speaker":"나","text":"오늘은 내가 살게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"친구가 탈의 중 커튼을 여는 행동은 보여 주지 않는다. 닫힌 커튼과 완전착의 상태에서 장난을 멈추라고 말하는 반응을 그리며 사생활 침해는 웃음으로 보상하지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-41","number":41,"hero":"haneul","title":"커튼 너머의 한 벌","original":"피팅룸에서 “이거 어때?”라는 말에 커튼을 열었는데 아직 갈아입는 중이기","background_id":"fitting-room-corridor","name":"하늘","beats":[{"id":"r60-41-haneul-setup","phase":"setup","title":"아직 갈아입는 중인 피팅룸 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"","text":"하늘이 피팅룸에서 나와 옷걸이에 걸린 스웨터를 들어 보였다."},{"speaker":"하늘","text":"이거 어때? 색이 괜찮은 것 같아."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-41-haneul-incident","phase":"incident","title":"아직 갈아입는 중인 피팅룸 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-41-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-41-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"","text":"옷걸이를 도로 걸어 주려고 커튼 쪽으로 손을 뻗었다. 하늘이 화들짝 커튼을 붙잡았다."},{"speaker":"하늘","text":"잠깐만! 안에 입어 본 옷이 산더미야. 보면 안 돼!"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-41-haneul-reaction","phase":"reaction","title":"아직 갈아입는 중인 피팅룸 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"미안. 반장이 이렇게 어질러 놓은 거, 들키기 싫었어."},{"speaker":"나","text":"아니, 내가 먼저 물어봤어야지."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-41-haneul-resolution","phase":"resolution","title":"아직 갈아입는 중인 피팅룸 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-41-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/fitting-room-corridor.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6e936fe5e4479d944209b259a4e03882791387184b1504ae06a9f11c5e0a1077"},"ready":true,"dialogue":[{"speaker":"하늘","text":"정리 끝. 결국 입고 온 거랑 비슷한 색을 골랐네."},{"speaker":"나","text":"응. 그 색이 제일 잘 어울려."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"‘이거 어때?’를 잘못 알아들은 착오는 대사와 닫힌 커튼으로 처리한다. 갈아입는 모습 없이 완전히 옷을 입고 나온 직후만 시각화하며 OFFSCREEN로 표시한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-42","number":42,"hero":"seoha","title":"등 지퍼 올려주기","original":"드레스의 등 지퍼가 걸려 상대에게 올려달라고 부탁하기","background_id":"seoha-dressing-room","name":"서하","beats":[{"id":"r60-42-seoha-setup","phase":"setup","title":"등 지퍼 올려주기 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"가을 행사 개회식 날, 준비표 최종본을 들고 강당 대기실 문을 두드렸다."},{"speaker":"서하","text":"왔구나. 개회식 진행이 십 분 뒤인데 손이 하나 모자라네."},{"speaker":"나","text":"제가 할 수 있는 일이면 말씀해 주세요."},{"speaker":"","text":"서하가 어깨 너머로 손을 뻗어 행사복 등 지퍼를 가리켰다."},{"speaker":"서하","text":"혼자서는 위까지 올라가질 않네. …부탁할게. 등 지퍼, 끝까지."},{"speaker":"나","text":"…네. 제가 올려 드릴게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-42-seoha-incident","phase":"incident","title":"등 지퍼 올려주기 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-42-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-42-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"불투명한 안감이 등을 가리고 있었다. 슬라이더만 조심히 잡았다."},{"speaker":"나","text":"옷은 안 당길게요. 슬라이더만 천천히 올릴게요."},{"speaker":"서하","text":"천천히 해도 돼. 너는 이럴 때 이상하게 침착하더라."},{"speaker":"","text":"슬라이더가 손이 닿지 않던 데를 지나 끝까지 올라갔다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-42-seoha-reaction","phase":"reaction","title":"등 지퍼 올려주기 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 참고 있던 어깨를 풀며 뒤를 돌아봤다. 돌아본 얼굴이 코앞이었다."},{"speaker":"서하","text":"됐네. 이제 손 내려도 괜찮아."},{"speaker":"나","text":"아, 네. …손이 아직 올라가 있었네요."},{"speaker":"서하","text":"지퍼보다 네가 더 긴장했네. 고마워, {N}."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-42-seoha-resolution","phase":"resolution","title":"등 지퍼 올려주기 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-42-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/seoha-dressing-room.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"f17a5eab2a1d28a5999a24802f8d2ad7c23b275ad51afad8c7fe977355f1dfce"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 거울 앞에서 등을 한 번 더 확인했다."},{"speaker":"나","text":"끝까지 잘 잠겼어요. 이제 나가셔도 돼요."},{"speaker":"서하","text":"부탁하니까 되네. 준비표는 끝나고 같이 보자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-43","number":43,"hero":"seoha","title":"바다 앞에서 바르는 선크림","original":"등에 선크림이 닿지 않아 상대에게 발라달라고 부탁하고 어색해지기","background_id":"beach-day","name":"서하","beats":[{"id":"r60-43-seoha-setup","phase":"setup","title":"손이 닿지 않는 등 선크림 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"지난 답사 때 물때를 못 봤다고 했다. 서하를 따라 그 바닷가에 다시 나왔다."},{"speaker":"서하","text":"쉴 자리는 물때를 봐야 정해진대. 담임 선생님께 한 번 더 허락받아 뒀어."},{"speaker":"나","text":"네. 그늘 자리랑 안전 항목은 제가 적을게요."},{"speaker":"","text":"답사표 첫 항목은 자외선 차단이었다. 서하가 등 뒤로 손을 뻗어 보다가 병을 내게 건넸다."},{"speaker":"서하","text":"지난번에 발리볼 하느라 다 지워졌잖아. 저녁엔 따가웠어. 이번엔 등만 부탁할게."},{"speaker":"서하","text":"그리고 이번엔 안 놀랄 거야. 확인했어."},{"speaker":"나","text":"…네. 답사표에 있는 항목이니까요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-43-seoha-incident","phase":"incident","title":"손이 닿지 않는 등 선크림 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-43-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-43-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"어디부터 바를지 묻자 서하가 어깨 너머로 고개를 끄덕였다."},{"speaker":"","text":"허락한 곳에만 조금씩 펴 발랐다. 손끝 말고는 아무 데도 보지 못했다."},{"speaker":"나","text":"차가우면 바로 말씀해 주세요. 천천히 할게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-43-seoha-reaction","phase":"reaction","title":"손이 닿지 않는 등 선크림 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-43-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"차가운 크림에 서하의 어깨가 또 움찔했다. 곧 참던 웃음이 터졌다."},{"speaker":"나","text":"…안 놀라신다고 확인하셨는데요."},{"speaker":"서하","text":"…확인 취소. 근데 귀는 왜 네가 빨개져?"},{"speaker":"","text":"한동안 바다에서 놀고 나오니 바람이 서늘했다. 서하가 남색 집업을 걸치고 밀짚모자를 썼다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-43-seoha-resolution","phase":"resolution","title":"손이 닿지 않는 등 선크림 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-43-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-43-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"돌아갈 준비를 마친 서하가 선크림 뚜껑을 닫고 토트백에 넣었다."},{"speaker":"서하","text":"이제 빠진 데 없지? 도와줘서 고마워."},{"speaker":"나","text":"네. 그늘 자리는 이쪽이 낫겠어요. 답사표에 적어 둘게요."},{"speaker":"서하","text":"좋아. 쉬었다 가자. 이번엔 내가 시원한 음료를 가져올게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-44","number":44,"hero":"seoyoon","title":"큰 파도와 풀린 머리끈","original":"해변에서 큰 파도를 맞아 옷매무새가 흐트러져 황급히 정리하기","background_id":"beach-day","name":"서윤","beats":[{"id":"r60-44-seoyoon-setup","phase":"setup","title":"큰 파도와 옷매무새","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"워터파크 파도풀. 얕은 데 선 서윤이 밀려오는 파도를 재어 봤다. 잔잔하다고 하려는 순간, 뒤에서 더 큰 물결이 일었다."},{"speaker":"서윤","text":"이 정도는 파도도 아니지."},{"speaker":"나","text":"뒤에 오는 건 좀 큰데? 한 걸음 물러설까?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-44-seoyoon-incident","phase":"incident","title":"큰 파도와 옷매무새","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-44-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-44-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"예상보다 큰 파도가 어깨까지 덮쳤다. 머리끈이 풀려, 젖은 머리카락이 서윤의 얼굴을 온통 덮었다."},{"speaker":"서윤","text":"앗! 야, 앞이 하나도 안 보여!"},{"speaker":"나","text":"발부터 단단히 디뎌. 나 바로 옆에 있어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 옷이 벗겨지는 장면을 뜻하는 것으로 원문을 확대 해석하지 않았다."},{"id":"r60-44-seoyoon-reaction","phase":"reaction","title":"큰 파도와 옷매무새","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 얼굴에 붙은 머리카락을 걷어 내고 물을 털었다. 나를 보고 웃다가, 작은 물방울을 튀겼다."},{"speaker":"서윤","text":"머리끈 어디 갔어. …뭘 웃어. 내 머리 파도 됐냐?"},{"speaker":"나","text":"머리뿐 아니라 표정도 방금 파도를 맞았어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-44-seoyoon-resolution","phase":"resolution","title":"큰 파도와 옷매무새","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-44-seoyoon-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"7f19d0117ae80d0b56b233f52aca6d1909bbafb28b7cd17747498a695b4f8c7e"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 보드를 챙겨 다음 파도를 멀리서 기다렸다. 이번에는 신호를 맞추고 작은 물결부터 발을 담갔다."},{"speaker":"서윤","text":"이번엔 작은 거부터. 같이 보고 들어가."},{"speaker":"나","text":"하나, 둘, 지금. 이번 파도는 얌전하네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-45","number":45,"hero":"seoyoon","title":"빌려 입은 큰 셔츠","original":"물놀이 후 옷이 전부 젖어 상대의 큰 셔츠를 빌려 입기","background_id":"beach-cabana","name":"서윤","beats":[{"id":"r60-45-seoyoon-setup","phase":"setup","title":"빌려 입은 큰 셔츠","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"762f81f8887947f2981085988efe6b9054e655c1f17752019f66ceea6cb736ae"},"ready":true,"dialogue":[{"speaker":"","text":"워터파크 카바나. 물놀이를 마치고 보니, 말리려고 걸어 둔 서윤의 옷까지 물벼락에 젖어 있었다."},{"speaker":"서윤","text":"내 옷 다 젖었어. 야, 그 셔츠 좀 빌려."},{"speaker":"나","text":"물론이지. 그건 안 젖었으니까 편하게 입어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-45-seoyoon-incident","phase":"incident","title":"빌려 입은 큰 셔츠","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-45-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-45-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"762f81f8887947f2981085988efe6b9054e655c1f17752019f66ceea6cb736ae"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 셔츠를 수영복 위에 걸치고 두 팔을 들어 보였다. 긴 소매 속으로 손끝이 쏙 들어가 버렸다."},{"speaker":"서윤","text":"뭐야, 손이 안 나와. 너 팔 왜 이렇게 길어."},{"speaker":"나","text":"소매를 두 번쯤 접어 볼까?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다. 갈아입는 과정은 화면 밖이다."},{"id":"r60-45-seoyoon-reaction","phase":"reaction","title":"빌려 입은 큰 셔츠","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"762f81f8887947f2981085988efe6b9054e655c1f17752019f66ceea6cb736ae"},"ready":true,"dialogue":[{"speaker":"","text":"커다란 소매를 흔들던 서윤이 내가 웃는 걸 보고 입을 내밀었다. 그래도 옷깃은 꼭 쥔 채였다."},{"speaker":"서윤","text":"웃지 마. …따뜻하단 말이야."},{"speaker":"나","text":"놀리는 게 아니라 진짜 커서 그래. 안 추우면 됐어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."},{"id":"r60-45-seoyoon-resolution","phase":"resolution","title":"빌려 입은 큰 셔츠","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-45-seoyoon-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/beach-cabana.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"762f81f8887947f2981085988efe6b9054e655c1f17752019f66ceea6cb736ae"},"ready":true,"dialogue":[{"speaker":"","text":"소매를 두 번 접은 서윤이 이제 움직이기 편하다며 고개를 끄덕였다. 우리는 젖은 옷을 펼쳐 놓고 마르기를 기다렸다."},{"speaker":"서윤","text":"접으니까 됐다. 빨아서 돌려줄게."},{"speaker":"나","text":"급하게 안 돌려줘도 돼. 오늘은 따뜻하게 입어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다."}],"adaptation":"원문의 당황·도움 동작을 유지하되 탈의·나체·옷 벗겨짐은 표현하지 않는다. 불투명하고 정상 착용된 옷을 유지한다. 수건36은 여분수건 회수,37/38은 옷을 입은 온천형 스파로 각색한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-46","number":46,"hero":"seoyoon","title":"소나기 속 재킷","original":"갑작스러운 소나기에 흠뻑 젖어 상대가 재킷으로 가려주기","background_id":"city-rain-shelter","name":"서윤","beats":[{"id":"r60-46-seoyoon-setup","phase":"setup","title":"소나기 속 재킷","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"be86b029af8fa206e80ebe193d07ae2ebeecaa36f428b2f6673f63ce937a8101"},"ready":true,"dialogue":[{"speaker":"","text":"하굣길, 구름이 순식간에 몰려왔다. 서윤이 손바닥을 펴고 올려다봤다."},{"speaker":"서윤","text":"예보에 없었는데. 뭐 떨어진다."},{"speaker":"나","text":"저기 정류장까지 뛰자. 가방은 내가 들게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-46-seoyoon-incident","phase":"incident","title":"소나기 속 재킷","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-46-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-46-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"be86b029af8fa206e80ebe193d07ae2ebeecaa36f428b2f6673f63ce937a8101"},"ready":true,"dialogue":[{"speaker":"","text":"정류장 지붕 아래로 뛰어들었을 땐 이미 늦었다. 서윤의 앞머리와 셔츠 끝에서 물방울이 떨어졌다."},{"speaker":"나","text":"서윤, 잠깐만. 이거 걸쳐."},{"speaker":"","text":"재킷을 벗어 서윤의 어깨에 걸쳐 주었다. 서윤이 옷깃을 두 손으로 붙잡았다."},{"speaker":"서윤","text":"야, 너도 다 젖었잖아. …고마워."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 핵심 CG가 출력되지 않았으면 다른 이미지로 이 동작을 대신했다고 표시하지 않는다."},{"id":"r60-46-seoyoon-reaction","phase":"reaction","title":"소나기 속 재킷","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"be86b029af8fa206e80ebe193d07ae2ebeecaa36f428b2f6673f63ce937a8101"},"ready":true,"dialogue":[{"speaker":"","text":"빗줄기가 지붕 끝을 두드렸다. 서윤이 재킷 앞섶을 여미고, 우리는 비가 가늘어지는 쪽을 함께 살폈다."},{"speaker":"서윤","text":"좀 쉬었다 가. 금방 그칠 거야."},{"speaker":"나","text":"응. 뛰어가다 미끄러지는 것보다 낫지."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-46-seoyoon-resolution","phase":"resolution","title":"소나기 속 재킷","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-46-seoyoon-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/city-rain-shelter.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"be86b029af8fa206e80ebe193d07ae2ebeecaa36f428b2f6673f63ce937a8101"},"ready":true,"dialogue":[{"speaker":"","text":"정류장 옆 편의점에서 산 따뜻한 음료를, 서윤이 두 손으로 감싸 쥐고 앉았다."},{"speaker":"서윤","text":"재킷은 빨아서 줄게. 오늘은 네가 더 빨랐네."},{"speaker":"나","text":"그럼 다음 소나기에는 네가 날 구조해 줘."},{"speaker":"서윤","text":"…생각해 볼게. 육상부는 비싸."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-47","number":47,"hero":"ina","title":"수건으로 머리 닦아주기","original":"젖은 머리를 수건으로 닦아주다가 얼굴이 너무 가까워져 멈추기","background_id":"hotel-suite-evening","name":"이나","beats":[{"id":"r60-47-ina-setup","phase":"setup","title":"수건으로 머리 닦아주기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"겨울 진로 행사 전날. 행사장인 체육 센터에 마지막 확인 차례로 남아 있었다."},{"speaker":"","text":"밖에 안내 표지를 세우러 나갔던 이나가 진눈깨비를 맞고 수영장 옆 휴게실로 들어왔다."},{"speaker":"이나","text":"우산을 두고 나갔더니 이렇게 됐네. 수건 좀 빌릴게."},{"speaker":"","text":"이나가 젖은 머리 끝과 접힌 수건을 번갈아 가리켰다."},{"speaker":"이나","text":"{N}, 전에도 머리는 네가 말려 줬잖아. 표지판 세우느라 어깨가 다 굳었어."},{"speaker":"이나","text":"뒤쪽만 조금 닦아 줄래?"},{"speaker":"나","text":"세게 문지르지 않고 눌러서 닦을게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-47-ina-incident","phase":"incident","title":"수건으로 머리 닦아주기","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-47-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-47-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"수건으로 머리 끝을 누르던 순간 이나가 고개를 들었다."},{"speaker":"","text":"이마 앞에서 수건도 말도 함께 멎었다. 나는 수건 끝만 보고 있었다."},{"speaker":"이나","text":"잠깐. 갑자기 가까워졌네."},{"speaker":"나","text":"아, 죄송해요. 제가… 조금 물러설게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-47-ina-reaction","phase":"reaction","title":"수건으로 머리 닦아주기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 수건 끝을 잡고 옆으로 눈을 돌렸다."},{"speaker":"이나","text":"놀란 거야. 아픈 건 아니고."},{"speaker":"나","text":"그럼 다행이에요. 저만 놀란 줄 알았어요."},{"speaker":"이나","text":"둘 다 놀랐으면 난기류 경보감이네. 좌석벨트 매고 기다려."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-47-ina-resolution","phase":"resolution","title":"수건으로 머리 닦아주기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-47-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 수건을 받아 오른쪽 머리 끝에 눌러 댔다."},{"speaker":"이나","text":"나머지는 내가 할게. 여기까지 맡아 줘서 고마워."},{"speaker":"나","text":"오른쪽 끝만 조금 더 닦으면 되겠어요."},{"speaker":"이나","text":"나누니까 금방 끝나네. 내일 안내도 이렇게 하자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-48","number":48,"hero":"ina","title":"복도에서 마주친 한 걸음","original":"숙소 욕실에서 나오자 상대가 바로 앞에 있어 서로 놀라 뒤로 물러서기","background_id":"bathroom-exterior","name":"이나","beats":[{"id":"r60-48-ina-setup","phase":"setup","title":"욕실 문 앞에서 깜짝 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"1월, 이나의 고향 바닷마을. 어머니의 게스트하우스에서 우리는 복도 끝과 끝 방을 받았다."},{"speaker":"","text":"욕실은 가운데 하나라 교대로 쓰기로 했다. 한 시간 뒤, 욕실 문 열리는 소리가 났다."},{"speaker":"이나","text":"욕실 비었어! 뜨거운 물은 오른쪽으로 틀어."},{"speaker":"","text":"목욕을 끝내고 잠옷을 갖춰 입은 이나가, 작은 수건을 든 채 복도로 나왔다."},{"speaker":"이나","text":"…머리는 방에 가서 말려야지."},{"speaker":"","text":"나는 수건을 챙겨 복도 모퉁이를 돌았다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-48-ina-incident","phase":"incident","title":"욕실 문 앞에서 깜짝 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-48-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-48-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"분홍 긴팔 잠옷 차림의 이나와 코앞에서 마주쳤다. 둘 다 손을 들고, 동시에 한 걸음 물러났다."},{"speaker":"","text":"그런데도 복도가 좁아서, 물러난 자리에서도 목소리가 바로 앞에 있었다."},{"speaker":"나","text":"아, 죄송해요! 제 차례라서…"},{"speaker":"이나","text":"물러나는 것도 동시네. 신호를 안 맞췄으니까."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-48-ina-reaction","phase":"reaction","title":"욕실 문 앞에서 깜짝 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-48-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-48-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 가슴에 손을 얹고 웃음을 터뜨렸다. 나는 먼저 수건장 쪽으로 눈을 돌렸다."},{"speaker":"이나","text":"2월 27일까지는 계속 이렇게 물러나자. 신호 없이도, 동시에."},{"speaker":"나","text":"네. 한 걸음씩, 동시에요. …그리고 머리는 말리고 자요."},{"speaker":"이나","text":"방금 우리 엄마랑 똑같은 소리 한 거 알아?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-48-ina-resolution","phase":"resolution","title":"욕실 문 앞에서 깜짝 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-48-ina-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/bathroom-exterior.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6d3f877c3157f35125b12b9493acca6c8b9f035a85311464c679d6111649c8d6"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 동쪽 끝으로 걸어가다가, 어깨 너머로 돌아봤다."},{"speaker":"이나","text":"잘 자, 1103호. …아, 여기선 서쪽 끝 방이지."},{"speaker":"나","text":"…안녕히 주무세요, 동쪽 끝 방."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"ina","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-49","number":49,"hero":"seoha","title":"트윈이 아니었던 예약","original":"여행지 숙소 예약 실수로 침대가 하나뿐인 것을 발견하기","background_id":"hotel-suite-evening","name":"서하","beats":[{"id":"r60-49-seoha-setup","phase":"setup","title":"침대가 하나인 숙소","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"계약이 끝나기 전 남은 연차로, 서하가 겨울 바다 일출을 보러 가자고 했다."},{"speaker":"","text":"방은 두 개 잡았다고, 확인했다고 했다. 해 질 녘 호텔 복도에서 카드키를 받았다."},{"speaker":"서하","text":"네 방 키. 난 1207호."},{"speaker":"","text":"서하가 여행 가방을 세우고 예약 문자의 방 번호를 확인했다."},{"speaker":"나","text":"…봉투에 저도 1207호라고 적혀 있는데요."},{"speaker":"서하","text":"…같은 번호라고?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-49-seoha-incident","phase":"incident","title":"침대가 하나인 숙소","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-49-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-49-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"문 안을 본 서하가 휴대폰 화면을 다시 들어 보였다."},{"speaker":"서하","text":"침대가 하나야. 분명히 두 개로 잡았어. 여기 봐, '2'라고…"},{"speaker":"나","text":"예약 내용을 같이 확인해 볼까요?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 예약 문제의 해결은 추가 침구를 부탁하는 마무리 대사로 이어진다."},{"id":"r60-49-seoha-reaction","phase":"reaction","title":"침대가 하나인 숙소","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"'디럭스 더블 1실, 성인 2.' 숫자 2는 방이 아니라 사람 옆에 붙어 있었다."},{"speaker":"서하","text":"…두 방이 아니라, 두 사람으로 한 방을 잡았더라."},{"speaker":"나","text":"프런트에 빈방이 있는지 물어볼까요?"},{"speaker":"서하","text":"확인했는데. 분명히 확인… 죄송… 아니, 미안."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-49-seoha-resolution","phase":"resolution","title":"침대가 하나인 숙소","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-49-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"프런트와 통화를 마친 서하가 고개를 저었다. 주말 성수기라 빈방이 없었다."},{"speaker":"서하","text":"베개만 네 개 더 받기로 했어. 가운데 한 줄, 경계선이야."},{"speaker":"나","text":"네. 제가 가방부터 치울게요."},{"speaker":"서하","text":"일출은 7시 36분이야. 오늘은 일찍 자자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-50","number":50,"hero":"seoha","title":"베개로 나눈 경계선","original":"침대 하나를 베개로 정확히 반으로 나누고 “넘어오지 마”라고 선 긋기","background_id":"hotel-suite-evening","name":"서하","beats":[{"id":"r60-50-seoha-setup","phase":"setup","title":"베개로 나눈 경계선","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"겨울 바다 호텔. 두 개인 줄 알았던 방은 하나였고, 침대도 하나였다."},{"speaker":"서하","text":"성수기라 빈방이 없대. 베개 네 개로 정리하자. 확인한 사람 체면이 있지."},{"speaker":"나","text":"네. 서하 씨가 정하는 대로 할게요."},{"speaker":"","text":"라벤더색 니트로 갈아입은 서하가 베개를 안고 침대 폭을 뼘으로 쟀다."},{"speaker":"서하","text":"이걸 가운데 한 줄로 놓으면 구분하기 쉽겠다."},{"speaker":"나","text":"생각보다 정밀한 작업이네요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-50-seoha-incident","phase":"incident","title":"베개로 나눈 경계선","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-50-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-50-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"베개가 한 줄로 놓였다. 서하가 제 쪽을 가리키자 나도 마지막 베개를 맞췄다."},{"speaker":"서하","text":"여기부터 내 쪽. 알겠지?"},{"speaker":"나","text":"네. 경계선 확인했어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-50-seoha-reaction","phase":"reaction","title":"베개로 나눈 경계선","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"엄숙하게 말하던 서하가 먼저 웃어 버렸다. 낮아진 목소리가 베개 한 줄 너머에서 들렸다."},{"speaker":"서하","text":"너무 진지했나? 그냥 편하게 쉬려고 그러는 거야."},{"speaker":"나","text":"네. …선 넘으면 어떻게 돼요?"},{"speaker":"서하","text":"벌칙. 캔커피 두 개. 잠결에 넘어도 벌칙."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-50-seoha-resolution","phase":"resolution","title":"베개로 나눈 경계선","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-50-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-evening.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"5b86d8d9fb30154d5bbfacc1b16bfef6994aa84a1c763511d1b44b7f2f841907"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 마지막 베개를 토닥이며 잘 자라고 했다."},{"speaker":"서하","text":"갈아입고 나오면 불 끈다. 잘 자, {N}."},{"speaker":"서하","text":"일출은 7시 36분이야. 알람은 내가 세 개 맞춰 뒀어."},{"speaker":"나","text":"안녕히 주무세요, 서하 씨."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-51","number":51,"hero":"ina","title":"담요 끝을 붙잡고","original":"자다가 이불을 전부 빼앗아 상대가 추워서 옆으로 붙어오기","background_id":"hotel-suite-night","name":"이나","beats":[{"id":"r60-51-ina-setup","phase":"setup","title":"이불을 빼앗긴 밤 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"67f8de4bdb0eb5c39aca5066933dd69087b6b4e05727ac15c66b6fb1d39d499c"},"ready":true,"dialogue":[{"speaker":"","text":"봄 진로 캠프 사전 답사에 학생 대표로 따라왔다. 이나는 초청 강사로 함께였다."},{"speaker":"","text":"그날 밤 눈으로 셔틀이 끊겼다. 인솔 선생님은 관리동에서 차편을 알아보셨다."},{"speaker":"이나","text":"학교엔 선생님이 연락하셨어. 첫차까지 이 빈 숙소 방에서 버티자."},{"speaker":"","text":"방 난방이 약했다. 이나가 큰 담요 가운데를 손날로 눌렀다."},{"speaker":"이나","text":"비품은 이 한 장뿐이래. 이렇게 딱 반씩이면 되겠지?"},{"speaker":"나","text":"네. 저는 이쪽 끝만 있으면 돼요."},{"speaker":"","text":"손날이 지나간 자리가 경계선이 됐다. 그 선 너머가 가까웠다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-51-ina-incident","phase":"incident","title":"이불을 빼앗긴 밤 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-51-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-51-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"67f8de4bdb0eb5c39aca5066933dd69087b6b4e05727ac15c66b6fb1d39d499c"},"ready":true,"dialogue":[{"speaker":"","text":"한참 뒤, 담요가 전부 이나 쪽으로 넘어가 있었다. 끝자락을 더듬는 손끝에 이나가 눈을 떴다."},{"speaker":"이나","text":"어… 내가 다 가져갔어?"},{"speaker":"나","text":"그, 담요 끝이 거기까지 도망가서요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-51-ina-reaction","phase":"reaction","title":"이불을 빼앗긴 밤 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"67f8de4bdb0eb5c39aca5066933dd69087b6b4e05727ac15c66b6fb1d39d499c"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 담요를 활짝 펴 반쪽을 돌려주었다. 목소리가 잠에 잠겨 낮았다."},{"speaker":"이나","text":"미안. 잠들면 이렇게 되는 줄 몰랐어."},{"speaker":"나","text":"처음 알게 된 거면, 저만 아는 거네요."},{"speaker":"이나","text":"…그건 비밀로 해 줘. 반은 네 거야, {N}."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-51-ina-resolution","phase":"resolution","title":"이불을 빼앗긴 밤 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-51-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"67f8de4bdb0eb5c39aca5066933dd69087b6b4e05727ac15c66b6fb1d39d499c"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 제 쪽 담요 끝을 집어 보이며 졸린 눈으로 웃었다."},{"speaker":"이나","text":"오늘은 이 끝을 꼭 잡고 잘게. 첫차는 내가 깨워 줄게."},{"speaker":"나","text":"너무 힘주진 마세요. 안녕히 주무세요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"이불을 혼자 끌어안은 잠버릇과 추운 상대에게 다시 나누어 주는 반응을 비성적 숙면 코미디로 표현한다. 전신은 긴 잠옷과 담요로 가리고 성적 접촉은 없다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-52","number":52,"hero":"seoha","title":"저린 팔로 맞은 아침","original":"아침에 눈을 떠보니 잠버릇 때문에 서로 팔을 베고 있어 동시에 굳기","background_id":"hotel-suite-morning","name":"서하","beats":[{"id":"r60-52-seoha-setup","phase":"setup","title":"팔베개로 맞은 아침","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"af15674ff7949a128f9679d3f60abc00b76dcf914e8fbd4fe28ec64fe0c3b25a"},"ready":true,"dialogue":[{"speaker":"","text":"겨울 바다 호텔의 아침. 서하의 알람이 울렸다. 세 개 중 첫 번째였다."},{"speaker":"","text":"어젯밤 베개 네 개로 세운 경계선은, 분명히 있었다."},{"speaker":"","text":"어젯밤 가운데 세워 둔 베개는 저만치 밀려나 있었다."},{"speaker":"","text":"아침 빛에 눈을 뜬 서하가 베개를 더듬다 손을 멈췄다."},{"speaker":"서하","text":"…그런데 베개가 왜 이렇게 단단하지?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-52-seoha-incident","phase":"incident","title":"팔베개로 맞은 아침","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-52-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-52-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"af15674ff7949a128f9679d3f60abc00b76dcf914e8fbd4fe28ec64fe0c3b25a"},"ready":true,"dialogue":[{"speaker":"","text":"몸을 일으킨 둘은 담요 위에 겹친 소맷자락을 내려다보았다."},{"speaker":"서하","text":"잠깐. 이거… 네 팔이야?"},{"speaker":"","text":"잠에 잠긴 목소리가 평소보다 가까이에서 났다. 눈을 어디에 둬야 할지 몰랐다."},{"speaker":"나","text":"그러네요. 저도 서하 씨 팔을 베고 있었어요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 핵심 CG는 출력 차단으로 없으며 다른 3상태로 팔베개 순간을 표현했다고 주장하지 않는다."},{"id":"r60-52-seoha-reaction","phase":"reaction","title":"팔베개로 맞은 아침","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"af15674ff7949a128f9679d3f60abc00b76dcf914e8fbd4fe28ec64fe0c3b25a"},"ready":true,"dialogue":[{"speaker":"","text":"천천히 팔을 뺀 서하가 저린 손가락을 폈다 접었다."},{"speaker":"서하","text":"둘 다 조금씩 움직이자. 아직 찌릿해."},{"speaker":"나","text":"저, 저도요. …이번엔 베개부터 제가 다시 놓을게요."},{"speaker":"서하","text":"지금 말 더듬었지? 아직 덜 깼네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-52-seoha-resolution","phase":"resolution","title":"팔베개로 맞은 아침","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-52-seoha-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/hotel-suite-morning.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"af15674ff7949a128f9679d3f60abc00b76dcf914e8fbd4fe28ec64fe0c3b25a"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 흐트러진 베개를 들어 보이며 웃었다."},{"speaker":"서하","text":"잘 잤냐고 묻기 전에, 팔부터 괜찮냐고 물어야겠네."},{"speaker":"서하","text":"일출은 7시 36분이야, {N}. 팔 풀리면 나가자."},{"speaker":"나","text":"이제 괜찮아요. …좋은 아침이에요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-53","number":53,"hero":"ina","title":"영화 보다 무릎에 잠들기","original":"소파에서 영화를 보다가 잠든 상대가 어깨를 지나 무릎까지 기대오기","background_id":"home-sofa-night","name":"이나","beats":[{"id":"r60-53-ina-setup","phase":"setup","title":"영화 보다 무릎에 잠들기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-setup-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-setup-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb3bb370de5735bfaea982d8a6bed22509d472f84feb9e6fa5e3fef79450108f"},"ready":true,"dialogue":[{"speaker":"","text":"엄마가 싸 준 반찬을 들고 윗집에 올라갔다. 이나는 야간 비행에서 막 돌아온 참이었다."},{"speaker":"이나","text":"진로 상담 모임에 틀 영화, 오늘 저녁까지 미리 봐야 해. 학생 눈으로 같이 봐 줄래?"},{"speaker":"나","text":"네. 반찬은 냉장고에 넣어 둘게요. 금방 틀어요."},{"speaker":"","text":"소파에 나란히 앉았다. 쿠션을 안고 화면을 보던 이나는 대답보다 눈꺼풀이 먼저 느려졌다."},{"speaker":"이나","text":"안 졸려. 결말까지만 보고 메모할게."},{"speaker":"나","text":"졸리시면 잠깐 쉬셔도 돼요. 제가 표시해 둘게요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-53-ina-incident","phase":"incident","title":"영화 보다 무릎에 잠들기","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/special/r60-53-ina-incident.webp","url":"assets/6._89afee/refresh_2026_v18_recast/special/r60-53-ina-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb3bb370de5735bfaea982d8a6bed22509d472f84feb9e6fa5e3fef79450108f"},"ready":true,"dialogue":[{"speaker":"","text":"어깨에 기대던 무게가 무릎 위 쿠션으로 옮겨 왔다. 나는 영화 소리를 낮췄다."},{"speaker":"","text":"숨소리가 고르게 바뀌었다. 나는 화면 쪽으로만 고개를 두었다."},{"speaker":"나","text":"편히 주무세요. 결말은 다음에 같이 봐요."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 어깨에서 무릎으로 내려오는 움직임 전체가 아니라 무릎에 도착한 순간을 CG로 선택했다."},{"id":"r60-53-ina-reaction","phase":"reaction","title":"영화 보다 무릎에 잠들기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-reaction-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-reaction-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb3bb370de5735bfaea982d8a6bed22509d472f84feb9e6fa5e3fef79450108f"},"ready":true,"dialogue":[{"speaker":"","text":"잠에서 깬 이나가 쿠션을 짚고 일어났다. 목소리가 아직 낮았다."},{"speaker":"이나","text":"무겁진 않았어? 깨워도 됐는데."},{"speaker":"나","text":"안 무거웠어요. 깨우기 아까워서… 아, 영화는 멈춰 뒀어요."},{"speaker":"이나","text":"…앞말은 못 들은 척해 줄게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-53-ina-resolution","phase":"resolution","title":"영화 보다 무릎에 잠들기","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-resolution-key.webp","url":"assets/6._89afee/refresh_2026_v18_recast/characters/r60-53-ina-resolution-key.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/home-sofa-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"bb3bb370de5735bfaea982d8a6bed22509d472f84feb9e6fa5e3fef79450108f"},"ready":true,"dialogue":[{"speaker":"","text":"이나가 쿠션을 바로 놓고 흐트러진 머리카락을 정리했다."},{"speaker":"이나","text":"다음에는 쿠션을 제대로 베고 볼게. 오늘은 고마워."},{"speaker":"나","text":"그럼 다음엔 시작 전에 쿠션부터 놔둘게요."},{"speaker":"이나","text":"메모는 내가 맞출게. 남은 부분은 특강 때 너희랑 같이 보자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-54","number":54,"hero":"haneul","title":"사람이 몰린 엘리베이터","original":"좁은 엘리베이터에서 사람들이 몰려 둘이 거의 붙어 서게 되기","background_id":"elevator","name":"하늘","beats":[{"id":"r60-54-haneul-setup","phase":"setup","title":"사람이 몰린 엘리베이터 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b5e803fff7fa856311971c29a9e280e6aca03b15ea246dead5dbd3d5322b3181"},"ready":true,"dialogue":[{"speaker":"하늘","text":"여긴 생각보다 오래 기다리네."},{"speaker":"나","text":"다음 거 타도 되겠다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-54-haneul-incident","phase":"incident","title":"사람이 몰린 엘리베이터 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-54-haneul-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-54-haneul-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b5e803fff7fa856311971c29a9e280e6aca03b15ea246dead5dbd3d5322b3181"},"ready":true,"dialogue":[{"speaker":"","text":"문이 열리자 뒤에서 사람들이 몰려들었다. 하늘은 가방을 앞으로 모으고 나를 올려다봤다."},{"speaker":"나","text":"너 괜찮아? 많이 좁다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-54-haneul-reaction","phase":"reaction","title":"사람이 몰린 엘리베이터 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b5e803fff7fa856311971c29a9e280e6aca03b15ea246dead5dbd3d5322b3181"},"ready":true,"dialogue":[{"speaker":"하늘","text":"응. 다음 층에서 조금 비면 괜찮을 거야."},{"speaker":"나","text":"발 밟으면 바로 말해 줘."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-54-haneul-resolution","phase":"resolution","title":"사람이 몰린 엘리베이터 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-54-haneul-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/elevator.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"b5e803fff7fa856311971c29a9e280e6aca03b15ea246dead5dbd3d5322b3181"},"ready":true,"dialogue":[{"speaker":"하늘","text":"밖으로 나오니까 공기가 다르네."},{"speaker":"나","text":"다음엔 여유 있는 걸 기다리자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."}],"adaptation":"사람이 몰려 생긴 가까운 거리를 얼굴·가방·벽의 간격으로 보여 준다. 강제 스킨십이나 신체 일부 강조 없이 서로 괜찮은지 확인하고 내린다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"haneul","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-55","number":55,"hero":"seoyoon","title":"지하철 급정거","original":"지하철 급정거로 넘어질 뻔한 상대를 허리를 잡아 받아주고 둘 다 당황하기","background_id":"subway-car","name":"서윤","beats":[{"id":"r60-55-seoyoon-setup","phase":"setup","title":"지하철 급정거","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6ad8ae2cf25ef1bf56f4896ad860315ab2c0cf036edafaf42eb0f33bfafb2bae"},"ready":true,"dialogue":[{"speaker":"","text":"내릴 역이 가까워지자 서윤이 문 쪽을 살폈다. 흔들리던 열차가 갑자기 속도를 크게 줄였다."},{"speaker":"서윤","text":"다음 역이지? 금방이네."},{"speaker":"나","text":"응, 다음 역. 아직 움직이니까 손잡이는 잡고 있자."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-55-seoyoon-incident","phase":"incident","title":"지하철 급정거","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-55-seoyoon-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-55-seoyoon-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6ad8ae2cf25ef1bf56f4896ad860315ab2c0cf036edafaf42eb0f33bfafb2bae"},"ready":true,"dialogue":[{"speaker":"","text":"급정거에 서윤의 몸이 기울었다. 나도 모르게 팔을 뻗어 받쳤다. 서윤이 기둥을 다시 쥐고, 가까워진 거리에 잠깐 굳었다."},{"speaker":"서윤","text":"앗—! …잡았으면 됐어. 고마워."},{"speaker":"나","text":"발 디뎠지? 이제 천천히 놓을게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-55-seoyoon-reaction","phase":"reaction","title":"지하철 급정거","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6ad8ae2cf25ef1bf56f4896ad860315ab2c0cf036edafaf42eb0f33bfafb2bae"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 발을 다시 딛고 괜찮다고 했다. 놀라서인지, 조금 붉어진 얼굴로 시선을 피했다."},{"speaker":"서윤","text":"…괜찮아. 놀라서 손을 놓친 거야. 진짜로."},{"speaker":"나","text":"넘어지지 않아서 다행이야. 어디 부딪치지는 않았고?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-55-seoyoon-resolution","phase":"resolution","title":"지하철 급정거","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-55-seoyoon-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/subway-car.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"6ad8ae2cf25ef1bf56f4896ad860315ab2c0cf036edafaf42eb0f33bfafb2bae"},"ready":true,"dialogue":[{"speaker":"","text":"서윤이 기둥을 꼭 쥐었다. 반응이 빨랐다며 웃는 사이, 열차는 다시 천천히 역으로 들어갔다."},{"speaker":"서윤","text":"야, 너 반응 빠르다. 육상부 올래?"},{"speaker":"나","text":"오늘은 네 출발 연습을 좀 따라 한 셈이네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoyoon","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-56","number":56,"hero":"daeun","title":"책상 아래에서 이마 쿵","original":"책상 밑으로 떨어진 물건을 동시에 줍다가 머리를 부딪치고 얼굴이 가까워지기","background_id":"reading-room-day","name":"다은","beats":[{"id":"r60-56-daeun-setup","phase":"setup","title":"책상 아래에서 이마 쿵","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"ee6b38814839bec2c84d5737853ac8596466939294a8ee5b8be40dc69046d3a4"},"ready":true,"dialogue":[{"speaker":"","text":"책상 아래로 지우개가 굴러떨어졌다. 다은이 주워 오겠다고 말하는 순간, 나도 같은 쪽으로 몸을 숙였다."},{"speaker":"다은","text":"저기… 지우개 떨어졌어. 내가 주울게."},{"speaker":"나","text":"내 발 가까이에 떨어졌네. 내가—"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-56-daeun-incident","phase":"incident","title":"책상 아래에서 이마 쿵","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-56-daeun-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-56-daeun-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"ee6b38814839bec2c84d5737853ac8596466939294a8ee5b8be40dc69046d3a4"},"ready":true,"dialogue":[{"speaker":"","text":"같은 지우개를 향하던 이마가 가볍게 부딪쳤다. 놀라 고개를 들려던 우리는, 눈앞의 얼굴을 보고 또 멈췄다."},{"speaker":"다은","text":"아야… 둘이 동시에 숙였네. 괜찮아?"},{"speaker":"나","text":"아, 미안. 나도 동시에 숙였어. 아프지 않아?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 기존 v14의 충돌 직후 컷을 재사용하지 않았다."},{"id":"r60-56-daeun-reaction","phase":"reaction","title":"책상 아래에서 이마 쿵","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"ee6b38814839bec2c84d5737853ac8596466939294a8ee5b8be40dc69046d3a4"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 이마를 한 번 문지르고 지우개를 들어 보였다. 별것 아닌 물건 때문에 둘 다 서두른 게 우스웠다."},{"speaker":"다은","text":"…난 괜찮아. 지우개 하나에 너무 급했지."},{"speaker":"나","text":"응, 나도 괜찮아. 지우개는 무사하네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-56-daeun-resolution","phase":"resolution","title":"책상 아래에서 이마 쿵","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-56-daeun-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/daeun-reading-room-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"ee6b38814839bec2c84d5737853ac8596466939294a8ee5b8be40dc69046d3a4"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 지우개를 책상 위에 내려놓았다. 다음에는 먼저 말한 사람이 줍기로 했다."},{"speaker":"다은","text":"다음엔… 먼저 말한 사람이 줍는 걸로 하자."},{"speaker":"나","text":"그럼 이번 승자는 먼저 말한 너야. 다음엔 기다릴게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-57","number":57,"hero":"daeun","title":"입가의 생크림","original":"카페에서 입가에 묻은 생크림을 상대가 휴지로 닦아주자 갑자기 조용해지기","background_id":"cafe-day","name":"다은","beats":[{"id":"r60-57-daeun-setup","phase":"setup","title":"입가의 생크림","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 케이크를 한 입 맛보고 고개를 끄덕였다. 이야기를 이어 가는 동안, 입가에 생크림이 조금 묻어 있었다."},{"speaker":"다은","text":"이 케이크… 생각보다 안 달아서 좋아."},{"speaker":"나","text":"딸기가 신선해서 그런가 봐. 잠깐, 크림이 묻었네."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-57-daeun-incident","phase":"incident","title":"입가의 생크림","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v17_scene_repair/special/r60-57-daeun-incident-v17.webp","url":"assets/6._89afee/refresh_2026_v17_scene_repair/special/r60-57-daeun-incident-v17.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"접은 냅킨을 들고 다은의 입가 쪽으로 손을 뻗었다. 다은의 말이 뚝 끊기고, 시선이 내 손을 따라왔다."},{"speaker":"다은","text":"…응? 입가에 묻었어? 잠깐만…"},{"speaker":"나","text":"가만히 있어 봐. 여기만 살짝 닦을게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다. 반환 CG의 접촉점이 입가보다 볼 쪽으로 보이는 차이는 후속 검토 메모에 남겼다."},{"id":"r60-57-daeun-reaction","phase":"reaction","title":"입가의 생크림","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 안경을 고쳐 쓰며 고맙다는 말을 골랐다. 방금까지 자연스럽던 대화에 짧은 침묵이 생겼다."},{"speaker":"다은","text":"…갑자기 조용해졌지. 조금 놀라서 그래."},{"speaker":"나","text":"갑자기 손을 가져가서 놀랐지. 이제 다 닦였어."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."},{"id":"r60-57-daeun-resolution","phase":"resolution","title":"입가의 생크림","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-57-daeun-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/cafe-day.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"fbfade47e2b524896a35a34cc142840a651f6540caf4053070b62f41f17aa8d2"},"ready":true,"dialogue":[{"speaker":"","text":"다은이 남은 냅킨을 내 쪽으로 밀어 주었다. 조금 전 일을 웃으며 넘기고, 우리는 다시 케이크 이야기를 이어 갔다."},{"speaker":"다은","text":"닦아 줘서 고마워. 다음엔… 내가 먼저 확인할게."},{"speaker":"나","text":"그럼 내 입가도 확인해 줘. 나는 안 묻었어?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다."}],"adaptation":"일상적 핵심 동작을 유지하고 실제 20세 이상 성인의 비성적 상황으로 구성한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"daeun","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-58","number":58,"hero":"yuri","title":"팝콘 위에서 겹친 손","original":"영화관에서 동시에 팝콘을 집다가 손이 겹쳐 서로 슬쩍 눈치 보기","background_id":"yuri-cinema-previews","name":"유리","beats":[{"id":"r60-58-yuri-setup","phase":"setup","title":"팝콘 위에서 겹친 손 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-01-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-01-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"023e40d2bd0229181065be2227e565cf31ff1b0b793f105330f9cf40153b5565"},"ready":true,"dialogue":[{"speaker":"유리","text":"예고편 아직 많이 남았네."},{"speaker":"나","text":"그럼 팝콘부터 먹을까?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. Episode master candidate. Native preview preserved; no full visual review."},{"id":"r60-58-yuri-incident","phase":"incident","title":"팝콘 위에서 겹친 손 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-58-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-58-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"023e40d2bd0229181065be2227e565cf31ff1b0b793f105330f9cf40153b5565"},"ready":true,"dialogue":[{"speaker":"","text":"같은 한 알을 향한 손이 통 위에서 겹쳤다."},{"speaker":"나","text":"어… 너도 이거 집으려고 했어?"}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. 실제 반환 화면에서 같은 팝콘 위 유리의 오른손가락과 동행인의 손가락 접촉이 보인다. 놀란 눈과 홍조, 영화관 좌석과 같은 의상을 확인했다. 전체 손 해부학·원화 승인은 아직 검수하지 않았다."},{"id":"r60-58-yuri-reaction","phase":"reaction","title":"팝콘 위에서 겹친 손 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-03-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-03-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"023e40d2bd0229181065be2227e565cf31ff1b0b793f105330f9cf40153b5565"},"ready":true,"dialogue":[{"speaker":"유리","text":"먼저 가져가. 나는 다른 걸 먹으면 되니까."},{"speaker":"나","text":"아니, 네가 먼저였던 것 같은데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. Generated candidate; no full visual review or aesthetic iteration."},{"id":"r60-58-yuri-resolution","phase":"resolution","title":"팝콘 위에서 겹친 손 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-06-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-popcorn-hands-06-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-cinema-previews.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"023e40d2bd0229181065be2227e565cf31ff1b0b793f105330f9cf40153b5565"},"ready":true,"dialogue":[{"speaker":"유리","text":"이러다 영화 끝나도 못 먹겠다~ 하나씩 집자. 헤헤."},{"speaker":"나","text":"응. 대신 이제 목소리는 작게."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. Generated candidate; no full visual review or aesthetic iteration."}],"adaptation":"v14 팝콘 장면은 같은 한 알에 실제 손이 겹치는 원문과 일치하여 4비트를 원본 재사용한다. 새 이미지 생성으로 세지 않는다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-59","number":59,"hero":"yuri","title":"너무 좁은 사진 부스","original":"사진 부스에 둘이 들어갔는데 예상보다 좁아서 몸을 붙여야 프레임에 들어오기","background_id":"yuri-photo-booth-afternoon","name":"유리","beats":[{"id":"r60-59-yuri-setup","phase":"setup","title":"너무 좁은 사진 부스 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-01-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-01-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"유리","text":"벤치가 생각보다 작다. 가방은 발밑에 둘까?"},{"speaker":"나","text":"응. 그래도 한쪽 얼굴이 잘리는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. 계획의 작은 사진부스 토큰 대신 가로 사진 인화물을 들고 나온 소품 차이가 있다. 후보를 보존하며 재생성하지 않았다."},{"id":"r60-59-yuri-incident","phase":"incident","title":"너무 좁은 사진 부스 · 핵심 장면","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-59-yuri-incident.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/special/r60-59-yuri-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"","text":"유리가 화면을 확인하고 내 쪽으로 조금 더 붙어 앉았다. 어깨가 닿자 둘 다 웃음이 났다."},{"speaker":"나","text":"이제야 둘 다 들어온다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Candidate preserved; full visual review pending."},{"id":"r60-59-yuri-reaction","phase":"reaction","title":"너무 좁은 사진 부스 · 당황 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-04-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-04-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"유리","text":"카운트 너무 빠르잖아. 아직 표정 못 정했어."},{"speaker":"나","text":"지금 웃는 표정이면 되겠는데."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. Generated candidate; no full visual review or aesthetic iteration."},{"id":"r60-59-yuri-resolution","phase":"resolution","title":"너무 좁은 사진 부스 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-06-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/yuri-photo-booth-06-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","original_path":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","url":"assets/6._89afee/refresh_2026_v14_situations/backgrounds/yuri-photo-booth-afternoon.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"93011457dd3f4406f9764fc40aea90b5183b12afabb14558e41f99566fcb0259"},"ready":true,"dialogue":[{"speaker":"유리","text":"한 장은 네가 가져!! 같은 사진이어야 기억도 같지. 헤헤."},{"speaker":"나","text":"그럼 나는 이쪽 절반."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Exact existing v14 beat reused; not new generation. Generated candidate; no full visual review or aesthetic iteration."}],"adaptation":"v14 사진부스 3상태를 재사용하고, 좁은 벤치에서 어깨를 붙여 프레임에 들어오는 핵심 CG만 새로 만든다. 원문의 좁은 공간 행동을 실제 두 인물 일부로 확인한다.","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"yuri","minAff":0,"kiss":false,"presentationVersion":18},{"id":"r60-60","number":60,"hero":"seoha","title":"집 앞에서 머뭇거리다 입맞춤","original":"데이트 후 집 앞에서 헤어지려는데 계속 머뭇거리다가 짧게 입맞춤하고 둘 다 얼굴이 새빨개지기","background_id":"apartment-entrance-night","name":"서하","beats":[{"id":"r60-60-seoha-setup","phase":"setup","title":"집 앞에서 머뭇거리다 입맞춤 · 도입","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-setup-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-setup-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"호숫가에서 서하의 집까지. 학교 뒷골목을 손을 잡고 걸었다."},{"speaker":"서하","text":"이상해. 1년 내내 다닌 골목인데, 처음 오는 길 같아."},{"speaker":"나","text":"직원이 아니라서 그런가 봐."},{"speaker":"","text":"골목 끝, 서하의 집 앞. 서하는 가방 끈만 만지작거렸다."},{"speaker":"서하","text":"다 왔네. …조금만 더 같이 있고 싶다."},{"speaker":"서하","text":"들어가기 전에, 확인할 거 하나만."},{"speaker":"나","text":"뭔데?"},{"speaker":"서하","text":"…눈 감아."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-60-seoha-incident","phase":"incident","title":"집 앞에서 머뭇거리다 입맞춤 · 핵심 사건","kind":"special","asset":{"path":"assets/6._89afee/refresh_2026_v32/special/r60-60-seoha-incident.webp","url":"assets/6._89afee/refresh_2026_v32/special/r60-60-seoha-incident.webp","kind":"special","exists":true,"ready":true,"green_key":false,"alpha":false,"dimensions":[1672,941]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"가로등 아래로 얼굴이 가까워졌다. 숨을 멈춘 건 둘 다였다."},{"speaker":"","text":"짧고 가벼운 입맞춤. 펜던트가 내 코트 단추에 부딪혀 작게 소리를 냈다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"Representative around saved output 60: a brief closed-mouth adult lip kiss is visibly depicted at the night apartment entrance. Seoha has closed eyes and blush; the adult partner is cropped with eyes outside frame. Both remain clothed. The partner occupies much of the left foreground, so this is not strict solo POV. No before/after substitution."},{"id":"r60-60-seoha-reaction","phase":"reaction","title":"집 앞에서 머뭇거리다 입맞춤 · 반응","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-reaction-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-reaction-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"","text":"서하가 눈을 내렸다가, 붉어진 얼굴로 다시 눈을 맞췄다."},{"speaker":"서하","text":"…확인."},{"speaker":"나","text":"뭐가 확인이야?"},{"speaker":"서하","text":"빈칸이 아니었다는 거. 1년 동안."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."},{"id":"r60-60-seoha-resolution","phase":"resolution","title":"집 앞에서 머뭇거리다 입맞춤 · 마무리","kind":"character","asset":{"path":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-resolution-cinema-v16.webp","url":"assets/6._89afee/refresh_2026_v16_cinema_align/characters/r60-60-seoha-resolution-cinema-v16.webp","kind":"character","exists":true,"ready":true,"green_key":true,"alpha":false,"dimensions":[1024,1536]},"background":{"path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","original_path":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","url":"assets/6._89afee/refresh_2026_v15_requested60/backgrounds/apartment-entrance-night.webp","kind":"background","exists":true,"ready":true,"cinema_aligned":false,"scene_repaired":false,"dimensions":[1672,941],"mode":"RGB","alpha":false,"green_border_samples":0,"green_key":false,"sha256":"0efa2913266ee951382ad5e908c830116b372eaa91185640de4b245770b5a92f"},"ready":true,"dialogue":[{"speaker":"서하","text":"들어갈게. 더 있으면 내일 출근 못 해."},{"speaker":"나","text":"내일 출근 안 하잖아."},{"speaker":"서하","text":"…아. 그러네. 나 이제 백수네."},{"speaker":"","text":"서하가 문 앞에서 작은 손인사를 보냈다."}],"status":"GENERATED","visual_status":"CANDIDATE","notes":"NOT_FULLY_REVIEWED; one representative visual check per ten outputs."}],"adaptation":"","ready_count":4,"complete_assets":true,"fulfillment_status":"NEEDS_REVIEW","originalHero":"seoha","minAff":100,"kiss":true,"presentationVersion":18}];
  window.R60_RULES = {"r60_1":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_2":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_3":{"heroine":"yuri","minAff":100,"requiresEvent":null},"r60_4":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_5":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_6":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_7":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_8":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_9":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_10":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_11":{"heroine":"haneul","minAff":100,"requiresEvent":null},"r60_12":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_13":{"heroine":"yuri","minAff":0,"requiresEvent":null},"r60_14":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_15":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_16":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_17":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_18":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_19":{"heroine":"ina","minAff":100,"requiresEvent":30},"r60_20":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_21":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_22":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_23":{"heroine":"daeun","minAff":0,"requiresEvent":null},"r60_24":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_25":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_26":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_27":{"heroine":"yuri","minAff":0,"requiresEvent":null},"r60_28":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_29":{"heroine":"yuri","minAff":0,"requiresEvent":null},"r60_30":{"heroine":"ina","minAff":100,"requiresEvent":null},"r60_31":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_32":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_33":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_34":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_35":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_36":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_37":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_38":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_39":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_40":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_41":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_42":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_43":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_44":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_45":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_46":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_47":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_48":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_49":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_50":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_51":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_52":{"heroine":"seoha","minAff":0,"requiresEvent":null},"r60_53":{"heroine":"ina","minAff":0,"requiresEvent":null},"r60_54":{"heroine":"haneul","minAff":0,"requiresEvent":null},"r60_55":{"heroine":"seoyoon","minAff":0,"requiresEvent":null},"r60_56":{"heroine":"daeun","minAff":0,"requiresEvent":null},"r60_57":{"heroine":"daeun","minAff":0,"requiresEvent":null},"r60_58":{"heroine":"yuri","minAff":0,"requiresEvent":null},"r60_59":{"heroine":"yuri","minAff":0,"requiresEvent":null},"r60_60":{"heroine":"seoha","minAff":100,"requiresEvent":null}};
  // 본편에서 이 이야기를 봤는지 판정할 플래그
  window.R60_FLAGS = {
    "r60-01": "r60_seen_1",
    "r60-02": "r60_seen_2",
    "r60-03": "r60_seen_3",
    "r60-04": "r60_seen_4",
    "r60-05": "r60_seen_5",
    "r60-06": "r60_seen_6",
    "r60-07": "r60_seen_7",
    "r60-08": "r60_seen_8",
    "r60-09": "r60_seen_9",
    "r60-10": "r60_seen_10",
    "r60-11": "r60_seen_11",
    "r60-12": "r60_seen_12",
    "r60-13": "r60_seen_13",
    "r60-14": "r60_seen_14",
    "r60-15": "r60_seen_15",
    "r60-16": "r60_seen_16",
    "r60-17": "r60_seen_17",
    "r60-18": "r60_seen_18",
    "r60-19": "r60_seen_19",
    "r60-20": "r60_seen_20",
    "r60-21": "r60_seen_21",
    "r60-22": "r60_seen_22",
    "r60-23": "r60_seen_23",
    "r60-24": "r60_seen_24",
    "r60-25": "r60_seen_25",
    "r60-26": "r60_seen_26",
    "r60-27": "r60_seen_27",
    "r60-28": "r60_seen_28",
    "r60-29": "r60_seen_29",
    "r60-30": "r60_seen_30",
    "r60-31": "r60_seen_31",
    "r60-32": "r60_seen_32",
    "r60-33": "r60_seen_33",
    "r60-34": "r60_seen_34",
    "r60-35": "r60_seen_35",
    "r60-36": "r60_seen_36",
    "r60-37": "r60_seen_37",
    "r60-38": "r60_seen_38",
    "r60-39": "r60_seen_39",
    "r60-40": "r60_seen_40",
    "r60-41": "r60_seen_41",
    "r60-42": "r60_seen_42",
    "r60-43": "r60_seen_43",
    "r60-44": "r60_seen_44",
    "r60-45": "r60_seen_45",
    "r60-46": "r60_seen_46",
    "r60-47": "r60_seen_47",
    "r60-48": "r60_seen_48",
    "r60-49": "r60_seen_49",
    "r60-50": "r60_seen_50",
    "r60-51": "r60_seen_51",
    "r60-52": "r60_seen_52",
    "r60-53": "r60_seen_53",
    "r60-54": "r60_seen_54",
    "r60-55": "r60_seen_55",
    "r60-56": "r60_seen_56",
    "r60-57": "r60_seen_57",
    "r60-58": "r60_seen_58",
    "r60-59": "r60_seen_59",
    "r60-60": "r60_seen_60"
  };
})();
