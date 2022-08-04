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
  const { user } = UserAuth();

  const itemID = doc(db, 'users', `${user?.email}`);

  const [favoritesItems, setFavoritesItems] = useState([]);

  const found = async (item) => {
    if (user?.email) {
      let dataFromDB = await getDoc(itemID);
      let find = dataFromDB.data().favorites.find((e) => {
        return e.id === item.id;
      });

      console.log(find);
      if (find) {
        return true;
      } else {
        return false;
      }
    }
  };

  const saveItem = async (item, isFav) => {
    let data = await getDoc(itemID);
    let dataFromDB = data.data().favorites;
    if (!isFav) {
      dataFromDB.push(item);
      await updateDoc(itemID, {
        favorites: dataFromDB,
      });
    } else {
      console.log('item');
      try {
        const result = dataFromDB.filter((e) => {
          return item.id !== e.id;
        });

        await updateDoc(itemID, { favorites: result });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    onSnapshot(itemID, (doc) => {
      setFavoritesItems(doc.data()?.favorites);
    });
  }, [itemID]);

  return (
    <FavoritesContext.Provider value={{ favoritesItems, found, saveItem }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
