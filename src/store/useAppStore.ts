import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import type {MealItemTypes} from '@/appTypes';

type Theme = 'light' | 'dark';

type AppState = {
    favorites: MealItemTypes[];
    theme: Theme;
    isLoading: boolean;
    addToFavorites: (item: MealItemTypes) => void;
    removeFromFavorites: (item: MealItemTypes) => void;
    switchTheme: (mode: Theme) => void;
    setIsLoading: (status: boolean) => void;
};

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            favorites: [],
            theme: 'light',
            isLoading: false,

            addToFavorites: (item) =>
                set((state) => ({
                    favorites: [...state.favorites, item],
                })),

            removeFromFavorites: (item) =>
                set((state) => ({
                    favorites: state.favorites.filter((f) => f.idMeal !== item.idMeal),
                })),

            switchTheme: (mode) => {
                if (mode === 'light' || mode === 'dark') {
                    set({theme: mode});
                }
            },

            setIsLoading: (status) => set({isLoading: status}),
        }),
        {
            name: 'app-storage',
            partialize: (state) => ({favorites: state.favorites, theme: state.theme}),
        }
    )
);
