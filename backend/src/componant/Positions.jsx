import React from "react";

import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((st, index) => {
            const curValue = st.price * st.qty;
            const ProfitLoss= curValue - st.avg * st.qty;
            const isProfit = ProfitLoss >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = st.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{st.product}</td>
                <td>{st.name}</td>
                <td>{st.qty}</td>
                <td>{st.avg.toFixed(2)}</td>
                <td>{st.price.toFixed(2)}</td>
                <td className={profClass}>
                  {ProfitLoss.toFixed(2)}
                </td>
                <td className={dayClass}>{st.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;