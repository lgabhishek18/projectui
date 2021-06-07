import React from "react";
import iconUrl from "../assets/Icontime_icon.png";

function Ftg() {
  return (
    <div
      className='d-flex align-items-center justify-between'
      style={{ marginTop: "20px" }}
    >
      <img src={iconUrl} width='30px' height='40px'></img>
      <p className='pl-2' style={{ maxWidth: "180px" }}>
        {"Upcoming <Feature>"}
        <br /> {"Tues, 8th June "}
        <br />
        {"12:00 PM - 12:00 PM"}
      </p>
      <button className='btn btn-outline'>View</button>
    </div>
  );
}

export default Ftg;
