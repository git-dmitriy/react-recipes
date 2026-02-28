import { useRegisterSW } from 'virtual:pwa-register/react';

export const ReloadPrompt = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      if (registration) {
        setInterval(() => registration.update(), 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.warn('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-50 flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 shadow-lg"
      role="alert"
    >
      <p className="text-sm text-gray-700 dark:text-gray-200">
        {offlineReady
          ? 'App is ready to work offline.'
          : 'New content available.'}
      </p>
      <div className="flex gap-2">
        {needRefresh && (
          <button
            type="button"
            onClick={() => updateServiceWorker(true)}
            className="flex-1 rounded-lg bg-yellow-500 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-400"
          >
            Reload
          </button>
        )}
        <button
          type="button"
          onClick={close}
          className="rounded-lg border border-gray-300 dark:border-gray-500 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
