import {InstallPrompt} from './InstallPrompt';
import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {beforeEach, describe, expect, it, vi} from 'vitest';

function renderInstallPrompt() {
    return render(
        <MemoryRouter>
            <InstallPrompt/>
        </MemoryRouter>,
    );
}

describe('InstallPrompt', () => {
    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
        vi.stubGlobal(
            'matchMedia',
            vi.fn().mockImplementation((query: string) => ({
                matches: query === '(display-mode: standalone)' ? false : false,
                media: query,
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
            })),
        );
    });

    it('does not render before install prompt is captured', () => {
        sessionStorage.setItem('pwa-page-views', '3');
        const {container} = renderInstallPrompt();
        expect(container).toBeEmptyDOMElement();
    });

    it('shows install banner after enough page views', async () => {
        sessionStorage.setItem('pwa-page-views', '2');

        renderInstallPrompt();

        const prompt = vi.fn().mockResolvedValue(undefined);
        const event = new Event('beforeinstallprompt') as Event & {
            prompt: () => Promise<void>;
            userChoice: Promise<{ outcome: 'accepted' }>;
        };
        event.preventDefault = vi.fn();
        event.prompt = prompt;
        event.userChoice = Promise.resolve({outcome: 'accepted'});

        window.dispatchEvent(event);

        expect(await screen.findByRole('dialog', {name: 'Install app'})).toBeInTheDocument();
        expect(screen.getByText(/Install React Recipes/i)).toBeInTheDocument();
    });

    it('dismisses install banner', async () => {
        sessionStorage.setItem('pwa-page-views', '3');
        renderInstallPrompt();

        const event = new Event('beforeinstallprompt') as Event & {
            prompt: () => Promise<void>;
            userChoice: Promise<{ outcome: 'dismissed' }>;
        };
        event.preventDefault = vi.fn();
        event.prompt = vi.fn();
        event.userChoice = Promise.resolve({outcome: 'dismissed'});

        window.dispatchEvent(event);

        fireEvent.click(await screen.findByRole('button', {name: 'Not now'}));
        expect(localStorage.getItem('pwa-install-dismissed')).toBe('true');
    });
});
