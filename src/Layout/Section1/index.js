import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1">
      <div className="row mx-0">
        {/* Image with Text Overlay */}
        <div className="col-md-6 position-relative image-container mx-auto">
          <img 
            src= "./assets/section1.png"           
            alt="Safety"
            className="img-fluid w-100 opacity-100 mt-5"
          />

          {/* Top Center Text */}
          <div className="overlay-text top-text text-center ">
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


        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-6 d-flex justify-content-start gap-2">
              <button className="btn btn-outline-primary">Facebook</button>
              <button className="btn btn-outline-primary">Instagram</button>
              <button className="btn btn-outline-primary">Blogs</button>
            </div>
            <div className="col-6 d-flex justify-content-end gap-2">
              <button className="btn btn-outline-secondary">Solutions</button>
              <button className="btn btn-outline-secondary">Software</button>
              <button className="btn btn-outline-secondary">Leadership</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
