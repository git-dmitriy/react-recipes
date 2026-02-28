import { render } from '@testing-library/react';
import { ScrollToTop } from './ScrollToTop';
import { MemoryRouter } from 'react-router-dom';
import { it, expect, vi, beforeEach } from 'vitest';

beforeEach(() => {
    vi.clearAllMocks();
});

it('calls window.scrollTo when no .content container exists', () => {
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo;

    render(
        <MemoryRouter initialEntries={['/']}>
            <ScrollToTop />
        </MemoryRouter>
    );

    expect(scrollTo).toHaveBeenCalledTimes(1);
    expect(scrollTo).toHaveBeenCalledWith({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

it('scrolls the .content element when it exists in the DOM', () => {
    const windowScrollTo = vi.fn();
    window.scrollTo = windowScrollTo;

    const contentScrollTo = vi.fn();
    const content = document.createElement('div');
    content.className = 'content';
    content.scrollTo = contentScrollTo;
    document.body.appendChild(content);

    render(
        <MemoryRouter initialEntries={['/category/Beef']}>
            <ScrollToTop />
        </MemoryRouter>
    );

    expect(contentScrollTo).toHaveBeenCalledTimes(1);
    expect(contentScrollTo).toHaveBeenCalledWith({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
    expect(windowScrollTo).not.toHaveBeenCalled();

    document.body.removeChild(content);
});

it('renders nothing', () => {
    const { container } = render(
        <MemoryRouter initialEntries={['/']}>
            <ScrollToTop />
        </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
});
