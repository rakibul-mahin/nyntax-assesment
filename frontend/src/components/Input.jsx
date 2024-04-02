import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import Modal from "./Modal";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const Input = ({ label, mandatory, placeholder, icon, stacked }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime.toLocaleString().slice(0, 24));
    setShowModal(false);
  };

  return (
    <div
      className={`flex ${
        stacked ? "flex-col" : "flex-row items-center justify-end gap-9"
      } gap-2`}
    >
      <label>
        {label}
        {mandatory && <span className="text-red">*</span>}
      </label>
      <div className="relative flex flex-col justify-center items-center">
        {icon ? (
          <input
            placeholder={placeholder}
            className={`border border-light-bg rounded-md ${
              stacked ? "w-[300px]" : "w-[202px]"
            } h-[40px] p-[6px]`}
            readOnly
            value={selectedDateTime ? selectedDateTime.toString() : ""}
          />
        ) : (
          <input
            placeholder={placeholder}
            className={`border border-light-bg rounded-md ${
              stacked ? "w-[300px]" : "w-[202px]"
            } h-[40px] p-[6px]`}
          />
        )}
        {icon && (
          <CiCalendar
            className="ml-[245px] w-[18px] h-[18px] absolute cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        )}
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <Datetime
              dateFormat="YYYY-MM-DD"
              timeFormat="HH:mm"
              onChange={handleDateTimeSelect}
              value={new Date()}
              className="w-60 appearance-none shadow border rounded py-3 px-2"
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Input;
