import { Theme } from './Theme';
import { AppContext } from 'context/AppContext';
import { render } from '@testing-library/react';
import { ContextTypes } from 'appTypes';

it('should render html without classes', () => {
  const context = {
    state: {
      theme: 'light',
    },
  };

  render(
    <AppContext.Provider value={context as ContextTypes}>
      <Theme />
    </AppContext.Provider>
  );

  expect(document.documentElement).not.toHaveAttribute('class');
});

it("should add 'dark' class to html", () => {
  const context = {
    state: {
      theme: 'dark',
    },
  };

  render(
    <AppContext.Provider value={context as ContextTypes}>
      <Theme />
    </AppContext.Provider>
  );

  expect(document.documentElement).toHaveAttribute('class', 'dark');
});
