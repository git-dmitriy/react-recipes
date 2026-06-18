import {ReloadPrompt} from './ReloadPrompt';
import {fireEvent, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {
    mockUpdateServiceWorker,
    resetRegisterState,
    setRegisterState,
} from '@/test/mocks/pwa-register';

describe('ReloadPrompt', () => {
    beforeEach(() => {
        resetRegisterState();
        vi.stubGlobal(
            'navigator',
            {
                ...navigator,
                serviceWorker: {
                    ready: Promise.resolve({
                        update: vi.fn(),
                    }),
                },
            },
        );
    });

    it('renders nothing when offline and refresh flags are false', () => {
        const {container} = render(<ReloadPrompt/>);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders offline ready message', () => {
        setRegisterState({offlineReady: true});
        render(<ReloadPrompt/>);
        expect(screen.getByText('App is ready to work offline.')).toBeInTheDocument();
    });

    it('renders refresh prompt and reloads on click', () => {
        setRegisterState({needRefresh: true});
        render(<ReloadPrompt/>);

        expect(screen.getByText('New content available.')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', {name: 'Reload'}));
        expect(mockUpdateServiceWorker).toHaveBeenCalledWith(true);
    });

    it('renders without error when service worker is unavailable', () => {
        vi.stubGlobal('navigator', {...navigator, serviceWorker: undefined});

        setRegisterState({needRefresh: true});
        render(<ReloadPrompt/>);

        expect(screen.getByText('New content available.')).toBeInTheDocument();
    });
});
