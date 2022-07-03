import { Search } from './Search';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should render correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should navigate to search=${searchQuery} on click', () => {
  const history = createMemoryHistory();
  const searchQuery = 'beef';

  render(
    <Router location={history.location} navigator={history}>
      <Search />
    </Router>
  );

  const searchInput = screen.getByRole('searchbox');

  fireEvent.input(searchInput, { target: { value: searchQuery } });
  fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });

  const { pathname, search } = history.location;
  const path = pathname + search;

  expect(path).toBe(`/recipes?search=${searchQuery}`);
});

it('should stay at the same path on click', () => {
  const history = createMemoryHistory();
  const searchQuery = '';

  render(
    <Router location={history.location} navigator={history}>
      <Search />
    </Router>
  );

  const searchInput = screen.getByRole('searchbox');

  fireEvent.input(searchInput, { target: { value: searchQuery } });
  fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });

  const { pathname, search } = history.location;
  const path = pathname + search;

  expect(path).toBe('/');
});
