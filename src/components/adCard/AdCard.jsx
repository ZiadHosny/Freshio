import React from 'react';
import './AdCard.css';
const adCard = () => {
  return (
    <div className="adBg w-100 d-flex flex-column justify-content-center align-items-start">
      <h2 className="fw-bolder">Organic Orange</h2>
      <h2 className="fw-bolder">Juice 40% Flat</h2>
      <p className="my-3">
        Our purpose is to build solutions that remove barriers preventing people
        from doing their best work, and this is at the heart.
      </p>
      <button type="button" className="mt-3 fs-5 btn btn-success">
        Shop Now
      </button>
    </div>
  );
};
export default adCard;
