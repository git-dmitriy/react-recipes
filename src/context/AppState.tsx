import React, { useReducer } from 'react';
import {
  ADD_TO_FAVORITE,
  SWITCH_THEME,
  REMOVE_FROM_FAVORITE,
} from 'context/types';
import { AppContext } from 'context/AppContext';
import { reducer } from 'context/reducer';
import { StateTypes, MealItemTypes, ContextTypes } from 'appTypes';

export const AppState: React.FC = ({ children }) => {
  const favorites = window.localStorage.getItem('favorites') || '[]';

  const initialState: StateTypes = {
    favorites: JSON.parse(favorites),
    theme: window.localStorage.getItem('theme') || 'light',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavorites = (item: MealItemTypes) => {
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: item,
    });
  };

  const removeFromFavorites = (item: MealItemTypes) => {
    dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: item,
    });
  };

  const switchTheme = (mode: string) => {
    if (mode === 'light' || mode === 'dark') {
      dispatch({
        type: SWITCH_THEME,
        payload: mode,
      });
    }
  };

  const value: ContextTypes = {
    addToFavorites,
    removeFromFavorites,
    switchTheme,
    state,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
