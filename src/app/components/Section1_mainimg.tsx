import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="w-full h-[500px]" style={{ position: "relative" }}>
      <Image
        src="/asset/image/main-img.jpg"
        alt="main-image"
        fill
        placeholder="blur"
        blurDataURL="/asset/image/main-img.jpg"
        className="z-0"
      />
      <div className="relative top-[110px] flex justify-center items-center">
        <div className="relative bg-black flex flex-col justify-center items-center p-2 rounded-lg bg-opacity-50">
          <div className="flex flex-col justify-center items-center font-bold text-white font__blackHanSans shadow-lg">
            <span className="text-[60px] font-normal">- 오병옥 -</span>
            <span className="text-[40px]">DevEngineer</span>
            <span className="text-[40px]">PORTFOLIO</span>
          </div>
          <div className="flex flex-col justify-center items-center mt-[40px] text-[20px] text-white">
            <span>업무의 성과는</span>
            <span>능력에 비례하지 않고,</span>
            <span>나의 열정에 비례한다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
