"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { carousalpiclinks } from "@/src/static/static";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const displayCarousal = carousalpiclinks.map((row) => {
  return {
    key: row.id,
    children: <img src={row} className="h-[240px] w-[176px] rounded-lg" />,
  };
});

const CarousalComponent = () => {
  return (
    <div className="h-[240px] flex justify-center items-center mt-16">
      <div className=" w-[80vw] h-[240px] ">
        <Swiper
          className="relative"
          modules={[Navigation]}
          slidesPerView={8}
          initialSlide={1}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
        >
          {displayCarousal.length > 0 &&
            displayCarousal.map((el, index) => {
              return <SwiperSlide key={index}>{el.children}</SwiperSlide>;
            })}
          <div className="swiper-next absolute top-[110px] right-0 z-10 rounded-full bg-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 512 512"
            >
              <path
                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="swiper-prev absolute top-[110px] left-0 z-10 rounded-full bg-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 512 512"
            >
              <path
                d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
                fill="#fff"
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CarousalComponent;
