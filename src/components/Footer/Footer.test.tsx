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
