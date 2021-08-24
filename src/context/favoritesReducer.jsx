import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './types';

const handlers = {
  [ADD_TO_FAVORITE]: (state, { payload }) => {
    return {
      favorites: [...state.favorites, payload],
    };
  },
  [REMOVE_FROM_FAVORITE]: (state, { payload }) => ({
    favorites: state.favorites.filter((item) => item.idMeal !== payload.idMeal),
  }),
  DEFAULT: (state) => state,
};

export const favoriteReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
