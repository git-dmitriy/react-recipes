# React Recipes

A web app for browsing recipes: meal categories, search by name or ingredient, filter by country, and recipe pages with ingredients and video. Favorites and theme are stored locally; the app can be installed as a PWA and used offline.

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

| Category        | Technology           |
|-----------------|----------------------|
| UI              | React 19, TypeScript |
| Build           | Vite 7, SWC          |
| Styles          | Tailwind CSS 4       |
| Animation       | Motion               |
| Routing         | React Router 7       |
| Server state    | TanStack React Query |
| Global state    | Zustand              |
| PWA             | vite-plugin-pwa, Workbox |
| Tests           | Vitest, Testing Library |
| Linting         | ESLint 9 (flat config) |

Recipe data is provided by [TheMealDB API](https://www.themealdb.com/api.php).

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
npm test         # run tests
npm run coverage # test coverage report
```

## Project structure

```
src/
├── main.tsx           # entry point
├── App.tsx            # routing and app shell
├── appTypes.ts        # shared types
├── api-utils.ts       # TheMealDB API client
├── queryOptions.ts    # shared React Query options
├── store/
│   └── useAppStore.ts # Zustand: favorites, theme, loading
├── pages/             # pages (categories, recipe, search, favorites, etc.)
├── components/       # reusable components
├── context/           # context types and constants (legacy)
├── hooks/             # custom hooks
└── assets/            # static assets
```

## Install and run

```bash
npm install
npm run dev
```

The app will be available at the URL shown by Vite (usually `http://localhost:5173`).

## License

Private.
