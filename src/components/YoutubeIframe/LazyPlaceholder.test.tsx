import { render, screen, fireEvent } from '@testing-library/react';
import { LazyPlaceholder } from './LazyPlaceholder';
import { it, expect, vi } from 'vitest';

const videoId = 'dQw4w9WgXcQ';

it('renders button with correct aria-label', () => {
    render(<LazyPlaceholder videoId={videoId} onLoad={() => {}} />);
    expect(screen.getByRole('button', { name: /load recipe video/i })).toBeInTheDocument();
});

it('renders thumbnail image with maxresdefault URL', () => {
    const { container } = render(<LazyPlaceholder videoId={videoId} onLoad={() => {}} />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
});

it('calls onLoad when button is clicked', () => {
    const onLoad = vi.fn();
    render(<LazyPlaceholder videoId={videoId} onLoad={onLoad} />);
    fireEvent.click(screen.getByRole('button', { name: /load recipe video/i }));
    expect(onLoad).toHaveBeenCalledTimes(1);
});

it('switches to hqdefault on first thumbnail error, then calls onLoad on second error', () => {
    const onLoad = vi.fn();
    const { container } = render(<LazyPlaceholder videoId={videoId} onLoad={onLoad} />);
    const img = container.querySelector('img')!;
    expect(img).toHaveAttribute('src', `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
    expect(onLoad).not.toHaveBeenCalled();
    fireEvent.error(img);
    expect(onLoad).toHaveBeenCalledTimes(1);
});

it('matches snapshot', () => {
    const { container } = render(<LazyPlaceholder videoId={videoId} onLoad={() => {}} />);
    expect(container).toMatchSnapshot();
});
