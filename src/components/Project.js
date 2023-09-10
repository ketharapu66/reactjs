import React, { useState } from "react";

function Project() {
  const [Name, setName] = useState("Ravi");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");

  function validates() {
    let vstatus = true;

    if (Name === "") {
      window.alert("Name cannot be blank");
      vstatus = false;
    }

    if (EndDate !== "" && StartDate !== "") {
      if (new Date(EndDate) < new Date(StartDate)) {
        window.alert("End date cannot be before start date");
        vstatus = false;
      }
    }

    return vstatus;
  }

  function handleDelete() {
    // Reset the form fields
    setName("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <div>
      <center>
        <h1>Project Details</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
          />
          <br />
          <br />
          <label>Start Date</label>
          <input
            type="date"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            value={StartDate}
          />
          <br />
          <br />
          <label>End Date</label>
          <input
            type="date"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            value={EndDate}
          />
          <br />
          <br />
          <input type="submit" value="Add" onClick={validates} />
          &nbsp;&nbsp;
          
          <input type="button" value="Reset" onClick={handleDelete} />
          &nbsp;&nbsp;
          <input type="button" value="Delete" onClick={handleDelete} />
        </form>
        <br />
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {Name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {StartDate}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {EndDate}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Project;
