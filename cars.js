/* 교사개조 용광로: 신규교육부 > 자동차 데이터.
 * 이 파일은 정리용 스크립트로 만들었습니다. 숫자를 고치려면 아래 설명을 보고 직접 고쳐도 됩니다.
 *
 * used[]  중고차 세대 하나가 한 칸입니다.
 *   price  엔카 매물 100대 표본의 값(만원). p25 하위 25%, p50 중앙값, p75 상위 25%, new 신차 당시 출고가 중앙값
 *   stat   encar 엔카 매물 수, kb KB차차차 매물 수, vpd 매물 1대당 하루 조회수 중앙값(엔카), subs 매물 1대당 찜 수 중앙값(엔카),
 *          pop 인기 지수(0~100) = 매물 수(엔카+KB, 로그 비율) 50% + 찜 수 50%
 *   links  엔카, KB차차차, 케이카, 헤이딜러, 현대 인증중고차로 가는 주소 재료. 주소는 app.js 가 만듭니다.
 *   photo  위키미디어 공용의 자유 라이선스 사진을 배경을 지워 assets/cars 에 둔 것. by 찍은 사람, lic 라이선스, edit 고친 내용
 *   videos 유튜브 영상 id, t 제목, ch 채널, v 조회수(2026년 11월 18일 기준)
 * fresh[] 신차. price 는 제조사 홈페이지의 시작 가격(만원)
 * guides  중고차 구입 팁, 구입 방법, 사기 예방
 * best    월별 베스트 3. fresh 신차(네이버 국내 승용 자동차 판매량), used 중고차(카이즈유 실거래 집계), sold 그달 대수 */
window.CARS = {
 "checked": "2026년 11월 18일",
 "best": [
  {
   "ym": "2026-10",
   "fresh": [
    {
     "rank": 1,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 6242,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 2,
     "name": "테슬라 모델 Y",
     "sold": 5508,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 3,
     "name": "현대 뉴 그랜저 하이브리드(GN7)",
     "sold": 5270,
     "seg": "국산 준대형 세단 1위",
     "photo": {
      "src": "assets/cars/GN7.webp",
      "page": "https://commons.wikimedia.org/wiki/File:01_Hyundai_Grandeur_(GN7).jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "grandeur",
     "url": null
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 뉴 레이",
     "sold": 3422,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    },
    {
     "rank": 2,
     "name": "기아 모닝(TA)",
     "sold": 3190,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 3,
     "name": "현대 그랜저(HG)",
     "sold": 2881,
     "seg": "국산 준대형 세단",
     "photo": {
      "src": "assets/cars/HG.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Hyundai_Grandeur_Hybrid_(HG)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "현대",
      "g": "그랜저",
      "m": [
       "그랜저 HG"
      ]
     },
     "listings": {
      "encar": 2092,
      "kb": 2299
     }
    }
   ]
  },
  {
   "ym": "2026-09",
   "fresh": [
    {
     "rank": 1,
     "name": "테슬라 모델 Y",
     "sold": 11421,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 2,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 5615,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 3,
     "name": "현대 뉴 그랜저 하이브리드(GN7)",
     "sold": 5511,
     "seg": "국산 준대형 세단 1위",
     "photo": {
      "src": "assets/cars/GN7.webp",
      "page": "https://commons.wikimedia.org/wiki/File:01_Hyundai_Grandeur_(GN7).jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "grandeur",
     "url": null
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 뉴 레이",
     "sold": 3253,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    },
    {
     "rank": 2,
     "name": "기아 모닝(TA)",
     "sold": 3029,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 3,
     "name": "현대 그랜저(HG)",
     "sold": 3015,
     "seg": "국산 준대형 세단",
     "photo": {
      "src": "assets/cars/HG.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Hyundai_Grandeur_Hybrid_(HG)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "현대",
      "g": "그랜저",
      "m": [
       "그랜저 HG"
      ]
     },
     "listings": {
      "encar": 2092,
      "kb": 2299
     }
    }
   ]
  },
  {
   "ym": "2026-08",
   "fresh": [
    {
     "rank": 1,
     "name": "테슬라 모델 Y",
     "sold": 9638,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 2,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 5202,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 3,
     "name": "기아 뉴 카니발 하이브리드(KA4)",
     "sold": 3787,
     "seg": "국산 대형 RV 1위",
     "photo": {
      "src": "assets/cars/KA4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Kia_Carnival_(KA4)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "url": "https://www.kia.com/kr/vehicles/carnival"
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 모닝(TA)",
     "sold": 3296,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 2,
     "name": "기아 뉴 레이",
     "sold": 3294,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    },
    {
     "rank": 3,
     "name": "현대 그랜저(HG)",
     "sold": 2999,
     "seg": "국산 준대형 세단",
     "photo": {
      "src": "assets/cars/HG.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Hyundai_Grandeur_Hybrid_(HG)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "현대",
      "g": "그랜저",
      "m": [
       "그랜저 HG"
      ]
     },
     "listings": {
      "encar": 2092,
      "kb": 2299
     }
    }
   ]
  },
  {
   "ym": "2026-07",
   "fresh": [
    {
     "rank": 1,
     "name": "테슬라 모델 Y",
     "sold": 8705,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 2,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 5620,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 3,
     "name": "기아 뉴 카니발 하이브리드(KA4)",
     "sold": 5580,
     "seg": "국산 대형 RV 1위",
     "photo": {
      "src": "assets/cars/KA4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Kia_Carnival_(KA4)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "url": "https://www.kia.com/kr/vehicles/carnival"
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 모닝(TA)",
     "sold": 3721,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 2,
     "name": "기아 뉴 레이",
     "sold": 3438,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    },
    {
     "rank": 3,
     "name": "쉐보레 스파크",
     "sold": 3423,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/SPARK.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Chevrolet_Spark_(M400)_Facelift_IMG_9084.jpg",
      "by": "Alexander-93",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "쉐보레(GM대우)",
      "g": "스파크",
      "m": []
     },
     "listings": {
      "encar": 2244
     }
    }
   ]
  },
  {
   "ym": "2026-06",
   "fresh": [
    {
     "rank": 1,
     "name": "테슬라 모델 Y",
     "sold": 9188,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 2,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 7802,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 3,
     "name": "기아 뉴 카니발 하이브리드(KA4)",
     "sold": 5522,
     "seg": "국산 대형 RV 1위",
     "photo": {
      "src": "assets/cars/KA4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:0_Kia_Carnival_(KA4)_1.jpg",
      "by": "Benespit",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "url": "https://www.kia.com/kr/vehicles/carnival"
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 모닝(TA)",
     "sold": 3574,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 2,
     "name": "쉐보레 스파크",
     "sold": 3359,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/SPARK.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Chevrolet_Spark_(M400)_Facelift_IMG_9084.jpg",
      "by": "Alexander-93",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "쉐보레(GM대우)",
      "g": "스파크",
      "m": []
     },
     "listings": {
      "encar": 2244
     }
    },
    {
     "rank": 3,
     "name": "기아 뉴 레이",
     "sold": 3150,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    }
   ]
  },
  {
   "ym": "2026-05",
   "fresh": [
    {
     "rank": 1,
     "name": "테슬라 모델 Y",
     "sold": 8762,
     "seg": "외산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MY.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
      "by": "Kevauto",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "modely",
     "url": null
    },
    {
     "rank": 2,
     "name": "기아 뉴 쏘렌토 하이브리드(MQ4)",
     "sold": 7086,
     "seg": "국산 중형 SUV 1위",
     "photo": {
      "src": "assets/cars/MQ4.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
      "by": "차,또바기",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "sorento",
     "url": null
    },
    {
     "rank": 3,
     "name": "현대 뉴 쏘나타(DN8)",
     "sold": 4110,
     "seg": "국산 중형 세단 1위",
     "photo": {
      "src": "assets/cars/DN8.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2020_Hyundai_Sonata_SEL_(Quartz_White),_front_right.jpg",
      "by": "Mr.choppers",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "sonata",
     "url": null
    }
   ],
   "used": [
    {
     "rank": 1,
     "name": "기아 모닝(TA)",
     "sold": 3069,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/TA.webp",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
      "by": "Areaseven",
      "lic": "CC BY-SA 3.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": "TA",
     "encar": null,
     "listings": {
      "encar": 1732,
      "kb": 2317
     }
    },
    {
     "rank": 2,
     "name": "쉐보레 스파크",
     "sold": 2781,
     "seg": "국산 경형",
     "photo": {
      "src": "assets/cars/SPARK.webp",
      "page": "https://commons.wikimedia.org/wiki/File:Chevrolet_Spark_(M400)_Facelift_IMG_9084.jpg",
      "by": "Alexander-93",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림"
     },
     "focus": null,
     "encar": {
      "t": "Y",
      "mk": "쉐보레(GM대우)",
      "g": "스파크",
      "m": []
     },
     "listings": {
      "encar": 2244
     }
    },
    {
     "rank": 3,
     "name": "기아 뉴 레이",
     "sold": 2756,
     "seg": "국산 경형 RV",
     "photo": {
      "src": "assets/cars/TAM1.webp",
      "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
      "by": "CEFICEFI",
      "lic": "CC BY-SA 4.0",
      "edit": "배경 지움, 번호판 가림, 좌우 반전"
     },
     "focus": "TAM1",
     "encar": null,
     "listings": {
      "encar": 3275,
      "kb": 2123
     }
    }
   ]
  }
 ],
 "used": [
  {
   "key": "JA",
   "model": "morning",
   "name": "기아 모닝",
   "gen": "모닝 3세대 (JA)",
   "years": "2017~현재",
   "size": "경차",
   "origin": "국내",
   "ages": [
    "20대"
   ],
   "stars": 4,
   "why": "경차 혜택에 최신 안전 사양까지 갖춰 첫 차 입문용으로 무난합니다.",
   "feature": "2017년 3세대 출시, 2020년 모닝 어반, 2023년 더 뉴 모닝으로 바뀌었습니다. 1.0 가솔린에 4단 자동변속기.",
   "pros": [
    "경차라 취득세 감면, 통행료와 공영주차장 할인을 받습니다",
    "작아서 좁은 골목과 학교 주차장에서 편합니다",
    "연식 대비 값이 싸고 매물이 많습니다"
   ],
   "cons": [
    "4단 변속기라 고속도로에서 시끄럽고 힘이 부족합니다",
    "뒷좌석과 트렁크가 좁습니다"
   ],
   "price": {
    "p25": 880,
    "p50": 1180,
    "p75": 1490,
    "new": 1375
   },
   "km": 34282,
   "yr": [
    2018,
    2026
   ],
   "stat": {
    "encar": 2050,
    "kb": 1774,
    "vpd": 6.47,
    "subs": 1,
    "pop": 49
   },
   "photo": {
    "src": "assets/cars/JA.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2017_Kia_Picanto_GT-Line_S_1.2_Front.jpg",
    "by": "Vauxford",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "E5K2UeFZB9I",
     "t": "\"쏘렌토 소짜 납시오\" 사회초년생 추천 TOP! 신형 모닝 시승기, 이렇게 많이 바뀌어도 되나??",
     "ch": "우파푸른하늘Woopa TV",
     "v": 643041
    },
    {
     "id": "fO7eKgR_5hE",
     "t": "인생 첫차로 갓성비차 추천해줄게 몬지알지? | 모닝 어반 리뷰 | 칼쳐맨의 칼쳐뷰",
     "ch": "박준형의 CARTUREMAN칼쳐맨",
     "v": 512512
    },
    {
     "id": "p8_o3AxcKXk",
     "t": "올 뉴 모닝 32,000km타고 느낀 장단점은? [차주인터뷰]",
     "ch": "한기사 중고차",
     "v": 357016
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "모닝",
     "m": [
      "올 뉴 모닝 (JA)",
      "모닝 어반 (JA)",
      "더 뉴 모닝 (JA)"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1166",
     "car": [
      "3346",
      "3086",
      "2870"
     ]
    },
    "kcar": "모닝 JA",
    "hey": [
     "2oV0gK",
     "VeJZme",
     "eojK8p"
    ],
    "hc": ""
   }
  },
  {
   "key": "TA",
   "model": "morning",
   "name": "기아 모닝",
   "gen": "모닝 2세대 (TA)",
   "years": "2011~2017",
   "size": "경차",
   "origin": "국내",
   "ages": [
    "20대"
   ],
   "stars": 3,
   "why": "가장 싸게 사는 차지만 연식이 오래돼 수리비를 따로 잡아야 합니다.",
   "feature": "2011년 2세대 출시, 2015년 더 뉴 모닝으로 바뀌었습니다. 1.0 가솔린과 LPG.",
   "pros": [
    "400만원대로 살 수 있는 가장 싼 선택지입니다",
    "부품값이 싸고 어느 정비소든 고칩니다"
   ],
   "cons": [
    "주행거리 10만km 안팎 매물이 많습니다",
    "지금 기준으로 안전 사양이 부족합니다"
   ],
   "price": {
    "p25": 380,
    "p50": 430,
    "p75": 550,
    "new": 1118
   },
   "km": 96093,
   "yr": [
    2011,
    2016
   ],
   "stat": {
    "encar": 1732,
    "kb": 2317,
    "vpd": 6.67,
    "subs": 1,
    "pop": 49
   },
   "photo": {
    "src": "assets/cars/TA.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2014_Kia_Picanto_Front_1.jpg",
    "by": "Areaseven",
    "lic": "CC BY-SA 3.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "1fhyXQ0p0HI",
     "t": "모닝,스파크 이 영상을 보기전엔 절대 사지 마세요 (경차 장단점,유지비,혜택)",
     "ch": "중고차파괴자",
     "v": 715027
    },
    {
     "id": "PCetQgvseUY",
     "t": "스쿠터보다 싼 70만원짜리 모닝 중고차는 어떨까? (가성비 중고)",
     "ch": "수건도둑",
     "v": 171705
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "모닝",
     "m": [
      "올 뉴 모닝",
      "더 뉴 모닝"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1166",
     "car": [
      "2554",
      "1409"
     ]
    },
    "kcar": "더 뉴 모닝",
    "hey": [
     "2oV0gK",
     "VeJZme",
     "83Payo"
    ],
    "hc": ""
   }
  },
  {
   "key": "TAM2",
   "model": "ray",
   "name": "기아 레이",
   "gen": "더 뉴 기아 레이",
   "years": "2022~현재",
   "size": "경차",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4.5,
   "why": "경차 중 실내가 가장 넓고, 2022년 부분변경으로 사양이 좋아졌습니다.",
   "feature": "2022년 두 번째 부분변경 모델입니다. 1.0 가솔린, 조수석 쪽 가운데 기둥이 없는 슬라이딩 문.",
   "pros": [
    "천장이 높아 짐과 교구가 잘 실립니다",
    "경차 혜택을 그대로 받습니다",
    "중고 값이 잘 버텨 되팔 때 유리합니다"
   ],
   "cons": [
    "고속도로에서 옆바람에 흔들립니다",
    "다른 경차보다 연비가 낮습니다"
   ],
   "price": {
    "p25": 1269,
    "p50": 1460,
    "p75": 1600,
    "new": 1585
   },
   "km": 33216,
   "yr": [
    2022,
    2025
   ],
   "stat": {
    "encar": 1342,
    "kb": 699,
    "vpd": 11.33,
    "subs": 2,
    "pop": 49
   },
   "photo": {
    "src": "assets/cars/TAM2.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_RAY_TAM_PE2.jpg",
    "by": "Avante2025",
    "lic": "CC BY 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "PPdl7LZLY8g",
     "t": "더 뉴 기아 레이 11,000km타고 느낀 장단점은? [차주인터뷰]",
     "ch": "한기사 중고차",
     "v": 349286
    },
    {
     "id": "GaZIlRxmFOw",
     "t": "기아 더 뉴 레이 시승기, 시그니처 풀 옵션 1,920만원(2023 Kia Ray 1.0 Test Drive) - 2022.09.27",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 343282
    },
    {
     "id": "phFE77pFuzM",
     "t": "5년 풀할부로 지른 실차주가 말해주는 \"레이가 후회되는 이유\" 장점과 단점 리뷰",
     "ch": "카통령",
     "v": 874413
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "레이",
     "m": [
      "더 뉴 기아 레이"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1236",
     "car": [
      "3306"
     ]
    },
    "kcar": "더 뉴 기아 레이",
    "hey": [
     "2oV0gK",
     "bePjqM",
     "n3QbBo"
    ],
    "hc": ""
   }
  },
  {
   "key": "TAM1",
   "model": "ray",
   "name": "기아 레이",
   "gen": "레이, 더 뉴 레이",
   "years": "2011~2022",
   "size": "경차",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "같은 넓은 실내를 800만원대에 누립니다.",
   "feature": "2011년 출시, 2017년 더 뉴 레이로 바뀌었습니다. 1.0 가솔린.",
   "pros": [
    "넓은 실내를 싼 값에 삽니다",
    "매물이 많아 고르기 쉽습니다"
   ],
   "cons": [
    "오래된 연식은 엔진과 변속기 소음이 큽니다",
    "2인승 레이 밴 매물이 섞여 있어 승용인지 꼭 확인합니다"
   ],
   "price": {
    "p25": 650,
    "p50": 829,
    "p75": 989,
    "new": 1426
   },
   "km": 72028,
   "yr": [
    2012,
    2022
   ],
   "stat": {
    "encar": 3275,
    "kb": 2123,
    "vpd": 7.02,
    "subs": 4,
    "pop": 62
   },
   "photo": {
    "src": "assets/cars/TAM1.webp",
    "page": "https://commons.wikimedia.org/wiki/File:KIA_THE_NEW_RAY_201806_001.jpg",
    "by": "CEFICEFI",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "MKpDx3hjNaI",
     "t": "5년된 레이, 800만원에 어떨까?",
     "ch": "모트라인 MOTline",
     "v": 319328
    },
    {
     "id": "JSi5upxrOSU",
     "t": "중고 레이 고민되는 분 보세요!",
     "ch": "정비딜러 영범이",
     "v": 292150
    },
    {
     "id": "2T9WQRsSD-E",
     "t": "레이 중고차로 샀는데 수리비가 300만 원이라고요?",
     "ch": "중고차 빡차",
     "v": 293242
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "레이",
     "m": [
      "레이",
      "더 뉴 레이"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1236",
     "car": [
      "2945",
      "1429"
     ]
    },
    "kcar": "더 뉴 레이",
    "hey": [
     "2oV0gK",
     "bePjqM",
     "ZoD9mp"
    ],
    "hc": ""
   }
  },
  {
   "key": "AX1",
   "model": "casper",
   "name": "현대 캐스퍼",
   "gen": "캐스퍼",
   "years": "2021~현재",
   "size": "경형 SUV",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "경차 혜택에 SUV 모양, 1.0 터보를 고르면 힘도 넉넉합니다.",
   "feature": "2021년 출시, 홈페이지에서만 파는 경형 SUV입니다. 1.0 가솔린과 1.0 터보.",
   "pros": [
    "앞좌석까지 접혀 짐 싣기와 차박이 편합니다",
    "터보 모델은 고속도로도 무리가 없습니다",
    "제조사 보증이 남은 매물이 많습니다"
   ],
   "cons": [
    "뒷좌석이 좁고 승차감이 단단합니다",
    "옵션을 넣은 매물은 1,500만원을 넘습니다"
   ],
   "price": {
    "p25": 1230,
    "p50": 1450,
    "p75": 1590,
    "new": 1780
   },
   "km": 37730,
   "yr": [
    2021,
    2024
   ],
   "stat": {
    "encar": 1507,
    "kb": 1033,
    "vpd": 10.75,
    "subs": 2,
    "pop": 50
   },
   "photo": {
    "src": "assets/cars/AX1.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Casper_Active_AX1_Atlas_White_(18).jpg",
    "by": "Damian B Oh",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "4Z99MHSv9Dg",
     "t": "현대 캐스퍼 시승기, 아 떨린다!…가격 2057만원, 아반떼 vs 캐스퍼 풀옵션, 당신의 선택은?",
     "ch": "김한용의 MOCAR",
     "v": 2164413
    },
    {
     "id": "PBVQVsAhiB8",
     "t": "캐스퍼 1년 15,000km 주행 후기와 유지비 장단점은?",
     "ch": "도니",
     "v": 862896
    },
    {
     "id": "W2Sx5hmrBUE",
     "t": "당신이 첫차로 캐스퍼를 사려고 한다면",
     "ch": "UPSub없섭",
     "v": 1115364
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "캐스퍼",
     "m": [
      "캐스퍼",
      "더 뉴 캐스퍼"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "2792",
     "car": [
      "3431",
      "3208"
     ]
    },
    "kcar": "캐스퍼",
    "hey": [
     "xoKegB",
     "zeXXQe",
     ""
    ],
    "hc": "캐스퍼"
   }
  },
  {
   "key": "AX1E",
   "model": "casper",
   "name": "현대 캐스퍼",
   "gen": "캐스퍼 일렉트릭",
   "years": "2024~현재",
   "size": "경형 SUV",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "경차보다 커진 차체에 한 번 충전으로 300km 안팎을 가는 전기차입니다.",
   "feature": "2024년 출시. 해외에서는 인스터라는 이름으로 팝니다. 49kWh 배터리.",
   "pros": [
    "충전비가 기름값보다 훨씬 적게 듭니다",
    "내연기관 캐스퍼보다 실내가 넓습니다",
    "조용하고 가속이 부드럽습니다"
   ],
   "cons": [
    "집이나 학교에 충전기가 없으면 불편합니다",
    "차가 길어져 경차 혜택은 받지 못합니다"
   ],
   "price": {
    "p25": 2640,
    "p50": 2708,
    "p75": 2850,
    "new": 2990
   },
   "km": 23418,
   "yr": [
    2024,
    2026
   ],
   "stat": {
    "encar": 274,
    "kb": 123,
    "vpd": 8.83,
    "subs": 2,
    "pop": 40
   },
   "photo": {
    "src": "assets/cars/AX1E.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Inster_Auto_Zuerich_2024_DSC_6286.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "4LTU-6uWflM",
     "t": "[리뷰] 2025 현대 캐스퍼 일렉트릭(EV) / 오토뷰 로드테스트 / 시승차제공:현대자동차",
     "ch": "오토뷰(AutoView)",
     "v": 223587
    },
    {
     "id": "3O5mzlvCVEs",
     "t": "현대 인스터(캐스퍼 일렉트릭) 리뷰! - 작지만 강력해서 놀랐습니다!",
     "ch": "carwow 한국",
     "v": 731405
    },
    {
     "id": "DjtqQVAACsk",
     "t": "현대 캐스퍼 일렉트릭 최초 시승기! 2000만원대 전기차가 승차감, 성능 폼 미쳤네!",
     "ch": "김한용의 MOCAR",
     "v": 612994
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "캐스퍼",
     "m": [
      "캐스퍼 일렉트릭"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "2792",
     "car": [
      "3414",
      "3466"
     ]
    },
    "kcar": "캐스퍼 일렉트릭",
    "hey": [
     "xoKegB",
     "zeXXQe",
     "pZBBgp"
    ],
    "hc": "캐스퍼 일렉트릭"
   }
  },
  {
   "key": "CN7",
   "model": "avante",
   "name": "현대 아반떼",
   "gen": "아반떼 7세대 (CN7)",
   "years": "2020~2025",
   "size": "준중형 세단",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4.5,
   "why": "실내가 넓고 연비가 좋아 중고 첫 차로 가장 무난한 답입니다.",
   "feature": "2020년 7세대 출시, 2023년 더 뉴 아반떼로 바뀌었습니다. 1.6 가솔린, 하이브리드, LPi.",
   "pros": [
    "한 급 위에 가까운 실내 공간",
    "1.6 가솔린 실연비가 리터당 14~15km입니다",
    "정비소와 부품이 흔합니다"
   ],
   "cons": [
    "인기 차종이라 같은 연식 경쟁 차보다 비쌉니다",
    "렌터카 출신 매물이 많아 이력 확인이 꼭 필요합니다"
   ],
   "price": {
    "p25": 1510,
    "p50": 1780,
    "p75": 2030,
    "new": 2143
   },
   "km": 56861,
   "yr": [
    2020,
    2025
   ],
   "stat": {
    "encar": 2777,
    "kb": 1907,
    "vpd": 21.29,
    "subs": 5,
    "pop": 65
   },
   "photo": {
    "src": "assets/cars/CN7.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Avante_CN7_Facelift_in_Seoul_2024_front.jpg",
    "by": "Nord794ub",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "gmKt98cF1ZE",
     "t": "아반떼 신형 시승기, 이것만 알면 된다 [CN7, 윤성로 리뷰]",
     "ch": "모트라인 MOTline",
     "v": 1477673
    },
    {
     "id": "KQoKyE6Tbx0",
     "t": "현대 신형 아반떼 시승기...멋진건 기본! 더 깔끔하고, 더 조용하다",
     "ch": "김한용의 MOCAR",
     "v": 986056
    },
    {
     "id": "j70YY8bCtNA",
     "t": "[리뷰] 2025 현대 아반떼 1.6 / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 430499
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "아반떼",
     "m": [
      "아반떼 (CN7)",
      "더 뉴 아반떼 (CN7)"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1109",
     "car": [
      "3317",
      "3079"
     ]
    },
    "kcar": "아반떼 CN7",
    "hey": [
     "xoKegB",
     "XyQ1gy",
     "x4JNl4"
    ],
    "hc": "아반떼 (CN7)"
   }
  },
  {
   "key": "AD",
   "model": "avante",
   "name": "현대 아반떼",
   "gen": "아반떼 6세대 (AD)",
   "years": "2015~2020",
   "size": "준중형 세단",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "800만원대에 검증된 준중형 세단을 탑니다.",
   "feature": "2015년 6세대 출시, 2018년 더 뉴 아반떼로 바뀌었습니다. 부분변경 모델은 1.6 가솔린에 IVT 변속기.",
   "pros": [
    "값이 싸면서 고장이 적은 편입니다",
    "부분변경 모델은 연비가 좋습니다"
   ],
   "cons": [
    "주행거리 10만km 넘는 매물이 많습니다",
    "실내 소재와 편의 사양이 낡았습니다"
   ],
   "price": {
    "p25": 690,
    "p50": 879,
    "p75": 1020,
    "new": 1765
   },
   "km": 105183,
   "yr": [
    2015,
    2019
   ],
   "stat": {
    "encar": 2101,
    "kb": 1966,
    "vpd": 12.84,
    "subs": 4,
    "pop": 60
   },
   "photo": {
    "src": "assets/cars/AD.webp",
    "page": "https://commons.wikimedia.org/wiki/File:20181112_Hyundai_AVANTE_Front-side.png",
    "by": "Ki hoon",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "0jYxlUqmItA",
     "t": "현대 아반떼 1.6 GDi(가솔린) 시승기 4K [오토뷰]",
     "ch": "오토뷰(AutoView)",
     "v": 287181
    },
    {
     "id": "HCUInOEsyU4",
     "t": "[시승기] 현대차 신형 아반떼 AD (2016 Hyundai Elantra test-drive)…\"감히 이 급에선 최고라 할만해\"",
     "ch": "모터그래프",
     "v": 307985
    },
    {
     "id": "gKRDq1hGP7A",
     "t": "현대 더 뉴 아반떼 스마트스트림 1.6 시승기(2019 Hyundai Elantra Smart Stream G 1.6 First Drive) - 2018.09.06",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 434702
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "아반떼",
     "m": [
      "아반떼 AD",
      "더 뉴 아반떼 AD"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1109",
     "car": [
      "2957",
      "2729"
     ]
    },
    "kcar": "아반떼 AD",
    "hey": [
     "xoKegB",
     "XyQ1gy",
     "Zok9J4"
    ],
    "hc": ""
   }
  },
  {
   "key": "BD",
   "model": "k3",
   "name": "기아 K3",
   "gen": "K3 2세대 (BD)",
   "years": "2018~2024",
   "size": "준중형 세단",
   "origin": "국내",
   "ages": [
    "20대"
   ],
   "stars": 4,
   "why": "아반떼와 같은 엔진에 값은 수백만원 쌉니다.",
   "feature": "2018년 2세대 출시, 2021년 더 뉴 K3로 바뀌었고 2024년 국내 판매를 마쳤습니다. 1.6 가솔린 IVT.",
   "pros": [
    "아반떼보다 싸게 같은 급을 삽니다",
    "연비가 좋습니다"
   ],
   "cons": [
    "단종 차종이라 되팔 때 값이 더 빠집니다",
    "뒷좌석이 아반떼보다 좁습니다"
   ],
   "price": {
    "p25": 1130,
    "p50": 1400,
    "p75": 1670,
    "new": 1825
   },
   "km": 62752,
   "yr": [
    2018,
    2023
   ],
   "stat": {
    "encar": 1548,
    "kb": 1114,
    "vpd": 12.09,
    "subs": 4,
    "pop": 58
   },
   "photo": {
    "src": "assets/cars/BD.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2021_Kia_Cerato_GT-Line_Limited_Edition_front_right.jpg",
    "by": "Throwawayacc222",
    "lic": "CC0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "bJ3h1HROuTo",
     "t": "기아 신형 K3 시승기! 준중형 세단 1등 가능하겠어? 근데 승차감이...",
     "ch": "비피디 BPD",
     "v": 415866
    },
    {
     "id": "u6C4eSJwTzw",
     "t": "[모트라인] 아반떼를 잡은? 2018 K3 공도&서킷 리뷰",
     "ch": "모트라인 MOTline",
     "v": 363859
    },
    {
     "id": "F-8mUzFuHY8",
     "t": "기아 K3 1.6 2018 시승기 4K [오토뷰]",
     "ch": "오토뷰(AutoView)",
     "v": 279671
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "K3",
     "m": [
      "올 뉴 K3",
      "더 뉴 K3 2세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1240",
     "car": [
      "3175",
      "2937"
     ]
    },
    "kcar": "K3",
    "hey": [
     "2oV0gK",
     "VMjJGM",
     "EpbN6p"
    ],
    "hc": ""
   }
  },
  {
   "key": "YD",
   "model": "k3",
   "name": "기아 K3",
   "gen": "K3 1세대 (YD)",
   "years": "2012~2018",
   "size": "준중형 세단",
   "origin": "국내",
   "ages": [
    "20대"
   ],
   "stars": 3,
   "why": "500만원대 예산이면 볼 만하지만 연식 관리 상태가 관건입니다.",
   "feature": "2012년 1세대 출시, 2015년 더 뉴 K3로 바뀌었습니다. 1.6 가솔린 6단 자동.",
   "pros": [
    "가장 싸게 사는 준중형 세단입니다",
    "부품이 흔해 수리비가 쌉니다"
   ],
   "cons": [
    "주행거리 10만km 넘는 매물이 대부분입니다",
    "지금 기준으로 안전 사양이 부족합니다"
   ],
   "price": {
    "p25": 450,
    "p50": 560,
    "p75": 680,
    "new": 1763
   },
   "km": 108553,
   "yr": [
    2012,
    2017
   ],
   "stat": {
    "encar": 897,
    "kb": 935,
    "vpd": 6.29,
    "subs": 1,
    "pop": 45
   },
   "photo": {
    "src": "assets/cars/YD.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_K3_YD_01_China_2013-03-04.jpg",
    "by": "Navigator84",
    "lic": "CC BY-SA 3.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "LHyODuI_JvM",
     "t": "500에 이 성능 실화야? 첫차 구매, 사회초년생들에게 강추하는 차량 K3 입니다!!! #차리뷰 #k3리뷰 #k3중고차",
     "ch": "윤순의 평범치 않은 생활",
     "v": 265876
    },
    {
     "id": "4hRqxoa0zIg",
     "t": "기아 더 뉴 K3 시승기(Kia 2016 Forte test drive)...훌륭한 차체로 \"무르익었다\"",
     "ch": "모터그래프",
     "v": 326257
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "K3",
     "m": [
      "K3",
      "더 뉴 K3"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1240",
     "car": [
      "2756",
      "1448"
     ]
    },
    "kcar": "더 뉴 K3",
    "hey": [
     "2oV0gK",
     "VMjJGM",
     "83PRYp"
    ],
    "hc": ""
   }
  },
  {
   "key": "DN8",
   "model": "sonata",
   "name": "현대 쏘나타",
   "gen": "쏘나타 8세대 (DN8)",
   "years": "2019~현재",
   "size": "중형 세단",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "넓은 실내와 최신 사양을 2천만원 안팎에 삽니다.",
   "feature": "2019년 8세대 출시, 2023년 쏘나타 디 엣지로 바뀌었습니다. 2.0 가솔린, 1.6 터보, 하이브리드, LPi.",
   "pros": [
    "뒷좌석과 트렁크가 넉넉합니다",
    "고속 주행이 조용하고 안정적입니다",
    "디 엣지는 실내 화면과 사양이 크게 좋아졌습니다"
   ],
   "cons": [
    "택시와 LPi 렌터카 출신 매물이 섞여 있습니다",
    "초기형(2019~2020년)은 디자인 호불호가 큽니다"
   ],
   "price": {
    "p25": 1599,
    "p50": 1990,
    "p75": 2580,
    "new": 3217
   },
   "km": 64627,
   "yr": [
    2019,
    2026
   ],
   "stat": {
    "encar": 2305,
    "kb": 1523,
    "vpd": 17.14,
    "subs": 3,
    "pop": 56
   },
   "photo": {
    "src": "assets/cars/DN8.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2020_Hyundai_Sonata_SEL_(Quartz_White),_front_right.jpg",
    "by": "Mr.choppers",
    "lic": "CC BY-SA 3.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "ytj2xtsGr9k",
     "t": "현대차 신형 쏘나타 시승기...장점과 아쉬운 점",
     "ch": "김한용의 MOCAR",
     "v": 1540940
    },
    {
     "id": "eVSPmzrtLtI",
     "t": "신형 쏘나타 디 엣지 시승기...날선 디자인, 빠릿빠릿한 성능! 너무한 가격?",
     "ch": "김한용의 MOCAR",
     "v": 1038173
    },
    {
     "id": "-LdxFWHftvQ",
     "t": "[리뷰] 2023 쏘나타 디엣지 1.6 터보 / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 588369
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "쏘나타",
     "m": [
      "쏘나타 (DN8)",
      "쏘나타 디 엣지(DN8)"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1108",
     "car": [
      "3330",
      "2994"
     ]
    },
    "kcar": "쏘나타 DN8",
    "hey": [
     "xoKegB",
     "Ne8v1M",
     "moORZ3"
    ],
    "hc": "쏘나타"
   }
  },
  {
   "key": "LF",
   "model": "sonata",
   "name": "현대 쏘나타",
   "gen": "쏘나타 7세대 (LF)",
   "years": "2014~2019",
   "size": "중형 세단",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "800만원대 중형 세단이지만 주행거리가 깁니다.",
   "feature": "2014년 7세대 출시, 2017년 쏘나타 뉴 라이즈로 바뀌었습니다. 2.0 가솔린, 1.6 터보, 1.7 디젤.",
   "pros": [
    "넓은 실내를 싸게 삽니다",
    "오래 검증된 2.0 엔진입니다"
   ],
   "cons": [
    "주행거리 13만km 안팎 매물이 많습니다",
    "준중형보다 연비가 낮습니다"
   ],
   "price": {
    "p25": 650,
    "p50": 790,
    "p75": 950,
    "new": 2680
   },
   "km": 132459,
   "yr": [
    2014,
    2018
   ],
   "stat": {
    "encar": 1570,
    "kb": 1430,
    "vpd": 12.25,
    "subs": 3,
    "pop": 55
   },
   "photo": {
    "src": "assets/cars/LF.webp",
    "page": "https://commons.wikimedia.org/wiki/File:0_Hyundai_Sonata_(LF)_2.jpg",
    "by": "Benespit",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "yP4Pd1cnC7o",
     "t": "중고가 1000만원 LF쏘나타 현실적인 한 달 유지비ㄷㄷ",
     "ch": "중고차파괴자",
     "v": 850487
    },
    {
     "id": "7QiKjkMKS2k",
     "t": "쏘나타 뉴라이즈 2.0 가솔린 74,000km타고 느낀 장단점은? [차주인터뷰]",
     "ch": "한기사 중고차",
     "v": 188970
    },
    {
     "id": "P_5yblDqFiU",
     "t": "LF 쏘나타 2.0 가솔린 17,700km타고 느낀 장단점은? [차주인터뷰]",
     "ch": "한기사 중고차",
     "v": 188508
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "쏘나타",
     "m": [
      "LF 쏘나타",
      "쏘나타 뉴 라이즈"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1108",
     "car": [
      "2874",
      "2504"
     ]
    },
    "kcar": "LF 쏘나타",
    "hey": [
     "xoKegB",
     "Ne8v1M",
     "N4NBg4"
    ],
    "hc": ""
   }
  },
  {
   "key": "DL3",
   "model": "k5",
   "name": "기아 K5",
   "gen": "K5 3세대 (DL3)",
   "years": "2019~현재",
   "size": "중형 세단",
   "origin": "국내",
   "ages": [
    "20대",
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "디자인과 사양이 좋아 중형 중고 가운데 찜이 가장 많습니다.",
   "feature": "2019년 3세대 출시, 2023년 더 뉴 K5로 바뀌었습니다. 2.0 가솔린, 1.6 터보, 하이브리드, LPi.",
   "pros": [
    "젊은 디자인입니다",
    "실내 사양이 좋습니다",
    "관심이 많아 되팔기 쉽습니다"
   ],
   "cons": [
    "뒷좌석 머리 공간이 낮습니다",
    "LPi 렌터카 출신 매물이 많습니다"
   ],
   "price": {
    "p25": 1730,
    "p50": 1950,
    "p75": 2300,
    "new": 2862
   },
   "km": 67136,
   "yr": [
    2020,
    2025
   ],
   "stat": {
    "encar": 2210,
    "kb": 1484,
    "vpd": 15.07,
    "subs": 6,
    "pop": 67
   },
   "photo": {
    "src": "assets/cars/DL3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:20191227_K5_DL3_Front_Side.png",
    "by": "Ki hoon",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "zJLj7JQMKhU",
     "t": "기아 신형 K5 1.6 DL3 터보 시승기…충격 받은 이유",
     "ch": "김한용의 MOCAR",
     "v": 2042252
    },
    {
     "id": "UmY6Rdzkbqk",
     "t": "기아 K5 터보, 실제로 느껴지는 장단점 말씀드려요.",
     "ch": "모트라인 MOTline",
     "v": 938074
    },
    {
     "id": "e_G-631d83Y",
     "t": "[시승기] 2020 기아 K5 1.6 터보 / 오토뷰 4K (UHD) - KIA Optima 1.6 Turbo",
     "ch": "오토뷰(AutoView)",
     "v": 545374
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "K5",
     "m": [
      "K5 3세대",
      "더 뉴 K5 3세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1225",
     "car": [
      "3374",
      "3051"
     ]
    },
    "kcar": "K5 3세대",
    "hey": [
     "2oV0gK",
     "EMpDLM",
     "N49Ev4"
    ],
    "hc": ""
   }
  },
  {
   "key": "JF",
   "model": "k5",
   "name": "기아 K5",
   "gen": "K5 2세대 (JF)",
   "years": "2015~2019",
   "size": "중형 세단",
   "origin": "국내",
   "ages": [
    "20대",
    "30대",
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "800만원대에 넓은 중형 세단을 삽니다.",
   "feature": "2015년 2세대 출시, 2018년 더 뉴 K5로 바뀌었습니다. 2.0 가솔린, 1.6 터보, 1.7 디젤.",
   "pros": [
    "값 대비 공간이 넓습니다",
    "디자인이 아직 깔끔합니다"
   ],
   "cons": [
    "주행거리 11만km 안팎입니다",
    "지금 기준으로 안전 사양이 부족합니다"
   ],
   "price": {
    "p25": 729,
    "p50": 879,
    "p75": 1119,
    "new": 2580
   },
   "km": 112015,
   "yr": [
    2015,
    2019
   ],
   "stat": {
    "encar": 882,
    "kb": 918,
    "vpd": 16.16,
    "subs": 2,
    "pop": 49
   },
   "photo": {
    "src": "assets/cars/JF.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2018_Kia_Optima_S_front.jpg",
    "by": "Throwawayacc222",
    "lic": "CC0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "milSrasStwo",
     "t": "기아 더 뉴 K5 2.0 CVVL 시승기 Feat.이다정(2019 Kia Optima 2.0 Test Drive) - 2018.04.05",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 448720
    },
    {
     "id": "WiQwc2nadvA",
     "t": "기아 K5 2.0 CVVL 시승기 4K [오토뷰]",
     "ch": "오토뷰(AutoView)",
     "v": 237061
    },
    {
     "id": "k0_OyHZ7-CQ",
     "t": "출시현장! 기아 더 뉴 K5 리뷰...알아서 달리고, 핸들도 돌려주는 HDA, 세련돼 진 디자인까지",
     "ch": "모터그래프",
     "v": 466714
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "K5",
     "m": [
      "K5 2세대",
      "더 뉴 K5 2세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1225",
     "car": [
      "2924",
      "2683"
     ]
    },
    "kcar": "K5 2세대",
    "hey": [
     "2oV0gK",
     "EMpDLM",
     "Eomv2p"
    ],
    "hc": ""
   }
  },
  {
   "key": "GN7",
   "model": "grandeur",
   "name": "현대 그랜저",
   "gen": "그랜저 7세대 (GN7)",
   "years": "2022~현재",
   "size": "준대형 세단",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "신차보다 1천만원 가까이 싸게 최신 그랜저를 탑니다.",
   "feature": "2022년 7세대 출시, 2026년 더 뉴 그랜저로 바뀌었습니다. 2.5 가솔린, 3.5 가솔린, 1.6 터보 하이브리드.",
   "pros": [
    "조용하고 승차감이 좋습니다",
    "최신 주행 보조와 큰 화면을 갖췄습니다",
    "하이브리드는 연비도 좋습니다"
   ],
   "cons": [
    "3천만원을 넘고 보험료도 높습니다",
    "차체가 커서 좁은 주차장이 불편합니다"
   ],
   "price": {
    "p25": 2950,
    "p50": 3299,
    "p75": 3690,
    "new": 4233
   },
   "km": 42663,
   "yr": [
    2023,
    2025
   ],
   "stat": {
    "encar": 2078,
    "kb": 1080,
    "vpd": 36.19,
    "subs": 6,
    "pop": 66
   },
   "photo": {
    "src": "assets/cars/GN7.webp",
    "page": "https://commons.wikimedia.org/wiki/File:01_Hyundai_Grandeur_(GN7).jpg",
    "by": "Benespit",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "8gNEJOT7-Zs",
     "t": "현대 그랜저 1.6 하이브리드 시승기!...그랜저라면 무조건 이걸 사야지! 연비가 무려!",
     "ch": "김한용의 MOCAR",
     "v": 1715898
    },
    {
     "id": "bcM7LIt5d08",
     "t": "역대급 반전 [그랜저 GN7 2.5, 윤성로 리뷰]",
     "ch": "모트라인 MOTline",
     "v": 1118059
    },
    {
     "id": "YuHRMdTzlE8",
     "t": "신형 그랜저 2.5 시승기...최고의 세단! 심각한 불량도?",
     "ch": "김한용의 MOCAR",
     "v": 1135422
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "그랜저",
     "m": [
      "그랜저 (GN7)",
      "그랜저 하이브리드 (GN7)",
      "더 뉴 그랜저 (GN7)"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1101",
     "car": [
      "3301",
      "3302",
      "4080",
      "4081"
     ]
    },
    "kcar": "그랜저 GN7",
    "hey": [
     "xoKegB",
     "rk0Jmy",
     "Vp1d1o"
    ],
    "hc": "그랜저 (GN7)"
   }
  },
  {
   "key": "IG",
   "model": "grandeur",
   "name": "현대 그랜저",
   "gen": "그랜저 6세대 (IG)",
   "years": "2016~2022",
   "size": "준대형 세단",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "1,600만원대에 큰 차의 편안함을 누립니다. 국산 중고 매물이 가장 많습니다.",
   "feature": "2016년 6세대 출시, 2019년 더 뉴 그랜저로 바뀌었습니다. 2.4, 2.5, 3.0, 3.3 가솔린과 하이브리드, LPi.",
   "pros": [
    "매물이 많아 고르기 쉽습니다",
    "부분변경 모델은 실내가 크게 좋아졌습니다"
   ],
   "cons": [
    "자동차세와 기름값이 많이 듭니다",
    "주행거리 10만km 안팎 매물이 흔합니다"
   ],
   "price": {
    "p25": 1175,
    "p50": 1650,
    "p75": 2150,
    "new": 3505
   },
   "km": 98244,
   "yr": [
    2016,
    2022
   ],
   "stat": {
    "encar": 4911,
    "kb": 3683,
    "vpd": 12.47,
    "subs": 5,
    "pop": 68
   },
   "photo": {
    "src": "assets/cars/IG.webp",
    "page": "https://commons.wikimedia.org/wiki/File:20191121_Hyundai_GRANDEUR_front-side.jpg",
    "by": "Ki hoon",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "jJxG2HluSPg",
     "t": "우리나라에서 가장 많이 팔리는 세단! 현대차 신형 그랜저(IG) 시승기...'구형 그랜저(HG)와 비교해보니'",
     "ch": "모터그래프",
     "v": 1075679
    },
    {
     "id": "YhX6SLHYxrE",
     "t": "[시승기] 현대 그랜저IG 3.0 - 오토뷰 4K (UHD)",
     "ch": "오토뷰(AutoView)",
     "v": 733085
    },
    {
     "id": "H7pHu-KRWgg",
     "t": "[노보스]구형 그랜저IG vs 신형 더 뉴 그랜저 비교 | 현대 더 뉴 그랜저 리뷰 1부_노사장",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 710582
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "그랜저",
     "m": [
      "그랜저 IG",
      "더 뉴 그랜저 IG"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1101",
     "car": [
      "3048",
      "2852"
     ]
    },
    "kcar": "그랜저 IG",
    "hey": [
     "xoKegB",
     "rk0Jmy",
     "5oqNnp"
    ],
    "hc": ""
   }
  },
  {
   "key": "SP2",
   "model": "seltos",
   "name": "기아 셀토스",
   "gen": "셀토스 1세대 (SP2)",
   "years": "2019~2025",
   "size": "소형 SUV",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "소형 SUV 가운데 실내가 넓고 사양이 좋습니다.",
   "feature": "2019년 출시, 2022년 더 뉴 셀토스로 바뀌었습니다. 1.6 터보, 2.0 가솔린.",
   "pros": [
    "시야가 높고 짐 싣기 편합니다",
    "1.6 터보는 힘이 넉넉합니다",
    "매물이 많습니다"
   ],
   "cons": [
    "승차감이 단단합니다",
    "같은 값의 준중형 세단보다 연비가 낮습니다"
   ],
   "price": {
    "p25": 1590,
    "p50": 2130,
    "p75": 2600,
    "new": 2454
   },
   "km": 52658,
   "yr": [
    2019,
    2025
   ],
   "stat": {
    "encar": 1823,
    "kb": 1312,
    "vpd": 11.05,
    "subs": 3,
    "pop": 55
   },
   "photo": {
    "src": "assets/cars/SP2.webp",
    "page": "https://commons.wikimedia.org/wiki/File:White_KIA_Seltos_(Front).jpg",
    "by": "Benespit",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "_jbWj4HMXRo",
     "t": "신형 셀토스 페이스리프트 시승기...가격 2160만원에 8단 변속기! 스포티지 투싼보다 낫네?",
     "ch": "김한용의 MOCAR",
     "v": 1140867
    },
    {
     "id": "HbVUvXmxgvc",
     "t": "셀토스 반년동안 14,000km 타고 하는 현실 자동차 리뷰!! 셀토스 단점, 장점 다 이야기 합니다",
     "ch": "윤순의 평범치 않은 생활",
     "v": 894939
    },
    {
     "id": "i_BFIPzLxZ4",
     "t": "트랙스 멈춰!! 2024년형 셀토스 시승기, \"2,070만 원 가성비 이거 장난 아니네요\"",
     "ch": "우파푸른하늘Woopa TV",
     "v": 679688
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "셀토스",
     "m": [
      "셀토스",
      "더 뉴 셀토스"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "2733",
     "car": [
      "3284",
      "3020"
     ]
    },
    "kcar": "셀토스",
    "hey": [
     "2oV0gK",
     "8enKZk",
     "83PqGo"
    ],
    "hc": ""
   }
  },
  {
   "key": "SP3",
   "model": "seltos",
   "name": "기아 셀토스",
   "gen": "셀토스 2세대 (SP3)",
   "years": "2026~현재",
   "size": "소형 SUV",
   "origin": "국내",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 3.5,
   "why": "나온 지 1년이 안 돼 중고 값이 신차와 비슷합니다. 지금은 신차를 먼저 보세요.",
   "feature": "2026년 2세대 출시. 1.6 터보에 하이브리드가 더해졌습니다.",
   "pros": [
    "하이브리드를 고를 수 있습니다",
    "최신 사양을 갖췄습니다"
   ],
   "cons": [
    "매물이 적고 값이 신차 수준입니다",
    "고를 수 있는 색과 사양이 적습니다"
   ],
   "price": {
    "p25": 3370,
    "p50": 3640,
    "p75": 3990,
    "new": 3469
   },
   "km": 4164,
   "yr": [
    2026,
    2026
   ],
   "stat": {
    "encar": 114,
    "kb": 33,
    "vpd": 37.36,
    "subs": 4,
    "pop": 42
   },
   "photo": {
    "src": "assets/cars/SP3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Seltos_(SP3)_IMG_7812.jpg",
    "by": "Alexander Migl",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "q-bA7_D-RcE",
     "t": "\"이건 진짜 예상 밖이다..!!\" 셀토스 풀체인지 가솔린 직접 타봤더니 할말을 잃었습니다",
     "ch": "우파푸른하늘Woopa TV",
     "v": 329654
    },
    {
     "id": "iYBxbjS8HZw",
     "t": "신형 셀토스 풀체인지 미쳤다! 기아가 칼을 갈고 만들면 이 정도?!",
     "ch": "김한용의 MOCAR",
     "v": 185934
    },
    {
     "id": "ab6nTCIzzbk",
     "t": "신형 셀토스 풀체인지 한달 동안 타보니.. 실제 오너가 뽑은 진짜 단점들",
     "ch": "솜아빠",
     "v": 181057
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "셀토스",
     "m": [
      "셀토스 2세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "2733",
     "car": [
      "4012",
      "4013"
     ]
    },
    "kcar": "디 올 뉴 셀토스",
    "hey": [
     "2oV0gK",
     "8enKZk",
     "o7Oeao"
    ],
    "hc": ""
   }
  },
  {
   "key": "NX4",
   "model": "tucson",
   "name": "현대 투싼",
   "gen": "투싼 4세대 (NX4)",
   "years": "2020~2025",
   "size": "준중형 SUV",
   "origin": "국내",
   "ages": [
    "30대"
   ],
   "stars": 4,
   "why": "넓은 실내의 준중형 SUV를 2천만원 안팎에 삽니다.",
   "feature": "2020년 4세대 출시, 2023년 더 뉴 투싼으로 바뀌었습니다. 1.6 터보, 하이브리드, 2.0 디젤.",
   "pros": [
    "뒷좌석과 트렁크가 넉넉합니다",
    "하이브리드는 연비가 좋습니다"
   ],
   "cons": [
    "2026년 신형이 나와 디자인이 한 세대 전이 됐습니다",
    "하이브리드 매물은 값이 높습니다"
   ],
   "price": {
    "p25": 1850,
    "p50": 2170,
    "p75": 2490,
    "new": 2641
   },
   "km": 55074,
   "yr": [
    2021,
    2024
   ],
   "stat": {
    "encar": 807,
    "kb": 566,
    "vpd": 22.95,
    "subs": 3,
    "pop": 51
   },
   "photo": {
    "src": "assets/cars/NX4.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Tucson_(NX4,_South_Korea)_front_view.png",
    "by": "융구티비YunKoo Tv",
    "lic": "CC BY 3.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "SVOWK33tfNQ",
     "t": "현대 신형 투싼 하이브리드 시승기...가격 2857만원~3939만원, 외모는 날카롭지만 승차감은 부드러워!",
     "ch": "김한용의 MOCAR",
     "v": 1270395
    },
    {
     "id": "D712n8v-XQw",
     "t": "현대 신형 투싼 솔직한 후기. 구입이 고민되신다면 이영상 꼭 보세요! (투싼 1.6 가솔린 터보)",
     "ch": "재뻘TV",
     "v": 673095
    },
    {
     "id": "TZTIK-R7cSw",
     "t": "현대차 신형 투싼 페이스리프트 시승기!...가격 135만원 인상, 스포티지 잡을까?",
     "ch": "김한용의 MOCAR",
     "v": 577756
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "투싼",
     "m": [
      "투싼 (NX4)",
      "더 뉴 투싼 (NX4)"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1129",
     "car": [
      "3382",
      "3128"
     ]
    },
    "kcar": "투싼 NX4",
    "hey": [
     "xoKegB",
     "Ae1PAy",
     "dpYjv4"
    ],
    "hc": "투싼"
   }
  },
  {
   "key": "TL",
   "model": "tucson",
   "name": "현대 투싼",
   "gen": "투싼 3세대 (TL)",
   "years": "2015~2020",
   "size": "준중형 SUV",
   "origin": "국내",
   "ages": [
    "30대"
   ],
   "stars": 3.5,
   "why": "1천만원대 초반에 SUV를 삽니다.",
   "feature": "2015년 3세대 출시, 2018년 부분변경. 2.0 디젤, 1.7 디젤, 1.6 터보.",
   "pros": [
    "싼 값에 SUV를 삽니다",
    "디젤은 연비가 좋습니다"
   ],
   "cons": [
    "디젤 매물이 많아 짧은 통근만 하면 관리가 번거롭습니다",
    "주행거리가 깁니다"
   ],
   "price": {
    "p25": 890,
    "p50": 1180,
    "p75": 1450,
    "new": 2646
   },
   "km": 104870,
   "yr": [
    2015,
    2020
   ],
   "stat": {
    "encar": 1244,
    "kb": 1096,
    "vpd": 7.68,
    "subs": 1,
    "pop": 46
   },
   "photo": {
    "src": "assets/cars/TL.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Tucson_facelift_(front).jpg",
    "by": "JustAnotherCarDesigner",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "jvxvP_h87EU",
     "t": "올뉴투싼, 이 영상을 보기전엔 절대 사지마세요!",
     "ch": "중고차파괴자",
     "v": 395541
    },
    {
     "id": "LbhhIMSjqpw",
     "t": "현대차 투싼 페이스리프트 시승기...다이내믹하지 않아도 좋아",
     "ch": "모터그래프",
     "v": 373707
    },
    {
     "id": "mcAm3pzbBdg",
     "t": "현대 투싼 페이스리프트 R2.0 HTRAC 시승기(2019 Hyundai Tucson 2.0D Test Drive) - 2018.08.17",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 309859
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "투싼",
     "m": [
      "올 뉴 투싼"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1129",
     "car": [
      "2539"
     ]
    },
    "kcar": "올 뉴 투싼",
    "hey": [
     "xoKegB",
     "Ae1PAy",
     "x4J1mp"
    ],
    "hc": ""
   }
  },
  {
   "key": "NQ5",
   "model": "sportage",
   "name": "기아 스포티지",
   "gen": "스포티지 5세대 (NQ5)",
   "years": "2021~현재",
   "size": "준중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "국내 SUV 판매 1위권. 매물, 디자인, 공간 모두 좋습니다.",
   "feature": "2021년 5세대 출시, 2024년 더 뉴 스포티지로 바뀌었습니다. 1.6 터보, 하이브리드, 2.0 디젤, LPi.",
   "pros": [
    "동급에서 가장 넓은 편인 실내",
    "하이브리드 연비가 좋습니다",
    "인기가 높아 되팔기 쉽습니다"
   ],
   "cons": [
    "인기만큼 중고 값이 높습니다",
    "하이브리드 매물은 3천만원 가까이 합니다"
   ],
   "price": {
    "p25": 2099,
    "p50": 2470,
    "p75": 2900,
    "new": 3220
   },
   "km": 47233,
   "yr": [
    2021,
    2025
   ],
   "stat": {
    "encar": 1309,
    "kb": 883,
    "vpd": 16.46,
    "subs": 2,
    "pop": 50
   },
   "photo": {
    "src": "assets/cars/NQ5.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Sportage_1.6_T-GDI_HEV_2WD_(2022)_(cropped).jpg",
    "by": "Charles",
    "lic": "CC BY 2.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "uNpSGqeRE9M",
     "t": "기아 스포티지 하이브리드 시승기!...가격 3500만원, 230마력 고성능! 연비, 정숙함 끝을 보여주자 현대기아 오너들 모두 발칵 뒤집어진 이유?",
     "ch": "김한용의 MOCAR",
     "v": 3267179
    },
    {
     "id": "P53OI8a76IU",
     "t": "기아 신형 스포티지 시승기...가격 3871만원! 진짜 싼타페보다 더 크다고?",
     "ch": "김한용의 MOCAR",
     "v": 1597936
    },
    {
     "id": "MbFOf5tLTDI",
     "t": "국내 1등! 신형 스포티지 시승기!...시작 가격 2800만원대면 너무 좋은데?",
     "ch": "김한용의 MOCAR",
     "v": 907529
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "스포티지",
     "m": [
      "스포티지 5세대",
      "더 뉴 스포티지 5세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1151",
     "car": [
      "3436",
      "3194"
     ]
    },
    "kcar": "스포티지 NQ5",
    "hey": [
     "2oV0gK",
     "relJ0M",
     "83PdG3"
    ],
    "hc": ""
   }
  },
  {
   "key": "QL",
   "model": "sportage",
   "name": "기아 스포티지",
   "gen": "스포티지 4세대 (QL)",
   "years": "2015~2021",
   "size": "준중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "1천만원 안팎에 SUV를 삽니다.",
   "feature": "2015년 4세대 출시, 2018년 스포티지 더 볼드로 바뀌었습니다. 2.0 디젤, 1.7 디젤, 1.6 터보.",
   "pros": [
    "값이 쌉니다",
    "디젤 모델은 힘이 좋습니다"
   ],
   "cons": [
    "주행거리 13만km 안팎입니다",
    "5세대보다 실내가 좁습니다"
   ],
   "price": {
    "p25": 900,
    "p50": 1050,
    "p75": 1330,
    "new": 2597
   },
   "km": 129071,
   "yr": [
    2015,
    2020
   ],
   "stat": {
    "encar": 1469,
    "kb": 1289,
    "vpd": 6.55,
    "subs": 2,
    "pop": 51
   },
   "photo": {
    "src": "assets/cars/QL.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Sportage_(QL)_Front_(cropped).jpg",
    "by": "Milhouse35",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "szEG_SoDW0g",
     "t": "기아 스포티지 시승기 (2016 KIA SPORTAGE test drive)...꼼꼼하지만 달리기는 물렁해",
     "ch": "모터그래프",
     "v": 572318
    },
    {
     "id": "1a9CwW9YWEo",
     "t": "기아 뉴 스포티지 R2.0 시승기(Kia Sportage E-VGT Test drive) - 2016.07.05",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 303743
    },
    {
     "id": "ynME0tRI6z4",
     "t": "기아 스포티지 더 볼드 R2.0 디젤 2WD 시승기(2019 Kia Sportage R2.0D Test Drive) - 2018.09.18",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 278664
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "스포티지",
     "m": [
      "스포티지 4세대",
      "스포티지 더 볼드"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1151",
     "car": [
      "2944",
      "2791"
     ]
    },
    "kcar": "스포티지 더 볼드",
    "hey": [
     "2oV0gK",
     "relJ0M",
     "vpWYG3"
    ],
    "hc": ""
   }
  },
  {
   "key": "MQ4",
   "model": "sorento",
   "name": "기아 쏘렌토",
   "gen": "쏘렌토 4세대 (MQ4)",
   "years": "2020~현재",
   "size": "중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "하이브리드 중형 SUV. 가족 차로 가장 많이 팔립니다.",
   "feature": "2020년 4세대 출시, 2023년 더 뉴 쏘렌토로 바뀌었습니다. 2.5 터보, 1.6 터보 하이브리드, 2.2 디젤. 6인승과 7인승.",
   "pros": [
    "3열까지 앉을 수 있습니다",
    "하이브리드 연비가 리터당 13~15km입니다",
    "매물이 많습니다"
   ],
   "cons": [
    "3천만원 안팎으로 비쌉니다",
    "하이브리드는 인기가 많아 값이 잘 내려가지 않습니다"
   ],
   "price": {
    "p25": 2350,
    "p50": 2889,
    "p75": 3550,
    "new": 4181
   },
   "km": 75819,
   "yr": [
    2020,
    2025
   ],
   "stat": {
    "encar": 3565,
    "kb": 2019,
    "vpd": 25.67,
    "subs": 3,
    "pop": 58
   },
   "photo": {
    "src": "assets/cars/MQ4.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
    "by": "차,또바기",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "kscyYSf7f98",
     "t": "내 쏘렌토 하이브리드 시승기!...차 사면 신고하는거라 배웠습니다!",
     "ch": "김한용의 MOCAR",
     "v": 1319015
    },
    {
     "id": "ZEfcnMDRZ0c",
     "t": "신형 쏘렌토 시승기, 밤에 보니 전혀 다르네...하이브리드 가격 5300만원 가치 있을까?",
     "ch": "김한용의 MOCAR",
     "v": 1093294
    },
    {
     "id": "Kp5fSlFgil8",
     "t": "기아 신형 쏘렌토 디젤 첫 시승기...훌륭한 점, 아쉬운 점",
     "ch": "김한용의 MOCAR",
     "v": 1074914
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "쏘렌토",
     "m": [
      "쏘렌토 4세대",
      "더 뉴 쏘렌토 4세대"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1152",
     "car": [
      "3356",
      "3357",
      "3073",
      "3080"
     ]
    },
    "kcar": "쏘렌토 MQ4",
    "hey": [
     "2oV0gK",
     "peqowM",
     "VpZDW3"
    ],
    "hc": ""
   }
  },
  {
   "key": "UM",
   "model": "sorento",
   "name": "기아 쏘렌토",
   "gen": "쏘렌토 3세대 (UM)",
   "years": "2014~2020",
   "size": "중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "1천만원 초반에 넓은 SUV를 삽니다.",
   "feature": "2014년 3세대 출시, 2017년 더 뉴 쏘렌토로 바뀌었습니다. 2.0 디젤, 2.2 디젤.",
   "pros": [
    "공간이 넓습니다",
    "짐을 많이 실어도 디젤이 힘 있게 끕니다"
   ],
   "cons": [
    "주행거리 13만km 안팎입니다",
    "디젤 소음과 진동이 있습니다"
   ],
   "price": {
    "p25": 919,
    "p50": 1100,
    "p75": 1350,
    "new": 3240
   },
   "km": 130980,
   "yr": [
    2015,
    2019
   ],
   "stat": {
    "encar": 2340,
    "kb": 1888,
    "vpd": 12.12,
    "subs": 5,
    "pop": 64
   },
   "photo": {
    "src": "assets/cars/UM.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2017_Kia_Sorento_EX_Turbo_AWD_in_Sparkling_Silver_Metallic,_Front_Right,_05-22-2022.jpg",
    "by": "Elise240SX",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "HHElRPkGG_s",
     "t": "no.1 아빠차 쏘렌토의 고질병",
     "ch": "정비딜러 영범이",
     "v": 294704
    },
    {
     "id": "8EpX5EADyVk",
     "t": "\"😁하체까지 깔끔한 #더뉴쏘렌토 \" 우주에서 가장 저렴한 금액에 판매중인데, 옵션도 괜찮은데요? I #패밀리카 #쏘렌토중고",
     "ch": "중고차는 차덕근",
     "v": 133719
    },
    {
     "id": "dzvYGmG69iQ",
     "t": "쏘렌토 중고차 이 영상 보기 전 사지 마세요!",
     "ch": "정비딜러 영범이",
     "v": 122108
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "기아",
     "g": "쏘렌토",
     "m": [
      "올 뉴 쏘렌토",
      "더 뉴 쏘렌토"
     ]
    },
    "kb": {
     "mk": "102",
     "cl": "1152",
     "car": [
      "2898",
      "2506"
     ]
    },
    "kcar": "더 뉴 쏘렌토",
    "hey": [
     "2oV0gK",
     "peqowM",
     "QpVeVo"
    ],
    "hc": ""
   }
  },
  {
   "key": "MX5",
   "model": "santafe",
   "name": "현대 싼타페",
   "gen": "싼타페 5세대 (MX5)",
   "years": "2023~현재",
   "size": "중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "각진 모양에 트렁크가 넓어 캠핑과 차박에 좋습니다.",
   "feature": "2023년 5세대 출시. 2.5 터보, 1.6 터보 하이브리드.",
   "pros": [
    "트렁크가 동급에서 가장 넓은 편입니다",
    "하이브리드 연비가 좋습니다",
    "제조사 보증이 남은 매물이 많습니다"
   ],
   "cons": [
    "3,500만원 안팎으로 비쌉니다",
    "디자인 호불호가 큽니다"
   ],
   "price": {
    "p25": 3290,
    "p50": 3590,
    "p75": 3820,
    "new": 4373
   },
   "km": 31969,
   "yr": [
    2023,
    2025
   ],
   "stat": {
    "encar": 1136,
    "kb": 546,
    "vpd": 15.57,
    "subs": 5,
    "pop": 59
   },
   "photo": {
    "src": "assets/cars/MX5.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2024_Hyundai_Santa_Fe_(MX5)_IMG_5295.jpg",
    "by": "Alexander Migl",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "mwJQVWccyJU",
     "t": "신형 싼타페를 실제로 타보면!!!",
     "ch": "모트라인 MOTline",
     "v": 1100800
    },
    {
     "id": "UmbVLnSI4as",
     "t": "현대 신형 싼타페 최초 시승기...쏘렌토와 비교해보니! - 시승차: 2.5T 2WD 풀옵션 가격 4833만원",
     "ch": "김한용의 MOCAR",
     "v": 940929
    },
    {
     "id": "3eCJ6tcU_LA",
     "t": "1180만원 더 비싸다! 싼타페 '깡통' VS '풀옵' 비교해 봤습니다. 후회 안하실려면 무조건 000로 사세요",
     "ch": "우파푸른하늘Woopa TV",
     "v": 730507
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "싼타페",
     "m": [
      "싼타페 (MX5)"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1121",
     "car": [
      "3354",
      "3355"
     ]
    },
    "kcar": "싼타페 MX5",
    "hey": [
     "xoKegB",
     "zeXDJe",
     "3rA6a4"
    ],
    "hc": "싼타페"
   }
  },
  {
   "key": "TM",
   "model": "santafe",
   "name": "현대 싼타페",
   "gen": "싼타페 4세대 (TM)",
   "years": "2018~2023",
   "size": "중형 SUV",
   "origin": "국내",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "2천만원 안팎에 오래 검증된 중형 SUV를 삽니다.",
   "feature": "2018년 4세대 출시, 2020년 더 뉴 싼타페로 바뀌었습니다. 2.0 디젤, 2.2 디젤, 2.5 터보, 하이브리드.",
   "pros": [
    "공간이 넉넉합니다",
    "매물이 많습니다"
   ],
   "cons": [
    "디젤 매물이 많습니다",
    "부분변경 전후 값 차이가 큽니다"
   ],
   "price": {
    "p25": 1620,
    "p50": 1900,
    "p75": 2190,
    "new": 3596
   },
   "km": 91303,
   "yr": [
    2018,
    2022
   ],
   "stat": {
    "encar": 2543,
    "kb": 1848,
    "vpd": 10.14,
    "subs": 2,
    "pop": 53
   },
   "photo": {
    "src": "assets/cars/TM.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Santa_Fe_(TM)_PHEV_FL_1X7A7084.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "aDJhhswl5nM",
     "t": "우리나라에서 가장 많이 팔리는 SUV! 현대차 신형 싼타페 TM(SANTA FE 2.0D HTRAC) 단박 시승기...'달라진건 의외의 부분?'",
     "ch": "모터그래프",
     "v": 1070468
    },
    {
     "id": "VSQSeBDHl9U",
     "t": "현대차 신형 싼타페 시승기...대기업 걱정이 제일 쓸데 없구나!",
     "ch": "김한용의 MOCAR",
     "v": 795004
    },
    {
     "id": "QahT95LlN8c",
     "t": "현대 신형 싼타페TM 2.0T 가솔린 5인승 시승기(2019 Hyundai Santa Fe 2.0T Test Drive) - 2018.03.15",
     "ch": "한상기 오토프레스 Han Sang Ki",
     "v": 722143
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "현대",
     "g": "싼타페",
     "m": [
      "싼타페 TM",
      "더 뉴 싼타페"
     ]
    },
    "kb": {
     "mk": "101",
     "cl": "1121",
     "car": [
      "3099",
      "3196",
      "2918"
     ]
    },
    "kcar": "싼타페 TM",
    "hey": [
     "xoKegB",
     "zeXDJe",
     "Y4Aaa4"
    ],
    "hc": ""
   }
  },
  {
   "key": "RG3",
   "model": "g80",
   "name": "제네시스 G80",
   "gen": "G80 2세대 (RG3)",
   "years": "2020~현재",
   "size": "준대형 고급 세단",
   "origin": "국내",
   "ages": [
    "40대 이상"
   ],
   "stars": 4,
   "why": "신차보다 40% 가까이 싸게 사는 국산 고급 세단입니다.",
   "feature": "2020년 2세대 출시, 2024년 부분변경. 2.5 터보, 3.5 터보, 전기 모델.",
   "pros": [
    "조용하고 고급스럽습니다",
    "값이 신차보다 크게 내려가 있습니다",
    "조회수가 높아 되팔 때도 찾는 사람이 많습니다"
   ],
   "cons": [
    "보험료, 자동차세, 타이어값이 비쌉니다",
    "학교 주차장에서 큰 차체가 부담됩니다"
   ],
   "price": {
    "p25": 2790,
    "p50": 3480,
    "p75": 4390,
    "new": 5899
   },
   "km": 65095,
   "yr": [
    2020,
    2025
   ],
   "stat": {
    "encar": 2881,
    "kb": 1684,
    "vpd": 31.81,
    "subs": 6,
    "pop": 68
   },
   "photo": {
    "src": "assets/cars/RG3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2021_Genesis_G80_(United_States)_front_view_02.png",
    "by": "Gold Pony",
    "lic": "CC BY 3.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "BrTGWG3IIzc",
     "t": "신형 제네시스 G80 시승기...시승차 가격 8270만원? 장점과 단점!",
     "ch": "김한용의 MOCAR",
     "v": 1412661
    },
    {
     "id": "NcUrqkgy0F0",
     "t": "제네시스 신형 G80 시승기, 놀랍네요 [윤성로 리뷰]",
     "ch": "모트라인 MOTline",
     "v": 842605
    },
    {
     "id": "2cdicBuZ-QU",
     "t": "\"G80 사기전에 꼭 보세요\" 우파가 1년 넘게 소유한 G80 실제 오너 입장에서 팩트로 이야기 해보겠습니다",
     "ch": "우파푸른하늘Woopa TV",
     "v": 744917
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "제네시스",
     "g": "G80",
     "m": [
      "G80 (RG3)"
     ]
    },
    "kb": {
     "mk": "189",
     "cl": "2684",
     "car": [
      "3077"
     ]
    },
    "kcar": "G80 RG3",
    "hey": [
     "vgm7Do",
     "zMbV3M",
     "23r7Vo"
    ],
    "hc": "G80"
   }
  },
  {
   "key": "DH",
   "model": "g80",
   "name": "제네시스 G80",
   "gen": "G80 1세대 (DH)",
   "years": "2016~2020",
   "size": "준대형 고급 세단",
   "origin": "국내",
   "ages": [
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "1,400만원대 고급 세단. 유지비는 대형차 그대로 듭니다.",
   "feature": "2016년 제네시스 G80으로 이름을 바꿨습니다. 3.3과 3.8 가솔린, 2.2 디젤.",
   "pros": [
    "승차감이 좋습니다",
    "값이 많이 내려왔습니다"
   ],
   "cons": [
    "연비가 리터당 8~9km로 낮습니다",
    "수리비가 비쌉니다"
   ],
   "price": {
    "p25": 1200,
    "p50": 1399,
    "p75": 1620,
    "new": 5760
   },
   "km": 126180,
   "yr": [
    2016,
    2019
   ],
   "stat": {
    "encar": 1722,
    "kb": 1295,
    "vpd": 15.08,
    "subs": 4,
    "pop": 59
   },
   "photo": {
    "src": "assets/cars/DH.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Genesis_G80_Diesel_Front-Side.jpg",
    "by": "Ki hoon",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "j9tB9ow55Eg",
     "t": "우리나라에서 제일 싼 G80 샀습니다.. (아반떼 가격)",
     "ch": "모트라인 MOTline",
     "v": 317173
    },
    {
     "id": "owM0U5CjQlw",
     "t": "사람들이 제네시스DH 를 사는 이유",
     "ch": "중고차부싼카",
     "v": 241405
    },
    {
     "id": "dDMS7wLQwN8",
     "t": "제네시스 DH 14,000km타고 느낀 장단점은? [차주인터뷰]",
     "ch": "한기사 중고차",
     "v": 229367
    }
   ],
   "links": {
    "encar": {
     "t": "Y",
     "mk": "제네시스",
     "g": "G80",
     "m": [
      "G80"
     ]
    },
    "kb": {
     "mk": "189",
     "cl": "2684",
     "car": [
      "2849",
      "2850"
     ]
    },
    "kcar": "G80",
    "hey": [
     "vgm7Do",
     "zMbV3M",
     ""
    ],
    "hc": ""
   }
  },
  {
   "key": "W214",
   "model": "eclass",
   "name": "벤츠 E-클래스",
   "gen": "E-클래스 6세대 (W214)",
   "years": "2024~현재",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "신차보다 30% 싸지만 6천만원대라 교사 연봉으로는 부담이 큽니다.",
   "feature": "2024년 6세대 출시. E200, E300, E220d. 큰 화면이 이어진 실내.",
   "pros": [
    "최신 실내와 주행 보조를 갖췄습니다",
    "출시 2년 안이라 제조사 보증이 남아 있습니다"
   ],
   "cons": [
    "6천만원대입니다",
    "보험료와 수리비가 국산차보다 훨씬 비쌉니다"
   ],
   "price": {
    "p25": 5650,
    "p50": 6290,
    "p75": 7390,
    "new": 8990
   },
   "km": 9889,
   "yr": [
    2024,
    2026
   ],
   "stat": {
    "encar": 949,
    "kb": 395,
    "vpd": 24.53,
    "subs": 4,
    "pop": 54
   },
   "photo": {
    "src": "assets/cars/W214.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Mercedes-AMG_W214_53_Hybrid_IMG_1292.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "3qRZ26wcEt8",
     "t": "벤츠 신형 E클래스 최초 시승기...돌비 애트모스 사운드 미쳤다!",
     "ch": "김한용의 MOCAR",
     "v": 629000
    },
    {
     "id": "2QQfmHbPTPQ",
     "t": "5시리즈보다 좋냐고?ㅋㅋ [2024 벤츠E300, 윤성로 시승기]",
     "ch": "모트라인 MOTline",
     "v": 370912
    },
    {
     "id": "fqGxwd0C_QU",
     "t": "토탈 밸런스는 5시리즈보다 좋다 | 벤츠 E300 4MATIC AMG Line 리뷰",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 343410
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "벤츠",
     "g": "E-클래스",
     "m": [
      "E-클래스 W214"
     ]
    },
    "kb": {
     "mk": "108",
     "cl": "1924",
     "car": [
      "3387"
     ]
    },
    "kcar": "E-클래스 W214",
    "hey": [
     "lgBNgw",
     "JyVLZk",
     "3gONB3"
    ],
    "hc": ""
   }
  },
  {
   "key": "W213",
   "model": "eclass",
   "name": "벤츠 E-클래스",
   "gen": "E-클래스 5세대 (W213)",
   "years": "2016~2023",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "40대 이상"
   ],
   "stars": 4,
   "why": "수입 중고 매물 1위. 2천만원대 후반부터 삽니다.",
   "feature": "2016년 5세대 출시, 2020년 부분변경. E200, E250, E300, E220d.",
   "pros": [
    "매물이 가장 많아 고르기 쉽습니다",
    "신차보다 값이 크게 내려갔습니다"
   ],
   "cons": [
    "보증이 끝난 매물은 수리비가 국산차의 몇 배입니다",
    "보험료가 비쌉니다"
   ],
   "price": {
    "p25": 2180,
    "p50": 2890,
    "p75": 3630,
    "new": 8080
   },
   "km": 87241,
   "yr": [
    2017,
    2022
   ],
   "stat": {
    "encar": 3136,
    "kb": 1923,
    "vpd": 28.88,
    "subs": 7,
    "pop": 72
   },
   "photo": {
    "src": "assets/cars/W213.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W213_Facelift_IMG_5257.jpg",
    "by": "Alexander Migl",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "vIPqeJkzSZY",
     "t": "6300만원짜리 벤츠 E250 시승기, G80보다 좋을까요?",
     "ch": "모트라인 MOTline",
     "v": 1076586
    },
    {
     "id": "VbIGBSEbqLo",
     "t": "5년탄 벤츠 E300, 이게 차냐???",
     "ch": "모트라인 MOTline",
     "v": 657818
    },
    {
     "id": "i1IzCpewFLM",
     "t": "신형 벤츠 E클래스 시승기!…다 갖추고도 가격 6550만원부터!",
     "ch": "김한용의 MOCAR",
     "v": 647631
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "벤츠",
     "g": "E-클래스",
     "m": [
      "E-클래스 W213"
     ]
    },
    "kb": {
     "mk": "108",
     "cl": "1924",
     "car": [
      "2806"
     ]
    },
    "kcar": "E-클래스 W213",
    "hey": [
     "lgBNgw",
     "JyVLZk",
     "B4y02p"
    ],
    "hc": ""
   }
  },
  {
   "key": "G60",
   "model": "bmw5",
   "name": "BMW 5시리즈",
   "gen": "5시리즈 8세대 (G60)",
   "years": "2023~현재",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "최신 5시리즈지만 6천만원대라 교사 연봉으로는 부담이 큽니다.",
   "feature": "2023년 8세대 출시. 520i, 530i, 전기차 i5.",
   "pros": [
    "최신 사양을 갖췄습니다",
    "제조사 보증이 남아 있습니다"
   ],
   "cons": [
    "6천만원대입니다",
    "보험료와 수리비가 비쌉니다"
   ],
   "price": {
    "p25": 5690,
    "p50": 6350,
    "p75": 7030,
    "new": 8140
   },
   "km": 10835,
   "yr": [
    2024,
    2026
   ],
   "stat": {
    "encar": 1438,
    "kb": 564,
    "vpd": 24.82,
    "subs": 2,
    "pop": 49
   },
   "photo": {
    "src": "assets/cars/G60.webp",
    "page": "https://commons.wikimedia.org/wiki/File:BMW_G60_520i_1X7A2443.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "LQlTSlc_51w",
     "t": "BMW 5시리즈에 대한 환상 [2024 530i, 윤성로 시승기]",
     "ch": "모트라인 MOTline",
     "v": 637174
    },
    {
     "id": "4ruencoMVAg",
     "t": "[리뷰] 2024 BMW 5시리즈 (530i xDrive) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 356683
    },
    {
     "id": "oNyvZBlIccM",
     "t": "하루에 30대 팔린다는 25년형 BMW 520i 뭐가 달라졌을까.?!",
     "ch": "우파푸른하늘Woopa TV",
     "v": 341871
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "BMW",
     "g": "5시리즈",
     "m": [
      "5시리즈 (G60)"
     ]
    },
    "kb": {
     "mk": "107",
     "cl": "1904",
     "car": [
      "3372"
     ]
    },
    "kcar": "5시리즈 G60",
    "hey": [
     "0W5AWm",
     "aMKrwk",
     "o2QMk3"
    ],
    "hc": ""
   }
  },
  {
   "key": "G30",
   "model": "bmw5",
   "name": "BMW 5시리즈",
   "gen": "5시리즈 7세대 (G30)",
   "years": "2017~2023",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "조회수와 찜이 수입 중고 가운데 손꼽힙니다. 운전 재미와 실내를 2천만원대에 누립니다.",
   "feature": "2017년 7세대 출시, 2020년 부분변경. 520i, 520d, 530i, 530e.",
   "pros": [
    "주행 감각이 좋습니다",
    "관심이 많아 되팔기 쉽습니다"
   ],
   "cons": [
    "디젤 매물은 연식이 오래됐습니다",
    "보증이 끝난 매물은 수리비가 큽니다"
   ],
   "price": {
    "p25": 2150,
    "p50": 2650,
    "p75": 3420,
    "new": 7460
   },
   "km": 85113,
   "yr": [
    2017,
    2023
   ],
   "stat": {
    "encar": 2154,
    "kb": 1361,
    "vpd": 44.03,
    "subs": 14,
    "pop": 95
   },
   "photo": {
    "src": "assets/cars/G30.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2018_BMW_520d_xDrive_M_Sport_Automatic_2.0_Front.jpg",
    "by": "Vauxford",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "aOkXqajJr-0",
     "t": "2000만원대 최고의 중고차 520d 나는 이렇게 샀다 | BMW G30 520d 럭셔리 중고차 리뷰",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 431844
    },
    {
     "id": "40ogNkwaF1o",
     "t": "가성비킹 중고 5시리즈 사고, 기뻐 미쳐 3달 만에 9,000km 뛰고 느낀 점",
     "ch": "김대리 또 뭘 산거야",
     "v": 779860
    },
    {
     "id": "UXpIc_OaNxA",
     "t": "BMW 5시리즈 중고차 사도 될까?",
     "ch": "정비딜러 영범이",
     "v": 234196
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "BMW",
     "g": "5시리즈",
     "m": [
      "5시리즈 (G30)"
     ]
    },
    "kb": {
     "mk": "107",
     "cl": "1904",
     "car": [
      "2865"
     ]
    },
    "kcar": "5시리즈 G30",
    "hey": [
     "0W5AWm",
     "aMKrwk",
     "23ryQ4"
    ],
    "hc": ""
   }
  },
  {
   "key": "G20",
   "model": "bmw3",
   "name": "BMW 3시리즈",
   "gen": "3시리즈 7세대 (G20)",
   "years": "2019~현재",
   "size": "수입 중형 세단",
   "origin": "해외",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "매물 1대당 하루 조회수가 가장 높은 수입 중고입니다. 수입차 입문용으로 인기가 많습니다.",
   "feature": "2019년 7세대 출시, 2022년 부분변경. 320i, 320d, 330i.",
   "pros": [
    "운전이 재미있습니다",
    "수입 브랜드 입문 가격대입니다"
   ],
   "cons": [
    "뒷좌석이 좁습니다",
    "보험료와 수리비가 국산차보다 비쌉니다"
   ],
   "price": {
    "p25": 2790,
    "p50": 3920,
    "p75": 4500,
    "new": 5930
   },
   "km": 36924,
   "yr": [
    2019,
    2025
   ],
   "stat": {
    "encar": 1078,
    "kb": 547,
    "vpd": 53.38,
    "subs": 10,
    "pop": 77
   },
   "photo": {
    "src": "assets/cars/G20.webp",
    "page": "https://commons.wikimedia.org/wiki/File:BMW_G20_(2022)_IMG_7316.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "m0rfbMByUMg",
     "t": "BMW 320d 2019 시승기 4K (UHD)",
     "ch": "오토뷰(AutoView)",
     "v": 396438
    },
    {
     "id": "mGG2928RShg",
     "t": "[리뷰] BMW 320i LCI (G20 페이스리프트) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 383022
    },
    {
     "id": "DJESM4LKVPc",
     "t": "왕의 귀환! BMW 320D | BMW G20 320D 리뷰 1부",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 354842
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "BMW",
     "g": "3시리즈",
     "m": [
      "3시리즈 (G20)"
     ]
    },
    "kb": {
     "mk": "107",
     "cl": "1903",
     "car": [
      "2989"
     ]
    },
    "kcar": "3시리즈 G20",
    "hey": [
     "0W5AWm",
     "1yRRry",
     "wo2qG3"
    ],
    "hc": ""
   }
  },
  {
   "key": "F30",
   "model": "bmw3",
   "name": "BMW 3시리즈",
   "gen": "3시리즈 6세대 (F30)",
   "years": "2012~2019",
   "size": "수입 중형 세단",
   "origin": "해외",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 3,
   "why": "1,200만원대 수입차지만 노후 수리비를 각오해야 합니다.",
   "feature": "2012년 6세대 출시, 2015년 부분변경. 320d가 주력입니다.",
   "pros": [
    "싼 값에 수입차를 탑니다",
    "디젤 연비가 좋습니다"
   ],
   "cons": [
    "주행거리 12만km 안팎입니다",
    "누유 같은 노후 수리가 잦습니다"
   ],
   "price": {
    "p25": 920,
    "p50": 1200,
    "p75": 1499,
    "new": 5440
   },
   "km": 120223,
   "yr": [
    2013,
    2018
   ],
   "stat": {
    "encar": 552,
    "kb": 426,
    "vpd": 39.26,
    "subs": 10,
    "pop": 74
   },
   "photo": {
    "src": "assets/cars/F30.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2018_BMW_3-Series_320d_Sport_(F30)_-_2.0_(160PS)_diesel_automatic_-_2025-07-08,_front_right.jpg",
    "by": "DieselFordMondeo",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "o9by36MToAE",
     "t": "1200만원의 행복 만족도 최상 | BMW F30 320d 리뷰",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 171897
    },
    {
     "id": "HC6rvLoqmR4",
     "t": "중고 3시리즈(F30)의 유지비는 얼마나 들까? 320i와 320d의 유지비를 비교해봤습니다 🤔",
     "ch": "카닥TV [카다기]",
     "v": 123442
    },
    {
     "id": "M9IIdf2fewI",
     "t": "10분컷 중고차, bmw 320d f30 중고 고질병 리뷰",
     "ch": "김사장쌀롱",
     "v": 112684
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "BMW",
     "g": "3시리즈",
     "m": [
      "3시리즈 (F30)"
     ]
    },
    "kb": {
     "mk": "107",
     "cl": "1903",
     "car": [
      "1508"
     ]
    },
    "kcar": "3시리즈 F30",
    "hey": [
     "0W5AWm",
     "1yRRry",
     "wo2A13"
    ],
    "hc": ""
   }
  },
  {
   "key": "W206",
   "model": "cclass",
   "name": "벤츠 C-클래스",
   "gen": "C-클래스 5세대 (W206)",
   "years": "2021~현재",
   "size": "수입 중형 세단",
   "origin": "해외",
   "ages": [
    "30대"
   ],
   "stars": 3.5,
   "why": "4천만원대 벤츠. 신차보다 35% 안팎 쌉니다.",
   "feature": "2021년 5세대 출시. C200, C300.",
   "pros": [
    "S-클래스를 닮은 실내입니다",
    "보증이 남은 매물이 많습니다"
   ],
   "cons": [
    "4천만원대입니다",
    "뒷좌석이 좁습니다"
   ],
   "price": {
    "p25": 3770,
    "p50": 4100,
    "p75": 4390,
    "new": 6430
   },
   "km": 23023,
   "yr": [
    2022,
    2026
   ],
   "stat": {
    "encar": 289,
    "kb": 135,
    "vpd": 26.06,
    "subs": 8,
    "pop": 62
   },
   "photo": {
    "src": "assets/cars/W206.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Mercedes-AMG_C_63_(W206)_IMG_0305.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "It36WNexetg",
     "t": "벤츠, 찢었다!!! [W206 C300 AMG, 윤성로 리뷰]",
     "ch": "모트라인 MOTline",
     "v": 444952
    },
    {
     "id": "EuW-ONQAqrg",
     "t": "벤츠 신형 C클래스 시승기!...진짜 베이비S클래스? 가격 6890만원짜리 C클래스라니!",
     "ch": "김한용의 MOCAR",
     "v": 405937
    },
    {
     "id": "jaC4Vk12I_s",
     "t": "S-클래스급 변화, BMW를 압도한 완성도 ... 벤츠 C200 4매틱 리뷰 / 오토뷰 2022",
     "ch": "오토뷰(AutoView)",
     "v": 150603
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "벤츠",
     "g": "C-클래스",
     "m": [
      "C-클래스 W206"
     ]
    },
    "kb": {
     "mk": "108",
     "cl": "1920",
     "car": [
      "3257"
     ]
    },
    "kcar": "C-클래스 W206",
    "hey": [
     "lgBNgw",
     "2k3qwy",
     "mowNj3"
    ],
    "hc": ""
   }
  },
  {
   "key": "W205",
   "model": "cclass",
   "name": "벤츠 C-클래스",
   "gen": "C-클래스 4세대 (W205)",
   "years": "2014~2021",
   "size": "수입 중형 세단",
   "origin": "해외",
   "ages": [
    "30대"
   ],
   "stars": 3.5,
   "why": "1,700만원대 벤츠. 보증이 끝난 뒤 수리비가 관건입니다.",
   "feature": "2014년 4세대 출시, 2018년 부분변경. C200, C220d.",
   "pros": [
    "싼 값에 벤츠를 탑니다",
    "디자인이 아직 세련됐습니다"
   ],
   "cons": [
    "보증이 끝난 매물은 수리비가 큽니다",
    "뒷좌석이 좁습니다"
   ],
   "price": {
    "p25": 1490,
    "p50": 1740,
    "p75": 2330,
    "new": 6060
   },
   "km": 84175,
   "yr": [
    2015,
    2022
   ],
   "stat": {
    "encar": 914,
    "kb": 607,
    "vpd": 16,
    "subs": 2,
    "pop": 48
   },
   "photo": {
    "src": "assets/cars/W205.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2015_Mercedes-Benz_C_200_(W_205)_sedan_(2015-07-06)_01.jpg",
    "by": "OSX",
    "lic": "Public domain",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "PjYk6ubeXbE",
     "t": "\"벤츠라고 쫄지마 괜찮아~\" 중고 벤츠C클래스는 월급쟁이도 가능하다? 매월 유지비 풀할부 선납금 30% 50% 싹다 알아봅세~",
     "ch": "차알못",
     "v": 176753
    },
    {
     "id": "-6yycBJLc-c",
     "t": "32살 쳐먹고 중고 벤츠 사고나서 느낀점 w205 C클래스 중고차",
     "ch": "김누킴",
     "v": 156821
    },
    {
     "id": "3l_7L2RVYbQ",
     "t": "중고 벤츠 c클래스 엔카에서 사고 후회할뻔 한 이유",
     "ch": "김누킴",
     "v": 146714
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "벤츠",
     "g": "C-클래스",
     "m": [
      "C-클래스 W205"
     ]
    },
    "kb": {
     "mk": "108",
     "cl": "1920",
     "car": [
      "2522"
     ]
    },
    "kcar": "C-클래스 W205",
    "hey": [
     "lgBNgw",
     "2k3qwy",
     "moOJQ3"
    ],
    "hc": ""
   }
  },
  {
   "key": "F66",
   "model": "mini",
   "name": "미니 쿠퍼",
   "gen": "쿠퍼 4세대",
   "years": "2024~현재",
   "size": "수입 소형 해치백",
   "origin": "해외",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 3.5,
   "why": "새 디자인의 미니. 3천만원대라 첫 차로는 무겁습니다.",
   "feature": "2024년 4세대 출시. 쿠퍼 C, 쿠퍼 S. 가운데 둥근 화면.",
   "pros": [
    "디자인이 독특합니다",
    "보증이 남아 있습니다"
   ],
   "cons": [
    "차 크기에 비해 비쌉니다",
    "트렁크가 좁습니다"
   ],
   "price": {
    "p25": 2990,
    "p50": 3250,
    "p75": 3455,
    "new": 4750
   },
   "km": 7680,
   "yr": [
    2024,
    2026
   ],
   "stat": {
    "encar": 204,
    "kb": 76,
    "vpd": 21.89,
    "subs": 4,
    "pop": 45
   },
   "photo": {
    "src": "assets/cars/F66.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Mini_Hatch_(F66)_IMG_8765.jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "_ObrDym23uk",
     "t": "더 이상 미니가 아니다.",
     "ch": "모트라인 MOTline",
     "v": 221706
    },
    {
     "id": "STG0xVyLhYM",
     "t": "미니 쿠퍼 C 시승기, 이 차가 정말로 한달 6만원대?",
     "ch": "김한용의 MOCAR",
     "v": 207048
    },
    {
     "id": "-LHnEihIc-4",
     "t": "동그라미 파워! 신형 미니 쿠퍼 시승기!",
     "ch": "김한용의 MOCAR",
     "v": 174547
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "미니",
     "g": "쿠퍼",
     "m": [
      "쿠퍼 C 4세대",
      "쿠퍼 S 4세대"
     ]
    },
    "kb": {
     "mk": "160",
     "cl": "1985",
     "car": [
      "3416"
     ]
    },
    "kcar": "쿠퍼 4세대",
    "hey": [
     "Rg07Z0",
     "XMwzXk",
     "4LrrOo"
    ],
    "hc": ""
   }
  },
  {
   "key": "F56",
   "model": "mini",
   "name": "미니 쿠퍼",
   "gen": "쿠퍼 3세대 (F56)",
   "years": "2014~2023",
   "size": "수입 소형 해치백",
   "origin": "해외",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 3.5,
   "why": "개성 있는 수입 소형차를 1,900만원 안팎에 삽니다.",
   "feature": "2014년 3세대 출시. 3도어와 5도어, 쿠퍼와 쿠퍼 S.",
   "pros": [
    "운전이 재미있습니다",
    "되팔 때 찾는 사람이 꾸준합니다"
   ],
   "cons": [
    "승차감이 단단합니다",
    "뒷좌석과 트렁크가 작습니다"
   ],
   "price": {
    "p25": 1300,
    "p50": 1890,
    "p75": 2290,
    "new": 3930
   },
   "km": 39510,
   "yr": [
    2013,
    2023
   ],
   "stat": {
    "encar": 922,
    "kb": 497,
    "vpd": 9.02,
    "subs": 5,
    "pop": 58
   },
   "photo": {
    "src": "assets/cars/F56.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2018_Mini_Cooper_S_Seven_2.0_Front.jpg",
    "by": "Vauxford",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "8yaaYPGUYIE",
     "t": "\"2천만원대 혼자 타고다닐 차 뭐 없어??\" 아반떼 말고 미니쿠퍼S ㄱㄱㄱ",
     "ch": "모트라인 MOTline",
     "v": 791996
    },
    {
     "id": "C9_snkKX0SY",
     "t": "미니쿠퍼는 뭐 사야 돼요? 미니 구매 전 무조건 봐야 되는 영상! 가장 쉬운 구매가이드",
     "ch": "고니TV",
     "v": 293544
    },
    {
     "id": "amaW8btyRek",
     "t": "중고차로 미니를 절대 사면 안되는 이유",
     "ch": "제이특공대 : 수입차 정비 전문",
     "v": 236644
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "미니",
     "g": "쿠퍼",
     "m": [
      "쿠퍼",
      "쿠퍼 S"
     ]
    },
    "kb": {
     "mk": "160",
     "cl": "1985",
     "car": [
      "2543",
      "2544"
     ]
    },
    "kcar": "미니 쿠퍼",
    "hey": [
     "Rg07Z0",
     "XMwzXk",
     "Z40al3"
    ],
    "hc": ""
   }
  },
  {
   "key": "C8",
   "model": "a6",
   "name": "아우디 A6",
   "gen": "A6 8세대 (C8)",
   "years": "2019~2025",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "신차보다 60% 가까이 싸서 값 대비 사양은 좋지만, 되팔 때도 그만큼 빠집니다.",
   "feature": "2019년 8세대 출시. 45 TFSI, 40 TDI.",
   "pros": [
    "값 대비 사양이 좋은 수입 준대형입니다",
    "조용하고 넓습니다"
   ],
   "cons": [
    "값이 빨리 떨어집니다",
    "수리비가 비쌉니다"
   ],
   "price": {
    "p25": 2639,
    "p50": 2890,
    "p75": 3470,
    "new": 7056
   },
   "km": 61372,
   "yr": [
    2020,
    2023
   ],
   "stat": {
    "encar": 738,
    "kb": 463,
    "vpd": 37.01,
    "subs": 7,
    "pop": 64
   },
   "photo": {
    "src": "assets/cars/C8.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2019_Audi_A6_55_TFSI_Quattro_Progressiv_Quattro_S-Line_in_Daytona_Grey_Pearlescent,_Front_Left,_11-25-2022.jpg",
    "by": "Elise240SX",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "7RU6smE2bzE",
     "t": "무려 1200만원 할인에는 이유가 있다 [아우디 A6 40tdi, 윤성로 리뷰]",
     "ch": "모트라인 MOTline",
     "v": 683789
    },
    {
     "id": "b3x32NtuuLw",
     "t": "[시승기] 아우디 A6 45 TFSI 콰트로 / 오토뷰 4K (UHD)",
     "ch": "오토뷰(AutoView)",
     "v": 344212
    },
    {
     "id": "iqkl2PlSlak",
     "t": "아우디 A6 45TFSI 콰트로 프리미엄 시승기ㅣ5시리즈와 E클래스 비교해서 욕만 먹길래 타봤더니 아니던데요?",
     "ch": "블라인드_Car Story",
     "v": 255305
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "아우디",
     "g": "A6",
     "m": [
      "A6 (C8)"
     ]
    },
    "kb": {
     "mk": "109",
     "cl": "1944",
     "car": [
      "3038"
     ]
    },
    "kcar": "아우디 A6",
    "hey": [
     "RgMAjg",
     "1yOgby",
     "mow0Ep"
    ],
    "hc": ""
   }
  },
  {
   "key": "C7",
   "model": "a6",
   "name": "아우디 A6",
   "gen": "A6 7세대 (C7)",
   "years": "2011~2018",
   "size": "수입 준대형 세단",
   "origin": "해외",
   "ages": [
    "40대 이상"
   ],
   "stars": 2.5,
   "why": "1천만원대 수입 준대형이지만 노후 수리비 부담이 큽니다.",
   "feature": "2011년 7세대 출시. 2.0 TDI가 주력입니다.",
   "pros": [
    "값이 매우 쌉니다",
    "실내가 넓습니다"
   ],
   "cons": [
    "주행거리 13만km 이상 매물이 많습니다",
    "수입 디젤의 노후 수리비가 큽니다"
   ],
   "price": {
    "p25": 790,
    "p50": 1060,
    "p75": 1350,
    "new": 6590
   },
   "km": 135262,
   "yr": [
    2012,
    2018
   ],
   "stat": {
    "encar": 397,
    "kb": 379,
    "vpd": 15.76,
    "subs": 2,
    "pop": 44
   },
   "photo": {
    "src": "assets/cars/C7.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Audi_A6_hybrid_(C7)_front.JPG",
    "by": "Tokumeigakarinoaoshima",
    "lic": "CC0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "PVdXqb-w5kU",
     "t": "중고 아우디 A6사면 사람이 이렇게 됩니다..",
     "ch": "중고차의모든것",
     "v": 168763
    },
    {
     "id": "aUW_jGfbdYI",
     "t": "\"아우디 구매하면 망합니다..카더라통신\" l 생각보다 너무 달라 놀람 ㄷㄷ(A6)",
     "ch": "금아[KeumTube]",
     "v": 417244
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "아우디",
     "g": "A6",
     "m": [
      "뉴 A6"
     ]
    },
    "kb": {
     "mk": "109",
     "cl": "1944",
     "car": [
      "1554"
     ]
    },
    "kcar": "아우디 A6",
    "hey": [
     "RgMAjg",
     "1yOgby",
     "23rYm4"
    ],
    "hc": ""
   }
  },
  {
   "key": "M3",
   "model": "model3",
   "name": "테슬라 모델 3",
   "gen": "모델 3",
   "years": "2019~현재",
   "size": "수입 전기 세단",
   "origin": "해외",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "유지비가 가장 적은 수입차. 3천만원대에 삽니다.",
   "feature": "2019년 국내 출시, 2024년 부분변경(하이랜드). 후륜구동, 롱레인지, 퍼포먼스.",
   "pros": [
    "충전비가 기름값보다 훨씬 쌉니다",
    "소프트웨어 업데이트로 기능이 늘어납니다",
    "가속이 빠릅니다"
   ],
   "cons": [
    "부분변경 전 모델은 승차감이 단단하고 실내가 시끄럽습니다",
    "배터리 상태를 꼭 확인해야 합니다"
   ],
   "price": {
    "p25": 2950,
    "p50": 3490,
    "p75": 4200,
    "new": 6369
   },
   "km": 73776,
   "yr": [
    2020,
    2026
   ],
   "stat": {
    "encar": 851,
    "kb": 439,
    "vpd": 27.26,
    "subs": 9,
    "pop": 72
   },
   "photo": {
    "src": "assets/cars/M3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Tesla_Model_3_(2023)_IMG_9488_(cropped).jpg",
    "by": "Alexander-93",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "OC32O4MLzZU",
     "t": "신형 테슬라 모델3 하이랜드 국내 최초 시승기!...5199~5999만원, LG엔솔 배터리로 주행거리 488km!",
     "ch": "김한용의 MOCAR",
     "v": 778303
    },
    {
     "id": "W5SIJCM7jQ8",
     "t": "모델3 하이랜드를 실제로 타보면!!",
     "ch": "모트라인 MOTline",
     "v": 426113
    },
    {
     "id": "Bfm8yJvW2nM",
     "t": "테슬라 모델3 전액할부 한 달 유지비",
     "ch": "중고차파괴자",
     "v": 411002
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "테슬라",
     "g": "모델 3",
     "m": [
      "모델 3"
     ]
    },
    "kb": {
     "mk": "190",
     "cl": "2725",
     "car": [
      "3399",
      "2977"
     ]
    },
    "kcar": "모델 3",
    "hey": [
     "xozX5g",
     "Xev7lk",
     ""
    ],
    "hc": ""
   }
  },
  {
   "key": "MY",
   "model": "modely",
   "name": "테슬라 모델 Y",
   "gen": "모델 Y",
   "years": "2021~현재",
   "size": "수입 전기 SUV",
   "origin": "해외",
   "ages": [
    "30대"
   ],
   "stars": 4,
   "why": "넓은 전기 SUV. 신차보다 40% 안팎 쌉니다.",
   "feature": "2021년 국내 출시, 2025년 부분변경(주니퍼). 후륜구동, 롱레인지.",
   "pros": [
    "트렁크와 뒷좌석이 넓습니다",
    "충전비가 쌉니다"
   ],
   "cons": [
    "4천만원대입니다",
    "부분변경 전 모델은 승차감이 단단합니다"
   ],
   "price": {
    "p25": 3590,
    "p50": 4570,
    "p75": 5290,
    "new": 7874
   },
   "km": 53841,
   "yr": [
    2021,
    2026
   ],
   "stat": {
    "encar": 1156,
    "kb": 448,
    "vpd": 27.65,
    "subs": 4,
    "pop": 55
   },
   "photo": {
    "src": "assets/cars/MY.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
    "by": "Kevauto",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "PI7V2Aw8V-A",
     "t": "[리뷰] 2026 테슬라 모델Y RWD (주니퍼) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 473738
    },
    {
     "id": "xQL-vpfi9WU",
     "t": "테슬라 모델Y 주니퍼 시승기, 진짜 5299만원이다!...미친 가격, 상품성 폭발!",
     "ch": "김한용의 MOCAR",
     "v": 1479108
    },
    {
     "id": "g49h1NjJKm0",
     "t": "테슬라 모델Y 주니퍼, 10일 타보니...",
     "ch": "mediaAUTO 미디어오토",
     "v": 511245
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "테슬라",
     "g": "모델 Y",
     "m": [
      "모델 Y"
     ]
    },
    "kb": {
     "mk": "190",
     "cl": "2774",
     "car": [
      "3161"
     ]
    },
    "kcar": "모델 Y",
    "hey": [
     "xozX5g",
     "8enPWM",
     ""
    ],
    "hc": ""
   }
  },
  {
   "key": "ES7",
   "model": "es",
   "name": "렉서스 ES300h",
   "gen": "ES300h 7세대",
   "years": "2018~2025",
   "size": "수입 준대형 하이브리드",
   "origin": "해외",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "고장이 적은 하이브리드 고급 세단. 수입차 가운데 유지비가 가장 적은 편입니다.",
   "feature": "2018년 7세대 출시. 2.5 하이브리드.",
   "pros": [
    "연비가 리터당 17km 안팎입니다",
    "잔고장이 적습니다",
    "조용합니다"
   ],
   "cons": [
    "4천만원대입니다",
    "중고 값이 잘 내려가지 않습니다"
   ],
   "price": {
    "p25": 3700,
    "p50": 4490,
    "p75": 5290,
    "new": 6710
   },
   "km": 58536,
   "yr": [
    2018,
    2025
   ],
   "stat": {
    "encar": 356,
    "kb": 179,
    "vpd": 40.06,
    "subs": 11,
    "pop": 74
   },
   "photo": {
    "src": "assets/cars/ES7.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Lexus_ES_300h_AXZH10_US-spec.jpg",
    "by": "Altair78",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "videos": [
    {
     "id": "ULDzY7PK0js",
     "t": "렉서스 ES300h 타보니! 왜들 이 차에 미치는지 알겠다!",
     "ch": "김한용의 MOCAR",
     "v": 259592
    },
    {
     "id": "kGuhTH6tPd8",
     "t": "6000만원대 중형차시장! 렉서스ES 300h와 BMW 520i가 진리 인가? | 렉서스 ES 300h 주행 1부",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 733038
    },
    {
     "id": "0kujQ3aDMW0",
     "t": "G80 살 돈 없어서 산, 단종 직전의 렉서스 ES300h",
     "ch": "모트라인 MOTline",
     "v": 740036
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "렉서스",
     "g": "ES",
     "m": [
      "ES300h 7세대"
     ]
    },
    "kb": {
     "mk": "133",
     "cl": "2126",
     "car": [
      "2951"
     ]
    },
    "kcar": "ES300h",
    "hey": [
     "EW3do3",
     "Dydlzy",
     "x4Jdvo"
    ],
    "hc": ""
   }
  },
  {
   "key": "ES6",
   "model": "es",
   "name": "렉서스 ES300h",
   "gen": "ES300h 6세대",
   "years": "2012~2018",
   "size": "수입 준대형 하이브리드",
   "origin": "해외",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "2천만원 안팎 하이브리드 수입차. 연식이 지나도 튼튼합니다.",
   "feature": "2012년 6세대 출시, 2015년 부분변경. 2.5 하이브리드.",
   "pros": [
    "하이브리드 내구성이 검증됐습니다",
    "연비가 좋습니다"
   ],
   "cons": [
    "주행거리 12만km 안팎입니다",
    "하이브리드 배터리 상태를 확인해야 합니다"
   ],
   "price": {
    "p25": 1850,
    "p50": 1990,
    "p75": 2190,
    "new": 5680
   },
   "km": 118585,
   "yr": [
    2013,
    2018
   ],
   "stat": {
    "encar": 129,
    "kb": 113,
    "vpd": 19,
    "subs": 4,
    "pop": 45
   },
   "photo": {
    "src": "assets/cars/ES6.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Lexus_ES_XV60_Hybrid_facelift_01_China_2016-04-14.jpg",
    "by": "Navigator84",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "videos": [
    {
     "id": "Tfb9hKPF-nM",
     "t": "10년 넘은 렉서스 ES 300h 의 부품가격은 얼마일까?(feat. 하이브리드 배터리)",
     "ch": "차린고비 - 중고차는 가성비다",
     "v": 278978
    },
    {
     "id": "1X9MBJTwWaM",
     "t": "렉서스 ES300H 고질병! 이 영상 보기 전엔 절대 사지마!",
     "ch": "트럭대장",
     "v": 206598
    },
    {
     "id": "SYfK_k-AMfE",
     "t": "중고차 고르기 실전 연습 feat. 렉서스 ES",
     "ch": "닥신TV",
     "v": 179014
    }
   ],
   "links": {
    "encar": {
     "t": "N",
     "mk": "렉서스",
     "g": "ES",
     "m": [
      "뉴 ES300h"
     ]
    },
    "kb": {
     "mk": "133",
     "cl": "2126",
     "car": [
      "2058"
     ]
    },
    "kcar": "ES300h",
    "hey": [
     "EW3do3",
     "Dydlzy",
     "koeAJo"
    ],
    "hc": ""
   }
  }
 ],
 "fresh": [
  {
   "id": "casper",
   "name": "현대 캐스퍼",
   "gen": "더 뉴 캐스퍼",
   "price": 1546,
   "size": "경형 SUV",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "경차 혜택에 SUV의 쓰임새. 홈페이지에서 바로 사서 첫 차 부담이 적습니다.",
   "desc": "광주에서 만드는 경형 SUV입니다. 견적부터 계약까지 캐스퍼 온라인에서 합니다. 1.0 가솔린과 1.0 터보, 전기차인 캐스퍼 일렉트릭이 있습니다.",
   "pros": [
    "취득세 감면 같은 경차 혜택을 받습니다",
    "앞좌석까지 접혀 짐 싣기가 편합니다"
   ],
   "cons": [
    "옵션을 넣으면 2천만원을 넘습니다",
    "뒷좌석이 좁습니다"
   ],
   "photo": {
    "src": "assets/cars/AX1.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Casper_Active_AX1_Atlas_White_(18).jpg",
    "by": "Damian B Oh",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://casper.hyundai.com/vehicles/highlight",
   "videos": [
    {
     "id": "SQBbnIPpQq8",
     "t": "\"1385만원 깡통 캐스퍼\" 생각보다 괜찮네 풀옵 필요없겠는데?",
     "ch": "우파푸른하늘Woopa TV",
     "v": 490703
    },
    {
     "id": "QdA9lGJ97Ek",
     "t": "더 크고 가성비 좋은데 200만 원 싸다고? \"캐스퍼 vs 베뉴\" 직접 비교",
     "ch": "우파푸른하늘Woopa TV",
     "v": 816100
    },
    {
     "id": "4LTU-6uWflM",
     "t": "[리뷰] 2025 현대 캐스퍼 일렉트릭(EV) / 오토뷰 로드테스트 / 시승차제공:현대자동차",
     "ch": "오토뷰(AutoView)",
     "v": 223587
    }
   ],
   "views": 1530390
  },
  {
   "id": "ray",
   "name": "기아 레이",
   "gen": "더 뉴 기아 레이",
   "price": 1480,
   "size": "경차",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4.5,
   "why": "경차 가운데 실내가 가장 넓습니다. 짐이 많은 교사에게 맞습니다.",
   "desc": "천장이 높은 상자 모양 경차입니다. 조수석 쪽 가운데 기둥이 없어 문을 열면 크게 트입니다. 전기차 레이 EV도 있습니다.",
   "pros": [
    "교구와 짐이 잘 실립니다",
    "경차 혜택을 받습니다"
   ],
   "cons": [
    "고속도로에서 힘이 부족합니다",
    "옆바람에 흔들립니다"
   ],
   "photo": {
    "src": "assets/cars/TAM2.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_RAY_TAM_PE2.jpg",
    "by": "Avante2025",
    "lic": "CC BY 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "buy": "https://www.kia.com/kr/vehicles/ray",
   "videos": [
    {
     "id": "rAHsTImxklY",
     "t": "이 차가 기아 레이라고?! 완전히 달라진 22년형 기아 레이 페이스리프트",
     "ch": "우파푸른하늘Woopa TV",
     "v": 232884
    },
    {
     "id": "60OTrJaAYh8",
     "t": "레이가 이렇게 달라지다니! 기아 레이 페이스리프트",
     "ch": "김한용의 MOCAR",
     "v": 250529
    },
    {
     "id": "JvSBJAEvn-I",
     "t": "[리뷰]  2024 기아 레이 EV / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 192364
    }
   ],
   "views": 675777
  },
  {
   "id": "avante",
   "name": "현대 아반떼",
   "gen": "디 올 뉴 아반떼 (CN8)",
   "price": 2398,
   "size": "준중형 세단",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4,
   "why": "2026년 새 세대. 사양이 크게 좋아졌지만 값도 함께 올랐습니다.",
   "desc": "2026년 하반기에 나온 8세대 아반떼입니다. 2.0 가솔린과 하이브리드가 있고, 실내 화면과 주행 보조가 윗급 수준으로 좋아졌습니다.",
   "pros": [
    "실내가 넓고 사양이 좋습니다",
    "하이브리드 연비가 좋습니다"
   ],
   "cons": [
    "계기판 같은 사양이 옵션이라 값이 빨리 오릅니다",
    "나온 지 얼마 안 돼 할인이 적습니다"
   ],
   "photo": {
    "src": "assets/cars/CN8.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Avante_CN8_Development_Mule_(9).jpg",
    "by": "Damian B Oh",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "buy": "https://www.hyundai.com/kr/ko/e/vehicles/the-all-new-avante/intro",
   "videos": [
    {
     "id": "p-fojL1Acdc",
     "t": "[리뷰] 2027 현대 아반떼 2.0 / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 413008
    },
    {
     "id": "8yj1LEjc4Xk",
     "t": "현대 신형 아반떼 시승기! 좋은 점과 아쉬운 점! 3000만원 이내로 고른다면 좋겠네!",
     "ch": "김한용의 MOCAR",
     "v": 653956
    },
    {
     "id": "N4ILcN0xm-E",
     "t": "신형 아반떼 CN8 국내 최초 시승기! \"구형 일주일 타고 넘어오니 느껴지는 충격적인 변화들\" ",
     "ch": "우파푸른하늘Woopa TV",
     "v": 170841
    }
   ],
   "views": 1237805
  },
  {
   "id": "seltos",
   "name": "기아 셀토스",
   "gen": "디 올 뉴 셀토스",
   "price": 2575,
   "size": "소형 SUV",
   "ages": [
    "20대",
    "30대"
   ],
   "stars": 4.5,
   "why": "2026년 새 세대. 스포티지에 가까운 크기에 하이브리드까지, 값 대비 사양이 가장 좋습니다.",
   "desc": "2026년 초에 나온 2세대 셀토스입니다. 1.6 터보와 하이브리드가 있습니다. 차체가 커져 뒷좌석과 트렁크가 넉넉해졌습니다.",
   "pros": [
    "하이브리드를 고를 수 있습니다",
    "시작 가격이 낮습니다"
   ],
   "cons": [
    "하이브리드와 상위 트림은 3천만원을 넘습니다",
    "출고 대기가 길 수 있습니다"
   ],
   "photo": {
    "src": "assets/cars/SP3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Seltos_(SP3)_IMG_7812.jpg",
    "by": "Alexander Migl",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.kia.com/kr/vehicles/seltos",
   "videos": [
    {
     "id": "SINqAmo8-rE",
     "t": "[리뷰] 2026 기아 셀토스 1.6 터보(T-GDI) / 오토뷰 로드테스트 (KIA Seltos roadtest)",
     "ch": "오토뷰(AutoView)",
     "v": 150208
    },
    {
     "id": "q-bA7_D-RcE",
     "t": "\"이건 진짜 예상 밖이다..!!\" 셀토스 풀체인지 가솔린 직접 타봤더니 할말을 잃었습니다",
     "ch": "우파푸른하늘Woopa TV",
     "v": 329654
    },
    {
     "id": "29UKB3_-rOY",
     "t": "신형 셀토스 최초 시승기!...디자인, 성능, 하이브리드까지? 이젠 정말 넘사벽!",
     "ch": "김한용의 MOCAR",
     "v": 117859
    }
   ],
   "views": 597721
  },
  {
   "id": "k5",
   "name": "기아 K5",
   "gen": "더 뉴 K5",
   "price": 2763,
   "size": "중형 세단",
   "ages": [
    "20대",
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "중형 세단을 2천만원대 후반에. 젊은 디자인이 강점입니다.",
   "desc": "2023년 부분변경한 3세대 K5입니다. 2.0 가솔린, 1.6 터보, 하이브리드, LPi가 있습니다.",
   "pros": [
    "디자인이 젊습니다",
    "실내 사양이 좋습니다"
   ],
   "cons": [
    "뒷좌석 머리 공간이 낮습니다",
    "하이브리드는 3천만원대 중반입니다"
   ],
   "photo": {
    "src": "assets/cars/DL3.webp",
    "page": "https://commons.wikimedia.org/wiki/File:20191227_K5_DL3_Front_Side.png",
    "by": "Ki hoon",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "buy": "https://www.kia.com/kr/vehicles/k5",
   "videos": [
    {
     "id": "QURNaqokPfc",
     "t": "[리뷰] 2024 기아 K5 (페이스리프트) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 281287
    },
    {
     "id": "zoSKZabaFRw",
     "t": "기아 신형 K5 1.6T 시승기...도로 달리면 시선집중! 타이어, 엔진은 아쉬워!",
     "ch": "김한용의 MOCAR",
     "v": 501566
    },
    {
     "id": "vilZXxw5y0U",
     "t": "\"2.0 하브 정말 괜찮을까?!\" K5 하이브리드 최초 시승기!! 연비때문에 하브산다고? 사지마세요",
     "ch": "우파푸른하늘Woopa TV",
     "v": 328010
    }
   ],
   "views": 1110863
  },
  {
   "id": "sonata",
   "name": "현대 쏘나타",
   "gen": "쏘나타 디 엣지",
   "price": 2876,
   "size": "중형 세단",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "넓고 조용한 중형 세단. 아반떼와 그랜저 사이에서 값 대비 공간이 가장 좋습니다.",
   "desc": "2023년 부분변경한 8세대 쏘나타입니다. 2.0 가솔린, 1.6 터보, 하이브리드, LPi가 있습니다.",
   "pros": [
    "뒷좌석과 트렁크가 넉넉합니다",
    "고속에서 조용합니다"
   ],
   "cons": [
    "옵션을 넣으면 그랜저 값에 가까워집니다",
    "디자인 호불호가 있습니다"
   ],
   "photo": {
    "src": "assets/cars/DN8.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2020_Hyundai_Sonata_SEL_(Quartz_White),_front_right.jpg",
    "by": "Mr.choppers",
    "lic": "CC BY-SA 3.0",
    "edit": "배경 지움, 번호판 가림, 좌우 반전"
   },
   "buy": "https://www.hyundai.com/kr/ko/e/vehicles/sonata-the-edge/intro",
   "videos": [
    {
     "id": "-LdxFWHftvQ",
     "t": "[리뷰] 2023 쏘나타 디엣지 1.6 터보 / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 588369
    },
    {
     "id": "eVSPmzrtLtI",
     "t": "신형 쏘나타 디 엣지 시승기...날선 디자인, 빠릿빠릿한 성능! 너무한 가격?",
     "ch": "김한용의 MOCAR",
     "v": 1038173
    },
    {
     "id": "_Iti4NndZ0I",
     "t": "아반떼가 3천, 그랜저는 5천… 그 사이 쏘나타가 정답 아닐까?",
     "ch": "우파푸른하늘Woopa TV",
     "v": 359677
    }
   ],
   "views": 1986219
  },
  {
   "id": "sportage",
   "name": "기아 스포티지",
   "gen": "더 뉴 스포티지",
   "price": 2944,
   "size": "준중형 SUV",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "국내 SUV 판매 1위권. 공간, 연비, 되팔 값이 고루 좋습니다.",
   "desc": "2024년 부분변경한 5세대 스포티지입니다. 1.6 터보, 하이브리드, 2.0 디젤, LPi가 있습니다.",
   "pros": [
    "동급에서 실내가 넓은 편입니다",
    "하이브리드 연비가 좋습니다"
   ],
   "cons": [
    "하이브리드는 3천만원대 후반입니다",
    "인기가 많아 할인이 적습니다"
   ],
   "photo": {
    "src": "assets/cars/NQ5.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Sportage_1.6_T-GDI_HEV_2WD_(2022)_(cropped).jpg",
    "by": "Charles",
    "lic": "CC BY 2.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.kia.com/kr/vehicles/sportage",
   "videos": [
    {
     "id": "TwP7POjUhqE",
     "t": "[리뷰] 2025 기아 스포티지 (페이스리프트) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 336745
    },
    {
     "id": "MbFOf5tLTDI",
     "t": "국내 1등! 신형 스포티지 시승기!...시작 가격 2800만원대면 너무 좋은데?",
     "ch": "김한용의 MOCAR",
     "v": 907529
    },
    {
     "id": "hJKkStdHne4",
     "t": "\"국내 1호차 출고!!\" 8단 스포티지 페이스리프트 1.6 가솔린 최초 시승기",
     "ch": "우파푸른하늘Woopa TV",
     "v": 652216
    }
   ],
   "views": 1896490
  },
  {
   "id": "tucson",
   "name": "현대 투싼",
   "gen": "디 올 뉴 투싼 (NX5)",
   "price": 3140,
   "size": "준중형 SUV",
   "ages": [
    "30대"
   ],
   "stars": 4,
   "why": "2026년 가을에 나온 새 세대. 하이브리드 연비와 승차감이 크게 좋아졌습니다.",
   "desc": "2026년 10월에 나온 5세대 투싼입니다. 1.6 터보와 하이브리드가 있습니다.",
   "pros": [
    "하이브리드 연비가 좋습니다",
    "승차감과 정숙성이 좋아졌습니다"
   ],
   "cons": [
    "이전 세대보다 시작 가격이 올랐습니다",
    "나온 지 얼마 안 돼 할인이 적습니다"
   ],
   "photo": {
    "src": "assets/cars/NX5.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2027_Hyundai_The_all-new_TUCSON_(NX5)_blue_South_Korea_Front_end.jpg",
    "by": "Avante2025",
    "lic": "CC BY 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.hyundai.com/kr/ko/e/vehicles/the-all-new-tucson/intro",
   "videos": [
    {
     "id": "YO-NbCVH6XQ",
     "t": "투싼 최초 시승기… 직접 타보니 설명이랑 너무 다른데요? 이건 좀…",
     "ch": "우파푸른하늘Woopa TV",
     "v": 709243
    },
    {
     "id": "38UbnMUWTow",
     "t": "제가 타본 하이브리드 중 압도적 1등… 연비 26km/L에 승차감까지! 신형 투싼 하이브리드 최초 시승기",
     "ch": "우파푸른하늘Woopa TV",
     "v": 267275
    },
    {
     "id": "K68eDUmG-Aw",
     "t": "신형 투싼 3,140만원부터! 이러면 아반떼는 어떡하죠? 옵션은 이렇게 고르세요",
     "ch": "김한용의 MOCAR",
     "v": 779284
    }
   ],
   "views": 1755802
  },
  {
   "id": "sorento",
   "name": "기아 쏘렌토",
   "gen": "더 뉴 쏘렌토",
   "price": 3641,
   "size": "중형 SUV",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4.5,
   "why": "가족 차의 기준. 하이브리드 6·7인승이 강점입니다.",
   "desc": "2023년 부분변경한 4세대 쏘렌토입니다. 2.5 터보, 1.6 터보 하이브리드, 2.2 디젤이 있습니다.",
   "pros": [
    "3열까지 앉습니다",
    "하이브리드 연비가 좋습니다"
   ],
   "cons": [
    "하이브리드 풀옵션은 5천만원에 가깝습니다",
    "학교 주차장에서 큽니다"
   ],
   "photo": {
    "src": "assets/cars/MQ4.webp",
    "page": "https://commons.wikimedia.org/wiki/File:Kia_Sorento_MQ4_front_view_(South_Korea)_03.png",
    "by": "차,또바기",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.kia.com/kr/vehicles/sorento",
   "videos": [
    {
     "id": "OBdr1gDEgKU",
     "t": "[리뷰] 2025 쏘렌토 하이브리드 & 팰리세이드 이야기 / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 240426
    },
    {
     "id": "dHbUS2uVsTU",
     "t": "“26년형 쏘렌토 하이브리드\" 최초 시승기! 깡통 vs 풀옵션… 가격 차이 무려 1,300만 원!",
     "ch": "우파푸른하늘Woopa TV",
     "v": 419899
    },
    {
     "id": "Yb6LkSq38Ls",
     "t": "\"4천만원 차를 구매한다면..!\" 깡통 쏘렌토 vs 풀옵 스포티지 여러분들의 선택은.?!",
     "ch": "우파푸른하늘Woopa TV",
     "v": 319699
    }
   ],
   "views": 980024
  },
  {
   "id": "santafe",
   "name": "현대 싼타페",
   "gen": "디 올 뉴 싼타페 (MX5)",
   "price": 3657,
   "size": "중형 SUV",
   "ages": [
    "30대",
    "40대 이상"
   ],
   "stars": 4,
   "why": "트렁크가 가장 넓은 중형 SUV. 캠핑과 차박에 맞습니다.",
   "desc": "2023년에 나온 5세대 싼타페입니다. 2.5 터보와 1.6 터보 하이브리드가 있습니다.",
   "pros": [
    "트렁크가 넓습니다",
    "하이브리드 연비가 좋습니다"
   ],
   "cons": [
    "디자인 호불호가 큽니다",
    "옵션을 넣으면 5천만원에 가깝습니다"
   ],
   "photo": {
    "src": "assets/cars/MX5.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2024_Hyundai_Santa_Fe_(MX5)_IMG_5295.jpg",
    "by": "Alexander Migl",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.hyundai.com/kr/ko/e/vehicles/santafe/intro",
   "videos": [
    {
     "id": "qTUgRLVESgc",
     "t": "모카 싼타페 하이브리드 6개월 마지막 시승기…최고의 차였다, 가격방어까지 대박!",
     "ch": "김한용의 MOCAR",
     "v": 477754
    },
    {
     "id": "mhaa5s6CRx0",
     "t": "그랑 콜레오스 VS 싼타페 비교시승기...하이브리드가 완전히 다르다!",
     "ch": "김한용의 MOCAR",
     "v": 1044886
    },
    {
     "id": "tlBfpH4IbGA",
     "t": "25년형 풀옵션 싼타페 하이브리드 최초 시승기! \"쏘렌토랑 완전 다르다...\"",
     "ch": "우파푸른하늘Woopa TV",
     "v": 222514
    }
   ],
   "views": 1745154
  },
  {
   "id": "grandeur",
   "name": "현대 그랜저",
   "gen": "더 뉴 그랜저",
   "price": 4245,
   "size": "준대형 세단",
   "ages": [
    "40대 이상"
   ],
   "stars": 3.5,
   "why": "2026년 부분변경으로 좋아졌지만 4천만원대 시작이라 교사 첫 차로는 무겁습니다.",
   "desc": "2026년에 부분변경한 7세대 그랜저입니다. 2.5 가솔린, 3.5 가솔린, 1.6 터보 하이브리드가 있습니다.",
   "pros": [
    "조용하고 승차감이 좋습니다",
    "최신 화면과 주행 보조를 갖췄습니다"
   ],
   "cons": [
    "4천만원대 중반부터 시작합니다",
    "보험료와 세금이 많이 듭니다"
   ],
   "photo": {
    "src": "assets/cars/GN7.webp",
    "page": "https://commons.wikimedia.org/wiki/File:01_Hyundai_Grandeur_(GN7).jpg",
    "by": "Benespit",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.hyundai.com/kr/ko/e/vehicles/the-new-grandeur/intro",
   "videos": [
    {
     "id": "8fQ1zhSAfGw",
     "t": "[리뷰] 2027 현대 그랜저 2.5 (페이스리프트) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 276728
    },
    {
     "id": "rcusO9Ji6j0",
     "t": "신형 그랜저 최초 시승기! 승차감,연비,플레오스…이 차가 미친점 5가지!",
     "ch": "김한용의 MOCAR",
     "v": 641624
    },
    {
     "id": "6u4zusUCkyA",
     "t": "🚘풀옵 6,329만원🚘짜리 신형 그랜저 타봤습니다! 옵션 어느정도이길래 이 가격이..?",
     "ch": "우파푸른하늘Woopa TV",
     "v": 472323
    }
   ],
   "views": 1390675
  },
  {
   "id": "modely",
   "name": "테슬라 모델 Y",
   "gen": "모델 Y (주니퍼)",
   "price": 4999,
   "size": "수입 전기 SUV",
   "ages": [
    "30대"
   ],
   "stars": 4,
   "why": "유지비가 가장 적은 SUV. 충전 여건이 되면 고려할 만합니다.",
   "desc": "2025년 부분변경한 모델 Y입니다. 테슬라 홈페이지에서 주문합니다. 국고와 지자체 보조금을 받으면 실제 값이 내려갑니다.",
   "pros": [
    "충전비가 기름값보다 훨씬 쌉니다",
    "트렁크와 뒷좌석이 넓습니다"
   ],
   "cons": [
    "집이나 학교에 충전기가 없으면 불편합니다",
    "보험료와 수리비가 비쌉니다"
   ],
   "photo": {
    "src": "assets/cars/MY.webp",
    "page": "https://commons.wikimedia.org/wiki/File:2020_Tesla_Model_Y,_front_8.1.20.jpg",
    "by": "Kevauto",
    "lic": "CC BY-SA 4.0",
    "edit": "배경 지움, 번호판 가림"
   },
   "buy": "https://www.tesla.com/ko_kr/modely",
   "videos": [
    {
     "id": "PI7V2Aw8V-A",
     "t": "[리뷰] 2026 테슬라 모델Y RWD (주니퍼) / 오토뷰 로드테스트",
     "ch": "오토뷰(AutoView)",
     "v": 473738
    },
    {
     "id": "xQL-vpfi9WU",
     "t": "테슬라 모델Y 주니퍼 시승기, 진짜 5299만원이다!...미친 가격, 상품성 폭발!",
     "ch": "김한용의 MOCAR",
     "v": 1479108
    },
    {
     "id": "wJHFVaFf_E8",
     "t": "5299만원! 테슬라 모델Y RWD 함께 시승기...스피커, 가속력이 부족할까?",
     "ch": "김한용의 MOCAR",
     "v": 890651
    }
   ],
   "views": 2843497
  }
 ],
 "guides": {
  "tips": {
   "name": "구입 팁",
   "lede": "같은 값이면 상태가 좋은 차를 고르는 법입니다. 계약 전에 아래 여섯 가지를 확인합니다.",
   "items": [
    [
     "예산은 차값만이 아닙니다",
     "차값 외에 취득세(차값의 7%, 경차는 4%이고 감면 있음), 이전등록 대행비, 보험료가 듭니다. 차값의 10% 안팎을 따로 잡습니다."
    ],
    [
     "성능상태점검기록부 원본",
     "사고 여부와 판금, 교환 부위를 봅니다. 문짝과 펜더 같은 외판 교환은 흔하지만, 기둥과 바닥 같은 골격 수리는 피합니다."
    ],
    [
     "보험 이력 조회",
     "보험개발원 카히스토리에서 차량번호로 사고 처리 금액, 소유자 변경, 렌터카나 영업용 이력, 침수 이력을 봅니다."
    ],
    [
     "연식 대비 주행거리",
     "1년에 1만5천km 안팎이 보통입니다. 너무 적으면 계기판 조작이나 오래 세워 둔 차일 수 있습니다."
    ],
    [
     "시운전과 하부 확인",
     "시동, 변속 충격, 핸들 쏠림, 브레이크 소리를 봅니다. 차 밑 오일 샘과 타이어 마모도 확인합니다."
    ],
    [
     "보증과 환불 조건",
     "성능점검 보증 기간과 거리, 제조사 보증이 남았는지, 직영 플랫폼의 환불 기간을 계약서에 남깁니다."
    ]
   ],
   "videos": [
    {
     "id": "hrT-2zi81og",
     "t": "중고차 제대로 고르는 법 | 연식 vs 킬로수? 뭐 보고 사는게 이득일까? [모빌런들]",
     "ch": "TBS 시민의방송",
     "v": 1594711
    },
    {
     "id": "07z6sg5F_4o",
     "t": "[명장명답] 중고차 엔진&미션상태 확인하는 비법 (안 하면 후회함)",
     "ch": "박병일의 명장본색",
     "v": 1189082
    },
    {
     "id": "_rfSbC9ezKs",
     "t": "전직 정비사가 중고차 고를 때 반드시 보는 것들 / 중고차 고르는 법 이렇게만 하세요!",
     "ch": "차개미",
     "v": 703551
    }
   ]
  },
  "how": {
   "name": "구입 방법",
   "lede": "처음 사는 사람도 따라 할 수 있게 순서대로 정리했습니다.",
   "steps": [
    [
     "예산과 차종 정하기",
     "월급과 통근 거리로 예산을 정합니다. 차값은 연봉의 절반을 넘지 않게 잡습니다."
    ],
    [
     "시세 확인",
     "엔카, KB차차차, 케이카, 헤이딜러에서 같은 세대, 연식, 주행거리 매물 값을 비교합니다."
    ],
    [
     "매물 고르고 이력 조회",
     "차량번호로 카히스토리 보험 이력과 자동차365 정비, 검사 이력을 봅니다."
    ],
    [
     "딜러와 매매상사 확인",
     "딜러의 매매사원증과 매매상사 등록 여부를 확인합니다. 직영 플랫폼은 이 단계가 줄어듭니다."
    ],
    [
     "실차 확인과 시운전",
     "성능상태점검기록부 원본과 실제 차를 대조합니다. 가능하면 정비소 점검을 받습니다."
    ],
    [
     "계약과 대금 지급",
     "매매계약서에 사고, 침수 발견 시 환불 같은 특약을 적습니다. 돈은 매매상사 명의 계좌로만 보냅니다."
    ],
    [
     "이전등록과 보험",
     "이전등록과 취득세 납부는 보통 상사가 대행합니다. 차를 받기 전에 내 이름으로 보험을 듭니다."
    ],
    [
     "인수 뒤 점검",
     "엔진오일, 타이어, 브레이크 같은 소모품을 점검하고 보증 기간 안에 문제를 찾습니다."
    ]
   ],
   "videos": [
    {
     "id": "4Xre8KiGy5s",
     "t": "가장 완벽한 \"중고차\" 구매가이드 이 영상 하나로 모든 고민 끝",
     "ch": "노보스인더스트리 NOBOSSINDUSTRY",
     "v": 688242
    },
    {
     "id": "QLGnuxAZ3vM",
     "t": "2026 NEW 닥신의 좋은 중고차 고르기 - 한편으로 총정리 실전편",
     "ch": "닥신TV",
     "v": 312120
    },
    {
     "id": "70CD0aCEgpg",
     "t": "중고차 구입 후 반드시 해야 할 것 총 정리! 알아두면 좋은 꿀팁까지 / 자동차 관리 이렇게만 하세요!",
     "ch": "차개미",
     "v": 368430
    }
   ]
  },
  "scam": {
   "name": "사기 예방",
   "lede": "중고차 사기는 수법이 정해져 있습니다. 아래 신호가 보이면 계약하지 않습니다.",
   "items": [
    [
     "시세보다 훨씬 싼 매물",
     "미끼 매물입니다. 가 보면 \"방금 팔렸다\"며 다른 비싼 차를 권합니다."
    ],
    [
     "차를 보기 전에 계약금 요구",
     "\"다른 사람이 보러 온다\"며 입금을 재촉하면 끊습니다."
    ],
    [
     "다른 장소로 데려가기",
     "광고와 다른 주소, 다른 딜러가 나오면 그 자리에서 나옵니다."
    ],
    [
     "개인 계좌로 입금 요구",
     "대금은 매매상사 명의 계좌로만 보냅니다. 영수증과 계약서를 꼭 받습니다."
    ],
    [
     "할부를 대신 알아봐 준다",
     "모르는 사이에 고금리 대출이 실행될 수 있습니다. 대출은 내가 직접 고른 금융사에서 받습니다."
    ],
    [
     "기록부와 보험 이력이 다를 때",
     "사고나 침수를 숨긴 차입니다. 둘을 대조하고 다르면 사지 않습니다."
    ]
   ],
   "help": [
    [
     "경찰",
     "112",
     "사기를 당했거나 협박을 받을 때"
    ],
    [
     "한국소비자원",
     "1372",
     "계약 해제와 환불 상담"
    ]
   ],
   "videos": [
    {
     "id": "jDU99HdTzpo",
     "t": "허위딜러가 무조건 줄 수 있다는 중고차, 제가 사보겠습니다",
     "ch": "중고차 빡차",
     "v": 7164514
    },
    {
     "id": "fCv_Udy5Xv4",
     "t": "[안녕첫차]중고차 na버 블로그 허위매물! 직접!사기 당해봤습니다!%얼굴공개%",
     "ch": "안녕첫차",
     "v": 1528575
    },
    {
     "id": "aJkO00qIUgY",
     "t": "법 대신 복수? 허위 딜러계의 저승사자라는 유튜버를 만나봤다 #사적제재 | 시사직격 KBS 220408 방송",
     "ch": "KBS 추적60분",
     "v": 1120617
    }
   ]
  }
 }
};
