import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div className="container">
      <div style={{color:"#0a472e"}} className='row py-5'>
        <div className='col-md-3'>

          <div className='d-flex shadow py-4'>
            <Stack className='col-md-6' direction="row" spacing={2}>
              <Avatar style={{ width: 85, height: 85, fontSize: 40, marginLeft: 15 }} sx={{ bgcolor: "#0a472e" }}>KH</Avatar>
            </Stack>

            <div className='col-md-6 me-5 d-flex align-items-center '>
              <h6 className='fs-6'>Khaled Mohamed</h6>
            </div>
          </div>

          <div className=' py-5 my-5 shadow'>

            <div style={{ marginLeft: 5, fontSize: 25 }} className='d-flex align-items-center'>
              <BsFillPersonFill className='col-md-2' />
              <h5 className='col-md-10'>User Profile</h5>
            </div>

           <Link style={{color:"#0a472e"}} to={'/cartList'}> <div style={{ marginLeft: 5, fontSize: 25 }} className='d-flex align-items-center my-4'>
              <BsFillCartFill className='col-md-2' />
              <h5 className='col-md-10'>My Cart</h5>
            </div>
            </Link>


            <Link style={{color:"#0a472e"}} to={'/favoritesList'}>  <div style={{ marginLeft: 5, fontSize: 25 }} className='d-flex align-items-center'>
              <BsHeartFill className='col-md-2' />
              <h5 className='col-md-10'>My Favorites</h5>
            </div>
            </Link>

          </div>


        </div>

        <div className='col-md-8 offset-md-1'>
          <div className='p-3 shadow'>

            <h1>Personal Information</h1>
            <div>
              <label for="name" className="form-label">User Name :</label>
              <input type="text" name="name" className="form-control" placeholder="User Name" required />
            </div>
            <div className="mt-3">
              <label for="email" className="form-label">Email Address :</label>
              <input type="text" name="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mt-3">
              <label for="password" className="form-label">Password :</label>
              <input type="password" name="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="mt-3">
              <label for="number" className="form-label">Mobile Phone :</label>
              <input type="number" name="phone" className="form-control" placeholder="Mobile Phone" required />
            </div>

            <button type="button" className="btn btn-outline-success my-4">Save Changes</button>

          </div>
        </div>
      </div>
    </div>
  )
}
