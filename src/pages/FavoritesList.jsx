import React, { useContext } from 'react';
import CardItem from '../shared/CardItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';

import { FavoritesContext } from '../context/FavoritesContext';
import { AccountContext } from '../context/AccountContext';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const { favoritesItems } = useContext(FavoritesContext);
  const { userData } = useContext(AccountContext);

  return (
    <div  style={{ color: '#0a472e' }} className="container">
      <div className="row p-4">
      <div className="col-md-3 mb-5">
          <div className="shadow py-4">
            <div className='d-flex justify-content-between mb-5'>
            <Stack className="col-md-6 col-sm-6  " direction="row" spacing={2}>
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
        <div className="col-md-8  offset-md-1 shadow">
          <h2 className="text-center">My Favorite</h2>

          <div className="row p-3 gy-3">
            {favoritesItems ? (
              favoritesItems.map((item, index) => (
                <div key={index} className="col-md-6">
                  <CardItem item={item} />
                </div>
              ))
            ) : (
              <div>You didn't adding any Items</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;