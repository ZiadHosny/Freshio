import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { DetailsContext } from '../context/DetailsContext';
import { CartContext } from '../context/CartContext';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ModalContext } from '../context/ModalContext';
import { FavoritesContext } from '../context/FavoritesContext';
import { UserAuth } from '../context/AuthContext';

export default function CardItem({ item }) {
  const [isFav, setIsFav] = useState(false);
  const { user } = UserAuth();

  const { setModal } = ModalContext();
  let { setitem } = useContext(DetailsContext);
  const { found, saveItem } = useContext(FavoritesContext);
  const { addToCartInFirebase } = useContext(CartContext);

  const addToCart = () => {
    addToCartInFirebase(item);
  };

  const saveItemInContext = () => {
    if (user?.email) {
      saveItem(item, isFav);
      setIsFav(!isFav);
    } else {
      setModal('login');
    }
  };

  useEffect(() => {
    found(item).then((e) => {
      setIsFav(e);
    });
  }, []);

  const viewDetails = () => {
    setModal('details');
    setitem(item);
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="border rounded p-3 ">
      <div className="d-flex justify-content-between">
        <HiOutlineArrowsExpand
          style={{ cursor: 'pointer' }}
          onClick={() => viewDetails()}
          className="fs-3 mt-1 icon-color"
        />

        <div onClick={saveItemInContext}>
          {isFav ? (
            <BsHeartFill
              style={{ cursor: 'pointer' }}
              className="fs-3 mt-1 icon-color"
            />
          ) : (
            <BsHeart
              style={{ cursor: 'pointer' }}
              className="fs-3 mt-1 icon-color"
            />
          )}
        </div>
      </div>
      <img
        src={item.image}
        className="w-75 d-block m-auto img-height "
        alt="img"
      />
      <h5 className="text-height text-center">
        {truncateString(item.title, 30)}
      </h5>

      <div className="d-flex justify-content-center">
        <h5 className="me-2">Rate :</h5>
        <Stack className="text-center" spacing={1}>
          <Rating name="half-rating" defaultValue={3} precision={0.5} />
        </Stack>
      </div>

      <div className="d-flex my-2 justify-content-center">
        <h5 className=" me-2 ">Calories : </h5>
        <h5 style={{ color: '#658f00' }}>{item.calories} Kcal</h5>
      </div>
      {item.sale ? (
        <div className="d-flex justify-content-center">
          <h5 className="text-decoration-line-through mx-2">
            {item.price} EGP
          </h5>
          <h5>{Math.floor(item.price * 0.8)} EGP</h5>
        </div>
      ) : (
        <h5 className="text-center">{item.price} EGP</h5>
      )}

      <button
        type="button"
        className="btn btn-outline-success d-block w-75 m-auto my-4"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
