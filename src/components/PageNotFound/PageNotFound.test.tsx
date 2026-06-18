import {PageNotFound} from './PageNotFound';
import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {it, expect} from 'vitest';

it('renders page not found message', () => {
    render(
        <MemoryRouter>
            <PageNotFound/>
        </MemoryRouter>,
    );

    expect(screen.getByRole('heading', {name: /page not found/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /go to home/i})).toHaveAttribute('href', '/');
});
