import React, { useState } from "react";

function Button() {
  const [status, setStatus] = useState(true);

  function handleClick() {
    setStatus((prev) => !prev);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {(status ? "ON" : "OFF") + "wassup"}
      </button>
    </div>
  );
}
export default Button;
