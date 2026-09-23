import React, { useState } from "react";

export default function ButtonToggle() {
  // TODO: Define state for `isOn` with boolean type, initialized to false
  const [isOn, setIsOn] = useState(false);
  // TODO: Create a click handler to toggle `isOn` state
  function onClick() {
    setIsOn((prev) => !prev);
  }
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Button Toggle</h2>

      {/* TODO: Render a button with dynamic style and click listener */}
      <button
        onClick={onClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "4px",
          color: "white",
          backgroundColor: isOn ? "green" : "red",
          /* Apply dynamic backgroundColor based on isOn state */
        }}
      >
        {/* Render "ON" or "OFF" based on state */ isOn ? "ON" : "OFF"}
      </button>

      {/* TODO: Render paragraph reflecting current status */}
      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Current Status: {/* Render ON or OFF here */ isOn ? "ON" : "OFF"}
      </p>
    </div>
  );
}
