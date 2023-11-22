"use client";

import React, { useState } from "react";
import Link from "next/link";

const TopNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickedMenuButton = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      className="flex flex-row flex-0 justify-between items-center bg-gray-800 bg-opacity-80 text-white px-4 w-full h-[60px] fixed top-0 z-10"
      style={{
        fontFamily: "PF스타더스트",
      }}
    >
      <div className="w-[25%]">
        <Link href="/" className="text-[40px]">
          Home
        </Link>
      </div>
      <div className="flex sm:hidden">
        <button
          type="button"
          className="border rounded-lg p-2 flex justify-center items-center w-[50px] hover:bg-slate-500"
          onClick={clickedMenuButton}
        >
          <span className="w-[24px] h-[16px] bg-red-600 hover:bg-red-400 rounded-md"></span>
        </button>
      </div>
      <div
        className={`${
          openMenu && "hidden"
        } sm:flex flex-col sm:flex-row flex-1 justify-evenly font-bold`}
      >
        <Link href="/">About Me</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Archiving</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Career</Link>
      </div>
    </nav>
  );
};

export default TopNavBar;
