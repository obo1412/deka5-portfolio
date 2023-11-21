import Section1 from "./components/Section1_mainimg";
import Section2 from "./components/Section2_aboutme";
import Section3 from "./components/Section3_skills";
import Section4 from "./components/Section4_archiving";
import Section5 from "./components/Section5_projects";
import Section6 from "./components/Section6_career";

export default function Home() {
  return (
    <div className="">
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 />
      </section>
      <section>
        <Section5 />
      </section>
      <section>
        <Section6 />
      </section>
    </div>
  );
}
