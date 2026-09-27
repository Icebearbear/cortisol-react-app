import React, { useState } from "react";

function EmployeeValidation() {
  const [isNameError, setIsNameError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isIdError, setIsIdError] = useState(true);
  const [isDateError, setIsDateError] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [date, setDate] = useState(null);

  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameError(newName.length < 4);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailError(!validateEmail(newEmail));
  };

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
    setIsIdError(newId.length !== 6);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (!newDate) {
      setIsDateError(true);
      return;
    }
    const selectedDate = new Date(newDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setIsDateError(selectedDate > today);
  };

  const handleSubmit = (e) => {
    setName(null);
    setEmail(null);
    setId(null);
    setDate(null);
    setIsNameError(true);
    setIsEmailError(true);
    setIsDateError(true);
    setIsIdError(true);
  };

  const anyError = () => {
    return isNameError || isEmailError || isIdError || isDateError;
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={handleNameChange}
        />
        <p
          className="error mt-2"
          style={{ color: "red" }}
          value={
            isNameError
              ? "Name must be at least 4 characters long and only contain letters and spaces"
              : ""
          }
        >
          {isNameError
            ? "Name must be at least 4 characters long and only contain letters and spaces"
            : ""}
        </p>
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <p
          className="error mt-2"
          style={{ color: "red" }}
          value={isEmailError ? "Email must be a valid email address" : ""}
        >
          {isEmailError ? "Email must be a valid email address" : ""}
        </p>
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="number"
          name="employeeId"
          value={id}
          placeholder="Employee ID"
          onChange={handleIdChange}
        />
        <p
          className="error mt-2"
          style={{ color: "red" }}
          value={isIdError ? "Employee ID must be exactly 6 digits" : ""}
        >
          {isIdError ? "Employee ID must be exactly 6 digits" : ""}
        </p>
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={date}
          placeholder="Joining Date"
          onChange={handleDateChange}
        />
        <p
          className="error mt-2"
          style={{ color: "red" }}
          value={isDateError ? "Joining Date cannot be in the future" : ""}
        >
          {isDateError ? "Joining Date cannot be in the future" : ""}
        </p>
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={anyError()}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidation;
