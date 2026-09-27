import React, { useState } from "react";

export default function SimpleCounter() {
  // TODO: Define state for `count` initialized to 0
  const [count, setCount] = useState(0);

  // TODO: Create click handlers for increment and decrement operations
  function handleOnClickIncrement() {
    setCount((prev) => prev + 1);
  }
  function handleOnClickDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center" }}
    >
      {/* TODO: Display current count value */}
      <h2>Count: {/* Render count here */ count}</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {/* TODO: Add Decrement button */}
        <button
          onClick={handleOnClickDecrement}
          style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
        >
          Decrement
        </button>

        {/* TODO: Add Increment button */}
        <button
          onClick={handleOnClickIncrement}
          style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
