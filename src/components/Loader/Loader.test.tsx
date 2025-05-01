import {Loader} from './Loader';
import {AppContext} from '@/context/AppContext';
import {it, expect, vi} from 'vitest';
import {render} from "@testing-library/react";


const context = {
    state: {
        favorites: [],
        theme: 'light',
        isLoading: false,
    },
    addToFavorites: vi.fn(),
    removeFromFavorites: vi.fn(),
    switchTheme: vi.fn(),
    setIsLoading: vi.fn(),
};

it('should render transparent loader when loading is false', () => {
    const tree = render(
        <AppContext.Provider value={context}>
            <Loader/>
        </AppContext.Provider>
    )

    expect(tree).toMatchSnapshot();
});

it('should show loader when loading', () => {
    const context = {
        state: {
            favorites: [],
            theme: 'light',
            isLoading: true,
        },
        addToFavorites: vi.fn(),
        removeFromFavorites: vi.fn(),
        switchTheme: vi.fn(),
        setIsLoading: vi.fn(),
    };

    const tree = render(
        <AppContext.Provider value={context}>
            <Loader/>
        </AppContext.Provider>
    )

    expect(tree).toMatchSnapshot();
});
