import React, { useContext } from 'react';

import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesList = () => {
  const { favoritesItems } = useContext(FavoritesContext);

  console.log(favoritesItems);
  return <div>favorites</div>;
};

export default FavoritesList;
