import React from "react";
import "./Header.css";

const index = ({ scrollToSection }) => {
  return (
    <div className="header row mx-0 justify-content-evenly fw-bold my-2 pt-3 mb-5">
      <div className="col text-start">
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="col company-name text-center ">
        {" "}
        <img 
        src="./assets/logo.png"
        className="label" />
      </div>
      <div className="col text-end">
        <button className="btn btn-success" onClick={scrollToSection}>
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default index;
