import React, { useContext, useState } from 'react';
import './Details.css';
import { BsHeart, BsCart, BsHeartFill } from 'react-icons/bs';
import { DetailsContext } from '../../context/DetailsContext';
import { Container } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { UserAuth } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

const Details = ({ onClick }) => {
  const [isFav, setIsFav] = useState(false);
  let { item } = useContext(DetailsContext);
  const { saveItem } = useContext(FavoritesContext);
  const { addToCartInFirebase } = useContext(CartContext);
  const { user } = UserAuth();
  const { setModal } = ModalContext();

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

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <Container className="DetailsModal" onClick={onClick}>
      <div className="row border shadow  rounded p-2 h-100">
        <div className="col-4 h-100">
          {item.nutrition ? (
            <>
              <img src={item.image} className="w-100 h-50" alt="/" />
              <img
                src={item.nutrition}
                className="w-100 h-50"
                alt={item.title}
              />
            </>
          ) : (
            <img src={item.image} className="w-100 h-50" alt="/" />
          )}
        </div>

        <div className="col-7 ml-5">
          <p className="h2 fw-bold mb-4">{item.title}</p>
          <div className="d-flex justify-content-between">
            {item.sale ? (
              <div className="d-flex">
                <h5 className="text-decoration-line-through ">
                  {item.price} EGP
                </h5>
                <h5 className="mx-2 text-color">
                  {Math.floor(item.price * 0.8)} EGP
                </h5>
              </div>
            ) : (
              <h5>{item.price} EGP</h5>
            )}
            {item.calories ? (
              <h5>
                <span className="text-color"> {item.calories}</span> Calories
              </h5>
            ) : null}
          </div>

          <div className="mt-3">
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
              <span className="ps-2 fs-20 link">Add To Favorites</span>
            </div>
          </div>
          {item.ProductData ? (
            <>
              <p className="h5 mt-4 fw-bold">Product Data</p>
              <div className="row">
                <p className="col-6">Flavor : {item.ProductData.Flavor}</p>
                <p className="col-6">Company : {item.ProductData.company}</p>
                <p className="col-6">
                  Formation : {item.ProductData.formation}
                </p>
                <p className="col-6">Serving : {item.ProductData.serving}</p>
                <p className="col-6">Weight : {item.ProductData.weight}</p>
              </div>
            </>
          ) : item.body ? (
            <>
              <p className="h5 mt-4 fw-bold">Description</p>
              <p style={{ height: '100px' }}>
                {truncateString(item.body, 300)}
              </p>
            </>
          ) : null}

          <button
            className="btn btn-outline-success addBtn px-3 my-3  font-weight-bold"
            onClick={addToCart}
          >
            Add To Cart <BsCart className="ms-2 fs-4" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Details;
