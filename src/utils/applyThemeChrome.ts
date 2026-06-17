export const THEME_COLORS = {
    light: '#f8ea9f',
    dark: '#1f2937',
} as const;

export type AppTheme = keyof typeof THEME_COLORS;

export function applyThemeChrome(theme: AppTheme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;

    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute('content', THEME_COLORS[theme]);

    const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (appleStatusBarMeta) {
        appleStatusBarMeta.setAttribute(
            'content',
            theme === 'dark' ? 'black-translucent' : 'default',
        );
    }
}
