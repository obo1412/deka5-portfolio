"use client";

import React, { useState } from "react";
import Link from "next/link";

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

  const clickedMenuButton = () => {
    setOpenMenu(!openMenu);
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
            href="/"
            className="text-[36px] hover:border rounded-md p-1 hover:bg-slate-500 hover:bg-opacity-50"
          >
            Home
          </Link>
        </div>
        <div className="flex sm:hidden p-4">
          <button
            type="button"
            className="border rounded-lg p-2 flex justify-center items-center w-[50px] hover:bg-slate-500"
            onClick={clickedMenuButton}
          >
            <span className="w-[24px] h-[24px] bg-red-600 hover:bg-red-400 rounded-full"></span>
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
