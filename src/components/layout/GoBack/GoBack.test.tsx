import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GoBack } from './GoBack';

it("shouldn't render on home route", () => {
  const history = createMemoryHistory();
  history.push('/');

  render(
    <Router location={history.location} navigator={history}>
      <GoBack />
    </Router>
  );
  const button = screen.queryByRole('button');

  expect(button).toBeNull();
});

it('should render on non-home route', () => {
  const history = createMemoryHistory();
  history.push('/favorites');

  render(
    <Router location={history.location} navigator={history}>
      <GoBack />
    </Router>
  );
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

it('should navigate to previous location on click', () => {
  const history = createMemoryHistory();
  history.push('/favorites', { state: { from: '/' } });

  render(
    <Router location={history.location} navigator={history}>
      <GoBack />
    </Router>
  );
  const button = screen.getByRole('button');

  userEvent.click(button);

  expect(history.location.pathname).toBe('/');
});
