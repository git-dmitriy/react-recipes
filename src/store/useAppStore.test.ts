import {useAppStore} from './useAppStore';
import {it, expect, beforeEach, describe} from 'vitest';

const meal = {
    idMeal: '52965',
    strMeal: 'Breakfast Potatoes',
    strMealThumb: 'https://example.com/meal.jpg',
};

describe('useAppStore', () => {
    beforeEach(() => {
        useAppStore.setState({favorites: [], theme: 'light'});
    });

    it('adds favorites without duplicates', () => {
        useAppStore.getState().addToFavorites(meal);
        useAppStore.getState().addToFavorites(meal);

        expect(useAppStore.getState().favorites).toHaveLength(1);
    });

    it('removes favorites by idMeal', () => {
        useAppStore.getState().addToFavorites(meal);
        useAppStore.getState().removeFromFavorites(meal);

        expect(useAppStore.getState().favorites).toHaveLength(0);
    });

    it('switches theme', () => {
        useAppStore.getState().switchTheme('dark');

        expect(useAppStore.getState().theme).toBe('dark');
    });

    it('ignores invalid theme values', () => {
        useAppStore.getState().switchTheme('dark');
        // @ts-expect-error testing invalid input
        useAppStore.getState().switchTheme('blue');

        expect(useAppStore.getState().theme).toBe('dark');
    });
});
