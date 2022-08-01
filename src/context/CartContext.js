import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from './AuthContext';

export let CartContext = createContext([]);

export function CartContextProvider(props) {
  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  const [cart, setToCart] = useState([]);

  const addToCartInFirebase = async (item) => {
    if (user?.email) {
      try {
        let dataFromDB = await getDoc(itemID);
        let allInCart = dataFromDB.data().inCart;
        const index = allInCart.findIndex((e) => {
          return item.id === e.id;
        });

        if (index === -1) {
          item['quantity'] = 1;
          allInCart.push(item);
        } else {
          allInCart[index].quantity += 1;
        }

        await updateDoc(itemID, { inCart: allInCart });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('please log in first');
    }
  };

  useEffect(() => {
    onSnapshot(itemID, (doc) => {
      setToCart(doc.data()?.inCart);
    });
  }, [itemID, user.email]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setToCart,
        addToCartInFirebase,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
