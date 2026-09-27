import React, { useState } from "react";

function Input({ title, onChangeTitle, desc, onChangeDesc }) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input
        className="w-100"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={onChangeTitle}
        data-testid="title-input"
      />
      <textarea
        className="mt-10 w-100"
        placeholder="Enter Description"
        value={desc}
        onChange={onChangeDesc}
        data-testid="description-input"
      />
    </div>
  );
}

export default Input;
