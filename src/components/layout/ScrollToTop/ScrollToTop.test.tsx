import { render } from '@testing-library/react';
import { ScrollToTop } from './ScrollToTop';
import { MemoryRouter } from 'react-router-dom';

window.scrollTo = jest.fn();

it('should scroll to the top on render', () => {
  render(
    <MemoryRouter>
      <ScrollToTop />
    </MemoryRouter>
  );
  expect(window.scrollTo).toBeCalledTimes(1);
});
