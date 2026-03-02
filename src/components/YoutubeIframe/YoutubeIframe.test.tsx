import {render, screen, fireEvent} from '@testing-library/react';
import {YoutubeIframe} from './YoutubeIframe';
import {it, expect} from 'vitest';

it('returns null for empty src', () => {
    const {container} = render(<YoutubeIframe src=""/>);
    expect(container.firstChild).toBeNull();
});

it('returns null for invalid URL', () => {
    const {container} = render(<YoutubeIframe src="https://example.com/not-youtube"/>);
    expect(container.firstChild).toBeNull();
});

it('extracts video ID from watch URL and renders iframe when lazy is false', () => {
    render(
        <YoutubeIframe
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            lazy={false}
        />
    );
    const iframe = screen.getByTitle(/recipe video/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
        'src',
        expect.stringContaining('youtube-nocookie.com/embed/dQw4w9WgXcQ')
    );
});

it('extracts video ID from youtu.be short URL', () => {
    render(
        <YoutubeIframe
            src="https://youtu.be/dQw4w9WgXcQ"
            lazy={false}
        />
    );
    const iframe = screen.getByTitle(/recipe video/i);
    expect(iframe).toHaveAttribute(
        'src',
        expect.stringContaining('dQw4w9WgXcQ')
    );
});

it('accepts plain video ID', () => {
    render(<YoutubeIframe src="dQw4w9WgXcQ" lazy={false}/>);
    const iframe = screen.getByTitle(/recipe video/i);
    expect(iframe).toHaveAttribute(
        'src',
        expect.stringContaining('dQw4w9WgXcQ')
    );
});

it('shows LazyPlaceholder when lazy is true and loads iframe on click', async () => {
    render(<YoutubeIframe src="dQw4w9WgXcQ" lazy/>);
    expect(screen.queryByTitle(/recipe video/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', {name: /load recipe video/i})).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {name: /load recipe video/i}));

    expect(screen.getByTitle(/recipe video/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /load recipe video/i})).not.toBeInTheDocument();
});

it('uses custom title for iframe', () => {
    render(
        <YoutubeIframe
            src="dQw4w9WgXcQ"
            title="Custom video title"
            lazy={false}
        />
    );
    expect(screen.getByTitle('Custom video title')).toBeInTheDocument();
});

it('embed URL uses nocookie domain and query params', () => {
    render(<YoutubeIframe src="dQw4w9WgXcQ" lazy={false}/>);
    const iframe = screen.getByTitle(/recipe video/i);
    const src = iframe.getAttribute('src') ?? '';
    expect(src).toContain('youtube-nocookie.com');
    expect(src).toContain('rel=0');
    expect(src).toContain('modestbranding=1');
});
