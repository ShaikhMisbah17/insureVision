import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1 min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row mx-0 justify-content-center w-100">
        {/* Image with Text Overlay */}
        
         <div className= "position-absolute px-0 w-100 start-0 top-0 image-top">
          <img src="./assets/banner.png"
          alt="lineVisuals"
          className="w-100 opacity-0.5 first-image"
        />
         </div>

        <div className="col-md-6 position-relative image-container mx-auto">
          <img 
            src= "./assets/section1.png"           
            alt="Safety"
            className="img-fluid w-100 opacity-100 mt-5 safety"
          />

          {/* Top Center Text */}
          <div className="overlay-text top-text text-center fw-bold">
            <h1>More Context</h1>
            <h1>Less Risk</h1>
          </div>
          
          {/* Bottom Center Text */}
          <div className="overlay-text bottom-text text-center">
            <h5>Insurevision combines video from a vehicle’s forward-facing camera</h5>
            <h5>with a unique transformer AI model to deliver intelligent risk analysis.</h5>
          </div>
        </div>

        <p className='text-msg text-center mb-3'>THE FUTURE OF ROAD SAFETY, NOW.</p>

      </div>
    </div>
  );
};

export default Section1;
