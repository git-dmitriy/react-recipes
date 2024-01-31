import renderer from 'react-test-renderer';
import {MealsList} from './MealsList';
import {MemoryRouter} from 'react-router-dom';
import {AppContext} from '@context/AppContext';
import {ContextTypes} from '@/appTypes';
import {it, expect} from 'vitest';

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
    const tree = renderer
        .create(
            <AppContext.Provider value={context as ContextTypes}>
                <MemoryRouter>
                    <MealsList meals={data}/>
                </MemoryRouter>
            </AppContext.Provider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
