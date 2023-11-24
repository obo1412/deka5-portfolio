import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section5 = ({ refMove }: any) => {
  return (
    <div className="px-4 py-6 bg-[#006877]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4 text-white">PROJECTS</h1>
        <span>{MyIcons.DiagramPropject("2x", "white")}</span>
      </div>
    </div>
  );
};

export default Section5;
