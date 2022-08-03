import React, { useContext } from 'react';
import CardItem from '../shared/CardItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';

import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesList = () => {
  const { favoritesItems } = useContext(FavoritesContext);
  let params = window.location.pathname;

  console.log(favoritesItems);
  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-md-3">
          <div className="d-flex shadow py-4">
            <Stack className="col-md-6" direction="row" spacing={2}>
              <Avatar
                style={{ width: 100, height: 100, fontSize: 50 }}
                sx={{ bgcolor: '#0a472e' }}
              >
                KH
              </Avatar>
            </Stack>

            <div className="col-md-6 d-flex align-items-center ">
              <h1>khaled</h1>
            </div>
          </div>

          <div className=" py-5 my-5 shadow">
            <div
              style={{ marginLeft: 5, fontSize: 35 }}
              className="d-flex align-items-center"
            >
              <BsFillPersonFill className="col-md-2" />
              <h4 className="col-md-10">User Profile</h4>
            </div>

            <div
              style={{ marginLeft: 5, fontSize: 35 }}
              className="d-flex align-items-center my-4"
            >
              <BsFillCartFill className="col-md-2" />
              <h4 className="col-md-10">My Cart</h4>
            </div>

            <div
              style={{ marginLeft: 5, fontSize: 35 }}
              className="d-flex align-items-center"
            >
              <BsHeartFill className="col-md-2" />
              <h4 className="col-md-10">My Favorites</h4>
            </div>
          </div>
        </div>
        <div className="col-md-8 offset-md-1 shadow">
          <h2>My Favorite</h2>

          <div className="row p-3 gy-3">
            {favoritesItems
              ? favoritesItems.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <CardItem item={item} params={params} />
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
