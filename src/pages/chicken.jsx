import React, { useState } from 'react';
import { useContext } from 'react';
import { chickenApiContext } from '../context/ApiContext';
import Sidebar from "../shared/sidebar/Sidebar";
import "./Chicken.css";
import CardItem from '../shared/CardItem';

export default function Chicken() {

  let {chickens} = useContext(chickenApiContext);
 
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-3'>
      <Sidebar/>
    </div>
    <div className='col-md-9'>
    <div className='row p-3 g-3'>
 {chickens.map((item)=> (

    <CardItem key={item.id} item={item}/>
 ))}
  </div>
    </div>
    </div>
    </div>
  )
}
