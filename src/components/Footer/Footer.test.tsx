import {Footer} from '@components/Footer';
import {render, screen, cleanup} from '@testing-library/react';
import {afterEach, it, expect} from 'vitest'

afterEach(cleanup);

it('renders correctly', () => {
    const tree = render(<Footer/>);

    expect(tree).toMatchSnapshot();
});

it('show owner name', () => {
    render(<Footer/>);

    const ownerLink = screen.getByRole('link', {name: /dmitriy-shalberkin\.ru/i});

    expect(ownerLink).toBeInTheDocument();
    expect(ownerLink).toHaveAttribute('href', 'https://dmitriy-shalberkin.ru');
    expect(ownerLink).toHaveAttribute('target', '_blank');
    expect(ownerLink).toHaveAttribute('rel', 'noreferrer')
});

it('provide link to github', () => {
    render(<Footer/>);

    const githubLink = screen.getByRole('link', {name: 'GitHub account'});

    expect(githubLink.getAttribute('href')).toBe('https://github.com/git-dmitriy');
});

it('links to TheMealDB attribution', () => {
    render(<Footer/>);

    const link = screen.getByRole('link', {name: /recipe data by themealdb/i});

    expect(link).toHaveAttribute('href', 'https://www.themealdb.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
});

it('displays app version', () => {
    render(<Footer/>);

    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
});
