import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Section2 = () => {
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

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <h1 className="text-[34px] mr-2">ABOUT ME</h1>
        <span>{MyIcons.HandFist("2x")}</span>
      </div>
      <div className="grid grid-rows-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-start items-center border rounded-md p-2 mt-1"
          >
            <div className="mx-4 min-w-[40px] flex justify-center items-center">
              {item.icon}
            </div>
            <div
              className="flex flex-col flex-1 justify-center items-center text-[20px]"
              style={{ fontFamily: "PF스타더스트" }}
            >
              <span>{item.title}</span>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
