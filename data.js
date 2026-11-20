/*
 * 교사개조 용광로: 부서와 메뉴
 *
 * 메뉴 한 줄의 상태는 세 가지입니다.
 *   url  이 있으면  누르는 즉시 그 주소가 새 창으로 열립니다.
 *   page 가 있으면  이 사이트 안의 페이지가 열립니다. (아래 pages 참고)
 *   둘 다 없으면    '준비 중'으로 흐리게 표시되고 눌리지 않습니다.
 *
 * 새 웹앱이 생기면 해당 메뉴에 url: '주소' 한 줄만 추가하면 됩니다.
 * (page 가 있던 메뉴는 url 을 넣으면 url 이 우선합니다.)
 * 상단 메뉴, 메인 화면, 부서 페이지, 바닥글이 모두 이 파일 하나로 만들어집니다.
 */
window.SITE = {
  name: '교사개조 용광로',

  depts: [
    {
      id: 'imyong',
      name: '임용부',
      desc: '노량진 생활부터 2차 시험까지, 수험 기간에 필요한 정보.',
      menus: [
        { id: 'noryangjin', name: '노량진', desc: '1년 공부비용, 맛집, 독서실 정보, 고시원 및 원룸', page: 'noryangjin' },
        { id: 'cost', name: '1년 공부비용', desc: '자택, 노량진, 기간제 세 가지 길의 비용 비교', page: 'cost' },
        { id: 'items', name: '공부아이템', desc: '볼펜, 독서대', page: 'items' },
        { id: 'instructors', name: '강사비교', desc: '교육학, 유아, 초등, 중등 교과별 분류', page: 'instructors' },
        { id: 'second', name: '2차 공부', desc: '전국 스터디 모집 현황', url: 'https://horangmarco-study.up.railway.app/#/recruit' },
      ],
    },
    {
      id: 'gyomu',
      name: '교무부',
      desc: '학교 업무를 정리해 두는 곳.',
      menus: [
        { id: 'work', name: '업무' },
      ],
    },
    {
      id: 'cheyuk',
      name: '체육부',
      desc: '교사의 체력은 발에서 시작합니다.',
      menus: [
        { id: 'running', name: '러닝화', desc: '체격과 목적에 맞는 러닝화 베스트 3', url: 'https://cogns0302-lab.github.io/horangmalco-run/#home' },
      ],
    },
    {
      id: 'special',
      name: '특수교육',
      desc: '수업에 바로 쓰는 게임, 자료, 지도안, 지도서.',
      menus: [
        { id: 'game', name: '게임' },
        { id: 'materials', name: '자료' },
        { id: 'plans', name: '지도안' },
        { id: 'guides', name: '지도서' },
      ],
    },
    {
      id: 'hongbo',
      name: '홍보부',
      desc: '공모전, 연구대회, 교사 행사 소식.',
      menus: [
        { id: 'contests', name: '교사 공모전, 연구대회 안내' },
        { id: 'events', name: '교사 참여 행사' },
      ],
    },
    {
      id: 'singyu',
      name: '신규교육부',
      desc: '첫 발령 전에 챙길 차, 이사, 학교생활.',
      menus: [
        { id: 'car', name: '자동차', desc: '신차와 중고(국산, 수입), 세대별 시세와 리뷰 영상, 구입 팁, 사기 예방', page: 'car' },
        { id: 'moving', name: '이사 및 발령', desc: '이전비 신청 방법', page: 'moving' },
        { id: 'items', name: '아이템' },
        { id: 'handbook', name: '학교생활지침서', desc: '공문서 바로쓰기, 법정의무연수, 봉급표, 교사 할인 혜택', url: 'https://app.notion.com/p/hrangmarco/89868d87d8e74c0db4458424c46c4a87?source=copy_link' },
        { id: 'neis', name: '나이스, 업무포털 기본' },
      ],
    },
    {
      id: 'pool',
      name: '인력풀',
      desc: '기간제와 강사 자리를 찾는 곳.',
      menus: [
        { id: 'jobs', name: '기간제, 강사 구인구직', desc: '전국 교육청 채용 공고 모음, 바로쌤', url: 'https://barossam.com/?utm_source=kakao&utm_medium=openchat&utm_campaign=launch_202608&utm_content=tk' },
      ],
    },
    {
      id: 'haengjeong',
      name: '행정실',
      desc: '월급 계산과 자산 늘리기.',
      menus: [
        { id: 'pay', name: '급여 계산', desc: '봉급, 수당, 공제' },
        { id: 'wealth', name: '자산 증식', desc: '재테크, 부동산, 주식' },
      ],
    },
  ],

  /*
   * 첫 화면 조직도의 자리.
   *   side: 줄기 양옆에 붙는 작은 부서 (왼쪽, 오른쪽 순서로 번갈아 놓입니다)
   *   main: 맨 아래 큰 부서 카드
   * 부서를 새로 만들면 id 를 둘 중 한 곳에 넣으세요. 빠진 부서는 맨 아래 카드로 갑니다.
   */
  org: {
    top: '교사개조 용광로',
    side: ['gyomu', 'hongbo', 'cheyuk', 'pool', 'haengjeong'],
    main: ['imyong', 'singyu', 'special'],
  },

  /* 첫 화면 '자주 찾는 메뉴'. to 는 '부서/메뉴', href 는 이 페이지 안의 위치입니다. icon 은 app.js 의 ICONS 이름 */
  quick: [
    { name: '조직도', href: '#org', icon: 'org' },
    { name: '1년 공부비용', to: 'imyong/cost', icon: 'coin' },
    { name: '노량진', to: 'imyong/noryangjin', icon: 'pin' },
    { name: '강사비교', to: 'imyong/instructors', icon: 'board' },
    { name: '공부아이템', to: 'imyong/items', icon: 'pen' },
    { name: '자동차', to: 'singyu/car', icon: 'car' },
    { name: '이사 및 발령', to: 'singyu/moving', icon: 'box' },
    { name: '구인구직', to: 'pool/jobs', icon: 'case' },
  ],

  /* 사이트 안에서 열리는 페이지의 내용 */
  pages: {
    /* ───── 임용부 > 1년 공부비용: 세 가지 길을 다섯 항목으로 비교 ───── */
    cost: {
      lede: '세 가지 길의 1년 비용을 직접 넣어 비교합니다.',
      unit: '만원',
      paths: [
        { id: 'home', name: '자택', note: '집에서 준비' },
        { id: 'noryangjin', name: '노량진', note: '학원가에서 자취' },
        { id: 'temp', name: '기간제', note: '일하면서 준비' },
      ],
      /* per: 'month' 는 월 금액을 받아 12를 곱하고, 'year' 는 연 금액을 그대로 더합니다. */
      rows: [
        { id: 'food', name: '식비', per: 'month' },
        { id: 'lecture', name: '강의비', per: 'year' },
        { id: 'books', name: '교재비', per: 'year' },
        { id: 'room', name: '독서실비', per: 'month' },
        { id: 'etc', name: '기타', per: 'month', note: '스터디, 카페, 생활비 등' },
      ],
      /* 기본값(만원). 비워 두면 빈칸으로 시작합니다.
       * 예) defaults: { 'food.home': 30, 'food.noryangjin': 45, 'lecture.temp': 150 } */
      defaults: {},
      /* 칸을 채울 때 참고할 시세. 출처가 확인된 것만 넣었습니다. */
      refsNote: '방값은 기타에 넣습니다.',
      refs: [
        { row: '강의비', figure: '69만~129만원', text: '교육학 연간 패키지 한 과목. 해커스임용 2027 대비 할인가.', src: '해커스임용', url: 'https://teacher.hackers.com/?c=event_new&evt_cd=47343422' },
        { row: '기타', figure: '월 35만~45만원', text: '노량진 고시원, 욕실을 같이 쓰는 방. 개인 욕실이 있는 방은 월 50만~70만원.', src: '고방', url: 'https://gobang.kr/contents/7686' },
        { row: '기타', figure: '월 70만 9천원', text: '서울 대학가 원룸의 월세와 관리비 평균. 보증금 1,000만원, 2026년 7월.', src: '고방', url: 'https://gobang.kr/contents/8303' },
      ],
      checked: '2026년 11월 확인',
    },

    /* ───── 임용부 > 노량진: 위치는 네이버 지도 검색으로 연결 ───── */
    noryangjin: {
      lede: '맛집과 독서실 추천 목록은 준비 중입니다. 위치는 네이버 지도로 바로 열립니다.',
      /* links 의 naver 는 네이버 지도 검색어, page 는 이 사이트 안의 경로입니다.
       * list 에 { name: '이름', note: '한 줄 설명' } 을 넣으면 그 항목 아래에 표시됩니다. */
      spots: [
        { id: 'cost', name: '1년 공부비용', links: [{ label: '노량진 비용 계산하기', page: 'imyong/cost' }], list: [] },
        { id: 'food', name: '맛집', links: [{ label: '네이버 지도에서 맛집 보기', naver: '노량진 맛집' }], list: [] },
        { id: 'study', name: '독서실 정보', links: [{ label: '네이버 지도에서 독서실 보기', naver: '노량진 독서실' }], list: [] },
        {
          id: 'room',
          name: '고시원 및 원룸',
          links: [
            { label: '네이버 지도에서 고시원 보기', naver: '노량진 고시원' },
            { label: '네이버 지도에서 원룸 보기', naver: '노량진 원룸' },
          ],
          list: [
            { name: '욕실을 같이 쓰는 방', note: '월 35만~45만원' },
            { name: '바깥 창이 있는 방', note: '월 40만~55만원' },
            { name: '개인 욕실이 있는 방', note: '월 50만~70만원' },
          ],
          source: { name: '고시원 시세 출처: 고방 노량진 고시원 가이드', url: 'https://gobang.kr/contents/7686' },
        },
      ],
    },

    /* ───── 임용부 > 공부아이템: 볼펜, 독서대 ───── */
    items: {
      lede: '답안을 오래 쓰는 손과, 책을 오래 보는 목을 위한 물건들.',
      /* q 는 네이버 검색어입니다. */
      groups: [
        {
          name: '볼펜',
          note: '시험장에서 쓸 펜은 그해 시험 공고의 필기구 규정을 먼저 확인하세요.',
          goods: [
            { name: '제트스트림 0.7', why: '유성 잉크라 빨리 마르고 손에 덜 번집니다. 답안을 길게 쓸 때 무난합니다.', q: '제트스트림 0.7' },
            { name: '에너겔 0.5', why: '젤 잉크인데 마름이 빠른 편입니다. 힘을 덜 주고 씁니다.', q: '에너겔 0.5' },
            { name: '사라사 클립 0.5', why: '진하고 또렷한 젤 잉크. 개념 정리 노트에 어울립니다.', q: '사라사 클립 0.5' },
            { name: '유니볼 시그노 0.38', why: '가는 글씨. 기출 문제 여백에 메모할 때 씁니다.', q: '유니볼 시그노 0.38' },
          ],
        },
        {
          name: '독서대',
          note: '상표보다 종류를 먼저 고릅니다.',
          goods: [
            { name: '2단 독서대', why: '두꺼운 전공서와 기출 문제집을 펼친 채로 잡아 줍니다. 책상에 두고 씁니다.', q: '2단 독서대' },
            { name: '높이 조절 독서대', why: '책을 눈높이까지 올려 고개 숙이는 시간을 줄입니다.', q: '높이 조절 독서대' },
            { name: '접이식 휴대용 독서대', why: '학원과 스터디카페에 들고 다닐 때 씁니다.', q: '접이식 휴대용 독서대' },
          ],
        },
      ],
    },

    /* ───── 임용부 > 강사비교: 교육학, 유아, 초등, 중등(교과별) ───── */
    instructors: {
      lede: '강사별 비교표는 준비 중입니다. 그 전에 고르는 기준과 학원 공식 사이트를 모았습니다.',
      /* 비교표에 올릴 강사는 rows 에 넣습니다.
       * 예) { group: '교육학', subject: '', name: '이름', org: '학원', note: '강의 특징', url: '공식 소개 주소' }
       *     중등은 subject 에 교과 이름을 넣으면 교과별로 묶입니다. */
      groups: [
        { name: '교육학' },
        { name: '유아' },
        { name: '초등' },
        { name: '중등', subjects: ['국어', '영어', '수학', '도덕윤리', '일반사회', '역사', '지리', '물리', '화학', '생물', '지구과학', '체육', '음악', '미술', '기술', '가정', '정보', '한문'] },
      ],
      rows: [],
      criteria: [
        { name: '한 해 흐름', text: '1월 기본 이론부터 11월 모의고사까지 과정이 어떻게 짜여 있는지.' },
        { name: '교재', text: '강사가 쓴 기본서인지, 기출 분석 자료를 따로 주는지.' },
        { name: '듣는 방식', text: '학원 직강인지 인강인지, 지난 강의를 다시 볼 수 있는지.' },
        { name: '수강료', text: '연간 패키지와 단과 가격, 교재비가 포함인지.' },
        { name: '모의고사와 첨삭', text: '답안을 직접 써 내고 고쳐 받을 수 있는지.' },
      ],
      sites: [
        { name: '해커스임용', url: 'https://teacher.hackers.com/' },
        { name: '윌비스임용', url: 'https://ssam.willbes.net/' },
        { name: '박문각', url: 'https://www.pmg.co.kr/' },
        { name: 'G스쿨', url: 'https://www.g-school.co.kr/' },
        { name: '희소, 쌤플러스', url: 'https://www.ssamplus.com/' },
      ],
      checked: '2026년 11월 확인',
    },

    /* ───── 신규교육부 > 자동차 ───── */
    car: {
      lede: '첫 차를 연령대와 연봉에 맞춰 골랐습니다. 차값이 연봉의 절반을 넘지 않는 것이 기준입니다.',
      vs: [
        { name: '신차', points: ['제조사 보증을 처음부터 받습니다.', '사고 이력을 걱정할 일이 없습니다.', '첫 몇 해 동안 값이 가장 빨리 떨어집니다.'] },
        { name: '중고', points: ['같은 돈으로 한 급 위 차를 탑니다.', '값이 이미 떨어져 되팔 때 손해가 적습니다.', '성능점검기록부와 보험 이력을 직접 확인해야 합니다.'] },
      ],
      ages: ['20대', '30대', '40대 이상'],
      starsNote: '별점은 차값 부담, 유지비, 쓰임새, 중고 거래 지표를 보고 매긴 용광로의 추천도입니다. 차 목록, 사진, 영상은 cars.js 에 있습니다.',
    },

    /* ───── 신규교육부 > 이사 및 발령: 이전비 신청 방법 ───── */
    moving: {
      lede: '다른 시나 군으로 발령받아 이사하면 이삿짐 운송비를 돌려받습니다. 정식 이름은 국내 이전비입니다.',
      facts: [
        { figure: '5톤', text: '이삿짐 5톤까지 운송비 전액, 넘는 짐은 7.5톤까지 절반. 사다리차와 승강기 이용료 포함.' },
        { figure: '6개월', text: '이사한 다음 날부터 6개월 안에 신청.' },
        { figure: '1년', text: '발령받은 다음 날부터 1년 안에 이사.' },
      ],
      steps: [
        { name: '새 학교 행정실에 먼저 묻기', text: '이전비를 주는지, 얼마까지 주는지 확인합니다. 예산에 따라 줄이거나 주지 않을 수 있고, 신규 교사에게 주지 않는 교육청도 있습니다.' },
        { name: '이사업체에서 증빙 받기', text: '견적서와 세금계산서 또는 카드 영수증을 받습니다. 이동 구간, 거리, 운송비, 사다리차 이용료가 적혀 있어야 합니다.' },
        { name: '전입신고 하고 등본 떼기', text: '주민등록등본이나 초본으로 거주지가 바뀐 것을 확인합니다.' },
        { name: '행정실에 신청서 내기', text: '국내여비 지급신청서에 위 서류를 붙여 이사한 다음 날부터 6개월 안에 냅니다.' },
      ],
      yes: [
        '전보, 파견, 신규 임용으로 근무지 밖 지역에 발령받고 거주지와 이삿짐을 실제로 옮긴 경우',
        '새 근무지가 아닌 옆 지역으로 옮겼더라도, 소속 기관장의 허가를 받고 발령 다음 날부터 6개월 안에 이사한 경우',
      ],
      no: [
        '같은 시, 군, 섬 안에서 이사한 경우',
        '이삿짐을 직접 옮겨 운송 증빙이 없는 경우',
        '간이영수증만 있는 경우',
        '발령받은 다음 날부터 1년 안에 이사하지 않은 경우',
      ],
      papers: ['주민등록등본 또는 초본', '국내여비(가족여비, 이전비) 지급신청서', '이사 견적서', '세금계산서 또는 카드 영수증'],
      note: '가족이 함께 이사하면 가족여비도 따로 신청할 수 있습니다.',
      sources: [
        { name: '공무원 여비 규정 제19조, 제20조, 제28조, 별표 5 (시행 2026. 10. 2.)', url: 'https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B3%B5%EB%AC%B4%EC%9B%90%EC%97%AC%EB%B9%84%EA%B7%9C%EC%A0%95' },
        { name: '인사혁신처 여비제도 안내', url: 'https://www.mpm.go.kr/mpm/info/resultPay/bizPay04/' },
        { name: '한국교육신문 교직 상식, 이전비 및 가족여비 지급 (한국교총, 2017)', url: 'https://www.hangyo.com/mobile/article.html?no=80505' },
        { name: '한국교육신문, 교육공무원 이전비 지급은? (한국교총, 2022)', url: 'https://www.hangyo.com/news/article.html?no=95526' },
      ],
      checked: '2026년 11월 확인. 교육청과 학교마다 기준이 다를 수 있으니 행정실 안내가 우선입니다.',
    },
  },
};
