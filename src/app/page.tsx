"use client";
import { useRef } from "react";
import TopNavBar from "./components/TopNavBar";
import Section1 from "./components/Section1_mainimg";
import Section2 from "./components/Section2_aboutme";
import Section3 from "./components/Section3_skills";
import Section4 from "./components/Section4_archiving";
import Section5 from "./components/Section5_projects";
import Section6 from "./components/Section6_career";

export default function Home() {
  const refMove2 = useRef<any>(null);
  const refMove3 = useRef<any>(null);
  const refMove4 = useRef<any>(null);
  const refMove5 = useRef<any>(null);
  const refMove6 = useRef<any>(null);

  const moveToSection2 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove2.current?.offsetTop - 70,
      behavior: "smooth",
    });
  };
  const moveToSection3 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove3.current?.offsetTop - 70,
      behavior: "smooth",
    });
  };
  const moveToSection4 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove4.current?.offsetTop - 70,
      behavior: "smooth",
    });
  };
  const moveToSection5 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove5.current?.offsetTop - 70,
      behavior: "smooth",
    });
  };
  const moveToSection6 = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: refMove6.current?.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section>
        <TopNavBar
          moveToSection2={moveToSection2}
          moveToSection3={moveToSection3}
          moveToSection4={moveToSection4}
          moveToSection5={moveToSection5}
          moveToSection6={moveToSection6}
        />
      </section>
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 refMove={refMove2} />
      </section>
      <section>
        <Section3 refMove={refMove3} />
      </section>
      <section>
        <Section4 refMove={refMove4} />
      </section>
      <section>
        <Section5 refMove={refMove5} />
      </section>
      <section>
        <Section6 refMove={refMove6} />
      </section>
    </div>
  );
}
