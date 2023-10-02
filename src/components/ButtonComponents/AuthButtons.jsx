import React from "react";

const AuthButtons = (props) => {
  return (
    <div
      className={
        "flex-1 text-sm p-1 md:p-2 text-center mx-1 md:mx-2 rounded-md hover:cursor-pointer " +
        props.textColor +
        " " +
        props.bgColor
      }
    >
      {props.title}
    </div>
  );
};

export default AuthButtons;
