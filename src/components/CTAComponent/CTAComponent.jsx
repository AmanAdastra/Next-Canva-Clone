import React from "react";
import CTACard from "./CTACard/CTACard";
import { ctacontent } from "@/src/static/static";
import InfoComponent from "../InfoComponent/InfoComponent";
import MarqueeComponent from "../MarqueeComponent/MarqueeComponent";
const CTAComponent = () => {
  return (
    <div className=" w-[80%] mx-auto">
      <h1
        className="text-center mt-8 text-[36px] font-semibold font-sans tracking-normal
 text-[#0d1216]"
      >
        A perfect fit for everyone
      </h1>
      <div className="flex justify-center items-center mt-6 px-16">
        {ctacontent.length > 0
          ? ctacontent.map((el) => {
              return (
                <CTACard
                  key ={Math.random()*100}
                  is_premium={el.is_premium}
                  heading={el.heading}
                  paragraph={el.paragraph}
                  button_text={el.button_text}
                />
              );
            })
          : ""}
      </div>
      <InfoComponent />
      <MarqueeComponent />
    </div>
  );
};

export default CTAComponent;
