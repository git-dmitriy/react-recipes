import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

const CACHE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // 7 days

const asyncStorage = {
    getItem: (key: string) => Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key: string, value: string) => {
        window.localStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key: string) => {
        window.localStorage.removeItem(key);
        return Promise.resolve();
    },
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: CACHE_MAX_AGE,
            staleTime: 1000 * 60 * 60, // 1 hour
        },
    },
});

export const persister = createAsyncStoragePersister({
    storage: asyncStorage,
    key: 'REACT_RECIPES_QUERY_CACHE',
    throttleTime: 1000,
});

export const persistMaxAge = CACHE_MAX_AGE;
