/// <reference lib="webworker" />
import {clientsClaim} from 'workbox-core'
import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching'
import {registerRoute, NavigationRoute} from 'workbox-routing'
import {NetworkFirst} from 'workbox-strategies'

type PrecacheManifestEntry = string | {
    url: string;
    revision?: string | null;
};

declare let self: ServiceWorkerGlobalScope & {
    __WB_MANIFEST: PrecacheManifestEntry[];
}

clientsClaim()
self.skipWaiting()

precacheAndRoute(self.__WB_MANIFEST || [])

cleanupOutdatedCaches()

const navigationRoute = new NavigationRoute(async ({request, url}) => {
    if (request.mode !== 'navigate') {
        return fetch(request)
    }
    if (url.pathname.startsWith('/api/')) {
        return fetch(request)
    }
    return fetch('/index.html')
})
registerRoute(navigationRoute)

registerRoute(
    ({url}) => url.origin === 'https://www.themealdb.com' && url.pathname.startsWith('/api/'),
    new NetworkFirst({
        cacheName: 'themealdb-api',
        networkTimeoutSeconds: 10,
    }),
)
