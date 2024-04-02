import React, { useState } from "react";
import { CustomerInformationConstants } from "../constants/constants";

const CustomerInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  // console.log("First Name:", firstName);
  // console.log("Last Name:", lastName);
  // console.log("Email:", email);
  // console.log("Phone:", phone);

  return (
    <div className="w-[345px] h-[35px] col-span-3">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Customer Information
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        <div className="flex flex-col">
          <label>
            {CustomerInformationConstants[0].label}
            {CustomerInformationConstants[0].mandatory && (
              <span className="text-red">*</span>
            )}
          </label>
          <input
            type="text"
            value={firstName}
            placeholder={CustomerInformationConstants[0].placeholder}
            onChange={handleFirstNameChange}
            className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label>
            {CustomerInformationConstants[1].label}
            {CustomerInformationConstants[1].mandatory && (
              <span className="text-red">*</span>
            )}
          </label>
          <input
            type="text"
            value={lastName}
            placeholder={CustomerInformationConstants[1].placeholder}
            onChange={handleLastNameChange}
            className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label>
            {CustomerInformationConstants[2].label}
            {CustomerInformationConstants[2].mandatory && (
              <span className="text-red">*</span>
            )}
          </label>
          <input
            type="email"
            value={email}
            placeholder={CustomerInformationConstants[2].placeholder}
            onChange={handleEmailChange}
            className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label>
            {CustomerInformationConstants[3].label}
            {CustomerInformationConstants[3].mandatory && (
              <span className="text-red">*</span>
            )}
          </label>
          <input
            type="tel"
            value={phone}
            placeholder={CustomerInformationConstants[3].placeholder}
            onChange={handlePhoneChange}
            className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
