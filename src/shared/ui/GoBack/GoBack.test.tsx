import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {createMemoryRouter, Router, RouterProvider} from 'react-router-dom';
import {GoBack} from './GoBack.tsx';
import {it, expect} from 'vitest';

it("shouldn't render on home route", () => {
    const history = createMemoryHistory();
    history.push('/');

    const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/events/123"],
        initialIndex: 1,
    });

    // render(
    //     <Router location={history.location} navigator={history}>
    //         <GoBack/>
    //     </Router>
    // );

    render(
        <RouterProvider router={router}>
            <GoBack/>
        </RouterProvider>
    );
    const button = screen.queryByRole('button');

    expect(button).toBeNull();
});

it('should render on non-home route', () => {
    const history = createMemoryHistory();
    history.push('/favorites');

    render(
        <Router location={history.location} navigator={history}>
            <GoBack/>
        </Router>
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
});

it('should navigate to previous location on click', () => {
    const history = createMemoryHistory();
    history.push('/favorites', {state: {from: '/'}});

    render(
        <Router location={history.location} navigator={history}>
            <GoBack/>
        </Router>
    );
    const button = screen.getByRole('button');

    fireEvent(button, new MouseEvent('click'));

    expect(history.location.pathname).toBe('/');
});
