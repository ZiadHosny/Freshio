import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import { BsHeart, BsCart } from "react-icons/bs";
import { DetailsContext } from "../../context/DetailsContext";
export const Details = () => {
  let { item } = useContext(DetailsContext);
  return (
    <div className="container">
      
        <div className="row border shadow mt-5 mb-5 p-5 rounded">
          <div className="col-md-4">
            <img src={item.image} className="w-100 " alt="/" />
          </div>

          <div className="col-md-7 ml-5  offset-md-1 col-12">
            <p className="h2 fw-bold">{item.title}</p>
            <p className="mt-3">{item.price}</p>
            <button className="btn btn-outline-success addBtn px-5 my-3 ">
              Add
            </button>
            <div className="mt-3">
              <BsHeart className=" fs-3" />
              <span className="ps-2 fs-20 link">add to wishlist</span>
              <BsCart className="ms-2 fs-3" />
              <span className="ps-2 link">add to cart</span>
            </div>
            <p className="h5 mt-4 fw-bold">Description</p>
            <p>{item.body}</p>
          </div>
        </div>
      
      
    </div>
  );
};
export default Details;
