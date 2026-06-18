import {beforeEach, describe, expect, it} from 'vitest';
import {applyThemeChrome, THEME_COLORS} from './applyThemeChrome';

beforeEach(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = '';

    if (!document.querySelector('meta[name="theme-color"]')) {
        const themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColor);
    }

    if (!document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')) {
        const appleStatusBar = document.createElement('meta');
        appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
        appleStatusBar.setAttribute('content', 'default');
        document.head.appendChild(appleStatusBar);
    }
});

describe('applyThemeChrome', () => {
    it('applies light theme chrome', () => {
        applyThemeChrome('light');

        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(document.documentElement.style.colorScheme).toBe('light');
        expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe(THEME_COLORS.light);
    });

    it('applies dark theme chrome', () => {
        applyThemeChrome('dark');

        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(document.documentElement.style.colorScheme).toBe('dark');
        expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe(THEME_COLORS.dark);
        expect(
            document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.getAttribute('content'),
        ).toBe('black-translucent');
    });
});
