import React, { useEffect} from 'react';
import { useContext } from 'react';
import { subApiContext } from '../context/SubCategoryContext';
import Sidebar from "../shared/sidebar/Sidebar";
import "./Category.css";
import CardItem from './CardItem';

export default function SubCategory() {
  let params = window.location.pathname;
  let {subCategory , getSubData} = useContext(subApiContext);

  useEffect(()=>{

    getSubData(params)
    console.log(subCategory)
  }, [])
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-3'>
      <Sidebar/>
    </div>
    <div className='col-md-9'>
    <div className='row p-3 g-3'>
 { subCategory ? 
 subCategory.map((item)=> (
    <CardItem key={item.id} item={item} params={params} />
 ))   :
console.log(subCategory)
}
  </div>
    </div>
    </div>
    </div>
  )
}
