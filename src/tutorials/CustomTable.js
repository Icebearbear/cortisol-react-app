import React, { useState } from "react";

export default function CustomTable() {
  const [contacts, setContacts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});

  function handleChangeFN(e) {
    setFirstName(e.target.value);
  }
  function handleChangeLN(e) {
    setLastName(e.target.value);
  }
  function handleChangeP(e) {
    setPhone(e.target.value);
  }
  function validate() {
    var error = {};

    // Prevent adding empty fields
    if (!firstName) {
      error.firstName = "First Name cannot be null";
    }
    if (!lastName) {
      error.lastName = "Last Name cannot be null";
    }
    if (!phone) {
      error.phone = "Phone cannot be null";
    }
    setError(error);
    return Object.keys(error).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setContacts((prev) => {
      const updated = [
        ...prev,
        {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        },
      ];

      return updated.sort((a, b) =>
        a.firstName.localeCompare(b.lastName, undefined, {
          sensitivity: "base",
        }),
      );
    });

    setFirstName("");
    setLastName("");
    setPhone("");
    console.log(contacts);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
      >
        <div>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            style={{ padding: "8px", width: "300px", marginTop: "8px" }}
            value={firstName}
            onChange={handleChangeFN}
            required
          />
          <span style={{ color: "red" }}>{error.firstName}</span>
        </div>

        <div>
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            style={{ padding: "8px", width: "300px", marginTop: "8px" }}
            value={lastName}
            onChange={handleChangeLN}
            required
          />
          {/* <span style={{ color: "red" }}>{error.lastName}</span> */}
        </div>

        {/* not required */}
        <div>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            style={{ padding: "8px", width: "300px", marginTop: "8px" }}
            value={phone}
            onChange={handleChangeP}
          />
          <span style={{ color: "red" }}>{error.phone}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>First Name</th>
            <th style={{ padding: "10px" }}>Last Name</th>
            <th style={{ padding: "10px" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "#666",
                }}
              >
                No rows available.
              </td>
            </tr>
          ) : (
            contacts.map((contact, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{contact.firstName}</td>
                <td style={{ padding: "12px" }}>{contact.lastName}</td>
                <td style={{ padding: "12px" }}>{contact.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
