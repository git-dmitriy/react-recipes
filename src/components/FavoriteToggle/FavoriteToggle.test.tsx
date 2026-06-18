import {FavoriteToggle} from './FavoriteToggle';
import {useAppStore} from '@/store/useAppStore';
import {render, screen, fireEvent} from '@testing-library/react';
import {it, expect, beforeEach, describe} from 'vitest';

const meal = {
    idMeal: '52965',
    strMeal: 'Breakfast Potatoes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
};

describe('FavoriteToggle', () => {
    beforeEach(() => {
        useAppStore.setState({favorites: [], theme: 'light'});
    });

    it('adds meal to favorites with accessible label', () => {
        render(<FavoriteToggle meal={meal}/>);

        const addButton = screen.getByRole('button', {name: 'Add to favorites'});
        fireEvent.click(addButton);

        expect(useAppStore.getState().favorites).toHaveLength(1);
        expect(useAppStore.getState().favorites[0]?.idMeal).toBe(meal.idMeal);
        expect(screen.getByRole('button', {name: 'Remove from favorites'})).toBeInTheDocument();
    });

    it('removes meal from favorites', () => {
        useAppStore.setState({favorites: [meal], theme: 'light'});

        render(<FavoriteToggle meal={meal}/>);

        fireEvent.click(screen.getByRole('button', {name: 'Remove from favorites'}));

        expect(useAppStore.getState().favorites).toHaveLength(0);
    });
});
