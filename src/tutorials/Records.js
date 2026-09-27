import React, { useEffect, useState } from "react";
import medical_records from "./medicalRecords";

function Records({ record, id }) {
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="mx-auto"
          value={id}
        >
          <h4 id="patient-name">
            {record ? (record.length > 0 ? record[0].userName : "") : ""}
          </h4>
          <h5 id="patient-dob">
            DOB: {record ? (record.length > 0 ? record[0].userDob : "") : ""}
          </h5>
          <h5 id="patient-height">
            Height:{" "}
            {record ? (record.length > 0 ? record[0].meta.height : "") : ""}
          </h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn">
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {record ? (
            record.data.map((r) => {
              <tr key={r.id}>
                <td style={{ padding: "12px" }}>{r.id}</td>
                <td style={{ padding: "12px" }}>{r.timestamp}</td>
                <td style={{ padding: "12px" }}>{r.diagnosis.name}</td>
                <td style={{ padding: "12px" }}>{r.meta.weight}</td>
                <td style={{ padding: "12px" }}>{r.doctor.name}</td>
              </tr>;
            })
          ) : (
            <tr>
              <td style={{ padding: "12px" }}>{}</td>
              <td style={{ padding: "12px" }}>{}</td>
              <td style={{ padding: "12px" }}>{}</td>
              <td style={{ padding: "12px" }}>{}</td>
              <td style={{ padding: "12px" }}>{}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
