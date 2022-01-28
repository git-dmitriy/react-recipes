export type CategoryItemTypes = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type MealItemTypes = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strYoutube?: string;
};

export type RecipeItemTypes = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type StateTypes = {
  favorites: MealItemTypes[] | [];
  theme: string | 'light' | 'dark';
  isLoading: boolean;
};

export type ActionTypes =
  | { type: ADD_TO_FAVORITE; payload: MealItemTypes }
  | { type: REMOVE_FROM_FAVORITE; payload: MealItemTypes }
  | { type: SWITCH_THEME; payload: 'light' | 'dark' }
  | { type: SET_IS_LOADING; payload: boolean };

type ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
type REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
type SWITCH_THEME = 'SWITCH_THEME';
type SET_IS_LOADING = 'SET_IS_LOADING';

export type ContextTypes = {
  state: StateTypes;
  addToFavorites: (item: MealItemTypes) => void;
  removeFromFavorites: (item: MealItemTypes) => void;
  switchTheme: (mode: 'light' | 'dark') => void;
  setIsLoading: (status: boolean) => void;
};
