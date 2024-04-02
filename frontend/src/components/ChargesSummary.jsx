import React, { useState, useEffect } from "react";

const ChargesSummary = ({
  selectedVehicleDetails,
  collisionDamageWaiver,
  liabilityInsurance,
  rentalTax,
}) => {
  // Sample rates
  const hourlyRate = selectedVehicleDetails
    ? selectedVehicleDetails.rates.hourly
    : 0;
  const dailyRate = selectedVehicleDetails
    ? selectedVehicleDetails.rates.daily
    : 0;
  const weeklyRate = selectedVehicleDetails
    ? selectedVehicleDetails.rates.weekly
    : 0;

  // Sample calculations based on user inputs
  const calculateTotal = () => {
    let total = 0;
    total += collisionDamageWaiver ? 9 : 0;
    total += liabilityInsurance ? 15 : 0;
    total += rentalTax ? (weeklyRate * 11.5) / 100 : 0; // Assuming rental tax is applied weekly
    return total;
  };

  const [total, setTotal] = useState(calculateTotal());

  useEffect(() => {
    setTotal(calculateTotal());
  }, [
    collisionDamageWaiver,
    liabilityInsurance,
    rentalTax,
    selectedVehicleDetails,
  ]);

  return (
    <div className="w-[345px] h-[35px] col-span-3">
      <h3 className="w-[623px] h-[35px] border-b-2 border-btn font-bold text-2xl mb-5">
        Charges Summary
      </h3>
      <div className="border-2 border-btn w-[623px] bg-light-bg pt-[20px] pb-[20px] pl-[10px] pr-[10px]">
        <table className="table-auto mx-auto">
          <thead className="border-b-2 border-btn">
            <tr>
              <th className="w-[450px] text-left" colspan="3">
                Charge
              </th>
              <th className="w-[114px] text-center">Unit</th>
              <th className="w-[110px] text-center">Rate</th>
              <th className="w-[110px] text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daily</td>
              <td></td>
              <td></td>
              <td className="text-center">1</td>
              <td className="text-center">${dailyRate}</td>
              <td className="text-center">${dailyRate}</td>
            </tr>
            <tr>
              <td>Weekly</td>
              <td></td>
              <td></td>
              <td className="text-center">1</td>
              <td className="text-center">${weeklyRate}</td>
              <td className="text-center">${weeklyRate}</td>
            </tr>
            <tr>
              <td>Collision Damage Waiver</td>
              <td></td>
              <td></td>
              <td className="text-center"></td>
              <td className="text-center">$9.00</td>
              <td className="text-center">
                {collisionDamageWaiver ? "$9.00" : "$0.00"}
              </td>
            </tr>
            <tr>
              <td>Liability Insurance</td>
              <td></td>
              <td></td>
              <td className="text-center"></td>
              <td className="text-center">$15.00</td>
              <td className="text-center">
                {liabilityInsurance ? "$15.00" : "$0.00"}
              </td>
            </tr>
            <tr>
              <td>Rental Tax (11.5%)</td>
              <td></td>
              <td></td>
              <td className="text-center"></td>
              <td className="text-center">11.5%</td>
              <td className="text-center">
                {rentalTax
                  ? `$${((weeklyRate * 11.5) / 100).toFixed(2)}`
                  : "$0.00"}
              </td>
            </tr>
            <tr>
              <th className="text-left" rowspan="5">
                Total
              </th>
              <td></td>
              <td></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <b>${total.toFixed(2)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="bg-btn p-3 rounded-md">Calculate</button>
    </div>
  );
};

export default ChargesSummary;
