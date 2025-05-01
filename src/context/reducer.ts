import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    SWITCH_THEME,
    SET_IS_LOADING,
} from '@context/contextTypes.ts';
import {StateTypes, ActionTypes} from '@/appTypes';

export const reducer = (state: StateTypes, action: ActionTypes) => {
    let favorites = null;
    switch (action.type) {
        case ADD_TO_FAVORITE:
            favorites = [...state.favorites, action.payload];
            window.localStorage.setItem('favorites', JSON.stringify(favorites));
            return {...state, favorites};

        case REMOVE_FROM_FAVORITE:
            favorites = state.favorites.filter(
                (item) => item.idMeal !== action.payload.idMeal
            );
            window.localStorage.setItem('favorites', JSON.stringify(favorites));
            return {...state, favorites};

        case SWITCH_THEME:
            window.localStorage.setItem('theme', action.payload);
            return {
                ...state,
                theme: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
};
