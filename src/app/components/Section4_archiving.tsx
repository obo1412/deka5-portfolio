import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";
import Image from "next/image";

const Section4 = ({ refMove }: any) => {
  const linkAddr = "https://github.com/obo1412";

  return (
    <div className="px-4 py-6 bg-[#402E32]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4 text-white">ARCHIVING</h1>
        <span>{MyIcons.DiagramProject("2x", "white")}</span>
      </div>
      <div
        className="flex justify-center items-center hover:-translate-y-2"
        style={{ fontFamily: "pf스타더스트" }}
      >
        <a
          target="_blank"
          href={linkAddr}
          className="w-[400px] bg-white rounded-lg p-4"
        >
          <div className="flex flex-row justify-center items-center">
            <span>
              <Image
                src={"/asset/image/skill-stack/version-control/github-logo.png"}
                alt="github-logo"
                width={50}
                height={50}
                className="mr-3"
              />
            </span>
            <span>
              <Image
                src={"/asset/image/skill-stack/version-control/github.png"}
                alt="github-text"
                width={150}
                height={50}
              />
            </span>
          </div>
          <span className="flex justify-center text-[#258DE0]">{linkAddr}</span>
          <div className="mt-1 px-6 text-[18px]">
            <ul className=" list-disc">
              <li>과거 프로젝트 소스 코드</li>
              <li>토이(사이드)프로젝트 소스 코드</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section4;
