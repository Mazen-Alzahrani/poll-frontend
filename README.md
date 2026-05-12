# Poll Frontend (React + Vite)

A small React + Vite frontend for creating, voting and viewing poll results. Uses `react`, `react-router-dom`, `axios`, and `antd`.

## Prerequisites

- Node.js 18+ (or a recent LTS)
- npm or yarn

## Install

Install dependencies:

```
npm install
```

## Environment

This project can read the API base URL from an environment variable. An example env file is provided in `.env.example`.

By default the API base is hardcoded in `src/api/api.js`. To use an environment variable instead, update `src/api/api.js` like this:

```
const API = import.meta.env.VITE_API_URL || "https://2u8da14pbk.execute-api.us-east-1.amazonaws.com";
```

Create a local env file `./.env.local` (or `.env`) and set:

```
VITE_API_URL=https://your-api.example.com
```

Vite exposes variables starting with `VITE_` via `import.meta.env`.

## Scripts

- `npm run dev` — Start dev server with HMR
- `npm run build` — Build production bundle
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Run (development)

```
npm run dev
```

Open http://localhost:5173 (or the address shown by Vite).

## Build

```
npm run build
npm run preview
```

## Project structure (important files)

- `src/main.jsx` — app entry
- `src/App.jsx` — main app component
- `src/routes/AppRoutes.jsx` — routing
- `src/pages/` — page components (`CreatePoll`, `VotePoll`, `Results`)
- `src/api/api.js` — API helpers
- `src/components/` — header/footer and UI pieces

## Notes

- The project currently uses a public API base URL in `src/api/api.js`. Replace it with your own backend or configure `VITE_API_URL` as shown above.
- If you add secrets, never commit them. Use a local `.env.local` or environment variables in your deployment platform.

## Contributing

Feel free to open issues or submit PRs. Run `npm run lint` and ensure formatting and lint rules pass before submitting.

---
Generated README based on the repository contents and `src/api/api.js`.
