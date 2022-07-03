import { FavoriteToggle } from './FavoriteToggle';
import renderer from 'react-test-renderer';
import { AppContext } from 'context/AppContext';
import { fireEvent, render, screen } from '@testing-library/react';

const data = {
  idMeal: '52895',
  strMeal: 'English Breakfast',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
};

const addToFavorites = jest.fn();
const removeFromFavorites = jest.fn();

const context = {
  state: {
    favorites: [],
    theme: 'light',
    isLoading: false,
  },
  addToFavorites,
  removeFromFavorites,
  switchTheme: jest.fn(),
  setIsLoading: jest.fn(),
};

it('should render component without errors', () => {
  const tree = renderer
    .create(
      <AppContext.Provider value={context}>
        <FavoriteToggle meal={data} />
      </AppContext.Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should add item to favorites on click', () => {
  render(
    <AppContext.Provider value={context}>
      <FavoriteToggle meal={data} />
    </AppContext.Provider>
  );

  const favoriteToggler = screen.getByRole('button');

  fireEvent.click(favoriteToggler);

  expect(addToFavorites).toBeCalled();
});

it('should remove item from favorites on click', () => {
  const context = {
    state: {
      favorites: [
        {
          idMeal: '52895',
          strMeal: 'English Breakfast',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
        },
      ],
      theme: 'light',
      isLoading: false,
    },
    addToFavorites,
    removeFromFavorites,
    switchTheme: jest.fn(),
    setIsLoading: jest.fn(),
  };

  render(
    <AppContext.Provider value={context}>
      <FavoriteToggle meal={data} />
    </AppContext.Provider>
  );

  const favoriteToggler = screen.getByRole('button');

  fireEvent.click(favoriteToggler);

  expect(removeFromFavorites).toBeCalled();
});
