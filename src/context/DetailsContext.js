import React from 'react';
import { createContext, useState } from 'react';

export let DetailsContext = createContext([]);

export const DetailsProvider = (props) => {
  const [item, setitem] = useState({});

  return (
    <DetailsContext.Provider value={{ setitem, item }}>
      {props.children}
    </DetailsContext.Provider>
  );
};
