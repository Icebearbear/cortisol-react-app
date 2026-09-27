import React, { useState } from "react";

export default function ItemList() {
  // TODO: Define state for items list, initialized with default array
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  // TODO: Define state for text input field
  const [newItem, setNewItem] = useState("");

  // TODO: Define handler to append newItem to items list
  const handleAddItem = (e) => {
    e.preventDefault();
    // Append item to state and clear input
    setItems((prev) => [...prev, newItem]);
    setNewItem("");
    console.log("saved");
  };

  function handleChange(e) {
    setNewItem(e.target.value);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Dynamic Item List</h2>

      {/* TODO: Add form or input with button to append new item */}
      <form onSubmit={handleAddItem} style={{ marginBottom: "15px" }}>
        <input
          value={newItem}
          onChange={handleChange}
          type="text"
          placeholder="Enter new item..."
          /* Bind value and onChange handler */
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add Item
        </button>
      </form>

      {/* TODO: Render unordered list mapping over items */}
      <ul>
        {
          /* Render <li> elements with key props here */
          items.map((item, index) => (
            <li key={index} value={item}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
