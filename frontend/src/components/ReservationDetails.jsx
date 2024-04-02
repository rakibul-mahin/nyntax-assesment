// ReservationDetails.js
import React, { useState } from "react";
import { ReservationDetailsConstants } from "../constants/constants";
import { CiCalendar } from "react-icons/ci";
import Modal from "./Modal";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const ReservationDetails = () => {
  const [reservationID, setReservationID] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState("");
  const [discount, setDiscount] = useState("");

  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  // console.log(reservationID, pickupDate, returnDate, duration, discount);

  const handlePickupDateSelect = (dateTime) => {
    setPickupDate(dateTime.toLocaleString().slice(0, 24));
    setShowPickupModal(false);
  };

  const handleReturnDateSelect = (dateTime) => {
    setReturnDate(dateTime.toLocaleString().slice(0, 24));
    setShowReturnModal(false);
  };

  return (
    <div className="w-[345px] h-[35px] col-span-3">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Reservation Details
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        {ReservationDetailsConstants.map((obj, index) => (
          <div
            key={index}
            className={`flex ${
              obj.stacked
                ? "flex-col"
                : "flex-row items-center justify-end gap-9"
            } gap-2`}
          >
            <label>
              {obj.label}
              {obj.mandatory && <span className="text-red">*</span>}
            </label>
            <div className="relative flex flex-col justify-center items-center">
              {obj.icon && (
                <CiCalendar
                  className="ml-[245px] w-[18px] h-[18px] absolute cursor-pointer"
                  onClick={() => {
                    if (obj.label === "Pickup Date") {
                      setShowPickupModal(true);
                    } else if (obj.label === "Return Date") {
                      setShowReturnModal(true);
                    }
                  }}
                />
              )}
              <input
                type={obj.icon ? "text" : "text"}
                placeholder={obj.placeholder}
                className={`border border-light-bg rounded-md ${
                  obj.stacked ? "w-[300px]" : "w-[202px]"
                } h-[40px] p-[6px]`}
                value={
                  obj.label === "Reservation ID"
                    ? reservationID
                    : obj.label === "Pickup Date"
                    ? pickupDate
                    : obj.label === "Return Date"
                    ? returnDate
                    : obj.label === "Duration"
                    ? duration
                    : obj.label === "Discount"
                    ? discount
                    : ""
                }
                readOnly={obj.icon}
                onChange={(e) => {
                  if (obj.label === "Reservation ID") {
                    setReservationID(e.target.value);
                  } else if (obj.label === "Duration") {
                    setDuration(e.target.value);
                  } else if (obj.label === "Discount") {
                    setDiscount(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {showPickupModal && (
        <Modal onClose={() => setShowPickupModal(false)}>
          <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            onChange={handlePickupDateSelect}
            value={new Date()}
            className="w-60 appearance-none shadow border rounded py-3 px-2"
          />
        </Modal>
      )}
      {showReturnModal && (
        <Modal onClose={() => setShowReturnModal(false)}>
          <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            onChange={handleReturnDateSelect}
            value={new Date()}
            className="w-60 appearance-none shadow border rounded py-3 px-2"
          />
        </Modal>
      )}
    </div>
  );
};

export default ReservationDetails;
