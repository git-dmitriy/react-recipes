/// <reference lib="webworker" />
import {clientsClaim} from 'workbox-core'
import {CacheableResponsePlugin} from 'workbox-cacheable-response'
import {ExpirationPlugin} from 'workbox-expiration'
import {cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching'
import {registerRoute, NavigationRoute} from 'workbox-routing'
import {CacheFirst, NetworkFirst} from 'workbox-strategies'

type PrecacheManifestEntry = string | {
    url: string;
    revision?: string | null;
};

declare let self: ServiceWorkerGlobalScope & {
    __WB_MANIFEST: PrecacheManifestEntry[];
}

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST || [])

cleanupOutdatedCaches()

const handler = createHandlerBoundToURL('/index.html')
const navigationRoute = new NavigationRoute(handler, {
    denylist: [/^\/api\//],
})
registerRoute(navigationRoute)

registerRoute(
    ({url}) => url.origin === 'https://www.themealdb.com' && url.pathname.startsWith('/api/'),
    new NetworkFirst({
        cacheName: 'themealdb-api',
        networkTimeoutSeconds: 10,
        plugins: [
            new CacheableResponsePlugin({statuses: [0, 200]}),
            new ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60,
                purgeOnQuotaError: true,
            }),
        ],
    }),
)

registerRoute(
    ({url}) => url.origin === 'https://www.themealdb.com' && url.pathname.startsWith('/images/'),
    new CacheFirst({
        cacheName: 'themealdb-images',
        plugins: [
            new CacheableResponsePlugin({statuses: [0, 200]}),
            new ExpirationPlugin({
                maxEntries: 200,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true,
            }),
        ],
    }),
)
