import {MealsList} from './MealsList';
import {MemoryRouter} from 'react-router-dom';
import {AppContext} from '@context/AppContext';
import {ContextTypes} from '@/appTypes';
import {it, expect} from 'vitest';
import {render} from "@testing-library/react";

const context = {
    state: {
        theme: 'light',
        favorites: []
    },
};

const data = [
    {
        idMeal: '52965',
        strMeal: 'Breakfast Potatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
    },
];

it('should render correctly', () => {
    const tree = render(
        <AppContext.Provider value={context as ContextTypes}>
            <MemoryRouter>
                <MealsList meals={data}/>
            </MemoryRouter>
        </AppContext.Provider>
    )

    expect(tree).toMatchSnapshot();
});
