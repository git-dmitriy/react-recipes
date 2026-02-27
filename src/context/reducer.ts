import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    SWITCH_THEME,
    SET_IS_LOADING,
} from '@context/contextTypes.ts';
import {StateTypes, ActionTypes} from '@/appTypes';

export const reducer = (state: StateTypes, action: ActionTypes) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (item) => item.idMeal !== action.payload.idMeal
                ),
            };

        case SWITCH_THEME:
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
