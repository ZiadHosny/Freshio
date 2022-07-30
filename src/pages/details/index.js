import React from "react";
import "./details.css";
import {BsHeart,BsCart} from "react-icons/bs"

export const Details = () => {
  return (
    <div className="container">
      <div class="row border shadow mt-5 mb-5 p-5 rounded">
        <div className="col-md-4">
          <img
            src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg"
            className="w-100 "
            alt="/"
          />
        </div>

        <div className="col-md-7 ml-5  offset-md-1 col-12">
          <p className="h2 fw-bold">product title product title</p>
          <p className="mt-3">50 EGP</p>
          <button className="btn btn-outline-success addBtn px-5 my-3 ">Add</button>
          <div className="mt-3" >
          <BsHeart className=" fs-3"/>
          <span className="ps-2 fs-20 link">add to wishlist</span>
          <BsCart className="ms-2 fs-3"/>
          <span className="ps-2 link">add to cart</span>
          </div>
          <p className="h5 mt-4 fw-bold">Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, harum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Details;
