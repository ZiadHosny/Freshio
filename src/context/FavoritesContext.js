import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from './AuthContext';

export let FavoritesContext = createContext([]);

export const FavoritesProvider = (props) => {
  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  const [favoritesItems, setFavoritesItems] = useState([]);

  useEffect(() => {
    onSnapshot(itemID, (doc) => {
      setFavoritesItems(doc.data()?.favorites);
    });
  }, [user?.email]);
  return (
    <FavoritesContext.Provider value={{ favoritesItems }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
