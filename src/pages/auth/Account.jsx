import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { AccountContext } from '../../context/AccountContext';
import { Link } from 'react-router-dom';

export default function Account() {
  const { userData } = useContext(AccountContext);

  return userData ? (
    <div className="container">
      <div style={{ color: '#0a472e' }} className="row py-5">
        <div className="col-md-3">
          <div className="d-flex shadow py-4">
            <Stack className="col-md-6" direction="row" spacing={2}>
              <Avatar
                style={{ width: 85, height: 85, fontSize: 40, marginLeft: 15 }}
                sx={{ bgcolor: '#0a472e' }}
              >
                {userData.firstName?.slice(0, 1).toUpperCase()}
                {userData.lastName?.slice(0, 1).toUpperCase()}
              </Avatar>
            </Stack>

            <div className="col-md-6 me-5 d-flex align-items-center ">
              <h6 className="fs-6">
                {userData.firstName} {userData.lastName}
              </h6>
            </div>
          </div>

          <div className=" py-5 my-5 shadow">
            <div
              style={{ marginLeft: 5, fontSize: 25 }}
              className="d-flex align-items-center"
            >
              <BsFillPersonFill className="col-md-2" />
              <h5 className="col-md-10">User Profile</h5>
            </div>

            <div
              style={{ marginLeft: 5, fontSize: 25 }}
              className="d-flex align-items-center my-4"
            >
              <BsFillCartFill className="col-md-2" />
              <h5 className="col-md-10">My Cart</h5>

              <Link style={{ color: '#0a472e' }} to={'/cartList'}>
                {' '}
                <div
                  style={{ marginLeft: 5, fontSize: 25 }}
                  className="d-flex align-items-center my-4"
                >
                  <BsFillCartFill className="col-md-2" />
                  <h5 className="col-md-10">My Cart</h5>
                </div>
              </Link>

              <div
                style={{ marginLeft: 5, fontSize: 25 }}
                className="d-flex align-items-center"
              >
                <BsHeartFill className="col-md-2" />
                <h5 className="col-md-10">My Favorites</h5>
              </div>

              <Link style={{ color: '#0a472e' }} to={'/favoritesList'}>
                {' '}
                <div
                  style={{ marginLeft: 5, fontSize: 25 }}
                  className="d-flex align-items-center"
                >
                  <BsHeartFill className="col-md-2" />
                  <h5 className="col-md-10">My Favorites</h5>
                </div>
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
                  value={userData.firstName}
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
    </div>
  ) : null;
}
