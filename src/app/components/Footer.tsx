import React from "react";
import * as MyIcons from "../../../public/asset/icons/MyIcons";

const Footer = () => {
  return (
    <div className="px-4 py-6 bg-[#4E4637]">
      <div className="flex flex-col justify-center items-center text-white text-[20px] font__sans">
        <div className="mr-4 flex">
          <span className="mr-2">Contact Me.</span>
          <div className="hover:text-blue-600 hover:scale-[105%]">
            <a href="mailto:obo1412@gmail.com">
              {MyIcons.HandPointRight()} [obo1412@gmail.com]
            </a>
          </div>
        </div>
        <div>© 2023. Oh Byung Ock. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
