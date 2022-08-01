import React, { useEffect, useState} from 'react';
import { useContext } from 'react';
import { subApiContext } from '../context/SubCategoryContext';
import SubSidebar from "./sidebar/SubSidebar";
import "./Category.css";
import CardItem from './CardItem';
import { Skeleton } from '@mui/material';
import { BsExclamationSquare } from 'react-icons/bs';

export default function SubCategory() {
  let params = window.location.pathname;
  let {subCategory , getSubData} = useContext(subApiContext);

  
  const [subItems,setSubItems] = useState(subCategory);


  useEffect(()=>{
    getSubData(params);
  }, []);
  useEffect(()=>{
    setSubItems(subCategory);
  },[subCategory]);
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-3'>
      <SubSidebar />
    </div>
    <div className='col-md-9 text-center'>
    <div className='row p-3 g-3'>
 { 
 subItems
  ? 
  subItems.map((item,i)=> (
    <CardItem key={i} item={item} params={params} />
 ))   
 :
 <>
 <div className="row m-5">
  <div className="col-md-3">
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>

  </div>
  <div className="col-md-3">
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>

  </div>
  <div className="col-md-3">
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>

  </div>
  <div className="col-md-3">
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>

  </div>
 </div>
 </>
}
  </div>
    </div>
    </div>
    </div>
  )
}
