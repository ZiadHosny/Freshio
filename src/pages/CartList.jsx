import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const CartList = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, []);

  return <div>cartList</div>;
};

export default CartList;
