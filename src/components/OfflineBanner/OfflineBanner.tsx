import {useOnlineStatus} from '@/hooks/useOnlineStatus';

export const OfflineBanner = () => {
    const isOnline = useOnlineStatus();

    if (isOnline) {
        return null;
    }

    return (
        <div
            className="bg-yellow-500 text-gray-900 text-center text-sm py-2 px-4"
            role="status"
        >
            You&apos;re offline. Favorites and cached recipes are still available.
        </div>
    );
};
