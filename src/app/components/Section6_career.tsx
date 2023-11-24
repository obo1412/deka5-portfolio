import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section6 = ({ refMove }: any) => {
  return (
    <div className="px-4 py-6 bg-[#DFE0DF]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4">CAREER</h1>
        <span>{MyIcons.Medal("2x")}</span>
      </div>
    </div>
  );
};

export default Section6;
