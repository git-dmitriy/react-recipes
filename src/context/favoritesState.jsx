import React, { useReducer } from 'react';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from 'context/types';
import { FavoriteContext } from 'context/favoritesContext';
import { favoriteReducer } from 'context/favoritesReducer';

export const FavoritesState = ({ children }) => {
  const favorites = window.localStorage.getItem('favorites');
  const initialState = {
    favorites: JSON.parse(favorites) || [],
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
