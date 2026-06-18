import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import type {MealItemTypes} from '@/appTypes';

type Theme = 'light' | 'dark';

type AppState = {
    favorites: MealItemTypes[];
    theme: Theme;
    addToFavorites: (item: MealItemTypes) => void;
    removeFromFavorites: (item: MealItemTypes) => void;
    switchTheme: (mode: Theme) => void;
};

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            favorites: [],
            theme: 'light',

            addToFavorites: (item) =>
                set((state) =>
                    state.favorites.some((f) => f.idMeal === item.idMeal)
                        ? state
                        : {favorites: [...state.favorites, item]}
                ),

            removeFromFavorites: (item) =>
                set((state) => ({
                    favorites: state.favorites.filter((f) => f.idMeal !== item.idMeal),
                })),

            switchTheme: (mode) => {
                if (mode === 'light' || mode === 'dark') {
                    set({theme: mode});
                }
            },
        }),
        {
            name: 'app-storage',
            partialize: (state) => ({favorites: state.favorites, theme: state.theme}),
        }
    )
);
