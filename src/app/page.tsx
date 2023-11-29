"use client";
import { useEffect, useRef, useState } from "react";
import TopNavBar from "./components/TopNavBar";
import Section1 from "./components/Section1_mainimg";
import Section2 from "./components/Section2_aboutme";
import Section3 from "./components/Section3_skills";
import Section4 from "./components/Section4_archiving";
import Section5 from "./components/Section5_projects";
import Section6 from "./components/Section6_career";
import * as MyIcons from "../../public/asset/icons/MyIcons";
import * as MyUtils from "../../public/utils/MyUtils";
import Footer from "./components/Footer";

export default function Home() {
  const refMove2 = useRef<any>(null);
  const refMove3 = useRef<any>(null);
  const refMove4 = useRef<any>(null);
  const refMove5 = useRef<any>(null);
  const refMove6 = useRef<any>(null);

  // 메뉴 버튼 스테이트
  const [openMenu, setOpenMenu] = useState(false);
  // 접속 os 판별하기
  const [isWin, setIsWin] = useState(false);

  const moveToSection2 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove2.current?.offsetTop - 70,
      behavior: "smooth",
    });
    setOpenMenu(false);
  };
  const moveToSection3 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove3.current?.offsetTop - 70,
      behavior: "smooth",
    });
    setOpenMenu(false);
  };
  const moveToSection4 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove4.current?.offsetTop - 70,
      behavior: "smooth",
    });
    setOpenMenu(false);
  };
  const moveToSection5 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove5.current?.offsetTop - 70,
      behavior: "smooth",
    });
    setOpenMenu(false);
  };
  const moveToSection6 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove6.current?.offsetTop - 70,
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  const menuArr = [
    {
      id: 2,
      name: "About Me",
      onclick: moveToSection2,
      icon: MyIcons.HandFist("2x"),
    },
    {
      id: 3,
      name: "Skills",
      onclick: moveToSection3,
      icon: MyIcons.WandMagicSparkles("2x"),
    },
    {
      id: 4,
      name: "Archiving",
      onclick: moveToSection4,
      icon: MyIcons.DiagramProject("2x", "white"),
    },
    {
      id: 5,
      name: "Projects",
      onclick: moveToSection5,
      icon: MyIcons.BoxOpen("2x", "white"),
    },
    {
      id: 6,
      name: "Career",
      onclick: moveToSection6,
      icon: MyIcons.Medal("2x"),
    },
  ];

  useEffect(() => {
    // 글씨 접속환경에 따라 변경처리
    if (MyUtils.checkUserOS(["Win", "Android"])) {
      setIsWin(true);
    }
  }, []);

  return (
    <div>
      <section>
        <TopNavBar
          menuArr={menuArr}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </section>
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 refMove={refMove2} title={menuArr[0]} isWin={isWin} />
      </section>
      <section>
        <Section3 refMove={refMove3} title={menuArr[1]} />
      </section>
      <section>
        <Section4 refMove={refMove4} title={menuArr[2]} isWin={isWin} />
      </section>
      <section>
        <Section5 refMove={refMove5} title={menuArr[3]} />
      </section>
      <section>
        <Section6 refMove={refMove6} title={menuArr[4]} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
