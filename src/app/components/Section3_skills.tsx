import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section3 = () => {
  const skillstack: any = {
    FrontEnd: [
      {
        id: 1,
        title: "html css js",
        img: "/public/asset/image/skill-stack/front/htmlcssjs.png",
      },
      {
        id: 2,
        title: "typescript",
        img: "/public/asset/image/skill-stack/front/ts.png",
      },
      {
        id: 3,
        title: "react",
        img: "/public/asset/image/skill-stack/front/react.png",
      },
      {
        id: 4,
        title: "recoil",
        img: "/public/asset/image/skill-stack/front/recoil.png",
      },
      {
        id: 5,
        title: "nextjs",
        img: "/public/asset/image/skill-stack/front/nextjs.png",
      },
      {
        id: 6,
        title: "jQuery",
        img: "/public/asset/image/skill-stack/front/jquery.png",
      },
      {
        id: 7,
        title: "bootstrap",
        img: "/public/asset/image/skill-stack/front/bootstrap.png",
      },
      {
        id: 8,
        title: "tailwind",
        img: "/public/asset/image/skill-stack/front/tailwind.png",
      },
    ],
    BackEnd: [
      {
        id: 1,
        title: "spring",
        img: "/public/asset/image/skill-stack/back/spring.png",
      },
      {
        id: 2,
        title: "express",
        img: "/public/asset/image/skill-stack/back/express.png",
      },
      {
        id: 3,
        title: "nestjs",
        img: "/public/asset/image/skill-stack/back/nestjs.png",
      },
      {
        id: 4,
        title: "mysql",
        img: "/public/asset/image/skill-stack/back/mysql.png",
      },
      {
        id: 5,
        title: "sqlite",
        img: "/public/asset/image/skill-stack/back/sqlite.png",
      },
    ],
    MobileApp: [{ id: 1, title: "reactNative", img: "" }],
    DesktopApp: [{ id: 1, title: "electron", img: "" }],
    VersionControl: [
      { id: 1, title: "git", img: "" },
      { id: 2, title: "gitHub", img: "" },
      { id: 3, title: "bitBucket", img: "" },
    ],
    Communication: [
      { id: 1, title: "jira", img: "" },
      { id: 2, title: "confluence", img: "" },
    ],
    Deployment: [
      { id: 1, title: "jenkins", img: "" },
      { id: 2, title: "docker", img: "" },
    ],
  };

  return (
    <div className="px-4 py-6 bg-[#f9c51d]">
      <div className="flex justify-center items-center">
        <h1 className="text-[34px] mr-4">SKILLS</h1>
        <span>{MyIcons.WandMagicSparkles("2x")}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {Object.keys(skillstack).map((key, index) => (
          <div
            key={index}
            className={`${key} bg-white p-2 flex flex-col justify-start items-center`}
          >
            <div className="text-[34px]">{key}</div>
            {skillstack[key].map((item: any) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
