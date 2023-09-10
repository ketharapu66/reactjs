import React, { useState } from "react";

function Engineer() {
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [Location, setLocation] = useState("");
  const [Joining, setJoining] = useState("");
  const [mobile, setMobile] = useState("");

  function validate() {
    let vstatus = false;
    if (Name === "") window.alert("Name cannot be blank");
    else vstatus = true;
    if (ID === "") window.alert("ID cannot be blank");
    else vstatus = true;
    // Validate mobile number
    if (mobile === "") {
      window.alert("Mobile number cannot be blank");
      vstatus = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      window.alert("Mobile number must be 10 digits");
      vstatus = false;
    }
    return vstatus;
  }

  function empty() {
    setName("");
    setID("");
    setLocation("");
    setJoining("");
    setMobile("");
  }

  return (
    <div>
      <center>
        <h1>Engineer Details</h1>
        <form onSubmit={validate}>
          <label style={{ fontWeight: "bold" }}>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)}  value={Name}
               style={{ marginBottom: "10px" }} />
          <br></br>
          <label style={{ fontWeight: "bold" }}>ID</label>
          <input type="number" onChange={(e) => setID(e.target.value)} value={ID}
            style={{ marginBottom: "10px" }}
            min="1000"
            max="100000"/>
          <br />
          <label style={{ fontWeight: "bold" }}>Joining Date</label>
          <input type="date" onChange={(e) => setJoining(e.target.value)}  value={Joining}
            style={{ marginBottom: "10px" }} />
          <br/>
          <label style={{ fontWeight: "bold" }}>Mobile Number</label>
          <input
            type="number"  onChange={(e) => setMobile(e.target.value)}  value={mobile}
            style={{ marginBottom: "10px" }}/>
          <br />
          <label style={{ fontWeight: "bold" }}>Location</label>
          <select  size="0"  name="base_Location"  onChange={(e) => setLocation(e.target.value)}
            value={Location} >
            <option value="MI">Mumbai</option>
            <option value="MGR">Chennai</option>
            <option value="BLR">Bangalore</option>
            <option value="hyd">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
          </select>
          <br />
          <input type="submit" value="Save" />
          <input type="reset" onClick={empty} />
        </form>
        <br />
        <table  style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px", }} >
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Joining Date</th>
              <th>Mobile</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black",  padding: "8px" }} >
                {Name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }} >
                {ID}
              </td>
              <td  style={{ border: "1px solid black", padding: "8px" }} >
                {Joining}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}  >
                {mobile}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }} >
                {Location}
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Engineer;
