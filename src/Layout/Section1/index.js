import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1">
      <div className="row mx-0">
        {/* Image with Text Overlay */}
        <div className="col-md-6 position-relative image-container mx-auto">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            alt="Safety"
            className="img-fluid w-100"
          />

          {/* Top Center Text */}
          <div className="overlay-text top-text text-center">
            <h3>Each Drive</h3>
            <h5>Safer Than The Last</h5>
          </div>

          {/* Bottom Center Text */}
          <div className="overlay-text bottom-text text-center">
            <p>Our revolutionary AI Video Transformer</p>
            <p>technology is ushering the future of road safety.</p>
          </div>
        </div>

        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-6">
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
