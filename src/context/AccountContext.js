import { doc, getDoc,  } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { UserAuth } from './AuthContext';

export let AccountContext = createContext([]);

export const AccountProvider = (props) => {
  const [userData, setUserData] = useState({});
  const { user } = UserAuth();
  const itemID = doc(db, 'users', `${user?.email}`);

  useEffect(() => {
    if (user?.email) {
      getDoc(itemID).then((res) => {
        setUserData(res.data().userData);
      });
    }
  }, [itemID, user?.email]);

  return (
    <AccountContext.Provider
      value={{
        userData,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};
