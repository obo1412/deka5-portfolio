const ContentProject = {
  Engineer: [
    {
      id: 1,
      title: "CHC - Engine Cylinder Head Cover",
      date: "2012.11.05 ~ 2018.05.31",
      type: "직장생활",
      description:
        "엔진 상단을 그저 가리기만 하는 '뷰티커버'와는 다릅니다.\n 헤드커버는 내연기관 엔진의 최상단에 위치하며, 실린더 캠샤프트를 보호하고 내연기관의 오염된 불완전연소(블로바이) 가스를 다시 재순환 시키는 역할을 하고 있습니다.\n 헤드커버를 설계하고 연구하며, 필터와 순환장치(벤틸레이션)에 대해 깊게 공부하게 되었습니다.\n 헤드커버 설계하였고, 양산 경험이 있습니다.\n 플라스틱 금형/사출을 위한 설계(언더컷 고려 등) 가능합니다.\n 대표고객사로는 현대/기아, GM, 중국길리자동차 등으로, 고객사와 협업 경험 있습니다.\n 대표 차종으로는 현대/기아 가솔린엔진으로는 승용경형 [카파]엔진, 승용준중형 [감마]엔진, 승용중형 [세타]엔진 승용대형(6기통) [람다]엔진 헤드커버 디젤엔진으로는 승용중형[R]엔진, 승합[A2]엔진 등이 있습니다.\n 독일의 벤틸레이션 및 필터 솔루션 업체인 Hengst사와 협업한 경험이 있습니다. 독일어는 못하지만 영어로 의사소통하며 업무처리를 하였습니다.\n BMW엔진 리버스엔지니어링 벤치마킹 경험.\n 새로운 오일분리구조인 멀티임팩터 특허 출원 경험있습니다.",
      detail: {
        point:
          "제한적인 레이아웃 안에서 최적의 구조설계 진행.\n 구조 및 가스유동해석으로 구조강성과 오염가스 재사용 효율 결과 예측",
        url: "",
        designTool: "Creo 3.0",
        analysisTool: "Ansys - Structure, Fluent, MoldFlow",
        frontend: "",
        backend: "",
        database: "",
        deployment: "",
      },
      img: [
        {
          id: 1,
          fileName: "head-cover",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/engineer/head-cover.png",
        },
        {
          id: 2,
          fileName: "water-pressure-measure",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/engineer/water-pressure.png",
        },
      ],
    },
  ],
  Developer: [
    {
      id: 1,
      title: "FineBook4",
      date: "2019.02.01 ~",
      type: "개인 프로젝트",
      description:
        "현재도 서비스 되고 있는 작은 도서관용 도서 대출/반납 웹프로그램입니다.\n 회원정보와 도서정보를 관리할 수 있습니다.\n 도서관을 운영할 때에 도서관리는 단기적인 대출/반납 정보뿐 아니라, 장기적으로 도서 유실 및 도서의 손상까지 고려하여야 합니다.\n 도서수가 십수권일 경우엔 사람의 힘으로 어떤 도서가 사라졌는지, 도서 상태가 좋지 않은지 파악할 수 있습니다. 하지만 도서수가 수천권의 수준으로 늘어날 경우 기계의 도움 없이는 도서 현상태를 추적하기 어렵습니다.\n 따라서 도서관의 형태의 사업장에서 반드시 필요로 하는 도서 관리 프로그램입니다.",
      detail: {
        point:
          "도서 등록/조회/대출/반납 등 관리기능\n 도서 등록시 외부 API(알라딘 도서) 핸들링\n 대출내역 통계처리\n 도서정보 일괄처리\n 장서점검 기능\n 라벨출력 기능\n 회원 등록/조회/수정/탈퇴\n 도서 및 회원정보 가져오기(txt/excel) 기능\n 게시판 처리",
        url: "http://finebook.co.kr",
        frontend: "Spring",
        backend: "JAVA - Spring 전자정부프레임워크",
        database: "Mysql - MariaDB",
        deployment: "Docker - Synology NAS",
      },
      img: [
        {
          id: 1,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook1.png",
        },
        {
          id: 2,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook2.png",
        },
        {
          id: 3,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook3.png",
        },
        {
          id: 4,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook4.png",
        },
        {
          id: 5,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook5.png",
        },
        {
          id: 6,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook6.png",
        },
        {
          id: 7,
          fileName: "finebook",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/finebook/finebook7.png",
        },
      ],
    },
    {
      id: 2,
      title: "울프 - 우리동네프로선수들",
      date: "2023.08.01 ~",
      type: "토이 프로젝트",
      description:
        "우리동네에 프로선수는 바로 나!\n 우리동네 운동경기장을 쉽게 찾을 수 있게 합니다.\n 회원가입을 하면 프로선수가 된 것처럼 프로필을 관리할 수 있게 됩니다.",
      detail: {
        point:
          " 집에서 가까운 운동장 검색.\n 우리동네에서 나의 운동능력 순위를 확인.\n 우리동네 스타플레이어들의 움직임을 확인 가능.",
        url: "",
        frontend: "React",
        backend: "Express",
        database: "Mysql",
        deployment: "Docker - Synology NAS",
      },
      img: [
        {
          id: 1,
          fileName: "wolf",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/wolf/wolf1.png",
        },
        {
          id: 2,
          fileName: "wolf",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/wolf/wolf2.png",
        },
        {
          id: 3,
          fileName: "wolf",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/wolf/wolf3.png",
        },
        {
          id: 4,
          fileName: "wolf",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/wolf/wolf4.png",
        },
      ],
    },
    {
      id: 3,
      title: "오손도손",
      date: "2023.10.01 ~",
      type: "토이 프로젝트",
      description:
        "가족 관계 정리 및 회비 관리 어플리케이션입니다.\n 자신의 성씨, 본관을 정확히 알고 등록을 하게되면 같은 본관의 회원들을 확인할 수 있습니다.\n 가족들간 모임을 하게 되면, 회비와 모임에 사용된 비용을 관리할 수 있습니다.",
      detail: {
        point:
          "같은 성씨(본관)을 찾기.\n 모임장부 회비관리 처리 기능.\n 종중 관리 가족게시판.",
        url: "",
        frontend: "ReactNative",
        backend: "Express",
        database: "Mysql",
        deployment: "Docker - Synology NAS",
      },
      img: [
        {
          id: 1,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/Group1.png",
        },
        {
          id: 2,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/01.jpg",
        },
        {
          id: 3,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/02.jpg",
        },
        {
          id: 4,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/03.jpg",
        },
        {
          id: 5,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/04.jpg",
        },
        {
          id: 6,
          fileName: "ohson-doson",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/developer/ohson-doson/05.jpg",
        },
      ],
    },
  ],
};

export default ContentProject;
