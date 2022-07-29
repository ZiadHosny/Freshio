import React , { useState } from 'react';
import {HiOutlineArrowsExpand} from "react-icons/hi";
import {BsHeart} from "react-icons/bs";
import{BsHeartFill} from "react-icons/bs";

export default function CardItem({item}) {
    const [favicon , setfavicon] = useState(false)
  return (
    <div className=' col-md-3'>
      
    <div className='border rounded p-3'>
    <div className='d-flex justify-content-between'>
    <HiOutlineArrowsExpand className='fs-3 mt-1 icon-color'/>
    <div onClick={()=>setfavicon(!favicon)}>{favicon?<BsHeartFill className='fs-3 mt-1 icon-color'/>:<BsHeart className='fs-3 mt-1 icon-color'/>}</div>
    </div>
    <img src={item.image} className='w-75 d-block m-auto img-height '/>
    <h5 className='text-height '>{item.title}</h5>
    <h5>{item.price}</h5>
    <button type="button" className="btn btn-outline-success d-block w-75 m-auto my-4">Add to Cart</button>
    </div>
  </div>
  )
}

