import React, { useEffect } from "react";
// import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ isValid, input }) {
  const init = 0.0;

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList &&
            cryptocurrencyList.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>
                  1 USD = {c.rate} {c.code}
                </td>
                <td>
                  {input == null
                    ? init.toFixed(8)
                    : isValid
                      ? (c.rate * input).toFixed(8)
                      : "n/a"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
