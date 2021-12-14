import React, { useReducer } from 'react';
import {
  ADD_TO_FAVORITE,
  SWITCH_THEME,
  REMOVE_FROM_FAVORITE,
} from 'context/types';
import { AppContext } from 'context/AppContext';
import { reducer } from 'context/reducer';

export const AppState = ({ children }) => {
  const favorites = window.localStorage.getItem('favorites');
  const initialState = {
    favorites: JSON.parse(favorites) || [],
    theme: window.localStorage.getItem('theme') || 'light',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
    <AppContext.Provider
      value={{
        addToFavorites,
        removeFromFavorites,
        switchTheme,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
