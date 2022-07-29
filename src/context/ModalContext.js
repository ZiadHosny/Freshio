import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState('');

  return (
    <Context.Provider value={{ modal, setModal }}>{children}</Context.Provider>
  );
};

export const ModalContext = () => {
  return useContext(Context);
};
