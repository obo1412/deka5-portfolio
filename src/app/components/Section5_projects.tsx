import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";
import ContentProject from "./content/content_section5_project";

const Section5 = ({ refMove, title }: any) => {
  return (
    <div className="px-4 py-6 bg-[#006877]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4 text-white">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      {Object.keys(ContentProject).map((key, index) => (
        // 객체 내용
        <div key={index} className="flex flex-col items-center px-4">
          {ContentProject[key as keyof typeof ContentProject]?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg w-full max-w-[1024px] min-h-[300px] mb-8 p-4"
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section5;
