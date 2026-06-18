import {Theme} from './Theme';
import {useAppStore} from '@/store/useAppStore';
import {render} from '@testing-library/react';
import {beforeEach, describe, expect, it} from 'vitest';

function ensureThemeMetaTags() {
    if (!document.querySelector('meta[name="theme-color"]')) {
        const themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        themeColor.setAttribute('content', '#f8ea9f');
        document.head.appendChild(themeColor);
    }

    if (!document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')) {
        const appleStatusBar = document.createElement('meta');
        appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
        appleStatusBar.setAttribute('content', 'default');
        document.head.appendChild(appleStatusBar);
    }
}

beforeEach(() => {
    useAppStore.setState({theme: 'light', favorites: []});
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = '';
    ensureThemeMetaTags();
});

describe('Theme', () => {
    it('should render html without dark class in light mode', () => {
        useAppStore.setState({theme: 'light'});
        render(<Theme/>);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it("should add 'dark' class to html in dark mode", () => {
        useAppStore.setState({theme: 'dark'});
        render(<Theme/>);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('updates theme-color meta for light theme', () => {
        useAppStore.setState({theme: 'light'});
        render(<Theme/>);

        expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#f8ea9f');
        expect(document.documentElement.style.colorScheme).toBe('light');
    });

    it('updates theme-color meta for dark theme', () => {
        useAppStore.setState({theme: 'dark'});
        render(<Theme/>);

        expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#1f2937');
        expect(document.documentElement.style.colorScheme).toBe('dark');
        expect(
            document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.getAttribute('content'),
        ).toBe('black-translucent');
    });
});
