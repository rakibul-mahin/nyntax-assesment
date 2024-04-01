import React from "react";
import { CiCalendar } from "react-icons/ci";

const Input = ({ label, mandatory, placeholder, icon, stacked }) => {
  return (
    <div
      className={`flex ${
        stacked ? "flex-col" : "flex-row items-center justify-end gap-9"
      } gap-2`}
    >
      <label>
        {label}
        {mandatory ? <span className="text-red">*</span> : ""}
      </label>
      <div className="relative flex flex-col justify-center items-center">
        <input
          placeholder={placeholder}
          className={`border border-light-bg rounded-md ${
            stacked ? "w-[300px]" : "w-[202px]"
          } h-[40px] p-[6px]`}
        />
        {icon ? (
          <CiCalendar className="ml-[245px] w-[18px] h-[18px] absolute" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
