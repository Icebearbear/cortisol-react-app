import React, { useState } from "react";

const colours = [
  { label: "RED", value: "red" },
  { label: "BLUE", value: "blue" },
];
export default function ColorDropdown() {
  // TODO: Define state for selectedColor with initial value "red"
  //   const [colour, setColour] = useState(colours[0].value);
  const [selectedC, setSelectedC] = useState(colours[0].value);

  // TODO: Define event handler to update state on selection change
  function handleChange(e) {
    setSelectedC(e.target.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* <label htmlFor="color-select">Choose a color: </label> */}

      <h2>Select a Color</h2>
      {/* TODO: Add select dropdown bound to state with onChange listener */}
      <select value={selectedC} onChange={handleChange}>
        {
          /* Render options for red, blue, green, yellow */
          colours.map((colour) => (
            <option key={colour.value} value={colour.value}>
              {colour.label}
            </option>
          ))
        }
      </select>

      {/* TODO: Display current selected color text */}
      <p>Selected Color: {/* Render selected color here */ selectedC}</p>

      {/* TODO: Render a color box whose background color matches selectedColor */}
      <div
        style={{
          marginTop: "20px",
          width: "150px",
          height: "100px",
          backgroundColor: selectedC,
          //   borderRadius: "8px",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   color: selectedC === "yellow" ? "#000" : "#fff",
          //   fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
      />
    </div>
  );
}
