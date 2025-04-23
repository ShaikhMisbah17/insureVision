import React from "react";
import "./Section2.css"; // optional if you want to center vertically

const Section2 = () => {
  return (
    <div className="container">
      <div className="section2 d-flex justify-content-center align-items-center text-center my-5">
        <p className="lead px-3">
          Traditional telematics detect harsh braking but skip the reasoning. AI
          dashcams spot objects but struggle to understand their danger.
          <br />
          <strong>
            Insurevision analyses risk contextually – not only predicting
            accidents – but preventing them.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Section2;
