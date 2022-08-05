import { Container } from '@mui/system';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';

const CartList = () => {
  const { cart, addOneMore, deleteOneMore, deleteItem, totalPrice, clearAll } =
    useContext(CartContext);

  const { setModal } = ModalContext();

  return !cart || cart.length === 0 ? (
    <div className="text-center p-5 m-5">
      <h1 className="p-5 text-color">Cart Is Empty </h1>
    </div>
  ) : (
    <Container className="shadow">
      <div className="row px-2 border-bottom py-3">
        <p className="col-6 fw-bold">Item</p>
        <p className="col-2 fw-bold">Price</p>
        <p className="col-2 fw-bold ">Quantity</p>
        <p className="col-2 fw-bold">Sub total</p>
      </div>
      {cart.map((item) => (
        <div className="border-bottom" key={item.id}>
          <div className="row py-3 d-flex flex-row align-items-center ">
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <img src={item.image} className="w-100 " alt={item.id} />
                </div>
                <p className="col-6 ">{item.title}</p>
              </div>
            </div>
            <p className="col-2 ">{item.price} EGP</p>
            <div className="col-2 d-flex flex-row ">
              <AiFillPlusCircle
                onClick={() => addOneMore(item.id)}
                size={30}
                className="text-color"
                style={{ cursor: 'pointer' }}
              />
              <p className="px-2 text-bold fs-5">{item.quantity}</p>
              <AiFillMinusCircle
                onClick={() => deleteOneMore(item.id)}
                size={30}
                color="darkred"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="col-2">
              {(item.price * item.quantity).toFixed(2)} EGP
            </p>
          </div>
          <div
            onClick={() => deleteItem(item.id)}
            style={{ cursor: 'pointer' }}
            className=" d-flex flex-row align-items-end justify-content-end py-2"
          >
            <MdDeleteForever size={20} color="red" />
            <p className="mb-0">Remove</p>
          </div>
        </div>
      ))}
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>
          <button
            onClick={() => setModal('buyNow')}
            className=" btn btn-outline-success fs-5 text-bold p-2 "
          >
            Order Now : {totalPrice()} EGP
          </button>
        </h2>

        <button
          className="btn btn-outline-danger addBtn  px-5 my-3 mx-3"
          onClick={clearAll}
        >
          Clear cart
        </button>
      </div>
    </Container>
  );
};

export default CartList;
