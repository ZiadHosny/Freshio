import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import {BsHeart,BsCart} from "react-icons/bs"
import { chickenApiContext } from "../../context/ApiContext";
import { useParams } from "react-router-dom";



export const Details = () => {
  let params=useParams()
  let { chickens } = useContext(chickenApiContext);
  const [singleProduct, setsingleProduct] = useState({});
    
    useEffect(()=>{setsingleProduct(chickens[params.id-1])},[])

  return (
    <div className="container">
      <div class="row border shadow mt-5 mb-5 p-5 rounded">
        <div className="col-md-4">
          <img
            src={singleProduct.image}
            className="w-100 "
            alt="/"
          />
        </div>

        <div className="col-md-7 ml-5  offset-md-1 col-12">
          <p className="h2 fw-bold">{singleProduct.title}</p>
          <p className="mt-3">{singleProduct.price}</p>
          <button className="btn btn-outline-success addBtn px-5 my-3 ">Add</button>
          <div className="mt-3" >
          <BsHeart className=" fs-3"/>
          <span className="ps-2 fs-20 link">add to wishlist</span>
          <BsCart className="ms-2 fs-3"/>
          <span className="ps-2 link">add to cart</span>
          </div>
          <p className="h5 mt-4 fw-bold">Description</p>
          <p>
          {singleProduct.body}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Details;
