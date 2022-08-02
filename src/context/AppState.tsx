import React, { useReducer } from 'react';
import {
  ADD_TO_FAVORITE,
  SWITCH_THEME,
  REMOVE_FROM_FAVORITE,
  SET_IS_LOADING,
} from 'context/types';
import { AppContext } from 'context/AppContext';
import { reducer } from 'context/reducer';
import { StateTypes, MealItemTypes, ContextTypes } from 'appTypes';

type P = { children: React.ReactNode };

export const AppState = ({ children }: P) => {
  const favorites = window.localStorage.getItem('favorites') || '[]';

  const initialState: StateTypes = {
    favorites: JSON.parse(favorites),
    theme: window.localStorage.getItem('theme') || 'light',
    isLoading: false,
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

  const setIsLoading = (status = false) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: status,
    });
  };

  const value: ContextTypes = {
    addToFavorites,
    removeFromFavorites,
    switchTheme,
    setIsLoading,
    state,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
