# React Recipes

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A web app for browsing recipes: meal categories, search by name or ingredient, filter by country, and recipe pages with
ingredients and video. Favorites and theme are stored locally; the app can be installed as a PWA and used offline.

## Features

- **Categories** — list of meal categories (TheMealDB)
- **Recipes by category** — meals in a selected category with category description
- **Recipes by country** — filter by cuisine region
- **Search** — by meal name or ingredient
- **Recipe page** — name, photo, ingredients, instructions, video (YouTube)
- **Favorites** — add and remove recipes, persisted in localStorage
- **Theme** — light/dark, persisted in localStorage
- **PWA** — install on device, offline support, update prompt

## Stack

| Category     | Technology               |
|--------------|--------------------------|
| UI           | React 19, TypeScript     |
| Build        | Vite 7, SWC              |
| Styles       | Tailwind CSS 4           |
| Animation    | Motion                   |
| Routing      | React Router 7           |
| Server state | TanStack React Query     |
| Global state | Zustand                  |
| PWA          | vite-plugin-pwa, Workbox |
| Tests        | Vitest, Testing Library  |
| Linting      | ESLint 9 (flat config)   |

Recipe data is provided by [TheMealDB API](https://www.themealdb.com/api.php).

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
npm test         # run tests
npm run coverage # test coverage report
npm run generate-pwa-assets  # regenerate PNG/maskable icons from favicon.svg
npm run pwa:audit          # build and run Lighthouse PWA audit
```

## Project structure

```
src/
├── main.tsx              # entry point
├── App.tsx               # routing and app shell
├── appTypes.ts           # shared types
├── api-utils.ts          # TheMealDB API client
├── queryClient.ts        # React Query client and persist config
├── queryOptions.ts       # shared React Query options
├── sw.ts                 # service worker (PWA)
├── store/
│   └── useAppStore.ts    # Zustand: favorites, theme
├── pages/                # route pages
├── components/           # reusable components
│   ├── QueryBoundary/    # loading/error wrapper for queries
│   ├── OfflineBanner/    # offline status banner
│   ├── InstallPrompt/    # custom PWA install prompt
│   ├── ReloadPrompt/     # SW update / offline ready prompt
│   └── PageNotFound/     # 404 page
├── hooks/
│   └── useOnlineStatus.ts
├── utils/
│   ├── getMealIngredients.ts
│   └── isNetworkError.ts
└── assets/               # static assets
```

## Install and run

```bash
npm install
npm run dev
```

The app will be available at the URL shown by Vite (usually `http://localhost:5173`).

## PWA / Offline behavior

The app can be installed as a PWA. After the first visit, the service worker caches the app shell and may store API responses and meal images for offline use.

| Works offline | Does not work offline |
|---------------|------------------------|
| App shell and client-side routing | New search or uncached categories |
| Favorites (localStorage) | YouTube video playback |
| Previously viewed recipes (data + photos) | Random recipe suggestion on empty search |

To test offline mode: run `npm run build && npm run preview`, open the app, browse a few recipes, then enable offline in browser DevTools and reload.

## License

### Source code

This project's source code is licensed under the [MIT License](LICENSE).

### Third-party content (TheMealDB)

Recipe names, descriptions, images, and related metadata are loaded from the
[TheMealDB API](https://www.themealdb.com/api.php). This project does **not**
claim ownership of meal content. Users and deployers must comply with
TheMealDB's terms of use.

The PWA service worker ([`src/sw.ts`](src/sw.ts)) may cache API responses and
static assets for offline use (including the `themealdb-api` runtime cache).

### Open-source dependencies

Application dependencies (React, Vite, TanStack Query, Workbox, and others) are
listed in [`package.json`](package.json) and [`package-lock.json`](package-lock.json).
Icons are provided by [react-icons](https://react-icons.github.io/react-icons/) (MIT).
