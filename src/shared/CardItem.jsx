import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DetailsContext } from '../context/DetailsContext';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default function CardItem({ item,params },) {
  const [favicon, setfavicon] = useState(false);
  let {setitem} =useContext(DetailsContext);
 
  
  return (
    <div className=' col-md-3'>
      <div className='border rounded p-3'>
        <div className='d-flex justify-content-between'>
          <Link to={`/details${params}/${item.id}`} onClick={()=>setitem(item)}>
            <HiOutlineArrowsExpand className='fs-3 mt-1 icon-color' />
          </Link>
          <div onClick={() => setfavicon(!favicon)}>{favicon ? <BsHeartFill className='fs-3 mt-1 icon-color' /> : <BsHeart className='fs-3 mt-1 icon-color' />}</div>
        </div>
        <img src={item.image} className='w-75 d-block m-auto img-height ' />
        <h5 className='text-height '>{item.title}</h5>
        <h5>Rate Item :</h5>
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={3} precision={0.5} />
    </Stack>
        <h5>{item.price} EGP</h5>
        <button type="button" className="btn btn-outline-success d-block w-75 m-auto my-4">Add to Cart</button>
      </div>
    </div>
  )
}

