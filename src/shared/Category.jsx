import React from 'react';
import { useContext } from 'react';
import { dataApiContext } from '../context/ApiContext';
import Sidebar from "../shared/sidebar/Sidebar";
import "./Category.css";
import CardItem from '../shared/CardItem';

export default function Category() {
    
  let {category} = useContext(dataApiContext);
  let {params} = useContext(dataApiContext);


  return (
    
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-3'>
          <Sidebar/>
        </div>
        <div className='col-md-9'>
        <div className='row p-3 g-3'>
     {category.map((item)=> (
    
        <CardItem key={item.id} item={item} params={params} />
     ))}
      </div>
        </div>
        </div>
        </div>
      )
  
}
