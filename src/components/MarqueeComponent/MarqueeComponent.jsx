import React from "react";
import Marquee from "react-fast-marquee";
import { marquee_list } from "@/src/static/static";

const MarqueeComponent = () => {
  return (
    <Marquee className="mb-16">
      {marquee_list.length > 0 &&
        marquee_list.map((el) => {
          return (
            <div className="h-[48px] px-[24px]" key={Math.random()*100}>
                <img src={el} key={Math.random() * 100} className="h-[100%]" />
            </div>
          );
        })}
    </Marquee>
  );
};

export default MarqueeComponent;
