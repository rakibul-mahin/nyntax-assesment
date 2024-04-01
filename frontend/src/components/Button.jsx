import React from "react";

const Button = ({ btn_text }) => {
  return (
    <button className="bg-btn pl-[16px] pt-[8px] pr-[16px] pb-[8px] rounded-md text-white">
      {btn_text}
    </button>
  );
};

export default Button;
