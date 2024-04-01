import React from "react";

const ChargesSummary = () => {
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
              <td className="text-center">$99.00</td>
              <td className="text-center">$99.00</td>
            </tr>
            <tr>
              <td>Weekly</td>
              <td></td>
              <td></td>
              <td className="text-center">1</td>
              <td className="text-center">$390.00</td>
              <td className="text-center">$390.00</td>
            </tr>
            <tr>
              <td>Collision Damage Waiver</td>
              <td></td>
              <td></td>
              <td className="text-center"></td>
              <td className="text-center">$9.00</td>
              <td className="text-center">$9.00</td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
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
                <b>$498.00</b>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesSummary;
