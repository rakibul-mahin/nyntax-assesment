import React from "react";
import Input from "./Input";
import { CustomerInformationConstants } from "../constants/constants";

const CustomerInformation = () => {
  return (
    <div className="w-[345px] h-[35px] col-span-3">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Customer Information
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        {CustomerInformationConstants.map((obj) => (
          <Input
            label={obj.label}
            mandatory={obj.mandatory}
            placeholder={obj.placeholder}
            icon={obj.icon}
            stacked={obj.stacked}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerInformation;
