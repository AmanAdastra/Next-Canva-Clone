import React from "react";
import SearchBar from "../SearchComponent/SearchBar";
import AuthButtons from "../ButtonComponents/AuthButtons";
import LogoIcon from "../Icons/LogoIcon";
const TopNavbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center h-[72px] w-[100vw] px-8 shadow-md ">
      <div className="w-[10%] flex items-center">
        <LogoIcon />
      </div>

      <div className="w-[70%] flex justify-center">
        <SearchBar />
      </div>

      <div className="flex w-[20%]">
        <div className="w-[100%] md:w-[50%]">
          <AuthButtons
            textColor={"text-black"}
            bgColor={"bg-[#40576d12]"}
            title={"Login"}
          />
        </div>
        <div className="hidden md:block w-[50%] ">
          <AuthButtons
            textColor={"text-white"}
            bgColor={"bg-[#8B3DFF]"}
            title={"Sign up"}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
