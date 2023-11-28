"use client";
import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section2 = ({ refMove, title, isWin }: any) => {
  const items = [
    {
      id: 1,
      icon: MyIcons.User("2x"),
      title: "이름",
      content: "오병옥",
    },
    {
      id: 2,
      icon: MyIcons.Calendar("2x"),
      title: "생년월일",
      content: "88.11.05",
    },
    {
      id: 3,
      icon: MyIcons.Envelope("2x"),
      title: "이메일",
      content: "obo1412@gmail.com",
    },
    {
      id: 4,
      icon: MyIcons.AddressBook("2x"),
      title: "주소지",
      content: "서울특별시 강동구",
    },
  ];

  const clickedAboutMeBlock = (event: any, title: string) => {
    if (title !== "이메일") {
      event.preventDefault();
    }
  };

  return (
    <div className="px-4 py-6" ref={refMove}>
      <div className="flex justify-center items-center">
        <h1 className="mr-4">{title.name.toUpperCase()}</h1>
        <span>{title.icon}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.title === "이메일" ? `mailto:${item.content}` : "#"}
            className="flex flex-row justify-start items-center border rounded-md p-2 mt-1 hover:bg-gray-200 hover:-translate-y-1 cursor-pointer"
            onClick={(event) => clickedAboutMeBlock(event, item.title)}
          >
            <div className="mx-4 min-w-[40px] flex justify-center items-center">
              {item.icon}
            </div>
            <div
              className="flex flex-col flex-1 justify-center items-center text-[20px]"
              style={isWin ? { fontFamily: "PF스타더스트" } : {}}
            >
              <span>{item.title}</span>
              <span>{item.content}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section2;
