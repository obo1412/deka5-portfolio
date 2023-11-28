import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section5 = ({ refMove, title }: any) => {
  return (
    <div className="px-4 py-6 bg-[#006877]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4 text-white">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      <div className="flex flex-col items-center px-4">
        <div className="bg-white rounded-lg w-full max-w-[1024px] min-h-[300px]">
          asdfasdf
        </div>
      </div>
    </div>
  );
};

export default Section5;
