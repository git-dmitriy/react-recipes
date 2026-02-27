import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    SWITCH_THEME,
    SET_IS_LOADING,
} from '@context/contextTypes';

export type CategoryItemTypes = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

export type CategoryLinkTypes = {
    country: string;
    category: string;
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

export type RecipeImageTypes = {
    imgLink?: string;
    altText: string;
};

export type StateTypes = {
    favorites: MealItemTypes[] | [];
    theme: string | 'light' | 'dark';
    isLoading: boolean;
};

export type ActionTypes =
    | { type: typeof ADD_TO_FAVORITE; payload: MealItemTypes }
    | { type: typeof REMOVE_FROM_FAVORITE; payload: MealItemTypes }
    | { type: typeof SWITCH_THEME; payload: 'light' | 'dark' }
    | { type: typeof SET_IS_LOADING; payload: boolean };

export type ContextTypes = {
    state: StateTypes;
    addToFavorites: (item: MealItemTypes) => void;
    removeFromFavorites: (item: MealItemTypes) => void;
    switchTheme: (mode: 'light' | 'dark') => void;
    setIsLoading: (status: boolean) => void;
};
