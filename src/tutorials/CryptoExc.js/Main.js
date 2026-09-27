import React, { useState } from "react";
import Table from "./Table";

function Main() {
  const [balance, setBalance] = useState(17042.67);
  const [input, setInput] = useState(null);
  const [isLessThan, setIsLessThan] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isMoreThan, setIsMoreThan] = useState(false);

  const handleChange = (e) => {
    console.log("valid ", !isLessThan && !isEmpty && !isMoreThan);
    setInput(e.target.value);
    const inp = Number(e.target.value);
    console.log(inp);
    if (e.target.value === "") {
      setIsLessThan(false);
      setIsMoreThan(false);
      setIsEmpty(true);
    } else if (balance != 0 && inp < balance && inp < 0.01) {
      setIsLessThan(true);
      setIsMoreThan(false);
      setIsEmpty(false);
    } else if (balance != 0 && inp > balance) {
      setIsLessThan(false);
      setIsMoreThan(true);
      setIsEmpty(false);
    } else {
      setIsLessThan(false);
      setIsMoreThan(false);
      setIsEmpty(false);
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={input}
              onChange={handleChange}
            />
            of my $<span>{balance}</span>:
          </label>
          {(isLessThan || isEmpty || isMoreThan) && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
              disabled={!isLessThan || !isEmpty || !isMoreThan}
            >
              {isEmpty
                ? "Amount cannot be empty"
                : isLessThan
                  ? "Amount cannot be less than $0.01"
                  : isMoreThan
                    ? "Amount cannot exceed the available balance"
                    : ""}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table isValid={!isLessThan && !isEmpty && !isMoreThan} input={input} />
    </div>
  );
}

export default Main;
