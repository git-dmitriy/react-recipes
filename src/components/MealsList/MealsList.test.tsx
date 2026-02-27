import {MealsList} from './MealsList';
import {MemoryRouter} from 'react-router-dom';
import {useAppStore} from '@/store/useAppStore';
import {it, expect, beforeEach} from 'vitest';
import {render} from '@testing-library/react';

beforeEach(() => {
    useAppStore.setState({favorites: [], theme: 'light', isLoading: false});
});

const data = [
    {
        idMeal: '52965',
        strMeal: 'Breakfast Potatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
    },
];

it('should render correctly', () => {
    const tree = render(
        <MemoryRouter>
            <MealsList meals={data}/>
        </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
});
