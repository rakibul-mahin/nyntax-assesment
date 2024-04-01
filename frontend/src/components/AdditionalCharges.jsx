import React from "react";

const AdditionalCharges = () => {
  return (
    <div className="w-[345px] h-[35px] col-span-3 mt-[370px] gap-9">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Additional Charges
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-3">
            <input type="checkbox" />
            <p className="font-bold">Collision Damage Waiver</p>
          </div>
          <p className="font-bold">$9.00</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-3">
            <input type="checkbox" />
            <p className="font-bold">Liability Insurance</p>
          </div>

          <p className="font-bold">$15.00</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-3">
            <input type="checkbox" />
            <p className="font-bold">Rental Tax</p>
          </div>

          <p className="font-bold">11.5%</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCharges;
