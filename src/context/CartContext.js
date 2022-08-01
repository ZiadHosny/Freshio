import { doc, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from './AuthContext';

export let CartContext = createContext([]);

export function CartContextProvider(props) {
  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  const [cart, setToCart] = useState([]);

  useEffect(() => {
    onSnapshot(itemID, (doc) => {
      setToCart(doc.data()?.inCart);
    });
  }, [user?.email]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
