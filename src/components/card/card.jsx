import React from 'react';
const Card = ({url, price, title, category}) => {
  return (
    <>
      <div className="bg-white h-100 card mx-2">
        <img src={url} className="card-img-top p-3" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-category">{category}</h6>
          <p className="card-price">{price}</p>
          <div className="pb-3">
            <a type="button">
              <i className="fa-solid fa-star pe-2 wishItem"></i>
              <span className="text-warning">Add to favourite</span>
            </a>
          </div>

          <a className="btn btn-secondary p-2 mb-1 d-block mx-auto">
            Details
          </a>
          <a type="button" className="btn btn-success d-block mx-auto">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;




