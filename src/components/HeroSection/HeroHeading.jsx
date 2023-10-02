import React from "react";
import AuthButtons from "../ButtonComponents/AuthButtons";

const HeroHeading = () => {
  return (
    <>
      <div className="h-[72px]  flex flex-col justify-center items-center">
        <h1 className="text-[3rem] font-bold font-sans">
          What will you{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c4cc] to-[#7d2ae8]">
            design
          </span>{" "}
          today?
        </h1>
      </div>
      <p className="text-center text-[1.4rem] font-light leading-4 tracking-wide text-[#0d1216b3] mt-4">
          Canva makes it easy to create professional designs and to share or
          print them.
      </p>
      <div className="flex justify-center items-center mt-6">
        <span className="bg-[#8b3dff] text-white p-2 rounded-sm cursor-pointer text-sm">
            Sign up for free 
        </span>
      </div>
    </>
  );
};

export default HeroHeading;
