import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="w-full h-[500px]" style={{ position: "relative" }}>
      <Image
        src="/asset/image/main-img.jpg"
        alt="main-image"
        layout="fill"
        className="z-0"
      />
      <div className="relative top-[110px] flex justify-center items-center">
        <div className="relative bg-black flex flex-col justify-center items-center p-2 rounded-lg bg-opacity-50">
          <div
            style={{ fontFamily: "sans-serif" }}
            className="flex flex-col justify-center items-center font-bold text-white"
          >
            <span className="text-[60px]">- 오병옥 -</span>
            <span className="text-[40px]">개발자 포트폴리오</span>
          </div>
          <div className="flex flex-col justify-center items-center mt-[80px] text-[20px] text-white">
            <span>업무의 성과는 내 실력에 비례하지 않고,</span>
            <span>나의 열정에 비례한다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;