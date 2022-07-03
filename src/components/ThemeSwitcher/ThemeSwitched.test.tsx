import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppState } from 'context/AppState';
import { ThemeSwitcher } from './ThemeSwitcher';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppState>
        <ThemeSwitcher />
      </AppState>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should change theme on click', () => {
  render(
    <AppState>
      <ThemeSwitcher />
    </AppState>
  );

  const themeSwitcher = screen.getByRole('button');

  fireEvent.click(themeSwitcher);

  const icon = screen.getByText('', { selector: 'span' });

  // means change theme to dark
  expect(icon).toHaveClass('rotate-180');
});
