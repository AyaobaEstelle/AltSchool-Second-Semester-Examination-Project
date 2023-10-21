import React from "react";
import { NavLink } from "react-router-dom";

 function About() {
  return (
    <div className="about clr-neutral-100">
      <h1 className="fs-700 fw-bold">counter</h1>
      <h3 className="fs-400"><a href="https://altschoolafrica.com/">AltSchool</a> Second Semester <strong>Examination Project</strong></h3>
      <p>A numeric Counter App with interactive buttons for <strong className="clr-primary-600">Increment and Decrement</strong></p>
      <ul>
        <li>Enter new value: input any number <span>to set the count value.</span></li>
        <li>Set value: click the 'set value' button <span>to place the value on the counter.</span></li>
        <li>Increment: click the 'Increment' button <span>to increase the count by 1.</span></li>
        <li>Decrement: click the 'Decrement' button <span>to decrease the count by 1.</span></li>
        <li>Reset: click the 'Reset' button <span>to reset count to 0.</span></li>
      </ul>
      <small>Note: The counter will not 'Set Value' <span>for Alphabets only NUMBERS</span></small>
      <p><a className="clr-neutral-100" href="https://github.com/AyaobaEstelle/AltSchool-Second-Semester-Examination-Project">GitHub Repository URL</a></p>
    </div>
  );
}
export default About;
