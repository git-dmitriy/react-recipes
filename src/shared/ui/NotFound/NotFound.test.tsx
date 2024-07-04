import {NotFound} from './NotFound.tsx';
import renderer from 'react-test-renderer';
import {AppContext} from '@app/context/AppContext.ts';
import {ContextTypes} from '@shared/model/appTypes/appTypes.ts';
import {MemoryRouter} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import {getRandomMeal} from '@shared/api/apiUtils';
import {it, expect, vi} from 'vitest';
import '@testing-library/jest-dom';

vi.mock('@shared/api/apiUtils', (): { getRandomMeal: typeof getRandomMeal } => ({
    getRandomMeal: () =>
        Promise.resolve({
            meals: [
                {
                    idMeal: '52942',
                    strMeal: 'Roast fennel and aubergine paella',
                    strCategory: 'Vegan',
                    strArea: 'Spanish',
                    strMealThumb:
                        'https://www.themealdb.com/images/media/meals/1520081754.jpg',
                },
            ],
        }),
}));

const setIsLoading = vi.fn();
const context = {
    state: {
        favorites: [],
        theme: 'light',
        isLoading: false,
    },
    setIsLoading,
    addToFavorites: vi.fn(),
    removeFromFavorites: vi.fn(),
    switchTheme: vi.fn(),
};

it('should render correctly', () => {
    const target = '';

    const tree = renderer
        .create(
            <>
                <AppContext.Provider value={context as ContextTypes}>
                    <MemoryRouter>
                        <NotFound target={target}/>
                    </MemoryRouter>
                </AppContext.Provider>
            </>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should load random meal', async () => {
    const target = 'Delicious dish';
    const meal = 'Roast fennel and aubergine paella';

    render(
        <AppContext.Provider value={context as ContextTypes}>
            <MemoryRouter>
                <NotFound target={target}/>
            </MemoryRouter>
        </AppContext.Provider>
    );

    const searchMeal = screen.getByRole('heading');

    expect(searchMeal).toBeInTheDocument();

    await waitFor(() => {
        const randomMealTitle = screen.getByText(meal);

        expect(randomMealTitle).toBeInTheDocument();
    });
});
