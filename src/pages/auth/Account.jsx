import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import { AccountContext } from '../../context/AccountContext';
import { Link } from 'react-router-dom';

export default function Account() {
  const { userData } = useContext(AccountContext);

  return userData ? (
    <div className="container">
      <div style={{ color: '#0a472e' }} className="row py-5">
        <div className="col-md-3 mb-5">
          <div className="shadow py-4">
            <div className='d-flex justify-content-between mb-5'>
            <Stack className="col-md-6 col-sm-6 " direction="row" spacing={2}>
              <Avatar
                style={{ width: 85, height: 85, fontSize: 40, marginLeft: 15 }}
                sx={{ bgcolor: '#0a472e' }}
              >
                {userData.firstName?.slice(0, 1).toUpperCase()}
                {userData.lastName?.slice(0, 1).toUpperCase()}
              </Avatar>
            </Stack>

            <div className="col-md-6 col-sm-6 me-5 d-flex align-items-center ">
              <h5 className="fs-6">
                {userData.firstName} {userData.lastName}
              </h5>
            </div>
            </div>

            <hr className='py-4'></hr>
        

            <Link
              to="/account"
              style={{ fontSize: 35 }}
              className="btn btn-outline-success d-block w-75 m-auto mb-4  d-flex align-items-center mb-2"
            >
              <BsFillPersonFill className="col-md-2" />
              <h4 className="col-md-10">User Profile</h4>
            </Link>

            <Link
              to="/cartList"
              style={{ fontSize: 35 }}
              className="btn btn-outline-success d-block w-75 m-auto  d-flex align-items-center "
            >
              <BsFillCartFill className="col-md-2" />
              <h4 className="col-md-10">My Cart</h4>
            </Link>


        
        </div>
        </div>

        <div className="col-md-8 offset-md-1">
          <div className="p-3 shadow">
            <h1>Personal Information</h1>
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={userData.firstName}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name :
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={userData.lastName}
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="form-label">
                Email Address :
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={userData.email}
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={userData.password}
                required
              />
            </div>

            <button type="button" className="btn btn-outline-success my-4">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}