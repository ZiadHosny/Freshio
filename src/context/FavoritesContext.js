import {
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import React, { useEffect, createContext, useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from './AuthContext';
import { ModalContext } from './ModalContext';

export let FavoritesContext = createContext([]);

export const FavoritesProvider = (props) => {
  const [isFav, setIsFav] = useState(false);
  const { user } = UserAuth();
  const { setModal } = ModalContext();
  const itemID = doc(db, 'users', `${user?.email}`);

  const [favoritesItems, setFavoritesItems] = useState([]);

  const found = async (item) => {
    if (user?.email) {
      let dataFromDB = await getDoc(itemID);
      let find = dataFromDB.data().favorites.find((e) => {
        return e.id === item.id;
      });
      if (find) {
        return true;
      } else {
        return false;
      }
    }
  };

  const saveItem = async (item) => {
    if (user?.email) {
      setIsFav(!isFav);

      if (!isFav) {
        await updateDoc(itemID, {
          favorites: arrayUnion(item),
        });
      } else {
        try {
          let dataFromDB = await getDoc(itemID);
          const result = dataFromDB.data().favorites.filter((e) => {
            return item.id !== e.id;
          });

          await updateDoc(itemID, { favorites: result });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setModal('login');
    }
  };

  useEffect(() => {
    onSnapshot(itemID, (doc) => {
      setFavoritesItems(doc.data()?.favorites);
    });
  }, [itemID, user?.email]);
  return (
    <FavoritesContext.Provider
      value={{ favoritesItems, found, saveItem, isFav, setIsFav }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
