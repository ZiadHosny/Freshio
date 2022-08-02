import { Container } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';



const CartList = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, []);

  const [cartProduct, setcartProduct] = useState([
    {
      img: "https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg",
      price: "20",
    },
    {
      img: "https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg",
      price: "20",
    }
  ]);

  return (
    <Container className="shadow">
      <div className="row px-2 border-bottom py-3">
        <p className="col-6 fw-bold">Item</p>
        <p className="col-2 fw-bold">Price</p>
        <p className="col-2 fw-bold ">Quantity</p>
        <p className="col-2 fw-bold">Sub total</p>
      </div>
      {cartProduct.map((item, index) => (

        <div className="row py-3 d-flex flex-row align-items-center border-bottom" key={index}>
          <div className="col-6">
            <div className="row">
              <div className="col-3"><img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg" className="w-100 " alt="/" /></div>
              <p className="col-6 ">product title</p>
              <div className="col-3  d-flex flex-row align-items-end">
                <MdDeleteForever size={20} color="red" />
                <p className="mb-0">Remove</p>
              </div>
            </div>
          </div>
          <p className="col-2 ">50  EGB</p>
          <div className="col-2 d-flex flex-row ">
            <AiFillPlusCircle size={30} />
            <p className="px-2 ">5</p>
            <AiFillMinusCircle size={30} />
          </div>
          <p className="col-2">
            500 EGB
          </p>
        </div>
      ))}
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className=" py-2">Total price: 500 EGP</div>
        <button className="btn btn-outline-danger addBtn px-5 my-3 mx-3">
          Clear cart
        </button>
      </div>

    </Container>
  );
};

export default CartList;
