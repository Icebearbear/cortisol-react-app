import React, { useState } from "react";

export default function LiveParagraph() {
  // TODO: Initialize state to store the user's input text
  const [input, setInput] = useState("");

  // TODO: Create event handler to handle changes in the input field
  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <label htmlFor="text-input">Type something: </label>
      <br />

      {/* TODO: Add input element bound to state with onChange handler */}
      <input
        value={input}
        onChange={handleChange}
        id="text-input"
        type="text"
        placeholder="Type here..."
        style={{ padding: "8px", width: "300px", marginTop: "8px" }}
      />

      <h3>Live Output:</h3>
      {/* TODO: Display typed text in real time, or fallback text if empty */}
      <p style={{ minHeight: "24px", fontStyle: "italic", color: "#333" }}>
        {/* Render text here */ input ? input : "Nothing is typed"}
      </p>
    </div>
  );
}
