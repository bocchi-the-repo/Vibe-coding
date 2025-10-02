# vue_app_v0.2

This is a minimal Vite + Vue 3 + TypeScript project scaffold created to match the requested structure.

Project structure

```
vue_app_v0.2/
├─ public/              # Static assets served as-is (index.html, images, etc.)
├─ src/
│  ├─ assets/           # Static assets used by source (images, styles)
│  ├─ views/            # Page-level Vue components (Home.vue, etc.)
│  ├─ router/           # TypeScript-based vue-router setup (index.ts)
│  ├─ App.vue           # Root component
│  └─ main.ts           # App bootstrap
├─ tsconfig.json        # TypeScript configuration
├─ vite.config.ts       # Vite configuration
├─ package.json         # npm scripts + dependencies
└─ README.md            # This file
```

How to use

1. Install dependencies:

   npm install

2. Run dev server:

   npm run dev

3. Build for production:

   npm run build

Notes

- Router is implemented in TypeScript at `src/router/index.ts`.
- Static public files belong in the `public` folder and are referenced at the root (`/`).

Step 2 — Front-end design updates

Changes made for Step 2:

- Added a HOBI logo at `src/assets/hobi-logo.svg` (pink gradient background).
- Created `src/views/Login.vue` — a login screen with logo, "Welcome to HOBI", username/password fields and a Login button which redirects to the home page.
- Updated `src/views/Home.vue` to show a simple English "home" page.
- Updated router (`src/router/index.ts`) to use `/` as login route and `/home` as the homepage.

Step 3 — Front-end subscription interface

Changes made for Step 3:

- Added three section views under `src/views/`: `Animation.vue`, `Live.vue`, and `Movies.vue` (each contains the section name as the primary content).
- Reworked `src/views/Home.vue` into a two-column layout with a left sidebar and main content area. The left sidebar has a white background and shows user information (avatar and name) at the top.
- Added three navigation buttons in the sidebar (display order: Animation, Live Streaming, Movies). Buttons are bold black text and located below the user info.
- The homepage (`/home`) now uses child routes for the three sections. The default navigation when entering `/home` is to the Animation section.
- Added a Logout button at the bottom of the left sidebar; clicking it redirects back to the login route `/`.
- Updated `src/router/index.ts` to register child routes for the sections and wired them to the new views. `Home` acts as the parent route hosting the sidebar and child `<router-view/>`.

Step 4 — Detailed page behavior

Changes made for Step 4:

- Animation & Movies pages:
   - Each page contains a "Currently following" area showing items the user follows.
   - A "Recommended" area appears below, with filters for Year and Genre. Recommendations update based on the selected year and genre.

- Live Streaming page:
   - Shows favorite streamers first. The top recommended live stream is displayed in a large player area.
   - Below the large player, a selectable list/grid of other recommended streams is available.

Research Assistant Email:
   youzenglong2002@gmail.com
   J.K.HUANG@my.cityu.edu.hk
