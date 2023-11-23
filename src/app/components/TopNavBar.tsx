"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const TopNavBar = () => {
  const menuArr = [
    {
      id: 1,
      name: "About Me",
    },
    {
      id: 2,
      name: "Skills",
    },
    {
      id: 3,
      name: "Archiving",
    },
    {
      id: 4,
      name: "Projects",
    },
    {
      id: 5,
      name: "Career",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  // 메뉴 버튼
  const clickedMenuButton = () => {
    setOpenMenu(!openMenu);
  };

  // home 버튼 상단으로 이동
  const clickedHomeMoveToTop = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 bg-opacity-80 text-white w-full fixed top-0 z-10"
      style={{
        fontFamily: "PF스타더스트",
      }}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex justify-center items-center p-1 ml-3">
          <Link
            href="#"
            className="text-[36px] hover:border rounded-md p-1 hover:bg-slate-500 hover:bg-opacity-50"
            onClick={clickedHomeMoveToTop}
          >
            Home
          </Link>
        </div>
        <div className="flex sm:hidden p-4">
          <button
            type="button"
            className={`border rounded-lg p-2 flex justify-center items-center w-[50px] hover:bg-slate-500 ${
              !openMenu && "bg-gray-400"
            }`}
            onClick={clickedMenuButton}
          >
            <span className="w-[24px] h-[24px] rounded-full flex justify-center items-center">
              {MyIcons.Bars("lg")}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${
          openMenu && "hidden"
        } flex sm:flex flex-col sm:flex-row justify-evenly font-bold w-full sm:min-w-[440px] px-2`}
      >
        {menuArr.map((menuItem) => (
          <Link
            href="/"
            key={menuItem.id}
            className="my-1 hover:border p-2 rounded-md hover:bg-slate-500 hover:bg-opacity-50"
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default TopNavBar;
