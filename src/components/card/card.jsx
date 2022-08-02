import React from 'react';
const Card = ({ url, price, title, category, amount }) => {
  return (
    <>
      <div className="bg-white card mx-2">
        <div className="imageContainer">
          <img src={url} className="image card-img-top p-3" alt="img" />
        </div>
        <div className="card-body">
          <h5 className="card-title heading">{title}</h5>
          <h6 className="card-category">{category}</h6>
          <div className="d-flex justify-content-between mr-3">
            <p className="card-price">{price} EG</p>
            <p>Amount: {amount}</p>
          </div>
          <div className="pb-3">
            <a type="button">
              <span className="text-warning">Add to favourite</span>
            </a>
          </div>

          <a className="btn btn-secondary p-2 mb-1 d-block mx-auto">Details</a>
          <a type="button" className="btn btn-success d-block mx-auto">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
