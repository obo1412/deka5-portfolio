import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";
import * as MyUtils from "../../../public/utils/MyUtils";
import ContentProject from "./content/content_section5_project";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../../../public/asset/css/project-swiper.css";

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
          <div className="text-white text-[30px] mb-4">- {key} Part -</div>
          {ContentProject[key as keyof typeof ContentProject]?.map(
            (item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-lg w-full max-w-[1024px] min-h-[300px] mb-8 p-4 flex flex-col items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font__blackHanSans text-[36px]">
                    {item.title}
                  </h1>
                  <div className="text-[18px] text-gray-500 flex flex-col justify-center items-center">
                    <div>{item.date}</div>
                    <div className="text-[16px]">{item.type}</div>
                  </div>
                </div>
                <div className="columns-1 md:columns-2 w-full h-full mt-2">
                  <div className="mx-2 w-full h-full break-inside-avoid">
                    {/* 이미지 파트 왼쪽 */}
                    {item.img.length > 0 ? (
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="my__swiper"
                      >
                        {item.img.map((imgItem: any, index: number) => (
                          <SwiperSlide
                            key={index}
                            className="my__swiper__slide"
                          >
                            <Image
                              src={imgItem.fileDir}
                              alt={imgItem.fileName}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              style={{ objectFit: "contain" }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div
                        style={{ position: "relative" }}
                        className="flex-1 h-[300px] my-1"
                      >
                        <Image
                          src={
                            "https://deka.co.kr:8527/files/portfolio-deka5/no-image.jpg"
                          }
                          alt={"no image"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 mx-2 break-inside-avoid font__gothicA1">
                    {/* 정보 파트 오른쪽 */}
                    <div className="text-[16px] mt-2">
                      {/* 설명 파트 */}
                      {item.description
                        .split("\n")
                        .map((line: string, kndex: number) => (
                          <span key={kndex}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </div>
                    <div className="border-t mt-2">
                      {/* 요약 파트 */}
                      {Object.keys(item.detail).map((subKey, jndex) => {
                        if (item.detail[subKey] !== "") {
                          return (
                            <div key={jndex} className="columns-2 flex mt-2">
                              <div className="flex flex-row items-center w-[110px] mr-2">
                                <div className="mr-2">•</div>
                                <div className="font-bold break-inside-avoid">
                                  {subKey}
                                </div>
                              </div>
                              <div className="break-inside-avoid flex-1">
                                {MyUtils.makeLineBreakByString(
                                  item.detail[subKey]
                                )
                                  .split("\n")
                                  .map((line: string, lndex: number) => (
                                    <span key={lndex}>
                                      {MyUtils.checkIsURL(line)}
                                      <br />
                                    </span>
                                  ))}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Section5;
