import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useAppStore} from '@/store/useAppStore';

type BeforeInstallPromptEvent = Event & {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const DISMISS_KEY = 'pwa-install-dismissed';
const PAGE_VIEWS_KEY = 'pwa-page-views';

function isStandalone(): boolean {
    return (
        window.matchMedia('(display-mode: standalone)').matches
        || (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );
}

function getPageViews(): number {
    return Number(sessionStorage.getItem(PAGE_VIEWS_KEY) ?? '0');
}

export const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISS_KEY) === 'true');
    const favoritesCount = useAppStore((store) => store.favorites.length);
    const location = useLocation();

    useEffect(() => {
        if (isStandalone() || localStorage.getItem(DISMISS_KEY)) {
            return;
        }

        const handler = (event: Event) => {
            event.preventDefault();
            setDeferredPrompt(event as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    useEffect(() => {
        const views = getPageViews() + 1;
        sessionStorage.setItem(PAGE_VIEWS_KEY, String(views));
    }, [location.pathname]);

    const dismiss = () => {
        localStorage.setItem(DISMISS_KEY, 'true');
        setDismissed(true);
        setDeferredPrompt(null);
    };

    const install = async () => {
        if (!deferredPrompt) {
            return;
        }

        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        setDeferredPrompt(null);
    };

    const shouldShow = (
        !dismissed
        && !isStandalone()
        && deferredPrompt !== null
        && (favoritesCount >= 1 || getPageViews() >= 3)
    );

    if (!shouldShow) {
        return null;
    }

    return (
        <div
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-sm z-40 flex flex-col gap-2 rounded-xl border border-yellow-400 bg-yellow-50 dark:bg-gray-800 dark:border-yellow-500 p-4 shadow-lg"
            role="dialog"
            aria-label="Install app"
        >
            <p className="text-sm text-gray-800 dark:text-gray-100">
                Install React Recipes for faster access and offline favorites.
            </p>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => void install()}
                    className="flex-1 rounded-lg bg-yellow-500 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-400"
                >
                    Install
                </button>
                <button
                    type="button"
                    onClick={dismiss}
                    className="rounded-lg border border-gray-300 dark:border-gray-500 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Not now
                </button>
            </div>
        </div>
    );
};
