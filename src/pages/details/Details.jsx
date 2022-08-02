import React, { useContext } from 'react';
import './Details.css';
import { BsHeart, BsCart } from 'react-icons/bs';
import { DetailsContext } from '../../context/DetailsContext';
import { Container } from '@mui/material';

const Details = ({ onClick }) => {
  let { item } = useContext(DetailsContext);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <Container className="ContainerModal" onClick={onClick}>
      <div className="row border shadow  rounded p-2 h-100">
        <div className="col-md-4">
          <img src={item.image} className="w-100 " alt="/" />
        </div>

        <div className="col-md-7 ml-5  offset-md-1 col-12">
          <p className="h2 fw-bold">{item.title}</p>
          <p className="mt-3">{item.price} EGP</p>
          <button className="btn btn-outline-success addBtn px-5 my-3 ">
            Add
          </button>
          <div className="mt-3">
            <BsHeart className=" fs-3" />
            <span className="ps-2 fs-20 link">add to wishlist</span>
            <BsCart className="ms-2 fs-3" />
            <span className="ps-2 link">add to cart</span>
          </div>
          <p className="h5 mt-4 fw-bold">Description</p>
          <p>{truncateString(item.body, 360)}</p>
        </div>
      </div>
    </Container>
  );
};
export default Details;
