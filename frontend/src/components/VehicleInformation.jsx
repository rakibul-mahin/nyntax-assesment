import React from "react";
import { VehicleInformationConstants } from "../constants/constants";
import { FaAngleDown } from "react-icons/fa";

const VehicleInformation = () => {
  return (
    <div className="w-[345px] h-[35px] col-span-3 mt-[370px] gap-9">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Vehicle Information
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        <div>
          <label>
            Vehicle Type<span className="text-red">*</span>
          </label>
          <div className="relative flex flex-col justify-center items-center">
            <input className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]" />
            <FaAngleDown className="ml-[245px] w-[18px] h-[18px] absolute" />
          </div>
        </div>
        <div>
          <label>
            Vehicle Type<span className="text-red">*</span>
          </label>
          <div className="relative flex flex-col justify-center items-center">
            <input className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]" />
            <FaAngleDown className="ml-[245px] w-[18px] h-[18px] absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
