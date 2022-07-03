import renderer from 'react-test-renderer';
import { Loader } from './Loader';
import { AppContext } from 'context/AppContext';

const context = {
  state: {
    favorites: [],
    theme: 'light',
    isLoading: false,
  },
  addToFavorites: jest.fn(),
  removeFromFavorites: jest.fn(),
  switchTheme: jest.fn(),
  setIsLoading: jest.fn(),
};

it('should render transparent loader when loading is false', () => {
  const tree = renderer
    .create(
      <AppContext.Provider value={context}>
        <Loader />
      </AppContext.Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should show loader when loading', () => {
  const context = {
    state: {
      favorites: [],
      theme: 'light',
      isLoading: true,
    },
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
    switchTheme: jest.fn(),
    setIsLoading: jest.fn(),
  };

  const tree = renderer
    .create(
      <AppContext.Provider value={context}>
        <Loader />
      </AppContext.Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
