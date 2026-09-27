import React, { useEffect, useState } from "react";
import medical_records from "./medicalRecords";

function Search({ setRecord, setId, id }) {
  const [selected, setSelected] = useState("0");
  const handleSelected = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    const patient = medical_records.find((record) => record.id === selected);
    setRecord(patient ? patient.data : null);
    setId(patient ? patient.id : null);
    console.log("data");
    console.log(patient ? patient.data : null);
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select
          data-testid="patient-name"
          value={selected}
          onChange={handleSelected}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((patient) => (
            <>
              {patient.data && patient.data.length > 0 ? (
                <option key={patient.id} value={patient.id}>
                  {patient.data[0].userName}
                </option>
              ) : (
                <></>
              )}
            </>
          ))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleClick}>
        Show
      </button>
    </div>
  );
}

export default Search;
