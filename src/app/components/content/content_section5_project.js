const ContentProject = {
  Engineer: [
    {
      id: 1,
      title: "CHC - Engine Cylinder Head Cover",
      date: "2012.11.05 ~ 2018.05.31",
      type: "직장생활",
      description:
        "엔진 상단을 그저 가리기만 하는 '뷰티커버'와는 다릅니다.\n 헤드커버는 내연기관 엔진의 최상단에 위치하며, 실린더 캠샤프트를 보호하고 내연기관의 오염된 불완전연소(블로바이) 가스를 다시 재순환 시키는 역할을 하고 있습니다.\n 헤드커버를 설계하고 연구하며, 필터와 순환장치(벤틸레이션)에 대해 깊게 공부하게 되었습니다. 금형/사출 장치에 대해서도     현대/기아, GM, 중국길리자동차 등에 들어가는 헤드커버를 설계하고 양산 경험이 있습니다. 대표 차종으로는 현대/기아 경차 엔진인 [카파]엔진과 중형차 [세타]엔진 대형차 [람다]엔진 헤드커버 등이 있습니다. 독일의 내연기관 벤틸레이션 솔루션 업체인 Hengst사와 협업한 경험 독일어는 못하지만 영어로 의사소통하며 ",
      detail: {
        point:
          "제한적인 레이아웃 안에서 최적의 구조설계 진행. 구조 및 가스유동해석으로 구조강성과 오염가스 정화 효율 결과 예측",
        url: "",
        designTool: "Creo",
        analysisTool: "Ansys - Structure, Fluent",
        frontend: "",
        backend: "",
        database: "",
        deployment: "",
      },
      img: [
        {
          id: 1,
          fileName: "water-pressure-measure",
          fileDir:
            "https://deka.co.kr:8527/files/portfolio-deka5/project/engineer/water-pressure.png",
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
        "현재도 서비스 되고 있는 작은 도서관용 도서 대출/반납 웹프로그램입니다.",
      detail: {
        point:
          "도서 등록/대출/반납/관리(도서 십진분류 정리, 장서점검 등) 기능을 갖춘 도서관리 프로그램입니다.",
        url: "http://finebook.co.kr",
        frontend: "Spring",
        backend: "JAVA - Spring 전자정부프레임워크",
        database: "Mysql - MariaDB",
        deployment: "Docker - Synology NAS",
      },
      img: [],
    },
    {
      id: 2,
      title: "울프 - 우리동네프로선수들",
      date: "2023.08.01 ~",
      type: "토이 프로젝트",
      description:
        "우리동네에 프로선수는 바로 나! 운동경기장을 쉽게 찾을 수 있게 하며,",
      detail: {
        point:
          "나의 집에서 가까운 운동장 쉽게 검색. 우리동네에서 나의 운동능력 순위를 확인할 수 있고, 우리동네의 스타플레이어들의 움직임을 확인할 수 있습니다.",
        url: "",
        frontend: "React",
        backend: "Express",
        database: "Mysql",
        deployment: "Docker - Synology NAS",
      },
      img: [],
    },
    {
      id: 3,
      title: "오손도손",
      date: "2023.10.01 ~",
      type: "토이 프로젝트",
      description:
        "가족 관계 정리 및 회비 관리 어플리케이션입니다. 자신의 성씨, 본관을 정확히 알고 등록을 하게되면 같은 본관의 회원들을 확인할 수 있습니다. 가족들간 모임을 하게 되면, 회비와 모임에 사용된 비용을 관리할 수 있습니다.",
      detail: {
        point:
          "같은 성씨(본관)을 찾을 수 있습니다. 모임장부 회비관리 처리가 가능합니다.",
        url: "",
        frontend: "ReactNative",
        backend: "Express",
        database: "Mysql",
        deployment: "Docker - Synology NAS",
      },
      img: [],
    },
  ],
};

export default ContentProject;
