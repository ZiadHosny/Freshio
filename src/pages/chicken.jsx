import React from 'react';
import { useContext, useEffect } from 'react';
import { chickenApiContext } from '../context/ApiContext';
import Account from "./Account"
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import "./chicken.css";
import { Link } from 'react-router-dom';

export default function Chicken() {

  let { chickens } = useContext(chickenApiContext);
  console.log("account", chickens);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <Account />
        </div>
        <div className='col-md-9'>
          <div className='row p-3 g-3'>
            {chickens.map((item,index) => (

              <div className=' col-md-3'>
                <div className='border rounded p-3'>
                  <div className='d-flex justify-content-between'>
                    <Link to={`/details/${item.id}`}>
                      <HiOutlineArrowsExpand className='fs-3 mt-1 icon-color' />
                    </Link>
                    <BsHeart className='fs-3 mt-1 icon-color' />
                  </div>
                  <img src={item.image} className='w-75 d-block m-auto img-height ' />
                  <h5 className='text-height '>{item.title}</h5>
                  <h5>{item.price}</h5>
                  <button type="button" class="btn btn-outline-success d-block w-75 m-auto my-4">Add to Cart</button>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
