import {clientsClaim} from 'workbox-core'
import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching'
import {registerRoute, NavigationRoute} from 'workbox-routing'
import {NetworkFirst} from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope & {
    __WB_MANIFEST: any
}

// Take control of uncontrolled clients as soon as the SW activates
clientsClaim()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error skipWaiting is available in Service Worker global scope at runtime
self.skipWaiting()

// Precache files injected by workbox at build time
precacheAndRoute(self.__WB_MANIFEST || [])

// Clean up old precaches when manifest changes
cleanupOutdatedCaches()

// SPA navigation fallback to index.html (exclude API calls)
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

// Runtime caching for ThemealDB API
registerRoute(
    ({url}) => url.origin === 'https://www.themealdb.com' && url.pathname.startsWith('/api/'),
    new NetworkFirst({
        cacheName: 'themealdb-api',
        networkTimeoutSeconds: 10,
    }),
)

