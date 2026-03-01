import {NotFound} from './NotFound';
import {useAppStore} from '@/store/useAppStore';
import {MemoryRouter} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import {getRandomMeal} from '@/api-utils';
import {it, expect, vi, beforeEach} from 'vitest';
import '@testing-library/jest-dom';

vi.mock('@/api-utils', (): { getRandomMeal: typeof getRandomMeal } => ({
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

beforeEach(() => {
    useAppStore.setState({favorites: [], theme: 'light', isLoading: false});
});

it('should render correctly', () => {
    const tree = render(
        <MemoryRouter>
            <NotFound target=""/>
        </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
});

it('should load random meal', async () => {
    const target = 'Delicious dish';
    const meal = 'Roast fennel and aubergine paella';

    render(
        <MemoryRouter>
            <NotFound target={target}/>
        </MemoryRouter>
    );

    const searchMeal = screen.getByRole('heading');
    expect(searchMeal).toBeInTheDocument();

    await waitFor(() => {
        const randomMealTitle = screen.getByText(meal);
        expect(randomMealTitle).toBeInTheDocument();
    });
});
