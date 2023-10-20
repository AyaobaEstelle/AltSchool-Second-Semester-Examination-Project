import React from "react";
import { NavLink } from "react-router-dom";

 function About() {
  return (
    <div className="about clr-neutral-100">
      <h1 className="fs-700 fw-bold">counter</h1>
      <h3 className="fs-400">AltSchool Second Semester <strong>Examination Project</strong></h3>
      <p>A numeric Counter App with interactive buttons for <strong className="clr-primary-600">Increment and Decrement</strong></p>
      <ul>
        <li>INCREMENT: click the 'Increment' button <span>to increase the count by 1</span></li>
        <li>DECREMENT: click the 'Decrement' button <span>to decrease the count by 1</span></li>
        <li>RESET: click the 'Reset' button <span>to reset count to 0</span></li>
      </ul>
    </div>
  );
}
export default About;
