const ContentProject = {
  Engineer: [
    {
      id: 1,
      title: "CHC - Engine Cylinder Head Cover",
      date: "2012.11.05 ~ 2018.06.01",
      description:
        "엔진 상단을 그저 가리기만 하는 '뷰티커버'와는 다릅니다. 헤드커버는 내연기관 엔진의 최상단에 위치하며, 실린더 캠샤프트를 보호하고 내연기관의 오염된 불완전연소(블로바이) 가스를 다시 재순환 시키는 역할을 하고 있습니다. 헤드커버를 설계하고 연구하며, 필터와 순환장치(벤틸레이션)에 대해 깊게 공부하게 되었습니다. 금형/사출 장치에 대해서도 ",
      detail: {
        point: "내연기관 구조 및 가스유동해석으로 결과 예측",
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
  ],
};

export default ContentProject;
