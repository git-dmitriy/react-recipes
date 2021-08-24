import React, { useReducer } from 'react';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './types';
import { FavoriteContext } from './favoritesContext';
import { favoriteReducer } from './favoritesReducer';

export const FavoritesState = ({ children }) => {
  const initialState = {
    favorites: [],
  };

  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addToFavorites = (item) => {
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: item,
    });
  };

  const removeFromFavorites = (item) => {
    dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: item,
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        addToFavorites,
        removeFromFavorites,
        state,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
