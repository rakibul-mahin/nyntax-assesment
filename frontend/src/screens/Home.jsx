import React, { useState } from "react";
import Button from "../components/Button";
import ReservationDetails from "../components/ReservationDetails";
import CustomerInformation from "../components/CustomerInformation";
import ChargesSummary from "../components/ChargesSummary";
import VehicleInformation from "../components/VehicleInformation";
import AdditionalCharges from "../components/AdditionalCharges";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 p-[55px]">
        <div className="col-span-9">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-[24px]">Reservation</h1>
            <Button btn_text={"Print / Download"} className="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 p-[55px]">
        <ReservationDetails />
        <CustomerInformation />
        <ChargesSummary />
      </div>
      <div className="grid grid-cols-12 p-[55px]">
        <VehicleInformation />
        <AdditionalCharges />
      </div>
    </div>
  );
};

export default Home;
