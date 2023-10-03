import React from "react";

const CTACard = (props) => {
  return (
    <div className="flex-1 py-[32px] px-[24px] border-1 h-[314px] border-[#6aa8ea26] rounded-md mx-2 ">
      <div className="h-[160px]">
        <h2 className="text-2xl text-[#0d1216] font-bold">
          {props.is_premium ? (
            <div className=" flex items-center">
              <svg
                className="inline-block mr-2 "
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="#fbbe28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.546 6.545c0 .992-.568 1.851-1.395 2.272 1.304 3.493 2.67 5.21 3.871 5.344 1.35.152 2.586-.47 3.796-2.004a1.23 1.23 0 0 1 .512-.39A2.545 2.545 0 1 1 27 12.869c.002.112-.01.23-.04.353l-1.981 7.981A3.67 3.67 0 0 1 21.423 24H10.577a3.67 3.67 0 0 1-3.556-2.797l-1.98-7.981a1.329 1.329 0 0 1-.04-.353 2.545 2.545 0 1 1 1.67-1.102c.193.076.376.21.527.41 1.152 1.525 2.375 2.142 3.78 1.984 1.259-.14 2.618-1.852 3.872-5.344a2.545 2.545 0 1 1 3.696-2.272ZM7 27.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25Z"
                  fill="#fbbe28"
                ></path>
              </svg>
              {props.heading}
            </div>
          ) : (
            props.heading
          )}
        </h2>
        <p className="mt-2 text-[#6d7276db]">{props.paragraph}</p>
      </div>
      <button className="bg-[#8B3Dff] w-[100%] h-[40px] px-[40px] font-semibold text-white my-10">
        {props.button_text}
      </button>
    </div>
  );
};

export default CTACard;
