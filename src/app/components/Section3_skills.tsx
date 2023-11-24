import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";
import Image from "next/image";

const Section3 = ({ refMove }: any) => {
  const skillstack: any = {
    FrontEnd: [
      {
        id: 1,
        title: "html css js",
        img: "/asset/image/skill-stack/front/htmlcssjs.png",
      },
      {
        id: 2,
        title: "typescript",
        img: "/asset/image/skill-stack/front/ts.png",
      },
      {
        id: 3,
        title: "react",
        img: "/asset/image/skill-stack/front/react.png",
      },
      {
        id: 4,
        title: "recoil",
        img: "/asset/image/skill-stack/front/recoil.png",
      },
      {
        id: 5,
        title: "nextjs",
        img: "/asset/image/skill-stack/front/nextjs.png",
      },
      {
        id: 6,
        title: "jQuery",
        img: "/asset/image/skill-stack/front/jquery.png",
      },
      {
        id: 7,
        title: "bootstrap",
        img: "/asset/image/skill-stack/front/bootstrap.png",
      },
      {
        id: 8,
        title: "tailwind",
        img: "/asset/image/skill-stack/front/tailwind.png",
      },
    ],
    BackEnd: [
      {
        id: 1,
        title: "spring",
        img: "/asset/image/skill-stack/back/spring.png",
      },
      {
        id: 2,
        title: "express",
        img: "/asset/image/skill-stack/back/express.png",
      },
      {
        id: 3,
        title: "nestjs",
        img: "/asset/image/skill-stack/back/nestjs.png",
      },
      {
        id: 4,
        title: "mysql",
        img: "/asset/image/skill-stack/back/mysql.png",
      },
      {
        id: 5,
        title: "sqlite",
        img: "/asset/image/skill-stack/back/sqlite.png",
      },
    ],
    MobileApp: [
      {
        id: 1,
        title: "reactNative",
        img: "/asset/image/skill-stack/mobile/reactnative.png",
      },
    ],
    DesktopApp: [
      {
        id: 1,
        title: "electron",
        img: "/asset/image/skill-stack/desktop/electron.png",
      },
    ],
    VersionControl: [
      {
        id: 1,
        title: "git",
        img: "/asset/image/skill-stack/version-control/git.png",
      },
      {
        id: 2,
        title: "gitHub",
        img: "/asset/image/skill-stack/version-control/github.png",
      },
      {
        id: 3,
        title: "bitBucket",
        img: "/asset/image/skill-stack/version-control/bitbucket.png",
      },
    ],
    Communication: [
      {
        id: 1,
        title: "jira",
        img: "/asset/image/skill-stack/communication/jira.png",
      },
      {
        id: 2,
        title: "confluence",
        img: "/asset/image/skill-stack/communication/confluence.png",
      },
    ],
    Deployment: [
      {
        id: 1,
        title: "jenkins",
        img: "/asset/image/skill-stack/deployment/jenkins.png",
      },
      {
        id: 2,
        title: "docker",
        img: "/asset/image/skill-stack/deployment/docker.png",
      },
    ],
  };

  return (
    <div className="px-4 py-6 bg-[#f9c51d]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4">SKILLS</h1>
        <span>{MyIcons.WandMagicSparkles("2x")}</span>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {Object.keys(skillstack).map((key, index) => (
          <div
            key={index}
            className={`${key} bg-white rounded-lg p-2 flex flex-1 flex-col justify-start items-center px-10 mb-4 break-inside-avoid hover:-translate-y-1`}
          >
            <div className="text-[34px] text-[#c99700] border-b-2 w-full flex justify-center">
              <span>{key}</span>
            </div>
            {skillstack[key].map((item: any) => (
              <div
                key={item.id}
                className="w-full h-[80px] mt-2"
                style={{ position: "relative" }}
              >
                <Image
                  src={item.img}
                  alt={`logo-${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
