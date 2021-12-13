import React, { useReducer } from 'react';
import {
  ADD_TO_FAVORITE,
  SWITCH_THEME,
  REMOVE_FROM_FAVORITE,
} from 'context/types';
import { FavoriteContext } from 'context/favoritesContext';
import { favoriteReducer } from 'context/favoritesReducer';

export const FavoritesState = ({ children }) => {
  const favorites = window.localStorage.getItem('favorites');
  const initialState = {
    favorites: JSON.parse(favorites) || [],
    theme: window.localStorage.getItem('theme') || 'light',
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

  const switchTheme = (mode) => {
    if (mode === 'light' || mode === 'dark') {
      dispatch({
        type: SWITCH_THEME,
        payload: mode,
      });
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        addToFavorites,
        removeFromFavorites,
        switchTheme,
        state,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
