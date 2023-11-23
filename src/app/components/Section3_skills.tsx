import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section3 = () => {
  return (
    <div className="px-4 py-6 bg-[#f9c51d]">
      <div className="flex justify-center items-center">
        <h1 className="text-[34px] mr-4">SKILLS</h1>
        <span>{MyIcons.WandMagicSparkles("2x")}</span>
      </div>
    </div>
  );
};

export default Section3;
