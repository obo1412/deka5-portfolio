import React from "react";
import { ContentCareer } from "./content/content_section6_carreer";
import Image from "next/image";

const Section6 = ({ refMove, title }: any) => {
  return (
    <div className="px-4 py-6 bg-[#DFE0DF]" ref={refMove}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="mr-4">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      <div className="w-full h-full flex flex-col box-border font__gothicA1">
        {ContentCareer.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap border-t-2 border-gray-300 sm:border-0 pt-2"
          >
            <div className="w-full sm:w-1/3">
              {item.img.map((img, index) => (
                <div key={index} className="min-h-[100px] relative my-1">
                  <Image
                    src={img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                    }}
                    placeholder="blur"
                    blurDataURL="https://deka.co.kr:8527/files/portfolio-deka5/no-image.jpg"
                  />
                </div>
              ))}
            </div>
            <div className="w-full sm:flex-1 sm:border-l-2 border-gray-400 pl-3 my-8 sm:mt-0 flex flex-col justify-center items-center sm:justify-start sm:items-start">
              {/* 커리어 타이틀 */}
              <div className="flex flex-col items-center sm:items-start font-bold">
                <div>{item.type}</div>
                <div className="text-[20px]">{item.title}</div>
                <div>{item.date}</div>
              </div>
              {/* 커리어 활동 내용 */}
              <div className="mt-4">
                {item.activity.map((action, index) => (
                  <div key={index}>
                    <div>
                      <span className="mr-2">•</span>
                      <span>{action.title}</span>
                    </div>
                    <div className="ml-6">
                      {action?.detail.map((det, jndex) => (
                        <div key={jndex}>{det}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
