import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";
import Image from "next/image";

const Section3 = ({ refMove, title }: any) => {
  const engineerPart: any = {
    Design: [
      {
        id: 1,
        title: "PTC Creo",
        img: "/asset/image/engineer/design/creo.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "CATIA",
        img: "/asset/image/engineer/design/catia.png",
        showLabel: false,
      },
    ],
    Analysis: [
      {
        id: 1,
        title: "ANSYS",
        img: "/asset/image/engineer/analysis/ansys.png",
        showLabel: false,
      },
    ],
  };
  const skillstack: any = {
    FrontEnd: [
      {
        id: 1,
        title: "html css js",
        img: "/asset/image/skill-stack/front/htmlcssjs.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "Typescript",
        img: "/asset/image/skill-stack/front/ts.png",
        showLabel: true,
      },
      {
        id: 3,
        title: "React",
        img: "/asset/image/skill-stack/front/react.png",
        showLabel: false,
      },
      {
        id: 4,
        title: "Recoil",
        img: "/asset/image/skill-stack/front/recoil.png",
        showLabel: false,
      },
      {
        id: 5,
        title: "Nextjs",
        img: "/asset/image/skill-stack/front/nextjs.png",
        showLabel: false,
      },
      {
        id: 6,
        title: "jQuery",
        img: "/asset/image/skill-stack/front/jquery.png",
        showLabel: false,
      },
      {
        id: 7,
        title: "Bootstrap",
        img: "/asset/image/skill-stack/front/bootstrap.png",
        showLabel: false,
      },
      {
        id: 8,
        title: "Tailwind",
        img: "/asset/image/skill-stack/front/tailwind.png",
        showLabel: false,
      },
    ],
    BackEnd: [
      {
        id: 1,
        title: "Spring",
        img: "/asset/image/skill-stack/back/spring.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "Express",
        img: "/asset/image/skill-stack/back/express.png",
        showLabel: false,
      },
      {
        id: 3,
        title: "Nestjs",
        img: "/asset/image/skill-stack/back/nestjs.png",
        showLabel: true,
      },
      {
        id: 4,
        title: "Mysql",
        img: "/asset/image/skill-stack/back/mysql.png",
        showLabel: false,
      },
      {
        id: 5,
        title: "Sqlite",
        img: "/asset/image/skill-stack/back/sqlite.png",
        showLabel: false,
      },
    ],
    MobileApp: [
      {
        id: 1,
        title: "ReactNative",
        img: "/asset/image/skill-stack/mobile/reactnative.png",
        showLabel: false,
      },
    ],
    DesktopApp: [
      {
        id: 1,
        title: "Electron",
        img: "/asset/image/skill-stack/desktop/electron.png",
        showLabel: true,
      },
    ],
    VersionControl: [
      {
        id: 1,
        title: "Git",
        img: "/asset/image/skill-stack/version-control/git.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "GitHub",
        img: "/asset/image/skill-stack/version-control/github.png",
        showLabel: false,
      },
      {
        id: 3,
        title: "BitBucket",
        img: "/asset/image/skill-stack/version-control/bitbucket.png",
        showLabel: true,
      },
    ],
    Communication: [
      {
        id: 1,
        title: "Jira",
        img: "/asset/image/skill-stack/communication/jira.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "Confluence",
        img: "/asset/image/skill-stack/communication/confluence.png",
        showLabel: false,
      },
    ],
    Deployment: [
      {
        id: 1,
        title: "Jenkins",
        img: "/asset/image/skill-stack/deployment/jenkins.png",
        showLabel: false,
      },
      {
        id: 2,
        title: "Docker",
        img: "/asset/image/skill-stack/deployment/docker.png",
        showLabel: false,
      },
      {
        id: 3,
        title: "Synology",
        img: "/asset/image/skill-stack/deployment/synology.png",
        showLabel: false,
      },
    ],
  };

  return (
    <div className="px-4 py-6 bg-[#f9c51d]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      {/* 엔지니어 파트 */}
      <div className="flex flex-col">
        <span className="text-[30px] text-center mb-2">- Engineer Part -</span>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mb-8">
          {Object.keys(engineerPart).map((key, index) => (
            <div
              key={index}
              className={`${key} bg-white rounded-lg p-2 flex flex-1 flex-col justify-start items-center px-10 mb-4 break-inside-avoid hover:-translate-y-1`}
            >
              <div className="text-[34px] text-[#c99700] border-b-2 w-full flex justify-center">
                <span>{key}</span>
              </div>
              {engineerPart[key].map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-center items-center w-full"
                >
                  <div
                    className="h-[80px] flex-1 min-w-[100px] mt-2"
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
                  {item.showLabel && (
                    <span className="flex-grow flex justify-center items-center font__san font-bold text-[40px]">
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* 개발자 파트 */}
      <div className="flex flex-col">
        <span className="text-[30px] text-center mb-2">- Developer Part -</span>
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
                  className="flex justify-center items-center w-full"
                >
                  <div
                    className="h-[80px] flex-1 min-w-[100px] mt-2"
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
                  {item.showLabel && (
                    <span className="flex-grow flex justify-center items-center font__san font-bold text-[40px]">
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
