import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa";

const VehicleInformation = () => {
  const [vTypeClick, setVTypeClick] = useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(
          `https://exam-server-7c41747804bf.herokuapp.com/carsList?type=${selectedVehicleType}`
        );
        if (response.data.status === "success") {
          const filteredVehicles = response.data.data.filter(
            (vehicle) => vehicle.type === selectedVehicleType
          );
          setVehicles(filteredVehicles);
        } else {
          console.error("Error fetching vehicles:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    if (selectedVehicleType) {
      fetchVehicles();
    }
  }, [selectedVehicleType]);

  useEffect(() => {
    if (selectedVehicle) {
      const selectedVehicleDetails = vehicles.find(
        (vehicle) => vehicle.id === selectedVehicle
      );
      setVehicleDetails(selectedVehicleDetails);
    } else {
      setVehicleDetails(null);
    }
  }, [selectedVehicle, vehicles]);

  const handleSelectVehicleType = (type) => {
    setSelectedVehicleType(type);
    setSelectedVehicle("");
    setVTypeClick(false);
  };

  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicle(vehicleId);
  };

  return (
    <div className="w-[345px] h-[35px] col-span-3 mt-[370px] gap-9">
      <h3 className="border-b-2 border-btn font-bold text-2xl mb-5">
        Vehicle Information
      </h3>
      <div className="flex flex-col gap-4 w-[345px] p-[20px] border border-light-bg rounded-md">
        <div>
          <label className="text-gray-700">
            Vehicle Type<span className="text-red">*</span>
          </label>
          <div className="relative flex flex-col justify-center items-center">
            <input
              className="relative border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
              value={selectedVehicleType} // Bind input value to selected vehicle type
              readOnly // Make input read-only
            />
            <FaAngleDown
              className="ml-[245px] w-[18px] h-[18px] absolute cursor-pointer"
              onClick={() => setVTypeClick((prev) => !prev)}
            />
          </div>
          {vTypeClick && (
            <div className="w-[300px] rounded-md border-2 p-6 border-btn absolute bg-white">
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="vehicleType"
                  onChange={() => handleSelectVehicleType("SUV")}
                />
                <p className="font-bold text-gray-800">SUV</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="vehicleType"
                  onChange={() => handleSelectVehicleType("Sedan")}
                />
                <p className="font-bold text-gray-800">Sedan</p>
              </div>
            </div>
          )}
        </div>

        {selectedVehicleType && (
          <div>
            <label className="text-gray-700">
              Vehicle<span className="text-red">*</span>
            </label>
            <select
              className="border border-light-bg rounded-md w-[300px] h-[40px] p-[6px]"
              value={selectedVehicle}
              onChange={(e) => handleSelectVehicle(e.target.value)}
            >
              <option value="">Select Vehicle</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.make} {vehicle.model} ({vehicle.year})
                </option>
              ))}
            </select>
          </div>
        )}

        {vehicleDetails && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold text-gray-800">
              Selected Vehicle Details
            </h3>
            <p className="text-red">Make: {vehicleDetails.make}</p>
            <p className="text-red">Model: {vehicleDetails.model}</p>
            <p className="text-red">Year: {vehicleDetails.year}</p>
            <p className="text-red">Seats: {vehicleDetails.seats}</p>
            <p className="text-red">Bags: {vehicleDetails.bags}</p>
            <p className="text-red">
              Features: {vehicleDetails.features.join(", ")}
            </p>
            <p className="text-gray-700">Rates:</p>
            <ul className="list-disc pl-4">
              <li className="text-red">
                Hourly: ${vehicleDetails.rates.hourly}
              </li>
              <li className="text-red">Daily: ${vehicleDetails.rates.daily}</li>
              <li className="text-red">
                Weekly: ${vehicleDetails.rates.weekly}
              </li>
            </ul>
            <img
              src={vehicleDetails.imageURL}
              alt={`${vehicleDetails.make} ${vehicleDetails.model}`}
              className="mt-4 rounded-md shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleInformation;
