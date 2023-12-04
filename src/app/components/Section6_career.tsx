import React from "react";
import ContentCareer from "./content/content_section6_carreer";

const Section6 = ({ refMove, title }: any) => {
  return (
    <div className="px-4 py-6 bg-[#DFE0DF]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      <div className="border">asdfadf</div>
    </div>
  );
};

export default Section6;
